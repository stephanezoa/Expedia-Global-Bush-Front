// src/pages/Chauffeursguides.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Chauffeursguides = () => {
  const driverFeatures = [
    {
      title: "Expérience et compétence :",
      items: [
        "Chauffeurs qualifiés et expérimentés, connaissant parfaitement les routes et les régions du Cameroun.",
        "Formation régulière pour garantir un service de haute qualité."
      ]
    },
    {
      title: "Sécurité et confort :",
      items: [
        "Conduite prudente et respect du code de la route.",
        "Véhicules modernes, climatisés et bien entretenus pour votre confort."
      ]
    },
    {
      title: "Disponibilité :",
      items: [
        "Service 24h/24 et 7j/7, adapté à vos horaires et besoins.",
        "Prise en charge à l'aéroport, à l'hôtel ou à tout autre lieu de rendez-vous."
      ]
    },
    {
      title: "Polyvalence :",
      items: [
        "Chauffeurs disponibles pour des transferts, des déplacements locaux ou des excursions touristiques.",
        "Option avec ou sans itinéraire prédéfini."
      ]
    }
  ];

  const guideFeatures = [
    {
      title: "Expertise locale :",
      items: [
        "Guides francophones, anglophones ou bilingues, ayant une connaissance approfondie de la culture, de l'histoire et des attractions du Cameroun.",
        "Accompagnement personnalisé pour les voyageurs individuels ou les groupes."
      ]
    },
    {
      title: "Visites guidées :",
      items: [
        "Découverte des sites touristiques majeurs (mont Cameroun, musées, parcs nationaux, plages, etc.).",
        "Organisation de circuits sur mesure selon vos intérêts."
      ]
    },
    {
      title: "Conseils et assistance :",
      items: [
        "Recommandations sur les meilleurs restaurants, activités et hébergements.",
        "Aide pour les formalités locales et la communication avec les habitants."
      ]
    },
    {
      title: "Flexibilité :",
      items: [
        "Itinéraires adaptables en fonction de vos préférences et de votre emploi du temps."
      ]
    }
  ];

  const whyChoose = [
    "Professionnalisme : Un service fiable et de haute qualité.",
    "Sécurité : Des chauffeurs et guides formés pour garantir votre tranquillité d'esprit.",
    "Personnalisation : Des services adaptés à vos besoins spécifiques.",
    "Découverte enrichissante : Une immersion totale dans la culture et les paysages du Cameroun."
  ];

  const bookingSteps = [
    "Contactez Global Bush Travel and Tourism Agency via leur site web, téléphone ou email.",
    "Précisez vos besoins (transfert, visite guidée, durée, etc.).",
    "Recevez une proposition personnalisée et confirmez votre réservation."
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              to="/preparer-son-voyage"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à Préparer son Voyage
            </Link>
          </div>

          {/* En-tête principal */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white text-sm font-semibold mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Notre Équipe
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
              Découvrez nos Chauffeurs et Guides Professionnels
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Chez Global Bush Travel and Tourism Agency, nous mettons à votre disposition 
              des chauffeurs et guides professionnels pour rendre votre voyage au Cameroun 
              encore plus agréable, sécurisé et enrichissant.
            </p>
          </div>

          {/* Section introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Chauffeurs et Guides Professionnels Au Cameroun
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Que vous voyagiez pour des raisons professionnelles ou touristiques, 
              notre équipe expérimentée est là pour vous accompagner à chaque étape de votre parcours.
            </p>
          </div>

          {/* Section des chauffeurs */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-8 h-0.5 bg-blue-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-blue-900">
                Nos Chauffeurs Professionnels au Cameroun
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {driverFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section des guides */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-8 h-0.5 bg-blue-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-blue-900">
                Nos Guides Professionnels
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guideFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pourquoi choisir */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Pourquoi choisir nos chauffeurs et guides ?</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-6 h-6 rounded-full bg-white text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-blue-50 leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comment réserver */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Comment réserver un chauffeur ou un guide ?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bookingSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-blue-50 rounded-xl p-6 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                    {index < bookingSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message final */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 border border-blue-300 text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-blue-900 mb-4">
              Avec Global Bush, profitez d'un voyage sans souci, accompagné par des professionnels dévoués à votre satisfaction.
            </p>
            <p className="text-gray-700">
              Votre confort et sécurité sont notre priorité absolue
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-200">
            <Link
              to="/raisons12"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Précédent : 12 raisons
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Réserver maintenant
            </Link>
            
            <Link
              to="/guidevoyage"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Suivant : Guide de voyage
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Chauffeursguides;