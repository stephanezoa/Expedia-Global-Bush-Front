// src/pages/PreparerSonVoyage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PreparerSonVoyage = () => {
  // Images d'illustration - URLs temporaires (remplacez-les par vos propres images)
  const images = {
    raisonImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    chauffeursImage: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    guideImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    dosdontsImage: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    faqImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    developpementImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  };

  const sections = [
    {
      id: 1,
      title: "12 raisons de voyager avec nous",
      description: "Découvrez pourquoi Global Bush est le partenaire idéal pour vos voyages en Afrique centrale.",
      link: "/raisons12",
      image: images.raisonImage,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Nos chauffeurs et guides professionnels",
      description: "Faites connaissance avec nos équipes locales expérimentées, garantes de votre sécurité et confort.",
      link: "/chauffeursguides",
      image: images.chauffeursImage,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "Guide de voyage – Afrique centrale",
      description: "Informations pratiques et conseils pour voyager dans tous les pays d'Afrique centrale.",
      link: "/guidevoyage",
      image: images.guideImage,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 4,
      title: "Voyager : DO'S & DON'TS",
      description: "Les bonnes pratiques et comportements à adopter pour un voyage respectueux et sécurisé.",
      link: "/dosdont",
      image: images.dosdontsImage,
      color: "from-blue-700 to-blue-900"
    },
    {
      id: 5,
      title: "Questions fréquemment posées (FAQ)",
      description: "Retrouvez les réponses aux questions les plus courantes avant votre départ.",
      link: "/faq",
      image: images.faqImage,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 6,
      title: "Politique de développement durable",
      description: "Découvrez notre engagement pour un tourisme responsable et durable en Afrique.",
      link: "/developpementdurable",
      image: images.developpementImage,
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* En-tête avec badge */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white text-sm font-semibold mb-4 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Guide du voyageur
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-6 tracking-tight">
              Préparer son Voyage
            </h1>
            
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Bien préparer son voyage est essentiel pour vivre une expérience
              sereine et réussie. Global Bush Travel and Tourism Agency met à votre
              disposition des ressources pratiques et des informations clés pour
              vous accompagner avant votre départ en Afrique centrale.
            </p>
          </div>

          {/* Grille des sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.link}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 transform hover:-translate-y-1 active:scale-[0.98]"
              >
                {/* Numéro en coin supérieur gauche */}
                <div className="absolute top-0 left-0 z-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-br-2xl shadow-lg">
                  {section.id < 10 ? `0${section.id}` : section.id}
                </div>
                
                {/* Image avec overlay */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  {/* Overlay dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent z-10"></div>
                  
                  {/* Image de fond */}
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${section.image})` }}
                  ></div>
                  
                  {/* Badge coloré */}
                  <div className={`absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br ${section.color} z-20 shadow-lg`}></div>
                </div>

                {/* Contenu */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start mb-4">
                    <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${section.color} mr-3 mt-1`}></div>
                    <h2 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm sm:text-base">
                    <span className="group-hover:underline">Découvrir</span>
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Bordure colorée au hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Link>
            ))}
          </div>

          {/* Section d'appel à l'action */}
          <div className="mt-14 md:mt-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center text-white overflow-hidden relative">
            {/* Éléments décoratifs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">Besoin d'aide supplémentaire ?</h3>
              <p className="text-blue-100 text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Notre équipe est disponible pour répondre à toutes vos questions 
                et vous aider à préparer votre voyage sur mesure en Afrique centrale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Nous contacter
                </Link>
                <Link 
                  to="/destinations" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Voir nos destinations
                </Link>
              </div>
            </div>
          </div>

          {/* Indicateur visuel */}
          <div className="mt-10 md:mt-14 text-center">
            <div className="inline-flex items-center space-x-2 text-blue-700 bg-blue-50 px-4 py-2 rounded-full">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
              <span className="font-medium text-sm sm:text-base">Toutes les ressources sont à votre disposition</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PreparerSonVoyage;