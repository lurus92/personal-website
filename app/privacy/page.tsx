import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Privacy | Russo Technologies',
  description: 'Privacy approach for lrusso.it and the Russo Technologies lab.',
};

export default function PrivacyPage() {
  return (
    <div className="section">
      <SectionHeading eyebrow="Privacy" title="Minimal, transparent analytics">
        This site keeps tracking lean. No invasive scripts, just the basics needed to understand which content resonates.
      </SectionHeading>
      <div className="card space-y-4 text-slate-300">
        <p>
          Analytics tooling (GA4 or a privacy-friendly alternative) is configured to respect consent and avoid personal data. No
          remarketing pixels are installed by default.
        </p>
        <p>
          If you submit your email or schedule time, your data is only used to reply to your request. You can ask for deletion at
          any time by emailing <a href="mailto:hello@lrusso.it" className="text-white">hello@lrusso.it</a>.
        </p>
        <p>
          Products in the Russo Technologies lab may have their own privacy policies. Each app will clearly describe what is
          stored, for how long, and how to opt out.
        </p>
      </div>
    </div>
  );
}
