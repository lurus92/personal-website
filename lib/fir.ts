// Failed Intent Rate: study data and release gate.
//
// Source of truth for the numbers: the frozen dataset in the fir-audit repo,
// reports/pilot-dach-2026-11/ (summary.csv, access-*.csv, per-shop JSON with human review).
// Keep this file in sync with it; do not edit numbers here by hand.
//
// Import this module ONLY from getStaticProps. Next strips getStaticProps (and anything only
// it imports) from the client bundle, so before the embargo lifts no shop result reaches the
// browser, not even inside a JS chunk.

// Embargo agreed with the press and the shops: Saturday 21 November 2026, 18:00 CET.
export const DACH_2026_RELEASE = '2026-11-21T18:00:00+01:00';

// A build after the embargo goes live on its own. Preview the live version earlier with
// `FIR_PUBLISH=1 npm run dev` (or `FIR_PUBLISH=1 npm run build` to prepare the upload).
export const isDach2026Published = () =>
  process.env.FIR_PUBLISH === '1' || Date.now() >= new Date(DACH_2026_RELEASE).getTime();

export type QuestionId =
  | 'returns-window'
  | 'returns-cost'
  | 'shipping-cost'
  | 'delivery-time'
  | 'countries'
  | 'payment-methods'
  | 'invoice'
  | 'contact'
  | 'track-order'
  | 'warranty';

export const QUESTIONS: { id: QuestionId; short: string; full: string }[] = [
  { id: 'returns-window', short: 'Return window', full: 'How many days do I have to return an item?' },
  { id: 'returns-cost', short: 'Return cost', full: 'Are returns free, or do I have to pay for return shipping?' },
  { id: 'shipping-cost', short: 'Shipping cost', full: 'How much does shipping cost, and from what order value is it free?' },
  { id: 'delivery-time', short: 'Delivery time', full: 'How long does standard delivery take?' },
  { id: 'countries', short: 'Countries', full: 'Which countries do you deliver to?' },
  { id: 'payment-methods', short: 'Payment', full: 'Which payment methods do you accept?' },
  { id: 'invoice', short: 'Invoice', full: 'Can I pay by invoice (Kauf auf Rechnung)?' },
  { id: 'contact', short: 'Contact', full: 'How can I reach customer service, and when are they available?' },
  { id: 'track-order', short: 'Tracking', full: 'How do I track my order?' },
  { id: 'warranty', short: 'Warranty', full: 'How long is the warranty, and how do I make a warranty claim?' }
];

export type Country = 'CH' | 'DE' | 'AT';
export type AccessStatus = 'scored' | 'blocked' | 'inconsistent' | 'no-js' | 'unreachable';

export interface Shop {
  name: string;
  domain: string;
  country: Country;
  status: AccessStatus;
  /** Help or policy pages with readable text in the static HTML (scored and no-js shops). */
  helpPages?: number;
  /** Human-confirmed failed questions (scored shops only). */
  failed?: QuestionId[];
  /** What robots.txt says to the 14 AI agents checked. */
  robots: { allowed: number; restricted: number; disallowed: number } | 'unreachable';
}

const all = { allowed: 14, restricted: 0, disallowed: 0 };

export const SHOPS: Shop[] = [
  { name: 'Bächli Bergsport', domain: 'baechli-bergsport.ch', country: 'CH', status: 'scored', helpPages: 20, failed: ['track-order'], robots: all },
  { name: 'Blue Tomato', domain: 'blue-tomato.com', country: 'AT', status: 'scored', helpPages: 29, failed: [], robots: all },
  { name: 'Brack.ch', domain: 'brack.ch', country: 'CH', status: 'scored', helpPages: 13, failed: ['track-order'], robots: all },
  { name: 'Galaxus', domain: 'galaxus.ch', country: 'CH', status: 'scored', helpPages: 5, failed: ['contact', 'track-order'], robots: all },
  { name: 'Mammut', domain: 'mammut.com', country: 'CH', status: 'scored', helpPages: 5, failed: [], robots: all },
  { name: 'Manor', domain: 'manor.ch', country: 'CH', status: 'scored', helpPages: 7, failed: ['payment-methods'], robots: all },
  { name: 'Ochsner Sport', domain: 'ochsnersport.ch', country: 'CH', status: 'scored', helpPages: 19, failed: [], robots: all },
  { name: 'Otto', domain: 'otto.de', country: 'DE', status: 'scored', helpPages: 25, failed: [], robots: { allowed: 9, restricted: 5, disallowed: 0 } },
  { name: 'Tchibo', domain: 'tchibo.de', country: 'DE', status: 'scored', helpPages: 33, failed: ['warranty'], robots: all },
  { name: 'Transa', domain: 'transa.ch', country: 'CH', status: 'scored', helpPages: 30, failed: [], robots: { allowed: 6, restricted: 8, disallowed: 0 } },
  { name: 'Interdiscount', domain: 'interdiscount.ch', country: 'CH', status: 'blocked', robots: all },
  { name: 'MediaMarkt DE', domain: 'mediamarkt.de', country: 'DE', status: 'blocked', robots: { allowed: 12, restricted: 0, disallowed: 2 } },
  { name: 'XXXLutz AT', domain: 'xxxlutz.at', country: 'AT', status: 'blocked', robots: 'unreachable' },
  { name: 'Zalando CH', domain: 'zalando.ch', country: 'CH', status: 'blocked', robots: 'unreachable' },
  { name: 'Fust', domain: 'fust.ch', country: 'CH', status: 'inconsistent', robots: all },
  { name: 'About You', domain: 'aboutyou.de', country: 'DE', status: 'no-js', helpPages: 0, robots: all },
  { name: 'Bergfreunde', domain: 'bergfreunde.de', country: 'DE', status: 'no-js', helpPages: 0, robots: { allowed: 13, restricted: 1, disallowed: 0 } },
  { name: 'Hervis', domain: 'hervis.at', country: 'AT', status: 'no-js', helpPages: 3, robots: all },
  { name: 'On', domain: 'on.com', country: 'CH', status: 'no-js', helpPages: 0, robots: all },
  { name: 'Freitag', domain: 'freitag.ch', country: 'CH', status: 'unreachable', robots: all }
];

