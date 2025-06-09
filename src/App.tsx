
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CommentCaMarche from "./pages/CommentCaMarche";
import NosMedecins from "./pages/NosMedecins";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import Confidentialite from "./pages/Confidentialite";
import Cgu from "./pages/Cgu";
import Consentement from "./pages/Consentement";
import ConseilsMedicaux from "./pages/ConseilsMedicaux";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import InterpreterDashboard from "./pages/InterpreterDashboard";
import DoctorBooking from "./pages/DoctorBooking";
import NotFound from "./pages/NotFound";
import ServicePatients from "./pages/ServicePatients";
import ServiceMedecins from "./pages/ServiceMedecins";
import ServiceInterpretes from "./pages/ServiceInterpretes";
import Faq from "./pages/Faq";
import Tarifs from "./pages/Tarifs";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
            <Route path="/nos-medecins" element={<NosMedecins />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/consentement" element={<Consentement />} />
            <Route path="/conseils-medicaux" element={<ConseilsMedicaux />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/interpreter/dashboard" element={<InterpreterDashboard />} />
            <Route path="/doctor/:doctorId" element={<DoctorBooking />} />
            <Route path="/services/patients" element={<ServicePatients />} />
            <Route path="/services/medecins" element={<ServiceMedecins />} />
            <Route path="/services/interpretes" element={<ServiceInterpretes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
