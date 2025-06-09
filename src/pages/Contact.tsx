import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
const Contact = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Nous contacter</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Notre équipe est là pour vous accompagner dans votre parcours de soins
            </p>
          </div>
        </div>

        <div className="container-custom py-16">
          {/* Contact Info & Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-hypocrate-blue">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-hypocrate-lightBlue p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-hypocrate-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-gray-600 mt-1 whitespace-pre-line">
                      123 Avenue de la Médecine
                      75000 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hypocrate-lightBlue p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-hypocrate-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:contact@hypocrate-teleconsult.com" className="text-hypocrate-blue hover:underline">
                        contact@hypocrate-teleconsult.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hypocrate-lightBlue p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-hypocrate-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-gray-600 mt-1 flex items-center">
                      <span className="text-lg mr-2">🇫🇷</span>
                      <a href="tel:+33123456789" className="text-hypocrate-blue hover:underline">
                        +33 1 23 45 67 89
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                
                
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-hypocrate-blue">Envoyer un message</h2>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hypocrate-blue focus:border-hypocrate-blue" placeholder="Votre nom et prénom" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse e-mail
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hypocrate-blue focus:border-hypocrate-blue" placeholder="votre@email.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hypocrate-blue focus:border-hypocrate-blue" placeholder="L'objet de votre message" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hypocrate-blue focus:border-hypocrate-blue" placeholder="Votre message..."></textarea>
                </div>
                
                <Button className="w-full bg-hypocrate-blue hover:bg-blue-600 text-white">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Contact;