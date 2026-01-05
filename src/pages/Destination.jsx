import React, { useState } from 'react';
import { 
  Search, MapPin, Globe, CheckCircle2, Star, ChevronRight,
  Plane, Hotel, Car, Camera, ShieldCheck, Users, Compass,
  Calendar, Shield, Award, Clock, TrendingUp, ArrowRight,
  Filter, Heart, Share2, Navigation, Phone, Mail, MessageSquare,
  Instagram, Facebook, Twitter, Youtube, ChevronDown
} from "lucide-react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { COUNTRIES, SERVICES as DATA_SERVICES, TRAVEL_TIPS, STATISTICS } from '../Data/DestinationDatas';

const SERVICES = DATA_SERVICES; // icons are rendered in-place in the page

export default function Destinations() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("all");

    const filtered = COUNTRIES.filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filterOptions = [
        { id: "all", label: "Tous les pays" },
        { id: "popular", label: "Les plus populaires" },
        { id: "beach", label: "Destinations plage" },
        { id: "wildlife", label: "Safari & Faune" },
        { id: "culture", label: "Culture & Histoire" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
                    <nav className="flex items-center text-sm text-blue-100 mb-6">
                        <Link to="/" className="hover:text-white transition">Accueil</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="font-semibold text-white">Destinations</span>
                    </nav>
                    
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Découvrez l'Afrique Centrale
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Une région d'une beauté naturelle exceptionnelle, riche en cultures diverses et en expériences authentiques.
                            Explorez les 9 pays membres avec nos experts locaux.
                        </p>
                    </div>

                    {/* Barre de recherche améliorée */}
                    <div className="mt-8 max-w-2xl">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600" />
                            </div>
                            <input
                                type="text"
                                placeholder="Rechercher un pays, une ville ou une expérience..."
                                className="block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    ×
                                </button>
                            )}
                        </div>
                        <p className="text-blue-200 text-sm mt-2">
                            {filtered.length} résultats trouvés • Essayez "Cameroun", "Safari" ou "Plage"
                        </p>
                    </div>
                </div>
                
                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="rgb(249 250 251)" />
                    </svg>
                </div>
            </div>

            {/* Statistiques Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATISTICS.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                                <div className="text-sm text-gray-500">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filtres */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-gray-500" />
                            <span className="font-medium text-gray-700">Filtrer par :</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {filterOptions.map(option => (
                                <button
                                    key={option.id}
                                    onClick={() => setSelectedFilter(option.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedFilter === option.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grille des destinations */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Nos Destinations en Afrique Centrale
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Sélectionnez un pays pour découvrir ses merveilles
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold text-blue-600">{filtered.length}</span>
                        <span>pays disponibles</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((country) => (
                        <div 
                            key={country.id} 
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
                        >
                            {/* Badge Top */}
                            {country.rating >= 4.5 && (
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-current" />
                                        TOP DESTINATION
                                    </span>
                                </div>
                            )}

                            {/* Image avec overlay */}
                            <div className="relative h-56 overflow-hidden">
                                <img 
                                    src={country.image} 
                                    alt={country.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                
                                {/* Actions sur l'image */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                                        <Heart className="w-5 h-5 text-white" />
                                    </button>
                                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                                        <Share2 className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="p-6">
                                {/* En-tête */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            {country.dmc}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                                            {country.name}
                                        </h3>
                                        <p className="text-gray-600 mt-1">{country.tagline}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <span className="font-bold text-gray-900">{country.rating}</span>
                                            <span className="text-gray-500 text-sm">({country.reviews})</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {country.description}
                                </p>

                                {/* Infos rapides */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                                        <span>{country.bestSeason}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Users className="w-4 h-4 mr-2 text-green-500" />
                                        <span>Visa: {country.visaRequired}</span>
                                    </div>
                                </div>

                                {/* Raisons de visiter */}
                                <div className="mb-6">
                                    <p className="text-xs font-semibold uppercase text-gray-500 mb-2">Pourquoi visiter</p>
                                    <div className="flex flex-wrap gap-2">
                                        {country.reasons.slice(0, 3).map((reason, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                            >
                                                {reason}
                                            </span>
                                        ))}
                                        {country.reasons.length > 3 && (
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                                                +{country.reasons.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Boutons d'action */}
                                <div className="flex gap-3">
                                    <Link 
                                        to={`/destination/${country.id}`}
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center group/btn"
                                    >
                                        <span>Explorer</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                    <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
                                        <Navigation className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Aucun résultat */}
                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-500 mb-2">
                            Aucune destination ne correspond à votre recherche
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Essayez avec d'autres termes ou explorez toutes nos destinations
                        </p>
                        <button 
                            onClick={() => setSearchTerm("")}
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
                        >
                            Voir toutes les destinations
                        </button>
                    </div>
                )}
            </div>

            {/* Nos Services */}
            <div className="bg-gradient-to-b from-white to-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Services Premium
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tout ce dont vous avez besoin pour un voyage parfait en Afrique Centrale
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((service, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                            >
                                <div className="inline-flex p-3 bg-blue-100 rounded-xl text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {service.desc}
                                </p>
                                <Link 
                                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                                >
                                    En savoir plus
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Conseils de voyage */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Conseils de voyage essentiels
                        </h2>
                        <p className="text-gray-600">
                            Tout ce que vous devez savoir avant de partir
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TRAVEL_TIPS.map((tip, index) => (
                            <div 
                                key={index} 
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200"
                            >
                                <div className="inline-flex p-3 bg-blue-100 rounded-xl text-blue-600 mb-4">
                                    {tip.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                                <p className="text-gray-600 text-sm">{tip.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Prêt à vivre l'aventure africaine ?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Nos experts locaux sont à votre disposition pour créer le voyage sur mesure 
                                qui correspond à vos rêves et à votre budget.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition transform hover:scale-105 shadow-lg flex items-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    Nous appeler
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5" />
                                    Chat en direct
                                </button>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-4">Contact rapide</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5" />
                                    <span>contact@globush-travel.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    <span>+237 6XX XX XX XX</span>
                                </div>
                                <div className="pt-4">
                                    <p className="text-blue-200 text-sm">Suivez-nous</p>
                                    <div className="flex gap-4 mt-2">
                                        {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                                            <button key={index} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                                                <Icon className="w-5 h-5" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}