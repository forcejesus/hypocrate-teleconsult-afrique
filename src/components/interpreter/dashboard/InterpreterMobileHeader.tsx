
import React from 'react';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InterpreterMobileHeaderProps {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (isOpen: boolean) => void;
  activeSection: string;
}

export const InterpreterMobileHeader: React.FC<InterpreterMobileHeaderProps> = ({ 
  mobileSidebarOpen, 
  setMobileSidebarOpen,
  activeSection
}) => {
  return (
    <header className="bg-white shadow-sm md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Button
            id="mobile-menu-button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="mr-2"
          >
            {mobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
            Espace Interprète
          </h1>
        </div>
        <div className="text-sm text-hypocrate-blue font-semibold">
          {activeSection === "available" && "Consultations disponibles"}
          {activeSection === "myconsultations" && "Mes consultations"}
          {activeSection === "history" && "Historique"}
          {activeSection === "settings" && "Paramètres"}
        </div>
      </div>
    </header>
  );
};

export default InterpreterMobileHeader;
