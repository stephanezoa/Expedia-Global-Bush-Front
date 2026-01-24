// src/pages/RencontreAccueil.jsx
import React from "react";
import Footer from "../components/Footer";

const RencontreAccueil = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-8 text-center relative">
            <div className="absolute top-4 right-4 text-4xl">🤝</div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Service de Rencontre et d'Accueil
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              Une arrivée chaleureuse et professionnelle au Cameroun
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
                    Le service de <strong className="text-blue-800">Rencontre et Accueil</strong> de
                    <strong className="text-blue-800"> Global Bush Travel and Tourism Agency</strong> est conçu pour
                    offrir aux voyageurs une prise en charge chaleureuse, professionnelle
                    et sécurisée dès leur arrivée au Cameroun. Que vous voyagiez pour
                    affaires, loisirs, événements ou séjours familiaux, nous veillons à ce
                    que votre expérience commence dans les meilleures conditions.
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
                    Nos services de rencontre et d'accueil
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
                          <strong className="text-blue-800">Accueil personnalisé :</strong> 
                          Un agent dédié vous accueille à l'aéroport, à la gare ou au point d'arrivée convenu avec pancarte nominative.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🛄</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Assistance à l'arrivée :</strong> 
                          Aide pour les formalités, orientation et récupération des bagages si nécessaire.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">🚗</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Coordination des transferts :</strong> 
                          Liaison immédiate avec nos services de transfert vers votre hôtel, lieu de réunion ou résidence.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">👑</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Accompagnement VIP :</strong> 
                          Service premium pour dirigeants, invités spéciaux, diplomates ou groupes corporatifs.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <span className="font-bold text-sm">👥</span>
                        </div>
                        <span className="text-gray-800">
                          <strong className="text-blue-800">Accueil de groupes :</strong> 
                          Gestion complète de l'arrivée de groupes touristiques, délégations professionnelles ou participants à des événements.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Service adapté */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Un service adapté à tous vos voyages
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Notre service de rencontre et accueil s'intègre parfaitement à nos
                    autres prestations : transferts aéroport, hébergement hôtelier,
                    gestion des voyages d'affaires, organisation de réunions,
                    voyages touristiques, voyages de noces et circuits spécialisés.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections Pourquoi choisir et Comment bénéficier côte à côte */}
            <div className="mb-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Pourquoi choisir Global Bush ?
                  </h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Accueil professionnel et chaleureux.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Personnel expérimenté et multilingue.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Coordination fluide avec tous les services de voyage.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Sécurité, confort et gain de temps dès votre arrivée.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Disponibilité 24h/24 et 7j/7.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Comment bénéficier du service ?
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
                        Communiquez vos informations d'arrivée (vol, date, heure, lieu).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Choisissez le niveau de service souhaité (standard ou VIP).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-800 text-lg">
                        Recevez votre confirmation et voyagez en toute tranquillité.
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
                  Avec Global Bush, chaque arrivée est soigneusement organisée pour vous
                  offrir une expérience fluide, sécurisée et accueillante dès les
                  premières minutes de votre séjour au Cameroun.
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

export default RencontreAccueil;