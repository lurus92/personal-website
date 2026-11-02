import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

// Methods page for the FIR DACH pilot (MeasureCamp Zurich, 21 Nov 2026).
// Deliberately contains no per-shop results: those are published on 21 Nov.

const QUESTIONS: [string, string][] = [
  ['returns-window', 'How many days do I have to return an item?'],
  ['returns-cost', 'Are returns free, or do I have to pay for return shipping?'],
  ['shipping-cost', 'How much does shipping cost, and from what order value is it free?'],
  ['delivery-time', 'How long does standard delivery take?'],
  ['countries', 'Which countries do you deliver to?'],
  ['payment-methods', 'Which payment methods do you accept?'],
  ['invoice', 'Can I pay by invoice (Kauf auf Rechnung)?'],
  ['contact', 'How can I reach customer service, and when are they available?'],
  ['track-order', 'How do I track my order?'],
  ['warranty', 'How long is the warranty, and how do I make a warranty claim?'],
];

const AI_AGENTS =
  'GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Meta-ExternalAgent, Amazonbot, CCBot, Bytespider';

const FirMethod = () => (
  <Layout
    title="FIR study: method"
    path="/fir/method/"
    description="How the 2026 DACH study of AI-agent readability measured Failed Intent Rate on 20 online shops: questions, crawler, scoring, validation and limits."
    header={
      <PageHeader
        narrow
        kicker="Failed Intent Rate · DACH e-commerce pilot · Method"
        title="Can an AI assistant answer your shoppers' questions from your website?"
        intro="How the study works, so anyone in a shop's team can check a result. Results for each shop go privately to that shop first and are published on 21 November 2026."
      />
    }
  >
    <article className="prose max-w-3xl mx-auto">
      <h2>In short</h2>
      <ul>
        <li>20 online shops in Switzerland (12), Germany (5) and Austria (3).</li>
        <li>An openly identified agent read each shop&apos;s public pages the way many AI assistants do: plain HTML, no JavaScript, respecting robots.txt.</li>
        <li>It looked for answers to the same 10 questions shoppers ask before and after buying.</li>
        <li>
          <strong>Failed Intent Rate (FIR)</strong> = questions the site could not answer ÷ questions asked. Lower is better.
        </li>
        <li>Every unanswered question was checked by hand before it counted.</li>
      </ul>

      <h2>The 10 questions</h2>
      <p>
        Costs, delivery time, returns and payment methods are among the most common reasons shoppers abandon a purchase. Invoice payment is a
        specific expectation in the DACH market. The agent searched with German and English keywords.
      </p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {QUESTIONS.map(([id, q], i) => (
            <tr key={id}>
              <td>{i + 1}</td>
              <td>{q}</td>
              <td>
                <code>{id}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>How the agent read each site</h2>
      <ul>
        <li>
          User agent: <code>fir-audit/0.1 (+https://github.com/lurus92/fir-audit)</code>. It never pretended to be a browser. The code
          repository in the user agent opens to the public on 20 November 2026; until then, this page is the reference. Future runs identify
          as <code>fir-audit/0.1 (+https://lrusso.it/fir/method/)</code>.
        </li>
        <li>robots.txt respected, including Crawl-delay. At most one request per second, one site at a time.</li>
        <li>Same-site pages only, up to 40 pages per site. Links matching the questions&apos; keywords (returns, shipping, payment, contact…) were fetched first.</li>
        <li>Static HTML only: no JavaScript was run, no forms submitted, no login, no chat widgets.</li>
        <li>Content crawl: 22 October 2026. Access re-checked on 21, 22 and 24 October 2026.</li>
      </ul>

      <h2>Access: can an agent get in at all?</h2>
      <p>Before scoring content, each shop was placed in one of these groups:</p>
      <ul>
        <li>
          <strong>Scored:</strong> at least 5 help or policy pages with readable text in the HTML.
        </li>
        <li>
          <strong>Blocked:</strong> the server refused the agent (HTTP 401, 403 or 429) in the majority of at least 4 checks over 3 days.
        </li>
        <li>
          <strong>Inconsistent:</strong> refused in some checks and let in during others. Reported as such, not scored and not counted as blocked.
        </li>
        <li>
          <strong>Help not readable without JavaScript:</strong> the site responded, but fewer than 5 help or policy pages had their text in the HTML.
        </li>
        <li>
          <strong>Unreachable:</strong> network or server errors. This says nothing about a shop&apos;s policy.
        </li>
      </ul>
      <p>
        For every shop the study also records what robots.txt says to 14 known AI crawlers and assistants ({AI_AGENTS}). That makes it possible
        to compare what a site says it allows with what its server actually does.
      </p>

      <h2>How a question counts as answered</h2>
      <ol>
        <li>For each question, the 3 most relevant pages the agent read are selected.</li>
        <li>
          A language model (gpt-4o-mini, temperature 0) reads only those excerpts, with no outside knowledge of the company, and decides whether a
          shopper could get a specific, usable answer.
        </li>
        <li>
          An answer only passes if the model quotes the page word for word and the quote is found on the page. &quot;Contact us for details&quot;
          is not an answer.
        </li>
        <li>Every question marked unanswered is then checked by hand. Only failures confirmed by a person count.</li>
      </ol>

      <h2>Validation</h2>
      <ul>
        <li>60 of the 100 scored question-and-shop results were reviewed by hand, including every failure.</li>
        <li>
          Of 54 passes checked by hand, 2 were wrong (3.7%). The remaining passes rely on the model with a verified quote, so FIR may be slightly
          understated, never overstated.
        </li>
        <li>A second model used as a &quot;verifier&quot; was tested and dropped: it disagreed with human review too often.</li>
      </ul>

      <h2>Limits</h2>
      <ul>
        <li>One IP address, one user agent, four days of checks. A firewall may treat other agents differently.</li>
        <li>Static HTML only. Many AI assistants read pages this way, but some run JavaScript. Sites whose help centre needs JavaScript are reported, not scored.</li>
        <li>40 pages per site is a sample. An answer that exists deeper in a site can be missed. That is what the correction step is for.</li>
        <li>Two-part questions (warranty length and how to claim) make &quot;answered&quot; harder to judge. They will be split in the next version.</li>
        <li>With 10 scored shops, a difference of one or two questions is not a meaningful ranking.</li>
      </ul>

      <h2>Corrections and right of reply</h2>
      <p>
        Before anything is public, every shop receives its own result by email. If a result is wrong, for example a page the agent missed, or a
        change made after 22 October 2026, reply by <strong>13 November 2026</strong> and the shop is re-tested and corrected before publication.
        Shops can also send a short statement to be included in the study.
      </p>
      <p>
        If your team needs the details of a specific check (timestamps, pages read, the excerpt and quote behind each verdict), write to{' '}
        <a href="mailto:luigi@lrusso.it">luigi@lrusso.it</a>.
      </p>

      <h2>Timeline</h2>
      <ul>
        <li>21–24 October 2026: access checks and content crawl.</li>
        <li>13 November 2026: deadline for corrections and statements.</li>
        <li>20 November 2026: the test tool is released as open source.</li>
        <li>21 November 2026: results presented at MeasureCamp Zurich and published.</li>
      </ul>

      <h2>Who runs this</h2>
      <p>
        Luigi Russo, an analytics lead based in Zurich (previously TikTok, Vodafone and Sunrise), who coined the Failed Intent Rate metric.
        Disclosure: he also builds <a href="https://askvio.app">AskVio</a>, an assistant for websites. The study is independent of AskVio, and a
        shop&apos;s result does not depend on using it.
      </p>
    </article>
  </Layout>
);

export default FirMethod;
