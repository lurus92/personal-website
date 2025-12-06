import { ReactNode } from 'react';

export default function SectionHeading({ title, eyebrow, children }: { title: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="uppercase tracking-[0.2em] text-xs text-slate-400">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      {children && <p className="text-slate-300 max-w-2xl">{children}</p>}
    </div>
  );
}
