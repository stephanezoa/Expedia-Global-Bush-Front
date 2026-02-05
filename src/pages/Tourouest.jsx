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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Tour de l'Ouest</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,3.0,19.0,7.0&layer=mapnik&marker=6.6111,20.9394&marker=4.2614,15.7922&marker=5.0333,15.8667&marker=4.3947,18.5582"
          style={{ border: 0 }}
          allowFullScreen
          title="Tour de l'Ouest Centrafricain"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/5.5/16.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bouar</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-indigo-600 border-2 border-gray-300"></span>
          <span className="text-sm">Carnot</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Berbérati</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-700 border-2 border-gray-300"></span>
          <span className="text-sm">Ouest RCA</span>
        </div>
      </div>
    </div>
  );
};

export default function Tourouest() {
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
    { icon: '🏛️', title: 'Patrimoine Culturel', desc: 'Découverte des richesses culturelles et historiques de l\'ouest' },
    { icon: '🌳', title: 'Forêts Denses', desc: 'Exploration des forêts tropicales et zones naturelles préservées' },
    { icon: '👑', title: 'Royautés Traditionnelles', desc: 'Rencontre avec les rois et chefs traditionnels' },
    { icon: '💎', title: 'Artisanat Local', desc: 'Découverte des savoir-faire artisanaux uniques' },
    { icon: '🏞️', title: 'Paysages Variés', desc: 'Des plateaux aux forêts, diversité des paysages' },
    { icon: '🏺', title: 'Sites Historiques', desc: 'Visite des sites archéologiques et historiques' },
  ];

  const regions = [
    { 
      name: 'Bangui', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Point de départ et introduction à la culture centrafricaine',
      features: ['Préparation voyage', 'Musée national', 'Culture urbaine', 'Point départ']
    },
    { 
      name: 'Bouar', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville des mégalithes et capitale culturelle de l\'ouest',
      features: ['Mégalithes Tajunu', 'Culture Gbaya', 'Marchés animés', 'Histoire régionale']
    },
    { 
      name: 'Carnot', 
      color: 'bg-indigo-100', 
      textColor: 'text-indigo-800', 
      desc: 'Ancien centre colonial et carrefour économique',
      features: ['Architecture coloniale', 'Plantations historiques', 'Artisanat', 'Traditions locales']
    },
    { 
      name: 'Berbérati', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Porte d\'entrée de la forêt équatoriale et centre diamantifère',
      features: ['Forêt équatoriale', 'Culture diamantaire', 'Frontière Cameroun', 'Biodiversité']
    },
    { 
      name: 'Région de la Lobaye', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Zone agricole fertile et berceau de traditions ancestrales',
      features: ['Agriculture traditionnelle', 'Rites initiatiques', 'Savoirs ancestraux', 'Communautés rurales']
    },
    { 
      name: 'Plateaux de l\'Ouest', 
      color: 'bg-indigo-100', 
      textColor: 'text-indigo-800', 
      desc: 'Paysages de collines et plateaux riches en histoire',
      features: ['Points de vue', 'Sites historiques', 'Géologie unique', 'Paysages préservés']
    },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Patrimoine Culturel', 
      icon: '🏛️',
      desc: 'Immersion dans les traditions et cultures des peuples de l\'ouest centrafricain',
      highlights: ['Rencontres royautés', 'Danses traditionnelles', 'Artisanat local', 'Cérémonies'],
      details: 'Ce circuit vous plonge au cœur des traditions vivantes des peuples de l\'ouest centrafricain : Gbaya, Banda, Mandja et autres. Vous rencontrerez des rois et chefs traditionnels, assisterez à des cérémonies et danses rituelles, découvrirez l\'artisanat local (poterie, tissage, sculpture). Visite des sites historiques comme les mégalithes de Bouar, témoins d\'une civilisation ancienne. Compréhension des systèmes sociaux traditionnels, de la médecine traditionnelle et des savoirs ancestraux. Une immersion authentique dans des cultures préservées.'
    },
    { 
      id: 'nature',
      name: 'Nature et Paysages', 
      icon: '🌳',
      desc: 'Exploration des écosystèmes variés de l\'ouest : forêts, plateaux et zones agricoles',
      highlights: ['Forêts équatoriales', 'Plateaux panoramiques', 'Rivières et cascades', 'Flore exceptionnelle'],
      details: 'L\'ouest centrafricain offre une diversité naturelle remarquable. Vous explorerez la forêt équatoriale autour de Berbérati avec sa riche biodiversité. Découverte des plateaux de l\'ouest offrant des points de vue spectaculaires. Visite de zones agricoles traditionnelles et compréhension des relations entre les communautés et leur environnement. Observation de la flore caractéristique (arbres géants, plantes médicinales). Balades en forêt avec guides locaux pour découvrir les secrets de l\'écosystème forestier.'
    },
    { 
      name: 'Histoire et Archéologie', 
      icon: '🏺',
      desc: 'Découverte des sites historiques et archéologiques de l\'ouest centrafricain',
      highlights: ['Mégalithes Tajunu', 'Sites coloniaux', 'Histoire précoloniale', 'Architecture traditionnelle'],
      details: 'L\'ouest de la RCA est riche en histoire et sites archéologiques. Vous visiterez les célèbres mégalithes de Bouar (Tajunu), monuments de pierre dont l\'origine et la signification restent en partie mystérieuses. Exploration des sites coloniaux allemands et français. Découverte de l\'architecture traditionnelle (cases à étages, greniers). Compréhension de l\'histoire précoloniale à travers les récits des anciens et la visite de sites historiques. Cette expérience vous plongera dans les différentes couches historiques qui ont façonné la région.'
    },
    { 
      id: 'artisanat',
      name: 'Art et Artisanat', 
      icon: '💎',
      desc: 'Découverte des savoir-faire artisanaux et artistiques traditionnels',
      highlights: ['Sculpture sur bois', 'Tissage traditionnel', 'Poterie artisanale', 'Travail du fer'],
      details: 'L\'ouest centrafricain est réputé pour son artisanat de qualité. Vous visiterez des ateliers d\'artisans spécialisés dans différentes techniques : sculpture sur bois (masques, statues), tissage (pagnes traditionnels), poterie (jarres, ustensiles), travail du fer (outils, armes traditionnelles). Rencontre avec les maîtres artisans qui perpétuent ces savoir-faire ancestraux. Participation à des ateliers d\'initiation. Compréhension des significations symboliques des objets artisanaux dans la culture locale. Possibilité d\'acquérir des pièces authentiques directement auprès des artisans.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de l'ouest */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Tour Complet de l'Ouest Centrafricain</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🏛️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              14 jours d'immersion culturelle à travers les trésors historiques et naturels de l'ouest
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
            <span className="text-2xl">👑</span>
            <span className="text-sm font-semibold">OUEST RCA | PATRIMOINE VIVANT</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mégalithes de Bouar" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Mégalithes Tajunu de Bouar</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Culture traditionnelle" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Cérémonies traditionnelles</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêts de l'ouest" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Forêts équatoriales préservées</p>
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
                <span className="bg-blue-700 text-white px-3 py-1 font-bold">GRAND TOUR</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA6</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">14 jours - Bangui à Berbérati</span>
                <button className="ml-auto border-2 border-blue-700 text-blue-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une découverte exhaustive des richesses de l'ouest</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Mégalithes" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Mégalithes historiques de l'ouest</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Culture traditionnelle" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Rencontres avec les rois traditionnels</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce grand tour de 14 jours vous emmène à la découverte complète de l'ouest centrafricain, une région riche en histoire, culture et nature. Une immersion totale dans les traditions vivantes, les sites historiques et les paysages préservés de cette partie méconnue de la RCA.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Bangui avant de vous emmener vers l'ouest à travers Bouar et ses mégalithes mystérieux, Carnot avec son patrimoine colonial, jusqu'à Berbérati, porte de la forêt équatoriale. Vous découvrirez les cultures Gbaya, Banda et Mandja, rencontrerez des rois traditionnels, explorerez des sites archéologiques uniques et serez initiés aux savoir-faire artisanaux locaux. Un circuit complet pour les amateurs d'histoire, de culture et de rencontres authentiques.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Paysages de l'ouest" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Les paysages variés et riches en histoire de l'ouest centrafricain</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux souhaitant découvrir en profondeur la diversité culturelle et naturelle de la RCA. Accompagné de guides culturels spécialisés et d'experts locaux, vous aurez un accès privilégié à des expériences authentiques et à des rencontres humaines enrichissantes. Un voyage qui allie confort, découverte et immersion.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-blue-50 border-l-4 border-blue-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Les Atouts du Grand Tour</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-700 text-2xl">{item.icon}</span>
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
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat local" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages naturels" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Grand Tour</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Patrimoine culturel" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Découverte du patrimoine culturel</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontres traditionnelles" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Rencontres avec les communautés</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Immersion culturelle</strong> auprès des peuples de l'ouest</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Rencontres privilégiées</strong> avec rois et chefs traditionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Découverte archéologique</strong> des mégalithes de Bouar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Exploration naturelle</strong> des forêts et plateaux</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Initiation artisanale</strong> aux savoir-faire locaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Participation</strong> à des cérémonies traditionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Découverte historique</strong> des sites coloniaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Photographie</strong> de scènes culturelles authentiques</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'Ouest avec image */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Région ouest" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">L'Ouest Centrafricain : Carrefour Culturel</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          L'ouest de la République Centrafricaine est une région de grande diversité culturelle et historique. Zone de contact entre les civilisations de la forêt équatoriale et celles de la savane, elle a vu se développer des royaumes et chefferies puissants. La région est célèbre pour ses mégalithes de Bouar (Tajunu), témoins d'une civilisation ancienne encore mal connue. Peuplée principalement par les Gbaya, Banda et Mandja, elle conserve des traditions vivantes et des systèmes sociaux complexes. Le climat est tropical avec une saison des pluies d'avril à octobre. L'économie traditionnelle repose sur l'agriculture, l'artisanat et, plus récemment, l'exploitation diamantifère.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Diversité Culturelle</span>
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Patrimoine Historique</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Traditions Vivantes</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Nature Préservée</span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Artisanat Réputé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Culture traditionnelle" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">L'OUEST EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Groupes ethniques</div>
                        <div className="text-3xl font-bold">15+</div>
                        <div className="text-xs text-white/80">principaux dans la région</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Mégalithes recensés</div>
                        <div className="text-3xl font-bold">200+</div>
                        <div className="text-xs text-white/80">sur les sites de Bouar</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Altitude moyenne</div>
                        <div className="text-3xl font-bold">800</div>
                        <div className="text-xs text-white/80">mètres (plateaux)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Précipitations annuelles</div>
                        <div className="text-3xl font-bold">1,500</div>
                        <div className="text-xs text-white/80">mm (climat tropical)</div>
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
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Cérémonie traditionnelle" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Culturel Complet</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce grand tour vous emmène à travers les principales villes et régions culturelles de l'ouest centrafricain. Le voyage se fait en véhicule confortable avec des guides culturels spécialisés. Vous traverserez des paysages variés : de la savane autour de Bangui aux plateaux de l'ouest, jusqu'à la forêt équatoriale près de Berbérati. Les étapes incluent des séjours en hôtels locaux, des rencontres avec les communautés, des visites de sites historiques et des initiations aux traditions locales. Un circuit complet qui permet de comprendre en profondeur la richesse culturelle de cette région.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours de voyage</div>
                            <div className="text-blue-700 font-bold">14</div>
                          </div>
                          <div>
                            <div className="font-semibold">Villes visitées</div>
                            <div className="text-blue-700 font-bold">4+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides culturels</div>
                            <div className="text-blue-700 font-bold">2+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Communautés rencontrées</div>
                            <div className="text-blue-700 font-bold">10+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-700">Les Zones Explorées</h3>
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
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Carnot'
                                    ? 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Berbérati'
                                    ? 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Région de la Lobaye'
                                    ? 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Culture et Nature</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mégalithes 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêts 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Architecture 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Bangui</div>
                      <div className="text-xs opacity-80">Départ, culture urbaine</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Bouar</div>
                      <div className="text-xs opacity-80">Mégalithes, culture Gbaya</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Carnot</div>
                      <div className="text-xs opacity-80">Patrimoine colonial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-12</div>
                      <div className="text-sm">Berbérati</div>
                      <div className="text-xs opacity-80">Forêt, artisanat</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">13-14</div>
                      <div className="text-sm">Retour</div>
                      <div className="text-xs opacity-80">Syntèse, retour Bangui</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-indigo-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau modéré (2/5)</strong> : Ce circuit culturel est accessible à la plupart des voyageurs. Journées de route modérées sur routes et pistes en bon état. Visites et marches légères. Hébergement en hôtels locaux confortables. Aucune condition physique particulière requise. L'âge minimum recommandé est de 12 ans (accompagné). Adaptation nécessaire à un climat tropical chaud et humide. Ce circuit convient aux familles, couples et voyageurs solo intéressés par la culture.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-indigo-600">●</span>
                              <span className="text-sm">Condition physique normale suffisante</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-indigo-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-indigo-600">●</span>
                              <span className="text-sm">Adaptation au climat tropical</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-indigo-600">●</span>
                              <span className="text-sm">Intérêt pour la culture et l'histoire</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>👟</span>
                              <span>Chaussures de marche confortables</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire et anti-moustiques</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>👕</span>
                              <span>Vêtements légers et respirants</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💧</span>
                              <span>Gourde réutilisable</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo avec objectif standard</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🕶️</span>
                              <span>Lunettes de soleil</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac à dos jour (15-20L)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧥</span>
                              <span>Veste légère pour soirées fraîches</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement voyage" 
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
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Patrimoine culturel" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Grand Tour Culturel ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte exhaustive d'une région méconnue</h4>
                            <p className="text-sm text-gray-700">
                              Accès complet aux trésors culturels et naturels de l'ouest.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Rencontres authentiques et privilégiées</h4>
                            <p className="text-sm text-gray-700">
                              Avec les gardiens des traditions centrafricaines.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accompagnement par des experts locaux</h4>
                            <p className="text-sm text-gray-700">
                              Guides culturels spécialisés pour une compréhension profonde.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Circuit équilibré entre confort et authenticité</h4>
                            <p className="text-sm text-gray-700">
                              Hébergement confortable et expériences culturelles authentiques.
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
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
                          <span className="text-sm text-gray-600">Accueil et introduction à la RCA</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international M'Poko de Bangui. Accueil par votre guide culturel francophone. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, visite du marché central de Bangui pour une première immersion dans la vie locale. Briefing détaillé sur le circuit : présentation des régions à visiter, des cultures rencontrées, du programme détaillé. Dîner de bienvenue avec spécialités centrafricaines. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Visite marché central - Briefing circuit - Dîner de bienvenue
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

                  {/* Jour 2 - Bangui culturelle */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BANGUI CULTURELLE</span>
                          <span className="text-sm text-gray-600">Découverte de la capitale et de ses richesses</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée culturelle à Bangui</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de Bangui : visite du Musée Barthélémy Boganda pour une introduction à l'histoire et aux cultures de la RCA. Continuation vers le Palais de la Renaissance (extérieur) et le Monument des Martyrs. Déjeuner dans un restaurant local avec vue sur le fleuve Oubangui. Après-midi : visite du Centre Artisanal de Bangui pour découvrir l'artisanat local. Rencontre avec des artisans et initiation aux techniques traditionnelles. En fin de journée, préparation pour le départ vers l'ouest. Dîner libre et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Musée Boganda - Palais Renaissance - Centre Artisanal - Rencontre artisans - Préparation départ
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Musée Boganda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers Bouar */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS BOUAR</span>
                          <span className="text-sm text-gray-600">Première étape vers l'ouest culturel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de route et découverte</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Bangui en direction de l'ouest. Route à travers des paysages de savane arborée qui deviennent progressivement plus vallonnés. Arrêts en cours de route pour observer la vie rurale et les petits villages. Déjeuner pique-nique en bord de route. Arrivée à Bouar en fin d'après-midi, capitale de la préfecture de Nana-Mambéré. Installation à l'hôtel. Première découverte de la ville avec son marché animé. Rencontre avec un guide local spécialiste des mégalithes. Dîner et nuit à l'hôtel à Bouar.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers l'ouest - Observation vie rurale - Arrivée Bouar - Découverte marché - Rencontre guide local
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Route de l'ouest" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Mégalithes de Bouar */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MÉGALITHES DE BOUAR</span>
                          <span className="text-sm text-gray-600">Découverte des mystérieux Tajunu</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée archéologique</h4>
                            <p className="text-justify mb-4">
                              Journée entière consacrée à la découverte des célèbres mégalithes de Bouar, connus localement sous le nom de Tajunu. Visite des principaux sites archéologiques avec un guide spécialiste. Explications détaillées sur ces monuments de pierre dont l'origine et la signification restent en partie mystérieuses. Déjeuner pique-nique sur site. Après-midi : continuation de la visite avec focus sur les différentes théories concernant ces mégalithes (tombeaux, marqueurs territoriaux, sites rituels). Retour à Bouar en fin de journée. Rencontre avec des chercheurs locaux travaillant sur les mégalithes. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite sites mégalithes - Archéologie locale - Recherche Tajunu - Rencontre chercheurs - Nuit Bouar
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Mégalithes Tajunu" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Culture Gbaya */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CULTURE GBAYA</span>
                          <span className="text-sm text-gray-600">Immersion dans les traditions du peuple majoritaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée culturelle Gbaya</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de la culture Gbaya, peuple majoritaire de la région. Visite d'un village Gbaya traditionnel. Rencontre avec le chef du village et les anciens. Présentation des traditions, de l'organisation sociale et des croyances. Démonstration de danses et musiques traditionnelles. Déjeuner avec des plats Gbaya traditionnels. Après-midi : initiation aux savoir-faire locaux (vannerie, poterie, sculpture). Participation à des activités quotidiennes. Compréhension des relations entre les Gbaya et leur environnement. Retour à Bouar en fin d'après-midi. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Village Gbaya - Rencontre chef - Traditions Gbaya - Initiation artisanat - Retour Bouar
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Culture Gbaya" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Route vers Carnot */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS CARNOT</span>
                          <span className="text-sm text-gray-600">Trajet vers l\'ancien centre colonial</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de transition</h4>
                            <p className="text-justify mb-4">
                              Départ de Bouar après le petit-déjeuner. Route vers Carnot à travers des paysages de plus en plus boisés. Arrêts dans des villages en cours de route pour observer les différentes activités rurales. Déjeuner pique-nique en bord de route. Arrivée à Carnot en milieu d'après-midi, ville fondée à l'époque coloniale allemande. Installation à l'hôtel. Première découverte de la ville avec son architecture coloniale préservée. Rencontre avec des historiens locaux spécialistes de la période coloniale. Dîner et nuit à l'hôtel à Carnot.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Bouar-Carnot - Observation vie rurale - Arrivée Carnot - Architecture coloniale - Rencontre historiens
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Architecture coloniale" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Carnot historique */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CARNOT HISTORIQUE</span>
                          <span className="text-sm text-gray-600">Découverte du patrimoine colonial et local</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée historique</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte du patrimoine historique de Carnot. Visite des bâtiments coloniaux allemands et français préservés. Explications sur l'histoire de la colonisation dans cette région. Visite de l'ancienne gare et des entrepôts coloniaux. Déjeuner dans un restaurant local. Après-midi : visite des plantations historiques de café et de caoutchouc. Rencontre avec des descendants de colons et de travailleurs. Compréhension des impacts de la période coloniale sur le développement de la région. Retour en ville en fin d'après-midi. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Patrimoine colonial - Histoire région - Plantations historiques - Rencontres locales - Nuit Carnot
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Bâtiments coloniaux" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Artisanat de Carnot */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARTISANAT DE CARNOT</span>
                          <span className="text-sm text-gray-600">Découverte des savoir-faire locaux réputés</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée artisanale</h4>
                            <p className="text-justify mb-4">
                              Carnot est réputée pour son artisanat de qualité. Matinée consacrée à la visite d'ateliers d'artisans spécialisés : sculpteurs sur bois, potiers, tisserands. Rencontre avec les maîtres artisans et observation de leur travail. Initiation à certaines techniques simples. Déjeuner avec des spécialités locales. Après-midi : visite du marché artisanal de Carnot. Compréhension des circuits de commercialisation de l'artisanat. Possibilité d'acquérir des pièces authentiques directement auprès des artisans. En fin de journée, préparation pour le départ vers Berbérati. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Ateliers artisans - Initiation techniques - Marché artisanal - Achats directs - Préparation départ
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Artisanat local" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Route vers Berbérati */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS BERBÉRATI</span>
                          <span className="text-sm text-gray-600">Entrée dans la région forestière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée forestière</h4>
                            <p className="text-justify mb-4">
                              Départ de Carnot après le petit-déjeuner. Route vers Berbérati à travers des paysages qui deviennent progressivement plus forestiers. Observation de la transition entre savane et forêt équatoriale. Arrêts pour observer la flore caractéristique. Déjeuner pique-nique en forêt. Arrivée à Berbérati en fin d'après-midi, principale ville de la préfecture de Mambéré-Kadéï et porte d'entrée de la forêt équatoriale. Installation à l'hôtel. Première découverte de la ville avec son ambiance particulière de ville frontière. Rencontre avec des guides spécialistes de la forêt. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Carnot-Berbérati - Transition savane-forêt - Arrivée Berbérati - Découverte ville - Rencontre guides forêt
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forêt équatoriale" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Forêt de Berbérati */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT DE BERBÉRATI</span>
                          <span className="text-sm text-gray-600">Exploration de l'écosystème forestier</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée nature</h4>
                            <p className="text-justify mb-4">
                              Journée entière consacrée à l'exploration de la forêt équatoriale autour de Berbérati. Départ matinal avec des guides spécialistes. Marche en forêt pour découvrir la biodiversité exceptionnelle : arbres géants, lianes, plantes médicinales. Observation de la faune (oiseaux, primates, insectes). Déjeuner pique-nique en forêt. Après-midi : continuation de l'exploration avec focus sur les relations entre les communautés locales et la forêt. Visite d'un campement de chercheurs ou de gardes forestiers. Compréhension des enjeux de conservation. Retour à Berbérati en fin de journée. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration forêt - Biodiversité - Flore et faune - Relations communautés-forêt - Retour Berbérati
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forêt équatoriale" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Culture diamantaire */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CULTURE DIAMANTAIRE</span>
                          <span className="text-sm text-gray-600">Découverte de l\'économie du diamant</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée économique</h4>
                            <p className="text-justify mb-4">
                              Berbérati est au cœur d'une région productrice de diamants. Matinée consacrée à la découverte de cette activité économique majeure. Visite d'un site d'exploitation artisanale (sous supervision et dans le respect des règles). Rencontre avec des chercheurs et des négociants. Explications sur le processus d'extraction et de commercialisation. Déjeuner avec des acteurs du secteur. Après-midi : visite du marché aux diamants (observation extérieure seulement). Compréhension des impacts économiques et sociaux de cette activité. Rencontre avec des représentants d'organisations travaillant sur la traçabilité. Retour à l'hôtel en fin d'après-midi. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Économie diamantaire - Sites exploitation - Rencontre acteurs - Marché diamants - Impacts sociaux
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Économie diamantaire" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Frontière et synthèse */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FRONTIÈRE ET SYNTHÈSE</span>
                          <span className="text-sm text-gray-600">Dernière journée à Berbérati et préparation retour</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de synthèse</h4>
                            <p className="text-justify mb-4">
                              Matinée libre à Berbérati pour les derniers achats d'artisanat ou repos. Possibilité de visite optionnelle vers la frontière camerounaise (selon les conditions de sécurité). Déjeuner dans un restaurant local. Après-midi : session de synthèse avec votre guide culturel. Retour sur les expériences vécues, les cultures rencontrées, les sites visités. Échanges approfondis sur les impressions et découvertes. Préparation des bagages pour le retour. Dîner d'adieu de la partie ouest avec spécialités locales. Nuit à l'hôtel à Berbérati.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Temps libre - Synthèse circuit - Échanges impressions - Préparation retour - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Synthèse voyage" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 13 - Retour vers Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(13)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          13
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR VERS BANGUI</span>
                          <span className="text-sm text-gray-600">Longue journée de route retour</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 13 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 13 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Départ très tôt de Berbérati pour le retour vers Bangui. Longue journée de route avec des arrêts réguliers pour se reposer. Observation des paysages qui redeviennent progressivement plus secs. Déjeuner pique-nique en route. Arrivée à Bangui en fin d'après-midi. Transfert à l'hôtel. Installation et temps libre pour se rafraîchir. En soirée, session finale de clôture du circuit avec remise de certificats de participation. Dîner d'adieu dans un restaurant de Bangui. Nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route retour Bangui - Observation paysages - Arrivée Bangui - Session clôture - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Retour Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 14 - Départ de Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(14)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          14
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE BANGUI</span>
                          <span className="text-sm text-gray-600">Fin du grand tour culturel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 14 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 14 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Matinée libre selon l'horaire de votre vol international : possibilité de derniers achats de souvenirs, visite complémentaire de Bangui, ou repos à l'hôtel. Déjeuner libre. Transfert à l'aéroport international M'Poko de Bangui en fonction de votre horaire de vol. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette immersion culturelle complète dans l'ouest centrafricain : les mégalithes mystérieux de Bouar, les rencontres authentiques avec les peuples Gbaya, la découverte du patrimoine colonial, l'exploration de la forêt équatoriale, et la compréhension approfondie des richesses culturelles de cette région.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Temps libre - Derniers achats - Transfert aéroport - Assistance embarquement - Départ international
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts du Grand Tour</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mégalithes" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Cérémonies" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêts" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏛️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-700">Les Expériences Culturelles de l'Ouest</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce grand tour est une immersion complète dans les richesses culturelles, historiques et naturelles de l'ouest centrafricain. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région fascinante, des mystères archéologiques aux traditions vivantes des peuples locaux.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Archéologie" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Traditions" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Nature" 
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
                            ? 'bg-blue-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-blue-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-blue-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-700 mt-1">•</span>
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
                                  exp.id === 'culture' 
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'nature'
                                    ? 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'artisanat'
                                    ? 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'culture' ? 5.95 : 
                                   exp.id === 'nature' ? 4.26 :
                                   exp.id === 'artisanat' ? 4.94 :
                                   5.03} 
                              lng={exp.id === 'culture' ? 15.59 : 
                                   exp.id === 'nature' ? 15.79 :
                                   exp.id === 'artisanat' ? 15.87 :
                                   15.92} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Culture et Patrimoine</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Mégalithes" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Patrimoine Archéologique</h5>
                          <p className="text-sm text-gray-700">Mégalithes Tajunu de Bouar</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600" 
                          alt="Traditions" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Culture Gbaya</h5>
                          <p className="text-sm text-gray-700">Traditions vivantes des peuples</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" 
                          alt="Forêts" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Nature Préservée</h5>
                          <p className="text-sm text-gray-700">Forêts équatoriales de l'ouest</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Artisanat" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Architecture" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-indigo-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Atelier de sculpture sur bois approfondi</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Initiation complète avec un maître sculpteur. Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Visite d'un site d'exploitation diamantifère</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Accès accompagné à un site de production (selon autorisations). Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Randonnée guidée en forêt sur 2 jours</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Immersion complète en forêt avec nuit en campement. Supplément : 200€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Session photo avec photographe local</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Accompagnement par un photographe spécialiste des portraits culturels. Supplément : 150€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU GRAND TOUR</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Confort Local et Authenticité</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                      <span className="text-blue-700 text-2xl">🏨</span>
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
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
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Bouar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Berbérati" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce grand tour privilégie des hébergements locaux confortables qui permettent de découvrir l'authenticité de chaque région tout en bénéficiant d'un certain confort. À Bangui, Bouar, Carnot et Berbérati, vous séjournerez dans les meilleurs hôtels locaux, offrant des chambres propres et fonctionnelles avec salle de bain privée, climatisation (quand disponible) et service attentif. Ces hébergements sont choisis pour leur situation pratique et leur capacité à offrir une expérience authentique.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('autres')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'autres' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      VILLES DE L'OUEST (10 NUITS)
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
                              <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 text-sm font-bold">
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
                              L'Hotel Oubangui Palace est l'un des établissements les plus réputés de Bangui. Situé en plein centre-ville, il offre un confort moderne avec des chambres climatisées, une connexion Wi-Fi, et un service de qualité. Le restaurant de l'hôtel propose une cuisine internationale et des spécialités centrafricaines. Sa terrasse offre une belle vue sur la ville. L'hôtel dispose également d'un service de sécurité 24h/24 et d'un personnel francophone attentif. Idéal pour les nuits avant et après le circuit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Autres villes */}
                  {activeHotelTab === 'autres' && (
                    <div className="space-y-16">
                      {/* Hôtels de l'ouest */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Hôtel à Bouar" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Meilleurs Hôtels Locaux</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bouar, Carnot, Berbérati - Ouest RCA
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏨</span>
                                <span>Hôtels locaux confortables</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">❄️</span>
                                <span className="text-sm font-semibold">Climatisation (quand disponible)</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Dans chaque ville de l'ouest (Bouar, Carnot, Berbérati), vous séjournerez dans les meilleurs hôtels locaux disponibles. Ces établissements offrent un confort de base adapté au contexte local : chambres propres avec salle de bain privée, lit confortable avec moustiquaire, et souvent une climatisation fonctionnelle. Les restaurants proposent une cuisine locale simple mais de qualité. Ces hébergements permettent une immersion authentique tout en offrant le confort nécessaire après des journées de découverte. Le personnel est généralement accueillant et attentif aux besoins des voyageurs.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Grand Tour</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tour de l'Ouest" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Mégalithes historiques de Bouar</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-700">$4,599</span>
                    <span className="text-xl line-through text-gray-500">$4,799</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Grand Tour complet</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, véhicule confortable, guide culturel, hébergements, tous repas, droits d'entrée
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Réservez avant le 15 mai 2026 et économisez 200$ par personne
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-06-15">15 Juin 2026</option>
                    <option value="2026-07-13">13 Juillet 2026</option>
                    <option value="2026-08-10">10 Août 2026</option>
                    <option value="2026-11-09">9 Novembre 2026</option>
                    <option value="2026-12-07">7 Décembre 2026</option>
                    <option value="2027-01-04">4 Janvier 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année (éviter mars-mai, saison des pluies intense)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>GRAND TOUR EXCLUSIF</strong> limité à 8 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide culturel spécialisé</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-700 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur le grand tour ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts culturels vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,3.0,19.0,7.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Tour de l'Ouest miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Tour de l'Ouest - 14 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Bangui → Bouar → Carnot → Berbérati
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
                    <span>Véhicule confortable avec chauffeur</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide culturel francophone spécialisé</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>13 nuits en hôtels locaux</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le circuit</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée sites et musées</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Culture traditionnelle" 
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
                    <span className="font-bold text-blue-700">Modéré</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-blue-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs toute l'année</span>
                    <span className="font-bold text-blue-700">Saison sèche optimale</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Encadrement</span>
                    <span className="font-bold text-blue-700">Guide culturel</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-blue-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur culturel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Témoignage Culturel</h4>
                    <p className="text-xs text-gray-600">Marie C., anthropologue 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un circuit exceptionnel pour qui s'intéresse aux cultures vivantes. Les mégalithes de Bouar sont fascinants, les rencontres avec les rois traditionnels inoubliables, et la découverte des savoir-faire artisanaux enrichissante. Le guide était incroyablement connaisseur et nous a ouvert des portes normalement fermées aux visiteurs. Un voyage qui allie parfaitement confort et authenticité."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-blue-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mégalithes 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Traditions 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêts 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Artisanat 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}