import React from "react";
import Footer from "../components/Footer";

const AProposCameroun = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            À propos du Cameroun
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-blue-100 italic">
            "Afrique en miniature" - Un pays aux mille visages
          </p>
        </div>
      </div>

      {/* Contenu Principal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le Cameroun, aussi affectueusement appelé « Afrique en miniature » ou
              « Petite Afrique », est un pays d'Afrique centrale de la taille de la
              Californie avec une population d'environ 18 millions d'habitants. Il a
              deux langues officielles, le français et l'anglais et compte plus de 250
              groupes ethniques, chacun avec sa propre langue et sa propre culture.
            </p>
          </div>
        </div>

        {/* Section Diversité */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold">1</span>
            </span>
            La Diversité Camerounaise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Diversité Environnementale</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Le Cameroun tire son surnom de sa grande diversité environnementale et
                culturelle, qui mime le continent africain. Du sud au nord, le Cameroun
                chevauche toutes les principales ceintures végétales d'Afrique, de la
                forêt équatoriale au sud avec les précipitations les plus élevées, en
                passant par la savane au centre et la région du Sahel au nord avec les
                moins de précipitations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Diversité Culturelle</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                En plus de la diversité écologique, le Cameroun a également une histoire
                unique qui a contribué à une plus grande diversification culturelle,
                y compris le mélange des cultures camerounaise et occidentale. Le
                Cameroun est le seul pays africain à avoir été colonisé par trois grandes
                puissances mondiales distinctes : l'Allemagne, l'Angleterre et la France.
              </p>
            </div>
          </div>

          {/* Records climatiques */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Record Climatique</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              La ville de Debunscha, dans le sud du Cameroun, est l'un des 5 endroits
              les plus pluvieux de la planète avec des précipitations annuelles de 400
              pouces (10 000 mm). La diversité écologique résultant des différences
              climatiques est responsable des diversités environnementales et
              alimentaires, qui se sont également traduites en diversité culturelle.
            </p>
          </div>
        </div>

        {/* Section Histoire */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold">2</span>
            </span>
            Héritage Historique
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Influences Coloniales</h3>
              <p className="text-gray-600 leading-relaxed">
                Les visiteurs du Cameroun peuvent voir comment ces puissances mondiales
                ont eu et continuent d'avoir un impact sur le pays. La culture française
                influence principalement le Cameroun francophone, tandis que la culture
                anglaise influence le Cameroun occidental. L'influence allemande est
                surtout visible dans les infrastructures existantes telles que routes,
                ponts, bâtiments et statues.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Histoire de la Traite Négrière</h3>
              <p className="text-gray-600 leading-relaxed">
                Le Cameroun a également été une partie de la Route de l'esclave
                transatlantique. La région portuaire de Bimbia contient encore des
                vestiges de la traite négrière que les visiteurs peuvent voir. Les
                esclaves camerounais étaient principalement vendus au centre de collecte
                Fernando Po.
              </p>
            </div>
          </div>
        </div>

        {/* Section Aujourd'hui */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold">3</span>
            </span>
            Le Cameroun Aujourd'hui
          </h2>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Découvrez maintenant ce pays vibrant de contrastes saisissants. Le
              Cameroun combine plus de 2000 ans de tradition et de culture avec un
              mode de vie moderne. Après plusieurs années sous un régime
              démocratique, le pays est devenu la plus grande démocratie d'Afrique et
              ouvre ses portes aux visiteurs d'affaires et de loisirs.
            </p>
          </div>
        </div>

        {/* Points Forts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Les Atouts du Cameroun
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Un pays, deux climats</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Au Nord et à l'Extrême Nord : climat tropical avec une saison des pluies légère et des températures élevées (30°C en moyenne)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Au Sud, les hauts plateaux occidentaux et les plaines côtières sont influencés par la mer et le relief avec des pluies abondantes et températures constantes (26°C en moyenne)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Végétation luxuriante</h3>
              <p className="text-gray-600">
                La forêt tropicale du Sud, les savanes, les montagnes et le Mont Cameroun 
                offrent une diversité écologique exceptionnelle.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Paysages renouvelés</h3>
              <p className="text-gray-600">
                Du nord avec ses steppes et Kapsikis, aux plages de sable de Kribi, 
                jusqu'au volcan actif du Mont Cameroun, le pays offre des paysages 
                à couper le souffle.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Animaux libres et protégés</h3>
                  <p className="text-gray-600">
                    Le Cameroun est un paradis pour la faune africaine avec ses 9 parcs nationaux 
                    et nombreuses réserves, abritant lions, girafes, éléphants, rhinocéros, gorilles et
                    bien plus encore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à découvrir le Cameroun ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Plongez au cœur de cette Afrique en miniature et découvrez ses trésors cachés
            </p>
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Planifier mon voyage
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AProposCameroun;