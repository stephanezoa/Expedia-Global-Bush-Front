import React from "react";
import Footer from "../components/Footer";

const Safarifaune = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Safari et Faune du Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-400 to-green-400 mx-auto mb-6 rounded-full"></div>
          <h3 className="text-xl md:text-2xl text-blue-100 font-medium">
            Cameroon Safari & Wildlife Experience
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Aperçu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Cameroun est l'une des destinations les plus riches d'Afrique
                centrale en matière de faune sauvage et de biodiversité. Surnommé
                « l'Afrique en miniature », le pays offre une diversité exceptionnelle
                de paysages et d'écosystèmes, allant des savanes sahéliennes du Nord
                aux forêts équatoriales du Sud.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
              <p className="text-gray-700 leading-relaxed">
                Avec Global Bush Travel and Tourism Agency, partez à la découverte des
                plus beaux parcs nationaux et réserves naturelles du Cameroun à
                travers des safaris authentiques, responsables et encadrés par des
                professionnels locaux.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">9+</div>
                <div className="text-blue-100">Parcs nationaux</div>
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
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Faune Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Une faune exceptionnelle</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6">
              Le Cameroun abrite certaines des espèces animales les plus emblématiques
              d'Afrique. Selon les régions, les visiteurs peuvent observer :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 text-center border border-amber-100">
              <div className="text-4xl mb-4">🦁</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Grands prédateurs</h3>
              <p className="text-gray-600 text-sm">Lions, léopards, guépards dans les savanes du Nord</p>
            </div>
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 text-center border border-amber-100">
              <div className="text-4xl mb-4">🐘</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Mégafaune</h3>
              <p className="text-gray-600 text-sm">Éléphants de savane et de forêt, girafes, hippopotames</p>
            </div>
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 text-center border border-amber-100">
              <div className="text-4xl mb-4">🦍</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Primates</h3>
              <p className="text-gray-600 text-sm">Gorilles, chimpanzés, babouins, mandrills, colobes</p>
            </div>
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 text-center border border-amber-100">
              <div className="text-4xl mb-4">🦜</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Oiseaux</h3>
              <p className="text-gray-600 text-sm">900+ espèces dont 8 endémiques, migrateurs, rapaces</p>
            </div>
          </div>
        </div>

        {/* Parcs Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Parcs nationaux et réserves naturelles</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6">
              Nos safaris vous emmènent dans les plus grandes zones protégées du Cameroun :
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Parc National de Waza</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Le plus célèbre parc du Cameroun, idéal pour observer éléphants, lions et girafes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Savane</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Éléphants</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Lions</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Girafes</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Parc National de Bouba Ndjidah</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Réserve sauvage du Nord avec une faune impressionnante.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Buffles</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Antilopes</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Rhinocéros</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Réserve de Faune du Dja</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Patrimoine mondial de l'UNESCO, forêt dense et biodiversité unique.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">UNESCO</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Gorilles</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Chimpanzés</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Forêt dense</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Parc National de Lobéké</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Habitat des gorilles, éléphants de forêt et bongos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Gorilles</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Éléphants de forêt</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Bongos</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Réserve de Campo Ma'an</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Entre forêt, fleuves et côte atlantique.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Côtière</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Forêt</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Crocodiles</span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">Hippopotames</span>
              </div>
            </div>
          </div>
        </div>

        {/* Types de Safari */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Types de safaris proposés</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              { title: "Safaris photographiques", icon: "📷" },
              { title: "Safaris d'observation animalière", icon: "🔭" },
              { title: "Safaris éducatifs et scientifiques", icon: "🔬" },
              { title: "Safaris combinés culture & nature", icon: "🎭" },
              { title: "Safaris d'aventure et exploration", icon: "🗺️" }
            ].map((safari, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center border border-amber-100">
                <div className="text-3xl mb-2">{safari.icon}</div>
                <h3 className="font-semibold text-blue-800 text-sm">{safari.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Expérience Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Une expérience authentique</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos circuits safari privilégient une approche responsable et durable
                du tourisme. Vous vivrez une immersion totale dans la nature, tout en
                respectant les écosystèmes et les communautés locales.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
              <p className="text-gray-700 leading-relaxed">
                Les safaris sont accompagnés de guides professionnels, connaissant
                parfaitement la faune, la flore et les traditions locales.
              </p>
            </div>
          </div>
        </div>

        {/* Itinéraire type */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Itinéraire type d'un safari au Cameroun</h2>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-2xl shadow-lg p-8 border border-amber-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { day: "Jour 1-2", title: "Arrivée et acclimatation", desc: "Accueil à Douala ou Yaoundé, transfert vers le parc national" },
                { day: "Jour 3-5", title: "Safaris intensifs", desc: "Safaris quotidiens en véhicule 4x4 ou à pied, observation de la faune" },
                { day: "Jour 6-7", title: "Immersion culturelle", desc: "Rencontres avec les communautés locales, découverte des traditions" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center border border-amber-100">
                  <div className="text-lg font-bold text-amber-600 mb-2">{item.day}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hébergement et Meilleure période */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Hébergement en safari</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
                <p className="text-gray-600 mb-4">
                  Nous proposons différents types d'hébergement selon votre budget et vos préférences :
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Lodges écologiques", "Campements aménagés", "Hôtels de charme", "Campements traditionnels"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-amber-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Meilleure période</h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
                <p className="text-gray-600 mb-4">
                  La meilleure période pour les safaris dans le Nord du Cameroun se
                  situe entre novembre et avril, durant la saison sèche, lorsque les
                  animaux se rassemblent autour des points d'eau.
                </p>
                <p className="text-gray-600">
                  Les safaris en forêt tropicale peuvent être organisés toute l'année,
                  avec des précautions particulières pendant la saison des pluies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sécurité */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-amber-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Sécurité et organisation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
              <p className="text-gray-700 mb-4">
                La sécurité de nos voyageurs est une priorité. Tous nos circuits sont
                organisés en collaboration avec les autorités locales et les services
                de conservation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
              <p className="text-gray-700">
                Nous fournissons une assistance permanente, du départ jusqu'au retour,
                afin de garantir une expérience sûre et mémorable.
              </p>
            </div>
          </div>
        </div>

        {/* Global Bush Travel Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-2xl shadow-xl p-8 text-white">
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
                    <span className="text-amber-300 mr-2">✓</span>
                    <span>Expertise locale en safari et écotourisme depuis 15 ans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">✓</span>
                    <span>Guides professionnels et expérimentés, formés à la sécurité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">✓</span>
                    <span>Circuits personnalisés selon vos intérêts et votre budget</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Nos engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">✓</span>
                    <span>Respect strict de la nature et des communautés locales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">✓</span>
                    <span>Excellent rapport qualité-prix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">✓</span>
                    <span>Assistance 24h/24 pendant tout le safari</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Forfaits Safari */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Forfaits Safari</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-amber-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Safari Découverte</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">950.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">5 jours / 4 nuits</li>
                <li className="text-gray-600">1 parc national au choix</li>
                <li className="text-gray-600">Hébergement en lodge</li>
                <li className="text-gray-600">Guides francophones</li>
                <li className="text-gray-600">Transport 4x4 inclus</li>
              </ul>
              <button className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-xl shadow-lg p-6 text-center text-white transform scale-105">
              <div className="inline-block bg-yellow-500 text-green-900 font-bold px-3 py-1 rounded-full text-sm mb-4">
                PLUS POPULAIRE
              </div>
              <h3 className="text-xl font-bold mb-2">Grand Safari Cameroun</h3>
              <div className="text-3xl font-bold mb-4">1.850.000 FCFA</div>
              <ul className="space-y-2 mb-6">
                <li className="text-blue-100">10 jours / 9 nuits</li>
                <li className="text-blue-100">3 parcs nationaux différents</li>
                <li className="text-blue-100">Lodges écologiques</li>
                <li className="text-blue-100">Guide naturaliste expert</li>
                <li className="text-blue-100">Vols domestiques inclus</li>
              </ul>
              <button className="w-full bg-white text-green-700 font-bold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors">
                Réserver
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-amber-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Safari Aventure</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">Sur mesure</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600">12+ jours</li>
                <li className="text-gray-600">Parcs + communautés locales</li>
                <li className="text-gray-600">Camping en brousse</li>
                <li className="text-gray-600">Safaris à pied et 4x4</li>
                <li className="text-gray-600">Photographie professionnelle</li>
              </ul>
              <button className="w-full bg-green-100 text-green-700 font-bold py-3 px-4 rounded-lg hover:bg-green-200 transition-colors">
                Demander un devis
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à vivre l'aventure safari au Cameroun ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Réservez votre safari dès aujourd'hui et découvrez la faune exceptionnelle du Cameroun, l'Afrique en miniature
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Réserver maintenant
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Télécharger le guide safari
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

export default Safarifaune;