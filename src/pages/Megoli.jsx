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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Mégalithes de l'Ouest</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,4.0,18.0,6.5&layer=mapnik&marker=4.3947,18.5582&marker=5.95,15.6"
          style={{ border: 0 }}
          allowFullScreen
          title="Mégalithes de l'Ouest - Centrafrique"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/5.0/16.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Bangui</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-700 border-2 border-gray-300"></span>
          <span className="text-sm">Mégalithes de Bouar</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Site de Ndélé</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Traditions Gbaya</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Forêts Sacrées</span>
        </div>
      </div>
    </div>
  );
};

export default function Megoli() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bangui');
  const [activeExperienceTab, setActiveExperienceTab] = useState('megolithes');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🗿', title: 'Mégalithes Mystérieux', desc: 'Découverte des mystérieux alignements de pierres de Bouar' },
    { icon: '👑', title: 'Traditions Gbaya', desc: 'Rencontre avec le peuple Gbaya, gardien des traditions' },
    { icon: '🏛️', title: 'Archéologie', desc: 'Exploration de sites archéologiques uniques en Afrique centrale' },
    { icon: '🌳', title: 'Forêts Sacrées', desc: 'Visite des forêts sacrées où se déroulent les rites traditionnels' },
    { icon: '🎭', title: 'Danses Rituelles', desc: 'Participation aux danses et cérémonies traditionnelles' },
    { icon: '🚙', title: 'Aventure', desc: 'Traversée des paysages sauvages de l\'ouest centrafricain' },
  ];

  const regions = [
    { 
      name: 'Bangui', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Point de départ de l\'expédition vers les mystères de l\'ouest',
      features: ['Préparation', 'Musée archéologique', 'Briefing', 'Départ']
    },
    { 
      name: 'Bouar', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Ville principale de l\'ouest, proche des principaux sites mégalithiques',
      features: ['Alignements de pierres', 'Traditions Gbaya', 'Marché local', 'Centre archéologique']
    },
    { 
      name: 'Sites Mégalithiques', 
      color: 'bg-stone-100', 
      textColor: 'text-stone-800', 
      desc: 'Alignements énigmatiques de pierres dressées datant de plusieurs millénaires',
      features: ['Pierre debout', 'Cercle de pierres', 'Alignements', 'Tombes anciennes']
    },
    { 
      name: 'Terre Gbaya', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Territoire du peuple Gbaya, détenteur des traditions orales sur les mégalithes',
      features: ['Chefferies traditionnelles', 'Danses rituelles', 'Artisanat', 'Traditions orales']
    },
    { 
      name: 'Forêts Sacrées', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Bosquets sacrés où se pratiquent les cérémonies traditionnelles',
      features: ['Rites initiatiques', 'Arbres sacrés', 'Autels traditionnels', 'Esprits de la forêt']
    },
    { 
      name: 'Site de Ndélé', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Important site archéologique avec ses pierres gravées et ses tumulus',
      features: ['Pierres gravées', 'Tumulus funéraires', 'Vestiges archéologiques', 'Point de vue']
    },
  ];

  const experiences = [
    { 
      id: 'megolithes',
      name: 'Mégalithes de Bouar', 
      icon: '🗿',
      desc: 'Exploration des mystérieux alignements de pierres de l\'ouest centrafricain',
      highlights: ['Alignements énigmatiques', 'Pierres dressées', 'Sites archéologiques', 'Mystères anciens'],
      details: 'Les mégalithes de Bouar constituent l\'un des plus grands mystères archéologiques d\'Afrique centrale. Ces alignements de pierres dressées, parfois organisés en cercles ou en lignes, datent probablement de plusieurs millénaires. Leur fonction exacte reste inconnue : tombes, marqueurs territoriaux, observatoires astronomiques ou sites rituels ? Vous explorerez plusieurs de ces sites avec un guide archéologue qui vous expliquera les différentes théories et vous montrera les techniques d\'étude de ces monuments énigmatiques.'
    },
    { 
      id: 'gbaya',
      name: 'Traditions Gbaya', 
      icon: '👑',
      desc: 'Rencontre avec le peuple Gbaya, détenteur des traditions orales sur les mégalithes',
      highlights: ['Peuple Gbaya', 'Traditions orales', 'Chefferies traditionnelles', 'Rites ancestraux'],
      details: 'Le peuple Gbaya est l\'un des principaux groupes ethniques de l\'ouest centrafricain. Depuis des siècles, ils sont les gardiens des traditions orales concernant les mégalithes. Vous rencontrerez des anciens du village qui partageront avec vous les légendes et histoires transmises de génération en génération. Vous assisterez à des cérémonies traditionnelles, découvrirez l\'organisation sociale des chefferies Gbaya et participerez à la vie quotidienne d\'un village. Une immersion profonde dans une culture africaine authentique.'
    },
    { 
      id: 'forets',
      name: 'Forêts Sacrées', 
      icon: '🌳',
      desc: 'Visite des bosquets sacrés où se pratiquent les rites traditionnels et initiatiques',
      highlights: ['Bosquets sacrés', 'Rites initiatiques', 'Arbres sacrés', 'Esprits de la nature'],
      details: 'Les forêts sacrées sont des lieux essentiels dans la cosmogonie Gbaya. Ces bosquets préservés abritent les esprits des ancêtres et servent de cadre aux rites initiatiques et aux cérémonies importantes. Accompagné d\'un guide traditionnel, vous découvrirez ces espaces mystérieux, apprendrez à reconnaître les arbres sacrés et comprendrez leur rôle dans l\'équilibre social et spirituel de la communauté. Ces visites se font dans le plus grand respect des traditions et avec l\'autorisation des autorités traditionnelles.'
    },
    { 
      id: 'art',
      name: 'Art et Artisanat', 
      icon: '🎨',
      desc: 'Découverte de l\'artisanat traditionnel et des expressions artistiques Gbaya',
      highlights: ['Sculpture sur bois', 'Vannerie fine', 'Musique traditionnelle', 'Danses rituelles'],
      details: 'L\'art Gbaya est réputé pour sa sophistication et sa signification symbolique. Vous découvrirez la sculpture sur bois (masques, statues, sièges), la vannerie (paniers aux motifs complexes) et le tissage. Vous participerez également à des sessions de musique et de danse traditionnelles, avec initiation aux instruments locaux comme le balafon, le tam-tam et la sanza. Les artisans vous expliqueront la signification des motifs et des symboles utilisés, véritables langages visuels transmis depuis des générations.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de mégalithes impressionnante */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇨🇫</span>
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Mégalithes et Traditions de l'Ouest Centrafricain</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🗿</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              9 jours d'expédition archéologique et culturelle au cœur des mystères de l'ouest
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">9</div>
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
            <span className="text-2xl">🗺️</span>
            <span className="text-sm font-semibold">RCA | MYSTÈRES ARCHÉOLOGIQUES</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mégalithes de Bouar" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Alignements de pierres mystérieux</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Paysage de l'ouest" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Paysages sauvages de l'ouest</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Traditions Gbaya" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Danses traditionnelles Gbaya</p>
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
                <span className="bg-amber-700 text-white px-3 py-1 font-bold">CULTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA2</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours - Bangui aux Mégalithes de Bouar</span>
                <button className="ml-auto border-2 border-amber-700 text-amber-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-amber-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion archéologique et culturelle unique en Afrique centrale</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-amber-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-amber-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-amber-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-amber-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                      src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Mégalithes de Bouar" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Alignements mystérieux de pierres</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Cérémonie traditionnelle" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Cérémonie traditionnelle Gbaya</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 9 jours vous emmène dans l'ouest mystérieux de la République Centrafricaine, à la découverte des énigmatiques mégalithes de Bouar et des riches traditions du peuple Gbaya. Une expédition archéologique et culturelle unique qui vous plongera au cœur des grands mystères de l'Afrique centrale, dans des paysages de savane et de forêt encore préservés du tourisme de masse.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Bangui, d'où vous prendrez la route vers l'ouest pour rejoindre la région de Bouar. Cette zone est célèbre pour ses alignements de pierres dressées, véritables énigmes archéologiques dont l'origine et la fonction restent partiellement mystérieuses. Vous découvrirez également la culture fascinante du peuple Gbaya, détenteur des traditions orales concernant ces mégalithes, et visiterez les forêts sacrées où se pratiquent les rites ancestraux.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Paysage de savane avec mégalithes" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Les mégalithes de Bouar : mystères de pierre au cœur de l'Afrique</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les amateurs d'archéologie, d'histoire et de cultures traditionnelles. Accompagné de guides spécialisés et d'archéologues, vous explorerez des sites rarement visités, rencontrerez les gardiens des traditions et découvrirez une Afrique authentique, loin des sentiers battus. Une expérience qui vous transportera dans le temps et vous fera réfléchir aux grandes énigmes de l'histoire humaine.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-amber-50 border-l-4 border-amber-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-700">Les Atouts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-700 text-2xl">{item.icon}</span>
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
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Archéologue sur site" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Village traditionnel" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-amber-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Circuit</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Exploration de mégalithes" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Exploration archéologique des mégalithes</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontre avec les Gbaya" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Rencontre avec le peuple Gbaya</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Exploration des mégalithes</strong> énigmatiques de Bouar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Rencontre authentique</strong> avec le peuple Gbaya</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Visite des forêts sacrées</strong> et des sites rituels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Découverte de l'artisanat</strong> traditionnel Gbaya</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Participation aux cérémonies</strong> et danses traditionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Exploration du site</strong> archéologique de Ndélé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Apprentissage des légendes</strong> et traditions orales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Randonnées accompagnées</strong> avec guides spécialisés</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les Mégalithes avec image */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Mégalithes de Bouar" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Les Mégalithes de Bouar : Enigmes de Pierre</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Les mégalithes de Bouar constituent l'un des plus grands mystères archéologiques d'Afrique centrale. Ces alignements de pierres dressées, parfois organisés en cercles ou en lignes, s'étendent sur plusieurs kilomètres dans la région de Bouar. Leur datation est estimée entre le 6ème siècle avant notre ère et le 1er siècle après J.-C., mais leur fonction exacte reste incertaine. S'agissait-il de tombes, de marqueurs territoriaux, d'observatoires astronomiques ou de sites rituels ? Les traditions orales du peuple Gbaya apportent des éléments de réponse, mais de nombreuses questions subsistent. Ces monuments témoignent d'une organisation sociale complexe et de connaissances techniques avancées pour leur époque.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Archéologie</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Culture traditionnelle</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Mystères anciens</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Traditions orales</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Expérience unique</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-amber-700 to-orange-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Mégalithes dans le paysage" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">LES MÉGALITHES DE BOUAR EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Nombre de sites</div>
                        <div className="text-3xl font-bold">70+</div>
                        <div className="text-xs text-white/80">alignements répertoriés</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Âge estimé</div>
                        <div className="text-3xl font-bold">2,600</div>
                        <div className="text-xs text-white/80">ans pour les plus anciens</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Pierres dressées</div>
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-xs text-white/80">monuments mégalithiques</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Jours d'exploration</div>
                        <div className="text-3xl font-bold">6</div>
                        <div className="text-xs text-white/80">sur les sites archéologiques</div>
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
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysage de l'ouest" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Archéologique en Terre Gbaya</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de la capitale Bangui aux confins occidentaux de la République Centrafricaine, dans la région de Bouar, terre des mystérieux mégalithes. Vous traverserez des paysages variés de savane arborée, de forêts galeries et de collines rocheuses. Les journées seront consacrées à l'exploration des sites mégalithiques, à la rencontre des communautés Gbaya, et à la découverte de leurs traditions ancestrales. Les déplacements se font en véhicule 4x4 sur les pistes de brousse et à pied pour accéder aux sites archéologiques.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Sites mégalithiques visités</div>
                            <div className="text-amber-700 font-bold">5+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Communautés rencontrées</div>
                            <div className="text-amber-700 font-bold">4+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Forêts sacrées explorées</div>
                            <div className="text-amber-700 font-bold">3+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides spécialisés</div>
                            <div className="text-amber-700 font-bold">2+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-amber-700">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Bangui' 
                                    ? 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Bouar'
                                    ? 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Sites Mégalithiques'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Terre Gbaya'
                                    ? 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Forêts Sacrées'
                                    ? 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Archéologie et Culture</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mégalithes 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat Gbaya" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt sacrée" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysage de savane" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-amber-700 to-orange-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Bangui</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, route vers l'ouest</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-7</div>
                      <div className="text-sm">Région de Bouar</div>
                      <div className="text-xs opacity-80">Mégalithes, traditions Gbaya, forêts sacrées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8-9</div>
                      <div className="text-sm">Retour Bangui</div>
                      <div className="text-xs opacity-80">Route retour, synthèse, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-orange-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau moyen (3/5)</strong> : Ce circuit comporte des trajets relativement longs en 4x4 sur des pistes parfois difficiles, ainsi que des randonnées d'approche vers les sites archéologiques (1 à 3 heures de marche par jour). Une bonne condition physique générale est nécessaire. Les conditions climatiques en saison sèche (juin à septembre) peuvent être chaudes. L'âge minimum recommandé est de 16 ans.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Bonne condition physique recommandée</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Trajets en 4x4 sur pistes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 16 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Adaptabilité aux conditions de brousse</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de randonnée</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac à dos jour (20-30L)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧥</span>
                              <span>Veste légère contre le froid nocturne</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo avec bon zoom</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire et chapeau</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale personnelle</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🩳</span>
                              <span>Vêtements confortables et respirants</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🔭</span>
                              <span>Jumelles (pour l'observation)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement de voyage" 
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
                          alt="Archéologie sur site" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Archéologique ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-amber-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accès à des sites archéologiques uniques</h4>
                            <p className="text-sm text-gray-700">
                              Les mégalithes de Bouar sont parmi les sites archéologiques les plus énigmatiques d'Afrique.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-amber-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Rencontre authentique avec les Gbaya</h4>
                            <p className="text-sm text-gray-700">
                              Découverte d'une culture africaine authentique avec ses traditions vivantes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-amber-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accompagnement par des spécialistes</h4>
                            <p className="text-sm text-gray-700">
                              Guides archéologues et anthropologues pour une compréhension approfondie.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-amber-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Tourisme responsable et respectueux</h4>
                            <p className="text-sm text-gray-700">
                              Votre voyage contribue à la préservation du patrimoine et au développement local.
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
                  {/* Jour 1 - Arrivée à Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
                          <span className="text-sm text-gray-600">Accueil et préparation de l'expédition</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international M'Poko de Bangui. Accueil par votre guide archéologue francophone. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, visite du Musée National Barthélémy Boganda pour une introduction à l'histoire et à l'archéologie de la République Centrafricaine, avec focus sur les mégalithes de Bouar. Briefing détaillé sur l'expédition à venir. Dîner de bienvenue avec spécialités centrafricaines. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Visite Musée National - Briefing - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Musée de Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Bouar */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS BOUAR</span>
                          <span className="text-sm text-gray-600">Traversée des paysages de l'ouest centrafricain</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée de route</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Bangui en direction de Bouar, capitale de l'ouest centrafricain (environ 450 km, 7-8 heures de route). Traversée de paysages variés : forêts galeries, savanes arborées, villages traditionnels. Arrêts pour découvrir la vie rurale et prendre des photos. Déjeuner pique-nique en route. Arrivée à Bouar en fin d'après-midi. Installation à votre hébergement. Première présentation de la région par votre guide. Dîner et nuit à Bouar.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Bangui-Bouar - Découverte paysages - Arrivée à Bouar
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Route vers Bouar" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Premiers mégalithes */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PREMIERS MÉGALITHES</span>
                          <span className="text-sm text-gray-600">Découverte des premiers alignements de pierres</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée d'initiation</h4>
                            <p className="text-justify mb-4">
                              Première journée d'exploration archéologique. Transfert en 4x4 vers un premier site mégalithique proche de Bouar. Présentation générale des mégalithes de la région par votre guide archéologue : typologie, techniques de construction, hypothèses sur leur fonction. Exploration du site avec ses alignements de pierres dressées. Observations et relevés photographiques. Déjeuner pique-nique sur site. Après-midi : visite d'un deuxième site avec des cercles de pierres. Retour à Bouar en fin d'après-midi. Discussion avec un ancien du village sur les traditions orales concernant les mégalithes. Dîner et nuit à Bouar.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration premiers sites mégalithiques - Présentation archéologique - Rencontre avec ancien du village
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Premiers mégalithes" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Sites de Tora et Gbaya */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SITES DE TORA ET GBAYA</span>
                          <span className="text-sm text-gray-600">Exploration de sites majeurs et rencontre avec le peuple Gbaya</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée archéologique et culturelle</h4>
                            <p className="text-justify mb-4">
                              Départ pour le site de Tora, l'un des plus impressionnants alignements mégalithiques de la région. Exploration détaillée avec analyse des techniques de taille et de transport des pierres. Déjeuner pique-nique sur site. Après-midi : visite d'un village Gbaya proche des sites. Rencontre avec le chef traditionnel et les anciens qui partageront les légendes et traditions orales concernant les mégalithes. Découverte de la vie quotidienne, de l'artisanat et de l'organisation sociale Gbaya. Retour à Bouar en fin d'après-midi. Dîner et nuit à Bouar.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration site de Tora - Rencontre communauté Gbaya - Découverte traditions orales
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Site de Tora" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Forêts sacrées et cérémonies */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊTS SACRÉES</span>
                          <span className="text-sm text-gray-600">Visite des bosquets sacrés et participation à des cérémonies traditionnelles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée spirituelle</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à la dimension spirituelle et rituelle des mégalithes. Transfert vers une forêt sacrée Gbaya. Accompagné d'un guide traditionnel, vous découvrirez ce bosquet préservé, ses arbres sacrés et ses autels dédiés aux esprits des ancêtres. Présentation des rites initiatiques et des cérémonies associées aux mégalithes. Déjeuner traditionnel préparé par la communauté. Après-midi : participation à une cérémonie traditionnelle (si autorisée et selon le calendrier rituel) avec danses, chants et offrandes. Retour à Bouar en fin d'après-midi. Dîner et nuit à Bouar.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite forêt sacrée - Découverte rites traditionnels - Participation cérémonie
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forêt sacrée" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Site de Ndélé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SITE DE NDÉLÉ</span>
                          <span className="text-sm text-gray-600">Exploration du site archéologique majeur avec ses pierres gravées</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée archéologique</h4>
                            <p className="text-justify mb-4">
                              Départ pour le site archéologique de Ndélé, réputé pour ses pierres gravées et ses tumulus funéraires. Exploration du site avec votre guide archéologue : observation des gravures rupestres (motifs géométriques, représentations animales), étude des techniques de gravure, analyse des tumulus. Déjeuner pique-nique sur site avec vue panoramique sur la région. Après-midi : continuation de l'exploration et relevés photographiques détaillés. Discussion sur les liens possibles entre les différents sites mégalithiques de la région. Retour à Bouar en fin d'après-midi. Dîner et nuit à Bouar.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration site de Ndélé - Observation pierres gravées - Étude tumulus funéraires
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Site de Ndélé" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Artisanat et synthèse */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARTISANAT ET SYNTHÈSE</span>
                          <span className="text-sm text-gray-600">Découverte de l'artisanat traditionnel et synthèse des découvertes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée culturelle</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de l'artisanat traditionnel Gbaya. Visite d'ateliers de sculpture sur bois (masques, statues), de vannerie (paniers aux motifs complexes) et de forge traditionnelle. Rencontre avec les artisans et possibilité d'acheter des souvenirs directement aux producteurs. Déjeuner à Bouar. Après-midi : session de synthèse avec votre guide archéologue. Mise en commun des observations, discussion sur les hypothèses concernant les mégalithes, échange sur les expériences vécues. Préparation du retour vers Bangui. Dîner d'adieu à Bouar. Nuit à Bouar.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Découverte artisanat traditionnel - Session de synthèse - Préparation retour
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Artisanat Gbaya" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Retour vers Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR VERS BANGUI</span>
                          <span className="text-sm text-gray-600">Route de retour et dernière nuit à Bangui</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Bouar pour le retour vers Bangui. Mêmes paysages mais regard transformé par l'expérience vécue. Arrêts pour prendre les dernières photos. Déjeuner pique-nique en route. Arrivée à Bangui en fin d'après-midi. Installation à l'hôtel. Temps libre pour se reposer et commencer à trier ses souvenirs. En soirée, dîner de clôture du circuit avec partage des expériences et des photos. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Bouar-Bangui - Arrivée Bangui - Dîner de clôture
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Retour à Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Départ de Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE BANGUI</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et fin du circuit</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international, matinée libre pour les derniers achats de souvenirs ou visite optionnelle de Bangui. Déjeuner libre. Transfert à l'aéroport international M'Poko de Bangui en fonction de votre horaire de vol. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables des mystérieux mégalithes de Bouar, des rencontres authentiques avec le peuple Gbaya, et la satisfaction d'avoir participé à une expédition archéologique unique en son genre.
                            </p>
                            <div className="bg-amber-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Temps libre - Derniers achats - Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport de Bangui" 
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts du Circuit</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Exploration archéologique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages de l'ouest" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontres culturelles" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêts sacrées" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-amber-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🗿</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amber-700">Les Expériences Archéologiques et Culturelles</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion totale dans le monde énigmatique des mégalithes de Bouar et de la riche culture Gbaya. Chaque expérience est conçue pour vous faire découvrir un aspect différent de ce patrimoine exceptionnel, de l'archéologie de terrain aux traditions vivantes.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mégalithes mystérieux" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêts sacrées" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat traditionnel" 
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
                            ? 'bg-amber-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-amber-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-amber-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-amber-700 mt-1">•</span>
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
                                  exp.id === 'megolithes' 
                                    ? 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'gbaya'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'forets'
                                    ? 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'megolithes' ? 5.95 : 
                                   exp.id === 'gbaya' ? 5.9 :
                                   exp.id === 'forets' ? 5.85 :
                                   5.95} 
                              lng={exp.id === 'megolithes' ? 15.6 : 
                                   exp.id === 'gbaya' ? 15.5 :
                                   exp.id === 'forets' ? 15.4 :
                                   15.6} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Archéologie et Traditions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Mégalithes mystérieux" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Mégalithes de Bouar</h5>
                          <p className="text-sm text-gray-700">Alignements énigmatiques de pierres dressées</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600" 
                          alt="Forêts sacrées" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêts Sacrées</h5>
                          <p className="text-sm text-gray-700">Bosquets préservés des rites traditionnels</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600" 
                          alt="Artisanat Gbaya" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Artisanat Traditionnel</h5>
                          <p className="text-sm text-gray-700">Sculpture, vannerie et forge traditionnelles</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Danses traditionnelles" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages de l'ouest" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Archéologie sur site" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-blue-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Atelier de fouilles archéologiques</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Participation à un chantier de fouilles sous supervision d'un archéologue. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Initiation à l'ethnographie</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Méthodes d'enquête ethnographique auprès des communautés Gbaya. Supplément : 100€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Visite d'un site d'art rupestre</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Découverte de peintures rupestres dans des grottes de la région. Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en campement traditionnel</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience de nuit en campement Gbaya avec veillée autour du feu. Supplément : 120€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU CIRCUIT</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels et Auberges de l'Ouest</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-amber-700 w-16 md:w-32"></span>
                      <span className="text-amber-700 text-2xl">🏨</span>
                      <span className="h-px bg-amber-700 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Bangui" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Auberge à Bouar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Lodge en brousse" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements confortables et authentiques adaptés à l'expédition archéologique. À Bangui, vous séjournerez dans un hôtel moderne en centre-ville. À Bouar et dans la région, vous découvrirez des auberges locales au charme simple mais authentique, parfaitement adaptées à la découverte de cette région préservée. Tous les hébergements sont sélectionnés pour leur propreté, leur sécurité et leur situation géographique proche des sites à visiter.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bouar')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bouar' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BOUAR (6 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bangui */}
                  {activeHotelTab === 'bangui' && (
                    <div className="space-y-16">
                      {/* Hotel Oubangui Palace */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Oubangui Palace" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Oubangui Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Bangui, République Centrafricaine
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
                              L'Hotel Oubangui Palace est l'un des établissements les plus réputés de Bangui. Situé en plein centre-ville, il offre un confort moderne avec des chambres climatisées, une connexion Wi-Fi, et un service de qualité. Le restaurant de l'hôtel propose une cuisine internationale et des spécialités centrafricaines. Sa terrasse offre une belle vue sur la ville. L'hôtel dispose également d'un service de sécurité 24h/24 et d'un personnel francophone attentif. Idéal pour les nuits avant et après l'expédition archéologique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bouar */}
                  {activeHotelTab === 'bouar' && (
                    <div className="space-y-16">
                      {/* Auberge des Mégalithes */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600" 
                              alt="Auberge des Mégalithes" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Auberge des Mégalithes</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bouar, région de l'Ouest, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🗿</span>
                                <span>Proche des sites archéologiques</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span className="text-sm font-semibold">Gérée par une famille locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Jardin arboré</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine maison locale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Auberge des Mégalithes est l'hébergement de référence pour les visiteurs des sites archéologiques de Bouar. Située à proximité des principaux alignements de pierres, elle offre un confort simple mais adapté aux besoins des voyageurs. Les chambres sont propres et équipées de ventilateurs et de moustiquaires. L'auberge dispose d'un jardin agréable où se reposer après les journées d'exploration. Les repas sont préparés avec des produits locaux frais. L'atmosphère y est chaleureuse et l'équipe est très connaisseuse de la région et de ses mystères.
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
                  <span className="text-2xl">🗿</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Mégalithes promotion" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Expédition archéologique unique</p>
                  </div>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-amber-700">$3,099</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide archéologue francophone, hébergements, tous repas, droits d'entrée sites
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-06-15">15 Juin 2026</option>
                    <option value="2026-07-13">13 Juillet 2026</option>
                    <option value="2026-08-10">10 Août 2026</option>
                    <option value="2026-09-07">7 Septembre 2026</option>
                    <option value="2027-06-14">14 Juin 2027</option>
                    <option value="2027-07-12">12 Juillet 2027</option>
                    <option value="2027-08-09">9 Août 2027</option>
                    <option value="2027-09-06">6 Septembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juin à septembre (saison sèche, meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-amber-700 to-orange-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT EXCLUSIF</strong> limité à 6 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un archéologue spécialiste</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-amber-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-amber-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-amber-700 text-white py-4 font-semibold text-base mb-4 hover:bg-amber-600 transition-colors shadow-md">
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
                    Nos experts archéologie vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,4.0,18.0,6.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Bouar miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Mégalithes de l'Ouest - 9 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Bangui → Bouar → Sites Mégalithiques
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
                    <span>Tous transferts terrestres en 4x4</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide archéologue francophone</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>8 nuits en hôtels/auberges</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée sites archéologiques</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Archéologie sur site" 
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
                    <span className="font-bold text-amber-700">Moyen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-amber-700">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs juin à septembre</span>
                    <span className="font-bold text-amber-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-amber-700">Archéologue</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-amber-700">6 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-amber-200 p-4 mt-6 shadow-lg bg-amber-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b786d4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-700">Témoignage Voyageur</h4>
                    <p className="text-xs text-gray-600">Thomas M., archéologue amateur 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expérience extraordinaire pour tout amateur d'archéologie. Voir ces mégalithes énigmatiques, toucher ces pierres dressées il y a des millénaires, écouter les légendes des anciens Gbaya... Un voyage qui fait rêver et réfléchir. L'accompagnement par un archéologue était précieux. Je recommande vivement à tous les curieux d'histoire et de mystères anciens."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-amber-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mégalithes 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Paysages 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Traditions 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Artisanat 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-amber-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-amber-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}