# Creating Projects

Learn how to create new Yomake projects from templates, customize settings, and get building in minutes.

---

## Overview

Creating a project in Yomake is fast and straightforward. Choose from 13 professionally designed templates, describe what you want to build, and let the AI set up your project with all the right configurations.

**Average setup time:** 30 seconds
**What you get:** Fully configured project ready to customize

---

## Quick Start: Create Your First Project

### Step 1: Access Project Creation

From anywhere in Yomake:

**Option 1: Dashboard**
1. Go to your [Project Dashboard](/docs/projects/project-dashboard)
2. Click the **"+ New Project"** button (top right)

**Option 2: Navigation Menu**
1. Click your profile icon (top right)
2. Select **"New Project"** from dropdown

**Option 3: Keyboard Shortcut**
- Press `Cmd/Ctrl + N` anywhere in Yomake

### Step 2: Choose a Template

You'll see 13 templates organized by category:

**Quick Start Templates:**
- **Blank Canvas** - Start from scratch
- **Landing Page** - Convert visitors into customers
- **Personal Website** - Showcase your work

**Application Templates:**
- **Dashboard** - Data visualization and admin panels
- **SaaS App** - Multi-page application
- **E-commerce** - Online store

[See all 13 templates](/docs/projects/project-templates)

**Click on a template** to select it and see a live preview.

### Step 3: Name Your Project

**Project Name:**
- Enter a descriptive name (e.g., "My Portfolio", "Product Landing Page")
- Used for navigation and organization
- Can be changed later in settings

**Tips:**
- ✅ Use descriptive names: "Fitness App MVP" not "Project 1"
- ✅ Include purpose: "Newsletter Landing Page"
- ✅ Keep it concise: 2-5 words ideal

### Step 4: Describe What You Want (Optional)

**Initial Prompt:**
Tell the AI what you're building to get a customized starting point.

**Examples:**

For a Landing Page:
```
"Create a landing page for a productivity app called TaskFlow.
Include a hero section, features, pricing, and a contact form."
```

For a Portfolio:
```
"Build a portfolio for a freelance photographer.
Include a gallery, about page, and contact form."
```

For a Dashboard:
```
"Create an analytics dashboard with charts showing user growth,
revenue, and engagement metrics."
```

**Skip this step** to use the template as-is (you can customize with AI later).

### Step 5: Click "Create Project"

**What happens next:**
1. ⚡ Project scaffolding (5 seconds)
2. 📦 Dependencies installation (10 seconds)
3. 🎨 AI applies customizations (if provided)
4. ✅ Project ready!

You'll be redirected to your new project's editor automatically.

---

## Template Selection Guide

### Choosing the Right Template

**Start with Purpose:**

| Your Goal | Best Template |
|-----------|---------------|
| Promote a product/service | Landing Page |
| Share your work | Portfolio |
| Build a web app | SaaS App or Dashboard |
| Sell products online | E-commerce Store |
| Create something unique | Blank Canvas |
| Gather information | Form/Survey |

### Template Features Comparison

**What's Included:**

| Feature | Blank | Landing | Portfolio | Dashboard | E-commerce |
|---------|-------|---------|-----------|-----------|-----------|
| Routing | ✅ | ✅ | ✅ | ✅ | ✅ |
| Styling (Tailwind) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Components | Basic | ✅ | ✅ | ✅ | ✅ |
| Responsive Design | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dark Mode | ✅ | ✅ | ✅ | ✅ | ✅ |
| Forms | ❌ | ✅ | ✅ | ✅ | ✅ |
| Authentication | ❌ | ❌ | ❌ | ✅ | ✅ |
| Database Setup | ❌ | ❌ | ❌ | ✅ | ✅ |
| Payment Integration | ❌ | ❌ | ❌ | ❌ | ✅ |

### Can You Switch Templates Later?

**No, but you can:**
- ✅ Add any features from other templates using AI
- ✅ Copy components between projects
- ✅ Create a new project and migrate code
- ✅ Ask AI to restructure your project

**Recommendation:** Start with the closest match and customize with AI.

