
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Languages, 
  MapPin, 
  Phone, 
  DollarSign, 
  User, 
  Camera,
  CheckCircle,
  Globe,
  Shield,
  Star,
  ArrowLeft,
  AlertCircle,
  Check
} from 'lucide-react';
import { getPhoneIndicatives, getAfricanCountries, countries } from '@/data/countries';

const languages = [
  { id: "fr", name: "Français", flag: "🇫🇷", level: "Natif" },
  { id: "en", name: "Anglais", flag: "🇬🇧", level: "Courant" },
  { id: "es", name: "Espagnol", flag: "🇪🇸", level: "Avancé" },
  { id: "pt", name: "Portugais", flag: "🇵🇹", level: "Intermédiaire" },
  { id: "ar", name: "Arabe", flag: "🇸🇦", level: "Courant" },
  { id: "ln", name: "Lingala", flag: "🇨🇩", level: "Natif" },
  { id: "kt", name: "Kituba", flag: "🇨🇬", level: "Courant" },
  { id: "kg", name: "Kigongo", flag: "🇦🇴", level: "Avancé" },
  { id: "sw", name: "Swahili", flag: "🇹🇿", level: "Courant" },
  { id: "wo", name: "Wolof", flag: "🇸🇳", level: "Natif" },
  { id: "bm", name: "Bambara", flag: "🇲🇱", level: "Courant" },
  { id: "ha", name: "Hausa", flag: "🇳🇬", level: "Avancé" },
  { id: "yo", name: "Yoruba", flag: "🇳🇬", level: "Courant" },
  { id: "am", name: "Amharique", flag: "🇪🇹", level: "Avancé" },
  { id: "ti", name: "Tigrinya", flag: "🇪🇷", level: "Courant" },
  { id: "om", name: "Oromo", flag: "🇪🇹", level: "Intermédiaire" },
  { id: "so", name: "Somali", flag: "🇸🇴", level: "Courant" },
  { id: "mg", name: "Malgache", flag: "🇲🇬", level: "Natif" },
  { id: "zu", name: "Zulu", flag: "🇿🇦", level: "Avancé" },
  { id: "xh", name: "Xhosa", flag: "🇿🇦", level: "Courant" }
];

// Schéma de validation
const profileCompletionSchema = z.object({
  country: z.string().min(1, { message: "Veuillez sélectionner un pays" }),
  phoneIndicative: z.string().min(1, { message: "Veuillez sélectionner un indicatif téléphonique" }),
  phoneNumber: z.string().min(5, { message: "Numéro de téléphone invalide" }),
  languages: z.array(z.string()).min(1, { message: "Veuillez sélectionner au moins une langue" }),
  hourlyRate: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
    message: "Le tarif horaire doit être un nombre positif",
  }),
});

interface InterpreterProfileCompletionProps {
  onComplete: () => void;
}

