import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Plane, Hotel, Briefcase, MapPin, Car, Shield } from 'lucide-react';
import FlightSearch from './FlightSearch';
import HotelsSearch from './HotelsSearch';
import StaySearch from './StaySearch';
import CarRentalSearch from './CarRentalSearch';

import imageFond from "../assets/pays2.jpg";

export default function Hero() {
    const [activeTab, setActiveTab] = useState("vols");
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false); // Nouvel état pour le mobile

    const tabs = [
        { id: "vols", label: "Vols", icon: Plane },
        { id: "hotels", label: "Hôtels", icon: Hotel },
        { id: "sejours", label: "Séjours", icon: Briefcase },
        { id: "transferts", label: "Transferts", icon: MapPin },
        { id: "voitures", label: "Voitures", icon: Car },
        { id: "assurances", label: "Assurances", icon: Shield },
    ];

    const renderSearchComponent = () => {
        switch (activeTab) {
            case "vols":
                return <FlightSearch />;
            case "hotels":
                return <HotelsSearch />;
            case "sejours":
            case "transferts":
            case "assurances":
                return <StaySearch />; // Utilisez un composant générique pour les autres si besoin
            case "voitures":
                return <CarRentalSearch />;
            default:
                return null;
        }
    };

    // Ferme le formulaire complet, utilisé sur mobile
    const closeMobileSearch = () => {
        setIsMobileSearchOpen(false);
    }

    const SearchFormContainer = ({ children }) => (
        <div className={`absolute w-[95%] sm:w-[90%] lg:w-[70%] mx-auto right-0 left-0 
                         top-24 md:top-32 lg:top-20 rounded-md shadow-2xl bg-white z-40 p-3 sm:p-5 
                         transform transition-all duration-300 ${isMobileSearchOpen ? 'translate-y-0' : 'md:translate-y-0'}`}>
            {children}
        </div>
    );

   
    const MobileSimpleSearch = () => (
        <div 
            className="md:hidden absolute w-[95%] mx-auto right-0 left-0 top-60 rounded-xl shadow-2xl bg-white z- p-4 transition duration-300"
            onClick={() => setIsMobileSearchOpen(true)} // Ouvre le formulaire complet au clic
        >
            <div className="flex items-center space-x-3 text-gray-500">
                <Search className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Où souhaitez-vous voyager ?</span>
            </div>
        </div>
    );

    
    const FullSearchForm = () => (
        <div className=''>
            {/* Bouton de fermeture sur Mobile */}
            <button 
                onClick={closeMobileSearch}
                className="absolute top-3 right-3 md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-600"
                aria-label="Fermer la recherche"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Onglets de Navigation */}
            <nav className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-10">
                {tabs.map((tab) => (
                    <button 
                        key={tab.id} 
                        onClick={() => setActiveTab(tab.id)} 
                        className={`group relative flex flex-col sm:flex-row items-center space-x-1 py-1 transition duration-300 font-medium 
                                    ${activeTab === tab.id ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"}`} 
                    >
                        <tab.icon className="w-4 h-4 md:w-5 md:h-5 hidden sm:inline-block" />
                        <span className="text-xs md:text-sm whitespace-nowrap">{tab.label}</span>
                        <span className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-blue-600 transition-all duration-300 ${activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </button>
                ))}
            </nav>

            <hr className="h-px bg-gray-200 border-0 mt-6 mb-5" />
            
            <div className="p-1">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='flex items-center justify-start gap-3'>
                        {renderSearchComponent()}
                    </div>
                </form>
            </div>
        </div>
    );

   
    return (
        <section id="accueil" className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[450px]">
            <div className='relative h-full overflow-hidden'>
                <div className="absolute inset-0 z-0">
                    <img 
                      src={imageFond}
                      alt="Paysage de voyage inspirant"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay pour le contraste */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Texte d'Introduction */}
                <div className="relative z- max-w-7xl mx-auto px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
                    Trouvez votre prochaine aventure.
                  </h1>
                  <p className="text-lg text-white/90 drop-shadow-md">
                    Vols, hôtels, séjours... Le monde est à portée de clic.
                  </p>
                </div>

            <div className='p-5 bg-red-700 w-full flex items-center justify-center gap-4'>
              <p className="text-white text-xs"><span className='font-bold text-sm'>Your summer of soccer </span> Save on match travel across flights, stays, and more. <span className='text-underline'>See all deals</span></p>
            </div>
           
            </div>
            
            {!isMobileSearchOpen && <div className="md:hidden"> <MobileSimpleSearch /> </div>}

            <div className="hidden md:block">
                <SearchFormContainer>
                    <FullSearchForm />
                </SearchFormContainer>
            </div>

            {isMobileSearchOpen && (
                <div className="md:hidden fixed inset-0 bg-black/50 z-40 flex items-start justify-center p-4 pt-16">
                    <SearchFormContainer>
                        <FullSearchForm />
                    </SearchFormContainer>
                </div>
            )}
            <div className='p-5 bg-red-700 w-full flex items-center justify-center gap-4'>
              <p className="text-white text-xs"><span className='font-bold text-sm'>Your summer of soccer </span> Save on match travel across flights, stays, and more. <span className='text-underline'>See all deals</span></p>
            </div>
        </section>
    );
}