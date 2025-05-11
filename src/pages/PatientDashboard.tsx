
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PatientUpcomingConsultations } from '@/components/patient/PatientUpcomingConsultations';
import { PatientPendingConsultations } from '@/components/patient/PatientPendingConsultations';
import { PatientFindDoctor } from '@/components/patient/PatientFindDoctor';
import { PatientSettings } from '@/components/patient/PatientSettings';
import { motion } from 'framer-motion';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset 
} from "@/components/ui/sidebar";
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, Settings, UserRound, Search } from 'lucide-react';

const PatientDashboard = () => {
  const [activeSection, setActiveSection] = useState("upcoming");
  const isMobile = useIsMobile();

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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SidebarProvider>
        <div className="flex flex-1 w-full">
          <Sidebar>
            <SidebarHeader className="border-b px-3 py-4">
              <div className="text-xl font-semibold text-sidebar-foreground">
                Espace Patient
              </div>
              {!isMobile && (
                <p className="text-sm text-muted-foreground">
                  Gérez vos consultations
                </p>
              )}
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={activeSection === "upcoming"} 
                    onClick={() => setActiveSection("upcoming")}
                    tooltip="Consultations à venir"
                  >
                    <Calendar className="mr-2" size={20} />
                    <span>Consultations à venir</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={activeSection === "pending"} 
                    onClick={() => setActiveSection("pending")}
                    tooltip="Consultations en attente"
                  >
                    <UserRound className="mr-2" size={20} />
                    <span>Consultations en attente</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={activeSection === "find"} 
                    onClick={() => setActiveSection("find")}
                    tooltip="Trouver un médecin"
                  >
                    <Search className="mr-2" size={20} />
                    <span>Trouver un médecin</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={activeSection === "settings"} 
                    onClick={() => setActiveSection("settings")}
                    tooltip="Paramètres"
                  >
                    <Settings className="mr-2" size={20} />
                    <span>Paramètres</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          
          <SidebarInset className="p-4 md:p-6">
            <div className="container mx-auto px-0 md:px-4 py-4">
              <motion.div 
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="flex items-center">
                  {isMobile && <SidebarTrigger className="mr-3" />}
                  <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
                    {activeSection === "upcoming" && "Consultations à venir"}
                    {activeSection === "pending" && "Consultations en attente"}
                    {activeSection === "find" && "Trouver un médecin"}
                    {activeSection === "settings" && "Paramètres"}
                  </h1>
                </div>
                <p className="text-gray-600 mt-2">
                  {activeSection === "upcoming" && "Vos rendez-vous à venir"}
                  {activeSection === "pending" && "Consultations en cours de validation"}
                  {activeSection === "find" && "Trouvez un médecin disponible"}
                  {activeSection === "settings" && "Gérez vos informations personnelles"}
                </p>
              </motion.div>

              <div className="mt-0">
                {renderContent()}
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <Footer />
    </div>
  );
};

export default PatientDashboard;
