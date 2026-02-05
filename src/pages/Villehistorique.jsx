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
        <h4 className="font-semibold text-center text-lg">Itinéraire Historique du Nord-Kivu</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.0,-1.0,30.0,0.5&layer=mapnik&marker=-1.6791,29.2250&marker=0.1500,29.2833"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit Villes Historiques du Nord-Kivu"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/0.000/29.000" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Goma</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Rutshuru</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Beni</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lubero</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Butembo</span>
        </div>
      </div>
    </div>
  );
};

export default function Villehistorique() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('goma');
  const [activeExperienceTab, setActiveExperienceTab] = useState('histoire');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏛️', title: 'Architecture Coloniale', desc: 'Découverte du patrimoine architectural préservé' },
    { icon: '📜', title: 'Histoire du Kivu', desc: 'Plongée dans l\'histoire mouvementée de la région' },
    { icon: '👑', title: 'Royautés Traditionnelles', desc: 'Rencontre avec les autorités coutumières' },
    { icon: '🕌', title: 'Patrimoine Religieux', desc: 'Visite des lieux de culte historiques' },
    { icon: '🏘️', title: 'Quartiers Historiques', desc: 'Exploration des vieux quartiers urbains' },
    { icon: '🛤️', title: 'Routes Historiques', desc: 'Parcours sur les anciennes voies commerciales' },
  ];

  const regions = [
    { 
      name: 'Goma', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Porte d\'entrée historique du Nord-Kivu sur le lac Kivu',
      features: ['Arrivée circuit', 'Histoire coloniale', 'Architecture', 'Point de départ']
    },
    { 
      name: 'Rutshuru', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Ville historique au cœur du conflit, riche en patrimoine',
      features: ['Histoire militaire', 'Monuments', 'Témoignages', 'Reconstruction']
    },
    { 
      name: 'Beni', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Ville commerçante historique aux influences multiples',
      features: ['Architecture coloniale', 'Commerce historique', 'Culture mixte', 'Patrimoine']
    },
    { 
      name: 'Lubero', 
      color: 'bg-lime-100', 
      textColor: 'text-lime-800', 
      desc: 'Territoire des Nande avec traditions préservées',
      features: ['Royautés traditionnelles', 'Culture Nande', 'Histoire locale', 'Traditions']
    },
    { 
      name: 'Butembo', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Capitale économique du Nord-Kivu, ville historique',
      features: ['Architecture', 'Histoire économique', 'Culture urbaine', 'Fin circuit']
    },
  ];

  const experiences = [
    { 
      id: 'histoire',
      name: 'Histoire Coloniale', 
      icon: '🏛️',
      desc: 'Découverte de l\'héritage colonial et de l\'architecture de l\'époque',
      highlights: ['Architecture coloniale', 'Histoire belge', 'Monuments historiques', 'Témoignages'],
      details: 'Le Nord-Kivu conserve un riche patrimoine architectural et historique de l\'époque coloniale belge. Vous découvrirez les bâtiments administratifs, les maisons de colons, les églises et les infrastructures datant du début du 20ème siècle. À travers des visites guidées et des rencontres avec des historiens locaux, vous comprendrez l\'impact de la colonisation sur le développement urbain de la région. Chaque ville visitée présente des spécificités architecturales témoignant de son histoire particulière.'
    },
    { 
      id: 'conflits',
      name: 'Histoire des Conflits', 
      icon: '⚔️',
      desc: 'Compréhension des conflits récents et processus de reconstruction',
      highlights: ['Histoire militaire', 'Processus paix', 'Reconstruction', 'Mémoire'],
      details: 'Le Nord-Kivu a été marqué par des décennies de conflits armés. Ce circuit aborde cette histoire complexe avec sensibilité et pédagogie. Vous visiterez des lieux significatifs, rencontrerez des acteurs de la paix, et découvrirez les efforts de reconstruction. Des témoignages de personnes ayant vécu ces périodes troubles vous permettront de comprendre la résilience des populations locales. L\'accent est mis sur les initiatives de réconciliation et de développement post-conflit.'
    },
    { 
      id: 'traditions',
      name: 'Traditions Nande', 
      icon: '👑',
      desc: 'Immersion dans la culture et les traditions du peuple Nande',
      highlights: ['Royautés traditionnelles', 'Culture Nande', 'Coutumes', 'Organisation sociale'],
      details: 'Le peuple Nande, majoritaire dans le Nord-Kivu, possède une riche culture traditionnelle préservée malgré les bouleversements modernes. Vous rencontrerez des autorités coutumières (mwami), découvrirez l\'organisation sociale traditionnelle, et apprendrez les coutumes et rites. Vous visiterez des lieux de pouvoir traditionnel et assisterez à des démonstrations culturelles. Cette immersion vous permettra de comprendre comment traditions anciennes et modernité coexistent dans la région.'
    },
    { 
      id: 'economie',
      name: 'Histoire Économique', 
      icon: '💰',
      desc: 'Découverte du développement économique historique du Nord-Kivu',
      highlights: ['Commerce historique', 'Exploitation minière', 'Agriculture', 'Développement urbain'],
      details: 'Le Nord-Kivu a toujours été une région économiquement dynamique. Vous découvrirez l\'histoire du commerce transfrontalier, de l\'exploitation minière (or, coltan), et de l\'agriculture commerciale. Les villes de Beni et Butembo sont particulièrement intéressantes pour comprendre le développement économique régional. Vous visiterez des marchés historiques, des sites d\'exploitation minière artisanale (dans le respect des règles de sécurité), et rencontrerez des acteurs économiques locaux.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇨🇩</span>
          <span>ESCAPES | RÉPUBLIQUE DÉMOCRATIQUE DU CONGO</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Villes Historiques du Nord-Kivu</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🏛️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              11 jours à la découverte du patrimoine historique et architectural du Nord-Kivu
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">11</div>
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
            <span className="text-2xl">📜</span>
            <span className="text-sm font-semibold">RDC | HISTOIRE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Architecture historique" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Architecture coloniale préservée à Butembo</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Ville historique" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Rues historiques de Beni</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Patrimoine culturel" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Patrimoine culturel préservé</p>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">HISTOIRE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC9</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">11 jours - Goma à Butembo</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600 font-semibold">SAISON: NOV-FÉV</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une plongée dans l\'histoire riche et complexe du Nord-Kivu</span>
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
                {/* Galerie d'images descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Architecture coloniale" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Architecture coloniale préservée à Butembo</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Ville historique" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Quartiers historiques de Beni</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit historique de 11 jours vous emmène à la découverte du riche patrimoine des villes du Nord-Kivu. De Goma à Butembo, en passant par Rutshuru, Beni et Lubero, vous plongerez dans l'histoire complexe de cette région, marquée par la colonisation, les conflits, et une riche culture traditionnelle. Une immersion dans le passé pour comprendre le présent du Nord-Kivu.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Goma, porte d'entrée historique sur le lac Kivu. Vous explorerez ensuite Rutshuru et son histoire militaire, puis Beni avec son architecture coloniale préservée. Vous découvrirez Lubero et les traditions du peuple Nande, avant de terminer à Butembo, capitale économique du Nord-Kivu. Un itinéraire complet qui combine découverte architecturale, compréhension historique et rencontres culturelles.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Patrimoine historique" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Patrimoine historique préservé malgré les épreuves</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux souhaitant comprendre l'histoire complexe du Nord-Kivu. Entre visites de sites historiques, rencontres avec des témoins de l'histoire, découverte de l'architecture coloniale, et immersion dans les traditions locales, vous vivrez une expérience riche et nuancée. Accompagné de guides historiens spécialistes de la région, vous découvrirez une histoire souvent méconnue mais essentielle pour comprendre la région.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts du Circuit Historique</h3>
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
                  
                  {/* Images supplémentaires */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Monument historique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Ville historique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Histoire" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">HISTOIRE EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Villes historiques visitées</div>
                        <div className="text-3xl font-bold">5</div>
                        <div className="text-xs text-white/80">de Goma à Butembo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Période historique couverte</div>
                        <div className="text-3xl font-bold">100+</div>
                        <div className="text-xs text-white/80">années d\'histoire</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Monuments visités</div>
                        <div className="text-3xl font-bold">15+</div>
                        <div className="text-xs text-white/80">sites historiques</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Rencontres historiques</div>
                        <div className="text-3xl font-bold">10+</div>
                        <div className="text-xs text-white/80">avec témoins et experts</div>
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
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Carte historique" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Historique du Nord-Kivu</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit historique vous emmène à travers les principales villes du Nord-Kivu, chacune avec son histoire spécifique. Vous suivrez les routes historiques qui ont relié ces villes depuis l\'époque coloniale, découvrant comment elles se sont développées et transformées au fil du temps. Le parcours combine trajets en véhicule pour les longues distances et explorations à pied dans les centres historiques. Chaque ville révèle une facette différente de l\'histoire complexe du Nord-Kivu.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-green-700 font-bold">~350 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Transports</div>
                            <div className="text-green-700 font-bold">Véhicule 4x4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Saison idéale</div>
                            <div className="text-green-700 font-bold">Novembre-Février</div>
                          </div>
                          <div>
                            <div className="font-semibold">Visites historiques</div>
                            <div className="text-green-700 font-bold">20+ sites</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Préparation */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau facile à modéré (2/5)</strong> : Ce circuit historique ne comporte pas d\'efforts physiques importants. Les déplacements se font principalement en véhicule avec quelques explorations à pied dans les villes. Une condition générale normale est suffisante. L\'âge minimum recommandé est de 15 ans. Une certaine maturité est nécessaire pour aborder les aspects historiques parfois difficiles.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Condition générale normale</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 15 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Maturité pour sujets historiques</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Curiosité historique</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Recommandations</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>📚</span>
                              <span>Lecture historique préalable</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎤</span>
                              <span>Respect lors des témoignages</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📸</span>
                              <span>Demander avant photographier</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💬</span>
                              <span>Écoute active et questions</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📝</span>
                              <span>Carnet de notes recommandé</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🤝</span>
                              <span>Respect des sensibilités</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Préparation historique" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Goma */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À GOMA</span>
                          <span className="text-sm text-gray-600">Introduction à l\'histoire du Nord-Kivu</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l\'aéroport international de Goma. Accueil par votre guide historien francophone spécialiste du Nord-Kivu. Transfert à votre hôtel. Installation et repos. Après-midi : première introduction à l\'histoire du Nord-Kivu avec une visite des sites historiques de Goma : les bâtiments coloniaux préservés, le quartier administratif historique, et les traces de l\'éruption volcanique de 2002. Briefing sur le circuit historique à venir. Dîner de bienvenue avec spécialités locales. Nuit à l\'hôtel à Goma.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Introduction historique Goma - Briefing - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Goma historique" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Goma historique */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">GOMA HISTORIQUE</span>
                          <span className="text-sm text-gray-600">Exploration approfondie du patrimoine de Goma</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée découverte Goma</h4>
                            <p className="text-justify mb-4">
                              Journée complète d\'exploration du patrimoine historique de Goma. Visite du musée de Goma retraçant l\'histoire de la ville et de la région. Découverte des différents quartiers historiques : le centre colonial, les anciennes missions, les premiers établissements commerciaux. Rencontre avec des historiens locaux et des témoins de l\'histoire récente de Goma. Déjeuner dans un restaurant historique. Après-midi : visite des sites liés à l\'histoire récente (conflits, éruptions volcaniques). Dîner et nuit à Goma.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite musée Goma - Quartiers historiques - Rencontre historiens - Sites historiques
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Musée Goma" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers Rutshuru */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS RUTSHURU</span>
                          <span className="text-sm text-gray-600">Découverte de l\'histoire militaire de la région</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée route et histoire militaire</h4>
                            <p className="text-justify mb-4">
                              Départ de Goma en direction de Rutshuru (environ 2-3 heures de route). Arrêts en cours de route pour visiter des sites historiques liés aux conflits récents. Arrivée à Rutshuru, installation à l\'hébergement. Déjeuner. Après-midi : découverte de l\'histoire militaire de Rutshuru. Visite des sites significatifs, rencontre avec des acteurs de la paix et des anciens combattants. Compréhension des processus de réconciliation et de reconstruction. Dîner et nuit à Rutshuru.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Goma-Rutshuru - Sites historiques conflits - Installation - Histoire militaire Rutshuru - Rencontres paix
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Rutshuru" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Rutshuru historique */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RUTSHURU HISTORIQUE</span>
                          <span className="text-sm text-gray-600">Patrimoine et reconstruction</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée patrimoine Rutshuru</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à la découverte du patrimoine historique de Rutshuru au-delà de l\'aspect militaire. Visite des bâtiments coloniaux préservés, des missions historiques, et des sites traditionnels. Rencontre avec les autorités coutumières pour comprendre l\'histoire précoloniale de la région. Déjeuner avec spécialités locales. Après-midi : découverte des initiatives de reconstruction et de préservation du patrimoine. Visite de projets communautaires visant à préserver la mémoire historique. Dîner et nuit à Rutshuru.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Patrimoine colonial Rutshuru - Rencontre autorités coutumières - Initiatives reconstruction - Projets mémoire
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Patrimoine Rutshuru" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route vers Beni */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS BENI</span>
                          <span className="text-sm text-gray-600">Découverte de l\'architecture coloniale préservée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée route et architecture</h4>
                            <p className="text-justify mb-4">
                              Départ de Rutshuru en direction de Beni (environ 3-4 heures de route). Arrêts en cours de route pour visiter des sites historiques et des villages traditionnels. Arrivée à Beni, installation à l\'hébergement. Déjeuner. Après-midi : première découverte de l\'architecture coloniale de Beni, réputée pour son état de conservation. Visite des principaux bâtiments historiques, des anciennes administrations, et des maisons de colons. Dîner et nuit à Beni.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Rutshuru-Beni - Sites historiques - Installation Beni - Architecture coloniale
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Beni architecture" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Beni historique */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BENI HISTORIQUE</span>
                          <span className="text-sm text-gray-600">Histoire commerciale et culturelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée histoire commerciale</h4>
                            <p className="text-justify mb-4">
                              Journée complète d\'exploration de l\'histoire commerciale et culturelle de Beni. Visite du marché historique, découverte de l\'histoire du commerce transfrontalier avec l\'Ouganda. Rencontre avec des commerçants historiques et leurs descendants. Déjeuner dans un restaurant traditionnel. Après-midi : visite des sites culturels et religieux historiques (églises, mosquées, centres culturels). Compréhension du melting pot culturel de Beni. Dîner et nuit à Beni.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Histoire commerciale Beni - Marché historique - Rencontre commerçants - Sites culturels - Histoire religieuse
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Commerce Beni" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Route vers Lubero */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS LUBERO</span>
                          <span className="text-sm text-gray-600">Immersion dans la culture Nande</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée route et culture Nande</h4>
                            <p className="text-justify mb-4">
                              Départ de Beni en direction de Lubero (environ 2-3 heures de route). Arrêts dans des villages Nande pour découvrir l\'architecture traditionnelle et les modes de vie. Arrivée à Lubero, installation à l\'hébergement. Déjeuner avec spécialités Nande. Après-midi : première immersion dans la culture Nande. Rencontre avec les autorités coutumières, découverte de l\'organisation sociale traditionnelle. Visite des sites historiques Nande. Dîner et nuit à Lubero.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Beni-Lubero - Villages Nande - Installation - Culture Nande - Rencontre autorités
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Culture Nande" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Lubero historique */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LUBERO HISTORIQUE</span>
                          <span className="text-sm text-gray-600">Traditions et histoire locale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée traditions Nande</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à la découverte approfondie des traditions et de l\'histoire locale de Lubero. Visite des sites traditionnels importants (lieux de culte, sites d\'initiation). Participation à des activités culturelles (selon saison et disponibilités). Déjeuner traditionnel. Après-midi : rencontre avec des gardiens de la tradition, écoute de récits historiques transmis oralement. Compréhension de l\'histoire précoloniale de la région. Dîner et nuit à Lubero.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Sites traditionnels Lubero - Activités culturelles - Rencontre gardiens traditions - Histoire orale
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Traditions Lubero" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Route vers Butembo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS BUTEMBO</span>
                          <span className="text-sm text-gray-600">Arrivée dans la capitale économique du Nord-Kivu</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée route et arrivée Butembo</h4>
                            <p className="text-justify mb-4">
                              Départ de Lubero en direction de Butembo (environ 2-3 heures de route). Arrêts pour visiter des sites historiques sur la route commerciale historique. Arrivée à Butembo, installation à l\'hébergement. Déjeuner. Après-midi : première découverte de Butembo, capitale économique du Nord-Kivu. Visite des principaux sites historiques et architecturaux. Première approche de l\'histoire économique de la ville. Dîner et nuit à Butembo.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Lubero-Butembo - Sites historiques route - Installation Butembo - Première découverte historique
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Butembo" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Butembo historique */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BUTEMBO HISTORIQUE</span>
                          <span className="text-sm text-gray-600">Patrimoine architectural et histoire économique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée patrimoine Butembo</h4>
                            <p className="text-justify mb-4">
                              Journée complète d\'exploration du patrimoine historique de Butembo. Visite des bâtiments coloniaux exceptionnellement bien préservés, découverte de l\'architecture unique de la ville. Rencontre avec des historiens locaux et des acteurs économiques pour comprendre le développement historique de Butembo. Déjeuner dans un restaurant historique. Après-midi : visite des sites culturels et religieux. Synthèse de l\'ensemble du circuit historique. Dîner d\'adieu de fin de circuit. Nuit à Butembo.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Architecture coloniale Butembo - Rencontre historiens - Histoire économique - Sites culturels - Synthèse circuit
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Architecture Butembo" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Retour international */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR INTERNATIONAL</span>
                          <span className="text-sm text-gray-600">Transfert à l\'aéroport et départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l\'hébergement. Selon l\'horaire de votre vol international (vol depuis l\'aéroport de Butembo ou retour à Goma), transfert à l\'aéroport en fonction des horaires. Assistance aux formalités d\'embarquement. Fin de nos services. Vous emportez avec vous une compréhension approfondie de l\'histoire complexe du Nord-Kivu : de l\'architecture coloniale préservée à l\'histoire des conflits récents, en passant par les traditions du peuple Nande. Une immersion historique qui éclaire le présent de cette région fascinante.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
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
                      <span className="text-white text-2xl">🏛️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Historiques</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit historique vous offre une immersion complète dans le passé du Nord-Kivu. Chaque expérience est conçue pour vous permettre de comprendre les différentes périodes qui ont façonné cette région complexe.
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
                            <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                              <img 
                                src={
                                  exp.id === 'histoire' 
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'conflits'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'traditions'
                                    ? 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'histoire' ? -1.6791 : 
                                   exp.id === 'conflits' ? -1.1840 :
                                   exp.id === 'traditions' ? 0.1500 :
                                   -1.6791} 
                              lng={exp.id === 'histoire' ? 29.2250 : 
                                   exp.id === 'conflits' ? 29.4500 :
                                   exp.id === 'traditions' ? 29.2833 :
                                   29.2250} 
                              height="200px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hébergements */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU CIRCUIT HISTORIQUE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Confort et Immersion Historique</h3>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit historique vous propose des hébergements adaptés à chaque ville visitée. À Goma et Butembo, vous séjournerez dans des hôtels confortables de catégorie 3 étoiles. Dans les autres villes, vous découvrirez des hébergements locaux simples mais propres, permettant une immersion dans la vie locale. Tous les hébergements sont choisis pour leur emplacement pratique pour les visites historiques.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('goma')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'goma' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      GOMA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('rutshuru')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'rutshuru' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      RUTSHURU (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('beni')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'beni' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BENI (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('butembo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'butembo' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BUTEMBO (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Goma */}
                  {activeHotelTab === 'goma' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Goma" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                CONFORT 3*
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel à Goma</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Goma, Nord-Kivu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Goma</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambre confortable</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Petit-déjeuner inclus</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              À Goma, vous séjournerez dans un hôtel de catégorie 3 étoiles offrant un bon confort pour bien commencer votre voyage historique. Les chambres sont équipées de salle de bain privée, climatisation, et wifi. L\'hôtel dispose d\'un restaurant et d\'un personnel attentif. L\'emplacement est idéal pour les visites historiques de Goma.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Rutshuru */}
                  {activeHotelTab === 'rutshuru' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hébergement Rutshuru" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                SIMPLE ET FONCTIONNEL
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Guesthouse à Rutshuru</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Rutshuru, Nord-Kivu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Rutshuru</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambre simple mais propre</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Repas locaux inclus</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              À Rutshuru, vous séjournerez dans une guesthouse locale simple mais propre. Les chambres sont basiques mais fonctionnelles, avec salle de bain privée. Les repas sont préparés avec des produits locaux. L\'hébergement est idéalement situé pour les visites historiques de Rutshuru et permet une immersion dans la vie locale.
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
                  <span className="text-2xl">🏛️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Voyage Historique</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Histoire Nord-Kivu" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Découverte du patrimoine historique du Nord-Kivu</p>
                  </div>
                </div>
                
                {/* Prix avec vol inclus */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$3,899</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit historique complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur mentionné, tous transferts, guide historien, hébergements, repas selon programme
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ✈️ VOL INTÉRIEUR INCLUS : Transfert aérien facilité pour votre itinéraire
                  </div>
                  <div className="mt-2 text-xs bg-blue-50 text-blue-700 p-2 rounded">
                    📅 SAISON IDÉALE : Novembre à Février
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
                    <option value="2026-11-11">11 Novembre 2026</option>
                    <option value="2026-12-02">2 Décembre 2026</option>
                    <option value="2026-12-23">23 Décembre 2026</option>
                    <option value="2027-01-13">13 Janvier 2027</option>
                    <option value="2027-02-03">3 Février 2027</option>
                    <option value="2027-02-24">24 Février 2027</option>
                    <option value="2027-11-10">10 Novembre 2027</option>
                    <option value="2027-12-01">1 Décembre 2027</option>
                    <option value="2027-12-22">22 Décembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de novembre à février (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>VOYAGE HISTORIQUE</strong> limité à 8 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide historien spécialiste du Nord-Kivu</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur le voyage historique ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts histoire vous conseillent.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONTACTER UN EXPERT
                  </button>
                </div>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Services Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Vol intérieur mentionné dans l'itinéraire</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide historien francophone</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>10 nuits en hébergement selon programme</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Repas selon programme détaillé</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres et aéroportuaires</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites historiques et entrées selon programme</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Histoire" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                    <span>Durée totale</span>
                    <span className="font-bold text-green-700">11 jours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs saison</span>
                    <span className="font-bold text-green-700">Novembre-Février</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-green-700">Historien spécialiste</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
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