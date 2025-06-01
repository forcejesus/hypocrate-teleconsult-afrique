
import { useAnimationComplete } from '@/hooks/useAnimationComplete';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LoginLeftSection } from '@/components/login/LoginLeftSection';
import { LoginRightSection } from '@/components/login/LoginRightSection';
import { useForm } from 'react-hook-form';

const Login = () => {
  const animationComplete = useAnimationComplete();
  const form = useForm();
  const userType = form.watch('userType') || '';

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-hypocrate-lightBlue via-white to-blue-50">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-hypocrate-blue/10 to-hypocrate-green/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-hypocrate-green/10 to-hypocrate-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 md:gap-12">
            <LoginLeftSection userType={userType} animationComplete={animationComplete} />
            <LoginRightSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
