import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luigi Russo | Analytics Leader & AI Product Builder',
  description:
    'Personal website of Luigi Russo: analytics leader, experimentation strategist, and AI product builder based in Zurich with roots in Milan and Dubai.',
  openGraph: {
    title: 'Luigi Russo | Analytics & AI Products',
    description: 'Consulting, product lab, and writing on analytics and experimentation.',
    url: 'https://lrusso.it',
    siteName: 'Russo Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luigi Russo | Analytics & AI Products',
    description: 'Consulting, product lab, and writing on analytics and experimentation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
