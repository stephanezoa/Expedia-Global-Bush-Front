// src/pages/PrivacyPolicy.jsx
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="min-h-[70vh] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-12 h-12 text-purple-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment Global Bush Travel protège et gère vos informations personnelles avec soin et transparence.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <p className="text-gray-700 text-lg">
              Global Bush Travel and Tourism Agency, basée à Douala, Cameroun, est une agence de voyages agréée, accréditée IATA et DMC CAMEROON. 
              Autorisée par le Ministère du Tourisme, nous servons fièrement nos clients depuis 2010.
            </p>
          </div>

          <div className="space-y-10">
            {/* À propos de cette politique */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                À propos de cette politique
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Cette Politique de Confidentialité, ainsi que notre Politique relative aux Cookies et nos Conditions d'Utilisation, 
                  décrit comment Global Bush Travel collecte, utilise et protège vos informations personnelles lorsque vous interagissez 
                  avec nos services. Cela inclut notre site web, nos applications mobiles, notre support client et nos activités de recherche.
                </p>
                <p>
                  Nous examinons régulièrement cette Politique pour nous assurer qu'elle reflète nos pratiques actuelles. 
                  Les mises à jour apparaîtront sur cette page. Pour les changements majeurs, nous vous en informerons par e-mail 
                  ou sur nos plateformes.
                </p>
              </div>
            </section>

            {/* Données personnelles collectées */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Quelles données personnelles nous collectons
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous collectons des données pour aider à planifier et gérer vos voyages de manière efficace. 
                  Cela inclut les informations que vous fournissez directement (comme vos coordonnées ou vos détails de paiement) 
                  et les données collectées automatiquement (comme le type d'appareil ou de navigateur).
                </p>
                <div className="bg-purple-50 rounded-lg p-6 mt-4">
                  <h3 className="font-semibold text-purple-800 mb-3">Exemples de données collectées :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <span>Informations de contact</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <span>Détails de paiement</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <span>Informations de voyage</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-purple-600 text-sm">✓</span>
                      </div>
                      <span>Données techniques de navigation</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pourquoi nous utilisons vos données */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Pourquoi nous utilisons vos données
              </h2>
              <div className="space-y-4 text-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-green-600 text-sm">•</span>
                    </div>
                    <span>Pour traiter les réservations et gérer vos projets de voyage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-green-600 text-sm">•</span>
                    </div>
                    <span>Pour améliorer nos services et assurer une expérience personnalisée</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-green-600 text-sm">•</span>
                    </div>
                    <span>Pour nous conformer aux exigences légales et réglementaires</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-green-600 text-sm">•</span>
                    </div>
                    <span>Pour envoyer des mises à jour marketing — uniquement avec votre consentement</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Quand nous partageons les données */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Quand nous partageons les données
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous ne partageons vos informations que lorsque cela est nécessaire — par exemple, avec des hôtels, 
                  compagnies aériennes ou partenaires touristiques qui aident à exécuter vos réservations. 
                  Chaque partenaire traite vos données conformément à ses propres conditions de confidentialité.
                </p>
              </div>
            </section>

            {/* Où nous traitons les données */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Où nous traitons les données
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous stockons vos informations dans des centres de données sécurisés à travers le monde, 
                  en partenariat uniquement avec des fournisseurs qui répondent aux normes internationales 
                  de protection des données.
                </p>
              </div>
            </section>

            {/* Publicité et cookies */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Publicité et cookies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience 
                  de navigation et fournir un contenu pertinent. Vous pouvez gérer vos préférences en matière 
                  de cookies dans les paramètres de votre navigateur à tout moment.
                </p>
              </div>
            </section>

            {/* Conservation des données */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Conservation des données
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous conservons les données personnelles uniquement aussi longtemps que nécessaire 
                  aux fins pour lesquelles elles ont été collectées — y compris pour des exigences 
                  légales ou comptables. Une fois qu'elles ne sont plus nécessaires, elles sont 
                  supprimées de manière sécurisée ou anonymisées.
                </p>
              </div>
            </section>

            {/* Protection des données */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Protection des données
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous utilisons des protocoles de sécurité conformes aux normes de l'industrie 
                  pour protéger vos données contre tout accès non autorisé ou toute utilisation abusive. 
                  Votre vie privée et votre confiance sont nos priorités absolues.
                </p>
              </div>
            </section>

            {/* Vos droits */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Vos droits
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Vous avez le droit d'accéder, de corriger ou de supprimer vos données, et de retirer 
                  votre consentement pour le marketing à tout moment. Pour exercer vos droits, contactez-nous directement.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-purple-50 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nous contacter
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Global Bush Travel & Tourism Agency</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Carrefour Samuel Eto'o Fils, Douala Bonamoussadi, Cameroun</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:info@globalbushtravel.com" className="text-purple-600 hover:text-purple-800 transition-colors">
                        info@globalbushtravel.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+237233477000" className="text-purple-600 hover:text-purple-800 transition-colors">
                        +237 233 477 000
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 pt-6 border-t border-purple-200">
                  Cette politique de confidentialité a été mise à jour pour refléter nos pratiques actuelles en matière de protection des données.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}