# Personal Website Specification – Luigi Russo

This document is the complete brief for building **Luigi Russo’s** personal website and product lab.
It is written for a coding-oriented AI (e.g. OpenAI Codex / code assistant) that **does not know Luigi**.

---

## 1. Identity & Goals

### 1.1 Who Is Luigi Russo

**Name:** Luigi Russo
**Website main domain:** `lrusso.it` (assumed)
**Location:** Based in Zurich, with strong ties to Milan (Italy) and Dubai (UAE)
**Profile:**

* Analytics & Marketing Technology leader (10+ years)
* Expert in **Digital Analytics, Tag Management, CDP, CRO, and Tracking**
* Strong hands-on background with:

  * **Google Tag Manager**
  * **Google Analytics (GA4)**
  * **Adobe Analytics**
  * **Tealium (CDP / Tag Manager)**
  * **Adobe Target**
  * **Medallia**
  * **Power BI & data tooling**
* Builds **AI-driven products** on the side (indie developer / solo founder)
* Background: **MSc & BSc in Computer Science and Engineering** (Politecnico di Milano)
* Experience in large international companies (TikTok, telecom, large retailers, travel/e-commerce)
* Also a **writer** (science fiction & literary) and **traveller**.

### 1.2 Website Objectives

The website must:

1. **Establish Luigi’s professional brand**

   * Position him as an **Analytics Leader & AI Product Builder**.
   * Showcase his experience, products, and thinking.

2. **Support consulting / freelancing opportunities**

   * Make it easy for companies to understand what he offers.
   * Provide a clear way to **contact him** or **book a call**.

3. **Showcase his products & experiments**

   * Dedicated section for **AI & software projects** (e.g. ExamBot, Wingman, Cast, Inquiro/AskVio, Ora, etc.).
   * Present them as products in a personal “lab” or “studio”.

4. **Host an Analytics-focused blog**

   * Articles on analytics, tracking, CDPs, AI for marketing/measurement, etc.
   * Used for personal branding, SEO, and lead generation.

5. **Be maintainable by Luigi**

   * Minimal friction to publish new blog posts & project pages.
   * Clean, modern codebase.

---

## 2. Technical Stack & Architecture

### 2.1 Overall Approach

* **Main Site (pages, projects, consulting, about):**

  * Use a **modern static-site / Jamstack approach**:

    * Recommended: **Next.js** (React-based, supports SEO, routing, and easy deployment).
    * Alternative: **Astro** or **Nuxt** (if desired), but Next.js is default.

* **Blog:**

  * Preferred: **Markdown/MDX-based blog within the same Next.js project**.

    * Blog posts stored as `.mdx` or `.md` files in a `/content` or `/posts` folder.
    * No heavy CMS needed at first.
  * Optional future step: integrate a headless CMS (e.g. Ghost, Sanity, Contentful) – but **not required now**.

* **Styling & UI:**

  * Use **Tailwind CSS** for rapid, consistent styling.
  * Optionally use a UI component library like **shadcn/ui** (if available) for buttons, cards, nav, etc.
  * Design must be **responsive** (desktop, tablet, mobile).

* **Hosting:**

  * Recommended: **Vercel** or **Netlify** (simple deployment, supports Next.js).

* **SEO & Metadata:**

  * Use Next.js `metadata` / `<Head>` for:

    * Title, description, OpenGraph, Twitter cards.
  * Generate sitemap and RSS feed for the blog.

### 2.2 Page Routing Structure

Assume base URL: `https://lrusso.it`

Planned routes:

* `/` → Homepage
* `/about` → About Luigi (extended bio)
* `/projects` → Project overview (Russo Technologies lab)
* `/projects/[slug]` → Individual project pages
* `/blog` → Blog index
* `/blog/[slug]` → Blog post
* `/consulting` → Consulting / services page
* `/contact` → Contact page

Optional:

* `/rt` → Alias/landing for “Russo Technologies” (could point to `/projects`).

---

## 3. Visual & UX Design

### 3.1 Overall Design Principles

* **Tone:** Professional, modern, minimal, but not cold.
* **Style keywords:** Clean, analytical, “product studio” feel, not corporate dull.
* **Color palette (suggested):**

  * Background: dark or dark-gray variant (e.g. `#050816` / `#0B1020`) or a very light neutral; Luigi tends to like **dark UI** especially for data/finance.
  * Accent: **teal / cyan** (data/tech feel), plus **green** for positive metrics.
  * Neutral text: `#E5E7EB` (light gray) for body, `#F9FAFB` for headings.
* **Typography:**

  * Modern sans-serif such as **Inter**, **SF Pro**, or **IBM Plex Sans**.
  * Optional: a serif for headings in blog posts (for readability & personality), e.g. **Merriweather**.

