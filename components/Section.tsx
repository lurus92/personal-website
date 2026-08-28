import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
}

const Section = ({ title, eyebrow, description, children, dark }: SectionProps) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        {eyebrow && (
          <p className={`text-xs font-semibold uppercase tracking-widest ${dark ? 'text-cyan-400' : 'text-accent'}`}>
            {eyebrow}
          </p>
        )}
        <h2 className={dark
          ? 'text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4'
          : 'section-title'
        }>
          {title}
        </h2>
        {description && (
          <p className={`max-w-2xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
