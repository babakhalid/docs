# Deployment Status

Monitor your deployments, understand status indicators, and troubleshoot deployment issues.

---

## Overview

Yomake provides real-time deployment status tracking so you always know the state of your projects. This guide helps you understand deployment statuses, read build logs, and resolve common deployment problems.

---

## Deployment Status Indicators

### Status Types

**🟢 Live** - Deployment successful and accessible
- Site is live
- All systems operational
- Users can access
- No action needed

**🟡 Building** - Deployment in progress
- Building your project
- Installing dependencies
- Compiling code
- Wait for completion (1-3 minutes typical)

**🔵 Queued** - Waiting to start
- In deployment queue
- Will start shortly
- Multiple deployments queued
- No action needed

**🟠 Initializing** - Starting deployment
- Setting up environment
- Preparing build
- Brief status (seconds)

**🔴 Failed** - Deployment error
- Build failed
- Error occurred
- Site not updated
- Action required - check logs

**⏸️ Canceled** - Deployment stopped
- Manually canceled
- Or replaced by newer deployment
- No changes applied

---

## Viewing Deployment Status

### From Project Dashboard

**Quick Status View:**
1. Go to Project Dashboard
2. Each project card shows deployment status
3. Click card for details

**Status Badge:**
```
My Project
🟢 Deployed 2 hours ago
```

### From Project Settings

**Detailed Deployment Info:**
1. Open project
2. Click **Settings > Deployments**
3. View complete deployment history
4. Access build logs
5. See deployment timeline

### Real-Time Updates

**Live Status Monitoring:**
- Status updates automatically
- No refresh needed
- Real-time progress
- Notifications on completion

---

## Deployment History

### Viewing Past Deployments

**Access History:**
1. Go to **Settings > Deployments**
2. See chronological list of all deployments
3. Each shows:
   - Timestamp
   - Status
   - Duration
   - Deployed by
   - Git commit (if connected)

**Example History:**
```
🟢 Deployment #45 - 2 hours ago - 2m 34s
🟢 Deployment #44 - 5 hours ago - 2m 12s
🔴 Deployment #43 - 1 day ago - Failed
🟢 Deployment #42 - 1 day ago - 2m 45s
```

### Deployment Details

**Click Any Deployment to See:**
- Full build logs
- Environment used
- Build time breakdown
- File changes
- Commit information
- Error messages (if failed)

---

## Build Logs

### Reading Build Logs

**Access Logs:**
1. Go to deployment history
2. Click on deployment
3. View full build output

**Log Structure:**
```
[00:00] → Installing dependencies...
[00:15] → Running build command...
[00:45] → Optimizing assets...
[01:20] → Deploying to production...
[02:15] ✓ Deployment complete!
```

### Understanding Log Messages

**Common Log Sections:**

**1. Environment Setup**
```
→ Node.js 18.x
→ npm 9.x
→ Installing dependencies...
```

**2. Dependency Installation**
```
→ npm install
→ added 1247 packages in 15s
```

**3. Build Process**
```
→ npm run build
→ vite v4.0.0 building for production...
→ ✓ 145 modules transformed
```

**4. Optimization**
```
→ computing gzip size...
→ dist/index.html         1.2 kB
→ dist/assets/index.js    142.5 kB
```

**5. Deployment**
```
→ Uploading build artifacts...
→ Configuring routing...
→ ✓ Deployment successful!
```

### Downloading Logs

**Save Logs for Reference:**
1. Open deployment details
2. Click **"Download Logs"**
3. Save as `.txt` file
4. Share with support if needed

---

## Deployment Timeline

### Build Time Breakdown

**Typical Deployment Phases:**

| Phase | Typical Time | What Happens |
|-------|--------------|--------------|
| Queue | 0-10s | Waiting for available slot |
| Initialize | 5-10s | Setting up environment |
| Install | 10-30s | Installing dependencies |
| Build | 30-90s | Compiling and bundling |
| Optimize | 10-20s | Minifying and compressing |
| Deploy | 10-20s | Uploading to servers |
| **Total** | **1-3 min** | **Average deployment** |

### Fast vs Slow Builds

**Fast Builds (<2 minutes):**
- Small project size
- Few dependencies
- Cached dependencies
- Simple build process

**Slow Builds (>3 minutes):**
- Large codebase
- Many dependencies
- Complex build steps
- No cache available

---

## Common Deployment Statuses

### Successful Deployment

**What You'll See:**
```
✓ Build completed successfully
✓ Assets uploaded
✓ Deployment live at: https://myproject.yomake.app
Duration: 2m 15s
```

**Next Steps:**
- Visit site to verify
- Test functionality
- Share with team

### Build Failures

**Common Error Messages:**

**1. Dependency Error**
```
❌ npm ERR! code ERESOLVE
❌ Unable to resolve dependency tree
```
**Solution:** Check package.json for conflicts

