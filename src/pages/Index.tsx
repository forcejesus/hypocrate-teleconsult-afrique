
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import CtaSection from '@/components/sections/CtaSection';
import LanguagesSection from '@/components/sections/LanguagesSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <AdvantagesSection />
        <CtaSection />
        <LanguagesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
