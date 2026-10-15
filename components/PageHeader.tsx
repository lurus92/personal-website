import { ReactNode } from 'react';

interface PageHeaderProps {
  /** Small mono line above the title (date, status, section). Optional. */
  kicker?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  /** Buttons, tags or meta under the intro. */
  children?: ReactNode;
  /** Right-hand column (portrait, icon, cover). */
  aside?: ReactNode;
  /** Narrow measure for reading pages (blog posts). */
  narrow?: boolean;
}

// Navy band that continues the nav, same treatment as the homepage hero.
const PageHeader = ({ kicker, title, intro, children, aside, narrow }: PageHeaderProps) => (
  <section className="theme-navy bg-bg text-fg">
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-20 ${
        narrow ? 'max-w-3xl' : 'max-w-6xl'
      } ${aside ? 'grid gap-10 md:grid-cols-12 md:items-end' : ''}`}
    >
      <div className={aside ? 'md:col-span-8' : ''}>
        {kicker && <p className="font-mono text-xs text-muted">{kicker}</p>}
        <h1
          className={`${kicker ? 'mt-4' : ''} font-semibold tracking-[-0.035em] leading-[1.05] [text-wrap:balance] ${
            narrow ? 'text-3xl sm:text-4xl lg:text-[2.75rem]' : 'text-4xl sm:text-5xl lg:text-6xl'
          }`}
        >
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-[62ch] text-lg text-muted leading-relaxed">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
      {aside && <div className="md:col-span-4">{aside}</div>}
    </div>
  </section>
);

export default PageHeader;
