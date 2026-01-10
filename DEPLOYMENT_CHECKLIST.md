# ✅ Deployment Checklist

## Pre-Deployment (Local Testing)

- [ ] Install dependencies: `npm install`
- [ ] Run development server: `npm run dev`
- [ ] Verify site works at `http://localhost:3000`
- [ ] Test all pages (home, about, projects, blog, consulting, contact)
- [ ] Check responsive design on mobile/tablet

## Build & Test Static Output

- [ ] Build static site: `npm run build`
- [ ] Check that `out/` folder is created (~21MB)
- [ ] Verify HTML files exist:
  - [ ] `out/index.html`
  - [ ] `out/about/index.html`
  - [ ] `out/projects/index.html`
  - [ ] `out/blog/index.html`
  - [ ] `out/contact/index.html`
  - [ ] `out/consulting/index.html`
  - [ ] `out/privacy/index.html`
- [ ] Test locally: `npx http-server out/` → http://localhost:8080
- [ ] Verify all pages work with static server
- [ ] Check that links work (no 404s)
- [ ] Verify images load correctly
- [ ] Test mobile responsiveness

## Choose Hosting & Deploy

### Option 1: Netlify (Recommended)

- [ ] Push code to GitHub
- [ ] Go to netlify.com and create account
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Choose your GitHub repo
- [ ] Configure:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `out`
- [ ] Click "Deploy site"
- [ ] Wait for build to complete (should see "Published" status)
- [ ] Test your live site
- [ ] Add custom domain (Settings → Domain Management)
- [ ] Set DNS records (Netlify will provide instructions)

### Option 2: Vercel (Also Recommended)

- [ ] Push code to GitHub
- [ ] Go to vercel.com and create account
- [ ] Click "Add New..." → "Project"
- [ ] Import your GitHub repo
- [ ] Vercel auto-configures Next.js
- [ ] Click "Deploy"
- [ ] Wait for deployment
- [ ] Test your live site
- [ ] Add custom domain (Settings → Domains)

### Option 3: Traditional Hosting (FTP)

- [ ] Build locally: `npm run build`
- [ ] Connect to hosting via FTP/SFTP
- [ ] Navigate to `public_html` or document root
- [ ] Delete any existing files
- [ ] Upload entire contents of `out/` folder
- [ ] Verify upload completed
- [ ] Update DNS to point to your host
- [ ] Test your site

### Option 4: GitHub Pages

- [ ] Build locally: `npm run build`
- [ ] Commit `out/` folder to your repo
- [ ] Push to GitHub
- [ ] Go to repository Settings → Pages
- [ ] Set "Build and deployment" to "Deploy from a branch"
- [ ] Select your branch
- [ ] Wait for deployment
- [ ] Test your site at `username.github.io`
- [ ] Add custom domain if desired

### Option 5: AWS S3 + CloudFront

- [ ] Create S3 bucket for your site
- [ ] Build locally: `npm run build`
- [ ] Upload `out/` contents to S3 bucket
- [ ] Create CloudFront distribution pointing to S3
- [ ] Update DNS to point to CloudFront
- [ ] Test your site

## Post-Deployment

- [ ] Visit your live domain
- [ ] Test all pages load
- [ ] Check that styles (CSS) load correctly
- [ ] Verify images display
- [ ] Test responsive design
- [ ] Test all navigation links
- [ ] Check contact form (if using third-party service)
- [ ] Verify 404 page works
- [ ] Test on mobile devices
- [ ] Run performance check (Google PageSpeed Insights)

## Domain Setup

- [ ] Register domain (if not already done)
- [ ] Update DNS records:
  - [ ] Point to Netlify/Vercel/hosting provider
  - [ ] Or point to S3/CloudFront
- [ ] Set up SSL/HTTPS:
  - [ ] Netlify: Auto (included)
  - [ ] Vercel: Auto (included)
  - [ ] Traditional hosting: Contact support or use Let's Encrypt
- [ ] Test HTTPS works (browser shows lock icon)
- [ ] Redirect www → non-www (or vice versa) if needed

## Ongoing Maintenance

- [ ] Keep dependencies updated: `npm update`
- [ ] Monitor site for errors
- [ ] Add new blog posts/projects as needed:
  - [ ] Create `.mdx` file
  - [ ] Run `npm run build`
  - [ ] Push to GitHub or upload `out/`
- [ ] Update content regularly
- [ ] Monitor site analytics (if set up)
- [ ] Test site monthly

## Troubleshooting Checklist

If something breaks:

- [ ] Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
- [ ] Clear browser cache
- [ ] Check hosting provider status page
- [ ] Verify DNS is pointing to correct host
- [ ] Check that SSL/HTTPS is working
- [ ] Verify all files were uploaded correctly
- [ ] Check file permissions on server (should be readable)
- [ ] Look at hosting provider error logs

## Documentation to Keep Handy

- [ ] `README.md` – Quick reference
- [ ] `DEPLOYMENT.md` – Detailed hosting guides
- [ ] `STATIC_EXPORT_GUIDE.md` – Technical details
- [ ] `next.config.mjs` – Current configuration

## Important Notes

⚠️ **Remember:** After adding/editing blog posts or projects, you MUST run `npm run build` and redeploy.

⚠️ **API Routes:** Don't try to use them. Use third-party services for forms (Formspree, Netlify Forms, EmailJS).

⚠️ **Environment Variables:** Only `NEXT_PUBLIC_*` variables work. They're bundled at build time.

✅ **You're ready to deploy!**

---

Once you've completed this checklist, your site will be live and ready to serve visitors from anywhere in the world! 🚀
