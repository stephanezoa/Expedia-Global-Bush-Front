import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Car, 
  MapPin, 
  Star, 
  Users, 
  Shield,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  Key,
  Wrench,
  Fuel,
  Settings,
  Clock,
  TrendingUp,
  Award,
  Gauge,
  Luggage,
  Snowflake,
  Music,
  Navigation,
  ShieldCheck
} from "lucide-react";

const Location2 = () => {
  const [activeTab, setActiveTab] = useState("cars");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const vehicles = [
    {
      id: 1,
      name: "Toyota RAV4",
      category: "SUV",
      seats: 5,
      transmission: "Automatique",
      price: "45.000 XAF",
      perDay: "par jour",
      features: ["Climatisation", "GPS", "Bluetooth", "Airbags"],
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800"
    },
    {
      id: 2,
      name: "Mercedes Classe C",
      category: "Luxe",
      seats: 5,
      transmission: "Automatique",
      price: "85.000 XAF",
      perDay: "par jour",
      features: ["Climatisation", "GPS", "Siège cuir", "Caméra recul"],
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800"
    },
    {
      id: 3,
      name: "Toyota Yaris",
      category: "Économique",
      seats: 5,
      transmission: "Manuelle",
      price: "25.000 XAF",
      perDay: "par jour",
      features: ["Climatisation", "Radio", "Airbags", "Économique"],
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800"
    },
    {
      id: 4,
      name: "Toyota Hiace",
      category: "Minibus",
      seats: 12,
      transmission: "Manuelle",
      price: "65.000 XAF",
      perDay: "par jour",
      features: ["Grand espace", "Climatisation", "Sièges confort", "Grand coffre"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800"
    },
    {
      id: 5,
      name: "Range Rover Evoque",
      category: "SUV Premium",
      seats: 5,
      transmission: "Automatique",
      price: "95.000 XAF",
      perDay: "par jour",
      features: ["4x4", "GPS", "Siège chauffant", "Toit panoramique"],
      image: "https://images.unsplash.com/photo-1563720223484-21c6c2d3ba68?auto=format&fit=crop&w=800"
    },
    {
      id: 6,
      name: "Peugeot 3008",
      category: "SUV",
      seats: 5,
      transmission: "Automatique",
      price: "55.000 XAF",
      perDay: "par jour",
      features: ["Climatisation", "GPS", "Écran tactile", "Régulateur"],
      image: "https://images.unsplash.com/photo-1633933553989-4fc4c0754c6e?auto=format&fit=crop&w=800"
    }
  ];

  const categories = [
    { name: "Économique", icon: "💰", count: 8, description: "Idéal pour petits budgets" },
    { name: "SUV", icon: "🚙", count: 12, description: "Confort et espace" },
    { name: "Luxe", icon: "⭐", count: 6, description: "Prestige et confort" },
    { name: "Minibus", icon: "🚐", count: 4, description: "Groupes et familles" },
    { name: "4x4", icon: "🚜", count: 5, description: "Routes difficiles" },
    { name: "Véhicule Affaires", icon: "💼", count: 7, description: "Voyages professionnels" }
  ];

  const benefits = [
    "Livraison et récupération à l'aéroport",
    "Assurance tous risques incluse",
    "Kilométrage illimité",
    "Service d'assistance 24h/24",
    "Frais de carburant inclus (option)",
    "GPS portable disponible",
    "Siège bébé sur demande",
    "Conducteur professionnel optionnel"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Réservation",
      description: "Choisissez votre véhicule et vos dates",
      icon: <Calendar size={24} />
    },
    {
      step: "02",
      title: "Documents",
      description: "Fournissez permis et pièces d'identité",
      icon: <CreditCard size={24} />
    },
    {
      step: "03",
      title: "Paiement",
      description: "Paiement sécurisé en ligne ou sur place",
      icon: <Key size={24} />
    },
    {
      step: "04",
      title: "Récupération",
      description: "Récupérez votre véhicule à l'agence",
      icon: <Car size={24} />
    }
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
                <Car size={20} />
                <span className="text-sm font-medium">Location de Voitures</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Location</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  de Voitures Cameroun
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Découvrez le Cameroun en toute liberté avec notre flotte de véhicules modernes. 
                Que ce soit pour des déplacements professionnels ou touristiques, explorez à votre rythme.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#cars"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Key size={20} />
                  <span>Voir nos véhicules</span>
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Réserver maintenant
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Gauge size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Service Premium</h3>
                        <p className="text-blue-200">Yaoundé & Douala</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">50+</div>
                        <p className="text-sm text-blue-200">Véhicules disponibles</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <p className="text-sm text-blue-200">Assistance routière</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">0%</div>
                        <p className="text-sm text-blue-200">Frais cachés</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">98%</div>
                        <p className="text-sm text-blue-200">Clients satisfaits</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Assurance tous risques incluse dans tous nos forfaits
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
          {["cars", "categories", "process", "benefits"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "cars" && "Nos Véhicules"}
              {tab === "categories" && "Catégories"}
              {tab === "process" && "Processus"}
              {tab === "benefits" && "Avantages"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeTab === "cars" && (
            <div id="cars" className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Notre Flotte de Véhicules
                    </span>
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Des véhicules adaptés à chaque besoin, récents et parfaitement entretenus
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  >
                    <option value="all">Toutes catégories</option>
                    <option value="SUV">SUV</option>
                    <option value="Luxe">Luxe</option>
                    <option value="Économique">Économique</option>
                    <option value="Minibus">Minibus</option>
                    <option value="SUV Premium">SUV Premium</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles
                  .filter(vehicle => selectedCategory === "all" || vehicle.category === selectedCategory)
                  .map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-blue-700 font-bold">{vehicle.price}</span>
                        <span className="text-gray-600 text-sm ml-1">{vehicle.perDay}</span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                          {vehicle.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{vehicle.name}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1">
                              <Users size={16} className="text-blue-600" />
                              <span className="text-gray-600 text-sm">{vehicle.seats} places</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Settings size={16} className="text-blue-600" />
                              <span className="text-gray-600 text-sm">{vehicle.transmission}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {vehicle.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/location/${vehicle.id}`}
                          className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800"
                        >
                          Voir détails et disponibilités
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300">
                          Réserver
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link
                  to="/location/all"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  Voir tous les véhicules (50+)
                  <ChevronRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "categories" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Catégories de Véhicules
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Choisissez la voiture qui correspond à vos besoins et votre budget
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setActiveTab("cars");
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{category.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{category.name}</h3>
                          <p className="text-gray-600 text-sm">{category.count} véhicules</p>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Tarif journalier :</span>
                        <span className="font-bold text-blue-900">
                          {category.name === "Luxe" ? "70.000 - 150.000 XAF" : 
                           category.name === "SUV" ? "45.000 - 95.000 XAF" : 
                           category.name === "Économique" ? "20.000 - 40.000 XAF" : 
                           category.name === "Minibus" ? "55.000 - 85.000 XAF" : 
                           category.name === "4x4" ? "60.000 - 120.000 XAF" : 
                           "40.000 - 80.000 XAF"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Comment Louer ?
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                   4 étapes simples pour réserver votre véhicule
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
                  Conditions de location
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Documents requis :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Permis de conduire valide (minimum 2 ans)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Carte d'identité ou passeport</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Justificatif de domicile récent</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Âge minimum :</h4>
                    <p className="text-gray-700 mb-4">25 ans pour la plupart des catégories</p>
                    <h4 className="font-bold text-gray-900 mb-2">Caution :</h4>
                    <p className="text-gray-700">Caution remboursable selon véhicule</p>
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
                  Pourquoi choisir Cameroon Car Rentals ?
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Services Inclus
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
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Notre Promesse
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Ne laissez pas les contraintes de transport ou de budget interrompre 
                      votre expérience. Avec Cameroon Car Rentals, vous bénéficiez d'un 
                      service flexible, accessible et pensé pour rendre votre séjour agréable 
                      et sans souci.
                    </p>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck size={20} className="text-blue-600" />
                      <span className="font-semibold text-blue-900">Satisfaction garantie</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pourquoi louer avec nous ?
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: "🏎️", title: "Véhicules récents", desc: "Flotte mise à jour régulièrement" },
                        { icon: "🛡️", title: "Assurance incluse", desc: "Tous risques sans surprise" },
                        { icon: "🎯", title: "Prix transparents", desc: "Aucun frais caché" },
                        { icon: "📞", title: "Support 24/7", desc: "Assistance en continu" },
                        { icon: "📍", title: "Multiples agences", desc: "Yaoundé et Douala" },
                        { icon: "⚡", title: "Réservation rapide", desc: "En ligne en 5 minutes" }
                      ].map((item, index) => (
                        <div key={index} className="text-center p-4 bg-white/50 rounded-xl">
                          <div className="text-2xl mb-2">{item.icon}</div>
                          <h4 className="font-bold text-blue-900 text-sm">{item.title}</h4>
                          <p className="text-gray-600 text-xs">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Locations Spéciales
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Avec chauffeur</span>
                        <span className="font-bold text-blue-900">Sur demande</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Location longue durée</span>
                        <span className="font-bold text-blue-900">Tarifs préférentiels</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Transfert aéroport</span>
                        <span className="font-bold text-blue-900">Service gratuit*</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Demander un Devis Personnalisé
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
                Prêt à découvrir le Cameroun en toute liberté ?
              </h3>
              <p className="text-blue-100">
                En choisissant notre service de location de voiture à Douala et à Yaoundé, 
                vous pourrez profiter pleinement des attractions naturelles, culturelles 
                et diversifiées du Cameroun.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Car size={20} className="mr-2" />
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

export default Location2;