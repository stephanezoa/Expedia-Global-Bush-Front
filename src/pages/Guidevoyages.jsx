import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const GuideVoyages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header avec gradient bleu */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Guide de Voyages
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Découvrez tout ce que vous devez savoir pour voyager au Cameroun
          </p>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Section des boutons */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8 text-center">
            Ressources Essentielles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              to="/aproposcameroun"
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    À propos du Cameroun
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Découvrez la richesse culturelle et géographique du Cameroun
                </p>
              </div>
              <div className="bg-blue-50 px-6 py-3 border-t border-blue-100">
                <span className="text-blue-600 font-medium text-sm flex items-center">
                  Explorer 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link 
              to="/camerounagencevoyage"
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    Cameroun Agence de Voyage
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Trouvez les meilleures agences pour organiser votre séjour
                </p>
              </div>
              <div className="bg-blue-50 px-6 py-3 border-t border-blue-100">
                <span className="text-blue-600 font-medium text-sm flex items-center">
                  Explorer 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link 
              to="/infocameroun"
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    Info Cameroun E-Visa
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Procédures et informations pour l'obtention de votre visa électronique
                </p>
              </div>
              <div className="bg-blue-50 px-6 py-3 border-t border-blue-100">
                <span className="text-blue-600 font-medium text-sm flex items-center">
                  Explorer 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link 
              to="/guidevoyagecameroun"
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">04</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    Guide de Voyage Cameroun
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Conseils pratiques et itinéraires pour votre voyage
                </p>
              </div>
              <div className="bg-blue-50 px-6 py-3 border-t border-blue-100">
                <span className="text-blue-600 font-medium text-sm flex items-center">
                  Explorer 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link 
              to="/affairecameroun"
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">05</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    Affaire au Cameroun
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Informations sur les opportunités d'affaires et l'économie
                </p>
              </div>
              <div className="bg-blue-50 px-6 py-3 border-t border-blue-100">
                <span className="text-blue-600 font-medium text-sm flex items-center">
                  Explorer 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Carte d'inspiration supplémentaire */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white flex flex-col justify-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Besoin d'aide ?</h3>
                <p className="text-blue-100 text-sm">
                  Notre équipe est disponible pour répondre à toutes vos questions sur le voyage au Cameroun
                </p>
              </div>
              <button className="mt-4 bg-white text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                Contactez-nous
              </button>
            </div>
          </div>
        </div>

        {/* Section informative */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-200 mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Pourquoi choisir le Cameroun ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-600 font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Diversité Culturelle</h4>
              <p className="text-gray-600 text-sm">Plus de 200 groupes ethniques et 2 langues officielles</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-600 font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Nature Exceptionnelle</h4>
              <p className="text-gray-600 text-sm">Des plages paradisiaques aux montagnes imposantes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-600 font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Cuisine Unique</h4>
              <p className="text-gray-600 text-sm">Découvrez des saveurs authentiques et variées</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GuideVoyages;