import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = false,
  highlightLines = [],
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className={cn("code-block group my-6", className)}>
      {/* Header */}
      <div className="code-block-header">
        <div className="flex items-center gap-3">
          <div className="code-block-dots">
            <span className="code-block-dot code-block-dot-red" />
            <span className="code-block-dot code-block-dot-yellow" />
            <span className="code-block-dot code-block-dot-green" />
          </div>
          {filename && (
            <span className="text-xs text-muted-foreground font-mono">
              {filename}
            </span>
          )}
          {!filename && language && (
            <span className="text-xs text-muted-foreground font-mono uppercase">
              {language}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-7 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span className="ml-1.5 text-xs">{copied ? "Copied!" : "Copy"}</span>
        </Button>
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto">
        <code className={`language-${language}`}>
          {lines.map((line, index) => (
            <div
              key={index}
              className={cn(
                "px-4",
                highlightLines.includes(index + 1) &&
                  "bg-primary/10 border-l-2 border-primary"
              )}
            >
              {showLineNumbers && (
                <span className="inline-block w-8 text-muted-foreground/50 select-none text-right mr-4">
                  {index + 1}
                </span>
              )}
              {line || " "}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

// Terminal/Command block variant
interface TerminalBlockProps {
  commands: string[];
  className?: string;
}

export function TerminalBlock({ commands, className }: TerminalBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(commands.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("code-block group my-6", className)}>
      <div className="code-block-header">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground font-mono">Terminal</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-7 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>
      <pre className="p-4">
        {commands.map((cmd, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-emerald-500 select-none">$</span>
            <span>{cmd}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

// Inline code component
interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "px-1.5 py-0.5 rounded-md text-sm font-medium bg-muted border",
        className
      )}
    >
      {children}
    </code>
  );
}

export default CodeBlock;
