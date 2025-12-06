import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Contact | Work with Luigi Russo',
  description: 'Book a call or request a teardown of your analytics stack.',
};

export default function ContactPage() {
  return (
    <div className="section">
      <SectionHeading eyebrow="Contact" title="Let’s build together">
        Share context about your analytics stack, experimentation goals, or the AI product you want to ship. Luigi typically replies within one business day.
      </SectionHeading>
      <div className="card space-y-4">
        <div>
          <p className="text-slate-300 mb-1">Email</p>
          <a className="text-white font-semibold" href="mailto:hello@lrusso.it">
            hello@lrusso.it
          </a>
        </div>
        <div>
          <p className="text-slate-300 mb-1">Calendly</p>
          <a className="text-white font-semibold" href="#" aria-label="Calendly booking placeholder">
            calendly.com/lrusso (add your scheduling link here)
          </a>
        </div>
        <div>
          <p className="text-slate-300 mb-1">Signal/WhatsApp</p>
          <p className="text-white">+41 00 000 00 00 (placeholder for direct messaging)</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 pt-2">
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">For consulting</h3>
            <p className="text-slate-300 text-sm">Include your stack (GTM, GA4, Tealium, Adobe), main KPIs, and current blockers.</p>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-2">For product builds</h3>
            <p className="text-slate-300 text-sm">Share the user problem, data sources, and ideal workflow so I can propose a fast prototype.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
