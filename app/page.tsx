import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';
import { getAllPosts } from '@/lib/posts';
import { getAllProjects } from '@/lib/projects';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const projects = getAllProjects().slice(0, 4);

  return (
    <div>
      <section className="section hero-gradient rounded-b-[32px] shadow-xl shadow-slate-900/50">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Analytics Leader · AI Product Builder</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Luigi Russo helps companies measure better, experiment faster, and ship AI products that perform.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Based in Zurich with roots in Milan and Dubai, Luigi blends digital analytics, tag management, and customer
              experience experimentation with hands-on AI engineering. He runs Russo Technologies, a personal product lab
              crafting pragmatic tools for growth teams.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/consulting" className="button-primary">
                Explore consulting
              </Link>
              <Link href="/projects" className="button-secondary">
                View the lab
              </Link>
            </div>
            <div className="flex gap-4 text-sm text-slate-300">
              <span className="tag">GTM & GA4</span>
              <span className="tag">Tealium & CDPs</span>
              <span className="tag">Experimentation</span>
              <span className="tag">OpenAI / RAG</span>
            </div>
          </div>
          <div className="card bg-slate-900/70">
            <SectionHeading eyebrow="Snapshot" title="How Luigi engages">
              Engagement models that respect speed, craft, and measurable outcomes.
            </SectionHeading>
            <ul className="space-y-4 text-slate-200">
              <li className="flex gap-3">
                <span className="tag">Consulting</span>
                <div>
                  <p className="font-semibold text-white">Analytics & experimentation leadership</p>
                  <p className="text-slate-300">Fractional ownership of measurement foundations, governance, and CRO programs.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="tag">Products</span>
                <div>
                  <p className="font-semibold text-white">Russo Technologies lab</p>
                  <p className="text-slate-300">AI-first tools like ExamBot, Wingman, and Cast built with Next.js, RAG, and modern data stacks.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="tag">Workshops</span>
                <div>
                  <p className="font-semibold text-white">Teams that ship faster</p>
                  <p className="text-slate-300">Hands-on enablement on GTM, Tealium, GA4 migrations, experimentation strategy, and AI safety.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Projects" title="Russo Technologies lab">
          AI and analytics products shipping from Zurich with a builder mindset.
        </SectionHeading>
        <div className="grid-auto-fit">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projects" className="button-secondary">
            Browse all projects
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Consulting" title="Analytics leadership on demand">
          From digital analytics foundations to experimentation programs, Luigi partners with growth teams to ship measurable impact.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Analytics architecture',
              body: 'GTM/GA4, Tealium, and Adobe Analytics implementations that prioritize data trust and documentation.',
            },
            {
              title: 'Experimentation systems',
              body: 'A/B testing roadmaps, KPI design, and measurement for CRO, ads, and product-led growth.',
            },
            {
              title: 'AI product readiness',
              body: 'Discovery, prototyping, and delivery for OpenAI-powered assistants, RAG search, and workflow automation.',
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/consulting" className="button-primary">
            View consulting menu
          </Link>
          <Link href="/contact" className="button-secondary">
            Book a call
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Blog" title="Field notes on analytics & AI">
          Essays on tracking quality, customer data platforms, experimentation, and shipping reliable AI products.
        </SectionHeading>
        <div className="grid-auto-fit">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/blog" className="button-secondary">
            Read the blog
          </Link>
        </div>
      </section>
    </div>
  );
}
