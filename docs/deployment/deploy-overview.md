# Deploy Overview

Turn your Yomake project into a live website accessible to anyone on the internet. This guide introduces your deployment options and helps you choose the right approach.

---

## What is Deployment?

Deployment means publishing your web application to a server so others can access it via a URL. When you deploy:

- Your app goes live on the internet
- Anyone can visit using the URL
- Your code is built and optimized for production
- SSL certificate is added automatically (HTTPS)
- Your app is served from fast global servers

---

## Deployment Options

Yomake offers three deployment paths:

### 1. Yomake Hosting (Easiest)

**Best for:** Quick launches, testing, and simple projects

**What you get:**
- One-click deployment from your dashboard
- URL format: `yourproject.yomake.ai`
- Automatic SSL certificate (HTTPS)
- Free with all plans
- Deploy in seconds

**How it works:**
1. Click "Deploy" button
2. Select "Deploy to Yomake"
3. Wait 10-30 seconds
4. Get your live URL

**Ideal for:**
- Landing pages
- Portfolio sites
- Quick prototypes
- Client previews
- MVPs and demos

[Learn more: Yomake Hosting](/docs/deployment/yomake-hosting)

---

### 2. Vercel Deployment (Professional)

**Best for:** Production apps, custom domains, and professional projects

**What you get:**
- Professional hosting infrastructure
- Custom domain support
- Web analytics built-in
- Automatic deployments from GitHub
- Edge functions and serverless
- Preview deployments for branches

**Requirements:**
- Free Vercel account
- GitHub integration (recommended)

**How it works:**
1. Connect Vercel in [Integrations](/docs/integrations/vercel-integration)
2. Click "Deploy" button
3. Select "Deploy to Vercel"
4. Follow setup wizard
5. Get your Vercel URL

**Ideal for:**
- Production applications
- Client projects requiring custom domains
- Apps needing analytics
- Projects with continuous deployment
- E-commerce and business sites

[Learn more: Vercel Deployment](/docs/deployment/vercel-deployment)

---

### 3. Custom Domain (Your Brand)

**Best for:** Professional branding and established businesses

**What you get:**
- Your own domain (e.g., `www.yourbusiness.com`)
- Professional appearance
- Brand consistency
- Full control over URL
- Automatic SSL certificate

**Requirements:**
- Deployed project (Yomake or Vercel)
- Domain registered with provider (GoDaddy, Namecheap, etc.)
- Access to DNS settings

**How it works:**
1. Deploy to Yomake or Vercel first
2. Add custom domain in project settings
3. Configure DNS records with your provider
4. Wait for DNS propagation (up to 48 hours)
5. Your domain points to your app

**Ideal for:**
- Business websites
- Client projects
- Professional portfolios
- Established brands
- E-commerce stores

[Learn more: Custom Domains](/docs/deployment/custom-domains)

---

## Comparison Table

| Feature | Yomake Hosting | Vercel | Custom Domain |
|---------|----------------|--------|---------------|
| **Ease of use** | ⭐⭐⭐⭐⭐ Easiest | ⭐⭐⭐⭐ Easy | ⭐⭐⭐ Moderate |
| **Setup time** | 30 seconds | 2-3 minutes | 1-48 hours (DNS) |
| **Cost** | Free | Free tier available | Domain cost (~$10-15/year) |
| **Custom domain** | ❌ No | ✅ Yes | ✅ Yes (required) |
| **SSL/HTTPS** | ✅ Automatic | ✅ Automatic | ✅ Automatic |
| **Analytics** | ❌ No | ✅ Yes | Depends on host |
| **Auto-deploy from GitHub** | ❌ No | ✅ Yes | ✅ Yes (via Vercel) |
| **Best for** | Quick launches | Production apps | Professional branding |

---

## Choosing Your Deployment Method

### Use Yomake Hosting if:
- You want the fastest deployment
- You're building a demo or MVP
- You don't need a custom domain
- This is a personal project
- You want zero configuration

### Use Vercel if:
- You need professional hosting
- You want custom domains (now or later)
- You want deployment analytics
- You need automatic GitHub deployments
- This is a client or production project

### Add Custom Domain if:
- You're building for a business
- You need professional branding
- You already own a domain
- This is a public-facing product
- You want full brand control

**You can always change!** Start with Yomake hosting, then move to Vercel and add a custom domain later.

---

## Deployment Process

No matter which option you choose, deployment follows similar steps:

### 1. Prepare Your Project

Ensure your app is ready:
- Test all features in the preview
- Verify responsive design on all devices
- Check for console errors (open in browser)
- Review content for typos
- Test forms and interactive elements

### 2. Click Deploy

Find the "Deploy" button:
- Top-right corner of project workspace
- Or in project menu (three dots) on dashboard

