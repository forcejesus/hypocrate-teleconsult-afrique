
import React from 'react';
import { List, Video, History, FilePen, Settings } from 'lucide-react';
import NavItem from '@/components/doctor/dashboard/NavItem';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface DoctorSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile: boolean;
  mobileSidebarOpen: boolean;
}

const DoctorSidebar: React.FC<DoctorSidebarProps> = ({
  activeSection,
  setActiveSection,
  isMobile,
  mobileSidebarOpen
}) => {
  // For demo purposes, hardcoded doctor information
  const doctor = {
    name: "Dr. Jean Martin",
    specialty: "Cardiologie",
    avatar: "/placeholder.svg"
  };
  
  return (
    <aside
      id="mobile-sidebar"
      className={`
        bg-white border-r border-gray-200
        ${isMobile 
          ? `fixed left-0 top-0 bottom-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
              mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }` 
          : 'w-64 min-w-64 min-h-screen sticky top-0'
        }
      `}
    >
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 border-2 border-indigo-100">
              <AvatarImage src={doctor.avatar} alt={doctor.name} />
              <AvatarFallback className="bg-indigo-100 text-indigo-700 font-semibold">
                {doctor.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          <NavItem 
            id="requests"
            icon={<List className="w-5 h-5 mr-3 text-indigo-600" />}
            label="Demandes de consultation"
            isActive={activeSection === "requests"}
            onClick={setActiveSection}
          />
          <NavItem 
            id="active"
            icon={<Video className="w-5 h-5 mr-3 text-indigo-600" />}
            label="Consultations actives"
            isActive={activeSection === "active"}
            onClick={setActiveSection}
          />
          <NavItem 
            id="history"
            icon={<History className="w-5 h-5 mr-3 text-indigo-600" />}
            label="Historique"
            isActive={activeSection === "history"}
            onClick={setActiveSection}
          />
          <NavItem 
            id="settings"
            icon={<Settings className="w-5 h-5 mr-3 text-indigo-600" />}
            label="Paramètres"
            isActive={activeSection === "settings"}
            onClick={setActiveSection}
          />
        </nav>
        
        {/* Version Info */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">Hypocrate © 2025</p>
        </div>
      </div>
    </aside>
  );
};

export default DoctorSidebar;
