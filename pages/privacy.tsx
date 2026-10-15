import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const Privacy = () => (
  <Layout
    title="Privacy"
    path="/privacy"
    description="Privacy notice for Luigi Russo's personal website."
    header={<PageHeader narrow kicker="Privacy" title="Privacy notice" intro="This site keeps tracking minimal and transparent." />}
  >
    <div className="prose max-w-3xl mx-auto">
      <p>
        This website is a personal site operated by Luigi Russo. It may use lightweight analytics (such as GA4 or a privacy-friendly alternative) to understand aggregate traffic and improve content. No invasive tracking or third-party advertising cookies are used.
      </p>
      <p>
        If you submit contact information, it is used solely to respond to your inquiry. For data requests or removal, contact <a href="mailto:info@lrusso.it">info@lrusso.it</a>.
      </p>
      <ul>
        <li>Data collected: basic visit metrics (page views, device type, referrer)</li>
        <li>Purpose: content improvement and lead generation</li>
        <li>Retention: analytics data retained according to platform defaults</li>
      </ul>
    </div>
  </Layout>
);

export default Privacy;
