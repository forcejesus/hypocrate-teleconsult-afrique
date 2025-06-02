import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const APropos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">À propos d'Hypocrate</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Révolutionner l'accès aux soins de santé en Afrique grâce à la télémédecine
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
                <p className="text-gray-700 mb-4">
                  Hypocrate est né d'un constat simple mais alarmant : l'accès aux soins de qualité reste inégal dans de nombreuses régions d'Afrique. Face à cette réalité, notre fondateur, le Dr. Michel Kouassi, a imaginé une solution innovante qui tire parti des avancées technologiques pour transcender les frontières géographiques et linguistiques.
                </p>
                <p className="text-gray-700 mb-4">
                  Créée en 2020, notre plateforme est le fruit d'une collaboration étroite entre des professionnels de santé, des experts en technologie et des spécialistes de la traduction. Tous partagent une vision commune : rendre accessibles des consultations médicales de qualité aux patients africains, où qu'ils se trouvent.
                </p>
                <p className="text-gray-700">
                  Aujourd'hui, Hypocrate compte plus de 100 médecins certifiés dans diverses spécialités et offre des services de traduction dans plus de 15 langues africaines.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-hypocrate-blue/10 rounded-2xl -rotate-3 transform"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" 
                  alt="L'équipe Hypocrate" 
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
              <p className="text-gray-700">
                Hypocrate a pour mission de révolutionner l'accès aux soins de santé en Afrique en offrant une solution de téléconsultation qui surmonte les barrières géographiques et linguistiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-hypocrate-lightBlue p-4 rounded-full inline-flex mb-6">
                  <svg className="h-8 w-8 text-hypocrate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibilité</h3>
                <p className="text-gray-600">
                  Nous croyons que l'accès à des soins médicaux de qualité est un droit fondamental. Notre plateforme permet de consulter un médecin depuis n'importe où, réduisant ainsi les obstacles géographiques.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-hypocrate-lightBlue p-4 rounded-full inline-flex mb-6">
                  <svg className="h-8 w-8 text-hypocrate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusion linguistique</h3>
                <p className="text-gray-600">
                  La barrière de la langue ne devrait jamais limiter l'accès aux soins. Notre service de traduction en temps réel permet une communication fluide entre patients et médecins.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-hypocrate-lightBlue p-4 rounded-full inline-flex mb-6">
                  <svg className="h-8 w-8 text-hypocrate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence médicale</h3>
                <p className="text-gray-600">
                  Nous collaborons uniquement avec des médecins certifiés et expérimentés, garantissant ainsi la qualité des consultations et des diagnostics fournis sur notre plateforme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos valeurs</h2>
            
            <div className="space-y-10 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-hypocrate-lightBlue p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-hypocrate-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Équité en santé</h3>
                  <p className="text-gray-700">
                    Nous croyons fermement que tous les individus, indépendamment de leur situation géographique ou linguistique, méritent d'avoir accès à des soins de santé de qualité. Notre plateforme s'efforce de réduire les inégalités en matière de santé en offrant un accès facile à des consultations médicales professionnelles.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-hypocrate-lightBlue p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-hypocrate-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation continue</h3>
                  <p className="text-gray-700">
                    Nous investissons constamment dans la recherche et le développement de nouvelles fonctionnalités pour améliorer l'expérience utilisateur de notre plateforme. Notre équipe technique travaille sans relâche pour intégrer les dernières avancées technologiques dans notre service de téléconsultation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-hypocrate-lightBlue p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-hypocrate-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Confidentialité et éthique</h3>
                  <p className="text-gray-700">
                    La protection des données de nos patients est une priorité absolue. Nous respectons scrupuleusement les réglementations en matière de confidentialité des données médicales et appliquons les normes les plus strictes en matière de sécurité informatique pour protéger les informations sensibles.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-hypocrate-lightBlue p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-hypocrate-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration constructive</h3>
                  <p className="text-gray-700">
                    Nous travaillons en étroite collaboration avec des médecins, des traducteurs, des patients et des organisations de santé pour continuellement améliorer nos services. Cette approche collaborative nous permet de rester à l'écoute des besoins réels et d'adapter notre offre en conséquence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Impact Section */}
        <section className="py-16 bg-hypocrate-lightBlue">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Notre impact</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-hypocrate-blue mb-2">10,000+</div>
                <p className="text-gray-700">Consultations réalisées</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-hypocrate-blue mb-2">100+</div>
                <p className="text-gray-700">Médecins certifiés</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-hypocrate-blue mb-2">15+</div>
                <p className="text-gray-700">Langues disponibles</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-hypocrate-blue mb-2">20+</div>
                <p className="text-gray-700">Pays africains desservis</p>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-center">Notre vision pour l'avenir</h3>
              <p className="text-gray-700 mb-4">
                Hypocrate aspire à devenir la plateforme de référence en matière de télémédecine en Afrique. Notre objectif est d'étendre notre réseau de médecins et de traducteurs pour couvrir l'ensemble du continent africain et offrir nos services dans plus de 30 langues d'ici 2025.
              </p>
              <p className="text-gray-700 mb-4">
                Nous travaillons également au développement de fonctionnalités innovantes telles que l'intégration de l'intelligence artificielle pour améliorer les diagnostics préliminaires, et la mise en place d'un système de pharmacies partenaires pour faciliter l'accès aux médicaments prescrits.
              </p>
              <p className="text-gray-700">
                Notre ambition ultime est de contribuer significativement à l'amélioration des indicateurs de santé en Afrique en facilitant l'accès aux soins et en favorisant une culture de la prévention grâce à l'éducation sanitaire.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;
