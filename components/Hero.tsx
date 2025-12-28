import Image from 'next/image';
import Link from 'next/link';
import luigiPortrait from '../public/images/luigi.jpg';

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-sm font-semibold text-slate-800">
          <span>Analytics Leader</span>
          <span className="text-slate-500">&</span>
          <span>AI Product Builder</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
          Luigi Russo builds trustworthy analytics and ships AI-first products.
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Zurich-based, Milan- and Dubai-rooted technology leader with 10+ years across GTM, GA4, Adobe Analytics, Tealium, and
          experimentation. Luigi blends hands-on implementation with strategy to ship data products that actually get used.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="button-primary">Book a call</Link>
          <Link href="/projects" className="button-secondary">Explore the lab</Link>
          <Link href="/CV-LuigiRusso.pdf" className="button-secondary" download>Download CV</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
          <div>
            <p className="font-semibold text-ink">Key tools</p>
            <p>GTM · GA4 · Tealium · Adobe Analytics · Adobe Target · Power BI · OpenAI</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Focus areas</p>
            <p>Tracking quality · CDP · CRO · Experimentation · AI for marketing</p>
          </div>
        </div>
      </div>
      <div className="card space-y-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200">
          <Image
            src={luigiPortrait}
            alt="Luigi Russo"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 420px, 100vw"
            priority
          />
        </div>
        <div className="space-y-3">
          <p className="text-slate-700 leading-relaxed">
            “I help teams trust their data, measure what matters, and build AI products that ship. From tracking foundations to
            full-stack product experiments, I bridge strategy with hands-on delivery.”
          </p>
          <div className="flex flex-wrap gap-2">
            {['Analytics strategy', 'Implementation', 'Experimentation', 'AI apps'].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
