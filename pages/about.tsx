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
              <div className="card space-y-3">
                <p className="text-sm font-semibold text-slate-600">Locations I operate from</p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Zurich — current base and analytics leadership hub</li>
                  <li>• Milan — academic roots and recurring collaborations</li>
                  <li>• Dubai — growth-market experience in retail and TikTok measurement</li>
                </ul>
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

        <Section title="Professional timeline" description="A snapshot of the roles and impact that shaped my analytics leadership journey.">
          <div className="space-y-6">
            {[
              {
                role: 'Data Collection Lead',
                timeframe: 'Nov 2024 — Present',
                location: 'Zurich, Switzerland',
                details: [
                  'Lead a 5-person delivery team implementing agile GTM tracking and resolving 20+ data quality issues.',
                  'Optimized OneTrust consent management to meet Swiss compliance while preserving UX.',
                  'Partner with data engineering and digital sales on BigQuery integrations and real-time reporting.'
                ]
              },
              {
                role: 'Senior Measurement Partner',
                timeframe: 'Aug 2023 — Oct 2024',
                location: 'Dubai, UAE (TikTok)',
                details: [
                  'Directed 20+ Brand Lift and Brandformance studies across full-funnel measurement.',
                  'Supported 10+ enterprise clients with creative effectiveness analysis and meta studies.',
                  'Managed data science partners to deliver 5V creative diagnostics and sales enablement.'
                ]
              },
              {
                role: 'Senior Manager Online Analytics — Loyalty & Retail',
                timeframe: 'Feb 2021 — Jul 2023',
                location: 'Dubai, UAE (Alshaya Group)',
                details: [
                  'Launched the AURA loyalty program from 0 to 7M+ users with 50+ segmentation use cases.',
                  'Defined 60+ analytics requirements and led implementations across external dev teams.',
                  'Built 28+ Algonomy and Power BI dashboards and reported digital performance to C-level leaders.'
                ]
              },
              {
                role: 'Digital Analytics Manager — Senior Consultant',
                timeframe: 'Jul 2018 — Jan 2021',
                location: 'London, UK & Milan, Italy (Vodafone UK/Group)',
                details: [
                  'Scaled Tealium IQ governance and Adobe Analytics/Target implementations across 21 markets.',
                  'Integrated Adobe and Tealium SDKs into Vodafone apps with 100+ data layer variables.',
                  'Rolled out OneTrust consent management and 20+ Medallia NPS survey programs.'
                ]
              },
              {
                role: 'Web Analyst — JS Developer (BI Area)',
                timeframe: 'Dec 2016 — Jul 2018',
                location: 'Chiasso, Switzerland (lastminute.com)',
                details: [
                  'Implemented analytics pixels for 8 brands across 27 markets and built GTM/GA utilities.',
                  'Created BigQuery analysis and R alerting frameworks to improve data reliability.',
                  'Owned data governance tool evaluation and represented the core Web Analytics team.'
                ]
              }
            ].map((item) => (
              <div key={item.role} className="card space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                    <p className="text-sm text-slate-500">{item.location}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{item.timeframe}</span>
                </div>
                <ul className="space-y-2 text-slate-700">
                  {item.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
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
