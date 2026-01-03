import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DocCard, DocCardGrid } from "@/components/docs/DocCard";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Rocket,
  MessageSquare,
  Monitor,
  Cloud,
  GitBranch,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  Zap,
  Database,
  Code2,
} from "lucide-react";
import { documentation } from "@/lib/docs";

export function DocsHome() {
  // Get featured/popular guides
  const featuredGuides = [
    {
      icon: Rocket,
      title: "Quick Start",
      description: "Get up and running with Yomake in under 5 minutes",
      href: "/docs/getting-started/quick-start",
      badge: "5 min"
    },
    {
      icon: MessageSquare,
      title: "Chat with AI Agent",
      description: "Learn how to effectively communicate with the AI",
      href: "/docs/ai-agent/chatting-with-the-agent",
    },
    {
      icon: Code2,
      title: "Prompt Tips",
      description: "Write better prompts for better results",
      href: "/docs/ai-agent/prompt-tips",
    },
    {
      icon: Cloud,
      title: "Deploy Your App",
      description: "Make your project live on the internet in seconds",
      href: "/docs/deployment/deploy-overview",
    },
  ];

  // Icon map for sections
  const sectionIcons: Record<string, React.ElementType> = {
    "getting-started": Rocket,
    "projects": BookOpen,
    "ai-agent": MessageSquare,
    "live-preview": Monitor,
    "deployment": Cloud,
    "integrations": GitBranch,
    "collaboration": Users,
    "billing": CreditCard,
    "settings": Settings,
    "support": HelpCircle,
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative">
          <Badge variant="outline" className="mb-4 animate-in">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Complete Documentation
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in animate-in-delay-1">
            Yomake{" "}
            <span className="text-muted-foreground font-normal">Documentation</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-in animate-in-delay-2">
            Everything you need to know about building web applications with
            Yomake's AI-powered platform. From getting started to advanced integrations.
          </p>

          <div className="flex flex-wrap gap-4 animate-in animate-in-delay-3">
            <Button size="lg" className="group" asChild>
              <Link to="/docs/getting-started/quick-start">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/docs/ai-agent/what-can-i-build">
                <Zap className="mr-2 w-4 h-4" />
                See What You Can Build
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Guides</h2>
        </div>
        <DocCardGrid columns={2}>
          {featuredGuides.map((guide) => (
            <DocCard
              key={guide.href}
              icon={guide.icon}
              title={guide.title}
              description={guide.description}
              href={guide.href}
              badge={guide.badge}
            />
          ))}
        </DocCardGrid>
      </section>

      {/* All Documentation Sections */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">All Documentation</h2>
        </div>
        <div className="space-y-12">
          {documentation.map((section) => {
            const Icon = sectionIcons[section.slug] || BookOpen;
            return (
              <div key={section.slug} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    ({section.pages.length} {section.pages.length === 1 ? 'page' : 'pages'})
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="group block p-4 rounded-lg border bg-card hover:border-foreground/20 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="font-medium group-hover:text-foreground transition-colors mb-1">
                        {page.title}
                      </div>
                      {page.description && (
                        <div className="text-sm text-muted-foreground">
                          {page.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-3">
            <Database className="w-5 h-5" />
            <h3 className="font-semibold">Integrations</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Connect GitHub, Vercel, Supabase, and AI providers to supercharge your projects.
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link to="/docs/integrations/integrations-overview">
              Learn More
              <ArrowRight className="ml-2 w-3 h-3" />
            </Link>
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-3">
            <CreditCard className="w-5 h-5" />
            <h3 className="font-semibold">Pricing & Billing</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Understand plans, tokens, and how billing works with Yomake.
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link to="/docs/billing/plans-and-pricing">
              View Plans
              <ArrowRight className="ml-2 w-3 h-3" />
            </Link>
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="w-5 h-5" />
            <h3 className="font-semibold">Need Help?</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Find answers in our FAQ or contact support for assistance.
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link to="/docs/support/faq">
              Get Support
              <ArrowRight className="ml-2 w-3 h-3" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-lg bg-secondary border p-8 md:p-12">
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start building?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl">
            Join thousands of developers who are building faster with Yomake's
            AI-powered platform. Start your free account today.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group" asChild>
              <Link to="/docs/getting-started/quick-start">
                Start Building Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/docs/ai-agent/what-can-i-build">
                View Examples
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DocsHome;