### 3.2 Layout

* **Header / Navbar:**

  * Left: Logo (text or minimal symbol, e.g. “LR” or “Luigi Russo”).
  * Right: Navigation links:

    * Home
    * Projects
    * Blog
    * Consulting
    * About
    * Contact

* **Footer:**

  * Copyright text
  * Links: LinkedIn, GitHub (if desired), Instagram (optional)
  * Email address link
  * Link to privacy / legal (simple static page)

* **Responsiveness:**

  * On mobile: collapsible menu (hamburger).
  * Sections stack vertically with adequate spacing.

---

## 4. Content Structure by Page

### 4.1 Homepage (`/`)

**Goal:** Immediately communicate who Luigi is, what he does, and where to go next.

#### Sections (Top to Bottom)

1. **Hero Section**

   * Left side:

     * Heading:

       > Luigi Russo
       > *Analytics Leader & AI Product Builder*
     * Short paragraph (3–4 lines) summarizing:

       * His experience in analytics & MarTech.
       * His work building AI-driven products.
       * His international background (Zurich, Milan, Dubai).
     * Primary CTA buttons:

       * **View My Projects** → `/projects`
       * **Read the Analytics Blog** → `/blog`
   * Right side:

     * Headshot or stylized avatar / illustration.
     * Alternatively: a simple, abstract “data + AI” graphic.

2. **What I Do (3 Pillars)**
   Present as three cards/columns with icons.

   * **Analytics & Data Strategy**

     * Text (example):
       “I design and lead end-to-end analytics and tracking setups – from GTM/Tealium implementation to GA4, attribution, and CRO. 10+ years in tech, telecom, travel, and retail.”

   * **AI Products & Tools**

     * Text (example):
       “I build AI-powered products — exam generation, AI dating, conversational search, wealth forecasting — turning ideas into real, working software.”

   * **Consulting & Advisory**

     * Text (example):
       “I help companies fix broken tracking, design measurement frameworks, and implement CDPs and AI tools that drive revenue, not just dashboards.”

3. **Featured Projects (3–4 Cards)**

   * Show project cards with:

     * Logo or icon
     * Name
     * One-line description
     * Tag(s): [AI], [SaaS], [EdTech], [Prototype], etc.
     * “Learn more” → `/projects/[slug]`

   Example projects (must be included as placeholders):

   * **ExamBot**

     * AI tool that generates and corrects exams for students and teachers.
   * **Wingman (AI Dating App)**

     * Dating app where an AI matchmaker selects the best matches — no swiping.
   * **Cast**

     * Personal wealth forecasting app that shows safe/average/risky scenarios over time.
   * **Inquiro (AskVio / AI Search Widget)**

     * GPT-like conversational search widget for websites using RAG on site content.
   * **Ora**

     * AI-powered calendar assistant built with Electron + OpenAI APIs.

4. **Latest from the Blog**

   * Show 3 most recent posts:

     * Title
     * Date
     * Short excerpt
     * Link → `/blog/[slug]`
   * CTA: **See all articles** → `/blog`

5. **Short About Section**

   * 2–3 paragraphs summarizing:

     * Career highlights (TikTok, Sunrise, etc.)
     * Expertise in analytics & MarTech
     * Indie projects & writing
     * International lifestyle & perspective
   * CTA: **Read my full story** → `/about`

6. **Light Consulting Teaser**

   * 2–3 bullet points:

     * “Need help fixing your tracking?”
     * “Need an analytics strategy or CDP roadmap?”
     * “Want to integrate AI into your product?”
   * CTA: **Work with me** → `/consulting`

---

### 4.2 Projects Overview (`/projects`)

**Goal:** Present “Russo Technologies” – Luigi’s personal product lab.

#### Top Section – Lab Branding

* Title:

  > Russo Technologies – Personal Product Lab
* Subtitle:

  > AI tools, analytics utilities, and digital products designed and built by Luigi Russo.

Short paragraph about the philosophy: experimentation, building in public, solving real problems with AI & data.

#### Project Grid

Each project appears as a card with:

* Name
* Logo/icon
* Status tag:

  * `Active`, `MVP`, `In Development`, `Paused`
* One-liner (value proposition)
* Key tags: `AI`, `EdTech`, `Fintech`, `Dating`, `SaaS`, etc.
* Link → `/projects/[slug]`

**Must include these projects (initially as placeholders if not fully live yet):**

1. **ExamBot**

   * Category: EdTech / AI
   * Description: AI that creates and corrects exams.
   * Status: Active / MVP in production.

