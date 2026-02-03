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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Guinée Équatoriale</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.5,3.2,10.0,4.0&layer=mapnik&marker=3.75,8.78&marker=1.865,9.77"
          style={{ border: 0 }}
          allowFullScreen
          title="Découverte de la Guinée Équatoriale"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/2.5/9.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-green-800 border-2 border-gray-300"></span>
          <span className="text-sm">Malabo (Île de Bioko)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bata (Région continentale)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plages et réserves</span>
        </div>
      </div>
    </div>
  );
};

export default function DecouverteDeuxRives() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('malabo');
  const [activeExperienceTab, setActiveExperienceTab] = useState('culture');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏙️', title: 'Malabo coloniale', desc: 'Découverte de l\'architecture hispano-créole unique' },
    { icon: '🌴', title: 'Forêts de Bioko', desc: 'Exploration des forêts tropicales et faune endémique' },
    { icon: '🏖️', title: 'Plages de Bata', desc: 'Relaxation sur les plages immaculées de la côte atlantique' },
    { icon: '🏛️', title: 'Culture hispanique', desc: 'Immersion dans la seule culture hispanophone d\'Afrique' },
    { icon: '⛪', title: 'Cathédrale de Bata', desc: 'Visite du plus grand édifice religieux d\'Afrique centrale' },
    { icon: '🌋', title: 'Volcan Pico Basile', desc: 'Ascension vers le point culminant de l\'île de Bioko' },
  ];

  const regions = [
    { name: 'Malabo', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Capitale sur l\'île de Bioko, architecture unique' },
    { name: 'Bioko Nord', color: 'bg-emerald-100', textColor: 'text-emerald-800', desc: 'Forêts tropicales et villages traditionnels' },
    { name: 'Bata', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Ville continentale principale et port moderne' },
    { name: 'Littoral Continental', color: 'bg-cyan-100', textColor: 'text-cyan-800', desc: 'Plages paradisiaques et réserves naturelles' },
    { name: 'Pico Basile', color: 'bg-gray-100', textColor: 'text-gray-800', desc: 'Volcan actif et point culminant (3,011m)' },
    { name: 'Réserve de Monte Alén', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Forêt tropicale humide et biodiversité exceptionnelle' },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Culture Hispano-Africaine', 
      icon: '🎭',
      desc: 'Immersion dans l\'unique culture hispanophone d\'Afrique, mélange d\'influences espagnoles et africaines',
      highlights: ['Architecture coloniale', 'Gastronomie créole', 'Festivals traditionnels', 'Artisanat local']
    },
    { 
      id: 'nature',
      name: 'Nature Tropicale', 
      icon: '🌿',
      desc: 'Exploration des écosystèmes uniques : forêts tropicales, plages, volcans et biodiversité exceptionnelle',
      highlights: ['Forêts de Bioko', 'Plages de Bata', 'Volcan Pico Basile', 'Faune endémique']
    },
    { 
      id: 'urban',
      name: 'Villes Contrastées', 
      icon: '🏙️',
      desc: 'Découverte du contraste entre Malabo coloniale et Bata moderne, deux visages du pays',
      highlights: ['Malabo historique', 'Bata moderne', 'Architecture unique', 'Vie urbaine']
    },
    { 
      id: 'aventure',
      name: 'Aventure Tropicale', 
      icon: '🚤',
      desc: 'Expédition à travers les paysages variés de la Guinée Équatoriale, de l\'île au continent',
      highlights: ['Navigation inter-îles', 'Randonnées volcaniques', 'Exploration côtière', 'Rencontres culturelles']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1536152471326-642d01369e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌍</span>
          <span>ESCAPES | GUINÉE ÉQUATORIALE</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Découverte des Deux Rives : Malabo et Bata</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              7 jours entre l'île de Bioko et le continent, immersion dans la seule culture hispanophone d'Afrique
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">7</div>
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
            <span className="text-2xl">🇬🇶</span>
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | ÎLE & CONTINENT</span>
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
                <span className="bg-green-800 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE1</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - Malabo à Bata</span>
                <button className="ml-auto border-2 border-green-800 text-green-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage unique au cœur de la seule culture hispanophone d'Afrique</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-green-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-green-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-green-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-green-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 7 jours vous emmène à la découverte des deux visages de la Guinée Équatoriale : l'île de Bioko avec sa capitale Malabo, joyau d'architecture hispano-créole, et le continent avec Bata, ville dynamique au bord de l'Atlantique. Vous explorerez cette nation unique, seule hispanophone d'Afrique, à travers ses paysages tropicaux, sa culture métissée et son histoire fascinante. Des forêts tropicales de Bioko aux plages immaculées de Bata, ce voyage vous fera découvrir les contrastes saisissants de ce petit pays riche en pétrole et en traditions.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-800">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-green-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Visite guidée de Malabo</strong> : architecture coloniale unique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Ascension du Pico Basile</strong> (3,011m) avec vue panoramique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Découverte des plages de Bata</strong> : Utonde et autres joyaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Visite de la Cathédrale de Bata</strong>, plus grande d'Afrique centrale</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Dégustation de cuisine hispano-africaine</strong> unique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Exploration des forêts tropicales</strong> de Bioko</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Rencontre avec les communautés locales</strong> : fangs, bubis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-800 mt-1">•</span>
                        <span><strong>Découverte du marché central de Bata</strong>, cœur économique</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la Guinée Équatoriale */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Guinée Équatoriale : Une Nation Unique</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La Guinée Équatoriale est le seul pays hispanophone d'Afrique et l'un des plus petits du continent. Richesse pétrolière et pauvreté contrastent dans ce pays aux paysages variés : îles volcaniques, forêts tropicales et côtes atlantiques. Ce circuit vous permet de découvrir sa culture métissée, son histoire coloniale complexe et les transformations économiques récentes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Hispanophone unique</span>
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Biodiversité exceptionnelle</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Richesses pétrolières</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Culture métissée</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LA GUINÉE ÉQUATORIALE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie</div>
                      <div className="text-3xl font-bold text-green-800">28,051</div>
                      <div className="text-xs">km² (petit pays)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Population</div>
                      <div className="text-3xl font-bold text-green-800">1.4M</div>
                      <div className="text-xs">habitants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Langue officielle</div>
                      <div className="text-3xl font-bold text-green-800">Espagnol</div>
                      <div className="text-xs">Unique en Afrique</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">PIB/habitant</div>
                      <div className="text-3xl font-bold text-green-800">$8,462</div>
                      <div className="text-xs">(le plus haut d'Afrique)</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Île-Continent</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de l'île de Bioko dans le golfe de Guinée au continent africain. Vous découvrirez successivement Malabo, capitale historique aux airs antillais, puis Bata, ville continentale dynamique. Le voyage inclut un vol intérieur entre les deux villes, offrant des perspectives uniques sur ce pays contrasté : forêts tropicales, plages immaculées, villes modernes et villages traditionnels.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-green-800 font-bold">1,200 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vol intérieur</div>
                            <div className="text-green-800 font-bold">1 heure</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits île/continent</div>
                            <div className="text-green-800 font-bold">4/3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes</div>
                            <div className="text-green-800 font-bold">4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Guinée Équatoriale</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,0.5,11.0,4.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Guinée Équatoriale"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/2.0/9.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-800">Les Régions de Guinée Équatoriale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Malabo' && 'Capitale • Architecture • Histoire'}
                          {region.name === 'Bioko Nord' && 'Forêts • Volcans • Villages'}
                          {region.name === 'Bata' && 'Ville moderne • Plages • Commerce'}
                          {region.name === 'Littoral Continental' && 'Plages • Nature • Relaxation'}
                          {region.name === 'Pico Basile' && 'Volcan • Randonnée • Panoramas'}
                          {region.name === 'Réserve de Monte Alén' && 'Biodiversité • Forêt • Conservation'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-green-800 to-emerald-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à Malabo</div>
                      <div className="text-xs opacity-80">Accueil, découverte capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Malabo historique</div>
                      <div className="text-xs opacity-80">Architecture coloniale, culture</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3</div>
                      <div className="text-sm">Pico Basile</div>
                      <div className="text-xs opacity-80">Ascension volcan, forêts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4</div>
                      <div className="text-sm">Vol vers Bata</div>
                      <div className="text-xs opacity-80">Transition île-continent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Bata moderne</div>
                      <div className="text-xs opacity-80">Plages, cathédrale, marché</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6</div>
                      <div className="text-sm">Littoral continental</div>
                      <div className="text-xs opacity-80">Plages, nature, villages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Souvenirs, transfert aéroport</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Malabo */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À MALABO</span>
                          <span className="text-sm text-gray-600">Découverte de la capitale insulaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Malabo sur l'île de Bioko. Accueil par votre guide francophone et transfert à l'hôtel. Première immersion dans l'atmosphère unique de Malabo, capitale au charme hispano-créole. Visite du centre historique : découverte de la Place de l'Indépendance, de la Cathédrale de Santa Isabel (style néo-gothique), et des bâtiments coloniaux aux couleurs pastel. Dîner de bienvenue dans un restaurant local pour découvrir la cuisine équatoguinéenne, mélange de traditions africaines et espagnoles. Nuit à l'hôtel à Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Malabo historique */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MALABO HISTORIQUE ET CULTURELLE</span>
                          <span className="text-sm text-gray-600">Immersion dans l'histoire coloniale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Journée culturelle à Malabo</h4>
                        <p className="text-justify mb-4">
                          Journée complète consacrée à la découverte de Malabo. Visite du Musée national d'Art et de Culture traditionnelle pour comprendre l'histoire et les traditions des différents groupes ethniques (Fangs, Bubis, Annobonais). Découverte du Palais présidentiel et du bâtiment du Sénat, exemples d'architecture moderniste. Promenade dans le quartier de Paraiso, avec ses villas coloniales. Après-midi : visite du marché central pour une immersion dans la vie quotidienne et découverte des produits locaux. Rencontre avec des artisans locaux. Dîner dans un restaurant typique avec spectacle de danse traditionnelle. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Pico Basile et forêts de Bioko */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PICO BASILE ET FORÊTS DE BIOKO</span>
                          <span className="text-sm text-gray-600">Nature tropicale et volcan</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Expédition nature</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour l'ascension du Pico Basile, volcan actif et point culminant de la Guinée Équatoriale (3,011 m). Route à travers les forêts tropicales humides de Bioko, avec arrêts pour observer la faune et la flore endémiques. Visite du village de Moka, habité par l'ethnie Bubi. Découverte de leurs traditions et mode de vie. Pique-nique avec vue panoramique sur l'île et l'océan Atlantique. Descente vers la côte nord de l'île pour visiter les plages de sable noir d'origine volcanique. Retour à Malabo en fin d'après-midi. Dîner libre pour découvrir les restaurants de votre choix. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Vol vers Bata */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MALABO → BATA</span>
                          <span className="text-sm text-gray-600">Transition vers le continent</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">De l'île au continent</h4>
                        <p className="text-justify mb-4">
                          Matinée libre à Malabo pour derniers achats ou découvertes personnelles. Déjeuner. Transfert à l'aéroport de Malabo pour le vol intérieur vers Bata (environ 1 heure de vol). Arrivée à Bata, ville principale de la région continentale (Río Muni). Transfert et installation à l'hôtel. Première découverte de Bata : promenade le long de l'Avenida de la Independencia, artère principale de la ville. Observation du contraste architectural entre Malabo et Bata. Dîner dans un restaurant de fruits de mer en bord de mer. Nuit à l'hôtel à Bata.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Bata moderne et plages */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BATA MODERNE ET PLAGES</span>
                          <span className="text-sm text-gray-600">Découverte urbaine et balnéaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Journée à Bata</h4>
                        <p className="text-justify mb-4">
                          Visite complète de Bata, ville la plus peuplée de Guinée Équatoriale. Découverte de la Cathédrale de Bata, plus grande église d'Afrique centrale. Visite du marché central, cœur économique de la ville. Exploration du port moderne, vital pour l'économie pétrolière du pays. Après-midi : direction les plages au sud de Bata. Détente sur la plage d'Utonde, l'une des plus belles de la côte. Possibilité de baignade dans l'océan Atlantique. Rencontre avec des pêcheurs locaux. Retour à Bata en fin d'après-midi. Dîner dans un restaurant traditionnel. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Littoral continental et villages */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LITTORAL CONTINENTAL</span>
                          <span className="text-sm text-gray-600">Nature et villages traditionnels</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Exploration côtière</h4>
                        <p className="text-justify mb-4">
                          Excursion le long du littoral continental au sud de Bata. Visite des villages de pêcheurs traditionnels. Découverte des plages sauvages et préservées. Arrêt à la réserve naturelle de Monte Alén (si accessible) pour une courte randonnée en forêt tropicale humide. Rencontre avec les populations locales de l'ethnie Fang, majoritaire sur le continent. Déjeuner pique-nique sur la plage. Après-midi : continuation de l'exploration côtière, observation des oiseaux marins. Retour à Bata en fin de journée. Dîner d'adieu avec spécialités locales. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ de Bata */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE BATA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments à Bata avec possibilité de faire des achats de souvenirs au marché artisanal. Déjeuner libre. Transfert à l'aéroport de Bata pour votre vol de retour (ou vol vers Malabo si connexion internationale nécessaire). Emportez avec vous des souvenirs inoubliables de ce voyage entre île et continent, une expérience unique qui vous aura fait découvrir la Guinée Équatoriale, ses contrastes saisissants et sa culture hispano-africaine unique.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experiences' && (
              <div>
                {/* Section dédiée aux expériences */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-green-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-800">Les Expériences de Guinée Équatoriale</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une immersion complète dans l'univers unique de la Guinée Équatoriale. De l'architecture hispano-créole de Malabo aux plages immaculées de Bata, chaque expérience est conçue pour vous faire découvrir les multiples facettes de cette nation contrastée.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-green-800 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {exp.name.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Détail des expériences */}
                  {experiences.map((exp) => (
                    activeExperienceTab === exp.id && (
                      <div key={exp.id} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <span className="text-4xl">{exp.icon}</span>
                              <h4 className="text-2xl md:text-3xl font-serif text-green-800">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-green-800">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-green-800 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'culture' ? 3.75 : 
                                   exp.id === 'nature' ? 3.6 :
                                   exp.id === 'urban' ? 1.865 :
                                   2.0} 
                              lng={exp.id === 'culture' ? 8.78 : 
                                   exp.id === 'nature' ? 8.9 :
                                   exp.id === 'urban' ? 9.77 :
                                   10.0} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'culture' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Hispano-Africaine Unique</h5>
                            <p className="text-gray-700 mb-4">
                              La Guinée Équatoriale est le seul pays hispanophone d'Afrique, héritage de la colonisation espagnole. Cette culture métissée se manifeste dans l'architecture (Malabo ressemble à une ville des Caraïbes), la langue (espagnol officiel avec accents africains), la religion (catholicisme majoritaire), la gastronomie (mélange de plats espagnols et africains) et les arts. Vous découvrirez également les cultures traditionnelles des ethnies Fang, Bubi et Annobonaise.
                            </p>
                          </div>
                        )}

                        {exp.id === 'nature' && (
                          <div className="bg-emerald-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Nature Tropicale Préservée</h5>
                            <p className="text-gray-700 mb-4">
                              Malgré sa petite taille, la Guinée Équatoriale possède une biodiversité exceptionnelle. L'île de Bioko abrite des forêts tropicales humides avec des espèces endémiques (singes, oiseaux). Le continent offre des paysages variés : forêts, savanes, mangroves et plages immaculées. Le pays compte plusieurs réserves naturelles dont Monte Alén, reconnue pour sa richesse biologique. C'est un paradis pour les amateurs de nature préservée.
                            </p>
                          </div>
                        )}

                        {exp.id === 'urban' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Le Contraste Urbain</h5>
                            <p className="text-gray-700 mb-4">
                              Le voyage met en lumière le contraste entre Malabo, capitale historique sur l'île, et Bata, ville moderne sur le continent. Malabo conserve un charme colonial avec ses bâtiments colorés, ses rues animées et son ambiance caribéenne. Bata, en revanche, montre le visage moderne du pays avec ses buildings, son port pétrolier et ses infrastructures récentes. Ce contraste illustre les deux facettes du développement équatoguinéen.
                            </p>
                          </div>
                        )}

                        {exp.id === 'aventure' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Aventure Tropicale</h5>
                            <p className="text-gray-700 mb-4">
                              Ce circuit est une véritable aventure à travers des paysages variés et peu fréquentés par le tourisme. De l'ascension du volcan Pico Basile aux randonnées en forêt tropicale, des navigations côtières aux explorations urbaines, chaque jour apporte son lot de découvertes. Vous découvrirez des sites préservés, rencontrerez des populations accueillantes et vivrez une expérience authentique dans l'un des pays les moins visités d'Afrique.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Galerie d'expériences */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Expériences</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1536152471326-642d01369e3f?w=600" 
                          alt="Architecture de Malabo" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Malabo coloniale</h5>
                          <p className="text-sm text-gray-700">Architecture hispano-créole unique en Afrique</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Plages de Bata" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages immaculées</h5>
                          <p className="text-sm text-gray-700">Côtes atlantiques préservées de Bata</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                          alt="Forêts tropicales" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêts de Bioko</h5>
                          <p className="text-sm text-gray-700">Écosystèmes uniques et biodiversité</p>
                        </div>
                      </div>
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU CIRCUIT</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Confortables entre Île et Continent</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-800 w-16 md:w-32"></span>
                      <span className="text-green-800 text-2xl">🏨</span>
                      <span className="h-px bg-green-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements de bon confort adaptés à chaque étape : hôtel moderne à Malabo, établissement confortable à Bata. Chaque hébergement a été sélectionné pour son emplacement, son confort et son immersion dans l'environnement local.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('malabo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'malabo' 
                          ? 'bg-green-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MALABO (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bata')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bata' 
                          ? 'bg-green-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BATA (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Malabo */}
                  {activeHotelTab === 'malabo' && (
                    <div className="space-y-16">
                      {/* Hôtel Hilton Malabo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Hilton Malabo" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-800 text-white px-3 py-1 text-sm font-bold">
                                5* LUXE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hilton Malabo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Malabo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 Restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Spa & Fitness</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 5* de luxe situé en centre-ville. Chambres spacieuses avec vue sur l'océan ou la ville, salle de bain marbre, climatisation, wifi haute vitesse. Plusieurs restaurants servant une cuisine internationale et locale. Bar, piscine extérieure, spa, centre de fitness. Service de concierge. Emplacement idéal pour visiter Malabo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bata */}
                  {activeHotelTab === 'bata' && (
                    <div className="space-y-16">
                      {/* Hôtel Panafrica Bata */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Hôtel Panafrica Bata" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Panafrica Bata</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Bata, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Vue sur mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant gastronomique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏢</span>
                                <span className="text-sm font-semibold">Centre d'affaires</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* moderne situé en face de l'océan Atlantique. Chambres confortables avec balcon, salle de bain privée, climatisation, wifi. Restaurant gastronomique servant une fusion de cuisine africaine et internationale. Bar panoramique, centre d'affaires, service de blanchisserie. Emplacement central pour visiter Bata et ses environs.
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
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-800">$3,299</span>
                    <span className="text-xl line-through text-gray-500">$2,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur, transferts, guides francophones, hébergement 4-5*, tous les repas, visites, activités
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-12-10">10 Décembre 2026</option>
                    <option value="2027-01-15">15 Janvier 2027</option>
                    <option value="2027-02-20">20 Février 2027</option>
                    <option value="2027-03-25">25 Mars 2027</option>
                    <option value="2027-04-30">30 Avril 2027</option>
                    <option value="2027-05-15">15 Mai 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de décembre à mai (meilleure période sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-800 to-emerald-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT EXCLUSIF :</strong> Seul pays hispanophone d'Afrique
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-green-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-green-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-green-800 text-white py-4 font-semibold text-base mb-4 hover:bg-green-700 transition-colors shadow-md">
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
                    Nos experts de la Guinée Équatoriale vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,0.5,11.0,4.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Guinée Équatoriale miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Découverte des Deux Rives - 7 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit entre île de Bioko et continent
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Ce Qui est Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Vol intérieur Malabo-Bata</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts aéroport/hôtel</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialisé</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergement 4-5* (6 nuits)</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les petits-déjeuners</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 déjeuners et 6 dîners</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Toutes les visites mentionnées</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entrées sites et musées</span>
                    <span className="font-bold text-green-800">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Informations Importantes</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Condition physique</span>
                    <span className="font-bold text-green-800">Moyenne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-green-800">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-green-800">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-green-800">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-green-800">Recommandée</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + certificat vaccinal fièvre jaune
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un voyage fascinant entre île et continent. Malabo est un joyau architectural et les plages de Bata sont paradisiaques. Une découverte unique de l'Afrique hispanophone."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc D., voyageur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}