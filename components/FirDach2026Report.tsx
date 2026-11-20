import type { Dach2026, Shop } from '../lib/fir';

// Body of the 2026 DACH results page (/fir/dach-2026/).
// Imported ONLY from that page's getStaticProps and rendered to static HTML at build time,
// so none of this text ships in a client JS chunk before the embargo lifts.

const REPO = 'https://github.com/lurus92/fir-audit';
const DATA = 'https://github.com/lurus92/fir-audit/tree/main/reports/pilot-dach-2026-11';
// Set to '/fir/fir-dach-2026.pdf' once the whitepaper PDF is in public/fir/.
// const WHITEPAPER_PDF: string | null = null;
const WHITEPAPER_PDF = '/fir/fir-dach-2026.pdf';

export interface Labels {
  status: Record<string, string>;
  country: Record<string, string>;
}

const pct = (n: number, d: number) => `${Math.round((n / d) * 100)}%`;
const list = (names: string[]) =>
  names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const word = (n: number) => WORDS[n] ?? String(n);
const Word = (n: number) => word(n).charAt(0).toUpperCase() + word(n).slice(1);

const robotsText = (r: Shop['robots']) => {
  if (r === 'unreachable') return 'robots.txt itself returned 403';
  if (r.disallowed) return `allows ${r.allowed}, disallows ${r.disallowed}`;
  if (r.restricted) return `allows ${r.allowed}, limits ${r.restricted} to some paths`;
  return `allows all ${r.allowed}`;
};