---

## Advanced Project Creation

### Project Creation Options

When creating a project, you can configure:

**Basic Settings:**
- Project name
- Template selection
- Initial description

**Advanced Options** (Click "Show Advanced"):

**Framework Version:**
- React 18 (default, recommended)
- React 17 (legacy support)
- Latest (experimental features)

**TypeScript:**
- ✅ Enabled (default, recommended)
- ❌ JavaScript only

**Styling:**
- Tailwind CSS (default)
- CSS Modules
- Styled Components
- Emotion

**Package Manager:**
- npm (default)
- yarn
- pnpm

**Git Integration:**
- Initialize Git repository
- Connect to GitHub (requires integration)
- Create first commit automatically

### Project Initialization Modes

**Standard Mode** (Default)
- Full template with all features
- Sample content included
- Ready to customize

**Minimal Mode**
- Bare-bones setup
- No sample content
- Faster initialization
- More control

**Custom Mode**
- Choose specific features
- Mix and match components
- Advanced users only

---

## Creating from Existing Code

### Import from GitHub

**Requirements:**
- Connected GitHub account
- Repository access
- Compatible framework

**Steps:**
1. Click **"Import from GitHub"** on project creation screen
2. Authorize Yomake (if not already connected)
3. Select repository and branch
4. Click **"Import Project"**
5. Yomake analyzes and configures automatically

**Supported Frameworks:**
- React (Create React App, Vite, Next.js)
- Vue (Vue CLI, Vite, Nuxt)
- Vanilla HTML/CSS/JS
- Static sites

### Clone Existing Project

**Create a copy of your own project:**

1. Go to source project's dashboard
2. Click **⋮ (More Options)**
3. Select **"Clone Project"**
4. Name the clone
5. Click **"Create Clone"**

**What's Cloned:**
- ✅ All files and code
- ✅ Project structure
- ✅ Dependencies
- ❌ Environment variables (must be manually added)
- ❌ Deployment history
- ❌ Connected integrations

### Upload Existing Files

**Import local files:**

1. Create a **Blank Canvas** project
2. Open the file tree
3. Click **"Upload Files"** button
4. Select files/folders from your computer
5. Yomake automatically configures dependencies

**Supported:**
- Zip archives
- Individual files
- Folder structures
- Up to 100MB per project

---

## Project Organization Tips

### Naming Conventions

**Use Descriptive Names:**

❌ Bad:
- "Project 1"
- "Test"
- "New Site"

✅ Good:
- "TaskFlow Landing Page"
- "Personal Portfolio 2024"
- "E-commerce MVP - Clothing Store"

### Organizing Multiple Projects

**Use Prefixes:**
- `Client: [Client Name] - [Project]`
- `Personal: [Project Name]`
- `Exp: [Experiment Name]` (for testing)

**Examples:**
- `Client: Acme Corp - Product Site`
- `Personal: Photography Portfolio`
- `Exp: New Dashboard Layout`

### Project Folders (Coming Soon)

Organize projects into folders:
- Clients
- Personal Projects
- Experiments
- Archive

---

## Common Project Creation Scenarios

### Scenario 1: Quick Landing Page

**Goal:** Create a landing page in 5 minutes

1. Click **"+ New Project"**
2. Select **"Landing Page"** template
3. Name it "Product Launch Page"
4. Describe: "Landing page for SaaS project management tool with hero, features, and CTA"
5. Click **"Create Project"**
6. AI customizes template with your description
7. ✅ Ready to deploy!

### Scenario 2: Portfolio from Scratch

**Goal:** Build a custom portfolio

1. Select **"Portfolio"** template
2. Name it "Design Portfolio 2024"
3. Describe: "Portfolio for UI/UX designer with project gallery, case studies, and contact form"
4. Create project
5. Use AI chat to add:
   - Custom animations
   - Project filtering
   - Testimonials section
6. Deploy when ready

### Scenario 3: Import and Enhance

**Goal:** Bring existing site to Yomake

