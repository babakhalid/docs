# Deleting Projects

Understand how to safely delete, archive, or transfer projects in Yomake to keep your workspace organized.

---

## Overview

Deleting a project is permanent and cannot be undone. Before deleting, consider alternatives like archiving or transferring ownership. This guide helps you understand your options and safely manage project lifecycles.

**⚠️ Important:** Deletion removes all code, deployments, history, and settings forever.

---

## Before You Delete

### Consider Alternatives

**Archive Instead of Delete:**
- Hides project from active dashboard
- Preserves all data and history
- Can be restored anytime
- Doesn't count against project limits
- Deployments remain live

**Transfer Ownership:**
- Give project to team member or client
- They take full control
- You lose access after transfer
- Useful for client handoffs

**Export Project:**
- Download complete codebase
- Save locally before deleting
- Keep backup for future reference
- Can re-import later

---

## How to Delete a Project

### From Project Dashboard

**Step 1: Navigate to Project**
1. Go to your [Project Dashboard](/docs/projects/project-dashboard)
2. Find the project you want to delete

**Step 2: Access Delete Option**
1. Click the **⋮ (More Options)** menu on the project card
2. Select **"Delete Project"** (bottom of menu, red text)

OR

1. Click into the project to open it
2. Click project name dropdown (top left)
3. Select **"Settings"**
4. Navigate to **"Danger Zone"** tab
5. Find **"Delete Project"** section

**Step 3: Confirm Deletion**
1. A confirmation modal appears
2. Review what will be deleted
3. Type the project name exactly as shown to confirm
4. Click **"Delete Forever"** (red button)
5. Project is permanently deleted

**Confirmation Required:**
```
To confirm deletion, type: My Project Name

[____________________________________]

[ Cancel ]  [ Delete Forever ]
```

### Keyboard Shortcut

From within a project:
- Press `Cmd/Ctrl + Shift + Delete`
- Confirmation modal appears
- Follow deletion steps

---

## What Gets Deleted

When you delete a project, these items are **permanently removed**:

### Code and Files
- ✅ All source code
- ✅ Assets (images, fonts, etc.)
- ✅ Configuration files
- ✅ Package dependencies
- ✅ Git history (if stored in Yomake)

### Deployments
- ✅ All deployment instances
- ✅ Yomake hosting (site goes offline immediately)
- ✅ Deployment history and logs
- ✅ Custom domains are unlinked
- ✅ SSL certificates removed

### Settings and Data
- ✅ Environment variables
- ✅ Integration connections
- ✅ Project settings
- ✅ Access permissions
- ✅ Collaboration data

### History and Logs
- ✅ Conversation history with AI
- ✅ Build logs
- ✅ Activity timeline
- ✅ Version history

---

## What's NOT Deleted

These items remain intact after project deletion:

### External Services
- ❌ GitHub repository (if connected)
- ❌ Vercel deployments (if deployed separately)
- ❌ Supabase database (if connected)
- ❌ Third-party integrations

### Account Data
- ❌ Your Yomake account
- ❌ Other projects
- ❌ Billing history
- ❌ Account settings
- ❌ Team memberships

### Downloads
- ❌ Previously downloaded exports
- ❌ Local copies on your computer

**Note:** If you want external services cleaned up, you must do that separately in each service.

---

## Archiving Projects (Alternative)

Archiving is a safer alternative to deletion.

### How to Archive

**From Project Dashboard:**
1. Click **⋮ (More Options)** on project card
2. Select **"Archive Project"**
3. Confirm archival
4. Project moved to "Archived" section

**What Happens:**
- ✅ Hidden from active project list
- ✅ All data preserved
- ✅ Deployments stay live
- ✅ No new changes allowed
- ✅ Can be unarchived anytime

### Viewing Archived Projects

**Access Archives:**
1. Go to Project Dashboard
2. Click **"Show Archived"** toggle (top right)
3. Archived projects appear with 📦 icon

### Unarchiving Projects

**Restore Archived Project:**
1. Find project in archived section
2. Click **⋮ (More Options)**
3. Select **"Unarchive"**
4. Project returns to active projects
5. Full functionality restored

### Archive vs Delete

