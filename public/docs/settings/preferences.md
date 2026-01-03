# Preferences

Customize your Yomake workspace, editor settings, and development environment preferences.

---

## Overview

Preferences let you tailor Yomake to match your workflow. Customize the editor, preview behavior, keyboard shortcuts, and more for an optimal development experience.

---

## Editor Preferences

### Theme

**Choose Your Theme:**
1. Go to **Settings > Preferences > Appearance**
2. Select theme:
   - **Light** - Pale Ivory background
   - **Dark** - Smoke Signal background
   - **Auto** - Follows system preference

**Theme Preview:**
- See changes immediately
- Applies to all projects
- Syncs across devices

### Font Settings

**Code Font:**
- Font family: JetBrains Mono (default), Fira Code, Source Code Pro
- Font size: 12px - 24px
- Line height: 1.2 - 2.0
- Font weight: 300 - 700

**Enable Font Ligatures:**
- Prettier code symbols
- `=>` becomes →
- `!=` becomes ≠
- Enable in **Settings > Editor > Font**

### Editor Behavior

**Auto-Save:**
- ✅ Enabled (recommended)
- Delay: 500ms - 5000ms
- Or manual save only

**Auto-Format:**
- Format on save
- Format on paste
- Never format

**Tab Behavior:**
- Tab size: 2 or 4 spaces
- Insert spaces or tabs
- Detect from file

**Line Wrapping:**
- Wrap long lines
- No wrapping
- Wrap at column (80, 100, 120)

---

## Code Preferences

### Language Formatting

**JavaScript/TypeScript:**
- Semicolons: Add, remove, or preserve
- Quote style: Single or double
- Trailing commas: None, es5, or all

**HTML/CSS:**
- Indent style
- Attribute formatting
- CSS property order

**Prettier Config:**
1. Go to **Settings > Code > Formatting**
2. Edit `.prettierrc` configuration
3. Or use UI toggles

### Linting

**ESLint Rules:**
- Enable/disable rules
- Error vs warning
- Custom configuration

**Display:**
- Inline errors
- Problems panel
- Both

### IntelliSense

**Auto-Completion:**
- Trigger characters
- Suggest on trigger
- Accept on enter/tab
- Snippet suggestions

**Type Information:**
- Show parameter hints
- Quick info on hover
- Signature help

---

## Preview Preferences

### Default Device

**Set Startup Device:**
1. Go to **Settings > Preview**
2. Choose default:
   - Desktop (1920x1080)
   - Laptop (1366x768)
   - Mobile (375x667)
   - Tablet (768x1024)
   - Last used

### Auto-Reload

**Preview Updates:**
- Instant (HMR)
- Debounced (wait for typing pause)
- Manual only

**Reload Delay:**
- 0ms - 5000ms
- Prevents flickering during typing

### Preview Features

**Options:**
- Show device frame
- Enable touch simulation
- Show rulers/guides
- Display console
- Network throttling

---

## AI Agent Preferences

### Model Selection

**Default AI Model:**
1. Go to **Settings > AI > Model**
2. Choose default:
   - Claude Sonnet (balanced)
   - Claude Opus (most capable)
   - Claude Haiku (fastest)
   - GPT-4 (if configured)
   - GPT-3.5 (fast)

**Per-Project Override:**
- Set in project settings
- Overrides account default

### Agent Behavior

**Response Style:**
- Concise - Short, direct answers
- Detailed - Explanations included
- Balanced - Mix of both

**Code Generation:**
- Conservative - Proven patterns
- Modern - Latest features
- Custom - Follow project style

**Confirmation Prompts:**
- Ask before destructive actions
- Confirm deployments
- Verify major changes

### Context Preferences

**Memory Settings:**
- Remember conversation history
- Context window: Small, medium, large
- Clear context on new chat

---

## Keyboard Shortcuts

### View Shortcuts

**See All Shortcuts:**
1. Go to **Settings > Keyboard Shortcuts**
2. Or press `Cmd/Ctrl + K, Cmd/Ctrl + S`

**Categories:**
- File operations
- Editor actions
- Navigation
- Preview controls
- AI commands

### Customize Shortcuts

**Change Keybinding:**
1. Find command
2. Click current binding
3. Press new key combination
4. Confirm if no conflict

**Common Customizations:**
- Save: `Cmd/Ctrl + S` (default)
- Deploy: `Cmd/Ctrl + D` (custom)
- AI Chat: `Cmd/Ctrl + K` (default)
- Preview: `Cmd/Ctrl + P` (custom)

### Reset Shortcuts

**Restore Defaults:**
- Click **"Reset All"**
- Or reset individual shortcuts
- Confirm action

---

## Workspace Layout

### Panel Positions

**Customize Layout:**
1. Go to **Settings > Appearance > Layout**

**Options:**
- Sidebar position: Left or right
- Preview panel: Right or bottom
- Console position: Bottom or floating
- Activity bar: Left, right, or hidden

### Panel Sizes

**Default Sizes:**
- Sidebar: 15%, 20%, 25%, or 30%
- Preview: 30%, 40%, 50%, or 60%
- Console: 20%, 25%, 30%

**Save Custom Layout:**
- Arrange panels manually
- Click **"Save as Preset"**
- Name your layout
- Switch between presets

### Zoom Level

**Interface Zoom:**
- 75%, 90%, 100%, 110%, 125%, 150%
- Affects entire interface
- Not just editor

---

## Git Integration

### Git Preferences

**Auto-Commit Messages:**
- Generate from AI
- Template-based
- Manual only

