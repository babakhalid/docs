# Understanding the Interface

Get familiar with Yomake's intuitive interface and discover how each component helps you build faster.

---

## Overview

The Yomake interface is designed to make AI-powered web development feel natural and efficient. Everything you need is organized into four main areas: the **Editor**, **AI Chat**, **Preview**, and **Project Dashboard**.

This guide walks you through each interface component so you can navigate confidently and build with speed.

---

## Main Interface Layout

When you open a project, you'll see a three-panel layout:

```
┌─────────────────────────────────────────────────────────┐
│  Top Bar: Project Name | Save Status | Deploy Button   │
├───────────────┬──────────────────────┬──────────────────┤
│               │                      │                  │
│   AI Chat     │    Code Editor       │   Live Preview   │
│   Panel       │    (Center)          │   Panel          │
│   (Left)      │                      │   (Right)        │
│               │                      │                  │
│               │                      │                  │
└───────────────┴──────────────────────┴──────────────────┘
```

**Key Areas:**
- **Left Panel** - AI Chat interface
- **Center Panel** - Code editor with file tree
- **Right Panel** - Live preview window
- **Top Bar** - Project controls and status

---

## Top Navigation Bar

### Project Name & Info

**Project Name Dropdown:**
- Click to rename project
- Access project settings
- View project details
- Switch between projects

**Indicators:**
- 🟢 Auto-save active
- 🟡 Saving changes
- 🔴 Connection issues

### Action Buttons

**Save Button** (Cmd/Ctrl + S)
- Manual save trigger
- Shows last saved time
- Disabled when auto-saved

**Deploy Button**
- One-click deployment
- Shows deployment status
- Opens deployment modal

**Share Button**
- Generate shareable link
- Set access permissions
- Copy project URL

**Settings Icon** (⚙️)
- Project settings
- Environment variables
- Integration management

---

## Left Panel: AI Chat

The AI Chat panel is where you communicate with Yomake's AI agent to build your project.

### Chat Input

**Message Box:**
- Type your requests in natural language
- Multi-line support (Shift + Enter)
- Supports markdown formatting
- Auto-saves conversation history

**Send Button:**
- Click to send message
- Keyboard shortcut: Enter
- Disabled while AI is thinking

### Conversation Area

**Message Types:**

**Your Messages** (Right-aligned, blue background)
```
You: "Add a contact form to the homepage"
```

**AI Responses** (Left-aligned, gray background)
```
AI: "I'll add a contact form with name, email, and message fields.
     Creating the form component now..."
```

**System Messages** (Centered, italic)
```
✓ Changes saved
⚡ Deployment started
```

### Message Actions

Each AI response includes action buttons:

**Copy Code** 📋
- Copy code snippets
- One-click clipboard copy
- Formatted for pasting

**Apply Changes** ✓
- Automatically apply code changes
- Updates files in editor
- Shows diff before applying

**Explain More** 💬
- Request clarification
- Ask follow-up questions
- Drill into details

### Conversation Controls

**New Chat**
- Start fresh conversation
- Clears current context
- Keeps project files intact

**History**
- View past conversations
- Resume previous chats
- Search conversation history

**Export Chat**
- Download conversation
- Share with team
- Keep records

---

## Center Panel: Code Editor

The code editor is where you view and edit your project files.

### File Tree (Left Sidebar)

**File Organization:**
```
my-project/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── 📁 pages/
│   │   └── Home.tsx
│   └── App.tsx
├── 📁 public/
│   └── logo.png
├── package.json
└── README.md
```

**File Icons:**
- 📁 Folders (collapsible)
- 📄 Files (color-coded by type)
- ✏️ Modified files (yellow dot)
- ➕ New files (green dot)

**File Actions:**
- **Right-click** for context menu
- **Rename** (F2)
- **Delete** (Delete key)
- **New File/Folder** (+  button)

### Code Editor Window

