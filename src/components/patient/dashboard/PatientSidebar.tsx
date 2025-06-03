
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, History, Search, Settings, Plus } from 'lucide-react';
import NavItem from './NavItem';
import LogoutButton from '@/components/auth/LogoutButton';

interface PatientSidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isMobile: boolean;
  mobileSidebarOpen: boolean;
}

const PatientSidebar = ({ activeSection, setActiveSection, isMobile, mobileSidebarOpen }: PatientSidebarProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const navItems = [
    { id: 'upcoming', icon: <Clock size={20} />, label: 'Mes rendez-vous' },
    { id: 'history', icon: <History size={20} />, label: 'Historique' },
    { id: 'find-doctor', icon: <Search size={20} />, label: 'Trouver un médecin' },
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
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
            Espace Patient
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
          <div className="mb-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/nos-medecins'}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Plus size={20} />
              <span>Nouvelle consultation</span>
            </motion.button>
          </div>
          
          <LogoutButton />
        </div>
      </div>
    </motion.aside>
  );
};

export default PatientSidebar;
