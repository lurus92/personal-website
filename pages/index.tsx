import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
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

const revealItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const staggerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
};

const cardSpring = { type: 'spring' as const, stiffness: 110, damping: 20 };

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luigi Russo',
  jobTitle: 'Analytics Leader & AI Product Builder',
  url: 'https://lrusso.it',
  sameAs: [
    'https://www.linkedin.com/in/luigirusso',
    'https://github.com/luigirusso',
    'https://twitter.com/lurus92'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Zurich',
    addressCountry: 'CH'
  }
};

export default function Home({ projects, posts }: HomeProps) {
  const reduce = useReducedMotion();

  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <div className="space-y-20">
        <Hero />

        {/* Consulting - no eyebrow (eyebrow restraint: max 1 per 3 sections, reserved for lab) */}
        <Section
          title="I design analytics, experimentation, and data activation that work"
          description="When you bring me in, I roll up my sleeves: fixing tracking foundations, sharpening measurement strategy, and building AI-enabled journeys that teams can trust."
        >
          <div className="border border-slate-100 rounded-xl divide-y divide-slate-100 overflow-hidden">
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
              <div key={area.title} className="grid md:grid-cols-[200px_1fr] gap-4 px-6 py-5 bg-white">
                <h3 className="text-sm font-semibold text-ink pt-0.5">{area.title}</h3>
                <ul className="grid sm:grid-cols-3 gap-x-4 gap-y-1.5">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent mt-[3px] shrink-0 text-[10px] leading-none">&#9679;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/consulting"
              className="button-primary"
              data-analytics-event="button_click"
              data-analytics-label="See consulting offer"
              data-analytics-category="Home"
              data-analytics-location="What I Do"
            >
              See consulting offer
            </Link>
          </div>
        </Section>

        {/* Projects - dark section with one eyebrow (the single allowed eyebrow for this page) */}
        <div className="bg-midnight rounded-2xl p-6 md:p-10">
          <Section
            dark
            eyebrow="Russo Technologies Lab"
            title="AI products and experiments"
            description="Products and experiments I'm building hands-on, applying analytics rigor to every AI experience."
          >
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={staggerGrid}
              initial={reduce ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {projects.slice(0, 4).map((project) => (
                <motion.div key={project.slug} variants={revealItem} transition={cardSpring}>
                  <ProjectCard project={project} dark />
                </motion.div>
              ))}
            </motion.div>
            <div className="pt-2">
              <Link
                href="/projects"
                className="button-secondary-dark"
                data-analytics-event="button_click"
                data-analytics-label="View all projects"
                data-analytics-category="Home"
                data-analytics-location="Projects"
              >
                View all projects
              </Link>
            </div>
          </Section>
        </div>

        {/* Blog - no eyebrow */}
        <Section
          title="Latest thinking"
          description="Fresh notes on measurement strategy, implementation patterns, and AI in marketing analytics."
        >
          <motion.div
            className="grid md:grid-cols-3 gap-5"
            variants={staggerGrid}
            initial={reduce ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {posts.slice(0, 3).map((post) => (
              <motion.div key={post.slug} variants={revealItem} transition={cardSpring}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
          <div className="pt-2">
            <Link
              href="/blog"
              className="button-secondary"
              data-analytics-event="button_click"
              data-analytics-label="Read the blog"
              data-analytics-category="Home"
              data-analytics-location="Blog"
            >
              Read the blog
            </Link>
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
    statusColor: project.data.statusColor,
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
