import Link from 'next/link';

export interface ProjectMeta {
  slug: string;
  name: string;
  status: string;
  tags: string[];
  summary: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: ProjectMeta;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`} className="card block">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-accent font-semibold">{project.status}</p>
          <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
          <p className="text-slate-600">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="w-16 h-16 rounded-xl bg-slate-200 flex items-center justify-center text-xs text-slate-600">
          <span>{project.techStack[0]}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
