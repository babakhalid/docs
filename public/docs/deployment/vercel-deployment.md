# Vercel Deployment

Deploy your Yomake projects to Vercel for professional hosting with automatic CI/CD, custom domains, and edge network delivery.

---

## Overview

Vercel provides enterprise-grade hosting with automatic deployments from Git, global CDN, and zero-configuration setup. Perfect for production applications that need reliability and speed.

**Vercel Benefits:**
- Automatic Git deployments
- Global edge network
- Custom domains and SSL
- Preview deployments
- Analytics and monitoring

---

## Prerequisites

Before deploying to Vercel, you need:
- Vercel account (free tier available)
- GitHub repository connected to your project
- Yomake project ready to deploy

---

## Initial Vercel Setup

### Step 1: Connect Vercel

**From Yomake:**
1. Open your project
2. Go to **Settings > Integrations**
3. Find **Vercel** section
4. Click **"Connect Vercel"**
5. Sign in to Vercel (or create account)
6. Authorize Yomake

### Step 2: Link Repository

**Choose Repository:**
1. Select your GitHub repository
2. Choose branch (usually \`main\` or \`master\`)
3. Configure project settings (auto-detected)
4. Click **"Deploy"**

**First Deployment:**
- Takes 1-3 minutes
- Builds your project
- Assigns Vercel domain
- Provides preview URL

---

## Deployment Configuration

### Build Settings

**Framework Preset:** Auto-detected (React/Vite)

**Build Command:**
\`\`\`bash
npm run build
\`\`\`

**Output Directory:**
\`\`\`
dist
\`\`\`

**Install Command:**
\`\`\`bash
npm install
\`\`\`

### Environment Variables

**Add Production Variables:**
1. Go to Vercel dashboard
2. Select your project
3. Go to **Settings > Environment Variables**
4. Add each variable:
   - Name: \`API_KEY\`
   - Value: Your API key
   - Environment: Production
5. Click **"Save"**

**Auto-Sync from Yomake:**
- Variables can sync automatically
- Enable in Yomake Settings > Integrations > Vercel
- Select which variables to sync

---

## Automatic Deployments

### Git Push = Auto Deploy

**How It Works:**
1. Push code to GitHub
2. Vercel detects change
3. Builds project automatically
4. Deploys to production
5. Updates live site

**Branch Deployments:**
- \`main\` branch → Production
- Other branches → Preview deployments
- Pull requests → Preview URLs

### Preview Deployments

**Every Pull Request Gets:**
- Unique preview URL
- Isolated environment
- Full functionality
- Share with team for review

**Example:**
\`\`\`
PR #42: Add new feature
Preview: https://my-app-git-feature-branch.vercel.app
\`\`\`

---

## Custom Domains

### Adding Custom Domain

**From Vercel Dashboard:**
1. Go to **Project Settings > Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., \`myapp.com\`)
4. Click **"Add"**

### DNS Configuration

**Option 1: Vercel Nameservers (Recommended)**
\`\`\`
Update at your domain registrar:
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
\`\`\`

**Option 2: Custom DNS**

**For Root Domain (\`example.com\`):**
\`\`\`
Type: A
Name: @
Value: 76.76.21.21
\`\`\`

**For WWW (\`www.example.com\`):**
\`\`\`
Type: CNAME
Name: www
Value: cname.vercel-dns.com
\`\`\`

### SSL Certificates

**Automatic HTTPS:**
- Free SSL certificates
- Auto-renewal
- No configuration needed
- Active within minutes

---

## Deployment Workflow

### Standard Deployment Flow

**1. Develop Locally**
\`\`\`bash
# Make changes in Yomake
# Test in preview
\`\`\`

**2. Push to GitHub**
\`\`\`bash
git add .
git commit -m "Add new feature"
git push origin main
\`\`\`

**3. Automatic Build**
- Vercel detects push
- Runs build command
- Generates optimized bundle

**4. Deploy to Production**
- Updates live site
- Zero downtime deployment
- Instant global distribution

### Rollback to Previous Version

**If Something Goes Wrong:**
1. Go to Vercel dashboard
2. Click **"Deployments"**
3. Find working version
4. Click **⋮ > Promote to Production**
5. Previous version restored instantly

---

## Monitoring Deployments

### Deployment Status

**Check Status:**
- Vercel dashboard shows all deployments
- Real-time build logs
- Success/failure notifications
- Build time and size metrics

**Deployment States:**
- 🟡 Building
- 🟢 Ready (Success)
- 🔴 Error (Failed)
- ⏸️ Canceled

### Build Logs

**View Detailed Logs:**
1. Go to deployment
2. Click to expand
3. View full build output
4. Identify any errors

---

## Performance Optimization

### Edge Network

**Automatic Optimizations:**
- Global CDN distribution
- Automatic image optimization
- Brotli compression
- HTTP/3 support

### Analytics

**Vercel Analytics:**
- Real-time visitors
- Performance metrics
- Core Web Vitals
- Geographic distribution

**Enable Analytics:**
1. Go to **Project Settings > Analytics**
2. Click **"Enable"**
3. View metrics in dashboard

---

## Troubleshooting

### Build Failures

**Problem:** Deployment fails during build

**Solutions:**
1. Check build logs for errors
2. Verify build command is correct
3. Test build locally: \`npm run build\`
4. Check environment variables are set
5. Ensure dependencies are listed in package.json

### Domain Not Working

**Problem:** Custom domain doesn't resolve

**Solutions:**
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check domain status in Vercel dashboard
4. Use DNS checker tool
5. Contact domain registrar if issues persist

### Environment Variables Not Working

**Problem:** App can't access env variables

**Solutions:**
1. Verify variables are set in Vercel
2. Check variable names match code
3. Rebuild and redeploy project
4. For Vite, ensure variables start with \`VITE_\`

---

## Best Practices

### Deployment Strategy

✅ **DO:**
- Test locally before pushing
- Use preview deployments for review
- Keep main branch stable
- Monitor build times
- Set up staging environment

❌ **DON'T:**
- Push untested code to main
- Skip environment variable setup
- Ignore build warnings
- Deploy during high-traffic periods

### Branch Strategy

**Recommended Setup:**
\`\`\`
main → Production (vercel.com)
staging → Staging (staging.vercel.com)
feature/* → Preview deployments
\`\`\`

---

## Vercel vs Yomake Hosting

### When to Use Vercel

✅ Need custom domain
✅ Want Git-based workflow
✅ Require team collaboration
✅ Need preview deployments
✅ Want advanced analytics

### When to Use Yomake Hosting

✅ Quick testing and sharing
✅ Simple one-click deployment
✅ No custom domain needed
✅ Rapid iteration
✅ Prototypes and demos

[Compare with Yomake Hosting](/docs/deployment/yomake-hosting)

---

## Advanced Features

### Serverless Functions

**Add API Routes:**
Create \`/api\` directory in your project and Vercel automatically deploys serverless functions.

### Edge Functions

**Run Code at the Edge:**
Execute code closer to users for better performance.

### Incremental Static Regeneration

**Keep Static, Stay Fresh:**
Update static pages without rebuilding entire site.

---

## Pricing

**Hobby (Free):**
- Personal projects
- Unlimited deployments
- Basic analytics
- Community support

**Pro ($20/month):**
- Commercial projects
- Team collaboration
- Advanced analytics
- Priority support

[View Vercel Pricing](https://vercel.com/pricing)

---

## Need Help?

- [Deploy Overview](/docs/deployment/deploy-overview)
- [Custom Domains](/docs/deployment/custom-domains)
- [Deployment Status](/docs/deployment/deployment-status)
- [Vercel Documentation](https://vercel.com/docs)
- [Contact Support](/docs/support/contact-support)

---

**Deploy with confidence using Vercel!** Professional hosting with zero configuration.
