# Using the Preview

The live preview panel is your window into the app you're building. This guide explains how to use it effectively to test, interact with, and refine your project in real-time.

---

## What is the Preview?

The preview panel shows your app exactly as users will see it, updating automatically as the AI makes changes. It's a fully functional, interactive view of your web application running in a development environment.

**Key features:**
- **Live updates** - Changes appear instantly
- **Fully interactive** - Click buttons, fill forms, navigate pages
- **Responsive testing** - View on desktop, tablet, or mobile
- **Real-time rendering** - Powered by Vite development server
- **No refresh needed** - Hot module replacement keeps your state

---

## Preview Panel Location

The preview appears on the right side of your workspace:

- **Desktop layout** - Full split-screen view
- **Tablet layout** - Stacked or side-by-side (your choice)
- **Mobile layout** - Swipeable panels

You can resize the preview by dragging the divider between chat and preview panels.

---

## How It Works

### Automatic Updates

When the AI makes changes:

1. Code is written to your project files
2. Vite dev server detects changes
3. Preview updates automatically (usually < 1 second)
4. Your interactions are preserved (where possible)

You'll see a brief flash or reload indicator when updates occur.

### Development Server

Your preview runs on:
- **Local URL**: `http://localhost:5173` (default Vite port)
- **Network URL**: Available for testing on other devices
- **Live server**: Watches for file changes

This is the same experience developers use when building apps locally.

---

## Interacting with the Preview

### Click Everything

The preview is fully functional:

- **Click buttons** - Test interactions and navigation
- **Fill forms** - Enter text, select options, upload files
- **Navigate** - Move between pages using links
- **Hover effects** - See animations and transitions
- **Scroll** - Test scroll-based features

Treat it like a real website—everything works!

### Testing Features

**Forms:**
- Enter data in input fields
- Submit forms to test validation
- Check error messages
- Verify success states

**Navigation:**
- Click menu items
- Test mobile hamburger menus
- Verify links go to correct pages
- Check back/forward behavior

**Interactive Elements:**
- Toggle switches
- Accordion menus
- Modal dialogs
- Dropdowns and selects
- Image galleries

**State Management:**
- Add items to cart
- Change theme (light/dark)
- Login/logout flows
- User preferences

---

## Preview Controls

### Device Mode Toggle

Switch between viewport sizes to test responsive design:

#### Desktop Mode
- **Width**: 1920px (or your screen size)
- **Best for**: Full layout testing, multi-column designs
- **Shows**: Desktop navigation, full-width content

#### Tablet Mode
- **Width**: 768px (iPad portrait)
- **Best for**: Medium-screen testing, collapsed layouts
- **Shows**: Tablet-optimized views, condensed navigation

#### Mobile Mode
- **Width**: 375px (iPhone portrait)
- **Best for**: Mobile testing, hamburger menus, stacked layouts
- **Shows**: Mobile-first responsive design

**How to switch:**
- Click the device icon in preview toolbar
- Keyboard shortcut: `Cmd/Ctrl + Shift + M`
- Icons show: 💻 Desktop | 📱 Tablet | 📱 Mobile

### Refresh Button

Force a full reload of the preview:

- Click the refresh icon (↻) in preview toolbar
- Keyboard shortcut: `Cmd/Ctrl + R`
- Clears all state and reloads from scratch

**When to use:**
- Preview not updating automatically
- Seeing stale content
- JavaScript errors occurring
- Need to reset application state

### Full-Screen Mode

Expand preview to fill your entire screen:

- Click the full-screen icon in preview toolbar
- Keyboard shortcut: `F11` or `Cmd/Ctrl + Shift + F`
- Press `Esc` to exit

**Benefits:**
- See full design without distractions
- Test on larger viewport
- Present to clients or team
- Take clean screenshots

### Open in Browser

View your preview in a separate browser window:

- Click the "Open in Browser" icon
- Opens in your default browser
- URL: `http://localhost:5173`

**Why use this:**
- Test with browser DevTools
- Debug console errors
- Test on different browsers
- Check network requests
- Inspect responsive behavior with browser tools

---

## Preview URL

Your preview is accessible via a unique URL:

### During Development

**Local access:**
```
http://localhost:5173
```

Use this URL to:
- Open in multiple browser tabs
- Test on same computer
- Bookmark for quick access

**Network access:**
```
http://192.168.x.x:5173
```

Use this URL to:
- Test on mobile devices (same WiFi)
- Show clients or team members
- Test on tablets or other computers
- Verify responsive design on real devices

**Finding your network URL:**
- Look in terminal output when project starts
- Or click "Share Preview" in toolbar

### Sharing Preview (While Developing)

Share your in-progress work:

1. Click "Share Preview" button
2. Get shareable URL: `https://preview.yomake.ai/your-project-id`
3. Anyone with link can view (while your project is open)
4. Requires authentication if project is private

