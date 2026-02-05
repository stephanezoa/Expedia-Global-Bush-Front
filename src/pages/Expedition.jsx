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
        <h4 className="font-semibold text-center text-lg">Itinéraire Fleuve Oubangui</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=16.0,3.0,22.0,5.5&layer=mapnik&marker=4.3947,18.5582&marker=4.7389,22.8167"
          style={{ border: 0 }}
          allowFullScreen
          title="Expédition Oubangui - Centrafrique"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/4.5/19.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-700 border-2 border-gray-300"></span>
          <span className="text-sm">Navigation Oubangui</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Villages riverains</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Réserve de Dzanga-Sangha</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bangassou</span>
        </div>
      </div>
    </div>
  );
};

export default function Expedition() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bateau');
  const [activeExperienceTab, setActiveExperienceTab] = useState('navigation');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🛶', title: 'Navigation Fluviale', desc: '12 jours d\'expédition sur le majestueux fleuve Oubangui' },
    { icon: '🐘', title: 'Faune Sauvage', desc: 'Observation des éléphants de forêt et primates rares' },
    { icon: '🏞️', title: 'Paysages Intacts', desc: 'Découverte des rives sauvages et préservées du fleuve' },
    { icon: '👨‍👩‍👧‍👦', title: 'Rencontres Authentiques', desc: 'Échanges avec les communautés riveraines' },
    { icon: '🏕️', title: 'Bivouac Fluvial', desc: 'Nuits en campement sur les berges du fleuve' },
    { icon: '🎣', title: 'Pêche Traditionnelle', desc: 'Initiation aux techniques de pêche locales' },
  ];

  const regions = [
    { 
      name: 'Bangui', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Port de départ de l\'expédition, capitale centrafricaine',
      features: ['Port fluvial', 'Préparation', 'Briefing', 'Embarcation']
    },
    { 
      name: 'Oubangui Moyen', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Section centrale du fleuve, paysages de forêts galeries et villages traditionnels',
      features: ['Navigation journalière', 'Villages riverains', 'Forêts galeries', 'Observation faune']
    },
    { 
      name: 'Villages Riverains', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Communautés vivant au rythme du fleuve, économie de subsistance',
      features: ['Rencontres villageoises', 'Artisanat local', 'Cultures vivrières', 'Traditions fluviales']
    },
    { 
      name: 'Dzanga-Sangha', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Réserve de biosphère UNESCO, sanctuaire de biodiversité',
      features: ['Éléphants de forêt', 'Primates rares', 'Forêt tropicale', 'Écotourisme']
    },
    { 
      name: 'Confluence Oubangui-Mbomou', 
      color: 'bg-cyan-100', 
      textColor: 'text-cyan-800', 
      desc: 'Point de rencontre des deux grands fleuves, paysage spectaculaire',
      features: ['Confluence majestueuse', 'Navigation complexe', 'Écosystème unique', 'Point stratégique']
    },
    { 
      name: 'Bangassou', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Port d\'arrivée, ancien comptoir colonial, porte vers l\'est du pays',
      features: ['Arrivée expédition', 'Architecture coloniale', 'Marché local', 'Point de retour']
    },
  ];

  const experiences = [
    { 
      id: 'navigation',
      name: 'Navigation Fluviale', 
      icon: '🛶',
      desc: 'Maîtrise de la pirogue motorisée et lecture des courants du fleuve',
      highlights: ['Pirogue traditionnelle', 'Navigation journalière', 'Lecture des courants', 'Techniques fluviales'],
      details: 'L\'expédition sur l\'Oubangui se fait à bord d\'une pirogue traditionnelle motorisée, spécialement aménagée pour le confort et la sécurité. Vous apprendrez à naviguer sur ce fleuve majestueux, à lire ses courants changeants, à éviter les hauts-fonds et les obstacles. Chaque jour apporte son lot de découvertes : méandres sinueux, bras secondaires, îles flottantes et paysages en constante évolution. La navigation se fait au rythme africain, avec des pauses pour observer la faune, visiter les villages et camper sur les berges.'
    },
    { 
      id: 'faune',
      name: 'Observation Faunique', 
      icon: '🐘',
      desc: 'Découverte de la riche biodiversité des rives de l\'Oubangui',
      highlights: ['Éléphants de forêt', 'Primates endémiques', 'Oiseaux aquatiques', 'Crocodiles'],
      details: 'Le fleuve Oubangui et ses berges abritent une faune exceptionnelle. Vous observerez notamment les éléphants de forêt, plus petits et discrets que leurs cousins de savane, qui viennent s\'abreuver au fleuve. Les rives sont le territoire de nombreuses espèces de primates : chimpanzés, colobes bais, cercopithèques... Sans oublier la riche avifaune avec ses hérons, martins-pêcheurs, aigles pêcheurs et bien d\'autres. Les eaux du fleuve abritent crocodiles, poissons-chats géants et lamantins. Les observations se font toujours dans le respect des animaux et de leur habitat.'
    },
    { 
      id: 'ethnographie',
      name: 'Rencontres Ethnographiques', 
      icon: '👨‍👩‍👧‍👦',
      desc: 'Immersion dans les communautés riveraines et découverte de leurs modes de vie',
      highlights: ['Villages traditionnels', 'Artisanat fluvial', 'Pêcheurs professionnels', 'Agriculteurs riverains'],
      details: 'L\'Oubangui est une véritable artère de vie. Ses rives sont peuplées de communautés dont l\'existence est intimement liée au fleuve. Vous rencontrerez des pêcheurs professionnels qui partageront leurs techniques ancestrales, des agriculteurs cultivant les berges fertiles lors de la décrue, des artisans spécialisés dans la construction de pirogues. Chaque village a ses particularités culturelles, ses traditions, son organisation sociale. Ces rencontres authentiques, préparées avec soin par nos équipes locales, vous offriront une immersion profonde dans la vie quotidienne des Centrafricains des rives.'
    },
    { 
      id: 'bivouac',
      name: 'Bivouac Fluvial', 
      icon: '🏕️',
      desc: 'Installation de campements sur les berges sauvages du fleuve',
      highlights: ['Campement rustique', 'Cuisine au feu de bois', 'Veillées étoilées', 'Ambiance expédition'],
      details: 'Les nuits de cette expédition se passent en bivouac sur les berges de l\'Oubangui. Notre équipe installe des campements confortables et sécurisés, avec tentes individuelles, espace cuisine et sanitaires rudimentaires mais propres. Les soirées sont rythmées par la préparation des repas au feu de bois, le partage des observations de la journée et les veillées sous le ciel étoilé tropical. Ces moments de vie en communauté, au cœur de la nature africaine, créent des liens forts entre participants et font partie intégrante de l\'expérience d\'expédition.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image du fleuve Oubangui */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Expédition sur le Fleuve Oubangui</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🛶</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              12 jours de navigation au cœur de l'Afrique, de Bangui à Bangassou
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
            <span className="text-2xl">🗺️</span>
            <span className="text-sm font-semibold">RCA | AVENTURE FLUVIALE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fleuve Oubangui" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Navigation sur le majestueux Oubangui</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pirogue traditionnelle" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Pirogue traditionnelle motorisée</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Faune du fleuve" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Faune sauvage des berges</p>
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
                <span className="bg-blue-700 text-white px-3 py-1 font-bold">EXPÉDITION</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA3</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">12 jours - Bangui à Bangassou</span>
                <button className="ml-auto border-2 border-blue-700 text-blue-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une aventure fluviale unique au cœur de l'Afrique</span>
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
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Navigation sur l'Oubangui" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Navigation journalière sur le fleuve</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Campement fluvial" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Bivouac sur les berges sauvages</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette expédition unique de 12 jours vous emmène sur le fleuve Oubangui, l'une des plus grandes artères fluviales d'Afrique centrale. De Bangui à Bangassou, vous naviguerez sur plus de 600 kilomètres au cœur de paysages intacts, à la rencontre des communautés riveraines et d'une faune exceptionnelle. Une aventure authentique pour les amateurs de nature sauvage et de rencontres humaines profondes.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Bangui, où vous embarquerez sur une pirogue traditionnelle motorisée spécialement aménagée pour l'expédition. Pendant 10 jours, vous descendrez le fleuve, découvrant ses méandres, ses bras secondaires, ses îles flottantes et ses rives couvertes de forêts galeries. Chaque jour apportera son lot de découvertes : observation de la faune, visites de villages isolés, initiation à la pêche traditionnelle, et nuits en bivouac sur les berges.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Pirogue sur l'Oubangui" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Navigation sur l'Oubangui : l'artère vitale de l'Afrique centrale</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette expédition est conçue pour les voyageurs en quête d'authenticité et d'aventure. Accompagné d'un guide francophone spécialiste du fleuve et d'une équipe locale expérimentée, vous découvrirez une Afrique préservée, loin des sentiers battus. Une expérience qui vous plongera au rythme lent mais passionnant de la vie fluviale africaine, dans le respect des populations locales et de l'environnement.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-blue-50 border-l-4 border-blue-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Les Atouts du Voyage</h3>
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
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Observation faunique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Village riverain" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Circuit</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Navigation fluviale" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Maîtrise de la pirogue sur l'Oubangui</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontres villageoises" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Rencontres avec les communautés riveraines</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Navigation quotidienne</strong> sur le fleuve Oubangui</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Observation de la faune</strong> des berges (éléphants, primates, oiseaux)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Visite de villages isolés</strong> accessibles seulement par le fleuve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Initiation à la pêche traditionnelle</strong> avec les pêcheurs locaux</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Bivouac sur les berges</strong> en campement rustique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Découverte de la réserve</strong> de Dzanga-Sangha</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Apprentissage des techniques</strong> de navigation fluviale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Immersion totale</strong> dans le rythme de vie fluvial</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'Oubangui avec image */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Fleuve Oubangui" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Fleuve Oubangui : Artère Vitale de l'Afrique Centrale</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          L'Oubangui est l'un des principaux affluents du Congo, formant une frontière naturelle entre la République Centrafricaine et la République Démocratique du Congo. Long de plus de 1,100 kilomètres, il prend sa source près de Bangui et rejoint le fleuve Congo près de Mbandaka. Pendant des siècles, il a été la principale voie de communication et de commerce pour les populations de la région. Aujourd'hui encore, il reste vital pour les communautés riveraines qui en dépendent pour le transport, la pêche et l'agriculture. Naviguer sur l'Oubangui, c'est découvrir l'Afrique profonde, authentique et préservée.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Navigation fluviale</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Faune sauvage</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Rencontres authentiques</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Aventure</span>
                          <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Écotourisme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-cyan-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Fleuve Oubangui" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">L'EXPÉDITION OUBANGUI EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Distance parcourue</div>
                        <div className="text-3xl font-bold">600+</div>
                        <div className="text-xs text-white/80">kilomètres de navigation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Jours sur le fleuve</div>
                        <div className="text-3xl font-bold">10</div>
                        <div className="text-xs text-white/80">jours de navigation effective</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Villages visités</div>
                        <div className="text-3xl font-bold">15+</div>
                        <div className="text-xs text-white/80">communautés riveraines</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Nuits en bivouac</div>
                        <div className="text-3xl font-bold">8</div>
                        <div className="text-xs text-white/80">sur les berges du fleuve</div>
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
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysage fluvial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Fluvial de Bangui à Bangassou</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Cette expédition vous emmène de Bangui, la capitale centrafricaine, jusqu'à Bangassou, porte de l'est du pays. Vous naviguerez sur le fleuve Oubangui, découvrant ses paysages variés : forêts galeries, savanes inondables, villages de pêcheurs, zones marécageuses. Le parcours inclut une incursion dans la réserve de Dzanga-Sangha pour observer la faune exceptionnelle. Chaque jour apporte son lot de découvertes et de rencontres avec les communautés dont la vie est rythmée par le fleuve. Les déplacements se font exclusivement par voie fluviale à bord d'une pirogue traditionnelle motorisée.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Navigation quotidienne</div>
                            <div className="text-blue-700 font-bold">5-7h</div>
                          </div>
                          <div>
                            <div className="font-semibold">Espèces animales observables</div>
                            <div className="text-blue-700 font-bold">50+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides spécialisés</div>
                            <div className="text-blue-700 font-bold">2+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Équipage expérimenté</div>
                            <div className="text-blue-700 font-bold">3+</div>
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
                                    : region.name === 'Oubangui Moyen'
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Villages Riverains'
                                    ? 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Dzanga-Sangha'
                                    ? 'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Confluence Oubangui-Mbomou'
                                    ? 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Fluviale et Faunique</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Navigation 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Pirogue traditionnelle" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Faune aquatique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Village riverain" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-cyan-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Bangui</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, embarquement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2-10</div>
                      <div className="text-sm">Navigation Oubangui</div>
                      <div className="text-xs opacity-80">Expédition fluviale, villages, faune</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">11</div>
                      <div className="text-sm">Bangassou</div>
                      <div className="text-xs opacity-80">Arrivée, visite, nuit à l'hôtel</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">12</div>
                      <div className="text-sm">Retour Bangui</div>
                      <div className="text-xs opacity-80">Vol retour, fin du circuit</div>
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
                            <strong>Niveau élevé (4/5)</strong> : Cette expédition requiert une bonne condition physique et une grande adaptabilité. Les journées de navigation durent 5 à 7 heures, les conditions de confort sont rudimentaires (bivouac, sanitaires sommaires), et le climat tropical peut être éprouvant. Une bonne santé et un esprit d'aventure sont essentiels. L'âge minimum recommandé est de 18 ans.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Excellente condition physique nécessaire</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Longues journées en pirogue</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 18 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Adaptabilité aux conditions d'expédition</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures fermées imperméables</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac étanche (30-40L)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🦟</span>
                              <span>Moustiquaire et anti-moustiques</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo étanche</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire haute protection</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale complète</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🩳</span>
                              <span>Vêtements légers et séchage rapide</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🔭</span>
                              <span>Jumelles étanches</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement d'expédition" 
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
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Expédition fluviale" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Expédition Fluviale ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accès à des régions inaccessibles par voie terrestre</h4>
                            <p className="text-sm text-gray-700">
                              Découverte de villages et paysages uniquement accessibles par le fleuve.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Immersion totale dans la vie fluviale africaine</h4>
                            <p className="text-sm text-gray-700">
                              Expérience authentique au rythme du fleuve et de ses communautés.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Observation privilégiée de la faune sauvage</h4>
                            <p className="text-sm text-gray-700">
                              Approche silencieuse des animaux depuis le fleuve.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Expédition éco-responsable et respectueuse</h4>
                            <p className="text-sm text-gray-700">
                              Votre voyage soutient les communautés locales et préserve l'environnement.
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
                          <span className="text-sm text-gray-600">Accueil et préparation de l'expédition fluviale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international M'Poko de Bangui. Accueil par votre guide spécialiste du fleuve. Transfert à votre hôtel en centre-ville avec vue sur l'Oubangui. Installation et repos après le voyage. En fin d'après-midi, visite du port fluvial de Bangui pour découvrir l'embarcation qui vous accompagnera pendant 10 jours : une pirogue traditionnelle motorisée spécialement aménagée pour l'expédition. Briefing détaillé sur le parcours, les consignes de sécurité et la vie à bord. Dîner de bienvenue avec spécialités centrafricaines. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Visite port fluvial - Briefing - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Port de Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Départ en pirogue */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART EN PIROGUE</span>
                          <span className="text-sm text-gray-600">Première journée de navigation sur l'Oubangui</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Début de l'expédition</h4>
                            <p className="text-justify mb-4">
                              Après le petit-déjeuner, transfert au port et embarquement. Départ de Bangui en direction de l'amont. Premières heures d'adaptation à la navigation fluviale. Découverte des paysages des rives : forêts galeries, villages de pêcheurs, activités portuaires. Initiation aux techniques de navigation sur le fleuve. Déjeuner à bord préparé par le cuisinier de l'expédition. Après-midi : continuation de la navigation, observation des oiseaux aquatiques. En fin de journée, installation du premier bivouac sur une berge sauvage. Préparation du campement, installation des tentes. Dîner au feu de bois et première veillée sous les étoiles.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Embarquement - Première navigation - Initiation techniques fluviales - Premier bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Départ en pirogue" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Navigation et premier village */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">NAVIGATION ET PREMIER VILLAGE</span>
                          <span className="text-sm text-gray-600">Rencontre avec une communauté riveraine</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de navigation et rencontre</h4>
                            <p className="text-justify mb-4">
                              Lever avec le soleil, petit-déjeuner au campement. Départ matinal pour profiter des conditions optimales de navigation. Observation de la faune matinale : hérons, martins-pêcheurs, parfois singes sur les rives. Arrêt à midi pour le déjeuner sur une île sablonneuse. Après-midi : arrivée au premier village riverain. Accueil par le chef du village et les habitants. Découverte des activités traditionnelles : pêche, agriculture de berge, construction de pirogues. Échanges avec la population, partage d'un thé. Continuation de la navigation en fin d'après-midi. Installation du bivouac sur une berge isolée. Dîner et veillée autour du feu.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation matinale - Observation faune - Visite village riverain - Bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Village riverain" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Techniques de pêche traditionnelle */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TECHNIQUES DE PÊCHE TRADITIONNELLE</span>
                          <span className="text-sm text-gray-600">Initiation aux méthodes de pêche locales</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée d'initiation à la pêche</h4>
                            <p className="text-justify mb-4">
                              Navigation matinale vers un campement de pêcheurs professionnels. Rencontre avec les pêcheurs qui partageront leurs connaissances du fleuve et de ses ressources. Initiation aux différentes techniques : filets maillants, nasses traditionnelles, pêche à la ligne. Participation à la préparation des engins de pêche. Déjeuner avec les pêcheurs (poisson grillé du jour). Après-midi : mise en pratique avec une sortie de pêche accompagnée. Apprentissage de la lecture des courants et des zones de pêche. Retour au campement des pêcheurs avec les prises. Préparation et partage du poisson pour le dîner. Installation du bivouac à proximité.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Rencontre pêcheurs - Initiation techniques pêche - Sortie pêche pratique - Bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Pêche traditionnelle" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Observation faunique intensive */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">OBSERVATION FAUNIQUE INTENSIVE</span>
                          <span className="text-sm text-gray-600">Journée consacrée à la découverte de la faune des berges</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée d'observation animalière</h4>
                            <p className="text-justify mb-4">
                              Départ très tôt pour l'observation matinale des animaux venant s'abreuver. Navigation silencieuse le long des berges forestières. Observation des primates (colobes bais, cercopithèques, chimpanzés si chanceux). Arrêt pour le petit-déjeuner sur une île. Continuation de la navigation avec focus sur l'avifaune : identification des différentes espèces d'oiseaux aquatiques. Déjeuner à bord. Après-midi : exploration d'un bras secondaire du fleuve, zone privilégiée pour l'observation des crocodiles et tortues aquatiques. En fin de journée, recherche des éléphants de forêt qui viennent parfois boire au fleuve. Installation du bivouac dans une zone réputée pour sa faune.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Observation primates - Avifaune aquatique - Exploration bras secondaire - Recherche éléphants
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Observation faunique" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Zone de Dzanga-Sangha */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ZONE DE DZANGA-SANGHA</span>
                          <span className="text-sm text-gray-600">Approche de la réserve de biosphère UNESCO</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée en zone protégée</h4>
                            <p className="text-justify mb-4">
                              Navigation vers la zone tampon de la réserve de Dzanga-Sangha. Présentation par le guide des enjeux de conservation de cette réserve classée UNESCO. Rencontre avec des éco-gardes qui patrouillent la zone. Navigation dans des paysages de forêt tropicale humide particulièrement préservés. Observation des signes de présence animale (empreintes, excréments, traces de passage). Déjeuner sur une berge particulièrement sauvage. Après-midi : marche d'approche accompagnée par un pisteur local pour tenter d'observer des gorilles ou des éléphants de forêt (sous réserve d'autorisation et selon les mouvements des animaux). Retour à la pirogue en fin d'après-midi. Installation du bivouac en bordure de la zone protégée.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation zone protégée - Rencontre éco-gardes - Observation traces animales - Marche d'approche
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Réserve Dzanga-Sangha" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Grand village fluvial */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">GRAND VILLAGE FLUVIAL</span>
                          <span className="text-sm text-gray-600">Journée complète d'immersion dans un village important</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée d'immersion villageoise</h4>
                            <p className="text-justify mb-4">
                              Arrivée matinale à un village fluvial important, centre commercial pour les villages alentour. Accueil par les autorités locales. Visite du marché où s'échangent poisson, produits agricoles, artisanat. Rencontre avec différents artisans : fabricants de pirogues, vanniers, forgerons. Participation aux activités quotidiennes selon les saisons et les besoins du village. Déjeuner traditionnel préparé par les femmes du village. Après-midi : échanges approfondis avec le chef traditionnel sur l'organisation sociale, les défis du développement, le rôle du fleuve dans la vie communautaire. Cérémonie d'adieu avec danses traditionnelles en fin d'après-midi. Navigation vers un lieu de bivouac proche.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite marché local - Rencontre artisans - Participation vie villageoise - Cérémonie traditionnelle
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Village fluvial" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Confluence Oubangui-Mbomou */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CONFLUENCE OUBANGUI-MBOMOU</span>
                          <span className="text-sm text-gray-600">Point de rencontre des deux grands fleuves</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée géographique</h4>
                            <p className="text-justify mb-4">
                              Navigation vers la spectaculaire confluence de l'Oubangui et du Mbomou. Observation du phénomène de mélange des eaux aux couleurs différentes. Arrêt sur une île au milieu de la confluence pour comprendre la géographie des lieux. Déjeuner pique-nique avec vue panoramique sur la confluence. Après-midi : exploration des deux bras, comparaison des écosystèmes. Navigation sur le Mbomou sur quelques kilomètres pour découvrir ses particularités. Retour vers la confluence en fin d'après-midi. Installation du bivouac sur une berge offrant une vue magnifique sur le point de rencontre des fleuves. Discussion sur l'hydrographie de l'Afrique centrale.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation confluence - Observation mélange eaux - Exploration Mbomou - Bivouac panoramique
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Confluence des fleuves" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Dernière journée de navigation intensive */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DERNIÈRE NAVIGATION INTENSIVE</span>
                          <span className="text-sm text-gray-600">Longue journée vers l'approche de Bangassou</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de navigation</h4>
                            <p className="text-justify mb-4">
                              Lever avant l'aube pour une longue journée de navigation. Petit-déjeuner rapide et départ aux premières lueurs du jour. Navigation non-stop pour profiter des conditions optimales. Observation des changements de paysage à l'approche de Bangassou : berges plus peuplées, activités économiques plus diverses. Déjeuner rapide à bord pour ne pas perdre de temps. Après-midi : continuation de la navigation, synthèse des apprentissages avec le guide. En fin de journée, approche de la zone de Bangassou. Installation du dernier bivouac de l'expédition sur une berge tranquille. Dîner d'adieu de la partie fluviale avec partage des impressions sur l'expérience.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation matinale - Observation paysages - Synthèse apprentissages - Dernier bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Navigation intensive" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Arrivée à Bangassou */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGASSOU</span>
                          <span className="text-sm text-gray-600">Fin de l'expédition fluviale, découverte de Bangassou</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Fin de la navigation</h4>
                            <p className="text-justify mb-4">
                              Dernière matinée de navigation courte vers Bangassou. Arrivée au port de Bangassou, cérémonie d'adieu avec l'équipage de la pirogue. Débarquement et transfert à l'hôtel. Installation dans des chambres avec salle de bain (première douche chaude depuis 9 jours !). Déjeuner à l'hôtel. Après-midi : visite de Bangassou, ancien comptoir colonial. Découverte de l'architecture particulière, du marché central, des activités économiques de cette ville-port. Rencontre avec des acteurs du développement local. Dîner à l'hôtel et nuit dans des lits confortables.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Dernière navigation - Arrivée Bangassou - Visite ville - Nuit à l'hôtel
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Bangassou" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Vol retour vers Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VOL RETOUR VERS BANGUI</span>
                          <span className="text-sm text-gray-600">Retour en avion à Bangui, synthèse de l'expédition</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Retour à Bangui</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Transfert à l'aérodrome de Bangassou. Vol retour vers Bangui (environ 1h30 de vol). Vue aérienne spectaculaire sur le fleuve que vous venez de descendre. Arrivée à Bangui et transfert à l'hôtel. Déjeuner libre. Après-midi : temps libre pour se reposer, faire ses derniers achats de souvenirs. En fin d'après-midi, session de synthèse finale avec le guide : retour sur les expériences vécues, les apprentissages, les moments forts. Dîner d'adieu du circuit dans un restaurant de Bangui. Nuit à l'hôtel.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Vol Bangassou-Bangui - Temps libre - Synthèse finale - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Vol retour Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Départ de Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE BANGUI</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et fin du circuit</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international, matinée libre pour les derniers achats ou visite optionnelle de Bangui. Déjeuner libre. Transfert à l'aéroport international M'Poko de Bangui en fonction de votre horaire de vol. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette expédition fluviale unique : la sensation de naviguer sur le majestueux Oubangui, les rencontres authentiques avec les communautés riveraines, les observations de la faune sauvage, et la satisfaction d'avoir accompli une aventure exceptionnelle au cœur de l'Afrique.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts de l'Expédition</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Navigation fluviale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Villages riverains" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Faune sauvage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Bivouac fluvial" 
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
                      <span className="text-white text-2xl">🛶</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-700">Les Expériences Fluviales et Ethnographiques</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition sur l'Oubangui est une immersion totale dans le monde fluvial africain. Chaque expérience est conçue pour vous faire découvrir un aspect différent de la vie sur le fleuve, des techniques de navigation à la connaissance intime des écosystèmes et des communautés riveraines.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Navigation sur l'Oubangui" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Faune des berges" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontres villageoises" 
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
                                  exp.id === 'navigation' 
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'faune'
                                    ? 'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'ethnographie'
                                    ? 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'navigation' ? 4.5 : 
                                   exp.id === 'faune' ? 4.2 :
                                   exp.id === 'ethnographie' ? 4.7 :
                                   4.0} 
                              lng={exp.id === 'navigation' ? 18.0 : 
                                   exp.id === 'faune' ? 18.5 :
                                   exp.id === 'ethnographie' ? 17.8 :
                                   18.2} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Fluviale et Culturelle</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600" 
                          alt="Navigation fluviale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Navigation sur l'Oubangui</h5>
                          <p className="text-sm text-gray-700">Maîtrise de la pirogue sur le fleuve majestueux</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1550358864-518f202c02ba?w=600" 
                          alt="Faune sauvage" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Observation Faunique</h5>
                          <p className="text-sm text-gray-700">Découverte de la riche biodiversité des berges</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" 
                          alt="Rencontres villageoises" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Rencontres Ethnographiques</h5>
                          <p className="text-sm text-gray-700">Immersion dans les communautés riveraines</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bivouac fluvial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Pêche traditionnelle" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Port de Bangui" 
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
                          <h4 className="font-semibold mb-2">Survol en ULM du fleuve</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Vue aérienne exceptionnelle sur l'Oubangui et ses méandres. Supplément : 250€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit chez l'habitant</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience d'une nuit dans une famille riveraine. Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier construction de pirogue</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Apprentissage des techniques traditionnelles de construction. Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Extension vers la réserve complète</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            2 jours supplémentaires dans la réserve de Dzanga-Sangha. Supplément : 400€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Bivouac Fluvial et Hôtels</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                      <span className="text-blue-700 text-2xl">🏕️</span>
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
                          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bivouac fluvial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Bangassou" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette expédition combine différentes formes d'hébergement adaptées à l'aventure fluviale. À Bangui et Bangassou, vous séjournerez dans des hôtels confortables. Pendant les 8 nuits sur le fleuve, vous expérimenterez le bivouac en campement rustique sur les berges de l'Oubangui. Cette immersion totale dans la nature est une part essentielle de l'expérience d'expédition. Tous les campements sont installés avec soin par notre équipe, garantissant sécurité, propreté et respect de l'environnement.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bateau')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bateau' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUAC FLUVIAL (8 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('hotels')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'hotels' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      HÔTELS (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bivouac */}
                  {activeHotelTab === 'bateau' && (
                    <div className="space-y-16">
                      {/* Campement fluvial */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600" 
                                alt="Bivouac fluvial" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 text-sm font-bold">
                                EXPÉDITION
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac sur les Berges de l'Oubangui</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Berges sauvages du fleuve Oubangui, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Emplacements naturels préservés</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">⛺</span>
                                <span className="text-sm font-semibold">Tentes individuelles</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Cuisine au feu de bois</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚽</span>
                                <span className="text-sm font-semibold">Sanitaires sommaires</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Les nuits en bivouac sont une part essentielle de l'expérience d'expédition. Notre équipe installe des campements confortables et sécurisés sur des berges sélectionnées pour leur beauté naturelle et leur tranquillité. Chaque participant dispose d'une tente individuelle de qualité professionnelle avec matelas auto-gonflant. La cuisine est préparée au feu de bois par notre cuisinier accompagnateur, avec des produits frais achetés dans les villages rencontrés. Les sanitaires sont rudimentaires mais maintenus propres (toilettes sèches, douche solaire). Les veillées autour du feu, sous le ciel étoilé tropical, créent une atmosphère unique de camaraderie et d'aventure partagée.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Hôtels */}
                  {activeHotelTab === 'hotels' && (
                    <div className="space-y-16">
                      {/* Hotel Oubangui Palace Bangui */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hotel Oubangui Palace" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Oubangui Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Bangui, République Centrafricaine (2 nuits)
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Vue sur le fleuve Oubangui</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Oubangui Palace est l'établissement de référence à Bangui. Situé en centre-ville avec une vue magnifique sur le fleuve, il offre tout le confort nécessaire avant et après l'expédition. Les chambres climatisées sont spacieuses et équipées de salle de bain privée, Wi-Fi, et télévision. Le restaurant de l'hôtel propose une cuisine internationale et des spécialités centrafricaines. L'hôtel dispose également d'un service de sécurité 24h/24, d'un personnel francophone attentif, et de toutes les commodités pour préparer sereinement l'aventure.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Hotel des Chutes à Bangassou */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600" 
                              alt="Hotel des Chutes" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel des Chutes</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bangassou, région de l'Est, République Centrafricaine (1 nuit)
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏞️</span>
                                <span>Proche des chutes de la Mbomou</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale excellente</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Douche chaude</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel des Chutes à Bangassou est une oasis de confort après les nuits en bivouac. Situé dans un jardin tropical, il offre des chambres simples mais propres avec salle de bain privée et ventilateur. Le restaurant est réputé pour sa cuisine locale de qualité. Après 8 nuits sous tente, vous apprécierez particulièrement la douche chaude et le lit confortable. L'hôtel est géré par une famille locale très accueillante qui connaît bien la région et saura vous conseiller pour vos visites à Bangassou.
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
                  <span className="text-2xl">🛶</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Expédition Oubangui" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Aventure fluviale unique en Afrique centrale</p>
                  </div>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-700">$3,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Expédition complète</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide spécialiste francophone, hébergements, tous repas, vol Bangassou-Bangui
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
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2026-07-08">8 Juillet 2026</option>
                    <option value="2026-08-05">5 Août 2026</option>
                    <option value="2026-09-02">2 Septembre 2026</option>
                    <option value="2027-06-09">9 Juin 2027</option>
                    <option value="2027-07-07">7 Juillet 2027</option>
                    <option value="2027-08-04">4 Août 2027</option>
                    <option value="2027-09-01">1 Septembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juin à septembre (saison sèche, meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION EXCLUSIVE</strong> limitée à 4 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un spécialiste du fleuve</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur l'expédition ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts aventure vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=16.0,3.0,22.0,5.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Oubangui miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Expédition Oubangui - 12 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Bangui → Navigation Oubangui → Bangassou
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
                    <span>Navigation complète en pirogue motorisée</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste du fleuve francophone</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>8 nuits en bivouac (tente fournie)</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vol Bangassou-Bangui</span>
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
                    src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Expédition fluviale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de l'expédition</span>
                    <span className="font-bold text-blue-700">Élevé</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum requis</span>
                    <span className="font-bold text-blue-700">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs juin à septembre</span>
                    <span className="font-bold text-blue-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-blue-700">Expert fluvial</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-blue-700">4 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens, méningite
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Témoignage Aventurier</h4>
                    <p className="text-xs text-gray-600">Marc L., explorateur 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expédition extraordinaire pour les amateurs d'aventure authentique. Naviguer sur l'Oubangui, dormir sur ses berges sauvages, rencontrer des communautés dont la vie est rythmée par le fleuve... Une immersion totale dans l'Afrique profonde. L'équipe était exceptionnelle, le guide connaissait le fleuve comme sa poche. Une aventure humaine et naturelle inoubliable."
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
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Navigation 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pirogue 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Faune 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Village 1" 
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