import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Search,
  Menu,
  ChevronRight,
  Moon,
  Sun,
  ExternalLink,
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
  Github,
  Twitter,
} from "lucide-react";
import { documentation } from "@/lib/docs";

// Yomake Logo Component
function YomakeLogo({ className }: { className?: string }) {
  return (
    <img
      src="/logo_yomake_1764899447144.png"
      alt="Yomake"
      className={cn("object-contain", className)}
    />
  );
}

// Navigation structure
interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string;
  children?: NavItem[];
}

// Icon map for sections
const sectionIcons: Record<string, React.ReactNode> = {
  "getting-started": <Rocket className="w-4 h-4" />,
  "projects": <BookOpen className="w-4 h-4" />,
  "ai-agent": <MessageSquare className="w-4 h-4" />,
  "live-preview": <Monitor className="w-4 h-4" />,
  "deployment": <Cloud className="w-4 h-4" />,
  "integrations": <GitBranch className="w-4 h-4" />,
  "collaboration": <Users className="w-4 h-4" />,
  "billing": <CreditCard className="w-4 h-4" />,
  "settings": <Settings className="w-4 h-4" />,
  "support": <HelpCircle className="w-4 h-4" />,
};

// Convert documentation structure to navigation format
const navigation: NavItem[] = documentation.map((section) => ({
  title: section.title,
  icon: sectionIcons[section.slug] || <BookOpen className="w-4 h-4" />,
  children: section.pages.map((page) => ({
    title: page.title,
    href: page.path,
    badge: page.slug === "quick-start" ? "5 min" : undefined,
  })),
}));

interface DocLayoutProps {
  children: React.ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  const [isDark, setIsDark] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  // Toggle dark mode
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background noise">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 glass-strong border-b">
        <div className="flex h-16 items-center px-4 md:px-6">
          {/* Mobile menu trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <MobileSidebar navigation={navigation} onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mr-6 group">
            <YomakeLogo className="w-9 h-9 rounded-lg" />
            <div className="hidden sm:flex items-baseline gap-2">
              <span className="font-bold text-lg tracking-tight">yomake</span>
              <span className="text-muted-foreground text-sm font-medium">/docs</span>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-md mx-auto hidden md:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="search-input pl-10 pr-12"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-secondary px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-1 ml-auto">
            <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
              <a href="https://github.com/yomake" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
              <a href="https://twitter.com/yomakeai" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button size="sm" className="ml-3 hidden sm:flex">
              Start Building
            </Button>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 shrink-0 border-r bg-sidebar/30 sticky top-16 h-[calc(100vh-4rem)]">
          <ScrollArea className="w-full py-6 px-4">
            <nav className="space-y-1">
              {navigation.map((section) => (
                <NavSection
                  key={section.title}
                  item={section}
                  currentPath={location.pathname}
                />
              ))}
            </nav>

            {/* Support card */}
            <div className="mt-8 p-4 rounded-lg bg-secondary/50 border">
              <h4 className="font-semibold text-sm mb-2">Need help?</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Join our community for support and discussions.
              </p>
              <Button size="sm" variant="outline" className="w-full text-xs">
                Join Discord
              </Button>
            </div>
          </ScrollArea>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
            {children}
          </div>
        </main>

        {/* Table of Contents (desktop) */}
        <aside className="hidden xl:block w-56 shrink-0 sticky top-16 h-[calc(100vh-4rem)]">
          <ScrollArea className="w-full py-8 px-4">
            <TableOfContents />
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
}

// Navigation Section Component
function NavSection({ item, currentPath }: { item: NavItem; currentPath: string }) {
  const hasActiveChild = item.children?.some((child) => child.href === currentPath);
  const [isOpen, setIsOpen] = React.useState(hasActiveChild || true);

  if (!item.children) {
    return (
      <Link
        to={item.href || "#"}
        className={cn(
          "nav-item",
          currentPath === item.href && "active"
        )}
      >
        {item.icon}
        <span>{item.title}</span>
        {item.badge && (
          <span className="ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded bg-foreground text-background">
            {item.badge}
          </span>
        )}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-1">
      <CollapsibleTrigger className="nav-item w-full justify-between group">
        <div className="flex items-center gap-2">
          {item.icon}
          <span className="font-medium">{item.title}</span>
        </div>
        <ChevronRight
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-90"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-6 space-y-0.5">
        {item.children.map((child) => (
          <Link
            key={child.href}
            to={child.href || "#"}
            className={cn(
              "nav-item text-muted-foreground",
              currentPath === child.href && "active"
            )}
          >
            <span>{child.title}</span>
            {child.badge && (
              <span className="ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded bg-foreground text-background">
                {child.badge}
              </span>
            )}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

// Mobile Sidebar
function MobileSidebar({
  navigation,
  onNavigate,
}: {
  navigation: NavItem[];
  onNavigate: () => void;
}) {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 border-b">
        <Link to="/" className="flex items-center gap-3" onClick={onNavigate}>
          <YomakeLogo className="w-8 h-8 rounded-lg" />
          <span className="font-bold">yomake /docs</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-1">
          {navigation.map((section) => (
            <MobileNavSection
              key={section.title}
              item={section}
              currentPath={location.pathname}
              onNavigate={onNavigate}
            />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}

function MobileNavSection({
  item,
  currentPath,
  onNavigate,
}: {
  item: NavItem;
  currentPath: string;
  onNavigate: () => void;
}) {
  const hasActiveChild = item.children?.some((child) => child.href === currentPath);
  const [isOpen, setIsOpen] = React.useState(hasActiveChild || false);

  if (!item.children) {
    return (
      <Link
        to={item.href || "#"}
        onClick={onNavigate}
        className={cn("nav-item", currentPath === item.href && "active")}
      >
        {item.icon}
        <span>{item.title}</span>
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="nav-item w-full justify-between">
        <div className="flex items-center gap-2">
          {item.icon}
          <span className="font-medium">{item.title}</span>
        </div>
        <ChevronRight
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-90"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-6 space-y-0.5">
        {item.children.map((child) => (
          <Link
            key={child.href}
            to={child.href || "#"}
            onClick={onNavigate}
            className={cn(
              "nav-item text-muted-foreground",
              currentPath === child.href && "active"
            )}
          >
            <span>{child.title}</span>
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

// Table of Contents Component
function TableOfContents() {
  const [activeId, setActiveId] = React.useState<string>("");

  const tocItems = [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "installation", title: "Installation", level: 2 },
    { id: "quick-start", title: "Quick Start", level: 2 },
    { id: "configuration", title: "Configuration", level: 2 },
    { id: "basic-usage", title: "Basic Usage", level: 3 },
    { id: "advanced", title: "Advanced", level: 3 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "api", title: "API Reference", level: 2 },
  ];

  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-sm mb-4 text-foreground">On this page</h4>
      <nav className="space-y-1">
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "toc-link",
              item.level === 3 && "pl-6",
              activeId === item.id && "active"
            )}
            onClick={() => setActiveId(item.id)}
          >
            {item.title}
          </a>
        ))}
      </nav>

      {/* Edit link */}
      <div className="pt-6 mt-6 border-t">
        <a
          href="#"
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          Edit this page on GitHub
        </a>
      </div>
    </div>
  );
}

export default DocLayout;
