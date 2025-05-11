
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAnimationComplete } from '@/hooks/useAnimationComplete';

// Schéma de validation pour le formulaire d'inscription
const formSchema = z.object({
  userType: z.string().min(1, "Veuillez choisir un type d'utilisateur"),
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("L'email n'est pas valide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string().min(8, "Veuillez confirmer votre mot de passe"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export type RegistrationFormValues = z.infer<typeof formSchema>;

export const useRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const animationComplete = useAnimationComplete(500);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const userType = form.watch('userType');
  
  const onSubmit = (values: RegistrationFormValues) => {
    console.log(values);
    // Implementation to be added
  };

  const goToNextStep = async () => {
    const fields = ['userType', 'firstName', 'lastName', 'email'];
    
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
    animationComplete,
    onSubmit,
    goToNextStep,
    goToPrevStep
  };
};
