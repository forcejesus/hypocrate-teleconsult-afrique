
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Consentement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-hypocrate-lightBlue py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center">Information & consentement</h1>
            <p className="text-xl text-center mt-4 text-gray-700 max-w-3xl mx-auto">
              Les informations essentielles concernant notre service de téléconsultation médicale.
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-700">
              Ce document a pour objectif de vous fournir toutes les informations nécessaires concernant notre service de 
              téléconsultation médicale et d'obtenir votre consentement éclairé avant l'utilisation de nos services. 
              Veuillez lire attentivement ce document et vous assurer de comprendre toutes les informations qu'il contient 
              avant de procéder à une consultation médicale sur notre plateforme.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">1. Nature des services de téléconsultation</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  La téléconsultation médicale proposée par Hypocrate consiste en une consultation à distance réalisée 
                  par un médecin certifié via notre plateforme sécurisée de vidéoconférence. Cette consultation peut être 
                  accompagnée d'un service de traduction si vous en faites la demande.
                </p>
                <p className="text-gray-700 mb-4">
                  Il est important de comprendre que :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Une téléconsultation ne remplace pas une consultation en présentiel lorsque celle-ci est nécessaire</li>
                  <li>Le médecin peut vous recommander de consulter en personne s'il estime que votre état le nécessite</li>
                  <li>En cas d'urgence médicale, vous devez contacter les services d'urgence locaux et non recourir à la téléconsultation</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">2. Qualification des médecins</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Tous les médecins disponibles sur notre plateforme sont des professionnels de santé qualifiés et certifiés :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Ils possèdent les diplômes et certifications requis pour exercer la médecine dans leur pays d'exercice</li>
                  <li>Ils sont inscrits à l'ordre des médecins ou l'équivalent dans leur juridiction</li>
                  <li>Ils suivent régulièrement des formations pour mettre à jour leurs connaissances médicales</li>
                  <li>Ils sont formés spécifiquement à la pratique de la télémédecine</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Vous pouvez consulter le profil détaillé de chaque médecin sur notre plateforme, incluant leurs qualifications, 
                  spécialités et expériences professionnelles.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">3. Service de traduction</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Notre service de traduction est assuré par des traducteurs professionnels spécialisés dans le domaine médical :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Ils sont formés à la terminologie médicale</li>
                  <li>Ils sont soumis aux mêmes obligations de confidentialité que le personnel médical</li>
                  <li>Ils facilitent la communication entre vous et le médecin sans interférer dans la relation de soin</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Bien que nos traducteurs s'efforcent de fournir une traduction précise et fidèle, il est possible que certaines 
                  nuances linguistiques soient perdues dans le processus de traduction. N'hésitez pas à demander des clarifications 
                  si vous ne comprenez pas certaines informations.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">4. Confidentialité et sécurité des données</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  La confidentialité de vos informations médicales est une priorité absolue :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Toutes les consultations sont chiffrées de bout en bout</li>
                  <li>Vos données médicales sont stockées de manière sécurisée sur des serveurs conformes aux normes de sécurité les plus strictes</li>
                  <li>L'accès à vos données est strictement limité aux professionnels impliqués dans votre prise en charge</li>
                  <li>Tous les médecins et traducteurs sont soumis au secret professionnel</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Pour plus d'informations sur la manière dont nous traitons vos données, veuillez consulter notre politique de confidentialité.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">5. Processus de téléconsultation</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Le déroulement d'une téléconsultation sur notre plateforme est le suivant :
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                  <li><strong>Prise de rendez-vous :</strong> vous sélectionnez un médecin, une date et une heure qui vous conviennent.</li>
                  <li><strong>Questionnaire médical :</strong> avant la consultation, vous remplissez un questionnaire sur votre état de santé.</li>
                  <li><strong>Connexion :</strong> à l'heure du rendez-vous, vous vous connectez à la salle d'attente virtuelle.</li>
                  <li><strong>Consultation :</strong> le médecin (et le traducteur si demandé) vous rejoint pour la consultation vidéo.</li>
                  <li><strong>Diagnostic et traitement :</strong> le médecin établit un diagnostic et vous propose un traitement si nécessaire.</li>
                  <li><strong>Ordonnance et documents :</strong> les ordonnances et autres documents sont mis à disposition dans votre espace personnel.</li>
                  <li><strong>Suivi :</strong> selon les besoins, un suivi médical peut être proposé.</li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">6. Limites de la téléconsultation</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Il est important d'être conscient des limites inhérentes à la téléconsultation :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>L'absence d'examen physique peut limiter la précision de certains diagnostics</li>
                  <li>Certaines conditions médicales nécessitent un examen en personne</li>
                  <li>Des problèmes techniques peuvent parfois perturber la qualité de la communication</li>
                  <li>Certains examens complémentaires peuvent être nécessaires et nécessiter un déplacement</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Le médecin vous informera si votre condition nécessite une consultation en personne ou des examens complémentaires.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">7. Responsabilités du patient</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  En tant qu'utilisateur de notre service de téléconsultation, vous avez certaines responsabilités :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Fournir des informations médicales complètes et véridiques</li>
                  <li>Suivre les recommandations et traitements prescrits par le médecin</li>
                  <li>Informer le médecin de tout changement dans votre état de santé</li>
                  <li>Vous assurer de disposer d'une connexion internet stable et d'un environnement adapté (calme et privé) pour la consultation</li>
                  <li>Ne pas enregistrer la consultation sans le consentement explicite du médecin et du traducteur</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">8. Tarification et remboursement</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Nos tarifs sont clairement indiqués avant la confirmation de votre rendez-vous. Selon votre pays et votre 
                  couverture médicale, les téléconsultations peuvent être partiellement ou totalement prises en charge par 
                  votre assurance maladie ou votre mutuelle.
                </p>
                <p className="text-gray-700">
                  Il vous appartient de vérifier auprès de votre organisme d'assurance les conditions de prise en charge des 
                  téléconsultations. Nous pouvons vous fournir une facture détaillée pour faciliter vos démarches de remboursement.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">9. Droit de retrait du consentement</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Vous êtes libre de retirer votre consentement à tout moment, avant ou même pendant une téléconsultation. 
                  Ce retrait n'affectera pas la légalité du traitement de vos données effectué avant ce retrait. 
                  Pour exercer ce droit, veuillez nous contacter à l'adresse : consentement@hypocrate-teleconsult.com.
                </p>
              </div>
            </div>

            <div id="consentement" className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold mb-6 text-center">Formulaire de consentement</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  En créant un compte ou en utilisant les services d'Hypocrate, vous reconnaissez avoir lu et compris les informations 
                  ci-dessus et vous donnez votre consentement libre et éclairé pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Bénéficier d'une consultation médicale à distance via notre plateforme</li>
                  <li>L'utilisation d'un service de traduction si vous en faites la demande</li>
                  <li>Le traitement de vos données de santé conformément à notre politique de confidentialité</li>
                  <li>La transmission sécurisée de vos informations aux professionnels impliqués dans votre prise en charge</li>
                </ul>
                
                <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-start mb-4">
                    <input type="checkbox" id="consent1" className="mt-1 mr-3" />
                    <label htmlFor="consent1" className="text-gray-700">
                      J'ai lu et compris les informations concernant le service de téléconsultation proposé par Hypocrate
                    </label>
                  </div>
                  <div className="flex items-start mb-4">
                    <input type="checkbox" id="consent2" className="mt-1 mr-3" />
                    <label htmlFor="consent2" className="text-gray-700">
                      Je comprends les avantages, limites et risques potentiels de la téléconsultation médicale
                    </label>
                  </div>
                  <div className="flex items-start mb-4">
                    <input type="checkbox" id="consent3" className="mt-1 mr-3" />
                    <label htmlFor="consent3" className="text-gray-700">
                      J'accepte que mes données de santé soient traitées conformément à la politique de confidentialité d'Hypocrate
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="consent4" className="mt-1 mr-3" />
                    <label htmlFor="consent4" className="text-gray-700">
                      Je donne mon consentement libre et éclairé pour bénéficier des services de téléconsultation d'Hypocrate
                    </label>
                  </div>
                  
                  <button className="bg-hypocrate-blue text-white font-semibold px-6 py-2 rounded-md mt-8 w-full hover:bg-blue-600 transition-colors">
                    Je confirme mon consentement
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 text-center">
              Dernière mise à jour : 4 mai 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consentement;
