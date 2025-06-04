
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { User, Stethoscope, GraduationCap, Languages, DollarSign, FileText, Upload } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Form data:", data);
    console.log("License file:", licenseFile);
    toast({
      title: "Profil complété",
      description: "Votre profil a été enregistré avec succès."
    });
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 shadow-2xl bg-white overflow-hidden">
          {/* Progress bar */}
          <div className="h-2 bg-gray-100">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
          
          <CardHeader className="text-center pb-8 pt-8">
            <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {step === 1 ? "Informations Professionnelles" : "Configuration de votre pratique"}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              {step === 1 
                ? "Veuillez renseigner vos qualifications médicales"
                : "Définissez vos paramètres de consultation"}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Speciality Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium text-gray-900">Spécialité médicale</span>
                      </div>
                      <FormField
                        control={form.control}
                        name="specialty"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Votre spécialité</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Ex: Cardiologie, Pédiatrie, Médecine générale..." 
                                className="border-gray-200 focus:border-emerald-500" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* License Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium text-gray-900">Licence professionnelle</span>
                      </div>
                      <FormField
                        control={form.control}
                        name="licenseNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro de licence / RPPS</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Entrez votre numéro de licence" 
                                className="border-gray-200 focus:border-emerald-500" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Education Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <GraduationCap className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium text-gray-900">Formation</span>
                      </div>
                      <FormField
                        control={form.control}
                        name="education"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Diplômes et formation</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Ex: Doctorat en Médecine, Université de Paris" 
                                className="border-gray-200 focus:border-emerald-500" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="yearsOfExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Années d'expérience</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="0" 
                                placeholder="Ex: 10" 
                                className="border-gray-200 focus:border-emerald-500" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Document Upload */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Upload className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium text-gray-900">Document officiel</span>
                      </div>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 hover:border-emerald-300 transition-colors">
                        <div className="text-center">
                          <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                          <label className="cursor-pointer">
                            <span className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
                              {licenseFile ? licenseFile.name : "Télécharger votre licence médicale"}
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
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Languages Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Languages className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium text-gray-900">Langues pratiquées</span>
                      </div>
                      <FormField
                        control={form.control}
                        name="languages"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Langues parlées</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Ex: Français, Anglais, Arabe" 
                                className="border-gray-200 focus:border-emerald-500" 
                                {...field} 
                              />
                            </FormControl>
                            <p className="text-xs text-gray-500 mt-1">Séparez les langues par des virgules</p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Pricing Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium text-gray-900">Tarification</span>
                      </div>
                      <FormField
                        control={form.control}
                        name="hourlyRate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tarif horaire (€)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="0" 
                                placeholder="Ex: 80" 
                                className="border-gray-200 focus:border-emerald-500" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                      <p className="text-sm text-emerald-700">
                        <strong>Information :</strong> Vous pourrez configurer votre calendrier de disponibilité 
                        et vos créneaux de consultation après avoir terminé votre profil.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="border-gray-200 hover:bg-gray-50"
                    >
                      Précédent
                    </Button>
                  )}
                  <div className={step === 1 ? "ml-auto" : ""}>
                    {step === 1 ? (
                      <Button 
                        type="button" 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        onClick={handleNextStep}
                      >
                        Suivant
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Terminer mon profil
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DoctorProfileCompletion;