| Feature | Archive | Delete |
|---------|---------|--------|
| **Code preserved** | ✅ Yes | ❌ No |
| **Deployments live** | ✅ Yes | ❌ No |
| **Can be restored** | ✅ Yes | ❌ No |
| **Counts in project limit** | ❌ No | ❌ No |
| **Reduces clutter** | ✅ Yes | ✅ Yes |
| **Frees storage** | ❌ No | ✅ Yes |

**Recommendation:** Archive first, delete later if still unwanted.

---

## Transferring Projects

Transfer ownership instead of deleting when handing off to clients or team members.

### How to Transfer

**From Project Settings:**
1. Open project
2. Go to **Settings > Danger Zone**
3. Find **"Transfer Project"** section
4. Enter recipient's email address
5. Click **"Send Transfer Request"**
6. Recipient receives email invitation
7. They accept transfer
8. Ownership transferred, you lose access

### Transfer Checklist

**Before Transferring:**
- ✅ Document project setup
- ✅ Share environment variables (separately, securely)
- ✅ Export codebase as backup
- ✅ Notify recipient to expect transfer
- ✅ Review billing implications

**What Transfers:**
- ✅ Full project ownership
- ✅ All code and files
- ✅ Deployments and domains
- ✅ Project settings
- ✅ Integration connections (may need reauthorization)

**What Doesn't Transfer:**
- ❌ Your account's conversation history
- ❌ Personal environment variables (security)
- ❌ Your access (unless re-invited as collaborator)

### Accepting a Transfer

**If someone transfers a project to you:**
1. Check email for transfer invitation
2. Click **"Review Transfer"** button
3. Review project details
4. Click **"Accept Transfer"**
5. Project appears in your dashboard
6. You're now the owner

**Transfer Limits:**
- Free plan: Can't receive transfers (must have paid plan)
- Receiving must have available project slots
- Sender must be current owner

---

## Exporting Before Deletion

Always export projects before deleting them.

### Export Project Files

**Download Complete Codebase:**
1. Open project
2. Click **Project Name** dropdown
3. Select **"Export Project"**
4. Choose export format:
   - **Zip Archive** (recommended)
   - **GitHub Repository**
   - **Tarball**
5. Click **"Download"**
6. Save to your computer

### What's Included in Export

- ✅ All source code files
- ✅ Configuration files
- ✅ Package.json dependencies
- ✅ Public assets
- ✅ README and documentation
- ❌ Environment variables (download separately)
- ❌ Build artifacts
- ❌ node_modules (install locally)

### Export Environment Variables

**Save Settings Separately:**
1. Go to **Settings > Environment**
2. Click **"Export Variables"**
3. Download as `.env` file
4. ⚠️ Store securely (contains secrets)

### Re-importing Later

**To restore an exported project:**
1. Create new project (**Blank Canvas**)
2. Upload exported files
3. Restore environment variables
4. Install dependencies
5. Build and deploy

---

## Bulk Project Management

Managing multiple projects to delete.

### Selecting Multiple Projects

**From Dashboard:**
1. Click **"Select Multiple"** button
2. Check boxes on project cards
3. Actions appear at top:
   - Archive Selected
   - Delete Selected
   - Export Selected

### Batch Operations

**Archive Multiple:**
- Select projects
- Click **"Archive Selected"**
- Confirm action
- All archived instantly

**Delete Multiple:**
- Select projects
- Click **"Delete Selected"**
- Type "CONFIRM DELETE" to verify
- All deleted permanently

**⚠️ Warning:** Batch deletion can't be undone. Archive first!

---

## Recovering Deleted Projects

### Within 30 Days (Pro Feature)

**Soft Delete Period:**
- Deleted projects kept for 30 days
- Available on Creator and Builder plans
- Recover from **"Recently Deleted"** section

**How to Recover:**
1. Go to Project Dashboard
2. Click **"Recently Deleted"**
3. Find your project
4. Click **"Restore"**
5. Project restored with all data

### After 30 Days

**Permanent Deletion:**
- Cannot be recovered
- All data permanently destroyed
- Must rebuild from backup

**Options:**
- Use local backups
- Re-import from GitHub
- Recreate from scratch

---

