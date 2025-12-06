import Layout from '../components/Layout';
import Section from '../components/Section';

const Privacy = () => {
  return (
    <Layout title="Privacy" description="Privacy notice for Luigi Russo's personal website.">
      <Section
        title="Privacy notice"
        description="This site keeps tracking minimal and transparent."
      >
        <div className="prose prose-slate max-w-none">
          <p>
            This website is a personal site operated by Luigi Russo. It may use lightweight analytics (such as GA4 or a privacy-friendly alternative) to understand aggregate traffic and improve content. No invasive tracking or third-party advertising cookies are used.
          </p>
          <p>
            If you submit contact information, it is used solely to respond to your inquiry. For data requests or removal, contact <a href="mailto:hello@lrusso.it">hello@lrusso.it</a>.
          </p>
          <ul>
            <li>Data collected: basic visit metrics (page views, device type, referrer)</li>
            <li>Purpose: content improvement and lead generation</li>
            <li>Retention: analytics data retained according to platform defaults</li>
          </ul>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;
