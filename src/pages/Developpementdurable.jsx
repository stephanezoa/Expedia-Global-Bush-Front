// src/pages/DeveloppementDurable.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const DeveloppementDurable = () => {
  const sections = [
    {
      id: 1,
      title: "Protection de l'environnement",
      content: "Nous nous engageons à réduire l'impact environnemental de nos activités en :",
      items: [
        "Favorisant les transports responsables et le covoiturage lors des circuits.",
        "Encourageant l'utilisation de véhicules à faible émission et des pratiques écologiques.",
        "Réduisant les déchets et promouvant le recyclage dans nos lodges et hôtels partenaires.",
        "Sensibilisant nos clients à la préservation de la faune et de la flore locales."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Soutien aux communautés locales",
      content: "Nous valorisons les populations locales en :",
      items: [
        "Travaillant avec des guides et chauffeurs locaux certifiés.",
        "Favorisant les artisans et entreprises locales pour l'hébergement, la restauration et les activités.",
        "Encourageant nos clients à contribuer positivement aux communautés visitées."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "Conservation de la faune et de la biodiversité",
      content: "Nous protégeons les espèces et habitats naturels en :",
      items: [
        "Organisant des safaris responsables avec des limites de distance respectueuses des animaux.",
        "Évitant les interactions qui peuvent nuire à la faune.",
        "Contribuant à des projets de conservation et de recherche locale."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 4,
      title: "Sensibilisation et formation",
      content: "Nous croyons que l'éducation est clé pour un tourisme durable :",
      items: [
        "Nos guides sont formés aux pratiques durables et sensibilisent les clients.",
        "Nous partageons des informations sur la culture, la faune et l'environnement afin de créer une expérience enrichissante et respectueuse."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-blue-700 to-blue-900"
    },
    {
      id: 5,
      title: "Pratiques commerciales responsables",
      content: "Nous appliquons des standards éthiques dans toutes nos activités :",
      items: [
        "Respect strict des lois et réglementations locales et internationales.",
        "Transparence dans nos services, prix et engagements.",
        "Promotion de voyages responsables auprès de nos clients et partenaires."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 6,
      title: "Notre objectif",
      content: "Notre politique de développement durable vise à garantir que chaque voyage avec Global Bush Travel & Tourism :",
      items: [
        "Crée des expériences mémorables pour nos clients.",
        "Respecte et protège l'environnement naturel.",
        "Apporte un impact positif aux communautés locales.",
        "Assure la pérennité de notre patrimoine culturel et naturel pour les générations futures."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800"
    }
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
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Notre Engagement
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
              Politique de Développement Durable
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-6 mb-10 max-w-4xl mx-auto">
              <p className="text-gray-800 text-lg leading-relaxed">
                Chez <strong className="text-blue-800">Global Bush Travel & Tourism</strong>, nous sommes convaincus que le tourisme responsable est essentiel pour préserver l'environnement, soutenir les communautés locales et garantir des expériences durables pour nos clients. Notre engagement en matière de développement durable guide chacune de nos actions et décisions.
              </p>
            </div>
          </div>

          {/* Grille des sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 transform hover:-translate-y-1"
              >
                {/* En-tête de la carte */}
                <div className="relative px-8 pt-8 pb-6">
                  {/* Numéro en arrière-plan */}
                  <div className="absolute top-0 right-0 text-[120px] font-black text-blue-50 opacity-30 leading-none transform -translate-y-4 translate-x-4">
                    {section.id < 10 ? `0${section.id}` : section.id}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start mb-6">
                      {/* Icône */}
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {section.icon}
                        </div>
                      </div>
                      
                      {/* Titre */}
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors leading-tight">
                          {section.title}
                        </h2>
                        <div className="flex items-center mt-2">
                          <div className={`w-8 h-1 bg-gradient-to-r ${section.color} rounded-full`}></div>
                          <div className="text-xs text-blue-600 font-medium ml-2">Pilier {section.id}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="mb-4">
                      <p className="text-gray-700 font-medium mb-3">{section.content}</p>
                      <ul className="space-y-2">
                        {section.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center mr-3 mt-1 flex-shrink-0`}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Badge de certification */}
                <div className="px-8 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-600 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Engagement certifié</span>
                    </div>
                    <div className="text-xs text-blue-500 font-medium">
                      Étape {section.id}/6
                    </div>
                  </div>
                </div>
                
                {/* Bordure colorée au hover */}
                <div className={`h-1 w-full bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Citation inspirante */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white mb-16 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-32 translate-y-32"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Notre Philosophie</span>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <svg className="w-12 h-12 text-blue-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                
                <p className="text-2xl italic text-blue-100 mb-8 leading-relaxed">
                  "Voyager avec nous, c'est découvrir l'Afrique centrale tout en préservant sa beauté pour demain."
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="w-8 h-1 bg-blue-300 rounded-full mr-4"></div>
                  <div className="text-blue-200 font-medium">Global Bush Travel & Tourism</div>
                  <div className="w-8 h-1 bg-blue-300 rounded-full ml-4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques d'impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-2">100+</div>
              <div className="text-gray-600">Communautés locales soutenues</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-2">15+</div>
              <div className="text-gray-600">Projets de conservation</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
              <div className="text-gray-600">Guides formés au développement durable</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-200">
            <Link
              to="/faq"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Précédent : FAQ
            </Link>
            
            <div className="hidden md:flex items-center text-blue-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">6 piliers du développement durable</span>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Rejoignez notre mission
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Call to action */}
          <div className="mt-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Prêt à voyager de manière responsable ?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Choisissez Global Bush Travel & Tourism pour une expérience africaine authentique qui respecte notre planète et ses habitants.
            </p>
            <Link
              to="/destinations"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Découvrir nos destinations durables
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DeveloppementDurable;