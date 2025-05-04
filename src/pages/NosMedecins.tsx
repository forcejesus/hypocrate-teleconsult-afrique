
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NosMedecins = () => {
  const doctors = [
    {
      name: "Dr. Sophie Martin",
      specialty: "Médecine générale",
      description: "Spécialiste en médecine générale avec 15 ans d'expérience.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Dr. Jean Dupont",
      specialty: "Cardiologie",
      description: "Cardiologue expérimenté, spécialisé dans les maladies cardiovasculaires.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Dr. Marie Leclerc",
      specialty: "Pédiatrie",
      description: "Pédiatre dévouée avec une approche centrée sur l'enfant et sa famille.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Dr. Thomas Leroy",
      specialty: "Dermatologie",
      description: "Dermatologue spécialisé dans le diagnostic et le traitement des affections cutanées.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Dr. Aminata Diallo",
      specialty: "Gynécologie",
      description: "Gynécologue avec une expertise particulière dans la santé des femmes.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Dr. Pierre Bernard",
      specialty: "Psychiatrie",
      description: "Psychiatre spécialisé dans le traitement des troubles anxieux et dépressifs.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Nos médecins</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Consultez notre réseau de médecins certifiés, disponibles pour des téléconsultations avec service de traduction.
            </p>
          </div>
        </div>
        
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-hypocrate-blue font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4">{doctor.description}</p>
                  <Button className="btn-primary w-full">
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-hypocrate-gray p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Vous êtes médecin ?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Rejoignez notre réseau de professionnels de santé et participez à notre mission de rendre 
              les soins médicaux accessibles aux patients africains grâce à la télémédecine.
            </p>
            <Button variant="outline" className="btn-outline">
              Rejoindre Hypocrate
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NosMedecins;
