
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, MapPin } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Link } from 'react-router-dom';

// Données factices pour les médecins
const doctors = [
  {
    id: 1,
    name: "Dr. Sophie Martin",
    specialty: "Médecine générale",
    rating: 4.8,
    reviewsCount: 124,
    location: "Paris, France",
    price: 45,
    availableToday: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Antoine Dubois",
    specialty: "Dermatologie",
    rating: 4.6,
    reviewsCount: 98,
    location: "Lyon, France",
    price: 65,
    availableToday: false,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Dr. Marie Lambert",
    specialty: "Psychologie",
    rating: 4.9,
    reviewsCount: 157,
    location: "Marseille, France",
    price: 70,
    availableToday: true,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Jean Dupont",
    specialty: "Cardiologie",
    rating: 4.7,
    reviewsCount: 113,
    location: "Bordeaux, France",
    price: 80,
    availableToday: false,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
  }
];

// Spécialités disponibles
const specialties = [
  "Toutes les spécialités",
  "Médecine générale",
  "Dermatologie",
  "Psychologie",
  "Cardiologie",
  "Nutrition",
  "Pédiatrie",
  "Gynécologie"
];

export const PatientFindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Toutes les spécialités');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [availableTodayOnly, setAvailableTodayOnly] = useState(false);
  
  // Filtrer les médecins
  const filteredDoctors = doctors.filter(doctor => {
    // Filtrer par terme de recherche
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtrer par spécialité
    const matchesSpecialty = selectedSpecialty === 'Toutes les spécialités' || 
                            doctor.specialty === selectedSpecialty;
    
    // Filtrer par prix
    const matchesPrice = doctor.price >= priceRange[0] && doctor.price <= priceRange[1];
    
    // Filtrer par disponibilité
    const matchesAvailability = !availableTodayOnly || doctor.availableToday;
    
    return matchesSearch && matchesSpecialty && matchesPrice && matchesAvailability;
  });
  
  // Animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="space-y-6">
      {/* Filtres */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Rechercher un médecin</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Recherche par nom */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Rechercher par nom ou spécialité"
              className="pl-10 h-12 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filtre par spécialité */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between h-12 rounded-lg">
                <span>{selectedSpecialty}</span>
                <Filter size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-[220px]" align="start">
              {specialties.map((specialty) => (
                <DropdownMenuItem 
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className="cursor-pointer"
                >
                  {specialty}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Filtres supplémentaires */}
          <div className="flex space-x-2">
            <Button
              variant={availableTodayOnly ? "default" : "outline"}
              className={`flex-1 h-12 rounded-lg ${
                availableTodayOnly 
                  ? 'bg-hypocrate-blue hover:bg-blue-600' 
                  : 'border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50'
              }`}
              onClick={() => setAvailableTodayOnly(!availableTodayOnly)}
            >
              Disponible aujourd'hui
            </Button>
          </div>
        </div>
        
        {/* Filtre par prix */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-700">Prix de la consultation</h4>
            <span className="text-sm text-gray-600">
              {priceRange[0]}€ - {priceRange[1]}€
            </span>
          </div>
          <Slider
            defaultValue={[0, 100]}
            min={0}
            max={100}
            step={5}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as number[])}
            className="py-4"
          />
        </div>
      </div>
      
      {/* Liste des médecins */}
      {filteredDoctors.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm">
          <Search className="w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700">Aucun médecin trouvé</h3>
          <p className="text-gray-500 mt-2 text-center">
            Essayez d'ajuster vos filtres de recherche pour voir plus de résultats.
          </p>
        </div>
      ) : (
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredDoctors.map((doctor) => (
            <motion.div key={doctor.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full">
                <div className="md:flex">
                  <div className="md:w-1/3 h-full">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover object-center min-h-[180px]"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{doctor.name}</h3>
                          <p className="text-sm text-gray-500">{doctor.specialty}</p>
                        </div>
                        {doctor.availableToday && (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            Disponible aujourd'hui
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-col space-y-2 mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-amber-500 mr-1 fill-current" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">
                            ({doctor.reviewsCount} avis)
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-hypocrate-blue mr-1" />
                          <span className="text-sm">{doctor.location}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm">À partir de </span>
                          <span className="text-lg font-bold ml-1 text-hypocrate-blue">{doctor.price}€</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 mt-2">
                      <Link to={`/doctor-booking/${doctor.id}`}>
                        Prendre rendez-vous
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
