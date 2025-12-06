import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Consulting | Analytics & Experimentation',
  description: 'Fractional analytics leadership, experimentation programs, and AI readiness by Luigi Russo.',
};

export default function ConsultingPage() {
  const offers = [
    {
      title: 'Fractional analytics lead',
      detail: 'Own the measurement roadmap, oversee tagging/GA4/Tealium governance, and enable product teams.',
    },
    {
      title: 'Experimentation accelerator',
      detail: 'Design KPIs, testing frameworks, and reporting for CRO, paid media, and product-led growth.',
    },
    {
      title: 'AI discovery & prototypes',
      detail: 'Workshops plus rapid builds for assistants, RAG search, and workflow automation using OpenAI.',
    },
    {
      title: 'Analytics audits',
      detail: 'Deep dives into data quality, consent, and performance to produce a prioritized remediation plan.',
    },
  ];

  return (
    <div className="section">
      <SectionHeading eyebrow="Consulting" title="Engage with Luigi">
        Straightforward, senior hands-on help to fix analytics debt, scale experimentation, and validate AI opportunities.
      </SectionHeading>
      <div className="grid-auto-fit mb-8">
        {offers.map((offer) => (
          <div key={offer.title} className="card">
            <h3 className="text-xl font-semibold text-white mb-2">{offer.title}</h3>
            <p className="text-slate-300">{offer.detail}</p>
          </div>
        ))}
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-3">Engagement formats</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Monthly retainers for ongoing leadership and squad enablement.</li>
          <li>Project-based for migrations, CDP rollouts, or new AI pilots.</li>
          <li>Workshops (remote or on-site) in Zurich, Milan, or Dubai.</li>
        </ul>
        <div className="mt-4 flex gap-3">
          <Link href="/contact" className="button-primary">
            Book an intro call
          </Link>
          <Link href="/projects" className="button-secondary">
            See product examples
          </Link>
        </div>
      </div>
    </div>
  );
}
