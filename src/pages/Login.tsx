
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Section oblique de fond */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 
          after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
          after:bg-hypocrate-blue after:opacity-10 after:transform after:rotate-6 after:origin-top-right after:translate-y-[-10%]">
        </div>

        <div className="container mx-auto px-4 py-10 md:py-16">
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
