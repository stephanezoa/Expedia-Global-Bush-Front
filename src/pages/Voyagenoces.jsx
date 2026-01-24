// src/pages/VoyageNoces.jsx
import React from "react";
import Footer from "../components/Footer";

const VoyageNoces = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200">
          {/* En-tête avec thème romantique */}
          <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white py-10 px-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-16 translate-y-16"></div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight relative z-10">
              Voyages de Noces au Cameroun
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-blue-300 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg font-medium italic relative z-10">
              L'amour, les souvenirs et la joie - Votre lune de miel de rêve
            </p>
            <div className="absolute top-4 right-4 text-3xl">💍</div>
          </div>

          <div className="p-8 md:p-10">
            {/* Introduction */}
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <p className="text-gray-800 text-lg leading-relaxed">
                C'est votre mariage de rêve dans votre destination de rêve – la romance, les souvenirs et la joie – 
                tout cela peut devenir réalité. Chez <strong className="text-blue-800">Global Bush</strong>, nous avons 
                l'expertise et les connexions internationales pour orchestrer l'harmonie parfaite entre vos plans de voyage, 
                les services de wedding planner sur place et les détails de votre lune de miel.
              </p>
            </div>

            {/* Sections de contenu avec icônes */}
            <div className="space-y-8 mb-10">
              <div className="flex items-start bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-3 rounded-full mr-4 mt-1">
                  <span className="text-xl text-pink-600">🌹</span>
                </div>
                <p className="text-gray-700 text-lg">
                  Que vous rêviez de roses blanches sur une plage ou de lys au sommet d'une montagne, nous vous aidons 
                  à trouver le lieu idéal au meilleur rapport qualité-prix et prenons soin de tous les détails pour vous.
                </p>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-3 rounded-full mr-4 mt-1">
                  <span className="text-xl text-blue-600">✨</span>
                </div>
                <p className="text-gray-700 text-lg">
                  Nous créons des itinéraires personnalisés de loisirs et voyages de luxe pour particuliers, couples, 
                  familles et groupes. Nous sommes passionnés par toutes les possibilités exclusives que nous pouvons 
                  organiser pour vous et avons hâte de commencer votre projet de lune de miel.
                </p>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-3 rounded-full mr-4 mt-1">
                  <span className="text-xl text-blue-600">🌍</span>
                </div>
                <p className="text-gray-700 text-lg">
                  <strong className="text-blue-800">Global Bush Travel and Tourism Agency</strong>, agence de voyage/tour 
                  opérateur sous-régionale d'Afrique centrale avec siège à Douala, organise et propose des expériences 
                  authentiques sur les meilleurs sites touristiques d'Afrique. Nous offrons à la fois des séjours aventure 
                  en petits groupes et des itinéraires sur mesure, combinant nature, culture et rencontres avec les 
                  populations locales.
                </p>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-3 rounded-full mr-4 mt-1">
                  <span className="text-xl text-blue-600">💱</span>
                </div>
                <p className="text-gray-700 text-lg">
                  Avec rapidité et efficacité, Global Bush met à votre disposition un outil de conversion de devises fiable, 
                  vous permettant de connaître la valeur de votre monnaie par rapport au pays de destination. Les taux sont 
                  mis à jour à la minute pour vous assurer le meilleur taux de change lors de vos voyages internationaux. 
                  Si cela concerne la monnaie, nous vous couvrons !
                </p>
              </div>
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
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">💍</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Célébrez l'amour avec nos voyages de noces inoubliables au Cameroun !
                </h2>
              </div>
              <p className="text-gray-700 text-lg pl-16">
                Créez des souvenirs durables et profitez d'une escapade romantique grâce à nos services sur mesure de 
                lune de miel au Cameroun. Que vous souhaitiez vous détendre sur des plages tranquilles, explorer des 
                paysages luxuriants ou découvrir le charme des villes animées, nous personnalisons chaque détail selon 
                votre histoire d'amour.
              </p>
            </div>

            {/* Section des offres */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
                🌟 Ce que comprennent nos forfaits lune de miel :
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">❤️</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Escapades romantiques :</strong> 
                        Séjour dans des hôtels de luxe, resorts charmants ou éco-lodges, avec de belles vues et un cadre paisible.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">👑</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Visites privées :</strong> 
                        Tours personnalisés des destinations pittoresques, parcs nationaux, cascades et sites historiques.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">🎭</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Expériences culturelles :</strong> 
                        Explorez la culture vibrante du Cameroun ensemble, des marchés locaux à la musique et danse traditionnelles.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">✨</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Activités exclusives :</strong> 
                        Profitez d'expériences intimes comme dîners privés, soins spa, balades dans la nature et safaris.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-blue-700 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <span className="font-bold text-sm">🚗</span>
                      </div>
                      <span className="text-gray-800">
                        <strong className="text-blue-800">Transport de luxe :</strong> 
                        Véhicules confortables et élégants avec chauffeurs professionnels pour un voyage sans souci et luxueux.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section pourquoi choisir */}
            <div className="mb-10 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-100">
                Pourquoi choisir nos services de lune de miel ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start text-lg">
                    <div className="bg-white text-pink-600 p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Itinéraires personnalisés selon vos préférences et désirs.
                  </li>
                  <li className="flex items-start text-lg">
                    <div className="bg-white text-pink-600 p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Équilibre parfait entre détente, aventure et immersion culturelle.
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start text-lg">
                    <div className="bg-white text-pink-600 p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Traitement VIP avec service haut de gamme et attention aux détails.
                  </li>
                  <li className="flex items-start text-lg">
                    <div className="bg-white text-pink-600 p-1 rounded-full mr-4 mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✔
                    </div>
                    Destinations magnifiques pour un cadre idéal de lune de miel.
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12 space-y-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-300">
                <p className="text-2xl font-bold text-blue-900 mb-4">
                  💖 Partez pour la lune de miel de vos rêves et créez des souvenirs à chérir pour toujours au Cameroun !
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white p-8 rounded-2xl shadow-lg text-center">
                <p className="text-2xl font-bold mb-3">
                  📞 Contactez-nous dès aujourd'hui pour planifier votre lune de miel parfaite !
                </p>
                <p className="text-blue-100 text-lg">
                  Laissez-nous écrire le premier chapitre de votre histoire d'amour
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

export default VoyageNoces;