// One line per human-confirmed failure, in plain words. Checked against the per-shop JSON.
export const FAILURE_NOTES: { shop: string; question: QuestionId; note: string }[] = [
  { shop: 'Bächli Bergsport', question: 'track-order', note: 'No page the agent could read explained how to track an order.' },
  { shop: 'Brack.ch', question: 'track-order', note: 'No page the agent could read explained how to track an order.' },
  { shop: 'Galaxus', question: 'track-order', note: 'No page the agent could read explained how to track an order.' },
  { shop: 'Galaxus', question: 'contact', note: 'Phone and email are listed, but not when customer service is available.' },
  { shop: 'Manor', question: 'payment-methods', note: 'The terms refer to "the payment methods shown on the website", but no page lists them.' },
  { shop: 'Tchibo', question: 'warranty', note: 'Warranty services are mentioned, but not how long the warranty lasts or how to claim.' }
];

export const STUDY = {
  crawlDate: '22 October 2026',
  accessChecks: '21, 22 and 24 October 2026',
  questionsPerShop: 10,
  agentsChecked: 14,
  handChecked: 60,
  handCheckedPasses: 54,
  wrongPasses: 2,
  shopsContacted: 16,
  corrections: 0,
  statements: 0
};

export const STATUS_LABEL: Record<AccessStatus, string> = {
  scored: 'Scored',
  blocked: 'Blocked',
  inconsistent: 'Inconsistent',
  'no-js': 'Help needs JavaScript',
  unreachable: 'Unreachable'
};

export const COUNTRY_LABEL: Record<Country, string> = { CH: 'Switzerland', DE: 'Germany', AT: 'Austria' };

// Everything the pages need, computed from SHOPS so the numbers cannot drift apart.
export const getDach2026 = () => {
  const scored = SHOPS.filter((s) => s.status === 'scored');
  const reachable = SHOPS.filter((s) => s.status !== 'unreachable');
  const letIn = reachable.filter((s) => s.status !== 'blocked' && s.status !== 'inconsistent');
  const failedTotal = scored.reduce((n, s) => n + (s.failed?.length ?? 0), 0);
  const asked = scored.length * QUESTIONS.length;
  const byQuestion = QUESTIONS.map((q) => ({
    ...q,
    failed: scored.filter((s) => s.failed?.includes(q.id)).map((s) => s.name)
  }));
  return {
    shops: SHOPS,
    total: SHOPS.length,
    byCountry: (['CH', 'DE', 'AT'] as Country[]).map((c) => ({ country: c, n: SHOPS.filter((s) => s.country === c).length })),
    funnel: { checked: SHOPS.length, reachable: reachable.length, letIn: letIn.length, scored: scored.length },
    scoredCount: scored.length,
    asked,
    failedTotal,
    firPct: Math.round((failedTotal / asked) * 1000) / 10,
    perfect: scored.filter((s) => (s.failed?.length ?? 0) === 0).length,
    byQuestion,
    failureNotes: FAILURE_NOTES,
    study: STUDY
  };
};

export type Dach2026 = ReturnType<typeof getDach2026>;

// Headline numbers for the FIR hub and the homepage. Null until the embargo lifts.
export const getDach2026Headline = () => {
  if (!isDach2026Published()) return null;
  const d = getDach2026();
  return {
    title: 'Half of DACH e-commerce is invisible to AI agents',
    total: d.total,
    scored: d.scoredCount,
    firPct: d.firPct,
    failedTotal: d.failedTotal,
    asked: d.asked
  };
};

export type Dach2026Headline = ReturnType<typeof getDach2026Headline>;
