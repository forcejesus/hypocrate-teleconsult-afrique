
import React from 'react';
import { motion } from 'framer-motion';
import DoctorConsultationRequests from '../DoctorConsultationRequests';
import DoctorActiveConsultations from '../DoctorActiveConsultations';
import DoctorHistory from '../DoctorHistory';
import DoctorSettings from '../DoctorSettings';

interface DoctorContentProps {
  activeSection: string;
}

const DoctorContent: React.FC<DoctorContentProps> = ({ activeSection }) => {
  const getSectionTitle = (section: string) => {
    switch(section) {
      case "requests": return "Demandes de consultation";
      case "active": return "Consultations actives";
      case "history": return "Historique des consultations";
      case "settings": return "Paramètres du compte";
      default: return "Demandes de consultation";
    }
  };

  const getSectionDescription = (section: string) => {
    switch(section) {
      case "requests": return "Nouvelles demandes de consultation en attente de votre réponse";
      case "active": return "Consultations programmées et en cours";
      case "history": return "Consultations passées et rapports médicaux";
      case "settings": return "Gérez vos informations professionnelles et disponibilités";
      default: return "Nouvelles demandes de consultation en attente de votre réponse";
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
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
        >
          {activeSection === "requests" && <DoctorConsultationRequests />}
          {activeSection === "active" && <DoctorActiveConsultations />}
          {activeSection === "history" && <DoctorHistory />}
          {activeSection === "settings" && <DoctorSettings />}
        </motion.div>
      </div>
    </main>
  );
};

export default DoctorContent;
