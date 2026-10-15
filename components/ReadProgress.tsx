import { useEffect, useRef } from 'react';
import { track } from '../lib/analytics';

const MARKS = [25, 50, 75, 100];

// Invisible markers at 25/50/75/100% of the article; each fires read_progress once.
const ReadProgress = ({ slug }: { slug: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;
    const sent = new Set<number>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const pct = Number((e.target as HTMLElement).dataset.pct);
        if (sent.has(pct)) return;
        sent.add(pct);
        track('read_progress', { percent_scrolled: pct, post_slug: slug });
        io.unobserve(e.target);
      });
    });
    root.querySelectorAll('[data-pct]').forEach((m) => io.observe(m));
    return () => io.disconnect();
  }, [slug]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {MARKS.map((pct) => (
        <span key={pct} data-pct={pct} className="absolute left-0 h-px w-px" style={{ top: `calc(${pct}% - 1px)` }} />
      ))}
    </div>
  );
};

export default ReadProgress;
