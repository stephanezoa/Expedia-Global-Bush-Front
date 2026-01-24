// src/pages/LocationVoiture.jsx
import React from "react";
import Footer from "../components/Footer";

const LocationVoiture = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-8 text-center relative">
            <div className="absolute top-4 right-4 text-4xl">🚗</div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Location de Voiture au Cameroun
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              Liberté de mouvement, tranquillité d'esprit
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
                    Si vous recherchez un service de location de voiture rapide et fiable au Cameroun, 
                    <strong className="text-blue-800"> Global Bush Travel and Tourism Agency</strong> est une excellente option pour répondre à vos besoins. 
                    L'agence propose des véhicules de qualité afin de rendre votre voyage agréable et sans stress.
                    Que ce soit pour des déplacements professionnels ou des vacances, louer une voiture avec Global Bush 
                    vous garantit un service professionnel et des véhicules bien entretenus.
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
                    Pourquoi choisir Global Bush Travel and Tourism Agency ?
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🚘</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Voitures de qualité :</strong> 
                          Véhicules récents et bien entretenus pour assurer votre sécurité et votre confort.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">⚡</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Service rapide et fiable :</strong> 
                          Réservation simple et prise en charge efficace pour un gain de temps.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">📋</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Options variées :</strong> 
                          Large choix de véhicules adaptés à vos besoins (berlines, 4x4, minibus, etc.).
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🛟</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Assistance locale :</strong> 
                          Support disponible à tout moment en cas de besoin pendant votre location.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">💰</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Tarifs compétitifs :</strong> 
                          Offres flexibles adaptées à différents budgets.
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
                    Comment réserver ?
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Contactez Global Bush Travel and Tourism Agency via le site web, téléphone ou email.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Choisissez le véhicule correspondant à vos besoins et à votre budget.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Confirmez votre réservation et profitez d'un service de prise en charge personnalisé.
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
                  Avec Global Bush, explorez le Cameroun en toute liberté et tranquillité.
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

export default LocationVoiture;