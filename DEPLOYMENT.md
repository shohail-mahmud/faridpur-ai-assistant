# 🚀 Deployment Guide

## Quick Start - Vercel Deployment

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** 🎉
   Your app is live at `your-project.vercel.app`

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Vercel Free Tier Limits

✅ **Included in Free Tier:**
- 100GB bandwidth per month
- Unlimited projects
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- Preview deployments
- Custom domains

⚠️ **Free Tier Limits:**
- Build time: 45 minutes max
- Function execution: 10 seconds max
- Function size: 50MB max
- Bandwidth: 100GB/month

## Optimization Checklist

- [x] Vite production build configured
- [x] Code splitting enabled
- [x] Console logs removed in production
- [x] Bundle size optimized (~300KB)
- [x] Security headers configured
- [x] SPA routing configured
- [x] Asset caching configured
- [x] No environment variables needed

## Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `faridpurzillaschool.com`)
3. Configure DNS records as shown
4. Wait for DNS propagation (5-30 minutes)
5. SSL certificate auto-generated

## Environment Variables (Optional)

If you need to add environment variables:

1. **In Vercel Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add variables (must start with `VITE_`)
   - Redeploy the project

2. **In Code:**
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

## Monitoring & Analytics

### Built-in Vercel Analytics
1. Enable in Project Settings → Analytics
2. Free tier includes: 100,000 events/month

### Add Custom Analytics
1. Create `.env` file:
   ```
   VITE_ANALYTICS_ID=your_id
   ```
2. Add to Vercel environment variables
3. Import in code as needed

## Troubleshooting

### Build Fails

**Issue**: Build timeout or failure

**Solution**:
- Check Node.js version (must be 18+)
- Verify `package.json` has all dependencies
- Check build logs in Vercel dashboard

### 404 on Refresh

**Issue**: Page shows 404 when refreshed

**Solution**:
- Ensure `vercel.json` exists with rewrites
- Check SPA routing configuration

### Slow Build Times

**Issue**: Build takes too long

**Solution**:
- Enable Vercel's build cache
- Optimize dependency imports
- Use dynamic imports for large components

### Large Bundle Size

**Issue**: Bundle exceeds size limits

**Solution**:
- Run `npm run build` locally to analyze
- Check bundle composition
- Use code splitting
- Lazy load components

## Alternative Deployment Options

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Cloudflare Pages

1. Connect GitHub repository
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Deploy

### Self-Hosted (Nginx)

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/faridpur-zilla-school/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Performance Optimization

### Vercel Edge Network
- Automatic global CDN
- 300+ edge locations worldwide
- <100ms latency for most users

### Caching Strategy
- Static assets: 1 year cache
- HTML: No cache (always fresh)
- API responses: No cache (dynamic)

### Bundle Analysis

```bash
# Install bundle analyzer
npm i -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  visualizer({ open: true })
]

# Build and analyze
npm run build
```

## Security Best Practices

- ✅ HTTPS enforced automatically
- ✅ Security headers configured
- ✅ No sensitive data in code
- ✅ No API keys committed
- ✅ XSS protection enabled
- ✅ CSRF protection enabled

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Support

- 📚 [Vercel Documentation](https://vercel.com/docs)
- 💬 [Vercel Discord](https://vercel.com/discord)
- 📧 Email: support@vercel.com

---

**Pro Tip**: Enable Vercel's Speed Insights for free performance monitoring!
