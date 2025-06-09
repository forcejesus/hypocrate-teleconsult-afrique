
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { User, Phone, Languages, MapPin, Camera, Check } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { countries, getAfricanCountries } from "@/data/countries";

// Languages options
const languages = [
  { id: "fr", name: "Français", flag: "🇫🇷" },
  { id: "en", name: "Anglais", flag: "🇬🇧" },
  { id: "es", name: "Espagnol", flag: "🇪🇸" },
  { id: "pt", name: "Portugais", flag: "🇵🇹" },
  { id: "ln", name: "Lingala", flag: "🇨🇩" },
  { id: "kt", name: "Kituba", flag: "🇨🇬" },
  { id: "kg", name: "Kigongo", flag: "🇦🇴" },
  { id: "sw", name: "Swahili", flag: "🇹🇿" },
  { id: "wo", name: "Wolof", flag: "🇸🇳" },
  { id: "bm", name: "Bambara", flag: "🇲🇱" },
];

// Profile completion schema
const profileSchema = z.object({
  phoneNumber: z.string().min(1, "Le numéro de téléphone est requis"),
  countryCode: z.string().min(1, "L'indicatif du pays est requis"),
  country: z.string().min(1, "Le pays est requis"),
  languages: z.array(z.string()).min(1, "Sélectionnez au moins une langue"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface PatientProfileCompletionProps {
  onComplete: () => void;
}

export const PatientProfileCompletion = ({ onComplete }: PatientProfileCompletionProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Form definition
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phoneNumber: "",
      countryCode: "+33",
      country: "FR",
      languages: [],
    },
  });

  // Handle profile picture upload
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.includes("image/")) {
      toast.error("Le fichier sélectionné n'est pas une image");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("L'image ne doit pas dépasser 5Mo");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
    toast.success("Photo de profil ajoutée");
  };

  // Handle language selection
  const toggleLanguage = (langId: string) => {
    setSelectedLanguages(prev => {
      if (prev.includes(langId)) {
        const updated = prev.filter(id => id !== langId);
        form.setValue("languages", updated);
        return updated;
      } else {
        const updated = [...prev, langId];
        form.setValue("languages", updated);
        return updated;
      }
    });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const onSubmit = (values: ProfileFormValues) => {
    console.log("Profile completion values:", values);
    toast.success("Profil complété avec succès!");
    onComplete();
  };

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
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative group">
                <Avatar className="h-32 w-32 border-4 border-gradient-to-r from-blue-200 to-indigo-200 shadow-xl">
                  {profileImage ? (
                    <AvatarImage src={profileImage} alt="Photo de profil" className="object-cover" />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-4xl">
                      <User size={48} />
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 bg-white shadow-lg border-2 border-blue-200 hover:bg-blue-50" 
                  type="button"
                >
                  <Camera size={16} className="text-blue-600" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Ajoutez votre photo</h3>
                <p className="text-sm text-gray-500">Aidez vos médecins à vous reconnaître</p>
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
            {/* Phone Number */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Votre téléphone</h3>
                  <p className="text-sm text-gray-500">Pour vous contacter en cas d'urgence</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Indicatif</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-200 focus:border-blue-500 h-12">
                            <SelectValue placeholder="Indicatif" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px]">
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.dialCode}>
                              <span className="mr-2">{country.flag}</span>
                              {country.dialCode}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Numéro</FormLabel>
                      <FormControl>
                        <Input 
                          className="border-gray-200 focus:border-blue-500 h-12" 
                          placeholder="Votre numéro de téléphone" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Country Selection */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Votre localisation</h3>
                  <p className="text-sm text-gray-500">Pour trouver des médecins près de vous</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pays de résidence</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-gray-200 focus:border-blue-500 h-12">
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
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Languages className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vos langues</h3>
                  <p className="text-sm text-gray-500">Pour communiquer avec vos médecins</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="languages"
                render={() => (
                  <FormItem>
                    <FormLabel>Sélectionnez vos langues</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {languages.map((language) => (
                        <motion.div
                          key={language.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="button"
                            variant="outline"
                            className={`w-full justify-start text-left h-14 px-4 transition-all duration-200 ${
                              selectedLanguages.includes(language.id) 
                                ? "bg-blue-50 border-blue-300 text-blue-700 shadow-md" 
                                : "border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                            }`}
                            onClick={() => toggleLanguage(language.id)}
                          >
                            <span className="text-lg mr-3">{language.flag}</span>
                            <span className="flex-1">{language.name}</span>
                            {selectedLanguages.includes(language.id) && (
                              <Check size={18} className="text-blue-600" />
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
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          {/* Progress bar */}
          <div className="h-2 bg-gray-100 rounded-t-xl">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-xl"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          
          <CardHeader className="text-center pb-6 pt-8">
            <motion.div 
              className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {step === 1 && "Votre photo de profil"}
              {step === 2 && "Vos informations de contact"}
              {step === 3 && "Vos préférences linguistiques"}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2 text-lg">
              {step === 1 && "Commençons par personnaliser votre profil"}
              {step === 2 && "Comment pouvons-nous vous joindre ?"}
              {step === 3 && "Dans quelles langues souhaitez-vous consulter ?"}
            </CardDescription>
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index + 1 <= step ? "bg-blue-500" : "bg-gray-200"
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
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={prevStep}
                      className="px-6 py-3 h-12 border-gray-300 hover:bg-gray-50"
                    >
                      Précédent
                    </Button>
                  )}
                  
                  <div className={step === 1 ? "ml-auto" : ""}>
                    {step < totalSteps ? (
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="px-8 py-3 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Continuer
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        className="px-8 py-3 h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
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

export default PatientProfileCompletion;
