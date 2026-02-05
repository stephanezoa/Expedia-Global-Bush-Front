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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Lubango et le Grand Sud</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-18.0,20.0,-12.0&layer=mapnik&marker=-14.9170,13.4920&marker=-15.7500,13.7500"
          style={{ border: 0 }}
          allowFullScreen
          title="Sud de l'Angola - Lubango et le Grand Sud"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/-15.5/14.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Luanda</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lubango</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Namibe</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Désert de Moçâmedes</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Serra da Leba</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-pink-600 border-2 border-gray-300"></span>
          <span className="text-sm">Tundavala</span>
        </div>
      </div>
    </div>
  );
};

export default function Sudangola() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('luanda');
  const [activeExperienceTab, setActiveExperienceTab] = useState('lubango');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏔️', title: 'Falaise de Tundavala', desc: 'Vue spectaculaire sur l\'une des plus belles falaises d\'Afrique' },
    { icon: '🏜️', title: 'Désert de Moçâmedes', desc: 'Découverte du désert côtier unique au monde' },
    { icon: '🛣️', title: 'Route de Serra da Leba', desc: 'Légendaire route sinueuse avec vues panoramiques' },
    { icon: '🌵', title: 'Flore du Désert', desc: 'Plantes endémiques adaptées au climat aride' },
    { icon: '🎭', title: 'Culture Mucubal', desc: 'Rencontre avec le peuple pastoraliste Mucubal' },
    { icon: '🏖️', title: 'Côte Sauvage', desc: 'Plages désertes de l\'océan Atlantique' },
  ];

  const regions = [
    { 
      name: 'Luanda', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale dynamique de l\'Angola, point de départ du voyage',
      features: ['Arrivée internationale', 'Culture urbaine', 'Préparation voyage', 'Vol vers Lubango']
    },
    { 
      name: 'Lubango', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville climatique entourée de montagnes, capitale de la province de Huíla',
      features: ['Climat tempéré', 'Culture coloniale', 'Marchés colorés', 'Base exploration']
    },
    { 
      name: 'Tundavala', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Falaise spectaculaire à 2 200m d\'altitude avec vue sur 1 000m de dénivelé',
      features: ['Point de vue époustouflant', 'Photographie', 'Randonnées', 'Paysages uniques']
    },
    { 
      name: 'Serra da Leba', 
      color: 'bg-cyan-100', 
      textColor: 'text-cyan-800', 
      desc: 'Route légendaire serpentant à travers les montagnes',
      features: ['Route panoramique', 'Vues spectaculaires', 'Ingénierie civile', 'Photos mémorables']
    },
    { 
      name: 'Namibe', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Port historique sur la côte atlantique et porte d\'entrée du désert',
      features: ['Plages désertes', 'Histoire coloniale', 'Port de pêche', 'Cuisine de fruits de mer']
    },
    { 
      name: 'Désert de Moçâmedes', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Désert côtier unique où le sable rencontre l\'océan Atlantique',
      features: ['Dunes spectaculaires', 'Welwitschia mirabilis', 'Communautés nomades', 'Paysages lunaires']
    },
  ];

  const experiences = [
    { 
      id: 'lubango',
      name: 'Découverte de Lubango', 
      icon: '🏔️',
      desc: 'Immersion dans la ville climatique de Lubango et ses environs montagneux',
      highlights: ['Ville coloniale', 'Climat tempéré', 'Marchés animés', 'Vues panoramiques'],
      details: 'Lubango, capitale de la province de Huíla, est surnommée "la ville climatique" pour son agréable climat tempéré dû à son altitude (1 760m). Fondée par des colons portugais de Madère au début du XXe siècle, la ville conserve une architecture coloniale préservée. Vous découvrirez le centre historique avec sa cathédrale, son musée régional, et le parc Dr. António Agostinho Neto. Les environs montagneux offrent des paysages spectaculaires, notamment la falaise de Tundavala, considérée comme l\'une des plus belles vues d\'Afrique. Lubango est également le cœur culturel du sud de l\'Angola, avec une population accueillante et des traditions vivantes.'
    },
    { 
      id: 'tundavala',
      name: 'Falaise de Tundavala', 
      icon: '🌄',
      desc: 'Expérience vertigineuse au bord de l\'une des plus impressionnantes falaises d\'Afrique',
      highlights: ['Vue à 1 000m de dénivelé', 'Paysages grandioses', 'Photographie', 'Sensations fortes'],
      details: 'La falaise de Tundavala est sans conteste l\'un des sites naturels les plus spectaculaires d\'Angola. Située à environ 18km de Lubango, cette faille géologique impressionnante offre un dénivelé de près de 1 000 mètres entre le plateau et la plaine en contrebas. Du point de vue à 2 200 mètres d\'altitude, le panorama est tout simplement époustouflant : on aperçoit les montagnes s\'étendant à perte de vue, avec parfois des nuages flottant en dessous du point d\'observation. Ce site, chargé de légendes locales, est considéré comme sacré par certaines communautés. Une expérience mémorable pour les amateurs de paysages grandioses et de photographie.'
    },
    { 
      id: 'serraleba',
      name: 'Route de Serra da Leba', 
      icon: '🛣️',
      desc: 'Parcours légendaire sur la route sinueuse la plus photographiée d\'Angola',
      highlights: ['Route sinueuse', 'Vues panoramiques', 'Ingénierie remarquable', 'Arrêts photos'],
      details: 'La route de Serra da Leba est une prouesse d\'ingénierie civile et l\'un des symboles du sud de l\'Angola. Construite dans les années 1970, cette route spectaculaire serpente sur 20km à travers la chaîne de montagnes de Serra da Leba, descendant de 1 845m à 630m d\'altitude. Avec ses virages en épingle à cheveux, ses tunnels et ses points de vue panoramiques, elle offre des paysages à couper le souffle. La vue depuis le mirador principal, avec la route en lacets au premier plan et les montagnes à l\'arrière-plan, est l\'une des images les plus iconiques du pays. Cette expérience de conduite ou de voyage est inoubliable, mêlant sensations fortes et admiration pour le génie humain.'
    },
    { 
      id: 'desert',
      name: 'Désert de Moçâmedes', 
      icon: '🏜️',
      desc: 'Exploration du désert côtier unique et de ses écosystèmes extraordinaires',
      highlights: ['Dunes côtières', 'Welwitschia mirabilis', 'Communautés Mucubal', 'Plages désertes'],
      details: 'Le désert de Moçâmedes (ou désert du Namib angolais) est l\'une des régions les plus fascinantes d\'Angola. Ce désert côtier présente la particularité unique d\'avoir des dunes de sable qui descendent jusqu\'à l\'océan Atlantique. Vous y découvrirez des paysages lunaires, des canyons spectaculaires, et surtout la célèbre Welwitschia mirabilis, plante endémique qui peut vivre plus de 1 000 ans. Le désert abrite également le peuple Mucubal, éleveurs nomades qui ont développé une culture unique adaptée à cet environnement extrême. Cette exploration vous permettra de comprendre les stratégies de survie dans ce milieu aride et d\'admirer une biodiversité adaptée remarquable.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image du Sud Angola */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇦🇴</span>
          <span>ESCAPES | ANGOLA</span>
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Sud Authentique : Lubango et le Grand Sud</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🏔️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              14 jours d'exploration entre les montagnes spectaculaires, le désert côtier et les cultures ancestrales du sud angolais
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">14</div>
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
            <span className="text-sm font-semibold">ANGOLA | GRAND SUD</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Falaise de Tundavala" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Falaise spectaculaire de Tundavala</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Désert de Moçâmedes" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Dunes du désert de Moçâmedes</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Route de Serra da Leba" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Route légendaire de Serra da Leba</p>
            </div>
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
                <span className="bg-blue-600 text-white px-3 py-1 font-bold">GRAND TOUR</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO6</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">14 jours - Luanda à Lubango</span>
                <button className="ml-auto border-2 border-blue-600 text-blue-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion complète dans les paysages spectaculaires du sud angolais</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  HÉBERGEMENT
                </button>
              </div>
            </div>

            {/* Contenu des onglets */}
            {activeTab === 'apercu' && (
              <div>
                {/* Galerie d'images descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Tundavala" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Falaise de Tundavala, vue spectaculaire à 2 200m d'altitude</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Désert de Moçâmedes" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Dunes du désert de Moçâmedes rencontrant l'océan Atlantique</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 14 jours vous emmène à la découverte du Grand Sud angolais, une région de contrastes extraordinaires entre montagnes majestueuses, désert côtier unique et cultures ancestrales. Une immersion complète dans les paysages les plus spectaculaires d'Angola, de la légendaire falaise de Tundavala aux dunes de sable du désert de Moçâmedes.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure débutera à Luanda, d'où vous prendrez un vol vers Lubango, la ville climatique du sud. Pendant 12 jours, vous explorerez cette région fascinante : découverte de la falaise vertigineuse de Tundavala, parcours sur la route spectaculaire de Serra da Leba, exploration du désert côtier unique de Moçâmedes avec sa flore endémique, rencontre avec le peuple pastoraliste Mucubal, et découverte des plages sauvages de la côte atlantique. Un voyage de découverte complet qui combine paysages grandioses, culture authentique et aventures inoubliables.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Tundavala" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Le Grand Sud angolais : entre montagnes spectaculaires et désert côtier unique</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs amateurs de paysages grandioses et de cultures authentiques, souhaitant découvrir une région méconnue aux contrastes saisissants. Accompagné de guides locaux francophones, vous découvrirez les multiples facettes du sud angolais : ses paysages époustouflants, sa biodiversité adaptée aux milieux extrêmes, ses cultures ancestrales préservées. Un voyage respectueux des populations locales et de l'environnement, qui contribue au développement d'un tourisme responsable dans cette région.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">Les Atouts du Voyage</h3>
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
                  
                  {/* Images supplémentaires */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Serra da Leba" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Voyage</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tundavala" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Vertige à la falaise de Tundavala</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert de Moçâmedes" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Exploration du désert côtier unique</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Vue vertigineuse</strong> depuis la falaise de Tundavala (1 000m de dénivelé)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Route spectaculaire</strong> de Serra da Leba, prouesse d'ingénierie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Rencontre avec le peuple Mucubal</strong>, éleveurs nomades du désert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Découverte de la Welwitschia mirabilis</strong>, plante millénaire endémique</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Plages désertes</strong> de la côte atlantique du sud angolais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Climat tempéré</strong> de Lubango, la ville climatique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Photographie</strong> de paysages parmi les plus beaux d'Afrique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Culture coloniale préservée</strong> de Lubango et Namibe</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur Tundavala avec image */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Tundavala" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Tundavala : Le Grand Canyon Angolais</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          La falaise de Tundavala est l'un des sites naturels les plus spectaculaires d'Afrique. Située à 2 200 mètres d'altitude, cette faille géologique impressionnante offre un dénivelé de près de 1 000 mètres entre le plateau de Huíla et la plaine en contrebas. Le point de vue offre un panorama à 360° sur les montagnes environnantes, avec parfois le spectacle des nuages flottant en dessous du point d'observation. Le site, chargé de légendes locales, est considéré comme sacré par certaines communautés qui y voient la frontière entre le monde des vivants et celui des esprits. Pour les visiteurs, c'est une expérience vertigineuse et inoubliable, particulièrement au lever et au coucher du soleil quand les couleurs transforment le paysage.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">2 200m d'altitude</span>
                          <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">1 000m de dénivelé</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Vue panoramique 360°</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Site sacré</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Photographie exceptionnelle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Tundavala" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">LE GRAND SUD EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Altitude Lubango</div>
                        <div className="text-3xl font-bold">1,760</div>
                        <div className="text-xs text-white/80">mètres (ville climatique)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Dénivelé Tundavala</div>
                        <div className="text-3xl font-bold">1,000</div>
                        <div className="text-xs text-white/80">mètres de falaise</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Longueur Serra da Leba</div>
                        <div className="text-3xl font-bold">20</div>
                        <div className="text-xs text-white/80">km de route spectaculaire</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Âge Welwitschia</div>
                        <div className="text-3xl font-bold">1,000</div>
                        <div className="text-xs text-white/80">ans (plante millénaire)</div>
                      </div>
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
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Serra da Leba" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Complet Luanda-Lubango-Namibe</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce voyage vous emmène de Luanda, capitale de l'Angola, vers le sud spectaculaire via un vol intérieur vers Lubango. De cette ville climatique, vous explorerez les montagnes environnantes : la falaise vertigineuse de Tundavala et la route légendaire de Serra da Leba. Vous descendrez ensuite vers la côte atlantique pour découvrir le port historique de Namibe et le désert côtier unique de Moçâmedes. L'itinéraire alterne découvertes culturelles à Lubango et Namibe, explorations naturelles dans les montagnes et le désert, rencontres authentiques avec le peuple Mucubal, et moments de détente sur les plages sauvages de la côte.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours dans le Grand Sud</div>
                            <div className="text-blue-600 font-bold">12</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vol Luanda-Lubango</div>
                            <div className="text-blue-600 font-bold">Inclus</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude maximale</div>
                            <div className="text-blue-600 font-bold">2 200m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides francophones</div>
                            <div className="text-blue-600 font-bold">2+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Luanda' 
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Lubango'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Tundavala'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Serra da Leba'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Namibe'
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={region.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3">
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section galerie supplémentaire */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Galerie du Grand Sud</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tundavala 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Serra da Leba" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Côte atlantique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Luanda</div>
                      <div className="text-xs opacity-80">Arrivée, découverte capitale, préparation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-6</div>
                      <div className="text-sm">Lubango & Montagnes</div>
                      <div className="text-xs opacity-80">Ville climatique, Tundavala, Serra da Leba</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-10</div>
                      <div className="text-sm">Namibe & Côte</div>
                      <div className="text-xs opacity-80">Port historique, plages, culture coloniale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">11-14</div>
                      <div className="text-sm">Désert & Retour</div>
                      <div className="text-xs opacity-80">Désert de Moçâmedes, Mucubal, retour Luanda</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-cyan-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau moyen (3/5)</strong> : Ce voyage comporte des déplacements sur des routes de montagne, des marches modérées en altitude, et des explorations dans le désert. Une bonne condition physique est recommandée. L'altitude à Lubango (1 760m) et Tundavala (2 200m) peut affecter les personnes sensibles. Les températures varient entre le climat tempéré de Lubango, la chaleur de la côte, et les nuits fraîches du désert. L'âge minimum recommandé est de 14 ans (accompagné). Les déplacements se font en véhicule 4x4 adapté aux routes de montagne et au désert.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Bonne condition physique recommandée</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Adaptation à l'altitude nécessaire</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 14 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Véhicule 4x4 pour routes de montagne et désert</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de randonnée confortables</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire indice très élevé</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧥</span>
                              <span>Veste chaude pour altitude et nuits désert</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🕶️</span>
                              <span>Lunettes de soleil de qualité désert</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💧</span>
                              <span>Gourde ou camelbak (2L minimum)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧢</span>
                              <span>Chapeau ou casquette large</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo avec objectifs grand-angle</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale personnelle + altimètre</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement désert" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Tundavala" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Voyage Grand Tour ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte des paysages les plus spectaculaires d'Angola</h4>
                            <p className="text-sm text-gray-700">
                              De la falaise vertigineuse de Tundavala aux dunes du désert de Moçâmedes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Immersion complète dans les contrastes du sud angolais</h4>
                            <p className="text-sm text-gray-700">
                              Montagnes, désert côtier, côte atlantique et cultures ancestrales.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accompagnement par des guides spécialistes du Grand Sud</h4>
                            <p className="text-sm text-gray-700">
                              Guides connaissant parfaitement la région, ses secrets et ses populations.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Voyage responsable qui soutient les communautés locales</h4>
                            <p className="text-sm text-gray-700">
                              Rencontres authentiques avec le peuple Mucubal et contribution à l'économie locale.
                            </p>
                          </div>
                        </div>
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
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À LUANDA</span>
                          <span className="text-sm text-gray-600">Accueil et première découverte de la capitale angolaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international Quatro de Fevereiro de Luanda. Accueil par votre guide francophone spécialiste du Grand Sud. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur le circuit et préparation pour le départ vers le sud. Première découverte de Luanda avec une promenade le long de la baie de Luanda (Marginal). Dîner de bienvenue dans un restaurant local avec spécialités angolaises. Nuit à l'hôtel à Luanda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing circuit - Promenade Marginal - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Luanda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Luanda et vol vers Lubango */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LUANDA ET VOL VERS LUBANGO</span>
                          <span className="text-sm text-gray-600">Découverte de Luanda puis envol pour la ville climatique de Lubango</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Matinée à Luanda, après-midi à Lubango</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de Luanda. Visite du musée national d'Anthropologie qui présente les cultures traditionnelles angolaises, avec focus sur les peuples du sud. Promenade dans le marché de Benfica, l'un des plus animés de la ville. Déjeuner de spécialités locales. Transfert à l'aéroport pour le vol vers Lubango (environ 2h de vol). Arrivée à l'aéroport de Lubango. Accueil par votre guide local spécialiste du Grand Sud. Première sensation du climat tempéré de la ville (1 760m d'altitude). Transfert à votre hôtel. Installation. Promenade en fin de journée dans le centre historique de Lubango pour une première immersion. Dîner dans un restaurant local. Nuit à l'hôtel à Lubango.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Musée Anthropologie - Marché Benfica - Vol Luanda-Lubango - Transfert hôtel - Première découverte Lubango
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lubango" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Découverte de Lubango */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉCOUVERTE DE LUBANGO</span>
                          <span className="text-sm text-gray-600">Immersion dans la ville climatique et son histoire unique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée culturelle à Lubango</h4>
                            <p className="text-justify mb-4">
                              Journée complète consacrée à la découverte de Lubango, capitale de la province de Huíla. Visite de la cathédrale Notre-Dame du Mont, monument emblématique de la ville. Découverte du musée régional de Huíla qui retrace l'histoire et les cultures du sud angolais. Promenade dans le marché central, lieu d'animation et de rencontres avec les producteurs locaux. Déjeuner dans un restaurant typique avec spécialités de la région. Après-midi : visite du parc Dr. António Agostinho Neto et découverte de l'architecture coloniale préservée du centre-ville. Rencontre avec des représentants de la communauté pour une introduction aux cultures du sud. En fin de journée, point de vue sur la ville depuis les hauteurs. Dîner libre. Nuit à l'hôtel à Lubango.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Cathédrale - Musée régional - Marché central - Architecture coloniale - Rencontre communauté
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lubango Ville" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Falaise de Tundavala */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FALAISE DE TUNDAVALA</span>
                          <span className="text-sm text-gray-600">Expérience vertigineuse sur l'une des plus belles falaises d'Afrique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée panoramique</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à la découverte de la falaise de Tundavala. Départ matinal en véhicule 4x4 vers le site (environ 18km de Lubango). Arrivée au point de vue principal à 2 200m d'altitude. Expérience vertigineuse face au dénivelé de près de 1 000m. Observation du panorama à 360° sur les montagnes environnantes. Explications géologiques et légendes locales par votre guide. Session photographique pour capturer ce paysage époustouflant. Déjeuner pique-nique face au précipice. Après-midi : marche légère le long de la falaise (en toute sécurité) pour découvrir différents points de vue. Possibilité d'observer les nuages flottant en dessous du point d'observation. Retour à Lubango en fin d'après-midi. Dîner dans un restaurant avec vue sur la ville. Nuit à l'hôtel à Lubango.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Point de vue Tundavala - Photographie - Explications géologiques - Marche légère - Retour Lubango
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Tundavala" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route de Serra da Leba */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE DE SERRA DA LEBA</span>
                          <span className="text-sm text-gray-600">Parcours légendaire sur la route la plus photographiée d'Angola</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée route spectaculaire</h4>
                            <p className="text-justify mb-4">
                              Départ matinal pour la route de Serra da Leba. Arrêt au mirador principal pour admirer la vue panoramique sur cette prouesse d'ingénierie civile. Descente progressive en véhicule 4x4 sur les 20km de route sinueuse, avec ses virages en épingle à cheveux et ses tunnels. Arrêts photographiques réguliers pour capturer les différentes perspectives de la route serpentant à travers les montagnes. Explications sur la construction de la route dans les années 1970. Déjeuner pique-nique avec vue sur les montagnes. Après-midi : continuation de la descente jusqu'à atteindre la plaine. Observation du changement de paysage et de végétation. Arrivée en fin de journée à un lodge situé au pied des montagnes. Dîner et nuit au lodge.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Mirador Serra da Leba - Descente route sinueuse - Photographie - Explications historiques - Nuit lodge
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Serra da Leba" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Vers Namibe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS NAMIBE</span>
                          <span className="text-sm text-gray-600">Traversée vers la côte atlantique et découverte du port historique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de transition</h4>
                            <p className="text-justify mb-4">
                              Départ matinal en véhicule 4x4 vers la côte atlantique. Traversée de paysages variés : des contreforts des montagnes aux plaines semi-arides. Arrêts réguliers pour observer la flore adaptée à la sécheresse. Arrivée à Namibe en milieu de journée. Installation à votre hôtel face à l'océan. Première découverte de Namibe, port historique fondé en 1840. Visite du fort de São Fernando, vestige de l'époque coloniale. Promenade le long du port de pêche pour observer l'activité des pêcheurs. Déjeuner de fruits de mer frais dans un restaurant local. Après-midi : temps libre pour se détendre sur la plage de Namibe ou exploration libre de la ville. En fin de journée, point de vue sur le coucher de soleil sur l'océan Atlantique. Dîner de spécialités de poissons. Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Traversée paysages - Arrivée Namibe - Fort São Fernando - Port de pêche - Plage
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Namibe" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Première approche du désert */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PREMIÈRE APPROCHE DU DÉSERT</span>
                          <span className="text-sm text-gray-600">Découverte des paysages lunaires du désert de Moçâmedes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée désertique</h4>
                            <p className="text-justify mb-4">
                              Départ matinal en véhicule 4x4 vers le désert de Moçâmedes. Arrêt au site des "Pedras Negras" (pierres noires), formation géologique spectaculaire. Première observation des dunes de sable qui caractérisent ce désert côtier unique. Découverte de la flore adaptée à l'aridité, avec notamment les premiers spécimens de Welwitschia mirabilis. Explications sur cette plante endémique qui peut vivre plus de 1 000 ans. Déjeuner pique-nique à l'ombre d'un acacia. Après-midi : exploration des canyons et des paysages lunaires du désert. Observation des traces d'animaux adaptés à ce milieu extrême. En fin de journée, retour à Namibe. Dîner libre. Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Pedras Negras - Dunes désert - Welwitschia mirabilis - Canyons - Retour Namibe
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Désert" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Exploration approfondie du désert */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION APPROFONDIE DU DÉSERT</span>
                          <span className="text-sm text-gray-600">Journée complète d'immersion dans le désert côtier unique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Immersion désert</h4>
                            <p className="text-justify mb-4">
                              Journée complète d'exploration du désert de Moçâmedes. Départ très tôt en véhicule 4x4 vers les zones les plus reculées. Découverte des dunes de sable qui descendent jusqu'à l'océan Atlantique, phénomène unique au monde. Marche légère sur les dunes pour atteindre un point de vue spectaculaire sur la rencontre désert-océan. Observation de la faune adaptée (reptiles, insectes, oiseaux du désert). Déjeuner pique-nique à l'ombre d'un rocher. Après-midi : recherche de spécimens anciens de Welwitschia mirabilis, avec explications détaillées sur cette plante extraordinaire. Session photographique pour capturer les jeux de lumière sur les dunes. En fin de journée, retour à Namibe. Dîner de spécialités locales. Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Dunes côtières - Marche sur dunes - Faune désert - Welwitschia ancienne - Photographie
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Désert exploration" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Rencontre avec le peuple Mucubal */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RENCONTRE AVEC LE PEUPLE MUCUBAL</span>
                          <span className="text-sm text-gray-600">Immersion dans la culture des éleveurs nomades du désert</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée culturelle Mucubal</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à la rencontre avec le peuple Mucubal, éleveurs nomades du désert. Départ vers une zone où une communauté s'est temporairement installée. Accueil par les chefs de famille et les anciens. Découverte de l'organisation sociale Mucubal, basée sur l'élevage bovin et caprin. Présentation des techniques de survie dans le désert : recherche d'eau, utilisation des plantes, adaptation au climat. Observation des habitations traditionnelles et des techniques d'élevage. Déjeuner partagé avec la communauté (selon leurs disponibilités). Après-midi : démonstration de techniques artisanales (travail du cuir, fabrication d'objets). Échanges sur les défis de la vie nomade dans le désert moderne. En fin de journée, retour à Namibe. Dîner libre. Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Communauté Mucubal - Organisation sociale - Techniques survie désert - Artisanat - Retour Namibe
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Mucubal" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Plages sauvages de la côte */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PLAGES SAUVAGES DE LA CÔTE</span>
                          <span className="text-sm text-gray-600">Découverte des plages désertes de l'océan Atlantique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée balnéaire</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée aux plages sauvages de la côte atlantique du sud angolais. Départ vers la plage de Baía dos Tigres, ancienne île devenue presqu'île, avec ses paysages désertiques uniques. Marche le long de la plage, observation des oiseaux marins et des traces laissées par les animaux. Baignade dans les eaux de l'Atlantique (sous surveillance, courants possibles). Déjeuner pique-nique sur la plage. Après-midi : exploration d'autres plages plus isolées, accessibles seulement en 4x4. Observation des pêcheurs artisans et de leurs techniques traditionnelles. Possibilité de rencontrer des communautés de pêcheurs installées temporairement sur la côte. En fin de journée, retour à Namibe. Dîner d'adieu des fruits de mer. Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Plage Baía dos Tigres - Baignade - Plages isolées - Pêcheurs artisans - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Plages" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Retour vers Lubango */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR VERS LUBANGO</span>
                          <span className="text-sm text-gray-600">Traversée retour vers la ville climatique avec arrêts découvertes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Namibe en direction de Lubango. Traversée des mêmes paysages mais avec une perspective différente après l'expérience du désert. Arrêt au site archéologique de Tchivinguiro pour découvrir des peintures rupestres anciennes. Explications sur les premiers habitants de la région. Continuation vers la montée de Serra da Leba, cette fois-ci en sens inverse, avec de nouveaux points de vue. Déjeuner pique-nique en route. Après-midi : arrivée à Lubango et installation à votre hôtel. Temps libre pour se reposer ou dernières découvertes personnelles de la ville. En fin de journée, session de synthèse avec votre guide sur l'expérience du Grand Sud. Dîner libre. Nuit à l'hôtel à Lubango.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Traversée retour - Peintures rupestres - Montée Serra da Leba - Installation Lubango - Synthèse
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Retour Lubango" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Dernière journée à Lubango */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DERNIÈRE JOURNÉE À LUBANGO</span>
                          <span className="text-sm text-gray-600">Synthèse et dernières découvertes, préparation retour vers Luanda</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de synthèse</h4>
                            <p className="text-justify mb-4">
                              Matinée libre à Lubango selon les préférences du groupe : retour sur un site apprécié, visite complémentaire de la ville, ou temps libre pour les achats de souvenirs (artisanat local, café de la région). Déjeuner libre. Après-midi : préparation des bagages et transfert à l'aéroport de Lubango pour le vol retour vers Luanda. Arrivée à Luanda et transfert à votre hôtel. Installation. Dîner de clôture du voyage dans un restaurant de spécialités angolaises, avec retour sur les expériences vécues dans le Grand Sud. Nuit à l'hôtel à Luanda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Matinée libre - Préparation départ - Vol Lubango-Luanda - Transfert hôtel - Dîner de clôture
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lubango" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 13 - Journée libre à Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(13)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          13
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">JOURNÉE LIBRE À LUANDA</span>
                          <span className="text-sm text-gray-600">Dernières découvertes de la capitale selon vos centres d'intérêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 13 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 13 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée au choix</h4>
                            <p className="text-justify mb-4">
                              Journée libre à Luanda pour des découvertes selon vos centres d'intérêt. Plusieurs options sont possibles (non incluses dans le prix) : visite du musée des Forces Armées et du mausolée d'Agostinho Neto ; excursion à l'île de Luanda avec ses plages et restaurants ; shopping dans les centres commerciaux modernes de la capitale ; visite du marché d'artisanat pour les derniers souvenirs. Votre guide reste à votre disposition pour conseils et organisation. Déjeuner libre. Après-midi : continuation des visites ou temps libre pour se reposer. En fin de journée, préparation des bagages pour le départ international du lendemain. Dîner libre. Nuit à l'hôtel à Luanda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Journée libre au choix - Options visites - Shopping - Préparation bagages - Dîner libre
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Luanda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 14 - Départ de Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(14)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          14
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE LUANDA</span>
                          <span className="text-sm text-gray-600">Fin du voyage, transfert à l'aéroport international</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 14 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 14 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international, matinée libre pour les derniers achats de souvenirs à Luanda (artisanat, café, épices). Déjeuner libre. En fonction de l'horaire de votre vol, transfert à l'aéroport international Quatro de Fevereiro de Luanda. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette découverte complète du Grand Sud angolais : la falaise vertigineuse de Tundavala, la route légendaire de Serra da Leba, le désert côtier unique de Moçâmedes avec sa flore millénaire, les plages sauvages de l'Atlantique, et les rencontres authentiques avec le peuple Mucubal et les habitants accueillants du sud.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Petit-déjeuner - Temps libre / achats - Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport Luanda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Galerie supplémentaire de l'itinéraire */}
                <div className="mt-12 pt-8 border-t-2 border-gray-300">
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts du Voyage</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tundavala" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Serra da Leba" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plages" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experiences' && (
              <div>
                {/* Section dédiée aux expériences */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏔️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-600">Les Expériences du Grand Sud</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce voyage est une immersion complète dans les paysages spectaculaires et les cultures authentiques du sud angolais. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région aux contrastes saisissants, des montagnes vertigineuses au désert côtier unique.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tundavala" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Serra da Leba" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-blue-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-blue-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-blue-600">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
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
                            <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                              <img 
                                src={
                                  exp.id === 'lubango' 
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'tundavala'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'serraleba'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'lubango' ? -14.917 : 
                                   exp.id === 'tundavala' ? -14.82 :
                                   exp.id === 'serraleba' ? -14.85 :
                                   -15.75} 
                              lng={exp.id === 'lubango' ? 13.492 : 
                                   exp.id === 'tundavala' ? 13.35 :
                                   exp.id === 'serraleba' ? 13.1 :
                                   12.15} 
                              height="200px" 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Paysages et Cultures</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Tundavala" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Falaise de Tundavala</h5>
                          <p className="text-sm text-gray-700">Vue vertigineuse à 2 200m d'altitude</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                          alt="Désert" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Désert de Moçâmedes</h5>
                          <p className="text-sm text-gray-700">Dunes côtières uniques au monde</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?w=600" 
                          alt="Serra da Leba" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Route de Serra da Leba</h5>
                          <p className="text-sm text-gray-700">Prouesse d'ingénierie à travers les montagnes</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Désert" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Montagnes" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Tundavala" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-cyan-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Survol en ULM de la falaise de Tundavala</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience aérienne unique au-dessus de la falaise. Supplément : 180€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit bivouac dans le désert</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience d'une nuit sous les étoiles du désert de Moçâmedes. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier photographique professionnel</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Accompagnement par un photographe professionnel. Supplément : 200€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Extension plongée avec tuba à Tombwa</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Découverte des fonds marins de la côte sud. Supplément : 120€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Activités optionnelles" 
                          className="w-full h-full object-cover"
                        />
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU VOYAGE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels Confortables et Lodges Authentiques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                      <span className="text-blue-600 text-2xl">🏨</span>
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Luanda" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Lubango" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Namibe" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce voyage privilégie des hébergements confortables et bien situés pour profiter au maximum de votre séjour dans le Grand Sud. À Luanda, Lubango et Namibe, vous séjournerez dans des hôtels 3* et 4* offrant tout le confort moderne. Ces établissements sont choisis pour leur emplacement pratique, leur qualité de service et leur ambiance agréable. Tous offrent des chambres climatisées (ou chauffées selon besoin) avec salle de bain privée, wifi, et des restaurants proposant une cuisine locale et internationale. Une nuit est prévue dans un lodge authentique au pied de la Serra da Leba pour une immersion dans la nature.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('luanda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'luanda' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUANDA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('lubango')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lubango' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUBANGO (5 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('namibe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'namibe' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      NAMIBE (4 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Luanda */}
                  {activeHotelTab === 'luanda' && (
                    <div className="space-y-16">
                      {/* Hotel Presidente Luanda */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                                alt="Hotel Presidente Luanda" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Presidente Luanda</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baie de Luanda, Luanda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Vue sur la baie de Luanda</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Spa et fitness</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Presidente Luanda est un établissement moderne situé en front de mer avec une vue magnifique sur la baie de Luanda. Les chambres spacieuses sont climatisées et équipées de lits confortables, salle de bain privée, wifi haute vitesse, et minibar. L'hôtel dispose de deux restaurants (cuisine internationale et spécialités angolaises), d'un bar avec terrasse sur la baie, d'une piscine, d'un spa et d'une salle de fitness. Son emplacement est idéal pour découvrir Luanda à pied. Service de qualité et personnel francophone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lubango */}
                  {activeHotelTab === 'lubango' && (
                    <div className="space-y-16">
                      {/* Hotel Serra da Chela */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?w=600" 
                              alt="Hotel Serra da Chela" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Serra da Chela</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Lubango, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Lubango</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏔️</span>
                                <span className="text-sm font-semibold">Vue sur les montagnes</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant gastronomique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Chauffage (climat tempéré)</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Serra da Chela est l'hôtel de référence de Lubango, situé en plein centre-ville avec vue sur les montagnes environnantes. Les chambres sont confortables avec chauffage (nécessaire à cette altitude), salle de bain privée, TV satellite et wifi. L'hôtel dispose d'un restaurant gastronomique proposant une fusion de cuisine angolaise et internationale, d'un bar cosy avec cheminée, et d'un salon de lecture. Le personnel est attentif et parle français. L'emplacement est pratique pour découvrir Lubango à pied et se trouve à proximité des principaux sites d'intérêt. Un hébergement idéal pour explorer la région de Huíla.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Lodge Serra da Leba */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                              alt="Lodge Serra da Leba" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Lodge Serra da Leba</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Pied de la Serra da Leba, Province de Huíla, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Au pied des montagnes</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Cadre naturel préservé</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛖</span>
                                <span className="text-sm font-semibold">Chalets en matériaux locaux</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp le soir</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Lodge Serra da Leba offre une expérience d'immersion dans la nature au pied de la célèbre route de montagne. Les chalets sont construits en matériaux locaux, avec un style rustique mais confortable. Chaque chalet dispose d'un lit confortable, d'une salle de bain privée avec eau chaude, et d'une terrasse avec vue sur les montagnes. Le lodge propose des repas préparés avec des produits locaux, servis dans un restaurant avec terrasse panoramique. Le soir, un feu de camp est organisé pour partager les expériences de la journée. Une nuit magique au cœur des paysages spectaculaires du sud angolais.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Namibe */}
                  {activeHotelTab === 'namibe' && (
                    <div className="space-y-16">
                      {/* Hotel Miramar Namibe */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                                alt="Hotel Miramar Namibe" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Miramar Namibe</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Front de mer, Namibe, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Vue sur l'océan Atlantique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Accès direct à la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌀</span>
                                <span className="text-sm font-semibold">Climatisation</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar Namibe est situé en front de mer avec une vue directe sur l'océan Atlantique. Les chambres sont climatisées (nécessaire sous ce climat) et équipées de lits confortables, salle de bain privée, TV satellite, et wifi. L'hôtel dispose d'un restaurant spécialisé dans les fruits de mer frais, d'un bar avec terrasse face à l'océan, et d'un accès direct à la plage. L'emplacement est idéal pour explorer Namibe à pied et sert de base parfaite pour les excursions dans le désert de Moçâmedes. Service attentif et personnel connaissant bien la région.
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
                  <span className="text-2xl">🏔️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Voyage</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tundavala" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Falaise spectaculaire de Tundavala dans le Grand Sud</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-600">$4,199</span>
                    <span className="text-xl line-through text-gray-500">$3,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Voyage complet</div>
                  <div className="mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Vol Luanda-Lubango aller-retour, guide francophone spécialiste, hébergements, tous repas, véhicule 4x4, visites
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Réservez avant le 30 juin 2026 et économisez 200$ par personne
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-04-05">5 Avril 2026</option>
                    <option value="2026-05-03">3 Mai 2026</option>
                    <option value="2026-05-31">31 Mai 2026</option>
                    <option value="2026-06-28">28 Juin 2026</option>
                    <option value="2026-07-26">26 Juillet 2026</option>
                    <option value="2026-08-23">23 Août 2026</option>
                    <option value="2026-09-20">20 Septembre 2026</option>
                    <option value="2026-10-18">18 Octobre 2026</option>
                    <option value="2026-11-15">15 Novembre 2026</option>
                    <option value="2026-12-13">13 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période : avril à novembre (climat favorable)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>GRAND TOUR EXCLUSIF</strong> limité à 8 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste du Grand Sud</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-600 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-500 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur le voyage ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts du Grand Sud angolais vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-18.0,20.0,-12.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Grand Sud miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Grand Sud angolais - 14 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Luanda → Vol → Lubango → Namibe → Désert
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
                    <span>Vol Luanda-Lubango aller-retour</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste Grand Sud</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>13 nuits en hôtels 3*/4* et lodge</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Véhicule 4x4 tout au long du circuit</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Désert" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du voyage</span>
                    <span className="font-bold text-blue-600">Moyen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-blue-600">14 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Meilleure période</span>
                    <span className="font-bold text-blue-600">Avril à novembre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-blue-600">Paysages et cultures</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-blue-600">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens (zones côtières)
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616c113a1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Témoignage Voyageur</h4>
                    <p className="text-xs text-gray-600">Jean-Luc M., photographe 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un voyage exceptionnel dans des paysages à couper le souffle. La falaise de Tundavala est probablement l'une des vues les plus spectaculaires que j'ai vues en Afrique. Le désert de Moçâmedes, avec ses dunes qui descendent jusqu'à l'océan, est unique au monde. Les rencontres avec le peuple Mucubal ont été authentiques et enrichissantes. Les guides étaient extraordinaires, connaissant parfaitement la région et ses secrets. L'organisation était impeccable malgré les défis logistiques. Un voyage pour les amateurs de grands espaces et de photographie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Galerie Photographique du Grand Sud</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Tundavala 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Désert 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Serra da Leba 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plages 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}