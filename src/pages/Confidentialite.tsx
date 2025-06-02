import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Confidentialite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Politique de confidentialité</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Protection et gestion de vos données personnelles
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Chez Hypocrate, nous accordons une importance primordiale à la protection de vos données personnelles et médicales. 
              Cette politique de confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons, 
              partageons et protégeons vos informations lorsque vous utilisez notre plateforme de téléconsultation médicale.
            </p>
            <p className="text-gray-700 mb-4">
              Nous nous engageons à respecter scrupuleusement les réglementations en vigueur en matière de protection des données, 
              notamment le Règlement Général sur la Protection des Données (RGPD) et les lois locales applicables dans les pays où nous opérons.
            </p>
            <p className="text-gray-700">
              En utilisant nos services, vous consentez aux pratiques décrites dans cette politique de confidentialité.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">1. Collecte des données</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Nous collectons différents types d'informations lorsque vous utilisez notre plateforme :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Données d'inscription :</strong> nom, prénom, adresse e-mail, numéro de téléphone, date de naissance.</li>
                  <li><strong>Données médicales :</strong> antécédents médicaux, symptômes, allergies, traitements en cours.</li>
                  <li><strong>Données de consultation :</strong> contenu des échanges avec les médecins, diagnostics, ordonnances.</li>
                  <li><strong>Données techniques :</strong> adresse IP, type d'appareil, système d'exploitation, données de navigation.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Les données médicales sont considérées comme des données sensibles et bénéficient d'une protection renforcée.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">2. Utilisation des données</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Nous utilisons vos données uniquement dans les buts suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Fournir nos services de téléconsultation et de traduction médicale.</li>
                  <li>Gérer votre dossier médical électronique et assurer le suivi des soins.</li>
                  <li>Traiter les paiements et gérer votre compte.</li>
                  <li>Vous communiquer des informations importantes concernant nos services.</li>
                  <li>Améliorer et personnaliser nos services pour mieux répondre à vos besoins.</li>
                  <li>Respecter nos obligations légales et réglementaires.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">3. Partage des données</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Nous limitons strictement le partage de vos données personnelles et médicales :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Professionnels de santé :</strong> les médecins et traducteurs impliqués dans votre prise en charge médicale.</li>
                  <li><strong>Prestataires de services :</strong> entreprises qui nous aident à fournir nos services (hébergement sécurisé des données, traitement des paiements).</li>
                  <li><strong>Obligations légales :</strong> lorsque la loi l'exige ou pour répondre à une procédure judiciaire.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Tous nos partenaires et prestataires sont soumis à des obligations strictes de confidentialité et de sécurité des données.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">4. Sécurité des données</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Nous mettons en œuvre des mesures techniques et organisationnelles robustes pour protéger vos données :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Chiffrement des données en transit et au repos.</li>
                  <li>Contrôles d'accès stricts basés sur le principe du besoin de connaître.</li>
                  <li>Authentification à deux facteurs pour l'accès aux systèmes sensibles.</li>
                  <li>Audits de sécurité réguliers et tests de pénétration.</li>
                  <li>Formation continue du personnel sur la protection des données.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">5. Conservation des données</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Nous conservons vos données médicales conformément aux exigences légales applicables, généralement :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Dossiers médicaux : 20 ans à compter de la dernière consultation, conformément à la législation médicale.</li>
                  <li>Données de compte : pendant la durée de votre utilisation de nos services et jusqu'à 3 ans après votre dernière activité.</li>
                  <li>Données de paiement : 10 ans, conformément aux obligations comptables et fiscales.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">6. Vos droits</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Conformément aux lois sur la protection des données, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Droit d'accès :</strong> obtenir une copie des données que nous détenons sur vous.</li>
                  <li><strong>Droit de rectification :</strong> corriger les informations inexactes vous concernant.</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données dans les limites légales.</li>
                  <li><strong>Droit à la limitation du traitement :</strong> restreindre le traitement de vos données dans certaines circonstances.</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et couramment utilisé.</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données dans certaines situations.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Pour exercer ces droits, contactez notre Délégué à la Protection des Données à l'adresse : dpo@hypocrate-teleconsult.com
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">7. Cookies et technologies similaires</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Notre site web utilise des cookies et des technologies similaires pour améliorer votre expérience utilisateur :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site et à la sécurité.</li>
                  <li><strong>Cookies analytiques :</strong> nous aident à comprendre comment les utilisateurs interagissent avec notre site.</li>
                  <li><strong>Cookies fonctionnels :</strong> permettent de mémoriser vos préférences et personnaliser votre expérience.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">8. Modifications de la politique de confidentialité</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Les modifications entrent en vigueur dès leur publication sur notre site web. 
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles mises à jour.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">9. Contact</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou le traitement 
                  de vos données personnelles, veuillez nous contacter :
                </p>
                <div className="text-gray-700 space-y-1">
                  <p><strong>Adresse :</strong> 123 Avenue de la Médecine, 75000 Paris, France</p>
                  <p><strong>Email :</strong> privacy@hypocrate-teleconsult.com</p>
                  <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 text-center">
              Dernière mise à jour de cette politique : 4 mai 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Confidentialite;
