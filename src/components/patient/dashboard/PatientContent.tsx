
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
      case 'find-doctor':
        return <PatientFindDoctor />;
      case 'history':
        return <PatientUpcomingConsultations />; // Temporary, should be history component
      case 'settings':
        return <PatientSettings />;
      default:
        return <PatientUpcomingConsultations />;
    }
  };

  const getSectionTitle = (section: string) => {
    switch(section) {
      case "upcoming": return "Mes rendez-vous";
      case "pending": return "En attente de confirmation";
      case "find-doctor": return "Trouver un médecin";
      case "history": return "Historique des consultations";
      case "settings": return "Paramètres du compte";
      default: return "Mes rendez-vous";
    }
  };

  const getSectionDescription = (section: string) => {
    switch(section) {
      case "upcoming": return "Vos prochaines consultations confirmées";
      case "pending": return "Consultations en cours de validation";
      case "find-doctor": return "Trouvez un médecin disponible dans votre langue";
      case "history": return "Consultations passées et rapports médicaux";
      case "settings": return "Gérez vos informations personnelles et préférences";
      default: return "Vos prochaines consultations confirmées";
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
          {renderContent()}
        </motion.div>
      </div>
    </main>
  );
};

export default PatientContent;
