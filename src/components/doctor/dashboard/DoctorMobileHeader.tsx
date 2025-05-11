
import React from 'react';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DoctorMobileHeaderProps {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (isOpen: boolean) => void;
  activeSection: string;
}

export const DoctorMobileHeader: React.FC<DoctorMobileHeaderProps> = ({ 
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
          <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
            Espace Médecin
          </h1>
        </div>
        <div className="text-sm text-indigo-700 font-semibold">
          {activeSection === "requests" && "Demandes de consultation"}
          {activeSection === "active" && "Consultations actives"}
          {activeSection === "history" && "Historique"}
          {activeSection === "settings" && "Paramètres"}
        </div>
      </div>
    </header>
  );
};

export default DoctorMobileHeader;
