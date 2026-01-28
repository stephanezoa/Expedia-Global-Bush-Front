import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
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
  Award,
  Heart,
  Coffee,
  Camera,
  Mountain,
  Beach,
  Safari,
  City
} from "lucide-react";

const Forfait = () => {
  const [activeTab, setActiveTab] = useState("packages");
  const [selectedPackage, setSelectedPackage] = useState(null);
  
  const travelPackages = [
    {
      id: 1,
      title: "Découverte Cameroun",
      subtitle: "Circuit complet 10 jours",
      duration: "10 jours / 9 nuits",
      price: "1.250.000 XAF",
      perPerson: "par personne",
      highlights: ["Yaoundé", "Douala", "Kribi", "Mont Cameroun"],
      icon: <Globe className="text-blue-600" size={28} />,
      color: "from-blue-500 to-blue-600",
      includes: ["Hôtel 4 étoiles", "Pension complète", "Guide francophone", "Transferts privés", "Activités incluses"],
      rating: 4.8,
      reviews: 42
    },
    {
      id: 2,
      title: "Aventure Mont Cameroun",
      subtitle: "Randonnée exclusive",
      duration: "7 jours / 6 nuits",
      price: "950.000 XAF",
      perPerson: "par personne",
      highlights: ["Ascension guidée", "Campement", "Vue panoramique", "Flore unique"],
      icon: <Mountain className="text-green-600" size={28} />,
      color: "from-green-500 to-green-600",
      includes: ["Guide spécialisé", "Équipement de randonnée", "Hébergement refuge", "Repas énergétiques", "Transport"],
      rating: 4.9,
      reviews: 28
    },
    {
      id: 3,
      title: "Plages Paradisiaques",
      subtitle: "Relaxation à Kribi",
      duration: "8 jours / 7 nuits",
      price: "1.100.000 XAF",
      perPerson: "par personne",
      highlights: ["Plages de sable blanc", "Chutes de la Lobé", "Pêche sportive", "Spa & bien-être"],
      icon: <Beach className="text-yellow-600" size={28} />,
      color: "from-yellow-500 to-yellow-600",
      includes: ["Hôtel bord de mer", "Demi-pension", "Activités nautiques", "Massages inclus", "Excursions"],
      rating: 4.7,
      reviews: 35
    },
    {
      id: 4,
      title: "Safari & Nature",
      subtitle: "Expérience sauvage",
      duration: "12 jours / 11 nuits",
      price: "1.750.000 XAF",
      perPerson: "par personne",
      highlights: ["Parcs nationaux", "Observation faune", "Écotourisme", "Communautés locales"],
      icon: <Safari className="text-orange-600" size={28} />,
      color: "from-orange-500 to-orange-600",
      includes: ["Lodge safari", "Guide naturaliste", "Safaris quotidiens", "Pension complète", "Photographie"],
      rating: 4.9,
      reviews: 19
    },
    {
      id: 5,
      title: "Business Premium",
      subtitle: "Voyage d'affaires",
      duration: "5 jours / 4 nuits",
      price: "850.000 XAF",
      perPerson: "par personne",
      highlights: ["Hôtel centre-ville", "Transport VIP", "Salle de réunion", "Conciergerie"],
      icon: <Briefcase className="text-purple-600" size={28} />,
      color: "from-purple-500 to-purple-600",
      includes: ["Suite hôtelière", "Transport privé", "WiFi haut débit", "Petit-déjeuner buffet", "Service pressing"],
      rating: 4.6,
      reviews: 31
    },
    {
      id: 6,
      title: "Culture & Gastronomie",
      subtitle: "Immersion authentique",
      duration: "6 jours / 5 nuits",
      price: "720.000 XAF",
      perPerson: "par personne",
      highlights: ["Marchés locaux", "Cuisine traditionnelle", "Artisanat", "Spectacles culturels"],
      icon: <Utensils className="text-red-600" size={28} />,
      color: "from-red-500 to-red-600",
      includes: ["Hébergement typique", "Ateliers culinaires", "Visites guidées", "Dégustations", "Rencontres locales"],
      rating: 4.8,
      reviews: 27
    }
  ];

  const services = [
    {
      title: "Circuits Touristiques",
      description: "Organisation complète des circuits et excursions",
      icon: <Compass size={24} className="text-blue-600" />,
      details: ["Circuits sur mesure", "Guides francophones", "Accès exclusifs"]
    },
    {
      title: "Hébergement Premium",
      description: "Réservations d'hôtels adaptés à vos besoins",
      icon: <Building size={24} className="text-green-600" />,
      details: ["Hôtels 3-5 étoiles", "Lodges écologiques", "Maisons d'hôtes"]
    },
    {
      title: "Transport Privé",
      description: "Transferts aéroport et transport pendant votre séjour",
      icon: <Car size={24} className="text-purple-600" />,
      details: ["Voiture avec chauffeur", "Minibus VIP", "Service 24/7"]
    },
    {
      title: "Expériences Culturelles",
      description: "Safaris, randonnées, immersion locale et gastronomie",
      icon: <Heart size={24} className="text-red-600" />,
      details: ["Activités authentiques", "Rencontres locales", "Traditions vivantes"]
    },
    {
      title: "Assistance Administrative",
      description: "Aide pour visas, assurance et formalités nécessaires",
      icon: <Shield size={24} className="text-orange-600" />,
      details: ["Assistance visa", "Assurance voyage", "Support administratif"]
    },
    {
      title: "Conseil Personnalisé",
      description: "Itinéraires optimisés selon vos préférences",
      icon: <Target size={24} className="text-indigo-600" />,
      details: ["Planning sur mesure", "Recommandations exclusives", "Budget optimisé"]
    }
  ];

  const destinations = [
    { name: "Yaoundé", icon: <City size={20} />, activities: ["Culture", "Histoire", "Gastronomie"] },
    { name: "Douala", icon: <Building size={20} />, activities: ["Business", "Plages", "Vie nocturne"] },
    { name: "Kribi", icon: <Beach size={20} />, activities: ["Plages", "Sports nautiques", "Détente"] },
    { name: "Mont Cameroun", icon: <Mountain size={20} />, activities: ["Randonnée", "Aventure", "Nature"] },
    { name: "Limbé", icon: <Safari size={20} />, activities: ["Safari", "Jardins botaniques", "Volcans"] },
    { name: "Foumban", icon: <Camera size={20} />, activities: ["Artisanat", "Histoire", "Traditions"] }
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
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Plane size={20} />
              <span className="text-sm font-medium">Voyages & Vacances sur Mesure</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Forfaits de Voyage</span>
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Cameroun
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Découvrez le Cameroun à travers nos forfaits exclusifs. Que vous soyez en voyage d'affaires, 
              en escapade touristique ou en vacances en famille, nous créons des expériences uniques.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#packages"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Compass size={20} />
                <span>Voir nos forfaits</span>
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Personnaliser mon voyage</span>
              </Link>
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
          {["packages", "services", "destinations", "customize", "testimonials"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "packages" && "Nos Forfaits"}
              {tab === "services" && "Services Inclus"}
              {tab === "destinations" && "Destinations"}
              {tab === "customize" && "Personnalisation"}
              {tab === "testimonials" && "Témoignages"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeTab === "packages" && (
            <div id="packages" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Nos Forfaits Exclusifs
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Sélectionnez le forfait qui correspond à vos envies ou personnalisez-le selon vos préférences
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {travelPackages.map((pkg) => (
                  <div 
                    key={pkg.id}
                    className={`group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden border-2 ${
                      selectedPackage === pkg.id 
                        ? 'border-blue-400 shadow-2xl scale-[1.02]' 
                        : 'border-blue-100 hover:border-blue-300'
                    } hover:shadow-xl transition-all duration-300`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {/* Badge populaire */}
                    {pkg.rating >= 4.8 && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                        POPULAIRE
                      </div>
                    )}
                    
                    <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pkg.color} flex items-center justify-center text-white`}>
                            {pkg.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-blue-900">{pkg.title}</h3>
                            <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-medium">{pkg.duration}</span>
                          <div className="flex items-center space-x-1">
                            <Star size={16} className="text-yellow-500 fill-current" />
                            <span className="font-bold">{pkg.rating}</span>
                            <span className="text-gray-500 text-sm">({pkg.reviews})</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {pkg.highlights.map((highlight, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          {pkg.includes.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                          {pkg.includes.length > 3 && (
                            <div className="text-sm text-blue-600 font-medium">
                              + {pkg.includes.length - 3} services inclus
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-end justify-between mb-4">
                          <div>
                            <div className="text-2xl font-bold text-blue-900">{pkg.price}</div>
                            <div className="text-gray-600 text-sm">{pkg.perPerson}</div>
                          </div>
                          <Link
                            to={`/forfait/${pkg.id}`}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            Détails
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Services Complets Inclus
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Avec nos forfaits, vous profitez pleinement de votre séjour sans souci logistique
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-700">
                          <ChevronRight size={16} className="text-blue-500" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <span className="text-blue-600 text-sm font-semibold">
                        Inclus dans tous nos forfaits
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Laissez-nous tout organiser pour vous
                    </h3>
                    <p className="text-gray-700">
                      Avec nos forfaits, nous nous occupons de tout, afin que vous puissiez 
                      vous concentrer sur vos expériences et découvrir les richesses du Cameroun.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "destinations" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Destinations à Découvrir
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Le Cameroun, terre de diversité et d'authenticité
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((dest, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {dest.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">{dest.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.activities.map((activity, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                          {activity}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      Découvrez les merveilles de {dest.name} à travers nos circuits exclusifs
                    </div>
                    
                    <Link
                      to={`/destination/${dest.name.toLowerCase()}`}
                      className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800"
                    >
                      Voir les circuits
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">10+</div>
                    <p className="text-gray-700">Destinations uniques</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                    <p className="text-gray-700">Circuits disponibles</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                    <p className="text-gray-700">Satisfaction garantie</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "customize" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Personnalisez Votre Voyage
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Créez l'expérience parfaite adaptée à vos envies et votre budget
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pourquoi personnaliser ?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">Adapté à vos dates et disponibilités</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">Choix d'hébergement selon vos préférences</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">Activités sélectionnées selon vos intérêts</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">Budget optimisé selon vos moyens</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">Accompagnement personnalisé du début à la fin</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Notre Processus
                    </h3>
                    <ol className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Consultation gratuite</p>
                          <p className="text-gray-600 text-sm">Échange sur vos attentes et envies</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Proposition sur mesure</p>
                          <p className="text-gray-600 text-sm">Itinéraire personnalisé avec devis détaillé</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Finalisation & réservation</p>
                          <p className="text-gray-600 text-sm">Validation et organisation complète</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Types de Voyage Personnalisables
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Voyage en famille",
                        "Lune de miel romantique",
                        "Voyage d'affaires",
                        "Aventure en solo",
                        "Voyage de groupe",
                        "Retraite bien-être",
                        "Voyage photographique",
                        "Circuit gastronomique"
                      ].map((type, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Contactez-nous pour votre projet
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Contactez Global Bush Travel and Tourism dès aujourd'hui pour créer votre 
                      forfait de voyage sur mesure et vivre des vacances mémorables au Cameroun.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Mail size={18} className="text-blue-600" />
                        <a href="mailto:info@globalbushtratour.com" className="text-blue-600 hover:underline">
                          info@globalbushtratour.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={18} className="text-blue-600" />
                        <span className="text-gray-700">+237 XX XX XX XX</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-center rounded-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Demander une Personnalisation
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "testimonials" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Témoignages de Voyageurs
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Découvrez les expériences de nos clients satisfaits
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Marie D.",
                    location: "Paris, France",
                    rating: 5,
                    comment: "Un voyage exceptionnel ! L'organisation était parfaite, de l'accueil à l'aéroport jusqu'au retour. Merci Global Bush !",
                    package: "Découverte Cameroun"
                  },
                  {
                    name: "Thomas L.",
                    location: "Montréal, Canada",
                    rating: 5,
                    comment: "L'ascension du Mont Cameroun avec un guide expérimenté était incroyable. Tout était bien pensé, je recommande vivement !",
                    package: "Aventure Mont Cameroun"
                  },
                  {
                    name: "Sophie K.",
                    location: "Bruxelles, Belgique",
                    rating: 4,
                    comment: "Séjour parfait à Kribi. Les plages sont magnifiques et l'hôtel était idéalement situé. Service impeccable.",
                    package: "Plages Paradisiaques"
                  }
                ].map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="font-bold text-blue-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.location}</div>
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        {testimonial.package}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold">
                Prêt à vivre l'aventure camerounaise ?
              </h3>
              <p className="text-blue-100">
                Réservez votre forfait dès aujourd'hui et bénéficiez de notre accompagnement 
                personnalisé pour un voyage mémorable au Cameroun.
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

export default Forfait;