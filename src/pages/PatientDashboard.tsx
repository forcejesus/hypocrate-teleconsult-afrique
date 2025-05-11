
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PatientUpcomingConsultations } from '@/components/patient/PatientUpcomingConsultations';
import { PatientPendingConsultations } from '@/components/patient/PatientPendingConsultations';
import { PatientFindDoctor } from '@/components/patient/PatientFindDoctor';
import { motion } from 'framer-motion';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
              Bienvenue dans votre espace patient
            </h1>
            <p className="text-gray-600 mt-2">
              Gérez vos consultations et trouvez un médecin disponible
            </p>
          </motion.div>

          <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upcoming" className="text-sm md:text-base">Consultations à venir</TabsTrigger>
              <TabsTrigger value="pending" className="text-sm md:text-base">Consultations en attente</TabsTrigger>
              <TabsTrigger value="find" className="text-sm md:text-base">Trouver un médecin</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-0">
              <PatientUpcomingConsultations />
            </TabsContent>
            
            <TabsContent value="pending" className="mt-0">
              <PatientPendingConsultations />
            </TabsContent>
            
            <TabsContent value="find" className="mt-0">
              <PatientFindDoctor />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PatientDashboard;
