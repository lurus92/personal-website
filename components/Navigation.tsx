import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact', label: 'Contact' }
];

const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="font-semibold text-lg text-ink">Luigi Russo</span>
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-ink" />
            <span className="block w-6 h-0.5 bg-ink" />
            <span className="block w-6 h-0.5 bg-ink" />
          </div>
        </button>
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`px-3 py-2 rounded-lg text-sm font-medium ${router.pathname === item.href ? 'bg-slate-100 text-ink' : 'text-slate-700 hover:bg-slate-100'}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button-primary text-sm">Book a call</Link>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${router.pathname === item.href ? 'bg-slate-100 text-ink' : 'text-slate-700 hover:bg-slate-100'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
