// src/pages/HebergementHotelier.jsx
import React from "react";
import Footer from "../components/Footer";

const HebergementHotelier = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-8 text-center relative">
            <div className="absolute top-4 right-4 text-4xl">🏨</div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">
              Hébergement Hôtelier au Cameroun
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic">
              Confort, élégance et service exceptionnel
            </p>
          </div>

          <div className="p-8 md:p-10">
            {/* Introduction */}
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
              <p className="text-gray-800 text-lg leading-relaxed">
                La gestion hôtelière travaille sans condition pour vous garantir les meilleurs tarifs et forfaits sur les hébergements.  
                Si vous souhaitez séjourner dans de beaux environnements tout en faisant vos propres activités, nos séjours d'hébergement sont idéaux. Des hôtels aux retraites en bord de mer ou aux éco-lodges en jungle, nous avons des options adaptées à vos goûts et budgets.
              </p>
            </div>

            {/* Marque */}
            <div className="text-center my-12">
              <p className="text-blue-800 text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-100 to-indigo-100 py-4 px-8 rounded-full inline-block shadow-lg border border-blue-300">
                RENT A DRIVER CAMEROON
              </p>
            </div>

            {/* Section principale */}
            <div className="mb-10 bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🏨</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Services d'hébergement confortables et pratiques au Cameroun
                </h2>
              </div>
              <p className="text-gray-700 text-lg pl-16">
                Que vous voyagiez pour affaires, loisirs ou un événement spécial, nos services d'hébergement au Cameroun vous garantissent un séjour confortable et sans souci. Nous proposons une sélection d'hôtels et d'hébergements de premier choix pour répondre à vos préférences, des resorts de luxe aux options économiques.
              </p>
            </div>

            {/* Section des services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
                🌟 Nos services d'hébergement incluent :
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">🎯</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Recommandations personnalisées :</strong> 
                        Nous vous aidons à trouver les meilleurs hôtels selon vos besoins et votre budget, pour un séjour parfait à Douala, Yaoundé ou autres destinations clés du Cameroun.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">⭐</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Luxe et confort :</strong> 
                        Profitez d'équipements de classe mondiale, de chambres magnifiques et d'un service exceptionnel dans les hôtels et resorts premium.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">🌿</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Immersion culturelle et naturelle :</strong> 
                        Séjournez dans des éco-lodges ou hôtels boutique offrant un mélange unique de luxe et de culture locale.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">📍</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Emplacement pratique :</strong> 
                        Choisissez des hébergements proches des centres d'affaires, attractions touristiques ou parcs nationaux pour un accès facile à tout ce dont vous avez besoin.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">💎</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Forfaits spéciaux :</strong> 
                        Tarifs réduits pour les séjours longs, voyages d'affaires ou vacances en famille.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section pourquoi choisir */}
            <div className="mb-10 bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-100">
                Pourquoi nous choisir ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Large choix d'hébergements pour répondre aux besoins de chaque voyageur.
                  </li>
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Assistance professionnelle pour réserver et gérer votre séjour.
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Recommandations personnalisées pour une expérience mémorable.
                  </li>
                  <li className="flex items-start text-lg">
                    <div className="bg-blue-500 text-white p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Options confortables, pratiques et bien situées partout au Cameroun.
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12 space-y-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-300">
                <p className="text-2xl font-bold text-blue-900 mb-4">
                  🏨 Laissez-nous prendre soin de vos besoins en hébergement, pour que vous puissiez profiter pleinement de votre séjour au Cameroun !
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-8 rounded-2xl shadow-lg text-center">
                <p className="text-2xl font-bold mb-3">
                  📞 Contactez-nous pour réserver votre séjour et découvrir les meilleurs hébergements au Cameroun dès aujourd'hui !
                </p>
                <p className="text-blue-100 text-lg">
                  Votre confort, notre priorité
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

export default HebergementHotelier;