# Account Settings

Manage your Yomake account, profile information, security, and preferences.

---

## Overview

Your account settings control your personal information, security options, notification preferences, and overall Yomake experience. Keep your account secure and customized to your workflow.

---

## Profile Information

### Basic Profile

**Edit Your Profile:**
1. Click profile icon (top right)
2. Select **"Account Settings"**
3. Go to **"Profile"** tab

**Editable Fields:**
- Full name
- Email address
- Profile picture
- Job title
- Company name
- Location
- Bio

**Profile Picture:**
- Click current picture to change
- Upload new image (JPG, PNG)
- Max size: 5MB
- Recommended: 400x400px
- Auto-cropped to circle

### Public Profile

**Control Visibility:**
- Toggle **"Public Profile"** on/off
- Choose what to show:
  - Name
  - Profile picture
  - Bio
  - Projects (if made public)
  - Social links

**Profile URL:**
```
https://yomake.ai/@yourusername
```

---

## Account Security

### Password Management

**Change Password:**
1. Go to **Settings > Security**
2. Click **"Change Password"**
3. Enter current password
4. Enter new password (min 8 characters)
5. Confirm new password
6. Click **"Update Password"**

**Password Requirements:**
- Minimum 8 characters
- At least one uppercase letter
- At least one number
- At least one special character
- Not previously used

### Two-Factor Authentication (2FA)

**Enable 2FA:**
1. Go to **Settings > Security > Two-Factor Auth**
2. Click **"Enable 2FA"**
3. Scan QR code with authenticator app:
   - Google Authenticator
   - Authy
   - 1Password
   - Any TOTP app
4. Enter 6-digit code to verify
5. Save backup codes

**Backup Codes:**
- Download and store securely
- Use if you lose device
- Each code single-use
- Generate new codes anytime

**Disable 2FA:**
- Requires current 2FA code
- Or use backup code
- Highly discouraged

### Active Sessions

**Manage Logged-In Devices:**
1. Go to **Settings > Security > Sessions**
2. See all active sessions:
   - Device type
   - Browser
   - Location (approximate)
   - Last active
3. Click **"End Session"** to log out device

**Revoke All:**
- Click **"End All Other Sessions"**
- Logs out all except current
- Useful if account compromised

---

## Email Settings

### Email Address

**Change Email:**
1. Go to **Settings > Account > Email**
2. Enter new email
3. Click **"Update Email"**
4. Verify via email sent to new address
5. Changes after verification

**Email Verification:**
- Required for sensitive actions
- Check inbox for verification link
- Link expires in 24 hours
- Request new link if expired

### Email Preferences

**Choose What Emails to Receive:**
- ✅ Product updates
- ✅ Security alerts (recommended)
- ✅ Deployment notifications
- ⬜ Marketing newsletters
- ⬜ Tips and tutorials
- ⬜ Community updates

**Frequency:**
- Instant (as they happen)
- Daily digest
- Weekly summary
- Never

---

## Notification Settings

### In-App Notifications

**Configure Alerts:**
1. Go to **Settings > Notifications**
2. Toggle notification types:

**Project Activity:**
- Deployment completed
- Deployment failed
- Code changes by team
- Comments and mentions
- File conflicts

**Team Activity:**
- New team member joined
- Member role changed
- Team member left
- Invitation accepted/declined

**Account Activity:**
- Security alerts
- Token usage warnings
- Payment issues
- Plan changes

### Desktop Notifications

**Browser Notifications:**
1. Enable in browser when prompted
2. Or go to **Settings > Notifications > Desktop**
3. Toggle **"Enable Desktop Notifications"**
4. Choose notification types

**Supported Browsers:**
- Chrome/Edge - Full support
- Firefox - Full support
- Safari - Limited support

### Mobile Notifications

**Yomake Mobile App:**
- Push notifications
- Configure per device
- Same categories as desktop
- Quiet hours support

---

## Privacy Settings

### Data Privacy

**Control Your Data:**
1. Go to **Settings > Privacy**

**Options:**
- Allow anonymous usage analytics
- Share crash reports
- Participate in beta features
- Allow marketing communications
- Show profile in community

### Account Visibility

**Project Privacy:**
- Private (default) - Only you and team
- Unlisted - Anyone with link
- Public - Listed in community

**Profile Visibility:**
- Hidden - Not discoverable
- Private - Profile exists but limited info
- Public - Full profile visible

---

## API Access

### Personal Access Tokens

**Generate API Token:**
1. Go to **Settings > API**
2. Click **"Generate New Token"**
3. Name your token (e.g., "CI/CD Pipeline")
4. Set expiration (30-365 days, or never)
5. Choose scopes:
   - Read projects
   - Write projects
   - Deploy
   - Manage team
6. Click **"Generate"**
7. Copy token immediately (shown once)

