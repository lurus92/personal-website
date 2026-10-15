import Image from 'next/image';
import Link from 'next/link';
import CloseCta from '../components/CloseCta';
import Layout from '../components/Layout';
import Logo, { LOGOS, LogoId } from '../components/Logo';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import luigiPortrait from '../public/images/luigi.jpg';

const timeline = [
  {
    role: 'Data Collection Lead',
    company: 'Sunrise', logo: 'sunrise' as LogoId,
    timeframe: 'Nov 2024 - Jun 2026',
    location: 'Zurich',
    details: [
      'Led a 5-person delivery team implementing agile GTM tracking and resolving 20+ data quality issues.',
      'Optimised OneTrust consent management to meet Swiss compliance while preserving UX.',
      'Partnered with data engineering and digital sales on BigQuery integrations and real-time reporting.'
    ]
  },
  {
    role: 'Senior Measurement Partner',
    company: 'TikTok', logo: 'tiktok' as LogoId,
    timeframe: 'Aug 2023 - Oct 2024',
    location: 'Dubai',
    details: [
      'Directed 20+ Brand Lift and Brandformance studies across full-funnel measurement.',
      'Supported 10+ enterprise clients with creative effectiveness analysis and meta studies.',
      'Managed data science partners to deliver 5V creative diagnostics and sales enablement.'
    ]
  },
  {
    role: 'Senior Manager Online Analytics, Loyalty & Retail',
    company: 'Alshaya Group', logo: 'alshaya' as LogoId,
    timeframe: 'Feb 2021 - Jul 2023',
    location: 'Dubai',
    details: [
      'Launched the AURA loyalty program from 0 to 7M+ users with 50+ segmentation use cases.',
      'Defined 60+ analytics requirements and led implementations across external dev teams.',
      'Built 28+ Algonomy and Power BI dashboards and reported digital performance to C-level leaders.'
    ]
  },
  {
    role: 'Digital Analytics Manager, Senior Consultant',
    company: 'Vodafone UK / Group', logo: 'vodafone' as LogoId,
    timeframe: 'Jul 2018 - Jan 2021',
    location: 'London & Milan',
    details: [
      'Scaled Tealium IQ governance and Adobe Analytics/Target implementations across 21 markets.',
      'Integrated Adobe and Tealium SDKs into Vodafone apps with 100+ data layer variables.',
      'Rolled out OneTrust consent management and 20+ Medallia NPS survey programs.'
    ]
  },
  {
    role: 'Web Analyst / JS Developer (BI Area)',
    company: 'lastminute.com', logo: 'lastminute' as LogoId,
    timeframe: 'Dec 2016 - Jul 2018',
    location: 'Chiasso',
    details: [
      'Implemented analytics pixels for 8 brands across 27 markets and built GTM/GA utilities.',
      'Created BigQuery analysis and R alerting frameworks to improve data reliability.',
      'Owned data governance tool evaluation and represented the core Web Analytics team.'
    ]
  }
];

const approaches = [
  {
    title: 'Strategy and governance',
    copy: 'I design measurement plans, taxonomies and governance that keep tracking reliable as products scale.'
  },
  {
    title: 'Hands-on implementation',
    copy: 'I deploy GTM and Tealium setups, server-side tagging and analytics migrations myself, without hand-offs.'
  },
  {
    title: 'Product shipping',
    copy: 'I build AI-first tools (RAG assistants, copilots, data products) and measure them like any other product.'
  }
];

const facts = [
  { label: 'Based in', value: 'Zurich. Previously Dubai, London and Milan.' },
  { label: 'Education', value: 'BSc and MSc, Computer Science and Engineering, Politecnico di Milano' },
  { label: 'Tools', value: 'GTM, GA4, Adobe Analytics, Tealium, Adobe Target, BigQuery, Power BI' }
];

const About = () => (
  <Layout
    title="About"
    path="/about"
    description="Luigi Russo: founder, analytics leader at TikTok, Vodafone and Alshaya, and science fiction author as Lewis Russell."
    bleed
    header={
      <PageHeader
        kicker="About"
        title="Founder, analytics leader, and novelist."
        intro="Ten years building analytics in social, telecom, retail and travel. Now building AI products, and writing science fiction as Lewis Russell."
        aside={
          <div className="relative aspect-[4/5] w-full max-w-[260px] md:ml-auto overflow-hidden rounded-2xl">
            <Image src={luigiPortrait} alt="Portrait of Luigi Russo" fill priority className="object-cover object-[50%_20%]" sizes="260px" />
          </div>
        }
      >
        <a
          href="/CV-LuigiRusso.pdf"
              target="_blank"
              rel="noopener"
          className="btn-ghost"
          data-analytics-event="button_click"
          data-analytics-label="Download CV"
          data-analytics-category="About"
          data-analytics-location="Header"
        >
          Download CV
        </a>
      </PageHeader>
    }
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      {/* Bio + facts */}
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-fg/85">
          <p>
            I&apos;m based in Zurich and have worked across Milan, London and Dubai. For more than a decade I&apos;ve led
            digital analytics, tag management and experimentation in fast-moving companies: TikTok, Vodafone, Alshaya
            and lastminute.com among them.
          </p>
          <p>
            I combine strategy with hands-on delivery: measurement frameworks, governed GTM and Tealium containers, GA4
            and Adobe Analytics roll-outs. These days I put the same rigour into building AI products at Russo
            Technologies, starting with <Link href="/projects/inquiro" className="text-accent-ink underline underline-offset-[3px] decoration-accent/40 hover:decoration-accent">AskVio</Link>.
          </p>
          <p>
            I studied Computer Science and Engineering at Politecnico di Milano. I also write science fiction as Lewis
            Russell: <em>Il Dominio del Cielo: Clotho</em> (Linee Infinite, 2019) opens the Mitos saga, and the second
            volume is in progress.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
          <dl className="divide-y divide-line border-y border-line">
            {facts.map((f) => (
              <div key={f.label} className="py-4">
                <dt className="font-mono text-xs text-muted">{f.label}</dt>
                <dd className="mt-1 text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Timeline */}
      <section className="mt-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em]">Career</h2>
        <ol className="mt-10 border-t border-line">
          {timeline.map((item, i) => (
            <li key={item.role} className="border-b border-line">
              <Reveal delay={0.03 * i} className="grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="flex items-start justify-between gap-4 md:block">
                  <div>
                    <p className="font-mono text-xs text-muted">{item.timeframe}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{item.location}</p>
                  </div>
                  <Logo id={item.logo} height={Math.round(LOGOS[item.logo].h * 0.9)} className="text-fg/70 md:mt-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.role} <span className="text-muted font-normal">at {item.company}</span>
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-muted">
                    {item.details.map((d) => (
                      <li key={d} className="max-w-[70ch]">{d}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Approach */}
      <section className="mt-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em]">How I work</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {approaches.map((a, i) => (
            <Reveal key={a.title} delay={0.05 * i} className="border-t-2 border-fg pt-5">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{a.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
    <CloseCta location="About" />
  </Layout>
);

export default About;
