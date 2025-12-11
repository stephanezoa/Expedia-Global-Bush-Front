import React from 'react';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdwon';
import LanguageDropdown from './LanguageDropdown';
import ShopDropdown from './ShopDropdown';
import SearchBar  from './SearchBar';
import FlightSearch from './FlightSearch';
import { useState } from 'react';
import HotelsSearch from './HotelsSearch';
import StaySearch from './StaySearch';
import CarRentalSearch from './CarRentalSearch';
import pays2 from "../assets/pays2.jpg";

export default function Hero() {
    const [activeTab, setActiveTab] = useState("vols"); // onglet par défaut

    const tabs = [
        { id: "vols", label: "Vols", img: ""},
        { id: "hotels", label: "Hôtels" },
        { id: "sejours", label: "Séjours" },
        { id: "transferts", label: "Transferts" },
        { id: "voitures", label: "Voitures" },
        { id: "assurances", label: "Assurances" },
    ];
  return (
    <section id="accueil" className="relative w-full h-auto md:h-[400px]">
        <div className='relative h-[200px] flex md:h-[400px] overflow-hidden'>

            <div className="absolute inset-0 z-0">
                <img 
                  src={pays2}
                  alt="image paysage"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-white/10"></div>
            </div>
            
            <div className="relative z-10 px-4 ml-100 mt-10 md:mt-15 lg:mt-10 items-center justify-start">
              <h1 className="text-sm md:text-3xl lg:text-3xl font-bold text-white mb-3">
                Trouver votre besoin
              </h1>
            </div>
        </div>
        
        <div className='absolute w-[90%] left-0 md:left-8 md:w-[90%] lg:w-[70%] mx-auto right-0 top-30 md:top-40  lg:top-25 rounded-lg shadow-2xl bg-white z-40 p-5'>
        
            <nav className="text-xs md:text-sm flex justify-center items-center space-x-1 md:space-x-10 text-md">
            {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative space-y-2  flex-row  justify-center items-center  transition duration-300 font-medium ${activeTab === tab.id ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"}`} >
                  <span>{tab.label}</span>
                  <span className={` absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </button>
            ))}
            </nav>

            <hr className="h-px bg-gray-300 border-0 mt-6 mb-5" />
            
        <div className="">
          {activeTab === "vols" && <div>
           <form action="">
            <div className='flex items-center justify-start gap-3'>
               <FlightSearch />
            </div>
           </form>
            
            </div>}
          {activeTab === "hotels" && 
            <div>
              <form action="">
            <div className='flex items-center justify-start gap-3'>
               <HotelsSearch />
            </div>
           </form>
            </div>
          }
          {activeTab === "sejours" && 
            <div>
                <form action="">
                  <div className='flex items-center justify-start gap-3'>
                    <StaySearch />
                  </div>
                </form>
            </div>
          }
          {activeTab === "transferts" && 
            <div>
              <form action="">
                  <div className='flex items-center justify-start gap-3'>
                    <StaySearch />
                  </div>
                </form>
            </div>
          }
          {activeTab === "voitures" && 
          <div>
              <form action="">
                  <div className='flex items-center justify-start gap-3'>
                    <CarRentalSearch />
                  </div>
                </form>
            </div>
          }
          {activeTab === "assurances" && 
            <form action="">
                  <div className='flex items-center justify-start gap-3'>
                    <StaySearch />
                  </div>
                </form>
          }
        </div>

      </div>
       
    </section>
  );
}