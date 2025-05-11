
import { motion } from 'framer-motion';

interface RegistrationHeaderProps {
  step: number;
  userType: string;
}

export const RegistrationHeader = ({ step, userType }: RegistrationHeaderProps) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 items-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="md:w-1/2">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green mb-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {step === 1 ? "Rejoignez Hypocrate" : "Créez votre mot de passe"}
        </motion.h1>
        <motion.p 
          className="text-gray-600 mb-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {step === 1 
            ? "Créez votre compte en quelques étapes simples pour accéder aux services de télémédecine."
            : "Choisissez un mot de passe sécurisé pour protéger votre compte Hypocrate."}
        </motion.p>
      </div>
      <div className="md:w-1/2">
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <img 
            src={
              userType === 'medecin' 
                ? 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?q=80&w=800'
                : userType === 'traducteur' 
                  ? 'https://images.unsplash.com/photo-1558443957-d056622df610?q=80&w=800'
                  : 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800'
            } 
            alt="Inscription Hypocrate" 
            className="w-full h-60 object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
