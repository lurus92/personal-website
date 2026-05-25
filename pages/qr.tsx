import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinksRow from '../components/SocialLinksRow';

const ctaItems = [
  {
    href: '/',
    label: 'Marketing Technology & Analytics',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9V4" strokeLinecap="round" />
        <path d="M4 20h16" strokeLinecap="round" />
      </svg>
    )
  },
  {
    href: '/projects',
    label: 'AI Ventures',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 4v10l-8 4-8-4V7l8-4z" strokeLinejoin="round" />
        <path d="M8.5 9.2L12 11l3.5-1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    href: 'https://www.lewisrussell.com/en?utm_source=landingpage&utm_medium=referral&utm_campaign=author_traffic&utm_content=author_button_primary',
    label: 'Fiction and Future Worlds',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3.5 12a8.5 8.5 0 1 0 17 0 8.5 8.5 0 1 0-17 0" />
        <path d="M4.8 8.5c2 1 4.6 1.5 7.2 1.5 2.7 0 5.3-.5 7.2-1.5" strokeLinecap="round" />
        <path d="M4.8 15.5c2-1 4.6-1.5 7.2-1.5 2.7 0 5.3.5 7.2 1.5" strokeLinecap="round" />
        <path d="M12 3.5c2.2 2.2 3.3 5.2 3.3 8.5S14.2 18.3 12 20.5c-2.2-2.2-3.3-5.2-3.3-8.5S9.8 5.7 12 3.5z" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    href: 'https://www.instagram.com/i.am.luigirusso/',
    label: 'Beyond Work',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 6.5h18v11H3z" strokeLinejoin="round" />
        <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function QrLandingPage() {
  return (
    <>
      <Head>
        <title>Luigi Russo | Quick Links</title>
        <meta
          name="description"
          content="Direct access to Luigi Russo's work, current builds, personal updates, and contact page."
        />
      </Head>

      <main className="min-h-screen bg-sand px-4 pb-6 pt-3 text-ink md:py-6">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[420px] animate-[fadeIn_200ms_ease-out] flex-col justify-start md:justify-center">
          <section className="text-center">
            <div className="mb-4 inline-flex h-[104px] w-[104px] items-center justify-center overflow-hidden rounded-full border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.1)]">
              <Image
                src="/images/luigi.jpg"
                alt="Luigi Russo"
                width={104}
                height={104}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-[clamp(1.75rem,5.5vw,2rem)] font-semibold tracking-tight">Luigi Russo</h1>
            <p className="mt-3 text-[clamp(1.1rem,4.2vw,1.25rem)] font-medium leading-snug">
              I build intelligent products.
            </p>
            <p className="mt-3 text-[clamp(0.9rem,3.2vw,1rem)] leading-relaxed text-slate-600">
              Enterprise Analytics. AI products. Systems thinking.
            </p>
            <SocialLinksRow className="mt-4" />
          </section>

          <section className="mt-10 flex flex-col gap-4">
            {ctaItems.map((item) => {
              const classes =
                'group inline-flex h-14 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-base font-medium text-ink shadow-[0_1px_8px_rgba(15,23,42,0.06)] transition duration-150 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(15,23,42,0.1)] active:translate-y-0 active:scale-[0.995] active:shadow-[0_1px_6px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2';

              const content = (
                <>
                  <span className="inline-flex items-center gap-3">
                    <span className="text-slate-500 transition-colors group-hover:text-accent">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-400 transition-transform duration-150 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 12h14" strokeLinecap="round" />
                    <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              );

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={classes}
                    data-analytics-event="button_click"
                    data-analytics-label={item.label}
                    data-analytics-category="QR"
                    data-analytics-location="Quick Links"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={classes}
                  data-analytics-event="button_click"
                  data-analytics-label={item.label}
                  data-analytics-category="QR"
                  data-analytics-location="Quick Links"
                >
                  {content}
                </Link>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
