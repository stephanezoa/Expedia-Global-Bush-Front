// src/pages/Terms.jsx
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="min-h-[70vh] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-12 h-12 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conditions Générales
            </h1>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <p className="text-xl text-gray-600">
                Bienvenue chez Global Bush Travel ! En accédant et en utilisant notre site web, services et produits, 
                vous acceptez de respecter et d'être lié par les conditions générales suivantes. Veuillez les lire attentivement.
              </p>
            </div>
          </div>

          {/* 1. Introduction */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Introduction
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <p>
                Global Bush Travel (« nous », « notre », « nos ») fournit des services liés aux voyages et au tourisme via ce site web. 
                En utilisant www.globalbushtravel.com (« le Site »), vous acceptez ces Conditions Générales dans leur intégralité.
              </p>
            </div>
          </section>

          {/* 2. Utilisation du site web */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Utilisation du site web
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Vous acceptez d'utiliser le Site uniquement à des fins légales et d'une manière qui ne porte pas atteinte 
                    aux droits des autres ou ne restreint pas leur utilisation et leur jouissance du Site.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Vous ne devez pas utiliser abusivement le Site en introduisant sciemment des virus ou d'autres 
                    éléments nuisibles ou en tentant d'accéder sans autorisation.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Réservations */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Réservations
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>Toutes les réservations effectuées via Global Bush Travel sont soumises à disponibilité et confirmation.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>Les prix, disponibilités et horaires sont susceptibles d'être modifiés sans préavis.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>Vous devez fournir des informations exactes et complètes lors de votre réservation.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>Toute demande spéciale sera transmise aux prestataires de services mais ne peut être garantie.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Modalités de paiement */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Modalités de paiement
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>Les modalités de paiement seront précisées lors du processus de réservation.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>Le paiement intégral ou un acompte peut être requis pour confirmer votre réservation.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>Le défaut de paiement dans les délais peut entraîner l'annulation de la réservation sans remboursement.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Annulations et remboursements */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">5</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Annulations et remboursements
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Les politiques d'annulation varient en fonction du service ou du forfait réservé 
                    et seront communiquées au moment de la réservation.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Les remboursements, le cas échéant, seront traités conformément aux conditions définies 
                    par les prestataires de services concernés.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Documents de voyage et exigences */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">6</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Documents de voyage et exigences
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Il est de votre responsabilité de vous assurer que vous disposez des documents de voyage valides 
                    (passeport, visas, permis) et que vous respectez les lois et réglementations locales de votre destination.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Global Bush Travel n'est pas responsable des problèmes découlant du non-respect de ces exigences.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 7. Responsabilité */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">7</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Responsabilité
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Global Bush Travel agit en tant qu'intermédiaire entre vous et les prestataires de services tiers 
                    (compagnies aériennes, hôtels, tour-opérateurs, etc.).
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Nous n'acceptons pas la responsabilité pour les blessures, pertes, dommages, retards ou inconvénients 
                    causés par ces tiers.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Dans la mesure maximale permise par la loi, notre responsabilité est limitée.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 8. Propriété intellectuelle */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">8</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Propriété intellectuelle
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Tout le contenu de ce site web, y compris le texte, les images, les logos et les graphiques, 
                    est la propriété de Global Bush Travel ou de ses concédants de licence.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Vous ne pouvez pas utiliser, reproduire ou distribuer de matériel sans autorisation écrite préalable.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 9. Politique de confidentialité */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">9</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Politique de confidentialité
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Vos informations personnelles seront traitées conformément à notre Politique de Confidentialité, 
                    disponible sur le site web.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    En utilisant nos services, vous consentez à la collecte et à l'utilisation de vos données 
                    telles que décrites.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 10. Modifications des conditions générales */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">10</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Modifications des conditions générales
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Nous nous réservons le droit de mettre à jour ou de modifier ces Conditions Générales à tout moment 
                    sans préavis.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Les modifications prendront effet immédiatement après leur publication sur le site web. 
                    Votre utilisation continue du Site constitue l'acceptation des conditions mises à jour.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 11. Droit applicable */}
          <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">11</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Droit applicable
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 ml-12">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Ces Conditions Générales sont régies par les lois de la juridiction dans laquelle Global Bush Travel opère.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-sm">•</span>
                  </div>
                  <span>
                    Tout litige sera soumis à la compétence exclusive des tribunaux de cette juridiction.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 12. Informations de contact */}
          <section className="bg-green-50 rounded-xl shadow-sm p-8">
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">12</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Informations de contact
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 ml-12">
              <p>
                Si vous avez des questions ou des préoccupations concernant ces Conditions Générales, 
                veuillez nous contacter à :
              </p>
              
              <div className="bg-white rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@globalbushtravel.com" className="text-green-600 hover:text-green-800 transition-colors font-medium">
                      info@globalbushtravel.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+237677246624" className="text-green-600 hover:text-green-800 transition-colors font-medium">
                      (+237) 677 24 66 24
                    </a>
                  </div>
                  <div className="flex items-start mt-3">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">
                      Carrefour Samuel Eto'o Fils, Douala Bonamoussadi, Cameroun
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note importante :</strong> Veuillez lire attentivement ces conditions générales avant d'utiliser nos services. 
                  En utilisant notre site web ou en effectuant une réservation, vous acceptez d'être lié par ces conditions.
                </p>
              </div>
            </div>
          </section>

          {/* Message final */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-400 text-xs mt-2">
              © {new Date().getFullYear()} Global Bush Travel. Tous droits réservés.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}