
import React from 'react';
import { Calendar, Settings, UserRound, Search } from 'lucide-react';
import NavItem from './NavItem';

interface PatientSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile: boolean;
  mobileSidebarOpen: boolean;
}

export const PatientSidebar: React.FC<PatientSidebarProps> = ({ 
  activeSection, 
  setActiveSection,
  isMobile,
  mobileSidebarOpen
}) => {
  return (
    <aside
      id="mobile-sidebar"
      className={`
        ${isMobile 
          ? `fixed top-0 left-0 h-full z-50 w-[270px] transform transition-transform duration-300 ease-in-out 
            ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
          : 'w-64 h-screen sticky top-0'
        }
        bg-white shadow-md overflow-y-auto flex flex-col
      `}
    >
      {/* Sidebar Header */}
      <div className="p-5 border-b">
        <h2 className="text-xl font-bold text-hypocrate-blue">Hypocrate</h2>
        <p className="text-sm text-gray-500 mt-1">Votre espace santé</p>
      </div>
      
      {/* Navigation Links */}
      <nav className="p-4 space-y-2 flex-1">
        <NavItem 
          id="upcoming" 
          icon={<Calendar className="text-hypocrate-blue" size={20} />} 
          label="Consultations à venir"
          isActive={activeSection === "upcoming"}
          onClick={setActiveSection}
        />
        <NavItem 
          id="pending" 
          icon={<UserRound className="text-hypocrate-blue" size={20} />} 
          label="Consultations en attente"
          isActive={activeSection === "pending"}
          onClick={setActiveSection}
        />
        <NavItem 
          id="find" 
          icon={<Search className="text-hypocrate-blue" size={20} />} 
          label="Trouver un médecin"
          isActive={activeSection === "find"}
          onClick={setActiveSection}
        />
        <NavItem 
          id="settings" 
          icon={<Settings className="text-hypocrate-blue" size={20} />} 
          label="Paramètres"
          isActive={activeSection === "settings"}
          onClick={setActiveSection}
        />
      </nav>
      
      {/* User Info */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-hypocrate-blue text-white flex items-center justify-center">
            <UserRound size={20} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Patient</p>
            <p className="text-xs text-gray-500">patient@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PatientSidebar;
