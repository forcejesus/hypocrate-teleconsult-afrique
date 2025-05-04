
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UserTypeSelector } from '@/components/auth/UserTypeSelector';

const formSchema = z.object({
  userType: z.string().min(1, "Veuillez choisir un type d'utilisateur"),
  email: z.string().email("L'email n'est pas valide"),
  password: z.string().min(1, "Veuillez entrer votre mot de passe"),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: '',
      email: '',
      password: '',
    },
  });

  const userType = form.watch('userType');

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
        delayChildren: 0.2,
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        className="flex-grow bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <motion.h1 
                className="text-3xl font-bold text-hypocrate-blue mb-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Connexion à Hypocrate
              </motion.h1>
              <motion.p 
                className="text-gray-600"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Accédez à votre espace personnel
              </motion.p>
            </motion.div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-lg mb-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <img 
                src={
                  userType === 'medecin' 
                    ? 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800'
                    : userType === 'traducteur' 
                      ? 'https://images.unsplash.com/photo-1643884820364-3181d28b5ebe?q=80&w=800'
                      : 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800'
                } 
                alt="Connexion Hypocrate" 
                className="w-full h-48 object-cover"
              />
            </motion.div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Connexion</CardTitle>
                    <CardDescription>
                      Connectez-vous à votre compte Hypocrate
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
                            <FormItem className="space-y-4">
                              <FormLabel>Je suis :</FormLabel>
                              <FormControl>
                                <UserTypeSelector 
                                  value={field.value} 
                                  onChange={field.onChange}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="votre@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mot de passe</FormLabel>
                              <div className="relative">
                                <FormControl>
                                  <Input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Votre mot de passe" 
                                    {...field} 
                                  />
                                </FormControl>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-0 top-0"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </Button>
                              </div>
                              <div className="text-right mt-1">
                                <Link to="#" className="text-sm text-hypocrate-blue hover:underline">
                                  Mot de passe oublié ?
                                </Link>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>

                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full bg-hypocrate-blue hover:bg-blue-600"
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
                      <Link to="/register" className="text-hypocrate-blue hover:underline">
                        Créer un compte
                      </Link>
                    </p>
                  </motion.div>
                </motion.div>
              </form>
            </Form>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Login;
