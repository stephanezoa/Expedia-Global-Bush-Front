// src/pages/FAQ.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "Qui sommes-nous et quels sont nos arrangements de safari ?",
    answer: "Nous sommes une agence reconnue par le gouvernement et officiellement enregistrée auprès du Ministère du Tourisme du Cameroun (MINTOUR). Nous représentons plusieurs destinations d'Afrique centrale et nous nous distinguons par notre passion, notre connaissance approfondie et notre professionnalisme. Nous organisons tous les arrangements de safari, y compris les hôtels ou lodges, les véhicules, les repas et tous les services nécessaires pour garantir le succès de votre voyage.",
    category: "À propos de nous",
    icon: "🏢"
  },
  {
    question: "Pourquoi devrais-je faire un safari en Afrique centrale ?",
    answer: "L'Afrique centrale reste encore une destination authentique et peu explorée pour de nombreux voyageurs. Elle offre une richesse exceptionnelle : parcs nationaux, forêts tropicales, plages, musées traditionnels, expériences culturelles, écotourisme, randonnées et safaris. Le Cameroun en particulier propose une combinaison unique de faune sauvage et de diversité culturelle, pour une expérience de voyage inoubliable.",
    category: "Safari",
    icon: "🦁"
  },
  {
    question: "Pourquoi parle-t-on des Lions ?",
    answer: "Le lion est un symbole de puissance et d'unité au Cameroun. Il représente la force collective du peuple camerounais. Par ailleurs, lors des safaris, les « Big Five » (lion, léopard, éléphant, rhinocéros et buffle) figurent parmi les animaux les plus recherchés. Cette appellation remonte à l'époque de la chasse traditionnelle, où ces animaux étaient considérés comme les plus dangereux à affronter.",
    category: "Safari",
    icon: "🦁"
  },
  {
    question: "À quoi ressemble la formation géographique ?",
    answer: "L'Afrique centrale est composée de montagnes, de plateaux, de savanes, de volcans éteints, de lacs et de rivières. On y trouve des massifs célèbres comme le Mont Cameroun, le Mont Manengouba et les Monts Mandara, ainsi que des plaines côtières avec de magnifiques plages. Les itinéraires peuvent couvrir une ou plusieurs régions selon vos préférences.",
    category: "Géographie",
    icon: "🗺️"
  },
  {
    question: "Quelles sont les conditions des routes ?",
    answer: "Au Cameroun et dans plusieurs pays d'Afrique centrale, les principales routes sont goudronnées et accessibles, bien que certaines soient en état moyen. Dans les parcs nationaux et réserves, les routes sont généralement en terre, offrant une véritable immersion dans la nature.",
    category: "Transport",
    icon: "🚗"
  },
  {
    question: "Quelle est la différence de temps en Afrique centrale ?",
    answer: "L'Afrique centrale est située dans le fuseau horaire GMT +1.",
    category: "Informations pratiques",
    icon: "⏰"
  },
  {
    question: "Quelles langues sont couramment parlées ?",
    answer: "Le Cameroun est un pays bilingue où le français et l'anglais sont les langues officielles. Dans d'autres pays d'Afrique centrale, on parle également le portugais ou l'espagnol, en plus des langues locales. Dans le secteur du tourisme, de nombreux guides parlent aussi l'allemand, l'italien, l'espagnol, le chinois, le russe et d'autres langues.",
    category: "Langues",
    icon: "🗣️"
  },
  {
    question: "Quelles compagnies aériennes desservent l'Afrique centrale ?",
    answer: "Plusieurs grandes compagnies aériennes desservent l'Afrique centrale, notamment Air France, Turkish Airlines, Ethiopian Airlines, Royal Air Maroc, Kenya Airways, Brussels Airlines et South African Airways. Des compagnies régionales assurent également des liaisons entre les pays.",
    category: "Transport",
    icon: "✈️"
  },
  {
    question: "Quels sont les principaux aéroports ?",
    answer: "Chaque pays d'Afrique centrale dispose d'au moins un aéroport international majeur, utilisé par les voyageurs venant de l'intérieur et de l'extérieur de la région.",
    category: "Transport",
    icon: "🏢"
  },
  {
    question: "Ai-je besoin d'une assurance voyage ?",
    answer: "Il est fortement recommandé de souscrire à une assurance voyage avant de visiter l'Afrique centrale. Elle couvre les évacuations d'urgence, les imprévus médicaux, les retards de vols, ainsi que la perte ou le retard de bagages.",
    category: "Sécurité",
    icon: "🛡️"
  },
  {
    question: "Quel est le meilleur moment pour voyager en safari ?",
    answer: "Les safaris sont possibles toute l'année. Cependant, la période de mai à octobre est idéale pour le Cameroun, tandis que d'avril à juin et de septembre à octobre conviennent mieux aux autres pays d'Afrique centrale. Ces périodes offrent une meilleure visibilité de la faune.",
    category: "Safari",
    icon: "📅"
  },
  {
    question: "Quelles sont les exigences d'entrée au Cameroun ?",
    answer: "Un visa est généralement requis pour entrer au Cameroun. Il peut être obtenu auprès des ambassades ou consulats. Dans certains cas, un visa à l'arrivée est possible avec un pré-arrangement. Nous vous accompagnons volontiers dans les démarches nécessaires.",
    category: "Formalités",
    icon: "📋"
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [filter, setFilter] = useState("Toutes");

  const categories = ["Toutes", ...new Set(faqs.map(faq => faq.category))];
  const filteredFAQs = filter === "Toutes" ? faqs : faqs.filter(faq => faq.category === filter);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Questions & Réponses
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
              Questions Fréquemment Posées (FAQ)
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Vous trouverez ci-dessous les réponses aux questions les plus fréquemment posées par nos clients.
              Si votre question ne figure pas ici, n'hésitez pas à nous contacter.
            </p>
            
            <div className="flex items-center justify-center text-blue-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{faqs.length} questions fréquentes</span>
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
              >
                {category}
                {category !== "Toutes" && (
                  <span className="ml-2 px-2 py-0.5 bg-white/30 rounded-full text-xs">
                    {faqs.filter(faq => faq.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Liste des FAQ */}
          <div className="space-y-6 mb-16">
            {filteredFAQs.map((faq, index) => {
              const globalIndex = faqs.findIndex(f => f.question === faq.question);
              return (
                <div 
                  key={globalIndex} 
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100 ${
                    openIndex === globalIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(globalIndex)}
                    className="w-full text-left p-6 flex justify-between items-start hover:bg-blue-50/50 transition-colors duration-300"
                  >
                    <div className="flex items-start flex-1">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-lg shadow-lg">
                          {faq.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {faq.category}
                          </span>
                          <span className="ml-3 text-sm text-blue-600 font-medium">
                            Question {globalIndex + 1}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === globalIndex 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white' 
                          : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                      }`}>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === globalIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="pl-16 border-l-2 border-blue-200 ml-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-start mb-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                        
                        {/* Information supplémentaire */}
                        <div className="flex items-center mt-4 text-sm text-blue-600">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>Cette réponse vous a-t-elle été utile ?</span>
                          <button className="ml-4 text-blue-800 hover:text-blue-900 font-medium">
                            Oui
                          </button>
                          <button className="ml-2 text-blue-800 hover:text-blue-900 font-medium">
                            Non
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section contact */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white mb-16 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-32 translate-y-32"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Question supplémentaire ?</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Vous ne trouvez pas la réponse à votre question ?
              </h3>
              
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans la préparation de votre voyage.
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
                  Nous contacter
                </Link>
                <Link 
                  to="/preparer-son-voyage" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                  </svg>
                  Voir nos guides
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-200">
            <Link
              to="/dosdonts"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Précédent : Do's & Don'ts
            </Link>
            
            <div className="hidden md:flex items-center text-blue-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{filteredFAQs.length} questions dans cette catégorie</span>
            </div>
            
            <Link
              to="/developpementdurable"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Suivant : Développement Durable
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Statistiques */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">{faqs.length}</div>
              <div className="text-sm text-gray-600">Questions totales</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Catégories</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">8</div>
              <div className="text-sm text-gray-600">Pays couverts</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support disponible</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;