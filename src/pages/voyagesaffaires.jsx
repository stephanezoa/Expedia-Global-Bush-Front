// src/pages/VoyagesAffaires.jsx
import React from "react";
import Footer from "../components/Footer";

const VoyagesAffaires = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête avec effet visuel */}
          <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-2xl overflow-hidden mb-10">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative p-8 md:p-12 text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Voyages d'affaires et réunions au Cameroun
              </h1>
              <div className="w-32 h-1 bg-white/30 mx-auto rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-blue-100 font-light max-w-4xl mx-auto">
                Organisation fluide et professionnelle pour vos réunions, séminaires et déplacements d'équipe
              </p>
            </div>
          </div>

          {/* Contenu principal avec mise en page améliorée */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale avec contenu */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-start mb-8">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Approche</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong className="text-blue-700">Global Bush Travel and Tourism Agency</strong> est votre partenaire idéal pour garantir une organisation fluide et professionnelle. Que vous planifiez des réunions, des séminaires, des conférences ou des déplacements d'équipe, nous proposons des services complets adaptés aux besoins des professionnels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section Services */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Services Proposés</h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Organisation de réunions et séminaires",
                      desc: "Location de salles de conférence équipées (projecteurs, Wi-Fi, matériel audiovisuel). Coordination logistique complète (catering, hébergement, transport des participants).",
                      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    },
                    {
                      title: "Réservation de billets d'avion",
                      desc: "Accès aux meilleurs tarifs pour les vols nationaux et internationaux. Gestion des horaires en fonction des impératifs professionnels.",
                      icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    },
                    {
                      title: "Location de voitures professionnelles",
                      desc: "Véhicules haut de gamme (berlines, 4x4, minibus) avec ou sans chauffeur. Service de transport sur mesure pour les déplacements locaux.",
                      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    },
                    {
                      title: "Réservation d'hébergement",
                      desc: "Sélection d'hôtels et d'appartements adaptés aux besoins des professionnels. Tarifs préférentiels pour les séjours longs ou les groupes.",
                      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    },
                    {
                      title: "Transferts et accueil des participants",
                      desc: "Prise en charge à l'aéroport et transferts vers les hôtels ou lieux de réunion. Service de chauffeur privé disponible 24h/24.",
                      icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    },
                    {
                      title: "Assistance personnalisée",
                      desc: "Gestion des imprévus (retards, annulations, changements de programme). Service clientèle dédié aux voyageurs d'affaires.",
                      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    },
                    {
                      title: "Organisation d'événements d'entreprise",
                      desc: "Planification de team-building, lancements de produits ou cocktails d'affaires. Coordination avec des prestataires locaux (traiteurs, animateurs).",
                      icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-4 hover:bg-blue-50 rounded-xl transition-colors duration-200">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar avec informations complémentaires */}
            <div className="space-y-8">
              {/* Pourquoi choisir Global Bush */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-teal-500 to-green-400 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pourquoi choisir Global Bush ?</h2>
                </div>
                
                <ul className="space-y-4">
                  {[
                    { text: "Expertise locale : Une connaissance approfondie du Cameroun et de ses infrastructures", color: "from-blue-100 to-blue-50" },
                    { text: "Gain de temps : Une gestion centralisée de tous les aspects du voyage", color: "from-teal-100 to-teal-50" },
                    { text: "Flexibilité : Des solutions adaptées aux besoins spécifiques de chaque entreprise", color: "from-green-100 to-green-50" },
                    { text: "Professionnalisme : Un service haut de gamme pour des voyages d'affaires réussis", color: "from-purple-100 to-purple-50" }
                  ].map((item, index) => (
                    <li key={index} className={`p-4 rounded-xl bg-gradient-to-r ${item.color} border border-gray-200`}>
                      <span className="font-semibold text-gray-900">{item.text.split(" : ")[0]} :</span>
                      <span className="text-gray-700"> {item.text.split(" : ")[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Comment procéder */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Comment procéder ?</h2>
                </div>
                
                <ol className="space-y-4">
                  {[
                    "Contactez Global Bush Travel and Tourism Agency pour discuter de vos besoins",
                    "Recevez une proposition personnalisée incluant transport, hébergement, salles de réunion et autres services",
                    "Confirmez votre réservation et laissez l'agence gérer les détails pour vous"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Message final */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Notre Engagement</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Avec Global Bush, vos voyages d'affaires et réunions au Cameroun seront organisés avec précision et efficacité, vous permettant de vous concentrer sur vos objectifs professionnels.
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

export default VoyagesAffaires;