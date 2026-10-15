import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BlogMeta, formatDate } from '../../components/BlogCard';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { getAllPosts, getPostBySlug, getPostMetas } from '../../lib/content';

interface BlogPostProps {
  slug: string;
  frontmatter: any;
  content: string;
  more: BlogMeta[];
}

const BlogPost = ({ slug, frontmatter, content, more }: BlogPostProps) => {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.summary,
    datePublished: frontmatter.date,
    author: { '@type': 'Person', name: 'Luigi Russo', url: 'https://lrusso.it' },
    mainEntityOfPage: `https://lrusso.it/blog/${slug}`,
    ...(frontmatter.cover ? { image: `https://lrusso.it${frontmatter.cover}` } : {})
  };

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.summary}
      path={`/blog/${slug}`}
      ogType="article"
      ogImage={frontmatter.cover}
      bleed
      header={
        <PageHeader
          narrow
          kicker={
            <>
              <Link href="/blog" className="hover:text-fg">Writing</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              {formatDate(frontmatter.date, 'long')}
              {frontmatter.place ? `, ${frontmatter.place}` : ''}
            </>
          }
          title={frontmatter.title}
          intro={frontmatter.summary}
        >
          {frontmatter.tags?.length > 0 && (
            <p className="font-mono text-xs text-muted">{frontmatter.tags.join(' / ')}</p>
          )}
        </PageHeader>
      }
    >
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      </Head>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      </article>

      {more.length > 0 && (
        <aside className="border-t border-line bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">Keep reading</h2>
              <Link href="/blog" className="text-sm font-semibold text-accent-ink hover:text-fg">All posts →</Link>
            </div>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block py-5">
                    <p className="font-mono text-xs text-muted">
                      {formatDate(p.date)}
                      {p.place ? `, ${p.place}` : ''}
                    </p>
                    <p className="mt-1.5 text-lg font-medium leading-snug group-hover:text-accent-ink transition-colors">{p.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);
  const more = getPostMetas()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  return { props: { slug, frontmatter: post.frontmatter, content: post.content, more } };
};

export default BlogPost;
