import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Luigi Russo | Analytics Leader & AI Product Builder</title>
        <meta
          name="description"
          content="Luigi Russo is a Zurich-based analytics leader and AI product builder. Explore his projects, consulting services, and writings on analytics and AI."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
