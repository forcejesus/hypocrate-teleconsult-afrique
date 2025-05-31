
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-hypocrate-lightBlue via-white to-white py-20 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block bg-blue-100 text-hypocrate-blue font-medium px-4 py-1 rounded-full text-sm mb-4">
              {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {t('hero.title')} <span className="text-hypocrate-blue">{t('hero.title_highlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-hypocrate-blue hover:bg-blue-600 text-white font-semibold text-lg py-6 px-8 rounded-md">
                {t('hero.book_appointment')}
              </Button>
              <Link to="/comment-ca-marche">
                <Button variant="outline" className="border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50 font-semibold text-lg py-6 px-8 rounded-md">
                  {t('hero.how_it_works')}
                </Button>
              </Link>
            </div>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 font-medium">{t('hero.available_24_7')}</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 font-medium">{t('hero.certified_doctors')}</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 font-medium">{t('hero.translation_service')}</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-hypocrate-blue/10 rounded-2xl -rotate-3 transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                alt="Téléconsultation médicale avec Hypocrate" 
                className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 max-w-[220px]">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm font-semibold text-gray-800">Dr. Sarah est en ligne</p>
                </div>
                <p className="text-xs text-gray-600">Traducteur disponible pour votre consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
