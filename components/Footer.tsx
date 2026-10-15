import Link from 'next/link';
import { socialLinks } from './SocialLinksRow';

const Footer = () => (
  <footer className="border-t border-line bg-bg py-8 text-sm text-muted">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Luigi Russo</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link href="/privacy" className="hover:text-fg">Privacy</Link>
        <Link href="/contact" className="hover:text-fg">Contact</Link>
        <a href="mailto:info@lrusso.it" className="hover:text-fg">info@lrusso.it</a>
        <span className="hidden md:inline-block h-4 w-px bg-line" aria-hidden="true" />
        <div className="flex items-center gap-1">
          {socialLinks
            .filter((l) => l.label !== 'Website')
            .map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:text-fg"
              >
                {l.icon}
              </a>
            ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
