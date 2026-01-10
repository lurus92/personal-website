import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const GA_TRACKING_ID = 'G-XXXXXXXXXX';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        window.gtag('config', GA_TRACKING_ID, { page_path: url });
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest('[data-analytics-event]') as HTMLElement | null;
      if (!element || typeof window === 'undefined' || !('gtag' in window)) {
        return;
      }

      const { analyticsEvent, analyticsLabel, analyticsCategory, analyticsLocation } = element.dataset;
      window.gtag('event', analyticsEvent ?? 'button_click', {
        event_category: analyticsCategory ?? 'CTA',
        event_label: analyticsLabel ?? element.textContent ?? 'Unknown',
        value: analyticsLocation ?? ''
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    document.addEventListener('click', handleClick);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      document.removeEventListener('click', handleClick);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Luigi Russo | Analytics Leader & AI Product Builder</title>
        <meta
          name="description"
          content="Luigi Russo is a Zurich-based analytics leader and AI product builder. Explore his projects, consulting services, and writings on analytics and AI."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
