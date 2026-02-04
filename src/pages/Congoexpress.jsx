import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.5},${lat-0.5},${lng+0.5},${lat+0.5}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.5},${lat-0.5},${lng+0.5},${lat+0.5}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Congo Express</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.5,-5.0,16.0,-3.0&layer=mapnik&marker=-4.2634,15.2429&marker=-4.7945,11.8490"
          style={{ border: 0 }}
          allowFullScreen
          title="Congo Express"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/-4.5/13.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Brazzaville</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Pointe-Noire</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Parc Conkouati</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Chutes de Loufoulakari</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plateau Batéké</span>
        </div>
      </div>
    </div>
  );
};

export default function Congoexpress() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('brazzaville');
  const [activeExperienceTab, setActiveExperienceTab] = useState('villes');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏙️', title: 'Deux Capitales', desc: 'Brazzaville et Pointe-Noire en un seul voyage' },
    { icon: '🌳', title: 'Nature Préservée', desc: 'Découverte du Parc Conkouati et ses écosystèmes' },
    { icon: '🏞️', title: 'Sites Naturels', desc: 'Chutes de Loufoulakari et paysages spectaculaires' },
    { icon: '🌊', title: 'Côte Atlantique', desc: 'Plages et côtes sauvages du Congo' },
    { icon: '🏛️', title: 'Culture et Histoire', desc: 'Patrimoine colonial et traditions locales' },
    { icon: '🛣️', title: 'Route Panoramique', desc: 'Trajet pittoresque entre les deux villes' },
  ];

  const regions = [
    { 
      name: 'Brazzaville', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale politique et culturelle, ville aux mille visages',
      features: ['Musée National', 'Basilique Sainte-Anne', 'Marché Total', 'Quartier Poto-Poto']
    },
    { 
      name: 'Parc Conkouati', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Réserve de biodiversité unique entre forêt et littoral',
      features: ['Observation faune', 'Forêt primaire', 'Littoral préservé', 'Eco-tourisme']
    },
    { 
      name: 'Chutes de Loufoulakari', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Spectaculaires cascades sur la rivière Loufoulakari',
      features: ['Cascade principale', 'Piscines naturelles', 'Randonnée', 'Pique-nique']
    },
    { 
      name: 'Plateau Batéké', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Savanes et paysages uniques à la frontière naturelle',
      features: ['Savane herbacée', 'Paysages ouverts', 'Villages traditionnels', 'Point de vue']
    },
    { 
      name: 'Pointe-Noire', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Capitale économique et port principal sur l\'Atlantique',
      features: ['Port maritime', 'Plages de sable', 'Centre-ville moderne', 'Vie nocturne']
    },
    { 
      name: 'Côte Sauvage', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Littoral préservé avec plages désertes et formations rocheuses',
      features: ['Plages isolées', 'Formations géologiques', 'Couchers de soleil', 'Repos']
    },
  ];

  const experiences = [
    { 
      id: 'villes',
      name: 'Villes Congolaises', 
      icon: '🏙️',
      desc: 'Découverte des deux principales villes du Congo et leurs contrastes',
      highlights: ['Brazzaville historique', 'Pointe-Noire moderne', 'Architecture coloniale', 'Marchés animés'],
      details: 'Ce circuit vous fait découvrir les deux visages du Congo moderne : Brazzaville, la capitale politique sur les rives du fleuve Congo, avec son patrimoine historique et ses quartiers animés ; et Pointe-Noire, la capitale économique dynamique sur la côte atlantique, avec son port moderne et ses influences internationales. Vous explorerez les contrastes et complémentarités entre ces deux pôles urbains.'
    },
    { 
      id: 'nature',
      name: 'Nature et Paysages', 
      icon: '🌳',
      desc: 'Immersion dans les écosystèmes diversifiés du Congo',
      highlights: ['Parc Conkouati', 'Chutes spectaculaires', 'Savane du Plateau Batéké', 'Littoral préservé'],
      details: 'Le Congo offre une diversité naturelle exceptionnelle. Vous découvrirez le Parc Conkouati, réserve de biosphère où forêt tropicale et littoral se rencontrent, les impressionnantes chutes de Loufoulakari, les vastes savanes du Plateau Batéké, et les plages sauvages de la Côte Sauvage. Chaque site offre des paysages uniques et une faune spécifique.'
    },
    { 
      id: 'culture',
      name: 'Culture et Traditions', 
      icon: '🎭',
      desc: 'Rencontre avec les peuples et traditions du Congo',
      highlights: ['Peuples Kongo et Téké', 'Artisanat local', 'Musique et danse', 'Cuisine traditionnelle'],
      details: 'Le Congo est riche d\'une diversité culturelle remarquable. Vous rencontrerez les peuples Kongo et Téké, découvrirez l\'artisanat local (sculpture, vannerie, poterie), assisterez à des démonstrations de musique et danse traditionnelles, et goûterez à la cuisine congolaise authentique. Ces rencontres vous donneront un aperçu profond de la vie quotidienne et des traditions locales.'
    },
    { 
      id: 'aventure',
      name: 'Aventure et Découverte', 
      icon: '🧭',
      desc: 'Exploration active des sites naturels et culturels',
      highlights: ['Randonnées guidées', 'Navigation en pirogue', 'Observation faune', 'Visites authentiques'],
      details: 'Ce circuit combine découverte culturelle et aventure douce. Vous ferez des randonnées dans des paysages spectaculaires, naviguerez en pirogue traditionnelle sur des cours d\'eau, observerez la faune dans son habitat naturel, et visiterez des villages authentiques loin des sentiers battus. Une approche active pour découvrir le Congo sous tous ses aspects.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇨🇬</span>
          <span>ESCAPES | RÉPUBLIQUE DU CONGO</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Congo Express : De Brazza à Pointe-Noire</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'exploration des deux capitales congolaises et de leurs richesses naturelles
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
            <span className="text-2xl">🇨🇬</span>
            <span className="text-sm font-semibold">CONGO | DÉCOUVERTE</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">CONGO1</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Brazzaville à Pointe-Noire</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour découvrir les contrastes du Congo en un seul voyage</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 8 jours vous offre une découverte complète du Congo en reliant ses deux principales villes : Brazzaville, la capitale politique sur les rives du majestueux fleuve Congo, et Pointe-Noire, la capitale économique dynamique sur la côte atlantique. Un voyage qui combine découverte urbaine, nature préservée, et rencontres authentiques.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Vous débuterez votre aventure à Brazzaville, où vous découvrirez l'histoire coloniale, l'architecture unique et l'atmosphère animée de la capitale. Le parcours vous emmènera ensuite vers le sud, à travers les paysages variés du Congo : les savanes du Plateau Batéké, les forêts du Parc Conkouati, les spectaculaires chutes de Loufoulakari, jusqu'aux plages sauvages de la côte atlantique et l'énergie vibrante de Pointe-Noire.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour ceux qui souhaitent découvrir la diversité du Congo en un temps limité. Il offre un équilibre parfait entre visites culturelles, découverte nature et moments de détente. Un voyage complet qui vous donnera un aperçu authentique de ce pays méconnu mais fascinant d'Afrique centrale.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-green-700 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Découverte de Brazzaville</strong>, capitale historique et culturelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Exploration du Parc Conkouati</strong>, réserve de biodiversité exceptionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Visite des chutes de Loufoulakari</strong>, site naturel spectaculaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Traversée du Plateau Batéké</strong>, paysages de savane uniques</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Découverte de Pointe-Noire</strong>, capitale économique dynamique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Relaxation sur la Côte Sauvage</strong>, plages préservées de l'Atlantique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontres avec les populations locales</strong>, échanges authentiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Trajet panoramique</strong>, découverte des paysages variés du Congo</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Congo */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Congo : Entre Tradition et Modernité</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Congo, souvent appelé Congo-Brazzaville pour le distinguer de son voisin, est un pays aux contrastes saisissants. De la capitale historique Brazzaville, sur les rives du fleuve éponyme, à la ville portuaire dynamique de Pointe-Noire sur l'Atlantique, le pays offre une diversité de paysages, de cultures et d'expériences. Ce circuit vous fait traverser cette diversité, des quartiers animés des villes aux espaces naturels préservés. La meilleure période pour ce circuit est de mai à septembre, pendant la saison sèche.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau facile</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Découverte urbaine</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Nature préservée</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Rencontres</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Diversité culturelle</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE CONGO EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance parcourue</div>
                      <div className="text-3xl font-bold text-green-700">600</div>
                      <div className="text-xs">kilomètres</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Sites naturels visités</div>
                      <div className="text-3xl font-bold text-green-700">4+</div>
                      <div className="text-xs">parcs et sites naturels</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Villes découvertes</div>
                      <div className="text-3xl font-bold text-green-700">2</div>
                      <div className="text-xs">capitales congolaises</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits en hébergement</div>
                      <div className="text-3xl font-bold text-green-700">7</div>
                      <div className="text-xs">nuits en lodges et hôtels</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours à Travers le Congo</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous fait traverser le Congo du nord au sud, de Brazzaville à Pointe-Noire. Vous découvrirez d'abord la capitale historique et ses environs, puis vous vous aventurerez vers le sud à travers des paysages variés : savanes, forêts, cascades, jusqu'à la côte atlantique. Le trajet combine route et pistes, vous permettant d'apprécier la diversité des paysages congolais. À Pointe-Noire, vous profiterez de l'énergie de la capitale économique et des plages de la Côte Sauvage.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours à Brazzaville</div>
                            <div className="text-green-700 font-bold">2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours en nature</div>
                            <div className="text-green-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours à Pointe-Noire</div>
                            <div className="text-green-700 font-bold">2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours de trajet</div>
                            <div className="text-green-700 font-bold">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Parcours</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=11.5,-5.0,16.0,-3.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Congo Express"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/-4.5/13.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Étapés du Parcours</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {region.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-white/50 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Brazzaville</div>
                      <div className="text-xs opacity-80">Arrivée, découverte capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Trajet vers le sud</div>
                      <div className="text-xs opacity-80">Nature, parcs, cascades</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Pointe-Noire</div>
                      <div className="text-xs opacity-80">Côte atlantique, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau facile à modéré (2/5)</strong> : Ce circuit convient à la plupart des voyageurs. Il comprend des journées de route (4-5 heures maximum) sur des routes parfois en mauvais état, quelques marches légères sur sites naturels, et des changements d'hébergement. Une bonne condition physique générale est recommandée. Les activités sont accessibles à tous, sans exigence technique particulière.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Condition physique générale requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Marches légères sur sites naturels</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Adaptabilité aux conditions locales</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de randonnée légères</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos jour pour visites</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste légère et imperméable</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📷</span>
                          <span>Appareil photo et batteries</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire et anti-moustiques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💊</span>
                          <span>Trousse médicale personnelle</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩳</span>
                          <span>Vêtements légers et confortables</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourde ou bouteille d'eau</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Découverte ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Découverte complète du Congo en 8 jours</h4>
                        <p className="text-sm text-gray-700">
                          Un circuit optimisé pour découvrir les deux capitales et les principaux sites naturels sans perte de temps.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide expert francophone</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide connaît parfaitement le Congo et vous fera découvrir les aspects authentiques du pays.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Équilibre parfait ville/nature</h4>
                        <p className="text-sm text-gray-700">
                          Le circuit alterne découverte urbaine et immersion dans la nature préservée.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Hébergements soigneusement sélectionnés</h4>
                        <p className="text-sm text-gray-700">
                          Des hôtels confortables en ville et des lodges de charme en pleine nature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Brazzaville */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BRAZZAVILLE</span>
                          <span className="text-sm text-gray-600">Accueil et premières découvertes de la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international Maya-Maya de Brazzaville. Accueil par votre guide francophone. Transfert à votre hôtel en centre-ville. Installation et repos. En milieu d'après-midi, première découverte de Brazzaville avec une visite du quartier de la Plaine, centre administratif et politique. Visite du Mausolée Marien Ngouabi et découverte de l'histoire contemporaine du Congo. Promenade le long du fleuve Congo avec vue sur Kinshasa, capitale de la RDC voisine. Dîner de bienvenue dans un restaurant typique avec spécialités congolaises. Nuit à l'hôtel à Brazzaville.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Brazzaville complète */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BRAZZAVILLE COMPLÈTE</span>
                          <span className="text-sm text-gray-600">Visite approfondie de la capitale congolaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée culturelle</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la visite du Musée National du Congo, découvrant l'histoire, l'art et les traditions des différentes ethnies du pays. Visite de la Basilique Sainte-Anne du Congo, chef-d'œuvre architectural en forme de termitière. Déjeuner dans un restaurant local. Après-midi : exploration du quartier historique de Poto-Poto, berceau de la musique congolaise et de la peinture "école de Poto-Poto". Visite du marché Total, l'un des plus animés de la ville, pour une immersion dans la vie quotidienne des Brazzavillois. Dîner libre avec suggestions de votre guide. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Musée National - Basilique Sainte-Anne - Quartier Poto-Poto - Marché Total
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Vers le Parc Conkouati */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LE PARC CONKOUATI</span>
                          <span className="text-sm text-gray-600">Trajet vers le sud et premières découvertes naturelles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de route et nature</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Brazzaville en direction du sud. Trajet à travers les paysages variés du Congo, passant progressivement de la région de la capitale aux zones plus rurales. Arrêt en chemin pour découvrir la vie dans les villages et les plantations. Déjeuner pique-nique en route. Arrivée en fin d'après-midi aux abords du Parc Conkouati, réserve de biosphère UNESCO. Installation dans un lodge écologique en bordure du parc. Première découverte des environs avec une courte marche d'observation en fin de journée. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Trajet panoramique - Découverte villages - Arrivée Parc Conkouati
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Parc Conkouati et chutes */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PARC CONKOUATI ET CHUTES</span>
                          <span className="text-sm text-gray-600">Exploration de la réserve et découverte des cascades</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée nature intensive</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à l'exploration du Parc Conkouati. Matinée : randonnée guidée dans la forêt primaire avec observation de la flore et (avec chance) de la faune (singes, oiseaux, antilopes). Visite du centre de conservation et rencontre avec les gardes du parc. Déjeuner au lodge. Après-midi : excursion vers les spectaculaires chutes de Loufoulakari. Découverte de la cascade principale et des piscines naturelles environnantes. Temps libre pour se baigner (selon conditions). Retour au lodge en fin d'après-midi. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée Parc Conkouati - Chutes de Loufoulakari - Observation nature
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Traversée du Plateau Batéké */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PLATEAU BATÉKÉ</span>
                          <span className="text-sm text-gray-600">Traversée des savanes et arrivée à Pointe-Noire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de transition</h4>
                        <p className="text-justify mb-4">
                          Départ du Parc Conkouati en direction de Pointe-Noire. Traversée du Plateau Batéké, région de savanes aux paysages ouverts et aux villages traditionnels. Arrêts photographiques pour admirer les panoramas exceptionnels. Déjeuner dans un village local avec découverte de la cuisine traditionnelle. Continuation vers Pointe-Noire. Arrivée en fin d'après-midi dans la capitale économique. Installation à l'hôtel en centre-ville. Première découverte de l'atmosphère vibrante de Pointe-Noire. Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Traversée Plateau Batéké - Arrivée Pointe-Noire - Découverte première impression
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Pointe-Noire et Côte Sauvage */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">POINTE-NOIRE ET CÔTE SAUVAGE</span>
                          <span className="text-sm text-gray-600">Découverte de la ville et des plages préservées</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée côtière</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la découverte de Pointe-Noire : visite du port maritime (vue extérieure), découverte du centre-ville moderne avec ses bâtiments contemporains, visite du marché artisanal pour souvenirs. Déjeuner de fruits de mer frais dans un restaurant du front de mer. Après-midi : excursion à la Côte Sauvage, littoral préservé au nord de Pointe-Noire. Découverte des plages de sable fin, des formations rocheuses spectaculaires, et ambiance détente. Possibilité de baignade (selon conditions). Retour à Pointe-Noire en fin d'après-midi. Dîner d'adieu dans un restaurant gastronomique. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite Pointe-Noire - Côte Sauvage - Dîner d'adieu
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Dernier jour à Pointe-Noire */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DERNIERS INSTANTS</span>
                          <span className="text-sm text-gray-600">Visites complémentaires et préparation au départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée libre organisée</h4>
                        <p className="text-justify mb-4">
                          Matinée libre pour profiter de Pointe-Noire selon vos envies : shopping complémentaire, détente à la plage, ou visite optionnelle suggérée par votre guide (musée, atelier d'artiste, etc.). Déjeuner libre. Après-midi : transfert à l'aéroport Agostinho Neto de Pointe-Noire en fonction de votre horaire de vol. Assistance aux formalités d'embarquement. Selon l'horaire, possibilité de dernière visite ou détente. Emportez avec vous les souvenirs d'un voyage complet à travers les deux visages du Congo, de l'énergie urbaine à la nature préservée, et des rencontres authentiques avec ses habitants.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Temps libre - Transfert aéroport - Départ
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ (si vol le jour 8) */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE POINTE-NOIRE</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Selon l'horaire de votre vol, transfert à l'aéroport et assistance aux formalités de départ. Fin de nos services. Vous emportez avec vous les images contrastées du Congo : la vibrante Brazzaville sur les rives du fleuve éponyme, les paysages sauvages du Parc Conkouati et des chutes de Loufoulakari, les vastes étendues du Plateau Batéké, et l'énergie moderne de Pointe-Noire face à l'Atlantique. Un voyage qui vous aura permis de découvrir la diversité et l'authenticité de ce pays méconnu d'Afrique centrale.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🇨🇬</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Congolaises</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion complète dans la diversité du Congo, de ses villes animées à ses espaces naturels préservés. Chaque expérience est conçue pour vous faire découvrir un aspect différent de ce pays fascinant, des traditions urbaines aux écosystèmes uniques.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-green-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-green-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-green-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-green-700 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-semibold mb-2 text-sm">En savoir plus</h5>
                              <p className="text-sm text-gray-700">{exp.details}</p>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'villes' ? -4.2634 : 
                                   exp.id === 'nature' ? -4.0 :
                                   exp.id === 'culture' ? -4.5 :
                                   -4.2} 
                              lng={exp.id === 'villes' ? 15.2429 : 
                                   exp.id === 'nature' ? 12.0 :
                                   exp.id === 'culture' ? 14.0 :
                                   13.5} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  ))}

                  {/* Galerie d'expériences */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Congolaise</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600" 
                          alt="Brazzaville" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Brazzaville</h5>
                          <p className="text-sm text-gray-700">Capitale historique sur le fleuve Congo</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Parc Conkouati" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Parc Conkouati</h5>
                          <p className="text-sm text-gray-700">Réserve de biosphère exceptionnelle</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                          alt="Pointe-Noire" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Pointe-Noire</h5>
                          <p className="text-sm text-gray-700">Capitale économique sur l'Atlantique</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Croisière sur le fleuve Congo</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Navigation traditionnelle avec vue sur Brazzaville et Kinshasa. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Safari nocturne au Parc Conkouati</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Observation de la faune nocturne avec guide spécialisé. Supplément : 60€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de cuisine congolaise</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage des plats traditionnels avec une cuisinière locale. Supplément : 50€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Excursion en 4x4 sur la Côte Sauvage</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Exploration des plages isolées et formations rocheuses. Supplément : 70€/personne.
                      </p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Confortables</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏨</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements confortables et bien situés, reflétant la diversité du voyage : hôtels en centre-ville pour la découverte urbaine, et lodges en pleine nature pour l'immersion dans les paysages congolais. Chaque hébergement est soigneusement sélectionné pour son confort, son authenticité et sa situation.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('brazzaville')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'brazzaville' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BRAZZAVILLE (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('conkouati')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'conkouati' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PARC CONKOUATI (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('pointenoire')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'pointenoire' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      POINTE-NOIRE (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Brazzaville */}
                  {activeHotelTab === 'brazzaville' && (
                    <div className="space-y-16">
                      {/* Hotel Beatrice */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Beatrice" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Beatrice</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Brazzaville, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville pratique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant sur place</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Beatrice offre un confort moderne au cœur de Brazzaville. Les chambres sont climatisées et disposent de toutes les commodités nécessaires. Le restaurant de l'hôtel propose une cuisine internationale et congolaise. Sa situation centrale permet un accès facile aux principaux sites d'intérêt de la capitale. L'hôtel dispose également d'une connexion Wi-Fi et d'un service de navette vers l'aéroport. Idéal pour les premiers jours de découverte de Brazzaville.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Parc Conkouati */}
                  {activeHotelTab === 'conkouati' && (
                    <div className="space-y-16">
                      {/* Conkouati Ecolodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Conkouati Ecolodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Conkouati Ecolodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              En bordure du Parc Conkouati, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>En pleine nature</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦜</span>
                                <span className="text-sm font-semibold">Observation faune</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Architecture écologique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Conkouati Ecolodge est un hébergement écologique situé en lisière du parc national. Les bungalows sont construits avec des matériaux locaux dans le respect de l'environnement. Le lodge s'engage dans la conservation de la biodiversité et le développement communautaire. Les repas sont préparés avec des produits locaux et de saison. Le soir, vous pourrez écouter les sons de la forêt tropicale depuis votre terrasse. Une immersion totale dans la nature congolaise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Pointe-Noire */}
                  {activeHotelTab === 'pointenoire' && (
                    <div className="space-y-16">
                      {/* Hotel Oceanic */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                              alt="Hotel Oceanic" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Oceanic</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Pointe-Noire, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏖️</span>
                                <span>Proche des plages</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦞</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Vue sur mer</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Oceanic est un établissement moderne offrant confort et détente à Pointe-Noire. Situé à proximité des plages et du centre-ville, il constitue une base idéale pour découvrir la capitale économique. Les chambres sont spacieuses avec vue sur la mer ou la ville. L'hôtel dispose d'une piscine, d'un restaurant spécialisé en fruits de mer, et d'un bar avec terrasse. Un hébergement parfait pour conclure votre voyage en profitant des plaisirs côtiers.
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
                  <span className="text-2xl">🇨🇬</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$1,699</span>
                    <span className="text-xl line-through text-gray-500">$1,899</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO -200$</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide francophone, hébergements, visites, droits d'entrée parcs
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-05-15">15 Mai 2026</option>
                    <option value="2026-06-12">12 Juin 2026</option>
                    <option value="2026-07-10">10 Juillet 2026</option>
                    <option value="2026-08-07">7 Août 2026</option>
                    <option value="2026-09-04">4 Septembre 2026</option>
                    <option value="2027-05-14">14 Mai 2027</option>
                    <option value="2027-06-11">11 Juin 2027</option>
                    <option value="2027-07-09">9 Juillet 2027</option>
                    <option value="2027-08-06">6 Août 2027</option>
                    <option value="2027-09-03">3 Septembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à septembre (saison sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ECONOMISEZ 200$ PAR PERSONNE</strong> sur les départs 2026
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 10 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-green-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-green-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-green-700 text-white py-4 font-semibold text-base mb-4 hover:bg-green-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur le circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts Congo vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.5,-5.0,16.0,-3.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Congo Express miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Congo Express - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Brazzaville → Pointe-Noire
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Services Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Transferts aéroport aller-retour</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transport privé climatisé</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone expert</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>7 nuits en hôtels/lodges</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Petits-déjeuners et certains repas</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et droits d'entrée</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du circuit</span>
                    <span className="font-bold text-green-700">Facile à modéré</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs mai à septembre</span>
                    <span className="font-bold text-green-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone</span>
                    <span className="font-bold text-green-700">Spécialiste Congo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">10 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins recommandés : Fièvre jaune obligatoire, hépatites, typhoïde
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Voyageur</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un circuit parfait pour découvrir la diversité du Congo en peu de temps. Les contrastes entre Brazzaville et Pointe-Noire sont fascinants, et les paysages naturels entre les deux villes sont à couper le souffle. Notre guide était exceptionnellement connaisseur. Je recommande !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas L., voyageur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-green-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}