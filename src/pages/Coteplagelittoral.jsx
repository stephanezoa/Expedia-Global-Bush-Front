import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          title={`Carte de ${region}`}
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

// Composant Carte de l'itinéraire littoral
const CoastalRouteMap = () => {
  const [mapType, setMapType] = useState('roadmap');
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-center text-lg">Itinéraire du Littoral</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Satellite
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-96 overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,3.0,10.5,4.5&layer=mapnik&marker=4.051,9.767&marker=4.075,9.680&marker=4.016,9.210&marker=3.957,9.780"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire littoral Cameroun"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/4.0/9.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-emerald-800 border-2 border-gray-300"></span>
          <span className="text-sm">Douala (arrivée)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Kribi</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Limbé</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Îles de Manoka</span>
        </div>
      </div>
    </div>
  );
};

export default function Coteplagelittoral() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('douala');
  const [activeRegionTab, setActiveRegionTab] = useState('kribi');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏖️', title: 'Plages de Kribi', desc: 'Sable blanc, cocotiers et eaux turquoise' },
    { icon: '🌊', title: 'Chutes de la Lobé', desc: 'Se jettent directement dans l\'océan' },
    { icon: '🦐', title: 'Fruits de Mer', desc: 'Cuisine côtière exceptionnelle' },
    { icon: '🚤', title: 'Excursions en Mer', desc: 'Îles, pêche et rencontres avec pêcheurs' },
    { icon: '🌴', title: 'Mangroves', desc: 'Écosystème unique et biodiversité' },
    { icon: '🏄', title: 'Sports Nautiques', desc: 'Surf, plongée et détente balnéaire' },
  ];

  const coastalPoints = [
    { name: 'Kribi', color: 'bg-blue-100', textColor: 'text-blue-800', features: ['Plages de sable blanc', 'Chutes de la Lobé', 'Port de pêche'] },
    { name: 'Limbé', color: 'bg-teal-100', textColor: 'text-teal-800', features: ['Plage de sable noir volcanique', 'Jardin botanique', 'Refuge des primates'] },
    { name: 'Douala', color: 'bg-gray-100', textColor: 'text-gray-800', features: ['Port principal', 'Marchés animés', 'Vie nocturne'] },
    { name: 'Îles de Manoka', color: 'bg-purple-100', textColor: 'text-purple-800', features: ['Villages sur pilotis', 'Pêche traditionnelle', 'Mangroves'] },
    { name: 'Grand Batanga', color: 'bg-amber-100', textColor: 'text-amber-800', features: ['Plages sauvages', 'Authenticité préservée', 'Pêche artisanale'] },
    { name: 'Tiko', color: 'bg-green-100', textColor: 'text-green-800', features: ['Plantations de bananes', 'Estuaire', 'Oiseaux migrateurs'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌊</span>
          <span>L | LITTORAL</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Côte et Plages : Le Littoral Camerounais</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              8 jours à découvrir les trésors de la côte atlantique : plages de sable blanc, villages de pêcheurs et nature préservée
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">8</div>
            <div className="text-xs mt-1">Jours</div>
          </div>
          <div className="bg-black/90 text-white px-4 py-4 flex items-center backdrop-blur-sm">
            <div className="text-5xl font-bold">/</div>
          </div>
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">350</div>
            <div className="text-xs mt-1">Km de côte</div>
          </div>
        </div>
        
        {/* Indicateur de destination */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🏝️</span>
            <span className="text-sm font-semibold">CÔTE ATLANTIQUE</span>
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
                <span className="font-semibold">CATÉGORIE:</span>
                <span className="bg-blue-600 text-white px-3 py-1 font-bold">LITTORAL</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Douala à Douala</span>
                <button className="ml-auto border-2 border-blue-600 text-blue-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Détente absolue sur les plus belles plages d'Afrique centrale</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('plages')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'plages' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  PLAGES & SITES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 8 jours vous emmène à la découverte du littoral camerounais, l'une des côtes les plus préservées et authentiques d'Afrique. Des plages de sable blanc de Kribi aux eaux turquoise, aux paysages volcaniques de Limbé, en passant par les villages de pêcheurs traditionnels et les îles paradisiaques, vous vivrez une expérience balnéaire unique combinant détente, culture et aventure.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Trésors du Littoral</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences incluses */}
                <div className="border-l-4 border-blue-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Balnéaires Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Baignade</strong> dans les plages de Kribi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Visite des chutes</strong> de la Lobé tombant dans la mer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Excursion en pirogue</strong> dans les mangroves</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Rencontre avec pêcheurs</strong> traditionnels</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Dégustation fruits de mer</strong> fraîchement pêchés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Visite du jardin botanique</strong> de Limbé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Excursion aux îles</strong> de Manoka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Transport</strong> en véhicule privé climatisé</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la diversité */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Littoral Camerounais ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Avec ses 350 km de côte atlantique, le Cameroun offre des paysages côtiers d'une diversité exceptionnelle : plages de sable blanc et noir, mangroves préservées, villages sur pilotis, ports animés et une culture côtière riche des peuples Sawa.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">350km de côte</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Plages préservées</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Cuisine marine</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture Sawa</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Kilomètres de côte</div>
                      <div className="text-3xl font-bold text-blue-600">350</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plages visitées</div>
                      <div className="text-3xl font-bold text-blue-600">6</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits d'hébergement</div>
                      <div className="text-3xl font-bold text-blue-600">7</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Repas de fruits de mer</div>
                      <div className="text-3xl font-bold text-blue-600">14</div>
                    </div>
                  </div>
                </div>

                {/* Section Carte */}
                <div className="mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-1">
                      <CoastalRouteMap />
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours du Littoral</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène le long de la côte atlantique du Cameroun, de Douala la vibrante à Kribi la paisible, en passant par les paysages volcaniques de Limbé et les îles préservées du littoral.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Température moyenne</div>
                            <div className="text-blue-600 font-bold">26-30°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Humidité</div>
                            <div className="text-blue-600 font-bold">80-90%</div>
                          </div>
                          <div>
                            <div className="font-semibold">Meilleure saison</div>
                            <div className="text-blue-600 font-bold">Déc-Avr</div>
                          </div>
                          <div>
                            <div className="font-semibold">Type de sable</div>
                            <div className="text-blue-600 font-bold">Blanc & Noir</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée du Littoral</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,3.0,10.5,4.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée littoral"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=9/4.0/9.5" target="_blank" rel="noopener noreferrer">
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
                  {/* Jour 1 - Arrivée à Douala */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À DOUALA</span>
                          <span className="text-sm text-gray-600">Porte d'entrée du littoral</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Douala. Accueil par votre guide et transfert à votre hôtel en bord de mer. Première immersion dans l'ambiance côtière avec une visite du port de pêche et du marché aux poissons. Briefing sur le déroulement du voyage. Dîner de bienvenue avec spécialités de fruits de mer au restaurant "Le Poissonnier".
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Douala à Kribi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DOUALA - KRIBI</span>
                          <span className="text-sm text-gray-600">Découverte des plages de sable blanc</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Route vers le paradis</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour Kribi en longeant la côte atlantique. Arrêt à Edéa pour voir les chutes du fleuve Sanaga. Arrivée à Kribi et installation à l'hôtel en bord de mer. Première baignade sur les plages de sable blanc bordées de cocotiers. Découverte du port de pêche de Kribi et rencontre avec les pêcheurs. Dîner de fruits de mer frais sur la plage.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Kribi et environs */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">KRIBI ET SES MERVEILLES</span>
                          <span className="text-sm text-gray-600">Chutes de la Lobé et plages secrètes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée découverte</h4>
                        <p className="text-justify mb-4">
                          Visite des célèbres chutes de la Lobé, uniques au monde car elles se jettent directement dans l'océan Atlantique. Excursion en pirogue sur le fleuve Lobé pour observer la faune et la flore des mangroves. Après-midi libre pour profiter de la plage de Kribi et des activités nautiques (optionnelles : surf, kayak, plongée). Soirée au rythme des musiques côtières.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Kribi à Limbé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">KRIBI - LIMBÉ</span>
                          <span className="text-sm text-gray-600">Plages de sable noir et volcans</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Changement de décor</h4>
                        <p className="text-justify mb-4">
                          Route vers Limbé en passant par les plantations de cacao et d'hévéa. Arrivée à Limbé et découverte de ses plages de sable noir d'origine volcanique. Visite du jardin botanique de Limbé, l'un des plus beaux d'Afrique. Installation à l'hôtel avec vue sur l'océan et le mont Cameroun. Dîner spécialité "pepper soup" de poisson.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Limbé et mont Cameroun */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LIMBÉ ET LE VOLCAN</span>
                          <span className="text-sm text-gray-600">Jardin botanique et paysages volcaniques</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Nature et volcan</h4>
                        <p className="text-justify mb-4">
                          Matinée de détente sur la plage de sable noir de Limbé. Visite du centre de réhabilitation des primates de Limbé (optionnelle). Excursion aux pieds du mont Cameroun, point culminant de l'Afrique de l'Ouest. Découverte des sources chaudes et des paysages volcaniques. Retour à Limbé pour un dîner au restaurant "Atlantic Beach".
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Excursion aux îles */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXCURSION AUX ÎLES</span>
                          <span className="text-sm text-gray-600">Manoka et les villages sur pilotis</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Aventure insulaire</h4>
                        <p className="text-justify mb-4">
                          Journée d'excursion en bateau vers les îles de Manoka. Découverte des villages sur pilotis et de la vie traditionnelle des pêcheurs. Baignade dans les eaux cristallines des îlots préservés. Pique-nique de fruits de mer sur une plage déserte. Observation des oiseaux marins et découverte des écosystèmes de mangrove. Retour à Limbé en fin d'après-midi.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Retour à Douala */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LIMBÉ - DOUALA</span>
                          <span className="text-sm text-gray-600">Dernières baignades et souvenirs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Retour vers la ville</h4>
                        <p className="text-justify mb-4">
                          Dernière matinée de détente sur la plage de Limbé. Départ pour Douala en milieu de journée. Arrivée à Douala et temps libre pour les derniers achats de souvenirs au marché artisanal. Dîner d'adieu dans un restaurant gastronomique avec spectacle de danses traditionnelles côtières.
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
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE DOUALA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol, dernière promenade sur la plage ou temps libre pour les derniers achats. Transfert à l'aéroport international de Douala pour votre vol de retour, emportant avec vous le bronzage et les souvenirs inoubliables des plages camerounaises.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'plages' && (
              <div>
                {/* Section dédiée aux plages */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏖️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Les Plages & Sites Côtiers</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Découvrez les plus belles plages du littoral camerounais, chacune avec son caractère unique, son ambiance particulière et ses paysages à couper le souffle.
                  </p>

                  {/* Grille des plages */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {coastalPoints.map((point, index) => (
                      <div key={index} className={`${point.color} ${point.textColor} p-6 rounded-lg shadow hover:shadow-lg transition-shadow`}>
                        <h4 className="text-xl font-semibold mb-3">{point.name}</h4>
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Caractéristiques :</div>
                          <ul className="text-sm list-disc list-inside">
                            {point.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <button 
                          onClick={() => setActiveRegionTab(point.name.toLowerCase())}
                          className="text-sm font-semibold hover:underline"
                        >
                          Explorer cette zone →
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Détail des plages */}
                  {activeRegionTab === 'kribi' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-blue-800">Kribi - La Perle du Littoral</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Type de plage :</strong> Sable blanc fin<br/>
                            <strong>Longueur :</strong> 15 km de plages continues<br/>
                            <strong>Activités :</strong> Baignade, surf, pêche, détente<br/>
                            <strong>Spécialité :</strong> Poissons grillés et fruits de mer
                          </p>
                          <p className="text-gray-700">
                            Kribi est réputée pour ses plages de sable blanc immaculé bordées de cocotiers. L'eau y est turquoise et chaude toute l'année. Les chutes de la Lobé, qui se jettent directement dans l'océan, sont un spectacle unique au monde. L'ambiance y est paisible et authentique.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={2.934} 
                            lng={9.910} 
                            height="300px" 
                            showControls={true}
                            region="Kribi Cameroun"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRegionTab === 'limbé' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-teal-800">Limbé - Plages Volcaniques</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Type de plage :</strong> Sable noir volcanique<br/>
                            <strong>Particularité :</strong> Vue sur le mont Cameroun<br/>
                            <strong>Activités :</strong> Randonnée, observation primates, détente<br/>
                            <strong>Spécialité :</strong> Pepper soup de poisson
                          </p>
                          <p className="text-gray-700">
                            Limbé offre un contraste saisissant avec ses plages de sable noir d'origine volcanique. Dominée par le mont Cameroun, la ville possède un jardin botanique exceptionnel et un centre de réhabilitation des primates. L'ambiance y est plus animée, avec une forte influence anglaise.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={4.016} 
                            lng={9.210} 
                            height="300px" 
                            showControls={true}
                            region="Limbé Cameroun"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Carte synthétique */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte du Littoral Camerounais</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,3.0,10.5,4.5&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte littoral camerounais"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hôtels */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT BORD DE MER</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels & Lodges 4*</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                      <span className="text-blue-600 text-2xl">🌊</span>
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour ce circuit littoral, nous avons sélectionné des hébergements 4* en bord de mer offrant confort, charme et vue directe sur l'océan. Chaque hôtel a été choisi pour son ambiance balnéaire unique et son accès privilégié aux plages.
                    </p>
                  </div>

                  {/* Navigation des villes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('douala')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'douala' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      DOUALA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('kribi')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kribi' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KRIBI (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('limbé')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'limbé' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LIMBÉ (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hôtels - Douala */}
                  {activeHotelTab === 'douala' && (
                    <div className="space-y-16">
                      {/* Hôtel Sawa */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                                alt="Hôtel Sawa Douala" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                4* BORD DE MER
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Sawa</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Boulevard de la Côte, Douala, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine avec vue mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* situé directement sur le front de mer de Douala. Chambres spacieuses avec balcon donnant sur l'océan, équipées de tous les équipements modernes. Complexe hôtelier complet avec piscine, spa, centre de remise en forme, et restaurant spécialisé en cuisine marine. Service haut de gamme pour un séjour balnéaire d'exception.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Kribi */}
                  {activeHotelTab === 'kribi' && (
                    <div className="space-y-16">
                      {/* Hôtel Ilomba */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Hôtel Ilomba Kribi" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Ilomba</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Plage de Kribi, Kribi, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏖️</span>
                                <span>Plage privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Vue océan 180°</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦐</span>
                                <span className="text-sm font-semibold">Poissonnerie intégrée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Établissement 4* directement sur la plage de sable blanc de Kribi. Bungalows et chambres avec terrasse donnant sur l'océan. Restaurant de fruits de mer réputé où les poissons sont pêchés le matin même, bar de plage, piscine à débordement avec vue sur l'océan. Ambiance balnéaire de luxe authentique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Limbé */}
                  {activeHotelTab === 'limbé' && (
                    <div className="space-y-16">
                      {/* Hôtel Atlantic Beach */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" 
                              alt="Hôtel Atlantic Beach Limbé" 
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
                                <span className="text-lg">🌋</span>
                                <span>Vue mont Cameroun</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine d'eau de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🐠</span>
                                <span className="text-sm font-semibold">Centre de plongée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* sur la plage de sable noir de Limbé avec vue imprenable sur le mont Cameroun. Chambres spacieuses avec terrasse, restaurant gastronomique spécialisé en cuisine côtière, centre de bien-être utilisant les produits locaux. Base idéale pour explorer la région volcanique.
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
                  <span className="text-2xl">🌊</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Séjour Littoral</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-blue-600">$2,499</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, hébergement 4* bord de mer, visites, guides, repas fruits de mer
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-15">15 Janvier 2026 (Meilleure saison)</option>
                    <option value="2026-03-10">10 Mars 2026</option>
                    <option value="2026-06-05">5 Juin 2026</option>
                    <option value="2026-08-20">20 Août 2026</option>
                    <option value="2026-12-15">15 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année - Meilleure période : Déc à Avr</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT EXCLUSIF :</strong> Accès plages privées et restaurants spécialisés
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 10 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-600 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-500 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos conseillers spécialisés vous accompagnent dans la préparation de votre séjour balnéaire.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,3.0,10.5,4.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte littoral miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Littoral Camerounais
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Parcours de 8 jours le long de la côte
                </p>
              </div>

              {/* Widget climat */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Climat Littoral</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Température moyenne</span>
                    <span className="font-bold text-blue-600">26-30°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Température mer</span>
                    <span className="font-bold text-blue-600">25-28°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Humidité</span>
                    <span className="font-bold text-blue-600">80-90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ensoleillement/jour</span>
                    <span className="font-bold text-blue-600">6-8h</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Prévoir crème solaire, chapeau et vêtements légers
                </div>
              </div>

              {/* Widget activités */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🏄</span>
                  <span>Activités Incluses</span>
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Excursion aux chutes de la Lobé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Visite jardin botanique de Limbé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Rencontre avec pêcheurs traditionnels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Dégustation fruits de mer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Littoral</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}