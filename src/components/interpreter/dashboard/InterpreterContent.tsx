
import React from 'react';
import { motion } from 'framer-motion';
import { InterpreterAvailableConsultations } from '@/components/interpreter/InterpreterAvailableConsultations';
import { InterpreterMyConsultations } from '@/components/interpreter/InterpreterMyConsultations';
import { InterpreterHistory } from '@/components/interpreter/InterpreterHistory';
import { InterpreterSettings } from '@/components/interpreter/InterpreterSettings';

interface InterpreterContentProps {
  activeSection: string;
}

export const InterpreterContent: React.FC<InterpreterContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch(activeSection) {
      case 'available':
        return <InterpreterAvailableConsultations />;
      case 'myconsultations':
        return <InterpreterMyConsultations />;
      case 'history':
        return <InterpreterHistory />;
      case 'settings':
        return <InterpreterSettings />;
      default:
        return <InterpreterAvailableConsultations />;
    }
  };

  const getSectionTitle = (section: string) => {
    switch(section) {
      case "available": return "Consultations disponibles";
      case "myconsultations": return "Mes consultations programmées";
      case "history": return "Historique des interprétations";
      case "settings": return "Paramètres du compte";
      default: return "Consultations disponibles";
    }
  };

  const getSectionDescription = (section: string) => {
    switch(section) {
      case "available": return "Nouvelles demandes d'interprétation disponibles";
      case "myconsultations": return "Vos consultations d'interprétation programmées";
      case "history": return "Consultations d'interprétation passées et évaluations";
      case "settings": return "Gérez vos langues, disponibilités et informations";
      default: return "Nouvelles demandes d'interprétation disponibles";
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

export default InterpreterContent;
