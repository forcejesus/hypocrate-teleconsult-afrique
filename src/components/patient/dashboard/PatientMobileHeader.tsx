
import React from 'react';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PatientMobileHeaderProps {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (isOpen: boolean) => void;
  activeSection: string;
}

export const PatientMobileHeader: React.FC<PatientMobileHeaderProps> = ({ 
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
            Espace Patient
          </h1>
        </div>
        <div className="text-sm text-hypocrate-blue font-semibold">
          {activeSection === "upcoming" && "Rendez-vous"}
          {activeSection === "pending" && "En attente"}
          {activeSection === "find" && "Recherche"}
          {activeSection === "settings" && "Paramètres"}
        </div>
      </div>
    </header>
  );
};

export default PatientMobileHeader;
