import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard, { BlogMeta, formatDate } from '../../components/BlogCard';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import { getPostMetas } from '../../lib/content';

const BlogPage = ({ posts }: { posts: BlogMeta[] }) => {
  const [featured, ...rest] = posts;

  return (
    <Layout
      title="Writing"
      path="/blog"
      description="Essays on analytics and AI by Luigi Russo, and notes from the conferences he attends."
      header={
        <PageHeader
          title="Writing"
          intro="Essays on analytics and AI, and notes from the conferences I go to. New posts land here first."
        />
      }
    >
      {featured && (
        <Reveal>
          <Link href={`/blog/${featured.slug}`} data-analytics-event="select_content" data-analytics-category="Blog post" data-analytics-label={featured.title} data-analytics-location="Blog featured" className="group grid gap-8 md:grid-cols-12 md:items-center">
            {featured.cover && (
              <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src={featured.cover}
                  alt={featured.coverAlt ?? ''}
                  fill
                  priority
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 640px, 100vw"
                />
              </div>
            )}
            <div className={featured.cover ? 'md:col-span-5' : 'md:col-span-12'}>
              <p className="font-mono text-xs text-muted">
                Latest, {formatDate(featured.date, 'long')}
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] leading-[1.1] group-hover:text-accent-ink transition-colors [text-wrap:balance]">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg text-muted">{featured.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
                Read the post <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </Link>
        </Reveal>
      )}

      {rest.length > 0 && (
        <div className="mt-20 divide-y divide-line border-t border-line">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => ({ props: { posts: getPostMetas() } });

export default BlogPage;
