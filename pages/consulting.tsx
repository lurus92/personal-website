import Link from 'next/link';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Consulting = () => {
  return (
    <Layout title="Consulting" description="Consulting services for analytics strategy, implementation, and AI products.">
      <div className="space-y-12">
        <Section
          eyebrow="Consulting"
          title="Your analytics, CDP, and experimentation partner"
          description="Work directly with me for targeted engagements or longer-term advisory. I stay hands-on from design to delivery."
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              {
                title: 'Measurement & governance',
                bullets: ['I architect analytics taxonomies', 'I roll out GA4 / Adobe / Tealium', 'I own tracking QA and observability']
              },
              {
                title: 'Experimentation & CRO',
                bullets: ['I craft testing strategy & process', 'I implement Adobe Target & Optimizely', 'I translate data stories for growth teams']
              },
              {
                title: 'AI product lab',
                bullets: ['I build RAG assistants for ops & analytics', 'I design agentic workflows', 'I ship full-stack prototypes on Vercel']
              }
            ].map((offer) => (
              <div key={offer.title} className="card space-y-3">
                <h3 className="text-lg font-semibold text-ink">{offer.title}</h3>
                <ul className="space-y-2 text-slate-700">
                  {offer.bullets.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Engagement models" description="Start small with a diagnostic or embed me with your team.">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Analytics & MarTech audit</h3>
              <p className="text-slate-700">Spend 2–3 weeks with me reviewing tracking, containers, governance, and experimentation readiness. I deliver prioritized fixes and a roadmap.</p>
            </div>
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Fractional leadership</h3>
              <p className="text-slate-700">Get hands-on leadership for 2–4 days per week. I guide analytics squads while shipping implementations and experiments.</p>
            </div>
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Product lab sprints</h3>
              <p className="text-slate-700">Join me for rapid prototyping of AI-driven tools or analytics dashboards; I handle design, build, and instrumentation.</p>
            </div>
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Workshops & training</h3>
              <p className="text-slate-700">Invite me to enable your team on GTM/Tealium governance, GA4 best practices, and experimentation playbooks.</p>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary">Book a call</Link>
            <Link href="/projects" className="button-secondary">See product lab</Link>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Consulting;
