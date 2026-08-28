import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import luigiPortrait from '../public/images/luigi.jpg';

const revealItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const springTransition = { type: 'spring' as const, stiffness: 110, damping: 20 };

const timeline = [
  {
    role: 'Data Collection Lead',
    timeframe: 'Nov 2024 - Present',
    location: 'Zurich, Switzerland',
    details: [
      'Lead a 5-person delivery team implementing agile GTM tracking and resolving 20+ data quality issues.',
      'Optimized OneTrust consent management to meet Swiss compliance while preserving UX.',
      'Partner with data engineering and digital sales on BigQuery integrations and real-time reporting.'
    ]
  },
  {
    role: 'Senior Measurement Partner',
    timeframe: 'Aug 2023 - Oct 2024',
    location: 'Dubai, UAE (TikTok)',
    details: [
      'Directed 20+ Brand Lift and Brandformance studies across full-funnel measurement.',
      'Supported 10+ enterprise clients with creative effectiveness analysis and meta studies.',
      'Managed data science partners to deliver 5V creative diagnostics and sales enablement.'
    ]
  },
  {
    role: 'Senior Manager Online Analytics, Loyalty & Retail',
    timeframe: 'Feb 2021 - Jul 2023',
    location: 'Dubai, UAE (Alshaya Group)',
    details: [
      'Launched the AURA loyalty program from 0 to 7M+ users with 50+ segmentation use cases.',
      'Defined 60+ analytics requirements and led implementations across external dev teams.',
      'Built 28+ Algonomy and Power BI dashboards and reported digital performance to C-level leaders.'
    ]
  },
  {
    role: 'Digital Analytics Manager, Senior Consultant',
    timeframe: 'Jul 2018 - Jan 2021',
    location: 'London, UK & Milan, Italy (Vodafone UK/Group)',
    details: [
      'Scaled Tealium IQ governance and Adobe Analytics/Target implementations across 21 markets.',
      'Integrated Adobe and Tealium SDKs into Vodafone apps with 100+ data layer variables.',
      'Rolled out OneTrust consent management and 20+ Medallia NPS survey programs.'
    ]
  },
  {
    role: 'Web Analyst / JS Developer (BI Area)',
    timeframe: 'Dec 2016 - Jul 2018',
    location: 'Chiasso, Switzerland (lastminute.com)',
    details: [
      'Implemented analytics pixels for 8 brands across 27 markets and built GTM/GA utilities.',
      'Created BigQuery analysis and R alerting frameworks to improve data reliability.',
      'Owned data governance tool evaluation and represented the core Web Analytics team.'
    ]
  }
];

const approaches = [
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
];

const About = () => {
  const reduce = useReducedMotion();

  return (
    <Layout title="About" description="Learn about Luigi Russo's background, career, and approach to analytics and AI products.">
      <div className="space-y-12">

        <Section title="Biography" description="Analytics and marketing technology leader with a builder mindset.">
          <div className="grid md:grid-cols-[1fr_240px] gap-8 items-start">
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                I&apos;m based in Zurich and work globally across Milan and Dubai. With more than a decade in digital analytics, tag management, and experimentation, I&apos;ve led teams and implementations in fast-moving environments including social, telecom, retail, and travel/e-commerce.
              </p>
              <p>
                I combine strategy with hands-on delivery: setting measurement frameworks, governing GTM/Tealium containers, rolling out GA4 and Adobe Analytics, and building AI-powered products. I studied Computer Science and Engineering (BSc and MSc) at Politecnico di Milano and write science fiction on the side.
              </p>
              <p>
                I thrive when helping teams trust their data and shipping experiments that actually move business metrics. Recent roles include work with TikTok, large telecom operators, and leading retailers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src={luigiPortrait}
                  alt="Luigi Russo"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-semibold text-ink text-xs uppercase tracking-wide">Locations</p>
                <ul className="space-y-1">
                  <li>Zurich: current base and analytics leadership hub</li>
                  <li>Milan: academic roots and recurring collaborations</li>
                  <li>Dubai: growth-market experience in retail and TikTok measurement</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-semibold text-ink text-xs uppercase tracking-wide">Credentials</p>
                <ul className="space-y-1">
                  <li>MSc &amp; BSc Computer Science &amp; Engineering, Politecnico di Milano</li>
                  <li>10+ years in analytics, marketing technology, and experimentation</li>
                  <li>GTM, GA4, Adobe Analytics, Tealium, Adobe Target, Power BI</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Professional timeline" description="A snapshot of the roles and impact that shaped my analytics leadership journey.">
          <div className="relative pl-6 border-l border-slate-200">
            {timeline.map((item, i) => (
              <motion.div
                key={item.role}
                className="relative pb-10 last:pb-0"
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 110, damping: 20, delay: i * 0.05 }}
              >
                <div className="absolute -left-[1.625rem] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-sand ring-1 ring-accent/40" />
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-base font-semibold text-ink">{item.role}</h3>
                    <span className="text-xs font-medium text-slate-500 shrink-0">{item.timeframe}</span>
                  </div>
                  <p className="text-sm text-slate-500">{item.location}</p>
                  <ul className="mt-2 space-y-1.5">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Approach" description="I blend strategist, technologist, and indie product builder mindsets.">
          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {approaches.map((item, i) => (
              <motion.div
                key={item.title}
                className="py-6 grid md:grid-cols-[220px_1fr] gap-4"
                initial={reduce ? false : revealItem.hidden}
                whileInView={revealItem.show}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...springTransition, delay: i * 0.08 }}
              >
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </Section>

      </div>
    </Layout>
  );
};

export default About;
