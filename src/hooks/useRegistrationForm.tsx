
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getAfricanCountries, getAllCountries } from '@/data/countries';
import { useAnimationComplete } from '@/hooks/useAnimationComplete';

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

export type RegistrationFormValues = z.infer<typeof formSchema>;

export const useRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [availableCountries, setAvailableCountries] = useState(getAllCountries());
  const animationComplete = useAnimationComplete(500);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: '',
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      phone: '',
      gender: '',
      password: '',
      confirmPassword: '',
    },
  });

  const userType = form.watch('userType');
  const selectedCountry = form.watch('country');
  
  // Update available countries based on user type
  useEffect(() => {
    if (userType === 'patient') {
      setAvailableCountries(getAfricanCountries());
      // Reset selected country if not African
      const currentCountry = form.getValues('country');
      const isAfrican = getAfricanCountries().some(c => c.code === currentCountry);
      if (currentCountry && !isAfrican) {
        form.setValue('country', '');
      }
    } else {
      setAvailableCountries(getAllCountries());
    }
  }, [userType, form]);
  
  const handleCountryChange = (value: string) => {
    form.setValue('country', value);
  };

  const onSubmit = (values: RegistrationFormValues) => {
    console.log(values);
    // Implementation to be added
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

  return {
    form,
    step,
    userType,
    selectedCountry,
    availableCountries,
    animationComplete,
    handleCountryChange,
    onSubmit,
    goToNextStep,
    goToPrevStep
  };
};
