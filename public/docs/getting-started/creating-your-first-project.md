# Creating Your First Project

This guide walks you through everything you need to know about creating projects in Yomake, from choosing templates to configuring integrations.

---

## Two Ways to Create a Project

Yomake offers two flexible approaches to start building:

### 1. Quick Create (Fast & Simple)

Perfect when you know exactly what you want to build.

**How it works:**

1. On your dashboard, locate the large prompt box
2. Type your project idea in natural language
3. Press Enter or click "Create"

**Example prompts:**

```
Build a portfolio website for a photographer with a gallery and contact page
```

```
Create a SaaS landing page with pricing tiers and feature comparison
```

```
Make a task management dashboard with kanban board
```

The AI will:
- Automatically name your project (you can rename later)
- Set up the project structure
- Start building based on your description
- Open the project workspace

---

### 2. New Project Wizard (Guided Setup)

Gives you more control over initial configuration.

**How it works:**

1. Click the **"New Project"** button on your dashboard
2. Follow the step-by-step wizard

Let's walk through each step:

---

## Project Wizard Steps

### Step 1: Choose a Template

Select a starting point for your project:

#### Blank
- Empty canvas
- Start from absolute scratch
- Best for experienced users with specific visions
- Comes with: React, TypeScript, Tailwind CSS, shadcn/ui

#### Starter Templates
- **Simple Landing Page** - Single page with hero and CTA
- **Multi-page Website** - Home, About, Contact structure
- **Dashboard Layout** - Sidebar navigation with content area

#### Business Templates
- **SaaS Landing** - Pricing, features, testimonials
- **Product Launch** - Countdown, waitlist, teaser
- **Agency Website** - Services, portfolio, team

#### Portfolio Templates
- **Designer Portfolio** - Project showcase, case studies
- **Developer Portfolio** - Projects, skills, blog
- **Creative Portfolio** - Visual-first gallery

#### E-commerce Templates
- **Product Page** - Single product with add-to-cart
- **Product Catalog** - Browse multiple products
- **Checkout Flow** - Cart, checkout, confirmation

**All templates include:**
- Responsive design (mobile, tablet, desktop)
- shadcn/ui components pre-configured
- Tailwind CSS for styling
- TypeScript for type safety
- Modern React patterns

---

### Step 2: Name Your Project

Give your project a memorable name:

- **Display name** - What you see in your dashboard
- **Project alias** - Auto-generated URL-friendly version (e.g., "My Cool App" becomes "my-cool-app")

**Tips for naming:**
- Keep it descriptive ("Marketing Site" vs "Project 1")
- Use your brand or product name
- Make it easy to identify later

You can rename your project anytime in settings.

---

### Step 3: Add Description (Optional)

Write a brief description to help you remember:
- What this project is for
- Who it's for
- Special notes

This is only visible to you and your collaborators.

**Example descriptions:**
- "Client website for Acme Corp - launching June 2024"
- "Personal portfolio showcasing design work"
- "Internal tool for team task management"

---

### Step 4: Set Visibility

Choose who can see your project:

#### Private (Recommended)
- Only you and invited collaborators can access
- Preview URL requires authentication
- Deployed site can still be public

#### Public
- Anyone with the link can view
- Preview URL is accessible without login
- Useful for open-source or community projects

You can change visibility later in project settings.

---

### Step 5: Connect GitHub (Optional)

Sync your code to a GitHub repository:

**Benefits:**
- Full code access and version control
- Backup your work
- Enable Vercel auto-deployments
- Collaborate with developers
- Track changes over time

**Requirements:**
- GitHub account
- Yomake GitHub integration enabled

**Setup:**
1. Toggle "Connect GitHub Repository"
2. Choose existing repo or create new
3. Grant Yomake access

You can also connect GitHub later from [Integrations](/docs/integrations/github-integration).

---

### Step 6: Enable Supabase (Optional)

Add a database to your project:

**When to enable:**
- Your app needs data storage
- You want user authentication
- You're building a full web application

**What you get:**
- PostgreSQL database
- Authentication system
- File storage
- Real-time subscriptions

**Requirements:**
- Supabase account
- Yomake Supabase integration

**Setup:**
1. Toggle "Enable Supabase"
2. Select Supabase organization
3. Choose existing project or create new
4. Grant Yomake access

The AI can then create tables, add auth, and work with your database.

Learn more: [Supabase Integration](/docs/integrations/supabase-integration)

---

## What Happens After Creation?

Once you click "Create Project," Yomake:

1. **Initializes the sandbox** - Creates isolated development environment
2. **Installs dependencies** - Sets up React, TypeScript, and libraries
3. **Starts dev server** - Launches live preview at `http://localhost:5173`
4. **Loads AI agent** - Prepares to receive your instructions
5. **Opens workspace** - Displays chat panel and live preview

This takes 10-30 seconds depending on template complexity.

---

## Your First Actions

When your project opens:

### Explore the Interface
- **Chat panel (left)** - Talk to the AI agent
- **Preview panel (right)** - See your app live
- **Header** - Project name, token balance, actions
- **Device toggle** - Test mobile/tablet views

### Start Building
Describe what you want in the chat:

```
Add a navigation bar with logo and menu items
```

```
Create a hero section with headline and call-to-action button
```

```
Build a contact form with name, email, and message fields
```

The AI will make changes and update the preview automatically.

---

## Project Limits

Your plan determines how many projects you can create:

| Plan | Project Limit |
|------|---------------|
| Free | 2 active projects |
| Creator | Unlimited |
| Builder | Unlimited |
| Enterprise | Unlimited |

**Free plan users:**
- Delete old projects to make room for new ones
- Or [upgrade your plan](/docs/billing/plans-and-pricing) for unlimited projects

---

## Advanced Configuration

### Environment Variables
Set custom environment variables in project settings for:
- API keys
- Configuration values
- Feature flags

### Custom Domains
Add your own domain after deployment:
- Configure DNS records
- Automatic SSL certificate
- Professional branding

Learn more: [Custom Domains](/docs/deployment/custom-domains)

---

## Best Practices

**Start simple**
- Begin with a template close to your vision
- Build features incrementally
- Test as you go

**Use meaningful names**
- Clear project names help organization
- Good descriptions save time later

**Connect integrations early**
- GitHub backup prevents work loss
- Supabase easier to add from the start

**Organize your projects**
- Create separate projects for different purposes
- Use visibility settings appropriately
- Archive or delete old experiments

---

## Common Questions

**Q: Can I import existing code?**
Currently, start with templates and build using the AI. GitHub import is coming soon.

**Q: How do I switch templates after creation?**
Templates are starting points. Ask the AI to rebuild components in a different style.

**Q: Can I duplicate a project?**
Not yet, but you can describe an existing project to the AI and it will recreate similar features.

**Q: What if I make a mistake during setup?**
Most settings can be changed later in [Project Settings](/docs/projects/project-settings).

---

## Next Steps

Now that you've created your project:

- [Chat with the AI Agent](/docs/ai-agent/chatting-with-the-agent) - Learn effective communication
- [Prompt Tips](/docs/ai-agent/prompt-tips) - Write better prompts
- [Using the Preview](/docs/live-preview/using-the-preview) - Master the preview panel
- [Understanding the Interface](/docs/getting-started/understanding-the-interface) - Explore all features

---

**Ready to build?** Create your project and start describing your vision to the AI!
