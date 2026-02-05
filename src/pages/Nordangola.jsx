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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire du Nord Mystérieux</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=12.0,-8.0,16.0,-5.5&layer=mapnik&marker=-8.84,13.23&marker=-9.14,13.86&marker=-7.61,15.05&marker=-7.61,15.05&marker=-6.27,15.82"
          style={{ border: 0 }}
          allowFullScreen
          title="Nord Mystérieux - De Luanda à Uíge"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-7.0/14.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-emerald-600 border-2 border-gray-300"></span>
          <span className="text-sm">Luanda (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Chutes de Kalandula</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Malanje</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ndalatando</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Uíge</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Soyo</span>
        </div>
      </div>
    </div>
  );
};

export default function Nordangola() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('luanda');
  const [activeExperienceTab, setActiveExperienceTab] = useState('forets');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌳', title: 'Forêts Tropicales', desc: 'Exploration de forêts denses et préservées' },
    { icon: '🌊', title: 'Chutes Spectaculaires', desc: 'Découverte des plus belles chutes d\'eau d\'Angola' },
    { icon: '🛶', title: 'Navigation Fluviale', desc: 'Excursions en pirogue sur les rivières' },
    { icon: '🐘', title: 'Faune Sauvage', desc: 'Observation d\'animaux dans leur habitat naturel' },
    { icon: '🏞️', title: 'Paysages Vierges', desc: 'Nature intacte et préservée du tourisme' },
    { icon: '👨‍🌾', title: 'Communautés Locales', desc: 'Rencontres avec les populations forestières' },
  ];

  const regions = [
    { 
      name: 'Luanda', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Point de départ et introduction aux écosystèmes angolais',
      features: ['Préparation', 'Briefing écologique', 'Vol intérieur', 'Logistique']
    },
    { 
      name: 'Chutes de Kalandula', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Chutes majestueuses de 105 mètres de large dans un cadre forestier',
      features: ['Vue spectaculaire', 'Randonnée', 'Photos', 'Écosystème']
    },
    { 
      name: 'Forêt de Maiombe', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Forêt tropicale humide abritant une biodiversité exceptionnelle',
      features: ['Biodiversité', 'Randonnée guidée', 'Observation faune', 'Plantes médicinales']
    },
    { 
      name: 'Uíge', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Cœur de la région caféière et porte d\'entrée des forêts du nord',
      features: ['Culture café', 'Forêts montagneuses', 'Traditions locales', 'Artisanat']
    },
    { 
      name: 'Soyo', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Delta du fleuve Congo et écosystèmes côtiers uniques',
      features: ['Mangroves', 'Observation oiseaux', 'Pêche traditionnelle', 'Delta']
    },
    { 
      name: 'Ndalatando', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Vallées fertiles et paysages de transition entre forêt et savane',
      features: ['Agriculture', 'Paysages variés', 'Communautés', 'Traditions']
    },
  ];

  const experiences = [
    { 
      id: 'forets',
      name: 'Exploration Forestière', 
      icon: '🌳',
      desc: 'Randonnées et découverte des forêts tropicales du nord de l\'Angola',
      highlights: ['Forêt de Maiombe', 'Biodiversité unique', 'Randonnées guidées', 'Écosystèmes préservés'],
      details: 'Le nord de l\'Angola abrite certaines des dernières forêts tropicales humides intactes d\'Afrique. La forêt de Maiombe, partagée avec le Congo et la RDC, est un sanctuaire de biodiversité avec une canopée dense atteignant 50 mètres de haut. Vous explorerez ces forêts avec des guides spécialistes de l\'écologie forestière, découvrant des arbres centenaires, des lianes géantes, et une flore endémique. Les randonnées vous mèneront à des clairières naturelles, des cours d\'eau cristallins, et vous permettront d\'observer la riche faune arboricole.'
    },
    { 
      id: 'chutes',
      name: 'Chutes d\'Eau', 
      icon: '🌊',
      desc: 'Découverte des cascades spectaculaires du nord angolais',
      highlights: ['Chutes de Kalandula', 'Chutes de Duque de Bragança', 'Formations géologiques', 'Piscines naturelles'],
      details: 'La région nord de l\'Angola est réputée pour ses chutes d\'eau impressionnantes. Les chutes de Kalandula, avec leurs 105 mètres de large, sont parmi les plus spectaculaires d\'Afrique. Les chutes de Duque de Bragança, moins connues mais tout aussi impressionnantes, offrent un spectacle naturel remarquable. Vous découvrirez également des cascades plus petites mais tout aussi charmantes, souvent situées au cœur de la forêt. Chaque site offre des possibilités de baignade dans des piscines naturelles, de photos spectaculaires, et de moments de contemplation de la puissance de la nature.'
    },
    { 
      id: 'faune',
      name: 'Observation Faunique', 
      icon: '🐘',
      desc: 'Découverte de la faune sauvage dans les forêts et rivières du nord',
      highlights: ['Primates forestiers', 'Oiseaux endémiques', 'Faune aquatique', 'Papillons colorés'],
      details: 'Les forêts du nord angolais abritent une faune riche et diversifiée, bien que discrète. Vous aurez l\'opportunité d\'observer différentes espèces de primates (colobes, cercopithèques), d\'antilopes forestières, et une avifaune exceptionnelle avec plus de 400 espèces d\'oiseaux recensées. Les rivières sont peuplées de poissons variés et d\'hippopotames. Les guides spécialisés vous aideront à repérer les traces et indices de présence animale, et vous initieront aux techniques d\'observation discrète en milieu forestier. La région est également réputée pour ses papillons aux couleurs éclatantes.'
    },
    { 
      id: 'communautes',
      name: 'Vie des Communautés', 
      icon: '👥',
      desc: 'Rencontres avec les populations forestières et découverte de leurs traditions',
      highlights: ['Villages traditionnels', 'Agriculture forestière', 'Artisanat local', 'Médecine traditionnelle'],
      details: 'Les forêts du nord angolais sont habitées par des communautés qui ont développé un mode de vie en harmonie avec leur environnement. Vous visiterez des villages traditionnels, rencontrerez des agriculteurs pratiquant l\'agroforesterie, et découvrirez des techniques de chasse et de pêche respectueuses des équilibres écologiques. Vous apprendrez les usages des plantes médicinales, observerez la fabrication d\'objets artisanaux en matériaux forestiers, et partagerez des moments de vie quotidiens. Ces rencontres authentiques vous permettront de comprendre les défis de la conservation dans des régions où l\'homme et la nature doivent coexister.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1589552950455-75eeaf3c7b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌳</span>
          <span>ESCAPES | ANGOLA - NORD MYSTÉRIEUX</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Nord Mystérieux : Forêts et Chutes Spectaculaires</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              12 jours d'aventure dans les forêts tropicales et chutes spectaculaires du nord angolais
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
            <span className="text-2xl">🇦🇴</span>
            <span className="text-sm font-semibold">ANGOLA | AVENTURE</span>
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
                <span className="bg-emerald-700 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO3</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">12 jours - Luanda à Uíge</span>
                <button className="ml-auto border-2 border-emerald-700 text-emerald-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-emerald-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour amateurs d'aventure, de nature préservée et de paysages spectaculaires</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-emerald-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                <span>Vol intra-vacances et taxes inclus</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 12 jours vous emmène à la découverte des secrets les mieux gardés de l'Angola : les forêts tropicales du nord et leurs chutes d'eau spectaculaires. De Luanda aux profondeurs de la forêt de Maiombe, en passant par les majestueuses chutes de Kalandula, vous explorerez une région où la nature règne en maître.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure commence à Luanda, d'où vous prendrez un vol pour rejoindre le nord du pays. Vous découvrirez d'abord les impressionnantes chutes de Kalandula avant de vous enfoncer progressivement dans les forêts tropicales. Le cœur du circuit se déroule dans la région d'Uíge, au cœur de la forêt de Maiombe, l'une des dernières grandes forêts tropicales humides d'Afrique. Vous terminerez votre périple à Soyo, dans le delta du fleuve Congo.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit d'aventure allie exploration naturelle, découvertes écologiques et rencontres authentiques avec les populations forestières. Vous séjournerez dans des hébergements adaptés à l'environnement, parfois rudimentaires mais toujours authentiques. Un voyage pour les amateurs de nature préservée et d'aventures hors des sentiers battus.
                </p>

                {/* Section Points forts */}
                <div className="bg-emerald-50 border-l-4 border-emerald-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Les Mystères du Nord</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-emerald-700 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-emerald-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Aventure de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Randonnées en forêt tropicale</strong>, exploration d'écosystèmes uniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Visite des chutes de Kalandula</strong>, spectacle naturel impressionnant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Observation de la faune forestière</strong>, biodiversité exceptionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Navigation en pirogue traditionnelle</strong>, découverte des rivières</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Rencontres avec communautés forestières</strong>, traditions préservées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Exploration du delta du Congo</strong>, écosystèmes côtiers uniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Découverte de la culture caféière</strong>, Uíge, capitale du café</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Nuits en pleine nature</strong>, immersion totale</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le nord */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Nord Angolais : Sanctuaire Naturel</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le nord de l'Angola est une région de contrastes, où les forêts tropicales humides côtoient les savanes et les rivières puissantes. Peu touchée par le tourisme, cette région offre une nature préservée et des paysages spectaculaires. Le climat est tropical humide avec des précipitations abondantes, créant un environnement idéal pour le développement d'écosystèmes forestiers denses. La meilleure période pour visiter est de mai à septembre, pendant la saison relativement plus sèche, quand les pistes sont plus praticables et les moustiques moins nombreux.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Niveau aventure</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Nature préservée</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Chutes d'eau</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Forêts tropicales</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Rencontres authentiques</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE NORD ANGOLAIS EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Surface forêts</div>
                      <div className="text-3xl font-bold text-emerald-700">24,000</div>
                      <div className="text-xs">km² de forêts tropicales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Précipitations annuelles</div>
                      <div className="text-3xl font-bold text-emerald-700">1,800</div>
                      <div className="text-xs">mm de pluie par an</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces d'oiseaux</div>
                      <div className="text-3xl font-bold text-emerald-700">400+</div>
                      <div className="text-xs">espèces recensées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Chutes d'eau majeures</div>
                      <div className="text-3xl font-bold text-emerald-700">5+</div>
                      <div className="text-xs">cascades spectaculaires</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours des Forêts du Nord</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de la côte atlantique vers les profondeurs des forêts du nord angolais. Vous commencerez par un vol de Luanda vers Malanje pour visiter les chutes de Kalandula, avant de vous diriger vers le nord en véhicule 4x4. L'itinéraire traverse des paysages variés : savanes arborées, forêts-galeries, puis forêts tropicales denses. La dernière partie du circuit vous conduit à Soyo, dans le delta du fleuve Congo, offrant un contraste saisissant entre écosystèmes forestiers et côtiers.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance parcourue</div>
                            <div className="text-emerald-700 font-bold">1,500 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Randonnées en forêt</div>
                            <div className="text-emerald-700 font-bold">6+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vol intérieur inclus</div>
                            <div className="text-emerald-700 font-bold">1</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en pleine nature</div>
                            <div className="text-emerald-700 font-bold">3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Forêts du Nord</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=12.0,-8.0,16.0,-5.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Nord Angola Forêts"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/-7.0/14.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Les Écosystèmes du Nord</h3>
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
                <div className="mb-10 bg-gradient-to-r from-emerald-700 to-green-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-4</div>
                      <div className="text-sm">Introduction et chutes</div>
                      <div className="text-xs opacity-80">Luanda, vol, chutes de Kalandula</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-9</div>
                      <div className="text-sm">Forêts tropicales</div>
                      <div className="text-xs opacity-80">Forêt de Maiombe, Uíge, randonnées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">10-12</div>
                      <div className="text-sm">Delta et retour</div>
                      <div className="text-xs opacity-80">Soyo, delta du Congo, retour Luanda</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Niveau et Préparation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau aventure (3/5)</strong> : Ce circuit implique des randonnées en forêt sur terrain parfois difficile, des conditions climatiques humides, et un hébergement parfois rudimentaire. Une bonne condition physique est nécessaire pour les randonnées de plusieurs heures. Les déplacements se font en 4x4 sur des pistes souvent en mauvais état. Convient aux personnes en bonne santé, sans problèmes articulaires, et à l'aise en milieu naturel. Âge minimum recommandé : 16 ans.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">●</span>
                          <span className="text-sm">Bonne condition physique requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">●</span>
                          <span className="text-sm">Randonnées de 3-5 heures en forêt</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">●</span>
                          <span className="text-sm">Âge minimum : 16 ans (accompagné)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">●</span>
                          <span className="text-sm">Adaptabilité aux conditions rustiques</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de randonnée imperméables</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🌧️</span>
                          <span>Veste imperméable et pantalon de pluie</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🦟</span>
                          <span>Anti-moustiques forte concentration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💊</span>
                          <span>Trousse de premiers soins complète</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🔦</span>
                          <span>Lampe frontale avec piles de rechange</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourde ou camelbak 2L minimum</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧦</span>
                          <span>Chaussettes techniques en plusieurs exemplaires</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos jour 30L étanche</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Aventure ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à des zones normalement inaccessibles</h4>
                        <p className="text-sm text-gray-700">
                          Grâce à nos permis spéciaux et notre logistique, nous visitons des zones forestières protégées et préservées.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide spécialiste des forêts tropicales</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un expert de l'écologie forestière, formé à l'identification de la flore et de la faune.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Immersion totale dans la nature</h4>
                        <p className="text-sm text-gray-700">
                          Plusieurs nuits en campement forestier pour une expérience authentique de vie en forêt.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Contributions à la conservation</h4>
                        <p className="text-sm text-gray-700">
                          Une partie du prix du circuit est reversée à des projets de conservation des forêts du nord angolais.
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
                  {/* Jour 1 - Arrivée à Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À LUANDA</span>
                          <span className="text-sm text-gray-600">Accueil et préparation à l'aventure nordique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Luanda. Accueil par votre guide spécialiste des forêts tropicales. Transfert à votre hôtel. Briefing détaillé sur le circuit, les spécificités de l'aventure en forêt tropicale, et distribution d'une partie de l'équipement nécessaire (moustiquaires, ponchos). Vérification des équipements personnels. Dîner de bienvenue avec présentation des étapes du circuit. Nuit à l'hôtel à Luanda.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Vol vers Malanje et première approche */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VOL VERS MALANJE</span>
                          <span className="text-sm text-gray-600">Première immersion dans les paysages du nord</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée de transition</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal à l'aéroport de Luanda pour le vol intérieur vers Malanje. Arrivée à Malanje et rencontre avec l'équipe locale. Départ immédiat en 4x4 vers les chutes de Kalandula. Installation au camp de base près des chutes. Première approche des chutes en fin d'après-midi, observation du coucher de soleil sur ce site spectaculaire. Dîner au camp et première nuit en pleine nature. Briefing sur les règles de sécurité en milieu forestier.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Vol intérieur - Arrivée Malanje - Première vue chutes - Nuit camp
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Exploration des chutes de Kalandula */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CHUTES DE KALANDULA</span>
                          <span className="text-sm text-gray-600">Journée complète d'exploration des chutes et environs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée nature spectaculaire</h4>
                        <p className="text-justify mb-4">
                          Lever tôt pour observer les chutes au petit matin, moment où la lumière est la plus belle. Randonnée jusqu'au pied des chutes (descente modérée) pour ressentir la puissance de l'eau et prendre des photos spectaculaires. Baignade dans les piscines naturelles en amont (selon conditions). Déjeuner pique-nique avec vue sur les chutes. Après-midi : exploration des environs, découverte de la forêt-galérie qui borde la rivière. Observation des oiseaux et de la petite faune. Retour au camp en fin d'après-midi. Dîner et nuit au camp.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée chutes - Baignade naturelle - Observation faune - Photos
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Route vers Ndalatando */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS NDALATANDO</span>
                          <span className="text-sm text-gray-600">Transition vers le cœur des forêts du nord</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée de route et observation</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 vers le nord. Longue journée de route à travers des paysages changeants : savanes arborées, forêts-galeries, premières plantations de café. Arrêts réguliers pour observer la transition progressive des écosystèmes. Déjeuner pique-nique en route. Arrivée à Ndalatando en fin d'après-midi, installation à l'hôtel. Première rencontre avec des producteurs de café locaux. Dîner et nuit à l'hôtel à Ndalatando.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Route observation - Transition écosystèmes - Rencontre caféiculteurs
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Entrée en forêt de Maiombe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT DE MAIOMBE</span>
                          <span className="text-sm text-gray-600">Première immersion dans la forêt tropicale humide</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée d'immersion forestière</h4>
                        <p className="text-justify mb-4">
                          Départ très tôt vers la forêt de Maiombe. Arrivée à l'entrée de la forêt et rencontre avec les guides locaux spécialistes de la forêt. Première randonnée d'initiation en forêt : apprentissage de la lecture des traces, identification des arbres caractéristiques, découverte de l'écosystème forestier. Installation au campement forestier en milieu de journée. Après-midi : randonnée vers une clairière naturelle, observation des oiseaux et des primates. Initiation à l'utilisation des plantes médicinales par un guérisseur traditionnel. Dîner et première nuit en forêt.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée forêt - Observation faune - Plantes médicinales - Nuit forêt
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Exploration profonde de la forêt */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION FORESTIÈRE</span>
                          <span className="text-sm text-gray-600">Randonnée à la découverte des secrets de la forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée d'aventure</h4>
                        <p className="text-justify mb-4">
                          Journée complète d'exploration en forêt profonde. Randonnée jusqu'à un arbre géant (moabi ou fromager) pouvant atteindre 50 mètres de haut. Ascension (optionnelle et sécurisée) d'une plateforme d'observation dans la canopée. Déjeuner pique-nique au bord d'un ruisseau forestier. Après-midi : continuation de la randonnée vers une zone de marécage forestier, observation des amphibiens et des insectes. Retour au campement en fin d'après-midi. Soirée autour du feu avec contes et légendes de la forêt. Dîner et nuit au campement.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée forêt profonde - Observation canopée - Faune forestière - Contes
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Route vers Uíge */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS UÍGE</span>
                          <span className="text-sm text-gray-600">Sortie de forêt et découverte de la capitale caféière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée de transition</h4>
                        <p className="text-justify mb-4">
                          Dernière matinée en forêt : petite randonnée d'adieu et démontage du campement. Départ vers Uíge, capitale de la province et centre de la culture caféière angolaise. Arrivée à Uíge en milieu d'après-midi, installation à l'hôtel. Première découverte de la ville, visite du marché local spécialisé en produits de la forêt (noix, fruits, épices). Dîner avec spécialités locales à base de produits forestiers. Nuit à l'hôtel à Uíge.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Sortie forêt - Route vers Uíge - Marché local - Culture café
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Uíge et plantations de café */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">UÍGE CAFÉIÈRE</span>
                          <span className="text-sm text-gray-600">Découverte de la culture du café en forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée caféière</h4>
                        <p className="text-justify mb-4">
                          Visite d'une plantation de café en agroforesterie, système traditionnel où les caféiers poussent sous couvert forestier. Explication du processus de culture, de récolte et de traitement des cerises de café. Participation à la récolte (selon saison). Déjeuner avec la famille de planteurs. Après-midi : visite d'une unité de traitement du café (dépulpage, fermentation, séchage). Dégustation de cafés de différentes qualités. Retour à Uíge en fin d'après-midi. Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Plantation café - Récolte - Traitement - Dégustation
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Route vers Soyo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS SOYO</span>
                          <span className="text-sm text-gray-600">Des forêts aux mangroves du delta du Congo</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée de contraste</h4>
                        <p className="text-justify mb-4">
                          Longue journée de route vers Soyo, à l'embouchure du fleuve Congo. Observation de la transition entre forêts tropicales et paysages côtiers. Arrêt à mi-parcours pour visiter un village de pêcheurs traditionnels. Déjeuner pique-nique. Arrivée à Soyo en fin d'après-midi, installation à l'hôtel face à l'océan. Première découverte des mangroves en fin de journée. Dîner de fruits de mer frais. Nuit à l'hôtel à Soyo.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Route vers côte - Village pêcheurs - Arrivée Soyo - Mangroves
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Delta du Congo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DELTA DU CONGO</span>
                          <span className="text-sm text-gray-600">Exploration des mangroves et observation d'oiseaux</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée écologique</h4>
                        <p className="text-justify mb-4">
                          Excursion en bateau à moteur dans le delta du Congo. Navigation à travers les chenaux de mangroves, observation de l'écosystème unique de la zone de mélange eau douce/eau salée. Observation des oiseaux migrateurs et des espèces typiques des mangroves. Arrêt sur une île pour déjeuner pique-nique. Après-midi : visite d'un village de pêcheurs installé sur pilotis, découverte des techniques de pêche traditionnelles. Retour à Soyo en fin d'après-midi. Dîner d'adieu avec produits de la mer. Nuit à l'hôtel.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Excursion delta - Mangroves - Observation oiseaux - Pêcheurs
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Vol retour vers Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VOL RETOUR LUANDA</span>
                          <span className="text-sm text-gray-600">Retour à la civilisation et bilan de l'aventure</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée de retour</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal à l'aéroport de Soyo pour le vol retour vers Luanda. Arrivée à Luanda et transfert à l'hôtel. Après-midi libre pour repos, douche bien méritée, et rangement de l'équipement. En soirée, dîner de clôture du circuit avec partage des expériences et des photos. Distribution des certificats de participation à cette aventure unique. Nuit à l'hôtel à Luanda.
                        </p>
                        <div className="bg-emerald-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Vol retour Luanda - Repos - Bilan aventure - Dîner clôture
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE LUANDA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments pour les achats de souvenirs : café d'Uíge, épices de la forêt, artisanat local. Selon l'horaire de votre vol, transfert à l'aéroport international de Luanda. Assistance aux formalités d'embarquement. Emportez avec vous non seulement des souvenirs inoubliables des forêts tropicales angolaises, mais aussi une compréhension profonde des écosystèmes forestiers, des rencontres humaines authentiques avec les gardiens de ces forêts, et le sentiment d'avoir participé à une aventure hors du commun dans l'une des dernières grandes forêts tropicales d'Afrique.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-emerald-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌳</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-emerald-700">Les Expériences du Nord</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion complète dans les écosystèmes forestiers du nord angolais. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région fascinante, des chutes spectaculaires aux forêts profondes en passant par les communautés qui y vivent.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-emerald-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-emerald-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-emerald-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-emerald-700 mt-1">•</span>
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
                              lat={exp.id === 'forets' ? -6.0 : 
                                   exp.id === 'chutes' ? -9.7 :
                                   exp.id === 'faune' ? -7.0 :
                                   -7.61} 
                              lng={exp.id === 'forets' ? 15.0 : 
                                   exp.id === 'chutes' ? 16.0 :
                                   exp.id === 'faune' ? 15.5 :
                                   15.05} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie du Nord Mystérieux</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1589552950455-75eeaf3c7b1e?w=600" 
                          alt="Forêt de Maiombe" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt de Maiombe</h5>
                          <p className="text-sm text-gray-700">Canopée dense et biodiversité exceptionnelle</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1589552950456-75eeaf3c7b1f?w=600" 
                          alt="Chutes de Kalandula" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Chutes de Kalandula</h5>
                          <p className="text-sm text-gray-700">Spectacle naturel de 105 mètres de large</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1589552950457-75eeaf3c7b1e?w=600" 
                          alt="Communautés forestières" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Communautés forestières</h5>
                          <p className="text-sm text-gray-700">Rencontres authentiques en forêt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">Activités Optionnelles Aventure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Ascension d'arbres avec équipement</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Ascension sécurisée d'un arbre géant avec vue sur la canopée. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Nuit en hamac dans la canopée</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Expérience unique de nuit suspendue dans les arbres. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Séance photo professionnelle en forêt</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Photos souvenirs avec photographe professionnel. Supplément : 100€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Atelier de survie en forêt</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage des techniques de survie avec un expert. Supplément : 90€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements d'Aventure</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-emerald-700 w-16 md:w-32"></span>
                      <span className="text-emerald-700 text-2xl">🏕️</span>
                      <span className="h-px bg-emerald-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements adaptés à l'esprit aventure : du confort relatif des hôtels urbains aux campements rustiques en pleine forêt. Chaque hébergement est choisi pour son authenticité et son adaptation au contexte naturel.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('luanda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'luanda' 
                          ? 'bg-emerald-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUANDA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('camp')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'camp' 
                          ? 'bg-emerald-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPEMENTS FORESTIERS (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('hotels')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'hotels' 
                          ? 'bg-emerald-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      HÔTELS LOCAUX (6 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Luanda */}
                  {activeHotelTab === 'luanda' && (
                    <div className="space-y-16">
                      {/* Hotel Aventura */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Aventura" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-emerald-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Aventura</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Près de l'aéroport, Luanda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Proximité aéroport</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Aventura offre un confort fonctionnel pour les premières et dernières nuits du circuit. Bien situé près de l'aéroport, il permet des transferts rapides. Les chambres sont simples mais propres, avec salle de bain privée et climatisation. L'hôtel dispose d'une piscine bienvenue après les longues journées de voyage, et d'un restaurant servant une cuisine internationale. Idéal pour préparer et conclure l'aventure en forêt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Campements */}
                  {activeHotelTab === 'camp' && (
                    <div className="space-y-16">
                      {/* Campement Forestier */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Campement Forestier" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement Forestier</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Forêt de Maiombe, Nord Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>En pleine forêt</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Tentes de qualité</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Douches solaires</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚽</span>
                                <span className="text-sm font-semibold">Toilettes sèches</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le campement forestier est une expérience d'immersion totale en forêt. Installé dans une clairière naturelle, il comprend des tentes de qualité (2 personnes par tente) avec matelas confortables et moustiquaires. Les sanitaires comprennent des douches solaires (eau chauffée par le soleil) et des toilettes sèches écologiques. La cuisine est préparée par un cuisinier local avec des produits frais. Les nuits sont rythmées par les bruits de la forêt. Une expérience authentique pour les amateurs de nature.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Hôtels */}
                  {activeHotelTab === 'hotels' && (
                    <div className="space-y-16">
                      {/* Hôtels Locaux */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1589552950458-75eeaf3c7b1e?w=600" 
                              alt="Hôtels Locaux" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtels Locaux</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Malanje, Ndalatando, Uíge, Soyo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏨</span>
                                <span>Confort local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔌</span>
                                <span className="text-sm font-semibold">Électricité (parfois limitée)</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Dans les villes visitées (Malanje, Ndalatando, Uíge, Soyo), vous séjournerez dans des hôtels locaux offrant un confort simple mais adapté. Ces établissements, souvent familiaux, proposent des chambres propres avec salle de bain privée et climatisation (fonctionnelle la plupart du temps). Les restaurants servent une cuisine locale simple mais savoureuse. L'électricité peut être intermittente dans certaines régions, mais les hôtels sont généralement équipés de générateurs. Ces hébergements permettent de découvrir l'authenticité des villes du nord angolais.
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
                  <span className="text-2xl">🌳</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Aventure</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-emerald-700">$3,599</span>
                    <span className="text-sm text-gray-600">Prix complet</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
                    ✅ Inclus : Vols intérieurs, tous transferts 4x4, guide spécialiste, hébergements, tous repas en forêt, équipement camping
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-emerald-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                    <span>Vol intra-vacances et taxes inclus</span>
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-05-10">10 Mai 2026</option>
                    <option value="2026-06-07">7 Juin 2026</option>
                    <option value="2026-07-05">5 Juillet 2026</option>
                    <option value="2026-08-02">2 Août 2026</option>
                    <option value="2026-08-30">30 Août 2026</option>
                    <option value="2026-09-27">27 Septembre 2026</option>
                    <option value="2027-05-09">9 Mai 2027</option>
                    <option value="2027-06-06">6 Juin 2027</option>
                    <option value="2027-07-04">4 Juillet 2027</option>
                    <option value="2027-08-01">1 Août 2027</option>
                    <option value="2027-08-29">29 Août 2027</option>
                    <option value="2027-09-26">26 Septembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à septembre (saison relativement sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-emerald-700 to-green-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>3 NUITS EN PLEINE FORÊT INCLUSES</strong> : immersion totale
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-emerald-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-emerald-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-emerald-700 text-white py-4 font-semibold text-base mb-4 hover:bg-emerald-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur l'aventure ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts forêt tropicale vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=12.0,-8.0,16.0,-5.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Nord Angola miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Nord Mystérieux - 12 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit aventure et nature préservée
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Activités et Services Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Vols intérieurs Luanda-Malanje</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous transferts en 4x4 avec chauffeur</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste forêts tropicales</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 nuits en campement forestier</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas en forêt</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement camping (tente, matelas)</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée parcs et réserves</span>
                    <span className="font-bold text-emerald-700">✓</span>
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
                    <span className="font-bold text-emerald-700">Aventure</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-emerald-700">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs mai à septembre</span>
                    <span className="font-bold text-emerald-700">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transport</span>
                    <span className="font-bold text-emerald-700">4x4 et vol intérieur</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-emerald-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Recommandé : excellente condition physique et esprit d'adaptation
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-emerald-200 p-4 mt-6 shadow-lg bg-emerald-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700">
                  <span>💬</span>
                  <span>Témoignage Aventurier</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Cette aventure dans les forêts du nord angolais a été l'une des expériences les plus intenses de ma vie. Les chutes de Kalandula sont à couper le souffle, et dormir en pleine forêt de Maiombe était magique. Les guides étaient incroyablement compétents et passionnés. Un circuit pour les vrais amateurs de nature préservée !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas R., aventurier 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-emerald-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-emerald-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}