
import React from 'react';
import { X, Menu, Bell, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  const getSectionTitle = (section: string) => {
    switch(section) {
      case "upcoming": return "Mes RDV";
      case "pending": return "En attente";
      case "find-doctor": return "Trouver médecin";
      case "history": return "Historique";
      case "settings": return "Paramètres";
      default: return "Mes RDV";
    }
  };

  return (
    <header className="bg-white shadow-sm md:hidden border-b border-gray-100 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center flex-1 min-w-0">
          <Button
            id="mobile-menu-button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="mr-3 hover:bg-gray-100 flex-shrink-0"
          >
            {mobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green truncate">
              {getSectionTitle(activeSection)}
            </h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button 
            variant="default" 
            size="sm"
            className="bg-hypocrate-blue hover:bg-blue-600 text-white text-xs px-3 py-2 h-8 whitespace-nowrap"
          >
            <Plus size={14} className="mr-1" />
            <span className="hidden xs:inline">Nouvelle</span>
            <span className="xs:hidden">RDV</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative flex-shrink-0 h-8 w-8">
            <Bell size={18} />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] bg-hypocrate-blue flex items-center justify-center">
              3
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default PatientMobileHeader;
