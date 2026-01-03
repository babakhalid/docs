import * as React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CodeBlock, TerminalBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { DocCard, DocCardGrid } from "@/components/docs/DocCard";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  Puzzle,
  Code2,
  Rocket,
} from "lucide-react";

export function QuickStart() {
  return (
    <article className="docs-prose">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 not-prose">
        <Link to="/" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <span>/</span>
        <Link to="/" className="hover:text-foreground transition-colors">
          Getting Started
        </Link>
        <span>/</span>
        <span className="text-foreground">Quick Start</span>
      </nav>

      {/* Header */}
      <header className="mb-12 not-prose">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline" className="gap-1.5">
            <Clock className="w-3 h-3" />
            5 min read
          </Badge>
          <Badge className="bg-foreground text-background border-0">
            Beginner
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Quick Start Guide
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Get your first Yomake project up and running in under 5 minutes.
          No configuration required.
        </p>
      </header>

      {/* Prerequisites */}
      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have the following installed:</p>
        <ul>
          <li>
            <strong>Node.js 18+</strong> - Download from{" "}
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
              nodejs.org
            </a>
          </li>
          <li>
            <strong>npm, yarn, or pnpm</strong> - Package manager of your choice
          </li>
          <li>
            <strong>Git</strong> - For version control
          </li>
        </ul>

        <Callout type="info" title="Check your Node version">
          Run <code>node --version</code> in your terminal. You need v18.0.0 or higher.
        </Callout>
      </section>

      {/* Step 1 */}
      <section id="create-project">
        <h2>Step 1: Create a New Project</h2>
        <p>
          The fastest way to get started is using our CLI tool. Run the following
          command in your terminal:
        </p>

        <TerminalBlock commands={["npx create-yomake-app@latest my-app"]} />

        <p>You'll be prompted with a few questions:</p>

        <CodeBlock
          language="text"
          code={`? What is your project named? my-app
? Would you like to use TypeScript? Yes
? Which styling solution? Tailwind CSS
? Would you like to use the App Router? Yes
? Initialize a Git repository? Yes

Creating a new Yomake app in ./my-app...

✓ Installing dependencies
✓ Initializing project
✓ Setting up TypeScript
✓ Configuring Tailwind CSS
✓ Initializing Git repository

Success! Created my-app at ./my-app`}
        />
      </section>

      {/* Step 2 */}
      <section id="start-server">
        <h2>Step 2: Start the Development Server</h2>
        <p>Navigate to your project directory and start the development server:</p>

        <TerminalBlock commands={["cd my-app", "npm run dev"]} />

        <p>
          Open{" "}
          <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
            http://localhost:3000
          </a>{" "}
          in your browser. You should see the Yomake welcome page.
        </p>

        <Callout type="tip" title="Hot Reload">
          The development server includes hot module replacement. Any changes you make
          will be reflected instantly in the browser.
        </Callout>
      </section>

      {/* Step 3 */}
      <section id="first-component">
        <h2>Step 3: Create Your First Component</h2>
        <p>
          Let's create a simple component to make sure everything is working.
          Create a new file at <code>src/components/HelloWorld.tsx</code>:
        </p>

        <CodeBlock
          language="tsx"
          filename="src/components/HelloWorld.tsx"
          showLineNumbers
          code={`import { Button } from '@/components/ui/button'

interface HelloWorldProps {
  name: string
}

export function HelloWorld({ name }: HelloWorldProps) {
  return (
    <div className="p-8 rounded-lg bg-secondary border">
      <h2 className="text-2xl font-bold mb-4">
        Hello, {name}!
      </h2>
      <p className="text-muted-foreground mb-4">
        Welcome to your first Yomake component.
      </p>
      <Button>
        Get Started
      </Button>
    </div>
  )
}`}
        />

        <p>Now use it in your main page:</p>

        <CodeBlock
          language="tsx"
          filename="src/pages/Index.tsx"
          showLineNumbers
          highlightLines={[2, 8]}
          code={`import { HelloWorld } from '@/components/HelloWorld'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <HelloWorld name="Developer" />
    </main>
  )
}`}
        />
      </section>

      {/* Step 4 */}
      <section id="ai-generation">
        <h2>Step 4: Try AI Code Generation</h2>
        <p>
          Now for the magic! Use the Yomake AI to generate components. In your terminal,
          run:
        </p>

        <TerminalBlock commands={["npx yomake generate"]} />

        <p>Then describe what you want to build:</p>

        <CodeBlock
          language="text"
          code={`? What would you like to create?
> A responsive pricing table with three tiers,
  featuring a highlighted "popular" option,
  monthly/yearly toggle, and hover animations.

Generating component...

✓ Created src/components/PricingTable.tsx
✓ Created src/components/PricingCard.tsx
✓ Updated src/pages/pricing.tsx

Your pricing table is ready! Run 'npm run dev' to see it in action.`}
        />

        <Callout type="warning" title="API Key Required">
          AI generation requires a Yomake API key. Get your free key at{" "}
          <a href="https://yomake.ai/keys">yomake.ai/keys</a>
        </Callout>
      </section>

      {/* Project Structure */}
      <section id="project-structure">
        <h2>Project Structure</h2>
        <p>Here's what your project looks like:</p>

        <CodeBlock
          language="text"
          code={`my-app/
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn/ui components
│   │   └── ...           # Your custom components
│   ├── pages/
│   │   ├── Index.tsx     # Home page
│   │   └── ...           # Other pages
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── styles/           # Global styles
├── public/               # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts`}
        />
      </section>

      {/* What's Next */}
      <section id="next-steps" className="not-prose">
        <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
        <DocCardGrid columns={2}>
          <DocCard
            icon={Puzzle}
            title="Explore Components"
            description="Browse our library of 50+ pre-built components ready to use."
            href="/components"
          />
          <DocCard
            icon={Code2}
            title="AI Prompting Guide"
            description="Learn how to write better prompts for more accurate code generation."
            href="/prompting"
          />
          <DocCard
            icon={Rocket}
            title="Deploy Your App"
            description="Ship your app to production with one-click deployment."
            href="/config/deployment"
          />
          <DocCard
            icon={CheckCircle2}
            title="Best Practices"
            description="Follow our recommended patterns for scalable applications."
            href="/how-it-works"
          />
        </DocCardGrid>
      </section>

      {/* Page Navigation */}
      <nav className="flex items-center justify-between pt-12 mt-12 border-t not-prose">
        <Link
          to="/"
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <div>
            <div className="text-xs text-muted-foreground">Previous</div>
            <div className="font-medium">Introduction</div>
          </div>
        </Link>
        <Link
          to="/installation"
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-right"
        >
          <div>
            <div className="text-xs text-muted-foreground">Next</div>
            <div className="font-medium">Installation</div>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </nav>
    </article>
  );
}

export default QuickStart;
