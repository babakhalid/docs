# Roles and Permissions

Understand different team roles and their permissions in Yomake projects.

---

## Overview

Yomake uses role-based access control to manage what team members can do in your projects. Each role has specific permissions designed for different responsibilities.

**Available Roles:**
- Owner - Complete control
- Admin - Nearly full access
- Editor - Code and content changes
- Viewer - Read-only access

---

## Role Comparison

### Quick Reference Table

| Permission | Owner | Admin | Editor | Viewer |
|------------|-------|-------|--------|--------|
| **View project** | ✅ | ✅ | ✅ | ✅ |
| **View code** | ✅ | ✅ | ✅ | ❌ |
| **Edit code** | ✅ | ✅ | ✅ | ❌ |
| **Chat with AI** | ✅ | ✅ | ✅ | ❌ |
| **Deploy project** | ✅ | ✅ | ✅ | ❌ |
| **View settings** | ✅ | ✅ | ⚠️ | ❌ |
| **Edit settings** | ✅ | ✅ | ❌ | ❌ |
| **Manage env vars** | ✅ | ✅ | ❌ | ❌ |
| **Invite members** | ✅ | ✅ | ❌ | ❌ |
| **Remove members** | ✅ | ✅ | ❌ | ❌ |
| **Change roles** | ✅ | ✅ | ❌ | ❌ |
| **Transfer ownership** | ✅ | ❌ | ❌ | ❌ |
| **Delete project** | ✅ | ❌ | ❌ | ❌ |

⚠️ = Partial access (read-only)

---

## Owner Role

### Overview

The Owner is the project creator and has complete control.

**Key Characteristics:**
- Only one owner per project
- Cannot be removed
- Full control over everything
- Can transfer ownership

### Owner Permissions

**Full Access To:**
- All project files and code
- All settings and configurations
- Team management
- Billing and subscription
- Integrations
- Deployment settings
- Environment variables
- Danger Zone actions

**Owner-Exclusive Actions:**
- Transfer project ownership
- Delete project permanently
- Downgrade collaborator limits
- Access billing information
- Cancel subscription

### Transferring Ownership

**How to Transfer:**
1. Go to **Settings > Collaboration**
2. Find current owner
3. Click **"Transfer Ownership"**
4. Select new owner from existing admins
5. Confirm transfer
6. You become an Admin

**Important:**
- Can only transfer to existing Admin
- Irreversible (unless transferred back)
- Billing transfers to new owner
- You retain Admin access

---

## Admin Role

### Overview

Admins have nearly full control except for ownership-specific actions.

**Best For:**
- Technical leads
- Project managers
- Trusted partners
- Co-founders

### Admin Permissions

**Can Do:**
- Edit all code and files
- Change project settings
- Manage environment variables
- Invite and remove team members
- Change member roles (except Owner)
- Deploy to production
- Configure integrations
- View analytics
- Manage domains

**Cannot Do:**
- Delete project
- Transfer ownership
- Remove the Owner
- Change Owner's role
- Access billing

### Admin Limits

**Safety Features:**
- Can't accidentally delete project
- Can't remove themselves
- Can't lock out Owner
- Audit trail of all actions

---

## Editor Role

### Overview

Editors can work on code and deploy but can't change settings.

**Best For:**
- Developers
- Contractors
- Content creators
- Junior team members

### Editor Permissions

**Can Do:**
- View and edit all code
- Chat with AI Agent
- Create and modify files
- Install dependencies
- Run builds
- Deploy to preview
- Deploy to production
- View preview
- Access file history
- Comment on code

**Cannot Do:**
- Change project settings
- Manage environment variables
- Invite team members
- Remove collaborators
- Change roles
- Configure integrations
- Manage domains
- Access billing

**Settings Access:**
- ⚠️ Can view some settings (read-only)
- ❌ Can't modify any settings
- ❌ Can't see environment variable values

### Editor Best Practices

**Use Editor When:**
- Need coding access only
- External contractors
- Learning team members
- Temporary contributors

---

## Viewer Role

### Overview

Viewers have read-only access to see progress and provide feedback.

**Best For:**
- Clients
- Stakeholders
- Managers (non-technical)
- External reviewers

### Viewer Permissions

**Can Do:**
- View live preview
- See deployment status
- Leave comments
- View project dashboard
- Access public documentation
- See activity timeline

**Cannot Do:**
- View source code
- Edit anything
- Chat with AI
- Deploy project
- View settings
- See environment variables
- Access file system
- Make any changes

### Viewer Features

**Comment System:**
- Leave feedback on preview
- Tag team members
- Attach screenshots
- Reply to discussions

**Notifications:**
- Deployment updates
- Major changes
- When mentioned
- Project milestones

---

## Permission Details

### Code Access

**Who Can Access Code:**
- ✅ Owner, Admin, Editor - Full access
- ❌ Viewer - No access

