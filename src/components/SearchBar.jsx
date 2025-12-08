import { useState } from "react";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("vols");

  const tabs = [
    { id: "vols", label: "Vols", icon: "✈️" },
    { id: "hotels", label: "Hôtels", icon: "🏨" },
    { id: "voitures", label: "Voitures", icon: "🚗" },
    { id: "sejours", label: "Séjours", icon: "🌴" },
    { id: "transferts", label: "Transferts", icon: "🚐" },
  ];

  return (
    <div className="absolute w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] left-1/2 transform -translate-x-1/2 top-32 md:top-40 lg:top-48 rounded-2xl shadow-2xl bg-white z-40 p-4 md:p-6">
      
      {/* Tabs de navigation */}
      <nav className="flex overflow-x-auto scrollbar-hide pb-4">
        <div className="flex space-x-2 md:space-x-4 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-medium whitespace-nowrap
                ${activeTab === tab.id 
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-sm md:text-base font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Contenu dynamique - Onglet Vols */}
      <div className="p-4">
        
        {/* En-tête avec slogan */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              <span className="text-blue-600">Fly for less,</span> Guaranteed!
            </h2>
            <p className="text-gray-600 text-sm mt-1">Find the best deals for your next adventure</p>
          </div>
          
          {/* Type de voyage */}
          <div className="hidden md:flex bg-gray-100 rounded-lg p-1">
            {["Aller-retour", "Aller simple", "Multi-destinations"].map((type) => (
              <button
                key={type}
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow transition"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Formulaire de recherche - DESIGN ONLY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
          
          {/* De */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              De
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <input
                type="text"
                readOnly
                className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition cursor-pointer group-hover:border-blue-300"
                value="Yaoundé (YAO)"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 font-bold">
                YAOUNDÉ
              </div>
            </div>
          </div>

          {/* Vers */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              À
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <input
                type="text"
                readOnly
                className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition cursor-pointer group-hover:border-blue-300"
                placeholder="Ville, aéroport ou lieu"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                👆
              </div>
            </div>
          </div>

          {/* Départ */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Départ
            </label>
            <div className="relative group">
              <input
                type="text"
                readOnly
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition cursor-pointer group-hover:border-blue-300"
                value="N'importe quand"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                📅
              </div>
            </div>
          </div>

          {/* Retour */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Retour
            </label>
            <div className="relative group">
              <input
                type="text"
                readOnly
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition cursor-pointer group-hover:border-blue-300"
                value="N'importe quand"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                📅
              </div>
            </div>
          </div>

          {/* Passagers & Classe */}
          <div className="lg:col-span-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Voyageurs
            </label>
            <div className="relative group">
              <div className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white cursor-pointer group-hover:border-blue-300 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">👤</span>
                    <span className="font-bold text-gray-900">1</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-gray-600 text-sm">Économique</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Dropdown design */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Adultes</div>
                      <div className="text-sm text-gray-500">12+ ans</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition">-</button>
                      <span className="font-bold text-lg w-8 text-center">1</span>
                      <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition">+</button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-medium mb-2">Classe</div>
                    <div className="grid grid-cols-2 gap-2">
                      {["Économique", "Affaires", "Première", "Premium"].map((cls) => (
                        <div
                          key={cls}
                          className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                        >
                          {cls}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton Rechercher */}
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 invisible">
              Rechercher
            </label>
            <button className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center justify-center space-x-2 px-4 py-4">
              <span className="text-lg">🔍</span>
              <span className="text-lg">Explorer</span>
            </button>
          </div>

        </div>

        {/* Options supplémentaires */}
        <div className="flex flex-wrap items-center justify-between pt-6 mt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded border border-gray-300 mr-2 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-blue-600"></div>
              </div>
              <span className="text-sm text-gray-700">Vols directs seulement</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-5 h-5 rounded border border-gray-300 mr-2"></div>
              <span className="text-sm text-gray-700">Bagages inclus</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-5 h-5 rounded border border-gray-300 mr-2"></div>
              <span className="text-sm text-gray-700">Annulation gratuite</span>
            </div>
          </div>
          
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4 sm:mt-0 flex items-center">
            <span>Recherche flexible</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Widget Hotels */}
        <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🏨</span>
                <h4 className="text-lg font-bold text-gray-900">Check accommodation with Global Bush Hotels</h4>
              </div>
              <p className="text-sm text-gray-600">Find the perfect stay near your destination with our exclusive hotel deals</p>
            </div>
            <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition shadow hover:shadow-md whitespace-nowrap">
              View hotels
            </button>
          </div>
        </div>

      </div>

      {/* Indicateur pour les autres onglets */}
      {activeTab !== "vols" && (
        <div className="p-8 text-center">
          <div className="text-5xl mb-4">
            {tabs.find(t => t.id === activeTab)?.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Recherche {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}
          </h3>
          <p className="text-gray-600">Cliquez sur "Explorer" pour lancer votre recherche</p>
        </div>
      )}
    </div>
  );
}