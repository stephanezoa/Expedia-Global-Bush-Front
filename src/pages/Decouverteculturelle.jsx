import React from "react";
import Footer from "../components/Footer";

const DecouverteCulturelle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Découverte culturelle et traditionnelle du Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Plongez au cœur de l'Afrique en miniature et découvrez ses traditions ancestrales
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Aperçu du voyage</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Partez à la découverte du Cameroun, un pays riche de diversité culturelle
                et traditionnelle. Souvent appelé « Afrique en miniature », le Cameroun
                offre un mélange unique de plus de 250 ethnies avec des langues, coutumes
                et traditions distinctes.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Ce forfait est conçu pour les voyageurs passionnés par la culture et
                souhaitant vivre des expériences authentiques : visiter des villages
                traditionnels, assister à des festivals locaux, découvrir l'artisanat
                millénaire et comprendre le rôle de la musique et de la danse dans la
                vie quotidienne des communautés locales.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">7</div>
                <div className="text-blue-100">Jours d'immersion</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">250+</div>
                <div className="text-blue-100">Ethnies à découvrir</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-blue-100">Régions culturelles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Itinéraire détaillé</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                day: "Jour 1",
                title: "Arrivée à Yaoundé",
                description: "Accueil à l'aéroport et transfert à l'hôtel. Première découverte de la ville et visite du Musée National de Yaoundé pour comprendre l'histoire culturelle et coloniale."
              },
              {
                day: "Jour 2",
                title: "Excursion à Foumban",
                description: "Visite du Palais Royal et du Musée des Arts et Traditions Bamoun, démontrant l'art et l'artisanat traditionnels."
              },
              {
                day: "Jour 3",
                title: "Villages Bamiléké",
                description: "Rencontres avec les artisans locaux. Ateliers de tissage, sculpture sur bois et perlage."
              },
              {
                day: "Jour 4",
                title: "Traditions du Nord",
                description: "Visite des marchés artisanaux de Maroua et immersion dans les communautés Kapsiki et Kirdi. Découverte de l'architecture traditionnelle et des coutumes locales."
              },
              {
                day: "Jour 5",
                title: "Retour à Yaoundé",
                description: "Arrêt au Mont Fébé pour des vues panoramiques et visite de musées locaux sur la musique et la danse traditionnelle."
              },
              {
                day: "Jour 6",
                title: "Festival culturel",
                description: "Participation à un festival culturel local ou démonstration de danses traditionnelles, selon le calendrier."
              },
              {
                day: "Jour 7",
                title: "Départ",
                description: "Transfert à l'aéroport. Fin du voyage culturel inoubliable."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-blue-900 mr-3">{item.day}</h3>
                      <h4 className="text-lg font-semibold text-blue-800">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departure Date Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Dates de départ</h2>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-200">
            <p className="text-lg text-gray-700 mb-6">
              Ce forfait est disponible toute l'année. Les départs peuvent être
              personnalisés selon votre disponibilité. Pour les groupes, des dates
              spécifiques peuvent être planifiées pour coïncider avec des festivals
              locaux ou des événements culturels majeurs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
                <div className="text-blue-600 font-bold mb-1">Départs réguliers</div>
                <div className="text-gray-600 text-sm">Tous les mois</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
                <div className="text-blue-600 font-bold mb-1">Groupes spéciaux</div>
                <div className="text-gray-600 text-sm">Dates sur demande</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
                <div className="text-blue-600 font-bold mb-1">Festivals culturels</div>
                <div className="text-gray-600 text-sm">Dates spécifiques</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Galerie</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6">
              Découvrez à travers nos images la richesse culturelle du Cameroun : les
              villages traditionnels, les marchés colorés, les costumes locaux, les
              sculptures, les danses et les fêtes qui illustrent la diversité et la
              vitalité de la culture camerounaise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-medium">Artisanat traditionnel</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-medium">Danse traditionnelle</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-medium">Village traditionnel</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <span className="text-white font-medium">Festival culturel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bush Travel Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Global Bush Travel and Tourism Agency</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Notre expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Plus de 15 ans d'expérience dans le tourisme au Cameroun</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Guides locaux certifiés et passionnés par leur culture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Partenariats exclusifs avec les communautés locales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Certification internationale de qualité touristique</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Nos engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Tourisme responsable et respectueux des traditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Supports aux économies locales et artisanales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Sécurité et confort maximisés pour nos clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Assistance 24h/7j pendant toute la durée du voyage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100">
                Basée à Douala, Global Bush Travel and Tourism Agency est reconnue comme l'une des meilleures agences de voyages au Cameroun. 
                Notre mission est de partager la richesse culturelle camerounaise avec le monde tout en respectant et préservant les traditions locales.
              </p>
            </div>
          </div>
        </div>

        {/* Price and Booking Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border border-blue-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Informations tarifaires</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Forfait Standard</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">850.000 FCFA</div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-600">Hébergement 3 étoiles</li>
                  <li className="text-gray-600">Guide francophone</li>
                  <li className="text-gray-600">Transport terrestre</li>
                  <li className="text-gray-600">Petits déjeuners inclus</li>
                </ul>
                <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Réserver
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-center text-white transform scale-105">
                <div className="inline-block bg-yellow-500 text-blue-900 font-bold px-3 py-1 rounded-full text-sm mb-4">
                  PLUS POPULAIRE
                </div>
                <h3 className="text-xl font-bold mb-2">Forfait Premium</h3>
                <div className="text-3xl font-bold mb-4">1.250.000 FCFA</div>
                <ul className="space-y-2 mb-6">
                  <li className="text-blue-100">Hébergement 4-5 étoiles</li>
                  <li className="text-blue-100">Guide spécialiste culturel</li>
                  <li className="text-blue-100">Vols domestiques inclus</li>
                  <li className="text-blue-100">Tous repas inclus</li>
                  <li className="text-blue-100">Ateliers artisanaux exclusifs</li>
                </ul>
                <button className="w-full bg-white text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                  Réserver
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Forfait Groupe</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Sur demande</div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-600">Min. 6 personnes</li>
                  <li className="text-gray-600">Personnalisation complète</li>
                  <li className="text-gray-600">Guide privé dédié</li>
                  <li className="text-gray-600">Tarifs dégressifs</li>
                  <li className="text-gray-600">Dates flexibles</li>
                </ul>
                <button className="w-full bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-200 transition-colors">
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ce qui est inclus</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-blue-800">Transport</h4>
              <p className="text-gray-600 text-sm">Tous les transferts et transports terrestres</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-blue-800">Hébergement</h4>
              <p className="text-gray-600 text-sm">Hôtels confortables sélectionnés avec soin</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-blue-800">Guide</h4>
              <p className="text-gray-600 text-sm">Guide francophone expert en culture locale</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-blue-800">Activités</h4>
              <p className="text-gray-600 text-sm">Toutes les visites et activités du programme</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à vivre l'aventure culturelle camerounaise ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Réservez votre forfait dès aujourd'hui et préparez-vous à découvrir les traditions ancestrales du Cameroun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Réserver maintenant
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Télécharger la brochure
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DecouverteCulturelle;