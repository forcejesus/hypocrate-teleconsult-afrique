
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface LanguageSelectorProps {
  selectedLanguages: string[];
  onLanguagesChange: (languages: string[]) => void;
}

const languages = [
  { id: "fr", name: "Français", flag: "🇫🇷" },
  { id: "en", name: "Anglais", flag: "🇬🇧" },
  { id: "es", name: "Espagnol", flag: "🇪🇸" },
  { id: "pt", name: "Portugais", flag: "🇵🇹" },
  { id: "ar", name: "Arabe", flag: "🇸🇦" },
  { id: "ln", name: "Lingala", flag: "🇨🇩" },
  { id: "kt", name: "Kituba", flag: "🇨🇬" },
  { id: "kg", name: "Kigongo", flag: "🇦🇴" },
  { id: "sw", name: "Swahili", flag: "🇹🇿" },
  { id: "wo", name: "Wolof", flag: "🇸🇳" },
  { id: "bm", name: "Bambara", flag: "🇲🇱" },
  { id: "ha", name: "Hausa", flag: "🇳🇬" },
  { id: "yo", name: "Yoruba", flag: "🇳🇬" },
  { id: "am", name: "Amharique", flag: "🇪🇹" },
  { id: "ti", name: "Tigrinya", flag: "🇪🇷" },
  { id: "om", name: "Oromo", flag: "🇪🇹" },
  { id: "so", name: "Somali", flag: "🇸🇴" },
  { id: "mg", name: "Malgache", flag: "🇲🇬" },
  { id: "zu", name: "Zulu", flag: "🇿🇦" },
  { id: "xh", name: "Xhosa", flag: "🇿🇦" },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguages,
  onLanguagesChange
}) => {
  const toggleLanguage = (langId: string) => {
    if (selectedLanguages.includes(langId)) {
      onLanguagesChange(selectedLanguages.filter(id => id !== langId));
    } else {
      onLanguagesChange([...selectedLanguages, langId]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {languages.map((language) => (
          <motion.div
            key={language.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="button"
              variant="outline"
              className={`w-full justify-start text-left h-14 px-4 transition-all duration-200 ${
                selectedLanguages.includes(language.id) 
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-md" 
                  : "border-gray-200 hover:bg-emerald-50 hover:border-emerald-200"
              }`}
              onClick={() => toggleLanguage(language.id)}
            >
              <span className="text-lg mr-3">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              {selectedLanguages.includes(language.id) && (
                <Check size={18} className="text-emerald-600" />
              )}
            </Button>
          </motion.div>
        ))}
      </div>
      
      {selectedLanguages.length > 0 && (
        <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
          <p className="text-sm text-emerald-700">
            <strong>{selectedLanguages.length}</strong> langue{selectedLanguages.length > 1 ? 's' : ''} sélectionnée{selectedLanguages.length > 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
