import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../lib/content';

interface BlogPostProps {
  frontmatter: any;
  content: string;
}

const BlogPost = ({ frontmatter, content }: BlogPostProps) => {
  const date = new Date(frontmatter.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout title={frontmatter.title} description={frontmatter.summary}>
      <article className="space-y-6">
        <header className="space-y-3">
          <p className="text-sm text-slate-500">{date}</p>
          <h1 className="text-4xl font-bold text-ink">{frontmatter.title}</h1>
          <p className="text-slate-600 max-w-3xl">{frontmatter.summary}</p>
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags?.map((tag: string) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>
        <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);
  return {
    props: {
      frontmatter: post.frontmatter,
      content: post.content
    }
  };
};

export default BlogPost;
