
import { Shield, Globe, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AdvantagesSection = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Globe,
      title: t('advantages.accessibility.title'),
      description: t('advantages.accessibility.description')
    },
    {
      icon: Shield,
      title: t('advantages.translation.title'),
      description: t('advantages.translation.description')
    },
    {
      icon: Lock,
      title: t('advantages.security.title'),
      description: t('advantages.security.description')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">{t('advantages.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-6">
              <div className="bg-hypocrate-lightBlue rounded-full p-4 inline-flex mb-6">
                <advantage.icon className="h-8 w-8 text-hypocrate-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
