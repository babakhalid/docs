# Inviting Collaborators

Add team members to your Yomake projects and work together in real-time.

---

## Overview

Collaboration in Yomake lets multiple people work on the same project simultaneously. Invite designers, developers, clients, or stakeholders to view, edit, or manage your projects.

**Collaboration Features:**
- Real-time co-editing
- Role-based permissions
- Activity tracking
- Comments and feedback
- Version history

---

## Who Can Invite Collaborators?

### Plan Requirements

**Free Plan:**
- Solo projects only
- No collaboration features
- Upgrade to add team members

**Creator Plan:**
- Up to 3 collaborators per project
- Basic roles
- Team features

**Builder Plan:**
- Unlimited collaborators
- Advanced roles
- Full team management
- Priority support

[View Plans](/docs/billing/plans-and-pricing)

### Permission Requirements

**Who Can Invite:**
- ✅ Project Owner
- ✅ Admins
- ❌ Editors (can't invite)
- ❌ Viewers (can't invite)

---

## Inviting Team Members

### Step 1: Access Collaboration Settings

**From Your Project:**
1. Open the project
2. Click **Settings > Collaboration**
3. Or click **"Share"** button (top right)

### Step 2: Enter Email Address

**Invite Form:**
```
Email: teammate@example.com
Role: [Select Role ▼]
Message: "Let's build this together!" (optional)
```

**Fields:**
- **Email** - Team member's email (required)
- **Role** - Permission level (required)
- **Message** - Personal note (optional)

### Step 3: Choose Role

**Available Roles:**
- **Admin** - Full access except deleting project
- **Editor** - Can edit code and settings
- **Viewer** - Read-only access

[Learn about roles](/docs/collaboration/roles-and-permissions)

### Step 4: Send Invitation

1. Click **"Send Invitation"**
2. Email sent to invitee
3. They receive invitation link
4. Status shows as **"Pending"**

---

## Invitation Process

### What Invitees Receive

**Invitation Email Contains:**
- Project name
- Your name (inviter)
- Role being granted
- Personal message (if included)
- **"Accept Invitation"** button
- Expiration date (7 days)

### Accepting Invitations

**Invitee Steps:**
1. Open invitation email
2. Click **"Accept Invitation"**
3. Sign in to Yomake (or create account)
4. Confirm acceptance
5. Access granted immediately

### Invitation Status

**Track Invitation Status:**
- 🟡 **Pending** - Invitation sent, not yet accepted
- 🟢 **Accepted** - Member joined
- 🔴 **Expired** - Not accepted within 7 days
- ⚫ **Declined** - Invitation rejected

---

## Managing Pending Invitations

### Viewing Pending Invitations

**See All Pending:**
1. Go to **Settings > Collaboration**
2. Scroll to **"Pending Invitations"** section
3. View list with:
   - Email address
   - Role
   - Sent date
   - Days remaining

### Resending Invitations

**If Invitation Missed:**
1. Find pending invitation
2. Click **"Resend"**
3. New email sent
4. Extends expiration 7 days

### Canceling Invitations

**Remove Pending Invitation:**
1. Find invitation in list
2. Click **"Cancel"**
3. Confirm cancellation
4. Invitation link invalidated

---

## Inviting Multiple People

### Bulk Invitations

**Invite Several at Once:**
1. Go to **Settings > Collaboration**
2. Click **"Invite Multiple"**
3. Enter emails (one per line or comma-separated):
   ```
   john@example.com
   jane@example.com
   bob@example.com
   ```
4. Choose role for all
5. Optional shared message
6. Click **"Send All"**

### Team Import

**Import from CSV:**
1. Prepare CSV file:
   ```csv
   email,role,message
   john@example.com,Editor,Welcome!
   jane@example.com,Admin,Thanks for joining
   ```
2. Go to **Settings > Collaboration**
3. Click **"Import Team"**
4. Upload CSV
5. Review and confirm
6. Invitations sent

---

## Collaborator Limits

### By Plan

**Free Plan:**
- 0 collaborators
- Solo projects only

**Creator Plan:**
- 3 collaborators per project
- Unlimited projects (up to 20)
- Total: 60 collaborators max

**Builder Plan:**
- Unlimited collaborators
- Unlimited projects
- No restrictions

### What Counts as a Collaborator?

**Counted:**
- ✅ Active members (any role)
- ✅ Pending invitations
- ❌ Project owner (you)

**Removing to Free Space:**
- Remove team members
- Cancel pending invitations
- Reassign to other projects

---

## Guest Access

### Temporary Access

**For External Reviewers:**
1. Create **"Guest"** link
2. Set expiration (1 hour - 7 days)
3. Share link
4. View-only access
5. Automatically expires

**Use Cases:**
- Client reviews
- Stakeholder demos
- External feedback
- Temporary access

**Security:**
- No account required
- Read-only
- Time-limited
- Can't see code
- Preview only

---

## Collaborator Notifications

### When Someone Joins

**Notifications Sent:**
- Email to project owner
- In-app notification
- Activity log entry

**What You See:**
```
✓ jane@example.com joined as Editor
2 minutes ago
```

### Team Activity Alerts

**Configure Alerts:**
1. Go to **Settings > Notifications**
2. Toggle **"Team Activity"**
3. Choose notification types:
   - New collaborators
   - Role changes
   - Member removal
   - Invitation actions

---

## Best Practices

### Invitation Guidelines

✅ **DO:**
- Verify email addresses
- Choose appropriate roles
- Include personal message
- Follow up if not accepted
- Welcome new members

❌ **DON'T:**
- Give Admin to everyone
- Invite without context
- Share invitation links publicly
- Ignore pending invitations
- Over-invite on free projects

### Security Considerations

**Protect Your Project:**
- Only invite trusted people
- Use Viewer role for clients
- Review team regularly
- Remove inactive members
- Monitor activity logs

### Onboarding New Members

**Help Them Succeed:**
1. Send invitation with context
2. Follow up with welcome message
3. Orient to project structure
4. Explain workflows
5. Introduce to other team members

---

## Common Scenarios

### Inviting a Client

**Best Approach:**
1. Role: **Viewer**
2. Message: "Review the progress and leave feedback"
3. Enable guest access for temporary reviews
4. Limit access to preview only

### Adding a Developer

**Best Approach:**
1. Role: **Editor**
2. Message: "Welcome to the team! See docs in README"
3. Full code access
4. Can't change critical settings

### Bringing on a Manager

**Best Approach:**
1. Role: **Admin**
2. Message: "Full access to manage the project"
3. Can invite others
4. Can change settings

### Contractor Work

**Best Approach:**
1. Role: **Editor**
2. Time-bound access
3. Remove after project complete
4. Export their contributions first

---

## Troubleshooting

### Invitation Not Received

**Problem:** Team member didn't get email

**Solutions:**
1. Check spam/junk folder
2. Verify email address correct
3. Resend invitation
4. Check email provider not blocking
5. Try different email address

### Can't Accept Invitation

**Problem:** Invitation link not working

**Solutions:**
1. Check if invitation expired
2. Request new invitation
3. Clear browser cache
4. Try incognito mode
5. Contact support

### Hit Collaborator Limit

**Problem:** Can't invite more people

**Solutions:**
1. Remove inactive members
2. Cancel pending invitations
3. Upgrade plan
4. Use guest access instead
5. Create separate projects

### Wrong Role Assigned

**Problem:** Gave wrong permission level

**Solutions:**
1. Can't change pending invitations (cancel and resend)
2. Change role after they accept
3. See [Managing Team](/docs/collaboration/managing-team)

---

## Invitation Email Customization

### Branded Invitations (Builder Plan)

**Custom Invitation Emails:**
1. Go to **Settings > Team > Branding**
2. Add company logo
3. Customize message template
4. Set default invitation message
5. Save preferences

**Template Variables:**
```
{inviter_name} - Your name
{project_name} - Project name
{role} - Assigned role
{expiration} - Days until expiration
```

---

## Need Help?

**Collaboration Questions:**
- [Roles and Permissions](/docs/collaboration/roles-and-permissions)
- [Managing Team](/docs/collaboration/managing-team)
- [Plans and Pricing](/docs/billing/plans-and-pricing)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

---

**Build better together!** Collaboration makes complex projects manageable and fun.
