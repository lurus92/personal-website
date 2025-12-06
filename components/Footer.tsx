import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Luigi Russo. All rights reserved.</p>
        <div className="flex items-center space-x-4 text-sm">
          <Link href="/privacy" className="text-slate-600 hover:text-ink">Privacy</Link>
          <Link href="/contact" className="text-slate-600 hover:text-ink">Contact</Link>
          <a href="mailto:hello@lrusso.it" className="text-slate-600 hover:text-ink">hello@lrusso.it</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
