import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Unidad1 from "./pages/Unidad1";
import Unidad2 from "./pages/Unidad2";
import Unidad3 from "./pages/Unidad3";
import Unidad4 from "./pages/Unidad4";
import Unidad5 from "./pages/Unidad5";
import Unidad6 from "./pages/Unidad6";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div id="skip-link-container">
          <a href="#main-content" className="skip-link">
            Saltar al contenido principal
          </a>
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/unidad-1" element={<Unidad1 />} />
          <Route path="/unidad-2" element={<Unidad2 />} />
          <Route path="/unidad-3" element={<Unidad3 />} />
          <Route path="/unidad-4" element={<Unidad4 />} />
          <Route path="/unidad-5" element={<Unidad5 />} />
          <Route path="/unidad-6" element={<Unidad6 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
