
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-hypocrate-lightBlue/30 to-green-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hypocrate-blue">
            Besoin d'aide ? Nous sommes là pour vous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre équipe support est disponible pour répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <div className="w-12 h-12 bg-hypocrate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-hypocrate-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-sm text-gray-600 mb-3">Support 24h/7j</p>
              <a 
                href="tel:+33123456789" 
                className="text-hypocrate-blue hover:underline font-medium"
              >
                +33 1 23 45 67 89
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <div className="w-12 h-12 bg-hypocrate-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-hypocrate-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-sm text-gray-600 mb-3">Réponse sous 2h</p>
              <a 
                href="mailto:contact@hypocrate-teleconsult.com" 
                className="text-hypocrate-green hover:underline font-medium text-sm"
              >
                contact@hypocrate-teleconsult.com
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Chat en direct</h3>
              <p className="text-sm text-gray-600 mb-3">Assistance immédiate</p>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Démarrer le chat
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support multilingue</h3>
              <p className="text-sm text-gray-600 mb-3">+20 langues</p>
              <span className="text-purple-500 font-medium text-sm">
                Français, Wolof, Arabe...
              </span>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-hypocrate-blue mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Horaires d'ouverture</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">08h00 - 20h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">09h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-medium">10h00 - 16h00</span>
                </div>
                <div className="mt-4 p-3 bg-hypocrate-lightBlue/20 rounded-lg">
                  <p className="text-sm text-hypocrate-blue font-medium">
                    🚨 Service d'urgence disponible 24h/24
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Une question spécifique ?</h3>
              <p className="text-gray-600 mb-6">
                Contactez-nous via notre formulaire détaillé pour une réponse personnalisée
              </p>
              <Button 
                asChild 
                className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Formulaire de contact
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
