import Head from 'next/head';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Contact = () => {
  return (
    <>
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>
      <Layout title="Contact" description="Contact Luigi Russo for analytics consulting or product collaborations.">
        <div className="space-y-10">
          <Section
            eyebrow="Contact"
            title="Book a conversation with me"
            description="Share a brief about your analytics or product challenge. I reply within two business days."
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card space-y-3">
                <p className="text-slate-700">Email</p>
                <a href="mailto:info@lrusso.it" className="text-lg font-semibold text-ink">info@lrusso.it</a>
                <p className="text-slate-600">Preferred for project briefs and collaboration ideas.</p>
              </div>
              <div className="card space-y-3">
                <p className="text-slate-700">Calendly</p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/lurus92' });
                  }}
                  className="text-lg font-semibold text-ink cursor-pointer hover:opacity-80 transition"
                >
                  Schedule a 30-min intro
                </a>
                <p className="text-slate-600">Open a booking widget to find a time that works.</p>
              </div>
            </div>
          </Section>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