2. **Wingman**

   * Category: Dating / AI
   * Description: AI-based dating app that selects matches and helps break the ice.

3. **Cast**

   * Category: Personal Finance / Analytics
   * Description: Wealth forecasting app with min/avg/max return scenarios and dynamic graphs.

4. **Inquiro (AskVio / AI Site Search)**

   * Category: B2B SaaS / AI / RAG
   * Description: GPT-style conversational search widget over website and document content.

5. **Ora (AI Calendar)**

   * Category: Productivity / AI
   * Description: Calendar app (Electron + OpenAI) with monthly/weekly/daily views and conversational assistant.

6. **Other / Experimental**

   * Placeholder cards for future prototypes.

---

### 4.3 Individual Project Page (`/projects/[slug]`)

Template structure for each project:

1. **Header:**

   * Project name + logo.
   * Short tagline (one sentence).

2. **Summary:**

   * 2–3 paragraphs:

     * Problem it solves.
     * Who it’s for.
     * What makes it different.

3. **Status & Links:**

   * Status: Active / MVP / In Development / Paused.
   * Links:

     * Live demo (if available).
     * GitHub (if public).
     * “Contact me about this project”.

4. **Key Features:**

   * Bullet list of 4–7 features.

5. **Tech Stack:**

   * E.g., “React, Next.js, Firebase, Supabase, OpenAI GPT-4, Whisper, Stripe, etc.”

6. **Screenshots / UI Preview:**

   * Placeholder images and captions (to be replaced with real assets by Luigi later).

7. **Back to Projects button** → `/projects`.

---

### 4.4 Blog (`/blog` and `/blog/[slug]`)

**Goal:** Establish Luigi as an expert in analytics, tracking, and AI for business.

#### `/blog` (Index)

* Title: “Analytics & AI Blog”
* Short intro:

  > “Thoughts, guides, and deep-dives on analytics, tracking, CDPs, and AI-powered measurement.”
* Filters or tags (optional):

  * `Tracking & GTM`
  * `Tealium & CDPs`
  * `Experiments & CRO`
  * `AI & Analytics`
  * `Personal Notes` (optional for more reflective posts)
* List of posts:

  * Title
  * Date
  * Tags
  * Short excerpt
  * Link → `/blog/[slug]`

#### `/blog/[slug]` (Post Template)

Layout:

* Title
* Date
* Read time estimate
* Tags
* Main content (Markdown / MDX)
* Social sharing buttons (optional)
* Previous / Next post navigation
* Link back to `/blog`

#### Initial Blog Topics (for context for the other AI)

Examples of articles Luigi is likely to write:

* “Why Most Companies Still Fail at Tracking (Even with GA4 and GTM)”
* “From Chaos to Clarity: Designing a Data Layer that Actually Works”
* “Tealium vs Google Tag Manager: When to Use Which”
* “How to Build an AI-Powered Site Search with OpenAI and a Vector Database”
* “The Real Role of a Data Collection Lead”
* “Implementing CAPI (Facebook / Meta) with GTM Server-Side”
* “What I Learned Moving from TikTok to Telecom Analytics”
* “Building an AI Exam Generator: Technical Architecture of ExamBot”
* “Wealth Forecasting with Monte Carlo Simulations in a Personal Finance App (Cast)”

---

### 4.5 Consulting Page (`/consulting`)

**Goal:** Convert visitors into potential clients.

#### Sections:

1. **Hero**

   * Title:

     > Consulting & Advisory
   * Subtitle:

     > “I help companies fix tracking, design data strategies, and build AI-powered products.”

2. **What I Offer** (Bullet list / cards)

   * **Analytics & Tracking Audits**

     * Review GTM/Tealium setups, GA4 implementation, data layer, consent handling.
   * **CDP & Data Architecture**

     * Design and review Tealium/other CDP implementations, integration with CRM, EDW, activation.
   * **Experimentation & CRO**

     * A/B test design, Adobe Target/other tools, KPI definition.
   * **AI Product Advisory**

     * Help to integrate OpenAI APIs, build RAG systems, AI assistants for websites or internal tools.

3. **Who I Work With**

   * Telecoms, e-commerce, travel, retail, scale-ups, SaaS.

4. **How It Works**

   * 30-min intro call.
   * Diagnostic phase.
   * Short proposal.

5. **Call to Action**

   * “Book a call” button (link to Calendly) or email.

---

### 4.6 About Page (`/about`)

**Goal:** Give depth to Luigi’s profile.

#### Sections:

1. **Intro**

   * Expanded version of bio:

     * Analytics leader, product builder, writer.
     * International perspective (Italy, UK, UAE, Switzerland).

