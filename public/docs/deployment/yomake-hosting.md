# Yomake Hosting

Deploy your project to Yomake's hosting platform in seconds. This guide covers everything you need to know about the easiest deployment option.

---

## What is Yomake Hosting?

Yomake Hosting is the built-in deployment platform that makes your projects live instantly. With one click, your app is deployed to fast, secure servers with a `.yomake.ai` subdomain.

**Key benefits:**
- ⚡ **Fastest deployment** - Live in 30 seconds
- 🆓 **Completely free** - No hosting fees
- 🔒 **Automatic HTTPS** - SSL certificate included
- 🌍 **Global CDN** - Fast loading worldwide
- 🚀 **Zero configuration** - Just click deploy

---

## How It Works

### The Process

When you deploy to Yomake:

1. **Build** - Your React app is compiled for production
2. **Optimize** - Code is minified and optimized
3. **Upload** - Files are transferred to Yomake servers
4. **Configure** - SSL and CDN are set up automatically
5. **Live** - Your app is accessible at your unique URL

Total time: 30 seconds to 2 minutes

---

## Deploying Your Project

### First Deployment

**From project workspace:**

1. Click the **"Deploy"** button (top-right corner)
2. Select **"Deploy to Yomake"**
3. Review deployment settings (optional)
4. Click **"Deploy Now"**
5. Wait for build to complete
6. Get your live URL!

**From dashboard:**

1. Find your project card
2. Click three-dot menu (⋮)
3. Select **"Deploy"**
4. Choose **"Deploy to Yomake"**
5. Confirm deployment

### What You'll See

During deployment, you'll see:

```
🔨 Building your project...
✓ Build completed successfully

📦 Optimizing assets...
✓ Assets optimized

🚀 Deploying to Yomake...
✓ Deployed successfully!

Your site is live at:
https://your-project-alias.yomake.ai
```

---

## Your Yomake URL

### URL Format

```
https://[project-alias].yomake.ai
```

**Example:**
- Project name: "Coffee Shop Site"
- Project alias: "coffee-shop-site"
- Live URL: `https://coffee-shop-site.yomake.ai`

### URL Features

**Automatic SSL:**
- All sites use HTTPS
- Certificate auto-renewed
- Secure by default

**Subdomain:**
- Based on project alias
- Cannot be changed after creation
- Lowercase, dashes only

**Global availability:**
- Accessible from anywhere
- No geographic restrictions
- Fast CDN delivery

---

## Deployment Settings

### Basic Settings

When deploying, you can configure:

**Build command:**
```bash
npm run build
```
(Default, usually no need to change)

**Output directory:**
```
dist
```
(Vite default output folder)

**Environment variables:**
- Set in project settings
- Available during build
- Secure and encrypted

### Advanced Settings

**Node version:**
- Default: 20.x (LTS)
- Can specify: 18.x, 20.x, 22.x

**Install command:**
```bash
npm install
```

**Root directory:**
- Default: `/` (project root)
- Change if your app is in subdirectory

---

## After Deployment

### Accessing Your Site

**Multiple ways to visit:**

1. **Click the URL** in deployment success message
2. **Project dashboard** - Click "View Live Site"
3. **Direct navigation** - Type URL in browser
4. **Share the link** - Send to anyone

Your site is publicly accessible—no authentication required to view.

### Testing Your Deployment

**Checklist:**

✅ Site loads without errors
✅ All pages are accessible
✅ Images and assets display correctly
✅ Forms and buttons work
✅ Responsive on mobile/tablet
✅ HTTPS lock icon shows in browser
✅ No console errors (F12 to check)

---

## Redeploying Updates

### When to Redeploy

Redeploy after making changes:
- Added new features
- Fixed bugs
- Updated content
- Changed styling
- Modified any code

Your live site won't update automatically—you must redeploy.

### How to Redeploy

**Same process as first deployment:**

1. Make changes using the AI agent
2. Test in preview
3. Click **"Deploy"** button
4. Select **"Deploy to Yomake"**
5. Confirm redeployment

**What happens:**
- New build created
- Old version replaced
- Same URL (no change)
- Usually faster than first deploy

### Deployment History

View past deployments:
1. Go to project settings
2. Click "Deployments" tab
3. See list of all deployments
4. Each showing:
   - Date and time
   - Build status
   - Commit message (if GitHub connected)
   - Deployment duration

---

## Deployment Status

Track your deployment status:

### Status Indicators

**🟡 Draft**
- Never deployed
- Only in preview

**🔵 Deploying**
- Build in progress
- Wait for completion

**🟢 Deployed**
- Live and accessible
- Up to date

**🟠 Updated**
- Changes made locally
- Not yet redeployed
- Live site is outdated

**🔴 Failed**
- Build or deployment error
- Check logs for details

### Viewing Logs

If deployment fails:

1. Click "View Deployment Logs"
2. Read error messages
3. Common issues:
   - TypeScript errors
   - Missing dependencies
   - Build configuration issues
   - Environment variable problems

**Fix issues:**
```
I'm getting this deployment error: [error message]. Can you fix it?
```

---

## Features Included

### Performance

**Automatic optimizations:**
- Code splitting
- Asset compression (gzip/brotli)
- Image optimization
- Lazy loading
- Tree shaking
- Minification

**CDN delivery:**
- Global edge locations
- Fast loading worldwide
- Cached static assets
- Low latency

### Security

**Built-in protection:**
- HTTPS/SSL mandatory
- DDoS mitigation
- Firewall protection
- Security headers
- XSS protection
- CORS configuration

### Reliability

**High availability:**
- 99.9% uptime SLA
- Automatic failover
- Health monitoring
- Error tracking
- Instant rollback capability

