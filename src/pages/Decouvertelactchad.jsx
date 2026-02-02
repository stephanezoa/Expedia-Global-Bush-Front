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
        <h4 className="font-semibold text-center text-lg">Itinéraire Lac Tchad</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,12.0,16.0,14.5&layer=mapnik&marker=12.134,15.055&marker=13.5,13.0&marker=14.0,13.5&marker=15.0,13.2"
          style={{ border: 0 }}
          allowFullScreen
          title="Découverte du Lac Tchad"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/13.5/14.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Baga Sola (lac)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Îles du lac</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bol (marché)</span>
        </div>
      </div>
    </div>
  );
};

export default function DecouverteLacTchad() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('ndjamena');
  const [activeRegionTab, setActiveRegionTab] = useState('lac');
  const [activeExperienceTab, setActiveExperienceTab] = useState('nature');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🛶', title: 'Navigation sur le lac', desc: 'Exploration en pirogue des eaux et îles du lac Tchad' },
    { icon: '🐟', title: 'Pêche traditionnelle', desc: 'Découverte des techniques de pêche ancestrales' },
    { icon: '🏝️', title: 'Îles flottantes', desc: 'Visite des îles et villages lacustres' },
    { icon: '🦢', title: 'Observation d\'oiseaux', desc: 'Plus de 350 espèces d\'oiseaux migrateurs' },
    { icon: '👨‍🌾', title: 'Communautés lacustres', desc: 'Rencontre avec les pêcheurs et cultivateurs' },
    { icon: '🌅', title: 'Couchers de soleil', desc: 'Spectacles uniques sur les eaux du lac' },
  ];

  const regions = [
    { name: 'N\'Djaména', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Capitale et point de départ vers le lac' },
    { name: 'Région du Lac', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Vastes étendues d\'eau et zones humides' },
    { name: 'Îles flottantes', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Écosystèmes uniques et villages sur l\'eau' },
    { name: 'Baga Sola', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Port principal et ville lacustre' },
    { name: 'Bol', color: 'bg-orange-100', textColor: 'text-orange-800', desc: 'Marchés animés et vie traditionnelle' },
    { name: 'Périmètre irrigué', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Zones agricoles autour du lac' },
  ];

  const experiences = [
    { 
      id: 'nature',
      name: 'Nature et Biodiversité', 
      icon: '🌿',
      desc: 'Découverte de l\'écosystème unique du lac Tchad, ses oiseaux migrateurs et sa faune aquatique',
      highlights: ['Navigation en pirogue', 'Observation d\'oiseaux', 'Îles flottantes', 'Faune lacustre']
    },
    { 
      id: 'culture',
      name: 'Culture Lacustre', 
      icon: '🏛️',
      desc: 'Immersion dans la vie des communautés qui vivent avec et du lac depuis des siècles',
      highlights: ['Pêche traditionnelle', 'Villages lacustres', 'Artisanat local', 'Cuisine du lac']
    },
    { 
      id: 'environnement',
      name: 'Environnement', 
      icon: '💧',
      desc: 'Compréhension des enjeux écologiques et du phénomène de régression du lac',
      highlights: ['Changements climatiques', 'Gestion de l\'eau', 'Agriculture durable', 'Conservation']
    },
    { 
      id: 'aventure',
      name: 'Aventure', 
      icon: '🚤',
      desc: 'Expédition à travers les eaux et îles du quatrième plus grand lac d\'Afrique',
      highlights: ['Exploration des îles', 'Campements lacustres', 'Pêche au filet', 'Navigation']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌍</span>
          <span>ESCAPES | TCHAD</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">À la Découverte du Lac Tchad</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              6 jours d'exploration du quatrième plus grand lac d'Afrique, ses îles mystérieuses et ses communautés lacustres
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">6</div>
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
            <span className="text-2xl">🇹🇩</span>
            <span className="text-sm font-semibold">TCHAD | LAC TCHAD</span>
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
                <span className="bg-blue-800 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">6 jours - N'Djaména à Lac Tchad</span>
                <button className="ml-auto border-2 border-blue-800 text-blue-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage unique au cœur d'un écosystème lacustre en mutation</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
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
                  Ce circuit de 6 jours vous emmène à la découverte du lac Tchad, quatrième plus grand lac d'Afrique et véritable mer intérieure au cœur du Sahel. Vous explorerez cet écosystème unique, ses îles mystérieuses, ses communautés lacustres et découvrirez les enjeux environnementaux qui le touchent. De N'Djaména aux rives du lac, en passant par les villes de Baga Sola et Bol, ce voyage vous permettra de naviguer sur les eaux du lac, rencontrer les pêcheurs traditionnels, observer une avifaune exceptionnelle et comprendre la vie des populations qui dépendent de cette ressource vitale.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Moments Forts du Voyage</h3>
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

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Navigation en pirogue</strong> sur le lac Tchad avec pêcheurs locaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite des îles flottantes</strong> et découverte des villages lacustres</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Observation d'oiseaux</strong> avec plus de 350 espèces recensées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Rencontre avec les pêcheurs</strong> et initiation aux techniques traditionnelles</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Exploration du marché de Bol</strong>, cœur économique de la région</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Dégustation de poissons du lac</strong> préparés selon les recettes locales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite des périmètres irrigués</strong> et découverte de l'agriculture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Compréhension des enjeux environnementaux</strong> du lac Tchad</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le lac Tchad */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Lac Tchad : Un Écosystème Unique</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le lac Tchad est l'un des plus grands lacs d'Afrique et l'une des zones humides les plus importantes du continent. Malgré sa régression spectaculaire (de 25 000 km² dans les années 1960 à moins de 1 500 km² aujourd'hui), il reste vital pour des millions de personnes. Ce circuit vous permet de découvrir sa biodiversité exceptionnelle, ses paysages uniques et les adaptations remarquables des populations face aux changements climatiques.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Zone humide Ramsar</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Biodiversité unique</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Enjeux climatiques</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Communautés résilientes</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE LAC TCHAD EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie actuelle</div>
                      <div className="text-3xl font-bold text-blue-800">1,350</div>
                      <div className="text-xs">km² (variable)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Profondeur moyenne</div>
                      <div className="text-3xl font-bold text-blue-800">1.5</div>
                      <div className="text-xs">mètres</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces d'oiseaux</div>
                      <div className="text-3xl font-bold text-blue-800">350+</div>
                      <div className="text-xs">dont migrateurs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Population dépendante</div>
                      <div className="text-3xl font-bold text-blue-800">40M</div>
                      <div className="text-xs">personnes</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Autour du Lac</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène des rives du Chari à N'Djaména jusqu'aux eaux ouvertes du lac Tchad. Vous découvrirez successivement la région de Baga Sola, porte d'entrée du lac, les îles flottantes aux écosystèmes uniques, et la ville de Bol avec son marché animé. Chaque étape révèle un aspect différent de la vie lacustre : pêche, agriculture, commerce et traditions.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-blue-800 font-bold">800 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Navigation sur lac</div>
                            <div className="text-blue-800 font-bold">2 jours</div>
                          </div>
                          <div>
                            <div className="font-semibold">Communautés visitées</div>
                            <div className="text-blue-800 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes</div>
                            <div className="text-blue-800 font-bold">3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Région du Lac Tchad</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,12.0,16.0,14.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte région lac Tchad"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/13.5/14.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-800">Les Zones du Lac Tchad</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'N\'Djaména' && 'Capitale • Départ • Fleuve Chari'}
                          {region.name === 'Région du Lac' && 'Navigation • Pêche • Oiseaux'}
                          {region.name === 'Îles flottantes' && 'Écosystèmes • Villages • Nature'}
                          {region.name === 'Baga Sola' && 'Port • Pêcheurs • Embarcadère'}
                          {region.name === 'Bol' && 'Marché • Commerce • Agriculture'}
                          {region.name === 'Périmètre irrigué' && 'Cultures • Irrigation • Innovation'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-800 to-teal-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à N'Djaména</div>
                      <div className="text-xs opacity-80">Accueil, briefing, découverte capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Route vers le lac</div>
                      <div className="text-xs opacity-80">N'Djaména → Baga Sola, première vue du lac</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3</div>
                      <div className="text-sm">Navigation sur le lac</div>
                      <div className="text-xs opacity-80">Pirogue, îles, pêche, observation oiseaux</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4</div>
                      <div className="text-sm">Exploration des îles</div>
                      <div className="text-xs opacity-80">Villages lacustres, communautés, traditions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Bol et retour</div>
                      <div className="text-xs opacity-80">Marché, agriculture, route vers N'Djaména</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Synthèse, souvenirs, transfert aéroport</div>
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
                          <span className="text-sm text-gray-600">Découverte de la capitale et préparation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de N'Djaména. Accueil par votre guide spécialiste du lac Tchad et transfert à l'hôtel. Après-midi de découverte de la capitale tchadienne : visite du marché central pour une première immersion dans l'atmosphère du pays, promenade le long du fleuve Chari (principal affluent du lac Tchad). Briefing détaillé sur le circuit avec présentation des étapes et des spécificités du voyage au lac Tchad. Dîner de bienvenue avec dégustation de poissons du lac préparés selon les recettes traditionnelles. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Baga Sola */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA → BAGA SOLA</span>
                          <span className="text-sm text-gray-600">Première approche du lac Tchad</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Vers les rives du lac</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 en direction de Baga Sola (environ 250 km). Traversée des paysages du Sahel tchadien avec arrêts dans des villages pour observer la vie rurale. Arrivée à Baga Sola, ville portuaire sur les rives du lac Tchad. Première vue impressionnante sur les vastes étendues d'eau. Installation à l'hôtel. Visite du port de pêche pour observer l'activité des pêcheurs et les techniques de pêche traditionnelles. Rencontre avec les pêcheurs locaux et présentation des différentes espèces de poissons du lac. Dîner avec poisson frais du lac. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Navigation sur le lac */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">NAVIGATION SUR LE LAC</span>
                          <span className="text-sm text-gray-600">Pirogue, pêche et observation d'oiseaux</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée sur l'eau</h4>
                        <p className="text-justify mb-4">
                          Journée entière consacrée à la navigation sur le lac Tchad. Départ en pirogue traditionnelle avec des pêcheurs expérimentés. Découverte des techniques de pêche au filet et à la ligne. Observation de l'avifaune exceptionnelle du lac : hérons, cormorans, pélicans, canards et de nombreuses espèces migratrices. Visite d'une île flottante et découverte de son écosystème unique. Pique-nique sur une île avec dégustation de poisson fraîchement pêché. Après-midi : continuation de l'exploration des eaux du lac, observation des activités des pêcheurs, compréhension de l'organisation sociale autour de la pêche. Retour à Baga Sola en fin de journée. Dîner et nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Exploration des îles et villages */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ÎLES ET VILLAGES LACUSTRES</span>
                          <span className="text-sm text-gray-600">Immersion dans les communautés du lac</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Vie lacustre</h4>
                        <p className="text-justify mb-4">
                          Nouvelle journée de navigation vers les îles habitées du lac. Visite d'un village lacustre pour découvrir le mode de vie des populations qui vivent sur les îles flottantes. Rencontre avec les habitants, découverte de leur habitat traditionnel, de leurs activités (pêche, agriculture, artisanat). Participation à des activités quotidiennes : préparation du poisson, tissage de nasses, culture sur les îles. Déjeuner chez l'habitant avec partage des repas traditionnels. Après-midi : navigation vers d'autres îles pour observer la diversité des écosystèmes et des modes d'adaptation. Discussion avec les anciens du village sur l'histoire du lac et les changements observés. Retour à Baga Sola. Dîner et nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Bol et retour vers N'Djaména */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BAGA SOLA → BOL → N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Marché de Bol et retour à la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Dernier jour au lac</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 pour Bol, ville importante de la région du lac (environ 100 km). Visite du marché de Bol, centre économique de la région où s'échangent poissons, céréales, bétail et produits artisanaux. Découverte des périmètres irrigués autour du lac et rencontre avec les agriculteurs qui pratiquent une agriculture adaptée aux conditions particulières de la zone. Déjeuner à Bol avec spécialités locales. Après-midi : route de retour vers N'Djaména (environ 250 km) avec arrêts pour observer les paysages et la vie rurale. Arrivée à N'Djaména en fin d'après-midi. Installation à l'hôtel. Dîner d'adieu avec synthèse du voyage. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Départ de N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE N'DJAMÉNA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments à N'Djaména avec possibilité de faire des achats de souvenirs au marché artisanal. Déjeuner libre. Transfert à l'aéroport international de N'Djaména pour votre vol de retour. Emportez avec vous des souvenirs inoubliables de ce voyage au cœur du lac Tchad, une expérience unique qui vous aura fait découvrir la vie autour de cette mer intérieure du Sahel, ses enjeux environnementaux et la résilience de ses populations.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Les Expériences du Lac Tchad</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une immersion complète dans l'univers du lac Tchad. De la navigation traditionnelle aux rencontres avec les communautés lacustres, chaque expérience est conçue pour vous faire découvrir les multiples facettes de ce milieu unique.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-blue-800 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-blue-800">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-blue-800">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
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
                              lat={exp.id === 'nature' ? 13.5 : 
                                   exp.id === 'culture' ? 13.8 :
                                   exp.id === 'environnement' ? 13.6 :
                                   13.7} 
                              lng={exp.id === 'nature' ? 14.2 : 
                                   exp.id === 'culture' ? 14.1 :
                                   exp.id === 'environnement' ? 14.3 :
                                   14.0} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'nature' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Biodiversité du Lac Tchad</h5>
                            <p className="text-gray-700 mb-4">
                              Le lac Tchad abrite une biodiversité exceptionnelle malgré sa régression. Vous découvrirez plus de 350 espèces d'oiseaux, dont de nombreux migrateurs qui viennent d'Europe et d'Asie. La faune aquatique comprend diverses espèces de poissons (perche du Nil, capitaine, silure), tandis que les îles abritent une végétation adaptée aux conditions humides. Cet écosystème unique est classé site Ramsar pour son importance écologique.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Communautés Lacustres</h5>
                            <p className="text-gray-700 mb-4">
                              Les populations vivant autour et sur le lac Tchad ont développé une culture unique adaptée à leur environnement. Vous découvrirez leurs techniques de pêche ancestrales, leur habitat sur les îles flottantes, leur artisanat (nasses, pirogues), leur cuisine à base de poisson, et leurs traditions sociales. Ces communautés, principalement des pêcheurs et agriculteurs, montrent une résilience remarquable face aux changements environnementaux.
                            </p>
                          </div>
                        )}

                        {exp.id === 'environnement' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Enjeux Environnementaux</h5>
                            <p className="text-gray-700 mb-4">
                              Le lac Tchad est au cœur d'enjeux environnementaux majeurs. Sa superficie a diminué de plus de 90% depuis les années 1960 due aux variations climatiques et à l'irrigation. Ce voyage vous permet de comprendre ces phénomènes, les projets de préservation (comme le projet de transfert d'eau depuis le bassin du Congo), et les adaptations des populations. C'est une immersion dans les défis du développement durable en zone sahélienne.
                            </p>
                          </div>
                        )}

                        {exp.id === 'aventure' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Aventure Lacustre</h5>
                            <p className="text-gray-700 mb-4">
                              Naviguer sur le lac Tchad est une aventure unique. Vous explorerez ses eaux peu profondes en pirogue traditionnelle, découvrirez des îles isolées, camperez sur ses rives, et vivrez au rythme des pêcheurs. Cette expédition vous permettra de découvrir des paysages spectaculaires, des couchers de soleil inoubliables sur l'eau, et de ressentir l'immensité de cette mer intérieure au cœur du Sahel.
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
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Navigation en pirogue" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Navigation traditionnelle</h5>
                          <p className="text-sm text-gray-700">Exploration du lac en pirogue avec les pêcheurs locaux</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600" 
                          alt="Observation d'oiseaux" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Oiseaux migrateurs</h5>
                          <p className="text-sm text-gray-700">Observation des centaines d'espèces d'oiseaux du lac</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                          alt="Villages lacustres" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Vie sur les îles</h5>
                          <p className="text-sm text-gray-700">Découverte des villages et communautés des îles flottantes</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Des Hébergements Authentiques au Bord du Lac</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                      <span className="text-blue-800 text-2xl">🏨</span>
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements variés adaptés à chaque étape : hôtel confortable à N'Djaména, auberge simple mais propre à Baga Sola, et expérience unique de nuit chez l'habitant sur les îles du lac. Chaque hébergement a été sélectionné pour son authenticité et son immersion dans l'environnement local.
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
                      onClick={() => setActiveHotelTab('lac')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lac' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BAGA SOLA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('iles')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'iles' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ÎLES (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - N'Djaména */}
                  {activeHotelTab === 'ndjamena' && (
                    <div className="space-y-16">
                      {/* Hôtel Mercure N'Djaména */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Mercure N'Djaména" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Mercure N'Djaména</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, N'Djaména, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Wifi</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* confortable situé en centre-ville. Chambres spacieuses avec salle de bain privée, climatisation, wifi. Restaurant servant une cuisine internationale et locale. Bar, piscine, service de blanchisserie. Emplacement idéal pour les débuts et fins de circuit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lac */}
                  {activeHotelTab === 'lac' && (
                    <div className="space-y-16">
                      {/* Auberge du Lac - Baga Sola */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                              alt="Auberge du Lac" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Auberge du Lac - Baga Sola</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baga Sola, région du Lac Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏝️</span>
                                <span>Vue sur le lac</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Terrasse</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Auberge simple mais propre située au bord du lac. Chambres basiques avec ventilateur, salle de bain privée (eau froide). Restaurant servant une cuisine locale à base de poisson frais. Terrasse avec vue magnifique sur le lac. Service attentionné. Immersion dans l'atmosphère de la ville lacustre.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Îles */}
                  {activeHotelTab === 'iles' && (
                    <div className="space-y-16">
                      {/* Chez l'habitant sur les îles */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Chez l'habitant îles" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Chez l'Habitant - Îles du Lac</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Îles flottantes, Lac Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span>Immersion familiale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏠</span>
                                <span className="text-sm font-semibold">Habitat traditionnel</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍲</span>
                                <span className="text-sm font-semibold">Cuisine familiale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Nuit exceptionnelle chez l'habitant sur une île du lac Tchad. Hébergement dans une case traditionnelle ou dans une chambre aménagée. Partage des repas avec la famille. Participation aux activités quotidiennes : pêche, préparation du poisson, vie communautaire. Échanges authentiques sur la vie sur les îles. Expérience humaine unique permettant une immersion profonde dans la culture lacustre. Conditions basiques mais authentiques.
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
                    <span className="text-3xl font-bold text-blue-800">$1,899</span>
                    <span className="text-xl line-through text-gray-500">$1,699</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : 4x4 avec chauffeur, guides spécialisés, hébergement complet, tous les repas, navigation sur le lac, activités culturelles
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
                    <option value="2026-12-15">15 Décembre 2026</option>
                    <option value="2027-01-10">10 Janvier 2027</option>
                    <option value="2027-02-05">5 Février 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de décembre à février (meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT EXCLUSIF :</strong> Découverte approfondie du lac Tchad
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
                  <p className="text-sm font-semibold mb-2">Questions sur ce circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts du Tchad vous accompagnent dans la préparation.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,12.0,16.0,14.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte lac Tchad miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Découverte du Lac Tchad - 6 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit à travers la région du lac Tchad
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
                    <span>Transport 4x4 avec chauffeur</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste du lac</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les hébergements</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas et boissons</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Navigation sur le lac</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Activités culturelles</span>
                    <span className="font-bold text-blue-800">✓</span>
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
                    <span className="font-bold text-blue-800">Moyenne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-800">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-blue-800">Fièvre jaune + Paludisme</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-blue-800">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Certificat médical obligatoire + visa tchadien requis
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-800">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expérience unique de découverte du lac Tchad. Les rencontres avec les pêcheurs et la navigation sur le lac resteront des souvenirs inoubliables."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Sophie L., voyageuse 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Tchad</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}