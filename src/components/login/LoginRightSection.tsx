
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
      <Card className="w-full max-w-md rounded-2xl shadow-lg border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <motion.div
            className="text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">Connexion</h2>
            <p className="text-gray-600 mt-1">Accédez à votre espace Hypocrate</p>
          </motion.div>

          <LoginForm />
        </CardContent>
      </Card>
    </motion.div>
  );
};
