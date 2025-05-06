
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Section oblique de fond */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 
          after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
          after:bg-hypocrate-blue after:opacity-10 after:transform after:rotate-6 after:origin-top-right after:translate-y-[-10%]">
        </div>

        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 md:gap-12">
            {/* Section de gauche: image et texte */}
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

              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl mb-8 h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <img 
                  src={
                    userType === 'medecin' 
                      ? 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000'
                      : userType === 'traducteur' 
                        ? 'https://images.unsplash.com/photo-1643884820364-3181d28b5ebe?q=80&w=2000'
                        : 'https://images.unsplash.com/photo-1638202993928-7d113cdf04b9?q=80&w=2000'
                  } 
                  alt="Connexion Hypocrate" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <p className="text-white font-medium text-xl">
                    {userType === 'medecin' 
                      ? 'Espace Médecin'
                      : userType === 'traducteur' 
                        ? 'Espace Traducteur'
                        : 'Espace Patient'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : 20 }}
                transition={{ delay: 0.7 }}
                className="hidden md:block"
              >
                <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-hypocrate-${i === 1 ? 'blue' : i === 2 ? 'green' : 'lightBlue'} flex items-center justify-center text-white text-xs font-bold`}>
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
            </motion.div>

            {/* Section de droite: formulaire */}
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
                              <FormItem className="space-y-4">
                                <FormLabel className="text-gray-700 font-medium">Je suis :</FormLabel>
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
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <div className="flex justify-between items-center">
                                  <FormLabel className="text-gray-700 font-medium">Mot de passe</FormLabel>
                                  <Link to="#" className="text-xs text-hypocrate-blue hover:underline">
                                    Mot de passe oublié ?
                                  </Link>
                                </div>
                                <div className="relative">
                                  <FormControl>
                                    <Input 
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Votre mot de passe" 
                                      className="h-12 rounded-xl"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                                    onClick={() => setShowPassword(!showPassword)}
                                  >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                  </Button>
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
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
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
