import Link from 'next/link';

interface CloseCtaProps {
  title?: string;
  location: string;
}

// Navy closing band: bookends the page with the nav/header.
const CloseCta = ({ title = 'Building something, or hiring for analytics?', location }: CloseCtaProps) => (
  <section data-analytics-section="Close" className="theme-navy bg-bg text-fg">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="max-w-[20ch] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">{title}</h2>
        <p className="mt-4 text-lg text-muted">I reply within two business days.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="btn-accent"
          data-analytics-event="button_click"
          data-analytics-label="Book a call"
          data-analytics-category={location}
          data-analytics-location="Close"
        >
          Book a call
        </Link>
        <a href="mailto:info@lrusso.it" className="btn-ghost">
          info@lrusso.it
        </a>
      </div>
    </div>
  </section>
);

export default CloseCta;
