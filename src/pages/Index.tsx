import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  Shield,
  Globe,
  Github,
  Twitter,
  Moon,
  Sun,
} from "lucide-react";

const Index = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute inset-0 bg-dots opacity-[0.03]" />
      </div>

      {/* Navigation */}
      <header className="relative z-50 glass-strong border-b sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <span className="text-white font-bold text-xl">Y</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>
              <span className="font-bold text-xl tracking-tight">Yomake</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Documentation
              </Link>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Features
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Pricing
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
                <a href="https://github.com/yomake" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button className="group" asChild>
                <Link to="/docs">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <section className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="animate-slide-up">
              <Badge variant="outline" className="mb-6 py-1.5 px-4 animate-shine">
                <Sparkles className="w-3.5 h-3.5 mr-2 text-primary" />
                Now with AI-powered code generation
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Build apps{" "}
              <span className="relative">
                <span className="text-gradient">lightning fast</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 87 1 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              with AI
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Describe your idea in plain English. Watch Yomake generate
              production-ready code in seconds. Ship faster than ever before.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="text-lg px-8 h-14 group shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow" asChild>
                <Link to="/docs/quickstart">
                  Start Building Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <Link to="/docs">
                  <Code2 className="w-5 h-5 mr-2" />
                  Read the Docs
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-16 pt-16 border-t animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-6">
                Trusted by developers at
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
                {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map((company) => (
                  <span key={company} className="text-lg font-semibold text-muted-foreground">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Everything you need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From ideation to production, Yomake handles it all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Instant Generation",
                description: "Generate complete features in seconds. No more boilerplate.",
              },
              {
                icon: Code2,
                title: "Clean Code",
                description: "Production-ready TypeScript with best practices built-in.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2 compliant with end-to-end encryption.",
              },
              {
                icon: Globe,
                title: "Deploy Anywhere",
                description: "One-click deployment to your favorite platform.",
              },
              {
                icon: Sparkles,
                title: "AI Learning",
                description: "The more you use it, the better it understands your style.",
              },
              {
                icon: Github,
                title: "Git Integration",
                description: "Automatic commits, PRs, and intelligent branching.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="doc-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build faster?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of developers shipping better products with Yomake.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 h-14 group" asChild>
                  <Link to="/docs/quickstart">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold">Y</span>
              </div>
              <span className="font-semibold">Yomake.ai</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="https://github.com/yomake" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/yomakeai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yomake.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