export const reportMeta = (r: Dach2026) => {
  const notScored = r.total - r.scoredCount;
  const title = 'Half of DACH e-commerce is invisible to AI agents';
  return {
    title,
    description: `An AI agent asked ${r.total} DACH online shops ten everyday shopper questions. ${notScored} never showed it a readable help page. The ${r.scoredCount} that did answered ${r.asked - r.failedTotal} of ${r.asked}.`,
    intro: `I sent an openly identified AI agent to ${r.total} online shops in Switzerland, Germany and Austria with ten everyday shopper questions. ${notScored * 2 === r.total ? 'Half of them' : `${notScored} of them`} never let it read a usable help page. The ${r.scoredCount} that did answered ${r.asked - r.failedTotal} of ${r.asked}.`,
    meta: `21 November 2026, Zurich / presented at MeasureCamp Zurich / data from ${r.study.crawlDate}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: `Failed Intent Rate study of ${r.total} online shops in Switzerland, Germany and Austria.`,
      datePublished: '2026-11-21',
      author: { '@type': 'Person', name: 'Luigi Russo', url: 'https://lrusso.it' },
      mainEntityOfPage: 'https://lrusso.it/fir/dach-2026/',
      isBasedOn: DATA
    }
  };
};


const Funnel = ({ r }: { r: Dach2026 }) => {
  const names = (f: (s: Shop) => boolean) => r.shops.filter(f).map((s) => s.name);
  const rows = [
    { label: 'Checked', n: r.funnel.checked, note: `${r.byCountry.map((c) => `${c.n} in ${c.country}`).join(', ')}` },
    { label: 'Reachable', n: r.funnel.reachable, note: `Network errors on every check: ${list(names((s) => s.status === 'unreachable'))}` },
    {
      label: 'Let the agent in',
      n: r.funnel.letIn,
      note: `Refused: ${list(names((s) => s.status === 'blocked'))}. In and out: ${list(names((s) => s.status === 'inconsistent'))}`
    },
    {
      label: 'Help readable',
      n: r.funnel.scored,
      note: `Help needs JavaScript: ${list(names((s) => s.status === 'no-js'))}`
    }
  ];
  return (
    <figure className="viz">
      <div
        className="bars bars-funnel"
        role="img"
        aria-label={`Of ${r.funnel.checked} shops, ${r.funnel.reachable} were reachable, ${r.funnel.letIn} let the agent in, and ${r.funnel.scored} had help pages readable without JavaScript.`}
      >
        {rows.map((row, i) => (
          <div className="bar-row" key={row.label}>
            <span className="bar-label">{row.label}</span>
            <span className="bar-track">
              <span className={`bar-fill${i === rows.length - 1 ? '' : ' is-quiet-fill'}`} style={{ width: pct(row.n, r.funnel.checked) }} />
            </span>
            <span className="bar-value">{row.n}</span>
            <span className="bar-note">{row.note}</span>
          </div>
        ))}
      </div>
      <figcaption>
        Each row is the shops left after the step before. Only the last row could be scored. Access checked on {r.study.accessChecks}.
      </figcaption>
    </figure>
  );
};

const RobotsVsServer = ({ r }: { r: Dach2026 }) => {
  const refused = r.shops.filter((s) => s.status === 'blocked' || s.status === 'inconsistent');
  // Shops whose robots.txt welcomes the agents first: that is where the contradiction is.
  refused.sort((a, b) => Number(a.robots === 'unreachable') - Number(b.robots === 'unreachable'));
  return (
    <figure className="viz">
      <table className="diff says-does">
        <thead>
          <tr>
            <th>Shop</th>
            <th>robots.txt, for {r.study.agentsChecked} AI agents</th>
            <th>The server, to the agent</th>
          </tr>
        </thead>
        <tbody>
          {refused.map((s) => (
            <tr key={s.domain}>
              <th scope="row">
                {s.name}
                <span className="cell-sub">{s.domain}</span>
              </th>
              <td className={s.robots === 'unreachable' ? '' : 'is-good'}>{robotsText(s.robots)}</td>
              <td className="is-bad">{s.status === 'inconsistent' ? '403 on 2 of 5 checks' : '403 on every check'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption>
        The five shops that refused the agent. Three publish a robots.txt that welcomes AI agents; their server turned the same agent away.
      </figcaption>
    </figure>
  );
};

const Matrix = ({ r }: { r: Dach2026 }) => {
  const scored = r.shops
    .filter((s) => s.status === 'scored')
    .sort((a, b) => (a.failed?.length ?? 0) - (b.failed?.length ?? 0) || a.name.localeCompare(b.name));
  return (
    <figure className="viz">
      <div className="matrix-wrap">
        <table className="matrix">
          <thead>
            <tr>
              <th className="matrix-corner" scope="col">
                <span className="sr-only">Shop</span>
              </th>
              {r.byQuestion.map((q) => (
                <th key={q.id} scope="col" title={q.full}>
                  <span>{q.short}</span>
                </th>
              ))}
              <th scope="col" className="matrix-fir">
                <span>FIR</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {scored.map((s) => (
              <tr key={s.domain}>
                <th scope="row">{s.name}</th>
                {r.byQuestion.map((q) => {
                  const fail = s.failed?.includes(q.id);
                  return (
                    <td key={q.id} className={fail ? 'm-fail' : 'm-pass'}>
                      <span className="sr-only">{fail ? 'not answered' : 'answered'}</span>
                    </td>
                  );
                })}
                <td className="matrix-fir">{pct(s.failed?.length ?? 0, r.byQuestion.length)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="matrix-legend" aria-hidden="true">
        <span className="m-key m-pass" /> answered <span className="m-key m-fail" /> not answered, confirmed by hand
      </p>
      <figcaption>
        The {r.scoredCount} scored shops against the {r.byQuestion.length} questions: {r.asked - r.failedTotal} of {r.asked} answered. Sorted by
        failures, then name. With {r.scoredCount} shops, one question either way is not a ranking.
      </figcaption>
    </figure>
  );
};

const ByQuestion = ({ r }: { r: Dach2026 }) => {
  const rows = [...r.byQuestion].filter((q) => q.failed.length > 0).sort((a, b) => b.failed.length - a.failed.length);
  const clean = r.byQuestion.filter((q) => q.failed.length === 0).map((q) => q.short.toLowerCase());
  return (
    <figure className="viz">
      <div className="bars" role="img" aria-label={rows.map((q) => `${q.short}: ${q.failed.length} of ${r.scoredCount}`).join('; ')}>
        {rows.map((q) => (
          <div className="bar-row" key={q.id}>
            <span className="bar-label">{q.short}</span>
            <span className="bar-track">
              {q.failed.length > 0 && <span className="bar-fill is-bad-fill" style={{ width: pct(q.failed.length, r.scoredCount) }} />}
            </span>
            <span className="bar-value">
              {q.failed.length} / {r.scoredCount}
            </span>
          </div>
        ))}
      </div>
      <figcaption>
        Scored shops that could not answer each question. Answered by all {r.scoredCount}: {list(clean)}.
      </figcaption>
    </figure>
  );
};

export const ReportBody = ({ r, labels }: { r: Dach2026; labels: Labels }) => {
  const names = (f: (s: Shop) => boolean) => list(r.shops.filter(f).map((s) => s.name));
  const tracking = r.byQuestion.find((q) => q.id === 'track-order')!;
  const notScored = r.total - r.scoredCount;
  const ordered = [...r.shops].sort((a, b) => {
    const order = ['scored', 'blocked', 'inconsistent', 'no-js', 'unreachable'];
    return order.indexOf(a.status) - order.indexOf(b.status) || a.name.localeCompare(b.name);
  });

  return (
    <div className="prose">
      <p>
        <em>
          (Disclosure: I build AskVio, an assistant for websites, and I coined the Failed Intent Rate. The study needs no AskVio, and no
          shop&apos;s result depends on using it. Every shop saw its own result before publication.)
        </em>
      </p>

      <p>
        When a shopper asks an AI assistant &quot;are returns free at this shop?&quot;, the assistant has to read the shop&apos;s own
        pages to answer. So I built an agent that reads pages the way many assistants do (plain HTML, no JavaScript, robots.txt
        respected, an honest user agent) and sent it to {r.total} well-known shops with the ten questions shoppers ask most before
        and after they buy.
      </p>

      <figure className="viz">
        <div className="stats">
          <div>
            <b>{r.total}</b>shops checked in Switzerland, Germany and Austria
          </div>
          <div className="is-bad-key">
            <b>{notScored}</b>never showed the agent a readable help page
          </div>
          <div className="is-key">
            <b>{r.firPct}%</b>Failed Intent Rate across the {r.scoredCount} that did ({r.failedTotal} of {r.asked})
          </div>
          <div>
            <b>{r.study.corrections}</b>corrections asked for by the {r.study.shopsContacted} shops contacted
          </div>
        </div>
        <figcaption>The study in four numbers. The problem is getting in, not what the shops write.</figcaption>
      </figure>

      <aside className="explainer">
        <strong>Failed Intent Rate (FIR), audit variant</strong>
        <span
          dangerouslySetInnerHTML={{
            __html:
              '<math display="block"><mrow><mtext>FIR</mtext><mo>=</mo><mfrac><mtext>questions not answered</mtext><mtext>questions asked</mtext></mfrac></mrow></math>'
          }}
        />
        <p>
          Lower is better. A question fails when the public pages hold no specific, usable answer; &quot;contact us for details&quot;
          is a failure. Every failure here was confirmed by hand. <a href="/fir/">What FIR is</a> and{' '}
          <a href="/fir/method/">the full method</a>.
        </p>
      </aside>

      <aside className="explainer">
          <strong>The ten questions</strong>
          <ol className="q-list">
            {r.byQuestion.map((q) => (
              <li key={q.id}>
                <span className="q-short">{q.short}</span>
                {q.full}
              </li>
            ))}
          </ol>
          <p>The same questions for every shop, searched with German and English keywords. They come from the most common reasons shoppers abandon a purchase, plus invoice payment, which DACH shoppers expect.</p>
        </aside>

        <h2>Half the shops never got as far as a question</h2>
      <p>
        Before content matters, an agent has to get in and find readable text. {r.funnel.checked - r.funnel.scored} of {r.funnel.checked}{' '}
        shops fell out at one of three steps.
      </p>
      <Funnel r={r} />
      <p>
        An assistant that reads pages this way would have come back empty-handed from half of the sample, whatever those shops have
        written in their help centres. Freitag is the exception that says nothing about policy: its server failed with network errors
        on every check, which is why the study reports it as unreachable rather than blocked.
      </p>

      <h2>robots.txt says yes, the server says no</h2>
      <p>
        robots.txt is where a shop tells crawlers what they may read. For every shop I recorded what it says to{' '}
        {r.study.agentsChecked} AI crawlers and assistants, from GPTBot and ChatGPT-User to ClaudeBot and PerplexityBot. None of the 18
        readable files turns ChatGPT, Claude or Perplexity away. Then I compared that with what the server actually did.
      </p>
      <RobotsVsServer r={r} />
      <p>
        Interdiscount and MediaMarkt DE are the clearest cases: a robots.txt that welcomes AI agents, and a server that refuses an
        openly identified one at every check. At Zalando CH and XXXLutz AT the refusal comes before any policy can be read, because
        even robots.txt returns 403. Fust refused both full audits (22 and 24 October) but let three short access checks through, so it is reported as inconsistent, not blocked.
      </p>
      <p>
        One honest limit: the agent used one user agent from one IP address. A firewall that refused it may let a verified assistant
        such as ChatGPT-User through. So this does not show that these shops block ChatGPT. It shows that robots.txt is not what
        decides: bot-management rules at the edge are, and any agent that is not on their list gets nothing.
      </p>

      <aside className="explainer">
        <strong>robots.txt and bot management</strong>
        <p>
          robots.txt is a public text file of requests to crawlers; it enforces nothing. Bot management is the part of a CDN or firewall
          that decides, request by request, who gets a page and who gets an HTTP 403 (&quot;forbidden&quot;). The two are often run by
          different teams, which is how they end up disagreeing.
        </p>
      </aside>

      <h2>Help centres an agent can&apos;t read</h2>
      <p>
        At {names((s) => s.status === 'no-js' && s.helpPages === 0)}, the server answered, but none of the help or policy pages the
        agent found had their text in the HTML. At Hervis, only 3 did, below the minimum of 5 the study needs. These help centres fill
        in with JavaScript after the page loads.
      </p>
      <p>
        I report these shops rather than score them, because scoring them would read as &quot;no answer&quot; when the answer may well
        be there for a browser. But that is exactly the point: many AI assistants read pages without running JavaScript, and to them,
        these help centres are blank.
      </p>

      <h2>Once inside, the answers are there</h2>
      <p>
        The {r.scoredCount} shops the agent could read did well. {Word(r.perfect)} answered all ten questions, four missed one, and Galaxus missed two. Across all {r.scoredCount}, the Failed Intent Rate is {r.firPct}%.
      </p>
      <Matrix r={r} />
      <p>
        A clear &quot;no&quot; counts as an answer. Tchibo says you can&apos;t pay by invoice, and Otto says it delivers only within
        Germany: a shopper knows where they stand, so both pass. What fails is silence, or a page that points somewhere else.
      </p>

      <h2>The question shops miss most: where is my order?</h2>
      <ByQuestion r={r} />
      <p>
        {Word(tracking.failed.length)} of the {r.scoredCount} scored shops ({list(tracking.failed)}) have no public page the agent
        could read that explains how to track an order. It is one of the most common things a customer asks after buying, and probably one of the
        first they will ask an assistant. Every other question failed at most once.
      </p>
      <p>All {word(r.failedTotal)} failures, as confirmed by hand:</p>
      <ul>
        {Object.values(
          r.failureNotes.reduce<Record<string, { shops: string[]; question: string; note: string }>>((acc, f) => {
            const k = `${f.question}|${f.note}`;
            acc[k] = acc[k] ?? { shops: [], question: f.question, note: f.note };
            acc[k].shops.push(f.shop);
            return acc;
          }, {})
        ).map((g) => (
          <li key={`${g.question}-${g.shops[0]}`}>
            <strong>{list(g.shops)}</strong> ({r.byQuestion.find((q) => q.id === g.question)!.short.toLowerCase()}):{' '}
            {g.note.charAt(0).toLowerCase() + g.note.slice(1)}
          </li>
        ))}
      </ul>

      <h2>Three checks for your own shop</h2>
      <ol>
        <li>
          <strong>Ask your server, not your robots.txt.</strong> Request a help page with a non-browser user agent, for example{' '}
          <code>curl -A fir-audit</code>, and see whether you get the page or a 403. If robots.txt says yes and the
          server says no, the firewall wins.
        </li>
        <li>
          <strong>View source on your returns and shipping pages.</strong> If the policy text isn&apos;t in the HTML, an agent that
          doesn&apos;t run JavaScript sees an empty page.
        </li>
        <li>
          <strong>Give each of the ten questions a plain answer on a public page</strong>, including order tracking and customer-service
          hours. A short paragraph is enough.
        </li>
      </ol>
      <p>
        The ten questions ship with <a href={REPO}>fir-audit</a>, so you can run the same audit on your own shop from a clone of the repo:{' '}
        <code>node bin/fir-audit.js https://your-shop.example --tasks tasks/dach-ecommerce.json</code>.
      </p>

      <h2>Right of reply</h2>
      <p>
        Before anything was public, {r.study.shopsContacted} of the {r.total} shops got their own result by email on 3 November, with the
          evidence behind each verdict and until 13 November to correct it or send a short statement. For the other{' '}
          {word(r.total - r.study.shopsContacted)} (MediaMarkt, Zalando, Otto and Freitag) I found no working address. No shop asked for a correction or sent a statement. If a result here is wrong, write to <a href="mailto:luigi@lrusso.it">luigi@lrusso.it</a> and I will re-test
        and correct this page, with a note.
      </p>

      <h2>All {r.total} shops</h2>
      <figure className="viz">
        <table className="results">
          <thead>
            <tr>
              <th>Shop</th>
              <th>Country</th>
              <th>Result</th>
              <th className="num">FIR</th>
            </tr>
          </thead>
          <tbody>
            {ordered.map((s) => (
              <tr key={s.domain}>
                <th scope="row">
                  {s.name}
                  <span className="cell-sub">{s.domain}</span>
                </th>
                <td>{s.country}</td>
                <td className={s.status === 'scored' ? '' : 'is-muted'}>
                  {labels.status[s.status]}
                  {s.status === 'no-js' && s.helpPages ? ` (${s.helpPages} readable pages)` : ''}
                </td>
                <td className="num">{s.status === 'scored' ? pct(s.failed?.length ?? 0, 10) : '–'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <figcaption>
          Blocked: refused (HTTP 403) on most of at least four checks over three days. Inconsistent: let in on some checks, refused on
          others. Help needs JavaScript: fewer than five help or policy pages with text in the HTML. Unreachable: network or server
          errors.
        </figcaption>
      </figure>

      <h2>Method, data and code</h2>
      <ul>
        <li>
          <a href="/fir/method/">Method</a>: questions, crawler, scoring, validation and limits.
        </li>
        <li>
          <a href="/blog/fir-ai-judge-validation/">How the AI judge was validated</a>: {r.study.handChecked} of {r.asked} verdicts
          checked by hand, including every failure; {r.study.wrongPasses} of {r.study.handCheckedPasses} hand-checked passes were wrong,
          so FIR may be slightly understated, never overstated.
        </li>
        <li>
          <a href={REPO}>fir-audit on GitHub</a>, open source under MIT, with <a href={DATA}>the frozen dataset of this study</a>.
        </li>
        {WHITEPAPER_PDF && (
          <li>
            <a href={WHITEPAPER_PDF}>The whitepaper (PDF)</a>: the full study in nine pages.
          </li>
        )}
      </ul>
      <p>
        The main limits: one IP address and one user agent; static HTML only; up to 40 pages per shop; content crawled on{' '}
        {r.study.crawlDate}, so a shop may have changed since.
      </p>

      <h2>Next: the 2027 Failed Intent Index</h2>
      <p>
        In 2027 the study repeats in DACH, for a year-on-year comparison, and extends to Italy, the UK and the UAE, with two-part
        questions split and an agent that runs JavaScript alongside the plain-HTML one. If you want your shop in it, or the results first,
        write to <a href="mailto:luigi@lrusso.it">luigi@lrusso.it</a>.
        </p>

        {WHITEPAPER_PDF && (
          <aside className="download">
            <div>
              <p className="download-kicker">Whitepaper · PDF · 9 pages</p>
              <p className="download-title">The full study: Can AI agents shop in DACH?</p>
              <p>
                Everything in one document to keep or forward: why it matters, the full method, every shop&apos;s access and content
                result, how the judge was validated, the limits, and what a shop can do on Monday.
              </p>
            </div>
            <a href={WHITEPAPER_PDF} className="btn-accent" download data-analytics-label="FIR DACH 2026 whitepaper" data-analytics-location="Report end">
              Download the whitepaper
            </a>
          </aside>
        )}
      </div>
  );
};
