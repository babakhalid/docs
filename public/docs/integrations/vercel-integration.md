# Vercel Integration

Deploy your Yomake projects to Vercel for professional hosting, custom domains, and advanced features. This comprehensive guide covers setup, workflows, and best practices.

---

## Why Deploy to Vercel?

### Professional Hosting
- **Custom domains** - Use your own domain name
- **Global CDN** - Fast loading worldwide
- **Edge network** - 70+ locations globally
- **Automatic SSL** - HTTPS for all deployments
- **DDoS protection** - Enterprise-grade security

### Developer Experience
- **Preview deployments** - Every branch gets a URL
- **Instant rollbacks** - One-click revert to previous version
- **Zero-config** - Works out of the box
- **Build logs** - Detailed deployment information
- **Environment variables** - Secure config management

### Advanced Features
- **Edge Functions** - Serverless API routes
- **Analytics** - Web vitals and visitor data
- **Image optimization** - Automatic image processing
- **Incremental Static Regeneration** - Dynamic + static benefits
- **Web Vitals monitoring** - Performance tracking

### Automated Deployment
- **GitHub integration** - Push to deploy automatically
- **Branch previews** - Test features before merging
- **Production protection** - Approval workflows
- **CI/CD pipelines** - Automated testing and building

---

## Requirements

**To connect Vercel:**
- ✅ Vercel account (free or paid)
- ✅ Yomake Creator plan or higher
- ✅ Email verified on both accounts
- ✅ GitHub integration (recommended for auto-deploy)

**Vercel account limits:**
- Hobby (free): 100 GB bandwidth, unlimited deployments
- Pro: Starting at $20/month per member
- Enterprise: Custom pricing

---

## Connecting Vercel

### First-Time Setup

**Step 1: Navigate to Integrations**
1. Click your profile picture (top-right)
2. Select "Settings"
3. Click "Integrations" tab
4. Find "Vercel" section

**Step 2: Authorize Yomake**
1. Click "Connect Vercel" button
2. Redirected to vercel.com
3. Choose account or team
4. Review permissions
5. Click "Authorize Yomake"

**Step 3: Select Scope**
1. Choose what Yomake can access:
   - **Personal account** - Your projects only
   - **Team account** - Team projects
2. Grant required permissions
3. Click "Install"

**Step 4: Confirmation**
- Green checkmark on Vercel integration
- Status shows "Connected"
- Ready to deploy!

**Total time:** 2-3 minutes

---

## Permissions Explained

### What Yomake Can Do

**Deployment access:**
- ✅ Create new deployments
- ✅ View deployment status
- ✅ Read deployment logs
- ✅ Configure domains
- ✅ Set environment variables
- ✅ View project settings

### What Yomake Cannot Do

**Restricted actions:**
- ❌ Delete Vercel projects
- ❌ Access billing information
- ❌ Manage team members
- ❌ Change account settings
- ❌ View other projects (not linked to Yomake)

**Your control:**
- Revoke access anytime via Vercel dashboard
- Full control remains with you
- Yomake only acts on your behalf

---

## Deploying to Vercel

### First Deployment

**From Yomake workspace:**

**Step 1: Prepare Project**
1. Open your project in Yomake
2. Test in preview (ensure everything works)
3. Connect GitHub integration (optional but recommended)

**Step 2: Deploy**
1. Click "Deploy" button (top-right)
2. Select "Deploy to Vercel"
3. Configure deployment:
   - **Project name** - How it appears in Vercel
   - **Framework preset** - Auto-detected (Vite)
   - **Root directory** - Usually `/` (default)
   - **Build command** - `npm run build` (default)
   - **Output directory** - `dist` (default)

**Step 3: Environment Variables (Optional)**
1. Add any required environment variables
2. Click "Add Variable"
3. Enter name and value
4. Repeat for all variables

**Step 4: Deploy**
1. Review settings
2. Click "Deploy"
3. Wait for build (30-120 seconds)
4. Get your Vercel URL!

**Your deployment URL:**
```
https://your-project-name.vercel.app
```

Or with custom domain:
```
https://yourdomain.com
```

---

### Redeployment

**After making changes:**

