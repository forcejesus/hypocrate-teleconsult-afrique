import React from 'react';
import { motion } from 'framer-motion';
import InterpreterAvailableConsultations from '../InterpreterAvailableConsultations';
import InterpreterMyConsultations from '../InterpreterMyConsultations';
import InterpreterHistory from '../InterpreterHistory';
import InterpreterSettings from '../InterpreterSettings';

interface InterpreterContentProps {
  activeSection: string;
}

const InterpreterContent: React.FC<InterpreterContentProps> = ({ activeSection }) => {
  const getSectionTitle = (section: string) => {
    switch(section) {
      case "available": return "Consultations disponibles";
      case "my": return "Mes consultations";
      case "history": return "Historique des consultations";
      case "settings": return "Paramètres du compte";
      default: return "Consultations disponibles";
    }
  };

  const getSectionDescription = (section: string) => {
    switch(section) {
      case "available": return "Liste des consultations disponibles pour l'interprétation";
      case "my": return "Consultations que vous avez acceptées et en cours";
      case "history": return "Historique de vos consultations passées";
      case "settings": return "Gérez vos informations personnelles et préférences";
      default: return "Liste des consultations disponibles pour l'interprétation";
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
          {activeSection === "available" && <InterpreterAvailableConsultations />}
          {activeSection === "my" && <InterpreterMyConsultations />}
          {activeSection === "history" && <InterpreterHistory />}
          {activeSection === "settings" && <InterpreterSettings />}
        </motion.div>
      </div>
    </main>
  );
};

export default InterpreterContent;
