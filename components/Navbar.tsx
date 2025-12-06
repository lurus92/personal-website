'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Russo Technologies
        </Link>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full transition-colors ${
                  isActive ? 'bg-slate-800 text-white' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <span className="text-slate-300 text-sm">Menu</span>
        </div>
      </nav>
    </header>
  );
}
