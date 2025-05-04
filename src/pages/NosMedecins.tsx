
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, Calendar, Filter } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

const NosMedecins = () => {
  // Sample data
  const doctors = [
    {
      name: "Dr. Sophie Martin",
      specialty: "Médecine générale",
      country: "France",
      description: "Spécialiste en médecine générale avec 15 ans d'expérience.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
      availability: ["Lundi", "Mercredi", "Vendredi"]
    },
    {
      name: "Dr. Jean Dupont",
      specialty: "Cardiologie",
      country: "Belgique",
      description: "Cardiologue expérimenté, spécialisé dans les maladies cardiovasculaires.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
      availability: ["Mardi", "Jeudi", "Samedi"]
    },
    {
      name: "Dr. Marie Leclerc",
      specialty: "Pédiatrie",
      country: "Suisse",
      description: "Pédiatre dévouée avec une approche centrée sur l'enfant et sa famille.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
      availability: ["Lundi", "Mardi", "Mercredi"]
    },
    {
      name: "Dr. Thomas Leroy",
      specialty: "Dermatologie",
      country: "France",
      description: "Dermatologue spécialisé dans le diagnostic et le traitement des affections cutanées.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
      availability: ["Jeudi", "Vendredi", "Samedi"]
    },
    {
      name: "Dr. Aminata Diallo",
      specialty: "Gynécologie",
      country: "Sénégal",
      description: "Gynécologue avec une expertise particulière dans la santé des femmes.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
      availability: ["Lundi", "Mercredi", "Vendredi"]
    },
    {
      name: "Dr. Pierre Bernard",
      specialty: "Psychiatrie",
      country: "Canada",
      description: "Psychiatre spécialisé dans le traitement des troubles anxieux et dépressifs.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
      availability: ["Mardi", "Jeudi", "Samedi"]
    }
  ];

  // Filter states
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  
  // Extract unique values for filters
  const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));
  const countries = Array.from(new Set(doctors.map(doctor => doctor.country)));
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  
  // Toggle filter selection
  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty) 
        : [...prev, specialty]
    );
  };
  
  const toggleCountry = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country) 
        : [...prev, country]
    );
  };
  
  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day) 
        : [...prev, day]
    );
  };
  
  // Filter doctors based on selections
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(doctor.specialty);
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(doctor.country);
    const matchesDay = selectedDays.length === 0 || selectedDays.some(day => doctor.availability.includes(day));
    return matchesSpecialty && matchesCountry && matchesDay;
  });
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedSpecialties([]);
    setSelectedCountries([]);
    setSelectedDays([]);
  };

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
        
        <div className="container-custom py-10">
          {/* Filters section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold mb-4 md:mb-0 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filtrer les médecins
              </h2>
              {(selectedSpecialties.length > 0 || selectedCountries.length > 0 || selectedDays.length > 0) && (
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="text-gray-600 border-gray-300"
                >
                  Effacer les filtres
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Specialty Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Spécialité</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-gray-300 bg-white text-gray-700"
                    >
                      {selectedSpecialties.length > 0 
                        ? `${selectedSpecialties.length} sélectionné${selectedSpecialties.length > 1 ? 's' : ''}` 
                        : 'Toutes les spécialités'}
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {specialties.map((specialty) => (
                      <DropdownMenuCheckboxItem
                        key={specialty}
                        checked={selectedSpecialties.includes(specialty)}
                        onCheckedChange={() => toggleSpecialty(specialty)}
                      >
                        {specialty}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Country Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pays</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-gray-300 bg-white text-gray-700"
                    >
                      {selectedCountries.length > 0 
                        ? `${selectedCountries.length} sélectionné${selectedCountries.length > 1 ? 's' : ''}` 
                        : 'Tous les pays'}
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {countries.map((country) => (
                      <DropdownMenuCheckboxItem
                        key={country}
                        checked={selectedCountries.includes(country)}
                        onCheckedChange={() => toggleCountry(country)}
                      >
                        {country}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Availability Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilité</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-gray-300 bg-white text-gray-700"
                    >
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {selectedDays.length > 0 
                          ? `${selectedDays.length} jour${selectedDays.length > 1 ? 's' : ''}` 
                          : 'Tous les jours'}
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {days.map((day) => (
                      <DropdownMenuCheckboxItem
                        key={day}
                        checked={selectedDays.includes(day)}
                        onCheckedChange={() => toggleDay(day)}
                      >
                        {day}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredDoctors.length} médecin{filteredDoctors.length !== 1 ? 's' : ''} trouvé{filteredDoctors.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {/* Doctors grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full text-sm font-medium text-hypocrate-blue shadow-sm">
                    {doctor.country}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-hypocrate-blue font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4 flex-grow">{doctor.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Disponibilité :</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.availability.map((day) => (
                        <span 
                          key={day} 
                          className={`text-xs px-2 py-1 rounded-full ${
                            selectedDays.includes(day) 
                              ? 'bg-hypocrate-blue text-white' 
                              : 'bg-blue-50 text-hypocrate-blue'
                          }`}
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-hypocrate-blue hover:bg-blue-600 text-white">
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Aucun médecin ne correspond à vos critères.</p>
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="mt-4"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
          
          <div className="mt-16 bg-hypocrate-gray p-8 rounded-xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Vous êtes médecin ?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Rejoignez notre réseau de professionnels de santé et participez à notre mission de rendre 
              les soins médicaux accessibles aux patients africains grâce à la télémédecine.
            </p>
            <Button variant="outline" className="border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50 font-medium">
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
