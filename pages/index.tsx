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
          title="I design analytics, experimentation, and data activation that work"
          description="When you bring me in, I roll up my sleeves—fixing tracking foundations, sharpening measurement strategy, and building AI-enabled journeys that teams can trust."
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Analytics foundations',
                items: ['I govern GTM & Tealium at scale', 'I roll out GA4 & Adobe Analytics', 'I run tracking quality audits']
              },
              {
                title: 'Experimentation & CRO',
                items: ['I build testing roadmaps', 'I set up Adobe Target / Optimizely', 'I anchor measurement for growth teams']
              },
              {
                title: 'AI & product labs',
                items: ['I craft RAG and agentic assistants', 'I ship data products with OpenAI', 'I deliver full-stack prototypes']
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
          description="These are the products and experiments I’m building hands-on, applying analytics rigor to every AI experience."
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
          description="Fresh notes I’m writing on measurement strategy, implementation patterns, and AI in marketing analytics."
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
    techStack: project.data.techStack,
    icon: project.data.icon
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
