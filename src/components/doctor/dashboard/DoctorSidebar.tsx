
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Phone, History, Settings } from 'lucide-react';
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
    { id: 'requests', icon: <ClipboardList size={20} />, label: 'Demandes de consultation' },
    { id: 'active', icon: <Phone size={20} />, label: 'Consultations actives' },
    { id: 'history', icon: <History size={20} />, label: 'Historique' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Paramètres' },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <motion.aside 
      id="mobile-sidebar"
      className={`bg-white shadow-md z-50 flex flex-col ${
        isMobile 
          ? 'fixed left-0 top-0 h-full w-64 transform transition-transform duration-300 ease-in-out' +
            (mobileSidebarOpen ? ' translate-x-0' : ' -translate-x-full')
          : 'sticky top-0 h-screen w-64 flex-shrink-0'
      }`}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <div className="py-6 px-3 flex flex-col h-full">
        <div className="px-4 mb-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Espace Médecin
          </h1>
          <p className="text-sm text-gray-500">Gérez vos consultations</p>
        </div>

        <div className="space-y-1 px-2 flex-1 overflow-auto">
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

        <div className="mt-auto border-t pt-3 px-2">
          <LogoutButton />
        </div>
      </div>
    </motion.aside>
  );
};

export default DoctorSidebar;
