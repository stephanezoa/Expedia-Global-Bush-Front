import React from "react";
import Footer from "../components/Footer";

const Ecotourisme2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Écotourisme au Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-4 rounded-full"></div>
          <h3 className="text-xl md:text-2xl text-blue-100 font-medium">
            Cameroon Eco-Tourism Experience
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Aperçu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Cameroun, surnommé « l'Afrique en miniature », est l'une des meilleures
                destinations écotouristiques d'Afrique. Grâce à la diversité exceptionnelle
                de ses paysages, de sa faune, de sa flore et de ses cultures, le pays offre
                une expérience unique pour les voyageurs soucieux de l'environnement et du
                développement durable.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <p className="text-gray-700 leading-relaxed">
                L'écotourisme au Cameroun vise à promouvoir un tourisme responsable qui
                protège les écosystèmes naturels tout en améliorant les conditions de vie
                des communautés locales. Des forêts tropicales aux savanes, des montagnes
                volcaniques aux zones humides, chaque région offre une aventure authentique
                et respectueuse de la nature.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Parcs & réserves</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">400+</div>
                <div className="text-blue-100">Espèces mammifères</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">900+</div>
                <div className="text-blue-100">Espèces d'oiseaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-blue-100">Territoire protégé</div>
              </div>
            </div>
          </div>
        </div>

        {/* Parcs Nationaux et Réserves Naturelles */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Parcs Nationaux et Réserves Naturelles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Parc National de Korup</h3>
              </div>
              <p className="text-gray-600">
                L'une des forêts tropicales les plus anciennes et les plus riches d'Afrique, 
                abritant des primates rares, des oiseaux endémiques et une flore exceptionnelle.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Forêt primaire</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Primates</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Oiseaux endémiques</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Réserve de Faune du Dja</h3>
              </div>
              <p className="text-gray-600">
                Classée au patrimoine mondial de l'UNESCO, cette réserve est connue pour sa 
                biodiversité remarquable et ses gorilles, chimpanzés et éléphants de forêt.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">UNESCO</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Gorilles</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Éléphants de forêt</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Parc National de Waza</h3>
              </div>
              <p className="text-gray-600">
                Situé dans l'Extrême-Nord, il est célèbre pour l'observation des éléphants, 
                girafes, lions et une grande variété d'oiseaux migrateurs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Savane</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Grands mammifères</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Oiseaux migrateurs</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Parc National de Lobéké</h3>
              </div>
              <p className="text-gray-600">
                Une zone forestière protégée idéale pour observer les éléphants de forêt, 
                les buffles et les clairières naturelles appelées « bai ».
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Forêt tropicale</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Éléphants de forêt</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Clairières naturelles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Communautés Locales */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Communautés Locales et Tourisme Responsable</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                L'écotourisme au Cameroun met un accent particulier sur l'implication des
                communautés locales. Les visiteurs ont l'opportunité de séjourner dans des
                écolodges, de participer à des activités traditionnelles et de découvrir les
                modes de vie des peuples autochtones comme les Baka, les Massaï du Nord ou
                les communautés montagnardes de l'Ouest.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <p className="text-gray-700 leading-relaxed">
                Ces échanges culturels favorisent la préservation des traditions, la
                transmission des savoirs ancestraux et la création de revenus durables pour
                les populations locales.
              </p>
            </div>
          </div>
        </div>

        {/* Activités Écotouristiques */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Activités Écotouristiques</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Randonnée et trekking en zones forestières et montagneuses",
              "Observation de la faune et de la flore (safaris écologiques)",
              "Excursions en pirogue dans les rivières et mangroves",
              "Visites de villages traditionnels et échanges culturels",
              "Photographie de nature et ornithologie",
              "Programmes de volontariat écologique et conservation",
              "Camping écologique en pleine nature",
              "Observation des primates en milieu naturel",
              "Visite des jardins botaniques et réserves forestières"
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-green-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Montagnes, Forêts et Paysages Naturels */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Montagnes, Forêts et Paysages Naturels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6 border border-green-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Cameroun offre des paysages naturels variés, allant des montagnes
                volcaniques du Mont Cameroun aux hauts plateaux de l'Ouest, en passant par
                les forêts denses du Sud et de l'Est. Ces zones sont idéales pour le trekking,
                l'observation panoramique et la découverte d'écosystèmes uniques.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6 border border-green-200">
              <p className="text-gray-700 leading-relaxed">
                Les cascades, lacs volcaniques, savanes et plaines offrent des opportunités
                exceptionnelles pour les amateurs de nature et d'aventure.
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi Choisir l'Écotourisme */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Pourquoi Choisir l'Écotourisme au Cameroun ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-2xl">♻️</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Protection de l'environnement</h3>
              <p className="text-gray-600 text-sm">Soutien à la conservation de la biodiversité unique du Cameroun</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-2xl">🏘️</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Soutien aux communautés</h3>
              <p className="text-gray-600 text-sm">Revenus directs pour les populations locales et préservation des traditions</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Expériences authentiques</h3>
              <p className="text-gray-600 text-sm">Immersion profonde dans des écosystèmes préservés et cultures ancestrales</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Galerie</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6">
              Quelques images représentatives de l'écotourisme au Cameroun :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                <span className="text-white font-medium">Forêt de Korup</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-medium">Réserve du Dja</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                <span className="text-white font-medium">Parc de Waza</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-medium">Mont Cameroun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Forfaits Écotouristiques */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Forfaits Écotouristiques</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Découverte Nature</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">750.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">5 jours / 4 nuits</li>
                <li className="text-gray-600">Visite de 2 parcs nationaux</li>
                <li className="text-gray-600">Écolodge écologique</li>
                <li className="text-gray-600">Guide naturaliste</li>
              </ul>
              <button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-6 text-center text-white transform scale-105">
              <div className="inline-block bg-yellow-500 text-green-900 font-bold px-3 py-1 rounded-full text-sm mb-4">
                PLUS POPULAIRE
              </div>
              <h3 className="text-xl font-bold mb-2">Aventure Écologique</h3>
              <div className="text-3xl font-bold mb-4">1.250.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-blue-100">10 jours / 9 nuits</li>
                <li className="text-blue-100">4 parcs et réserves</li>
                <li className="text-blue-100">Séjour en communauté locale</li>
                <li className="text-blue-100">Activités de conservation</li>
                <li className="text-blue-100">Transport 4x4 écologique</li>
              </ul>
              <button className="w-full bg-white text-green-700 font-bold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Volontariat Écologique</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">Sur demande</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">14+ jours</li>
                <li className="text-gray-600">Projet de conservation</li>
                <li className="text-gray-600">Hébergement communautaire</li>
                <li className="text-gray-600">Formation à l'écologie</li>
                <li className="text-gray-600">Certificat de participation</li>
              </ul>
              <button className="w-full bg-green-100 text-green-700 font-bold py-3 px-4 rounded-lg hover:bg-green-200 transition-colors">
                Demander un devis
              </button>
            </div>
          </div>
        </div>

        {/* Global Bush Travel Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
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
                <h3 className="text-xl font-bold mb-4">Notre expertise écotouristique</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Certification internationale en tourisme durable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Partenariats avec les organisations de conservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Guides naturalistes formés et certifiés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Infrastructures écoresponsables sélectionnées</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Nos engagements écologiques</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Compensation carbone pour tous nos voyages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Supports aux projets de conservation locaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Respect strict des principes d'écotourisme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Éducation environnementale pour nos clients</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100">
                Leader de l'écotourisme au Cameroun, Global Bush Travel and Tourism Agency 
                s'engage à offrir des expériences responsables qui préservent la nature 
                tout en valorisant les communautés locales depuis plus de 15 ans.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à vivre une aventure écoresponsable au Cameroun ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Réservez votre forfait écotouristique dès aujourd'hui et contribuez à la préservation 
              de la biodiversité unique du Cameroun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Réserver maintenant
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Télécharger le guide écotouristique
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

export default Ecotourisme2;