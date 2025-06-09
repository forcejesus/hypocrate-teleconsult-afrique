
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
  Shield,
  ArrowLeft,
  AlertCircle,
  Phone,
  MapPin
} from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { SpecialtySelector } from './SpecialtySelector';
import { LanguageSelector } from './LanguageSelector';
import { getPhoneIndicatives, getAfricanCountries, countries } from '@/data/countries';

const profileSchema = z.object({
  phoneNumber: z.string().min(5, "Le numéro de téléphone est requis"),
  countryCode: z.string().min(1, "L'indicatif du pays est requis"),
  country: z.string().min(1, "Le pays est requis"),
  specialties: z.array(z.string()).min(1, "Sélectionnez au moins une spécialité"),
  licenseNumber: z.string().min(3, "Le numéro de licence est requis"),
  yearsOfExperience: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) >= 0, {
    message: "Veuillez entrer un nombre valide d'années d'expérience",
  }),
  education: z.string().min(2, "L'éducation est requise"),
  languages: z.array(z.string()).min(1, "Sélectionnez au moins une langue"),
  hourlyRate: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) > 0, {
    message: "Veuillez entrer un tarif horaire valide",
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
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const totalSteps = 4;

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phoneNumber: '',
      countryCode: '+237', // Cameroun par défaut
      country: 'CM',
      specialties: [],
      licenseNumber: '',
      yearsOfExperience: '',
      education: '',
      languages: [],
      hourlyRate: '80',
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

  const nextStep = async () => {
    let isValid = true;
    
    if (step === 1) {
      // Pas de validation nécessaire pour l'étape 1 (photo optionnelle)
    } else if (step === 2) {
      isValid = await form.trigger(['phoneNumber', 'countryCode', 'country']);
    } else if (step === 3) {
      isValid = await form.trigger(['specialties', 'licenseNumber', 'yearsOfExperience', 'education']);
      
      if (isValid && !licenseFile) {
        toast({
          title: "Document manquant",
          description: "Veuillez télécharger votre licence médicale ou un document officiel",
          variant: "destructive"
        });
        return;
      }
    } else if (step === 4) {
      isValid = await form.trigger(['languages', 'hourlyRate']);
    }
    
    if (isValid && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
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
                <p className="text-sm text-gray-500">Inspirez confiance à vos patients (optionnel)</p>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-emerald-700">
                  <p className="font-medium mb-1">Bienvenue dans votre espace médecin !</p>
                  <p>Nous allons configurer votre profil professionnel en quelques étapes simples. Toutes vos informations seront sécurisées et utilisées uniquement pour faciliter vos consultations.</p>
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
            {/* Phone Number */}
            <div className="space-y-4">
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
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Indicatif pays</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-200 focus:border-emerald-500 h-12">
                            <SelectValue placeholder="Indicatif" />
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

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Numéro de téléphone</FormLabel>
                      <FormControl>
                        <Input 
                          className="border-gray-200 focus:border-emerald-500 h-12" 
                          placeholder="Votre numéro professionnel" 
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
                  <h3 className="font-semibold text-gray-900">Lieu d'exercice</h3>
                  <p className="text-sm text-gray-500">Dans quel pays exercez-vous ?</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pays d'exercice</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-gray-200 focus:border-emerald-500 h-12">
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
            className="space-y-8"
          >
            {/* Specialties */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vos spécialités</h3>
                  <p className="text-sm text-gray-500">Quelles sont vos spécialités médicales ?</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="specialties"
                render={() => (
                  <FormItem>
                    <FormLabel>Spécialités médicales</FormLabel>
                    <SpecialtySelector
                      selectedSpecialties={selectedSpecialties}
                      onSpecialtiesChange={(specialties) => {
                        setSelectedSpecialties(specialties);
                        form.setValue("specialties", specialties);
                      }}
                    />
                    {form.formState.errors.specialties && (
                      <p className="text-sm font-medium text-red-500 mt-2">
                        {form.formState.errors.specialties.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="Ex: 12345678901" 
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
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-emerald-500" />
                    <span>Formation et diplômes</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ex: Doctorat en Médecine, Université de Yaoundé" 
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
                <span>Document officiel (obligatoire)</span>
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

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Languages className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Langues pratiquées</h3>
                  <p className="text-sm text-gray-500">Dans quelles langues pouvez-vous consulter ?</p>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="languages"
                render={() => (
                  <FormItem>
                    <FormLabel>Sélectionnez vos langues</FormLabel>
                    <LanguageSelector
                      selectedLanguages={selectedLanguages}
                      onLanguagesChange={(languages) => {
                        setSelectedLanguages(languages);
                        form.setValue("languages", languages);
                      }}
                    />
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
                      min="1" 
                      placeholder="80" 
                      className="border-gray-200 focus:border-emerald-500 h-12" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Tarif recommandé: 60-120€ selon votre spécialité et expérience
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
                    Après validation, vous pourrez configurer votre calendrier de disponibilité 
                    et commencer à recevoir des patients.
                  </p>
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
              {step === 1 && "Votre profil professionnel"}
              {step === 2 && "Informations de contact"}
              {step === 3 && "Qualifications médicales"}
              {step === 4 && "Configuration finale"}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2 text-lg">
              {step === 1 && "Commençons par votre photo professionnelle"}
              {step === 2 && "Comment vous contacter ?"}
              {step === 3 && "Vos spécialités et qualifications"}
              {step === 4 && "Langues et tarification"}
            </CardDescription>
            
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(totalSteps)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => index + 1 <= step && setStep(index + 1)}
                  className={`w-8 h-2 rounded-full transition-all duration-300 ${
                    index + 1 <= step ? "bg-emerald-500 cursor-pointer hover:bg-emerald-600" : "bg-gray-200"
                  } ${index + 1 === step ? "ring-2 ring-emerald-300" : ""}`}
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
                      className="px-6 py-3 h-12 border-gray-300 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <ArrowLeft size={16} />
                      <span>Précédent</span>
                    </Button>
                  )}
                  
                  <div className={step === 1 ? "ml-auto" : ""}>
                    {step < totalSteps ? (
                      <Button 
                        type="button" 
                        className="px-8 py-3 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        onClick={nextStep}
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

export default DoctorProfileCompletion;
