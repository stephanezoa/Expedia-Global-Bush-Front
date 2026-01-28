import React from "react";
import Footer from "../components/Footer";

const AffaireCameroun = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Affaires au Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-xl md:text-2xl text-blue-100 font-medium">
            Visites d'affaires et opportunités économiques au Cameroun
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <p className="text-gray-700 text-lg leading-relaxed">
                Faire des affaires au Cameroun, explorer des opportunités
                d'investissement ou simplement mieux nous connaître : nous vous
                remercions de votre intérêt et espérons que vous trouverez ici les
                informations recherchées. N'hésitez pas à nous contacter directement
                pour toute assistance personnalisée.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
              <p className="text-lg leading-relaxed">
                La nouvelle démocratie camerounaise est en pleine évolution. L'économie
                est dynamique et continue de croître. Le Cameroun se positionne comme
                l'un des marchés émergents les plus prometteurs d'Afrique, à l'aube de
                ce que beaucoup considèrent comme « le siècle de l'Afrique ».
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi investir Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Pourquoi investir au Cameroun ?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Marché émergent</h3>
              </div>
              <p className="text-gray-600">
                Le Cameroun d'aujourd'hui est l'un des marchés émergents les plus
                sophistiqués et prometteurs au monde.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Croissance soutenue</h3>
              </div>
              <p className="text-gray-600">
                Malgré les défis mondiaux, le pays a maintenu une croissance du PIB soutenue.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Infrastructures</h3>
              </div>
              <p className="text-gray-600">
                L'accès aux services de base s'améliore grâce aux efforts des entreprises publiques et privées.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-200">
            <p className="text-gray-700 text-lg leading-relaxed">
              La combinaison d'infrastructures économiques solides et d'un vaste marché en développement a créé un
              environnement entrepreneurial dynamique et attractif. L'économie camerounaise bénéficie également de
              l'intensification des échanges entre l'Afrique et l'Asie ainsi que de sa richesse en matières premières.
            </p>
          </div>
        </div>

        {/* Secteurs économiques clés */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Secteurs économiques clés
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Agriculture et Foresterie */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Agriculture et Foresterie</h3>
              </div>
              <p className="text-gray-600">
                L'agriculture et la foresterie représentent une part importante du PIB.
                La production de bois est en hausse et de nouvelles unités de gestion
                forestière ont été ouvertes.
              </p>
            </div>

            {/* Commerce et échanges */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Commerce et échanges</h3>
              </div>
              <p className="text-gray-600">
                Le Cameroun importe une grande partie des produits finis alors qu'il
                dispose de nombreuses matières premières. Cela crée d'importantes
                opportunités dans la transformation industrielle.
              </p>
            </div>

            {/* Transport */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Transport (terre, mer et air)</h3>
              </div>
              <p className="text-gray-600">
                Le pays modernise activement ses infrastructures routières et
                logistiques. Le Cameroun dispose de ports majeurs, d'un réseau
                ferroviaire et d'aéroports internationaux.
              </p>
            </div>

            {/* Industrie et fabrication */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Industrie et fabrication</h3>
              </div>
              <p className="text-gray-600">
                Le Cameroun est l'un des centres industriels majeurs d'Afrique centrale,
                avec des industries dans l'agroalimentaire, le textile, le bois, et
                les matériaux de construction.
              </p>
            </div>

            {/* Banque, assurance et finance */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Banque, assurance et finance</h3>
              </div>
              <p className="text-gray-600">
                Le secteur bancaire est régi par la BEAC. La croissance du commerce
                crée un besoin accru en financement, en assurance et en services
                financiers.
              </p>
            </div>

            {/* Tourisme et voyages */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Tourisme et voyages</h3>
              </div>
              <p className="text-gray-600">
                Le tourisme est un secteur en croissance, soutenu par la richesse
                culturelle du pays et la diversité de sa faune. Les opportunités
                incluent l'hôtellerie et l'écotourisme.
              </p>
            </div>

            {/* Construction et infrastructures */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Construction et infrastructures</h3>
                  <p className="text-gray-600">
                    Le secteur de la construction connaît une forte croissance avec de
                    nombreux projets d'infrastructures : routes, centrales électriques,
                    barrages hydroélectriques et projets immobiliers. Des opportunités
                    existent dans la construction, le financement de projets et le
                    développement immobilier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border border-blue-200">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900 mb-4">
                  Environnement favorable aux affaires
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Le Cameroun offre aujourd'hui un environnement favorable aux affaires,
                  avec de multiples secteurs porteurs et un fort potentiel de croissance
                  pour les investisseurs nationaux et internationaux.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à investir au Cameroun ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour explorer les opportunités d'investissement et bénéficier d'un accompagnement personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Nous contacter
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Demander une étude de marché
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

export default AffaireCameroun;