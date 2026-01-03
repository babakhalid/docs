import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Documentation imports
import { DocLayout } from "./components/docs/DocLayout";
import DocsHome from "./pages/docs/DocsHome";
import DocPage from "./pages/docs/DocPage";

const queryClient = new QueryClient();

// Documentation wrapper component
function DocsWrapper({ children }: { children: React.ReactNode }) {
  return <DocLayout>{children}</DocLayout>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Documentation home page */}
          <Route path="/" element={<DocsWrapper><DocsHome /></DocsWrapper>} />

          {/* Dynamic documentation pages */}
          <Route path="/docs/:section/:slug" element={<DocsWrapper><DocPage /></DocsWrapper>} />

          {/* Legacy routes - redirect to new structure */}
          <Route path="/quickstart" element={<DocsWrapper><DocPage /></DocsWrapper>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* Built with Yomake referral badge */}
      <a
        href="https://yomake.ai/ref/YMKE-MJL6WPQ7"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          backgroundColor: '#000000',
          color: '#ffffff',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 500,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.2s ease',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
        onMouseOver={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'translateY(-2px)';
          target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        }}
        onMouseOut={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'translateY(0)';
          target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        }}
      >
        <span style={{ fontSize: '12px' }}>⚡</span>
        <span>Made with Yomake.ai</span>
      </a>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
