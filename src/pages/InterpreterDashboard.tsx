
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import InterpreterMobileHeader from '@/components/interpreter/dashboard/InterpreterMobileHeader';
import InterpreterSidebar from '@/components/interpreter/dashboard/InterpreterSidebar';
import InterpreterContent from '@/components/interpreter/dashboard/InterpreterContent';
import InterpreterProfileCompletion from '@/components/interpreter/InterpreterProfileCompletion';

const InterpreterDashboard = () => {
  const [activeSection, setActiveSection] = useState("available");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const isMobile = useIsMobile();

  // Pour la démonstration: vérifier si le profil est complété à partir du localStorage
  useEffect(() => {
    const isProfileCompleted = localStorage.getItem('interpreterProfileCompleted') === 'true';
    setProfileCompleted(isProfileCompleted);
  }, []);

  // Marquer le profil comme complété
  const handleProfileComplete = () => {
    localStorage.setItem('interpreterProfileCompleted', 'true');
    setProfileCompleted(true);
  };

  // Fermer la barre latérale mobile lors du changement de section
  useEffect(() => {
    if (mobileSidebarOpen && isMobile) {
      setMobileSidebarOpen(false);
    }
  }, [activeSection]);

  // Fermer la barre latérale en cliquant à l'extérieur sur mobile
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

  // Afficher la complétion du profil si ce n'est pas encore fait
  if (!profileCompleted) {
    return (
      <div className="flex flex-col min-h-screen">
        <InterpreterProfileCompletion onComplete={handleProfileComplete} />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <InterpreterMobileHeader 
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
        
        <InterpreterSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMobile={isMobile}
          mobileSidebarOpen={mobileSidebarOpen}
        />

        <InterpreterContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default InterpreterDashboard;
