# Managing Team

Effectively manage your team members, monitor activity, and maintain healthy project collaboration.

---

## Overview

Team management in Yomake goes beyond just inviting people. This guide covers member management, activity monitoring, conflict resolution, and maintaining productive collaboration.

---

## Viewing Team Members

### Team Overview

**Access Team List:**
1. Go to **Settings > Collaboration**
2. View **"Team Members"** section
3. See all active members

**Information Displayed:**
- Member name and email
- Role (Owner, Admin, Editor, Viewer)
- Join date
- Last active
- Current status (Active, Inactive)

### Team Dashboard

**Visual Overview:**
```
Team Members (5/10 limit)

Owner:
  👤 you@example.com (Owner) - Active now

Admins (1):
  👤 tech-lead@example.com (Admin) - Active 5m ago

Editors (2):
  👤 developer@example.com (Editor) - Active 1h ago
  👤 contractor@example.com (Editor) - Active yesterday

Viewers (1):
  👤 client@example.com (Viewer) - Active 3 days ago
```

---

## Changing Member Roles

### How to Change Roles

**Steps:**
1. Go to **Settings > Collaboration**
2. Find team member
3. Click current role dropdown
4. Select new role
5. Click **"Save"**
6. Confirm change

**Who Can Change Roles:**
- Owner - Can change anyone's role
- Admin - Can change Editor and Viewer roles
- Others - Cannot change roles

[Learn more about roles](/docs/collaboration/roles-and-permissions)

### Role Change Notifications

**When Roles Change:**
- Member gets email notification
- In-app notification sent
- Activity log updated
- Immediate permission changes

**Example Notification:**
```
Your role in "My Project" has been changed
from Editor to Admin by john@example.com

You now have access to project settings and
team management features.
```

---

## Removing Team Members

### When to Remove Members

✅ **Remove When:**
- Contract ended
- Employee left company
- No longer needed
- Security concerns
- Inactive for 6+ months

❌ **Don't Remove If:**
- Temporary inactivity
- On vacation
- Between tasks
- Learning period

### How to Remove Members

**Steps:**
1. Go to **Settings > Collaboration**
2. Find team member
3. Click **⋮ (More Options)**
4. Select **"Remove from Project"**
5. Confirm removal
6. Member loses access immediately

**What Happens:**
- Access revoked instantly
- Notification sent to member
- Activity logged
- Can be re-invited later

### Removing vs Changing to Viewer

**Remove (Complete Access Loss):**
- Member can't see project at all
- Frees up collaborator slot
- Clean break
- Use for contractors/former employees

**Change to Viewer (Limited Access):**
- Member can still see preview
- Can provide feedback
- Maintains continuity
- Use for stakeholders/clients

---

## Activity Monitoring

### Team Activity Log

**View Activity:**
1. Go to **Settings > Activity**
2. See chronological list
3. Filter by member or action type

**Activities Logged:**
- Code changes
- Deployments
- Settings updates
- Member additions/removals
- Role changes
- File uploads/deletions

**Example Log:**
```
2:15 PM - jane@example.com deployed to production
2:00 PM - john@example.com edited Header.tsx
1:45 PM - jane@example.com invited client@example.com
1:30 PM - john@example.com changed environment variable
```

### Real-Time Presence

**See Who's Online:**
- Green dot = Currently active
- Yellow dot = Idle (5+ minutes)
- Gray dot = Offline

**Live Collaboration:**
- See who's editing which files
- Avoid editing conflicts
- Coordinate work
- Real-time cursor positions (coming soon)

---

## Team Communication

### In-App Comments

**Leave Feedback:**
1. Open preview or code file
2. Click to place comment
3. Type your message
4. Tag team members with @mention
5. Post comment

**Comment Features:**
- Thread discussions
- Tag specific members
- Mark as resolved
- Attach screenshots
- Link to code lines

### Mention Notifications

**@Mention Team Members:**
```
@john can you review the header component?
@jane the deployment failed, please check logs
@client this is ready for your review
```

**Mentions Trigger:**
- Email notification
- In-app alert
- Badge on avatar
- Push notification (if enabled)

---

## Conflict Resolution

### Handling Edit Conflicts

**When Multiple Editors:**
- Yomake shows who's editing
- Warning before overwriting
- Auto-merge when possible
- Manual conflict resolution when needed

**Best Practices:**
- Communicate before editing
- Use comments to coordinate
- Check activity log
- Take turns on sensitive files

### Resolving Team Issues

**Common Issues:**

**Unauthorized Changes:**
1. Review activity log
2. Identify who made change
3. Discuss with member
4. Revert if needed
5. Adjust permissions

**Communication Breakdown:**
1. Set up regular check-ins
2. Use comments for async updates
3. Document decisions
4. Create project README

