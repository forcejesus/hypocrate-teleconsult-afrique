
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { 
  User, 
  Stethoscope, 
  GraduationCap, 
  Languages, 
  DollarSign, 
  FileText, 
  Upload,
  CheckCircle,
  Camera,
  Clock,
  Shield
} from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
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
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const totalSteps = 3;

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
      toast({
        title: "Document ajouté",
        description: `${e.target.files[0].name} a été ajouté avec succès`,
      });
    }
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
        toast({
          title: "Photo ajoutée",
          description: "Votre photo de profil a été ajoutée avec succès",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextStep = async () => {
    if (step === 1) {
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
    } else if (step === 2) {
      const fieldsToValidate = ['languages', 'hourlyRate'];
      const isValid = await form.trigger(fieldsToValidate as any);
      if (isValid) {
        setStep(3);
      }
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Form data:", data);
    console.log("License file:", licenseFile);
    console.log("Profile image:", profileImage);
    toast({
      title: "Profil complété",
      description: "Votre profil a été enregistré avec succès."
    });
    onComplete();
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative group">
                <Avatar className="h-32 w-32 border-4 border-emerald-200 shadow-xl">
                  {profileImage ? (
                    <AvatarImage src={profileImage} alt="Photo de profil" className="object-cover" />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-4xl">
                      <Stethoscope size={48} />
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 bg-white shadow-lg border-2 border-emerald-200 hover:bg-emerald-50" 
                  type="button"
                >
                  <Camera size={16} className="text-emerald-600" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileImageChange}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Photo professionnelle</h3>
                <p className="text-sm text-gray-500">Inspirez confiance à vos patients</p>
              </div>
            </div>

            {/* Professional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="specialty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Stethoscope className="w-4 h-4 text-emerald-500" />
                      <span>Spécialité médicale</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ex: Cardiologie, Pédiatrie..." 
                        className="border-gray-200 focus:border-emerald-500 h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearsOfExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      <span>Années d'expérience</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="0" 
                        placeholder="Ex: 10" 
                        className="border-gray-200 focus:border-emerald-500 h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="licenseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>Numéro de licence / RPPS</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Entrez votre numéro de licence" 
                      className="border-gray-200 focus:border-emerald-500 h-12" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-emerald-500" />
                    <span>Formation et diplômes</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ex: Doctorat en Médecine, Université de Paris" 
                      className="border-gray-200 focus:border-emerald-500 h-12" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Document Upload */}
            <div className="space-y-4">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-900">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Document officiel</span>
              </label>
              <div className={`border-2 border-dashed rounded-lg p-6 hover:border-emerald-300 transition-colors ${
                licenseFile ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200'
              }`}>
                <div className="text-center">
                  {licenseFile ? (
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                      <span className="text-sm text-emerald-700 font-medium">{licenseFile.name}</span>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <label className="cursor-pointer">
                        <span className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
                          Télécharger votre licence médicale
                        </span>
                        <input 
                          type="file" 
                          className="sr-only"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-1">PDF, JPG ou PNG (max 5MB)</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="languages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Languages className="w-4 h-4 text-emerald-500" />
                    <span>Langues pratiquées</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ex: Français, Anglais, Arabe" 
                      className="border-gray-200 focus:border-emerald-500 h-12" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Séparez les langues par des virgules
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hourlyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span>Tarif de consultation (€)</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      placeholder="Ex: 80" 
                      className="border-gray-200 focus:border-emerald-500 h-12" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Tarif par consultation (recommandé: 60-120€)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-medium text-emerald-900 mb-1">Presque terminé !</h4>
                  <p className="text-sm text-emerald-700">
                    Vous pourrez configurer votre calendrier de disponibilité et vos créneaux 
                    de consultation après avoir terminé votre profil.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 text-center"
          >
            <div className="space-y-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Profil complété !</h3>
                <p className="text-gray-600">
                  Votre profil médical est maintenant configuré. Vous pouvez commencer à recevoir des patients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <User className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-900">Profil vérifié</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-900">Documents validés</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <Stethoscope className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-900">Prêt à consulter</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
          {/* Progress bar */}
          <div className="h-2 bg-gray-100">
            <motion.div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          
          <CardHeader className="text-center pb-6 pt-8">
            <motion.div 
              className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Stethoscope className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {step === 1 && "Informations Professionnelles"}
              {step === 2 && "Configuration de votre pratique"}
              {step === 3 && "Félicitations !"}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2 text-lg">
              {step === 1 && "Renseignez vos qualifications médicales"}
              {step === 2 && "Définissez vos paramètres de consultation"}
              {step === 3 && "Votre profil médical est maintenant actif"}
            </CardDescription>
            
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index + 1 <= step ? "bg-emerald-500" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {getStepContent()}

                <div className="flex justify-between pt-6">
                  {step > 1 && step < 3 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 h-12 border-gray-300 hover:bg-gray-50"
                    >
                      Précédent
                    </Button>
                  )}
                  
                  <div className={step === 1 || step === 3 ? "ml-auto" : ""}>
                    {step < 3 ? (
                      <Button 
                        type="button" 
                        className="px-8 py-3 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        onClick={handleNextStep}
                      >
                        {step === 2 ? "Finaliser" : "Continuer"}
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        className="px-8 py-3 h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Accéder au tableau de bord
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
