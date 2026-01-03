# Custom Domains

Configure custom domains for your Yomake projects to create professional, branded URLs.

---

## Overview

Custom domains let you replace default hosting URLs with your own branded domain (e.g., `myapp.com` instead of `myapp.yomake.app`). This guide covers domain setup, DNS configuration, and SSL certificates.

**What You'll Learn:**
- Adding custom domains
- DNS configuration
- SSL certificate setup
- Troubleshooting domain issues

---

## Prerequisites

**Before Adding a Domain:**
- Own a domain (purchase from registrar like GoDaddy, Namecheap, Google Domains)
- Have access to DNS settings
- Project deployed and live
- Domain not in use elsewhere

---

## Adding a Custom Domain

### Step 1: Access Domain Settings

**From Your Project:**
1. Open project in Yomake
2. Go to **Settings > Domains**
3. Click **"Add Custom Domain"**

### Step 2: Enter Domain

**Add Your Domain:**
```
Enter domain: myapp.com
```

**Domain Types:**
- **Root domain:** `example.com`
- **Subdomain:** `app.example.com` or `www.example.com`
- **Both:** Add both root and www separately

### Step 3: Verify Ownership

**Verification Methods:**

**Method 1: DNS Record (Recommended)**
```
Add this TXT record to your DNS:
Name: _yomake-verify
Value: abc123def456
```

**Method 2: Meta Tag**
```html
Add to your site's <head>:
<meta name="yomake-verify" content="abc123def456">
```

Wait 5-10 minutes for verification to complete.

---

## DNS Configuration

### For Root Domains (example.com)

**Add A Record:**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600 (or automatic)
```

**What This Does:**
- Points your domain to Yomake servers
- Users can access via `example.com`

### For Subdomains (www.example.com)

**Add CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.yomake.app
TTL: 3600 (or automatic)
```

**Common Subdomains:**
- `www.example.com` - Standard WWW
- `app.example.com` - Application subdomain
- `blog.example.com` - Blog subdomain
- `docs.example.com` - Documentation subdomain

### For Both Root and WWW

**Add Both Records:**

**A Record (Root):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record (WWW):**
```
Type: CNAME
Name: www
Value: cname.yomake.app
```

**Enable WWW Redirect:**
- In Yomake domain settings
- Choose: Redirect www to root OR Redirect root to www
- Automatic 301 redirect configured

---

## Popular Registrar Guides

### GoDaddy

1. Log in to GoDaddy
2. Go to **My Products > Domains**
3. Click domain name
4. Click **"Manage DNS"**
5. Add A or CNAME record
6. Click **"Save"**

### Namecheap

1. Log in to Namecheap
2. Go to **Domain List**
3. Click **"Manage"** next to domain
4. Go to **"Advanced DNS"** tab
5. Add new record
6. Save changes

### Google Domains

1. Log in to Google Domains
2. Select your domain
3. Click **"DNS"** in left menu
4. Scroll to **"Custom resource records"**
5. Add record
6. Click **"Add"**

### Cloudflare

1. Log in to Cloudflare
2. Select domain
3. Go to **"DNS"** tab
4. Click **"Add record"**
5. Add A or CNAME record
6. Set proxy status (orange cloud = on, gray = DNS only)
7. Save

**Important for Cloudflare:**
- Use **DNS Only** (gray cloud) mode initially
- Can enable proxy after domain is working
- SSL/TLS mode: Set to **"Full"** or **"Full (strict)"**

---

## SSL Certificates

### Automatic HTTPS

**Free SSL Certificates:**
- Automatically issued by Let's Encrypt
- No configuration required
- Auto-renewal every 90 days
- Covers both root and www

**Certificate Issuance:**
1. Add domain
2. Configure DNS
3. Wait for verification (5-30 minutes)
4. SSL certificate auto-issued
5. HTTPS enabled

### Certificate Status

**Check SSL Status:**
- Go to **Settings > Domains**
- Look for status indicator:
  - 🟢 **Active** - HTTPS working
  - 🟡 **Pending** - Certificate issuing
  - 🔴 **Failed** - Issue detected

### Force HTTPS

**Automatic HTTPS Redirect:**
- Enabled by default
- All HTTP requests → HTTPS
- Cannot be disabled (security best practice)
- 301 permanent redirect

---

## DNS Propagation

### Understanding Propagation

**What Is DNS Propagation?**
- Time for DNS changes to spread globally
- Typically 1-4 hours
- Can take up to 48 hours maximum
- Depends on TTL settings

