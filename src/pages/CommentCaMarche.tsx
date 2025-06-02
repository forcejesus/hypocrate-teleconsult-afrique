
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
            <h2 className="text-3xl font-bold mb-8">Nos services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-hypocrate-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pour les patients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Créez votre compte patient en quelques minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Choisissez votre médecin selon vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Réservez votre consultation à l'heure qui vous convient</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Recevez vos ordonnances et conseils médicaux</span>
                  </li>
                </ul>
              </div>
              <div className="bg-hypocrate-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pour les médecins</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Inscription et vérification des diplômes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Définissez vos créneaux de disponibilité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Consultez vos patients via notre plateforme sécurisée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>Gérez vos consultations et recevez vos paiements</span>
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
