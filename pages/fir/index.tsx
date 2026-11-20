import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import type { Dach2026Headline } from '../../lib/fir';

// FIR hub: the canonical definition of the Failed Intent Rate and its two variants, plus the
// studies that use it (one sub-page per study: /fir/dach-2026/, then the 2027 index).
// The original definition (live FIR) was first published on the AskVio blog in May 2026;
// this page is the neutral reference that the studies, the press and AskVio link to.

const ORIGINAL_POST = 'https://askvio.app/blog/failed-intent-rate/';

const VARIANTS: [string, string, string][] = [
  ['What it measures', 'How often real visitors asked for something and did not get it', 'How often a site cannot answer a fixed set of common questions'],
  ['Where questions come from', 'Real visitors, in their own words, through an on-site assistant', 'A fixed list, the same for every site (10 in the 2026 DACH study)'],
  ['A question fails when', 'The answer has low confidence, or a product request matches nothing in the catalog', 'The public pages hold no specific, usable answer'],
  ['Formula', '(low-confidence answers + zero-catalog-match queries) ÷ all queries', 'questions not answered ÷ questions asked'],
  ['Components', 'Content FIR and Catalog FIR, tracked separately', 'One number per site; catalog gaps are out of scope'],
  ['What you need', 'An assistant on the site that logs questions and answers', 'Nothing on the site; an outside crawler reads public pages'],
  ['Comparable across sites?', 'No: each site gets different questions', 'Yes: same questions, same crawler, same scoring'],
  ['Best for', 'Finding what to fix first on your own site, week by week', 'Benchmarks, studies, and checking a site before an assistant goes live'],
];

const FirIndex = ({ dach }: { dach: Dach2026Headline }) => (
  <Layout
    title="Failed Intent Rate (FIR)"
    path="/fir/"
    description="Failed Intent Rate (FIR): the share of visitor questions a website fails to answer. Definition, the live and audit variants, and the studies that measure it."
    header={
      <PageHeader
        narrow
        kicker="Metric · Definition · Studies"
        title="Failed Intent Rate (FIR)"
        intro="The share of questions a website fails to answer. Analytics shows what visitors did. FIR measures what they wanted and didn't get."
      />
    }
  >
    <article className="prose max-w-3xl mx-auto">
      <h2>Studies</h2>
      <div className="study-list">
        <a href="/fir/dach-2026/" data-analytics-event="select_content" data-analytics-category="FIR study" data-analytics-label="DACH 2026">
          <span className="study-meta">2026 · Switzerland, Germany, Austria · presented at MeasureCamp Zurich</span>
          <span className="study-title">
            {dach ? dach.title : 'DACH e-commerce 2026: can an AI agent answer your shoppers?'}
          </span>
          {dach ? (
            <span className="study-nums">
              {dach.total} shops · <b className="is-bad">{dach.total - dach.scored}</b> never showed the agent a readable help page · FIR <b>{dach.firPct}%</b>{' '}
              across the {dach.scored} that did
            </span>
          ) : (
            <span>20 online shops, ten shopper questions. Results published on 21 November 2026 at 18:00 CET.</span>
          )}
        </a>
        <div>
          <span className="study-meta">2027 · DACH, Italy, UK, UAE · in preparation</span>
          <span className="study-title">The 2027 Failed Intent Index</span>
          <span>
            The DACH sample again for a year-on-year comparison, plus three new markets. To take part or get the results first, write to{' '}
            <a href="mailto:luigi@lrusso.it">luigi@lrusso.it</a>.
          </span>
        </div>
      </div>

      <h2>Definition</h2>
      <p>
        A visitor arrives with a question: are returns free, do you ship to Austria, do you have this in XL. If the site gives no usable
        answer, that intent has failed. FIR is the share of those questions that fail:
      </p>
      <aside className="explainer">
        <strong>Failed Intent Rate</strong>
        <p>FIR = failed questions ÷ questions asked. Lower is better.</p>
      </aside>
      <p>
        Standard analytics can&apos;t see this. GA4 records that a session ended, not that the visitor was looking for a returns policy that was
        buried in a PDF. Two sessions that look the same in a dashboard can fail for completely different reasons, and each reason has its
        own fix.
      </p>
      <p>
        I defined the metric in May 2026 in{' '}
        <a href={ORIGINAL_POST}>Failed Intent Rate: the KPI your GA4 dashboard is missing</a>, on the blog of AskVio, the website assistant I
        build, and presented it publicly for the first time at MeasureCamp Los Angeles on 30 May 2026. That post measures FIR on live
        traffic. For the 2026 DACH study I needed a version that works from outside, on any site,
        without an assistant installed. That gives two variants of the same idea.
      </p>

      <h2>Two variants: live FIR and audit FIR</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Live FIR</th>
            <th>Audit FIR</th>
          </tr>
        </thead>
        <tbody>
          {VARIANTS.map(([label, live, audit]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{live}</td>
              <td>{audit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <strong>The two numbers are not interchangeable.</strong> Live FIR depends on what a site&apos;s own visitors happen to ask, so a 12%
        live FIR and a 12% audit FIR say different things. When FIR is reported, it should say which variant it is.
      </p>
      <p>
        They work well together. Audit FIR asks: can a site answer the basics a shopper needs, before any visitor shows up? Live FIR asks:
        once visitors arrive, what do they actually ask that the site can&apos;t answer? A site can score well on the first and still fail on
        the second, for example because shoppers keep asking for a size or product it doesn&apos;t sell.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/fir/dach-2026/">The 2026 DACH study: results</a>, shop by shop, and <a href="/fir/method/">its method</a>: questions,
          crawler, scoring, validation and limits.
        </li>
        <li>
          <a href="/blog/fir-ai-judge-validation/">How do you know an AI judge is right?</a> How the model that scores audit FIR was checked
          against human review.
        </li>
        <li>
          <a href={ORIGINAL_POST}>The original FIR post</a> on the AskVio blog. Live FIR, its two components and the three kinds of failed
          intent.
        </li>
      </ul>

      <h2>Disclosure</h2>
      <p>
        I build <a href="https://askvio.app">AskVio</a>, which reports live FIR to the shops that use it. Audit FIR needs no AskVio and no
        assistant of any kind, and a shop&apos;s audit result does not depend on using one. The scoring tool, fir-audit, will be open source
        from 20 November 2026.
      </p>
    </article>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const { getDach2026Headline } = await import('../../lib/fir');
  return { props: { dach: getDach2026Headline() } };
};

export default FirIndex;
