
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Comment fonctionne la téléconsultation avec Hypocrate ?",
      answer: "Notre service de téléconsultation permet aux patients de consulter des médecins à distance par vidéo. Vous prenez rendez-vous sur notre plateforme, puis vous vous connectez à l'heure convenue. Un traducteur est présent pendant la consultation pour faciliter la communication si nécessaire."
    },
    {
      question: "Comment le service de traduction fonctionne-t-il ?",
      answer: "Nos traducteurs professionnels sont présents lors de la consultation vidéo pour traduire en temps réel les échanges entre le patient et le médecin. Ils sont formés au vocabulaire médical pour assurer une communication précise."
    },
    {
      question: "Quelles spécialités médicales sont disponibles ?",
      answer: "Nous proposons des consultations avec des médecins généralistes ainsi que plusieurs spécialités comme la cardiologie, la dermatologie, la pédiatrie, la gynécologie, et bien d'autres. La liste complète est disponible lors de la prise de rendez-vous."
    },
    {
      question: "Comment recevoir mon ordonnance après la consultation ?",
      answer: "À la fin de la consultation, le médecin établit une ordonnance électronique qui vous est envoyée par email. Elle est également stockée dans votre dossier médical sur notre plateforme."
    },
    {
      question: "Que faire en cas d'urgence médicale ?",
      answer: "Notre service n'est pas adapté aux urgences médicales. En cas d'urgence, veuillez contacter les services d'urgence locaux ou vous rendre à l'hôpital le plus proche."
    },
    {
      question: "Comment sont sélectionnés les médecins sur votre plateforme ?",
      answer: "Tous nos médecins sont des professionnels certifiés et inscrits à l'ordre des médecins de leur pays. Nous vérifions rigoureusement leurs diplômes, leurs qualifications et leurs expériences avant de les intégrer à notre réseau."
    }
  ];

  return (
    <section className="section-padding bg-hypocrate-gray" id="faq">
      <div className="container-custom">
        <h2 className="section-title">Questions fréquentes</h2>
        
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left font-medium text-gray-900 hover:text-hypocrate-blue hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a 
            href="mailto:contact@hypocrate-teleconsult.com" 
            className="text-hypocrate-blue hover:underline font-medium"
          >
            Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
