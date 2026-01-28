import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Car, 
  Plane, 
  MapPin, 
  Clock, 
  Shield,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Users,
  CreditCard,
  Luggage,
  Wifi,
  Coffee,
  Building,
  Star,
  Award,
  TrendingUp,
  Calendar,
  Navigation,
  Headphones,
  Zap
} from "lucide-react";

const Transfert2 = () => {
  const [activeTab, setActiveTab] = useState("services");

  const transferServices = [
    {
      icon: <Car size={28} className="text-blue-600" />,
      title: "Transfert Privé",
      description: "Voiture privée avec chauffeur professionnel",
      price: "À partir de 25.000 XAF",
      details: ["Direct aéroport-hôtel", "Chauffeur francophone", "Suivi vol inclus", "Assistance bagages"],
      features: ["Climatisation", "WiFi gratuit", "Eau minérale", "Journal"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users size={28} className="text-green-600" />,
      title: "Navette Partagée",
      description: "Service économique en groupe réduit",
      price: "À partir de 15.000 XAF",
      details: ["Groupes 4-8 personnes", "Départs réguliers", "Arrêts multiples", "Économique"],
      features: ["Climatisation", "Assurance", "Ponctualité", "Confort"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield size={28} className="text-purple-600" />,
      title: "VIP Executive",
      description: "Service premium pour cadres et dirigeants",
      price: "À partir de 50.000 XAF",
      details: ["Véhicule haut de gamme", "Chauffeur en tenue", "Boissons premium", "Service prioritaire"],
      features: ["Bar à bord", "WiFi haut débit", "Chargeurs USB", "Espace travail"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Building size={28} className="text-orange-600" />,
      title: "Transfert Inter-Villes",
      description: "Trajets entre Yaoundé et Douala",
      price: "À partir de 35.000 XAF",
      details: ["Yaoundé ↔ Douala", "Horaires flexibles", "Arrêts sur demande", "Grands bagages"],
      features: ["Climatisation", "Confort garanti", "Assurance", "Pause café"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const airports = [
    {
      name: "Aéroport Nsimalen",
      city: "Yaoundé",
      code: "NSI",
      distance: "25 km du centre-ville",
      services: ["24/7", "WiFi gratuit", "Assistance francophone", "Suivi vol"],
      icon: "🏛️"
    },
    {
      name: "Aéroport International",
      city: "Douala",
      code: "DLA",
      distance: "10 km du centre-ville",
      services: ["24/7", "Réservation instantanée", "Assistance multilingue", "Bagages"],
      icon: "🏙️"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Réservation",
      description: "Réservez en ligne ou par téléphone",
      icon: <Calendar size={24} />
    },
    {
      step: "02",
      title: "Confirmation",
      description: "Recevez votre confirmation immédiate",
      icon: <CheckCircle size={24} />
    },
    {
      step: "03",
      title: "Accueil",
      description: "Notre chauffeur vous attend avec pancarte",
      icon: <Users size={24} />
    },
    {
      step: "04",
      title: "Transfert",
      description: "Voyage confortable vers votre destination",
      icon: <Car size={24} />
    },
    {
      step: "05",
      title: "Arrivée",
      description: "Assistance jusqu'à votre hébergement",
      icon: <Building size={24} />
    }
  ];

  const benefits = [
    "Service 24h/24 et 7j/7",
    "Chauffeurs professionnels certifiés",
    "Suivi des vols en temps réel",
    "Pas de frais cachés",
    "Annulation gratuite jusqu'à 2h avant",
    "Assistance téléphonique permanente"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2">
                <Plane size={20} />
                <span className="text-sm font-medium">Transferts Aéroport & Ville</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Transferts</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Aéroport Cameroun
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Voyagez en toute sérénité dès votre arrivée au Cameroun. 
                Service de transfert professionnel 24h/24 depuis les aéroports 
                de Yaoundé et Douala vers votre destination.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Réserver maintenant</span>
                </Link>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Voir nos services
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <TrendingUp size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Service Premium</h3>
                        <p className="text-blue-200">Yaoundé & Douala</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <p className="text-sm text-blue-200">Service disponible</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">0</div>
                        <p className="text-sm text-blue-200">Attente minimale</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">100%</div>
                        <p className="text-sm text-blue-200">Ponctualité</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">500+</div>
                        <p className="text-sm text-blue-200">Transferts/mois</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Service disponible 365 jours par an, y compris jours fériés
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["services", "airports", "process", "benefits"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "services" && "Nos Services"}
              {tab === "airports" && "Aéroports"}
              {tab === "process" && "Processus"}
              {tab === "benefits" && "Avantages"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeTab === "services" && (
            <div id="services" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Nos Services de Transfert
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Choisissez le service qui correspond le mieux à vos besoins et votre budget
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {transferServices.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-blue-900 mb-1">{service.price}</div>
                      <p className="text-gray-600 text-sm">Transfert aller simple</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Inclus :</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.details.map((detail, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Équipements :</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                      Réserver ce service
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Ne perdez plus de temps à préparer vos transferts !
                    </h3>
                    <p className="text-gray-700">
                      Réservez une voiture climatisée privée ou une navette avec nous avant votre voyage 
                      pour éviter d'avoir à en chercher une par vous-même.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Réserver Maintenant
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "airports" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Aéroports Desservis
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Service disponible depuis les principaux aéroports internationaux du Cameroun
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {airports.map((airport, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-4xl">{airport.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900">{airport.name}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} className="text-blue-600" />
                            <span className="text-gray-600">{airport.city}</span>
                          </div>
                          <div className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-bold rounded">
                            {airport.code}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Navigation size={16} className="text-blue-600" />
                        <span className="font-semibold text-gray-900">{airport.distance}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Services spécifiques :</h4>
                        <div className="flex flex-wrap gap-2">
                          {airport.services.map((service, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 text-sm font-medium">Transfert vers centre-ville</span>
                        <span className="font-bold text-blue-900">À partir de 25.000 XAF</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                    <p className="text-gray-700">Service disponible</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">15min</div>
                    <p className="text-gray-700">Attente maximale</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                    <p className="text-gray-700">Satisfaction client</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Comment ça marche ?
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  5 étapes simples pour un transfert sans stress
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                
                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <div 
                      key={step.step}
                      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      {/* Step content */}
                      <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {step.step}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-blue-900">{step.title}</h3>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Empty spacer for opposite side */}
                      <div className="lg:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Informations importantes
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">À votre arrivée :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Notre chauffeur vous attend avec une pancarte nominative</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Assistance pour vos bagages</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Mise à disposition d'eau fraîche</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">En cas de retard :</h4>
                    <p className="text-gray-700 mb-4">
                      Notre service inclut le suivi des vols en temps réel. 
                      Pas de frais supplémentaires en cas de retard de vol.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Zap size={16} className="text-blue-600" />
                      <span className="text-sm font-medium">Surveillance vol incluse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Nos Avantages
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Pourquoi choisir Global Bush pour vos transferts ?
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pourquoi nous choisir ?
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Award className="mr-2 text-yellow-600" size={24} />
                      Notre Expertise
                    </h3>
                    <p className="text-gray-700">
                      Les experts de l'équipe Global Bush Travel and Tourism sont à votre 
                      disposition pour rendre votre voyage très confortable et inoubliable 
                      dès l'aéroport.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Services Additionnels
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: <Luggage size={24} />, title: "Bagages", desc: "Assistance complète bagages" },
                        { icon: <Wifi size={24} />, title: "Connectivité", desc: "WiFi gratuit à bord" },
                        { icon: <Coffee size={24} />, title: "Restauration", desc: "Boissons offertes" },
                        { icon: <Headphones size={24} />, title: "Support", desc: "Assistance 24h/24" }
                      ].map((service, index) => (
                        <div key={index} className="text-center p-4 bg-white/50 rounded-xl">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                            {service.icon}
                          </div>
                          <h4 className="font-bold text-blue-900">{service.title}</h4>
                          <p className="text-gray-600 text-sm">{service.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Contact Rapide
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Mail size={18} className="text-blue-600" />
                        <a href="mailto:transferts@globalbushtratour.com" className="text-blue-600 hover:underline">
                          transferts@globalbushtratour.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={18} className="text-blue-600" />
                        <span className="text-gray-700">+237 XX XX XX XX</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={18} className="text-blue-600" />
                        <span className="text-gray-700">Service 24h/24, 7j/7</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Réserver un Transfert
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold">
                Prêt pour un transfert sans stress au Cameroun ?
              </h3>
              <p className="text-blue-100">
                Réservez vos transferts aéroport dès maintenant et voyagez en toute tranquillité 
                dès votre arrivée au Cameroun.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Plane size={20} className="mr-2" />
                Réserver Maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Transfert2;