
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqSection from '@/components/sections/FaqSection';

const Faq = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Questions Fréquentes</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus fréquentes
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
