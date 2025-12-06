import Link from 'next/link';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Consulting = () => {
  return (
    <Layout title="Consulting" description="Consulting services for analytics strategy, implementation, and AI products.">
      <div className="space-y-12">
        <Section
          eyebrow="Consulting"
          title="Analytics, CDP, and experimentation partner"
          description="Engage Luigi for targeted engagements or longer-term advisory."
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              {
                title: 'Measurement & governance',
                bullets: ['Analytics architecture & taxonomies', 'GA4 / Adobe / Tealium rollouts', 'Tracking QA and observability']
              },
              {
                title: 'Experimentation & CRO',
                bullets: ['Testing strategy & process', 'Adobe Target & Optimizely implementation', 'Data storytelling for growth teams']
              },
              {
                title: 'AI product lab',
                bullets: ['RAG assistants for ops & analytics', 'Agentic workflows', 'Full-stack prototypes shipping on Vercel']
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

        <Section title="Engagement models" description="Start small with a diagnostic or embed Luigi with your team.">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Analytics & MarTech audit</h3>
              <p className="text-slate-700">2–3 weeks to review tracking, containers, governance, and experimentation readiness. Delivers prioritized fixes and a roadmap.</p>
            </div>
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Fractional leadership</h3>
              <p className="text-slate-700">Hands-on leadership for 2–4 days per week, guiding analytics squads while shipping implementations and experiments.</p>
            </div>
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Product lab sprints</h3>
              <p className="text-slate-700">Rapid prototyping of AI-driven tools or analytics dashboards; includes design, build, and instrumentation.</p>
            </div>
            <div className="card space-y-2">
              <h3 className="text-lg font-semibold text-ink">Workshops & training</h3>
              <p className="text-slate-700">Team enablement on GTM/Tealium governance, GA4 best practices, and experimentation playbooks.</p>
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
