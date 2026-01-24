// src/pages/GestionVoyages.jsx
import React from "react";
import Footer from "../components/Footer";

const GestionVoyages = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête avec effet visuel */}
          <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-2xl overflow-hidden mb-10">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative p-8 md:p-12 text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Gestion des voyages d'entreprise au Cameroun
              </h1>
              <div className="w-32 h-1 bg-white/30 mx-auto rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-blue-100 font-light max-w-4xl mx-auto">
                Services sur mesure pour garantir efficacité, confort et professionnalisme
              </p>
            </div>
          </div>

          {/* Grille principale */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              {/* Section d'introduction */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong className="text-indigo-700">Global Bush Travel and Tourism Agency</strong> est un partenaire de choix pour la gestion des voyages d'entreprise au Cameroun. Que vous organisiez des déplacements professionnels pour une équipe ou un seul collaborateur, cette agence propose des services sur mesure pour garantir efficacité, confort et professionnalisme.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services proposés */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Services proposés</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Réservation de billets d'avion",
                      desc: "Accès aux meilleurs tarifs pour les vols nationaux et internationaux. Gestion des horaires en fonction des besoins professionnels.",
                      color: "from-blue-50 to-indigo-50",
                      border: "border-blue-100"
                    },
                    {
                      title: "Location de voitures professionnelles",
                      desc: "Véhicules haut de gamme et bien entretenus (berlines, 4x4, minibus, etc.). Options avec chauffeur ou en libre-service.",
                      color: "from-indigo-50 to-purple-50",
                      border: "border-indigo-100"
                    },
                    {
                      title: "Réservation d'hébergement",
                      desc: "Sélection d'hôtels et d'appartements adaptés aux besoins des professionnels. Tarifs négociés pour les séjours longs ou fréquents.",
                      color: "from-purple-50 to-pink-50",
                      border: "border-purple-100"
                    },
                    {
                      title: "Organisation de transferts",
                      desc: "Prise en charge à l'aéroport et transferts vers les hôtels ou lieux de réunion. Service de chauffeur privé disponible 24h/24.",
                      color: "from-pink-50 to-rose-50",
                      border: "border-pink-100"
                    },
                    {
                      title: "Assistance personnalisée",
                      desc: "Gestion des imprévus (retards, annulations, etc.). Service clientèle dédié aux voyageurs d'entreprise.",
                      color: "from-rose-50 to-red-50",
                      border: "border-rose-100"
                    },
                    {
                      title: "Organisation d'événements et séminaires",
                      desc: "Location de salles de conférence et logistique complète pour les événements professionnels.",
                      color: "from-red-50 to-orange-50",
                      border: "border-red-100"
                    }
                  ].map((service, index) => (
                    <div 
                      key={index} 
                      className={`bg-gradient-to-br ${service.color} border ${service.border} rounded-xl p-6 hover:shadow-lg transition-shadow duration-300`}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Pourquoi choisir Global Bush */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pourquoi choisir Global Bush ?</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      title: "Expertise locale",
                      desc: "Une connaissance approfondie du Cameroun et de ses infrastructures",
                      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                      color: "bg-indigo-100 text-indigo-700"
                    },
                    { 
                      title: "Gain de temps",
                      desc: "Une gestion centralisée de tous les aspects du voyage",
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      color: "bg-blue-100 text-blue-700"
                    },
                    { 
                      title: "Flexibilité",
                      desc: "Des solutions adaptées aux besoins spécifiques de chaque entreprise",
                      icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
                      color: "bg-purple-100 text-purple-700"
                    },
                    { 
                      title: "Rapport qualité-prix",
                      desc: "Des tarifs compétitifs pour les services professionnels",
                      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                      color: "bg-green-100 text-green-700"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg ${item.color} mr-4`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comment procéder */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-xl p-8 border border-indigo-100">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Comment procéder ?</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Contact initial",
                      desc: "Contactez Global Bush Travel and Tourism Agency pour discuter de vos besoins."
                    },
                    {
                      step: 2,
                      title: "Proposition personnalisée",
                      desc: "Recevez une proposition personnalisée incluant transport, hébergement et autres services."
                    },
                    {
                      step: 3,
                      title: "Confirmation et gestion",
                      desc: "Confirmez votre réservation et laissez l'agence gérer les détails pour vous."
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">{item.step}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                      </div>
                      {index < 2 && (
                        <div className="absolute left-5 top-10 w-0.5 h-8 bg-gradient-to-b from-indigo-300 to-blue-300 ml-0.5"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message final */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Notre Engagement</h3>
                </div>
                <p className="text-indigo-100 text-lg leading-relaxed">
                  Avec Global Bush, vos voyages d'entreprise au Cameroun seront organisés avec précision et professionnalisme, vous permettant de vous concentrer sur vos objectifs professionnels.
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

export default GestionVoyages;