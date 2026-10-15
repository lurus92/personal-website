import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const CALENDLY_URL = 'https://calendly.com/lurus92';

const Contact = () => (
  <>
    <Head>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    </Head>
    <Layout
      title="Contact"
      path="/contact"
      description="Contact Luigi Russo about analytics, AI products, roles or collaborations."
      header={
        <PageHeader
          kicker="Contact"
          title="Let's talk."
          intro="Building something, hiring for analytics, or want to compare notes? Send a short brief or grab 30 minutes. I reply within two business days."
        />
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="mailto:info@lrusso.it"
          className="group rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-fg/30"
          data-analytics-event="button_click"
          data-analytics-label="Email"
          data-analytics-category="Contact"
          data-analytics-location="Options"
        >
          <p className="font-mono text-xs text-muted">Email</p>
          <p className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-accent-ink transition-colors">info@lrusso.it</p>
          <p className="mt-3 text-muted">Best for project briefs, roles and collaboration ideas.</p>
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            const calendly = (window as any).Calendly;
            if (calendly) {
              e.preventDefault();
              calendly.initPopupWidget({ url: CALENDLY_URL });
            }
          }}
          className="group rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-fg/30"
          data-analytics-event="button_click"
          data-analytics-label="Calendly"
          data-analytics-category="Contact"
          data-analytics-location="Options"
        >
          <p className="font-mono text-xs text-muted">Calendly</p>
          <p className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-accent-ink transition-colors">Book a 30-min intro</p>
          <p className="mt-3 text-muted">Pick a time that works for you.</p>
        </a>
      </div>
    </Layout>
  </>
);

export default Contact;
