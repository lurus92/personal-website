import Link from 'next/link';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

const NotFound = () => (
  <Layout
    title="Page not found"
    header={
      <PageHeader
        kicker="404"
        title="This page doesn't exist."
        intro="It may have moved when the site was redesigned. One of these should get you back on track."
      />
    }
  >
    <ul className="flex flex-wrap gap-3">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="btn-ghost">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default NotFound;
