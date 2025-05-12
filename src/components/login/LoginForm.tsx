
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PasswordField } from './PasswordField';
import { UserTypeSelectDropdown } from '@/components/auth/UserTypeSelectDropdown';
import { containerVariants, itemVariants } from "@/components/auth/registration/AnimationVariants";
import { toast } from "sonner";

const formSchema = z.object({
  userType: z.string().min(1, "Veuillez choisir un type d'utilisateur"),
  email: z.string().email("L'email n'est pas valide"),
  password: z.string().min(1, "Veuillez entrer votre mot de passe"),
});

type FormValues = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
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
    
    // Rediriger vers l'espace approprié en fonction du type d'utilisateur
    switch (values.userType) {
      case 'patient':
        toast.success("Connexion réussie en tant que patient");
        navigate('/patient-dashboard');
        break;
      case 'medecin':
      case 'doctor':
        toast.success("Connexion réussie en tant que médecin");
        navigate('/doctor-dashboard');
        break;
      case 'traducteur':
      case 'interpreter':
        toast.success("Connexion réussie en tant qu'interprète");
        navigate('/interpreter-dashboard');
        break;
      default:
        toast.error("Type d'utilisateur non reconnu");
        console.error("Type d'utilisateur non reconnu:", values.userType);
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
          <motion.div variants={itemVariants} className="space-y-1.5">
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <UserTypeSelectDropdown
                  value={field.value}
                  onChange={field.onChange}
                  className="space-y-2.5"
                />
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1.5">
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
                      className="h-12 rounded-xl border-gray-200 focus:ring-2 focus:ring-hypocrate-blue/40 transition-all duration-200" 
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
          className="space-y-5 pt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 rounded-xl text-white font-medium text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
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
              <Link to="/register" className="text-hypocrate-blue hover:underline font-medium hover:text-hypocrate-green transition-colors duration-200">
                Créer un compte
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </form>
    </Form>
  );
};
