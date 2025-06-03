
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Users, Calendar, Shield, Heart, Globe } from 'lucide-react';

const Faq = () => {
  const faqCategories = [
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Questions générales",
      items: [
        {
          question: "Qu'est-ce qu'Hypocrate ?",
          answer: "Hypocrate est une plateforme de téléconsultation médicale qui connecte les patients aux médecins du monde entier avec l'aide d'interprètes professionnels pour faciliter la communication."
        },
        {
          question: "Comment fonctionne le service de traduction ?",
          answer: "Nos interprètes professionnels rejoignent la consultation pour traduire en temps réel entre le patient et le médecin, garantissant une communication claire et précise."
        },
        {
          question: "Quelles langues sont supportées ?",
          answer: "Nous supportons plus de 15 langues, avec une priorité donnée aux langues africaines comme le Wolof, Bambara, Hausa, Swahili, et bien d'autres."
        }
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Consultations",
      items: [
        {
          question: "Comment prendre rendez-vous ?",
          answer: "Inscrivez-vous sur notre plateforme, choisissez un médecin, sélectionnez un créneau horaire et précisez si vous avez besoin d'un interprète."
        },
        {
          question: "Combien coûte une consultation ?",
          answer: "Les tarifs varient selon le médecin et la spécialité. Les consultations générales commencent à partir de 25€. Le service de traduction est inclus sans frais supplémentaires."
        },
        {
          question: "Que se passe-t-il si je dois annuler ?",
          answer: "Vous pouvez annuler jusqu'à 2 heures avant le rendez-vous sans frais. Les annulations tardives peuvent entraîner des frais."
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pour les professionnels",
      items: [
        {
          question: "Comment devenir médecin partenaire ?",
          answer: "Soumettez votre candidature avec vos diplômes et certifications. Notre équipe vérifiera vos qualifications avant de vous intégrer à notre réseau."
        },
        {
          question: "Comment devenir interprète ?",
          answer: "Vous devez maîtriser au moins deux langues et passer notre test de certification. Une formation médicale de base est également requise."
        },
        {
          question: "Quelles sont les commissions prélevées ?",
          answer: "Nous prélevons une commission de 15% sur les consultations pour les médecins et 10% pour les interprètes."
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité et confidentialité",
      items: [
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Oui, nous utilisons un chiffrement de bout en bout et respectons strictement le RGPD. Vos données médicales ne sont jamais partagées sans votre consentement."
        },
        {
          question: "Les consultations sont-elles enregistrées ?",
          answer: "Non, les consultations ne sont jamais enregistrées. Seules les notes médicales du médecin sont conservées dans votre dossier sécurisé."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-hypocrate-lightBlue via-white to-blue-50 py-16">
          <div className="container-custom text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-hypocrate-blue font-semibold px-6 py-3 rounded-full text-sm shadow-sm mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Centre d'aide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                Questions fréquentes
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur notre plateforme de téléconsultation
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container-custom py-16">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-hypocrate-blue/10 p-3 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem 
                      key={itemIndex} 
                      value={`${categoryIndex}-${itemIndex}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-hypocrate-blue">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-hypocrate-blue/10 to-hypocrate-green/10 p-8 rounded-3xl border border-blue-200 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe de support est disponible pour répondre à toutes vos questions spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Nous contacter
                <HelpCircle className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="mailto:support@hypocrate-teleconsult.com" 
                className="inline-flex items-center bg-white border-2 border-hypocrate-blue text-hypocrate-blue font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-all duration-200"
              >
                support@hypocrate-teleconsult.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
