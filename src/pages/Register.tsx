
import { motion } from 'framer-motion';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { RegistrationHeader } from '@/components/auth/RegistrationHeader';
import { RegistrationFormContainer } from '@/components/auth/RegistrationFormContainer';
import { RegistrationStepOne } from '@/components/auth/RegistrationStepOne';
import { RegistrationStepTwo } from '@/components/auth/RegistrationStepTwo';
import { useRegistrationForm } from '@/hooks/useRegistrationForm';

const Register = () => {
  const {
    form,
    step,
    userType,
    onSubmit,
    goToNextStep,
    goToPrevStep
  } = useRegistrationForm();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        className="flex-grow bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <RegistrationHeader step={step} userType={userType} />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <RegistrationFormContainer step={step}>
                {step === 1 ? (
                  <RegistrationStepOne
                    form={form}
                    userType={userType}
                  />
                ) : (
                  <RegistrationStepTwo form={form} />
                )}
              </RegistrationFormContainer>

              <div className="flex justify-between">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goToPrevStep}
                    className="px-6 py-2.5 h-12 rounded-xl border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 font-medium transition-all duration-200"
                  >
                    Retour
                  </Button>
                )}
                {step === 1 ? (
                  <Button
                    type="button"
                    className="ml-auto px-6 py-2.5 h-12 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                    onClick={goToNextStep}
                  >
                    Continuer
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto px-8 py-2.5 h-12 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
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
