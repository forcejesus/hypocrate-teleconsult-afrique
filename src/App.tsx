
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import CommentCaMarche from "./pages/CommentCaMarche";
import NosMedecins from "./pages/NosMedecins";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import ConseilsMedicaux from "./pages/ConseilsMedicaux";
import Confidentialite from "./pages/Confidentialite";
import Cgu from "./pages/Cgu";
import Consentement from "./pages/Consentement";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
            <Route path="/nos-medecins" element={<NosMedecins />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/conseils-medicaux" element={<ConseilsMedicaux />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/consentement" element={<Consentement />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
