
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarDays, Search, Settings, SquarePlus } from 'lucide-react';
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
    { id: 'upcoming', icon: <Clock size={20} />, label: 'Rendez-vous à venir' },
    { id: 'history', icon: <CalendarDays size={20} />, label: 'Historique' },
    { id: 'find-doctor', icon: <Search size={20} />, label: 'Trouver un médecin' },
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
          <h1 className="text-xl font-bold text-gray-800">
            Espace Patient
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
          <div className="mb-4">
            <NavItem
              id="new-consultation"
              icon={<SquarePlus size={20} />}
              label="Nouvelle consultation"
              isActive={false}
              onClick={() => window.location.href = '/nos-medecins'}
            />
          </div>
          
          <LogoutButton />
        </div>
      </div>
    </motion.aside>
  );
};

export default PatientSidebar;
