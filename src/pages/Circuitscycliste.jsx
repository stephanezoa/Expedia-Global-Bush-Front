// src/pages/CircuitsCycliste.jsx
import React from "react";
import Footer from "../components/Footer";

const CircuitsCycliste = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête avec dégradé bleu */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-8 text-center">
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Circuits Cyclistes au Cameroun
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              "La liberté retrouvée sur deux roues"
            </p>
          </div>

          <div className="p-8 md:p-10">
            <p className="text-gray-800 text-lg leading-relaxed mb-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              Nos circuits cyclistes vous redonnent ce sentiment de liberté retrouvé de 
              l’enfance en pédalant le long des côtes, des lacs et des régions forestières. 
              Tout commence avec vous, un vélo et un rêve.
            </p>

            <div className="text-center mb-10">
              <p className="text-blue-700 text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-100 to-blue-200 py-3 px-6 rounded-full inline-block shadow-md">
                RENT A DRIVER CAMEROON
              </p>
            </div>

            {/* Section avec icône */}
            <div className="mb-10 p-6 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🚴‍♂️</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Découvrez le Cameroun à deux roues !
                </h2>
              </div>
              <p className="text-gray-700 text-lg pl-16">
                Découvrez la beauté époustouflante et la richesse culturelle du Cameroun comme 
                jamais auparavant grâce à nos circuits cyclistes. Des rues animées de Douala 
                aux paysages sereins des parcs nationaux, nous proposons des aventures à vélo 
                adaptées à tous les niveaux.
              </p>
            </div>

            {/* Section des offres */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
                🌟 Ce que nos circuits cyclistes offrent :
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1">
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="text-gray-800"><strong className="text-blue-800">Itinéraires personnalisés :</strong> Explorez des sentiers pittoresques, des monuments historiques et des sites culturels selon vos préférences.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1">
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="text-gray-800"><strong className="text-blue-800">Visites guidées :</strong> Guides expérimentés pour garantir une expérience sûre, informative et immersive.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1">
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="text-gray-800"><strong className="text-blue-800">Véhicules d'assistance :</strong> Voitures de soutien dédiées pour les bagages, rafraîchissements et assistance pendant le parcours.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1">
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="text-gray-800"><strong className="text-blue-800">Vélos de haute qualité :</strong> Bicycles bien entretenus adaptés à différents terrains et niveaux.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1">
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="text-gray-800"><strong className="text-blue-800">Forfaits flexibles :</strong> Tours d'une demi-journée, d'une journée complète ou sur plusieurs jours pour s'adapter à votre emploi du temps.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section pourquoi choisir */}
            <div className="mb-10 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-100">
                Pourquoi choisir nos circuits cyclistes ?
              </h2>
              <ul className="space-y-4 pl-4">
                <li className="flex items-center text-lg">
                  <div className="bg-blue-500 text-white p-1 rounded-full mr-4 w-6 h-6 flex items-center justify-center">
                    ✔
                  </div>
                  Opportunité unique de découvrir les trésors naturels et culturels du Cameroun.
                </li>
                <li className="flex items-center text-lg">
                  <div className="bg-blue-500 text-white p-1 rounded-full mr-4 w-6 h-6 flex items-center justify-center">
                    ✔
                  </div>
                  Parfait pour les passionnés de fitness, les aventuriers et les éco-touristes.
                </li>
                <li className="flex items-center text-lg">
                  <div className="bg-blue-500 text-white p-1 rounded-full mr-4 w-6 h-6 flex items-center justify-center">
                    ✔
                  </div>
                  Support professionnel garantissant sécurité et confort tout au long du parcours.
                </li>
              </ul>
            </div>

            {/* Call to action */}
            <div className="mt-12 text-center space-y-6">
              <p className="text-2xl font-bold text-blue-900 bg-blue-50 py-4 px-6 rounded-xl shadow-inner">
                🌍 Libérez votre esprit d'aventurier et découvrez le Cameroun sous un tout nouvel angle !
              </p>
              
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg">
                <p className="text-xl font-bold mb-2">
                  📞 Réservez votre circuit cycliste dès aujourd'hui !
                </p>
                <p className="text-blue-100">
                  Laissez l'aventure commencer !
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

export default CircuitsCycliste;