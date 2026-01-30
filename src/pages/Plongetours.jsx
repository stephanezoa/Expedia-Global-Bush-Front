import React from "react";
import Footer from "../components/Footer";

const Plongetours = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Plongée Sous-Marine au Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <h3 className="text-xl md:text-2xl text-blue-100 font-medium">
            Cameroon Diving & Underwater Tours
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Aperçu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Cameroun, avec sa façade maritime sur le golfe de Guinée, offre
                des opportunités uniques pour la plongée sous-marine et les activités
                aquatiques. Encore peu exploitées, les eaux camerounaises constituent
                une destination idéale pour les amateurs d'aventure, de découverte
                marine et de tourisme responsable.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Global Bush Travel and Tourism Agency vous propose des circuits de
                plongée adaptés aussi bien aux débutants qu'aux plongeurs
                expérimentés, dans un environnement naturel préservé.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-blue-100">Sites principaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15-30m</div>
                <div className="text-blue-100">Profondeur moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25°C</div>
                <div className="text-blue-100">Température eau</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Espèces marines</div>
              </div>
            </div>
          </div>
        </div>

        {/* Zones de plongée */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Zones de plongée au Cameroun</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6">
              Les principaux sites de plongée se situent le long de la côte
              atlantique, offrant des paysages sous-marins variés :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Kribi</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Eaux calmes, fonds rocheux et sableux,
                idéal pour les débutants et la plongée de découverte.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Profondeur : 5-20m • Visibilité : 10-25m • Niveau : Débutant à Intermédiaire</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Limbe</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Plongée volcanique avec roches noires et
                biodiversité marine unique grâce aux apports minéraux.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Profondeur : 10-30m • Visibilité : 8-20m • Niveau : Intermédiaire à Avancé</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Campo</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Zone plus sauvage et préservée pour une immersion
                totale dans la nature avec des écosystèmes intacts.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Profondeur : 15-35m • Visibilité : 15-30m • Niveau : Intermédiaire à Avancé</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Îlots côtiers</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Exploration de récifs coralliens émergents et
                poissons tropicaux dans des environnements isolés.
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Profondeur : 3-15m • Visibilité : 20-30m • Niveau : Tous niveaux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Faune et flore sous-marines */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Faune et flore sous-marines</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6">
              La biodiversité marine du Cameroun est riche et variée. Lors de vos
              plongées, vous pourrez observer :
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 text-center border border-blue-100">
              <div className="text-3xl mb-2">🐠</div>
              <h3 className="font-semibold text-blue-800 mb-1">Poissons tropicaux</h3>
              <p className="text-gray-600 text-sm">Poissons-perroquets, poissons-clowns, poissons-anges, mérous</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center border border-blue-100">
              <div className="text-3xl mb-2">🦀</div>
              <h3 className="font-semibold text-blue-800 mb-1">Crustacés et mollusques</h3>
              <p className="text-gray-600 text-sm">Crabes, langoustes, poulpes, calmars, nudibranches</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center border border-blue-100">
              <div className="text-3xl mb-2">🪸</div>
              <h3 className="font-semibold text-blue-800 mb-1">Coraux et éponges</h3>
              <p className="text-gray-600 text-sm">Récifs coralliens, éponges colorées, gorgones</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center border border-blue-100">
              <div className="text-3xl mb-2">🦈</div>
              <h3 className="font-semibold text-blue-800 mb-1">Espèces pélagiques</h3>
              <p className="text-gray-600 text-sm">Raies, tortues marines, bancs de barracudas</p>
            </div>
          </div>
        </div>

        {/* Types de plongées */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Types de plongées proposées</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { title: "Plongée loisir et découverte", icon: "🤿" },
              { title: "Plongée d'exploration", icon: "🗺️" },
              { title: "Snorkeling", icon: "🏊‍♂️" },
              { title: "Plongée écologique", icon: "🌿" },
              { title: "Plongée photo/vidéo", icon: "📷" }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center border border-blue-100">
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="font-semibold text-blue-800 text-sm">{type.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Formation et encadrement */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Formation et encadrement</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Pour les débutants</h3>
              <p className="text-gray-600 mb-4">
                Nous proposons des initiations à la plongée avec un encadrement professionnel. 
                Baptêmes de plongée et cours PADI Open Water disponibles.
              </p>
              <div className="flex items-center text-blue-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Encadrement 1 guide pour 2 plongeurs</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Pour les confirmés</h3>
              <p className="text-gray-600 mb-4">
                Les plongeurs certifiés peuvent améliorer leurs compétences grâce à 
                des formations adaptées (Advanced Open Water, spécialités).
              </p>
              <div className="flex items-center text-blue-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Normes internationales PADI/CMAS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Itinéraire type */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Itinéraire type d'un séjour plongée</h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { day: "Jour 1-2", title: "Arrivée et acclimatation", desc: "Accueil à Douala, transfert vers la côte, briefing et préparation" },
                { day: "Jour 3-5", title: "Sessions de plongée", desc: "2 plongées quotidiennes, exploration des sites, observation marine" },
                { day: "Jour 6-7", title: "Détente et retour", desc: "Snorkeling libre, temps balnéaire, retour vers Douala" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center border border-blue-100">
                  <div className="text-lg font-bold text-blue-600 mb-2">{item.day}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Équipement et sécurité */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Équipement</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <p className="text-gray-600 mb-4">
                  Tout l'équipement nécessaire est fourni sur demande : bouteilles,
                  combinaisons, gilets stabilisateurs, palmes, masques et détendeurs.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Bouteilles 12L", "Combinaisons 5mm", "Stabs et détendeurs", "Ordinateurs de plongée", "Masques et palmes", "Ceintures de plomb"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Sécurité</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <p className="text-gray-600 mb-4">
                  La sécurité est une priorité absolue. Chaque plongée est précédée
                  d'un briefing complet et d'une vérification du matériel.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Briefings détaillés avant chaque plongée</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Guides certifiés PADI/CMAS</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Matériel vérifié et entretenu régulièrement</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">Kit de premiers secours et oxygène à bord</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meilleure période et Écotourisme */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Meilleure période</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <p className="text-gray-600 mb-4">
                  La plongée est possible toute l'année, avec une meilleure visibilité
                  durant la saison sèche, généralement de novembre à mars.
                </p>
                <div className="flex items-center text-blue-600 mt-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Température de l'eau : 25-28°C toute l'année</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Plongée responsable</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <p className="text-gray-600 mb-4">
                  Nous encourageons une plongée respectueuse de l'environnement marin.
                  Nos guides sensibilisent les participants à la protection des fonds
                  marins et à la préservation de la biodiversité.
                </p>
                <div className="flex items-center text-blue-600 mt-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Code de conduite écoresponsable fourni à chaque participant</span>
                </div>
              </div>
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
              <h2 className="text-2xl md:text-3xl font-bold">Pourquoi choisir Global Bush Travel ?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Notre expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Expertise locale en tourisme côtier et activités nautiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Circuits personnalisés selon votre niveau et vos intérêts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Encadrement professionnel par des instructeurs certifiés</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Nos engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Respect de l'environnement marin et développement durable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Expériences uniques et authentiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Équipement de qualité et sécurité maximale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Forfaits Plongée */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Forfaits Plongée</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Initiation Plongée</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">450.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">3 jours / 2 nuits</li>
                <li className="text-gray-600">2 baptêmes de plongée</li>
                <li className="text-gray-600">Équipement complet inclus</li>
                <li className="text-gray-600">Hébergement à Kribi</li>
                <li className="text-gray-600">Guide francophone</li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-6 text-center text-white transform scale-105">
              <div className="inline-block bg-yellow-500 text-blue-900 font-bold px-3 py-1 rounded-full text-sm mb-4">
                PLUS POPULAIRE
              </div>
              <h3 className="text-xl font-bold mb-2">Séjour Plongée Intensif</h3>
              <div className="text-3xl font-bold mb-4">950.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-blue-100">7 jours / 6 nuits</li>
                <li className="text-blue-100">10 plongées guidées</li>
                <li className="text-blue-100">Loge écologique en bord de mer</li>
                <li className="text-blue-100">Instructeur PADI personnel</li>
                <li className="text-blue-100">Certificat de participation</li>
              </ul>
              <button className="w-full bg-white text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expédition Plongée</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Sur mesure</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">10+ jours</li>
                <li className="text-gray-600">Plongées sur 3-4 sites</li>
                <li className="text-gray-600">Bateau de plongée privé</li>
                <li className="text-gray-600">Photographe sous-marin</li>
                <li className="text-gray-600">Forfaits groupe disponibles</li>
              </ul>
              <button className="w-full bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-lg hover:bg-blue-200 transition-colors">
                Demander un devis
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à explorer les fonds marins du Cameroun ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Réservez votre séjour plongée dès aujourd'hui et découvrez les merveilles sous-marines du golfe de Guinée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Réserver maintenant
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Télécharger le guide plongée
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

export default Plongetours;