**Permission Confusion:**
1. Review role permissions
2. Update roles if needed
3. Document responsibilities
4. Share this guide

---

## Team Best Practices

### Onboarding New Members

**Effective Onboarding:**
1. **Send invitation with context**
   - Explain project purpose
   - Clarify their role
   - Set expectations

2. **Provide orientation**
   - Project structure tour
   - Key files overview
   - Coding standards
   - Communication channels

3. **Assign starter task**
   - Small, defined task
   - Builds confidence
   - Tests workflow
   - Opens communication

4. **Check in regularly**
   - First day
   - End of first week
   - Monthly thereafter

### Regular Team Reviews

**Monthly Checklist:**
- [ ] Review active members
- [ ] Check role appropriateness
- [ ] Remove inactive members
- [ ] Update permissions
- [ ] Monitor activity patterns
- [ ] Address any concerns

### Documentation

**Maintain Team Docs:**
- Project README with overview
- Architecture documentation
- Coding standards
- Deployment procedures
- Emergency contacts

---

## Team Size Management

### Monitoring Collaborator Limits

**Check Your Limit:**
1. Go to **Settings > Collaboration**
2. See usage: **"5/10 collaborators"**
3. Upgrade plan if needed

**By Plan:**
- Free: 0 collaborators (solo only)
- Creator: Up to 3 per project
- Builder: Unlimited

### When Approaching Limits

**Options:**
1. **Remove inactive members**
   - Check last active date
   - Remove if 30+ days inactive
   - Can re-invite when needed

2. **Cancel pending invitations**
   - Free up slots
   - Resend when space available

3. **Upgrade plan**
   - More collaborators
   - Advanced features
   - Better for growth

4. **Use Viewer role**
   - Lightweight option
   - Client feedback
   - Doesn't count against some limits

---

## External Collaboration

### Working with Clients

**Best Setup:**
- Role: Viewer
- Enable commenting
- Weekly update schedule
- Clear revision process
- Defined approval workflow

### Managing Contractors

**Best Practices:**
- Role: Editor (time-limited)
- Specific scope defined
- Regular check-ins
- Code review required
- Remove after completion

### Agency Teams

**Structure:**
```
Internal Team:
  - Agency Owner (Owner)
  - Account Manager (Admin)
  - Developers (Editor)

Client Side:
  - Client Stakeholder (Viewer)
  - Client Tech Lead (Viewer/Editor)
```

---

## Security and Compliance

### Access Reviews

**Quarterly Review:**
1. Export team member list
2. Verify each person still needs access
3. Check role appropriateness
4. Remove unnecessary access
5. Document review

### Audit Trail

**Activity Logging:**
- All actions logged
- Timestamped
- User attributed
- Cannot be deleted
- Export for compliance

### Offboarding

**When Someone Leaves:**
1. **Remove access immediately**
2. **Review their work**
3. **Reassign responsibilities**
4. **Update documentation**
5. **Change shared passwords** (if any)
6. **Document transition**

---

## Team Analytics

### Usage Metrics

**Track Team Activity:**
1. Go to **Settings > Analytics**
2. View team metrics:
   - Active members
   - Code contributions
   - Deployment frequency
   - Comment activity
   - Login patterns

### Performance Insights

**Monitor:**
- Most active members
- Busiest times
- Feature usage
- Collaboration patterns
- Bottlenecks

---

## Troubleshooting

### Member Can't Access Project

**Problem:** Team member says they can't access

**Solutions:**
1. Verify they accepted invitation
2. Check their role hasn't changed
3. Ensure they're logged into correct account
4. Check if accidentally removed
5. Resend invitation

### Too Many Team Members

**Problem:** Hit collaborator limit

**Solutions:**
1. Remove inactive members
2. Change some to Viewer
3. Use guest links instead
4. Upgrade plan
5. Split into multiple projects

### Permissions Not Working

**Problem:** Member can't perform expected actions

**Solutions:**
1. Verify their current role
2. Check role permissions
3. Change role if needed
4. Clear browser cache
5. Contact support

### Activity Log Missing

**Problem:** Can't see activity

**Solutions:**
1. Check if you have permissions (Owner/Admin only)
2. Refresh page
3. Check date filter
4. Verify activity occurred
5. Contact support

---

## Need Help?

**Team Management Resources:**
- [Inviting Collaborators](/docs/collaboration/inviting-collaborators)
- [Roles and Permissions](/docs/collaboration/roles-and-permissions)
- [Project Settings](/docs/projects/project-settings)
- [Plans and Pricing](/docs/billing/plans-and-pricing)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

---

**Build better with well-managed teams!** Effective team management leads to successful projects.
