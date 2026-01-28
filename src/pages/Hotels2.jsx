import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  Hotel, 
  MapPin, 
  Star, 
  Users, 
  Shield,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Car,
  Coffee,
  Wifi,
  Utensils,
  Briefcase,
  Award,
  Bed,
  Sunrise,
  CreditCard,
  Filter,
  Search,
  TrendingUp,
  Clock
} from "lucide-react";

const Hotels2 = () => {
  const [activeTab, setActiveTab] = useState("hotels");
  const [selectedCity, setSelectedCity] = useState("all");
  
  const hotels = [
    {
      id: 1,
      name: "Hilton Yaoundé",
      city: "Yaoundé",
      rating: 4.8,
      stars: 5,
      price: "85.000 XAF",
      perNight: "par nuit",
      description: "Hôtel 5 étoiles en centre-ville avec vue panoramique",
      amenities: ["WiFi", "Piscine", "Spa", "Restaurant", "Fitness"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800"
    },
    {
      id: 2,
      name: "Meriadek Hotel",
      city: "Douala",
      rating: 4.5,
      stars: 4,
      price: "65.000 XAF",
      perNight: "par nuit",
      description: "Hôtel d'affaires moderne près du centre des affaires",
      amenities: ["WiFi", "Petit-déjeuner", "Salle de réunion", "Parking"],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800"
    },
    {
      id: 3,
      name: "Hotel La Falaise",
      city: "Kribi",
      rating: 4.7,
      stars: 4,
      price: "75.000 XAF",
      perNight: "par nuit",
      description: "Hôtel de charme face à la mer avec plage privée",
      amenities: ["Plage", "Restaurant", "Spa", "WiFi", "Piscine"],
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800"
    },
    {
      id: 4,
      name: "Mont Febe Hotel",
      city: "Yaoundé",
      rating: 4.6,
      stars: 4,
      price: "55.000 XAF",
      perNight: "par nuit",
      description: "Hôtel avec vue sur la ville depuis les hauteurs",
      amenities: ["Vue", "Restaurant", "Bar", "WiFi", "Jardin"],
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800"
    },
    {
      id: 5,
      name: "Sawa Hotel",
      city: "Douala",
      rating: 4.4,
      stars: 3,
      price: "45.000 XAF",
      perNight: "par nuit",
      description: "Hôtel économique idéalement situé en centre-ville",
      amenities: ["WiFi", "Petit-déjeuner", "Climatisation", "TV"],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800"
    },
    {
      id: 6,
      name: "Kribi Beach Resort",
      city: "Kribi",
      rating: 4.9,
      stars: 5,
      price: "120.000 XAF",
      perNight: "par nuit",
      description: "Resort de luxe avec spa et activités nautiques",
      amenities: ["Plage", "Spa", "Restaurants", "Piscine", "Gym"],
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800"
    }
  ];

  const cities = [
    { name: "Yaoundé", count: 12, icon: "🏛️" },
    { name: "Douala", count: 15, icon: "🏙️" },
    { name: "Kribi", count: 8, icon: "🏖️" },
    { name: "Bafoussam", count: 5, icon: "⛰️" },
    { name: "Garoua", count: 4, icon: "🌄" },
    { name: "Maroua", count: 3, icon: "🏜️" }
  ];

  const hotelCategories = [
    {
      type: "Affaires",
      icon: <Briefcase size={24} className="text-blue-600" />,
      description: "Hôtels avec salles de réunion et services professionnels",
      count: 28
    },
    {
      type: "Luxe",
      icon: <Star size={24} className="text-yellow-600" />,
      description: "Établissements 4-5 étoiles avec services premium",
      count: 15
    },
    {
      type: "Économique",
      icon: <CreditCard size={24} className="text-green-600" />,
      description: "Hôtels confortables à prix abordables",
      count: 42
    },
    {
      type: "Boutique",
      icon: <Award size={24} className="text-purple-600" />,
      description: "Hôtels de charme avec design unique",
      count: 9
    }
  ];

  const services = [
    "Réservation d'hôtels dans tout le Cameroun",
    "Négociation des meilleurs tarifs",
    "Conseils personnalisés selon vos besoins",
    "Assistance 24h/24 pour modifications",
    "Transferts aéroport-hôtel organisés",
    "Services additionnels : guides, voitures, etc."
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
                <Hotel size={20} />
                <span className="text-sm font-medium">Réservations Hôtelières</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Réservations</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  d'Hôtels Cameroun
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Trouvez l'hébergement parfait pour votre séjour au Cameroun. 
                Des hôtels économiques aux établissements de luxe, nous avons 
                la solution adaptée à vos besoins et votre budget.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#hotels"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <Search size={20} />
                  <span>Trouver un hôtel</span>
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
                        <TrendingUp size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Meilleurs Tarifs</h3>
                        <p className="text-blue-200">Garantie prix bas</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">100+</div>
                        <p className="text-sm text-blue-200">Hôtels partenaires</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <p className="text-sm text-blue-200">Support client</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">500+</div>
                        <p className="text-sm text-blue-200">Chambres disponibles</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold mb-1">95%</div>
                        <p className="text-sm text-blue-200">Clients satisfaits</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-blue-200 text-sm">
                        *Meilleur prix garanti ou nous remboursons la différence
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
          {["hotels", "cities", "categories", "services"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tab === "hotels" && "Nos Hôtels"}
              {tab === "cities" && "Destinations"}
              {tab === "categories" && "Catégories"}
              {tab === "services" && "Services"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeTab === "hotels" && (
            <div id="hotels" className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Notre Sélection d'Hôtels
                    </span>
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Des établissements soigneusement sélectionnés dans tout le Cameroun
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="pl-10 pr-4 py-2 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    >
                      <option value="all">Toutes les villes</option>
                      <option value="Yaoundé">Yaoundé</option>
                      <option value="Douala">Douala</option>
                      <option value="Kribi">Kribi</option>
                      <option value="Bafoussam">Bafoussam</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels
                  .filter(hotel => selectedCity === "all" || hotel.city === selectedCity)
                  .map((hotel) => (
                  <div 
                    key={hotel.id}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-blue-700 font-bold">{hotel.price}</span>
                        <span className="text-gray-600 text-sm ml-1">{hotel.perNight}</span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={`${i < hotel.stars ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{hotel.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <MapPin size={16} className="text-blue-600" />
                            <span className="text-gray-600">{hotel.city}</span>
                            <div className="flex items-center space-x-1">
                              <Star size={16} className="text-yellow-500 fill-current" />
                              <span className="font-bold">{hotel.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-4">{hotel.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/hotel/${hotel.id}`}
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
                  to="/hotels/all"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  Voir tous les hôtels (100+)
                  <ChevronRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "cities" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Par Destination
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Trouvez votre hôtel dans les principales villes du Cameroun
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      setSelectedCity(city.name);
                      setActiveTab("hotels");
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{city.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{city.name}</h3>
                          <p className="text-gray-600 text-sm">{city.count} hôtels disponibles</p>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Hotel size={16} className="text-blue-600" />
                        <span className="text-sm text-gray-700">Hôtels d'affaires et de loisirs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-blue-600" />
                        <span className="text-sm text-gray-700">Centre-ville et périphérie</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star size={16} className="text-blue-600" />
                        <span className="text-sm text-gray-700">Établissements 2-5 étoiles</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Hôtels dans tout le Cameroun
                    </h3>
                    <p className="text-gray-700">
                      Notre sélection d'hôtels couvre les principales villes et régions du 
                      Cameroun, notamment Yaoundé, Douala et d'autres destinations stratégiques.
                    </p>
                  </div>
                  <div className="text-4xl">🇨🇲</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "categories" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Types d'Hébergement
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Des hôtels économiques aux établissements de luxe, pour tous les besoins
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {hotelCategories.map((category, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{category.type}</h3>
                        <p className="text-gray-600">{category.description}</p>
                        <div className="mt-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {category.count} établissements
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Tarif moyen par nuit :</span>
                        <span className="font-bold text-blue-900">
                          {category.type === "Luxe" ? "80.000 - 200.000 XAF" : 
                           category.type === "Affaires" ? "60.000 - 150.000 XAF" : 
                           category.type === "Boutique" ? "70.000 - 120.000 XAF" : 
                           "25.000 - 60.000 XAF"}
                        </span>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <button className="w-full py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                          Voir les hôtels {category.type}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
                    <p className="text-gray-700">Taux de satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">24h</div>
                    <p className="text-gray-700">Annulation gratuite</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                    <p className="text-gray-700">Paiement sécurisé</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Notre Service Complet
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Plus qu'une simple réservation, un accompagnement complet
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Pourquoi choisir Global Bush ?
                    </h3>
                    <ul className="space-y-4">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Notre Engagement
                    </h3>
                    <p className="text-gray-700">
                      Faites confiance à Global Bush Travel and Tourism pour vos réservations 
                      d'hôtels au Cameroun et profitez d'un séjour confortable et sans souci.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Services Additionnels
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <Car size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Transferts</h4>
                        <p className="text-gray-600 text-sm">Aéroport-hôtel</p>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <Coffee size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Petit-déjeuner</h4>
                        <p className="text-gray-600 text-sm">Compris ou supplément</p>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <Briefcase size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Salles de réunion</h4>
                        <p className="text-gray-600 text-sm">Réservation et équipement</p>
                      </div>
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          <Clock size={24} />
                        </div>
                        <h4 className="font-bold text-blue-900">Late Check-out</h4>
                        <p className="text-gray-600 text-sm">Selon disponibilité</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Contact Rapide
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Mail size={18} className="text-blue-600" />
                        <a href="mailto:hotels@globalbushtratour.com" className="text-blue-600 hover:underline">
                          hotels@globalbushtratour.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={18} className="text-blue-600" />
                        <span className="text-gray-700">+237 XX XX XX XX</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={18} className="text-blue-600" />
                        <span className="text-gray-700">Assistance 7j/7, 24h/24</span>
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
                Besoin d'un hébergement au Cameroun ?
              </h3>
              <p className="text-blue-100">
                Que ce soit pour un court séjour, un long séjour, un voyage d'affaires, 
                un séminaire ou des vacances, nous prenons en charge l'ensemble de vos 
                réservations hôtelières.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Hotel size={20} className="mr-2" />
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

export default Hotels2;