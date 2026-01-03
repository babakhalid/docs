# Project Dashboard

Your project dashboard is mission control for all your Yomake projects. Learn how to navigate, organize, and manage your projects effectively.

---

## Overview

The project dashboard is the first screen you see after signing in. It displays all your projects in an organized, visual layout with quick access to common actions.

**Access the dashboard:**
- Sign in at [yomake.ai](https://yomake.ai)
- Click "Dashboard" in navigation
- Click the Yomake logo from anywhere

---

## Dashboard Layout

### Header

**Left side:**
- Yomake logo (click to refresh dashboard)
- Navigation menu (on mobile)

**Right side:**
- Token balance: 🪙 12,450 tokens
- New Project button
- User menu (profile picture)

### Main Area

**Prompt box:**
- Large input at top of dashboard
- Quick-create projects by typing ideas
- Press Enter to create instantly

**Project cards:**
- Grid or list view
- Showing all your projects
- Sorted by last accessed (recent first)

**Empty state:**
- "Create your first project" message
- Templates showcase
- Quick start guide link

---

## Project Cards

Each project displays as a card with key information:

### Project Information

**Project name:**
- Display name you chose
- Click to open project

**Project alias:**
- URL-friendly version
- Used in deployment URLs
- Example: "my-cool-app"

**Status badge:**
- Visual indicator of project state
- Color-coded for quick scanning

**Thumbnail:**
- Preview screenshot of your app
- Auto-generated from latest preview
- Updates when you make changes

**Last accessed:**
- "2 hours ago"
- "Yesterday"
- "Last week"
- Helps you find recent work

**Project stats:**
- Token usage
- Number of messages
- Deployment status

---

## Status Badges

Projects display different statuses:

### 🟡 Draft
- Never deployed
- Still in development
- Local preview only

### 🔵 Deploying
- Deployment in progress
- Build running
- Wait for completion

### 🟢 Deployed
- Live and accessible
- Available at public URL
- Ready to share

### 🟠 Updated
- Changes made since last deployment
- Local version differs from live
- Redeploy to sync

### 🔴 Failed
- Deployment error occurred
- Check logs for details
- Fix issues and retry

---

## View Options

### Grid View (Default)

Cards arranged in responsive grid:
- **Desktop**: 3-4 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column

**Best for:**
- Visual browsing
- Many projects
- Seeing thumbnails

**Toggle:**
- Click grid icon in toolbar
- Keyboard shortcut: `Cmd/Ctrl + G`

### List View

Projects in vertical list:
- More compact
- More information visible
- Easier scanning

**Best for:**
- Fewer projects
- Finding by name
- Quick access to actions

**Toggle:**
- Click list icon in toolbar
- Keyboard shortcut: `Cmd/Ctrl + L`

---

## Searching Projects

Find projects quickly using the search bar:

**Location:**
- Top of project area
- Always visible
- Real-time filtering

**Search by:**
- Project name
- Project alias
- Description text
- Status

**Examples:**
```
portfolio
```
Finds: "Portfolio Site", "Designer Portfolio", etc.

```
deployed
```
Finds: All deployed projects

```
landing
```
Finds: Projects with "landing" in name or description

**Clear search:**
- Click X button
- Press Escape
- Delete all text

---

## Quick Actions Menu

Each project card has a three-dot menu (⋮) with quick actions:

### View Live Site
- Opens your deployed URL
- Only available if deployed
- Opens in new tab

### Open Preview
- Opens project workspace
- Loads chat and preview
- Continue building

### Sync to GitHub
- Pushes latest code to repository
- Only if GitHub connected
- Shows sync status

### View Deployment
- Opens deployment details
- View logs and status
- Access deployment settings

### Project Settings
- Configure project options
- Manage integrations
- Update visibility

### Download Code
- Export project as ZIP
- Includes all files
- Backup your work

### Duplicate Project
- Create a copy (coming soon)
- Preserves code, not chat history
- Uses 1 project slot

### Delete Project
- Permanently remove project
- Confirmation required
- Cannot be undone

---

## Creating New Projects

Multiple ways to start a project from the dashboard:

### 1. Quick Create Prompt Box

**Fastest method:**
1. Type your idea in the large input box
2. Press Enter or click "Create"
3. AI creates and names your project
4. Opens workspace automatically

**Example prompts:**
```
Create a portfolio website for a graphic designer
```

```
Build a landing page for a coffee subscription service
```

### 2. New Project Button

**More control:**
1. Click "New Project" in header
2. Follow wizard steps
3. Choose template
4. Configure options
5. Click "Create Project"

[Learn more: Creating Projects](/docs/projects/creating-projects)

---

## Organizing Projects

### Sorting Options

**Sort by:**
- Last accessed (default)
- Alphabetical (A-Z)
- Date created (newest/oldest)
- Status
- Token usage

**Change sorting:**
- Click sort dropdown in toolbar
- Selection persists across sessions

### Filtering

**Filter by status:**
- All projects (default)
- Draft only
- Deployed only
- Failed deployments

**Filter button:**
- Located in toolbar
- Shows active filter count
- Clear all filters option

---

## Project Limits

Your plan determines how many projects you can have:

| Plan | Limit |
|------|-------|
| Free | 2 projects |
| Creator | Unlimited |
| Builder | Unlimited |
| Enterprise | Unlimited |

**Free plan:**
- Current usage shown: "2 / 2 projects"
- Must delete project to create new one
- Or [upgrade plan](/docs/billing/plans-and-pricing)

**Upgrade prompt:**
- Appears when limit reached
- Shows plan comparison
- One-click upgrade available

---

## Project Actions

### Opening a Project

**Multiple ways:**
1. Click project card anywhere
2. Click "Open Preview" in menu
3. Search and press Enter

**What happens:**
- Project workspace loads
- Chat history restored
- Preview server starts
- Ready to continue building

### Deploying from Dashboard

**Quick deploy:**
1. Click three-dot menu
2. Select "Deploy"
3. Choose deployment target
4. Wait for completion
5. Status badge updates

No need to open project first!

### Accessing Live Site

**View deployed project:**
1. Look for 🟢 Deployed badge
2. Click "View Live Site" in menu
3. Opens in new tab

**Or:**
- Click the URL shown on card (if visible)

---

## Dashboard Settings

Customize your dashboard experience:

**Preferences:**
- Default view (grid/list)
- Default sort order
- Cards per page
- Show/hide project stats

**Access:**
- User menu → Settings → Dashboard Preferences

---

## Keyboard Shortcuts

Speed up your workflow:

| Action | Shortcut |
|--------|----------|
| New project | `Cmd/Ctrl + N` |
| Search projects | `Cmd/Ctrl + K` |
| Toggle view | `Cmd/Ctrl + G/L` |
| Refresh dashboard | `Cmd/Ctrl + R` |
| Open first project | `1` |
| Open second project | `2` |
| Navigate projects | `Arrow keys` |
| Open selected | `Enter` |

---

## Mobile Dashboard

On mobile devices:

**Layout adjustments:**
- Single column view
- Swipeable project cards
- Hamburger menu for navigation
- Bottom navigation bar

**Touch gestures:**
- Swipe left on card: Quick actions
- Swipe down: Refresh
- Long press: Context menu
- Pinch: Zoom card thumbnails (if applicable)

**Optimized for:**
- Quick project access
- Status checking
- Deployment monitoring
- On-the-go management

---

## Common Tasks

### Finding Recent Work

**Your most recent projects:**
- Always at the top (default sort)
- "Last accessed" timestamp visible
- Quick resume where you left off

### Checking Deployment Status

**At a glance:**
- Status badge shows state
- Green = live
- Red = needs attention
- Orange = updates available

**Detailed view:**
- Click three-dot menu
- Select "View Deployment"
- See logs and history

### Organizing Many Projects

**Best practices:**
- Use descriptive names
- Add detailed descriptions
- Tag projects (coming soon)
- Archive old projects (coming soon)
- Delete abandoned experiments

### Sharing Project Access

**Invite collaborators:**
1. Open project
2. Click "Collaborators" button
3. Enter email addresses
4. Set roles
5. Send invitations

[Learn more: Inviting Collaborators](/docs/collaboration/inviting-collaborators)

---

## Dashboard Notifications

Important alerts appear on dashboard:

**Notification types:**
- Deployment complete
- Deployment failed
- Low token balance
- Collaborator joined
- Payment issues
- System updates

**Notification center:**
- Bell icon in header
- Shows unread count
- Click to view all
- Mark as read

---

## Tips for Efficiency

**Use keyboard shortcuts**
- Navigate without mouse
- Create projects faster
- Switch views quickly

**Keep it organized**
- Delete old experiments
- Use clear names
- Add descriptions

**Check status regularly**
- Ensure sites are live
- Monitor deployments
- Catch issues early

**Quick create workflow**
- Use prompt box for speed
- Wizard for complex setup
- Template for specific types

---

## Troubleshooting

### Projects Not Loading

**Refresh the page:**
- Click logo
- Press `Cmd/Ctrl + R`
- Or hard refresh: `Cmd/Ctrl + Shift + R`

**Check internet connection:**
- Dashboard requires active connection
- Projects sync from server

**Clear browser cache:**
- May resolve display issues
- Settings → Clear cache → Refresh

### Missing Projects

**Check filters:**
- Might be filtered out
- Clear all filters
- Check archive (coming soon)

**Check account:**
- Signed in to correct account?
- Switch accounts in user menu

### Slow Loading

**Optimize:**
- Close unused browser tabs
- Reduce number of projects per page
- Switch to list view (lighter weight)
- Clear browser cache

---

## Next Steps

Master your dashboard, then:

- [Creating Projects](/docs/projects/creating-projects) - Build new projects
- [Project Settings](/docs/projects/project-settings) - Configure options
- [Chatting with AI](/docs/ai-agent/chatting-with-the-agent) - Start building
- [Deployment](/docs/deployment/deploy-overview) - Make projects live

---

**Your projects, organized!** Use the dashboard to efficiently manage your entire Yomake portfolio.
