import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import ProjectCard, { ProjectMeta } from '../../components/ProjectCard';
import Section from '../../components/Section';
import { getAllProjects } from '../../lib/content';

interface ProjectsProps {
  projects: ProjectMeta[];
}

const ProjectsPage = ({ projects }: ProjectsProps) => {
  return (
    <Layout title="Projects" description="Explore Russo Technologies lab projects built by Luigi Russo.">
      <div className="space-y-12">
        <Section
          eyebrow="Russo Technologies"
          title="Product lab"
          description="AI-first products that merge analytics rigor with user-centric design."
        >
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects().map((project) => ({
    slug: project.slug,
    name: project.data.name,
    status: project.data.status,
    tags: project.data.tags,
    summary: project.data.summary,
    techStack: project.data.techStack
  }));

  return {
    props: {
      projects
    }
  };
};

export default ProjectsPage;
