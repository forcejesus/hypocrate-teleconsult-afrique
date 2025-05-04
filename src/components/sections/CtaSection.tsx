
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="bg-hypocrate-blue py-16">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à consulter un médecin en ligne ?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl">
            Prenez rendez-vous dès maintenant et bénéficiez d'une consultation médicale de qualité, 
            avec l'assistance d'un traducteur si nécessaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-hypocrate-blue hover:bg-gray-100 font-semibold px-8 py-6">
              Prendre rendez-vous
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 font-semibold px-8 py-6">
              Créer un compte
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
