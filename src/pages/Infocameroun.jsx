import React from "react";
import Footer from "../components/Footer";

const InfoCameroun = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Cameroun : Aide aux visas et informations pratiques
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Toutes les informations essentielles pour préparer votre voyage au Cameroun
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Formalités */}
          <div className="lg:col-span-2">
            {/* Passeports Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">Passeports</h2>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-lg text-gray-700 font-medium">
                  Passeports valides pour un minimum de 6 mois requis par tous.
                </p>
              </div>
            </div>

            {/* Visa Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">Visa</h2>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Visas Cameroun Obligatoires pour tous sauf :
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">(a)</span>
                    <span className="text-gray-600">
                      les ressortissants de la République centrafricaine, du Tchad, du Congo,
                      de la Guinée équatoriale et du Gabon pour un séjour n'excédant pas 90 jours ;
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">(b)</span>
                    <span className="text-gray-600">
                      Ceux en transit, détenant des billets en avant et continuant leur voyage
                      sur le premier ou le même avion dans les 24 heures et à condition de ne pas
                      quitter l'aéroport.
                    </span>
                  </div>
                </div>
              </div>

              {/* Types de visas */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </span>
                  Types de visas :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-medium text-blue-900">Visa de tourisme camerounais</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-medium text-blue-900">Visa de transit</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-medium text-blue-900">Visa d'affaires</p>
                  </div>
                </div>
              </div>

              {/* Validité */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Validité :</h3>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-gray-700">
                    Les visas de court séjour sont valables jusqu'à 1 mois et les visas de
                    moyen séjour jusqu'à 3 mois. Les deux types de visa doivent être utilisés
                    dans les 3 mois suivant leur délivrance. Les demandes ou prolongations
                    doivent être adressées à l'Ambassade.
                  </p>
                </div>
              </div>

              {/* Conditions d'application */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </span>
                  Conditions d'application :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Passeport valide",
                    "2 formulaires de demande remplis",
                    "2 photos format passeport",
                    "Copie du billet",
                    "Preuve de réservation d'hôtel",
                    "Pour un visa d'affaires : lettre de la société du demandeur et lettre des partenaires commerciaux au Cameroun"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-blue-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jours ouvrés requis */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Jours ouvrés requis :</h3>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <p className="text-gray-700">
                    24 heures si la demande est remise en main propre, quelques jours si par la poste.
                  </p>
                </div>
              </div>

              {/* Résidence temporaire */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Résidence temporaire :</h3>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-gray-700">
                    Les candidats doivent avoir un permis de séjour et de travail. Postuler auprès
                    des autorités de l'immigration au Cameroun.
                  </p>
                </div>
              </div>
            </div>

            {/* S'y rendre Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-900">S'y rendre</h2>
              </div>

              <div className="space-y-6">
                {/* Air */}
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Air :
                  </h3>
                  <p className="text-gray-700">
                    La compagnie nationale est Camair-Co Airlines. Autres compagnies : Air France,
                    Nigeria Airways, Air Afrique, Ethiopian Airlines, South African Airlines,
                    Afriqiyah, Swiss Air, Kenya Airline, SN Brussels, Air Maroc.
                    <br />
                    <span className="font-semibold text-blue-900 mt-2 inline-block">
                      Aéroports internationaux : Douala (DLA) et Nsimalen (NSI, Yaoundé).
                    </span>
                  </p>
                </div>

                {/* Mer */}
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    Mer :
                  </h3>
                  <p className="text-gray-700">
                    Traversées irrégulières des ports européens à Douala prennent jusqu'à trois
                    semaines, avec escales dans les îles Canaries et ports d'Afrique de l'Ouest.
                  </p>
                </div>

                {/* Rail */}
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Rail :
                  </h3>
                  <p className="text-gray-700">
                    Le réseau ferroviaire relie Douala à Yaoundé et Ngaoundéré. Trains lents mais bon marché.
                  </p>
                </div>

                {/* Route */}
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Route :
                  </h3>
                  <p className="text-gray-700">
                    Routes goudronnées principales entre Douala, Yaoundé, Limbé, Buéa, Bafoussam et Bamenda.
                    D'autres routes mal entretenues pendant la saison des pluies. Véhicules 4x4 recommandés.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Informations pratiques */}
          <div className="lg:col-span-1">
            {/* Se déplacer Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                Se déplacer
              </h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">Air :</strong> Vols quotidiens entre Douala et Yaoundé ; vols moins réguliers vers d'autres villes.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">Rail :</strong> Trains quotidiens Douala-Yaoundé, Douala-Nkongsamba, certains avec couchettes et climatisation.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">Route :</strong> Bus modernes disponibles entre villes principales et zones rurales. Voiture avec/sans chauffeur disponible à Douala, Yaoundé et Limbe.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">Urban :</strong> Bus et taxis dans les grandes villes, tarifs fixes.</p>
                </div>
              </div>
            </div>

            {/* Divertissement Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Divertissement
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-1">Nourriture et boisson :</h4>
                  <p className="text-gray-600 text-sm">Cuisine française, libanaise et locale. Fruits abondants. Hôtels avec bars ouverts, souvent sans restriction horaire.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-1">Vie nocturne :</h4>
                  <p className="text-gray-600 text-sm">Discothèques, casinos, cinémas à Douala et Yaoundé.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-1">Achats :</h4>
                  <p className="text-gray-600 text-sm">Artisanat local : pots, cornes à boire, cruches, tasses, plateaux, tapis, bijoux et vêtements en coton/perlage.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-1">Sports :</h4>
                  <p className="text-gray-600 text-sm">Pêche, chasse réglementée, golf, tennis, football populaire.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-1">Conventions sociales :</h4>
                  <p className="text-gray-600 text-sm">Poignée de main habituelle, respecter traditions locales, photographier avec discretion, pourboires ~10%.</p>
                </div>
              </div>
            </div>

            {/* Vacances Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                Vacances et événements
              </h2>
              
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Ramadan",
                  "Jour de l'An",
                  "11 février : Journée de la jeunesse",
                  "Vendredi Saint",
                  "Lundi de Pâques",
                  "1er mai : Fête du travail",
                  "Jour de l'Ascension",
                  "20 mai : Fête nationale",
                  "Noël"
                ].map((event, index) => (
                  <div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span>{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-900">Informations importantes</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Toutes les informations sont susceptibles de changer. Veuillez vérifier les exigences actuelles auprès de l'ambassade du Cameroun avant votre voyage.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d'aide pour vos formalités ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Notre équipe est disponible pour vous accompagner dans toutes les démarches administratives pour votre voyage au Cameroun.
            </p>
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contacter un conseiller
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InfoCameroun;