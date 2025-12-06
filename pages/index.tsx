import { GetStaticProps } from 'next';
import Link from 'next/link';
import BlogCard, { BlogMeta } from '../components/BlogCard';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ProjectCard, { ProjectMeta } from '../components/ProjectCard';
import Section from '../components/Section';
import { getAllPosts, getAllProjects } from '../lib/content';

interface HomeProps {
  projects: ProjectMeta[];
  posts: BlogMeta[];
}

export default function Home({ projects, posts }: HomeProps) {
  return (
    <Layout>
      <div className="space-y-16">
        <Hero />

        <Section
          eyebrow="Consulting"
          title="Analytics, experimentation, and data activation"
          description="Hands-on help with measurement strategy, tracking quality, CDP and tag management, and building AI-enabled customer journeys."
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Analytics foundations',
                items: ['GTM & Tealium governance', 'GA4 & Adobe Analytics implementations', 'Tracking quality audits']
              },
              {
                title: 'Experimentation & CRO',
                items: ['Testing roadmaps', 'Adobe Target / Optimizely setups', 'Measurement for growth teams']
              },
              {
                title: 'AI & product labs',
                items: ['RAG and agentic assistants', 'Data products with OpenAI', 'Full-stack prototypes']
              }
            ].map((area) => (
              <div key={area.title} className="card space-y-3">
                <h3 className="text-lg font-semibold text-ink">{area.title}</h3>
                <ul className="space-y-2 text-slate-600">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Link href="/consulting" className="button-primary">See consulting offer</Link>
          </div>
        </Section>

        <Section
          eyebrow="Russo Technologies Lab"
          title="AI products and experiments"
          description="Selected independent products that apply analytics rigor to AI experiences. Each project is built hands-on by Luigi."
        >
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="pt-4">
            <Link href="/projects" className="button-secondary">View all projects</Link>
          </div>
        </Section>

        <Section
          eyebrow="Analytics Notes"
          title="Latest thinking"
          description="Essays on measurement strategy, implementation patterns, and AI in marketing analytics."
        >
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="pt-4">
            <Link href="/blog" className="button-secondary">Read the blog</Link>
          </div>
        </Section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects().map((project) => ({
    slug: project.slug,
    name: project.data.name,
    status: project.data.status,
    tags: project.data.tags,
    summary: project.data.summary,
    techStack: project.data.techStack
  }));

  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.data.title,
    date: post.data.date,
    summary: post.data.summary,
    tags: post.data.tags
  }));

  return {
    props: {
      projects,
      posts
    }
  };
};
