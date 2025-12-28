import Layout from '../components/Layout';
import Section from '../components/Section';

const About = () => {
  return (
    <Layout title="About" description="Learn about Luigi Russo's background, career, and approach to analytics and AI products.">
      <div className="space-y-12">
        <Section title="Biography" eyebrow="About Luigi" description="I’m an analytics and marketing technology leader with a builder mindset.">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="card space-y-4 md:col-span-2">
              <p className="text-slate-700 leading-relaxed">
                I&apos;m based in Zurich and work globally across Milan and Dubai. With more than a decade in digital analytics, tag management, and experimentation, I&apos;ve led teams and implementations in fast-moving environments including social, telecom, retail, and travel/e-commerce.
              </p>
              <p className="text-slate-700 leading-relaxed">
                I combine strategy with hands-on delivery: setting measurement frameworks, governing GTM/Tealium containers, rolling out GA4 and Adobe Analytics, and building AI-powered products. I studied Computer Science and Engineering (BSc and MSc) at Politecnico di Milano and write science fiction on the side.
              </p>
              <p className="text-slate-700 leading-relaxed">
                I thrive when helping teams trust their data and shipping experiments that actually move business metrics. Recent roles include work with TikTok, large telecom operators, and leading retailers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card h-48 bg-slate-200 flex items-center justify-center text-sm text-slate-600">
                <span>Placeholder: timeline of Zurich, Milan, Dubai with analytics icons</span>
              </div>
              <div className="card space-y-2">
                <p className="text-sm font-semibold text-slate-600">Credentials</p>
                <ul className="space-y-2 text-slate-700">
                  <li>• MSc & BSc Computer Science & Engineering, Politecnico di Milano</li>
                  <li>• 10+ years in analytics, marketing technology, and experimentation</li>
                  <li>• Expertise: GTM, GA4, Adobe Analytics, Tealium, Adobe Target, Power BI</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Approach" description="I blend strategist, technologist, and indie product builder mindsets.">
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              {
                title: 'Strategy + governance',
                copy: 'I design measurement plans, taxonomies, and governance to keep tracking reliable as products scale.'
              },
              {
                title: 'Hands-on implementation',
                copy: 'I deploy GTM/Tealium setups, debugging, server-side tagging, and analytics migrations without hand-offs.'
              },
              {
                title: 'Product shipping',
                copy: 'I build AI-first tools (RAG assistants, copilots, data products) with user-centric experimentation.'
              }
            ].map((item) => (
              <div key={item.title} className="card space-y-3">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-slate-700">{item.copy}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default About;
