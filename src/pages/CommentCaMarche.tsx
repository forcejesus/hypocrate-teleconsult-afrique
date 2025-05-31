
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CtaSection from '@/components/sections/CtaSection';
import { useLanguage } from '@/contexts/LanguageContext';

const CommentCaMarche = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">{t('how_it_works_page.title')}</h1>
          </div>
        </div>
        <HowItWorksSection />
        <div className="bg-white py-12">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">{t('how_it_works_page.services_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-hypocrate-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('how_it_works_page.patients_title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.patients_step1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.patients_step2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.patients_step3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.patients_step4')}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-hypocrate-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('how_it_works_page.doctors_title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.doctors_step1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.doctors_step2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.doctors_step3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hypocrate-blue mr-2">✓</span>
                    <span>{t('how_it_works_page.doctors_step4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default CommentCaMarche;
