
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

  return (
    <main className="flex-1 p-4 md:p-6 h-screen overflow-y-auto">
      {/* Desktop Section Title */}
      <div className="hidden md:block mb-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
          {activeSection === "available" && "Consultations disponibles"}
          {activeSection === "myconsultations" && "Mes consultations"}
          {activeSection === "history" && "Historique"}
          {activeSection === "settings" && "Paramètres"}
        </h1>
        <p className="text-gray-600 mt-2">
          {activeSection === "available" && "Liste des consultations disponibles"}
          {activeSection === "myconsultations" && "Vos consultations programmées"}
          {activeSection === "history" && "Historique des consultations effectuées"}
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

export default InterpreterContent;
