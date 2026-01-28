import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { MapPin, Home, Car, Wifi, Utensils, Shield, Star, ChevronRight, Phone, Calendar, Users } from "lucide-react";

const Appartement = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation de chargement pour les images
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const features = [
    { icon: <Wifi size={24} />, title: "WiFi Haut Débit", description: "Connexion internet rapide incluse" },
    { icon: <Utensils size={24} />, title: "Cuisine Équipée", description: "Équipements modernes et complets" },
    { icon: <Car size={24} />, title: "Stationnement", description: "Place de parking sécurisée" },
    { icon: <Shield size={24} />, title: "Sécurité 24/7", description: "Surveillance et gardiennage" },
    { icon: <Users size={24} />, title: "Service Ménage", description: "Nettoyage régulier inclus" },
    { icon: <Phone size={24} />, title: "Assistance 24h", description: "Support client permanent" },
  ];

  const appartements = [
    { id: 1, name: "Appartement Moderne - Centre Ville", city: "Yaoundé", price: "120.000 XAF/nuit", rooms: "3 chambres", size: "120 m²", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800" },
    { id: 2, name: "Duplex Vue Panoramique", city: "Douala", price: "180.000 XAF/nuit", rooms: "4 chambres", size: "150 m²", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800" },
    { id: 3, name: "Appartement Élégant - Quartier Résidentiel", city: "Yaoundé", price: "95.000 XAF/nuit", rooms: "2 chambres", size: "85 m²", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w-800" },
    { id: 4, name: "Penthouse Luxueux", city: "Douala", price: "250.000 XAF/nuit", rooms: "5 chambres", size: "200 m²", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2">
                <Home size={20} />
                <span className="text-sm font-medium">Location d'appartements</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Appartements</span>
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  au Cameroun
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Vivez l'expérience d'un chez-soi en étant à l'étranger. Nos appartements meublés offrent confort, intimité et tous les équipements nécessaires pour un séjour mémorable.
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
                  href="#properties"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Voir nos appartements
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                {isLoading ? (
                  <div className="w-full h-96 bg-blue-200/50 rounded-2xl animate-pulse"></div>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200" 
                      alt="Appartement moderne au Cameroun"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin size={20} />
                        <span className="font-semibold">Yaoundé & Douala</span>
                      </div>
                      <p className="text-lg">Des emplacements stratégiques en ville</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 mb-8">
            {["description", "features", "properties", "services"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white text-blue-900 border-2 border-blue-200 hover:border-blue-300"
                }`}
              >
                {tab === "description" && "Description"}
                {tab === "features" && "Équipements"}
                {tab === "properties" && "Nos appartements"}
                {tab === "services" && "Services additionnels"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === "description" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Votre maison loin de chez vous
                      </span>
                    </h2>
                    
                    <div className="space-y-4 text-gray-700">
                      <p className="text-lg leading-relaxed">
                        La plupart des voyageurs qui viennent au Cameroun pour le long terme ainsi que pour des fins à court terme d'affaires ou de loisirs préfèrent une sorte de «se sentir chez soi en étant à l'étranger» que nous appelons souvent des appartements meublés à louer.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Avec ces appartements, vous pouvez vous sentir à la maison avec tous les équipements que vous trouveriez dans votre propre maison, bien équipés pour rendre votre séjour facile à vivre et unique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Pourquoi choisir nos appartements ?</h3>
                      <ul className="space-y-3">
                        {[
                          "Intimité totale et indépendance",
                          "Équipements modernes et complets",
                          "Emplacements stratégiques en ville",
                          "Services additionnels personnalisés",
                          "Rapport qualité-prix exceptionnel",
                          "Sécurité et tranquillité garanties"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Chez Global Bush, nous offrons un espace d'intimité pour appeler à la maison ! Contactez-nous et faites votre choix parmi la grande variété d'appartements à Yaoundé et à Douala.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Équipements et <span className="text-blue-600">Services Inclus</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "properties" && (
              <div id="properties">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Nos <span className="text-blue-600">Appartements Disponibles</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {appartements.map((apt) => (
                    <div 
                      key={apt.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={apt.image} 
                          alt={apt.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {apt.price}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">{apt.name}</h3>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <MapPin size={18} />
                              <span className="font-medium">{apt.city}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="flex items-center space-x-2">
                            <Home size={18} className="text-blue-600" />
                            <span className="text-gray-700">{apt.rooms}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-blue-600">📐</div>
                            <span className="text-gray-700">{apt.size}</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/appartement/${apt.id}`}
                          className="inline-flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group/btn"
                        >
                          <span>Voir les détails</span>
                          <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "services" && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Services <span className="text-blue-600">Additionnels</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Services Personnalisés</h3>
                      <p className="text-gray-700 mb-4">
                        Pour les gens d'affaires qui ne voudront pas se précipiter tout le temps de manger dans les restaurants, nous proposons également des cuisiniers pour la location de ces appartements au Cameroun.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Cuisiniers professionnels</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Service de blanchisserie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Service de ménage quotidien</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Emplacement Idéal</h3>
                      <p className="text-gray-700">
                        Les appartements sont localisés à quelques minutes du centre-ville et de toutes les attractions, avec accès facile aux commodités essentielles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">À Proximité</h3>
                      <ul className="space-y-3">
                        {[
                          "Supermarchés et boutiques",
                          "Pharmacies et centres médicaux",
                          "Bureaux de poste",
                          "Gares routières",
                          "Banques et distributeurs",
                          "Stations d'essence",
                          "Restaurants et boulangeries",
                          "Plages de la ville"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Assistance Complète</h3>
                      <p className="text-gray-700">
                        Vous pouvez toujours nous contacter pour l'assistance et nous pouvons vous aider avec tout ce dont vous avez besoin pendant votre séjour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold">
                Prêt à réserver votre appartement au Cameroun ?
              </h2>
              <p className="text-blue-100 text-lg">
                Contactez-nous dès maintenant pour obtenir les meilleures offres et un accompagnement personnalisé.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone size={20} className="mr-2" />
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Appartement;