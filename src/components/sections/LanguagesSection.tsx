
import { Languages, Globe, MessageSquare } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    { name: "Wolof", region: "Sénégal, Gambie", priority: true },
    { name: "Bambara", region: "Mali, Burkina Faso", priority: true },
    { name: "Hausa", region: "Nigeria, Niger", priority: true },
    { name: "Swahili", region: "Kenya, Tanzanie", priority: true },
    { name: "Lingala", region: "RDC, Congo", priority: true },
    { name: "Amharique", region: "Éthiopie", priority: true },
    { name: "Yoruba", region: "Nigeria, Bénin", priority: true },
    { name: "Arabe", region: "Maghreb, Moyen-Orient", priority: true },
    { name: "Français", region: "France, Afrique francophone", priority: false },
    { name: "Anglais", region: "International", priority: false },
    { name: "Espagnol", region: "Espagne, Amérique latine", priority: false },
    { name: "Portugais", region: "Portugal, Brésil", priority: false },
    { name: "Mandingue", region: "Sénégal, Mali", priority: true },
    { name: "Peul (Fulfulde)", region: "Sahel", priority: true },
    { name: "Sango", region: "République centrafricaine", priority: true },
    { name: "Malagasy", region: "Madagascar", priority: true }
  ];

  const priorityLanguages = languages.filter(lang => lang.priority);
  const otherLanguages = languages.filter(lang => !lang.priority);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-hypocrate-blue font-semibold px-6 py-3 rounded-full text-sm shadow-sm mb-6">
            <Languages className="w-4 h-4 mr-2" />
            Communication sans barrières
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
              Langues supportées
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Nous donnons la priorité aux langues africaines pour faciliter l'accès aux soins 
            des communautés souvent négligées par les services de santé traditionnels.
          </p>
        </div>

        {/* Langues prioritaires */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Globe className="w-6 h-6 text-orange-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Langues africaines (priorité)</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {priorityLanguages.map((language, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-orange-50 rounded-full p-3 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{language.name}</h4>
                  <p className="text-sm text-gray-600">{language.region}</p>
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
                      Priorité
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autres langues */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Languages className="w-6 h-6 text-hypocrate-blue mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Langues internationales</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {otherLanguages.map((language, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
                <div className="bg-blue-50 rounded-full p-3 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-hypocrate-blue" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{language.name}</h4>
                <p className="text-sm text-gray-600">{language.region}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA pour demander d'autres langues */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-hypocrate-blue/10 to-hypocrate-green/10 p-8 rounded-3xl border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Votre langue n'est pas listée ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nous travaillons constamment pour élargir notre réseau d'interprètes. 
              Contactez-nous pour nous faire part de vos besoins linguistiques.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Demander une langue
              <MessageSquare className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
