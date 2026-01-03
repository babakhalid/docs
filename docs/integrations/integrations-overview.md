# Integrations Overview

Extend Yomake's power by connecting your favorite tools and services. This guide introduces all available integrations and how they enhance your workflow.

---

## What Are Integrations?

Integrations connect Yomake to external platforms, enabling:

- **Version control** with GitHub
- **Professional hosting** with Vercel
- **Database and auth** with Supabase
- **AI capabilities** with your own API keys

Integrations are optional but unlock powerful workflows and features.

---

## Available Integrations

### Developer Tools

#### GitHub
**Version control and code repository**

Connect GitHub to:
- Back up your code automatically
- Track changes over time
- Collaborate with developers
- Enable Vercel auto-deployments
- Access full codebase
- Create pull requests

**Best for:** Anyone serious about their projects

[Learn more: GitHub Integration](/docs/integrations/github-integration)

---

#### Vercel
**Professional hosting and deployment**

Connect Vercel to:
- Deploy with custom domains
- Get deployment analytics
- Enable automatic deployments
- Use edge functions
- Access advanced hosting features
- Scale globally

**Best for:** Production applications, client projects

[Learn more: Vercel Integration](/docs/integrations/vercel-integration)

---

### Backend Services

#### Supabase
**Database, authentication, and storage**

Connect Supabase to:
- Add PostgreSQL database
- Implement user authentication
- Store files and images
- Enable real-time features
- Manage data easily
- Build full-stack apps

**Best for:** Apps needing backend, user accounts, or data storage

[Learn more: Supabase Integration](/docs/integrations/supabase-integration)

---

### AI Providers

#### Custom AI API Keys
**Use your own AI service accounts**

Add your API keys from:
- **OpenAI** - GPT models for chatbots and content
- **Anthropic** - Claude models for advanced reasoning
- **Google Gemini** - Multimodal AI capabilities
- **Groq** - Fast inference for real-time apps
- **Mistral** - Open-source AI models
- **Together AI** - Scalable AI infrastructure

**Best for:** Building AI features into your apps

[Learn more: AI Providers](/docs/integrations/ai-providers.md)

---

## Integration Benefits

### GitHub Benefits

**Code backup:**
- Never lose your work
- Version history
- Disaster recovery

**Collaboration:**
- Work with developers
- Code reviews
- Team workflows

**Deployment automation:**
- Push to deploy
- CI/CD pipelines
- Preview branches

---

### Vercel Benefits

**Professional hosting:**
- Custom domains
- Global CDN
- Edge network
- Automatic SSL

**Developer experience:**
- Preview deployments
- Instant rollbacks
- Analytics dashboard
- Team collaboration

**Performance:**
- Edge functions
- Image optimization
- Smart caching
- Fast builds

---

### Supabase Benefits

**Database:**
- PostgreSQL
- Real-time subscriptions
- Row-level security
- RESTful API

**Authentication:**
- Email/password
- Social logins
- Magic links
- JWT tokens

**Storage:**
- File uploads
- Image transformation
- CDN delivery
- Access control

---

### AI Provider Benefits

**Build AI features:**
- Chatbots
- Content generation
- Image analysis
- Text summarization
- Translations
- Sentiment analysis

**Use your accounts:**
- Your own API keys
- Your usage limits
- Your billing
- Direct control

**No markup:**
- No Yomake fees
- Direct pricing from provider
- Use your existing credits

---

## How Integrations Work

### Connection Process

**Standard flow:**

1. **Navigate** to [Integrations](/settings/integrations)
2. **Select** integration to connect
3. **Authorize** Yomake access
4. **Configure** specific settings
5. **Confirm** and save

Each integration has specific setup steps detailed in its documentation.

### Authorization

**OAuth-based (GitHub, Vercel, Supabase):**
- Redirects to provider's site
- You grant specific permissions
- Secure token exchange
- No password sharing

**API Key-based (AI Providers):**
- You provide your API key
- Stored encrypted
- Injected into your projects
- Revocable anytime

### Scope and Permissions

**What Yomake can access:**

**GitHub:**
- Read repository contents
- Write code to repositories
- Create commits
- Read user info
- *Cannot:* Delete repos, access private data

**Vercel:**
- Create deployments
- Read deployment status
- Configure domains
- Read team info
- *Cannot:* Delete projects, access billing

**Supabase:**
- Read/write database
- Manage tables
- Configure auth
- Access API keys
- *Cannot:* Delete projects, access billing

---

## Managing Integrations

### Viewing Connected Integrations

**Access integration settings:**
1. Click your profile picture
2. Go to Settings
3. Click "Integrations" tab

**See all integrations:**
- ✅ Connected (green checkmark)
- ➕ Available (connect button)
- ⚙️ Configuration status

---

### Disconnecting Integrations

**To disconnect:**

1. Find connected integration
2. Click "Disconnect" button
3. Confirm disconnection
4. Integration removed

**What happens:**
- Yomake loses access
- Features disabled
- Projects still work (may need reconfiguration)
- Can reconnect anytime

