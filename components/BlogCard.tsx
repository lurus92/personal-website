import Link from 'next/link';

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogMeta;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const date = new Date(post.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link href={`/blog/${post.slug}`} className="card block">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{date}</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-ink">{post.title}</h3>
        <p className="text-slate-600">{post.summary}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
