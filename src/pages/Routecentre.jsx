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
        <h4 className="font-semibold text-center text-lg">Itinéraire Bangui - Ndélé</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=17.0,5.0,22.0,9.0&layer=mapnik&marker=4.36,18.55&marker=8.41,20.65"
          style={{ border: 0 }}
          allowFullScreen
          title="Routes du Centre RCA"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/6.5/19.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Bangui (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Sibut (carrefour)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Kaga-Bandoro (centre)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ndélé (arrivée)</span>
        </div>
      </div>
    </div>
  );
};

export default function Routecentre() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bangui');
  const [activeExperienceTab, setActiveExperienceTab] = useState('culture');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏛️', title: 'Marchés traditionnels', desc: 'Découverte des marchés animés et du commerce caravanier' },
    { icon: '👑', title: 'Royaume de Ndélé', desc: 'Immersion dans l\'histoire du royaume Zandé et ses traditions' },
    { icon: '🎭', title: 'Cultures Gbaya et Banda', desc: 'Rencontre avec les ethnies dominantes du centre de la RCA' },
    { icon: '🛣️', title: 'Routes historiques', desc: 'Parcours sur les anciennes routes du commerce et des pèlerinages' },
    { icon: '🏺', title: 'Artisanat traditionnel', desc: 'Découverte de la poterie, vannerie et forge traditionnelle' },
    { icon: '🎵', title: 'Musique et danse', desc: 'Spectacles de traditions musicales et danses rituelles' },
  ];

  const regions = [
    { name: 'Bangui', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Capitale, point de départ et marché national' },
    { name: 'Sibut', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Carrefour commercial historique au centre du pays' },
    { name: 'Kaga-Bandoro', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Ville principale de la région, centre culturel Gbaya' },
    { name: 'Ndélé', color: 'bg-yellow-100', textColor: 'text-yellow-800', desc: 'Ancienne capitale du royaume Zandé, traditions préservées' },
    { name: 'Villages Gbaya', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Communautés agricoles aux traditions vivantes' },
    { name: 'Routes caravanières', color: 'bg-red-100', textColor: 'text-red-800', desc: 'Anciens axes commerciaux reliant le nord et le sud' },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Cultures Locales', 
      icon: '👑',
      desc: 'Immersion dans les traditions des peuples Gbaya, Banda et Zandé du centre de la RCA',
      highlights: ['Royaume de Ndélé', 'Traditions Gbaya', 'Cérémonies Banda', 'Organisation sociale']
    },
    { 
      id: 'commerce',
      name: 'Commerce Traditionnel', 
      icon: '🏛️',
      desc: 'Découverte des circuits économiques traditionnels et des marchés centrafricains',
      highlights: ['Marchés hebdomadaires', 'Commerce caravanier', 'Échanges régionaux', 'Produits locaux']
    },
    { 
      id: 'artisanat',
      name: 'Artisanat', 
      icon: '🏺',
      desc: 'Initiation aux techniques artisanales traditionnelles préservées dans le centre du pays',
      highlights: ['Poterie traditionnelle', 'Vannerie complexe', 'Forge artisanale', 'Tissage de coton']
    },
    { 
      id: 'histoire',
      name: 'Histoire Vivante', 
      icon: '📜',
      desc: 'Exploration des sites historiques et des traditions orales des peuples du centre',
      highlights: ['Histoire Zandé', 'Routes coloniales', 'Traditions orales', 'Sites historiques']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌿</span>
          <span>ESCAPES | RÉPUBLIQUE CENTRAFRICAINE</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Routes du Centre : Traditions et Commerce</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'immersion culturelle au cœur des routes commerciales et traditions centrafricaines
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
            <span className="text-2xl">🇨🇫</span>
            <span className="text-sm font-semibold">RÉPUBLIQUE CENTRAFRICAINE | CENTRE</span>
          </div>
        </div>

        {/* Indicateur transport aérien */}
        <div className="absolute bottom-6 left-6 z-10">
          <div className="bg-purple-700/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">✈️</span>
            <span className="text-sm font-semibold text-white">INCLUT LE TRANSPORT AÉRIEN BANGUI-NDÉLÉ</span>
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
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA9</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Bangui à Ndélé</span>
                <button className="ml-auto border-2 border-purple-700 text-purple-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-purple-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage culturel sur les routes historiques du centre de la RCA</span>
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
                  Ce circuit culturel de 8 jours vous emmène sur les routes historiques du centre de la République Centrafricaine, de Bangui à Ndélé. Vous découvrirez les traditions vivantes des peuples Gbaya, Banda et Zandé, explorerez les marchés animés qui animent l'économie locale, et plongerez dans l'histoire fascinante du royaume de Ndélé. Ce voyage vous offre une immersion authentique dans la culture centrafricaine, loin des sentiers touristiques, à la rencontre des commerçants, artisans et gardiens des traditions.
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
                        <span><strong>Visite des marchés traditionnels</strong> de Bangui, Sibut et Kaga-Bandoro</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Immersion dans le royaume de Ndélé</strong> et découverte de l'histoire Zandé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Rencontre avec les artisans locaux</strong> : potiers, vanniers, forgerons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Participation aux cérémonies traditionnelles</strong> Gbaya et Banda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Découverte des techniques agricoles</strong> traditionnelles du centre</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Spectacles de musique et danse</strong> traditionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Initiation à la cuisine centrafricaine</strong> avec les femmes des villages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Rencontre avec les chefs traditionnels</strong> et gardiens des coutumes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Exploration des sites historiques</strong> de l'époque coloniale et précoloniale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Vol intérieur Bangui-Ndélé</strong> avec vue sur les paysages du centre</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les Routes du Centre */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Les Routes du Centre : Carrefour Culturel</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le centre de la République Centrafricaine est une région de transition entre le nord sahélien et le sud forestier, traversée par d'anciennes routes caravanières. Cette position stratégique en a fait un carrefour commercial et culturel où se rencontrent les traditions Gbaya (majoritaires), Banda, et Zandé. La région conserve un patrimoine culturel riche : marchés animés, artisanat préservé, architecture traditionnelle et rites ancestraux. Ce circuit vous permet de découvrir cette mosaïque culturelle vivante, dans des villes et villages qui ont gardé leur authenticité malgré les évolutions modernes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture Gbaya</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Commerce</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Royaume Zandé</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Artisanat</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Routes historiques</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Traditions</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE CENTRE DE LA RCA EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Population Gbaya</div>
                      <div className="text-3xl font-bold text-purple-700">34%</div>
                      <div className="text-xs">du pays (ethnie majoritaire)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance Bangui-Ndélé</div>
                      <div className="text-3xl font-bold text-purple-700">600</div>
                      <div className="text-xs">kilomètres par route</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude moyenne</div>
                      <div className="text-3xl font-bold text-purple-700">500</div>
                      <div className="text-xs">mètres (plateaux centraux)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Villes principales</div>
                      <div className="text-3xl font-bold text-purple-700">4</div>
                      <div className="text-xs">étapes majeures du circuit</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours sur les Routes Historiques</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de Bangui, la capitale animée, vers le nord-est à travers les plateaux centraux jusqu'à Ndélé, ancienne capitale du royaume Zandé. Vous traverserez des paysages de savane arborée, découvrirez des villes marchandes historiques comme Sibut et Kaga-Bandoro, et rencontrerez les différentes communautés qui peuplent cette région. Le voyage inclut un vol intérieur pour revenir de Ndélé à Bangui, vous offrant une perspective aérienne unique sur cette région méconnue. Chaque étape révèle un aspect différent de la culture centrafricaine : commerce, artisanat, traditions, histoire.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance par route</div>
                            <div className="text-purple-700 font-bold">600 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vol intérieur</div>
                            <div className="text-purple-700 font-bold">Bangui-Ndélé</div>
                          </div>
                          <div>
                            <div className="font-semibold">Marchés visités</div>
                            <div className="text-purple-700 font-bold">5+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Communautés</div>
                            <div className="text-purple-700 font-bold">Gbaya, Banda, Zandé</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Routes du Centre</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,5.5,21.5,8.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Centre RCA"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/7.0/19.75" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-700">Les Zones Culturelles du Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Bangui' && 'Capitale • Marché national • Multiculturel'}
                          {region.name === 'Sibut' && 'Carrefour • Commerce • Tradition'}
                          {region.name === 'Kaga-Bandoro' && 'Centre • Culture Gbaya • Administration'}
                          {region.name === 'Ndélé' && 'Histoire • Royaume Zandé • Patrimoine'}
                          {region.name === 'Villages Gbaya' && 'Agriculture • Traditions • Communauté'}
                          {region.name === 'Routes caravanières' && 'Histoire • Commerce • Échanges'}
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
                      <div className="text-sm">Bangui</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, marché national</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Bangui - Sibut</div>
                      <div className="text-xs opacity-80">Route vers le centre, marchés locaux</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Kaga-Bandoro</div>
                      <div className="text-xs opacity-80">Culture Gbaya, artisanat, traditions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-8</div>
                      <div className="text-sm">Ndélé et retour</div>
                      <div className="text-xs opacity-80">Royaume Zandé, vol retour Bangui</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Bangui */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
                          <span className="text-sm text-gray-600">Découverte de la capitale et de son marché</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Bangui-M'Poko. Accueil par votre guide spécialiste des cultures centrafricaines. Transfert à l'hôtel. Après-midi consacré à la découverte de Bangui : visite du Marché Central, véritable cœur économique et social de la capitale. Vous y découvrirez la diversité des produits venant de tout le pays : café, coton, manioc, poisson séché, viande fumée, artisanat. Rencontre avec des commerçants venus des différentes régions. Promenade dans le quartier du Km5, quartier commerçant animé. Dîner de bienvenue avec spécialités centrafricaines (feuilles de manioc, sauce gombo, viande de brousse). Briefing sur le circuit. Nuit à l'hôtel à Bangui.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Bangui et préparation */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BANGUI : PRÉPARATION AU VOYAGE</span>
                          <span className="text-sm text-gray-600">Rencontres culturelles et préparation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Immersion dans la culture</h4>
                        <p className="text-justify mb-4">
                          Matinée : visite du Musée Barthélémy Boganda pour comprendre l'histoire et la diversité culturelle de la RCA. Rencontre avec un anthropologue spécialiste des peuples Gbaya et Banda. Après-midi : visite d'un atelier d'artisanat traditionnel à Bangui (sculpture sur bois, vannerie). Initiation aux techniques de base. Préparation du voyage vers le centre : explication des coutumes et traditions à respecter, des codes de communication interculturels. Dîner avec des membres de la communauté Gbaya de Bangui, échanges sur leur culture et leur histoire. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers Sibut */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BANGUI → SIBUT</span>
                          <span className="text-sm text-gray-600">Première étape sur les routes du centre</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Vers le carrefour commercial</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Bangui en direction de Sibut (environ 190 km, 4 heures de route). Trajet à travers des paysages de savane arborée et de forêts galeries. Arrêts dans des villages Gbaya pour découvrir l'agriculture traditionnelle (culture du manioc, arachides, maïs). Arrivée à Sibut en milieu de journée. Sibut est un important carrefour commercial situé au centre géographique du pays. Visite du marché hebdomadaire (si jour de marché), l'un des plus animés de la région. Rencontre avec les commerçants venus des quatre coins du pays. Installation à l'hébergement. Dîner avec spécialités locales. Nuit à Sibut.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Sibut et environs */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">SIBUT ET SES ENVIRONS</span>
                          <span className="text-sm text-gray-600">Commerce traditionnel et rencontres</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée commerciale</h4>
                        <p className="text-justify mb-4">
                          Journée d'immersion dans la vie commerciale de Sibut. Visite des différents quartiers spécialisés du marché : produits agricoles, artisanat, vêtements, produits d'importation. Rencontre avec les femmes commerçantes, piliers de l'économie locale. Après-midi : excursion vers un village Gbaya proche de Sibut. Découverte des techniques de poterie traditionnelle (fabrication de jarres et de pots). Initiation au tissage du coton sur métier traditionnel. Rencontre avec un forgeron utilisant des techniques ancestrales. Retour à Sibut en fin d'après-midi. Dîner avec les commerçants rencontrés dans la journée. Nuit à Sibut.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route vers Kaga-Bandoro */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">SIBUT → KAGA-BANDORO</span>
                          <span className="text-sm text-gray-600">Au cœur du pays Gbaya</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Vers le centre culturel</h4>
                        <p className="text-justify mb-4">
                          Route vers Kaga-Bandoro (environ 150 km, 3 heures). Paysages de savane plus ouverte, avec des termitières géantes caractéristiques de la région. Arrivée à Kaga-Bandoro, principale ville de la préfecture de Nana-Grébizi et important centre culturel Gbaya. Installation à l'hébergement. Après-midi : visite de la ville, rencontre avec les autorités traditionnelles Gbaya. Découverte de l'artisanat spécifique à la région : vannerie fine en raphia, sculpture sur bois représentant les esprits de la forêt. Soirée : spectacle de danse et musique traditionnelle Gbaya, avec explication des différents rythmes et instruments. Dîner et nuit à Kaga-Bandoro.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Kaga-Bandoro et traditions Gbaya */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TRADITIONS GBAYA À KAGA-BANDORO</span>
                          <span className="text-sm text-gray-600">Immersion dans la culture de l'ethnie majoritaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée culturelle Gbaya</h4>
                        <p className="text-justify mb-4">
                          Journée complète d'immersion dans la culture Gbaya. Matin : visite d'un village Gbaya traditionnel aux alentours de Kaga-Bandoro. Participation aux activités quotidiennes : préparation du manioc (rouissage, séchage, pilage), culture des champs. Initiation à la médecine traditionnelle avec un guérisseur. Déjeuner traditionnel avec la communauté. Après-midi : cérémonie traditionnelle avec les anciens du village. Explication de l'organisation sociale Gbaya, des rites de passage, des croyances animistes. Échanges sur les défis de la modernité face aux traditions. Retour à Kaga-Bandoro en fin de journée. Dîner avec des spécialités Gbaya. Nuit à Kaga-Bandoro.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Vers Ndélé et vol retour */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">KAGA-BANDORO → NDÉLÉ → VOL BANGUI</span>
                          <span className="text-sm text-gray-600">Découverte du royaume Zandé et retour</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Le royaume de Ndélé</h4>
                        <p className="text-justify mb-4">
                          Route matinale vers Ndélé (environ 260 km, 5-6 heures), ancienne capitale du royaume Zandé. Arrivée à Ndélé en milieu de journée. Visite de la ville historique : découverte des vestiges de l'époque du sultanat, architecture traditionnelle Zandé. Rencontre avec les descendants de la famille royale et les gardiens des traditions. Visite du marché local, influencé par les échanges avec le Tchad voisin. Déjeuner à Ndélé. Après-midi : transfert à l'aérodrome de Ndélé pour le vol intérieur de retour vers Bangui (environ 1h30 de vol). Vue spectaculaire sur les plateaux centraux. Arrivée à Bangui en fin d'après-midi. Transfert à l'hôtel. Dîner d'adieu avec synthèse du voyage. Nuit à Bangui.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ de Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE BANGUI</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Matinée libre selon l'horaire de vol. Possibilité de derniers achats d'artisanat au marché central de Bangui. Déjeuner libre. Transfert à l'aéroport de Bangui-M'Poko pour le vol international de retour. Emportez avec vous des souvenirs inoubliables de cette immersion dans les cultures du centre de la République Centrafricaine : les marchés animés, l'artisanat préservé, les traditions vivantes des Gbaya, l'histoire fascinante du royaume de Ndélé. Une découverte authentique d'une région méconnue, carrefour commercial et culturel au cœur de l'Afrique centrale.
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
                    <h3 className="text-2xl md:text-3xl font-serif text-purple-700">Les Expériences Culturelles du Centre</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une immersion complète dans la riche culture du centre de la République Centrafricaine. Des marchés animés aux villages traditionnels, chaque expérience est conçue pour vous faire découvrir l'authenticité des peuples Gbaya, Banda et Zandé, et la vitalité de leurs traditions commerciales et artisanales.
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
                              lat={exp.id === 'culture' ? 6.5 : 
                                   exp.id === 'commerce' ? 5.7 :
                                   exp.id === 'artisanat' ? 6.0 :
                                   7.0} 
                              lng={exp.id === 'culture' ? 19.2 : 
                                   exp.id === 'commerce' ? 19.0 :
                                   exp.id === 'artisanat' ? 18.9 :
                                   20.65} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'culture' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Cultures du Centre</h5>
                            <p className="text-gray-700 mb-4">
                              Le centre de la RCA est une mosaïque culturelle où cohabitent principalement les Gbaya (ethnie majoritaire du pays), les Banda, et dans une moindre mesure les Zandé à Ndélé. Les Gbaya sont traditionnellement des agriculteurs sédentaires avec une organisation sociale complexe basée sur les clans. Les Banda, plus présents au centre-est, ont une tradition de métallurgie et de commerce. Les Zandé de Ndélé ont formé un royaume structuré avec une aristocratie et des traditions royales. Cette diversité culturelle se manifeste dans les langues, les coutumes, l'artisanat et les rites, offrant un panorama fascinant de la richesse culturelle centrafricaine.
                            </p>
                          </div>
                        )}

                        {exp.id === 'commerce' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Le Commerce Traditionnel</h5>
                            <p className="text-gray-700 mb-4">
                              Les marchés du centre de la RCA sont bien plus que des lieux d'échange économique : ce sont des espaces sociaux et culturels vitaux. Organisés selon un calendrier hebdomadaire, ils attirent des commerçants de toute la région. On y trouve des produits agricoles (manioc, arachides, sésame), de l'artisanat (poterie, vannerie, textiles), des produits de la chasse et de la pêche, ainsi que des marchandises importées. Le commerce se fait selon des codes traditionnels : négociation, relations de confiance, système de crédit informel. Ces marchés perpétuent des circuits économiques ancestraux et constituent des observatoires privilégiés de la vie sociale centrafricaine.
                            </p>
                          </div>
                        )}

                        {exp.id === 'artisanat' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Artisanat Traditionnel</h5>
                            <p className="text-gray-700 mb-4">
                              L'artisanat du centre de la RCA est d'une richesse et d'une diversité remarquables. La poterie, essentiellement féminine, produit des jarres de stockage, des pots de cuisson et des objets rituels selon des techniques transmises de mère en fille. La vannerie, très développée, utilise le raphia et le rotin pour créer des paniers, des nattes, des chapeaux d'une grande finesse. La forge traditionnelle, domaine masculin, produit des outils agricoles, des armes et des objets rituels. Le tissage du coton sur métiers traditionnels fournit les pagnes et vêtements locaux. Cet artisanat, loin d'être folklorique, répond à des besoins quotidiens et perpétue un savoir-faire ancestral.
                            </p>
                          </div>
                        )}

                        {exp.id === 'histoire' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Histoire Vivante</h5>
                            <p className="text-gray-700 mb-4">
                              Le centre de la RCA a une histoire riche et complexe. La région de Ndélé fut le siège d'un important sultanat Zandé qui résista à la pénétration coloniale. Les routes commerciales traversant la région reliaient le bassin du Congo aux régions sahéliennes, facilitant les échanges de sel, d'armes, de tissus et d'esclaves. La période coloniale a laissé des traces architecturales et administratives. Mais l'histoire la plus vivante est celle transmise oralement par les anciens : épopées des fondateurs de clans, récits de migrations, chroniques des chefs traditionnels. Cette histoire orale, en danger face à la modernité, constitue un patrimoine immatériel d'une valeur inestimable.
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
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Marchés traditionnels" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Marchés animés</h5>
                          <p className="text-sm text-gray-700">Véritables cœurs économiques et sociaux des villes</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600" 
                          alt="Artisanat" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Artisanat préservé</h5>
                          <p className="text-sm text-gray-700">Poterie, vannerie et forge selon des techniques ancestrales</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1536152471326-642d74f4a467?w=600" 
                          alt="Cultures traditionnelles" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Cultures vivantes</h5>
                          <p className="text-sm text-gray-700">Traditions Gbaya, Banda et Zandé préservées</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements sur les Routes du Centre</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-purple-700 w-16 md:w-32"></span>
                      <span className="text-purple-700 text-2xl">🏨</span>
                      <span className="h-px bg-purple-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit propose des hébergements adaptés à chaque étape : hôtel confortable à Bangui, guesthouses simples mais propres dans les villes du centre. Les conditions sont basiques mais l'accueil est chaleureux. Tous les hébergements ont été sélectionnés pour leur authenticité et leur immersion dans la vie locale.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('sibut')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'sibut' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SIBUT (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('kagabandoro')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kagabandoro' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KAGA-BANDORO (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bangui */}
                  {activeHotelTab === 'bangui' && (
                    <div className="space-y-16">
                      {/* Hôtel Ledger Plaza Bangui */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Ledger Plaza Bangui" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-purple-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Ledger Plaza Bangui</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Bangui, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏢</span>
                                <span>Centre-ville</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant international</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* moderne situé au cœur de Bangui. Chambres spacieuses et confortables avec salle de bain privée, climatisation, wifi, télévision par satellite. Restaurant servant une cuisine internationale et des spécialités centrafricaines. Bar, piscine extérieure, centre d'affaires, service de blanchisserie. Emplacement idéal pour visiter Bangui et ses environs. Dernier confort avant le voyage vers le centre et premier accueil au retour. Personnel francophone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Sibut */}
                  {activeHotelTab === 'sibut' && (
                    <div className="space-y-16">
                      {/* Guesthouse de Sibut */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Guesthouse de Sibut" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Guesthouse de Sibut</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Sibut, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏘️</span>
                                <span>Centre-ville</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambres simples</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍲</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Guesthouse familiale située au centre de Sibut. Chambres simples mais propres avec lit confortable, moustiquaire, ventilateur (pas de climatisation). Salle de bain partagée (douche à eau froide). Pas de wifi régulier (connexion occasionnelle). Restaurant servant une cuisine locale simple mais bonne. Terrasse avec vue sur la vie de la ville. Accueil chaleureux par la famille propriétaire. Immersion dans la vie quotidienne de Sibut. Conditions basiques mais authenticité garantie.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Kaga-Bandoro */}
                  {activeHotelTab === 'kagabandoro' && (
                    <div className="space-y-16">
                      {/* Auberge de Kaga-Bandoro */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Auberge de Kaga-Bandoro" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Auberge de Kaga-Bandoro</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Kaga-Bandoro, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Ville principale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambres confortables</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Auberge située à Kaga-Bandoro, offrant le meilleur confort disponible dans cette ville du centre. Chambres avec lit confortable, moustiquaire, ventilateur, parfois climatisation fonctionnelle selon l'approvisionnement en électricité. Salle de bain privée basique (eau froide, pas toujours chaude). Restaurant servant une cuisine locale de qualité. Cour ombragée agréable. Accueil professionnel. Meilleure option disponible dans cette région. Conditions adaptées au voyage culturel avec un bon équilibre entre confort et authenticité.
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
                    <span className="text-3xl font-bold text-purple-700">$2,899</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-purple-700 bg-purple-50 p-2 rounded">
                    ✅ Inclus : Transport aérien Bangui-Ndélé, transferts, guides, hébergements, tous les repas
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
                    <option value="2026-05-10">10 Mai 2026</option>
                    <option value="2026-06-05">5 Juin 2026</option>
                    <option value="2026-07-15">15 Juillet 2026</option>
                    <option value="2026-08-20">20 Août 2026</option>
                    <option value="2026-09-25">25 Septembre 2026</option>
                    <option value="2026-10-10">10 Octobre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs mai à octobre (saison sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT CULTUREL :</strong> Marchés, artisanat et traditions centrafricaines
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
                    Nos experts culture centrafricaine vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,5.5,21.5,8.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Centre RCA miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Routes du Centre - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit culturel et commercial en RCA
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
                    <span>Vol intérieur Bangui-Ndélé</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres en 4x4</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste culture centrafricaine</span>
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
                    <span>Visites guidées des marchés</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Activités culturelles incluses</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rencontres avec les artisans</span>
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
                    <span className="font-bold text-purple-700">16 ans</span>
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
                  <div className="flex justify-between items-center">
                    <span>Transport aérien inclus</span>
                    <span className="font-bold text-purple-700">Bangui-Ndélé</span>
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
                  "Un voyage fascinant au cœur de la culture centrafricaine. Les marchés de Sibut, l'artisanat de Kaga-Bandoro, l'histoire de Ndélé... Une immersion totale dans des traditions préservées."
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
      <button className="fixed bottom-8 right-8 bg-purple-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-purple-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}