import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { headerSocialLinks } from './SocialLinksRow';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact', label: 'Contact' }
];

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

// Always navy, so it reads as one block with the hero / page header below it.
const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const link = (active: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors ${active ? 'text-fg' : 'text-muted hover:text-fg'}`;
  const iconBtn =
    'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted hover:text-fg hover:border-fg/40 transition-colors';

  return (
    <header className="theme-navy sticky top-0 z-30 bg-bg text-fg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-fg">
          <span className="font-semibold text-[17px] tracking-tight">Luigi Russo</span>
        </Link>

        <div className="md:hidden flex items-center gap-2">
          {headerSocialLinks.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label} className={iconBtn}>
              {l.icon}
            </a>
          ))}
          <button
            className={`${iconBtn} w-10 h-10`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
            </div>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={link(isActive(router.pathname, item.href))}
              aria-current={isActive(router.pathname, item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center rounded-lg border border-accent/60 px-4 py-2 text-sm font-semibold text-accent-ink hover:bg-accent hover:text-on-accent active:scale-[0.98] transition-all"
            data-analytics-event="button_click"
            data-analytics-label="Book a call"
            data-analytics-category="Navigation"
            data-analytics-location="Header"
          >
            Book a call
          </Link>
          <div className="flex items-center gap-2 ml-3">
            {headerSocialLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label} className={iconBtn}>
                {l.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-4 pb-4">
          <nav className="flex flex-col pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={link(isActive(router.pathname, item.href))}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-3 btn-accent" onClick={() => setOpen(false)}>
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