1. Click **"Import from GitHub"**
2. Select your repository
3. Yomake imports and configures
4. Use AI to enhance:
   - Add new features
   - Improve design
   - Optimize performance
5. Deploy updates

### Scenario 4: Clone and Customize

**Goal:** Create variations of existing project

1. Clone your template project
2. Rename to "Client A - Landing Page"
3. Use AI to customize:
   - Brand colors
   - Content
   - Images
4. Repeat for each client

---

## After Project Creation

### First Steps

**1. Explore Your Project**
- Browse file structure
- Review generated code
- Check included components

**2. Customize with AI**
- Chat with AI to make changes
- Add features
- Modify design

**3. Configure Settings**
- Add environment variables
- Connect integrations
- Set up custom domain

**4. Test and Preview**
- Test on different devices
- Check all links and forms
- Verify responsive design

**5. Deploy**
- One-click deploy to Yomake hosting
- Or deploy to Vercel/Netlify
- Share with the world!

### Next Actions

**Continue Building:**
- [Chat with AI Agent](/docs/ai-agent/chatting-with-the-agent)
- [Using the Preview](/docs/live-preview/using-the-preview)
- [Project Settings](/docs/projects/project-settings)

**Deploy Your Project:**
- [Deploy Overview](/docs/deployment/deploy-overview)
- [Yomake Hosting](/docs/deployment/yomake-hosting)
- [Custom Domains](/docs/deployment/custom-domains)

---

## Troubleshooting Project Creation

### Project Creation Fails

**Problem:** "Failed to create project" error

**Solutions:**
- Check internet connection
- Verify account has available project slots
- Try different browser
- [Contact Support](/docs/support/contact-support)

### Template Not Loading

**Problem:** Template preview doesn't show

**Solutions:**
- Refresh page
- Clear browser cache
- Try different template
- Check browser console for errors

### Import Fails

**Problem:** GitHub import doesn't work

**Solutions:**
- Verify repository is accessible
- Check GitHub connection in settings
- Ensure repository uses supported framework
- Try importing as zip file instead

### Project Stuck "Initializing"

**Problem:** Project creation hangs

**Solutions:**
- Wait 2-3 minutes (large projects take time)
- Refresh page and check dashboard
- Clear browser cache and retry
- [Contact Support](/docs/support/contact-support) if persists

---

## Project Creation Limits

### Free Plan
- **5 projects** maximum
- All templates available
- Full feature access
- Can delete projects to free space

### Creator Plan
- **20 projects** maximum
- Priority project creation
- Advanced templates
- Team collaboration (up to 3 members)

### Builder Plan
- **Unlimited projects**
- Instant project creation
- Custom templates
- Full team features

[View all plans](/docs/billing/plans-and-pricing)

---

## Best Practices

### Before Creating

✅ **DO:**
- Plan what you're building
- Check if similar project exists to clone
- Gather content and assets
- Review template options

❌ **DON'T:**
- Create duplicate projects
- Use generic names
- Skip initial description (AI customization)

### During Creation

✅ **DO:**
- Choose template that matches closest
- Write clear project description
- Use descriptive project names
- Enable TypeScript (recommended)

❌ **DON'T:**
- Rush template selection
- Leave project name as "Untitled"
- Skip advanced options without reading

### After Creation

✅ **DO:**
- Test immediately
- Configure settings
- Add environment variables
- Create first deployment

❌ **DON'T:**
- Leave projects abandoned
- Forget to add .gitignore
- Skip documentation

---

## Need Help?

**Project Creation Issues:**
- Check [FAQ](/docs/support/faq) for common solutions
- Review [Project Templates Guide](/docs/projects/project-templates)
- [Contact Support](/docs/support/contact-support) for assistance

**Related Documentation:**
- [Project Dashboard](/docs/projects/project-dashboard) - Managing projects
- [Understanding the Interface](/docs/getting-started/understanding-the-interface) - Navigation basics
- [Quick Start Guide](/docs/getting-started/quick-start) - 5-minute walkthrough

---

**Ready to create your first project?** Click that "+ New Project" button and start building something amazing!
