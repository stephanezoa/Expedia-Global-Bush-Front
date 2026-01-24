// src/pages/CircuitGolf.jsx
import React from "react";
import Footer from "../components/Footer";

const CircuitGolf = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête avec thème golf bleu */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-8 text-center relative">
            <div className="absolute top-4 right-4 text-4xl">⛳</div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Circuits Golf au Cameroun
            </h1>
            <div className="w-32 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              L'excellence sur les greens camerounais
            </p>
          </div>

          <div className="p-8 md:p-10">
            {/* Introduction */}
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
              <p className="text-gray-800 text-lg leading-relaxed">
                Organiser le voyage de golf parfait sans l'aide d'un professionnel peut être un vrai coup de dés. 
                Tout comme nous faisons appel à des professionnels dans d'autres domaines — médecins, avocats, 
                professeurs, mécaniciens, électriciens — utiliser un spécialiste en circuits golf qualifié 
                est tout simplement logique.
              </p>
            </div>

            {/* Sections de contenu avec icônes */}
            <div className="space-y-8 mb-10">
              <div className="flex items-start bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                  <span className="text-xl text-blue-700">🏌️</span>
                </div>
                <p className="text-gray-700 text-lg">
                  Nous proposons d'excellentes expériences de golf pour les groupes, les particuliers et les 
                  visiteurs qui souhaitent jouer sur certains des meilleurs parcours de golf. Grâce à notre 
                  connaissance approfondie et personnalisée de toutes les destinations, nos invités profitent 
                  du meilleur du golf et des attractions dans chacun des lieux fantastiques que nous proposons.
                </p>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                  <span className="text-xl text-blue-700">🌍</span>
                </div>
                <p className="text-gray-700 text-lg">
                  <strong className="text-blue-800">Global Bush Travel and Tourism Agency</strong>, 
                  agence de voyage/tour opérateur sous-régionale d'Afrique centrale, avec siège à Douala, 
                  Cameroun, organise et offre des expériences authentiques sur les meilleurs sites touristiques 
                  d'Afrique. Nous proposons à la fois des séjours aventure en petits groupes et des itinéraires 
                  sur mesure, combinant nature, culture et rencontre avec les populations locales pour la 
                  satisfaction de nos clients.
                </p>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                  <span className="text-xl text-blue-700">💱</span>
                </div>
                <p className="text-gray-700 text-lg">
                  Avec rapidité et efficacité, Global Bush met à votre disposition un outil de conversion de 
                  devises fiable, vous permettant de connaître la valeur de votre monnaie par rapport au pays 
                  de destination, avec des taux à jour pour obtenir le meilleur taux de change lors de vos 
                  voyages internationaux.
                </p>
              </div>
            </div>

            {/* Marque */}
            <div className="text-center my-12">
              <p className="text-blue-800 text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-100 to-sky-100 py-4 px-8 rounded-full inline-block shadow-lg border border-blue-300">
                RENT A DRIVER CAMEROON
              </p>
            </div>

            {/* Section principale */}
            <div className="mb-10 bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">⛳</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Débutez votre circuit golf avec style au Cameroun !
                </h2>
              </div>
              <p className="text-gray-700 text-lg pl-16">
                Découvrez les paysages époustouflants du Cameroun tout en jouant au golf sur certains des 
                parcours les plus prestigieux du pays. Nos services de circuits golf offrent un mélange 
                parfait de sport, détente et luxe, idéal pour les passionnés souhaitant profiter des 
                opportunités uniques de golf au Cameroun.
              </p>
            </div>

            {/* Section des offres */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
                🌟 Ce que comprennent nos circuits golf :
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Accès aux meilleurs parcours de golf :</strong> 
                        Jouez sur des parcours réputés à Douala, Yaoundé et au-delà, avec des greens luxuriants 
                        et des vues panoramiques.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Guides spécialisés :</strong> 
                        Guides expérimentés fournissant des informations locales et assistent pour les 
                        réservations, pour une expérience golf sans souci.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Forfaits exclusifs :</strong> 
                        Forfaits sur mesure incluant parcours de golf, transport et options d'hébergement.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Transport de luxe :</strong> 
                        Véhicules confortables et stylés pour vous transporter vers et depuis les parcours 
                        de golf.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Activités liées au golf :</strong> 
                        Profitez d'activités de loisirs supplémentaires comme visites, gastronomie et 
                        expériences culturelles.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section pourquoi choisir */}
            <div className="mb-10 bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-100">
                Pourquoi choisir nos circuits golf ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Accès aux meilleurs parcours de golf du Cameroun dans des cadres magnifiques.
                  </li>
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Tours personnalisés selon vos préférences et votre emploi du temps.
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Transport confortable, service de luxe et assistance professionnelle à chaque étape.
                  </li>
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Combinaison unique de golf et découverte pour une expérience inoubliable.
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12 space-y-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-sky-100 rounded-2xl border border-blue-300">
                <p className="text-2xl font-bold text-blue-900 mb-4">
                  🏌️‍♂️ Préparez-vous à profiter d'un parfait mélange de golf et d'aventure au Cameroun !
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-8 rounded-2xl shadow-lg text-center">
                <p className="text-2xl font-bold mb-3">
                  📞 Contactez-nous pour réserver votre circuit golf dès aujourd'hui !
                </p>
                <p className="text-blue-100 text-lg">
                  Vivez l'excellence sur les greens camerounais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CircuitGolf;