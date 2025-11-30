# 🚀 Quick Start - Deploy in 5 Minutes

## Step 1: Push to GitHub (2 minutes)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Faridpur Zilla School AI"

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel (3 minutes)

### Option A: One-Click Deploy
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repo
4. Click "Deploy"
5. **Done!** Your app is live 🎉

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## That's It! 🎊

Your app is now live at: `https://your-project.vercel.app`

## What's Included?

✅ Automatic HTTPS  
✅ Global CDN  
✅ Automatic deployments on git push  
✅ Preview deployments for PRs  
✅ Custom domain support (free)  
✅ 100GB bandwidth/month  

## Next Steps

### Add Custom Domain
1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records
4. Done!

### Monitor Performance
1. Enable Vercel Analytics in dashboard
2. View real-time performance metrics
3. Free tier: 100K events/month

### Enable Preview Deployments
Automatic! Every PR gets a unique preview URL.

## Need Help?

- 📚 Full guide: See `DEPLOYMENT.md`
- 💬 Issues: Create GitHub issue
- 📧 Developer: [@shohailmahmud09](https://instagram.com/shohailmahmud09)

---

**Pro Tip**: Enable "Auto-assign Domains" in Vercel settings for instant preview URLs!
