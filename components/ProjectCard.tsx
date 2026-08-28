import Image from 'next/image';
import Link from 'next/link';

export interface ProjectMeta {
  slug: string;
  name: string;
  status: string;
  statusColor?: string;
  tags: string[];
  summary: string;
  techStack: string[];
  icon?: string;
}

const statusColorClasses: Record<string, string> = {
  green: 'text-green-500',
  yellow: 'text-yellow-500',
  red: 'text-red-500',
  blue: 'text-blue-400',
  gray: 'text-slate-400'
};

const statusColorClassesDark: Record<string, string> = {
  green: 'text-emerald-400',
  yellow: 'text-yellow-400',
  red: 'text-red-400',
  blue: 'text-blue-300',
  gray: 'text-slate-400'
};

interface ProjectCardProps {
  project: ProjectMeta;
  dark?: boolean;
}

const ProjectCard = ({ project, dark }: ProjectCardProps) => {
  const colorMap = dark ? statusColorClassesDark : statusColorClasses;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={dark
        ? 'block rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.08] transition-all duration-200 hover:-translate-y-0.5'
        : 'card block'
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 min-w-0">
          <p className={`text-xs uppercase tracking-wide font-semibold ${colorMap[project.statusColor || ''] || (dark ? 'text-cyan-400' : 'text-accent')}`}>
            {project.status}
          </p>
          <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-ink'}`}>{project.name}</h3>
          <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{project.summary}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span key={tag} className={dark ? 'tag-dark' : 'tag'}>{tag}</span>
            ))}
          </div>
        </div>
        {project.icon ? (
          <div className={`size-16 shrink-0 rounded-xl flex items-center justify-center p-2.5 ${dark ? 'bg-white/10 border border-white/10' : 'bg-slate-100 border border-slate-200 shadow-sm'}`}>
            <Image
              src={`/images/${project.icon}`}
              alt={`${project.name} icon`}
              width={48}
              height={48}
              className="size-full object-contain"
            />
          </div>
        ) : (
          <div className={`size-16 shrink-0 rounded-xl flex items-center justify-center text-xs ${dark ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
            <span>{project.techStack[0]}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
