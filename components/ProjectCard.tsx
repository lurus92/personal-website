import Image from 'next/image';
import Link from 'next/link';

export interface ProjectMeta {
  slug: string;
  name: string;
  status: string;
  tags: string[];
  summary: string;
  icon?: string | null;
  image?: string | null;
}

// Screenshot when there is one; otherwise the icon on an accent-tinted field.
const ProjectCard = ({ project }: { project: ProjectMeta }) => (
  <Link
    href={`/projects/${project.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-fg/30"
  >
    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-[#0b1220]">
      {project.image ? (
        <Image
          src={`/images/${project.image}`}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 560px, 100vw"
        />
      ) : project.icon ? (
        <div className="absolute inset-0 grid place-items-center bg-accent/10">
          <span className="relative size-24 overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_-20px_rgba(11,18,32,0.5)]">
            <Image src={`/images/${project.icon}`} alt="" fill className="object-contain p-4" sizes="96px" />
          </span>
        </div>
      ) : null}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <p className="font-mono text-xs text-accent-ink">{project.status}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-accent-ink transition-colors">{project.name}</h3>
      <p className="mt-2 text-muted leading-relaxed">{project.summary}</p>
      {project.tags.length > 0 && (
        <p className="mt-auto pt-5 font-mono text-xs text-muted">{project.tags.slice(0, 3).join(' / ')}</p>
      )}
    </div>
  </Link>
);

export default ProjectCard;
