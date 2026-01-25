// src/pages/Raison12.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Raison12 = () => {
  const reasons = [
    {
      id: 1,
      title: "Cautionnement Financier",
      content: "Être membre de l'Association Voyage africain , ( ATA ) nous sommes entièrement assurés pour votre protection financière, et planifier ainsi votre voyage Africain de Tourisme. Soyez assurer que vous voyagez, avec Global Bush Voyage et tourisme , votre argent est entièrement garanti avant, pendant et après votre visite . Ceci est essentiel dans le voyage d'aujourd'hui et assure que vous vous concentrez à profiter de votre visite plutôt que de se soucier de vos finances dans le souci d'aujourd'hui un certain climat financier .",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Votre itinéraire africain par une équipe Africaine",
      content: "Comme vous planifiez votre voyage, nous sommes votre choix comme nous connaissons le Cameroun et d'autres pays de l'Afrique Centrale au bout de nos doigts. Nous sommes des Africains autochtones nés et ont grandi dans les villages africains et avec la nature imprévisible de l'aventure où les itinéraires peuvent changer facilement et rapidement en raison des événements ou des conditions locales , vous êtes entre de bonnes mains avec Global Bush Voyage et Guides du pilote du tourisme et back office up équipe. Tous nos guides de pilotes sont des professionnels avec des certificats légalement approuvés par le ministère du Tourisme Cameroun ( MINTOUR )",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "La réputation n'est plus à démontrer",
      content: "Les témoignages de nos clients et partenaires sont des indicateurs claires des raisons pour laquelle nous disons que la réputation est tout. Nos années d'expérience , des services de haute qualité , l'exploitation et la connaissance intime de toutes nos destinations a fait de l'Agence de Voyage et de Tourisme Global Bush l'un des meilleurs voyagistes au Cameroun et en Afrique centrale .",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Chaque Voyage Raconte une Histoire",
      content: "Nous croyons fermement à voyager de façon responsable , en laissant une empreinte positive dans nos voyages et nous encourageons également nos clients à faire de même : Cela inclut , en minimisant l'impact sur les personnes , la faune et l'environnement dans les destinations auxquelles nous voyageons. Si possible, nous encourageons nos clients à faire un don au cours de leur safaris directement aux communautés que nous visitons .",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Offre de Rapport qualité-prix",
      content: "Notre gamme de vacances vous permet de choisir un style qui convient à votre budget et le niveau de confort et nous nous efforçons de livrer à vos attentes , sinon au-delà. La qualité, les vacances impeccables et inoubliables sont la meilleure récompense que nous vous offrons; c'est la valeur pour votre argent où vous êtes assis et aimez chaque jour sans craintes de qualité",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Planifiez votre voyage",
      content: "L'Agence de Voyage et tourisme Global Bush offre la tranquillité d'esprit avec notre grande variété de choix pour les options de voyage , vous pouvez choisir notre départ fixe ou nos circuits sur mesure où vous prévoyez votre étape de safari par étape avec la direction de l'un de nos nombreux consultants de voyages . Nous vous fournissons également toutes les informations pré- Voyage nécessaire, et les documents touristiques détaillées, une tournée itinéraire complet ainsi que des services supplémentaires à choisir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Société privée",
      content: "Global Bush Voyage et tourisme est une société privée qui a un des membres loyaux et dévoués sur le terrain et l'équipe de bureau avec une passion pour l'Afrique centrale et du Cameroun en particulier. Par conséquent , nous sommes très attentifs et flexible et prêt à offrir des services personnels et aller mile supplémentaire à la fois pour vous aider avec votre réservation , et de veiller à ce que toutes vos attentes de tournée en Afrique centrale devient réalité , vous laissant avec une mémoire positive de l'Afrique .",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Adventure fait ressortir la vie en vous",
      content: "Chez Global Bush Voyage et tourisme, nous croyons en une fête qui fournit l'aventure et rafraîchir vos sens . Tous nos forfaits sont adaptés faits pour vous donner une véritable idée de l'un des pays d'Afrique centrale , de leurs populations et leur environnement que vous visitez. De Escalade Mt Cameroun ou Mt Mandara Bush Camping dans les cultures étonnantes et anciennes comme les Baka et pygmées Badgeli dans la jungle de l'Est , l' Mbororo nomade sur les provinces de l'Adamaoua et du Nord , l' Komas animiste dans les montagnes Alantika , mais aussi bantous , Kom , tikars et beaucoup plus. Nous espérons notre aventure va pimenter votre vie .",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 9,
      title: "Variété Garantit Tout le monde est pris en charge",
      content: "Chez Global Bush Voyage et tourisme, nous croyons fermement que nous devrions être aussi divers que nos marchés . Nous offrons une grande variété de produits qui répondent à tout le monde sur le marché . De Camping Basic luxe 5 étoiles tous les forfaits tout compris , de la simple aventure à des expériences d'aventure de haut niveau",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 10,
      title: "La vérité est amère parfois pourtant nous devons nous dire les choses clairement",
      content: "En arrivant dans un pays étranger pour la première fois peut être rempli avec beaucoup de doutes sur la façon dont les choses fonctionnent et les coutumes locales peuvent être difficiles à comprendre. Sur certains de nos hébergements de voyages peut être assez basique ; voyages de nuit peut être fatigant ; tous ces aspects et plus peuvent être transformés en expériences positives si vous savez à quoi vous attendre et sont préparés pour cela. Nous essayons toujours d'offrir des conseils sur les choses que vous avez vraiment besoin de savoir et nous allons également vous dire si nous pensons que vous faites un choix judicieux quant au voyage est le plus adapté à vos besoins.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 11,
      title: "Sur le terrain, nous travaillons pour vous",
      content: "Nous allons prendre soin des détails car nous avons obtenu un hébergement de qualité et pris des dispositions pour le transport, les excursions , les frais d'entrée , la plupart des repas et des barrières de péage . Nous prenons soin des détails afin que vous puissiez vous détendre, profiter , et plongez-vous dans l'émerveillement des lieux que vous explorez",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 12,
      title: "Voyage avec les experts",
      content: "L'expérience pour voir les endroits à travers les yeux d'un expert est grand . Notre équipe d'experts en voyage constitue des gens compétents portant un profond sentiment de compréhension d'une région à découvrir. Ainsi vous obtenez le point de vue d'un initié et leur enthousiasme capable rend votre voyage inoubliable.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Bouton retour */}
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

          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white text-sm font-semibold mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Les 12 raisons
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
              12 raisons de planifier votre voyage Africain de Tourisme avec nous
            </h1>
            
            <div className="flex justify-center mb-10">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
              Découvrez pourquoi nous sommes le partenaire idéal pour votre aventure en Afrique centrale
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
              <span>12 raisons exclusives</span>
            </div>
          </div>

          {/* Grille des raisons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div 
                key={reason.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 transform hover:-translate-y-1"
              >
                {/* En-tête de la carte avec numéro */}
                <div className="relative px-8 pt-8 pb-6">
                  {/* Numéro en arrière-plan */}
                  <div className="absolute top-0 right-0 text-[200px] font-black text-blue-50 opacity-50 leading-none transform -translate-y-8 translate-x-4">
                    {reason.id < 10 ? `0${reason.id}` : reason.id}
                  </div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="flex items-start mb-6">
                      {/* Icône */}
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {reason.icon}
                        </div>
                      </div>
                      
                      {/* Titre */}
                      <div>
                        <h2 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors leading-tight pr-8">
                          {reason.title}
                        </h2>
                        <div className="flex items-center mt-2">
                          <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                          <div className="text-xs text-blue-600 font-medium ml-2">Raison #{reason.id}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="prose prose-blue max-w-none">
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {reason.content}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Pied de carte avec bordure colorée */}
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-blue-100">
                    <div className="flex items-center text-blue-600 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Avantage exclusif Global Bush</span>
                    </div>
                  </div>
                </div>
                
                {/* Bordure colorée au hover */}
                <div className={`h-1 w-full bg-gradient-to-r ${index % 3 === 0 ? 'from-blue-400 to-blue-600' : index % 3 === 1 ? 'from-blue-500 to-blue-700' : 'from-blue-600 to-blue-800'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Section de conclusion */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white mb-16 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-32 translate-y-32"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Conclusion</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Prêt à vivre l'Afrique avec nous ?
              </h3>
              
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Ces 12 raisons démontrent notre engagement à vous offrir une expérience africaine authentique, 
                sécurisée et mémorable. Global Bush Voyage et Tourisme, votre partenaire de confiance en Afrique centrale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contactez-nous pour votre voyage
                </Link>
                <Link 
                  to="/destinations" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Découvrir nos destinations
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-200">
            <Link
              to="/preparer-son-voyage"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à Préparer son Voyage
            </Link>
            
            <div className="text-blue-700 font-semibold">
              <span className="text-blue-900">12</span> raisons exclusives
            </div>
            
            <Link
              to="/chauffeursguides"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Suivant : Nos Chauffeurs & Guides
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

export default Raison12;