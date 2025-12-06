window.blogPosts = [
  {
    slug: 'analytics-quality-playbook',
    title: 'The Analytics Quality Playbook: shipping reliable tracking without slowing teams',
    date: '2025-01-10',
    tags: ['analytics', 'gtm', 'data quality'],
    summary: 'How to design guardrails for tracking plans, governance, and shipping velocity.',
    content: [
      'Most analytics leaders fight two wars at once: business wants answers fast while engineers worry about data trust. The playbook is to align tracking plans with release cadence, not against it.',
      'Start with instrumentation contracts. Use schemas and test suites in your CI to validate GTM/Tealium payloads before they hit production. Pair this with a monitoring loop that spots drift in real time.',
      'Invest in documentation as a product. Pair your tagging specs with usage notes, examples, and owners. Add linting to catch anti-patterns like PII leakage.',
      'Finally, turn analytics QA into a habit: embed a data steward in sprint rituals and run a weekly observability review. This trims incident response and keeps dashboards trustworthy.',
    ],
  },
  {
    slug: 'llm-measurement',
    title: 'Measuring AI Products: telemetry that keeps LLM features honest',
    date: '2024-12-02',
    tags: ['ai', 'llm', 'measurement'],
    summary: 'Design a measurement layer for LLM copilots, from prompt tracing to user success signals.',
    content: [
      'LLM features fail quietly: hallucinations, latency spikes, or misalignment with user intent. Instrument prompts, responses, and user edits to see where value erodes.',
      'Define golden paths and success signals—task completion, feedback buttons, time-to-decision. Pair them with guardrails such as profanity filters and PII scrubbing.',
      'Ship an evaluation harness that replays production prompts against new models and measures quality regressions. Connect it to your release pipeline so you can stop a rollout before it harms customers.',
    ],
  },
  {
    slug: 'cdp-roadmap',
    title: 'Building a CDP Roadmap That Actually Ships',
    date: '2024-10-14',
    tags: ['cdp', 'roadmap', 'martech'],
    summary: 'A pragmatic order-of-operations for CDP rollouts that respect data trust and adoption.',
    content: [
      'Pick one or two lighthouse use cases, not a platform migration. Lifecycle emails or onsite personalization are great first bets.',
      'Design data contracts and identity resolution early. Bad merges will poison every activation channel and erode trust.',
      'Pair engineers with marketers in co-building pods. They plan profiles, events, and destinations together, reducing friction and shadow IT.',
      'Ship early wins, measure lift, and document what “good” looks like. The goal is a sustainable operating model, not just a new tool.',
    ],
  },
];
