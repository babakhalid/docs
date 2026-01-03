import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getAdjacentPages, getAllDocPages } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/components/docs/CodeBlock';

export function DocPage() {
  const { section, slug } = useParams<{ section: string; slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentPath = `/docs/${section}/${slug}`;
  const { prev, next } = getAdjacentPages(currentPath);

  useEffect(() => {
    async function loadMarkdown() {
      setLoading(true);
      setError(null);

      try {
        // Try to load the markdown file
        const response = await fetch(`/docs/${section}/${slug}.md`);

        if (!response.ok) {
          throw new Error('Documentation page not found');
        }

        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error('Error loading documentation:', err);
        setError('Failed to load documentation. This page may not exist yet.');
      } finally {
        setLoading(false);
      }
    }

    if (section && slug) {
      loadMarkdown();
    }
  }, [section, slug]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-secondary rounded w-3/4"></div>
        <div className="h-4 bg-secondary rounded w-full"></div>
        <div className="h-4 bg-secondary rounded w-5/6"></div>
        <div className="h-4 bg-secondary rounded w-4/6"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground">{error}</p>
        <p className="text-sm text-muted-foreground">
          Looking for: <code className="px-2 py-1 bg-secondary rounded">{currentPath}</code>
        </p>
        <Button asChild>
          <Link to="/">Back to Documentation Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Main Content */}
      <article className="docs-prose prose prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom heading renderer with anchor links
            h1: ({ children, ...props }) => (
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-0" {...props}>
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => (
              <h2 className="text-2xl font-bold mt-16 mb-6 pb-3 border-b" {...props}>
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3 className="text-xl font-semibold mt-10 mb-4" {...props}>
                {children}
              </h3>
            ),
            // Custom code block renderer
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';

              if (!inline && language) {
                return (
                  <CodeBlock
                    language={language}
                    code={String(children).replace(/\n$/, '')}
                    {...props}
                  />
                );
              }

              return (
                <code
                  className="px-1.5 py-0.5 rounded text-sm font-medium bg-secondary"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            // Custom link renderer
            a: ({ href, children, ...props }) => {
              const isInternal = href?.startsWith('/');
              const isAnchor = href?.startsWith('#');

              if (isInternal || isAnchor) {
                return (
                  <Link
                    to={href || '#'}
                    className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                    {...props}
                  >
                    {children}
                  </Link>
                );
              }

              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                  {...props}
                >
                  {children}
                </a>
              );
            },
            // Custom table renderer
            table: ({ children, ...props }) => (
              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm" {...props}>
                  {children}
                </table>
              </div>
            ),
            th: ({ children, ...props }) => (
              <th className="text-left p-3 bg-secondary font-semibold border-b-2" {...props}>
                {children}
              </th>
            ),
            td: ({ children, ...props }) => (
              <td className="p-3 border-b" {...props}>
                {children}
              </td>
            ),
            // Custom blockquote renderer
            blockquote: ({ children, ...props }) => (
              <blockquote
                className="border-l-2 border-foreground pl-5 italic text-muted-foreground my-8"
                {...props}
              >
                {children}
              </blockquote>
            ),
            // Lists
            ul: ({ children, ...props }) => (
              <ul className="mb-5 space-y-2" {...props}>
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol className="mb-5 space-y-2" {...props}>
                {children}
              </ol>
            ),
            li: ({ children, ...props }) => (
              <li className="text-muted-foreground leading-7" {...props}>
                {children}
              </li>
            ),
            // Paragraphs
            p: ({ children, ...props }) => (
              <p className="mb-5 text-muted-foreground leading-7" {...props}>
                {children}
              </p>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t">
        {prev ? (
          <Button variant="outline" asChild className="group">
            <Link to={prev.path}>
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium">{prev.title}</div>
              </div>
            </Link>
          </Button>
        ) : (
          <div></div>
        )}

        {next ? (
          <Button variant="outline" asChild className="group ml-auto">
            <Link to={next.path}>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium">{next.title}</div>
              </div>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        ) : (
          <div></div>
        )}
      </div>

      {/* Feedback Section */}
      <div className="pt-8 border-t">
        <p className="text-sm text-muted-foreground mb-2">Was this page helpful?</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Yes</Button>
          <Button size="sm" variant="outline">No</Button>
        </div>
      </div>
    </div>
  );
}

export default DocPage;
