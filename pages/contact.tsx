import Layout from '../components/Layout';
import Section from '../components/Section';

const Contact = () => {
  return (
    <Layout title="Contact" description="Contact Luigi Russo for analytics consulting or product collaborations.">
      <div className="space-y-10">
        <Section
          eyebrow="Contact"
          title="Book a conversation"
          description="Share a brief about your analytics or product challenge. Luigi replies within two business days."
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card space-y-3">
              <p className="text-slate-700">Email</p>
              <a href="mailto:hello@lrusso.it" className="text-lg font-semibold text-ink">hello@lrusso.it</a>
              <p className="text-slate-600">Preferred for project briefs and collaboration ideas.</p>
            </div>
            <div className="card space-y-3">
              <p className="text-slate-700">Calendly</p>
              <a href="#" className="text-lg font-semibold text-ink">Schedule a 30-min intro</a>
              <p className="text-slate-600">Placeholder link for Calendly booking widget.</p>
            </div>
          </div>
          <div className="card bg-slate-900 text-white space-y-3 mt-6">
            <h3 className="text-lg font-semibold">What to include</h3>
            <ul className="space-y-2 text-slate-100">
              <li>• Current analytics stack and pain points</li>
              <li>• Desired outcomes and timelines</li>
              <li>• Team size and stakeholders</li>
            </ul>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Contact;
