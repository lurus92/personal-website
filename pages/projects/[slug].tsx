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
