import React from "react";
import Footer from "../components/Footer";

const GuideVoyageCameroun = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Guides de voyage au Cameroun & Tour opérateurs
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez la richesse culturelle et naturelle du Cameroun, "l'Afrique en miniature"
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Histoire et culture */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Histoire et culture du Cameroun</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Cameroun a été formé en 1961 à partir de l'ancien Cameroun français
                et d'une partie du Cameroun britannique. La culture camerounaise est
                celle d'un peuple fier qui a beaucoup à offrir. De nombreux musées,
                reliques et monuments nationaux à travers le pays témoignent des
                différentes cultures qui ont façonné la nation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                L'artisanat occupe une place importante dans la culture camerounaise.
                Les habitants sont réputés pour leurs sculptures sur bois et leurs
                artefacts traditionnels, transmis de génération en génération.
              </p>
            </div>
          </div>
        </div>

        {/* Yaoundé et hauts lieux culturels */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Yaoundé et les hauts lieux culturels</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Le guide de voyage du Cameroun commence souvent à Yaoundé, la capitale,
              bâtie sur sept collines. Elle abrite la majorité des monuments nationaux
              ainsi que plusieurs musées, notamment le musée du Monastère bénédictin
              du Mont-Fébé et le Musée National de Yaoundé.
            </p>
          </div>
        </div>

        {/* Foumban et patrimoine Bamoun */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Foumban et le patrimoine Bamoun</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Foumban est célèbre pour ses bâtiments traditionnels et surtout pour
                le Palais Royal du Sultan Bamoun. Ce palais de style médiéval abrite un
                musée présentant bijoux anciens, costumes royaux, instruments de musique,
                statues et trônes historiques.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Foumban est également un centre majeur des arts et de l'artisanat du
                Cameroun. Les musées, marchés artisanaux et centres culturels valent
                largement le détour.
              </p>
            </div>
          </div>
        </div>

        {/* Festivals et traditions */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Festivals et traditions</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
            <p className="text-lg leading-relaxed">
              Le Cameroun organise chaque année un grand festival national non religieux,
              avec des défilés et célébrations populaires. La semaine culturelle Nso,
              célébrée en novembre à Kumbo, est marquée par des courses de chevaux et
              des manifestations culturelles uniques.
            </p>
          </div>
        </div>

        {/* Nord et Ouest du Cameroun */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Nord et Ouest du Cameroun</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Bafoussam est réputée pour son artisanat, notamment la sculpture sur bois.
                Maroua est connue pour ses grands marchés colorés, tandis que Bamenda,
                capitale du Nord-Ouest, est appréciée pour la randonnée et la célèbre
                Ring Road.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                À l'extrême nord, Rhumsiki offre des paysages montagneux spectaculaires
                et une immersion dans la culture Kirdi, restée intacte depuis des siècles.
              </p>
            </div>
          </div>
        </div>

        {/* Côte camerounaise */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Côte camerounaise</h2>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Limbe, située sur le golfe de Guinée, est connue pour ses plages de sable,
              son jardin botanique et son atmosphère paisible. Kribi et la plage de
              Londji figurent parmi les destinations balnéaires les plus populaires.
            </p>
          </div>
        </div>

        {/* Faune et nature */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Faune et nature du Cameroun</h2>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-700 text-lg mb-6">
              Surnommé « l'Afrique en miniature », le Cameroun possède une biodiversité
              exceptionnelle : savanes, forêts tropicales, plages, montagnes et prairies.
              Le pays compte de nombreux parcs nationaux et réserves naturelles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Parc national de Korup – forêt tropicale parmi les plus anciennes d'Afrique",
                "Réserve de faune du Dja – biodiversité exceptionnelle",
                "Parc national de Lobéké – gorilles, éléphants et antilopes",
                "Parc national de Waza – éléphants, lions et oiseaux migrateurs",
                "Parc national de la Bénoué – hippopotames, girafes et crocodiles"
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-blue-100">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Randonnée et escalade */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Randonnée et escalade</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Le Cameroun offre de nombreuses possibilités de randonnée et d'escalade.
                Le Mont Cameroun, volcan actif et plus haute montagne d'Afrique de l'Ouest,
                est une destination phare pour les amateurs d'aventure.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Les montagnes Mandara, la Dent de Mindif, Kribi et les jardins botaniques
                de Limbe proposent également de superbes itinéraires.
              </p>
            </div>
          </div>
        </div>

        {/* Paysages et diversité géographique */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Paysages et diversité géographique</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
            <p className="text-lg leading-relaxed">
              Les paysages camerounais sont d'une diversité impressionnante : plages
              de sable blanc, forêts denses, plaines semi-désertiques, montagnes volcaniques
              et hauts plateaux verdoyants. Chaque région offre une expérience unique.
            </p>
          </div>
        </div>

        {/* Les voyagistes camerounais */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Les voyagistes camerounais</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Les agences de voyages et tour-opérateurs camerounais constituent un
                véritable guichet unique pour organiser votre séjour : circuits touristiques,
                hôtels, vols, excursions et découvertes culturelles.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                Global Bush Travel and Tourism Agency vous accompagne dans la planification
                de votre voyage pour une expérience authentique et inoubliable au Cameroun.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à découvrir le Cameroun ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour planifier votre voyage sur mesure et vivre une expérience
              unique dans "l'Afrique en miniature"
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

export default GuideVoyageCameroun;