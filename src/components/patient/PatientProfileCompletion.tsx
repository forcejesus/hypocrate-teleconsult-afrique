
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { User, Phone, Languages, MapPin } from "lucide-react";
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
  { id: "fr", name: "Français" },
  { id: "en", name: "Anglais" },
  { id: "es", name: "Espagnol" },
  { id: "pt", name: "Portugais" },
  { id: "ln", name: "Lingala" },
  { id: "kt", name: "Kituba" },
  { id: "kg", name: "Kigongo" },
  { id: "sw", name: "Swahili" },
  { id: "wo", name: "Wolof" },
  { id: "bm", name: "Bambara" },
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

  const onSubmit = (values: ProfileFormValues) => {
    console.log("Profile completion values:", values);
    toast.success("Profil complété avec succès!");
    onComplete();
  };

  const africanCountries = getAfricanCountries();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="border-0 shadow-2xl bg-white">
          <CardHeader className="text-center pb-8 pt-8">
            <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Complétez votre profil patient
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Quelques informations pour personnaliser votre expérience
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Profile Picture */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24 border-4 border-blue-100">
                    {profileImage ? (
                      <AvatarImage src={profileImage} alt="Photo de profil" />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-2xl">
                        <User size={32} />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <Button 
                    variant="outline" 
                    className="relative overflow-hidden border-blue-200 hover:bg-blue-50" 
                    type="button"
                  >
                    <User size={16} className="mr-2" />
                    Choisir une photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                  </Button>
                </div>

                {/* Phone Number */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-gray-900">Téléphone</span>
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
                              <SelectTrigger className="border-gray-200 focus:border-blue-500">
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
                              className="border-gray-200 focus:border-blue-500" 
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
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-gray-900">Localisation</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pays de résidence</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-200 focus:border-blue-500">
                              <SelectValue placeholder="Sélectionnez votre pays" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[300px]">
                            <div className="mb-2 px-2 py-1.5 text-sm font-semibold text-gray-600">Afrique</div>
                            {africanCountries.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                <span className="mr-2">{country.flag}</span>
                                {country.name}
                              </SelectItem>
                            ))}
                            <div className="mt-2 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-600">Autres pays</div>
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

                {/* Languages */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Languages className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-gray-900">Langues parlées</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="languages"
                    render={() => (
                      <FormItem>
                        <FormLabel>Sélectionnez vos langues</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {languages.map((language) => (
                            <Button
                              key={language.id}
                              type="button"
                              variant={selectedLanguages.includes(language.id) ? "default" : "outline"}
                              className={`justify-start text-sm py-2 px-3 ${
                                selectedLanguages.includes(language.id) 
                                  ? "bg-blue-500 hover:bg-blue-600 text-white border-blue-500" 
                                  : "border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                              }`}
                              onClick={() => toggleLanguage(language.id)}
                            >
                              {language.name}
                            </Button>
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

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Terminer mon profil
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PatientProfileCompletion;
