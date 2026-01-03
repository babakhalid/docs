# Yomake Documentation Site

![Yomake Logo](https://yomake.ai/logo.png)

Complete documentation website for **Yomake.ai** - the AI-powered platform for building web applications through natural language conversations.

## 📚 Documentation

This repository contains the full Yomake documentation site with **36 comprehensive pages** covering:

- **Getting Started** (4 pages) - Introduction, Quick Start, Creating Projects, Interface Guide
- **Projects** (4 pages) - Dashboard, Templates, Settings, Project Management
- **AI Agent** (4 pages) - Chatting, Capabilities, Prompt Tips, Understanding Responses
- **Live Preview** (3 pages) - Preview Usage, Device Modes, Refresh & Troubleshooting
- **Deployment** (5 pages) - Overview, Yomake Hosting, Vercel, Custom Domains, Status Monitoring
- **Integrations** (5 pages) - Overview, GitHub, Vercel, Supabase, AI Providers
- **Collaboration** (3 pages) - Inviting Members, Roles & Permissions, Team Management
- **Billing** (4 pages) - Plans & Pricing, Token System, Purchasing Tokens, Referral Program
- **Settings** (2 pages) - Account Settings, Preferences
- **Support** (2 pages) - FAQ, Contact Support

**Total:** ~100,000 words of professional documentation

## 🚀 Features

- **Dynamic Markdown Rendering** - All docs written in Markdown, rendered in real-time
- **Modern Tech Stack** - Vite, React 19, TypeScript, shadcn/ui
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Mode** - Full dark/light theme support
- **Search Ready** - Structured for easy search integration
- **SEO Optimized** - Proper heading structure and meta tags
- **Beautiful UI** - Yomake design system (Pale Ivory + Smoke Signal)

## 🛠️ Tech Stack

- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool
- **[React 19](https://react.dev/)** - Latest React with hooks
- **[TypeScript](https://typescriptlang.org/)** - Type-safe development
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering
- **[Remark GFM](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/babakhalid/docs.git

# Navigate to project
cd docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the documentation site.

## 📝 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
docs/
├── public/
│   └── docs/              # All markdown documentation files
│       ├── getting-started/
│       ├── projects/
│       ├── ai-agent/
│       ├── live-preview/
│       ├── deployment/
│       ├── integrations/
│       ├── collaboration/
│       ├── billing/
│       ├── settings/
│       └── support/
├── src/
│   ├── components/
│   │   ├── docs/          # Documentation-specific components
│   │   └── ui/            # shadcn/ui components
│   ├── lib/
│   │   └── docs.ts        # Documentation structure config
│   ├── pages/
│   │   └── docs/          # Doc page components
│   └── App.tsx            # Main application
└── package.json
```

## 📄 Adding Documentation Pages

1. **Create Markdown File:**
   ```bash
   touch public/docs/section-name/page-slug.md
   ```

2. **Register in Config:**
   Edit `src/lib/docs.ts`:
   ```typescript
   {
     title: "Section Name",
     slug: "section-name",
     pages: [
       {
         title: "Page Title",
         slug: "page-slug",
         path: "/docs/section-name/page-slug",
         description: "Brief description"
       }
     ]
   }
   ```

3. **Done!** The page is now accessible and listed in navigation.

## 🎨 Design System

The site uses the Yomake design system:

**Colors:**
- Pale Ivory (#EEEBD9) - Light backgrounds
- Smoke Signal (#282427) - Dark text
- Full dark mode support

**Typography:**
- **Headings:** Space Grotesk (bold, geometric)
- **Body:** DM Sans (clean, readable)
- **Code:** JetBrains Mono (with ligatures)

## 🚀 Deployment

**Deploy to Vercel:**
```bash
npm install -g vercel
vercel
```

**Deploy to Netlify:**
```bash
npm run build
# Upload dist/ folder
```

**Deploy to GitHub Pages:**
```bash
npm run build
# Deploy dist/ to gh-pages branch
```

## 📖 Documentation Guidelines

**Content Quality:**
- Clear, structured sections
- Practical examples
- Troubleshooting sections
- Cross-references to related docs
- 2,000-3,500 words per page

**Writing Style:**
- Second person ("you")
- Active voice
- Short paragraphs
- Bullet points for scannability
- Professional but approachable

## 🤝 Contributing

Contributions welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Add or update documentation
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Website:** [Yomake.ai](https://yomake.ai)
- **Documentation:** [docs.yomake.ai](https://docs.yomake.ai)
- **Issues:** [GitHub Issues](https://github.com/babakhalid/docs/issues)
- **Email:** support@yomake.ai

---

Built with ❤️ using Yomake.ai - Build apps by chatting with AI
