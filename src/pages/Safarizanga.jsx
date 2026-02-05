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
        <h4 className="font-semibold text-center text-lg">Itinéraire Réserve Dzanga-Sangha</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,2.0,17.0,4.0&layer=mapnik&marker=3.5125,16.0475&marker=4.3947,18.5582"
          style={{ border: 0 }}
          allowFullScreen
          title="Safari Dzanga-Sangha - Centrafrique"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/3.5/16.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Réserve Dzanga-Sangha</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bai de Dzanga</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Observation gorilles</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Communauté Ba'Aka</span>
        </div>
      </div>
    </div>
  );
};

export default function Safarizanga() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bangui');
  const [activeExperienceTab, setActiveExperienceTab] = useState('elephants');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🐘', title: 'Éléphants de Forêt', desc: 'Observation des éléphants de forêt au bai de Dzanga' },
    { icon: '🦍', title: 'Gorilles des Plaines', desc: 'Tracking des gorilles des plaines de l\'ouest' },
    { icon: '🌿', title: 'Forêt Tropicale', desc: 'Exploration de la forêt tropicale humide préservée' },
    { icon: '👨‍👩‍👧‍👦', title: 'Peuple Ba\'Aka', desc: 'Rencontre avec le peuple pygmée Ba\'Aka' },
    { icon: '🦜', title: 'Oiseaux Rares', desc: 'Observation d\'une avifaune exceptionnelle' },
    { icon: '🌅', title: 'Mirador d\'Observation', desc: 'Observation depuis les miradors surélevés' },
  ];

  const regions = [
    { 
      name: 'Bangui', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Point de départ vers la réserve naturelle classée UNESCO',
      features: ['Préparation safari', 'Briefing', 'Vol vers Bayanga', 'Transfert']
    },
    { 
      name: 'Bayanga', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Village portail de la réserve, base pour les expéditions',
      features: ['Campement de base', 'Centre des visiteurs', 'Départ activités', 'Retour excursions']
    },
    { 
      name: 'Bai de Dzanga', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Clairière naturelle où viennent s\'abreuver les éléphants et autres animaux',
      features: ['Observation éléphants', 'Mirador surélevé', 'Photographie', 'Étude comportement']
    },
    { 
      name: 'Forêt de Dzanga-Sangha', 
      color: 'bg-lime-100', 
      textColor: 'text-lime-800', 
      desc: 'Forêt tropicale humide préservée, sanctuaire de biodiversité',
      features: ['Tracking gorilles', 'Observation primates', 'Flore exceptionnelle', 'Écosystème intact']
    },
    { 
      name: 'Communautés Ba\'Aka', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Rencontre avec le peuple autochtone pygmée, gardien de la forêt',
      features: ['Rencontre culturelle', 'Démonstrations', 'Transmission savoir', 'Échanges']
    },
    { 
      name: 'Sangha River', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Rivière navigable traversant la réserve, axe de transport et d\'observation',
      features: ['Navigation fluviale', 'Observation avifaune', 'Pêche traditionnelle', 'Paysages']
    },
  ];

  const experiences = [
    { 
      id: 'elephants',
      name: 'Observation Éléphants', 
      icon: '🐘',
      desc: 'Observation des éléphants de forêt depuis les miradors du bai de Dzanga',
      highlights: ['Éléphants de forêt', 'Bai de Dzanga', 'Mirador sécurisé', 'Comportement naturel'],
      details: 'Le bai de Dzanga est une clairière naturelle riche en minéraux où viennent s\'abreuver quotidiennement les éléphants de forêt. Contrairement à leurs cousins de savane, les éléphants de forêt sont plus petits, plus discrets et vivent en petits groupes familiaux. Depuis un mirador en bois surélevé et sécurisé, vous observerez ces majestueux animaux dans leur comportement le plus naturel : interactions sociales, soins aux petits, recherche de minéraux dans la boue. Les observations se font en silence total pour ne pas déranger les animaux. Un moment magique et rare.'
    },
    { 
      id: 'gorillas',
      name: 'Tracking Gorilles', 
      icon: '🦍',
      desc: 'Recherche et observation des gorilles des plaines de l\'ouest avec pisteurs Ba\'Aka',
      highlights: ['Gorilles des plaines', 'Pisteurs Ba\'Aka', 'Tracking en forêt', 'Observation rapprochée'],
      details: 'Accompagné de pisteurs expérimentés du peuple Ba\'Aka, vous partirez à la recherche des gorilles des plaines de l\'ouest. Ces primates impressionnants vivent en groupes familiaux dans la forêt dense. Le tracking peut prendre plusieurs heures de marche en forêt, suivant les traces et les indices laissés par les animaux. Une fois localisés, vous pourrez les observer pendant une heure maximum (règles strictes de protection). Cette expérience respectueuse des animaux et encadrée par des spécialistes est un privilège rare réservé à peu de visiteurs.'
    },
    { 
      name: 'Culture Ba\'Aka', 
      icon: '👨‍👩‍👧‍👦',
      desc: 'Immersion dans la culture du peuple pygmée Ba\'Aka, gardien ancestral de la forêt',
      highlights: ['Peuple Ba\'Aka', 'Savoir traditionnel', 'Démonstrations', 'Échanges culturels'],
      details: 'Le peuple Ba\'Aka, peuple autochtone pygmée, vit en symbiose avec la forêt depuis des millénaires. Leurs connaissances approfondies de l\'écosystème forestier sont uniques. Vous rencontrerez une communauté Ba\'Aka qui partagera avec vous ses traditions : démonstration de techniques de chasse traditionnelle (avec filets et lances), collecte de plantes médicinales, initiation aux techniques de pêche, présentation de danses et chants rituels. Ces échanges, préparés avec soin et respect, vous offriront une compréhension profonde de cette culture millénaire.'
    },
    { 
      id: 'birds',
      name: 'Ornithologie', 
      icon: '🦜',
      desc: 'Découverte de l\'avifaune exceptionnelle de la réserve avec guide spécialisé',
      highlights: ['Oiseaux rares', 'Observation avifaune', 'Guide ornithologue', 'Listes espèces'],
      details: 'La réserve de Dzanga-Sangha abrite une avifaune d\'une richesse exceptionnelle avec plus de 400 espèces d\'oiseaux recensées. Accompagné d\'un guide ornithologue, vous partirez à la découverte de cette diversité : calaos, perroquets gris du Gabon, touracos, martins-pêcheurs, et de nombreuses espèces endémiques. Les observations se font lors de marches matinales, de sessions en mirador ou de navigations sur la rivière Sangha. Les amateurs d\'ornithologie pourront compléter leur liste d\'espèces dans l\'un des hotspots mondiaux de la biodiversité aviaire.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de la réserve */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Safari dans la Réserve Dzanga-Sangha</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🐘</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'immersion au cœur d'une réserve UNESCO, à la rencontre des éléphants de forêt et des gorilles
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
            <span className="text-2xl">🌿</span>
            <span className="text-sm font-semibold">RCA | BIODIVERSITÉ UNIQUE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Éléphants de forêt" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Éléphants de forêt au bai de Dzanga</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Gorilles des plaines" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Gorilles des plaines de l'ouest</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêt tropicale" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Forêt tropicale préservée</p>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">SAFARI</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA4</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Bangui à Dzanga-Sangha</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion unique dans une réserve UNESCO exceptionnelle</span>
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
                      src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Éléphants au bai" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Observation des éléphants depuis le mirador</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Gorilles en forêt" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Tracking des gorilles avec pisteurs Ba'Aka</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce safari de 8 jours vous emmène au cœur de la réserve de Dzanga-Sangha, site classé au patrimoine mondial de l'UNESCO et l'une des dernières forêts tropicales humides préservées d'Afrique centrale. Une immersion exceptionnelle dans un sanctuaire de biodiversité unique, à la rencontre des éléphants de forêt, des gorilles des plaines et du peuple autochtone Ba'Aka.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Bangui, d'où vous prendrez un vol vers Bayanga, village-portail de la réserve. Pendant 6 jours, vous explorerez cet écosystème exceptionnel : observation des éléphants au bai de Dzanga, tracking des gorilles avec les pisteurs Ba'Aka, découverte de l'avifaune riche, et rencontres authentiques avec les communautés locales. Un safari scientifique et respectueux, encadré par des guides spécialisés et des chercheurs.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Bai de Dzanga" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Le bai de Dzanga : scène naturelle unique où les éléphants se rassemblent</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les amateurs de nature sauvage, de photographie animalière et d'écotourisme responsable. Accompagné de guides naturalistes et de chercheurs, vous découvrirez un des derniers sanctuaires de la faune africaine, dans le respect des animaux et des communautés locales. Une expérience rare qui contribue directement à la conservation de cette réserve exceptionnelle.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts du Safari</h3>
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
                        src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Gorilles en forêt" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt tropicale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Safari</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Observation éléphants" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Observation des éléphants de forêt</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tracking gorilles" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Tracking des gorilles des plaines</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des éléphants</strong> de forêt au bai de Dzanga</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Tracking des gorilles</strong> avec pisteurs Ba'Aka expérimentés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Découverte de l'avifaune</strong> exceptionnelle de la réserve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontre authentique</strong> avec le peuple Ba'Aka</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Navigation sur la Sangha</strong> pour observer la faune riveraine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Marches en forêt</strong> avec guides naturalistes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Contribuer à la conservation</strong> par votre présence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Séjours dans des éco-lodges</strong> intégrés à l'environnement</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la Réserve avec image */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Réserve Dzanga-Sangha" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Dzanga-Sangha : Sanctuaire UNESCO</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          La réserve de Dzanga-Sangha, créée en 1990 et classée au patrimoine mondial de l'UNESCO en 2012, est l'une des zones les plus riches en biodiversité d'Afrique. Elle fait partie du complexe transnational Tri-national de la Sangha avec le Cameroun et le Congo. Sur 4,589 km², elle protège un écosystème de forêt tropicale humide abritant des populations importantes d'éléphants de forêt (environ 3,000 individus), de gorilles des plaines de l'ouest, de chimpanzés, de bongos, et de plus de 400 espèces d'oiseaux. La réserve est également le territoire du peuple Ba'Aka, dont les savoirs traditionnels sont essentiels pour la conservation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Patrimoine UNESCO</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                          <span className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full">Éléphants de forêt</span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Gorilles</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Écotourisme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Réserve naturelle" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">DZANGA-SANGHA EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie</div>
                        <div className="text-3xl font-bold">4,589</div>
                        <div className="text-xs text-white/80">km² de forêt protégée</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Éléphants de forêt</div>
                        <div className="text-3xl font-bold">3,000+</div>
                        <div className="text-xs text-white/80">individus recensés</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Espèces d'oiseaux</div>
                        <div className="text-3xl font-bold">400+</div>
                        <div className="text-xs text-white/80">dans la réserve</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Année création</div>
                        <div className="text-3xl font-bold">1990</div>
                        <div className="text-xs text-white/80">réserve classée UNESCO 2012</div>
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
                          src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forêt de Dzanga-Sangha" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours en Réserve Protégée</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce safari vous emmène de la capitale Bangui au cœur de la réserve de Dzanga-Sangha, dans le sud-ouest de la République Centrafricaine. Après un vol vers Bayanga, vous serez basé dans un éco-lodge confortable au bord de la rivière Sangha. Les journées seront consacrées à l'exploration de la réserve : observation des éléphants au bai de Dzanga, tracking des gorilles dans la forêt dense, navigation sur la rivière pour observer les oiseaux, et rencontres avec les communautés Ba'Aka. Toutes les activités sont encadrées par des guides spécialisés et respectent strictement les règles de conservation.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours en réserve</div>
                            <div className="text-green-700 font-bold">6</div>
                          </div>
                          <div>
                            <div className="font-semibold">Espèces mammifères</div>
                            <div className="text-green-700 font-bold">60+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides spécialisés</div>
                            <div className="text-green-700 font-bold">2+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Pisteurs Ba'Aka</div>
                            <div className="text-green-700 font-bold">4+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Zones Explorées</h3>
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
                                    : region.name === 'Bayanga'
                                    ? 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Bai de Dzanga'
                                    ? 'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Forêt de Dzanga-Sangha'
                                    ? 'https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Communautés Ba\'Aka'
                                    ? 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Faune et Flore</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Éléphants 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Gorilles 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt tropicale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rivière Sangha" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Bangui</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, nuit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Vol vers Bayanga</div>
                      <div className="text-xs opacity-80">Transfert, installation, première sortie</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-7</div>
                      <div className="text-sm">Safari en réserve</div>
                      <div className="text-xs opacity-80">Éléphants, gorilles, Ba'Aka, nature</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8</div>
                      <div className="text-sm">Retour Bangui</div>
                      <div className="text-xs opacity-80">Vol retour, fin du safari</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau moyen (3/5)</strong> : Ce safari comporte des marches en forêt tropicale humide (2 à 4 heures par jour) parfois sur terrain accidenté. Le climat est chaud et humide. Le tracking des gorilles peut être physiquement exigeant. Une bonne condition physique générale est recommandée. L'âge minimum recommandé est de 16 ans. Les activités sont adaptables selon la forme physique des participants.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Bonne condition physique recommandée</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Marches en forêt tropicale</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 16 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Adaptabilité au climat tropical humide</span>
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
                              <span>🎒</span>
                              <span>Sac à dos jour (20-30L)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🦟</span>
                              <span>Anti-moustiques et vêtements longs</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo avec zoom puissant</span>
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
                              <span>👖</span>
                              <span>Vêtements couleur neutre (kaki, vert, beige)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🔭</span>
                              <span>Jumelles (10x42 recommandées)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement de safari" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Observation gorilles" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Safari Scientifique ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accès à une réserve UNESCO exceptionnelle</h4>
                            <p className="text-sm text-gray-700">
                              Dzanga-Sangha est l'un des derniers sanctuaires de la faune africaine.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Observation privilégiée d'espèces rares</h4>
                            <p className="text-sm text-gray-700">
                              Éléphants de forêt et gorilles des plaines dans leur habitat naturel.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accompagnement par des spécialistes</h4>
                            <p className="text-sm text-gray-700">
                              Guides naturalistes et pisteurs Ba'Aka pour une expérience enrichissante.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Tourisme responsable qui protège</h4>
                            <p className="text-sm text-gray-700">
                              Votre voyage contribue directement à la conservation de la réserve.
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
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
                          <span className="text-sm text-gray-600">Accueil et préparation du safari</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international M'Poko de Bangui. Accueil par votre guide naturaliste francophone. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur le safari à venir : présentation de la réserve de Dzanga-Sangha, des règles de conduite en réserve, du programme détaillé. Distribution des équipements si nécessaire. Dîner de bienvenue avec spécialités centrafricaines. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing safari - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Hôtel à Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Vol vers Bayanga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VOL VERS BAYANGA</span>
                          <span className="text-sm text-gray-600">Transfert vers la réserve, première immersion</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Arrivée en réserve</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner tôt à l'hôtel. Transfert à l'aéroport pour le vol vers Bayanga (environ 1h30 de vol). Vue aérienne spectaculaire sur la forêt tropicale. Arrivée à l'aérodrome de Bayanga. Accueil par l'équipe locale de la réserve. Transfert à votre éco-lodge au bord de la rivière Sangha. Installation dans votre bungalow. Déjeuner au lodge. Première sortie d'adaptation : courte marche en forêt avec votre guide pour une première approche de l'écosystème forestier. Observation des premiers signes de vie animale. Retour au lodge en fin d'après-midi. Présentation des pisteurs Ba'Aka qui vous accompagneront. Dîner et nuit au lodge.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Vol Bangui-Bayanga - Transfert lodge - Première marche en forêt - Rencontre équipe
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Bayanga" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Bai de Dzanga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BAI DE DZANGA</span>
                          <span className="text-sm text-gray-600">Observation des éléphants de forêt depuis le mirador</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée éléphants</h4>
                            <p className="text-justify mb-4">
                              Départ matinal en 4x4 vers le bai de Dzanga (clairière naturelle). Arrivée au mirador en bois surélevé qui surplombe le bai. Installation pour la journée d'observation. Les éléphants de forêt viennent quotidiennement s'abreuver et chercher des minéraux dans la boue du bai. Observation des comportements sociaux, des soins aux petits, des interactions entre groupes. Déjeuner pique-nique au mirador. Continuation de l'observation toute la journée avec des explications détaillées de votre guide sur l'écologie des éléphants de forêt. Retour au lodge en fin d'après-midi. Dîner et discussion sur les observations de la journée. Nuit au lodge.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert bai de Dzanga - Observation éléphants depuis mirador - Étude comportement - Retour lodge
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Bai de Dzanga" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Tracking gorilles */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TRACKING GORILLES</span>
                          <span className="text-sm text-gray-600">Recherche et observation des gorilles des plaines</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée gorilles</h4>
                            <p className="text-justify mb-4">
                              Départ très tôt accompagné des pisteurs Ba'Aka expérimentés. Début du tracking dans la forêt dense à la recherche des gorilles des plaines de l'ouest. Les pisteurs suivent les traces fraîches et les indices de présence. Marche silencieuse en forêt tropicale humide. Une fois le groupe localisé, approche prudente et observation pendant une heure maximum (règles strictes de protection). Observation des interactions sociales, de l'alimentation, des soins aux petits. Déjeuner pique-nique en forêt. Après-midi : retour vers le lodge avec arrêts pour observer d'autres espèces (primates, oiseaux). Retour au lodge en fin d'après-midi. Dîner et partage des impressions sur cette expérience unique. Nuit au lodge.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Tracking gorilles avec pisteurs - Observation gorilles - Marche en forêt - Retour lodge
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Gorilles" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Rivière Sangha et avifaune */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RIVIÈRE SANGHA</span>
                          <span className="text-sm text-gray-600">Navigation et observation de l'avifaune exceptionnelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée ornithologique</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à l'observation des oiseaux. Départ en pirogue sur la rivière Sangha avec un guide ornithologue. Navigation silencieuse le long des berges forestières pour observer l'avifaune riche et diversifiée : calaos, perroquets gris du Gabon, touracos, martins-pêcheurs, aigles pêcheurs, et de nombreuses espèces endémiques. Arrêt pour une marche dans la forêt galerie à la recherche d'espèces forestières. Déjeuner pique-nique au bord de la rivière. Après-midi : continuation de la navigation avec focus sur la photographie animalière. Observation des activités de pêche traditionnelle. Retour au lodge en fin d'après-midi. Dîner et nuit au lodge.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation rivière Sangha - Observation avifaune - Photographie animalière - Retour lodge
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Rivière Sangha" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Culture Ba'Aka */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CULTURE BA\'AKA</span>
                          <span className="text-sm text-gray-600">Rencontre avec le peuple autochtone pygmée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée culturelle</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la rencontre avec une communauté Ba'Aka. Accueil par les anciens du village. Présentation des traditions et du mode de vie de ce peuple autochtone pygmée. Démonstration des techniques de chasse traditionnelle (avec filets et lances, démonstration sans animaux). Initiation à la collecte des plantes médicinales et comestibles de la forêt. Participation à des activités quotidiennes. Déjeuner traditionnel préparé par la communauté. Après-midi : présentation de danses et chants rituels Ba'Aka. Échanges approfondis sur les relations entre les Ba'Aka et la forêt, les défis de la conservation. Retour au lodge en fin d'après-midi. Dîner d'adieu de la partie réserve. Nuit au lodge.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Rencontre communauté Ba'Aka - Démonstrations traditions - Échanges culturels - Retour lodge
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Communauté Ba'Aka" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Dernière journée en réserve */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DERNIÈRE JOURNÉE EN RÉSERVE</span>
                          <span className="text-sm text-gray-600">Synthèse et dernières observations</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de synthèse</h4>
                            <p className="text-justify mb-4">
                              Dernière matinée d'activité au choix selon les préférences du groupe : retour au bai de Dzanga pour une dernière observation des éléphants, ou marche en forêt avec focus sur la photographie, ou session d'observation des oiseaux autour du lodge. Déjeuner au lodge. Après-midi : session de synthèse avec votre guide naturaliste. Retour sur les observations de la semaine, discussion sur les enjeux de conservation de Dzanga-Sangha, échange sur les expériences vécues. Temps libre pour préparer les bagages. Dernier dîner au lodge avec l'équipe de la réserve. Nuit au lodge.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Dernière activité au choix - Synthèse avec guide - Préparation départ - Dernier dîner
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forêt tropicale" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Retour à Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR À BANGUI</span>
                          <span className="text-sm text-gray-600">Vol retour et fin du safari</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner au lodge. Transfert à l'aérodrome de Bayanga. Vol retour vers Bangui. Arrivée à Bangui et transfert à l'hôtel. Déjeuner libre. Selon l'horaire de votre vol international, après-midi libre pour les derniers achats de souvenirs ou repos à l'hôtel. En fin d'après-midi, transfert à l'aéroport international M'Poko de Bangui en fonction de votre horaire de vol. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette immersion unique dans la réserve de Dzanga-Sangha : les éléphants de forêt au bai, les gorilles dans leur habitat naturel, les rencontres avec le peuple Ba'Aka, et la satisfaction d'avoir contribué à la conservation de ce trésor naturel.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Vol Bayanga-Bangui - Transfert hôtel - Temps libre - Transfert aéroport - Départ international
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts du Safari</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Éléphants au bai" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Gorilles en forêt" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rivière Sangha" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Ba'Aka" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🐘</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Naturalistes et Culturelles</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce safari est une immersion totale dans l'écosystème exceptionnel de Dzanga-Sangha. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette réserve UNESCO, de l'observation scientifique des grands mammifères à la rencontre authentique avec les peuples autochtones.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Observation éléphants" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tracking gorilles" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Ba'Aka" 
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
                                  exp.id === 'elephants' 
                                    ? 'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'gorillas'
                                    ? 'https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'birds'
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'elephants' ? 3.5125 : 
                                   exp.id === 'gorillas' ? 3.5 :
                                   exp.id === 'birds' ? 3.45 :
                                   3.55} 
                              lng={exp.id === 'elephants' ? 16.0475 : 
                                   exp.id === 'gorillas' ? 16.1 :
                                   exp.id === 'birds' ? 16.0 :
                                   16.05} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Faune et Culture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1550358864-518f202c02ba?w=600" 
                          alt="Éléphants de forêt" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Observation Éléphants</h5>
                          <p className="text-sm text-gray-700">Au bai de Dzanga depuis le mirador</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?w=600" 
                          alt="Gorilles des plaines" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Tracking Gorilles</h5>
                          <p className="text-sm text-gray-700">Avec pisteurs Ba'Aka expérimentés</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" 
                          alt="Culture Ba'Aka" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Rencontre Ba'Aka</h5>
                          <p className="text-sm text-gray-700">Peuple autochtone de la forêt</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Rivière Sangha" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forêt tropicale" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Mirador d'observation" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Session photo avec photographe professionnel</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Accompagnement par un photographe animalier professionnel. Supplément : 200€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en campement forestier</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience d'une nuit en campement en pleine forêt. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier de recherche scientifique</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Participation à un projet de recherche avec des scientifiques. Supplément : 180€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Extension observation chimpanzés</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Journée supplémentaire dédiée à l'observation des chimpanzés. Supplément : 250€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU SAFARI</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Éco-Lodges en Réserve Naturelle</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏕️</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
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
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Éco-lodge à Bayanga" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bungalow en forêt" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce safari privilégie des hébergements intégrés à l'environnement et respectueux de l'écologie de la réserve. À Bangui, vous séjournerez dans un hôtel confortable. À Bayanga, vous découvrirez un éco-lodge au bord de la rivière Sangha, construit avec des matériaux locaux et fonctionnant avec des énergies renouvelables. Ces hébergements offrent tout le confort nécessaire tout en minimisant leur impact sur l'environnement exceptionnel de Dzanga-Sangha.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('ecolodge')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ecolodge' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ÉCO-LODGE (6 NUITS)
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
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
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
                              L'Hotel Oubangui Palace est l'un des établissements les plus réputés de Bangui. Situé en plein centre-ville, il offre un confort moderne avec des chambres climatisées, une connexion Wi-Fi, et un service de qualité. Le restaurant de l'hôtel propose une cuisine internationale et des spécialités centrafricaines. Sa terrasse offre une belle vue sur la ville. L'hôtel dispose également d'un service de sécurité 24h/24 et d'un personnel francophone attentif. Idéal pour la nuit avant le départ vers la réserve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Éco-lodge */}
                  {activeHotelTab === 'ecolodge' && (
                    <div className="space-y-16">
                      {/* Éco-Lodge Sangha River */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" 
                              alt="Éco-Lodge Sangha River" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Éco-Lodge Sangha River</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bayanga, réserve de Dzanga-Sangha, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Bord de la rivière Sangha</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏡</span>
                                <span className="text-sm font-semibold">Bungalows en matériaux locaux</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">☀️</span>
                                <span className="text-sm font-semibold">Énergie solaire</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale bio</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Éco-Lodge Sangha River est l'hébergement idéal pour explorer la réserve de Dzanga-Sangha. Situé au bord de la rivière Sangha, il offre des bungalows confortables construits avec des matériaux locaux (bois, feuilles de palmier) et équipés de lits confortables, de moustiquaires et de salle de bain privée. L'éco-lodge fonctionne à l'énergie solaire et recycle ses déchets. La cuisine est préparée avec des produits locaux frais, souvent cultivés dans le potager de l'éco-lodge. La terrasse sur la rivière est un lieu idéal pour observer les oiseaux et se détendre après les journées d'exploration.
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
                  <span className="text-2xl">🐘</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Safari</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Safari Dzanga-Sangha" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Observation des éléphants de forêt</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$3,499</span>
                    <span className="text-xl line-through text-gray-500">$3,299</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Safari complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, vol Bangui-Bayanga retour, guide naturaliste, hébergements, tous repas
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Réservez avant le 31 mars 2026 et économisez 200$ par personne
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
                    <option value="2026-11-05">5 Novembre 2026</option>
                    <option value="2026-12-03">3 Décembre 2026</option>
                    <option value="2027-01-07">7 Janvier 2027</option>
                    <option value="2027-02-04">4 Février 2027</option>
                    <option value="2027-11-04">4 Novembre 2027</option>
                    <option value="2027-12-02">2 Décembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de novembre à février (saison sèche, meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>SAFARI EXCLUSIF</strong> limité à 8 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un naturaliste spécialiste</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur le safari ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts naturalistes vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,2.0,17.0,4.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Dzanga-Sangha miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Safari Dzanga-Sangha - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Bangui → Vol → Bayanga → Réserve UNESCO
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
                    <span>Vol Bangui-Bayanga aller-retour</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide naturaliste francophone</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>7 nuits en hôtel/éco-lodge</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée et permis réserve</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Observation gorilles" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du safari</span>
                    <span className="font-bold text-green-700">Moyen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs novembre à février</span>
                    <span className="font-bold text-green-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-green-700">Naturaliste</span>
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

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Témoignage Naturaliste</h4>
                    <p className="text-xs text-gray-600">Sophie R., photographe animalière 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un safari exceptionnel pour les amateurs de nature sauvage. Observer les éléphants de forêt au bai de Dzanga depuis le mirador, suivre les gorilles avec les pisteurs Ba'Aka, découvrir cette forêt tropicale préservée... Des moments magiques. L'éco-lodge est parfaitement intégré à l'environnement. Un voyage qui contribue réellement à la conservation de cette réserve UNESCO."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-green-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Éléphants 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1547722700-57de53c5c0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Gorilles 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêt tropicale 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rivière Sangha 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
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