**Code Permissions Include:**
- Reading files
- Editing code
- Creating new files
- Deleting files
- Installing packages
- Running commands

### AI Agent Access

**Who Can Chat with AI:**
- ✅ Owner, Admin, Editor
- ❌ Viewer

**AI Permissions Include:**
- Sending prompts
- Requesting changes
- Getting explanations
- Building features
- Refactoring code

### Deployment Access

**Who Can Deploy:**
- ✅ Owner, Admin, Editor
- ❌ Viewer

**Deployment Includes:**
- Deploying to preview
- Deploying to production
- Rolling back deployments
- Viewing build logs
- Managing deployment history

### Settings Access

**Full Settings Access:**
- ✅ Owner, Admin

**Read-Only Settings:**
- ⚠️ Editor (limited sections)

**No Settings Access:**
- ❌ Viewer

**Settings Include:**
- Project configuration
- Environment variables
- Integration connections
- Domain management
- Team management

---

## Changing Roles

### Who Can Change Roles

**Role Change Permissions:**
- Owner → Can change anyone's role
- Admin → Can change Editor and Viewer roles
- Editor → Cannot change roles
- Viewer → Cannot change roles

### How to Change Roles

**Steps:**
1. Go to **Settings > Collaboration**
2. Find team member
3. Click role dropdown
4. Select new role
5. Confirm change
6. Member notified immediately

**Effect:**
- Takes effect immediately
- Member gets notification
- Activity logged
- No need to re-invite

### Role Change Scenarios

**Promoting:**
- Viewer → Editor (give coding access)
- Editor → Admin (trust established)
- Admin → Owner (ownership transfer)

**Demoting:**
- Admin → Editor (reduce permissions)
- Editor → Viewer (move to oversight)
- Use when trust decreases or role changes

---

## Special Permissions

### Environment Variables

**Who Can Access:**
- ✅ Owner, Admin - Full access
- ⚠️ Editor - Can see variable names, not values
- ❌ Viewer - No access

**What This Means:**
- Editors know which variables exist
- Can't see API keys or secrets
- Can request Admin to update values

### Billing Access

**Who Can Access:**
- ✅ Owner only
- ❌ All others

**Includes:**
- Subscription management
- Payment methods
- Billing history
- Usage analytics
- Plan upgrades/downgrades

### Integration Management

**Who Can Manage:**
- ✅ Owner, Admin
- ❌ Editor, Viewer

**Includes:**
- Connecting GitHub
- Setting up Vercel
- Linking Supabase
- Managing API keys
- Configuring webhooks

---

## Role-Based Workflows

### Development Team Setup

**Recommended Structure:**
```
Owner (You) - Overall control
├─ Admin (Tech Lead) - Technical decisions
├─ Editor (Developer 1) - Feature development
├─ Editor (Developer 2) - Bug fixes
└─ Viewer (QA Tester) - Testing and feedback
```

### Agency/Client Setup

**Recommended Structure:**
```
Owner (Agency) - Project management
├─ Admin (Project Manager) - Client communication
├─ Editor (Developer) - Implementation
├─ Editor (Designer) - Design implementation
└─ Viewer (Client) - Review and approval
```

### Solo + Contractor

**Recommended Structure:**
```
Owner (You) - Project control
├─ Editor (Contractor) - Specific tasks
└─ Viewer (Stakeholder) - Progress monitoring
```

---

## Best Practices

### Assigning Roles

✅ **DO:**
- Start with least privilege
- Upgrade roles as trust builds
- Document role decisions
- Review roles quarterly
- Use Viewer for clients

❌ **DON'T:**
- Give Admin to everyone
- Leave contractors as Admin
- Make viewers Editors prematurely
- Ignore role changes
- Skip role reviews

### Security

**Protect Your Project:**
- Limit Admin roles
- Review access regularly
- Remove inactive members
- Use Viewer for external parties
- Monitor activity logs

### Communication

**Set Expectations:**
- Explain roles when inviting
- Document team structure
- Clarify responsibilities
- Update as roles evolve
- Communicate changes

---

## Troubleshooting

### Can't Perform Action

**Problem:** "You don't have permission"

**Solution:** Check your role
- Owner/Admin needed for settings
- Editor needed for code changes
- Ask Owner/Admin for role upgrade

### Role Change Not Working

**Problem:** Can't change someone's role

**Solution:**
- Only Owner/Admin can change roles
- Can't change Owner's role
- Can't promote above your own role

### Lost Access After Role Change

**Problem:** Can no longer access features

**Solution:**
- Contact project Owner
- Request role upgrade
- Explain needed permissions
- Wait for Owner/Admin action

---

## Need Help?

**Collaboration Questions:**
- [Inviting Collaborators](/docs/collaboration/inviting-collaborators)
- [Managing Team](/docs/collaboration/managing-team)
- [Project Settings](/docs/projects/project-settings)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

---

**Right person, right permissions!** Proper role assignment keeps projects secure and productive.
