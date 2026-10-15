import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import luigiPortrait from '../public/images/luigi.jpg';

// The three lines that have survived every version of the site since v1.
// Each one is a hat, and each links to its proof.
const lines = [
  { text: "Analyse people's needs.", proof: 'Career', href: '/about', external: false },
  { text: 'Spot business opportunities.', proof: 'Lab', href: '/projects', external: false },
  { text: 'Engineer complex software.', proof: 'GitHub', href: 'https://github.com/lurus92', external: true }
];

const spring = { type: 'spring' as const, stiffness: 120, damping: 22 };

const Hero = () => {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { ...spring, delay }
  });

  return (
    <section data-analytics-section="Hero" className="theme-navy bg-bg text-fg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20 grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <motion.h1
            {...enter(0)}
            className="text-[2.5rem] sm:text-5xl lg:text-[4.1rem] font-semibold tracking-[-0.035em] leading-[1.03] [text-wrap:balance]"
          >
            Founder building AI products <span className="text-muted">on ten years of analytics.</span>
          </motion.h1>

          <motion.ul {...enter(0.08)} className="mt-10 border-t border-line">
            {lines.map((l) => (
              <li key={l.text} className="border-b border-line">
                <a
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-baseline justify-between gap-6 py-4"
                  data-analytics-event="button_click"
                  data-analytics-label={l.proof}
                  data-analytics-category="Hero lines"
                  data-analytics-location="Home"
                >
                  <span className="text-xl sm:text-2xl font-medium tracking-tight group-hover:text-accent transition-colors">
                    {l.text}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-muted group-hover:text-accent transition-colors shrink-0">
                    {l.proof} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.div {...enter(0.16)} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent hover:brightness-110 active:scale-[0.98] transition-all"
              data-analytics-event="button_click"
              data-analytics-label="See what I'm building"
              data-analytics-category="Hero"
              data-analytics-location="Home"
            >
              See what I&apos;m building
            </Link>
            <a
              href="/CV-LuigiRusso.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center rounded-lg border border-line px-5 py-3 text-sm font-semibold text-fg hover:border-fg/50 active:scale-[0.98] transition-all"
              data-analytics-event="button_click"
              data-analytics-label="Download CV"
              data-analytics-category="Hero"
              data-analytics-location="Home"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none lg:max-h-[560px] overflow-hidden rounded-2xl">
            <Image
              src={luigiPortrait}
              alt="Portrait of Luigi Russo"
              fill
              priority
              className="object-cover object-[50%_20%]"
              sizes="(min-width: 1024px) 440px, 100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
