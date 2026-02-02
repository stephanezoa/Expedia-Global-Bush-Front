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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
const RouteMap = () => {
  const [mapType, setMapType] = useState('roadmap');
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-center text-lg">Itinéraire Sahara Tchadien</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,20.0,25.0&layer=mapnik&marker=12.115,15.058&marker=13.210,18.333&marker=17.917,19.117&marker=18.700,21.417"
          style={{ border: 0 }}
          allowFullScreen
          title="Expédition Sahara Tchad"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=6/17.0/16.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-800 border-2 border-gray-300"></span>
          <span className="text-sm">N'Djaména (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mongo (étape)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Fada (entrée désert)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Faya-Largeau (Sahara)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ounianga (lacs)</span>
        </div>
      </div>
    </div>
  );
};

export default function Expeditionsaharienne() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('ndjamena');
  const [activeRegionTab, setActiveRegionTab] = useState('sahel');
  const [activeEcosystemTab, setActiveEcosystemTab] = useState('sahel');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏜️', title: 'Dunes du Sahara', desc: 'Traversée des ergs majestueux du désert tchadien' },
    { icon: '🏞️', title: 'Lacs d\'Ounianga', desc: 'Oasis spectaculaires classées au patrimoine UNESCO' },
    { icon: '🐪', title: 'Caravanes Chamelières', desc: 'Rencontre avec les Toubous, nomades du désert' },
    { icon: '🌵', title: 'Flore Saharienne', desc: 'Découverte de la vie adaptée à l\'extrême aridité' },
    { icon: '🌌', title: 'Ciels Étoilés', desc: 'Nuits sous les étoiles les plus pures d\'Afrique' },
    { icon: '🗻', title: 'Massif du Tibesti', desc: 'Approche des montagnes volcaniques du nord' },
  ];

  const regions = [
    { name: 'Sahel', color: 'bg-yellow-100', textColor: 'text-yellow-800', cities: ['N\'Djaména', 'Mongo', 'Ati'] },
    { name: 'Désert de l\'Est', color: 'bg-amber-100', textColor: 'text-amber-800', cities: ['Fada', 'Biltine'] },
    { name: 'Grand Erg', color: 'bg-orange-100', textColor: 'text-orange-800', cities: ['Faya-Largeau', 'Kouba'] },
    { name: 'Tibesti', color: 'bg-red-100', textColor: 'text-red-800', cities: ['Bardai', 'Zouar'] },
    { name: 'Lacs Ounianga', color: 'bg-blue-100', textColor: 'text-blue-800', cities: ['Ounianga Kébir', 'Ounianga Sérir'] },
    { name: 'Ennedi', color: 'bg-purple-100', textColor: 'text-purple-800', cities: ['Fada', 'Kalait'] },
  ];

  const ecosystems = [
    { 
      id: 'sahel',
      name: 'Zone Sahélienne', 
      altitude: '300-500m',
      temperature: '20-40°C',
      desc: 'Zone de transition entre savane et désert, riche en biodiversité adaptée',
      highlights: ['Acacias', 'Faune résistante', 'Pâturages nomades']
    },
    { 
      id: 'erg',
      name: 'Grands Ergs', 
      altitude: '200-400m',
      temperature: '15-45°C',
      desc: 'Mers de dunes pouvant atteindre 300m de hauteur, paysages lunaires',
      highlights: ['Dunes mobiles', 'Oasis cachées', 'Formations éoliennes']
    },
    { 
      id: 'lacs',
      name: 'Lacs d\'Ounianga', 
      altitude: '380m',
      temperature: '18-42°C',
      desc: 'Système unique de 18 lacs interconnectés en plein désert, miracle géologique',
      highlights: ['Eaux permanentes', 'Écosystèmes aquatiques', 'Formations géologiques']
    },
    { 
      id: 'tibesti',
      name: 'Massif du Tibesti', 
      altitude: '2000-3415m',
      temperature: '5-35°C',
      desc: 'Plus haut massif montagneux du Sahara, d\'origine volcanique',
      highlights: ['Volcans éteints', 'Gorges profondes', 'Sources chaudes']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🏜️</span>
          <span>G | AVENTURE</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Expédition Saharienne : Du Sahel au Sahara</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              12 jours d'aventure extrême à travers les paysages les plus spectaculaires du Tchad
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
            <span className="text-2xl">🌵</span>
            <span className="text-sm font-semibold">SAHARA TCHADIEN</span>
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
                <span className="bg-blue-800 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">12 jours - N\'Djaména à Faya-Largeau</span>
                <button className="ml-auto border-2 border-blue-800 text-blue-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Expédition unique au cœur du plus grand désert chaud du monde</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU TOUR
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('ecosystemes')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'ecosystemes' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ÉCOSYSTÈMES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Cette expédition de 12 jours vous emmène au cœur du Sahara tchadien, l'un des déserts les plus extrêmes et spectaculaires de la planète. Du Sahel verdoyant aux dunes infinies de Faya-Largeau, en passant par les lacs miraculeux d'Ounianga classés à l'UNESCO, vous découvrirez des paysages à couper le souffle. Accompagné de guides toubous expérimentés, vous vivrez l'aventure ultime : bivouacs sous les étoiles, traversées de grands ergs, rencontres avec les nomades du désert et découverte d'une biodiversité unique adaptée à l'extrême aridité.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Moments Forts de l'Expédition</h3>
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

                {/* Section Expériences d'aventure */}
                <div className="border-l-4 border-blue-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences d'Aventure Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Traversée du Grand Erg</strong> en 4x4 équipé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Bivouacs nomades</strong> sous les étoiles du Sahara</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Rencontre avec les Toubous</strong>, nomades du désert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Exploration des lacs d'Ounianga</strong> (UNESCO)</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Observation astronomique</strong> avec télescope</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite d'oasis traditionnelles</strong> et de puits anciens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Photographie de paysages</strong> avec guide spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Formation survie désertique</strong> par experts locaux</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le désert */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Sahara Tchadien ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Sahara tchadien représente la partie la plus authentique et préservée du plus grand désert chaud du monde. Loin des sentiers battus, il offre des paysages d'une diversité incroyable : dunes monumentales, plateaux rocheux, lacs permanents en plein désert et massifs montagneux. Cette expédition vous permet de découvrir un Sahara encore sauvage, où les traditions nomades sont restées intactes et où la nature s'exprime dans toute sa puissance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Désert préservé</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">UNESCO</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Nomades authentiques</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Aventure extrême</span>
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
                      <div className="text-sm text-gray-600 mb-1">Kilomètres parcourus</div>
                      <div className="text-3xl font-bold text-blue-800">2,500</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits en bivouac</div>
                      <div className="text-3xl font-bold text-blue-800">7</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude max atteinte</div>
                      <div className="text-3xl font-bold text-blue-800">3,415m</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Température max/min</div>
                      <div className="text-3xl font-bold text-blue-800">45°C/5°C</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Désertique</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce parcours vous emmène des plaines du Sahel aux confins du Sahara, traversant des paysages qui évoluent radicalement chaque jour. De la savane arbustive aux dunes de sable, des plateaux rocheux aux oasis miraculeuses, chaque étape révèle une nouvelle facette de l'extraordinaire adaptation de la vie aux conditions extrêmes.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude départ</div>
                            <div className="text-blue-800 font-bold">298m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude max désert</div>
                            <div className="text-blue-800 font-bold">3,415m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Pluviométrie annuelle</div>
                            <div className="text-blue-800 font-bold">0-100mm</div>
                          </div>
                          <div>
                            <div className="font-semibold">Ensoleillement</div>
                            <div className="text-blue-800 font-bold">3,800h/an</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Sahara Tchadien</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,25.0,25.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Sahara Tchad"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=6/17.0/16.0" target="_blank" rel="noopener noreferrer">
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
                  {/* Jour 1 - Arrivée à N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Préparation de l'expédition</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de N'Djaména. Accueil par votre guide d'expédition et l'équipe toubous. Transfert à l'hôtel. Briefing détaillé sur l'expédition : sécurité, équipement, itinéraire. Vérification du matériel et des véhicules 4x4. Visite du marché pour les derniers achats de provisions. Dîner de bienvenue avec l'équipe. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Mongo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA → MONGO</span>
                          <span className="text-sm text-gray-600">Première étape vers le désert</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Départ pour la zone sahélienne</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en convoi 4x4 en direction de Mongo (environ 500 km). Traversée progressive de la savane sahélienne vers des paysages plus arides. Arrêts techniques et adaptation à la conduite en convoi. Premières leçons de navigation au GPS et lecture de cartes. Installation au camp de base de Mongo. Briefing sur les techniques de survie en milieu désertique. Soirée autour du feu avec présentation de l'équipe toubous.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Mongo vers Fada */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONGO → FADA</span>
                          <span className="text-sm text-gray-600">Entrée dans le désert de l'Est</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Portes du Sahara</h4>
                        <p className="text-justify mb-4">
                          Route vers Fada à travers des paysages de plus en plus arides (environ 400 km). Passage de la limite du Sahel au désert proprement dit. Arrêt au puits traditionnel de Biltine pour observer les techniques ancestrales d'extraction d'eau. Première expérience de conduite sur piste désertique. Arrivée à Fada, porte d'entrée du Sahara oriental. Installation au campement désertique. Initiation à l'orientation avec le soleil et les étoiles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Fada vers Faya-Largeau */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FADA → FAYA-LARGEAU</span>
                          <span className="text-sm text-gray-600">Traversée du Grand Erg</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Au cœur du Sahara</h4>
                        <p className="text-justify mb-4">
                          Journée historique : traversée du Grand Erg du Tchad (environ 350 km). Conduite technique sur dunes et regs. Arrêts techniques pour le déssablage des véhicules. Découverte des techniques de conduite en terrain sableux. Arrivée à Faya-Largeau, la plus grande oasis du Sahara tchadien. Installation au camp de base. Rencontre avec la communauté toubous. Soirée astronomique avec observation des constellations du désert.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Exploration de Faya-Largeau */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION FAYA-LARGEAU</span>
                          <span className="text-sm text-gray-600">Dunes, oasis et traditions toubous</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée d'immersion saharienne</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à l'exploration des environs de Faya-Largeau. Ascension des plus hautes dunes pour un panorama à 360° sur le désert. Visite des palmeraies traditionnelles et découverte du système d'irrigation ancestral. Rencontre avec les artisans toubous spécialisés dans le travail du cuir et de l'argent. Démonstration de chameaux de course. Atelier de préparation du thé saharien selon le rituel traditionnel. Soirée musicale avec les griots du désert.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Faya-Largeau vers Ounianga */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FAYA-LARGEAU → OUNIANGA</span>
                          <span className="text-sm text-gray-600">Vers les lacs du désert (UNESCO)</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Traversée vers le miracle des lacs</h4>
                        <p className="text-justify mb-4">
                          Départ pour Ounianga à travers des paysages lunaires (environ 250 km). Traversée du plateau du Djourab, zone de transition géologique. Arrivée au site classé UNESCO des lacs d'Ounianga. Installation au campement au bord du lac. Exploration à pied des différents lacs aux couleurs variées (bleu, vert, rouge). Explication géologique sur la formation de ces lacs permanents en plein désert. Baignade revitalisante dans les eaux du lac. Nuit au bord de l'eau.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Exploration des lacs d'Ounianga */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LACS D'OUNIANGA</span>
                          <span className="text-sm text-gray-600">Journée complète d'exploration</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Le miracle de l'eau en plein désert</h4>
                        <p className="text-justify mb-4">
                          Journée entière consacrée à l'exploration des 18 lacs d'Ounianga. Visite du lac Yoa, le plus grand et le plus profond. Découverte des lacs hypersalés et de leur écosystème unique. Observation des formations géologiques exceptionnelles. Rencontre avec la petite communauté qui vit de la pêche traditionnelle. Atelier de photographie de paysages avec un guide spécialisé. Marche au coucher du soleil sur les dunes entourant les lacs. Dîner de poissons frais pêchés dans les lacs.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Retour vers Fada */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">OUNIANGA → FADA</span>
                          <span className="text-sm text-gray-600">Retour à travers le désert</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Nouvelle traversée du Sahara</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour le retour vers Fada par un itinéraire différent (environ 300 km). Traversée de zones de regs (désert de pierres) offrant des paysages contrastés. Arrêt à un campement nomade toubous pour partager le repas. Démonstration de fabrication traditionnelle de tentes en peaux de chèvres. Cours avancé de navigation désertique sans GPS. Arrivée à Fada en fin d'après-midi. Installation au campement. Soirée de contes et légendes du désert.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Fada vers Mongo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FADA → MONGO</span>
                          <span className="text-sm text-gray-600">Retour vers le Sahel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Transition désert-Sahel</h4>
                        <p className="text-justify mb-4">
                          Route de retour vers Mongo (environ 400 km). Observation progressive du retour de la végétation. Arrêt à un marché nomade pour découvrir les échanges traditionnels au Sahara. Session de photographie des derniers paysages désertiques. Arrivée à Mongo en fin de journée. Installation au camp de base. Débriefing sur l'expérience désertique. Soirée de célébration avec l'équipe toubous.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Mongo vers N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONGO → N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Retour à la civilisation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Dernière étape de l'expédition</h4>
                        <p className="text-justify mb-4">
                          Dernière journée de route vers N'Djaména (environ 500 km). Arrêts techniques pour le nettoyage et la remise en état des véhicules. Débriefing final sur l'expédition et partage des impressions. Arrivée à N'Djaména en fin d'après-midi. Transfert à l'hôtel. Temps libre pour se reposer et se rafraîchir. Dîner d'adieu au restaurant avec remise des certificats d'expédition.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Journée libre à N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA LIBRE</span>
                          <span className="text-sm text-gray-600">Derniers achats et détente</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée de récupération et découverte</h4>
                        <p className="text-justify mb-4">
                          Journée libre pour profiter des derniers moments au Tchad. Option 1 : Visite du Musée National pour contextualiser l'expérience désertique. Option 2 : Marché artisanal pour acheter des souvenirs. Option 3 : Séance de spa et détente à l'hôtel. Déjeuner libre. En soirée, rencontre avec un photographe spécialiste du Sahara pour une séance de critique et de conseils sur vos photos. Dîner libre.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Départ de N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE N'DJAMÉNA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers préparatifs et emballage des souvenirs. Transfert à l'aéroport international de N'Djaména pour votre vol de retour. Accompagnement jusqu'à l'enregistrement. Emportez avec vous des souvenirs inoubliables de cette aventure extrême au cœur du plus grand désert chaud du monde, une expérience qui transforme notre vision de la nature et de la résilience humaine.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ecosystemes' && (
              <div>
                {/* Section dédiée aux écosystèmes */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌵</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Les Écosystèmes du Sahara Tchadien</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition vous fait traverser plusieurs écosystèmes uniques, chacun avec sa propre géologie, climat et adaptations biologiques. Du Sahel au cœur du Sahara, découvrez comment la vie s'est adaptée aux conditions les plus extrêmes de la planète.
                  </p>

                  {/* Navigation des écosystèmes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {ecosystems.map((eco) => (
                      <button 
                        key={eco.id}
                        onClick={() => setActiveEcosystemTab(eco.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeEcosystemTab === eco.id 
                            ? 'bg-blue-800 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {eco.name.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Détail des écosystèmes */}
                  {ecosystems.map((eco) => (
                    activeEcosystemTab === eco.id && (
                      <div key={eco.id} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-4 text-blue-800">{eco.name}</h4>
                            <div className="mb-6">
                              <div className="text-sm text-gray-600 mb-1">Altitude moyenne :</div>
                              <div className="font-bold text-lg">{eco.altitude}</div>
                            </div>
                            <div className="mb-6">
                              <div className="text-sm text-gray-600 mb-1">Amplitude thermique :</div>
                              <div className="font-bold text-lg">{eco.temperature}</div>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {eco.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-blue-800">Caractéristiques :</div>
                              <ul className="list-none space-y-2">
                                {eco.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-800 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={eco.id === 'sahel' ? 12.184 : 
                                   eco.id === 'erg' ? 18.700 :
                                   eco.id === 'lacs' ? 19.033 :
                                   21.000} 
                              lng={eco.id === 'sahel' ? 18.342 : 
                                   eco.id === 'erg' ? 19.117 :
                                   eco.id === 'lacs' ? 20.517 :
                                   17.000} 
                              height="300px" 
                              showControls={true}
                              region={eco.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'écosystème */}
                        {eco.id === 'sahel' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Zone de Transition</h5>
                            <p className="text-gray-700 mb-4">
                              Le Sahel représente la dernière frontière avant le désert absolu. Cette bande de 200 à 400 km de large connaît une pluviométrie irrégulière (200-600mm/an) permettant une végétation clairsemée d'acacias, de baobabs et d'herbes résistantes. C'est la zone de pastoralisme nomade par excellence, où éleveurs et agriculteurs développent des stratégies sophistiquées d'adaptation à l'aridité croissante.
                            </p>
                          </div>
                        )}

                        {eco.id === 'lacs' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Un Miracle Géologique</h5>
                            <p className="text-gray-700 mb-4">
                              Les lacs d'Ounianga constituent un phénomène exceptionnel : 18 lacs permanents au cœur du Sahara, alimentés par une nappe fossile datant de l'époque humide (il y a 5 000 à 15 000 ans). Chaque lac a sa propre chimie, sa propre couleur et son propre écosystème. Classés au patrimoine mondial de l'UNESCO depuis 2012, ils sont étudiés par les scientifiques du monde entier comme analogie pour la recherche de vie sur Mars.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Carte synthétique des écosystèmes */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte des Écosystèmes Sahariens</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,25.0,25.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte écosystèmes Sahara Tchad"
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT D'AVENTURE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Campements et Bivouacs Désertiques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                      <span className="text-blue-800 text-2xl">🏕️</span>
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour cette expédition extrême, nous alternons entre campements fixes et bivouacs nomades. Chaque nuit est une expérience unique, des camps de base équipés aux nuits sous les étoiles en plein désert, vous permettant de vivre l'authenticité du mode de vie saharien.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('ndjamena')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ndjamena' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      N'DJAMÉNA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('campements')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'campements' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPEMENTS FIXES (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bivouacs')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bivouacs' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUACS NOMADES (5 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - N'Djaména */}
                  {activeHotelTab === 'ndjamena' && (
                    <div className="space-y-16">
                      {/* Hôtel Hilton N'Djaména */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Hilton N'Djaména" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 text-sm font-bold">
                                5* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Hilton N'Djaména</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenue du Président Mobutu, N'Djaména, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine olympique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">3 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Spa et fitness</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 5* de luxe situé au bord du fleuve Chari. Chambres spacieuses avec vue sur la ville ou le fleuve. Toutes les commodités pour un confort optimal avant et après l'expédition. Restaurant gastronomique, bar panoramique, centre de remise en forme, spa. Service de conciergerie pour préparer l'expédition. Base parfaite pour le briefing initial et la récupération finale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Campements fixes */}
                  {activeHotelTab === 'campements' && (
                    <div className="space-y-16">
                      {/* Campement du Guéra - Mongo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Campement du Guéra" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement du Guéra - Mongo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Base expédition, Mongo, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Campement équipé</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Douches solaires</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔧</span>
                                <span className="text-sm font-semibold">Atelier mécanique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement de base permanent spécialement conçu pour les expéditions sahariennes. Tentes spacieuses avec lits de camp et matelas épais. Sanitaires communs avec douches à eau chaude solaire. Restaurant sous grande tente servant des repas chauds. Atelier mécanique pour l'entretien des véhicules. Espace de briefing avec équipement audiovisuel. Point de ravitaillement en eau et carburant.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Campement des Lacs - Ounianga */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600" 
                              alt="Campement des Lacs" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement des Lacs - Ounianga</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bord du lac Yoa, Ounianga, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏞️</span>
                                <span>Vue sur le lac</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌡️</span>
                                <span className="text-sm font-semibold">Climat rafraîchi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🐟</span>
                                <span className="text-sm font-semibold">Poisson frais</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement permanent situé au bord du lac Yoa. Tentes individuelles avec terrasses donnant sur l'eau. Microclimat rafraîchi par l'évaporation du lac. Restaurant spécialisé en poissons frais pêchés quotidiennement. Sanitaires écologiques. Observatoire astronomique improvisé. Accès direct aux sentiers d'exploration des lacs. Lieu idéal pour la récupération après les étapes désertiques.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bivouacs nomades */}
                  {activeHotelTab === 'bivouacs' && (
                    <div className="space-y-16">
                      {/* Bivouac du Grand Erg */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                              alt="Bivouac du Grand Erg" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac du Grand Erg - Faya-Largeau</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Dunes de sable, Grand Erg, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌟</span>
                                <span>Ciel étoilé</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏜️</span>
                                <span className="text-sm font-semibold">Dunes monumentales</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Bivouac nomade installé chaque soir à un emplacement différent au cœur du Grand Erg. Tentes individuelles légères montées sur les dunes. Cuisine de camp préparée par les guides toubous. Toilettes sèches mobiles. Feu de camp pour les soirées. Ciel étoilé d'une pureté exceptionnelle. Expérience d'immersion totale dans le désert. Réveil au lever du soleil sur les dunes.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bivouac Toubous - Désert de l'Est */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Bivouac Toubous" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac Toubous - Désert de l'Est</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Plateau rocheux, désert de l'Est, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">👳</span>
                                <span>Style toubous</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏺</span>
                                <span className="text-sm font-semibold">Cuisine traditionnelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌵</span>
                                <span className="text-sm font-semibold">Flore désertique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Bivouac traditionnel toubous monté selon les techniques ancestrales. Abris en peaux de chèvres tendues sur des structures en bois. Participation à la vie du camp : montage des tentes, préparation des repas. Cuisine authentique préparée sur feu de bois. Veillées autour du thé saharien préparé selon le rituel traditionnel. Observation de la faune nocturne du désert. Expérience culturelle unique avec les nomades.
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
                  <span className="text-2xl">🏜️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-blue-800">$3,899</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur, 4x4 équipé, guide toubous, bivouac complet, nourriture, équipement spécialisé
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-10-15">15 Octobre 2026</option>
                    <option value="2026-11-12">12 Novembre 2026</option>
                    <option value="2026-12-10">10 Décembre 2026</option>
                    <option value="2027-01-14">14 Janvier 2027</option>
                    <option value="2027-02-18">18 Février 2027</option>
                    <option value="2027-03-15">15 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période : Octobre à Mars (températures supportables)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION EXCLUSIVE :</strong> Guide toubous spécialiste du Sahara
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-800 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur cette expédition ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts du désert vous accompagnent dans la préparation.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,25.0,25.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Sahara Tchad miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Sahara Tchadien - Expédition Extrême
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Parcours de 12 jours à travers le plus grand désert chaud du monde
                </p>
              </div>

              {/* Widget équipement */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🎒</span>
                  <span>Équipement Fourni</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Tente individuelle</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sac de couchage -20°C</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gourde filtrante 3L</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kit survie désert</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Matériel technique inclus (GPS, radio satellite)
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Conditions Requises</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Condition physique</span>
                    <span className="font-bold text-blue-800">Bonne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Expérience 4x4</span>
                    <span className="font-bold text-blue-800">Optionnelle</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-800">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-blue-800">Fièvre jaune</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Certificat médical obligatoire
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Sahara</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}