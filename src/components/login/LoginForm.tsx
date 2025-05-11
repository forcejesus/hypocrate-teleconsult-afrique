
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PasswordField } from './PasswordField';
import { UserTypeSelectDropdown } from '@/components/auth/UserTypeSelectDropdown';

const formSchema = z.object({
  userType: z.string().min(1, "Veuillez choisir un type d'utilisateur"),
  email: z.string().email("L'email n'est pas valide"),
  password: z.string().min(1, "Veuillez entrer votre mot de passe"),
});

type FormValues = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Implémentation de la connexion à ajouter ici
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <UserTypeSelectDropdown
                  value={field.value}
                  onChange={field.onChange}
                  className="space-y-3"
                />
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="votre@email.com" 
                      className="h-12 rounded-xl" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PasswordField form={form} />
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-4 pt-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 rounded-xl text-white font-medium text-lg"
            >
              Se connecter
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-sm text-gray-600">
              Pas encore de compte ? {' '}
              <Link to="/register" className="text-hypocrate-blue hover:underline font-medium">
                Créer un compte
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </form>
    </Form>
  );
};
