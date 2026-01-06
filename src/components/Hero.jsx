import React, { useState } from 'react';
import { Search, X, Plane, Hotel, Briefcase, MapPin, Car, Shield, Globe, Calendar, Users, ChevronDown } from 'lucide-react';
import FlightSearch from './FlightSearch';
import HotelsSearch from './HotelsSearch';
import StaySearch from './StaySearch';
import CarRentalSearch from './CarRentalSearch';

import imageFond from "../assets/pays2.jpg";

export default function Hero() {
    const [activeTab, setActiveTab] = useState("vols");
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    const tabs = [
        { id: "vols", label: "Vols", icon: Plane, color: "text-blue-600" },
        { id: "hotels", label: "Hôtels", icon: Hotel, color: "text-green-600" },
        { id: "sejours", label: "Séjours", icon: Briefcase, color: "text-purple-600" },
        { id: "transferts", label: "Transferts", icon: MapPin, color: "text-orange-600" },
        { id: "voitures", label: "Voitures", icon: Car, color: "text-red-600" },
        { id: "assurances", label: "Assurances", icon: Shield, color: "text-indigo-600" },
    ];

    const renderSearchComponent = () => {
        switch (activeTab) {
            case "vols":
                return <FlightSearch />;
            case "hotels":
                return <HotelsSearch />;
            case "sejours":
                return <StaySearch />;
            case "voitures":
                return <CarRentalSearch />;
            default:
                return (
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Destination"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                                Rechercher
                            </button>
                        </div>
                    </div>
                );
        }
    };

    const MobileSearchTrigger = () => (
        <button
            onClick={() => setIsMobileSearchOpen(true)}
            className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-2xl px-6 py-4 flex items-center space-x-3 z-30 animate-bounce"
        >
            <Search className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-700">Rechercher un voyage</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
    );

    const FullSearchForm = () => (
        <div className="relative">
            {/* Bouton fermeture mobile */}
            {isMobileSearchOpen && (
                <button
                    onClick={() => setIsMobileSearchOpen(false)}
                    className="absolute -top-12 right-0 md:hidden p-2 rounded-full bg-white shadow-lg"
                    aria-label="Fermer"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>
            )}

            {/* Onglets */}
            <div className="flex justify-center mb-6">
                <div className="inline-flex bg-white rounded-full p-1 shadow-md">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <tab.icon className={`w-4 h-4 mr-2 ${activeTab === tab.id ? 'text-white' : tab.color}`} />
                            <span className="text-sm font-medium">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Formulaire de recherche */}
            <div className="bg-white rounded-2xl shadow-2xl p-6">
                {renderSearchComponent()}
            </div>

            {/* Suggestions rapides */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                {['Paris', 'New York', 'Bali', 'Tokyo', 'Londres', 'Dubai'].map((city) => (
                    <button
                        key={city}
                        className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all"
                    >
                        ✈️ {city}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <section className="relative w-full min-h-screen flex justify-center overflow-hidden pt-20">
            {/* Background Image avec overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={imageFond}
                    alt="Voyage et aventure"
                    className="w-full h-full object-cover"
                />
                {/* Blue glass overlay */}
    <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-sm"></div>
    {/* Gradient supplémentaires */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/10 via-transparent to-purple-600/20"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Explorez le <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Monde </span>
                        avec Confiance
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                        Réservez vos vols, hôtels, voitures et plus encore en quelques clics.
                        L'aventure commence ici.
                    </p>
                 
                </div>

                {/* Formulaire de recherche - Desktop */}
                <div className="hidden md:block w-full max-w-5xl mx-auto">
                    <FullSearchForm />
                </div>

                {/* Trigger Mobile */}
                <MobileSearchTrigger />
            </div>

            {/* Modal Mobile */}
            {isMobileSearchOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div 
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsMobileSearchOpen(false)}
                    />
                    <div className=" bg-white rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto animate-slideUp">
                        <FullSearchForm />
                    </div>
                </div>
            )}

            {/* Bannière promotionnelle */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-3">
                            <Globe className="w-6 h-6 text-white" />
                            <p className="text-white font-bold text-sm md:text-base">
                                 Votre été de football - Économisez sur les voyages
                            </p>
                        </div>
                        <button className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                            Voir toutes les offres →
                        </button>
                    </div>
                </div>
            </div>

            {/* Défilement indication */}
            <div className="absolute bottom-24 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}