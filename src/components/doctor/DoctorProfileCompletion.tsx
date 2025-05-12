
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { User, Languages, DollarSign, Calendar, FileText } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const profileSchema = z.object({
  specialty: z.string().min(2, {
    message: "La spécialité doit contenir au moins 2 caractères.",
  }),
  licenseNumber: z.string().min(3, {
    message: "Le numéro de licence est requis.",
  }),
  yearsOfExperience: z.string().refine((val) => !isNaN(parseInt(val)), {
    message: "Veuillez entrer un nombre valide.",
  }),
  education: z.string().min(2, {
    message: "L'éducation est requise.",
  }),
  languages: z.string().min(2, {
    message: "Veuillez indiquer au moins une langue."
  }),
  hourlyRate: z.string().refine((val) => !isNaN(parseInt(val)), {
    message: "Veuillez entrer un tarif horaire valide.",
  }),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface DoctorProfileCompletionProps {
  onComplete: () => void;
}

const DoctorProfileCompletion: React.FC<DoctorProfileCompletionProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      specialty: '',
      licenseNumber: '',
      yearsOfExperience: '',
      education: '',
      languages: '',
      hourlyRate: '',
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLicenseFile(e.target.files[0]);
    }
  };

  const handleNextStep = async () => {
    // For step 1, validate only the first step fields
    const fieldsToValidate = ['specialty', 'licenseNumber', 'yearsOfExperience', 'education'];
    
    const isValid = await form.trigger(fieldsToValidate as any);
    
    if (isValid) {
      if (!licenseFile) {
        toast({
          title: "Document manquant",
          description: "Veuillez télécharger votre licence médicale",
          variant: "destructive"
        });
        return;
      }
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Form data:", data);
    console.log("License file:", licenseFile);
    toast({
      title: "Profil complété",
      description: "Votre profil a été enregistré avec succès. Vos documents seront vérifiés prochainement."
    });
    onComplete();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7)' }}>
      </div>
      
      <div className="w-full max-w-2xl relative z-10">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/30"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600" style={{ 
            width: step === 1 ? '50%' : '100%',
            transition: 'width 0.5s ease-in-out'
          }}></div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
            <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {step === 1 ? "Informations Professionnelles" : "Paramètres de Consultation"}
            </h1>
            <p className="text-gray-600 mt-2">
              {step === 1 
                ? "Complétez votre profil médical et téléchargez vos documents officiels."
                : "Configurez vos paramètres de consultation et votre disponibilité."}
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6">
              {step === 1 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-center">
                    <User className="w-5 h-5 text-indigo-500 mr-2" />
                    <h2 className="text-lg font-medium">Identité Professionnelle</h2>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="specialty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Spécialité Médicale</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Cardiologie, Pédiatrie, Généraliste..." className="bg-white shadow-sm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="licenseNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro de Licence / RPPS</FormLabel>
                          <FormControl>
                            <Input placeholder="Entrez votre numéro de licence ou RPPS" className="bg-white shadow-sm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Formation & Diplômes</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Doctorat en Médecine, Université de Paris" className="bg-white shadow-sm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="yearsOfExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Années d'expérience</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" placeholder="Ex: 10" className="bg-white shadow-sm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <div className="space-y-2">
                      <FormLabel>Documents Officiels</FormLabel>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1">
                          <div className="border-2 border-dashed border-indigo-200 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors cursor-pointer bg-white/50 shadow-inner hover:shadow-md">
                            <FileText className="w-6 h-6 mx-auto text-indigo-500 mb-2" />
                            <label className="cursor-pointer">
                              <span className="text-sm text-indigo-600 font-medium">
                                {licenseFile ? licenseFile.name : "Télécharger votre licence ou autorisation d'exercer"}
                              </span>
                              <input 
                                type="file" 
                                className="sr-only"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="text-xs text-gray-500 mt-1">PDF, JPG ou PNG (max 5MB)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-center">
                    <Languages className="w-5 h-5 text-indigo-500 mr-2" />
                    <h2 className="text-lg font-medium">Langues & Tarification</h2>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="languages"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Langues parlées</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Français, Anglais, Arabe" className="bg-white shadow-sm" {...field} />
                          </FormControl>
                          <p className="text-xs text-gray-500 mt-1">Séparez les langues par des virgules</p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center mt-6">
                    <DollarSign className="w-5 h-5 text-indigo-500 mr-2" />
                    <h2 className="text-lg font-medium">Tarification</h2>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="hourlyRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tarif horaire (€)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" placeholder="Ex: 80" className="bg-white shadow-sm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center mt-6">
                    <Calendar className="w-5 h-5 text-indigo-500 mr-2" />
                    <h2 className="text-lg font-medium">Disponibilité</h2>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <p className="text-sm text-gray-600 mb-3">
                      Vous pourrez configurer votre calendrier de disponibilité en détail dans les paramètres après avoir complété votre profil.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              <Separator className="my-6" />

              <div className="flex justify-between">
                {step > 1 && (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="bg-white"
                  >
                    Précédent
                  </Button>
                )}
                <div className={step === 1 ? "ml-auto" : ""}>
                  {step === 1 ? (
                    <Button 
                      type="button" 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg"
                      onClick={handleNextStep}
                    >
                      Suivant
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg"
                    >
                      Terminer
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorProfileCompletion;
