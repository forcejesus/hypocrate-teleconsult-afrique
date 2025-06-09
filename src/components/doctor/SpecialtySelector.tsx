
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Search } from 'lucide-react';

interface SpecialtySelectorProps {
  selectedSpecialties: string[];
  onSpecialtiesChange: (specialties: string[]) => void;
}

const medicalSpecialties = [
  "Cardiologie", "Neurologie", "Pédiatrie", "Gynécologie", "Dermatologie",
  "Ophtalmologie", "Oto-rhino-laryngologie (ORL)", "Psychiatrie", "Radiologie",
  "Anesthésie-Réanimation", "Chirurgie générale", "Chirurgie orthopédique",
  "Chirurgie plastique", "Chirurgie vasculaire", "Urologie", "Gastro-entérologie",
  "Pneumologie", "Rhumatologie", "Endocrinologie", "Oncologie", "Hématologie",
  "Néphrologie", "Médecine interne", "Médecine d'urgence", "Médecine du travail",
  "Médecine générale", "Gériatrie", "Allergologie", "Médecine nucléaire",
  "Anatomie pathologique", "Biologie médicale", "Pharmacologie", "Médecine physique",
  "Infectiologie", "Réanimation médicale"
];

export const SpecialtySelector: React.FC<SpecialtySelectorProps> = ({
  selectedSpecialties,
  onSpecialtiesChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredSpecialties = medicalSpecialties.filter(specialty =>
    specialty.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSpecialties.includes(specialty)
  );

  const addSpecialty = (specialty: string) => {
    if (!selectedSpecialties.includes(specialty)) {
      onSpecialtiesChange([...selectedSpecialties, specialty]);
      setSearchTerm('');
      setIsOpen(false);
    }
  };

  const removeSpecialty = (specialty: string) => {
    onSpecialtiesChange(selectedSpecialties.filter(s => s !== specialty));
  };

  const addCustomSpecialty = () => {
    if (searchTerm.trim() && !selectedSpecialties.includes(searchTerm.trim())) {
      addSpecialty(searchTerm.trim());
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Rechercher ou ajouter une spécialité..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="pl-10 border-gray-200 focus:border-emerald-500 h-12"
          />
        </div>
        
        <AnimatePresence>
          {isOpen && (searchTerm || filteredSpecialties.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
            >
              {searchTerm && !medicalSpecialties.includes(searchTerm) && (
                <button
                  onClick={addCustomSpecialty}
                  className="w-full px-4 py-3 text-left hover:bg-emerald-50 border-b border-gray-100 flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4 text-emerald-600" />
                  <span>Ajouter "{searchTerm}"</span>
                </button>
              )}
              
              {filteredSpecialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => addSpecialty(specialty)}
                  className="w-full px-4 py-3 text-left hover:bg-emerald-50 border-b border-gray-100 last:border-b-0"
                >
                  {specialty}
                </button>
              ))}
              
              {filteredSpecialties.length === 0 && searchTerm && medicalSpecialties.includes(searchTerm) && (
                <div className="px-4 py-3 text-gray-500 text-sm">
                  Cette spécialité est déjà sélectionnée
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected Specialties */}
      {selectedSpecialties.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Spécialités sélectionnées:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedSpecialties.map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-3 py-1.5 text-sm flex items-center space-x-2"
                >
                  <span>{specialty}</span>
                  <button
                    onClick={() => removeSpecialty(specialty)}
                    className="ml-2 hover:text-emerald-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SpecialtySelector;
