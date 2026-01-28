import React from "react";
import Footer from "../components/Footer";

const CamerounAgenceVoyage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Cameroun Agence de Voyage
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-xl md:text-2xl text-blue-100 font-medium">
            Les meilleures agences de voyages de Douala et au Cameroun
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-blue-500">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900 mb-3">
                Global Bush Travel and Tourism Agency
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Votre partenaire de voyage de confiance à Douala.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bienvenue chez Global Bush Travel and Tourism Agency, l'une des meilleures
            agences de voyages de Douala ! Que vous planifiez un voyage d'affaires,
            des vacances en famille ou une escapade romantique, nous sommes là pour
            rendre chaque étape de votre voyage inoubliable.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Pourquoi choisir Global Bush Travel and Tourism Agency ?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Service personnalisé</h3>
              </div>
              <p className="text-gray-600">
                Nous adaptons chaque voyage à vos besoins et préférences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Destinations mondiales</h3>
              </div>
              <p className="text-gray-600">
                Explorez des destinations locales et internationales avec des offres exclusives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Réservations faciles</h3>
              </div>
              <p className="text-gray-600">
                Billets d'avion, hébergements, circuits touristiques et bien plus encore, tout en un seul endroit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Conseils d'experts</h3>
              </div>
              <p className="text-gray-600">
                Notre équipe expérimentée est là pour vous guider à chaque étape.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nos services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Réservation de billets d'avion</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Vols nationaux et internationaux au meilleur prix
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Organisation de circuits touristiques</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Circuits personnalisés selon vos intérêts
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Réservation d'hôtels et locations de voitures</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Hébergements et transports adaptés à votre budget
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Assistance visa et conseils voyage</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Guide complet pour les formalités administratives
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Événements spéciaux et voyages de groupe</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Organisation d'événements d'entreprise et de groupes
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Services additionnels</h3>
              </div>
              <p className="text-blue-100 text-sm">
                Assurance voyage, guide touristique, transferts aéroport, et bien plus encore
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border border-blue-200 mb-12">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900 mb-4">
                Transformons vos rêves de voyage en réalité
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chez Global Bush Travel and Tourism Agency, nous croyons que chaque voyage
                est une aventure unique. Laissez-nous transformer vos rêves de voyage en
                réalité.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à planifier votre prochaine aventure ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contactez notre équipe d'experts dès aujourd'hui pour un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Nous contacter
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CamerounAgenceVoyage;