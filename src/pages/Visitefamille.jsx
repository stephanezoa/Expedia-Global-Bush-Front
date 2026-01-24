// src/pages/VisiteFamille.jsx
import React from "react";
import Footer from "../components/Footer";

const VisiteFamille = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête avec design familial et thème bleu */}
          <div className="relative bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl shadow-2xl overflow-hidden mb-10">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
            </div>
            <div className="relative p-8 md:p-12 text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0h-15"></path>
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Tours en Famille au Cameroun
              </h1>
              <div className="w-32 h-1 bg-sky-300 mx-auto rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto">
                Créez des souvenirs inoubliables avec votre famille
              </p>
            </div>
          </div>

          {/* Section introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-sky-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Vous en rêvez ; nous le rendons possible. Nos spécialistes sont expérimentés et bien connectés. Vous serez surpris de voir comment nous pouvons non seulement répondre à vos plans de voyage de loisirs, mais aussi vous proposer des idées et expériences inédites.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Les vacances en famille viennent avec beaucoup de responsabilités, et pas seulement pour les valises. Pour beaucoup, c'est le seul moment où les proches peuvent se détendre ensemble, donc la pression est grande. Choisissez nos visites en famille et nous nous occupons des détails.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section RENT A DRIVER CAMEROON */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 mb-10 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              RENT A DRIVER CAMEROON
            </p>
          </div>

          {/* Section principale */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">👨‍👩‍👧‍👦 Créez des souvenirs inoubliables avec nos visites en famille au Cameroun !</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                À la recherche d'une aventure adaptée aux familles au Cameroun ? Nos services de visites en famille sont conçus pour offrir divertissement, confort et expériences éducatives à chaque membre de la famille, que vous exploriez les villes vibrantes, les sites culturels ou les merveilles naturelles du Cameroun.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ce que comprennent nos visites */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">🌟 Ce que comprennent nos visites en famille</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      title: "Itinéraires personnalisables", 
                      desc: "Des parcours adaptés aux familles avec des activités pour tous les âges.",
                      color: "from-blue-50 to-sky-50",
                      border: "border-blue-100"
                    },
                    { 
                      title: "Exploration culturelle et naturelle", 
                      desc: "Visites de sites emblématiques, parcs nationaux et villages traditionnels pour découvrir la richesse du patrimoine camerounais.",
                      color: "from-indigo-50 to-violet-50",
                      border: "border-indigo-100"
                    },
                    { 
                      title: "Faune et aventure", 
                      desc: "Safaris, randonnées et rencontres avec la faune dans certains des meilleurs parcs nationaux du Cameroun.",
                      color: "from-sky-50 to-cyan-50",
                      border: "border-sky-100"
                    },
                    { 
                      title: "Transport sûr et confortable", 
                      desc: "Véhicules bien entretenus avec sièges enfants et chauffeurs professionnels pour un trajet agréable et sécurisé.",
                      color: "from-blue-50 to-indigo-50",
                      border: "border-blue-100"
                    },
                    { 
                      title: "Visites guidées", 
                      desc: "Guides sympathiques et expérimentés pour rendre l'expérience amusante et éducative pour les enfants et les adultes.",
                      color: "from-violet-50 to-purple-50",
                      border: "border-violet-100"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-5 hover:shadow-md transition-shadow duration-300`}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pourquoi choisir nos visites */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pourquoi choisir nos visites en famille ?</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    "Des expériences amusantes, sûres et enrichissantes pour tous les âges.",
                    "Transport confortable et itinéraires personnalisés selon les besoins de votre famille.",
                    "Opportunités de partager des moments mémorables tout en découvrant la culture et la nature du Cameroun."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="p-2 bg-blue-100 rounded-full">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Message final */}
                <div className="mt-8 space-y-6">
                  <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-sky-100 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">🌍 Commencez votre aventure en famille dès aujourd'hui !</h3>
                    </div>
                    <p className="text-gray-700 font-semibold">
                      Créez des souvenirs qui dureront toute une vie !
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">📞 Contactez-nous dès maintenant !</h3>
                    </div>
                    <p className="text-gray-700 font-semibold">
                      Réservez votre visite en famille au Cameroun dès maintenant !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VisiteFamille;