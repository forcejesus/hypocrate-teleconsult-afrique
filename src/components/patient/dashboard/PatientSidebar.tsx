
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Search, History, Settings, Activity, Plus } from 'lucide-react';
import NavItem from './NavItem';
import LogoutButton from '@/components/auth/LogoutButton';
import { Button } from '@/components/ui/button';

interface PatientSidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isMobile: boolean;
  mobileSidebarOpen: boolean;
}

const PatientSidebar = ({ activeSection, setActiveSection, isMobile, mobileSidebarOpen }: PatientSidebarProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const navItems = [
    { id: 'upcoming', icon: <Calendar size={20} />, label: 'Mes rendez-vous', badge: 2 },
    { id: 'pending', icon: <Clock size={20} />, label: 'En attente', badge: 1 },
    { id: 'find-doctor', icon: <Search size={20} />, label: 'Trouver un médecin' },
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
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
            Espace Patient
          </h1>
          <p className="text-sm text-gray-500 mt-1">Gérez vos consultations</p>
        </div>

        {/* Quick Action Button */}
        <div className="px-2 mb-6">
          <Button 
            onClick={() => setActiveSection('find-doctor')}
            className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white rounded-xl h-12 shadow-lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Nouvelle consultation
          </Button>
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
          <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="w-4 h-4 text-hypocrate-blue" />
              <span className="text-sm font-medium text-hypocrate-blue">Statut</span>
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

export default PatientSidebar;