**Note:** Disconnecting doesn't delete your data on the external service.

---

### Reconnecting

**If connection breaks:**

1. Click "Reconnect" button
2. Re-authorize access
3. Confirm permissions
4. Integration restored

**Why reconnection needed:**
- Token expired
- Permissions changed
- Service updated
- Manual disconnection

---

## Integration Requirements

### Plan Requirements

| Integration | Free | Creator | Builder | Enterprise |
|------------|------|---------|---------|------------|
| GitHub | ❌ | ✅ | ✅ | ✅ |
| Vercel | ❌ | ✅ | ✅ | ✅ |
| Supabase | ❌ | ✅ | ✅ | ✅ |
| AI Providers | ❌ | ✅ | ✅ | ✅ |

**Free plan:** No integrations available
**Paid plans:** All integrations included

[Upgrade to access integrations](/docs/billing/plans-and-pricing)

---

### External Account Requirements

**GitHub:**
- Free GitHub account
- Repository permissions
- Email verified

**Vercel:**
- Free Vercel account
- Team or personal account
- Email verified

**Supabase:**
- Free Supabase account
- Organization created
- Project created (or Yomake can create)

**AI Providers:**
- Account with AI service
- Valid API key
- Active billing (most providers)

---

## Integration Workflows

### Workflow 1: GitHub + Vercel Auto-Deploy

**Setup:**
1. Connect GitHub integration
2. Connect Vercel integration
3. Link project to GitHub repo
4. Configure Vercel to watch repo
5. Deploy from Vercel

**Result:**
- Code changes sync to GitHub
- GitHub triggers Vercel build
- Automatic deployments on push
- Preview branches for PRs

**Perfect for:** Production apps, team collaboration

---

### Workflow 2: Supabase Full-Stack App

**Setup:**
1. Connect Supabase integration
2. Create Supabase project (or select existing)
3. Ask AI to set up database tables
4. Ask AI to add authentication
5. Build your app features

**Result:**
- Database-backed application
- User authentication
- Data persistence
- Real-time features

**Perfect for:** SaaS, user portals, data apps

---

### Workflow 3: AI-Powered Features

**Setup:**
1. Get API key from AI provider
2. Connect AI Provider integration
3. Add API key
4. Ask Yomake AI to build feature using provider
5. Test your AI feature

**Result:**
- Custom AI features in your app
- Using your own API keys
- Direct billing from provider

**Perfect for:** Chatbots, content generation, AI tools

---

## Integration Security

### How We Protect Your Data

**Encryption:**
- All tokens encrypted at rest
- Secure transmission (TLS/SSL)
- No plain-text storage

**Access control:**
- Minimal required permissions
- Scoped access only
- Regular security audits

**Token management:**
- Secure token storage
- Automatic refresh
- Revocation support

### Best Practices

**Protect your accounts:**
- Use strong passwords
- Enable 2FA on connected services
- Review integration permissions regularly
- Disconnect unused integrations
- Monitor activity logs

**API key safety:**
- Never share API keys
- Rotate keys periodically
- Use read-only keys when possible
- Set usage limits
- Monitor spending

---

## Troubleshooting

### Integration Won't Connect

**Check requirements:**
- Correct account credentials
- Required permissions granted
- Email verified
- Plan supports integration

**Try:**
1. Disconnect and reconnect
2. Clear browser cache
3. Try different browser
4. Check service status pages
5. Contact support

---

### Features Not Working

**After connecting:**

**GitHub sync failing:**
- Check repository permissions
- Verify Yomake has write access
- Ensure repo exists
- Try re-authorizing

**Vercel deployment fails:**
- Check Vercel account status
- Verify project settings
- Review build logs
- Ensure Vercel plan supports feature

**Supabase connection issues:**
- Verify project exists
- Check API keys are current
- Ensure RLS policies allow access
- Review Supabase logs

---

### Disconnected Unexpectedly

**Possible causes:**
- Token expired (need to reconnect)
- Permissions revoked on external service
- Service maintenance
- Account changed

**Solution:**
- Click "Reconnect"
- Re-authorize access
- Check integration status

---

## Coming Soon

**Upcoming integrations:**

- **Stripe** - Payment processing
- **Firebase** - Google backend services
- **Cloudflare** - Enhanced CDN and security
- **Notion** - Content management
- **Airtable** - Database alternative

Want to suggest an integration? [Contact us](/docs/support/contact-support)

---

## Next Steps

Explore individual integrations:

- [GitHub Integration](/docs/integrations/github-integration) - Version control setup
- [Vercel Integration](/docs/integrations/vercel-integration) - Professional hosting
- [Supabase Integration](/docs/integrations/supabase-integration) - Backend services
- [AI Providers](/docs/integrations/ai-providers) - Custom AI features

Or learn about:
- [Plans and Pricing](/docs/billing/plans-and-pricing) - Unlock integrations
- [Deployment](/docs/deployment/deploy-overview) - Go live

---

**Connect your tools!** Integrate Yomake with your favorite services and supercharge your workflow.
