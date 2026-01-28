import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Solutions = () => {
  const solutions = [
    { id: 1, title: "Appartement au Cameroun", path: "/appartement", icon: "🏠", description: "Location et gestion d'appartements" },
    { id: 2, title: "Séminaire", path: "/seminaire", icon: "📊", description: "Organisation de séminaires professionnels" },
    { id: 3, title: "Hôtels", path: "/hotels2", icon: "🏨", description: "Réservations et partenariats hôteliers" },
    { id: 4, title: "Transfert aéroport", path: "/transfert2", icon: "✈️", description: "Service de navette aéroport" },
    { id: 5, title: "Location voiture", path: "/locations2", icon: "🚗", description: "Véhicules avec ou sans chauffeur" },
    { id: 6, title: "Assistance visa", path: "/assistance", icon: "📋", description: "Aide aux démarches administratives" },
    { id: 7, title: "Service DMC", path: "/dmc", icon: "🤝", description: "Gestion de destination" },
    { id: 8, title: "Forfait voyage", path: "/forfait", icon: "🎒", description: "Packages vacances tout compris" },
    { id: 9, title: "Création entreprise", path: "/creation", icon: "💼", description: "Accompagnement juridique" },
    { id: 10, title: "Service de paie", path: "/service", icon: "💰", description: "Gestion de la paie" },
    { id: 11, title: "Recrutement", path: "/recrutement", icon: "👥", description: "Placement de personnel qualifié" },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Animation d'entrée des cartes
    const timer = setTimeout(() => {
      setVisibleCards(solutions.map(s => s.id));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section avec effet parallax */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        {/* Effets décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block">Nos</span>
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Découvrez notre gamme complète de services conçus pour répondre à tous vos besoins
            </p>
            <div className="pt-8">
              <div className="inline-flex items-center space-x-2 animate-bounce">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Services Premium
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explorez nos <span className="text-blue-600">services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sélectionnez un service pour découvrir nos solutions sur mesure et nos offres exclusives
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`relative transition-all duration-500 ${
                visibleCards.includes(solution.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${solution.id * 100}ms` }}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link
                to={solution.path}
                className="block group"
              >
                <div className={`relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 transition-all duration-300 transform ${
                  hoveredCard === solution.id ? 'scale-[1.02] border-blue-400 shadow-xl' : 'border-blue-100'
                }`}>
                  {/* Effet de bordure animé */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge supérieur */}
                  <div className="absolute -top-3 left-6">
                    <div className="px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                      Service {solution.id}
                    </div>
                  </div>
                  
                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col space-y-6">
                      {/* Icone avec effet */}
                      <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 ${
                        hoveredCard === solution.id 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white transform -translate-y-1' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        {solution.icon}
                      </div>
                      
                      {/* Contenu */}
                      <div className="space-y-4">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          hoveredCard === solution.id ? 'text-blue-700' : 'text-gray-900'
                        }`}>
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                      
                      {/* Bouton d'action */}
                      <div className="pt-4">
                        <div className={`inline-flex items-center font-semibold transition-all duration-300 ${
                          hoveredCard === solution.id ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          <span className="mr-2">Découvrir</span>
                          <div className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                            hoveredCard === solution.id 
                              ? 'bg-blue-100 text-blue-600 transform translate-x-1' 
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Effet de fond au survol */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 md:py-28">
        {/* Effets décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Besoin d'un conseil personnalisé ?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Notre équipe d'experts est à votre disposition pour vous accompagner dans le choix de la solution la plus adaptée à vos besoins.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6">
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>Contactez-nous</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Découvrir notre entreprise</span>
                    <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              <div className="pt-8 border-t border-gray-100">
                <p className="text-gray-500 text-sm">
                  Réponse sous 24h • Support 7j/7 • Experts dédiés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Solutions;