import React from 'react';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdwon';
import LanguageDropdown from './LanguageDropdown';
import ShopDropdown from './ShopDropdown';
import { useState } from 'react';
export default function Hero() {
    const [activeTab, setActiveTab] = useState("vols"); // onglet par défaut

    const tabs = [
        { id: "vols", label: "Vols" },
        { id: "hotels", label: "Hôtels" },
        { id: "sejours", label: "Séjours" },
        { id: "transferts", label: "Transferts" },
        { id: "voitures", label: "Voitures" },
        { id: "assurances", label: "Assurances" },
    ];
  return (
    <section id="accueil" className="relative pt-0 pb-20 md:pb-40 lg:pb-60 ">
        <div className='relative h-[200px] md:h-[400px] flex justify-center overflow-hidden'>

            <div className="absolute inset-0 z-0">
                <img 
                src="/src/assets/pays2.jpg" 
                alt="image paysage" 
                className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative z-10 text-center px-4 mt-10 md:mt-15 lg:mt-20">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
                Voyages sans limite
                </h1>
            </div>
        </div>
        
        <div className='absolute w-[90%] left-0 md:left-8 md:w-[90%] lg:w-[60%] mx-auto right-0 top-30 md:top-40 rounded-3xl shadow-xl bg-white z-40 p-5'>
        
            <nav className="text-xs md:text-sm flex justify-center space-x-1 md:space-x-10 text-md">
            {tabs.map((tab) => (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                    relative transition duration-300 font-medium
                    ${activeTab === tab.id ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"}
                `}
                >
                {tab.label}
                <span
                    className={`
                    absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                    ${activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                ></span>
                </button>
            ))}
            </nav>

            <hr className="h-px bg-gray-300 border-0 mt-6 mb-5" />
            

        <div className="p-4">
          {activeTab === "vols" && <div>✈️ <b>Recherchez vos vols</b> — Formulaire + filtres…</div>}
          {activeTab === "hotels" && <div>🏨 <b>Découvrez nos hôtels</b> — Recherche + cartes…</div>}
          {activeTab === "sejours" && <div>🌴 <b>Nos meilleurs séjours</b> — Packages vacances…</div>}
          {activeTab === "transferts" && <div>🚗 <b>Réservez un transfert</b> — Aéroport ↔ hôtel…</div>}
          {activeTab === "voitures" && <div>🚘 <b>Louez une voiture</b> — Agences, prix…</div>}
          {activeTab === "assurances" && <div>🛡️ <b>Assurances voyage</b> — Protection & garanties…</div>}
        </div>

      </div>
       
    </section>
  );
}