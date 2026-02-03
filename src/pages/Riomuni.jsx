import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-1},${lat-1},${lng+1},${lat+1}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-1},${lat-1},${lng+1},${lat+1}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Río Muni</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.0,1.0,11.5,2.5&layer=mapnik&marker=1.865,9.77&marker=2.15,11.33"
          style={{ border: 0 }}
          allowFullScreen
          title="Río Muni Authentique"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/1.5/10.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-purple-700 border-2 border-gray-300"></span>
          <span className="text-sm">Bata (côte atlantique)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Réserve de Monte Alén</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ebebiyín (frontière)</span>
        </div>
      </div>
    </div>
  );
};

export default function RioMuni() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bata');
  const [activeExperienceTab, setActiveExperienceTab] = useState('culture');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌴', title: 'Réserve de Monte Alén', desc: 'Exploration de l\'une des plus importantes forêts d\'Afrique centrale' },
    { icon: '🎭', title: 'Culture Fang', desc: 'Immersion dans les traditions de l\'ethnie majoritaire du Río Muni' },
    { icon: '🌿', title: 'Biodiversité unique', desc: 'Découverte d\'une faune et flore exceptionnelles' },
    { icon: '🏛️', title: 'Villages traditionnels', desc: 'Visite de communautés authentiques préservées' },
    { icon: '🛶', title: 'Navigation fluviale', desc: 'Exploration des rivières et cours d\'eau' },
    { icon: '🎵', title: 'Musique et danse', desc: 'Spectacles de traditions musicales ancestrales' },
  ];

  const regions = [
    { name: 'Bata', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Port principal et ville la plus peuplée du Río Muni' },
    { name: 'Réserve Monte Alén', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Forêt tropicale humide protégée, biodiversité unique' },
    { name: 'Niefang', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Ville historique au cœur des traditions Fang' },
    { name: 'Mongomo', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Ville natale des présidents, architecture moderne' },
    { name: 'Ebebiyín', color: 'bg-red-100', textColor: 'text-red-800', desc: 'Carrefour frontalier avec le Gabon et le Cameroun' },
    { name: 'Cuvette Ouest', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Zone de forêts et plantations traditionnelles' },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Culture Fang', 
      icon: '🎭',
      desc: 'Immersion profonde dans les traditions de l\'ethnie Fang, peuple majoritaire du Río Muni',
      highlights: ['Rites traditionnels', 'Artisanat (masques, sculptures)', 'Musique Bwiti', 'Cuisine locale']
    },
    { 
      id: 'nature',
      name: 'Nature Sauvage', 
      icon: '🌿',
      desc: 'Exploration des forêts tropicales du Río Muni et découverte de leur biodiversité unique',
      highlights: ['Forêt de Monte Alén', 'Faune endémique', 'Randonnées écologiques', 'Observation oiseaux']
    },
    { 
      id: 'authenticite',
      name: 'Authenticité', 
      icon: '🏛️',
      desc: 'Rencontre avec les communautés locales et découverte de leur mode de vie traditionnel',
      highlights: ['Villages isolés', 'Agriculture traditionnelle', 'Vie quotidienne', 'Échanges culturels']
    },
    { 
      id: 'aventure',
      name: 'Aventure Intérieure', 
      icon: '🛶',
      desc: 'Exploration des paysages intérieurs du Río Muni à travers forêts, rivières et villages',
      highlights: ['Navigation fluviale', 'Randonnées forestières', 'Campements', 'Découvertes insolites']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌿</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Río Muni Authentique : Forêts et Cultures</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'immersion dans le Río Muni, entre forêts tropicales et traditions Fang
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
            <span className="text-2xl">🇬🇶</span>
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | RÍO MUNI</span>
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
                <span className="bg-purple-700 text-white px-3 py-1 font-bold">CULTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE3</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Bata à Ebebiyín</span>
                <button className="ml-auto border-2 border-purple-700 text-purple-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-purple-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage authentique au cœur des traditions Fang et des forêts du Río Muni</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 8 jours vous emmène à la découverte du Río Muni, région continentale de la Guinée Équatoriale, entre forêts tropicales denses et traditions Fang ancestrales. Vous explorerez cette terre authentique peu fréquentée par le tourisme, de la côte atlantique à la frontière avec le Gabon et le Cameroun. De Bata, ville dynamique, aux villages isolés de l'intérieur, en passant par la réserve de Monte Alén et la ville frontalière d'Ebebiyín, ce voyage vous plongera dans l'authenticité de la culture équatoguinéenne continentale.
                </p>

                {/* Section Points forts */}
                <div className="bg-purple-50 border-l-4 border-purple-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-purple-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-purple-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Exploration de la réserve de Monte Alén</strong>, joyau de biodiversité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Immersion dans des villages Fang</strong> et découverte de leurs traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Visite de Niefang</strong>, cœur historique de la culture Fang</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Navigation sur les rivières</strong> du Río Muni en pirogue traditionnelle</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Spectacles de musique et danse traditionnelles</strong> (Bwiti, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Découverte de l'artisanat local</strong> : masques, sculptures, vannerie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Rencontre avec les chefs traditionnels</strong> et cérémonies d'accueil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Observation de la faune</strong> dans son habitat naturel</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Río Muni */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Río Muni : Terre d'Authenticité</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Río Muni est la région continentale de la Guinée Équatoriale, bordée par le Gabon et le Cameroun. Contrairement à l'île de Bioko, c'est une terre de traditions préservées où l'ethnie Fang prédomine. Ses paysages de forêts tropicales humides, ses rivières et ses villages isolés en font une destination authentique pour qui veut découvrir l'Afrique profonde, loin des sentiers battus. Cette région reste l'une des moins connues et des plus préservées du pays.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture Fang</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Forêts tropicales</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Authenticité</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE RÍO MUNI EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie</div>
                      <div className="text-3xl font-bold text-purple-700">26,017</div>
                      <div className="text-xs">km² (93% du territoire)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Population</div>
                      <div className="text-3xl font-bold text-purple-700">1.1M</div>
                      <div className="text-xs">habitants (majorité Fang)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Forêt tropicale</div>
                      <div className="text-3xl font-bold text-purple-700">85%</div>
                      <div className="text-xs">du territoire couvert</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Ethnie majoritaire</div>
                      <div className="text-3xl font-bold text-purple-700">Fang</div>
                      <div className="text-xs">80% de la population</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours à travers le Río Muni</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de la côte atlantique à la frontière orientale du pays, à travers les paysages variés du Río Muni. Vous découvrirez successivement Bata, ville portuaire moderne ; la réserve de Monte Alén et ses forêts préservées ; Niefang, centre culturel Fang ; Mongomo, ville moderne de l'intérieur ; et enfin Ebebiyín, carrefour frontalier. Chaque étape révèle un aspect différent de cette région contrastée : modernité côtière, traditions forestières, vie rurale et échanges frontaliers.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-purple-700 font-bold">550 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Villages visités</div>
                            <div className="text-purple-700 font-bold">8+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en communauté</div>
                            <div className="text-purple-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes</div>
                            <div className="text-purple-700 font-bold">4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Río Muni</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.5,0.5,11.5,3.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Río Muni"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/1.5/10.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-700">Les Zones du Río Muni</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Bata' && 'Port • Modernité • Côte Atlantique'}
                          {region.name === 'Réserve Monte Alén' && 'Biodiversité • Forêt • Conservation'}
                          {region.name === 'Niefang' && 'Culture Fang • Traditions • Histoire'}
                          {region.name === 'Mongomo' && 'Modernité • Architecture • Pouvoir'}
                          {region.name === 'Ebebiyín' && 'Frontière • Commerce • Carrefour'}
                          {region.name === 'Cuvette Ouest' && 'Agriculture • Forêts • Villages'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Bata et côte</div>
                      <div className="text-xs opacity-80">Arrivée, découverte côtière</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Réserve Monte Alén</div>
                      <div className="text-xs opacity-80">Forêts, biodiversité, randonnées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Niefang et villages</div>
                      <div className="text-xs opacity-80">Culture Fang, traditions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-8</div>
                      <div className="text-sm">Mongomo et Ebebiyín</div>
                      <div className="text-xs opacity-80">Intérieur, frontière, départ</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Bata */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BATA</span>
                          <span className="text-sm text-gray-600">Découverte de la ville côtière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Bata, principale ville du Río Muni. Accueil par votre guide spécialiste de la culture Fang. Transfert à l'hôtel. Première découverte de Bata : visite du marché central, cœur économique de la ville, où se côtoient produits locaux et importés. Promenade le long de la corniche avec vue sur l'océan Atlantique. Visite de la Cathédrale de Bata, plus grande église d'Afrique centrale. Dîner de bienvenue avec spécialités de poisson et fruits de mer. Briefing sur le circuit. Nuit à l'hôtel à Bata.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Bata et environs */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BATA ET SES ENVIRONS</span>
                          <span className="text-sm text-gray-600">Plages et villages de pêcheurs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Exploration côtière</h4>
                        <p className="text-justify mb-4">
                          Journée d'exploration des environs de Bata. Direction le sud vers les plages sauvages de la côte atlantique. Visite du village de pêcheurs de Cogo et découverte des techniques de pêche traditionnelles. Dégustation de poissons frais. Après-midi : visite des plantations de cacao et de café de la région, avec explication des processus de production. Rencontre avec les agriculteurs locaux. Retour à Bata en fin d'après-midi. Dîner dans un restaurant typique avec spectacle de danse traditionnelle. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers la réserve de Monte Alén */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BATA → RÉSERVE DE MONTE ALÉN</span>
                          <span className="text-sm text-gray-600">Entrée dans la forêt tropicale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Première immersion forestière</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Bata en direction de la réserve de Monte Alén (environ 150 km). Route à travers des paysages de forêts et de plantations. Arrivée à l'entrée de la réserve, classée parc national pour sa biodiversité exceptionnelle. Installation dans un écolodge en bordure de la réserve. Première randonnée d'acclimatation dans la forêt tropicale humide avec un guide naturaliste. Observation de la flore : arbres immenses, lianes, orchidées. Dîner avec produits locaux. Soirée : écoute des sons de la forêt nocturne. Nuit à l'écolodge.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Exploration de la réserve */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION DE MONTE ALÉN</span>
                          <span className="text-sm text-gray-600">Biodiversité et rencontres</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée en forêt</h4>
                        <p className="text-justify mb-4">
                          Journée complète d'exploration de la réserve de Monte Alén. Randonnée à la recherche de la faune : éléphants de forêt, gorilles, chimpanzés, mandrills, antilopes et nombreuses espèces d'oiseaux. Visite d'une cascade isolée pour un bain rafraîchissant. Déjeuner pique-nique en pleine forêt. Après-midi : rencontre avec les chercheurs de la station scientifique de la réserve pour comprendre les enjeux de conservation. Navigation en pirogue sur une rivière forestière pour observer la vie aquatique. Retour à l'écolodge en fin de journée. Dîner et nuit à l'écolodge.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Vers Niefang et villages Fang */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE ALÉN → NIEFANG</span>
                          <span className="text-sm text-gray-600">Immersion dans la culture Fang</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée culturelle</h4>
                        <p className="text-justify mb-4">
                          Départ de la réserve en direction de Niefang, ville historique au cœur du territoire Fang. Arrêts dans des villages traditionnels pour rencontrer les communautés. Cérémonie d'accueil par les chefs de village. Découverte de l'artisanat Fang : fabrication de masques traditionnels (Ngil), sculptures sur bois, vannerie. Participation à des activités quotidiennes : préparation du manioc, pêche à la nasse. Installation dans un hébergement communautaire à Niefang. Soirée : spectacle de musique et danse Bwiti, rite traditionnel Fang. Dîner et nuit chez l'habitant.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Niefang et traditions */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">NIEFANG ET TRADITIONS FANG</span>
                          <span className="text-sm text-gray-600">Rites, cuisine et vie quotidienne</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Immersion traditionnelle</h4>
                        <p className="text-justify mb-4">
                          Journée complète d'immersion dans la culture Fang. Matin : visite du marché traditionnel de Niefang. Initiation à la cuisine Fang : préparation de plats traditionnels (ndolé, sauce d'arachide, plantains). Rencontre avec un guérisseur traditionnel (nganga) pour comprendre la médecine ancestrale. Après-midi : randonnée vers des sites sacrés Fang (bosquets sacrés, pierres de sacrifice). Cérémonie traditionnelle avec les anciens du village. Échanges sur l'organisation sociale Fang, les rites de passage, les croyances. Dîner traditionnel avec les familles d'accueil. Nuit chez l'habitant.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Route vers Mongomo et Ebebiyín */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">NIEFANG → MONGOMO → EBEBIYÍN</span>
                          <span className="text-sm text-gray-600">L'intérieur et la frontière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Vers l'est</h4>
                        <p className="text-justify mb-4">
                          Route à travers les paysages de l'intérieur du Río Muni vers l'est. Arrêt à Mongomo, ville natale des présidents équatoguinéens. Visite de la ville moderne avec ses bâtiments gouvernementaux impressionnants. Déjeuner à Mongomo. Continuation vers Ebebiyín, ville frontalière au carrefour du Gabon et du Cameroun. Découverte du marché frontalier, lieu d'échanges commerciaux intenses. Rencontre avec les commerçants venus des pays voisins. Installation à l'hôtel. Dîner d'adieu avec synthèse du voyage. Nuit à l'hôtel à Ebebiyín.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ d'Ebebiyín */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART D'EBEBIYÍN</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Dernière promenade à Ebebiyín pour observer l'animation matinale du marché frontalier. Possibilité d'achats de souvenirs artisanaux. Déjeuner libre. Transfert à l'aéroport d'Ebebiyín (ou retour vers Bata selon les vols). Emportez avec vous des souvenirs inoubliables de cette immersion authentique dans le Río Muni, ses forêts préservées, ses traditions Fang et ses rencontres humaines chaleureuses. Une expérience rare de découverte d'une Afrique profonde et préservée.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-purple-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-purple-700">Les Expériences Authentiques du Río Muni</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une immersion totale dans l'authenticité du Río Muni. Des forêts tropicales aux villages Fang, chaque expérience est conçue pour vous faire découvrir les richesses culturelles et naturelles de cette région méconnue.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-purple-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-purple-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-purple-700">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-purple-700 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'culture' ? 1.65 : 
                                   exp.id === 'nature' ? 1.4 :
                                   exp.id === 'authenticite' ? 1.8 :
                                   2.15} 
                              lng={exp.id === 'culture' ? 10.5 : 
                                   exp.id === 'nature' ? 10.3 :
                                   exp.id === 'authenticite' ? 11.0 :
                                   11.33} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'culture' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Fang</h5>
                            <p className="text-gray-700 mb-4">
                              Les Fang constituent l'ethnie majoritaire du Río Muni (80% de la population). Leur culture riche et complexe s'exprime à travers des rites comme le Bwiti (religion traditionnelle), l'art des masques Ngil (symboles de justice), la sculpture sur bois (statues Byeri), et une organisation sociale basée sur les lignages. Cette expérience vous permet de comprendre leur vision du monde, leurs croyances, leurs arts et leurs traditions qui ont traversé les siècles malgré les influences extérieures.
                            </p>
                          </div>
                        )}

                        {exp.id === 'nature' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Nature du Río Muni</h5>
                            <p className="text-gray-700 mb-4">
                              Le Río Muni est couvert à 85% par des forêts tropicales humides, parmi les plus riches d'Afrique en biodiversité. La réserve de Monte Alén abrite des espèces rares : éléphants de forêt, gorilles, chimpanzés, mandrills, buffles de forêt et plus de 400 espèces d'oiseaux. Ces écosystèmes préservés offrent des paysages spectaculaires : canopée dense, rivières sinueuses, cascades isolées. Une immersion dans l'une des dernières grandes forêts primaires d'Afrique centrale.
                            </p>
                          </div>
                        )}

                        {exp.id === 'authenticite' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Authenticité des Villages</h5>
                            <p className="text-gray-700 mb-4">
                              Loin des villes modernes, les villages du Río Muni conservent un mode de vie traditionnel. Cette expérience vous plonge dans la vie quotidienne des communautés rurales : agriculture sur brûlis, pêche traditionnelle, préparation du manioc, artisanat domestique. Vous dormez chez l'habitant, partagez leurs repas, participez à leurs activités et découvrez leur hospitalité légendaire. C'est une rencontre humaine authentique avec des populations qui vivent en harmonie avec leur environnement depuis des générations.
                            </p>
                          </div>
                        )}

                        {exp.id === 'aventure' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Aventure Intérieure</h5>
                            <p className="text-gray-700 mb-4">
                              Explorer le Río Muni est une aventure en soi. Les routes peu fréquentées, les villages isolés, les forêts denses et les rivières à traverser créent un sentiment d'exploration authentique. Cette expérience combine randonnées forestières, navigation fluviale en pirogue, nuits en communauté et découvertes insolites. C'est l'occasion de sortir des sentiers battus et de découvrir une région méconnue, où le tourisme est encore rare et l'accueil particulièrement chaleureux.
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
                          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600" 
                          alt="Forêt de Monte Alén" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêts tropicales</h5>
                          <p className="text-sm text-gray-700">Écosystèmes préservés et biodiversité unique</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1526778548025-fa2f9b1c9c0f?w=600" 
                          alt="Culture Fang" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Traditions Fang</h5>
                          <p className="text-sm text-gray-700">Masques, danses et rites ancestraux</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                          alt="Villages authentiques" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Vie villageoise</h5>
                          <p className="text-sm text-gray-700">Communautés préservées et accueil chaleureux</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Authentiques à travers le Río Muni</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-purple-700 w-16 md:w-32"></span>
                      <span className="text-purple-700 text-2xl">🏨</span>
                      <span className="h-px bg-purple-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements variés adaptés à chaque étape : hôtel confortable à Bata, écolodge en forêt, hébergement communautaire dans les villages Fang. Chaque hébergement a été sélectionné pour son authenticité et son immersion dans l'environnement local.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bata')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bata' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BATA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('foret')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'foret' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      RÉSERVE (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('villages')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'villages' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      VILLAGES (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bata */}
                  {activeHotelTab === 'bata' && (
                    <div className="space-y-16">
                      {/* Hôtel Panafrica Bata */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Panafrica Bata" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-purple-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
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

                  {/* Contenu des hébergements - Forêt */}
                  {activeHotelTab === 'foret' && (
                    <div className="space-y-16">
                      {/* Écolodge de Monte Alén */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Écolodge Monte Alén" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Écolodge de Monte Alén</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Réserve de Monte Alén, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Écotourisme</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Bungalows écologiques</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌌</span>
                                <span className="text-sm font-semibold">Nature préservée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Écolodge situé en bordure de la réserve de Monte Alén. Bungalows écologiques construits avec des matériaux locaux, alimentation solaire, eau de source. Chambres simples mais confortables avec moustiquaires, salle de bain privée (eau chaude limitée). Restaurant servant une cuisine locale à base de produits frais. Terrasse avec vue sur la forêt. Immersion totale dans la nature, bercé par les sons de la forêt. Engagement écologique et soutien à la conservation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Villages */}
                  {activeHotelTab === 'villages' && (
                    <div className="space-y-16">
                      {/* Hébergement communautaire à Niefang */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Chez l'habitant Niefang" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Chez l'Habitant - Niefang</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Niefang, région de Centro Sur, Guinée Équatoriale
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
                              Hébergement authentique chez des familles Fang dans le village de Niefang. Chambres simples mais propres aménagées dans des maisons traditionnelles. Sanitaires partagés (douche à eau froide). Pas d'électricité permanente (lampes à pétrole ou générateur limité). Partage des repas avec la famille, participation aux activités quotidiennes. Échanges culturels riches et immersion profonde dans la vie villageoise. Expérience humaine unique permettant une compréhension authentique de la culture Fang. Conditions basiques mais accueil chaleureux.
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
                  <span className="text-2xl">🌿</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-purple-700">$2,799</span>
                    <span className="text-xl line-through text-gray-500">$2,499</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-purple-700 bg-purple-50 p-2 rounded">
                    ✅ Inclus : Transferts 4x4, guides spécialisés culture Fang, hébergements, tous les repas, activités culturelles
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-purple-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-purple-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-10">10 Janvier 2026</option>
                    <option value="2026-03-15">15 Mars 2026</option>
                    <option value="2026-06-05">5 Juin 2026</option>
                    <option value="2026-09-20">20 Septembre 2026</option>
                    <option value="2026-11-25">25 Novembre 2026</option>
                    <option value="2027-02-10">10 Février 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année (janvier à décembre)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT AUTHENTIQUE :</strong> Culture Fang et forêts préservées
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-purple-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-purple-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-purple-700 text-white py-4 font-semibold text-base mb-4 hover:bg-purple-600 transition-colors shadow-md">
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
                    Nos experts du Río Muni vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.5,0.5,11.5,3.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Río Muni miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Río Muni Authentique - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit culture et nature continentale
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
                    <span>Transferts 4x4 tout terrain</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste culture Fang</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements (7 nuits)</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les petits-déjeuners</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>7 déjeuners et 7 dîners</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Activités culturelles incluses</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entrées sites et réserves</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Navigation en pirogue</span>
                    <span className="font-bold text-purple-700">✓</span>
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
                    <span className="font-bold text-purple-700">Moyenne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-purple-700">14 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-purple-700">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-purple-700">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-purple-700">Recommandée</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + traitement antipaludéen
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-purple-200 p-4 mt-6 shadow-lg bg-purple-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-purple-700">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une immersion incroyable dans la culture Fang. Les nuits chez l'habitant à Niefang et l'exploration de la réserve de Monte Alén resteront des souvenirs inoubliables."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Claire M., voyageuse 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-purple-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-purple-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}