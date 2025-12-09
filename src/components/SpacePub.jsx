import React, { useState, useEffect } from 'react';
import { TicketPercent, ChevronLeft, ChevronRight, Star, Shield, Globe, Award } from "lucide-react";  
import { Link } from 'react-router-dom';

export default function SpacePub() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const ads = [
        {
            id: 1,
            title: "Séjour Premium",
            subtitle: "Luxe et Confort",
            description: "Profitez de 30% de réduction sur nos hôtels 5 étoiles. Petit-déjeuner inclus et annulation gratuite.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
            icon: <Star className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500",
            buttonText: "Voir les offres"
        },
        {
            id: 2,
            title: "Vols Internationaux",
            subtitle: "Destinations Éloignées",
            description: "Jusqu'à -40% sur les vols longue distance. Bagages inclus et siège premium gratuit.",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800",
            icon: <Globe className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-400",
            buttonText: "Explorer les vols"
        },
        {
            id: 3,
            title: "Assurance Voyage",
            subtitle: "Voyagez Tranquille",
            description: "Assurance complète incluant annulation, bagages et assistance médicale 24/7.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w-800",
            icon: <Shield className="w-6 h-6" />,
            color: "from-emerald-500 to-teal-400",
            buttonText: "S'assurer"
        },
        {
            id: 4,
            title: "Location Voiture",
            subtitle: "Mobilité Totale",
            description: "Offre spéciale : -25% sur les locations longue durée. Kilométrage illimité inclus.",
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800",
            icon: <Award className="w-6 h-6" />,
            color: "from-orange-500 to-amber-400",
            buttonText: "Louer maintenant"
        }
    ];

    // Carrousel automatique
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % ads.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [isPaused, ads.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % ads.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + ads.length) % ads.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full max-w-7xl mx-auto my-8 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                
                {/* Première boîte - Parrainage */}
                <div className="lg:col-span-1 h-[280px] md:h-[320px] lg:h-[400px] flex items-center justify-start p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative group">
                    <div className="relative z-10 w-full">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-blue-500 rounded-lg">
                                <TicketPercent className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-blue-700 font-bold text-sm md:text-base tracking-wide">
                                PARRAINEZ UN(E) AMI(E)
                            </span>
                        </div>
                        
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Invitez des amis et recevez jusqu'à <span className="text-blue-600">400€</span> de crédit
                        </h2>
                        
                        <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
                            Partagez le bonheur de voyager et profitez ensemble d'avantages exclusifs
                        </p>
                        
                        <Link 
                            to={'/login'} 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Prendre l'avion gratuitement
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    
                    {/* Illustration flottante */}
                    <div className="absolute -right-6 -bottom-6 md:-right-4 md:-bottom-4 lg:-right-2 lg:-bottom-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full blur-xl opacity-50"></div>
                            <img 
                                src="/src/assets/cahs-removebg-preview.png" 
                                alt="Crédits voyage" 
                                className="relative w-full h-full object-contain animate-float"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Deuxième boîte - Carrousel de pubs */}
                <div className="lg:col-span-2 h-[400px] md:h-[450px] lg:h-[400px] overflow-hidden rounded-2xl shadow-xl relative group"
                     onMouseEnter={() => setIsPaused(true)}
                     onMouseLeave={() => setIsPaused(false)}>
                    
                    {/* Carrousel */}
                    <div className="relative h-full">
                        {ads.map((ad, index) => (
                            <div
                                key={ad.id}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${ad.color} opacity-90`}></div>
                                
                                {/* Image de fond */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${ad.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/30"></div>
                                </div>
                                
                                {/* Contenu */}
                                <div className="relative h-full flex flex-col justify-between p-8 md:p-10 text-white">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                                {ad.icon}
                                            </div>
                                            <div>
                                                <span className="text-sm font-semibold tracking-wider opacity-90">
                                                    {ad.subtitle}
                                                </span>
                                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1">
                                                    {ad.title}
                                                </h3>
                                            </div>
                                        </div>
                                        
                                        <p className="text-lg md:text-xl opacity-95 max-w-xl leading-relaxed">
                                            {ad.description}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                            {ad.buttonText}
                                        </button>
                                        
                                        <div className="hidden md:flex items-center gap-2">
                                            {ads.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => goToSlide(idx)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                        idx === currentSlide 
                                                            ? 'w-6 bg-white' 
                                                            : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Boutons de navigation */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                        
                        {/* Indicateurs de progression (mobile) */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                            {ads.map((_, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`w-2 h-2 rounded-full cursor-pointer ${
                                        idx === currentSlide ? 'bg-white' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                        
                        <div className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
                            <span className="text-sm font-medium text-white">
                                {currentSlide + 1} / {ads.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(-20deg); }
                    50% { transform: translateY(-10px) rotate(-20deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}