**Features:**

**Syntax Highlighting**
- Language-specific colors
- Keywords, strings, comments
- Error highlighting
- Type information

**Auto-Completion**
- IntelliSense suggestions
- Import auto-completion
- Property suggestions
- Snippet expansion

**Code Navigation**
- Go to definition (F12)
- Find references (Shift + F12)
- Symbol search (Cmd/Ctrl + P)
- Quick file switcher

**Multi-Cursor Editing**
- Multiple cursors (Alt + Click)
- Select next occurrence (Cmd/Ctrl + D)
- Column selection (Alt + Shift + Drag)

### Editor Tabs

**Tab Management:**
- Multiple files open in tabs
- Drag to reorder
- Close with middle-click
- Close others (right-click menu)

**Tab Indicators:**
- ● Modified (unsaved)
- ○ Saved
- 🔒 Read-only

### Bottom Panel

**Terminal**
- Integrated command line
- Run build commands
- Install packages
- View logs

**Problems**
- TypeScript errors
- ESLint warnings
- Build issues
- Click to jump to error

**Output**
- Build output
- Server logs
- Debug information

---

## Right Panel: Live Preview

Real-time preview of your application as you build.

### Preview Toolbar

**Device Selector:**
- 🖥️ Desktop (1920x1080)
- 💻 Laptop (1366x768)
- 📱 Mobile (375x667)
- 📱 Tablet (768x1024)
- Custom sizes

**View Options:**
- Zoom in/out (25% - 200%)
- Rotate device orientation
- Toggle device frame
- Full-screen mode

**Browser Actions:**
- Refresh preview (Cmd/Ctrl + R)
- Open in new tab
- Copy preview URL
- Clear cache

### Preview Frame

**Interactive Preview:**
- ✅ Clickable links and buttons
- ✅ Form interactions
- ✅ Scroll and navigation
- ✅ Real-time updates

**Preview Features:**
- Hot Module Replacement (HMR)
- Instant updates on save
- Preserved scroll position
- Form state maintenance

### Preview Console

**Built-in Console:**
- View console.log output
- See error messages
- Network requests
- Performance metrics

**Toggle Console:**
- Click console icon in toolbar
- Keyboard: Cmd/Ctrl + J
- Docked at bottom of preview
- Resizable height

---

## Responsive Panels

All panels are resizable and collapsible for flexible workflows.

### Panel Controls

**Resize Panels:**
- Drag panel dividers
- Double-click to reset
- Preset layouts available

**Collapse/Expand:**
- Click collapse icons (◀ ▶)
- Keyboard shortcuts
- Auto-collapse on focus

### Layout Presets

**Code Focus** (Cmd/Ctrl + \\)
- Full-width editor
- Hidden chat and preview
- Maximum code space

**Preview Focus** (Cmd/Ctrl + Shift + \\)
- Full-width preview
- Hidden editor
- Design review mode

**Balanced** (Default)
- Equal panel widths
- Chat, editor, preview visible
- Productive workflow

**Chat Focus**
- Expanded chat panel
- Narrow editor and preview
- Conversation mode

---

## Keyboard Shortcuts

Master these shortcuts to work faster:

### General
- `Cmd/Ctrl + S` - Save project
- `Cmd/Ctrl + K` - Focus chat input
- `Cmd/Ctrl + P` - Quick file search
- `Cmd/Ctrl + Shift + P` - Command palette

### Editor
- `Cmd/Ctrl + F` - Find in file
- `Cmd/Ctrl + H` - Find and replace
- `Cmd/Ctrl + /` - Toggle comment
- `Alt + Up/Down` - Move line up/down

### Navigation
- `Cmd/Ctrl + B` - Toggle file tree
- `Cmd/Ctrl + J` - Toggle console
- `Cmd/Ctrl + \\` - Toggle preview
- `F12` - Go to definition