**Check Propagation Status:**
- Use tools like [whatsmydns.net](https://whatsmydns.net)
- Enter your domain
- See DNS status worldwide
- Green checkmarks = propagated

### While Waiting for Propagation

**What to Expect:**
- Domain may work for some users, not others
- May work on one device but not another
- May need to clear DNS cache
- Patience required!

**Speed Up Propagation:**
- Use lower TTL values (300-600 seconds)
- Set before making DNS changes
- Wait for old TTL to expire first
- Increase TTL after changes propagate

---

## Domain Redirect Rules

### WWW Handling

**Option 1: Root as Primary**
```
example.com (primary)
www.example.com → redirects to → example.com
```

**Option 2: WWW as Primary**
```
www.example.com (primary)
example.com → redirects to → www.example.com
```

**Configure in Yomake:**
1. Go to **Settings > Domains**
2. Select domain
3. Choose redirect preference
4. Save changes

### Subdomain Routing

**Different Projects on Subdomains:**
```
example.com → Main project
app.example.com → Application project
blog.example.com → Blog project
```

Each subdomain can point to different Yomake project.

---

## Multiple Domains

### Adding Multiple Domains

**Point Multiple Domains to One Project:**
```
Primary: myapp.com
Aliases:
  - myapp.io
  - my-app.com
  - myapplication.com
```

**Steps:**
1. Add first domain (primary)
2. Click **"Add Another Domain"**
3. Repeat for each domain
4. Configure DNS for each

### Domain Aliases

**All Domains Show Same Content:**
- Multiple domains
- Same project
- Same content
- Useful for:
  - Country-specific domains (.com, .co.uk, .de)
  - Brand variations
  - Marketing campaigns

### Primary Domain

**Set Primary Domain:**
1. Go to **Settings > Domains**
2. Select domain
3. Click **"Set as Primary"**
4. Other domains redirect to primary (optional)

---

## Domain Transfer to Yomake

### Transfer Existing Site

**Moving from Another Host:**

1. **Backup Current Site**
   - Download all files
   - Export databases
   - Save configurations

2. **Build in Yomake**
   - Recreate or import project
   - Test thoroughly
   - Verify all features work

3. **Update DNS**
   - Change A/CNAME records
   - Point to Yomake
   - Wait for propagation

4. **Verify Transfer**
   - Test site on new host
   - Check all functionality
   - Monitor for issues

**Zero Downtime Transfer:**
- Use low TTL before transfer (300 seconds)
- Prepare everything before DNS change
- Switch DNS quickly
- Monitor closely

---

## Troubleshooting

### Domain Not Working

**Problem:** Domain doesn't resolve to your site

**Solutions:**
1. **Verify DNS Records**
   - Check A/CNAME records are correct
   - Ensure no typos in values
   - Confirm records saved

2. **Check Propagation**
   - Use DNS checker tools
   - May need to wait longer
   - Clear local DNS cache

3. **Verify Domain in Yomake**
   - Ensure domain added in settings
   - Check verification status
   - Confirm deployment is live

4. **Test with Different DNS**
   - Try Google DNS (8.8.8.8)
   - Try Cloudflare DNS (1.1.1.1)
   - Use mobile data (different DNS)

### SSL Certificate Error

**Problem:** Browser shows "Not Secure" warning

**Solutions:**
1. **Wait for Certificate**
   - Takes 5-30 minutes after DNS configured
   - Check certificate status in settings

2. **Verify DNS Correct**
   - SSL won't issue if DNS wrong
   - Fix DNS and wait for retry

3. **Check Mixed Content**
   - Ensure all resources use HTTPS
   - No HTTP images/scripts on HTTPS page

4. **Clear Browser Cache**
   - Hard refresh (Cmd/Ctrl + Shift + R)
   - Try incognito mode
   - Different browser

### WWW Not Working

**Problem:** www version doesn't work

**Solutions:**
1. **Add CNAME Record**
   - May have only added A record
   - Need separate CNAME for www

2. **Check Both Records**
   - A record for root (@)
   - CNAME record for www

3. **Verify in Yomake**
   - Add www.example.com separately in domain settings
   - Or configure redirect

### Cloudflare Issues

**Problem:** Domain with Cloudflare proxy not working

**Solutions:**
1. **Disable Proxy (Gray Cloud)**
   - Click orange cloud to disable
   - Use DNS only mode
   - Re-enable after working

2. **SSL/TLS Mode**
   - Set to "Full" or "Full (strict)"
   - Not "Flexible"

3. **Page Rules**
   - Check for conflicting rules
   - Temporarily disable
   - Test without rules

---

## Best Practices

### Domain Management

✅ **DO:**
- Use DNS only mode initially
- Set low TTL before changes
- Test thoroughly before switching
- Keep registrar login secure
- Document DNS configuration

❌ **DON'T:**
- Change DNS without backup
- Use extremely high TTL
- Point multiple projects to same domain
- Share registrar credentials
- Skip verification steps

### Security

**Protect Your Domain:**
- Enable registrar lock
- Use two-factor authentication
- Keep contact info updated
- Renew domain on time
- Monitor DNS changes

### SEO Considerations

**Domain Changes Impact SEO:**
- Use 301 redirects (automatic)
- Update Google Search Console
- Submit new sitemap
- Monitor rankings
- Keep old domain redirecting for 6+ months

---

## Domain Costs

**Yomake Domain Services:**
- ✅ SSL certificates: Free
- ✅ DNS management: Free
- ✅ Unlimited domains: Free
- ✅ Automatic renewals: Free

**External Costs:**
- Domain registration: $10-15/year (at registrar)
- Domain renewal: Same as registration
- Premium domains: Varies

---

## Need Help?

**Domain Configuration Help:**
- [Deploy Overview](/docs/deployment/deploy-overview)
- [Vercel Deployment](/docs/deployment/vercel-deployment)
- [Deployment Status](/docs/deployment/deployment-status)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

---

**Your domain, your brand, your success!** Custom domains make your project professional and memorable.
