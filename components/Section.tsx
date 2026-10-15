import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  description?: string;
  /** Right-aligned link or action next to the title. */
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, description, action, children, className = '' }: SectionProps) => (
  <section className={className}>
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] leading-tight">{title}</h2>
      {action}
    </div>
    {description && <p className="mt-3 max-w-[62ch] text-lg text-muted">{description}</p>}
    <div className="mt-10">{children}</div>
  </section>
);

export default Section;
