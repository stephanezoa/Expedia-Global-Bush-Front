// src/pages/GestionReunions.jsx
import React from "react";
import Footer from "../components/Footer";

const GestionReunions = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-8 text-center relative">
            <div className="absolute top-4 right-4 text-4xl">📊</div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Gestion de Réunions et Incentives au Cameroun
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              Professionnalisme et excellence événementielle
            </p>
          </div>

          <div className="p-8 md:p-10">
            {/* Introduction */}
            <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                  <span className="text-2xl text-blue-700">💼</span>
                </div>
                <div>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    Notre service de planification de réunions et incentives vous aide à coordonner toute la logistique pour un événement pertinent et convaincant. Nous fournissons un programme personnalisé incluant la négociation avec les prestataires, le choix du site et la gestion de vos besoins sur place.
                  </p>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Nous relions vos objectifs professionnels à votre stratégie de réunion et gérons toute la logistique. Nos services vont de la gestion complète du processus jusqu'au soutien ponctuel pour compléter votre équipe de réunions existante.
                  </p>
                </div>
              </div>
            </div>

            {/* Marque */}
            <div className="text-center my-12">
              <p className="text-blue-800 text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-100 to-indigo-100 py-4 px-8 rounded-full inline-block shadow-lg border border-blue-300">
                RENT A DRIVER CAMEROON
              </p>
            </div>

            {/* Section pourquoi choisir */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">❓</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Pourquoi choisir notre service de gestion de réunions ?
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800 text-lg">
                          Coordination complète des prestataires et logistique sur site.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800 text-lg">
                          Programmes personnalisés adaptés aux objectifs de votre entreprise.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800 text-lg">
                          Assistance partielle ou complète selon vos besoins.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">✓</span>
                        </div>
                        <span className="text-gray-800 text-lg">
                          Garantit un événement fluide, efficace et réussi.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-10 rounded-2xl shadow-lg text-center">
                <div className="mb-6">
                  <span className="text-4xl mb-4 block">📞</span>
                  <p className="text-2xl font-bold mb-4">
                    Contactez-nous pour planifier vos réunions ou événements incentives
                  </p>
                  <p className="text-xl text-blue-100">
                    Laissez-nous gérer tous les détails pour un résultat parfait !
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-600">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-700/50 p-4 rounded-xl">
                      <div className="text-blue-200 text-sm mb-2">Planification complète</div>
                      <div className="text-white font-semibold">De A à Z</div>
                    </div>
                    <div className="bg-blue-700/50 p-4 rounded-xl">
                      <div className="text-blue-200 text-sm mb-2">Logistique professionnelle</div>
                      <div className="text-white font-semibold">Sur mesure</div>
                    </div>
                    <div className="bg-blue-700/50 p-4 rounded-xl">
                      <div className="text-blue-200 text-sm mb-2">Résultats garantis</div>
                      <div className="text-white font-semibold">Événements réussis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GestionReunions;