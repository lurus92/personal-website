type SocialLink = {
  href: string;
  label: string;
  icon: JSX.Element;
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://lrusso.it',
    label: 'Website',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" strokeLinecap="round" />
        <path d="M12 3c2.4 2.2 3.8 5.5 3.8 9s-1.4 6.8-3.8 9c-2.4-2.2-3.8-5.5-3.8-9s1.4-6.8 3.8-9z" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    href: 'https://x.com/lurus92',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M4.4 4h4.5l3.9 5.6L17.7 4H20l-6.1 7.1L20.5 20h-4.6l-4.1-5.9L6.5 20H4.2l6.3-7.3L4.4 4z" />
      </svg>
    )
  },
  {
    href: 'https://www.linkedin.com/in/luigirusso92/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.18H5.67V18H8.34V10.18ZM7 6A1.55 1.55 0 0 0 7 9.09A1.55 1.55 0 0 0 7 6ZM18.35 13.34C18.35 10.93 16.82 10 15.29 10A3.12 3.12 0 0 0 12.66 11.45V10.18H10V18H12.67V13.65C12.67 12.5 13.14 11.38 14.56 11.38C15.96 11.38 15.98 12.69 15.98 13.72V18H18.65V13.34H18.35Z" />
      </svg>
    )
  },
  {
    href: 'https://www.instagram.com/i.am.luigirusso/',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    href: 'https://www.facebook.com/luigi.russo.1992',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V10H8v3h2.6v8h2.9z" />
      </svg>
    )
  },
  {
    href: 'https://github.com/lurus92',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2A10 10 0 0 0 8.85 21.49C9.35 21.58 9.52 21.28 9.52 21.02V19.61C6.73 20.22 6.14 18.43 6.14 18.43C5.68 17.25 5.03 16.93 5.03 16.93C4.13 16.31 5.1 16.33 5.1 16.33C6.09 16.4 6.61 17.35 6.61 17.35C7.5 18.87 8.95 18.43 9.53 18.16C9.62 17.51 9.88 17.06 10.16 16.81C7.94 16.55 5.62 15.69 5.62 11.85C5.62 10.76 6.01 9.86 6.65 9.15C6.55 8.89 6.2 7.84 6.75 6.42C6.75 6.42 7.59 6.15 9.5 7.45C10.31 7.23 11.17 7.11 12.03 7.11C12.89 7.11 13.75 7.23 14.56 7.45C16.47 6.15 17.31 6.42 17.31 6.42C17.86 7.84 17.51 8.89 17.41 9.15C18.05 9.86 18.44 10.76 18.44 11.85C18.44 15.7 16.12 16.54 13.89 16.81C14.25 17.12 14.57 17.74 14.57 18.68V21.02C14.57 21.28 14.74 21.59 15.24 21.49A10 10 0 0 0 12 2Z" />
      </svg>
    )
  }
];


export const headerSocialLinks = socialLinks.filter((link) =>
  ['X', 'LinkedIn', 'GitHub'].includes(link.label)
);

export default function SocialLinksRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`.trim()}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-[0_1px_8px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:bg-slate-50"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
