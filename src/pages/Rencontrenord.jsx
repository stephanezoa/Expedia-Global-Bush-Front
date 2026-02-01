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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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

// Composant Carte de l'itinéraire
const EthnicRouteMap = () => {
  const [mapType, setMapType] = useState('roadmap');
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-center text-lg">Itinéraire des Rencontres Ethniques</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,8.0,15.0,12.0&layer=mapnik&marker=9.3,13.4&marker=10.6,11.1&marker=11.0,10.0&marker=14.3,10.6"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Nord Cameroun"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/9.0/12.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-amber-800 border-2 border-gray-300"></span>
          <span className="text-sm">Garoua (arrivée)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Parc de la Bénoué</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Montagnes Mandara</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Maroua (départ)</span>
        </div>
      </div>
    </div>
  );
};

export default function Rencontrenord() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('garoua');
  const [activeEthnicTab, setActiveEthnicTab] = useState('peuls');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '👑', title: 'Peuls Bororo', desc: 'Éleveurs nomades, aristocrates du Sahel' },
    { icon: '🏔️', title: 'Mafa', desc: 'Montagnards des Mandara, architecture unique' },
    { icon: '⚔️', title: 'Kapsiki', desc: 'Guerriers et forgerons réputés' },
    { icon: '🏹', title: 'Moundang', desc: 'Chasseurs et agriculteurs traditionnels' },
    { icon: '🎭', title: 'Cérémonies', desc: 'Initiation, mariages, danses masquées' },
    { icon: '🦁', title: 'Safari Culturel', desc: 'Rencontres authentiques en brousse' },
  ];

  const ethnicGroups = [
    { 
      name: 'Peuls', 
      color: 'bg-orange-100', 
      textColor: 'text-orange-800', 
      features: ['Éleveurs nomades', 'Aristocratie peule', 'Traditions pastorales'],
      region: 'Plaines du Nord'
    },
    { 
      name: 'Mafa', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      features: ['Montagnes Mandara', 'Cases fortifiées', 'Agriculture en terrasses'],
      region: 'Montagnes'
    },
    { 
      name: 'Kapsiki', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      features: ['Forgerons réputés', 'Rites initiatiques', 'Sculptures sur pierre'],
      region: 'Région de Rhumsiki'
    },
    { 
      name: 'Moundang', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      features: ['Cérémonies du mil', 'Danse du feu', 'Chasse traditionnelle'],
      region: 'Plaines de la Bénoué'
    },
    { 
      name: 'Toupouri', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      features: ['Scarifications rituelles', 'Cérémonies Ngôn', 'Agriculture vivrière'],
      region: 'Extrême-Nord'
    },
    { 
      name: 'Guiziga', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      features: ['Poteries traditionnelles', 'Médecine par les plantes', 'Vannerie'],
      region: 'Piedmonts Mandara'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1547841248-5caf8d5cbfc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">👑</span>
          <span>E | ETHNIQUES</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Rencontres Ethniques du Nord</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              12 jours d'immersion culturelle au cœur des peuples du Nord Cameroun
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">12</div>
            <div className="text-xs mt-1">Jours</div>
          </div>
          <div className="bg-black/90 text-white px-4 py-4 flex items-center backdrop-blur-sm">
            <div className="text-5xl font-bold">/</div>
          </div>
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">1</div>
            <div className="text-xs mt-1">Pays</div>
          </div>
        </div>
        
        {/* Indicateur de destination */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🏜️</span>
            <span className="text-sm font-semibold">NORD CAMEROUN</span>
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
                <span className="bg-amber-800 text-white px-3 py-1 font-bold">CULTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">12 jours - Garoua à Maroua</span>
                <button className="ml-auto border-2 border-amber-800 text-amber-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-amber-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Immersion authentique dans les cultures du Nord Cameroun</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('ethnies')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'ethnies' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  PEUPLES & CULTURES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 12 jours vous plonge au cœur des cultures du Nord Cameroun, une région fascinante où se côtoient Peuls éleveurs, Mafa montagnards, Kapsiki forgerons et bien d'autres ethnies aux traditions ancestrales. De Garoua à Maroua, en passant par les montagnes Mandara et le parc de la Bénoué, vous vivrez des rencontres authentiques avec les peuples du Sahel.
                </p>

                {/* Section Points forts */}
                <div className="bg-amber-50 border-l-4 border-amber-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-800">Points Forts du Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences incluses */}
                <div className="border-l-4 border-amber-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Culturelles Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Séjour chez l'habitant</strong> Peul Bororo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Visite des villages</strong> Mafa des montagnes Mandara</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Démonstration</strong> de forge Kapsiki</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Cérémonie traditionnelle</strong> Moundang</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Safari culturel</strong> dans la Bénoué</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Atelier de poterie</strong> avec les femmes Guiziga</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Spectacle de danses</strong> masquées Toupouri</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Transport</strong> en véhicule 4x4 tout terrain</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la diversité */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Nord Cameroun ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Nord Cameroun est un carrefour ethnique exceptionnel où cohabitent plus de 50 groupes ethniques différents, chacun avec sa langue, ses traditions et son mode de vie. Cette région préservée offre une immersion authentique dans l'Afrique traditionnelle.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">50+ ethnies</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Traditions vivantes</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Architecture unique</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Artisanat ancestral</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Ethnies rencontrées</div>
                      <div className="text-3xl font-bold text-amber-800">6</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits chez l'habitant</div>
                      <div className="text-3xl font-bold text-amber-800">4</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Cérémonies traditionnelles</div>
                      <div className="text-3xl font-bold text-amber-800">3</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Kilomètres parcourus</div>
                      <div className="text-3xl font-bold text-amber-800">1,200</div>
                    </div>
                  </div>
                </div>

                {/* Section Carte */}
                <div className="mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-1">
                      <EthnicRouteMap />
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Ethnique du Nord</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers les paysages variés du Nord Cameroun : des plaines arides du Sahel aux montagnes escarpées des Mandara, en passant par les savanes du parc de la Bénoué.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude minimale</div>
                            <div className="text-amber-800 font-bold">250m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude maximale</div>
                            <div className="text-amber-800 font-bold">1,500m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température min</div>
                            <div className="text-amber-800 font-bold">18°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température max</div>
                            <div className="text-amber-800 font-bold">38°C</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Ethnographique du Nord Cameroun</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,8.0,15.0,12.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte ethnographique nord Cameroun"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/10.0/12.0" target="_blank" rel="noopener noreferrer">
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
                  {/* Jour 1 - Arrivée à Garoua */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À GAROUA</span>
                          <span className="text-sm text-gray-600">Porte d'entrée du Nord Cameroun</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Garoua. Accueil par votre guide ethnologue et transfert à l'hôtel. Première immersion dans l'ambiance sahélienne avec une visite du marché central de Garoua et du port sur la Bénoué. Briefing sur le déroulement du voyage et les codes culturels à respecter. Dîner de bienvenue avec spécialités peules.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2-3 - Safari culturel Bénoué */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2-3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SAFARI CULTUREL BÉNOUÉ</span>
                          <span className="text-sm text-gray-600">Peuls Bororo et Moundang</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Immersion chez les éleveurs</h4>
                        <p className="text-justify mb-4">
                          Départ pour le parc national de la Bénoué. Rencontre avec des Peuls Bororo, éleveurs nomades réputés. Participation à la vie du campement : traite des vaches, préparation du lait caillé, découverte des techniques d'élevage. Soirée autour du feu avec conteur traditionnel. Deuxième journée avec les Moundang : initiation à la chasse traditionnelle (sans armes à feu), découverte des plantes médicinales, cérémonie de la première récolte du mil.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4-6 - Montagnes Mandara */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4-6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTAGNES MANDARA</span>
                          <span className="text-sm text-gray-600">Mafa et Kapsiki</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Voyage au pays des montagnards</h4>
                        <p className="text-justify mb-4">
                          Route vers les montagnes Mandara. Séjour dans un village Mafa perché à 1,200m d'altitude. Découverte de l'architecture unique des cases fortifiées et des greniers à mil. Participation aux travaux agricoles en terrasses. Visite d'un village Kapsiki et démonstration de forge traditionnelle (fabrication d'outils et d'armes). Randonnée jusqu'au pic de Rhumsiki, site sacré avec vue panoramique sur toute la région. Cérémonie d'initiation (selon période).
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7-9 - Région de Maroua */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7-9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MAROUA ET ALENTOURS</span>
                          <span className="text-sm text-gray-600">Toupouri et Guiziga</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Cultures sahéliennes</h4>
                        <p className="text-justify mb-4">
                          Arrivée à Maroua, capitale du Grand Nord. Visite du marché aux bestiaux, l'un des plus importants d'Afrique centrale. Rencontre avec les femmes Toupouri spécialistes des scarifications rituelles et découverte de leur symbolique. Atelier de poterie avec les femmes Guiziga. Excursion au lac de Maga pour observer les techniques de pêche traditionnelle. Spectacle de danses masquées et de lutte traditionnelle.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10-11 - Douffa et retour */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10-11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DOUFFA ET SYNTHÈSE</span>
                          <span className="text-sm text-gray-600">Dernières rencontres et bilan</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Dernières immersions</h4>
                        <p className="text-justify mb-4">
                          Visite de Douffa, village traditionnel préservé. Rencontre avec le chef coutumier et découverte du système d'organisation sociale. Bilan ethnographique du voyage avec votre guide. Temps libre pour les derniers achats d'artisanat (tapis peul, poteries, bijoux en cuir). Dîner d'adieu avec les familles d'accueil et remise de cadeaux symboliques.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Départ de Maroua */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE MAROUA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner d'adieu avec spécialités locales. Selon l'horaire de votre vol, dernière promenade dans Maroua ou temps libre pour les derniers achats. Transfert à l'aéroport de Maroua pour votre vol de retour, emportant avec vous les souvenirs inoubliables de ces rencontres humaines exceptionnelles.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ethnies' && (
              <div>
                {/* Section dédiée aux ethnies */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-amber-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">👥</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amber-800">Peuples & Cultures du Nord</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Le Nord Cameroun est une mosaïque ethnique exceptionnelle. Ce circuit vous permet de rencontrer 6 peuples aux traditions vivantes, chacun avec son histoire, ses coutumes et son mode de vie unique.
                  </p>

                  {/* Grille des ethnies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {ethnicGroups.map((group, index) => (
                      <div key={index} className={`${group.color} ${group.textColor} p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer`}
                           onClick={() => setActiveEthnicTab(group.name.toLowerCase())}>
                        <h4 className="text-xl font-semibold mb-3">{group.name}</h4>
                        <div className="mb-2 text-sm font-medium">{group.region}</div>
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Caractéristiques :</div>
                          <ul className="text-sm list-disc list-inside">
                            {group.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-sm font-semibold hover:underline">
                          En savoir plus →
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Détail des ethnies */}
                  {activeEthnicTab === 'peuls' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-orange-800">Peuls Bororo - Les Seigneurs du Sahel</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Localisation :</strong> Plaines du Nord, parc de la Bénoué<br/>
                            <strong>Mode de vie :</strong> Éleveurs nomades<br/>
                            <strong>Langue :</strong> Fulfulde<br/>
                            <strong>Religion :</strong> Islam (influencé par animisme)
                          </p>
                          <p className="text-gray-700">
                            Les Peuls Bororo sont les éleveurs par excellence du Sahel. Fiers et indépendants, ils parcourent les savanes avec leurs troupeaux de zébus aux longues cornes. Leur société est hiérarchisée avec une aristocratie guerrière. Les hommes sont reconnaissables à leurs visages finement scarifiés et les femmes à leurs coiffures élaborées et leurs nombreux bijoux en argent.
                          </p>
                          <div className="mt-4">
                            <h5 className="font-semibold mb-2">Rites et traditions :</h5>
                            <ul className="list-disc list-inside text-sm text-gray-700">
                              <li>Guerewol : cérémonie de séduction avec maquillage élaboré</li>
                              <li>Pulaaku : code d'honneur régissant le comportement</li>
                              <li>Sharo : rite initiatique avec épreuve du fouet</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={9.3} 
                            lng={13.4} 
                            height="300px" 
                            showControls={true}
                            region="Territoire Peul"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeEthnicTab === 'mafa' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-amber-800">Mafa - Les Montagnards des Mandara</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Localisation :</strong> Montagnes Mandara<br/>
                            <strong>Mode de vie :</strong> Agriculteurs sédentaires<br/>
                            <strong>Habitat :</strong> Cases fortifiées en pierre<br/>
                            <strong>Spécialité :</strong> Agriculture en terrasses
                          </p>
                          <p className="text-gray-700">
                            Les Mafa sont les bâtisseurs des montagnes Mandara. Leurs villages perchés à flanc de montagne sont de véritables forteresses naturelles. Maîtres de l'agriculture en terrasse, ils cultivent le mil, le sorgho et les arachides sur des pentes abruptes. Leur architecture unique comprend des cases rondes en pierre sèche avec des toits de chaume coniques.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={10.6} 
                            lng={11.1} 
                            height="300px" 
                            showControls={true}
                            region="Montagnes Mandara"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Carte synthétique */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte Ethnographique du Nord Cameroun</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,8.0,15.0,12.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte ethnographique nord"
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT AUTHENTIQUE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Séjours chez l'Habitant & Lodges</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-amber-800 w-16 md:w-32"></span>
                      <span className="text-amber-800 text-2xl">🏕️</span>
                      <span className="h-px bg-amber-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour ce circuit ethnique, nous avons privilégié l'authenticité des rencontres. Vous alternerez entre lodges confortables et séjours chez l'habitant pour une immersion totale dans les cultures locales.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('garoua')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'garoua' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      GAROUA LODGE
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('benoue')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'benoue' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CHEZ L'HABITANT
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('maroua')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'maroua' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MAROUA HOTEL
                    </button>
                  </div>

                  {/* Contenu des hébergements - Garoua */}
                  {activeHotelTab === 'garoua' && (
                    <div className="space-y-16">
                      {/* Lodge de la Bénoué */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1547841248-5caf8d5cbfc7?w=600" 
                                alt="Lodge de la Bénoué" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-amber-800 text-white px-3 py-1 text-sm font-bold">
                                LODGE SAHÉLIEN
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Lodge de la Bénoué</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Rive du fleuve Bénoué, Garoua, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏜️</span>
                                <span>Vue sur le fleuve</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin sahélo-soudanien</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Lodge 3* situé sur les rives du fleuve Bénoué. Bungalows traditionnels avec toit de chaume, équipés de moustiquaires et de ventilateurs. Restaurant spécialisé en cuisine peule et soudanienne. Organisation de soirées culturelles avec conteurs et musiciens traditionnels.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bénoué */}
                  {activeHotelTab === 'benoue' && (
                    <div className="space-y-16">
                      {/* Séjour chez l'habitant Peul */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Campement Peul" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Séjour chez les Peuls Bororo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Campement nomade, Parc de la Bénoué, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">⛺</span>
                                <span>Case traditionnelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🐄</span>
                                <span className="text-sm font-semibold">Immersion totale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Veillée au feu</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hébergement authentique dans le campement d'une famille peule. Dormez dans une case traditionnelle en branchages et paille. Partagez la vie quotidienne : préparation des repas (lait caillé, bouillie de mil), traite des vaches, soins aux animaux. Respect des traditions et participation aux activités selon les souhaits de la famille.
                            </p>
                            <div className="mt-4 p-3 bg-amber-50 text-sm rounded">
                              <strong>Note :</strong> Confort basique mais expérience humaine inoubliable. Toilettes et douches sommaires. Respect strict des coutumes locales exigé.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Maroua */}
                  {activeHotelTab === 'maroua' && (
                    <div className="space-y-16">
                      {/* Hôtel Sahel Palace */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" 
                              alt="Hôtel Sahel Palace" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Sahel Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Maroua, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏨</span>
                                <span>Confort 3*</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Wifi disponible</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 3* au cœur de Maroua. Chambres climatisées après les nuits en brousse. Restaurant proposant une synthèse des cuisines rencontrées. Centre de ressources ethnographiques avec documentation sur les peuples visités. Point de départ idéal pour les excursions dans l'Extrême-Nord.
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
                  <span className="text-2xl">👑</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit Ethnique</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-amber-800">$3,899</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur, tous transferts 4x4, hébergement, visites, guides ethnologues, repas
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-10-15">15 Octobre 2026 (Meilleure saison)</option>
                    <option value="2026-11-10">10 Novembre 2026</option>
                    <option value="2026-12-05">5 Décembre 2026</option>
                    <option value="2027-01-20">20 Janvier 2027</option>
                    <option value="2027-02-15">15 Février 2027</option>
                    <option value="2027-03-10">10 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs d'octobre à mars (saison sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT EXCLUSIF :</strong> Accompagnement par un guide ethnologue francophone
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-amber-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-amber-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-amber-800 text-white py-4 font-semibold text-base mb-4 hover:bg-amber-700 transition-colors shadow-md">
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
                    Nos conseillers spécialisés vous accompagnent dans la préparation de votre voyage ethnographique.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,8.0,15.0,12.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte nord Cameroun miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Nord Cameroun - Circuit Ethnique
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Parcours de 12 jours à travers 6 ethnies
                </p>
              </div>

              {/* Widget climat */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Climat Sahélien</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Saison sèche (oct-mars)</span>
                    <span className="font-bold text-amber-600">18-35°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Température nuit</span>
                    <span className="font-bold text-amber-600">18-22°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Température jour</span>
                    <span className="font-bold text-amber-600">30-38°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Humidité</span>
                    <span className="font-bold text-amber-600">20-40%</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Prévoir vêtements légers pour le jour, pull pour le soir
                </div>
              </div>

              {/* Widget recommandations */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>📝</span>
                  <span>À Savoir</span>
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Respect strict des coutumes locales</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Demander permission avant photos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Prévoir petits cadeaux (sucre, thé, savon)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Vaccins recommandés : fièvre jaune, hépatite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-amber-800 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-amber-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Ethnique</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}