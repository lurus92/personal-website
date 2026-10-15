import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  /** Navy band rendered right under the nav (PageHeader or Hero). */
  header?: ReactNode;
  /** Full-bleed pages manage their own containers. */
  bleed?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article';
  path?: string;
}

const SITE = 'https://lrusso.it';

const Layout = ({ children, title, description, header, bleed, ogImage, ogType = 'website', path = '' }: LayoutProps) => {
  const pageTitle = title ? `${title} | Luigi Russo` : 'Luigi Russo | Founder & Analytics Leader';
  const pageDescription =
    description ||
    'Luigi Russo builds AI products on ten years of analytics leadership at TikTok, Vodafone and Alshaya. Writing on analytics, AI and building.';
  const image = ogImage ? `${SITE}${ogImage}` : `${SITE}/images/luigi.jpg`;

  return (
    <div className="theme-light min-h-[100dvh] flex flex-col bg-bg text-fg">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE}${path}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={`${SITE}${path}`} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={image} />
      </Head>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Navigation />
      {header}
      <main
        id="main"
        className={bleed ? 'flex-1 w-full' : 'flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20'}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