export const InterpreterProfileCompletion: React.FC<InterpreterProfileCompletionProps> = ({ 
  onComplete 
}) => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  // Initialiser le formulaire
  const form = useForm<z.infer<typeof profileCompletionSchema>>({
    resolver: zodResolver(profileCompletionSchema),
    defaultValues: {
      country: "CM", // Cameroun par défaut
      phoneIndicative: "+237",
      phoneNumber: "",
      languages: [],
      hourlyRate: "30",
    },
  });

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

  const toggleLanguage = (languageId: string) => {
    setSelectedLanguages(prev => {
      if (prev.includes(languageId)) {
        const updated = prev.filter(lang => lang !== languageId);
        form.setValue("languages", updated);
        return updated;
      } else {
        const updated = [...prev, languageId];
        form.setValue("languages", updated);
        return updated;
      }
    });
  };

  const nextStep = async () => {
    let isValid = true;
    
    if (step === 1) {
      // Pas de validation nécessaire pour l'étape 1 (photo optionnelle)
    } else if (step === 2) {
      isValid = await form.trigger(['country', 'phoneIndicative', 'phoneNumber']);
    } else if (step === 3) {
      isValid = await form.trigger(['languages', 'hourlyRate']);
    }
    
    if (isValid && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const onSubmit = (data: z.infer<typeof profileCompletionSchema>) => {
    console.log("Profil complété:", { ...data, profileImage });
    
    toast({
      title: "Profil complété",
      description: "Votre profil a été complété avec succès.",
    });
    
    onComplete();
  };

  const phoneIndicatives = getPhoneIndicatives();
  const africanCountries = getAfricanCountries();

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
                <Avatar className="h-32 w-32 border-4 border-teal-200 shadow-xl">
                  {profileImage ? (
                    <AvatarImage src={profileImage} alt="Photo de profil" className="object-cover" />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white text-4xl">
                      <Languages size={48} />
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 bg-white shadow-lg border-2 border-teal-200 hover:bg-teal-50" 
                  type="button"
                >
                  <Camera size={16} className="text-teal-600" />
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
                <p className="text-sm text-gray-500">Montrez votre professionnalisme (optionnel)</p>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-teal-700">
                  <p className="font-medium mb-1">Bienvenue dans votre espace interprète !</p>
                  <p>Nous allons configurer votre profil professionnel pour vous connecter avec des patients et médecins qui ont besoin de vos services d'interprétation.</p>
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
            className="space-y-6"
          >
            {/* Country Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Votre localisation</h3>
                  <p className="text-sm text-gray-500">Où exercez-vous vos services ?</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pays de résidence</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-gray-200 focus:border-teal-500 h-12">
                          <SelectValue placeholder="Sélectionnez votre pays" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        <div className="mb-2 px-2 py-1.5 text-sm font-semibold text-gray-600 bg-gray-50">Afrique</div>
                        {africanCountries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            <span className="mr-2">{country.flag}</span>
                            {country.name}
                          </SelectItem>
                        ))}
                        <div className="mt-2 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-600 bg-gray-50">Autres pays</div>
                        {countries
                          .filter(country => !country.isAfrican)
                          .map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <span className="mr-2">{country.flag}</span>
                              {country.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Phone Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact professionnel</h3>
                  <p className="text-sm text-gray-500">Pour être contacté par les patients</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="phoneIndicative"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Indicatif pays</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-200 focus:border-teal-500 h-12">
                            <SelectValue placeholder="+" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px]">
                          <div className="mb-2 px-2 py-1.5 text-sm font-semibold text-gray-600 bg-gray-50">Pays Africains</div>
                          {phoneIndicatives.filter(country => country.isAfrican).map((country) => (
                            <SelectItem key={country.code} value={country.dialCode}>
                              <span className="mr-2">{country.flag}</span>
                              {country.dialCode} ({country.name})
                            </SelectItem>
                          ))}
                          <div className="mt-2 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-600 bg-gray-50">Autres pays</div>
                          {phoneIndicatives.filter(country => !country.isAfrican).map((country) => (
                            <SelectItem key={country.code} value={country.dialCode}>
                              <span className="mr-2">{country.flag}</span>
                              {country.dialCode} ({country.name})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro de téléphone</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gray-200 focus:border-teal-500 h-12" placeholder="Votre numéro de téléphone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
            className="space-y-8"
          >
            {/* Languages */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Languages className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vos langues d'expertise</h3>
                  <p className="text-sm text-gray-500">Quelles langues pouvez-vous interpréter ?</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="languages"
                render={() => (
                  <FormItem>
                    <FormLabel>Sélectionnez vos langues maîtrisées</FormLabel>
                    <FormDescription>
                      Choisissez toutes les langues que vous pouvez interpréter professionnellement.
                    </FormDescription>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {languages.map((language) => (
                        <motion.div
                          key={language.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="button"
                            variant="outline"
                            className={`w-full justify-between h-16 px-4 transition-all duration-200 ${
                              selectedLanguages.includes(language.id)
                                ? 'bg-teal-50 border-teal-300 text-teal-700 shadow-md'
                                : 'bg-white border-gray-200 hover:bg-teal-50 hover:border-teal-200 shadow-sm'
                            }`}
                            onClick={() => toggleLanguage(language.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-xl">{language.flag}</span>
                              <div className="text-left">
                                <div className="font-medium">{language.name}</div>
                                <div className="text-xs text-gray-500">{language.level}</div>
                              </div>
                            </div>
                            {selectedLanguages.includes(language.id) && (
                              <Check size={18} className="text-teal-600" />
                            )}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                    {form.formState.errors.languages && (
                      <p className="text-sm font-medium text-red-500 mt-2">
                        {form.formState.errors.languages.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* Hourly Rate */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Votre tarification</h3>
                  <p className="text-sm text-gray-500">Définissez votre tarif horaire</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tarif horaire (€)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" min="0" step="0.01" className="border-gray-200 focus:border-teal-500 h-12" />
                    </FormControl>
                    <FormDescription>
                      Tarif recommandé pour l'interprétation médicale: 25-50€/heure
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 text-center"
          >
            <div className="space-y-6">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-teal-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Profil d'interprète activé !</h3>
                <p className="text-gray-600">
                  Votre profil est maintenant configuré. Vous pouvez commencer à recevoir des demandes d'interprétation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-900">Langues configurées</p>
                  <p className="text-xs text-blue-700">{selectedLanguages.length} langue(s)</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-900">Profil vérifié</p>
                  <p className="text-xs text-green-700">Prêt à travailler</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <Star className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-900">Tarif défini</p>
                  <p className="text-xs text-purple-700">{form.getValues('hourlyRate')}€/heure</p>
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
          {/* Progress bar */}
          <div className="h-2 bg-gray-100">
            <motion.div 
              className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          
          <CardHeader className="text-center pb-6 pt-8">
            <motion.div 
              className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Languages className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {step === 1 && "Votre profil professionnel"}
              {step === 2 && "Informations de contact"}
              {step === 3 && "Compétences linguistiques"}
              {step === 4 && "Félicitations !"}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2 text-lg">
              {step === 1 && "Commençons par votre photo professionnelle"}
              {step === 2 && "Configurez vos informations de contact"}
              {step === 3 && "Définissez vos langues et votre tarification"}
              {step === 4 && "Votre profil d'interprète est maintenant actif"}
            </CardDescription>

            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(totalSteps)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => index + 1 <= step && setStep(index + 1)}
                  className={`w-8 h-2 rounded-full transition-all duration-300 ${
                    index + 1 <= step ? "bg-teal-500 cursor-pointer hover:bg-teal-600" : "bg-gray-200"
                  } ${index + 1 === step ? "ring-2 ring-teal-300" : ""}`}
                />
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {getStepContent()}
                
                <div className="flex justify-between pt-6">
                  {step > 1 && step < 4 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={prevStep}
                      className="px-6 py-3 h-12 border-gray-300 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <ArrowLeft size={16} />
                      <span>Précédent</span>
                    </Button>
                  )}
                  
                  <div className={step === 1 || step === 4 ? "ml-auto" : ""}>
                    {step < 4 ? (
                      <Button 
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-3 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        {step === 3 ? "Finaliser" : "Continuer"}
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

export default InterpreterProfileCompletion;
