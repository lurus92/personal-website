# Luigi Russo – Personal Website

A Next.js + Tailwind static site for Luigi Russo (analytics leader and AI product builder). It includes core pages, a projects “Russo Technologies” lab, and an MDX-powered blog.

> Note: Installing dependencies or running the dev server requires Node.js. The repository currently provides the full source; install Node 18+ locally to build/run.

## Getting started
1. Install Node.js 18 or later.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000`.
4. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Project structure
- `pages/` – Next.js routes (`/`, `/about`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/consulting`, `/contact`, `/privacy`).
- `components/` – Reusable UI elements (layout, navigation, cards, hero, section).
- `content/blog/` – MDX blog posts with frontmatter.
- `content/projects/` – MDX project pages with frontmatter.
- `styles/globals.css` – Tailwind setup and global styles.
- `lib/content.ts` – Helpers to read MDX files and render them as HTML for static generation.

## Adding a new blog post
1. Create a new `.mdx` file in `content/blog/` with frontmatter:
   ```mdx
   ---
   title: "Title"
   date: "2024-12-05"
   tags: ["analytics", "gtm"]
   summary: "1–2 sentence preview."
   ---
   
   Your markdown content here.
   ```
2. The blog index and homepage automatically include the post (sorted by date).

## Adding a new project
1. Create a `.mdx` file in `content/projects/` with frontmatter:
   ```mdx
   ---
   slug: "project-slug"
   name: "Project name"
   status: "Active"
   tags: ["AI", "Analytics"]
   summary: "Short summary."
   techStack: ["Next.js", "OpenAI"]
   ---
   
   Project overview in markdown.
   ```
2. The `/projects` index and dynamic project page will render automatically.

## Navigation and layout
- Update `components/Navigation.tsx` to add or reorder links.
- Global SEO defaults and metadata live in `components/Layout.tsx` and `pages/_app.tsx`.

## Styling
- Tailwind config: `tailwind.config.js`.
- Global utility classes and typography: `styles/globals.css`.

## Content notes
- Hero portrait and other imagery currently use placeholders. Replace the placeholder blocks with `<Image>` components once assets are available.
- Update contact links (Calendly, email) in `pages/contact.tsx`.

## Testing
Run linting once dependencies are installed:
```bash
npm run lint
```

## Going live (production deployment)
Follow these steps to publish the site on any static hosting or Next.js-capable server.

1. **Install dependencies and build the site locally:**
   ```bash
   npm install
   npm run build
   ```
2. **Verify the production build:**
   ```bash
   npm run start
   ```
   Then open `http://localhost:3000` and verify the pages look correct.
3. **Locate the output:**
   - **Default (Next.js server):** the `.next/` directory plus `package.json`, `next.config.mjs`, and any runtime files are required on the server.
   - **Static export (optional):** if you add `next export`, the static files will be written to `out/` and can be uploaded to any static host.
4. **Upload the build to your server:**
   - **Next.js server hosting (Vercel/Node server):** upload the repository or build artifacts and run:
     ```bash
     npm install
     npm run build
     npm run start
     ```
   - **Static hosting (Netlify/S3/etc.):** upload the `out/` folder contents.
5. **Point your domain to the host:**
   - Configure DNS records to your hosting provider.
   - Ensure the site is served over HTTPS.
