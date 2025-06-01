
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green p-2 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                Hypocrate
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Plateforme de téléconsultation médicale avec service de traduction pour l'Afrique. 
              Connectons les patients aux meilleurs médecins du monde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-hypocrate-blue hover:bg-blue-600 transition-colors p-3 rounded-full group">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-hypocrate-blue hover:bg-blue-600 transition-colors p-3 rounded-full group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-hypocrate-blue hover:bg-blue-600 transition-colors p-3 rounded-full group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-hypocrate-blue hover:bg-blue-600 transition-colors p-3 rounded-full group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Liens rapides</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hypocrate-blue transition-colors hover:translate-x-1 transform inline-block">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-hypocrate-blue transition-colors hover:translate-x-1 transform inline-block">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link to="/nos-medecins" className="text-gray-300 hover:text-hypocrate-blue transition-colors hover:translate-x-1 transform inline-block">
                  Nos médecins
                </Link>
              </li>
              <li>
                <Link to="/comment-ca-marche" className="text-gray-300 hover:text-hypocrate-blue transition-colors hover:translate-x-1 transform inline-block">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-hypocrate-blue transition-colors hover:translate-x-1 transform inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/conseils-medicaux" className="text-gray-300 hover:text-hypocrate-blue transition-colors hover:translate-x-1 transform inline-block">
                  Conseils médicaux
                </Link>
              </li>
              <li>
                <span className="text-gray-300">Consultation générale</span>
              </li>
              <li>
                <span className="text-gray-300">Spécialistes</span>
              </li>
              <li>
                <span className="text-gray-300">Traduction médicale</span>
              </li>
              <li>
                <span className="text-gray-300">Ordonnances en ligne</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-hypocrate-blue mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Avenue de la Médecine<br />
                  75000 Paris, France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-hypocrate-blue flex-shrink-0" />
                <a href="mailto:contact@hypocrate-teleconsult.com" className="text-gray-300 hover:text-hypocrate-blue transition-colors">
                  contact@hypocrate-teleconsult.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-hypocrate-blue flex-shrink-0" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2">Horaires d'ouverture</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Lun - Ven : 8h00 - 20h00</div>
                <div>Sam : 9h00 - 17h00</div>
                <div>Dim : Urgences uniquement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Hypocrate. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/confidentialite" className="text-gray-400 hover:text-hypocrate-blue transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgu" className="text-gray-400 hover:text-hypocrate-blue transition-colors">
                Conditions générales
              </Link>
              <Link to="/consentement" className="text-gray-400 hover:text-hypocrate-blue transition-colors">
                Information & consentement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
