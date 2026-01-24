// src/pages/VoyageLoisir.jsx
import React from "react";
import Footer from "../components/Footer";

const VoyageLoisir = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-8 text-center relative">
            <div className="absolute top-4 right-4 text-4xl">🌴</div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Voyages & Loisirs
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              Détente, découverte et expériences authentiques
            </p>
          </div>

          <div className="p-8 md:p-10">
            {/* Introduction */}
            <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                  <span className="text-2xl text-blue-700">✨</span>
                </div>
                <div>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Les <strong className="text-blue-800">voyages et loisirs</strong> avec
                    <strong className="text-blue-800"> Global Bush Travel and Tourism Agency</strong> sont conçus pour
                    offrir détente, découverte et expériences authentiques. Que vous
                    voyagiez seul, en couple, en famille ou en groupe, nous créons des
                    séjours sur mesure adaptés à vos envies et à votre budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Services */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Nos services de voyages & loisirs
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🗺️</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Séjours touristiques personnalisés :</strong> 
                          Circuits culturels, nature, balnéaires et découvertes urbaines.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🏖️</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Vacances détente :</strong> 
                          Séjours en hôtels, resorts, plages et éco-lodges dans des cadres exceptionnels.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🌿</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Circuits thématiques :</strong> 
                          Écotourisme, tourisme culturel, aventures et découvertes locales.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">👨‍👩‍👧‍👦</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Voyages en famille :</strong> 
                          Programmes adaptés à tous les âges pour des moments de partage inoubliables.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">💑</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Voyages de noces et escapades romantiques :</strong>
                          Expériences exclusives et sur mesure pour couples.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Organisation */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Une organisation complète et sans souci
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Global Bush prend en charge l'ensemble de l'organisation de vos
                    voyages de loisirs : réservations d'hôtels, transferts, location de
                    véhicules, guides touristiques, activités et assistance sur place.
                    Vous profitez pleinement de votre séjour pendant que nous gérons les
                    détails.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections Pourquoi choisir et Comment organiser côte à côte */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Pourquoi choisir Global Bush pour vos voyages de loisirs ?
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Programmes personnalisés selon vos envies.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Connaissance approfondie des destinations au Cameroun et en Afrique.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Service professionnel, fiable et sécurisé.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Excellent rapport qualité-prix.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Assistance et accompagnement tout au long du séjour.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Comment organiser votre voyage de loisirs ?
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Contactez Global Bush Travel and Tourism Agency.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Exprimez vos attentes, dates et budget.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Recevez une proposition personnalisée.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Confirmez votre réservation et profitez de votre séjour.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Message final et marque */}
            <div className="mt-12 space-y-8">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-300">
                <p className="text-2xl font-bold text-blue-900 mb-4">
                  Avec Global Bush, transformez chaque voyage de loisirs en une
                  expérience mémorable, riche en découvertes et en émotions.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-blue-800 text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-100 to-indigo-100 py-4 px-8 rounded-full inline-block shadow-lg border border-blue-300">
                  RENT A DRIVER CAMEROON
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

export default VoyageLoisir;