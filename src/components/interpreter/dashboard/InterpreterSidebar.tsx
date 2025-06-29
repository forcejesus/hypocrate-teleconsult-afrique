
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, History, Settings, Languages, Activity } from 'lucide-react';
import NavItem from '@/components/patient/dashboard/NavItem';
import LogoutButton from '@/components/auth/LogoutButton';

interface InterpreterSidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isMobile: boolean;
  mobileSidebarOpen: boolean;
}

const InterpreterSidebar = ({ activeSection, setActiveSection, isMobile, mobileSidebarOpen }: InterpreterSidebarProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const navItems = [
    { id: 'available', icon: <Globe size={20} />, label: 'Consultations disponibles', badge: 5 },
    { id: 'myconsultations', icon: <MessageSquare size={20} />, label: 'Mes consultations', badge: 2 },
    { id: 'history', icon: <History size={20} />, label: 'Historique' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Paramètres' },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <motion.aside 
      id="mobile-sidebar"
      className={`bg-white shadow-lg z-50 flex flex-col ${
        isMobile 
          ? 'fixed left-0 top-0 h-full w-80 transform transition-transform duration-300 ease-in-out border-r border-gray-200' +
            (mobileSidebarOpen ? ' translate-x-0' : ' -translate-x-full')
          : 'sticky top-0 h-screen w-80 flex-shrink-0 border-r border-gray-100'
      }`}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <div className="py-6 px-4 flex flex-col h-full">
        <div className="px-2 mb-8">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">
            Espace Interprète
          </h1>
          <p className="text-sm text-gray-500 mt-1">Gérez vos services d'interprétation</p>
        </div>

        <div className="space-y-2 px-2 flex-1 overflow-auto">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              isActive={activeSection === item.id}
              onClick={handleClick}
            />
          ))}
        </div>

        <div className="mt-auto border-t border-gray-100 pt-4 px-2">
          <div className="mb-4 p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl border border-teal-100">
            <div className="flex items-center space-x-2 mb-2">
              <Languages className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-700">Langues</span>
            </div>
            <div className="text-xs text-gray-600 mb-2">
              Français, Wolof, Arabe
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-3 h-3 text-teal-600" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600">Disponible</span>
              </div>
            </div>
          </div>
          
          <LogoutButton />
        </div>
      </div>
    </motion.aside>
  );
};

export default InterpreterSidebar;
