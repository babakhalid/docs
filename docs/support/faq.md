# Frequently Asked Questions

Find quick answers to common questions about Yomake. If you can't find what you're looking for, [contact support](/docs/support/contact-support).

---

## Getting Started

### What is Yomake?

Yomake is an AI-powered web application builder that lets you create websites and web apps using natural language. Describe what you want in plain English, and our AI agent writes the code for you.

---

### Do I need coding knowledge?

No! That's the whole point. You describe what you want to build in plain English, and Yomake's AI handles all the technical work.

However, if you do know how to code, you can:
- Access the full codebase via GitHub
- Understand what the AI is building
- Make manual modifications if needed

---

### What can I build with Yomake?

You can build:
- Landing pages and marketing sites
- Business websites
- Portfolios
- Web applications and dashboards
- E-commerce sites
- Blogs and content sites
- SaaS products (with Supabase)

[See more examples](/docs/ai-agent/what-can-i-build)

---

### How long does it take to build something?

It depends on complexity:
- **Simple landing page**: 1-2 hours
- **Multi-page website**: 3-6 hours
- **Dashboard or web app**: 5-10 hours
- **Full SaaS application**: 15-30+ hours

Much faster than traditional development!

---

### Is there a free plan?

Yes! The free plan includes:
- 2 active projects
- 5,000 tokens per month
- All core features
- Unlimited deployments

Perfect for trying Yomake and building small projects.

[View all plans](/docs/billing/plans-and-pricing)

---

## Projects

### How many projects can I create?

- **Free plan**: 2 projects
- **Creator plan**: Unlimited
- **Builder plan**: Unlimited
- **Enterprise**: Unlimited

On the free plan, delete old projects to create new ones.

---

### Can I export my code?

Yes! Connect GitHub integration to access your full codebase. You can:
- Clone the repository
- View all files
- Make local modifications
- Deploy anywhere you want

[Learn about GitHub integration](/docs/integrations/github-integration)

---

### What happens if I delete a project?

When you delete a project:
- ✅ **Remains**: GitHub repository (if synced), Vercel deployment (if deployed)
- ❌ **Deleted**: Yomake project, chat history, preview data

**Cannot be undone**, so export important code first!

---

### Can I duplicate a project?

Not yet, but it's coming soon!

**Workaround**: Connect GitHub, clone the repository, and create a new Yomake project from that code.

---

## AI Agent

### How does the AI work?

The AI uses advanced language models to:
1. Understand your natural language requests
2. Plan the implementation
3. Write React, TypeScript, and Tailwind CSS code
4. Update your project
5. Show you the result in real-time

It's like having a professional developer who works instantly.

---

### What if the AI makes a mistake?

Just tell it what's wrong:

```
The button is too small and should be centered
```

The AI will fix it. The AI learns from the conversation context and gets better as you work together.

---

### How do I get better results from the AI?

Follow these tips:
- Be specific about what you want
- Describe the result, not the code
- Build incrementally (one feature at a time)
- Provide examples or references
- Give feedback on what's wrong

[Read the full prompt tips guide](/docs/ai-agent/prompt-tips)

---

### Can the AI build anything?

The AI is excellent at:
- UI components and layouts
- Forms and validation
- Styling and responsive design
- Data display and tables
- Basic interactivity
- Integrations (GitHub, Supabase, etc.)

The AI struggles with:
- Very complex custom algorithms
- Advanced 3D graphics
- Real-time video processing
- Custom server logic (use Supabase instead)

---

## Tokens

### What are tokens?

Tokens are credits that power the AI. Every time you chat with the AI, tokens are consumed based on:
- Your request length
- Code being generated
- Conversation context

Think of tokens as AI usage credits.

[Learn more about tokens](/docs/billing/token-system)

---

### How many tokens do I need?

Average usage:
- Simple change: 50-200 tokens
- New component: 200-1,000 tokens
- Large feature: 1,000-5,000 tokens

Most users use 10,000-30,000 tokens per month. A typical landing page uses 2,000-5,000 tokens total.

---

### What happens when I run out?

When tokens reach zero:
- You can't send new messages to the AI
- You can still view projects
- You can still deploy
- Preview continues working

