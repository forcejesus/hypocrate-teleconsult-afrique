
import React from 'react';
import { Calendar, History, DollarSign, Settings, Search } from 'lucide-react';
import NavItem from '../../patient/dashboard/NavItem';

interface InterpreterSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile: boolean;
  mobileSidebarOpen: boolean;
}

export const InterpreterSidebar: React.FC<InterpreterSidebarProps> = ({
  activeSection,
  setActiveSection,
  isMobile,
  mobileSidebarOpen
}) => {
  return <aside id="mobile-sidebar" className={`
        ${isMobile ? `fixed top-0 left-0 h-full z-50 w-[270px] transform transition-transform duration-300 ease-in-out 
            ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}` : 'w-64 h-screen sticky top-0'}
        bg-white shadow-md overflow-y-auto flex flex-col
      `}>
      {/* Sidebar Header */}
      <div className="p-5 border-b">
        <h2 className="text-xl font-bold text-hypocrate-blue">Hypocrate</h2>
        <p className="text-sm text-gray-500 mt-1">Espace Interprète</p>
      </div>
      
      {/* Navigation Links */}
      <nav className="p-4 space-y-2 flex-1 px-0 py-0 mx-0 my-0 bg-[#c3c3c3]/[0.18]">
        <NavItem id="available" icon={<Search className="text-hypocrate-blue" size={20} />} label="Consultations disponibles" isActive={activeSection === "available"} onClick={setActiveSection} />
        <NavItem id="myconsultations" icon={<Calendar className="text-hypocrate-blue" size={20} />} label="Mes consultations" isActive={activeSection === "myconsultations"} onClick={setActiveSection} />
        <NavItem id="history" icon={<History className="text-hypocrate-blue" size={20} />} label="Historique" isActive={activeSection === "history"} onClick={setActiveSection} />
        <NavItem id="settings" icon={<Settings className="text-hypocrate-blue" size={20} />} label="Paramètres" isActive={activeSection === "settings"} onClick={setActiveSection} />
      </nav>
      
      {/* User Info */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-hypocrate-blue text-white flex items-center justify-center">
            <Calendar size={20} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Interprète</p>
            <p className="text-xs text-gray-500">interpreter@example.com</p>
          </div>
        </div>
      </div>
    </aside>;
};

export default InterpreterSidebar;
