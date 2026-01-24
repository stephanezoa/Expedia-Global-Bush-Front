// src/pages/NosSolutions.jsx
import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Nossolutions = () => {
  const solutions = [
    { 
      name: "Voyages d'affaires et réunions", 
      link: "/voyagesaffaires",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Solutions professionnelles pour vos déplacements d'affaires"
    },
    { 
      name: "Gestion des voyages d'affaires", 
      link: "/gestionvoyages",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Gestion complète et optimisation de vos voyages professionnels"
    },
    { 
      name: "Voyages maritime et offshore", 
      link: "/voyagesmaritime",
      image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Services spécialisés pour le secteur maritime"
    },
    { 
      name: "Forfait d'écotourisme", 
      link: "/ecotourisme",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Voyages responsables et durables"
    },
    { 
      name: "Visite en famille", 
      link: "/visitefamille",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Expériences adaptées à toute la famille"
    },
    { 
      name: "Circuits cycliste", 
      link: "/circuitscycliste",
      image: "https://images.unsplash.com/photo-1511735114129-4a798b2e6e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Parcours pour passionnés de vélo"
    },
    { 
      name: "Circuit golf", 
      link: "/circuitgolf",
      image: "https://images.unsplash.com/photo-1503220312315-40b5a4c3c7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Séjours golfiques d'exception"
    },
    { 
      name: "Voyage de noces", 
      link: "/voyagenoces",
      image: "https://images.unsplash.com/photo-1516483638265-fa9187e7a0a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Honeymoon inoubliable"
    },
    { 
      name: "Hébergement hôtelier", 
      link: "/hebergementhotelier",
      image: "https://images.unsplash.com/photo-1518684079-3c7d3e7f0ac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Sélection d'hôtels premium"
    },
    { 
      name: "Gestion des réunions", 
      link: "/gestionreunions",
      image: "https://images.unsplash.com/photo-1511300636406-a9b1c4e15c4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Organisation complète d'événements"
    },
    { 
      name: "Location de voiture", 
      link: "/locationvoiture",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Véhicules premium à votre disposition"
    },
    { 
      name: "Transfert aéroport", 
      link: "/transfertaeroport",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Transferts VIP depuis l'aéroport"
    },
    { 
      name: "Rencontre et accueil", 
      link: "/rencontreaccueil",
      image: "https://images.unsplash.com/photo-1551821945-f7a0ff45c6c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Services d'accueil personnalisés"
    },
    { 
      name: "Voyage et loisir", 
      link: "/voyageloisir",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Expériences de loisirs exclusives"
    },
  ];

  const icons = [
    "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z", // Business
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", // Management
    "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z", // Maritime
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-18C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z", // Eco
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // Family
    "M13 10V3L4 14h7v7l9-11h-7z", // Cycling
    "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3h18V7a2 2 0 00-2-2H5zm12 13v3m-4-3v3m-4-3v3m8-9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2.343M11 15H9a2 2 0 01-2-2v-2a2 2 0 012-2h2.343", // Golf
    "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", // Honeymoon
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", // Hotel
    "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", // Meetings
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", // Car
    "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", // Transfer
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // Meet & Greet
    "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" // Leisure
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex flex-col items-center py-16 px-4">
        {/* En-tête amélioré */}
        <div className="text-center mb-16 max-w-4xl px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Nos Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Premium</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 mx-auto mb-8 rounded-full shadow-md"></div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Des services de voyage sur mesure, conçus pour répondre à vos exigences professionnelles 
            et personnelles avec excellence et innovation.
          </p>
          
          {/* Statistiques */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">14+</div>
              <div className="text-gray-500 text-sm font-medium">Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">50+</div>
              <div className="text-gray-500 text-sm font-medium">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">24/7</div>
              <div className="text-gray-500 text-sm font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Grille améliorée avec images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl px-4">
          {solutions.map((solution, index) => (
            <Link
              to={solution.link}
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              {/* Image avec overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge en haut */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="relative p-6">
                {/* Icône avec couleur unique */}
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons[index] || icons[0]}></path>
                  </svg>
                </div>
                
                {/* Titre */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                  {solution.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {solution.description}
                </p>
                
                {/* Indicateur de lien */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-semibold text-sm flex items-center group-hover:text-blue-700 transition-colors duration-300">
                    Explorer
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <div className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    Premium
                  </div>
                </div>
              </div>

              {/* Effet de bordure animé */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-20 mb-16 text-center max-w-3xl px-4">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'une solution personnalisée ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Notre équipe d'experts est à votre disposition pour créer un voyage sur mesure 
              adapté à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Nous contacter
              </Link>
              <a
                href="tel:+33123456789"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl border border-blue-200 hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Nossolutions;