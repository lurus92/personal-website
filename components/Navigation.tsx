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

const socialLinks = [
  {
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.18H5.67V18H8.34V10.18ZM7 6A1.55 1.55 0 0 0 7 9.09A1.55 1.55 0 0 0 7 6ZM18.35 13.34C18.35 10.93 16.82 10 15.29 10A3.12 3.12 0 0 0 12.66 11.45V10.18H10V18H12.67V13.65C12.67 12.5 13.14 11.38 14.56 11.38C15.96 11.38 15.98 12.69 15.98 13.72V18H18.65V13.34H18.35Z" />
      </svg>
    )
  },
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 2A10 10 0 0 0 8.85 21.49C9.35 21.58 9.52 21.28 9.52 21.02V19.61C6.73 20.22 6.14 18.43 6.14 18.43C5.68 17.25 5.03 16.93 5.03 16.93C4.13 16.31 5.1 16.33 5.1 16.33C6.09 16.4 6.61 17.35 6.61 17.35C7.5 18.87 8.95 18.43 9.53 18.16C9.62 17.51 9.88 17.06 10.16 16.81C7.94 16.55 5.62 15.69 5.62 11.85C5.62 10.76 6.01 9.86 6.65 9.15C6.55 8.89 6.2 7.84 6.75 6.42C6.75 6.42 7.59 6.15 9.5 7.45C10.31 7.23 11.17 7.11 12.03 7.11C12.89 7.11 13.75 7.23 14.56 7.45C16.47 6.15 17.31 6.42 17.31 6.42C17.86 7.84 17.51 8.89 17.41 9.15C18.05 9.86 18.44 10.76 18.44 11.85C18.44 15.7 16.12 16.54 13.89 16.81C14.25 17.12 14.57 17.74 14.57 18.68V21.02C14.57 21.28 14.74 21.59 15.24 21.49A10 10 0 0 0 12 2Z" />
      </svg>
    )
  }
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
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200"
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
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`px-3 py-2 rounded-lg text-sm font-medium ${router.pathname === item.href ? 'bg-slate-100 text-ink' : 'text-slate-700 hover:bg-slate-100'}`}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button-primary text-sm"
            data-analytics-event="button_click"
            data-analytics-label="Book a call"
            data-analytics-category="Navigation"
            data-analytics-location="Header"
          >
            Book a call
          </Link>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                {link.icon}
              </a>
            ))}
          </div>
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
