
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
    
    // Comment ça marche page
    'how_it_works_page.title': 'Comment ça marche',
    'how_it_works_page.services_title': 'Nos services de téléconsultation',
    'how_it_works_page.patients_title': 'Pour les patients',
    'how_it_works_page.patients_step1': 'Créez votre compte en quelques minutes',
    'how_it_works_page.patients_step2': 'Choisissez votre médecin et la date de consultation',
    'how_it_works_page.patients_step3': 'Indiquez si vous avez besoin d\'un service de traduction',
    'how_it_works_page.patients_step4': 'Connectez-vous à l\'heure du rendez-vous via notre plateforme',
    'how_it_works_page.doctors_title': 'Pour les médecins',
    'how_it_works_page.doctors_step1': 'Inscrivez-vous en fournissant vos qualifications',
    'how_it_works_page.doctors_step2': 'Définissez vos disponibilités sur votre agenda',
    'how_it_works_page.doctors_step3': 'Recevez des notifications pour vos rendez-vous',
    'how_it_works_page.doctors_step4': 'Consultez avec l\'assistance d\'un traducteur si nécessaire',
    
    // Contact page
    'contact.title': 'Nos contacts',
    'contact.description': 'Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre parcours de santé.',
    'contact.our_info': 'Nos coordonnées',
    'contact.address': 'Adresse',
    'contact.address_text': '123 Avenue de la Médecine\n75000 Paris, France',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.hours': 'Heures d\'ouverture',
    'contact.weekdays': 'Lundi - Vendredi:',
    'contact.saturday': 'Samedi:',
    'contact.sunday': 'Dimanche:',
    'contact.closed': 'Fermé',
    'contact.send_message': 'Envoyez-nous un message',
    'contact.name': 'Nom complet',
    'contact.name_placeholder': 'Votre nom',
    'contact.email_placeholder': 'votre.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subject_placeholder': 'Sujet de votre message',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Votre message...',
    'contact.send': 'Envoyer le message',
    
    // About page
    'about.title': 'À propos d\'Hypocrate',
    'about.description': 'Notre mission est de faciliter l\'accès aux soins médicaux pour tous les patients d\'Afrique grâce à la télémédecine.',
    'about.our_story': 'Notre histoire',
    'about.our_mission': 'Notre mission',
    'about.mission_description': 'Hypocrate a pour mission de révolutionner l\'accès aux soins de santé en Afrique en offrant une solution de téléconsultation qui surmonte les barrières géographiques et linguistiques.',
    'about.accessibility': 'Accessibilité',
    'about.accessibility_desc': 'Nous croyons que l\'accès à des soins médicaux de qualité est un droit fondamental. Notre plateforme permet de consulter un médecin depuis n\'importe où, réduisant ainsi les obstacles géographiques.',
    'about.linguistic_inclusion': 'Inclusion linguistique',
    'about.linguistic_inclusion_desc': 'La barrière de la langue ne devrait jamais limiter l\'accès aux soins. Notre service de traduction en temps réel permet une communication fluide entre patients et médecins.',
    'about.medical_excellence': 'Excellence médicale',
    'about.medical_excellence_desc': 'Nous collaborons uniquement avec des médecins certifiés et expérimentés, garantissant ainsi la qualité des consultations et des diagnostics fournis sur notre plateforme.',
    'about.our_values': 'Nos valeurs',
    'about.health_equity': 'Équité en santé',
    'about.continuous_innovation': 'Innovation continue',
    'about.privacy_ethics': 'Confidentialité et éthique',
    'about.constructive_collaboration': 'Collaboration constructive',
    'about.our_impact': 'Notre impact',
    'about.consultations_completed': 'Consultations réalisées',
    'about.certified_doctors': 'Médecins certifiés',
    'about.languages_available': 'Langues disponibles',
    'about.african_countries': 'Pays africains desservis',
    'about.future_vision': 'Notre vision pour l\'avenir',
    
    // Not Found page
    'not_found.title': 'Oups ! Page introuvable',
    'not_found.description': 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    'not_found.back_home': 'Retourner à l\'accueil',
    
    // Medical Advice page
    'medical_advice.title': 'Conseils médicaux',
    'medical_advice.description': 'Des conseils médicaux généraux pour prendre soin de votre santé et celle de votre famille au quotidien.',
    'medical_advice.important_note': 'Note importante',
    'medical_advice.disclaimer1': 'Les informations fournies sur cette page sont des conseils généraux et ne remplacent en aucun cas une consultation médicale. Si vous présentez des symptômes persistants ou inquiétants, consultez un médecin sans délai.',
    'medical_advice.disclaimer2': 'Pour des conseils médicaux personnalisés, n\'hésitez pas à prendre rendez-vous avec l\'un de nos médecins certifiés.',
    'medical_advice.consult_doctor': 'Consulter un médecin',
    'medical_advice.general_prevention': 'Prévention générale',
    'medical_advice.nutrition_wellness': 'Nutrition et bien-être',
    'medical_advice.family_health': 'Santé familiale',
    'medical_advice.physical_activity': 'Activité physique',
    'medical_advice.general_tips': 'Conseils généraux pour rester en bonne santé',
    'medical_advice.lifestyle': 'Hygiène de vie',
    'medical_advice.nutrition': 'Alimentation',
    'medical_advice.mental_health': 'Santé mentale',
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
    
    // Comment ça marche page
    'how_it_works_page.title': 'How it Works',
    'how_it_works_page.services_title': 'Our teleconsultation services',
    'how_it_works_page.patients_title': 'For patients',
    'how_it_works_page.patients_step1': 'Create your account in just a few minutes',
    'how_it_works_page.patients_step2': 'Choose your doctor and consultation date',
    'how_it_works_page.patients_step3': 'Indicate if you need a translation service',
    'how_it_works_page.patients_step4': 'Connect at the appointment time via our platform',
    'how_it_works_page.doctors_title': 'For doctors',
    'how_it_works_page.doctors_step1': 'Register by providing your qualifications',
    'how_it_works_page.doctors_step2': 'Set your availability on your schedule',
    'how_it_works_page.doctors_step3': 'Receive notifications for your appointments',
    'how_it_works_page.doctors_step4': 'Consult with the assistance of a translator if needed',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.description': 'We are at your disposal to answer all your questions and accompany you in your health journey.',
    'contact.our_info': 'Our contact information',
    'contact.address': 'Address',
    'contact.address_text': '123 Medicine Avenue\n75000 Paris, France',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.hours': 'Opening hours',
    'contact.weekdays': 'Monday - Friday:',
    'contact.saturday': 'Saturday:',
    'contact.sunday': 'Sunday:',
    'contact.closed': 'Closed',
    'contact.send_message': 'Send us a message',
    'contact.name': 'Full name',
    'contact.name_placeholder': 'Your name',
    'contact.email_placeholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subject_placeholder': 'Subject of your message',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Your message...',
    'contact.send': 'Send message',
    
    // About page
    'about.title': 'About Hypocrate',
    'about.description': 'Our mission is to facilitate access to medical care for all patients in Africa through telemedicine.',
    'about.our_story': 'Our story',
    'about.our_mission': 'Our mission',
    'about.mission_description': 'Hypocrate\'s mission is to revolutionize access to healthcare in Africa by offering a teleconsultation solution that overcomes geographical and linguistic barriers.',
    'about.accessibility': 'Accessibility',
    'about.accessibility_desc': 'We believe that access to quality medical care is a fundamental right. Our platform allows you to consult a doctor from anywhere, reducing geographical barriers.',
    'about.linguistic_inclusion': 'Linguistic inclusion',
    'about.linguistic_inclusion_desc': 'Language barriers should never limit access to care. Our real-time translation service enables smooth communication between patients and doctors.',
    'about.medical_excellence': 'Medical excellence',
    'about.medical_excellence_desc': 'We work only with certified and experienced doctors, ensuring the quality of consultations and diagnoses provided on our platform.',
    'about.our_values': 'Our values',
    'about.health_equity': 'Health equity',
    'about.continuous_innovation': 'Continuous innovation',
    'about.privacy_ethics': 'Privacy and ethics',
    'about.constructive_collaboration': 'Constructive collaboration',
    'about.our_impact': 'Our impact',
    'about.consultations_completed': 'Consultations completed',
    'about.certified_doctors': 'Certified doctors',
    'about.languages_available': 'Languages available',
    'about.african_countries': 'African countries served',
    'about.future_vision': 'Our vision for the future',
    
    // Not Found page
    'not_found.title': 'Oops! Page not found',
    'not_found.description': 'The page you are looking for does not exist or has been moved.',
    'not_found.back_home': 'Back to home',
    
    // Medical Advice page
    'medical_advice.title': 'Medical Advice',
    'medical_advice.description': 'General medical advice to take care of your health and that of your family on a daily basis.',
    'medical_advice.important_note': 'Important note',
    'medical_advice.disclaimer1': 'The information provided on this page is general advice and does not replace medical consultation in any way. If you have persistent or concerning symptoms, consult a doctor without delay.',
    'medical_advice.disclaimer2': 'For personalized medical advice, do not hesitate to make an appointment with one of our certified doctors.',
    'medical_advice.consult_doctor': 'Consult a doctor',
    'medical_advice.general_prevention': 'General prevention',
    'medical_advice.nutrition_wellness': 'Nutrition and wellness',
    'medical_advice.family_health': 'Family health',
    'medical_advice.physical_activity': 'Physical activity',
    'medical_advice.general_tips': 'General tips to stay healthy',
    'medical_advice.lifestyle': 'Lifestyle',
    'medical_advice.nutrition': 'Nutrition',
    'medical_advice.mental_health': 'Mental health',
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
