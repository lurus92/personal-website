import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const services = [
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
];

const engagements = [
  {
    title: 'Analytics & MarTech audit',
    copy: 'Spend 2-3 weeks with me reviewing tracking, containers, governance, and experimentation readiness. I deliver prioritized fixes and a roadmap.'
  },
  {
    title: 'Fractional leadership',
    copy: 'Get hands-on leadership for 2-4 days per week. I guide analytics squads while shipping implementations and experiments.'
  },
  {
    title: 'Product lab sprints',
    copy: 'Join me for rapid prototyping of AI-driven tools or analytics dashboards; I handle design, build, and instrumentation.'
  },
  {
    title: 'Workshops & training',
    copy: 'Invite me to enable your team on GTM/Tealium governance, GA4 best practices, and experimentation playbooks.'
  }
];

const Consulting = () => {
  const reduce = useReducedMotion();

  return (
    <Layout title="Consulting" description="Consulting services for analytics strategy, implementation, and AI products.">
      <div className="space-y-16">

        {/* Services - no eyebrow (page title already says "Consulting") */}
        <Section
          title="Your analytics, CDP, and experimentation partner"
          description="Work directly with me for targeted engagements or longer-term advisory. I stay hands-on from design to delivery."
        >
          <div className="border border-slate-100 rounded-xl divide-y divide-slate-100 overflow-hidden">
            {services.map((offer) => (
              <div key={offer.title} className="grid md:grid-cols-[220px_1fr] gap-4 px-6 py-6 bg-white">
                <h3 className="text-sm font-semibold text-ink pt-0.5">{offer.title}</h3>
                <ul className="space-y-1.5">
                  {offer.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent mt-[3px] shrink-0 text-[10px] leading-none">&#9679;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Engagement models" description="Start small with a diagnostic or embed me with your team.">
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {engagements.map((e, i) => (
              <motion.div
                key={e.title}
                className="card space-y-2"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 110, damping: 20, delay: i * 0.07 }}
              >
                <h3 className="text-base font-semibold text-ink">{e.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{e.copy}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="button-primary"
              data-analytics-event="button_click"
              data-analytics-label="Book a call"
              data-analytics-category="Consulting"
              data-analytics-location="CTA"
            >
              Book a call
            </Link>
            <Link
              href="/projects"
              className="button-secondary"
              data-analytics-event="button_click"
              data-analytics-label="See product lab"
              data-analytics-category="Consulting"
              data-analytics-location="CTA"
            >
              See product lab
            </Link>
          </div>
        </Section>

      </div>
    </Layout>
  );
};

export default Consulting;
