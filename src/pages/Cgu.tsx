
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cgu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Conditions générales d'utilisation</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Veuillez lire attentivement ces conditions avant d'utiliser notre plateforme.
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Préambule</h2>
            <p className="text-gray-700">
              Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités et conditions d'utilisation 
              des services offerts par la plateforme Hypocrate (ci-après "Hypocrate", "nous", "notre" ou "nos"), accessible via le site web 
              www.hypocrate-teleconsult.com ou l'application mobile Hypocrate. Ces CGU constituent un contrat juridiquement 
              contraignant entre Hypocrate et toute personne qui accède à ou utilise la plateforme (ci-après "l'Utilisateur", 
              "vous" ou "votre"). En utilisant notre plateforme, vous acceptez de vous conformer à ces CGU et à notre politique 
              de confidentialité. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">1. Description des services</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Hypocrate est une plateforme de téléconsultation médicale qui met en relation des patients avec des médecins 
                  certifiés, avec l'assistance d'un service de traduction si nécessaire. Nos services comprennent, sans s'y limiter :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Consultations médicales à distance par vidéoconférence</li>
                  <li>Service de traduction en temps réel pendant les consultations</li>
                  <li>Gestion d'un dossier médical électronique</li>
                  <li>Délivrance d'ordonnances électroniques</li>
                  <li>Suivi médical post-consultation</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">2. Conditions d'accès et d'inscription</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Pour accéder à nos services de téléconsultation, vous devez :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Être âgé d'au moins 18 ans ou être représenté par un tuteur légal</li>
                  <li>Créer un compte utilisateur avec des informations exactes, complètes et à jour</li>
                  <li>Disposer d'une connexion internet stable et d'un appareil compatible (ordinateur, tablette ou smartphone)</li>
                  <li>Disposer d'une caméra et d'un microphone fonctionnels pour les consultations vidéo</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toutes les activités qui se 
                  déroulent sous votre compte. Vous devez nous informer immédiatement de toute utilisation non autorisée de votre compte.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">3. Utilisation des services</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">3.1 Prise de rendez-vous</h3>
                <p className="text-gray-700 mb-4">
                  La prise de rendez-vous s'effectue via notre plateforme en fonction des disponibilités des médecins. 
                  Vous pouvez sélectionner un médecin selon sa spécialité, sa langue, son pays ou sa disponibilité. 
                  Un rendez-vous est confirmé après réception du paiement.
                </p>

                <h3 className="text-lg font-semibold mb-3">3.2 Consultations</h3>
                <p className="text-gray-700 mb-4">
                  Les consultations se déroulent par vidéoconférence sécurisée. Vous devez vous connecter à l'heure prévue 
                  de votre rendez-vous. En cas de retard de plus de 10 minutes, la consultation pourra être annulée ou écourtée 
                  à la discrétion du médecin.
                </p>

                <h3 className="text-lg font-semibold mb-3">3.3 Service de traduction</h3>
                <p className="text-gray-700 mb-4">
                  Si vous avez opté pour un service de traduction, un traducteur professionnel participera à la consultation 
                  pour faciliter la communication entre vous et le médecin. Le traducteur est tenu aux mêmes obligations de 
                  confidentialité que le médecin.
                </p>

                <h3 className="text-lg font-semibold mb-3">3.4 Ordonnances et documents médicaux</h3>
                <p className="text-gray-700">
                  Les ordonnances et autres documents médicaux émis lors d'une consultation sont disponibles dans votre 
                  espace personnel sécurisé. Ces documents sont valables selon la législation applicable dans votre pays de résidence.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">4. Tarifs et paiements</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Les tarifs de nos services sont indiqués sur notre plateforme avant la confirmation du rendez-vous. 
                  Le paiement s'effectue en ligne par carte bancaire ou par tout autre moyen de paiement proposé sur notre plateforme.
                </p>
                <p className="text-gray-700 mb-4">
                  Les tarifs peuvent varier en fonction :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>De la spécialité du médecin consulté</li>
                  <li>De la durée de la consultation</li>
                  <li>De l'utilisation ou non du service de traduction</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nous nous réservons le droit de modifier nos tarifs à tout moment. Les nouveaux tarifs s'appliqueront 
                  uniquement aux nouvelles réservations.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">5. Annulation et remboursement</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Notre politique d'annulation et de remboursement est la suivante :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Annulation plus de 24 heures avant la consultation : remboursement intégral.</li>
                  <li>Annulation entre 24 et 2 heures avant la consultation : remboursement de 50% du montant payé.</li>
                  <li>Annulation moins de 2 heures avant la consultation : aucun remboursement.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  En cas de problème technique empêchant la tenue de la consultation et imputable à notre plateforme, 
                  un remboursement intégral sera effectué ou la consultation sera reprogrammée sans frais supplémentaires, 
                  selon votre préférence.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">6. Limitation de responsabilité</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Bien que nous nous efforcions de fournir des services de qualité, Hypocrate ne peut garantir :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>La disponibilité continue et ininterrompue de la plateforme</li>
                  <li>L'absence d'erreurs ou de bugs dans le logiciel</li>
                  <li>La compatibilité totale avec tous les appareils et navigateurs</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Hypocrate ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation 
                  ou de l'impossibilité d'utiliser nos services, sauf en cas de faute grave ou intentionnelle de notre part.
                </p>
                <p className="text-gray-700 mt-4">
                  La téléconsultation ne remplace pas une consultation en personne lorsque celle-ci est nécessaire. 
                  En cas d'urgence médicale, veuillez contacter les services d'urgence locaux.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">7. Propriété intellectuelle</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  L'ensemble des éléments constituant notre plateforme (textes, graphiques, logiciels, images, vidéos, etc.) 
                  est protégé par les lois relatives à la propriété intellectuelle. Ces éléments sont la propriété exclusive 
                  d'Hypocrate ou de ses partenaires.
                </p>
                <p className="text-gray-700">
                  Toute reproduction, distribution, modification ou utilisation de ces éléments, sans autorisation 
                  expresse écrite d'Hypocrate, est strictement interdite et constitue une violation des droits de propriété intellectuelle.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">8. Protection des données personnelles</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Nous accordons une importance primordiale à la protection de vos données personnelles, et en particulier 
                  vos données de santé. Notre politique de confidentialité, accessible sur notre site web, décrit en détail 
                  comment nous collectons, utilisons et protégeons vos données.
                </p>
                <p className="text-gray-700">
                  En utilisant nos services, vous consentez au traitement de vos données conformément à notre politique 
                  de confidentialité et aux lois applicables en matière de protection des données.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">9. Modification des CGU</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications prendront effet dès leur 
                  publication sur notre plateforme. Nous vous informerons des modifications substantielles par email ou par 
                  notification sur notre plateforme. Votre utilisation continue des services après la publication des 
                  modifications vaut acceptation des nouvelles conditions.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">10. Loi applicable et juridiction compétente</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Les présentes CGU sont régies par le droit français. Tout litige relatif à l'interprétation ou à 
                  l'exécution des présentes conditions sera soumis aux tribunaux compétents de Paris, France, 
                  sauf disposition légale contraire.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">11. Contact</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Pour toute question concernant ces CGU, veuillez nous contacter à l'adresse suivante : 
                  legal@hypocrate-teleconsult.com ou par courrier à l'adresse : Hypocrate, 123 Avenue de la Médecine, 75000 Paris, France.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 text-center">
              Dernière mise à jour des CGU : 4 mai 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cgu;
