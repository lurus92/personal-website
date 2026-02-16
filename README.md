# Luigi Russo – Personal Website

A Next.js + Tailwind static site for Luigi Russo (analytics leader and AI product builder). It includes core pages, a projects "Russo Technologies" lab, and an MDX-powered blog.

**🚀 Now configured for static export!** Build once, upload to any hosting provider.

> Note: Installing dependencies or running the dev server requires Node.js. Install Node 18+ locally to build/run.

## ⚡ Quick Deployment

```bash
# 1. Build the static site
npm run build

# 2. Test locally (optional)
npx http-server out/

# 3. Upload the `out/` folder to your hosting provider
```

**For detailed hosting options, see:**
- `DEPLOYMENT.md` – Step-by-step guides for each hosting provider
- `STATIC_EXPORT_GUIDE.md` – Full configuration details

## Getting Started

### Development
```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

### Production Build
```bash
npm run build
```

Generates static files in `out/` folder ready to upload anywhere.

## Project Structure

```
personal-website/
├── pages/              # Next.js routes & site pages
├── components/         # Reusable React components
├── content/
│   ├── blog/          # MDX blog posts
│   └── projects/      # MDX project pages
├── lib/               # Content helpers (MDX parsing)
├── styles/            # Tailwind CSS configuration
├── public/            # Static assets (images, PDFs)
└── out/               # Generated static site (after build)
```

## Adding Content

### New Blog Post

Create `content/blog/my-post.mdx`:

```mdx
---
title: "Post Title"
date: "2025-01-10"
tags: ["analytics", "gtm"]
summary: "Short preview of the post."
place: "Zurich" # optional
---

# Markdown content here

Your article content...
```

Then run `npm run build` to regenerate the site.

### Rich blog content (sections, images, tables, code)

Blog posts support standard Markdown plus inline HTML blocks, so you can use richer layouts when needed.

````mdx
---
title: "Conference Notes"
date: "2026-01-15"
tags: ["analytics", "conference"]
summary: "What I learned about activation and experimentation."
place: "London" # optional
---

<section>
  <h2>Key takeaway</h2>
  <p>Activation only works when tracking quality and governance are mature.</p>
</section>

## Image example

![Main stage at the conference](/images/cast-screen-1.png)

## Table example

| Topic | Impact |
| --- | --- |
| Event QA | Better data trust |
| Server-side tracking | Better control |

## Code example

```js
window.dataLayer.push({ event: 'signup_start', method: 'email' });
```
````

Tips:
- Use `/public/...` assets with paths like `/images/my-image.png`.
- `place` is optional and shown on blog cards only when provided.
- Keep frontmatter fields consistent (`title`, `date`, `tags`, `summary`).

### New Project

Create `content/projects/my-project.mdx`:

```mdx
---
slug: "my-project"
name: "My Project Name"
status: "Active"
tags: ["AI", "SaaS"]
summary: "One-line description."
techStack: ["Next.js", "OpenAI", "Firebase"]
---

# Project Details

Project description and features...
```

Then run `npm run build` to regenerate the site.

## Customization

- **Navigation links:** Edit `components/Navigation.tsx`
- **Site metadata:** Edit `components/Layout.tsx` and `pages/_app.tsx`
- **Styling:** `tailwind.config.js` and `styles/globals.css`
- **Contact links:** Edit `pages/contact.tsx`

## Static Export Configuration

Your site is configured for static export:

```javascript
// next.config.mjs
output: 'export'                  // Generate static HTML/CSS/JS
trailingSlash: true              // Clean URLs for all hosts
images: { unoptimized: true }   // Works on any hosting
```

**Result:** The `out/` folder contains a complete, standalone website.

## Hosting Options

| Provider | How | Cost | Best For |
|----------|-----|------|----------|
| **Netlify** | Connect GitHub repo | Free/Paid | Easy automatic deploys |
| **Vercel** | Connect GitHub repo | Free/Paid | Next.js optimized |
| **GitHub Pages** | Upload `out/` folder | Free | GitHub users |
| **Traditional Hosting** | FTP/SFTP `out/` | $5–15/mo | Any host, full control |
| **AWS S3 + CloudFront** | Upload to S3 | ~$5/mo | Performance, advanced |

**See `DEPLOYMENT.md` for step-by-step guides.**

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Test static output locally
npx http-server out/
```

## Key Files

- `next.config.mjs` – Static export configuration
- `tailwind.config.js` – Tailwind CSS setup
- `lib/content.ts` – MDX file parsing & rendering
- `package.json` – Dependencies & scripts

## Notes

- After adding/editing blog posts or projects, run `npm run build`
- All content is generated at build time (static)
- API routes not available with static export (use third-party forms if needed)
- Images in `public/` are served as-is

## Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX Documentation](https://mdxjs.com/)

---

**Questions?** Check `DEPLOYMENT.md` or `STATIC_EXPORT_GUIDE.md` for more details.
