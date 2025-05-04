
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CtaSection from '@/components/sections/CtaSection';

const CommentCaMarche = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Comment ça marche</h1>
          </div>
        </div>
        <HowItWorksSection />
        <div className="bg-white py-12">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Nos services de téléconsultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-hypocrate-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pour les patients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Créez votre compte en quelques minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Choisissez votre médecin et la date de consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Indiquez si vous avez besoin d'un service de traduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Connectez-vous à l'heure du rendez-vous via notre plateforme</span>
                  </li>
                </ul>
              </div>
              <div className="bg-hypocrate-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pour les médecins</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Inscrivez-vous en fournissant vos qualifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Définissez vos disponibilités sur votre agenda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Recevez des notifications pour vos rendez-vous</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Consultez avec l'assistance d'un traducteur si nécessaire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default CommentCaMarche;
