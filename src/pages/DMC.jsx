import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Plane, 
  Shield,
  Star,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Compass,
  Building,
  Car,
  Utensils,
  Briefcase,
  Trophy,
  Globe,
  Target,
  Award
} from "lucide-react";

const DMC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const services = [
    {
      category: "Voyages & Circuits",
      icon: <Compass size={28} />,
      items: [
        { title: "Tours guidés et excursions", icon: "📍" },
        { title: "Transport privé VIP", icon: "🚗" },
        { title: "Transferts aéroportuaires", icon: "✈️" },
        { title: "Hébergement premium", icon: "🏨" },
        { title: "Réservations exclusives", icon: "⭐" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Événements MICE",
      icon: <Calendar size={28} />,
      items: [
        { title: "Planification événementielle", icon: "📋" },
        { title: "Séminaires et conférences", icon: "🎤" },
        { title: "Voyages de motivation", icon: "🏆" },
        { title: "Expositions professionnelles", icon: "🎪" },
        { title: "Team building", icon: "🤝" }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Assistance Voyageurs",
      icon: <Shield size={28} />,
      items: [
        { title: "Service de conciergerie 24/7", icon: "🔑" },
        { title: "Gestion des visas", icon: "📄" },
        { title: "Formalités de voyage", icon: "🛂" },
        { title: "Assurance voyage premium", icon: "🛡️" },
        { title: "Sécurité et assistance", icon: "🚨" }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Expériences Culturelles",
      icon: <Globe size={28} />,
      items: [
        { title: "Découverte des sites touristiques", icon: "🏞️" },
        { title: "Safaris et aventures", icon: "🦁" },
        { title: "Randonnées et écotourisme", icon: "🥾" },
        { title: "Immersion culturelle", icon: "🎭" },
        { title: "Gastronomie locale", icon: "🍽️" }
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const destinations = [
    {
      name: "Yaoundé",
      description: "Capitale politique et administrative",
      highlights: ["Palais des Congrès", "Musée National", "Mont Fébé", "Marché Central"],
      image: "https://images.unsplash.com/photo-1559135285-45bf32eb1c8c?auto=format&fit=crop&w=800"
    },
    {
      name: "Douala",
      description: "Capitale économique et portuaire",
      highlights: ["Place du Gouvernement", "Musée Maritime", "Bonanjo", "Plages"],
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800"
    },
    {
      name: "Kribi",
      description: "Station balnéaire paradisiaque",
      highlights: ["Chutes de la Lobé", "Plages de sable blanc", "Pêche sportive", "Lac Ossa"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800"
    },
    {
      name: "Mont Cameroun",
      description: "Plus haut sommet d'Afrique Centrale",
      highlights: ["Ascension guidée", "Randonnée", "Vue panoramique", "Flore unique"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800"
    }
  ];

  const benefits = [
    "Expertise locale approfondie",
    "Réseau de partenaires premium",
    "Solutions sur mesure",
    "Gestion logistique complète",
    "Support multilingue 24/7",
    "Rapport qualité-prix optimisé"
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
                <Globe size={20} />
                <span className="text-sm font-medium">Destination Management Company</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Service DMC</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Cameroun
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Gestion complète des services touristiques et événementiels pour des expériences 
                mémorables au Cameroun. Partenaire officiel pour vos voyages d'affaires et de loisirs.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Devenir Partenaire</span>
                </Link>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Découvrir nos services
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Target size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Solutions Intégrées</h3>
                        <p className="text-blue-200">Pour entreprises et groupes</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">MICE</div>
                        <p className="text-sm text-blue-200">Événements professionnels</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">VIP</div>
                        <p className="text-sm text-blue-200">Services premium</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <p className="text-sm text-blue-200">Support client</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">100+</div>
                        <p className="text-sm text-blue-200">Partenaires locaux</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Destination Management Company - Gestion de destination complète
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
          {["overview", "services", "destinations", "mice", "partnership"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "overview" && "Présentation"}
              {tab === "services" && "Services DMC"}
              {tab === "destinations" && "Destinations"}
              {tab === "mice" && "Événements MICE"}
              {tab === "partnership" && "Partenariat"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-blue-900">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Qu'est-ce qu'une DMC ?
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Une Destination Management Company (DMC) est une entreprise spécialisée 
                      dans la gestion des services touristiques et événementiels pour les 
                      visiteurs dans une destination spécifique.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Si vous recherchez un service de gestion DMC à Douala et Yaoundé, 
                      Global Bush Travel and Tourism Agency offre des solutions complètes 
                      adaptées à vos besoins.
                    </p>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                        <Target className="mr-2 text-blue-600" size={24} />
                        Notre Mission
                      </h3>
                      <p className="text-gray-700">
                        Offrir une gestion de destination exceptionnelle en combinant expertise 
                        locale, réseau de partenaires premium et service personnalisé pour 
                        créer des expériences uniques.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Award className="mr-2 text-green-600" size={24} />
                      Pourquoi choisir notre DMC ?
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Users className="mr-2 text-purple-600" size={24} />
                      Clients cibles
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Entreprises & Corporations",
                        "Agences de voyages",
                        "Groupes & Associations",
                        "Organisateurs d'événements",
                        "Individuels VIP",
                        "Institutions publiques"
                      ].map((client, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{client}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div id="services" className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Services DMC Complets
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{service.category}</h3>
                        <p className="text-gray-600 text-sm">Solutions intégrées</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-gray-700">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="mt-6 w-full py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                      Demander un devis
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Additional Services */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6 mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  Services Additionnels
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <Car size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Transport Premium</h4>
                    <p className="text-gray-600 text-sm">Flotte VIP avec chauffeurs</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <Utensils size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Catering & Restauration</h4>
                    <p className="text-gray-600 text-sm">Service gastronomique sur mesure</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      <Briefcase size={24} />
                    </div>
                    <h4 className="font-bold text-blue-900">Business Services</h4>
                    <p className="text-gray-600 text-sm">Support professionnel complet</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "destinations" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Nos Destinations Phares
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {destinations.map((destination, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold">{destination.name}</h3>
                        <p className="text-blue-200">{destination.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-bold text-blue-900 mb-3">Points d'intérêt :</h4>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {destination.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={`/dmc/${destination.name.toLowerCase()}`}
                        className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
                      >
                        Explorer cette destination
                        <ChevronRight size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">📍 Besoin d'un partenaire DMC au Cameroun ?</h3>
                    <p className="text-gray-700">
                      <strong>Global Bush Travel and Tourism Agency</strong> est votre partenaire 
                      local fiable pour des services DMC complets à Douala, Yaoundé et dans tout le Cameroun.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Nous Contacter
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mice" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Événements MICE
                </span>
              </h2>
              
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8 mb-6">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-3xl font-bold mb-2">M</div>
                    <h4 className="font-bold">Meetings</h4>
                    <p className="text-blue-200 text-sm">Réunions d'affaires</p>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold mb-2">I</div>
                    <h4 className="font-bold">Incentives</h4>
                    <p className="text-blue-200 text-sm">Voyages de motivation</p>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold mb-2">C</div>
                    <h4 className="font-bold">Conferences</h4>
                    <p className="text-blue-200 text-sm">Conférences & séminaires</p>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold mb-2">E</div>
                    <h4 className="font-bold">Exhibitions</h4>
                    <p className="text-blue-200 text-sm">Expositions professionnelles</p>
                  </div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-900">Notre Expertise MICE</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-blue-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold text-blue-900 mb-2">Planification complète</h4>
                      <p className="text-gray-700">De la conception à l'exécution, nous gérons tous les aspects logistiques de vos événements.</p>
                    </div>
                    
                    <div className="bg-white border-2 border-blue-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold text-blue-900 mb-2">Lieux exclusifs</h4>
                      <p className="text-gray-700">Accès à des salles de conférence, hôtels et espaces événementiels premium.</p>
                    </div>
                    
                    <div className="bg-white border-2 border-blue-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold text-blue-900 mb-2">Services intégrés</h4>
                      <p className="text-gray-700">Transport, hébergement, restauration, équipement technique et animation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Trophy className="mr-2 text-green-600" size={24} />
                      Voyages Incentives
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Conception de programmes de motivation sur mesure pour récompenser 
                      vos meilleurs collaborateurs et partenaires.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm">Activités team building</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm">Expériences culturelles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm">Programmes aventure</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Planifier un événement MICE
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "partnership" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Devenez Partenaire
                </span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Users className="mr-2 text-blue-600" size={24} />
                      Pour les Professionnels
                    </h3>
                    
                    <p className="text-gray-700 mb-4">
                      Si vous êtes une agence de voyages, un organisateur d'événements ou une 
                      entreprise cherchant un partenaire DMC fiable au Cameroun, nous sommes 
                      votre solution idéale.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900">Email professionnel :</p>
                        <a 
                          href="mailto:dmc@globalbushtratour.com"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          dmc@globalbushtratour.com
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Téléphone :</p>
                        <a 
                          href="tel:+237XXXXXXXXX"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          +237 XX XX XX XX
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Avantages du Partenariat
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Star size={16} className="text-yellow-500" />
                        <span>Taux commissionnables compétitifs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star size={16} className="text-yellow-500" />
                        <span>Support dédié 24/7</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star size={16} className="text-yellow-500" />
                        <span>Contrats exclusifs par région</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star size={16} className="text-yellow-500" />
                        <span>Formation et support marketing</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Demande de Partenariat
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Rejoignez notre réseau de partenaires privilégiés et bénéficiez de 
                      notre expertise locale pour offrir des services exceptionnels à 
                      vos clients.
                    </p>
                    
                    <Link
                      to="/contact"
                      className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Soumettre une demande de partenariat
                    </Link>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Nos Références
                    </h3>
                    <p className="text-gray-700">
                      Nous travaillons avec des entreprises internationales, des organisations 
                      gouvernementales et des groupes privés pour créer des expériences 
                      mémorables au Cameroun.
                    </p>
                  </div>
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
                Prêt à transformer votre expérience camerounaise ?
              </h3>
              <p className="text-blue-100">
                Contactez notre équipe DMC pour des solutions sur mesure et un service 
                d'excellence à chaque étape de votre voyage ou événement.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Plane size={20} className="mr-2" />
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DMC;