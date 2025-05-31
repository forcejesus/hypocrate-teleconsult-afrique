
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.how_it_works': 'Comment ça marche',
    'nav.our_doctors': 'Nos médecins',
    'nav.faq': 'FAQ',
    'nav.login': 'Se connecter',
    'nav.register': "S'inscrire",
    
    // Hero Section
    'hero.badge': 'Téléconsultation médicale avec traduction',
    'hero.title': 'Consultez un médecin',
    'hero.title_highlight': 'depuis n\'importe où',
    'hero.description': 'Accédez à des consultations médicales de qualité sans barrière linguistique, depuis l\'Afrique ou n\'importe où dans le monde.',
    'hero.book_appointment': 'Prendre rendez-vous',
    'hero.how_it_works': 'Comment ça marche',
    'hero.available_24_7': 'Disponible 7j/7',
    'hero.certified_doctors': 'Médecins certifiés',
    'hero.translation_service': 'Service de traduction',
    
    // Login
    'login.title': 'Connexion',
    'login.user_type': 'Type d\'utilisateur',
    'login.email': 'Email',
    'login.password': 'Mot de passe',
    'login.submit': 'Se connecter',
    'login.no_account': 'Pas encore de compte ?',
    'login.create_account': 'Créer un compte',
    'login.success_patient': 'Connexion réussie en tant que patient',
    'login.success_doctor': 'Connexion réussie en tant que médecin',
    'login.success_interpreter': 'Connexion réussie en tant qu\'interprète',
    'login.error_user_type': 'Type d\'utilisateur non reconnu',
    
    // User Types
    'user_type.patient': 'Patient',
    'user_type.doctor': 'Médecin',
    'user_type.interpreter': 'Interprète',
    'user_type.choose': 'Veuillez choisir un type d\'utilisateur',
    
    // Dashboard
    'dashboard.patient_space': 'Espace Patient',
    'dashboard.doctor_space': 'Espace Médecin',
    'dashboard.interpreter_space': 'Espace Interprète',
    'dashboard.logout': 'Se déconnecter',
    
    // How it works
    'how_it_works.title': 'Comment fonctionne une téléconsultation avec Hypocrate',
    'how_it_works.description': 'Notre plateforme connecte les patients africains avec des médecins du monde entier, avec l\'assistance d\'un traducteur si nécessaire.',
    'how_it_works.step1_title': 'Prenez rendez-vous',
    'how_it_works.step1_desc': 'Choisissez une date et une heure qui vous conviennent pour votre consultation médicale en ligne.',
    'how_it_works.step2_title': 'Consultez par vidéo',
    'how_it_works.step2_desc': 'Rencontrez virtuellement votre médecin depuis n\'importe quel appareil (ordinateur, tablette, smartphone).',
    'how_it_works.step3_title': 'Traduction en direct',
    'how_it_works.step3_desc': 'Un interprète vous assiste pendant la consultation pour faciliter la communication avec le médecin.',
    
    // FAQ
    'faq.title': 'Questions fréquentes',
    'faq.description': 'Trouvez des réponses aux questions les plus courantes sur notre service de téléconsultation médicale.',
    
    // Footer
    'footer.copyright': 'Hypocrate Téléconsult Afrique. Tous droits réservés.',
    'footer.language_fr': 'Français',
    'footer.language_en': 'English',
    
    // CTA
    'cta.title': 'Prêt à consulter un médecin en ligne ?',
    'cta.description': 'Prenez rendez-vous dès maintenant et bénéficiez d\'une consultation médicale de qualité, avec l\'assistance d\'un traducteur si nécessaire.',
    'cta.find_doctor': 'Trouver un médecin',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.how_it_works': 'How it Works',
    'nav.our_doctors': 'Our Doctors',
    'nav.faq': 'FAQ',
    'nav.login': 'Sign In',
    'nav.register': 'Sign Up',
    
    // Hero Section
    'hero.badge': 'Medical teleconsultation with translation',
    'hero.title': 'Consult a doctor',
    'hero.title_highlight': 'from anywhere',
    'hero.description': 'Access quality medical consultations without language barriers, from Africa or anywhere in the world.',
    'hero.book_appointment': 'Book Appointment',
    'hero.how_it_works': 'How it Works',
    'hero.available_24_7': 'Available 24/7',
    'hero.certified_doctors': 'Certified Doctors',
    'hero.translation_service': 'Translation Service',
    
    // Login
    'login.title': 'Sign In',
    'login.user_type': 'User Type',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Sign In',
    'login.no_account': 'Don\'t have an account?',
    'login.create_account': 'Create Account',
    'login.success_patient': 'Successfully signed in as patient',
    'login.success_doctor': 'Successfully signed in as doctor',
    'login.success_interpreter': 'Successfully signed in as interpreter',
    'login.error_user_type': 'Unrecognized user type',
    
    // User Types
    'user_type.patient': 'Patient',
    'user_type.doctor': 'Doctor',
    'user_type.interpreter': 'Interpreter',
    'user_type.choose': 'Please choose a user type',
    
    // Dashboard
    'dashboard.patient_space': 'Patient Space',
    'dashboard.doctor_space': 'Doctor Space',
    'dashboard.interpreter_space': 'Interpreter Space',
    'dashboard.logout': 'Sign Out',
    
    // How it works
    'how_it_works.title': 'How teleconsultation works with Hypocrate',
    'how_it_works.description': 'Our platform connects African patients with doctors from around the world, with interpreter assistance if needed.',
    'how_it_works.step1_title': 'Book an appointment',
    'how_it_works.step1_desc': 'Choose a date and time that suits you for your online medical consultation.',
    'how_it_works.step2_title': 'Video consultation',
    'how_it_works.step2_desc': 'Meet your doctor virtually from any device (computer, tablet, smartphone).',
    'how_it_works.step3_title': 'Live translation',
    'how_it_works.step3_desc': 'An interpreter assists you during the consultation to facilitate communication with the doctor.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Find answers to the most common questions about our medical teleconsultation service.',
    
    // Footer
    'footer.copyright': 'Hypocrate Teleconsult Africa. All rights reserved.',
    'footer.language_fr': 'Français',
    'footer.language_en': 'English',
    
    // CTA
    'cta.title': 'Ready to consult a doctor online?',
    'cta.description': 'Book an appointment now and benefit from quality medical consultation, with interpreter assistance if needed.',
    'cta.find_doctor': 'Find a Doctor',
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