**Solution**: [Purchase token packs](/docs/billing/purchasing-tokens) or [upgrade your plan](/docs/billing/plans-and-pricing)

---

### Do tokens expire?

- **Plan tokens**: Reset monthly (use it or lose it)
- **Purchased tokens**: Never expire
- **Bonus tokens** (referrals): Never expire

---

### Do deployments use tokens?

No! Deploying your project doesn't consume tokens. Only AI chat interactions use tokens.

---

## Deployment

### How do I deploy my project?

1. Click the "Deploy" button
2. Choose deployment target:
   - **Yomake hosting**: Instant, free, `*.yomake.ai` domain
   - **Vercel**: Professional, custom domains, analytics
3. Wait 30-60 seconds
4. Get your live URL!

[Full deployment guide](/docs/deployment/deploy-overview)

---

### Can I use my own domain?

Yes! Deploy to Vercel, then add your custom domain:
1. Deploy to Vercel from Yomake
2. Add domain in Vercel dashboard
3. Configure DNS records
4. Wait for DNS propagation

[Custom domain guide](/docs/deployment/custom-domains)

---

### Is hosting free?

**Yomake hosting**: Completely free, unlimited deployments

**Vercel**: Free tier includes 100 GB bandwidth per month, which is plenty for most sites. Paid plans available for more.

---

### How do I update my deployed site?

Make changes in Yomake, then redeploy:

**Manual**: Click "Deploy" again
**Automatic** (with GitHub + Vercel): Push to GitHub, Vercel deploys automatically

---

## Integrations

### Which integrations are available?

- **GitHub**: Version control and code backup
- **Vercel**: Professional hosting with custom domains
- **Supabase**: Database, authentication, and storage
- **AI Providers**: Use your own OpenAI, Anthropic, etc. API keys

[View all integrations](/docs/integrations/integrations-overview)

---

### Do I need paid plans for integrations?

**Yomake**: Creator plan or higher required for integrations

**External services**:
- GitHub: Free account works
- Vercel: Free tier available
- Supabase: Free tier available
- AI Providers: Most require paid accounts

---

### Can I disconnect integrations?

Yes, anytime! Go to Settings → Integrations and click "Disconnect".

Your data remains on the external service (GitHub repos, Vercel deployments, Supabase databases stay intact).

---

## Billing

### How do I upgrade my plan?

1. Go to Settings → Billing
2. Click "Upgrade Plan"
3. Choose Creator, Builder, or Enterprise
4. Select monthly or annual billing
5. Enter payment details
6. Confirm

Upgrade takes effect immediately!

---

### Can I cancel anytime?

Yes! No long-term commitment. Cancel via Settings → Billing → Cancel Subscription.

You keep access until the end of your billing period, then automatically downgrade to the free plan.

---

### Do you offer refunds?

We offer a 14-day money-back guarantee for first-time subscribers. Contact support within 14 days for a full refund.

---

### What payment methods do you accept?

We accept all major credit/debit cards via Stripe:
- Visa
- Mastercard
- American Express
- Discover

Enterprise plans can pay via invoice.

---

## Technical

### What technologies does Yomake use?

Every project is built with:
- **React 18+**: Modern component-based UI
- **TypeScript**: Type-safe code
- **Vite**: Fast development server
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Accessible components

