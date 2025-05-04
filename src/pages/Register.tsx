
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries } from '@/data/countries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';
import { UserTypeSelector } from '@/components/auth/UserTypeSelector';

const formSchema = z.object({
  userType: z.string().min(1, "Veuillez choisir un type d'utilisateur"),
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("L'email n'est pas valide"),
  country: z.string().min(2, "Veuillez sélectionner un pays"),
  phone: z.string().min(6, "Le numéro de téléphone doit contenir au moins 6 chiffres"),
  gender: z.string().min(1, "Veuillez sélectionner votre genre"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string().min(8, "Veuillez confirmer votre mot de passe"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: '',
      firstName: '',
      lastName: '',
      email: '',
      country: 'FR',
      phone: '',
      gender: '',
      password: '',
      confirmPassword: '',
    },
  });

  const userType = form.watch('userType');
  const selectedCountry = form.watch('country');
  
  const handleCountryChange = (value: string) => {
    form.setValue('country', value);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Implémentation de l'inscription à ajouter ici
  };

  const goToNextStep = async () => {
    const fields = ['userType', 'firstName', 'lastName', 'email', 'country', 'phone', 'gender'];
    
    const isValid = await form.trigger(fields as any);
    
    if (isValid) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevStep = () => {
    setStep(1);
    window.scrollTo(0, 0);
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
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:w-1/2">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-hypocrate-blue mb-4"
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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>{step === 1 ? "Informations personnelles" : "Sécurité du compte"}</CardTitle>
                  <CardDescription>
                    {step === 1 
                      ? "Veuillez renseigner vos informations personnelles" 
                      : "Créez un mot de passe sécurisé pour protéger votre compte"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {step === 1 ? (
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Prénom</FormLabel>
                                <FormControl>
                                  <Input placeholder="Votre prénom" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom</FormLabel>
                                <FormControl>
                                  <Input placeholder="Votre nom" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      </div>

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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pays</FormLabel>
                                <Select 
                                  onValueChange={handleCountryChange} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Sélectionnez votre pays" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {countries.map((country) => (
                                      <SelectItem key={country.code} value={country.code}>
                                        <span className="flex items-center">
                                          <span className="mr-2">{country.flag}</span>
                                          {country.name}
                                        </span>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => {
                              const dialCode = countries.find(c => c.code === selectedCountry)?.dialCode || '';
                              return (
                                <FormItem>
                                  <FormLabel>Téléphone</FormLabel>
                                  <div className="flex">
                                    <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                                      {dialCode}
                                    </div>
                                    <FormControl>
                                      <Input 
                                        className="rounded-l-none" 
                                        placeholder="Numéro de téléphone" 
                                        {...field} 
                                      />
                                    </FormControl>
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              );
                            }}
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Genre</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionner" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="M">Homme</SelectItem>
                                  <SelectItem value="F">Femme</SelectItem>
                                  <SelectItem value="O">Autre</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
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
                                    placeholder="Créez un mot de passe sécurisé" 
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
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirmer le mot de passe</FormLabel>
                              <div className="relative">
                                <FormControl>
                                  <Input 
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirmez votre mot de passe" 
                                    {...field} 
                                  />
                                </FormControl>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-0 top-0"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </Button>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              <div className="flex justify-between">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goToPrevStep}
                  >
                    Retour
                  </Button>
                )}
                {step === 1 ? (
                  <Button
                    type="button"
                    className="ml-auto bg-hypocrate-blue hover:bg-blue-600"
                    onClick={goToNextStep}
                  >
                    Continuer
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto bg-hypocrate-blue hover:bg-blue-600"
                  >
                    S'inscrire
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Register;