**Token Security:**
- Treat like password
- Store securely
- Rotate regularly
- Revoke if compromised

**Manage Tokens:**
- View all tokens
- See last used
- Revoke anytime
- Monitor usage

---

## Integrations

### Connected Services

**Manage Integrations:**
1. Go to **Settings > Integrations**

**Available Integrations:**
- GitHub - Version control
- Vercel - Deployment
- Supabase - Database
- OpenAI - AI provider
- Anthropic - AI provider

**For Each Integration:**
- Connection status
- Permissions granted
- Last synced
- Disconnect option

### OAuth Connections

**Third-Party Logins:**
- View connected accounts
- Add sign-in methods:
  - Google
  - GitHub
  - Microsoft
- Remove connections
- Set primary login

---

## Billing Information

### Payment Methods

**Manage Cards:**
1. Go to **Settings > Billing > Payment Methods**
2. View saved cards
3. Add new card
4. Remove old cards
5. Set default payment method

**Supported:**
- Credit/Debit cards
- PayPal
- Google Pay
- Apple Pay

### Billing History

**View Invoices:**
1. Go to **Settings > Billing > History**
2. See all transactions
3. Download invoices
4. View payment status

**Invoice Details:**
- Date
- Amount
- Description
- Payment method
- Status (Paid/Pending/Failed)
- Download PDF

---

## Language and Region

### Language Preference

**Change Interface Language:**
1. Go to **Settings > Language**
2. Select from available languages:
   - English (default)
   - Spanish
   - French
   - German
   - Japanese
   - Chinese (Simplified)
   - Portuguese
3. Interface updates immediately

### Timezone

**Set Your Timezone:**
1. Go to **Settings > Region**
2. Select timezone
3. Auto-detected by default
4. Affects timestamps and scheduling

### Date/Time Format

**Formatting Preferences:**
- Date format: MM/DD/YYYY or DD/MM/YYYY
- Time format: 12-hour or 24-hour
- First day of week: Sunday or Monday

---

## Account Deletion

### Delete Your Account

**Permanent Account Deletion:**
1. Go to **Settings > Account > Delete Account**
2. Review what will be deleted:
   - All projects
   - All deployments
   - Team memberships
   - Billing history
   - Personal data
3. Type account email to confirm
4. Enter password
5. Click **"Delete Forever"**

**⚠️ Warning:**
- Cannot be undone
- All data permanently deleted
- Active subscriptions canceled
- Refunds per refund policy only

**Before Deleting:**
- Export important projects
- Download invoices
- Cancel subscriptions
- Remove from teams
- Transfer project ownership

---

## Account Export

### Export Your Data

**Download Everything:**
1. Go to **Settings > Privacy > Export Data**
2. Click **"Request Export"**
3. Wait for processing (5-30 minutes)
4. Receive email with download link
5. Download ZIP file (link valid 7 days)

**Export Includes:**
- All project files
- Account information
- Activity logs
- Settings
- Team data (if owner)

**Use Cases:**
- Backup
- Compliance (GDPR)
- Account migration
- Peace of mind

---

## Accessibility

### Accessibility Options

**Visual Aids:**
1. Go to **Settings > Accessibility**

**Options:**
- High contrast mode
- Larger text
- Reduce motion
- Focus indicators
- Keyboard navigation hints

**Screen Reader Support:**
- Full ARIA labels
- Semantic HTML
- Skip navigation links
- Alt text on images

---

## Troubleshooting

### Can't Change Email

**Problem:** Email update fails

**Solutions:**
1. Verify new email not already in use
2. Check verification email (including spam)
3. Try different email address
4. Contact support

### 2FA Issues

**Problem:** Can't access account with 2FA

**Solutions:**
1. Use backup code
2. Check authenticator app time sync
3. Try different code
4. Contact support (identity verification required)

### Lost Password

**Problem:** Can't remember password

**Solutions:**
1. Click **"Forgot Password"** on login
2. Enter email
3. Check inbox for reset link
4. Create new password
5. Contact support if no email received

---

## Best Practices

### Security

✅ **DO:**
- Enable 2FA
- Use strong, unique password
- Review active sessions regularly
- Rotate API tokens
- Monitor account activity

❌ **DON'T:**
- Share account credentials
- Use same password elsewhere
- Disable security features
- Ignore security alerts
- Leave sessions logged in on public computers

### Privacy

✅ **DO:**
- Review privacy settings
- Control data sharing
- Keep contact info current
- Export data regularly
- Read privacy policy updates

---

## Need Help?

**Account Questions:**
- [Preferences](/docs/settings/preferences)
- [Plans and Pricing](/docs/billing/plans-and-pricing)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

---

**Your account, your way!** Customize Yomake to match your workflow and preferences.
