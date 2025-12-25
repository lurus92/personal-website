import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { getAllProjects, getProjectBySlug } from '../../lib/content';

interface ProjectPageProps {
  frontmatter: any;
  content: string;
}

const ProjectPage = ({ frontmatter, content }: ProjectPageProps) => {
  return (
    <Layout title={frontmatter.name} description={frontmatter.summary}>
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            {frontmatter.icon && (
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                <Image
                  src={`/images/${frontmatter.icon}`}
                  alt={`${frontmatter.name} icon`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            )}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">{frontmatter.status}</p>
              <h1 className="text-4xl font-bold text-ink">{frontmatter.name}</h1>
              <p className="text-slate-600 max-w-3xl">{frontmatter.summary}</p>
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags?.map((tag: string) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {frontmatter.heroImage && (
          <Section title="Product snapshot">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm aspect-[16/9]">
              <Image
                src={`/images/${frontmatter.heroImage}`}
                alt={`${frontmatter.name} product preview`}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
                priority
              />
            </div>
          </Section>
        )}

        <Section title="Overview">
          <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </Section>

        <Section title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {frontmatter.techStack?.map((tech: string) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </Section>

        {frontmatter.screenshots?.length > 0 && (
          <Section title="Screenshots">
            <div className="grid md:grid-cols-3 gap-4">
              {frontmatter.screenshots.map((screenshot: string) => (
                <div key={screenshot} className="relative aspect-[9/16] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={`/images/${screenshot}`}
                    alt={`${frontmatter.name} mobile screen`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 300px, 100vw"
                  />
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjects();
  const paths = projects.map((project) => ({ params: { slug: project.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = await getProjectBySlug(slug);
  return {
    props: {
      frontmatter: project.frontmatter,
      content: project.content
    }
  };
};

export default ProjectPage;
