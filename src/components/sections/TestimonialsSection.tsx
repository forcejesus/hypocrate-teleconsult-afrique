
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.1.text'),
      author: t('testimonials.1.author'),
      location: t('testimonials.1.location')
    },
    {
      text: t('testimonials.2.text'),
      author: t('testimonials.2.author'),
      location: t('testimonials.2.location')
    },
    {
      text: t('testimonials.3.text'),
      author: t('testimonials.3.author'),
      location: t('testimonials.3.location')
    }
  ];

  return (
    <section className="py-16 bg-hypocrate-lightBlue">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <Quote className="h-8 w-8 text-hypocrate-blue mb-4" />
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="text-hypocrate-blue font-semibold">{testimonial.author}</div>
              <div className="text-gray-500 text-sm">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
