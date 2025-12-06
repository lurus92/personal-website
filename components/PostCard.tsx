import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="card flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{post.title}</h3>
        <time className="text-sm text-slate-400" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </time>
      </div>
      <p className="text-slate-300 flex-1">{post.summary}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags?.map((tag) => (
          <span key={tag} className="tag bg-slate-800/80">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`} className="button-secondary text-sm w-fit">
        Read article
      </Link>
    </article>
  );
}
