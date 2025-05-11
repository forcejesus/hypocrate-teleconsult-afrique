
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LoginForm } from './LoginForm';

export const LoginRightSection = () => {
  return (
    <motion.div 
      className="lg:w-1/2 flex items-center justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <Card className="w-full max-w-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden bg-white/95 backdrop-blur-md">
        <CardContent className="p-8">
          <motion.div
            className="text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">Connexion</h2>
            <p className="text-gray-600 mt-2">Accédez à votre espace Hypocrate</p>
          </motion.div>

          <LoginForm />
        </CardContent>
      </Card>
    </motion.div>
  );
};