## Common Deletion Scenarios

### Scenario 1: Testing/Experiment Cleanup

**Goal:** Delete old test projects

1. Filter projects by name prefix "Test:" or "Exp:"
2. Review each project
3. Archive any with useful code
4. Delete purely experimental projects
5. Keep workspace clean

### Scenario 2: Client Project Handoff

**Goal:** Transfer to client, then clean up

1. Export project as backup
2. Transfer ownership to client
3. Wait for client confirmation
4. After successful transfer, local copy can be deleted
5. Client now manages project

### Scenario 3: Failed Project Cleanup

**Goal:** Remove abandoned projects

1. Identify projects not touched in 6+ months
2. Archive anything with potential value
3. Export unique components for future use
4. Delete truly abandoned projects
5. Free up project slots

### Scenario 4: Plan Downgrade Preparation

**Goal:** Reduce project count before downgrading

1. Export all projects as backup
2. Identify most valuable projects to keep
3. Archive medium-priority projects
4. Delete least important projects
5. Verify under new plan's project limit

---

## Best Practices

### Before Deleting

✅ **DO:**
- Export project files
- Download environment variables
- Document project setup
- Archive instead if uncertain
- Notify collaborators
- Check deployment dependencies

❌ **DON'T:**
- Delete without backup
- Rush the decision
- Delete while deployed for clients
- Forget to transfer ownership
- Delete out of frustration

### Deletion Checklist

**Pre-Deletion:**
- [ ] Export complete codebase
- [ ] Save environment variables
- [ ] Document external integrations
- [ ] Screenshot deployment URLs
- [ ] Notify team members
- [ ] Consider archiving instead
- [ ] Verify backups work

**During Deletion:**
- [ ] Read deletion warnings carefully
- [ ] Type project name correctly
- [ ] Confirm understanding of permanence
- [ ] Save confirmation email/number

**Post-Deletion:**
- [ ] Verify external services still work
- [ ] Update documentation
- [ ] Inform stakeholders
- [ ] Remove from monitoring tools

---

## Troubleshooting

### Can't Delete Project

**Problem:** Delete button disabled or missing

**Solutions:**
- Check if you're the project owner (not collaborator)
- Verify no active deployments in progress
- Disconnect required integrations first
- Check browser console for errors
- [Contact Support](/docs/support/contact-support)

### Deletion Fails

**Problem:** Error during deletion process

**Solutions:**
- Refresh page and try again
- Check internet connection
- Clear browser cache
- Try different browser
- Wait a few minutes and retry

### Deleted Project Still Visible

**Problem:** Project shows after deletion

**Solutions:**
- Refresh dashboard (Cmd/Ctrl + R)
- Clear browser cache
- Check you're viewing correct account
- Verify deletion completed
- Wait 5 minutes for sync

### Want to Undo Deletion

**Problem:** Deleted project by mistake

**Solutions:**
- Check "Recently Deleted" (if on paid plan)
- Restore from local backup
- Re-import from GitHub
- [Contact Support](/docs/support/contact-support) within 24 hours (may help)

---

## Project Limits by Plan

Understanding how deletion affects your project slots:

### Free Plan
- **5 projects maximum**
- Deleting frees up 1 slot immediately
- Archived projects don't count
- No soft-delete recovery

### Creator Plan
- **20 projects maximum**
- 30-day soft-delete recovery
- Archived projects don't count
- Bulk operations available

### Builder Plan
- **Unlimited projects**
- 30-day soft-delete recovery
- Advanced bulk management
- Priority support for recovery

[Compare plans](/docs/billing/plans-and-pricing)

---

## Need Help?

**Project Deletion Questions:**
- Check [FAQ](/docs/support/faq) for common scenarios
- Review [Project Settings](/docs/projects/project-settings) guide
- [Contact Support](/docs/support/contact-support) for recovery help

**Related Documentation:**
- [Project Dashboard](/docs/projects/project-dashboard) - Managing projects
- [Plans and Pricing](/docs/billing/plans-and-pricing) - Project limits
- [Settings Guide](/docs/settings/account-settings) - Account management

---

**Remember:** Archiving is usually safer than deleting. When in doubt, archive first and delete later if still needed.
