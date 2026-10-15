import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BlogMeta, formatDate } from '../components/BlogCard';
import CloseCta from '../components/CloseCta';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Logo, { LogoId } from '../components/Logo';
import { ProjectMeta } from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { getPostMetas, getProjectMetas } from '../lib/content';

interface HomeProps {
  projects: ProjectMeta[];
  posts: BlogMeta[];
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luigi Russo',
  alternateName: 'Lewis Russell',
  jobTitle: 'Founder & Analytics Leader',
  url: 'https://lrusso.it',
  image: 'https://lrusso.it/images/luigi.jpg',
  sameAs: [
    'https://www.linkedin.com/in/luigirusso92/',
    'https://github.com/lurus92',
    'https://x.com/lurus92',
    'https://www.lewisrussell.com'
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Politecnico di Milano' },
  address: { '@type': 'PostalAddress', addressLocality: 'Zurich', addressCountry: 'CH' }
};

const employers: LogoId[] = ['sunrise', 'tiktok', 'vodafone', 'alshaya', 'lastminute'];
const stages: { id: LogoId; label: string }[] = [
  { id: 'measurecamp', label: 'MeasureCamp (Los Angeles, London)' },
  { id: 'analytics-pioneers', label: 'Analytics Pioneers Summit' }
];

const stats = [
  { value: '7M+', label: 'loyalty members for AURA, launched from zero at Alshaya' },
  { value: '21', label: 'markets on one Tealium and Adobe setup at Vodafone' },
  { value: '20+', label: 'brand lift studies directed at TikTok' }
];

const container = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
const h2 = 'text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]';
const arrowLink = 'group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink hover:text-fg transition-colors';

const Arrow = () => (
  <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
);

export default function Home({ projects, posts }: HomeProps) {
  const [featured, ...rest] = posts;
  const [lead, ...others] = projects;

  return (
    <Layout bleed path="/" header={<Hero />}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </Head>

      {/* Proof: who I did the analytics for, and where I speak */}
      <section data-analytics-section="Proof" className="border-b border-line bg-surface">
        <div className={`${container} py-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5 text-fg/70">
            <span className="w-full sm:w-auto font-mono text-xs text-muted">Previously at</span>
            {employers.map((id) => (
              <Logo key={id} id={id} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5 text-fg/70">
            <span className="w-full sm:w-auto font-mono text-xs text-muted">Speaking at</span>
            {stages.map((l) => (
              <Logo key={l.id} id={l.id} label={l.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Writing: the newest part of the site, first section after the proof */}
      <section data-analytics-section="Writing" className={`${container} py-20 md:py-28`}>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className={h2}>Writing</h2>
          <Link href="/blog" className={arrowLink} data-analytics-event="button_click" data-analytics-label="All posts" data-analytics-category="Home">All posts <Arrow /></Link>
        </Reveal>
        <p className="mt-4 max-w-[60ch] text-lg text-muted">
          Essays on analytics and AI, and notes from the conferences I go to.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {featured && (
            <Reveal className="lg:col-span-7">
              <Link href={`/blog/${featured.slug}`} className="group block" data-analytics-event="select_content" data-analytics-label={featured.title} data-analytics-category="Blog post">
                {featured.cover && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-white">
                    <Image
                      src={featured.cover}
                      alt={featured.coverAlt ?? ''}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 640px, 100vw"
                    />
                  </div>
                )}
                <p className="mt-6 font-mono text-xs text-muted">{formatDate(featured.date, 'long')}</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight leading-tight group-hover:text-accent-ink transition-colors [text-wrap:balance]">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-[60ch] text-muted">{featured.summary}</p>
              </Link>
            </Reveal>
          )}

          <Reveal className="lg:col-span-5" delay={0.08}>
            <ul className="divide-y divide-line border-y border-line">
              {rest.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block py-5" data-analytics-event="select_content" data-analytics-label={p.title} data-analytics-category="Blog post">
                    <p className="font-mono text-xs text-muted">
                      {formatDate(p.date)}
                      {p.place ? `, ${p.place}` : ''}
                    </p>
                    <h3 className="mt-1.5 text-lg font-medium leading-snug group-hover:text-accent-ink transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Lab: AskVio leads, the rest support */}
      <section data-analytics-section="Lab" className="border-y border-line bg-surface/60">
        <div className={`${container} py-20 md:py-28`}>
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className={h2}>What I&apos;m building</h2>
            <Link href="/projects" className={arrowLink} data-analytics-event="button_click" data-analytics-label="All projects" data-analytics-category="Home">All projects <Arrow /></Link>
          </Reveal>
          <p className="mt-4 max-w-[60ch] text-lg text-muted">
            Russo Technologies is my product lab: AI products built with the measurement discipline of a decade in analytics.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {lead && (
              <Reveal className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-accent/30 bg-accent/[0.08] transition-colors hover:border-accent/60">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-4">
                      {lead.icon && (
                        <span className="relative size-14 overflow-hidden rounded-xl bg-white">
                          <Image src={`/images/${lead.icon}`} alt="" fill className="object-contain p-2" sizes="56px" />
                        </span>
                      )}
                      <span className="font-mono text-xs text-accent-ink">{lead.status}</span>
                    </div>
                    <h3 className="mt-8 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
                      {/* stretched link: the whole tile opens the project page */}
                      <Link href={`/projects/${lead.slug}`} className="after:absolute after:inset-0" data-analytics-event="select_content" data-analytics-label={lead.name} data-analytics-category="Project">
                        {lead.name}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-[48ch] text-lg text-muted">{lead.summary}</p>
                    <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <span className={arrowLink}>Explore {lead.name} <Arrow /></span>
                      {lead.url && (
                        <a
                          href={lead.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-muted hover:text-fg"
                          data-analytics-event="outbound_project"
                          data-analytics-label={lead.name}
                          data-analytics-category="Project"
                          data-analytics-location="Home lab"
                        >
                          {lead.urlLabel ?? lead.url} <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                  {lead.image && (
                    <div className="relative mt-auto ml-8 sm:ml-10 aspect-[16/10] overflow-hidden rounded-tl-xl border-l border-t border-accent/30">
                      <Image
                        src={`/images/${lead.image}`}
                        alt={lead.imageAlt ?? `${lead.name} screenshot`}
                        fill
                        className="object-cover object-[0%_60%] transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 520px, 100vw"
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            )}

            <div className="grid gap-4 lg:auto-rows-fr">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={0.06 * (i + 1)} className="h-full">
                  <Link
                    href={`/projects/${p.slug}`}
                    data-analytics-event="select_content"
                    data-analytics-label={p.name}
                    data-analytics-category="Project"
                    className="group grid h-full grid-cols-[1fr_104px] sm:grid-cols-[1fr_140px] lg:grid-cols-[1fr_180px] items-center lg:items-stretch gap-5 overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-fg/30"
                  >
                    <div className="min-w-0 self-center">
                      <p className="font-mono text-xs text-muted">{p.status}</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight group-hover:text-accent-ink transition-colors">{p.name}</h3>
                      <p className="mt-1.5 text-sm text-muted line-clamp-2">{p.summary}</p>
                    </div>
                    {p.image && (
                      <div className="relative h-24 sm:h-28 lg:h-auto lg:min-h-[7rem] overflow-hidden rounded-lg border border-line bg-[#0b1220]">
                        <Image src={`/images/${p.image}`} alt={`${p.name} screenshot`} fill className="object-cover object-top" sizes="180px" />
                      </div>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics: outcomes, not a skills table */}
      <section data-analytics-section="Analytics" className={`${container} py-20 md:py-28`}>
        <Reveal>
          <h2 className={`${h2} max-w-[18ch]`}>Ten years inside analytics teams</h2>
          <p className="mt-4 max-w-[60ch] text-lg text-muted">
            Measurement, tracking and experimentation at scale. I still take on a few advisory and fractional roles.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={0.06 * i} className="border-t border-line pt-6">
              <p className="text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-accent-ink tabular-nums">{s.value}</p>
              <p className="mt-3 max-w-[28ch] text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/about" className={arrowLink} data-analytics-event="button_click" data-analytics-label="Full career" data-analytics-category="Home">Full career <Arrow /></Link>
          <Link href="/consulting" className={arrowLink} data-analytics-event="button_click" data-analytics-label="Consulting" data-analytics-category="Home">Consulting <Arrow /></Link>
        </div>
      </section>

      {/* Fiction: Lewis Russell */}
      <section data-analytics-section="Fiction" className="border-t border-line bg-surface">
        <div className={`${container} py-20 md:py-28 grid gap-12 md:grid-cols-12 md:items-center`}>
          <Reveal className="md:col-span-4 lg:col-span-3">
            <a href="https://www.lewisrussell.com" target="_blank" rel="noreferrer" className="block">
              <Image
                src="/images/clotho.webp"
                alt="Cover of Il Dominio del Cielo: Clotho by Lewis Russell"
                width={353}
                height={538}
                className="w-48 md:w-full rounded-md shadow-[0_24px_60px_-20px_rgba(11,18,32,0.55)] -rotate-2 transition-transform hover:rotate-0"
              />
            </a>
          </Reveal>
          <Reveal className="md:col-span-8 lg:col-span-7 lg:col-start-6" delay={0.08}>
            <p className="font-mono text-xs text-muted">Fiction, as Lewis Russell</p>
            <h2 className={`${h2} mt-3`}>I also write science fiction.</h2>
            <div className="mt-6 max-w-[60ch] space-y-4 text-lg text-muted">
              <p>
                Lewis Russell is my pen name. Luigi is the scientific one; Lewis goes after the human and classical side
                of things, imagining different futures and the people who live through them.
              </p>
              <p>
                <em className="text-fg not-italic font-medium">Il Dominio del Cielo: Clotho</em> was published by Linee Infinite
                in 2019, the first volume of the Mitos saga. The second, <em className="text-fg not-italic font-medium">Lachesis</em>, is in progress.
              </p>
            </div>
            <a href="https://www.lewisrussell.com" target="_blank" rel="noreferrer" className={`${arrowLink} mt-8`}>
              lewisrussell.com (in Italian) <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      <CloseCta location="Home" />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { projects: getProjectMetas(), posts: getPostMetas() }
});
