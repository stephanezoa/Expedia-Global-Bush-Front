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
        <h4 className="font-semibold text-center text-lg">Itinéraire Massif de l'Ennedi</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=19.0,13.0,25.0,19.0&layer=mapnik&marker=13.828,20.832&marker=14.133,21.417&marker=14.533,21.833&marker=15.067,22.333"
          style={{ border: 0 }}
          allowFullScreen
          title="Randonnée Massif de l'Ennedi"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/16.5/22.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Abéché (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Kalait (étape)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Fada (entrée Ennedi)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Gouro (arches)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mourdi (dunes)</span>
        </div>
      </div>
    </div>
  );
};

export default function Massif() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('abeche');
  const [activeRegionTab, setActiveRegionTab] = useState('sahara');
  const [activeEcosystemTab, setActiveEcosystemTab] = useState('ennedi');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🗻', title: 'Arches Naturelles', desc: 'Formations rocheuses sculptées par l\'érosion' },
    { icon: '🏞️', title: 'Canyons Profonds', desc: 'Gorges spectaculaires aux parois verticales' },
    { icon: '🎨', title: 'Art Rupestre', desc: 'Peintures et gravures millénaires' },
    { icon: '🏜️', title: 'Dunes Fossiles', desc: 'Dunes pétrifiées aux couleurs éclatantes' },
    { icon: '💧', title: 'Gueltas', desc: 'Piscines naturelles en plein désert' },
    { icon: '🌌', title: 'Ciels Étoilés', desc: 'Nuits sous les étoiles du désert' },
  ];

  const regions = [
    { name: 'Ouaddai', color: 'bg-yellow-100', textColor: 'text-yellow-800', cities: ['Abéché', 'Adré'] },
    { name: 'Batha', color: 'bg-amber-100', textColor: 'text-amber-800', cities: ['Ati', 'Oum Hadjer'] },
    { name: 'Ennedi Ouest', color: 'bg-orange-100', textColor: 'text-orange-800', cities: ['Fada', 'Kalait'] },
    { name: 'Ennedi Est', color: 'bg-red-100', textColor: 'text-red-800', cities: ['Gouro', 'Mourdi'] },
    { name: 'Plateaux', color: 'bg-purple-100', textColor: 'text-purple-800', cities: ['Arche d\'Aloba', 'Guelta d\'Archei'] },
    { name: 'Désert', color: 'bg-gray-100', textColor: 'text-gray-800', cities: ['Dunes de Mourdi', 'Reg du Djourab'] },
  ];

  const ecosystems = [
    { 
      id: 'ennedi',
      name: 'Massif de l\'Ennedi', 
      altitude: '500-1450m',
      temperature: '15-40°C',
      desc: 'Plateau gréseux aux formations spectaculaires, classé au patrimoine mondial UNESCO',
      highlights: ['Arches naturelles', 'Canyons profonds', 'Guelta permanente']
    },
    { 
      id: 'desert',
      name: 'Désert de l\'Ennedi', 
      altitude: '300-600m',
      temperature: '18-45°C',
      desc: 'Zone désertique avec dunes mobiles et regs, paysages lunaires',
      highlights: ['Dunes de sable', 'Plateaux rocheux', 'Oasis cachées']
    },
    { 
      id: 'guelta',
      name: 'Gueltas et Oasis', 
      altitude: '400-800m',
      temperature: '20-38°C',
      desc: 'Points d\'eau permanents abritant une biodiversité unique en plein désert',
      highlights: ['Crocodiles du désert', 'Poissons endémiques', 'Végétation luxuriante']
    },
    { 
      id: 'plateaux',
      name: 'Plateaux Gréseux', 
      altitude: '800-1450m',
      temperature: '10-35°C',
      desc: 'Formations géologiques uniques sculptées par le vent et l\'eau',
      highlights: ['Tours de grès', 'Cheminées de fée', 'Ponts naturels']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🗻</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Massif de l'Ennedi : Trésors du Désert</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              10 jours de randonnée à travers les paysages les plus spectaculaires du Tchad
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">10</div>
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
            <span className="text-sm font-semibold">MASSIF DE L'ENNEDI</span>
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
                <span className="bg-blue-800 text-white px-3 py-1 font-bold">RANDONNÉE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - Abéché à Ennedi</span>
                <button className="ml-auto border-2 border-blue-800 text-blue-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Randonnée unique au cœur d'un site classé UNESCO</span>
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
                  Cette randonnée de 10 jours vous emmène au cœur du Massif de l'Ennedi, classé au patrimoine mondial de l'UNESCO. D'Abéché aux confins du désert, vous découvrirez des paysages à couper le souffle : arches naturelles spectaculaires, canyons profonds, gueltas abritant des crocodiles du désert, et dunes pétrifiées aux couleurs éclatantes. Accompagné de guides locaux expérimentés, vous vivrez une aventure unique : randonnées dans des décors de cinéma, bivouacs sous les étoiles, découverte de l'art rupestre millénaire et immersion dans la culture des nomades du désert.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Moments Forts de la Randonnée</h3>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences de Randonnée Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Randonnée à l'Arche d'Aloba</strong> (120m de haut)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Bivouacs sous les étoiles</strong> au pied des formations rocheuses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Découverte de l'art rupestre</strong> millénaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite de la Guelta d'Archei</strong> et ses crocodiles</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Exploration des canyons</strong> de l'Ennedi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Rencontre avec les nomades</strong> Toubous et Goranes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Photographie de paysages</strong> avec guide spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Randonnée dans les dunes</strong> de Mourdi</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'Ennedi */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Massif de l'Ennedi ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Massif de l'Ennedi est classé au patrimoine mondial de l'UNESCO pour ses paysages géologiques exceptionnels et son art rupestre millénaire. Ce plateau gréseux, sculpté par l'érosion, offre des paysages uniques au monde : arches naturelles monumentales, tours de grès, canyons profonds et gueltas permanentes abritant une biodiversité remarquable. C'est l'un des derniers sanctuaires préservés du Sahara.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Patrimoine UNESCO</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Géologie unique</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Art rupestre</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Randonnée exclusive</span>
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
                      <div className="text-sm text-gray-600 mb-1">Kilomètres de randonnée</div>
                      <div className="text-3xl font-bold text-blue-800">85</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits en bivouac</div>
                      <div className="text-3xl font-bold text-blue-800">7</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude maximale</div>
                      <div className="text-3xl font-bold text-blue-800">1,450m</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Température max/min</div>
                      <div className="text-3xl font-bold text-blue-800">40°C/15°C</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours dans l'Ennedi</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce parcours vous emmène à travers les paysages les plus spectaculaires du Massif de l'Ennedi. Des plaines d'Abéché aux formations rocheuses monumentales, chaque étape révèle une nouvelle merveille naturelle. Vous traverserez des paysages qui semblent sortis d'un autre monde : arches naturelles parmi les plus grandes d'Afrique, canyons aux parois verticales, gueltas abritant une vie insoupçonnée et dunes aux couleurs changeantes.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude départ</div>
                            <div className="text-blue-800 font-bold">542m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude max massif</div>
                            <div className="text-blue-800 font-bold">1,450m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Classement UNESCO</div>
                            <div className="text-blue-800 font-bold">2016</div>
                          </div>
                          <div>
                            <div className="font-semibold">Superficie du massif</div>
                            <div className="text-blue-800 font-bold">60,000 km²</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Massif de l'Ennedi</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=19.0,13.0,25.0,19.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Massif de l'Ennedi"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/16.5/22.0" target="_blank" rel="noopener noreferrer">
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
                  {/* Jour 1 - Arrivée à Abéché */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À ABÉCHÉ</span>
                          <span className="text-sm text-gray-600">Préparation de la randonnée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport d'Abéché. Accueil par votre guide de randonnée et l'équipe locale. Transfert à l'hôtel. Briefing détaillé sur la randonnée : sécurité, équipement, itinéraire. Vérification du matériel de randonnée. Visite du marché d'Abéché pour les derniers achats. Découverte de l'ancienne capitale du sultanat du Ouaddaï. Dîner de bienvenue avec l'équipe. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Kalait */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ABÉCHÉ → KALAIT</span>
                          <span className="text-sm text-gray-600">Première étape vers l'Ennedi</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Départ pour le désert</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 en direction de Kalait (environ 350 km). Traversée de la savane sahélienne vers des paysages plus arides. Arrêts techniques et adaptation au voyage en convoi. Premières observations de la faune désertique. Installation au campement près de Kalait. Briefing sur les techniques de randonnée en milieu désertique. Soirée autour du feu avec présentation de l'équipe locale.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Kalait vers Fada */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">KALAIT → FADA</span>
                          <span className="text-sm text-gray-600">Entrée dans le Massif de l'Ennedi</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Portes de l'Ennedi</h4>
                        <p className="text-justify mb-4">
                          Route vers Fada à travers des paysages de plus en plus spectaculaires (environ 200 km). Premières formations rocheuses caractéristiques de l'Ennedi. Arrêt à un site d'art rupestre préhistorique. Initiation à la lecture des peintures et gravures rupestres. Arrivée à Fada, capitale administrative de l'Ennedi. Installation au campement. Première randonnée d'acclimatation dans les environs.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Randonnée à l'Arche d'Aloba */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARCHE D'ALOBA</span>
                          <span className="text-sm text-gray-600">L'une des plus grandes arches naturelles d'Afrique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée exceptionnelle</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte de l'Arche d'Aloba, monument naturel spectaculaire de 120 mètres de haut et 77 mètres de large. Randonnée d'approche à travers un canyon majestueux. Observation de la formation géologique et explication de sa formation. Pique-nique au pied de l'arche. Temps libre pour la photographie et la contemplation. Retour au campement en fin d'après-midi. Soirée astronomique avec observation des étoiles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Randonnée vers Gouro */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">FADA → GOURO</span>
                          <span className="text-sm text-gray-600">Canyons et formations rocheuses</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Au cœur des canyons</h4>
                        <p className="text-justify mb-4">
                          Randonnée vers Gouro à travers des paysages de canyons spectaculaires (environ 15 km). Traversée de gorges étroites aux parois verticales. Découverte de formations rocheuses étonnantes : tours, pitons et cheminées de fée. Arrêt à des sites d'art rupestre moins connus. Rencontre avec des nomades Goranes. Installation du bivouac au pied des falaises. Cuisine traditionnelle préparée sur feu de bois.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Guelta d'Archei */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">GUELTA D'ARCHEI</span>
                          <span className="text-sm text-gray-600">Les crocodiles du désert</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Le miracle de l'eau en plein désert</h4>
                        <p className="text-justify mb-4">
                          Randonnée vers la célèbre Guelta d'Archei, oasis permanente au cœur du désert. Traversée d'un canyon spectaculaire pour atteindre la guelta. Observation des crocodiles du désert (Crocodylus suchus), population relicte isolée depuis des millénaires. Découverte de l'écosystème unique de la guelta : poissons, algues, et végétation luxuriante. Temps pour la baignade et la détente. Retour au campement de Gouro. Soirée spéciale autour du thé saharien.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Gouro vers Mourdi */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">GOURO → MOURDI</span>
                          <span className="text-sm text-gray-600">Dunes et paysages lunaires</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Changement de paysage</h4>
                        <p className="text-justify mb-4">
                          Transfert en 4x4 vers la région de Mourdi (environ 150 km). Passage des formations rocheuses aux paysages de dunes. Arrivée aux dunes de Mourdi, spectaculaires dunes de sable aux couleurs changeantes. Installation du bivouac au pied des dunes. Randonnée dans les dunes au coucher du soleil pour admirer les jeux d'ombre et de lumière. Soirée spéciale "nuit des étoiles" avec observation approfondie du ciel nocturne.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Exploration des dunes de Mourdi */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DUNES DE MOURDI</span>
                          <span className="text-sm text-gray-600">Journée dans les dunes fossiles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Dunes pétrifiées et paysages lunaires</h4>
                        <p className="text-justify mb-4">
                          Journée entière consacrée à l'exploration des dunes de Mourdi. Randonnée matinale pour atteindre le sommet des plus hautes dunes et profiter du panorama à 360°. Découverte des dunes fossiles aux couleurs éclatantes : rouge, ocre, jaune. Observation des formations géologiques uniques. Pique-nique dans les dunes. Temps libre pour la photographie et la méditation. Retour au campement en fin d'après-midi. Soirée d'adieu avec l'équipe locale.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour vers Abéché */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">MOURDI → ABÉCHÉ</span>
                          <span className="text-sm text-gray-600">Retour à la civilisation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Dernière journée de voyage</h4>
                        <p className="text-justify mb-4">
                          Longue journée de route pour retourner à Abéché (environ 500 km). Traversée des paysages désertiques vers la savane sahélienne. Arrêts techniques pour le nettoyage de l'équipement. Débriefing sur la randonnée et partage des impressions. Arrivée à Abéché en fin d'après-midi. Transfert à l'hôtel. Temps libre pour se reposer et se rafraîchir. Dîner d'adieu au restaurant avec remise des certificats de randonnée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Départ d'Abéché */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART D'ABÉCHÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers préparatifs et emballage des souvenirs. Visite optionnelle du marché artisanal d'Abéché pour les derniers achats. Transfert à l'aéroport d'Abéché pour votre vol de retour. Accompagnement jusqu'à l'enregistrement. Emportez avec vous des souvenirs inoubliables de cette aventure unique au cœur du Massif de l'Ennedi, un voyage qui transforme notre vision de la nature et du patrimoine humain.
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
                      <span className="text-white text-2xl">🗻</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Les Écosystèmes du Massif de l'Ennedi</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette randonnée vous fait traverser plusieurs écosystèmes uniques, chacun avec sa propre géologie, climat et adaptations biologiques. Du plateau gréseux aux dunes fossiles, découvrez comment la vie s'est adaptée aux conditions extrêmes du désert et a créé des paysages d'une beauté exceptionnelle.
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
                              lat={eco.id === 'ennedi' ? 17.5 : 
                                   eco.id === 'desert' ? 17.8 :
                                   eco.id === 'guelta' ? 16.9 :
                                   17.2} 
                              lng={eco.id === 'ennedi' ? 22.0 : 
                                   eco.id === 'desert' ? 22.5 :
                                   eco.id === 'guelta' ? 21.8 :
                                   22.2} 
                              height="300px" 
                              showControls={true}
                              region={eco.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'écosystème */}
                        {eco.id === 'ennedi' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Un Patrimoine Mondial Unique</h5>
                            <p className="text-gray-700 mb-4">
                              Le Massif de l'Ennedi est classé au patrimoine mondial de l'UNESCO depuis 2016. Ce plateau gréseux, sculpté par l'érosion éolienne et hydrique, présente des paysages spectaculaires : arches naturelles, piliers, pitons et canyons profonds. L'art rupestre millénaire témoigne de l'occupation humaine depuis des millénaires. C'est un sanctuaire pour une biodiversité unique adaptée aux conditions désertiques.
                            </p>
                          </div>
                        )}

                        {eco.id === 'guelta' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Des Oasis de Vie en Plein Désert</h5>
                            <p className="text-gray-700 mb-4">
                              Les gueltas de l'Ennedi sont des points d'eau permanents qui abritent des écosystèmes uniques. La plus célèbre, la Guelta d'Archei, abrite une population de crocodiles du désert (Crocodylus suchus), isolée depuis des millénaires. Ces oasis permettent la survie d'une faune et d'une flore spécifiques, et sont des points de rencontre traditionnels pour les nomades et leurs troupeaux.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Carte synthétique des écosystèmes */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte des Écosystèmes de l'Ennedi</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=19.0,13.0,25.0,19.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte écosystèmes Ennedi"
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Campements et Bivouacs dans l'Ennedi</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                      <span className="text-blue-800 text-2xl">🏕️</span>
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour cette randonnée dans l'Ennedi, nous alternons entre campements fixes et bivouacs nomades. Chaque nuit est une expérience unique, des camps de base équipés aux nuits sous les étoiles au pied des arches naturelles, vous permettant de vivre l'authenticité du désert tchadien.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('abeche')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'abeche' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ABÉCHÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('campements')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'campements' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPEMENTS FIXES (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bivouacs')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bivouacs' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUACS NOMADES (4 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Abéché */}
                  {activeHotelTab === 'abeche' && (
                    <div className="space-y-16">
                      {/* Hôtel Sahel Tchad Abéché */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=600" 
                                alt="Hôtel Sahel Tchad Abéché" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 text-sm font-bold">
                                CONFORT SAHÉLIEN
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Sahel Tchad Abéché</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Abéché, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🍽️</span>
                                <span>Restaurant traditionnel</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Connexion wifi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin ombragé</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel confortable situé au cœur d'Abéché. Chambres simples mais propres avec salle de bain privée. Restaurant servant une cuisine traditionnelle tchadienne. Jardin ombragé pour se détendre. Connexion wifi disponible dans les parties communes. Service de blanchisserie. Emplacement idéal pour découvrir la ville et préparer la randonnée.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Campements fixes */}
                  {activeHotelTab === 'campements' && (
                    <div className="space-y-16">
                      {/* Campement de Fada */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Campement de Fada" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement de Fada</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Base Ennedi, Fada, Tchad
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
                                <span className="text-sm font-semibold">Point de ravitaillement</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement permanent situé à Fada, porte d'entrée de l'Ennedi. Tentes spacieuses avec lits de camp et matelas. Sanitaires communs avec douches à eau chaude solaire. Restaurant sous grande tente servant des repas chauds. Espace de stockage pour l'équipement. Point de ravitaillement en eau et provisions. Lieu idéal pour se reposer entre les étapes de randonnée.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bivouacs nomades */}
                  {activeHotelTab === 'bivouacs' && (
                    <div className="space-y-16">
                      {/* Bivouac de l'Arche d'Aloba */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                              alt="Bivouac de l'Arche d'Aloba" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac de l'Arche d'Aloba</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Canyon de l'Aloba, Ennedi, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌟</span>
                                <span>Vue sur l'arche</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏜️</span>
                                <span className="text-sm font-semibold">Canyon protégé</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Bivouac installé au pied de l'Arche d'Aloba, dans un canyon protégé. Tentes individuelles légères montées sur des emplacements plats. Cuisine de camp préparée par les guides locaux. Toilettes sèches mobiles. Feu de camp pour les soirées. Vue imprenable sur l'arche illuminée par la lune. Expérience d'immersion totale dans un site exceptionnel. Réveil au lever du soleil sur l'arche.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bivouac des Dunes de Mourdi */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600" 
                              alt="Bivouac des Dunes de Mourdi" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac des Dunes de Mourdi</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Dunes de Mourdi, Ennedi, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏜️</span>
                                <span>Au pied des dunes</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌌</span>
                                <span className="text-sm font-semibold">Ciel étoilé pur</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎨</span>
                                <span className="text-sm font-semibold">Couleurs changeantes</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Bivouac installé au pied des dunes de Mourdi, offrant une vue à 360° sur les dunes aux couleurs changeantes. Tentes montées sur le sable pour une expérience authentique. Cuisine préparée sur feu de bois. Veillée autour du thé saharien. Observation des étoiles dans un ciel d'une pureté exceptionnelle. Expérience unique de nuit dans les dunes. Réveil avec les premières lueurs du soleil sur les dunes.
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
                  <span className="text-2xl">🗻</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Randonnée</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-blue-800">$3,299</span>
                    <span className="text-xl line-through text-gray-500">$3,099</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur, 4x4 équipé, guide local, bivouac complet, nourriture, équipement de randonnée
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
                    <option value="2026-11-10">10 Novembre 2026</option>
                    <option value="2026-12-08">8 Décembre 2026</option>
                    <option value="2027-01-12">12 Janvier 2027</option>
                    <option value="2027-02-16">16 Février 2027</option>
                    <option value="2027-03-12">12 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période : Novembre à Mars (températures supportables)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>RANDONNÉE EXCLUSIVE :</strong> Guide spécialiste de l'Ennedi
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur cette randonnée ?</p>
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=19.0,13.0,25.0,19.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Ennedi miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Massif de l'Ennedi - Patrimoine UNESCO
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Randonnée de 10 jours à travers un site classé au patrimoine mondial
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
                    <span>Sac de couchage -10°C</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gourde filtrante 2L</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bâtons de randonnée</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Équipement de randonnée inclus (sac à dos, lampe frontale)
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
                    <span>Expérience randonnée</span>
                    <span className="font-bold text-blue-800">Requis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-800">16 ans</span>
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
        <span className="font-semibold text-base">Expert Ennedi</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}