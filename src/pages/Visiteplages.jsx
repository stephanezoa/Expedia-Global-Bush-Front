import React from "react";
import Footer from "../components/Footer";

const VisitePlages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Visites et Vacances de Plage au Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez les plus belles plages du golfe de Guinée, entre sable blanc, eaux cristallines et traditions côtières
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
                Le Cameroun est une destination exceptionnelle pour les amateurs de plages
                et de tourisme balnéaire. Avec sa côte s'étendant le long du golfe de
                Guinée, le pays offre un mélange unique de sable blanc, de palmiers, d'eaux
                cristallines et de villages côtiers typiques.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Que vous soyez en quête de détente sous le soleil, de plongée et snorkeling,
                de promenades en bateau ou de découverte de la gastronomie locale, nos
                visites de plages au Cameroun combinent loisirs, aventure et immersion
                culturelle.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">350km</div>
                <div className="text-blue-100">de côtes</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25°C</div>
                <div className="text-blue-100">température moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-blue-100">plages principales</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">12+</div>
                <div className="text-blue-100">activités nautiques</div>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations principales */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Destinations principales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Kribi</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Surnommée la « Côte d'Azur camerounaise », Kribi
                est célèbre pour ses plages de sable blanc, ses cascades et ses stations
                balnéaires. Le port de pêche local et les marchés offrent un aperçu de la
                vie côtière camerounaise.
              </p>
              <div className="flex items-center text-blue-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">À visiter : Chutes de la Lobé, Port de pêche, Marché local</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Limbe</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Située dans le Sud-Ouest, Limbe combine plages
                de sable noir volcanique, jardin botanique et proximité avec des réserves
                naturelles pour une expérience complète nature et mer.
              </p>
              <div className="flex items-center text-blue-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">À visiter : Jardin Botanique, Plage de sable noir, Parc de la faune</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Campo</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Pour les voyageurs recherchant calme et nature,
                la plage de Campo offre des paysages préservés et la possibilité de visiter
                des réserves animalières à proximité.
              </p>
              <div className="flex items-center text-blue-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 11111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">À visiter : Réserve de Campo Ma'an, Plages sauvages, Mangroves</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Londji Beach</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Une plage tranquille, idéale pour
                les familles et les activités de détente. Possibilité de pratiquer la
                pêche traditionnelle et de découvrir l'artisanat local.
              </p>
              <div className="flex items-center text-blue-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 11111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">À visiter : Plage Londji, Village de pêcheurs, Restaurants de fruits de mer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activités balnéaires */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Activités balnéaires et nautiques</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Natation et bronzage sur des plages immaculées",
              "Excursions en bateau et observation de la faune marine",
              "Plongée sous-marine et snorkeling pour découvrir les fonds marins du golfe de Guinée",
              "Surf et sports nautiques pour les amateurs d'aventure",
              "Découverte des villages de pêcheurs et immersion dans la vie côtière traditionnelle",
              "Pêche sportive et pêche traditionnelle"
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-blue-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conseils pour les visiteurs */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Conseils pour les visiteurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Informations pratiques</h3>
              <ul className="space-y-3">
                {[
                  "Les plages sont accessibles toute l'année, mais la saison sèche (novembre à mars) est idéale",
                  "Pensez à vous protéger du soleil et à respecter l'environnement local",
                  "Transport : des taxis, minibus et bateaux sont disponibles pour se déplacer entre les plages et les villes côtières",
                  "Change : prévoir des francs CFA pour les achats locaux",
                  "Langues : français et anglais largement parlés dans les zones touristiques"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Gastronomie locale</h3>
              <ul className="space-y-3">
                {[
                  "Goûtez aux spécialités locales comme les fruits de mer frais",
                  "Poissons grillés et plats traditionnels camerounais",
                  "Crevettes géantes de Kribi, huîtres de Londji",
                  "Poulet DG, Ndolé, Koki, Bobolo",
                  "Fruits tropicaux : mangues, ananas, papayes, bananes"
                ].map((food, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{food}</span>
                  </li>
                ))}
              </ul>
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
              Découvrez en images les merveilles balnéaires du Cameroun :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-medium">Plage de Kribi</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-medium">Plage de Limbe</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-medium">Plage de Campo</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <span className="text-white font-medium">Plage Londji à Kribi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Forfaits disponibles */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Forfaits disponibles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Week-end Plage</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">350.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">3 jours / 2 nuits</li>
                <li className="text-gray-600">Hébergement à Kribi</li>
                <li className="text-gray-600">Transferts aéroport</li>
                <li className="text-gray-600">Visite des chutes de la Lobé</li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-center text-white transform scale-105">
              <div className="inline-block bg-yellow-500 text-blue-900 font-bold px-3 py-1 rounded-full text-sm mb-4">
                PLUS POPULAIRE
              </div>
              <h3 className="text-xl font-bold mb-2">Circuit Côtes Camerounaises</h3>
              <div className="text-3xl font-bold mb-4">850.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-blue-100">7 jours / 6 nuits</li>
                <li className="text-blue-100">Kribi, Limbe, Campo</li>
                <li className="text-blue-100">Tous transports inclus</li>
                <li className="text-blue-100">Guide francophone</li>
                <li className="text-blue-100">Activités nautiques incluses</li>
              </ul>
              <button className="w-full bg-white text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Lune de Miel</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">1.200.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">10 jours / 9 nuits</li>
                <li className="text-gray-600">Hôtels 4-5 étoiles</li>
                <li className="text-gray-600">Dîners romantiques</li>
                <li className="text-gray-600">Spa et massages</li>
                <li className="text-gray-600">Excursions privées</li>
              </ul>
              <button className="w-full bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-200 transition-colors">
                Réserver
              </button>
            </div>
          </div>
        </div>

        {/* Global Bush Travel Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
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
                <h3 className="text-xl font-bold mb-4">Notre expertise balnéaire</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Partenariats exclusifs avec les meilleurs hôtels et resorts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Guides spécialistes des activités nautiques et de plongée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Matériel de sports nautiques de haute qualité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Certification PADI pour les activités de plongée</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Nos engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Tourisme responsable et respect de l'écosystème marin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Sécurité maximale pour toutes les activités nautiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Assistance 24h/7j pendant toute la durée du séjour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Supports aux communautés côtières locales</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100">
                Avec plus de 15 ans d'expérience dans le tourisme balnéaire au Cameroun, 
                Global Bush Travel and Tourism Agency vous garantit des vacances de plage inoubliables, 
                alliant confort, sécurité et authenticité.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à profiter des plages paradisiaques du Cameroun ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Réservez votre forfait dès aujourd'hui et préparez-vous à vivre des moments inoubliables sur les plus belles plages d'Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Réserver maintenant
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Demander un devis personnalisé
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

export default VisitePlages;