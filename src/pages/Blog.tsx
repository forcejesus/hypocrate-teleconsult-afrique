
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les avantages de la téléconsultation en Afrique",
      excerpt: "Découvrez comment la télémédecine révolutionne l'accès aux soins de santé sur le continent africain.",
      author: "Dr. Marie Dubois",
      date: "15 Mars 2024",
      image: "/placeholder.svg",
      category: "Télémédecine"
    },
    {
      id: 2,
      title: "Barrière linguistique : Comment nos interprètes facilitent vos consultations",
      excerpt: "L'importance des services d'interprétation médicale pour des soins de qualité.",
      author: "Dr. Ahmed Hassan",
      date: "10 Mars 2024",
      image: "/placeholder.svg",
      category: "Services"
    },
    {
      id: 3,
      title: "Préparer sa première téléconsultation : Guide pratique",
      excerpt: "Tous nos conseils pour optimiser votre expérience de consultation en ligne.",
      author: "Dr. Sarah Kone",
      date: "5 Mars 2024",
      image: "/placeholder.svg",
      category: "Guide"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-hypocrate-lightBlue to-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hypocrate-blue mb-6">
              Blog Hypocrate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Actualités, conseils médicaux et guides pratiques pour votre santé
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-hypocrate-lightBlue text-hypocrate-blue px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-hypocrate-blue hover:text-hypocrate-blue hover:bg-blue-50">
                        Lire plus
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
