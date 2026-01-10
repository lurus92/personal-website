# Static Export Configuration Guide

## Overview

Your Next.js project is now configured to generate a **fully static website** with standard HTML, CSS, and JavaScript files. This output can be uploaded to any basic web hosting provider without requiring Node.js or server-side rendering.

## Configuration Changes

### What Was Updated

1. **next.config.mjs** - Added static export settings:
   - `output: 'export'` - Generates static files instead of requiring a server
   - `trailingSlash: true` - Adds trailing slashes to URLs for better hosting compatibility
   - `images.unoptimized: true` - Disables Next.js image optimization (compatible with static hosting)
   - `dynamicParams: false` - Ensures all dynamic routes are pre-generated

2. **package.json** - Added `npm run export` script (alias for build)

3. **.nojekyll** - Empty file to prevent Jekyll processing on GitHub Pages

## How to Generate Static Files

### Step 1: Build the Project
```bash
npm run build
```

Or using the export alias:
```bash
npm run export
```

### Step 2: Find Your Static Files
After building, your static files will be in:
```
./out/
```

This directory contains:
- `index.html` - Homepage
- `about/index.html` - About page
- `projects/index.html` - Projects overview
- `projects/[project-slug]/index.html` - Individual project pages
- `blog/index.html` - Blog index
- `blog/[post-slug]/index.html` - Individual blog posts
- `consulting/index.html` - Consulting page
- `contact/index.html` - Contact page
- `privacy/index.html` - Privacy page
- `_next/` - JavaScript, CSS, and other assets

## Hosting Options

### Option 1: GitHub Pages (Recommended)
```bash
# 1. Push your `out/` directory to your GitHub repo
# 2. Go to Settings → Pages
# 3. Set source to "Deploy from a branch"
# 4. Select the branch with your `out/` folder
# 5. Optionally, set a custom domain
```

### Option 2: Netlify
```bash
# 1. Connect your repository
# 2. Set build command: npm run build
# 3. Set publish directory: out
# 4. Deploy
```

### Option 3: Vercel
```bash
# 1. Connect your repository
# 2. Vercel auto-detects Next.js and handles it perfectly
# 3. Deploys automatically on push
```

### Option 4: Any Static Web Host (Shared Hosting, etc.)
```bash
# 1. Build locally: npm run build
# 2. Upload entire `out/` folder to your host via FTP/SFTP
# 3. Set your domain to point to the root of the `out/` folder
# 4. Your site is live!
```

### Option 5: AWS S3 + CloudFront
```bash
# 1. Build: npm run build
# 2. Upload `out/` to S3 bucket
# 3. Create CloudFront distribution
# 4. Point domain to CloudFront
```

## Important Notes

### Dynamic Content
- **Blog posts and projects** are now fully generated at build time
- If you add a new blog post or project, you must run `npm run build` again
- The `out/` folder will be regenerated completely

### No Server-Side Rendering
- Functions like `getServerSideProps()` won't work in this setup
- All data is generated during build time (static generation)
- This is perfect for your use case since content rarely changes

### API Routes
- API routes (`pages/api/`) won't work in static export
- If you need a contact form, use a third-party service like Formspree, Netlify Forms, or EmailJS

## Deployment Workflow

```bash
# 1. Make changes locally
npm run dev

# 2. Test your changes
# Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Test the static output locally (optional)
npx http-server out/

# 5. Upload `out/` folder to your host
# (method depends on your hosting provider)
```

## Using with a Custom Domain

If using your own domain (e.g., `lrusso.it`):

1. **Update `next.config.mjs`** if needed (usually not required)
2. **Point your domain's DNS** to your hosting provider
3. **Build and deploy** the `out/` folder
4. **Set up SSL/HTTPS** through your hosting provider or use Cloudflare

## Checking the Output

To verify everything works before uploading:

```bash
# Build the project
npm run build

# Serve locally
npx http-server out/

# Open http://localhost:8080 in your browser
```

## Troubleshooting

### Issue: Site looks broken or styles are missing
- **Cause**: Assets (CSS, JS) aren't loading correctly
- **Solution**: Check that your hosting provider is serving from the `out/` root directory, and that all files in `_next/` are being served

### Issue: Blog posts or projects aren't showing
- **Cause**: You didn't rebuild after adding new content
- **Solution**: Run `npm run build` after adding blog posts or projects

### Issue: Relative links not working
- **Cause**: URLs might not have trailing slashes
- **Solution**: This is handled by `trailingSlash: true` in the config

### Issue: 404 on static hosting
- **Cause**: The host doesn't support clean URLs
- **Solution**: Most modern hosts support this. If not, you may need to rename files (e.g., `about.html` instead of `about/index.html`), or switch hosts

## Environment Variables

If you use environment variables:
- Create a `.env.local` file locally
- All variables are bundled at build time
- Only variables starting with `NEXT_PUBLIC_` are accessible in the browser
- Rebuild after changing `.env.local`

## Next Steps

1. Run `npm run build` to generate your static site
2. Test in the `out/` folder with `npx http-server out/`
3. Choose a hosting provider and upload the `out/` folder
4. Point your domain to your hosting provider
5. Enjoy your fast, static website! 🚀

---

**Questions?** Check [Next.js Static Exports Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
