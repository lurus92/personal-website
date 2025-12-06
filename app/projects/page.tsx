import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export const metadata = {
  title: 'Projects | Russo Technologies',
  description: 'AI and analytics products built by Luigi Russo in Zurich.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="section">
      <SectionHeading eyebrow="Projects" title="Russo Technologies lab">
        A portfolio of AI assistants, analytics utilities, and experimentation tools.
      </SectionHeading>
      <div className="grid-auto-fit mb-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="card bg-slate-900/70">
        <h3 className="text-2xl font-semibold text-white mb-3">How I build</h3>
        <p className="text-slate-300 mb-4">
          Every product is born as a real problem from consulting work or personal research. I ship lean versions, validate with
          users, and keep the codebase intentionally simple: Next.js for the front end, serverless APIs, RAG with manageable data
          stores, and privacy-first telemetry.
        </p>
        <div className="flex gap-3">
          <Link href="/contact" className="button-primary">
            Discuss a collaboration
          </Link>
          <Link href="/blog" className="button-secondary">
            Read build logs
          </Link>
        </div>
      </div>
    </div>
  );
}
