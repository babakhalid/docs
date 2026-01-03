// Documentation configuration
export interface DocSection {
  title: string;
  slug: string;
  pages: DocPage[];
}

export interface DocPage {
  title: string;
  slug: string;
  path: string;
  description?: string;
}

export const documentation: DocSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    pages: [
      {
        title: "Introduction",
        slug: "introduction",
        path: "/docs/getting-started/introduction",
        description: "Welcome to Yomake - Learn what you can build"
      },
      {
        title: "Quick Start",
        slug: "quick-start",
        path: "/docs/getting-started/quick-start",
        description: "Get started in 5 minutes"
      },
      {
        title: "Creating Your First Project",
        slug: "creating-your-first-project",
        path: "/docs/getting-started/creating-your-first-project",
        description: "Detailed project creation guide"
      },
      {
        title: "Understanding the Interface",
        slug: "understanding-the-interface",
        path: "/docs/getting-started/understanding-the-interface",
        description: "Learn the UI and navigation"
      },
    ]
  },
  {
    title: "Projects",
    slug: "projects",
    pages: [
      {
        title: "Project Dashboard",
        slug: "project-dashboard",
        path: "/docs/projects/project-dashboard",
        description: "Manage all your projects"
      },
      {
        title: "Project Templates",
        slug: "project-templates",
        path: "/docs/projects/project-templates",
        description: "Choose from 13+ templates"
      },
      {
        title: "Creating Projects",
        slug: "creating-projects",
        path: "/docs/projects/creating-projects",
        description: "All ways to create projects"
      },
      {
        title: "Project Settings",
        slug: "project-settings",
        path: "/docs/projects/project-settings",
        description: "Configure your project"
      },
      {
        title: "Deleting Projects",
        slug: "deleting-projects",
        path: "/docs/projects/deleting-projects",
        description: "Remove projects safely"
      },
    ]
  },
  {
    title: "AI Agent",
    slug: "ai-agent",
    pages: [
      {
        title: "Chatting with the Agent",
        slug: "chatting-with-the-agent",
        path: "/docs/ai-agent/chatting-with-the-agent",
        description: "Communicate effectively with AI"
      },
      {
        title: "What Can I Build",
        slug: "what-can-i-build",
        path: "/docs/ai-agent/what-can-i-build",
        description: "Explore possibilities and ideas"
      },
      {
        title: "Prompt Tips",
        slug: "prompt-tips",
        path: "/docs/ai-agent/prompt-tips",
        description: "Write better prompts"
      },
      {
        title: "Understanding Responses",
        slug: "understanding-responses",
        path: "/docs/ai-agent/understanding-responses",
        description: "Interpret AI output"
      },
    ]
  },
  {
    title: "Live Preview",
    slug: "live-preview",
    pages: [
      {
        title: "Using the Preview",
        slug: "using-the-preview",
        path: "/docs/live-preview/using-the-preview",
        description: "Test your app in real-time"
      },
      {
        title: "Device Modes",
        slug: "device-modes",
        path: "/docs/live-preview/device-modes",
        description: "Responsive testing"
      },
      {
        title: "Refreshing Preview",
        slug: "refreshing-preview",
        path: "/docs/live-preview/refreshing-preview",
        description: "Troubleshoot preview issues"
      },
    ]
  },
  {
    title: "Deployment",
    slug: "deployment",
    pages: [
      {
        title: "Deploy Overview",
        slug: "deploy-overview",
        path: "/docs/deployment/deploy-overview",
        description: "Introduction to deployment options"
      },
      {
        title: "Yomake Hosting",
        slug: "yomake-hosting",
        path: "/docs/deployment/yomake-hosting",
        description: "One-click deployment"
      },
      {
        title: "Vercel Deployment",
        slug: "vercel-deployment",
        path: "/docs/deployment/vercel-deployment",
        description: "Professional hosting"
      },
      {
        title: "Custom Domains",
        slug: "custom-domains",
        path: "/docs/deployment/custom-domains",
        description: "Use your own domain"
      },
      {
        title: "Deployment Status",
        slug: "deployment-status",
        path: "/docs/deployment/deployment-status",
        description: "Understand deployment states"
      },
    ]
  },
  {
    title: "Integrations",
    slug: "integrations",
    pages: [
      {
        title: "Integrations Overview",
        slug: "integrations-overview",
        path: "/docs/integrations/integrations-overview",
        description: "Connect your tools"
      },
      {
        title: "GitHub Integration",
        slug: "github-integration",
        path: "/docs/integrations/github-integration",
        description: "Version control and backup"
      },
      {
        title: "Vercel Integration",
        slug: "vercel-integration",
        path: "/docs/integrations/vercel-integration",
        description: "Professional hosting setup"
      },
      {
        title: "Supabase Integration",
        slug: "supabase-integration",
        path: "/docs/integrations/supabase-integration",
        description: "Database and authentication"
      },
      {
        title: "AI Providers",
        slug: "ai-providers",
        path: "/docs/integrations/ai-providers",
        description: "Custom AI API keys"
      },
    ]
  },
  {
    title: "Collaboration",
    slug: "collaboration",
    pages: [
      {
        title: "Inviting Collaborators",
        slug: "inviting-collaborators",
        path: "/docs/collaboration/inviting-collaborators",
        description: "Add team members"
      },
      {
        title: "Roles and Permissions",
        slug: "roles-and-permissions",
        path: "/docs/collaboration/roles-and-permissions",
        description: "Access levels explained"
      },
      {
        title: "Managing Team",
        slug: "managing-team",
        path: "/docs/collaboration/managing-team",
        description: "Team management"
      },
    ]
  },
  {
    title: "Billing",
    slug: "billing",
    pages: [
      {
        title: "Plans and Pricing",
        slug: "plans-and-pricing",
        path: "/docs/billing/plans-and-pricing",
        description: "Choose your plan"
      },
      {
        title: "Token System",
        slug: "token-system",
        path: "/docs/billing/token-system",
        description: "How tokens work"
      },
      {
        title: "Purchasing Tokens",
        slug: "purchasing-tokens",
        path: "/docs/billing/purchasing-tokens",
        description: "Buy token packs"
      },
      {
        title: "Referral Program",
        slug: "referral-program",
        path: "/docs/billing/referral-program",
        description: "Earn free tokens"
      },
    ]
  },
  {
    title: "Settings",
    slug: "settings",
    pages: [
      {
        title: "Account Settings",
        slug: "account-settings",
        path: "/docs/settings/account-settings",
        description: "Manage your profile"
      },
      {
        title: "Preferences",
        slug: "preferences",
        path: "/docs/settings/preferences",
        description: "Customize your experience"
      },
    ]
  },
  {
    title: "Support",
    slug: "support",
    pages: [
      {
        title: "FAQ",
        slug: "faq",
        path: "/docs/support/faq",
        description: "Frequently asked questions"
      },
      {
        title: "Contact Support",
        slug: "contact-support",
        path: "/docs/support/contact-support",
        description: "Get help"
      },
    ]
  },
];

// Helper function to get all pages as a flat array
export function getAllDocPages(): DocPage[] {
  return documentation.flatMap(section => section.pages);
}

// Helper function to find a page by path
export function findDocPage(path: string): DocPage | undefined {
  return getAllDocPages().find(page => page.path === path);
}

// Helper function to get next and previous pages
export function getAdjacentPages(currentPath: string): {
  prev: DocPage | null;
  next: DocPage | null;
} {
  const allPages = getAllDocPages();
  const currentIndex = allPages.findIndex(page => page.path === currentPath);

  return {
    prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
    next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null,
  };
}
