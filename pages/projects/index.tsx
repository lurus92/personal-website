import { GetStaticProps } from 'next';
import CloseCta from '../../components/CloseCta';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import ProjectCard, { ProjectMeta } from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';
import { getProjectMetas } from '../../lib/content';

const ProjectsPage = ({ projects }: { projects: ProjectMeta[] }) => (
  <Layout
    title="Projects"
    path="/projects"
    description="Russo Technologies: AI products built by Luigi Russo, including AskVio."
    bleed
    header={
      <PageHeader
        kicker="Russo Technologies"
        title="What I'm building"
        intro="My product lab: AI products built with the measurement discipline of a decade in analytics. AskVio is the one I'm taking to market."
      />
    }
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.05 * (i % 2)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
    <CloseCta location="Projects" title="Want to build something together?" />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({ props: { projects: getProjectMetas() } });

export default ProjectsPage;
