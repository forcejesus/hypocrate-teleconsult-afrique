
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.how_it_works': 'Comment ça marche',
    'nav.our_doctors': 'Nos médecins',
    'nav.medical_advice': 'Conseils médicaux',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.login': 'Se connecter',
    'nav.register': 'S\'inscrire',
    'nav.privacy': 'Confidentialité',
    'nav.terms': 'CGU',

    // Hero Section
    'hero.title': 'Consultations médicales à distance avec traduction',
    'hero.subtitle': 'Accédez à des soins de qualité depuis chez vous grâce à notre plateforme de téléconsultation avec service de traduction en temps réel.',
    'hero.cta.book': 'Prendre rendez-vous',
    'hero.cta.learn': 'En savoir plus',

    // How it Works
    'how_it_works.title': 'Comment ça marche',
    'how_it_works.step1.title': 'Choisissez votre médecin',
    'how_it_works.step1.description': 'Sélectionnez un médecin selon votre besoin et sa disponibilité',
    'how_it_works.step2.title': 'Planifiez votre consultation',
    'how_it_works.step2.description': 'Réservez un créneau qui vous convient avec traduction si nécessaire',
    'how_it_works.step3.title': 'Consultez en ligne',
    'how_it_works.step3.description': 'Rencontrez votre médecin par vidéo avec notre traducteur professionnel',

    // How it Works Page
    'how_it_works_page.title': 'Comment fonctionne Hypocrate',
    'how_it_works_page.services_title': 'Nos services détaillés',
    'how_it_works_page.patients_title': 'Pour les patients',
    'how_it_works_page.patients_step1': 'Inscription simple et rapide sur notre plateforme',
    'how_it_works_page.patients_step2': 'Sélection d\'un médecin selon vos besoins',
    'how_it_works_page.patients_step3': 'Réservation d\'un créneau avec ou sans traducteur',
    'how_it_works_page.patients_step4': 'Consultation sécurisée par vidéoconférence',
    'how_it_works_page.doctors_title': 'Pour les médecins',
    'how_it_works_page.doctors_step1': 'Vérification des diplômes et certifications',
    'how_it_works_page.doctors_step2': 'Formation à l\'utilisation de notre plateforme',
    'how_it_works_page.doctors_step3': 'Définition de vos créneaux de disponibilité',
    'how_it_works_page.doctors_step4': 'Consultation des patients avec support technique',

    // Advantages
    'advantages.title': 'Pourquoi choisir Hypocrate ?',
    'advantages.accessibility.title': 'Accessibilité',
    'advantages.accessibility.description': 'Consultez depuis n\'importe où, à tout moment',
    'advantages.translation.title': 'Traduction en temps réel',
    'advantages.translation.description': 'Communication fluide dans votre langue maternelle',
    'advantages.security.title': 'Sécurité',
    'advantages.security.description': 'Données médicales protégées et confidentielles',

    // Testimonials
    'testimonials.title': 'Ce que disent nos patients',
    'testimonials.1.text': 'Excellent service ! J\'ai pu consulter un médecin rapidement malgré la barrière de la langue.',
    'testimonials.1.author': 'Aminata S.',
    'testimonials.1.location': 'Dakar, Sénégal',
    'testimonials.2.text': 'La plateforme est très facile à utiliser et le service de traduction est parfait.',
    'testimonials.2.author': 'Mohamed K.',
    'testimonials.2.location': 'Casablanca, Maroc',
    'testimonials.3.text': 'Grâce à Hypocrate, j\'ai enfin pu avoir accès à un spécialiste de qualité.',
    'testimonials.3.author': 'Sarah M.',
    'testimonials.3.location': 'Abidjan, Côte d\'Ivoire',

    // FAQ
    'faq.title': 'Questions fréquemment posées',
    'faq.description': 'Trouvez les réponses aux questions les plus courantes sur nos services de téléconsultation.',
    'faq.q1': 'Comment prendre un rendez-vous ?',
    'faq.a1': 'Il suffit de vous inscrire sur notre plateforme, choisir un médecin et sélectionner un créneau disponible.',
    'faq.q2': 'Le service de traduction est-il fiable ?',
    'faq.a2': 'Oui, nous travaillons avec des traducteurs professionnels certifiés spécialisés dans le domaine médical.',
    'faq.q3': 'Mes données médicales sont-elles sécurisées ?',
    'faq.a3': 'Absolument. Nous utilisons un chiffrement de niveau bancaire pour protéger toutes vos données.',
    'faq.q4': 'Puis-je obtenir une ordonnance ?',
    'faq.a4': 'Oui, nos médecins peuvent délivrer des ordonnances électroniques valides.',

    // CTA Section
    'cta.title': 'Prêt à consulter ?',
    'cta.description': 'Prenez rendez-vous dès maintenant avec l\'un de nos médecins certifiés.',
    'cta.button': 'Commencer maintenant',

    // Footer
    'footer.description': 'Plateforme de téléconsultation médicale avec service de traduction pour l\'Afrique.',
    'footer.quick_links': 'Liens rapides',
    'footer.legal': 'Légal',
    'footer.contact_us': 'Nous contacter',
    'footer.language_fr': 'Français',
    'footer.language_en': 'English',
    'footer.rights': 'Tous droits réservés.',

    // Contact Page
    'contact.title': 'Contactez-nous',
    'contact.description': 'Nous sommes là pour répondre à toutes vos questions et vous accompagner.',
    'contact.our_info': 'Nos coordonnées',
    'contact.address': 'Adresse',
    'contact.address_text': '123 Avenue de la Médecine\n75000 Paris, France',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.hours': 'Horaires d\'ouverture',
    'contact.weekdays': 'Lundi - Vendredi',
    'contact.saturday': 'Samedi',
    'contact.sunday': 'Dimanche',
    'contact.closed': 'Fermé',
    'contact.send_message': 'Envoyez-nous un message',
    'contact.name': 'Nom complet',
    'contact.name_placeholder': 'Votre nom complet',
    'contact.email_placeholder': 'votre@email.com',
    'contact.subject': 'Sujet',
    'contact.subject_placeholder': 'Sujet de votre message',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Décrivez votre demande...',
    'contact.send': 'Envoyer le message',

    // Not Found Page
    'not_found.title': 'Page non trouvée',
    'not_found.description': 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    'not_found.back_home': 'Retour à l\'accueil',

    // Medical Advice Page
    'medical_advice.title': 'Conseils médicaux',
    'medical_advice.description': 'Découvrez nos conseils et recommandations pour maintenir une bonne santé.',
    'medical_advice.important_note': 'Note importante',
    'medical_advice.disclaimer1': 'Les conseils présentés sur cette page sont fournis à titre informatif uniquement et ne remplacent pas une consultation médicale professionnelle.',
    'medical_advice.disclaimer2': 'En cas de problème de santé, consultez toujours un professionnel de santé qualifié.',
    'medical_advice.consult_doctor': 'Consulter un médecin',
    'medical_advice.general_prevention': 'Prévention générale',
    'medical_advice.nutrition_wellness': 'Nutrition et bien-être',
    'medical_advice.family_health': 'Santé familiale',
    'medical_advice.physical_activity': 'Activité physique',
    'medical_advice.general_tips': 'Conseils généraux',
    'medical_advice.lifestyle': 'Mode de vie',
    'medical_advice.nutrition': 'Nutrition',
    'medical_advice.mental_health': 'Santé mentale',

    // Login Page
    'login.title': 'Connexion à votre espace',
    'login.subtitle': 'Accédez à votre tableau de bord personnalisé',
    'login.user_type': 'Je suis un(e)',
    'login.patient': 'Patient',
    'login.doctor': 'Médecin',
    'login.interpreter': 'Interprète',
    'login.email': 'Adresse email',
    'login.email_placeholder': 'votre@email.com',
    'login.password': 'Mot de passe',
    'login.password_placeholder': 'Votre mot de passe',
    'login.remember': 'Se souvenir de moi',
    'login.forgot_password': 'Mot de passe oublié ?',
    'login.submit': 'Se connecter',
    'login.no_account': 'Pas encore de compte ?',
    'login.register': 'S\'inscrire',
    'login.patient_space': 'Espace patient',
    'login.doctor_space': 'Espace médecin',
    'login.interpreter_space': 'Espace interprète',
    'login.patient_description': 'Prenez rendez-vous et consultez vos médecins',
    'login.doctor_description': 'Gérez vos consultations et vos patients',
    'login.interpreter_description': 'Assistez les consultations médicales',
    'login.success_patient': 'Connexion réussie ! Redirection vers l\'espace patient...',
    'login.success_doctor': 'Connexion réussie ! Redirection vers l\'espace médecin...',
    'login.success_interpreter': 'Connexion réussie ! Redirection vers l\'espace interprète...',

    // About Page
    'about.title': 'À propos d\'Hypocrate',
    'about.description': 'Notre mission est de faciliter l\'accès aux soins médicaux pour tous les patients d\'Afrique grâce à la télémédecine.',

    // Our Doctors Page
    'doctors.title': 'Nos médecins',
    'doctors.description': 'Consultez notre réseau de médecins certifiés, disponibles pour des téléconsultations avec service de traduction.',

    // Privacy Page
    'privacy.title': 'Politique de confidentialité',
    'privacy.description': 'Comment nous protégeons vos données et respectons votre vie privée.',

    // Terms Page
    'terms.title': 'Conditions générales d\'utilisation',
    'terms.description': 'Veuillez lire attentivement ces conditions avant d\'utiliser notre plateforme.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.how_it_works': 'How it works',
    'nav.our_doctors': 'Our doctors',
    'nav.medical_advice': 'Medical advice',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',

    // Hero Section
    'hero.title': 'Remote medical consultations with translation',
    'hero.subtitle': 'Access quality care from home with our telemedicine platform featuring real-time translation services.',
    'hero.cta.book': 'Book appointment',
    'hero.cta.learn': 'Learn more',

    // How it Works
    'how_it_works.title': 'How it works',
    'how_it_works.step1.title': 'Choose your doctor',
    'how_it_works.step1.description': 'Select a doctor based on your needs and their availability',
    'how_it_works.step2.title': 'Schedule your consultation',
    'how_it_works.step2.description': 'Book a convenient time slot with translation if needed',
    'how_it_works.step3.title': 'Consult online',
    'how_it_works.step3.description': 'Meet your doctor via video with our professional translator',

    // How it Works Page
    'how_it_works_page.title': 'How Hypocrate works',
    'how_it_works_page.services_title': 'Our detailed services',
    'how_it_works_page.patients_title': 'For patients',
    'how_it_works_page.patients_step1': 'Simple and quick registration on our platform',
    'how_it_works_page.patients_step2': 'Select a doctor according to your needs',
    'how_it_works_page.patients_step3': 'Book a slot with or without translator',
    'how_it_works_page.patients_step4': 'Secure consultation via video conference',
    'how_it_works_page.doctors_title': 'For doctors',
    'how_it_works_page.doctors_step1': 'Verification of diplomas and certifications',
    'how_it_works_page.doctors_step2': 'Training on using our platform',
    'how_it_works_page.doctors_step3': 'Set your availability slots',
    'how_it_works_page.doctors_step4': 'Consult patients with technical support',

    // Advantages
    'advantages.title': 'Why choose Hypocrate?',
    'advantages.accessibility.title': 'Accessibility',
    'advantages.accessibility.description': 'Consult from anywhere, anytime',
    'advantages.translation.title': 'Real-time translation',
    'advantages.translation.description': 'Smooth communication in your native language',
    'advantages.security.title': 'Security',
    'advantages.security.description': 'Protected and confidential medical data',

    // Testimonials
    'testimonials.title': 'What our patients say',
    'testimonials.1.text': 'Excellent service! I was able to consult a doctor quickly despite the language barrier.',
    'testimonials.1.author': 'Aminata S.',
    'testimonials.1.location': 'Dakar, Senegal',
    'testimonials.2.text': 'The platform is very easy to use and the translation service is perfect.',
    'testimonials.2.author': 'Mohamed K.',
    'testimonials.2.location': 'Casablanca, Morocco',
    'testimonials.3.text': 'Thanks to Hypocrate, I finally had access to a quality specialist.',
    'testimonials.3.author': 'Sarah M.',
    'testimonials.3.location': 'Abidjan, Ivory Coast',

    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.description': 'Find answers to the most common questions about our telemedicine services.',
    'faq.q1': 'How to make an appointment?',
    'faq.a1': 'Simply register on our platform, choose a doctor and select an available slot.',
    'faq.q2': 'Is the translation service reliable?',
    'faq.a2': 'Yes, we work with certified professional translators specialized in the medical field.',
    'faq.q3': 'Is my medical data secure?',
    'faq.a3': 'Absolutely. We use bank-level encryption to protect all your data.',
    'faq.q4': 'Can I get a prescription?',
    'faq.a4': 'Yes, our doctors can issue valid electronic prescriptions.',

    // CTA Section
    'cta.title': 'Ready to consult?',
    'cta.description': 'Book an appointment now with one of our certified doctors.',
    'cta.button': 'Get started now',

    // Footer
    'footer.description': 'Medical telemedicine platform with translation service for Africa.',
    'footer.quick_links': 'Quick links',
    'footer.legal': 'Legal',
    'footer.contact_us': 'Contact us',
    'footer.language_fr': 'Français',
    'footer.language_en': 'English',
    'footer.rights': 'All rights reserved.',

    // Contact Page
    'contact.title': 'Contact us',
    'contact.description': 'We are here to answer all your questions and support you.',
    'contact.our_info': 'Our information',
    'contact.address': 'Address',
    'contact.address_text': '123 Medicine Avenue\n75000 Paris, France',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.hours': 'Opening hours',
    'contact.weekdays': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.closed': 'Closed',
    'contact.send_message': 'Send us a message',
    'contact.name': 'Full name',
    'contact.name_placeholder': 'Your full name',
    'contact.email_placeholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subject_placeholder': 'Subject of your message',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Describe your request...',
    'contact.send': 'Send message',

    // Not Found Page
    'not_found.title': 'Page not found',
    'not_found.description': 'The page you are looking for does not exist or has been moved.',
    'not_found.back_home': 'Back to home',

    // Medical Advice Page
    'medical_advice.title': 'Medical advice',
    'medical_advice.description': 'Discover our tips and recommendations to maintain good health.',
    'medical_advice.important_note': 'Important note',
    'medical_advice.disclaimer1': 'The advice presented on this page is provided for informational purposes only and does not replace professional medical consultation.',
    'medical_advice.disclaimer2': 'In case of health problems, always consult a qualified healthcare professional.',
    'medical_advice.consult_doctor': 'Consult a doctor',
    'medical_advice.general_prevention': 'General prevention',
    'medical_advice.nutrition_wellness': 'Nutrition and wellness',
    'medical_advice.family_health': 'Family health',
    'medical_advice.physical_activity': 'Physical activity',
    'medical_advice.general_tips': 'General tips',
    'medical_advice.lifestyle': 'Lifestyle',
    'medical_advice.nutrition': 'Nutrition',
    'medical_advice.mental_health': 'Mental health',

    // Login Page
    'login.title': 'Login to your space',
    'login.subtitle': 'Access your personalized dashboard',
    'login.user_type': 'I am a',
    'login.patient': 'Patient',
    'login.doctor': 'Doctor',
    'login.interpreter': 'Interpreter',
    'login.email': 'Email address',
    'login.email_placeholder': 'your@email.com',
    'login.password': 'Password',
    'login.password_placeholder': 'Your password',
    'login.remember': 'Remember me',
    'login.forgot_password': 'Forgot password?',
    'login.submit': 'Sign in',
    'login.no_account': 'No account yet?',
    'login.register': 'Register',
    'login.patient_space': 'Patient space',
    'login.doctor_space': 'Doctor space',
    'login.interpreter_space': 'Interpreter space',
    'login.patient_description': 'Book appointments and consult your doctors',
    'login.doctor_description': 'Manage your consultations and patients',
    'login.interpreter_description': 'Assist medical consultations',
    'login.success_patient': 'Login successful! Redirecting to patient space...',
    'login.success_doctor': 'Login successful! Redirecting to doctor space...',
    'login.success_interpreter': 'Login successful! Redirecting to interpreter space...',

    // About Page
    'about.title': 'About Hypocrate',
    'about.description': 'Our mission is to facilitate access to medical care for all patients in Africa through telemedicine.',

    // Our Doctors Page
    'doctors.title': 'Our doctors',
    'doctors.description': 'Consult our network of certified doctors, available for telemedicine consultations with translation service.',

    // Privacy Page
    'privacy.title': 'Privacy policy',
    'privacy.description': 'How we protect your data and respect your privacy.',

    // Terms Page
    'terms.title': 'Terms of use',
    'terms.description': 'Please read these terms carefully before using our platform.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
