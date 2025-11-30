# ফরিদপুর জিলা স্কুল - AI সহকারী
# Faridpur Zilla School - AI Assistant

An intelligent bilingual (Bengali & English) chatbot for Faridpur Zilla School, one of Bangladesh's oldest and most prestigious educational institutions, established in 1840.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

## 🌟 Features

- **Bilingual Support**: Seamless switching between Bengali and English languages
- **AI-Powered Responses**: Intelligent answers about school history, facilities, alumni, and more
- **Privacy-Focused**: No data storage, conversation history clears on language switch
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Fast & Lightweight**: Optimized for performance on Vercel free tier
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Click the "Deploy with Vercel" button above (update URL with your GitHub repo)
2. Connect your GitHub account
3. Vercel will automatically deploy your app
4. Your app will be live at `your-project.vercel.app`

### Option 2: Manual Deploy from GitHub

1. Push this code to your GitHub repository
2. Sign up/login to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"

### Option 3: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## 💻 Local Development

### Prerequisites

- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm))

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── ChatHeader.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ChatInput.tsx
│   │   └── ...
│   ├── data/            # School data
│   │   └── schoolData.ts
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   └── main.tsx         # App entry point
├── public/              # Static assets
├── vercel.json          # Vercel configuration
└── vite.config.ts       # Vite configuration (optimized)
```

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite (with production optimizations)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **AI Integration**: Pollinations AI API (free)
- **Deployment**: Vercel (optimized for free tier)
- **Routing**: React Router v6

## 🔧 Configuration

### Vercel Optimization

The project includes `vercel.json` with:
- ✅ Automatic SPA routing for React Router
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Asset caching for optimal performance
- ✅ Build configuration for free tier limits

### Vite Production Optimization

The `vite.config.ts` includes:
- Code splitting for smaller bundle sizes
- Terser minification with console removal
- Vendor and UI library chunk separation
- Optimized dependency pre-bundling

### Environment Variables

No environment variables are required for basic deployment. The app uses a public AI API.

To add optional variables (analytics, etc.):
1. Copy `.env.example` to `.env`
2. Add your variables with `VITE_` prefix
3. Access in code with `import.meta.env.VITE_YOUR_VAR`

## 📊 Performance Metrics

Optimized for Vercel free tier:
- Build time: ~30-45 seconds
- Bundle size: ~300KB gzipped
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Lighthouse Score: 95+

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment Options

### Vercel (Recommended)
- ✅ Free tier: 100GB bandwidth, unlimited requests
- ✅ Automatic deployments from GitHub
- ✅ Global CDN with edge caching
- ✅ Zero configuration
- ✅ Custom domains on free tier

### Other Options
- **Netlify**: Similar to Vercel, also has free tier
- **Cloudflare Pages**: 500 builds/month on free tier
- **GitHub Pages**: Free but requires additional configuration for SPA routing
- **Self-hosted**: Use Nginx/Apache with the built `dist` folder

## 🔒 Privacy & Security

- ✅ No user data stored or tracked
- ✅ Conversations are not persisted
- ✅ Chat history clears on language switch
- ✅ Security headers implemented (XSS, CSRF protection)
- ✅ No analytics or tracking scripts
- ✅ No cookies used
- ✅ Privacy notice displayed in footer

## 🚀 GitHub Integration

### Automatic Deployment

This project is built with [Lovable](https://lovable.dev), which offers two-way sync with GitHub:

1. **Connect to GitHub** via Lovable interface
2. **Changes in Lovable** → Automatically push to GitHub
3. **Changes in GitHub** → Automatically sync to Lovable

### Continuous Deployment

When connected to Vercel:
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Auto-deploy to preview URLs
- Pull requests → Generate preview deployments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 🐛 Troubleshooting

### Build Fails on Vercel
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### 404 on Page Refresh
- Ensure `vercel.json` is properly configured
- Check SPA routing rewrites are in place

### Large Bundle Size
- Run `npm run build` and check the build output
- Consider code splitting if needed
- Use dynamic imports for large components

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer

Created by [@shohailmahmud09](https://instagram.com/shohailmahmud09)

## 🏫 About Faridpur Zilla School

Faridpur Zilla School, established in 1840, is one of the oldest and most prestigious educational institutions in Bangladesh. The school has a rich history and has produced many notable alumni including:
- Jasimuddin (Poet)
- Mustafa Monwar (Artist)
- ATM Shamsul Huda (Chief Election Commissioner)
- And many more distinguished personalities

---

**Lovable Project**: https://lovable.dev/projects/1180e617-5df1-48d9-83d1-b14f578cfabf

Made with ❤️ for Faridpur Zilla School
