# Luigi Russo – Personal Website

Static website for analytics leader and AI product builder Luigi Russo. The site highlights consulting services, projects from the Russo Technologies lab, and an analytics-focused blog.

## Running locally

No build step is required. Serve the static files with any HTTP server, e.g.:

```bash
python -m http.server 3000
```

Then visit `http://localhost:3000`.

## Structure

- `index.html` – homepage
- `about/` – bio and speaking topics
- `projects/` – lab overview plus detail pages under `projects/<slug>/`
- `blog/` – article index plus posts under `blog/<slug>/`
- `consulting/` – consulting offers and engagement formats
- `contact/` – contact information and expectations
- `assets/` – shared CSS, data, and scripts

## Editing navigation or layout

Navigation lives inline in each page for portability. The visual system is defined in `assets/style.css`, while shared rendering logic (project and post listings) sits in `assets/scripts.js`.

## Adding a new project

1. Add an entry to `assets/data/projects.js` using the existing shape:
   ```js
   {
     slug: "new-project",
     name: "Project name",
     status: "Active | Beta | Research | Concept",
     summary: "One-sentence description.",
     tech: ["Tech 1", "Tech 2"],
     outcomes: ["Key result", "Another result"],
   }
   ```
2. Create a folder `projects/new-project/` and copy `projects/exambot/index.html` as a starting point.
3. The detail page text is populated from the data file; update outcomes and copy if you need custom narrative blocks.

## Adding a new blog article

1. Append a record to `assets/data/posts.js`:
   ```js
   {
     slug: "my-article",
     title: "Article title",
     date: "YYYY-MM-DD",
     tags: ["analytics", "ai"],
     summary: "Short abstract for the index card.",
   }
   ```
2. Create `blog/my-article/index.html` by duplicating an existing post template.
3. Update the markup inside the page body with your article content. The title/date/summary are also injected from the data entry.

## Styling notes

- Colors and spacing tokens live in `assets/style.css`.
- Components follow simple utility classes: `.panel`, `.list`, `.badge`, `.tagline`, etc.
- Image slots use placeholder gradients—replace them with real assets and update the alt text to describe the content.

## Deployment

Because the site is static, you can deploy the folder to any static host (e.g., Vercel, Netlify, S3, GitHub Pages). Ensure routes include `index.html` suffixes when configuring rewrites.
