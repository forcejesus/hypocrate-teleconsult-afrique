
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
