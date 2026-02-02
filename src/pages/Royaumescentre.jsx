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
const RouteMap = () => {
  const [mapType, setMapType] = useState('roadmap');
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-center text-lg">Itinéraire des Royaumes du Centre</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,20.0,15.0&layer=mapnik&marker=12.115,15.058&marker=11.404,16.172&marker=12.184,18.342"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire centre Tchad"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/12.0/16.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">N'Djaména (arrivée)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Massenya (Baguirmi)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mongo (Guéra)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bitkine</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">N'Djaména (départ)</span>
        </div>
      </div>
    </div>
  );
};

export default function Royaumescentre() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('ndjamena');
  const [activeRegionTab, setActiveRegionTab] = useState('baguirmi');
  const [activeKingdomTab, setActiveKingdomTab] = useState('baguirmi');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '👑', title: 'Royaume du Baguirmi', desc: 'Ancien sultanat avec capitale à Massenya' },
    { icon: '🏔️', title: 'Massif du Guéra', desc: 'Montagnes sacrées et villages perchés' },
    { icon: '🏛️', title: 'Mongo', desc: 'Capitale historique de la région du Guéra' },
    { icon: '🎭', title: 'Festival de Gerewol', desc: 'Rencontre avec les Peuls Wodaabe' },
    { icon: '🕌', title: 'Architecture Soudanaise', desc: 'Mosquées en terre et palais royaux' },
    { icon: '📜', title: 'Traditions Oratoires', desc: 'Griots et transmission historique' },
  ];

  const regions = [
    { name: 'Chari-Baguirmi', color: 'bg-amber-100', textColor: 'text-amber-800', cities: ['Massenya', 'Bousso', 'Dourbali'] },
    { name: 'Guéra', color: 'bg-orange-100', textColor: 'text-orange-800', cities: ['Mongo', 'Bitkine', 'Melfi'] },
    { name: 'Salamat', color: 'bg-yellow-100', textColor: 'text-yellow-800', cities: ['Am Timan', 'Abou-Deïa'] },
    { name: 'Moyen-Chari', color: 'bg-red-100', textColor: 'text-red-800', cities: ['Sarh', 'Koumra'] },
    { name: 'Mandoul', color: 'bg-green-100', textColor: 'text-green-800', cities: ['Kélo', 'Bédjondo'] },
    { name: 'N\'Djaména', color: 'bg-blue-100', textColor: 'text-blue-800', cities: ['N\'Djaména'] },
  ];

  const kingdoms = [
    { 
      id: 'baguirmi',
      name: 'Royaume du Baguirmi', 
      period: 'XVIe - XIXe siècle',
      capital: 'Massenya',
      desc: 'Ancien sultanat islamique qui a dominé le centre-sud du Tchad pendant 400 ans',
      highlights: ['Architecture en banco', 'Cérémonies traditionnelles', 'Artisanat du cuir']
    },
    { 
      id: 'guera',
      name: 'Sultanats du Guéra', 
      period: 'XVIIIe - XXe siècle',
      capital: 'Mongo',
      desc: 'Confédération de sultanats montagnards avec des traditions uniques',
      highlights: ['Fortifications', 'Traditions orales', 'Agriculture en terrasse']
    },
    { 
      id: 'wadai',
      name: 'Sultanat du Ouaddaï', 
      period: 'XVIe - XXe siècle',
      capital: 'Abéché',
      desc: 'Puissant sultanat qui a influencé toute la région centre-est',
      highlights: ['Architecture soudanaise', 'Commerce transsaharien', 'Manuscrits anciens']
    },
    { 
      id: 'kanem',
      name: 'Empire du Kanem-Bornou', 
      period: 'VIIIe - XIXe siècle',
      capital: 'Njimi',
      desc: 'Un des plus anciens et plus durables empires africains',
      highlights: ['Système politique', 'Éducation islamique', 'Réseaux commerciaux']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">👑</span>
          <span>G | CULTURE</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Les Royaumes du Centre : Massenya et Mongo</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              8 jours au cœur de l'histoire tchadienne : des sultanats du Baguirmi aux montagnes sacrées du Guéra
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
            <div className="text-5xl font-bold">1</div>
            <div className="text-xs mt-1">Pays</div>
          </div>
        </div>
        
        {/* Indicateur de destination */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">👑</span>
            <span className="text-sm font-semibold">ROYAUMES TCHADIENS</span>
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
                <span className="text-gray-600">8 jours - N\'Djaména à Mongo</span>
                <button className="ml-auto border-2 border-amber-800 text-amber-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-amber-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Voyage historique unique à la découverte des anciens royaumes tchadiens</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU TOUR
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('royaumes')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'royaumes' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ROYAUMES
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
                  Ce circuit de 8 jours vous plonge au cœur de l'histoire fascinante des royaumes tchadiens. De l'ancien sultanat du Baguirmi à Massenya aux montagnes sacrées du Guéra, vous découvrirez un patrimoine culturel exceptionnel. Rencontrez les gardiens des traditions, explorez les vestiges architecturaux des palais royaux et participez à des cérémonies ancestrales. Un voyage unique pour comprendre l'âme du Tchad à travers ses dynasties et ses héritages.
                </p>

                {/* Section Points forts */}
                <div className="bg-amber-50 border-l-4 border-amber-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-800">Les Trésors Culturels du Circuit</h3>
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

                {/* Section Expériences culturelles */}
                <div className="border-l-4 border-amber-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Culturelles Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Visite du palais royal</strong> de Massenya (Baguirmi)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Audience chez le Sultan</strong> avec cérémonie protocolaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Spectacle de griots</strong> et conteurs traditionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Atelier d'artisanat</strong> (cuir, poterie, tissage)</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Randonnée dans le Guéra</strong> avec guide local</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Rencontre avec les Peuls Wodaabe</strong> et leurs traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Dégustation culinaire</strong> des plats royaux traditionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Guide historien</strong> spécialiste des royaumes tchadiens</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'héritage culturel */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi les Royaumes du Centre ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le centre du Tchad fut le berceau de puissants royaumes et sultanats qui ont marqué l'histoire de l'Afrique centrale. Le Baguirmi, le Ouaddaï et les sultanats du Guéra ont développé des civilisations sophistiquées avec leurs propres systèmes politiques, traditions artistiques et patrimoines architecturaux. Ce circuit vous permet de découvrir cet héritage encore vivant aujourd'hui.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">4 siècles d'histoire</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Architecture en banco</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Traditions vivantes</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Patrimoine UNESCO</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Kilomètres parcourus</div>
                      <div className="text-3xl font-bold text-amber-800">1,200</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Sites historiques</div>
                      <div className="text-3xl font-bold text-amber-800">15+</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits d'hébergement</div>
                      <div className="text-3xl font-bold text-amber-800">7</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Rencontres culturelles</div>
                      <div className="text-3xl font-bold text-amber-800">20+</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Historique</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène sur les traces des caravanes transsahariennes et des anciennes capitales royales, à travers des paysages variés allant des plaines du Chari aux montagnes du Guéra, en passant par les anciennes cités marchandes.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude minimale</div>
                            <div className="text-amber-800 font-bold">300m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude maximale</div>
                            <div className="text-amber-800 font-bold">1,500m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température min</div>
                            <div className="text-amber-800 font-bold">16°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température max</div>
                            <div className="text-amber-800 font-bold">34°C</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Anciens Royaumes</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,20.0,15.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte anciens royaumes Tchad"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/12.0/16.0" target="_blank" rel="noopener noreferrer">
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
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Introduction aux royaumes tchadiens</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de N'Djaména. Accueil par votre guide historien spécialiste des royaumes tchadiens. Transfert à l'hôtel et installation. Conférence d'introduction sur l'histoire des royaumes du centre du Tchad. Visite du Musée National pour une première approche du patrimoine culturel. Dîner de bienvenue avec spécialités culinaires traditionnelles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Massenya */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA → MASSENYA</span>
                          <span className="text-sm text-gray-600">Vers l'ancienne capitale du Baguirmi</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Départ pour le royaume du Baguirmi</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en direction de Massenya (environ 250 km). Traversée de la plaine du Chari et découverte des paysages caractéristiques du centre tchadien. Arrêt à Bousso pour visiter les vestiges de l'ancienne cité marchande. Arrivée à Massenya, ancienne capitale du sultanat du Baguirmi. Installation dans un campement traditionnel. Première approche de l'architecture en banco caractéristique. Spectacle de contes historiques par les griots locaux.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Massenya et le Baguirmi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MASSENYA ET LE BAGUIRMI</span>
                          <span className="text-sm text-gray-600">Immersion dans le sultanat historique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Journée royale à Massenya</h4>
                        <p className="text-justify mb-4">
                          Audience protocolaire chez le Sultan (ou son représentant) avec cérémonie d'accueil traditionnelle. Visite complète du palais royal et des bâtiments administratifs historiques. Exploration des ruines de l'ancienne ville fortifiée. Atelier d'artisanat traditionnel (travail du cuir, poterie). Rencontre avec les historiens locaux pour approfondir l'histoire du Baguirmi. Soirée spectacle avec danses traditionnelles et musique royale.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Route vers le Guéra */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MASSENYA → BITKINE</span>
                          <span className="text-sm text-gray-600">Vers les montagnes sacrées du Guéra</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Traversée vers le massif du Guéra</h4>
                        <p className="text-justify mb-4">
                          Départ pour Bitkine à travers des paysages changeants (environ 300 km). Arrêt à Ngama pour découvrir les techniques d'élevage traditionnelles des Peuls. Premières vues sur les montagnes du Guéra, considérées comme sacrées par les populations locales. Arrivée à Bitkine, porte d'entrée du massif. Rencontre avec la communauté locale et partage des traditions orales. Nuit en lodge avec vue sur les montagnes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Exploration du Guéra */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MASSIF DU GUÉRA</span>
                          <span className="text-sm text-gray-600">Randonnée et découverte culturelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Journée en immersion dans le Guéra</h4>
                        <p className="text-justify mb-4">
                          Randonnée matinale à travers les paysages spectaculaires du massif du Guéra. Visite des villages perchés et découverte de l'architecture défensive traditionnelle. Rencontre avec les gardiens des traditions du Guéra. Découverte des cultures en terrasse et des techniques agricoles ancestrales. Participation à une cérémonie traditionnelle de bénédiction. Retour à Bitkine en fin d'après-midi. Soirée contes et légendes des montagnes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Route vers Mongo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BITKINE → MONGO</span>
                          <span className="text-sm text-gray-600">Capitale historique de la région</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Vers l'ancienne capitale du Guéra</h4>
                        <p className="text-justify mb-4">
                          Route vers Mongo à travers des paysages montagneux (environ 150 km). Arrêts dans les villages traditionnels pour découvrir l'artisanat local. Arrivée à Mongo, capitale administrative de la région du Guéra. Visite de la ville historique et découverte de son importance dans le commerce transsaharien. Rencontre avec les descendants des familles dirigeantes traditionnelles. Visite du marché artisanal de Mongo. Installation à l'hôtel et dîner traditionnel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Retour vers N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONGO → N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Retour à travers les plaines</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Journée de retour et synthèse</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour le retour vers N'Djaména (environ 450 km). Arrêt à Guélendeng pour découvrir les techniques de pêche traditionnelles sur le fleuve Chari. Déjeuner pique-nique dans la brousse. Séance de synthèse avec votre guide historien pour faire le point sur les découvertes du voyage. Arrivée à N'Djaména en fin d'après-midi. Installation à l'hôtel. Dîner d'adieu avec spectacle culturel final.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ de N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE N'DJAMÉNA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Matinée libre pour les derniers achats de souvenirs artisanaux. Visite optionnelle du marché central de N'Djaména. Transfert à l'aéroport international de N'Djaména pour votre vol de retour, emportant avec vous les souvenirs inoubliables de ce voyage au cœur des royaumes historiques tchadiens et une compréhension profonde de l'héritage culturel de cette région fascinante.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'royaumes' && (
              <div>
                {/* Section dédiée aux royaumes */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-amber-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">👑</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amber-800">Les Anciens Royaumes Tchadiens</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous fait découvrir les civilisations sophistiquées qui ont dominé le centre du Tchad pendant des siècles. Chaque royaume a développé sa propre culture, architecture et système politique, laissant un héritage qui influence encore le Tchad moderne.
                  </p>

                  {/* Navigation des royaumes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {kingdoms.map((kingdom) => (
                      <button 
                        key={kingdom.id}
                        onClick={() => setActiveKingdomTab(kingdom.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeKingdomTab === kingdom.id 
                            ? 'bg-amber-800 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {kingdom.name.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Détail des royaumes */}
                  {kingdoms.map((kingdom) => (
                    activeKingdomTab === kingdom.id && (
                      <div key={kingdom.id} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-4 text-amber-800">{kingdom.name}</h4>
                            <div className="mb-6">
                              <div className="text-sm text-gray-600 mb-1">Période historique :</div>
                              <div className="font-bold text-lg">{kingdom.period}</div>
                            </div>
                            <div className="mb-6">
                              <div className="text-sm text-gray-600 mb-1">Capitale historique :</div>
                              <div className="font-bold text-lg">{kingdom.capital}</div>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {kingdom.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-amber-800">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {kingdom.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-amber-800 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={kingdom.id === 'baguirmi' ? 11.404 : 
                                   kingdom.id === 'guera' ? 12.184 :
                                   kingdom.id === 'wadai' ? 13.829 :
                                   13.473} 
                              lng={kingdom.id === 'baguirmi' ? 16.172 : 
                                   kingdom.id === 'guera' ? 18.342 :
                                   kingdom.id === 'wadai' ? 20.833 :
                                   14.712} 
                              height="300px" 
                              showControls={true}
                              region={kingdom.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon le royaume */}
                        {kingdom.id === 'baguirmi' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Le Baguirmi Aujourd'hui</h5>
                            <p className="text-gray-700 mb-4">
                              Bien que le sultanat ait officiellement disparu au début du XXe siècle, l'institution du Sultan est toujours reconnue et respectée. Les traditions du Baguirmi perdurent à travers l'artisanat (travail du cuir, poterie), la musique (tambours royaux) et les cérémonies protocolaires. Massenya reste un centre culturel important où se transmettent l'histoire et les valeurs du royaume.
                            </p>
                          </div>
                        )}

                        {kingdom.id === 'guera' && (
                          <div className="bg-orange-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Montagnes Sacrées</h5>
                            <p className="text-gray-700 mb-4">
                              Le massif du Guéra a toujours été considéré comme un lieu sacré par les populations locales. Ses sommets abritent des sites de culte ancestraux, des grottes sacrées et des villages fortifiés. L'isolement relatif de cette région a permis la préservation exceptionnelle des traditions, des langues et des modes de vie traditionnels. Aujourd'hui encore, les cérémonies saisonnières et les rituels de protection sont pratiqués selon des rites transmis depuis des générations.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Carte synthétique des royaumes */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte des Anciens Royaumes</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,20.0,15.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte royaumes tchadiens"
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT CULTUREL</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Sélection d'Hébergements Typiques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-amber-800 w-16 md:w-32"></span>
                      <span className="text-amber-800 text-2xl">🏨</span>
                      <span className="h-px bg-amber-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour ce circuit culturel, nous avons choisi des hébergements qui reflètent l'authenticité des régions visitées. Du campement traditionnel aux hôtels confortables, chaque nuit est une expérience en soi, vous permettant de vous immerger dans l'atmosphère des anciens royaumes.
                    </p>
                  </div>

                  {/* Navigation des villes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('ndjamena')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ndjamena' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      N'DJAMÉNA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('massenya')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'massenya' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MASSENYA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bitkine')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bitkine' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BITKINE (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('mongo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'mongo' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MONGO (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - N'Djaména */}
                  {activeHotelTab === 'ndjamena' && (
                    <div className="space-y-16">
                      {/* Hôtel Novotel N'Djaména */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Novotel N'Djaména" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-amber-800 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Novotel N'Djaména</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenue Charles de Gaulle, N'Djaména, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine extérieure</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Centre d'affaires</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* moderne situé dans le centre-ville de N'Djaména. Chambres spacieuses avec vue sur la ville ou la piscine. Restaurant proposant une cuisine internationale et locale. Bar avec terrasse. Centre de remise en forme. Service de qualité et personnel multilingue. Base idéale pour débuter et terminer votre voyage.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Massenya */}
                  {activeHotelTab === 'massenya' && (
                    <div className="space-y-16">
                      {/* Campement Royal de Massenya */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Campement Royal de Massenya" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement Royal de Massenya</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Ancien quartier royal, Massenya, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Hébergement traditionnel</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">👑</span>
                                <span className="text-sm font-semibold">Atmosphère royale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌟</span>
                                <span className="text-sm font-semibold">Expérience authentique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement traditionnel situé à proximité des vestiges du palais royal. Cases confortables inspirées de l'architecture baguirmienne. Sanitaires privés. Restaurant sous case traditionnelle servant une cuisine royale authentique. Soirées autour du feu avec contes et musique traditionnelle. Immersion totale dans l'atmosphère historique du Baguirmi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bitkine */}
                  {activeHotelTab === 'bitkine' && (
                    <div className="space-y-16">
                      {/* Lodge des Montagnes du Guéra */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Lodge des Montagnes du Guéra" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Lodge des Montagnes du Guéra</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Vue sur les montagnes, Bitkine, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏔️</span>
                                <span>Vue panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Éco-responsable</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Confort rustique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Lodge éco-responsable perché sur les contreforts du massif du Guéra. Bungalows en matériaux locaux avec terrasses privées offrant une vue spectaculaire sur les montagnes. Restaurant utilisant des produits locaux et saisonniers. Soirées culturelles avec les communautés locales. Accès direct aux sentiers de randonnée. Respect total de l'environnement et des traditions locales.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Mongo */}
                  {activeHotelTab === 'mongo' && (
                    <div className="space-y-16">
                      {/* Hôtel Le Sultan de Mongo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Hôtel Le Sultan de Mongo" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Le Sultan de Mongo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Mongo, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Architecture traditionnelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Cuisine du Guéra</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💧</span>
                                <span className="text-sm font-semibold">Eau chaude 24h/24</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 3* construit dans le style architectural traditionnel du Guéra. Chambres propres et confortables avec salle de bain privée. Restaurant spécialisé dans les plats régionaux. Cour intérieure ombragée pour se détendre. Service personnalisé et accueil chaleureux. Situation centrale pour explorer la ville historique de Mongo.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Voyage Culturel</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-amber-800">$2,499</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, hébergement, visites culturelles, guide historien, repas traditionnels
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
                    <option value="2026-11-12">12 Novembre 2026</option>
                    <option value="2026-12-08">8 Décembre 2026</option>
                    <option value="2027-01-20">20 Janvier 2027</option>
                    <option value="2027-02-25">25 Février 2027</option>
                    <option value="2027-03-15">15 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période : Novembre à Février (saison culturelle)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>VOYAGE EXCEPTIONNEL :</strong> Guide historien spécialiste des royaumes tchadiens
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
                  <p className="text-sm font-semibold mb-2">Questions sur ce voyage culturel ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos conseillers spécialisés sur le patrimoine tchadien vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,10.0,20.0,15.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte centre Tchad miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Centre Tchad - Royaumes Historiques
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Parcours de 8 jours sur les traces des anciens royaumes
                </p>
              </div>

              {/* Widget patrimoine */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🏛️</span>
                  <span>Patrimoine Culturel</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Sites historiques</span>
                    <span className="font-bold text-amber-800">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Communautés visitées</span>
                    <span className="font-bold text-amber-800">8+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ateliers artisanaux</span>
                    <span className="font-bold text-amber-800">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spectacles traditionnels</span>
                    <span className="font-bold text-amber-800">6+</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Voyage certifié "Tourisme Culturel Responsable"
                </div>
              </div>

              {/* Widget climat */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Climat du Centre</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>N'Djaména</span>
                    <span className="font-bold text-yellow-600">20-35°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Massenya</span>
                    <span className="font-bold text-orange-600">22-36°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guéra (altitude)</span>
                    <span className="font-bold text-green-600">16-28°C</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Saison idéale : fraîche et sèche (novembre à février)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-amber-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-amber-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Patrimoine</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}