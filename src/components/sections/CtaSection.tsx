
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hypocrate-blue to-blue-600 opacity-95 z-0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
          <path d="M0,20 L100,80" stroke="white" strokeWidth="0.5"></path>
          <path d="M0,80 L100,20" stroke="white" strokeWidth="0.5"></path>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à consulter un médecin en ligne ?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl">
            Prenez rendez-vous dès maintenant et bénéficiez d'une consultation médicale de qualité, 
            avec l'assistance d'un traducteur si nécessaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
            <Button size="lg" className="bg-white text-hypocrate-blue hover:bg-gray-100 font-semibold px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all">
              Prendre rendez-vous
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-6 rounded-md">
              Créer un compte
            </Button>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-white font-semibold text-lg mb-1">Consultation rapide</div>
              <p className="text-blue-100">Rendez-vous en moins de 30 minutes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-white font-semibold text-lg mb-1">Paiement sécurisé</div>
              <p className="text-blue-100">Transactions 100% sécurisées</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-white font-semibold text-lg mb-1">Suivi médical</div>
              <p className="text-blue-100">Dossier médical accessible en ligne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
