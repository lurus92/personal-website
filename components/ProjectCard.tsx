import Link from 'next/link';

export interface ProjectMeta {
  slug: string;
  name: string;
  status: string;
  tags: string[];
  summary: string;
  techStack?: string[];
  cta?: string;
}

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <span className="tag">{project.status}</span>
      </div>
      <p className="text-slate-300 flex-1">{project.summary}</p>
      {project.techStack && (
        <div className="flex flex-wrap gap-2 text-xs text-slate-400">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag bg-slate-800/60">
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag bg-slate-800/80">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="button-secondary text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
}
