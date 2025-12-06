import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog | Analytics, CDPs, and AI',
  description: 'Writing by Luigi Russo on analytics engineering, experimentation, and AI-assisted measurement.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="section">
      <SectionHeading eyebrow="Blog" title="Analytics & AI field notes">
        Essays, implementation notes, and experiments from client work and the Russo Technologies lab.
      </SectionHeading>
      <div className="grid-auto-fit">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="card mt-10">
        <h3 className="text-xl font-semibold text-white mb-2">Write with me</h3>
        <p className="text-slate-300 mb-3">
          Want a teardown of your current analytics stack or an article on your platform? Reach out with the topic and goal.
        </p>
        <Link href="/contact" className="button-primary">
          Request a collaboration
        </Link>
      </div>
    </div>
  );
}
