
import React from 'react';
import { X, Menu, Bell, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  const getSectionTitle = (section: string) => {
    switch(section) {
      case "requests": return "Demandes reçues";
      case "active": return "Consultations actives";
      case "history": return "Historique";
      case "settings": return "Paramètres";
      default: return "Demandes reçues";
    }
  };

  return (
    <header className="bg-white shadow-sm md:hidden border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Button
            id="mobile-menu-button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="mr-3 hover:bg-gray-100"
          >
            {mobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <div>
            <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
              {getSectionTitle(activeSection)}
            </h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Calendar size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-purple-500">
              5
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DoctorMobileHeader;
