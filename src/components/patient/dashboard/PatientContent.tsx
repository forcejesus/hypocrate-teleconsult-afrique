import React from 'react';
import { motion } from 'framer-motion';
import PatientUpcomingConsultations from '../PatientUpcomingConsultations';
import PatientPendingConsultations from '../PatientPendingConsultations';
import PatientFindDoctor from '../PatientFindDoctor';
import PatientHistory from '../PatientHistory';
import PatientSettings from '../PatientSettings';

interface PatientContentProps {
  activeSection: string;
}

const PatientContent: React.FC<PatientContentProps> = ({ activeSection }) => {
  const getSectionTitle = (section: string) => {
    switch(section) {
      case "upcoming": return "Mes prochaines consultations";
      case "pending": return "Consultations en attente";
      case "find": return "Trouver un médecin";
      case "history": return "Historique de mes consultations";
      case "settings": return "Paramètres du compte";
      default: return "Mes prochaines consultations";
    }
  };

  const getSectionDescription = (section: string) => {
    switch(section) {
      case "upcoming": return "Consultations programmées et confirmées";
      case "pending": return "Demandes de consultation en cours de traitement";
      case "find": return "Recherchez et réservez une consultation avec un médecin";
      case "history": return "Consultations passées et rapports médicaux";
      case "settings": return "Gérez vos informations personnelles et préférences";
      default: return "Consultations programmées et confirmées";
    }
  };

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Section Title */}
        <div className="hidden md:block mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            {getSectionTitle(activeSection)}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            {getSectionDescription(activeSection)}
          </motion.p>
        </div>

        {/* Content Area */}
        <motion.div 
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={activeSection === 'find' ? '' : 'bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8'}
        >
          {activeSection === "upcoming" && <PatientUpcomingConsultations />}
          {activeSection === "pending" && <PatientPendingConsultations />}
          {activeSection === "find" && <PatientFindDoctor />}
          {activeSection === "history" && <PatientHistory />}
          {activeSection === "settings" && <PatientSettings />}
        </motion.div>
      </div>
    </main>
  );
};

export default PatientContent;
