# Luigi Russo – Personal Website

Static Next.js + Tailwind site for Luigi Russo (analytics leader & AI product builder). The site includes marketing pages, a projects lab, and an MDX-powered blog that Luigi can update with minimal friction.

## Project structure

```
/app           # App Router pages
/components    # Reusable UI components (navbar, cards, headings)
/content
  /blog        # MDX blog posts
  /projects    # MDX project pages
/lib           # Data loaders for posts and projects
/public        # Add static assets here (logos, icons, etc.)
```

## Running the site locally

1. Install Node.js 18+ and npm (not available in this environment).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:3000`.

> Note: This environment blocks package downloads, so install Node/npm on your workstation to run the site.

## Adding a new blog post

1. Create a new MDX file in `content/blog/`, e.g. `content/blog/my-post.mdx`.
2. Use the frontmatter template:
   ```mdx
   ---
   title: "Example Post Title"
   date: "2025-03-15"
   tags: ["analytics", "gtm", "cdp"]
   summary: "Short 1–2 sentence description."
   ---

   ## Your heading
   Body content in Markdown/MDX. Images should use alt text like "Placeholder – dashboard screenshot".
   ```
3. The blog index (`/blog`) and individual page (`/blog/[slug]`) render automatically based on the filename.

## Adding a new project

1. Add a new MDX file under `content/projects/`, e.g. `content/projects/new-project.mdx`.
2. Frontmatter template:
   ```mdx
   ---
   slug: "new-project"
   name: "Project Name"
   status: "Active"
   tags: ["AI", "Analytics"]
   summary: "One-line description shown on cards."
   techStack: ["Next.js", "OpenAI"]
   ---

   ## What it does
   Describe the product, problem, and Luigi's role. Use placeholders for images (e.g., `![Placeholder – product UI](./product-ui.png)`).
   ```
3. The projects index (`/projects`) and detail page (`/projects/[slug]`) will include the new entry automatically.

## Editing navigation or layout

- Update `components/Navbar.tsx` to change menu items.
- Adjust global styles and utility classes in `app/globals.css` or `tailwind.config.js`.
- Shared layout is defined in `app/layout.tsx` (metadata, fonts, header/footer).

## SEO & metadata

Metadata defaults live in `app/layout.tsx`. Update titles/descriptions there for Open Graph and Twitter cards.

## Deployment

- Recommended hosts: Vercel or Netlify.
- Build command: `npm run build`
- Output: Next.js (app router) server/SSG output in `.next/`.

## Content ideas from Luigi's background

- Analytics leadership, GTM/GA4 migrations, Tealium CDP rollouts.
- Experimentation playbooks and KPI design.
- AI products (ExamBot, Wingman, Cast, Inquiro, Ora) and build logs.

