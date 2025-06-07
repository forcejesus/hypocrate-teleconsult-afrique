
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, Languages, MapPin, Video, Calendar, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

// Sample doctors data
const doctors = [
  {
    id: 1,
    name: "Dr. Sophie Martin",
    specialty: "Médecine générale",
    rating: 4.9,
    reviews: 156,
    languages: ["Français", "Anglais"],
    country: "France",
    experience: "15 ans",
    nextAvailable: "Aujourd'hui 14h30",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    isOnline: true,
    bio: "Spécialiste en médecine générale avec une approche holistique du patient."
  },
  {
    id: 2,
    name: "Dr. Jean Dupont",
    specialty: "Cardiologie",
    rating: 4.8,
    reviews: 203,
    languages: ["Français", "Anglais", "Espagnol"],
    country: "Belgique",
    experience: "20 ans",
    nextAvailable: "Demain 09h00",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
    isOnline: false,
    bio: "Cardiologue expérimenté, spécialisé dans les maladies cardiovasculaires."
  },
  {
    id: 3,
    name: "Dr. Marie Leclerc",
    specialty: "Pédiatrie",
    rating: 4.9,
    reviews: 134,
    languages: ["Français", "Allemand"],
    country: "Suisse",
    experience: "12 ans",
    nextAvailable: "Aujourd'hui 16h00",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
    isOnline: true,
    bio: "Pédiatre dévouée avec une approche centrée sur l'enfant et sa famille."
  },
  {
    id: 4,
    name: "Dr. Thomas Leroy",
    specialty: "Dermatologie",
    rating: 4.7,
    reviews: 89,
    languages: ["Français", "Italien"],
    country: "France",
    experience: "8 ans",
    nextAvailable: "Demain 11h30",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
    isOnline: true,
    bio: "Dermatologue spécialisé dans le diagnostic et le traitement des affections cutanées."
  }
];

const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));
const countries = Array.from(new Set(doctors.map(doctor => doctor.country)));
const allLanguages = Array.from(new Set(doctors.flatMap(doctor => doctor.languages)));

export const PatientFindDoctor: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [onlineOnly, setOnlineOnly] = useState(false);

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

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language) 
        : [...prev, language]
    );
  };

  const clearFilters = () => {
    setSelectedSpecialties([]);
    setSelectedCountries([]);
    setSelectedLanguages([]);
    setOnlineOnly(false);
    setSearchQuery("");
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(doctor.specialty);
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(doctor.country);
    const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.some(lang => doctor.languages.includes(lang));
    const matchesOnline = !onlineOnly || doctor.isOnline;

    return matchesSearch && matchesSpecialty && matchesCountry && matchesLanguage && matchesOnline;
  });

  const hasActiveFilters = selectedSpecialties.length > 0 || selectedCountries.length > 0 || 
                          selectedLanguages.length > 0 || onlineOnly || searchQuery;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Trouver un médecin</h1>
        <p className="text-gray-600">Trouvez le médecin parfait pour vos besoins</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-50 rounded-2xl p-4 md:p-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Rechercher par nom ou spécialité..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-white border-gray-200 rounded-xl"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Specialty Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white border-gray-200 hover:bg-gray-50"
              >
                <Filter className="mr-2 h-4 w-4" />
                Spécialité
                {selectedSpecialties.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-indigo-100 text-indigo-700">
                    {selectedSpecialties.length}
                  </Badge>
                )}
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

          {/* Country Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white border-gray-200 hover:bg-gray-50"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Pays
                {selectedCountries.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-indigo-100 text-indigo-700">
                    {selectedCountries.length}
                  </Badge>
                )}
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

          {/* Language Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white border-gray-200 hover:bg-gray-50"
              >
                <Languages className="mr-2 h-4 w-4" />
                Langues
                {selectedLanguages.length > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-indigo-100 text-indigo-700">
                    {selectedLanguages.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {allLanguages.map((language) => (
                <DropdownMenuCheckboxItem
                  key={language}
                  checked={selectedLanguages.includes(language)}
                  onCheckedChange={() => toggleLanguage(language)}
                >
                  {language}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Online Only Filter */}
          <Button
            variant={onlineOnly ? "default" : "outline"}
            onClick={() => setOnlineOnly(!onlineOnly)}
            className={onlineOnly ? "bg-green-600 hover:bg-green-700" : "bg-white border-gray-200 hover:bg-gray-50"}
          >
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${onlineOnly ? 'bg-white' : 'bg-green-500'}`} />
              En ligne maintenant
            </div>
          </Button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="mr-2 h-4 w-4" />
              Effacer
            </Button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          {filteredDoctors.length} médecin{filteredDoctors.length !== 1 ? 's' : ''} trouvé{filteredDoctors.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDoctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-gray-100">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback className="bg-indigo-100 text-indigo-700">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {doctor.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{doctor.name}</h3>
                    <p className="text-indigo-600 font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {doctor.country} • {doctor.experience} d'expérience
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                    <span className="text-sm text-gray-500">({doctor.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{doctor.bio}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {doctor.languages.map((language) => (
                    <Badge key={language} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                      {language}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Prochain créneau: <span className="font-medium text-gray-900">{doctor.nextAvailable}</span></span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Button 
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-10"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Prendre RDV
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-10 w-10 border-gray-200 hover:bg-gray-50 rounded-xl"
                  >
                    <Video className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun médecin trouvé</h3>
          <p className="text-gray-500 mb-4">Essayez de modifier vos critères de recherche</p>
          <Button variant="outline" onClick={clearFilters}>
            Réinitialiser les filtres
          </Button>
        </div>
      )}
    </div>
  );
};

export default PatientFindDoctor;
