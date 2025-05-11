
import { motion } from 'framer-motion';

interface AnimatedLoginImageProps {
  userType: string;
  animationComplete: boolean;
}

export const AnimatedLoginImage = ({ userType, animationComplete }: AnimatedLoginImageProps) => {
  // Default image for when no user type is selected
  const defaultImage = 'https://images.unsplash.com/photo-1638202993928-7d113cdf04b9?q=80&w=2000';
  
  // Determine image based on user type
  const imageUrl = 
    userType === 'medecin' 
      ? 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000'
      : userType === 'traducteur' 
        ? 'https://images.unsplash.com/photo-1643884820364-3181d28b5ebe?q=80&w=2000'
        : defaultImage;

  return (
    <>
      <motion.div 
        className="relative rounded-2xl overflow-hidden shadow-xl mb-8 h-80 md:h-96"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <img 
          src={imageUrl}
          alt="Connexion Hypocrate" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
          <p className="text-white font-medium text-xl">
            {userType === 'medecin' 
              ? 'Espace Médecin'
              : userType === 'traducteur' 
                ? 'Espace Traducteur'
                : userType ? 'Espace Patient' : 'Bienvenue sur Hypocrate'}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : 20 }}
        transition={{ delay: 0.7 }}
        className="hidden md:block"
      >
        <div className="flex items-center gap-4 bg-gray-50/80 p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-hypocrate-${i === 1 ? 'blue' : i === 2 ? 'green' : 'lightBlue'} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                {i === 1 ? 'MD' : i === 2 ? 'PT' : 'TR'}
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium">Rejoignez plus de 1000 professionnels et patients</p>
            <p className="text-xs text-gray-500">Une communauté médicale internationale</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
