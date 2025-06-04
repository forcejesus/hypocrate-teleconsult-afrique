
import { Languages, Globe } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    { name: "Wolof", regions: ["Sénégal", "Gambie"], flags: ["🇸🇳", "🇬🇲"], priority: true },
    { name: "Bambara", regions: ["Mali", "Burkina Faso"], flags: ["🇲🇱", "🇧🇫"], priority: true },
    { name: "Hausa", regions: ["Nigeria", "Niger"], flags: ["🇳🇬", "🇳🇪"], priority: true },
    { name: "Swahili", regions: ["Kenya", "Tanzanie"], flags: ["🇰🇪", "🇹🇿"], priority: true },
    { name: "Lingala", regions: ["RDC", "Congo"], flags: ["🇨🇩", "🇨🇬"], priority: true },
    { name: "Amharique", regions: ["Éthiopie"], flags: ["🇪🇹", "🇪🇹"], priority: true },
    { name: "Yoruba", regions: ["Nigeria", "Bénin"], flags: ["🇳🇬", "🇧🇯"], priority: true },
    { name: "Arabe", regions: ["Maghreb", "Moyen-Orient"], flags: ["🇲🇦", "🇸🇦"], priority: true },
    { name: "Mandingue", regions: ["Sénégal", "Mali"], flags: ["🇸🇳", "🇲🇱"], priority: true },
    { name: "Peul (Fulfulde)", regions: ["Sahel"], flags: ["🇸🇳", "🇲🇱"], priority: true },
    { name: "Sango", regions: ["République centrafricaine"], flags: ["🇨🇫", "🇨🇫"], priority: true },
    { name: "Malagasy", regions: ["Madagascar"], flags: ["🇲🇬", "🇲🇬"], priority: true },
    { name: "Français", regions: ["France", "Afrique francophone"], flags: ["🇫🇷", "🇨🇮"], priority: false },
    { name: "Anglais", regions: ["International"], flags: ["🇺🇸", "🇬🇧"], priority: false },
    { name: "Espagnol", regions: ["Espagne", "Amérique latine"], flags: ["🇪🇸", "🇲🇽"], priority: false },
    { name: "Portugais", regions: ["Portugal", "Brésil"], flags: ["🇵🇹", "🇧🇷"], priority: false }
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
            <h3 className="text-2xl font-bold text-gray-900">Langues africaines</h3>
            <span className="ml-3 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
              Disponible
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {priorityLanguages.map((language, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {language.flags.map((flag, idx) => (
                        <span key={idx} className="text-2xl">{flag}</span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{language.name}</h4>
                  <p className="text-sm text-gray-600">{language.regions.join(", ")}</p>
                  <div className="absolute top-2 right-2">
                    <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full">
                      Disponible
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
            <span className="ml-3 bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
              Disponible
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {otherLanguages.map((language, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {language.flags.map((flag, idx) => (
                      <span key={idx} className="text-2xl">{flag}</span>
                    ))}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{language.name}</h4>
                <p className="text-sm text-gray-600">{language.regions.join(", ")}</p>
                <div className="absolute top-2 right-2">
                  <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full">
                    Disponible
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
