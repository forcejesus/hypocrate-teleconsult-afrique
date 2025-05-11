
import React from 'react';
import { motion } from 'framer-motion';
import { PatientUpcomingConsultations } from '@/components/patient/PatientUpcomingConsultations';
import { PatientPendingConsultations } from '@/components/patient/PatientPendingConsultations';
import { PatientFindDoctor } from '@/components/patient/PatientFindDoctor';
import { PatientSettings } from '@/components/patient/PatientSettings';

interface PatientContentProps {
  activeSection: string;
}

export const PatientContent: React.FC<PatientContentProps> = ({ activeSection }) => {
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
  );
};

export default PatientContent;
