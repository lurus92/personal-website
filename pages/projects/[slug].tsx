import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { getAllProjects, getProjectBySlug } from '../../lib/content';

interface ProjectPageProps {
  slug: string;
  frontmatter: any;
  content: string;
}

type Shot = { src: string; caption?: string };

const ProjectPage = ({ slug, frontmatter, content }: ProjectPageProps) => {
  // screenshots can be plain filenames (phone shots) or { src, caption } objects
  const screenshots: Shot[] = (frontmatter.screenshots ?? []).map((s: string | Shot) => (typeof s === 'string' ? { src: s } : s));
  const landscape = frontmatter.screenshotOrientation === 'landscape';

  return (
  <Layout
    title={frontmatter.name}
    description={frontmatter.summary}
    path={`/projects/${slug}`}
    bleed
    header={
      <PageHeader
        kicker={
          <>
            <Link href="/projects" className="hover:text-fg">Projects</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-accent-ink">{frontmatter.status}</span>
          </>
        }
        title={frontmatter.name}
        intro={frontmatter.summary}
        aside={
          frontmatter.icon ? (
            <span className="relative block size-28 md:ml-auto overflow-hidden rounded-3xl bg-white">
              <Image src={`/images/${frontmatter.icon}`} alt={`${frontmatter.name} icon`} fill className="object-contain p-4" sizes="112px" />
            </span>
          ) : undefined
        }
      >
        <div className="flex flex-col gap-6">
          {frontmatter.url && (
            <div>
              <a
                href={frontmatter.url}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
                data-analytics-event="outbound_project"
                data-analytics-label={frontmatter.name}
                data-analytics-category="Project"
                data-analytics-location="Header"
              >
                Visit {frontmatter.urlLabel ?? frontmatter.name} <span aria-hidden="true" className="ml-1.5">↗</span>
              </a>
            </div>
          )}
          {frontmatter.tags?.length > 0 && <p className="font-mono text-xs text-muted">{frontmatter.tags.join(' / ')}</p>}
        </div>
      </PageHeader>
    }
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      {frontmatter.heroImage && (
        <div className="relative mb-16 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-[#0b1220]">
          <Image
            src={`/images/${frontmatter.heroImage}`}
            alt={frontmatter.heroImageAlt ?? `${frontmatter.name} product preview`}
            fill
            priority
            className="object-contain"
            sizes="(min-width: 1024px) 1100px, 100vw"
          />
        </div>
      )}

      <div className="grid gap-12 lg:grid-cols-12">
        <article className="prose lg:col-span-8" dangerouslySetInnerHTML={{ __html: content }} />
        {frontmatter.techStack?.length > 0 && (
          <aside className="lg:col-span-3 lg:col-start-10">
            <div className="lg:sticky lg:top-24 border-t border-line pt-5">
              <h2 className="font-mono text-xs text-muted">Built with</h2>
              <ul className="mt-3 space-y-1.5 text-fg">
                {frontmatter.techStack.map((tech: string) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>

      {screenshots.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Screenshots</h2>
          {landscape ? (
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {screenshots.map((s) => (
                <figure key={s.src} className={screenshots.length % 2 === 1 && s === screenshots[0] ? 'md:col-span-2' : ''}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-white">
                    <Image src={`/images/${s.src}`} alt={s.caption ?? `${frontmatter.name} screen`} fill className="object-cover object-top" sizes="(min-width: 768px) 1100px, 100vw" />
                  </div>
                  {s.caption && <figcaption className="mt-3 text-sm text-muted">{s.caption}</figcaption>}
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {screenshots.map((s) => (
                <div key={s.src} className="relative aspect-[9/16] overflow-hidden rounded-xl border border-line bg-[#0b1220]">
                  <Image src={`/images/${s.src}`} alt={s.caption ?? `${frontmatter.name} screen`} fill className="object-cover object-top" sizes="(min-width: 768px) 360px, 100vw" />
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllProjects().map((p) => ({ params: { slug: p.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = await getProjectBySlug(slug);
  return { props: { slug, frontmatter: project.frontmatter, content: project.content } };
};

export default ProjectPage;
