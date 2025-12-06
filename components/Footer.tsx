import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950/60">
      <div className="section py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-slate-300">
        <div>
          <p className="font-semibold text-white">Russo Technologies Lab</p>
          <p className="text-slate-400">Analytics leadership, AI products, and experimentation.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <a href="mailto:hello@lrusso.it" className="hover:text-white">
            hello@lrusso.it
          </a>
        </div>
        <p className="text-slate-500">© {year} Luigi Russo. Built with curiosity.</p>
      </div>
    </footer>
  );
}