**Note:** Preview sharing only works while your project is open. For permanent links, [deploy your project](/docs/deployment/deploy-overview).

---

## Testing Responsive Design

### Why Test Multiple Devices?

Users access your app on various screen sizes:
- 📱 **Mobile** (< 768px): 60%+ of web traffic
- 📱 **Tablet** (768px - 1024px): 10-15% of traffic
- 💻 **Desktop** (> 1024px): 25-30% of traffic

Your app should look great on all devices.

### What to Check

**Mobile (375px):**
- Is text readable without zooming?
- Do buttons have enough touch area (44px min)?
- Is navigation accessible (hamburger menu)?
- Does content stack vertically?
- Are images sized appropriately?

**Tablet (768px):**
- Does layout use space effectively?
- Are multi-column designs working?
- Is navigation intuitive?
- Do cards and grids adjust properly?

**Desktop (1920px):**
- Is content centered or does it stretch too wide?
- Are images and videos high-quality?
- Does navigation span the full width?
- Are hover effects working?

### Asking AI to Fix Issues

If something looks wrong on a specific device:

```
The navigation menu is overlapping the logo on mobile
```

```
The pricing cards are too narrow on desktop
```

```
The hero image is cut off on tablet view
```

---

## Common Preview Features

### Hot Module Replacement (HMR)

Changes update without full reload:
- Maintains your scroll position
- Preserves form data
- Keeps application state
- Updates only changed modules

Sometimes a full reload is needed:
- Adding new dependencies
- Changing configuration files
- Fixing critical errors

### Error Overlay

When errors occur, you'll see:
- Red error message overlay
- Error details and stack trace
- File location of the error
- Option to dismiss

**What to do:**
- Copy the error message
- Tell the AI: "I'm seeing this error: [paste error]"
- AI will diagnose and fix

### Console Messages

Developer console shows:
- Application logs
- Error messages
- Warnings
- Network requests

**Access console:**
- Open preview in browser
- Press `F12` or right-click → Inspect
- Go to Console tab

---

## Preview Performance

### Loading Speed

Preview typically loads in:
- **First load**: 2-5 seconds
- **After changes**: < 1 second (HMR)
- **Full refresh**: 1-2 seconds

**If slow:**
- Check your internet connection
- Close other resource-heavy apps
- Try refreshing the preview
- Contact support if persistent

### Smooth Interactions

For best performance:
- Use modern browser (Chrome, Firefox, Safari, Edge)
- Keep browser updated
- Close unnecessary tabs
- Ensure stable internet connection

---

## Troubleshooting

### Preview Not Showing

**Blank or white screen:**
```
Refresh the preview
```

If still blank, tell the AI:
```
The preview is showing a blank screen. Can you check for errors?
```

### Preview Not Updating

**Changes not appearing:**
1. Click the refresh button
2. Open in browser and hard refresh (`Cmd/Ctrl + Shift + R`)
3. Tell the AI: "The preview isn't updating after changes"

### Preview Frozen

**Interactions not working:**
1. Refresh the preview
2. Close and reopen the project
3. Clear browser cache if opened in browser

### Error Messages

**Red error overlay:**
1. Read the error message
2. Copy the error text
3. Tell the AI: "Getting this error: [error message]"
4. AI will fix the underlying issue

### Can't See Full Layout

**Content cut off:**
- Try different device modes
- Enter full-screen mode
- Zoom out in browser (if opened separately)
- Ask AI: "Make the layout fit better on [device]"

---

## Best Practices

**Test as you build**
- Check preview after each AI change
- Verify features work as expected
- Catch issues early

**Test all device sizes**
- Don't just stick to desktop
- Mobile users are the majority
- Tablet view often reveals layout issues

**Interact with everything**
- Click all buttons
- Fill all forms
- Navigate all pages
- Test all features

**Use real content**
- Replace placeholder text
- Upload real images
- Test with actual data lengths

**Open in browser for debugging**
- Use DevTools for detailed inspection
- Check console for errors
- Test network requests
- Verify responsive breakpoints

---

## Preview Shortcuts

| Action | Shortcut |
|--------|----------|
| Refresh preview | `Cmd/Ctrl + R` |
| Toggle device mode | `Cmd/Ctrl + Shift + M` |
| Full-screen mode | `F11` or `Cmd/Ctrl + Shift + F` |
| Exit full-screen | `Esc` |
| Open DevTools (in browser) | `F12` or `Cmd/Ctrl + Shift + I` |

---

## Next Steps

Master the preview panel and:

- [Device Modes](/docs/live-preview/device-modes) - Deep dive into responsive testing
- [Refreshing Preview](/docs/live-preview/refreshing-preview) - Troubleshoot preview issues
- [Deployment](/docs/deployment/deploy-overview) - Make your app live
- [Chatting with the Agent](/docs/ai-agent/chatting-with-the-agent) - Request changes

---

**Build with confidence!** Use the preview to test every feature as you go.
