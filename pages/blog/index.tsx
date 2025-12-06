import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import BlogCard, { BlogMeta } from '../../components/BlogCard';
import Section from '../../components/Section';
import { getAllPosts } from '../../lib/content';

interface BlogProps {
  posts: BlogMeta[];
}

const BlogPage = ({ posts }: BlogProps) => {
  return (
    <Layout title="Blog" description="Analytics, tracking, and AI essays by Luigi Russo.">
      <div className="space-y-12">
        <Section
          eyebrow="Analytics Notes"
          title="Thinking out loud"
          description="Field notes on measurement strategy, martech architecture, and AI for analytics."
        >
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.data.title,
    date: post.data.date,
    summary: post.data.summary,
    tags: post.data.tags
  }));

  return {
    props: {
      posts
    }
  };
};

export default BlogPage;
