import Link from 'next/link';
import CloseCta from '../components/CloseCta';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const services = [
  {
    title: 'Measurement and governance',
    bullets: ['Analytics taxonomies and measurement plans', 'GA4, Adobe Analytics and Tealium roll-outs', 'Tracking QA and observability']
  },
  {
    title: 'Experimentation and CRO',
    bullets: ['Testing strategy and process', 'Adobe Target and Optimizely implementation', 'Data stories for growth teams']
  },
  {
    title: 'AI product lab',
    bullets: ['RAG assistants for operations and analytics', 'Agentic workflows', 'Full-stack prototypes, instrumented from day one']
  }
];

const engagements = [
  {
    title: 'Analytics and MarTech audit',
    length: '2-3 weeks',
    copy: 'I review tracking, containers, governance and experimentation readiness, then deliver prioritised fixes and a roadmap.'
  },
  {
    title: 'Fractional leadership',
    length: '2-4 days a week',
    copy: 'Hands-on leadership for your analytics squad: I guide the team while shipping implementations and experiments.'
  },
  {
    title: 'Product lab sprints',
    length: 'Per sprint',
    copy: 'Rapid prototyping of AI tools or analytics dashboards. I handle design, build and instrumentation.'
  },
  {
    title: 'Workshops and training',
    length: '1-2 days',
    copy: 'Enable your team on GTM and Tealium governance, GA4 best practice and experimentation playbooks.'
  }
];

const Consulting = () => (
  <Layout
    title="Consulting"
    path="/consulting"
    description="Analytics, experimentation and AI product consulting with Luigi Russo: audits, fractional leadership, product sprints and workshops."
    bleed
    header={
      <PageHeader
        kicker="Consulting"
        title="Your analytics, CDP and experimentation partner."
        intro="Work directly with me on a focused engagement or longer-term advisory. I stay hands-on from design to delivery."
      >
        <Link
          href="/contact"
          className="btn-accent"
          data-analytics-event="button_click"
          data-analytics-label="Book a call"
          data-analytics-category="Consulting"
          data-analytics-location="Header"
        >
          Book a call
        </Link>
      </PageHeader>
    }
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <section>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em]">What I help with</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i} className="border-t-2 border-fg pt-5">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-muted">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em]">Ways to work together</h2>
        <p className="mt-3 max-w-[62ch] text-lg text-muted">Start small with a diagnostic, or embed me with your team.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={0.05 * (i % 2)} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-7">
                <p className="font-mono text-xs text-accent-ink">{e.length}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{e.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-muted">
          I also build my own AI products.{' '}
          <Link href="/projects" className="font-semibold text-accent-ink hover:text-fg">
            See the lab →
          </Link>
        </p>
      </section>
    </div>
    <CloseCta location="Consulting" title="Tell me about your analytics challenge." />
  </Layout>
);

export default Consulting;
