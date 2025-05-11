
import { useState, useEffect } from 'react';
import { PatientUpcomingConsultations } from '@/components/patient/PatientUpcomingConsultations';
import { PatientPendingConsultations } from '@/components/patient/PatientPendingConsultations';
import { PatientFindDoctor } from '@/components/patient/PatientFindDoctor';
import { PatientSettings } from '@/components/patient/PatientSettings';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, Settings, UserRound, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const PatientDashboard = () => {
  const [activeSection, setActiveSection] = useState("upcoming");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Close mobile sidebar when changing sections
  useEffect(() => {
    if (mobileSidebarOpen && isMobile) {
      setMobileSidebarOpen(false);
    }
  }, [activeSection]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar');
      const menuButton = document.getElementById('mobile-menu-button');
      
      if (sidebar && 
          mobileSidebarOpen && 
          !sidebar.contains(event.target as Node) && 
          menuButton && 
          !menuButton.contains(event.target as Node)) {
        setMobileSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileSidebarOpen]);

  const renderContent = () => {
    switch(activeSection) {
      case 'upcoming':
        return <PatientUpcomingConsultations />;
      case 'pending':
        return <PatientPendingConsultations />;
      case 'find':
        return <PatientFindDoctor />;
      case 'settings':
        return <PatientSettings />;
      default:
        return <PatientUpcomingConsultations />;
    }
  };

  const NavItem = ({ id, icon, label }) => {
    const isActive = activeSection === id;
    return (
      <button
        onClick={() => setActiveSection(id)}
        className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
          isActive 
            ? 'bg-hypocrate-lightBlue text-hypocrate-blue font-medium' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span className="ml-3">{label}</span>
      </button>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Button
              id="mobile-menu-button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="mr-2"
            >
              {mobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
              Espace Patient
            </h1>
          </div>
          <div className="text-sm text-hypocrate-blue font-semibold">
            {activeSection === "upcoming" && "Rendez-vous"}
            {activeSection === "pending" && "En attente"}
            {activeSection === "find" && "Recherche"}
            {activeSection === "settings" && "Paramètres"}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Mobile Sidebar Overlay */}
        {isMobile && (
          <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
              mobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}
        
        {/* Sidebar for both Mobile and Desktop */}
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
            />
            <NavItem 
              id="pending" 
              icon={<UserRound className="text-hypocrate-blue" size={20} />} 
              label="Consultations en attente" 
            />
            <NavItem 
              id="find" 
              icon={<Search className="text-hypocrate-blue" size={20} />} 
              label="Trouver un médecin" 
            />
            <NavItem 
              id="settings" 
              icon={<Settings className="text-hypocrate-blue" size={20} />} 
              label="Paramètres" 
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

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 h-screen overflow-y-auto">
          {/* Desktop Section Title */}
          <div className="hidden md:block mb-6">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
              {activeSection === "upcoming" && "Consultations à venir"}
              {activeSection === "pending" && "Consultations en attente"}
              {activeSection === "find" && "Trouver un médecin"}
              {activeSection === "settings" && "Paramètres"}
            </h1>
            <p className="text-gray-600 mt-2">
              {activeSection === "upcoming" && "Vos rendez-vous à venir"}
              {activeSection === "pending" && "Consultations en cours de validation"}
              {activeSection === "find" && "Trouvez un médecin disponible"}
              {activeSection === "settings" && "Gérez vos informations personnelles"}
            </p>
          </div>

          {/* Content Area */}
          <motion.div 
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-4 md:p-6 h-full"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
