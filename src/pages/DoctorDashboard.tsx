
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import DoctorMobileHeader from '@/components/doctor/dashboard/DoctorMobileHeader';
import DoctorSidebar from '@/components/doctor/dashboard/DoctorSidebar';
import DoctorContent from '@/components/doctor/dashboard/DoctorContent';
import DoctorProfileCompletion from '@/components/doctor/DoctorProfileCompletion';

const DoctorDashboard = () => {
  const [activeSection, setActiveSection] = useState("requests");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const isMobile = useIsMobile();

  // For demo purposes: Check if profile is completed from localStorage
  useEffect(() => {
    const isProfileCompleted = localStorage.getItem('doctorProfileCompleted') === 'true';
    setProfileCompleted(isProfileCompleted);
  }, []);

  // Mark profile as completed
  const handleProfileComplete = () => {
    localStorage.setItem('doctorProfileCompleted', 'true');
    setProfileCompleted(true);
  };

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

  // Show profile completion if not yet completed
  if (!profileCompleted) {
    return (
      <div className="flex flex-col min-h-screen">
        <DoctorProfileCompletion onComplete={handleProfileComplete} />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DoctorMobileHeader 
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
        
        <DoctorSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMobile={isMobile}
          mobileSidebarOpen={mobileSidebarOpen}
        />

        <DoctorContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default DoctorDashboard;
