# Project Settings

Customize and configure your Yomake projects with fine-grained control over environments, integrations, and advanced features.

---

## Overview

Project Settings give you control over how your project behaves, connects to external services, and handles various configurations. Access settings from your project dashboard to customize everything from environment variables to deployment preferences.

**Key areas:**
- Environment Variables
- Domain Management
- Integration Settings
- Advanced Options
- Danger Zone

---

## Accessing Project Settings

### From Project Dashboard

1. **Navigate to your project** in the Project Dashboard
2. **Click the gear icon** (⚙️) on the project card
3. **Select "Settings"** from the dropdown menu

OR

1. **Open your project** in the editor
2. **Click the project name** in the top navigation
3. **Select "Settings"** from the dropdown

### Settings Navigation

Settings are organized into tabs:
- **General** - Basic project information
- **Environment** - Environment variables and secrets
- **Domains** - Custom domain configuration
- **Integrations** - Connected services (GitHub, Vercel, etc.)
- **Advanced** - Technical configuration
- **Danger Zone** - Destructive actions

---

## General Settings

### Project Information

**Project Name**
- Change your project's display name
- Used in navigation and project lists
- Does not affect URLs or deployment

**Description**
- Add or edit project description
- Helps with organization
- Visible only to you

**Project ID**
- Read-only unique identifier
- Used for API references
- Cannot be changed

**Template Type**
- Shows the original template used
- Cannot be changed after creation
- For reference only

### Project Visibility

**Private** (Default)
- Only you can access
- Not visible in public listings
- Requires authentication

**Public**
- Shareable via link
- Visible in community showcase (optional)
- View-only for others

---

## Environment Variables

Securely store configuration values, API keys, and secrets.

### Adding Environment Variables

1. Go to **Settings > Environment** tab
2. Click **"Add Variable"**
3. Enter **Key** (e.g., `STRIPE_SECRET_KEY`)
4. Enter **Value** (e.g., `sk_test_...`)
5. Select **Environment** (Development, Production, or Both)
6. Click **"Save"**

### Variable Types

**Plain Text**
- Regular configuration values
- Visible in settings
- Example: `API_URL=https://api.example.com`

**Secret**
- Encrypted values
- Hidden after saving (shows `***`)
- Example: API keys, passwords

**System Variables** (Auto-generated)
- `YOMAKE_PROJECT_ID` - Your project ID
- `YOMAKE_ENVIRONMENT` - Current environment
- `VERCEL_URL` - Deployment URL (if using Vercel)

### Environment Scopes

**Development**
- Used in Yomake preview
- Available during development
- Not included in production builds

**Production**
- Used in deployed sites
- Available after deployment
- Encrypted at rest

**Both**
- Available in all environments
- Convenient for shared values
- Use carefully

### Best Practices

✅ **DO:**
- Use secrets for API keys
- Name variables clearly (`STRIPE_SECRET_KEY` not `KEY1`)
- Scope variables appropriately
- Document required variables in README

❌ **DON'T:**
- Commit secrets to version control
- Share production secrets
- Use production keys in development
- Store passwords as plain text

### Example Configuration

```bash
# API Configuration
API_URL=https://api.example.com
API_TIMEOUT=30000

# Authentication (Secret)
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Payment Processing (Secret)
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_BETA_FEATURES=false
```

---

## Domain Settings

Configure custom domains for your deployed projects.

### Adding a Custom Domain

1. Go to **Settings > Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `myapp.com`)
4. Click **"Verify Domain"**
5. Add DNS records shown in the interface
6. Wait for verification (usually 1-5 minutes)

### DNS Configuration

