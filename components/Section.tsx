import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

const Section = ({ title, eyebrow, description, children }: SectionProps) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        {eyebrow && <p className="text-sm font-semibold text-accent uppercase tracking-wider">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        {description && <p className="text-slate-600 max-w-3xl">{description}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;