2. **Professional Timeline**

   * Key roles (no need to list company names in this file, but mention):

     * Senior analytics roles in:

       * Travel/e-commerce companies
       * TikTok (Measurement / Analytics role)
       * Large retail group in the Middle East
       * Telecom operator in Switzerland
   * Focus on:

     * Building analytics teams.
     * Implementing tracking & CDP solutions.
     * Bridging business & technical teams.

3. **What I’m Building Now**

   * ExamBot, Wingman, Cast, Inquiro, Ora, etc.
   * Mention interest in AI, RAG, and personal tools.

4. **Personal Side**

   * Background: from L’Aquila, studied at Politecnico di Milano.
   * Hobbies: photography, travel, swimming, outdoor sports.
   * Writing: science fiction novel (“Clotho”), ongoing works (“Bodies”, “Le due Italie”).

5. **Values / Philosophy**

   * Data as a decision-making tool.
   * Building useful things, not just talking about them.
   * Balancing career, projects, and life design (FIRE tendencies, international lifestyle).

---

### 4.7 Contact Page (`/contact`)

**Goal:** Make it easy to reach Luigi.

* Short intro: “If you’d like to talk about analytics, AI, or potential collaborations, get in touch.”
* Contact form fields:

  * Name
  * Email
  * Company (optional)
  * Subject
  * Message
* Alternative:

  * Direct email link (e.g. `mailto:info@lrusso.it` or similar).
  * Link to LinkedIn.
  * Optional Calendly link.

---

## 5. Content Management & Extensibility

### 5.1 Blog Implementation

* Use MD/MDX files stored under `/content/blog` or `/posts`.
* Frontmatter fields (YAML or similar):

  ```yaml
  ---
  title: "Example Post Title"
  date: "2025-12-05"
  tags: ["analytics", "gtm", "cdp"]
  summary: "Short 1–2 sentence description of the article."
  ---
  ```
* Render posts with Markdown/MDX parser.
* Support:

  * Headings, code blocks, images, lists, tables.
  * Optional MDX components for diagrams or callout boxes.

### 5.2 Projects Content

* Either:

  * Hardcode project data in a `projects.json` or `projects.ts` file, and use dynamic routes.
  * Or store each project as a Markdown/MDX file in `/content/projects` with frontmatter.

Example project frontmatter:

```yaml
---
slug: "exambot"
name: "ExamBot"
status: "Active"
tags: ["AI", "EdTech", "SaaS"]
summary: "AI that generates and corrects exams for students and teachers."
techStack: ["Next.js", "Firebase", "OpenAI"]
---
```

---

## 6. Non-Functional Requirements

* **Performance:**

  * Fast load times, image optimization, lazy loading.
  * Use static generation (SSG) where possible.

* **Accessibility:**

  * Semantic HTML.
  * Proper contrast ratios.
  * Keyboard navigation supported.

* **Analytics:**

  * Basic tracking: GA4 or privacy-friendly alternative (can be added later).
  * Avoid excessive scripts to keep performance high.

* **Privacy / Legal:**

  * Simple privacy page describing:

    * What is tracked (basic analytics, no invasive tracking).
    * Contact for data requests.

---

## 7. Deliverables

The other AI should aim to provide:

1. **A Next.js project skeleton** with:

   * Pages as described (`/`, `/about`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/consulting`, `/contact`).
   * Tailwind CSS configured.
   * Basic layout with navbar & footer.

2. **Component structure:**

   * `Layout` component (header + footer).
   * `Hero`, `Section`, `Card` components for reuse.
   * `PostList`, `PostCard`, `ProjectCard`, etc.

3. **Demo content:**

   * Example project entries for:

     * ExamBot, Wingman, Cast, Inquiro, Ora.
   * Example blog posts (placeholder MDX files) with realistic titles.

4. **README usage notes:**

   * How to add a new blog post.
   * How to add a new project.
   * How to change navigation or styling.

---

## 8. Copywriting Notes for the Other AI

* Tone: clear, confident, non-hype, technically literate.
* Avoid buzzword salad; instead, show competence via specifics:

  * Mention tools: GTM, Tealium, GA4, Adobe Analytics, CDPs, OpenAI, RAG, Firebase, Supabase.
  * Mention themes: tracking quality, data trust, experimentation, AI in production.
* Highlight Luigi as:

  * Someone who **builds** (not just manages).
  * Someone who **connects business and tech**.
  * Someone who **likes to ship real products**.

---

If you (the coding AI) follow this document, you should be able to:

* Implement a full personal website for **Luigi Russo**.
* Structure it to support **projects, blog, consulting, and personal branding**.
* Make it easy for Luigi to maintain and expand over time.
