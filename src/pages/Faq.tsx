
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqSection from '@/components/sections/FaqSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Faq = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">{t('faq.title')}</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              {t('faq.description')}
            </p>
          </div>
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