### 3. Choose Deployment Target

Select from available options:
- Deploy to Yomake
- Deploy to Vercel (if connected)
- Configuration options appear

### 4. Configure Settings

Depending on your choice:
- Confirm project name
- Select deployment region (if available)
- Review build settings
- Confirm deployment

### 5. Wait for Build

Your project is:
- Built for production (optimized)
- Uploaded to hosting servers
- Configured with SSL certificate
- Made live at your URL

Build time: 30 seconds to 2 minutes

### 6. Get Your URL

Once complete:
- Live URL is displayed
- Click to visit your site
- Share with anyone
- Test on various devices

---

## After Deployment

### Viewing Your Live Site

Your deployed app is accessible at:
- **Yomake URL**: `yourproject.yomake.ai`
- **Vercel URL**: `yourproject.vercel.app`
- **Custom domain**: `www.yourdomain.com`

Click the URL to visit. It's live—anyone can access it!

### Redeploying Updates

When you make changes:

1. Update your project using the AI agent
2. Test in the preview
3. Click "Deploy" again
4. Select same deployment target
5. Wait for redeploy

**Vercel auto-deploy:**
If you've connected GitHub and Vercel, pushing to your main branch automatically triggers a new deployment.

### Deployment Status

Check deployment status in:
- Project dashboard (status badge)
- Deployment page (detailed logs)
- Vercel dashboard (if using Vercel)

**Status indicators:**
- 🟡 **Draft** - Never deployed
- 🔵 **Deploying** - In progress
- 🟢 **Deployed** - Live and accessible
- 🔴 **Failed** - Error occurred (check logs)

[Learn more: Deployment Status](/docs/deployment/deployment-status)

---

## Deployment Limits

### Free Plan
- Deploy to Yomake: Unlimited
- Deploy to Vercel: Unlimited (Vercel's free tier limits apply)
- Custom domains: Requires Vercel (their limits apply)

### Paid Plans
- No additional limits beyond hosting platform's restrictions
- Vercel Pro plan recommended for heavy traffic

---

## Build Configuration

Yomake automatically configures:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18.x or 20.x
- **Install command**: `npm install`

These work for all React/Vite projects. Custom configurations available in advanced settings.

---

## Troubleshooting

### Deployment Failed

**Check build logs:**
1. View deployment logs in dashboard
2. Look for error messages
3. Common issues:
   - Missing dependencies
   - TypeScript errors
   - Build script issues
   - Environment variable problems

**Fix and redeploy:**
```
I'm seeing a deployment error: [error message]. Can you fix it?
```

### Site Not Loading

**After successful deployment:**
- Wait 1-2 minutes for DNS propagation
- Clear browser cache (`Cmd/Ctrl + Shift + R`)
- Try incognito/private window
- Check URL spelling

### Custom Domain Not Working

**DNS configuration issues:**
- Verify DNS records are correct
- Wait up to 48 hours for propagation
- Check with `dig` or `nslookup` command
- Contact domain provider support

[Learn more: Custom Domain Troubleshooting](/docs/deployment/custom-domains#troubleshooting)

---

## Security & Performance

All deployment options include:

✅ **HTTPS/SSL** - Automatic encryption
✅ **CDN** - Fast global content delivery
✅ **Compression** - Optimized file sizes
✅ **Caching** - Quick load times
✅ **DDoS Protection** - Security measures
✅ **Auto-scaling** - Handles traffic spikes

---

## Best Practices

**Test before deploying**
- Preview on all devices
- Check all interactive features
- Review content thoroughly
- Fix any console errors

**Use meaningful names**
- Project name becomes URL slug
- Choose descriptive, professional names
- Avoid numbers and special characters

**Deploy frequently**
- Small, incremental updates
- Test in production early
- Get feedback from real users
- Iterate based on usage

**Monitor your site**
- Visit regularly to ensure it's live
- Check analytics (Vercel)
- Monitor error logs
- Update dependencies periodically

**Keep development separate**
- Don't deploy half-finished features
- Use preview environment for testing
- Deploy only when ready for users

---

## Next Steps

Ready to deploy? Choose your path:

- [Yomake Hosting](/docs/deployment/yomake-hosting) - Quick one-click deployment
- [Vercel Deployment](/docs/deployment/vercel-deployment) - Professional hosting setup
- [Custom Domains](/docs/deployment/custom-domains) - Add your own domain
- [Deployment Status](/docs/deployment/deployment-status) - Understand deployment states

Or learn about:
- [GitHub Integration](/docs/integrations/github-integration) - Enable auto-deployments
- [Vercel Integration](/docs/integrations/vercel-integration) - Connect Vercel account

---

**Make your project live!** Deploy your app and share it with the world.
