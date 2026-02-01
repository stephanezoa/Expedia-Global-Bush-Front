import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-2},${lat-2},${lng+2},${lat+2}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-2},${lat-2},${lng+2},${lat+2}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-indigo-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-indigo-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Satellite
          </button>
        </div>
      )}
      <div className="relative w-full overflow-hidden rounded-lg" style={{ height }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={getMapUrl()}
          style={{ border: 0 }}
          allowFullScreen
          title="Carte interactive Régions Anglophones"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">
            Voir sur OpenStreetMap
          </a>
        </div>
      </div>
    </div>
  );
};

// Composant Carte de l'itinéraire
const RouteMap = () => {
  const [mapType, setMapType] = useState('roadmap');
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-center text-lg">Carte des Régions Anglophones</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-indigo-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-indigo-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Satellite
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,4.0,11.5,6.5&layer=mapnik&marker=5.959,10.146&marker=4.155,9.242"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Régions Anglophones"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/5.5/10.2" target="_blank" rel="noopener noreferrer">
            Agrandir la carte
          </a>
        </div>
      </div>
      
      <div className="inline-flex flex-col gap-3 bg-gray-50 p-6 rounded mt-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></span>
          <span className="text-sm">Nuitée</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-indigo-800 border-2 border-gray-300"></span>
          <span className="text-sm">Bamenda (Nord-Ouest)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Buea (Sud-Ouest)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Limbé (Sud-Ouest)</span>
        </div>
      </div>
    </div>
  );
};

