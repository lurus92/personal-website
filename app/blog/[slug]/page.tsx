import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.mdx?$/, '') }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} | Blog`,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return (
      <div className="section">
        <Link href="/blog" className="button-secondary text-sm mb-4 inline-flex">
          ← Back to blog
        </Link>
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        <p className="text-slate-300 mb-6">{post.summary}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
