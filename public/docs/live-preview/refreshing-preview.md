# Refreshing Preview

Learn how to refresh your preview, clear caches, and troubleshoot common preview issues.

---

## Overview

The Yomake preview updates automatically as you make changes, but sometimes you need to manually refresh or clear cached data. This guide covers all refresh methods and solutions to common preview problems.

---

## Auto-Refresh (Hot Module Replacement)

**How It Works:**
- Changes automatically appear in preview
- No manual refresh needed
- Preserves application state when possible
- Updates in milliseconds

**What Triggers Auto-Refresh:**
- Saving code changes
- AI making updates
- File modifications
- Style changes

---

## Manual Refresh Methods

### Standard Refresh

**Refresh Button** - Click the refresh icon (🔄) in preview toolbar

**Keyboard Shortcut** - \`Cmd/Ctrl + R\`

**When to Use:**
- Preview seems stuck
- Changes not appearing
- Testing after manual edits

### Hard Refresh

**Clear Cache and Reload:**
- **Mac:** \`Cmd + Shift + R\`
- **Windows/Linux:** \`Ctrl + Shift + R\`

**When to Use:**
- Styling issues persist
- JavaScript not updating
- Images showing old versions
- Build artifacts cached

### Full Reset

**Steps:**
1. Click preview menu (⋮)
2. Select "Clear All Data"
3. Confirm action
4. Preview reloads from scratch

**When to Use:**
- Major issues persist
- Need completely fresh start
- Debugging strange behavior

---

## Common Preview Issues

### Changes Not Showing

**Problem:** Code updated but preview unchanged

**Solutions:**
1. Wait 2-3 seconds (build time)
2. Click refresh button
3. Check browser console for errors
4. Hard refresh (Cmd/Ctrl + Shift + R)
5. Verify file saved correctly

### Preview Shows Error

**Problem:** Error message in preview window

**Solutions:**
1. Read error message carefully
2. Check console for details
3. Fix code issue causing error
4. Refresh after fixing
5. Contact support if error unclear

### Preview Blank or White

**Problem:** Nothing displays in preview

**Solutions:**
1. Check if build is still running
2. Look for JavaScript errors in console
3. Verify \`index.html\` exists
4. Hard refresh preview
5. Restart development server

### Old Content Still Showing

**Problem:** Deleted code still appears

**Solutions:**
1. Hard refresh (Cmd/Ctrl + Shift + R)
2. Clear browser cache
3. Open preview in incognito mode
4. Check if file actually saved

---

## Clearing Caches

### Browser Cache

**Method 1: Hard Refresh**
- \`Cmd/Ctrl + Shift + R\`

**Method 2: Dev Tools**
1. Open Chrome Dev Tools (F12)
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"

### Service Workers

**If your app uses service workers:**
1. Open Dev Tools (F12)
2. Go to "Application" tab
3. Click "Service Workers"
4. Click "Unregister"
5. Refresh preview

### Local Storage

**Clear stored data:**
1. Open Dev Tools (F12)
2. Go to "Application" tab
3. Expand "Local Storage"
4. Right-click your site
5. Select "Clear"

---

## Preview Console

### Viewing Console Logs

**Open Console:**
- Click console icon in preview toolbar
- Keyboard: \`Cmd/Ctrl + J\`

**Console Shows:**
- \`console.log()\` output
- Errors and warnings
- Network requests
- Performance metrics

### Using Console for Debugging

**Common Console Commands:**
\`\`\`javascript
console.log('Debug info')
console.error('Error message')
console.warn('Warning message')
console.table(data)
\`\`\`

---

## Performance Issues

### Preview Loading Slowly

**Solutions:**
1. Reduce zoom level
2. Close unnecessary browser tabs
3. Check image sizes (optimize large images)
4. Disable device frame if enabled
5. Check for infinite loops in code

### Preview Freezing

**Solutions:**
1. Refresh preview
2. Check for JavaScript errors
3. Review recent code changes
4. Test in different device mode
5. Contact support if persists

---

## Best Practices

### When to Refresh

✅ **DO Refresh:**
- After major code changes
- When switching between files
- Before testing features
- After fixing errors

❌ **DON'T Refresh:**
- Every few seconds
- While auto-refresh is working
- During active AI changes

### Preventing Issues

✅ Save files before testing
✅ Watch for build errors
✅ Monitor console for warnings
✅ Test incrementally
✅ Keep dependencies updated

---

## Need Help?

- [Using the Preview](/docs/live-preview/using-the-preview)
- [Device Modes](/docs/live-preview/device-modes)
- [FAQ](/docs/support/faq)
- [Contact Support](/docs/support/contact-support)
