/*
 * GA4 tracking for lrusso.it.
 *
 * What gets sent (all to G-Q55G0RTMMZ via gtag.js):
 *
 *   page_view            every page, including client-side navigations
 *                        (gtag's own automatic page_view is disabled so the
 *                        first page isn't counted twice)
 *   button_click         any element with data-analytics-event="button_click"
 *                        params: event_category, event_label, cta_location, link_url
 *   <custom name>        any other data-analytics-event value, same params
 *                        (e.g. outbound_project)
 *   click                outbound links (GA4's standard name)
 *                        params: link_url, link_domain, link_text, outbound
 *   file_download        links to .pdf and other files
 *                        params: file_name, file_extension, link_url, link_text
 *   contact_email_click  mailto: links. params: link_url, cta_location
 *   generate_lead        a call actually booked in the Calendly popup
 *                        params: method
 *   read_progress        blog posts at 25 / 50 / 75 / 100 % read
 *                        params: percent_scrolled, post_slug
 *
 * The automatic events are sent in code, not by GA4 enhanced measurement, so
 * they work regardless of the property settings. If enhanced measurement's
 * outbound clicks / file downloads get switched on in GA4 later, turn them
 * off again or the click and file_download events will be counted twice.
 */

export const GA_ID = 'G-Q55G0RTMMZ';

type Params = Record<string, string | number | boolean | undefined>;

export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}

export function trackPageView(url: string) {
  // let next/head swap the <title> before reading it
  window.setTimeout(() => {
    track('page_view', {
      page_location: window.location.origin + url,
      page_path: url.split('?')[0],
      page_title: document.title
    });
  }, 50);
}

const FILE_EXT = /\.(pdf|docx?|xlsx?|pptx?|csv|zip|epub)$/i;

/** Where on the page a click happened: nav / footer / section id / main. */
function locate(el: HTMLElement): string {
  if (el.closest('header')) return 'Header';
  if (el.closest('footer')) return 'Footer';
  const section = el.closest('section[id], section[data-analytics-section]') as HTMLElement | null;
  return section?.dataset.analyticsSection ?? section?.id ?? 'Main';
}

/** Delegated click handler: explicit CTAs plus automatic outbound / file / mailto events. */
export function handleDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null;
  if (!target) return;

  // 1. Explicit CTAs (data-analytics-* attributes)
  const cta = target.closest('[data-analytics-event]') as HTMLElement | null;
  if (cta) {
    const { analyticsEvent, analyticsLabel, analyticsCategory, analyticsLocation } = cta.dataset;
    track(analyticsEvent || 'button_click', {
      event_category: analyticsCategory || 'CTA',
      event_label: analyticsLabel || cta.textContent?.trim() || 'Unknown',
      cta_location: analyticsLocation || locate(cta),
      link_url: (cta as HTMLAnchorElement).href || undefined
    });
  }

  // 2. Automatic link events
  const link = target.closest('a[href]') as HTMLAnchorElement | null;
  if (!link) return;
  const text = (link.getAttribute('aria-label') || link.textContent || '').trim().slice(0, 100);

  if (link.protocol === 'mailto:') {
    track('contact_email_click', { link_url: link.href, cta_location: locate(link) });
    return;
  }

  let url: URL;
  try {
    url = new URL(link.href, window.location.href);
  } catch {
    return;
  }

  if (FILE_EXT.test(url.pathname)) {
    const fileName = url.pathname.split('/').pop() ?? '';
    track('file_download', {
      file_name: fileName,
      file_extension: fileName.split('.').pop()?.toLowerCase(),
      link_url: url.href,
      link_text: text
    });
    return;
  }

  if (/^https?:$/.test(url.protocol) && url.hostname !== window.location.hostname) {
    track('click', {
      link_url: url.href,
      link_domain: url.hostname,
      link_text: text,
      outbound: true
    });
  }
}

/** Calendly popup posts messages to the parent page; count completed bookings. */
export function handleCalendlyMessage(event: MessageEvent) {
  if (event.origin !== 'https://calendly.com') return;
  const name = (event.data as { event?: string } | null)?.event;
  if (name === 'calendly.event_scheduled') track('generate_lead', { method: 'calendly' });
}
