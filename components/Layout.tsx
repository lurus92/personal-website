import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const pageTitle = title ? `${title} | Luigi Russo` : 'Luigi Russo | Analytics Leader & AI Product Builder';
  const pageDescription =
    description ||
    'Zurich-based analytics leader and AI product builder with experience across GTM, GA4, Adobe Analytics, and AI-driven products.';

  return (
    <div className="min-h-screen flex flex-col bg-sand text-ink">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lrusso.it" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Navigation />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
