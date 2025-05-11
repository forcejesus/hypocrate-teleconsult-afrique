
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import PatientMobileHeader from '@/components/patient/dashboard/PatientMobileHeader';
import PatientSidebar from '@/components/patient/dashboard/PatientSidebar';
import PatientContent from '@/components/patient/dashboard/PatientContent';

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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PatientMobileHeader 
        mobileSidebarOpen={mobileSidebarOpen} 
        setMobileSidebarOpen={setMobileSidebarOpen}
        activeSection={activeSection}
      />

      <div className="flex flex-1">
        {/* Mobile Sidebar Overlay */}
        {isMobile && (
          <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
              mobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}
        
        <PatientSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMobile={isMobile}
          mobileSidebarOpen={mobileSidebarOpen}
        />

        <PatientContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default PatientDashboard;
