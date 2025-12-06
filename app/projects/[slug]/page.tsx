import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug: slug.replace(/\.mdx?$/, '') }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  return {
    title: `${project.name} | Russo Technologies`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const project = getProjectBySlug(params.slug);
    return (
      <div className="section">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/projects" className="button-secondary text-sm">
            ← Back to projects
          </Link>
          <span className="tag">{project.status}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">{project.name}</h1>
        <p className="text-slate-300 mb-6">{project.summary}</p>
        {project.techStack?.length ? (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        ) : null}
        <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
