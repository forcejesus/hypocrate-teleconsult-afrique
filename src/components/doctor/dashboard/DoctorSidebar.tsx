
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Video, History, Settings, Activity } from 'lucide-react';
import NavItem from './NavItem';
import LogoutButton from '@/components/auth/LogoutButton';

interface DoctorSidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isMobile: boolean;
  mobileSidebarOpen: boolean;
}

const DoctorSidebar = ({ activeSection, setActiveSection, isMobile, mobileSidebarOpen }: DoctorSidebarProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const navItems = [
    { id: 'requests', icon: <ClipboardList size={20} />, label: 'Demandes reçues' },
    { id: 'active', icon: <Video size={20} />, label: 'Consultations actives' },
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
          ? 'fixed left-0 top-0 h-full w-72 transform transition-transform duration-300 ease-in-out border-r border-gray-200' +
            (mobileSidebarOpen ? ' translate-x-0' : ' -translate-x-full')
          : 'sticky top-0 h-screen w-72 flex-shrink-0 border-r border-gray-100'
      }`}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <div className="py-6 px-4 flex flex-col h-full">
        <div className="px-2 mb-8">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
            Espace Médecin
          </h1>
          <p className="text-sm text-gray-500 mt-1">Gérez vos consultations</p>
        </div>

        <div className="space-y-2 px-2 flex-1 overflow-auto">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeSection === item.id}
              onClick={handleClick}
            />
          ))}
        </div>

        <div className="mt-auto border-t border-gray-100 pt-4 px-2">
          <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Statut</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600">En ligne</span>
            </div>
          </div>
          
          <LogoutButton />
        </div>
      </div>
    </motion.aside>
  );
};

export default DoctorSidebar;
