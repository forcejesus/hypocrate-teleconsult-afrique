
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-hypocrate-blue text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-xl mb-8 opacity-90">{t('cta.description')}</p>
        <Button asChild size="lg" className="bg-white text-hypocrate-blue hover:bg-gray-100">
          <Link to="/register">{t('cta.button')}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