---

## Limits and Quotas

### Free Plan

**Deployments:**
- Unlimited deployments
- Unlimited redeployments
- 2 active projects

**Bandwidth:**
- 100 GB/month per project
- Shared across all visitors
- Overage: Contact support

**Storage:**
- 1 GB per project
- Includes all assets

**Build time:**
- 15 minutes max per build
- Typical: 1-3 minutes

### Paid Plans

**Creator & Builder:**
- Same deployment features
- Higher bandwidth limits
- Priority build queue
- Faster builds

**Enterprise:**
- Custom limits
- Dedicated resources
- [Contact sales](mailto:sales@yomake.ai)

---

## Comparison with Other Options

### Yomake vs Vercel

| Feature | Yomake Hosting | Vercel |
|---------|----------------|--------|
| Setup | One click | 2-3 minutes |
| Custom domain | ❌ No | ✅ Yes |
| Analytics | ❌ No | ✅ Yes |
| Auto-deploy | ❌ No | ✅ Yes (via GitHub) |
| Edge functions | ❌ No | ✅ Yes |
| Best for | Quick deploys | Production apps |

**When to use Yomake Hosting:**
- Quick prototypes
- Client previews
- Personal projects
- MVPs and demos
- Don't need custom domain

**When to use Vercel:**
- Production applications
- Need custom domain
- Want analytics
- Require auto-deployment

[Learn more: Vercel Deployment](/docs/deployment/vercel-deployment)

---

## Custom Domains

### Not Available on Yomake Hosting

Yomake Hosting uses `.yomake.ai` subdomains only. For custom domains like `www.yourbusiness.com`, you must:

1. Deploy to Vercel instead
2. Or deploy to Yomake first, then migrate to Vercel
3. Configure your domain in Vercel

[Learn more: Custom Domains](/docs/deployment/custom-domains)

---

## Troubleshooting

### Deployment Failed

**Check build logs:**
1. Click "View Logs" button
2. Scroll to error message
3. Look for red text

**Common errors:**

**TypeScript errors:**
```
Type error: Property 'x' does not exist
```
→ Ask AI to fix type issues

**Missing dependencies:**
```
Module not found: Can't resolve 'package-name'
```
→ Ask AI to install missing package

**Build script fails:**
```
npm run build failed
```
→ Test build locally, then ask AI to fix

### Site Not Loading

**After successful deployment:**

1. **Wait 1-2 minutes** - DNS propagation
2. **Clear browser cache** - Cmd/Ctrl + Shift + R
3. **Try incognito mode** - Rule out cache issues
4. **Check URL spelling** - Verify correct subdomain

### Slow Loading

**If site loads slowly:**

1. Check asset sizes (images especially)
2. Ask AI to optimize images
3. Enable lazy loading
4. Reduce initial bundle size

```
Optimize the images on my site for faster loading
```

### Mixed Content Warnings

**HTTP resources on HTTPS site:**

```
Mixed Content: The page at 'https://...' was loaded over HTTPS,
but requested an insecure resource
```

**Fix:**
- Change `http://` URLs to `https://`
- Or use protocol-relative URLs: `//example.com/image.jpg`

```
Update all HTTP links to use HTTPS
```

---

## Best Practices

**Test before deploying**
- Preview on all devices
- Check console for errors
- Test all interactive features
- Verify links work

**Deploy frequently**
- Small, incremental updates
- Easier to catch issues
- Faster to fix problems

**Monitor your site**
- Visit regularly
- Check uptime
- Verify features work
- Update content as needed

**Optimize assets**
- Compress images before uploading
- Use appropriate image formats (WebP)
- Minimize JavaScript bundle size
- Lazy load below-the-fold content

---

## Security Considerations

### HTTPS Everywhere

All Yomake sites are HTTPS-only:
- Encrypted data transmission
- Secure forms and inputs
- Browser trust indicators
- SEO benefits

### Environment Variables

Store sensitive data securely:

**Never hardcode:**
```typescript
// ❌ Don't do this
const API_KEY = "sk_live_abc123..."
```

**Use environment variables:**
```typescript
// ✅ Do this
const API_KEY = import.meta.env.VITE_API_KEY
```

Set in project settings → Environment Variables

### API Keys

**Protect your keys:**
- Never expose in client code
- Use server-side APIs when possible
- Restrict key permissions
- Rotate keys regularly

---

## Migration Path

### Moving from Yomake to Vercel

When you're ready for production:

1. **Connect Vercel** in Integrations
2. **Connect GitHub** for auto-deploy
3. **Deploy to Vercel** from same project
4. **Configure custom domain** in Vercel
5. **Keep Yomake deployment** as staging (optional)

Both can coexist:
- Yomake URL: Preview/staging
- Vercel URL: Production

---

## Support

### Getting Help

**If you experience issues:**

1. Check [deployment status page](https://status.yomake.ai)
2. View deployment logs for errors
3. Search [FAQ](/docs/support/faq)
4. [Contact support](/docs/support/contact-support)

**Include in support request:**
- Project name
- Deployment URL
- Error message (if any)
- Screenshot of issue

---

## Next Steps

Now that your site is deployed:

- [Custom Domains](/docs/deployment/custom-domains) - Add your own domain (via Vercel)
- [Vercel Deployment](/docs/deployment/vercel-deployment) - Upgrade to Vercel hosting
- [Deployment Status](/docs/deployment/deployment-status) - Monitor deployments
- [GitHub Integration](/docs/integrations/github-integration) - Version control

---

**Go live in seconds!** Deploy to Yomake Hosting and share your creation with the world.
