import Link from 'next/link';

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  place?: string | null;
  cover?: string | null;
  coverAlt?: string | null;
}

export const formatDate = (d: string, month: 'short' | 'long' = 'short') =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month, year: 'numeric' });

// One row in the writing index: meta column on the left, title + summary on the right.
const BlogCard = ({ post }: { post: BlogMeta }) => (
  <Link href={`/blog/${post.slug}`} className="group grid gap-2 py-8 md:grid-cols-[200px_1fr] md:gap-10">
    <p className="font-mono text-xs text-muted md:pt-1.5">
      {formatDate(post.date)}
      {post.place ? <span className="block md:mt-1">{post.place}</span> : null}
    </p>
    <div>
      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug group-hover:text-accent-ink transition-colors [text-wrap:balance]">
        {post.title}
      </h3>
      <p className="mt-2 max-w-[65ch] text-muted">{post.summary}</p>
      {post.tags.length > 0 && <p className="mt-3 font-mono text-xs text-muted">{post.tags.slice(0, 4).join(' / ')}</p>}
    </div>
  </Link>
);

export default BlogCard;