**Manual redeploy:**
1. Make changes in Yomake
2. Test in preview
3. Click "Deploy" → "Deploy to Vercel"
4. New deployment created
5. Previous deployment remains accessible

**Automatic redeploy (with GitHub):**
1. Make changes in Yomake
2. Push to GitHub
3. Vercel detects commit
4. Automatically builds and deploys
5. No manual action needed!

[Learn more: GitHub + Vercel Workflow](#github--vercel-workflow)

---

## GitHub + Vercel Workflow

### The Power Combo

**Fully automated deployment pipeline:**

```
Yomake (build) → GitHub (version control) → Vercel (deploy)
     ↓                ↓                          ↓
  Live preview    Code backup              Production site
```

---

### Setup

**Prerequisites:**
- ✅ GitHub integration connected
- ✅ Vercel integration connected
- ✅ Project linked to GitHub repo

**Configuration:**

**Step 1: Link GitHub Repo**
1. Connect your project to GitHub
2. Push initial code

**Step 2: Import to Vercel**
1. Deploy to Vercel from Yomake
2. Vercel automatically detects GitHub repo
3. Webhook created for auto-deployments

**Step 3: Test**
1. Make a change in Yomake
2. Push to GitHub
3. Watch Vercel deploy automatically!

---

### Workflow in Action

**Daily development:**

1. **Build in Yomake**
   ```
   "Add a pricing section with three tiers"
   ```

2. **Preview locally**
   - Test in Yomake preview
   - Verify functionality

3. **Push to GitHub**
   - Click "Push to GitHub"
   - Write commit message

4. **Auto-deploy**
   - Vercel detects commit
   - Builds automatically
   - Deploys to production

5. **Instant preview**
   - Get deployment URL
   - View changes live
   - Share with team

**Total time:** < 2 minutes from Yomake to production

---

### Branch Deployments

**Feature branches (Advanced):**

**How it works:**
1. Create branch on GitHub: `feature/new-pricing`
2. Make changes in that branch
3. Push to GitHub
4. Vercel creates **preview deployment**
5. Test at unique URL
6. Merge to `main` when ready
7. Production automatically updates

**Preview URLs:**
```
https://your-project-git-feature-new-pricing.vercel.app
```

**Benefits:**
- Test features in isolation
- Share with stakeholders
- No risk to production
- Easy rollback

---

## Custom Domains

### Adding Your Domain

**Prerequisites:**
- Own a domain (GoDaddy, Namecheap, Cloudflare, etc.)
- Access to DNS settings
- Project deployed to Vercel

**Step 1: Add Domain in Vercel**

**Via Yomake:**
1. Go to Project Settings
2. Click "Domains" tab
3. Click "Add Domain"
4. Enter your domain: `yourdomain.com`
5. Click "Add"

**Or via Vercel Dashboard:**
1. Go to vercel.com
2. Select your project
3. Settings → Domains
4. Add domain

**Step 2: Configure DNS**

Vercel provides DNS records to add:

**Option A: Nameservers (Easiest)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Change nameservers at your domain provider to Vercel's.

**Option B: CNAME Record**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Option C: A Record**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Step 3: Verify**
1. DNS changes propagate (5 mins - 48 hours)
2. Vercel verifies ownership
3. SSL certificate issued automatically
4. Domain goes live!

[Detailed custom domain guide](/docs/deployment/custom-domains)

---

## Vercel Dashboard

### What You Can See

**Project overview:**
- All deployments
- Deployment status
- Build logs
- Error messages

**Analytics:**
- Page views
- Unique visitors
- Top pages
- Performance metrics
- Web Vitals scores

**Settings:**
- Environment variables
- Custom domains
- Build configuration
- Team access
- Integrations

**Access dashboard:**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. View all information

---

## Environment Variables

### What Are They?

Environment variables store sensitive configuration:
- API keys
- Database credentials
- Feature flags
- Third-party service tokens

**Never hardcode secrets in code!**

---

### Adding Variables

**In Vercel (recommended):**

1. Go to Project Settings in Vercel
2. Click "Environment Variables"
3. Add variable:
   - **Name**: `VITE_API_KEY`
   - **Value**: `sk_live_...`
   - **Environment**: Production, Preview, Development
4. Save
5. Redeploy for changes to take effect

**In Yomake:**
1. Project Settings → Environment Variables
2. Variables synced to Vercel on deploy

**Using in code:**
```typescript
const apiKey = import.meta.env.VITE_API_KEY
```

**Important:** Vite requires `VITE_` prefix for client-side variables.

---

## Deployment Settings

### Build Configuration

**Default settings (auto-detected):**
```
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 20.x
```

**Customize if needed:**
- Different build command
- Monorepo setup
- Custom output directory
- Specific Node version

---

### Performance Settings

**Automatic optimizations:**
- Code splitting
- Asset compression
- Image optimization
- Edge caching

**Configure:**
- Edge Functions location
- Serverless Function regions
- Caching strategies
- Rewrites and redirects

---

## Monitoring and Analytics

### Web Analytics

**Vercel Analytics shows:**
- Real-time visitors
- Page views and sessions
- Top pages
- Referral sources
- Geographic distribution

**Enable Analytics:**
1. Vercel Dashboard → Project
2. Analytics tab
3. Enable Web Analytics
4. Free on Hobby plan
5. Advanced features on Pro plan

---

### Web Vitals

**Performance metrics:**
- **LCP** - Largest Contentful Paint
- **FID** - First Input Delay
- **CLS** - Cumulative Layout Shift
- **TTFB** - Time to First Byte

**Track performance:**
- Real user metrics
- Per-page breakdown
- Historical trends
- Optimization suggestions

---

### Deployment Logs

**Debug build issues:**

**Access logs:**
1. Vercel Dashboard → Deployments
2. Click deployment
3. View "Build Logs" tab

**What you'll see:**
- Install dependencies output
- Build command execution
- File generation
- Error messages

**Common issues:**
- Missing dependencies
- TypeScript errors
- Build script failures
- Out of memory errors

---

## Rollback and History

### Deployment History

**View all deployments:**
- Every deployment preserved
- Full history available
- Never lose a version

**Each deployment includes:**
- Timestamp
- Git commit (if GitHub connected)
- Build duration
- Deployment URL
- Status (success/failed)

---

### Instant Rollback

**Revert to previous version:**

1. Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click three-dot menu (⋮)
4. Select "Promote to Production"
5. Previous version now live

**Takes:** < 30 seconds
**No rebuild required**

**Use cases:**
- Bug in latest deployment
- Need to revert quickly
- Testing previous version

---

## Collaboration

### Team Access

**Invite team members:**

1. Vercel Dashboard → Settings
2. Click "Members" tab
3. Invite by email
4. Set role:
   - **Owner** - Full control
   - **Member** - Deploy and view
   - **Viewer** - View only

**Yomake + Vercel teams:**
- Yomake collaboration for building
- Vercel access for deployment management
- Separate permission systems

---

### Preview Sharing

**Share deployments easily:**

**Every deployment gets URL:**
```
https://your-project-abc123.vercel.app
```

**Share with:**
- Clients for review
- Team for feedback
- Stakeholders for approval
- Testing on real devices

**No authentication required** (unless you enable Preview Protection)

---

## Advanced Features

### Edge Functions

**Serverless API routes:**

Create API endpoints:
```typescript
// api/hello.ts
export default function handler(req, res) {
  res.json({ message: "Hello from Edge!" })
}
```

**Deployed to edge:**
- Low latency worldwide
- Auto-scaling
- Pay per invocation

---

### Middleware

**Run code before requests:**

```typescript
// middleware.ts
export function middleware(request) {
  // Check authentication
  // Redirect users
  // Modify headers
  // A/B testing
}
```

**Use cases:**
- Authentication
- Redirects
- Feature flags
- Localization

---

### Incremental Static Regeneration

**Best of both worlds:**
- Static generation speed
- Dynamic content freshness
- Regenerate pages on-demand
- Cache invalidation

**Configure in code:**
```typescript
export const revalidate = 60; // Regenerate every 60 seconds
```

---

## Troubleshooting

### Deployment Failed

**Check build logs:**

1. Vercel Dashboard → Failed deployment
2. View "Build Logs"
3. Look for error messages

**Common issues:**

**TypeScript errors:**
```
Type error: Property 'x' does not exist
```
→ Fix types in Yomake, redeploy

**Missing dependencies:**
```
Cannot find module 'package-name'
```
→ Tell Yomake AI to install package

**Build timeout:**
```
Build exceeded maximum duration
```
→ Optimize build, upgrade Vercel plan

**Out of memory:**
```
JavaScript heap out of memory
```
→ Reduce bundle size, upgrade Vercel plan

---

### Domain Not Working

**DNS propagation:**
- Wait up to 48 hours
- Check with `dig yourdomain.com`
- Verify DNS records are correct

**SSL certificate issues:**
- Vercel auto-issues certificates
- Can take 5-10 minutes
- Check Vercel dashboard for status

**Wrong domain configuration:**
- Verify CNAME/A records
- Check domain ownership
- Ensure no conflicting records

---

### Site Not Updating

**Cache issues:**

**Clear cache:**
1. Hard refresh: `Cmd/Ctrl + Shift + R`
2. Clear browser cache
3. Try incognito mode

**Purge Vercel cache:**
1. Vercel Dashboard → Deployments
2. Click three-dot menu (⋮)
3. Select "Redeploy"
4. Check "Clear cache"

---

### Environment Variables Not Working

**Common mistakes:**

1. **Missing VITE_ prefix**
   - Vite requires `VITE_` for client-side vars
   - Correct: `VITE_API_KEY`
   - Wrong: `API_KEY`

2. **Not redeployed**
   - Environment changes require redeploy
   - Redeploy after adding/changing variables

3. **Wrong environment**
   - Check variable is set for correct environment
   - Production, Preview, or Development

---

## Pricing

### Vercel Plans

**Hobby (Free):**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic SSL
- Edge Network
- Web Analytics (basic)

**Pro ($20/month per member):**
- 1 TB bandwidth/month
- Advanced Analytics
- Team collaboration
- Priority support
- Password protection
- Advanced DDoS mitigation

**Enterprise (Custom):**
- Custom bandwidth
- SLA guarantee
- Dedicated support
- On-premise options
- Advanced security

**Yomake costs:**
- Vercel integration: Included in Creator plan+
- No additional Yomake fees

---

## Best Practices

### Use Preview Deployments
- Test before merging to main
- Share preview URLs for feedback
- Catch issues early

### Enable Analytics
- Monitor real user performance
- Track Web Vitals
- Identify slow pages
- Optimize based on data

### Set Up Environment Variables
- Never commit secrets
- Use Vercel dashboard for sensitive data
- Different values per environment

### Monitor Build Times
- Keep builds fast (< 2 minutes ideal)
- Optimize dependencies
- Use caching strategies

### Configure Custom Domain
- Professional appearance
- Better SEO
- Brand consistency
- Use apex and www domains

---

## FAQs

**Q: Do I need a paid Vercel account?**
A: No, the free Hobby plan works great for most projects.

**Q: Can I deploy without GitHub?**
A: Yes, but you lose auto-deployment benefits.

**Q: How many projects can I deploy?**
A: Unlimited on all Vercel plans.

**Q: What's the difference between Vercel and Yomake hosting?**
A: Vercel offers custom domains, analytics, and advanced features. Yomake hosting is simpler and instant.

**Q: Can I migrate from Yomake hosting to Vercel?**
A: Yes, easily! Just deploy to Vercel and update your links.

**Q: Do deployments cost Yomake tokens?**
A: No, deployments don't consume tokens.

**Q: Can I use Vercel's serverless functions?**
A: Yes, create API routes in your project and they'll work on Vercel.

**Q: How do I get a custom domain?**
A: Register domain with any provider, add to Vercel, configure DNS.

---

## Next Steps

Now that you've connected Vercel:

- [Custom Domains](/docs/deployment/custom-domains) - Add your domain
- [GitHub Integration](/docs/integrations/github-integration) - Enable auto-deploy
- [Deployment Status](/docs/deployment/deployment-status) - Monitor deployments
- [Environment Variables](/docs/integrations/vercel-integration#environment-variables) - Secure configuration

---

**Deploy like a pro!** Use Vercel for production-ready hosting with all the features you need.
