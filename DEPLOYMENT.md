# Deployment Checklist

✅ **Static Export Configured**

Your Next.js site is ready to export as static HTML. Here's what to do:

## Quick Start

### 1. Build Your Site
```bash
npm run build
```

This creates the `out/` folder with all static files ready for upload.

### 2. Verify Locally (Optional)
```bash
npx http-server out/
```
Then visit `http://localhost:8080`

### 3. Deploy to Your Host

Choose one of these options:

#### Option A: Upload to Traditional Hosting (FTP/SFTP)
- Build: `npm run build`
- Connect via FTP/SFTP to your host
- Upload the **entire contents** of the `out/` folder to your domain's root
- Your site is live!

#### Option B: GitHub Pages
```bash
# 1. Copy out/ contents to gh-pages branch
# 2. Go to your repo Settings → Pages
# 3. Set source to "Deploy from a branch" 
# 4. Select gh-pages branch
```

#### Option C: Netlify (Easiest)
```bash
# 1. Connect GitHub repo to Netlify
# 2. Set build command: npm run build
# 3. Set publish directory: out
# 4. Deploy (automatic on push)
```

#### Option D: Vercel (Also Easy)
```bash
# 1. Push to GitHub
# 2. Go to vercel.com and import your repo
# 3. It auto-detects Next.js
# 4. Deploy
```

## File Structure

```
out/
├── index.html                 ← Homepage
├── about/index.html           ← About page
├── projects/
│   ├── index.html            ← Projects index
│   ├── cast/index.html        ← Individual projects
│   ├── exambot/index.html
│   ├── inquiro/index.html
│   └── wingman/index.html
├── blog/
│   ├── index.html            ← Blog index
│   ├── [post-title]/index.html
│   └── ...
├── consulting/index.html
├── contact/index.html
├── privacy/index.html
├── 404.html
├── _next/                    ← JS/CSS assets (auto-generated)
├── images/                   ← Your images
└── CV-LuigiRusso.pdf        ← Static files
```

## Key Configuration

Your `next.config.mjs` now has:

```javascript
output: 'export'              // Generate static files
trailingSlash: true           // Clean URLs: /about/ instead of /about
images: {
  unoptimized: true           // Works on any hosting
}
```

## Important Notes

⚠️ **After Adding Content**
- When you add new blog posts or projects, run `npm run build` again
- This regenerates the entire `out/` folder

⚠️ **Contact Forms**
- API routes don't work with static export
- Use Formspree, Netlify Forms, or EmailJS instead

⚠️ **Environment Variables**
- Only `NEXT_PUBLIC_*` variables work in static export
- They're bundled at build time, not runtime

## Domain Setup

1. Point your domain's DNS to your hosting provider
2. Set up SSL/HTTPS (most hosts handle this automatically)
3. Deploy the `out/` folder
4. Wait a few minutes for DNS to propagate

## Debugging Issues

**Site looks broken after upload?**
- Check that you uploaded the *contents* of `out/`, not the `out/` folder itself
- Ensure `_next/` folder is being served

**404 errors on pages?**
- Make sure clean URL routing is enabled on your host
- Most modern hosts support this automatically

**Styles missing?**
- Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache if still broken

## Hosting Recommendations

| Provider | Type | Cost | Ease | Best For |
|----------|------|------|------|----------|
| **Netlify** | JAMstack | Free/Paid | ⭐⭐⭐⭐⭐ | Best overall |
| **Vercel** | Next.js native | Free/Paid | ⭐⭐⭐⭐⭐ | Next.js optimized |
| **GitHub Pages** | Static | Free | ⭐⭐⭐⭐ | GitHub users |
| **Cloudflare Pages** | Static | Free/Paid | ⭐⭐⭐⭐ | Performance |
| **Shared Hosting** | Traditional | $5-15/mo | ⭐⭐⭐ | Any host |
| **AWS S3 + CloudFront** | CDN | ~$5/mo | ⭐⭐ | Power users |

## Questions?

1. **More info on static exports**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
2. **Netlify deployment**: https://docs.netlify.com/
3. **Vercel deployment**: https://vercel.com/docs

---

**You're all set!** 🚀 Just run `npm run build` and upload the `out/` folder to your host.
