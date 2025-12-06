# Luigi Russo – Personal Website (static build)

This repository contains a static, multi-page website for **Luigi Russo**: analytics leader, tagging specialist, and AI product builder. It follows the specification in `Agents.md` with sections for projects (Russo Technologies Lab), consulting, blog, and contact.

Because this environment is offline, the site is implemented with lightweight HTML/CSS/JS (no external CDNs). Content is data-driven via small JSON-like files so you can update projects and articles quickly.

## Running locally

1. From the repository root, start a simple web server:
   ```bash
   python -m http.server 8000
   ```
2. Visit `http://localhost:8000` in your browser.

## Project structure

- `index.html` – homepage with hero, services, recent projects, and blog highlights.
- `about.html` – biography and toolkit.
- `projects.html` – Russo Technologies Lab overview; cards generated from `data/projects.js`.
- `project.html` – dynamic project detail page using `?slug=` query (e.g., `project.html?slug=exambot`).
- `consulting.html` – services, process, and CTAs.
- `blog/index.html` – blog index populated from `data/blog.js`.
- `blog/post.html` – dynamic blog article view using `?slug=` query.
- `contact.html` – how to reach Luigi.
- `assets/style.css` – local design system and layout primitives.
- `assets/script.js` – navigation toggle plus rendering helpers for projects and blog posts.
- `data/projects.js` – structured project content.
- `data/blog.js` – structured blog content.

## Editing content

### Add or edit a project

1. Open `data/projects.js`.
2. Add a new object to `window.projectsData` with this shape:
   ```js
   {
     slug: 'new-project',
     name: 'Project name',
     status: 'Active | Lab | Concept',
     tags: ['AI', 'Analytics'],
     summary: 'Short description.',
     techStack: ['Tech1', 'Tech2'],
     highlights: ['Key feature 1', 'Key feature 2'],
     metrics: [
       { label: 'Impact label', value: 'Value or result' },
       { label: 'Another metric', value: 'Details' }
     ],
     cta: 'https://example.com'
   }
   ```
3. Save and reload the site. The card will appear in `projects.html` and the detail page will work at `project.html?slug=new-project`.

### Add or edit a blog post

1. Open `data/blog.js`.
2. Add a new entry to `window.blogPosts`:
   ```js
   {
     slug: 'my-post',
     title: 'Readable headline',
     date: '2025-01-30',
     tags: ['analytics', 'gtm'],
     summary: '1–2 sentence teaser.',
     content: [
       'Paragraph 1 text',
       'Paragraph 2 text',
       'Add as many paragraphs as you need'
     ]
   }
   ```
3. Open `blog/post.html?slug=my-post` to view the full article. The index at `blog/index.html` updates automatically.

### Update navigation or styling

- Navigation menus live in each HTML page within the `<header>` and `<footer>` blocks; adjust labels or links there.
- Global styling, layout tokens, and responsive behavior live in `assets/style.css`.
- Small interactions (mobile nav toggle, data rendering) live in `assets/script.js`.

## Adding images

The site currently uses text-first layouts. Replace the placeholder text blocks with your own images by adding `<img>` tags where appropriate and storing the files locally (e.g., `assets/images/hero.jpg`). Use descriptive `alt` text (e.g., `alt="Luigi presenting analytics roadmap"`).

## Deployment notes

- Since there is no build step, deploy the static files to any static host (Vercel static export, Netlify, GitHub Pages, or an S3 bucket with CDN).
- If you later add a framework (Next.js/MDX), keep the content contracts in `data/*` to preserve portability.
