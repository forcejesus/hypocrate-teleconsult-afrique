
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ConseilsMedicaux = () => {
  const categories = [
    {
      title: "Prévention générale",
      icon: "🛡️",
      articles: [
        {
          title: "L'importance d'une bonne hydratation",
          content: "Boire suffisamment d'eau est essentiel pour maintenir une bonne santé. Il est recommandé de consommer au moins 1,5 à 2 litres d'eau par jour. L'hydratation adéquate favorise la digestion, aide à éliminer les toxines, maintient la température corporelle et assure le bon fonctionnement des organes. En climat chaud ou pendant une activité physique intense, augmentez votre consommation d'eau."
        },
        {
          title: "L'importance du sommeil pour la santé",
          content: "Un sommeil de qualité est fondamental pour la santé physique et mentale. Les adultes devraient dormir entre 7 et 9 heures par nuit. Un sommeil insuffisant peut affaiblir le système immunitaire, augmenter les risques de maladies chroniques et réduire les capacités cognitives. Établissez une routine de coucher régulière, évitez les écrans avant de dormir et créez un environnement propice au sommeil."
        }
      ]
    },
    {
      title: "Nutrition et bien-être",
      icon: "🥗",
      articles: [
        {
          title: "Les principes d'une alimentation équilibrée",
          content: "Une alimentation équilibrée est la base d'une bonne santé. Privilégiez les fruits et légumes frais, les céréales complètes, les protéines maigres et les bonnes graisses. Limitez la consommation de sucres raffinés, de sel et de graisses saturées. Essayez de manger des repas variés et colorés pour bénéficier d'un large éventail de nutriments."
        },
        {
          title: "Les bienfaits des légumes verts",
          content: "Les légumes verts sont riches en vitamines, minéraux, fibres et antioxydants. Ils contribuent à renforcer le système immunitaire, favorisent une bonne digestion, aident à maintenir un poids santé et réduisent le risque de maladies chroniques. Essayez d'en consommer à chaque repas, qu'ils soient crus, cuits à la vapeur ou intégrés à vos plats."
        }
      ]
    },
    {
      title: "Santé familiale",
      icon: "👪",
      articles: [
        {
          title: "La vaccination des enfants",
          content: "La vaccination est l'un des moyens les plus efficaces de protéger vos enfants contre des maladies graves et potentiellement mortelles. Suivez scrupuleusement le calendrier vaccinal recommandé et consultez régulièrement un pédiatre pour vous assurer que votre enfant est à jour dans ses vaccinations."
        },
        {
          title: "Créer un environnement sain à la maison",
          content: "Un environnement domestique sain est essentiel pour le bien-être de toute la famille. Assurez une bonne ventilation, réduisez les allergènes, utilisez des produits de nettoyage non toxiques et maintenez une hygiène adéquate. Créez également un espace propice à l'activité physique et aux interactions familiales positives."
        }
      ]
    },
    {
      title: "Activité physique",
      icon: "🏃‍♂️",
      articles: [
        {
          title: "L'importance de l'exercice régulier",
          content: "L'activité physique régulière est fondamentale pour maintenir une bonne santé. Il est recommandé de pratiquer au moins 150 minutes d'exercice modéré par semaine. L'exercice régulier renforce le cœur, améliore la circulation sanguine, maintient un poids santé, renforce les muscles et les os, et améliore la santé mentale."
        },
        {
          title: "Débuter une activité physique en douceur",
          content: "Si vous êtes sédentaire et souhaitez commencer une activité physique, il est important de le faire progressivement. Commencez par des marches rapides de 10 à 15 minutes, puis augmentez graduellement la durée et l'intensité. Consultez un professionnel de santé avant de commencer si vous avez des problèmes de santé préexistants."
        }
      ]
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Conseils médicaux</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Découvrez nos conseils santé rédigés par des professionnels
            </p>
          </div>
        </div>
        
        <div className="container-custom py-12">
          <div className="bg-white p-6 rounded-xl shadow-md mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-hypocrate-blue rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Note importante</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Ces conseils sont fournis à titre informatif uniquement et ne remplacent en aucun cas une consultation médicale professionnelle.
            </p>
            <p className="text-gray-700">
              En cas de symptômes persistants ou préoccupants, consultez toujours un médecin qualifié.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-hypocrate-blue hover:bg-blue-600 text-white">
                <Link to="/nos-medecins">Consulter un médecin</Link>
              </Button>
            </div>
          </div>
          
          {/* Categories */}
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.articles.map((article, articleIndex) => (
                  <div key={articleIndex} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-hypocrate-blue">{article.title}</h3>
                      <p className="text-gray-700">{article.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Conseils généraux</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Mode de vie</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Dormez 7-8 heures par nuit</li>
                  <li>Buvez suffisamment d'eau</li>
                  <li>Limitez la consommation d'alcool</li>
                  <li>Ne fumez pas</li>
                  <li>Pratiquez une activité physique régulière</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Nutrition</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Mangez des fruits et légumes quotidiennement</li>
                  <li>Limitez le sel et le sucre</li>
                  <li>Privilégiez les céréales complètes</li>
                  <li>Variez votre alimentation</li>
                  <li>Évitez les aliments ultra-transformés</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Santé mentale</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Pratiquez la relaxation ou la méditation</li>
                  <li>Prenez du temps pour vous</li>
                  <li>Entretenez des relations sociales positives</li>
                  <li>Limitez le stress</li>
                  <li>N'hésitez pas à consulter en cas de besoin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConseilsMedicaux;