**Commit Signing:**
- Enable GPG signing
- Configure key
- Sign by default

**Push Behavior:**
- Auto-push after commit
- Prompt before push
- Manual push only

### Branch Management

**Default Branch:**
- main (default)
- master
- develop
- Custom

**Branch Protection:**
- Warn before pushing to main
- Require pull requests
- Enforce review

---

## Terminal Preferences

### Terminal Appearance

**Terminal Theme:**
- Match editor theme
- Custom colors
- Font size
- Cursor style

### Shell Selection

**Default Shell:**
- bash
- zsh
- fish
- powershell (Windows)

**Shell Integration:**
- Command history
- Auto-completion
- Path integration

---

## Deployment Preferences

### Auto-Deploy

**Configure Auto-Deploy:**
- On save (instant)
- On commit (Git push)
- Manual only

**Deploy Targets:**
- Yomake hosting
- Vercel
- Both

### Build Preferences

**Build Options:**
- Cache dependencies
- Optimize images
- Minify code
- Generate sourcemaps

**Environment:**
- Default to production
- Default to development
- Ask each time

---

## Notification Preferences

### Desktop Notifications

**Enable/Disable:**
- Build complete
- Deployment success/failure
- Team activity
- Comments/mentions

**Notification Style:**
- Banner (default)
- Alert
- None

### Sound Effects

**Audio Alerts:**
- Enable sound
- Choose sound:
  - Subtle beep
  - Success chime
  - Error buzz
  - Custom sound
- Volume level

---

## Performance Preferences

### Resource Usage

**Performance Settings:**
- Low - Optimize for battery
- Balanced - Default
- High - Maximum performance

**Limits:**
- Max memory usage
- CPU throttling
- Network bandwidth

### Cache Settings

**Clear Caches:**
- Editor cache
- Preview cache
- Dependency cache
- Asset cache

**Cache Behavior:**
- Auto-clear on restart
- Manual clear only
- Clear on deploy

---

## Privacy Preferences

### Analytics

**Usage Data:**
- ✅ Share anonymous analytics
- ⬜ Share crash reports
- ⬜ Share feature usage
- ⬜ Participate in studies

**What's Collected:**
- Feature usage statistics
- Performance metrics
- Error reports
- No personal data or code

### AI Data

**AI Training:**
- ✅ Allow using my prompts (anonymized)
- ⬜ Exclude my code from training
- ⬜ Opt-out completely

**Data Retention:**
- Conversation history
- Auto-delete after: 30/60/90 days or never

---

## Backup and Sync

### Auto-Backup

**Project Backups:**
- Frequency: Hourly, daily, weekly
- Retention: 7, 30, 90 days
- Storage: Cloud or local

**Backup Includes:**
- All project files
- Environment variables (encrypted)
- Configuration
- Dependencies list

### Settings Sync

**Sync Across Devices:**
- ✅ Editor settings
- ✅ Keyboard shortcuts
- ✅ Theme preference
- ✅ Extensions
- ⬜ Project settings

**Conflict Resolution:**
- Use most recent
- Ask me
- Keep both (merge)

---

## Advanced Preferences

### Feature Flags

**Beta Features:**
1. Go to **Settings > Advanced > Beta**
2. Toggle experimental features:
   - ⬜ New AI models
   - ⬜ Advanced editor
   - ⬜ Collaboration v2
   - ⬜ Performance mode

**Warning:** Beta features may be unstable

### Developer Mode

**Enable Developer Tools:**
- Chrome DevTools integration
- Advanced debugging
- API access
- Verbose logging

**Use Cases:**
- Plugin development
- Deep debugging
- API testing
- Performance profiling

---

## Import/Export Preferences

### Export Settings

**Backup Your Preferences:**
1. Go to **Settings > Import/Export**
2. Click **"Export Settings"**
3. Download JSON file
4. Store safely

**What's Exported:**
- All preferences
- Keyboard shortcuts
- Theme settings
- Extensions

### Import Settings

**Restore or Share:**
1. Click **"Import Settings"**
2. Select JSON file
3. Preview changes
4. Confirm import
5. Reload interface

**Use Cases:**
- New device setup
- Team standardization
- Backup restoration
- Multiple accounts

---

## Reset Preferences

### Reset Options

**Reset All Settings:**
1. Go to **Settings > Reset**
2. Choose scope:
   - Reset to defaults
   - Reset specific category
   - Keep custom shortcuts
3. Confirm reset

**⚠️ Warning:** Cannot be undone

**Before Resetting:**
- Export current settings
- Note custom shortcuts
- Screenshot important configs

---

## Troubleshooting

### Settings Not Saving

**Problem:** Changes don't persist

**Solutions:**
1. Check browser local storage
2. Disable browser extensions
3. Try incognito mode
4. Clear cache
5. Contact support

### Sync Issues

**Problem:** Settings not syncing across devices

**Solutions:**
1. Verify sync enabled
2. Check internet connection
3. Log out and back in
4. Manually trigger sync
5. Contact support

### Performance Issues

**Problem:** Editor feels slow

**Solutions:**
1. Lower performance mode
2. Disable unnecessary features
3. Clear caches
4. Reduce file watchers
5. Check system resources

---

## Need Help?

**Preferences Questions:**
- [Account Settings](/docs/settings/account-settings)
- [Using the Preview](/docs/live-preview/using-the-preview)
- [Chatting with the Agent](/docs/ai-agent/chatting-with-the-agent)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)

---

**Make Yomake yours!** Customize every aspect of your development environment for maximum productivity.
