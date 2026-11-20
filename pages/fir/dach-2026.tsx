import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import ReadProgress from '../../components/ReadProgress';

// Results of the 2026 DACH Failed Intent Rate study (MeasureCamp Zurich, 21 Nov 2026).
// One URL for the whole life of the study: the deck QR, the press release and the shops all
// point here. Before the embargo (21 Nov, 18:00 CET) the page builds as a holding page and no
// result is in the HTML or the JS. See lib/fir.ts.

const PATH = '/fir/dach-2026/';
const SLUG = 'fir-dach-2026';
const REPO = 'https://github.com/lurus92/fir-audit';

/* ---------- Holding page (before 21 Nov, 18:00 CET) ---------- */

const Holding = () => (
  <Layout
    title="FIR DACH 2026: results"
    path={PATH}
    description="Results of the 2026 DACH study of AI-agent readability: 20 online shops in Switzerland, Germany and Austria. Published on 21 November 2026 at 18:00 CET."
    header={
      <PageHeader
        narrow
        kicker="Failed Intent Rate · DACH e-commerce 2026 · Results"
        title="Can an AI agent answer your shoppers' questions? The 2026 DACH results"
        intro="20 online shops in Switzerland, Germany and Austria, ten everyday shopper questions, one openly identified agent."
      />
    }
  >
    <article className="prose max-w-3xl mx-auto">
      <aside className="explainer">
        <strong>Results go live here on Saturday 21 November 2026 at 18:00 CET</strong>
        <p>
          They are presented first at MeasureCamp Zurich on the same day. If you scanned the code during the session, thank you for
          coming: this page fills in at 18:00.
        </p>
      </aside>

      <h2>Already public</h2>
      <ul>
        <li>
          <a href="/fir/method/">The method</a>: the ten questions, how the agent read each site, how a question counts as answered, and how
          shops could correct their result.
        </li>
        <li>
          <a href="/fir/">What Failed Intent Rate is</a>, and how the audit variant used here differs from live FIR.
        </li>
        <li>
          <a href="/blog/fir-ai-judge-validation/">How do you know an AI judge is right?</a> How the model that scores each question was
          checked against human review.
        </li>
        <li>
          <a href={REPO}>fir-audit</a>, the open-source tool behind the study (public from 20 November 2026).
        </li>
      </ul>
      <p>
        Questions before then: <a href="mailto:luigi@lrusso.it">luigi@lrusso.it</a>.
      </p>
    </article>
  </Layout>
);

/* ---------- Report ---------- */

interface ReportProps {
  html: string;
  title: string;
  description: string;
  intro: string;
  meta: string;
  jsonLd: Record<string, unknown>;
}

const Report = ({ report }: { report: ReportProps }) => (
  <Layout
    title={report.title}
    path={PATH}
    ogType="article"
    description={report.description}
    bleed
    header={
      <PageHeader narrow kicker="Failed Intent Rate · DACH e-commerce 2026 · Results" title={report.title} intro={report.intro}>
        <p className="font-mono text-xs text-muted">{report.meta}</p>
      </PageHeader>
    }
  >
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(report.jsonLd) }} />
    </Head>
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="relative">
        <div dangerouslySetInnerHTML={{ __html: report.html }} />
        <ReadProgress key={SLUG} slug={SLUG} />
      </div>
    </article>
  </Layout>
);

const Dach2026Page = ({ report }: { report: ReportProps | null }) => (report ? <Report report={report} /> : <Holding />);

export const getStaticProps: GetStaticProps = async () => {
  const { isDach2026Published, getDach2026, STATUS_LABEL, COUNTRY_LABEL } = await import('../../lib/fir');
  if (!isDach2026Published()) return { props: { report: null } };
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { ReportBody, reportMeta } = await import('../../components/FirDach2026Report');
  const r = getDach2026();
  const html = renderToStaticMarkup(createElement(ReportBody, { r, labels: { status: STATUS_LABEL, country: COUNTRY_LABEL } }));
  return { props: { report: { html, ...reportMeta(r) } } };
};

export default Dach2026Page;
