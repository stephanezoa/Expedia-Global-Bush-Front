import React from "react";
import Footer from "../components/Footer";

const Voyageetude = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Voyage d'Études au Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <h3 className="text-xl md:text-2xl text-blue-100 font-medium">
            Study Travel & Educational Programs in Cameroon
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Aperçu du programme</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Le voyage d'études au Cameroun est une opportunité unique de combiner
                apprentissage académique, découverte culturelle et immersion
                professionnelle. Le Cameroun, pays bilingue (français et anglais),
                constitue un cadre idéal pour les étudiants, chercheurs et groupes
                universitaires souhaitant enrichir leurs connaissances tout en vivant
                une expérience humaine et culturelle exceptionnelle.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Global Bush Travel and Tourism Agency accompagne les étudiants, écoles,
                universités et centres de formation dans l'organisation complète de
                voyages d'études adaptés à leurs objectifs pédagogiques.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Universités partenaires</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Étudiants accompagnés</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">7</div>
                <div className="text-blue-100">Domaines académiques</div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectifs du voyage */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Objectifs du voyage d'études</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Approfondir les connaissances académiques sur le terrain",
              "Découvrir les réalités économiques et sociales du Cameroun",
              "Favoriser les échanges interculturels",
              "Développer l'autonomie et l'esprit critique des étudiants",
              "Créer des partenariats éducatifs et professionnels",
              "Renforcer les compétences linguistiques en français et anglais"
            ].map((objective, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-blue-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{objective}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domaines d'étude */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Domaines de voyage d'études</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6">
              Nos programmes de voyage d'études couvrent plusieurs domaines
              académiques et professionnels :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Tourisme et hôtellerie", icon: "🏨" },
              { title: "Économie et commerce international", icon: "💼" },
              { title: "Environnement et écotourisme", icon: "🌿" },
              { title: "Agriculture et développement rural", icon: "🚜" },
              { title: "Sciences sociales et culture africaine", icon: "📚" },
              { title: "Santé communautaire", icon: "🏥" },
              { title: "Architecture et urbanisme", icon: "🏛️" },
              { title: "Ingénierie et technologie", icon: "⚙️" }
            ].map((field, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center border border-blue-100">
                <div className="text-3xl mb-2">{field.icon}</div>
                <h3 className="font-semibold text-blue-800">{field.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Programme type */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Programme type d'un voyage d'études</h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-200 mb-8">
            <p className="text-gray-700 mb-6">
              Chaque programme est conçu sur mesure, mais peut inclure :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Visites d'universités et centres de formation",
                "Rencontres avec des professionnels et experts locaux",
                "Conférences et ateliers thématiques",
                "Stages courts ou immersions professionnelles",
                "Visites culturelles et excursions éducatives",
                "Travaux de recherche sur le terrain",
                "Échanges avec des étudiants camerounais",
                "Projets de groupe interculturels"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Destinations académiques */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Destinations académiques au Cameroun</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Yaoundé</h3>
              </div>
              <p className="text-gray-600">
                Capitale politique avec ses universités, instituts de recherche,
                institutions publiques et organisations internationales.
              </p>
              <div className="mt-4 text-sm text-blue-600">
                <span className="font-semibold">À visiter :</span> Université de Yaoundé I, IRAD, MINRESI, Assemblée Nationale
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Douala</h3>
              </div>
              <p className="text-gray-600">
                Capitale économique avec ses écoles de commerce, entreprises,
                organisations internationales et port maritime.
              </p>
              <div className="mt-4 text-sm text-blue-600">
                <span className="font-semibold">À visiter :</span> Université de Douala, ESSEC, Port Autonome, sièges d'entreprises
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Dschang</h3>
              </div>
              <p className="text-gray-600">
                Université réputée et cadre naturel propice à la recherche
                agricole, environnementale et sociale.
              </p>
              <div className="mt-4 text-sm text-blue-600">
                <span className="font-semibold">À visiter :</span> Université de Dschang, Centre de recherche agricole, Musée des civilisations
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Buea</h3>
              </div>
              <p className="text-gray-600">
                Université anglophone et environnement académique dynamique au
                pied du Mont Cameroun.
              </p>
              <div className="mt-4 text-sm text-blue-600">
                <span className="font-semibold">À visiter :</span> Université de Buea, Centre linguistique, Institut de formation des enseignants
              </div>
            </div>
          </div>
        </div>

        {/* Notre accompagnement */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Notre accompagnement</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Services inclus</h3>
              <ul className="space-y-3">
                {[
                  "Assistance visa et formalités administratives",
                  "Accueil et orientation à l'arrivée",
                  "Hébergement sécurisé et adapté aux étudiants",
                  "Transport et logistique complète",
                  "Encadrement local et assistance 24/7",
                  "Programme académique sur mesure",
                  "Assurance voyage et responsabilité civile",
                  "Bilan et certification du séjour"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Immersion culturelle</h3>
              <ul className="space-y-3">
                {[
                  "Visites de chefferies traditionnelles",
                  "Ateliers de danse et musique locale",
                  "Découverte de l'artisanat camerounais",
                  "Participation à des événements culturels",
                  "Cours de cuisine traditionnelle",
                  "Échanges avec des familles d'accueil",
                  "Visites de sites historiques et culturels",
                  "Soirées interculturelles"
                ].map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sécurité et hébergement */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Sécurité et hébergement</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sécurité</h3>
              <p className="text-gray-600 mb-4">
                La sécurité des étudiants est une priorité. Nos programmes sont
                encadrés par des professionnels expérimentés et des partenaires
                locaux fiables.
              </p>
              <p className="text-gray-600">
                Une assistance permanente est assurée tout au long du séjour pour
                garantir un voyage d'études serein et réussi.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Hébergement et restauration</h3>
              <p className="text-gray-600 mb-4">
                Nous proposons des hébergements adaptés aux groupes d'étudiants :
                résidences universitaires, hôtels économiques, auberges ou maisons
                d'accueil.
              </p>
              <p className="text-gray-600">
                Les repas peuvent être organisés pour permettre aux étudiants de
                découvrir la gastronomie camerounaise dans un cadre sécurisé et
                équilibré.
              </p>
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
              <h2 className="text-2xl md:text-3xl font-bold">Pourquoi choisir Global Bush Travel and Tourism Agency ?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Notre expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Expertise dans l'organisation de voyages éducatifs depuis 15 ans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Programmes sur mesure selon les objectifs pédagogiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Réseau académique et professionnel local étendu</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Nos avantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Accompagnement personnalisé et encadrement professionnel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Excellent rapport qualité-prix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Partenariats avec les meilleures institutions académiques</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100">
                Spécialiste des voyages d'études au Cameroun, Global Bush Travel and Tourism Agency 
                a accompagné plus de 1000 étudiants et chercheurs dans leurs projets académiques 
                et professionnels depuis sa création.
              </p>
            </div>
          </div>
        </div>

        {/* Programmes types */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Programmes types</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Séminaire académique</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">À partir de 850.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">7-10 jours</li>
                <li className="text-gray-600">Groupes de 10-20 étudiants</li>
                <li className="text-gray-600">Visites d'institutions</li>
                <li className="text-gray-600">Conférences thématiques</li>
                <li className="text-gray-600">Hébergement universitaire</li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Demander un devis
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-center text-white transform scale-105">
              <div className="inline-block bg-yellow-500 text-blue-900 font-bold px-3 py-1 rounded-full text-sm mb-4">
                PLUS POPULAIRE
              </div>
              <h3 className="text-xl font-bold mb-2">Immersion professionnelle</h3>
              <div className="text-3xl font-bold mb-4">À partir de 1.500.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-blue-100">2-4 semaines</li>
                <li className="text-blue-100">Stages en entreprise</li>
                <li className="text-blue-100">Encadrement professionnel</li>
                <li className="text-blue-100">Hébergement en résidence</li>
                <li className="text-blue-100">Certificat de stage</li>
              </ul>
              <button className="w-full bg-white text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                Demander un devis
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Recherche universitaire</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Sur mesure</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">Durée flexible</li>
                <li className="text-gray-600">Accès aux données terrain</li>
                <li className="text-gray-600">Encadrement par des chercheurs</li>
                <li className="text-gray-600">Laboratoires et bibliothèques</li>
                <li className="text-gray-600">Publication assistée</li>
              </ul>
              <button className="w-full bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-200 transition-colors">
                Contacter un conseiller
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à organiser votre voyage d'études au Cameroun ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contactez notre équipe d'experts en voyages académiques pour un programme sur mesure adapté à vos objectifs pédagogiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Demander un devis personnalisé
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

export default Voyageetude;