import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'About | Luigi Russo',
  description: 'Analytics leader and AI product builder with experience across global consumer platforms.',
};

export default function AboutPage() {
  return (
    <div className="section">
      <SectionHeading eyebrow="About" title="Crossover between analytics leadership and AI products">
        Luigi Russo is an analytics leader and indie product builder who has spent a decade improving measurement and experimentation stacks for global brands.
      </SectionHeading>
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="card space-y-3">
            <h3 className="text-2xl font-semibold text-white">From data trust to AI delivery</h3>
            <p className="text-slate-300">
              Luigi has led analytics, tag management, and experimentation programs across industries including social media, telecom,
              luxury retail, travel, and e-commerce. He specializes in building resilient measurement architectures with GA4, Adobe Analytics,
              Tealium, and server-side tagging, ensuring product and marketing teams make decisions with confidence.
            </p>
            <p className="text-slate-300">
              Beyond analytics, he ships AI products through Russo Technologies: assistants for research, experimentation copilots, and
              RAG-powered knowledge tools. He codes in Next.js, TypeScript, and Python, and prototypes with OpenAI, Supabase, and Vercel edge functions.
            </p>
          </div>
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-white">Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>Led analytics and experimentation enablement for teams across Europe and the Middle East.</li>
              <li>Delivered GA4 migrations and CDP rollouts with Tealium, ensuring clean governance and documentation.</li>
              <li>Built AI prototypes (ExamBot, Wingman, Cast, Inquiro) that combine LLMs, retrieval, and workflow automation.</li>
              <li>Writes about measurement quality, experimentation design, and pragmatic AI adoption.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card">
            <h4 className="text-lg font-semibold text-white">Core skills</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Google Tag Manager", "GA4", "Adobe Analytics", "Tealium", "CDP strategy", "A/B testing", "OpenAI", "RAG", "Next.js"]
                .map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
            </div>
          </div>
          <div className="card">
            <h4 className="text-lg font-semibold text-white">Locations</h4>
            <p className="text-slate-300">Based in Zurich · Regularly in Milan and Dubai · Remote-friendly.</p>
          </div>
          <div className="card">
            <h4 className="text-lg font-semibold text-white">Education</h4>
            <p className="text-slate-300">MSc & BSc Computer Science and Engineering, Politecnico di Milano.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
