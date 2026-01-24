// src/pages/TransfertAeroport.jsx
import React from "react";
import Footer from "../components/Footer";

const TransfertAeroport = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-8 text-center relative">
            <div className="absolute top-4 right-4 text-4xl">✈️</div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Transferts depuis l'Aéroport de Douala
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              Arrivée et départ fluides, confortables et sans stress
            </p>
          </div>

          <div className="p-8 md:p-10">
            {/* Introduction */}
            <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                  <span className="text-2xl text-blue-700">🏢</span>
                </div>
                <div>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    <strong className="text-blue-800">Global Bush Travel and Tourism Agency</strong>, basée à Douala au Cameroun,
                    propose des services de transferts depuis l'aéroport afin de garantir une arrivée
                    et un départ fluides, confortables et sans stress. Que vous voyagiez pour des raisons
                    professionnelles ou personnelles, nos services sont conçus pour répondre à vos besoins
                    avec professionnalisme et fiabilité.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Services de transfert */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">🚙</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Services de transfert depuis l'aéroport de Douala
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">👋</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Prise en charge à l'arrivée :</strong> 
                          Accueil personnalisé dès votre descente d'avion et assistance pour la récupération des bagages.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🚗</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Transfert vers votre destination :</strong> 
                          Véhicules confortables et climatisés (berlines, 4x4, minibus) avec chauffeurs professionnels et courtois.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🛫</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Transfert pour le départ :</strong> 
                          Ponctualité garantie afin d'éviter tout retard et assistance à l'enregistrement si nécessaire.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Options de véhicules et service 24/7 */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">🚘</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Options de véhicules
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Voitures privées pour voyageurs individuels ou petits groupes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Minibus et véhicules spacieux pour familles ou groupes.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Service disponible 24h/24 et 7j/7
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Nos services de transfert sont disponibles à toute heure, quels que soient
                    l'horaire et le jour de votre vol.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Pourquoi choisir */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Pourquoi choisir Global Bush pour vos transferts ?
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-4">
                      <li className="flex items-start text-lg">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800">
                          Fiabilité : Service ponctuel et professionnel.
                        </span>
                      </li>
                      <li className="flex items-start text-lg">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800">
                          Confort : Véhicules modernes et parfaitement entretenus.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-4">
                      <li className="flex items-start text-lg">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800">
                          Sécurité : Chauffeurs expérimentés connaissant parfaitement la région.
                        </span>
                      </li>
                      <li className="flex items-start text-lg">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800">
                          Gain de temps : Évitez les contraintes des taxis et transports publics.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Comment réserver */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Comment réserver votre transfert ?
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Contactez Global Bush Travel and Tourism Agency par téléphone, email ou site web.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Fournissez les informations de votre vol (numéro, date et heure).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Choisissez le type de véhicule adapté à vos besoins.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Recevez votre confirmation et profitez d'un service haut de gamme.
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
                  Avec Global Bush, vos transferts depuis l'aéroport de Douala sont organisés avec soin,
                  vous permettant de commencer ou terminer votre voyage en toute sérénité.
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

export default TransfertAeroport;