### Code Actions
- `Alt + Shift + F` - Format document
- `Cmd/Ctrl + .` - Quick fix
- `F2` - Rename symbol
- `Cmd/Ctrl + D` - Select next occurrence

---

## Status Indicators

Understanding status indicators helps you know what's happening.

### Project Status

**🟢 Saved** - All changes saved
**🟡 Saving...** - Save in progress
**🔴 Error** - Save failed, retry needed
**⚡ Building...** - Project building
**✓ Deployed** - Live and accessible

### File Status

**● Modified** - Unsaved changes
**○ Saved** - No pending changes
**🔒 Read-only** - Cannot edit
**⚠️ Conflict** - Merge conflict detected

### AI Status

**💭 Thinking...** - AI processing request
**⌨️ Typing...** - AI generating response
**✓ Done** - Action completed
**⚠️ Warning** - Needs clarification

---

## Customizing Your Interface

Personalize Yomake to match your workflow.

### Theme Options

**Light Mode** (☀️)
- Pale Ivory background
- High contrast text
- Daytime coding

**Dark Mode** (🌙)
- Smoke Signal background
- Reduced eye strain
- Night-time coding

**Auto** (🌓)
- Follows system preference
- Switches automatically
- Best of both worlds

### Editor Settings

**Font Family:**
- JetBrains Mono (default)
- Fira Code
- Source Code Pro
- Custom fonts

**Font Size:**
- 12px - 24px range
- Zoom shortcuts
- Persistent preference

**Tab Size:**
- 2 spaces (default)
- 4 spaces
- Tabs

### Layout Preferences

**Panel Positions:**
- Swap chat and preview
- Move terminal location
- Custom arrangements

**Auto-Save:**
- ✅ Enabled (recommended)
- Save delay (1-5 seconds)
- Manual save mode

---

## Tips for Efficient Navigation

### File Navigation

**Quick Open** (Cmd/Ctrl + P)
- Type file name to find
- Fuzzy search support
- Recently opened files first

**Breadcrumbs**
- Shows current file path
- Click to navigate folders
- Quick parent folder access

### Search & Replace

**Global Search** (Cmd/Ctrl + Shift + F)
- Search across all files
- RegEx support
- Replace in multiple files

**Symbol Search** (Cmd/Ctrl + Shift + O)
- Find functions and classes
- Jump to definitions
- Navigate large files

### Multi-File Editing

**Split Editor**
- View two files side-by-side
- Compare before/after
- Reference while coding

**Diff View**
- See changes visually
- Before/after comparison
- Merge conflict resolution

---

## Troubleshooting Interface Issues

### Preview Not Updating

**Problem:** Changes not showing in preview

**Solutions:**
- Hard refresh (Cmd/Ctrl + Shift + R)
- Clear preview cache
- Check console for errors
- Verify file saved correctly

### Chat Not Responding

**Problem:** AI not replying to messages

**Solutions:**
- Check internet connection
- Refresh page
- Start new conversation
- [Contact Support](/docs/support/contact-support)

### Editor Lag or Freezing

**Problem:** Interface feels slow

**Solutions:**
- Close unused tabs
- Collapse large folders
- Clear terminal output
- Reduce preview panel size

### Layout Issues

**Problem:** Panels stuck or won't resize

**Solutions:**
- Double-click dividers to reset
- Select a layout preset
- Refresh page
- Clear browser cache

---

## Next Steps

Now that you understand the interface:

- **[Chat with AI Agent](/docs/ai-agent/chatting-with-the-agent)** - Learn effective communication
- **[Using the Preview](/docs/live-preview/using-the-preview)** - Master the preview panel
- **[Prompt Tips](/docs/ai-agent/prompt-tips)** - Write better prompts
- **[Project Settings](/docs/projects/project-settings)** - Customize your project

---

**You're now ready to navigate Yomake like a pro!** The interface is designed to get out of your way and let you focus on building amazing projects.
