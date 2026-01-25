// src/pages/Dosdont.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Dosdont = () => {
  const dosList = [
    "Respecter les coutumes et traditions locales, notamment dans les villages et zones rurales.",
    "Toujours demander l'autorisation avant de photographier des personnes ou certains lieux.",
    "Suivre les conseils de votre chauffeur ou guide professionnel, surtout lors des safaris ou excursions.",
    "Avoir toujours une copie de vos documents importants (passeport, visa, assurance).",
    "Boire uniquement de l'eau minérale en bouteille et bien hydratée.",
    "Utiliser des vêtements légers mais décents, adaptés au climat et aux contextes culturels.",
    "Soutenir les communautés locales en achetant de l'artisanat local et en respectant l'environnement.",
    "Prévoir un anti-moustique et suivre les recommandations sanitaires avant le départ.",
    "Échanger de l'argent dans les banques ou lieux recommandés par votre agence.",
    "Faire preuve de patience et de courtoisie : le rythme peut être différent de celui auquel vous êtes habitué."
  ];

  const dontsList = [
    "Ne pas photographier les bâtiments officiels, militaires ou policiers sans autorisation.",
    "Ne pas consommer l'eau du robinet, même pour se brosser les dents.",
    "Éviter d'exhiber des objets de valeur (bijoux, grosses sommes d'argent, téléphones coûteux).",
    "Ne pas vous déplacer seul tard la nuit, surtout dans les grandes villes.",
    "Ne pas ignorer les consignes de sécurité données par votre guide ou les autorités locales.",
    "Éviter les discussions sensibles liées à la politique ou à la religion avec des inconnus.",
    "Ne pas toucher ou nourrir les animaux sauvages lors des safaris.",
    "Ne pas jeter de déchets dans la nature ou dans les parcs nationaux.",
    "Éviter les comportements jugés irrespectueux dans les lieux publics ou sacrés.",
    "Ne pas sous-estimer les distances et le temps de trajet entre les destinations."
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
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Guide Comportemental
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
              Voyager en Afrique Centrale : DO'S & DON'TS
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Voyager en Afrique centrale est une expérience riche et authentique. 
              Pour profiter pleinement de votre séjour tout en respectant les cultures 
              locales, voici quelques conseils essentiels à suivre.
            </p>
          </div>

          {/* Grille DO'S & DON'TS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* DO'S Section */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden border border-green-200 transform hover:-translate-y-1 transition-all duration-300">
              {/* En-tête DO'S */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">DO'S</h2>
                      <p className="text-green-100">Ce qu'il est recommandé de faire</p>
                    </div>
                  </div>
                  <div className="text-3xl">✅</div>
                </div>
                <div className="mt-4 flex items-center text-green-100">
                  <div className="w-full h-1 bg-white/30 rounded-full"></div>
                  <div className="ml-4 text-sm font-medium">{dosList.length} recommandations</div>
                </div>
              </div>

              {/* Liste DO'S */}
              <div className="p-6">
                <ul className="space-y-4">
                  {dosList.map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                        {index < dosList.length - 1 && (
                          <div className="h-4 w-0.5 bg-gradient-to-b from-green-300 to-green-400 mx-4 mt-1"></div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pied DO'S */}
              <div className="bg-green-100 p-4 text-center">
                <div className="flex items-center justify-center text-green-800 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Conseils pour un voyage réussi</span>
                </div>
              </div>
            </div>

            {/* DON'TS Section */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden border border-red-200 transform hover:-translate-y-1 transition-all duration-300">
              {/* En-tête DON'TS */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">DON'TS</h2>
                      <p className="text-red-100">Ce qu'il vaut mieux éviter</p>
                    </div>
                  </div>
                  <div className="text-3xl">❌</div>
                </div>
                <div className="mt-4 flex items-center text-red-100">
                  <div className="w-full h-1 bg-white/30 rounded-full"></div>
                  <div className="ml-4 text-sm font-medium">{dontsList.length} précautions</div>
                </div>
              </div>

              {/* Liste DON'TS */}
              <div className="p-6">
                <ul className="space-y-4">
                  {dontsList.map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                        {index < dontsList.length - 1 && (
                          <div className="h-4 w-0.5 bg-gradient-to-b from-red-300 to-red-400 mx-4 mt-1"></div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pied DON'TS */}
              <div className="bg-red-100 p-4 text-center">
                <div className="flex items-center justify-center text-red-800 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                  <span>Évitez ces comportements pour votre sécurité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section d'équilibre */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white mb-16 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-32 translate-y-32"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Conseil d'Expert</span>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <h3 className="text-2xl font-bold mb-4">L'Équilibre Parfait</h3>
                    <p className="text-blue-100 leading-relaxed">
                      En respectant ces DO'S & DON'TS, vous vivrez une expérience plus sûre, 
                      plus enrichissante et plus respectueuse en Afrique centrale.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-green-300">Respect</span>
                    </div>
                    <div className="text-blue-300">+</div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-red-300">Prudence</span>
                    </div>
                    <div className="text-blue-300">=</div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-yellow-300">Voyage Réussi</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Global Bush Travel and Tourism Agency</h4>
                        <p className="text-blue-200">Votre partenaire de confiance</p>
                      </div>
                    </div>
                    <p className="text-blue-100">
                      Nous sommes là pour vous accompagner à chaque étape de votre voyage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-200">
            <Link
              to="/guidevoyage"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Précédent : Guide de voyage
            </Link>
            
            <div className="hidden md:flex items-center text-blue-700">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span className="text-sm">10 DO'S</span>
                </div>
                <div className="text-blue-400">•</div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span className="text-sm">10 DON'TS</span>
                </div>
              </div>
            </div>
            
            <Link
              to="/faq"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Suivant : FAQ
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Conseils supplémentaires */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Respect Culturel</h4>
              <p className="text-sm text-gray-600">Adaptez votre comportement aux coutumes locales pour une immersion réussie.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Sécurité</h4>
              <p className="text-sm text-gray-600">Suivez toujours les conseils de sécurité de nos guides professionnels.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Environnement</h4>
              <p className="text-sm text-gray-600">Contribuez à la préservation de la nature lors de vos voyages.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dosdont;