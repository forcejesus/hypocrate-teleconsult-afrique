
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Clock, 
  DollarSign, 
  Shield, 
  Bell, 
  Languages,
  Calendar,
  Globe
} from 'lucide-react';

export const InterpreterSettings = () => {
  const [languages, setLanguages] = useState(['Français', 'Wolof', 'Arabe']);
  const [newLanguage, setNewLanguage] = useState('');

  const addLanguage = () => {
    if (newLanguage.trim() && !languages.includes(newLanguage)) {
      setLanguages([...languages, newLanguage]);
      setNewLanguage('');
    }
  };

  const removeLanguage = (lang: string) => {
    setLanguages(languages.filter(l => l !== lang));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Paramètres du compte</h2>
        <p className="text-gray-600 mt-1">Gérez vos informations personnelles et préférences d'interprétation</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User size={16} />
            <span className="hidden sm:inline">Profil</span>
          </TabsTrigger>
          <TabsTrigger value="languages" className="flex items-center space-x-2">
            <Languages size={16} />
            <span className="hidden sm:inline">Langues</span>
          </TabsTrigger>
          <TabsTrigger value="availability" className="flex items-center space-x-2">
            <Clock size={16} />
            <span className="hidden sm:inline">Disponibilité</span>
          </TabsTrigger>
          <TabsTrigger value="pricing" className="flex items-center space-x-2">
            <DollarSign size={16} />
            <span className="hidden sm:inline">Tarifs</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-2">
            <Bell size={16} />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Informations personnelles</span>
              </CardTitle>
              <CardDescription>
                Mettez à jour vos informations personnelles et votre présentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" defaultValue="Sarah" />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" defaultValue="Diallo" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="sarah.diallo@email.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" defaultValue="+33 6 12 34 56 78" />
              </div>
              
              <div>
                <Label htmlFor="bio">Présentation professionnelle</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Décrivez votre expérience et vos spécialisations en interprétation médicale..."
                  defaultValue="Interprète médicale certifiée avec 5 ans d'expérience. Spécialisée dans les consultations de médecine générale et pédiatrie."
                />
              </div>
              
              <Button>Enregistrer les modifications</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="languages">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Languages className="w-5 h-5" />
                <span>Langues d'interprétation</span>
              </CardTitle>
              <CardDescription>
                Gérez les langues dans lesquelles vous pouvez interpréter
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Langues maîtrisées</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="px-3 py-1">
                      {lang}
                      <button
                        onClick={() => removeLanguage(lang)}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Input
                  placeholder="Ajouter une langue"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                />
                <Button onClick={addLanguage}>Ajouter</Button>
              </div>
              
              <div className="space-y-4">
                <Label>Certifications linguistiques</Label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Français (Langue maternelle)</p>
                      <p className="text-sm text-gray-600">Certifié C2</p>
                    </div>
                    <Badge variant="outline">Vérifié</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Wolof</p>
                      <p className="text-sm text-gray-600">Niveau natif</p>
                    </div>
                    <Badge variant="outline">Vérifié</Badge>
                  </div>
                </div>
              </div>
              
              <Button>Mettre à jour les langues</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Disponibilités</span>
              </CardTitle>
              <CardDescription>
                Définissez vos créneaux de disponibilité pour les interprétations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Fuseau horaire</Label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md">
                    <option>Europe/Paris (UTC+1)</option>
                    <option>Africa/Dakar (UTC+0)</option>
                  </select>
                </div>
                
                <div>
                  <Label>Statut de disponibilité</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Switch defaultChecked />
                    <span className="text-sm">Disponible pour nouvelles consultations</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Horaires de travail</span>
                </Label>
                <div className="space-y-3">
                  {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
                    <div key={day} className="flex items-center space-x-4">
                      <div className="w-20">
                        <span className="text-sm font-medium">{day}</span>
                      </div>
                      <Switch defaultChecked={day !== 'Dimanche'} />
                      <Input type="time" defaultValue="08:00" className="w-24" />
                      <span className="text-gray-500">à</span>
                      <Input type="time" defaultValue="18:00" className="w-24" />
                    </div>
                  ))}
                </div>
              </div>
              
              <Button>Enregistrer les disponibilités</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Tarification</span>
              </CardTitle>
              <CardDescription>
                Configurez vos tarifs d'interprétation selon le type de consultation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Consultation standard (30 min)</h4>
                    <p className="text-sm text-gray-600">Consultation médicale générale</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input type="number" defaultValue="25" className="w-20" />
                    <span>€</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Consultation longue (60 min)</h4>
                    <p className="text-sm text-gray-600">Consultation spécialisée ou complexe</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input type="number" defaultValue="45" className="w-20" />
                    <span>€</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Consultation d'urgence</h4>
                    <p className="text-sm text-gray-600">Intervention en dehors des heures normales</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input type="number" defaultValue="35" className="w-20" />
                    <span>€</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note :</strong> Les tarifs sont automatiquement ajustés selon la complexité de la consultation et la demande.
                </p>
              </div>
              
              <Button>Mettre à jour les tarifs</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>
                Gérez vos préférences de notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Nouvelles consultations disponibles</h4>
                    <p className="text-sm text-gray-600">Recevoir des notifications pour les nouvelles demandes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Rappels de consultations</h4>
                    <p className="text-sm text-gray-600">Rappels 15 minutes avant chaque consultation</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notifications par email</h4>
                    <p className="text-sm text-gray-600">Recevoir un résumé quotidien par email</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notifications SMS</h4>
                    <p className="text-sm text-gray-600">Notifications urgentes par SMS</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <Button>Enregistrer les préférences</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InterpreterSettings;