[View the full tech stack](/docs/getting-started/introduction#technology-stack)

---

### Can I use other frameworks?

Not currently. Yomake specializes in React + TypeScript projects. Support for Vue, Angular, or Svelte is not planned.

---

### Can I add custom npm packages?

Yes! Just ask the AI:

```
Install the date-fns library and use it to format dates
```

The AI will install the package and use it in your code.

---

### Do you support TypeScript?

All projects use TypeScript by default! This provides:
- Type safety
- Better autocomplete
- Catch errors early
- Better code quality

---

### Can I build mobile apps?

Not native iOS/Android apps. Yomake builds web applications that run in browsers.

However, you can:
- Make your web app responsive for mobile browsers
- Build a Progressive Web App (PWA) that feels native
- Embed your web app in a native wrapper (manual)

---

### Can I access the database directly?

Yes! If you use Supabase integration:
- Access Supabase Dashboard
- Run SQL queries
- View/edit data
- Create tables manually
- Set up triggers and functions

---

## Collaboration

### Can I invite team members?

Yes! Open your project, click "Collaborators", enter email addresses, and select roles.

**Roles available**:
- **Owner**: Full control
- **Editor**: Can edit and deploy
- **Viewer**: Read-only access

[Learn about collaboration](/docs/collaboration/inviting-collaborators)

---

### How many collaborators can I add?

- **Free plan**: 0 collaborators (owner only)
- **Creator plan**: 5 per project
- **Builder plan**: Unlimited
- **Enterprise**: Unlimited

---

### Do collaborators use my tokens?

Yes. When a collaborator chats with the AI in your project, it uses your token balance.

---

## Support

### How do I get help?

- **Documentation**: Search this docs site
- **FAQ**: You're reading it! :)
- **Email support**: support@yomake.ai
- **Community**: Join our Discord/forum

**Response times**:
- Free: Community support
- Creator: 24 hours
- Builder: 12 hours (priority)
- Enterprise: Dedicated manager

---

### How do I report a bug?

Email support@yomake.ai with:
- Project name/ID
- Description of the bug
- Steps to reproduce
- Screenshots
- Expected vs actual behavior

We'll investigate and respond based on your plan's support level.

---

### Do you have video tutorials?

Yes! Check out:
- [YouTube channel](https://youtube.com/@yomake)
- In-app tutorial videos
- Community-created guides

---

### Can I request features?

Absolutely! We love feedback. Email support@yomake.ai or use the feedback widget in the app.

---

## Security & Privacy

### Is my data secure?

Yes! We use industry-standard security:
- All data encrypted in transit (TLS/SSL)
- All data encrypted at rest
- SOC 2 compliant infrastructure
- Regular security audits
- GDPR compliant

---

### Do you train AI models on my code?

**No, never!** Your projects are private. We do not:
- Train models on your code
- Share your code with anyone
- Use your data for anything except providing the service

---

### Who owns the code?

**You do!** All code generated by Yomake belongs to you. You can:
- Export it anytime
- Use it commercially
- Modify it freely
- Host it anywhere

---

### Can I make my projects private?

Yes! All projects are private by default. Only you (and invited collaborators) can access them.

Public preview links are optional and can be disabled.

---

## Troubleshooting

### Preview not loading

Try:
1. Refresh the preview (click refresh icon)
2. Hard refresh: `Cmd/Ctrl + Shift + R`
3. Clear browser cache
4. Try different browser
5. Check internet connection

---

### AI not responding

Possible causes:
- Out of tokens (check balance)
- Server maintenance (rare)
- Internet connection issue

**Solutions**:
- Check token balance and purchase if needed
- Check status page: status.yomake.ai
- Try again in a few minutes

---

### Deployment failed

Check the build logs for errors. Common issues:
- TypeScript errors
- Missing dependencies
- Build timeout
- Environment variables not set

Ask the AI to fix: `I'm seeing this deployment error: [paste error]`

---

### Can't connect integration

Try:
1. Disconnect and reconnect
2. Clear browser cache
3. Check you're logged into the external service
4. Verify permissions granted
5. Contact support if persists

---

## Account

### How do I change my email?

Currently, email cannot be changed. This is for security reasons. Contact support if you need assistance.

---

### How do I delete my account?

Email support@yomake.ai to request account deletion. We'll:
- Confirm your identity
- Delete all data per GDPR
- Send confirmation

**Note**: This is permanent and cannot be undone!

---

### How do I change my password?

1. Go to Settings → Account
2. Click "Change Password"
3. Enter current password
4. Enter new password
5. Confirm

Or use "Forgot Password" on login page.

---

## Still Have Questions?

Can't find your answer? We're here to help!

- 📧 **Email**: support@yomake.ai
- 💬 **Community**: Join our Discord
- 📚 **Docs**: Search this documentation
- 🎥 **Videos**: Check our YouTube channel

[Contact Support](/docs/support/contact-support)