**For Root Domains (example.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For Subdomains (www.example.com):**
```
Type: CNAME
Name: www
Value: cname.yomake.app
```

### SSL Certificates

**Automatic HTTPS:**
- SSL certificates auto-generated
- Free Let's Encrypt certificates
- Auto-renewal every 90 days
- No configuration required

**Certificate Status:**
- ⏳ Pending - Certificate being issued
- ✅ Active - HTTPS working
- ⚠️ Expiring Soon - Auto-renewal scheduled
- ❌ Failed - Check DNS configuration

### Domain Redirect Rules

**WWW to Non-WWW:**
- Automatically handled
- Choose preferred version
- 301 permanent redirect

**HTTPS Enforcement:**
- Enabled by default
- Cannot be disabled
- All HTTP requests redirect to HTTPS

---

## Integration Settings

Manage connected services and third-party integrations.

### GitHub Integration

**Repository Settings:**
- Change connected repository
- Update branch settings
- Configure auto-deploy rules
- Manage webhook settings

**Sync Options:**
- Auto-sync on save
- Manual sync only
- Sync on deploy only

**Access Control:**
- Manage GitHub permissions
- Revoke access if needed
- Reconnect after changes

### Vercel Integration

**Deployment Settings:**
- Configure build commands
- Set output directory
- Environment variable sync
- Preview deployment rules

**Domain Management:**
- Import Vercel domains
- Sync custom domains
- SSL certificate management

### Supabase Integration

**Project Connection:**
- Link Supabase project
- Sync environment variables
- Update project URL/keys
- Test connection

**Database Settings:**
- Connection string visibility
- Pool configuration
- SSL mode selection

### AI Provider Settings

**Model Selection:**
- Choose preferred AI model
- Fallback model configuration
- Token usage limits
- Cost controls

**API Configuration:**
- Bring your own API key
- Usage quotas
- Rate limiting settings

---

## Advanced Settings

Technical configuration for power users.

### Build Configuration

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
dist
```

**Install Command:**
```bash
npm install
```

### Framework Detection

**Auto-Detected:**
- Framework automatically detected
- Build settings configured
- Deployment optimized

**Override Detection:**
- Manual framework selection
- Custom build commands
- Advanced use cases

### Node.js Version

**Default:** 18.x
**Available:** 16.x, 18.x, 20.x
**Recommendation:** Use latest LTS version

### Package Manager

**Detected Automatically:**
- npm (package-lock.json)
- yarn (yarn.lock)
- pnpm (pnpm-lock.yaml)

**Override:** Manual selection available

### Performance Settings

**Caching:**
- ✅ Enable build caching (faster builds)
- ✅ Enable dependency caching
- Cache invalidation on demand

**Build Optimization:**
- Code splitting enabled
- Asset compression
- Source map generation

---

## Danger Zone

Irreversible actions that require confirmation.

### Transfer Project

Transfer project ownership to another Yomake user:

1. Click **"Transfer Project"**
2. Enter recipient's email
3. Confirm transfer
4. Recipient receives invitation
5. You lose access after acceptance

**Notes:**
- Cannot be undone
- Transfer history preserved
- Billing transfers with project

### Archive Project

Archive project to reduce clutter:

1. Click **"Archive Project"**
2. Confirm archive
3. Project hidden from dashboard
4. Deployments remain active
5. Can be restored anytime

**Archived Projects:**
- Still accessible via direct link
- Not counted in project limits
- Deployments continue working
- No new deployments allowed

### Delete Project

Permanently delete project and all data:

1. Click **"Delete Project"**
2. Type project name to confirm
3. Click **"Delete Forever"**
4. ⚠️ **Cannot be undone**

**What Gets Deleted:**
- ✅ All project files and code
- ✅ All deployments and builds
- ✅ Environment variables
- ✅ Project history and logs
- ✅ Connected integrations
- ✅ Custom domains (removed)

**What's NOT Deleted:**
- GitHub repository (if connected)
- Vercel deployments (if separate)
- Supabase data (if external)
- Downloaded exports

### Reset to Template

Reset project to original template state:

1. Click **"Reset to Template"**
2. Choose template version
3. Confirm reset
4. ⚠️ **Loses all changes**

**Use Cases:**
- Start over from scratch
- Fix broken customizations
- Apply template updates

---

## Common Settings Tasks

### Changing Project Name

1. Go to **Settings > General**
2. Update **Project Name** field
3. Click **"Save Changes"**
4. ✅ Name updated everywhere

### Adding API Keys

1. Go to **Settings > Environment**
2. Click **"Add Variable"**
3. Name: `API_KEY`, Value: your key
4. Select **"Secret"** type
5. Choose environment scope
6. Click **"Save"**

### Setting Up Custom Domain

1. Go to **Settings > Domains**
2. Click **"Add Domain"**
3. Enter domain name
4. Add DNS records to your registrar
5. Wait for verification ✅

### Connecting GitHub

1. Go to **Settings > Integrations**
2. Find **GitHub** section
3. Click **"Connect GitHub"**
4. Authorize Yomake
5. Select repository
6. Configure sync settings

---

## Settings Best Practices

### Security

✅ Use secrets for sensitive data
✅ Rotate API keys regularly
✅ Review integration permissions
✅ Enable two-factor authentication (account-level)

### Organization

✅ Use clear, descriptive names
✅ Add project descriptions
✅ Archive unused projects
✅ Document environment variables

### Performance

✅ Enable build caching
✅ Use latest Node.js LTS
✅ Optimize environment variables
✅ Monitor deployment times

---

## Troubleshooting

### Environment Variables Not Working

**Problem:** Variables not available in code

**Solutions:**
- Check variable name spelling
- Verify environment scope (dev vs prod)
- Rebuild/redeploy project
- Check that variables start with expected prefix (e.g., `VITE_` for Vite)

### Custom Domain Not Working

**Problem:** Domain not resolving or showing SSL error

**Solutions:**
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check domain status in settings
- Clear browser cache and try incognito

### GitHub Sync Failing

**Problem:** Code not syncing to repository

**Solutions:**
- Check GitHub connection status
- Verify repository permissions
- Re-authorize GitHub integration
- Check for merge conflicts

### Build Failures

**Problem:** Deployments failing

**Solutions:**
- Check build logs in deployment history
- Verify environment variables are set
- Check build command configuration
- Test build locally first

---

## Need Help?

**Settings Issues:**
- Check [FAQ](/docs/support/faq) for common solutions
- Review [Integration Guides](/docs/integrations/integrations-overview)
- [Contact Support](/docs/support/contact-support) for assistance

**Related Documentation:**
- [Project Dashboard](/docs/projects/project-dashboard) - Managing projects
- [GitHub Integration](/docs/integrations/github-integration) - Version control
- [Deployment Guide](/docs/deployment/deploy-overview) - Going live
- [Environment Variables Best Practices](https://12factor.net/config) - External guide

---

**You now have complete control over your project settings!** Configure, customize, and optimize your Yomake projects for success.
