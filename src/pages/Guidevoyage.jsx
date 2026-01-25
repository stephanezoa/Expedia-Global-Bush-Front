// src/pages/Guidevoyage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Guidevoyage = () => {
  const sections = [
    {
      id: 1,
      title: "BAGAGES",
      content: "Espace bagages safari est limitée à une valise moyenne ou fourre-tout par personne, plus un bagage à main ( safaris privé où il y a moins de 5 personnes dans le véhicule ne sont pas soumis à cette restriction ) . Les visiteurs de Sommet des arbres et l'arche sont invités à prendre des sacs durant la nuit seulement. Les valises peuvent être laissés à l'hôtel de base . Hôtels généralement stocker les bagages sans frais supplémentaires , et les bagages peuvent également être stockés dans les bureaux de voyage Global Bush Voyage et Tourisme . Une restriction de poids des bagages de 15 kgs par personne s'applique sur les safaris aériens , et ce sont de très petits avions utilisés , cette restriction peut être réduite à 10 kg .",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "LA LANGUE",
      content: "Français et l'anglais sont les langues officielles du Cameroun , La langue française au Gabon , au Tchad et en République centrafricaine, Les langues anglaise et portugaise à Sao Tomé-et- Principe , espagnole et française en Guinée équatoriale , le français et en lingala langues officielles au Congo. En outre, la plupart des tribus ont leurs propres dialectes / langues . Tous les gens que vous allez interagir avec dans les hôtels , gîtes, l'aéroport et vos guides de pilote parleront couramment l'une ou l'autre des langues officielles ci-dessus. Les clients doivent préciser le temps quelle langue ils seront à l'aise avec lors de leur tournée . La plupart de nos chauffeurs et guides parlent l'anglais ou le français ou une langue locale appelée pidgin , alors que certains sont multilingues ; parlant couramment l'espagnol , l'allemand , l'italien , le portugais et le mandarin entre autres langues .",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "SANTÉ ET VACCINATION",
      content: "Puisque les règles relatives à la prévention de la maladie varient de temps en temps, la plupart des informations actuelles devrait être demandée à notre bureau par courriel et nous répondrons immédiatement, ou dans les autorités suivantes; les ambassades / hauts-commissariats du Cameroun, Gabon, Guinée équatoriale, Sao Tomé-et-Principe, Tchad, République du Congo, République démocratique du Congo et la République centrafricaine et les offices de tourisme ou de tout vol d'avion services réguliers dans ces pays de votre pays de résidence avant de voyager. Le paludisme est endémique dans la plupart des régions d'Afrique centrale et les visiteurs qui ont l'intention devrait commencer à prendre des comprimés antipaludiques avant le départ et devrait continuer de les prendre pour la période de temps prescrite après leur retour à la maison. Un anti-moustique est également conseillé. Si le médicament, il est préférable de prendre un approvisionnement en médicaments pour durer tout le voyage. La fièvre jaune vaccination est obligatoire; Cependant, nous vous recommandons de vérifier auprès des autorités locales que certains pays ne nécessitent pas leurs ressortissants pour immuniser contre la fièvre jaune.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 4,
      title: "BOIRE DE L'EAU",
      content: "Hôtels et eau potable Lodges Jeu d'approvisionnement en bouteilles thermos pour boire ou se brosser ; eau minérale en bouteille est largement disponible partout dans le pays à tous les supermarchés, lodges et hôtels , et nous recommandons fortement l'utilisation de l'eau minérale . S'il vous plaît ne pas consommer l'eau du robinet pendant votre voyage.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-blue-700 to-blue-900"
    },
    {
      id: 5,
      title: "DÉVISE",
      content: "Disques devises peuvent être échangés en espèces dans les banques partout dans ces pays , et dans la plupart des grands hôtels et lodges . US Dollars, Euro et Livres Sterling sont plus acceptables et provoquera le moindre retard . En tant que norme, toujours se renseigner sur ce que la commission et les frais seront déduits d'abord et avant transaction. Les banques sont ouvertes de 08h30 à 15h00 en semaine et de 09h00 à 12h00 le samedi. L'unité monétaire est le Franc CFA ( XAF ) au Cameroun , Gabon, Guinée Equatoriale , Tchad, République du Congo et la République centrafricaine . À Sao Tomé -et-Principe l'unité de la monnaie est Dobra (STD ) , en République démocratique du Congo est le franc congolais (CDF ) . Visitez notre page d'accueil pour votre taux de change les plus à jour. La plupart des cartes de crédit majeures telles que VISA , MASTERCARD et AMERICAN EXPRESS sont rarement acceptés pour les services touristiques dans tout le pays.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 6,
      title: "LA SÉCURITÉ",
      content: "Des précautions normales comme dans toute autre destination doivent être prises. Les visiteurs ne devraient jamais transporter de grosses sommes en espèces et les femmes devraient garder un contrôle serré sur leurs sacs à main dans les rues bondées ou occupé . Il est conseillé de ne pas laisser l'argent et objets de valeur dans votre chambre d'hôtel , mais d'utiliser des coffres-forts qui sont disponibles à un coût minime à tous les hôtels et lodges . Bijoux arraché est assez fréquent dans les rues bondées de la ville , et que de tels ornements très visibles devrait être évitée.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800"
    }
  ];

  const countries = [
    "Cameroun", 
    "Gabon", 
    "Guinée équatoriale", 
    "Sao Tomé-et-Principe", 
    "Tchad", 
    "République du Congo", 
    "République démocratique du Congo", 
    "République centrafricaine"
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              to="/preparer-son-voyage"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à Préparer son Voyage
            </Link>
          </div>

          {/* En-tête principal */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white text-sm font-semibold mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Guide Complet
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
              Guide de Voyage pour tous les Pays d'Afrique Centrale
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            
            {/* Liste des pays */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {countries.map((country, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Informations Essentielles</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le Guide de Voyage Afrique centrale fera votre Voyage à ces pays plus facile , un succès et plus informatif . Voici quelques conseils de voyage qui seront utiles lors de la préparation de vos vacances dans ces régions. Alors que nous nous efforçons de mettre à jour ces informations le plus rapidement possible , nous vous conseillons de consulter l'ambassade ou le bureau consulaire pour des informations à jour que certaines de ces informations peuvent changer avec le temps . Cette information vous aide à préparer vos vacances et être conscient de ce qui vous attend lors de l'atterrissage dans les pays d'Afrique centrale suivants ; Cameroun, Gabon, Guinée équatoriale, Sao Tomé-et- Principe , Tchad, République du Congo, République démocratique du Congo et la République centrafricaine .
                </p>
              </div>
            </div>
          </div>

          {/* Grille des sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 transform hover:-translate-y-1"
              >
                {/* En-tête de la carte */}
                <div className="relative px-8 pt-8 pb-6">
                  {/* Numéro en arrière-plan */}
                  <div className="absolute top-0 right-0 text-[120px] font-black text-blue-50 opacity-50 leading-none transform -translate-y-4 translate-x-4">
                    {section.id < 10 ? `0${section.id}` : section.id}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start mb-6">
                      {/* Icône */}
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {section.icon}
                        </div>
                      </div>
                      
                      {/* Titre */}
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors leading-tight">
                          {section.title}
                        </h2>
                        <div className="flex items-center mt-2">
                          <div className={`w-8 h-1 bg-gradient-to-r ${section.color} rounded-full`}></div>
                          <div className="text-xs text-blue-600 font-medium ml-2">Section {section.id}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="prose prose-blue max-w-none">
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Bordure colorée au hover */}
                <div className={`h-1 w-full bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Section téléchargement */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white mb-16 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-32 translate-y-32"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Télécharger le Guide Complet</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Téléchargez notre Guide de Voyage Afrique centrale
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                <p className="text-blue-100 text-lg mb-4">
                  Êtes-vous intéressé par un Safari ou visitez l'une de nos pays d'Afrique centrale ou nos destinations ?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="bg-white/20 rounded-lg px-4 py-3">
                    <p className="font-semibold">Pour les prix et réservation, contactez-nous :</p>
                    <a 
                      href="mailto:info@globalbushtratour.com" 
                      className="text-yellow-300 hover:text-yellow-200 font-bold text-lg transition-colors"
                    >
                      info@globalbushtratour.com
                    </a>
                  </div>
                  <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    Télécharger le PDF
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-blue-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Guide mis à jour régulièrement</span>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Informations pratiques et vérifiées</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-200">
            <Link
              to="/chauffeursguides"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Précédent : Chauffeurs & Guides
            </Link>
            
            <div className="hidden md:flex items-center text-blue-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Temps de lecture estimé : 15 min</span>
            </div>
            
            <Link
              to="/dosdonts"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Suivant : Do's & Don'ts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Guidevoyage;