**2. Build Command Failed**
```
❌ Error: Build script failed
❌ Exit code: 1
```
**Solution:** Check build logs for specific error

**3. Out of Memory**
```
❌ JavaScript heap out of memory
```
**Solution:** Optimize build or upgrade plan

**4. Syntax Error**
```
❌ SyntaxError: Unexpected token
❌ File: src/components/Header.tsx:45
```
**Solution:** Fix syntax error in code

### Pending Deployments

**What "Queued" Means:**
- System processing other deployments
- Your turn coming soon
- Typically waits <30 seconds
- No action needed

**If Stuck in Queue:**
- Wait 2-3 minutes
- Refresh page
- Cancel and retry
- Contact support if persists

---

## Monitoring Active Deployments

### Real-Time Progress

**While Building:**
- Progress percentage shown
- Current step indicated
- Estimated time remaining
- Live log streaming

**Example:**
```
Building... 65%
→ Optimizing assets
⏱ ~45 seconds remaining
```

### Canceling Deployments

**Stop In-Progress Deployment:**
1. Go to deployment status
2. Click **"Cancel Deployment"**
3. Confirm cancellation
4. Build stops immediately
5. No changes applied

**When to Cancel:**
- Started wrong deployment
- Spotted error in code
- Need to make quick fix
- Accidentally triggered

---

## Deployment Notifications

### Email Notifications

**Receive Emails For:**
- ✅ Successful deployments
- ❌ Failed deployments
- ⚠️ Long build times

**Configure Notifications:**
1. Go to **Settings > Notifications**
2. Toggle deployment alerts
3. Choose notification types
4. Save preferences

### In-App Notifications

**Browser Notifications:**
- Real-time deployment status
- Build complete alerts
- Failure warnings
- Click to view details

---

## Rollback to Previous Deployment

### Quick Rollback

**If Something Goes Wrong:**
1. Go to **Settings > Deployments**
2. Find last working deployment
3. Click **"⋮ More Options"**
4. Select **"Rollback to This Version"**
5. Confirm rollback
6. Previous version goes live immediately

**Rollback Features:**
- Instant restoration
- Zero downtime
- All previous deployments available
- Can roll forward again if needed

### When to Rollback

✅ **Rollback If:**
- New deployment breaks site
- Critical bug introduced
- Performance issues
- User-facing errors

❌ **Don't Rollback If:**
- Minor styling issues
- Can fix with quick deploy
- Testing in progress

---

## Deployment Best Practices

### Pre-Deployment Checklist

**Before Deploying:**
- [ ] Test locally
- [ ] Check build succeeds locally
- [ ] Review code changes
- [ ] Update environment variables if needed
- [ ] Commit and push to Git (if integrated)

### Post-Deployment Checklist

**After Deployment:**
- [ ] Verify site loads
- [ ] Test critical functionality
- [ ] Check mobile responsiveness
- [ ] Review performance
- [ ] Monitor error logs

### Deployment Timing

✅ **Good Times to Deploy:**
- Low traffic periods
- After thorough testing
- When team is available
- During business hours (for monitoring)

❌ **Avoid Deploying:**
- Peak traffic times
- Before weekends/holidays
- Without testing
- Multiple changes at once

---

## Troubleshooting Deployments

### Deployment Stuck

**Problem:** Deployment not progressing

**Solutions:**
1. Wait 5 minutes (may be normal)
2. Check system status page
3. Cancel and retry
4. Contact support if persists

### Repeated Failures

**Problem:** Every deployment fails

**Solutions:**
1. Check build logs carefully
2. Test build locally: `npm run build`
3. Verify all dependencies listed
4. Check environment variables
5. Review recent code changes

### Deployment Success But Site Broken

**Problem:** Deployment succeeds but site doesn't work

**Solutions:**
1. Check browser console for errors
2. Verify environment variables set
3. Check API endpoints working
4. Test in incognito mode
5. Hard refresh browser

### Slow Deployments

**Problem:** Builds taking too long

**Solutions:**
1. Review project size
2. Check for large dependencies
3. Optimize images and assets
4. Enable build caching
5. Consider upgrading plan

---

## Deployment Metrics

### Tracking Performance

**Monitor These Metrics:**
- Average build time
- Success rate
- Deployment frequency
- Time to recovery (after failures)

**Access Metrics:**
1. Go to **Settings > Analytics**
2. View **Deployment** tab
3. See historical data
4. Export reports

### Improving Deployment Speed

**Optimization Tips:**
- Remove unused dependencies
- Use build caching
- Optimize asset sizes
- Simplify build scripts
- Upgrade to faster plan

---

## Need Help?

**Deployment Issues:**
- [Deploy Overview](/docs/deployment/deploy-overview)
- [Yomake Hosting](/docs/deployment/yomake-hosting)
- [Vercel Deployment](/docs/deployment/vercel-deployment)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

---

**Monitor with confidence!** Understanding deployment status helps you ship faster and troubleshoot effectively.
