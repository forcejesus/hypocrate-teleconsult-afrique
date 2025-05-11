
import { motion } from 'framer-motion';
import { AnimatedLoginImage } from './AnimatedLoginImage';

interface LoginLeftSectionProps {
  userType: string;
  animationComplete: boolean;
}

export const LoginLeftSection = ({ userType, animationComplete }: LoginLeftSectionProps) => {
  return (
    <motion.div 
      className="lg:w-1/2 flex flex-col justify-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="mb-8">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-hypocrate-blue mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Bienvenue sur <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">Hypocrate</span>
        </motion.h1>
        <motion.p 
          className="text-gray-600 md:text-lg max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Accédez à votre espace personnel pour profiter de nos services de téléconsultation médicale internationaux
        </motion.p>
      </div>

      <AnimatedLoginImage userType={userType} animationComplete={animationComplete} />
    </motion.div>
  );
};