export default function Regionsanglophones() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bamenda');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌋', title: 'Mont Cameroun', desc: 'Point culminant d\'Afrique de l\'Ouest (4095m)' },
    { icon: '🏛️', title: 'Culture Britannique', desc: 'Héritage colonial et traditions anglophones' },
    { icon: '🦁', title: 'Parcs Naturels', desc: 'Biodiversité unique et primates rares' },
    { icon: '🍵', title: 'Plantations de Thé', desc: 'Visite des célèbres plantations de thé' },
    { icon: '🏖️', title: 'Plages Volcaniques', desc: 'Sable noir et paysages spectaculaires' },
    { icon: '👑', title: 'Chefferies', desc: 'Cultures traditionnelles préservées' },
  ];

  const regions = [
    { name: 'Nord-Ouest', capital: 'Bamenda', color: 'bg-indigo-100', textColor: 'text-indigo-800', features: ['Chefferies traditionnelles', 'Montagnes escarpées', 'Culture anglophone'] },
    { name: 'Sud-Ouest', capital: 'Buea', color: 'bg-blue-100', textColor: 'text-blue-800', features: ['Mont Cameroun', 'Plantations de thé', 'Littoral atlantique'] },
    { name: 'Limbé', capital: 'Limbé', color: 'bg-teal-100', textColor: 'text-teal-800', features: ['Plages de sable noir', 'Jardin botanique', 'Refuge des primates'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero - Image Mont Cameroun ou paysage anglophone */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇬🇧</span>
          <span>A | ANGLOPHONE</span>
        </div>
        
        {/* Sélecteur d'année */}
        <div className="absolute top-6 right-6 flex gap-4 bg-white px-6 py-3 shadow-lg z-10">
          <button 
            onClick={() => setSelectedYear('2026')}
            className={`text-lg font-semibold transition-colors ${selectedYear === '2026' ? 'text-black' : 'text-gray-400'}`}
          >
            2026
          </button>
          <button 
            onClick={() => setSelectedYear('2027')}
            className={`text-lg font-semibold transition-colors ${selectedYear === '2027' ? 'text-black' : 'text-gray-400'}`}
          >
            2027
          </button>
        </div>
        
        {/* Titre et décoration */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Régions Anglophones : Nord-Ouest & Sud-Ouest</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              Découvrez l'autre visage du Cameroun : les régions anglophones avec leur culture unique, le mont Cameroun et leurs paysages spectaculaires
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et régions */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">8</div>
            <div className="text-xs mt-1">Jours</div>
          </div>
          <div className="bg-black/90 text-white px-4 py-4 flex items-center backdrop-blur-sm">
            <div className="text-5xl font-bold">/</div>
          </div>
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">2</div>
            <div className="text-xs mt-1">Régions</div>
          </div>
        </div>
        
        {/* Indicateur de destination principale */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
            <span className="text-sm font-semibold">CAMEROUN ANGLOPHONE</span>
          </div>
        </div>
      </div>

      {/* Section Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Contenu principal (2/3) */}
          <div className="lg:col-span-2">
            {/* Titre et Code du Circuit */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm mb-2">
                <span className="font-semibold">RÉGIONS ANGLOPHONES:</span>
                <span className="bg-indigo-800 text-white px-3 py-1 font-bold">NORD-OUEST & SUD-OUEST</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Bamenda à Limbé</span>
                <button className="ml-auto border-2 border-indigo-800 text-indigo-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-indigo-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Immersion dans la culture anglophone camerounaise</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-indigo-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-indigo-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('regions')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'regions' ? 'border-b-4 border-indigo-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  RÉGIONS ANGLOPHONES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-indigo-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  HÉBERGEMENT
                </button>
              </div>
            </div>

            {/* Contenu des onglets */}
            {activeTab === 'apercu' && (
              <div>
                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 8 jours vous plonge au cœur des régions anglophones du Cameroun, un territoire au charme unique où se mêlent héritage britannique et traditions africaines. Du Nord-Ouest montagneux au Sud-Ouest côtier, vous découvrirez des paysages spectaculaires, une culture riche et des sites naturels exceptionnels comme le mont Cameroun, point culminant d'Afrique de l'Ouest.
                </p>

                {/* Section Points forts */}
                <div className="bg-indigo-50 border-l-4 border-indigo-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">Les Trésors des Régions Anglophones</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-indigo-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences incluses */}
                <div className="border-l-4 border-indigo-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Anglophones Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Randonnée sur le mont Cameroun</strong> (4095m)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Visite des plantations de thé</strong> de Tole</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Découverte des chefferies</strong> traditionnelles du Nord-Ouest</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Rencontre avec la communauté</strong> anglophone</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Visite du jardin botanique</strong> de Limbé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Détente sur les plages</strong> de sable noir volcanique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Exploration des lacs de cratère</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-800 mt-1">•</span>
                        <span><strong>Transport</strong> en véhicule privé avec chauffeur anglophone</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les régions anglophones */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi les Régions Anglophones ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Les régions du Nord-Ouest et du Sud-Ouest représentent l'héritage britannique au Cameroun. Avec leur culture distincte, leur architecture coloniale préservée et leurs paysages uniques, elles offrent une expérience différente du reste du pays.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Culture anglophone</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Héritage britannique</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Traditions préservées</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude maximale</div>
                      <div className="text-3xl font-bold text-indigo-800">4,095m</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Régions visitées</div>
                      <div className="text-3xl font-bold text-indigo-800">2</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits d'hébergement</div>
                      <div className="text-3xl font-bold text-indigo-800">7</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Kilomètres parcourus</div>
                      <div className="text-3xl font-bold text-indigo-800">450</div>
                    </div>
                  </div>
                </div>

                {/* Section Carte */}
                <div className="mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-1">
                      <RouteMap />
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-4 text-center text-lg">Géographie des Régions Anglophones</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Le Nord-Ouest est une région montagneuse avec un climat frais, tandis que le Sud-Ouest combine montagnes, forêts tropicales et littoral atlantique. Le mont Cameroun, volcan actif, domine toute la région.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Température Nord-Ouest</div>
                            <div className="text-indigo-800 font-bold">15-25°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température Sud-Ouest</div>
                            <div className="text-indigo-800 font-bold">22-30°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Langues principales</div>
                            <div className="text-indigo-800 font-bold">Anglais, Pidgin</div>
                          </div>
                          <div>
                            <div className="font-semibold">Meilleure période</div>
                            <div className="text-indigo-800 font-bold">Nov-Avr</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Randonnées */}
                <div className="mb-10 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🥾</span>
                    <span className="font-semibold text-lg">RANDONNÉES INCLUSES</span>
                  </div>
                  <div className="flex flex-wrap gap-8">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Randonnées guidées</div>
                      <div className="text-3xl font-bold text-indigo-800">4</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Altitude max atteinte</div>
                      <div className="text-3xl font-bold text-indigo-800">2,800m</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Distance totale</div>
                      <div className="text-3xl font-bold text-indigo-800">35km</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    Des randonnées adaptées à tous les niveaux, des balades culturelles aux ascensions partielles du mont Cameroun. Équipement fourni et guides de montagne anglophones certifiés.
                  </p>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée des Régions Anglophones</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,4.0,11.5,6.5&layer=mapnik&marker=5.959,10.146&marker=4.155,9.242"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée régions anglophones"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=9/5.5/10.2" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Bamenda */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BAMENDA</span>
                          <span className="text-sm text-gray-600">Capitale du Nord-Ouest</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à Bamenda, accueil par votre guide anglophone. Première immersion dans l'ambiance anglophone avec une visite du marché central. Installation à l'hôtel et briefing sur le déroulement du voyage. Dîner de bienvenue avec spécialités locales.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Bamenda et environs */}
                  <div className="border-2 border-gray-300 overflow-hidden border-indigo-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉCOUVERTE DE BAMENDA</span>
                          <span className="text-sm text-gray-600">Marchés et chefferies traditionnelles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-indigo-200">
                        <h4 className="text-xl font-semibold mb-3 text-indigo-800">Immersion culturelle</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la découverte de Bamenda : visite du musée régional, du marché d'artisanat et du quartier administratif. Après-midi : excursion vers la chefferie de Nkwen, l'une des plus importantes de la région. Rencontre avec les notables et découverte des traditions. Spectacle de danses traditionnelles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Région de Bafut */}
                  <div className="border-2 border-gray-300 overflow-hidden border-indigo-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CHEFFERIE DE BAFUT</span>
                          <span className="text-sm text-gray-600">Site du patrimoine mondial UNESCO</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-indigo-200">
                        <h4 className="text-xl font-semibold mb-3 text-indigo-800">Journée historique</h4>
                        <p className="text-justify mb-4">
                          Visite de la célèbre chefferie de Bafut, inscrite sur la liste indicative du patrimoine mondial de l'UNESCO. Découverte du palais royal, du musée et des cases sacrées. Rencontre avec le roi (Fon) ou ses représentants. Randonnée dans les collines environnantes avec vue sur les montagnes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Route vers Buea */}
                  <div className="border-2 border-gray-300 overflow-hidden border-indigo-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BAMENDA - BUEA</span>
                          <span className="text-sm text-gray-600">Traversée des paysages montagneux</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-indigo-200">
                        <h4 className="text-xl font-semibold mb-3 text-indigo-800">Voyage vers le Sud-Ouest</h4>
                        <p className="text-justify mb-4">
                          Route spectaculaire à travers les montagnes vers Buea, capitale du Sud-Ouest. Arrêts à Mbouda et Dschang. Arrivée à Buea, ville au pied du mont Cameroun. Installation à l'hôtel avec vue sur le volcan. Dîner avec spécialités du Sud-Ouest.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Mont Cameroun */}
                  <div className="border-2 border-gray-300 overflow-hidden border-indigo-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ASCENSION MONT CAMEROUN</span>
                          <span className="text-sm text-gray-600">Jusqu'à 2800m d'altitude</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-indigo-200">
                        <h4 className="text-xl font-semibold mb-3 text-indigo-800">Défi montagneux</h4>
                        <p className="text-justify mb-4">
                          Journée d'ascension partielle du mont Cameroun (4095m). Randonnée jusqu'à la hutte 2 (2800m) à travers la forêt tropicale, puis les paysages lunaires volcaniques. Vue imprenable sur l'océan Atlantique et les villes côtières. Descente et retour à Buea. Soirée de repos bien méritée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Plantations de thé et Limbé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-indigo-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PLANTATIONS & LIMBÉ</span>
                          <span className="text-sm text-gray-600">Thé et plages de sable noir</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-indigo-200">
                        <h4 className="text-xl font-semibold mb-3 text-indigo-800">Journée agricole et balnéaire</h4>
                        <p className="text-justify mb-4">
                          Visite des célèbres plantations de thé de Tole, avec explication du processus de production. Route vers Limbé, ville côtière au charme colonial. Détente sur les plages de sable noir volcanique. Visite du jardin botanique de Limbé et du centre de réhabilitation des primates.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Limbé et environs */}
                  <div className="border-2 border-gray-300 overflow-hidden border-indigo-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION DE LIMBÉ</span>
                          <span className="text-sm text-gray-600">Culture et nature côtière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-indigo-200">
                        <h4 className="text-xl font-semibold mb-3 text-indigo-800">Dernière journée d'exploration</h4>
                        <p className="text-justify mb-4">
                          Visite du musée de Limbé consacré à l'histoire de la région. Excursion aux chutes de Bakingili. Rencontre avec les pêcheurs locaux et découverte de leurs techniques traditionnelles. Après-midi libre pour profiter de la plage. Dîner d'adieu avec fruits de mer frais.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ de Douala */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-indigo-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE DOUALA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport de Douala pour votre vol de retour, avec dans le cœur les souvenirs inoubliables des régions anglophones du Cameroun.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'regions' && (
              <div>
                {/* Section dédiée aux régions anglophones */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-indigo-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-indigo-800">Les Régions Anglophones</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600" 
                        alt="Mont Cameroun" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Deux Régions, Une Culture Commune</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Le Nord-Ouest et le Sud-Ouest forment les régions anglophones du Cameroun, héritage de la colonisation britannique. Malgré leurs différences géographiques, elles partagent une culture commune, une histoire similaire et une identité forte qui les distingue du reste du pays.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Ces régions offrent une immersion unique dans la culture anglophone camerounaise, avec ses traditions, sa cuisine et son mode de vie distincts.
                      </p>
                    </div>
                  </div>

                  {/* Les régions */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6 text-center">Présentation des Régions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {regions.map((region, index) => (
                        <div key={index} className={`${region.color} ${region.textColor} p-6 rounded-lg shadow border`}>
                          <h5 className="font-semibold text-xl mb-3">{region.name}</h5>
                          <div className="text-sm font-medium mb-2">Capitale : {region.capital}</div>
                          <div className="mb-4">
                            <div className="text-sm font-medium mb-1">Caractéristiques :</div>
                            <ul className="text-sm list-disc list-inside">
                              {region.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Culture et traditions */}
                  <div className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-6 text-indigo-800">Culture et Traditions Anglophones</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-4xl mb-3">🗣️</div>
                        <h5 className="font-semibold mb-2">Langues</h5>
                        <p className="text-sm text-gray-700">Anglais officiel, Pidgin camerounais, langues locales</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-3">🎭</div>
                        <h5 className="font-semibold mb-2">Traditions</h5>
                        <p className="text-sm text-gray-700">Chefferies, danses masquées, festivals traditionnels</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-3">🍽️</div>
                        <h5 className="font-semibold mb-2">Cuisine</h5>
                        <p className="text-sm text-gray-700">Influence britannique et africaine, plats épicés</p>
                      </div>
                    </div>
                    <p className="text-center mt-6 text-gray-700">
                      La culture anglophone est un mélange unique d'influences britanniques et de traditions africaines, créant une identité culturelle distincte au Cameroun.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hôtels */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT ANGLOPHONE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels & Lodges des Régions Anglophones</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-indigo-800 w-16 md:w-32"></span>
                      <span className="text-indigo-800 text-2xl">🏨</span>
                      <span className="h-px bg-indigo-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Nous avons sélectionné pour vous les meilleurs hébergements dans les régions anglophones, offrant confort, authenticité et immersion culturelle.
                    </p>
                  </div>

                  {/* Navigation des villes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bamenda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bamenda' 
                          ? 'bg-indigo-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BAMENDA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('buea')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'buea' 
                          ? 'bg-indigo-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BUEA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('limbe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'limbe' 
                          ? 'bg-indigo-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LIMBÉ (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hôtels - Bamenda */}
                  {activeHotelTab === 'bamenda' && (
                    <div className="space-y-16">
                      {/* Ayaba Hotel */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Ayaba Hotel Bamenda" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-indigo-800 text-white px-3 py-1 text-sm font-bold">
                                MEILLEUR HÔTEL NORD-OUEST
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Ayaba Hotel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Commercial Avenue, Bamenda, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏔️</span>
                                <span>Vue montagne</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant gastronomique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* situé au cœur de Bamenda, offrant une vue panoramique sur les montagnes environnantes. Chambres spacieuses avec décor moderne et équipements complets. Restaurant proposant une cuisine internationale et des spécialités anglophones. Centre d'affaires, piscine extérieure, spa et salle de sport.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Buea */}
                  {activeHotelTab === 'buea' && (
                    <div className="space-y-16">
                      {/* Mountain Hotel */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Mountain Hotel Buea" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Mountain Hotel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Au pied du Mont Cameroun, Buea, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌋</span>
                                <span>Vue sur le volcan</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine chauffée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel historique situé au pied du mont Cameroun. Chambres confortables avec balcon donnant sur le volcan. Restaurant spécialisé en cuisine du Sud-Ouest. Organisation d'excursions et de randonnées sur le mont Cameroun.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Limbé */}
                  {activeHotelTab === 'limbe' && (
                    <div className="space-y-16">
                      {/* Atlantic Beach Hotel */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" 
                              alt="Atlantic Beach Hotel Limbé" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Atlantic Beach Hotel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Plage de Limbé, Limbé, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏖️</span>
                                <span>Plage privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine d'eau de mer</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* directement sur la plage de sable noir de Limbé. Chambres avec vue sur l'océan, restaurant de fruits de mer, centre de bien-être. Organisation d'excursions en mer et de visites culturelles.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Colonne de droite - Sidebar Réservation (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Carte de réservation */}
              <div className="border-2 border-gray-300 p-6 mb-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit Anglophone</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-indigo-800">$2,699</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, hébergement 3-4*, guides anglophones, visites, repas
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-indigo-800"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                {/* Sélecteur de date */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Date de Départ</label>
                  <select 
                    value={selectedDeparture} 
                    onChange={(e) => setSelectedDeparture(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-indigo-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-15">15 Janvier 2026 (Saison sèche)</option>
                    <option value="2026-02-12">12 Février 2026</option>
                    <option value="2026-03-10">10 Mars 2026</option>
                    <option value="2026-11-10">10 Novembre 2026 (Meilleure période)</option>
                    <option value="2026-12-05">5 Décembre 2026</option>
                  </select>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT EXCLUSIF :</strong> Guide anglophone expert des régions anglophones
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 10 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-indigo-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-indigo-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-indigo-800 text-white py-4 font-semibold text-base mb-4 hover:bg-indigo-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur les régions anglophones ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos conseillers spécialisés vous accompagnent dans la préparation de votre voyage.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONTACTER UN EXPERT
                  </button>
                </div>
              </div>

              {/* Carte miniature */}
              <div className="border-2 border-gray-300 p-4 shadow-lg">
                <div className="relative w-full h-64 overflow-hidden rounded">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,4.0,11.5,6.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte régions anglophones miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Régions Anglophones
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Nord-Ouest et Sud-Ouest Cameroun
                </p>
              </div>

              {/* Widget météo */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Climat des Régions Anglophones</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Nord-Ouest (Bamenda)</span>
                    <span className="font-bold text-indigo-600">15-25°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sud-Ouest (Buea)</span>
                    <span className="font-bold text-indigo-600">18-28°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Limbé (côte)</span>
                    <span className="font-bold text-indigo-600">22-30°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mont Cameroun (sommet)</span>
                    <span className="font-bold text-indigo-600">0-10°C</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Prévoir vêtements pour tous les climats
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-indigo-800 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-indigo-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Anglophone</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}