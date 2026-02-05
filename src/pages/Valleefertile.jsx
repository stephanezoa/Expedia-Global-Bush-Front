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
        <h4 className="font-semibold text-center text-lg">Itinéraire Vallées Fertiles Angola</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,-10.0,15.5,-7.5&layer=mapnik&marker=-8.8383,13.2344&marker=-9.2975,14.9114"
          style={{ border: 0 }}
          allowFullScreen
          title="Vallées Fertiles Angola - Luanda à Ndalatando"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/-9.0/14.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Ndalatando</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Vallée du Lucala</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plantations de Café</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Culture Kimbundu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-pink-600 border-2 border-gray-300"></span>
          <span className="text-sm">Artisanat Traditionnel</span>
        </div>
      </div>
    </div>
  );
};

export default function Valleefertile() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('luanda');
  const [activeExperienceTab, setActiveExperienceTab] = useState('vallées');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌾', title: 'Vallées Fertiles', desc: 'Découverte des paysages agricoles les plus productifs d\'Angola' },
    { icon: '🏺', title: 'Artisanat Kimbundu', desc: 'Rencontre avec les artisans et découverte des techniques ancestrales' },
    { icon: '☕', title: 'Culture du Café', desc: 'Visite de plantations et initiation à la production caféière' },
    { icon: '🎭', title: 'Danses Traditionnelles', desc: 'Spectacles de danses et musiques du peuple Kimbundu' },
    { icon: '🏞️', title: 'Rivière Lucala', desc: 'Balades le long de la rivière et découverte de ses paysages' },
    { icon: '🛖', title: 'Architecture Rurale', desc: 'Découverte des habitations traditionnelles et de l\'architecture vernaculaire' },
  ];

  const regions = [
    { 
      name: 'Luanda', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale dynamique, point de départ vers les terres agricoles',
      features: ['Arrivée internationale', 'Culture urbaine', 'Préparation voyage', 'Départ vers l\'intérieur']
    },
    { 
      name: 'Ndalatando', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville principale de la province de Cuanza Norte, cœur des vallées fertiles',
      features: ['Capitale provinciale', 'Marchés agricoles', 'Culture Kimbundu', 'Base exploration']
    },
    { 
      name: 'Vallée du Lucala', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Fertile vallée agricole irriguée par la rivière Lucala',
      features: ['Agriculture traditionnelle', 'Paysages verdoyants', 'Rivière Lucala', 'Communautés rurales']
    },
    { 
      name: 'Plantations de Café', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Domaines caféiers historiques et exploitations familiales',
      features: ['Visite plantations', 'Récolte café', 'Processus production', 'Dégustation']
    },
    { 
      name: 'Villages Kimbundu', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Communautés rurales préservant les traditions du peuple Kimbundu',
      features: ['Architecture traditionnelle', 'Artisanat local', 'Danses rituelles', 'Médecine traditionnelle']
    },
    { 
      name: 'Marchés Ruraux', 
      color: 'bg-cyan-100', 
      textColor: 'text-cyan-800', 
      desc: 'Marchés animés où se concentre la vie économique et sociale',
      features: ['Produits agricoles', 'Artisanat local', 'Rencontres', 'Échanges culturels']
    },
  ];

  const experiences = [
    { 
      id: 'vallées',
      name: 'Vallées Fertiles', 
      icon: '🌾',
      desc: 'Exploration des paysages agricoles les plus productifs et verdoyants d\'Angola',
      highlights: ['Agriculture traditionnelle', 'Paysages verdoyants', 'Rivière Lucala', 'Communautés paysannes'],
      details: 'Les vallées fertiles de la province de Cuanza Norte sont le grenier d\'Angola. Irriguées par la rivière Lucala et ses affluents, ces terres agricoles produisent une grande variété de cultures : maïs, haricots, manioc, patates douces, fruits tropicaux et bien sûr le célèbre café. Vous découvrirez des paysages de collines verdoyantes parsemées de villages traditionnels, où l\'agriculture se pratique encore selon des méthodes ancestrales. La rencontre avec les paysans vous permettra de comprendre leur relation à la terre, leur savoir-faire agricole et leur mode de vie rythmé par les saisons. Ces vallées offrent une vision de l\'Angola rural, authentique et préservé.'
    },
    { 
      id: 'culture',
      name: 'Culture Kimbundu', 
      icon: '🏺',
      desc: 'Immersion dans les traditions, l\'artisanat et les rituels du peuple Kimbundu',
      highlights: ['Artisanat traditionnel', 'Danses rituelles', 'Musique traditionnelle', 'Coutumes ancestrales'],
      details: 'Le peuple Kimbundu, principal groupe ethnique de la région, a préservé une riche culture traditionnelle. Vous découvrirez leur artisanat raffiné : poterie, vannerie, tissage et sculpture sur bois. Les femmes Kimbundu sont particulièrement réputées pour leurs paniers et leurs poteries aux motifs géométriques traditionnels. Vous assisterez à des démonstrations de danses rituelles accompagnées de musique traditionnelle (marimba, tambours, sanza). Les anciens partageront avec vous leurs connaissances sur la médecine traditionnelle à base de plantes et les rites coutumiers. Cette immersion culturelle vous permettra de comprendre l\'organisation sociale, les croyances et l\'art de vivre de ce peuple qui a su conserver son identité malgré les influences modernes.'
    },
    { 
      id: 'cafe',
      name: 'Route du Café', 
      icon: '☕',
      desc: 'Découverte de la culture caféière angolaise, de la plantation à la tasse',
      highlights: ['Visite plantations', 'Processus récolte', 'Séchage grains', 'Dégustation café'],
      details: 'La province de Cuanza Norte est le berceau historique de la culture du café en Angola. Au XIXe et XXe siècles, l\'Angola était l\'un des plus grands producteurs de café au monde. Vous visiterez des plantations familiales où le café est encore cultivé selon des méthodes traditionnelles. Vous suivrez tout le processus : de la récolte manuelle des cerises de café au séchage des grains au soleil, en passant par le dépulpage. Une initiation à la torréfaction artisanale et à la dégustation vous permettra d\'apprécier les qualités uniques du café angolais, réputé pour son corps et son arôme. Cette expérience est aussi l\'occasion de comprendre l\'histoire économique de la région et les défis actuels de la filière café.'
    },
    { 
      id: 'artisanat',
      name: 'Artisanat Traditionnel', 
      icon: '🎨',
      desc: 'Rencontre avec les artisans et initiation aux techniques artisanales ancestrales',
      highlights: ['Poterie Kimbundu', 'Vannerie', 'Sculpture sur bois', 'Tissage traditionnel'],
      details: 'L\'artisanat traditionnel de la région de Cuanza Norte est d\'une richesse exceptionnelle. Vous rencontrerez des artisans spécialisés dans différentes techniques : les potières qui façonnent l\'argile selon des méthodes ancestrales pour créer des ustensiles domestiques et des objets rituels ; les vanniers qui utilisent des fibres végétales locales pour fabriquer des paniers, des nattes et des chapeaux ; les sculpteurs sur bois qui réalisent des statues, des masques et des objets utilitaires ; et les tisserands qui produisent des textiles aux motifs traditionnels. Vous pourrez vous initier à certaines de ces techniques sous la guidance des artisans. Ces rencontres sont aussi l\'occasion d\'acquérir des pièces uniques directement auprès de leurs créateurs, contribuant ainsi à l\'économie locale.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image des vallées fertiles */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Vallées Fertiles et Patrimoine Culturel</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🌾</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              5 jours d'immersion dans les paysages agricoles et les traditions du peuple Kimbundu au cœur de l'Angola
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">5</div>
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
            <span className="text-2xl">🏺</span>
            <span className="text-sm font-semibold">ANGOLA | CULTURE KIMBUNDU</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Vallées fertiles d'Angola" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Paysages agricoles verdoyants des vallées fertiles</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Culture Kimbundu" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Artisanat traditionnel du peuple Kimbundu</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plantations de café" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Plantations caféières historiques de Cuanza Norte</p>
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
                <span className="bg-blue-600 text-white px-3 py-1 font-bold">CULTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO8</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">5 jours - Luanda à Ndalatando</span>
                <button className="ml-auto border-2 border-blue-600 text-blue-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion authentique dans la culture et l'agriculture traditionnelles angolaises</span>
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
                      src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Vallées fertiles" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Paysages agricoles verdoyants des vallées de Cuanza Norte</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Artisanat Kimbundu" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Artisanat traditionnel du peuple Kimbundu</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 5 jours vous emmène à la découverte des vallées fertiles de la province de Cuanza Norte et du riche patrimoine culturel du peuple Kimbundu. Une immersion authentique dans l'Angola rural, entre paysages agricoles préservés, traditions ancestrales et rencontres humaines chaleureuses.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Luanda, d'où vous prendrez la route vers l'intérieur des terres pour découvrir Ndalatando, capitale de la province. En seulement 5 jours, vous explorerez les fertiles vallées irriguées par la rivière Lucala, visiterez des plantations caféières familiales, rencontrerez des artisans Kimbundu maîtrisant des techniques ancestrales, assisterez à des démonstrations de danses traditionnelles, et découvrirez les marchés ruraux animés. Un voyage court mais intense en découvertes culturelles et en rencontres authentiques.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Vallées fertiles" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Les vallées fertiles d'Angola : un patrimoine agricole et culturel exceptionnel</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux souhaitant découvrir l'Angola authentique, loin des sentiers battus. Parfait pour ceux qui s'intéressent à l'agriculture traditionnelle, aux cultures ethniques et aux échanges humains sincères. Accompagné d'un guide francophone spécialiste de la région, vous découvrirez en profondeur les traditions préservées du peuple Kimbundu et les paysages agricoles qui ont fait la richesse de cette région. Un voyage respectueux des populations locales qui contribue directement à l'économie rurale.
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
                        alt="Plantations caféières" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Marchés ruraux" 
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
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Vallées fertiles" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Immersion dans les paysages agricoles préservés</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Kimbundu" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Rencontre avec le peuple Kimbundu et ses traditions</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Exploration des vallées fertiles</strong> de la rivière Lucala</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Visite de plantations caféières</strong> et initiation à la culture du café</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Rencontre avec des artisans Kimbundu</strong> et découverte de leurs techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Assistance à des démonstrations de danses</strong> et musiques traditionnelles</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Découverte des marchés ruraux</strong> et de leurs produits agricoles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Initiation à l'agriculture traditionnelle</strong> avec les paysans locaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Dégustation de la cuisine rurale</strong> préparée avec des produits locaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Rencontres authentiques</strong> avec les communautés rurales</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la culture Kimbundu avec image */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Culture Kimbundu" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Peuple Kimbundu : Gardien des Traditions Angolaises</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Le peuple Kimbundu est l'un des principaux groupes ethniques d'Angola, principalement établi dans les provinces de Luanda, Bengo, Malanje et Cuanza Norte. Avec une histoire qui remonte à plusieurs siècles, les Kimbundu ont développé une culture riche et complexe. Leur langue, le kimbundu, est la deuxième langue bantoue la plus parlée en Angola après l'umbundu. Leur organisation sociale traditionnelle est basée sur des lignages matrilinéaires, et leur spiritualité intègre le culte des ancêtres et la croyance en un dieu créateur nommé Nzambi. L'artisanat kimbundu est particulièrement raffiné, avec une poterie distinctive, une vannerie complexe et des sculptures sur bois représentant des figures ancestrales. Les danses traditionnelles, accompagnées de musique de marimba et de tambours, jouent un rôle important dans les cérémonies et les rassemblements sociaux. Aujourd'hui, tout en s'adaptant à la modernité, les Kimbundu préservent fièrement leurs traditions, faisant de cette culture un pilier de l'identité angolaise.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Peuple matrilinéaire</span>
                          <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Artisanat raffiné</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Langue kimbundu</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Danses traditionnelles</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Spiritualité ancestrale</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Vallées fertiles" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">LES VALLÉES FERTILES EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Altitude Ndalatando</div>
                        <div className="text-3xl font-bold">670</div>
                        <div className="text-xs text-white/80">mètres (climat tempéré)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Longueur rivière Lucala</div>
                        <div className="text-3xl font-bold">240</div>
                        <div className="text-xs text-white/80">km (affluent du Kwanza)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Pluviométrie annuelle</div>
                        <div className="text-3xl font-bold">1,200</div>
                        <div className="text-xs text-white/80">mm (climat tropical)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Population Kimbundu</div>
                        <div className="text-3xl font-bold">2.5M</div>
                        <div className="text-xs text-white/80">personnes (2e groupe)</div>
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
                          alt="Plantations de café" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Complet Luanda-Ndalatando-Vallées</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce voyage court mais intense vous emmène de Luanda vers le cœur agricole de l'Angola. Route vers Ndalatando, capitale de la province de Cuanza Norte. De cette base, exploration des fertiles vallées irriguées par la rivière Lucala, visite de plantations caféières familiales, rencontres avec des artisans Kimbundu dans leurs villages traditionnels, découverte des marchés ruraux animés, et immersion dans la culture traditionnelle à travers danses, musique et artisanat. Retour à Luanda par la même route, avec des arrêts complémentaires selon les découvertes du voyage.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours dans les vallées</div>
                            <div className="text-blue-600 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Transport privé</div>
                            <div className="text-blue-600 font-bold">Inclus</div>
                          </div>
                          <div>
                            <div className="font-semibold">Rencontres artisanales</div>
                            <div className="text-blue-600 font-bold">5+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guide spécialiste culture</div>
                            <div className="text-blue-600 font-bold">1</div>
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
                                    : region.name === 'Ndalatando'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Vallée du Lucala'
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Plantations de Café'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Villages Kimbundu'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie des Vallées Fertiles</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Vallées 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Café 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Marchés 1" 
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
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Luanda</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, début voyage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Ndalatando</div>
                      <div className="text-xs opacity-80">Route, arrivée, première découverte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Vallées & Culture</div>
                      <div className="text-xs opacity-80">Exploration vallées, artisanat, café</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Retour Luanda</div>
                      <div className="text-xs opacity-80">Dernières découvertes, retour capitale</div>
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
                            <strong>Niveau facile (2/5)</strong> : Ce voyage culturel est accessible à la plupart des personnes. Les déplacements se font en véhicule confortable sur routes goudronnées et pistes en bon état. Les visites impliquent des marches légères dans les villages et les champs. Les rencontres avec les communautés se font dans le respect des traditions locales. L'âge minimum recommandé est de 10 ans (accompagné). Le climat est tropical avec des températures agréables en altitude (Ndalatando est à 670m). Parfait pour les amateurs de culture et de rencontres authentiques.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Accessible à tous, condition normale suffisante</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Marches légères dans villages et champs</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 10 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Climat tropical tempéré en altitude</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>👟</span>
                              <span>Chaussures confortables pour la marche</span>
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
                              <span>🧥</span>
                              <span>Veste légère pour les soirées</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo (demander avant de photographier)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💧</span>
                              <span>Gourde ou bouteille d'eau réutilisable</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎁</span>
                              <span>Petits cadeaux pour les enfants (stylos, cahiers)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale personnelle basique</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement rural" 
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
                          alt="Culture Kimbundu" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Voyage Culturel ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Immersion authentique dans l'Angola rural préservé</h4>
                            <p className="text-sm text-gray-700">
                              Découverte des vallées fertiles et des communautés rurales loin du tourisme de masse.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Rencontres profondes avec le peuple Kimbundu</h4>
                            <p className="text-sm text-gray-700">
                              Échanges authentiques avec artisans, paysans et gardiens des traditions.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte de l'agriculture et de l'artisanat traditionnels</h4>
                            <p className="text-sm text-gray-700">
                              Initiation aux techniques ancestrales de culture et de création artisanale.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Contribution directe à l'économie rurale locale</h4>
                            <p className="text-sm text-gray-700">
                              Votre voyage soutient directement les artisans et producteurs locaux.
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
                          <span className="text-sm text-gray-600">Accueil et préparation pour le départ vers les vallées fertiles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international Quatro de Fevereiro de Luanda. Accueil par votre guide francophone spécialiste de la culture Kimbundu. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur le circuit de 5 jours dans les vallées fertiles. Introduction à la culture Kimbundu et aux traditions que vous découvrirez. Préparation des bagages pour le départ du lendemain. Option selon l'heure d'arrivée : petite découverte de Luanda avec focus sur les aspects culturels. Dîner de bienvenue dans un restaurant de cuisine angolaise traditionnelle. Nuit à l'hôtel à Luanda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing culturel - Préparation - Dîner de bienvenue
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

                  {/* Jour 2 - Route vers Ndalatando */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS NDALATANDO</span>
                          <span className="text-sm text-gray-600">Traversée vers le cœur agricole de l'Angola et première immersion rurale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée route vers l'intérieur</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Luanda en direction de l'intérieur des terres, vers la province de Cuanza Norte. Traversée de paysages qui évoluent progressivement : de la zone côtière aux premières collines agricoles. Arrêts en route pour observer les changements de végétation et d'agriculture. Arrivée à Ndalatando, capitale provinciale située à 670m d'altitude, en milieu de journée. Installation à votre hôtel. Déjeuner de spécialités locales. Après-midi : première découverte de Ndalatando avec visite du marché central, véritable cœur économique et social de la région. Rencontre avec des producteurs agricoles et découverte des produits de la région. Première initiation à la culture Kimbundu avec votre guide. En fin de journée, point de vue sur les vallées environnantes. Dîner de cuisine rurale. Nuit à l'hôtel à Ndalatando.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers intérieur - Arrivée Ndalatando - Marché central - Rencontres producteurs - Dîner rural
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Ndalatando" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Vallées fertiles et artisanat */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VALLÉES FERTILES ET ARTISANAT</span>
                          <span className="text-sm text-gray-600">Exploration des paysages agricoles et rencontre avec les artisans Kimbundu</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée agricole et artisanale</h4>
                            <p className="text-justify mb-4">
                              Journée complète d'exploration des vallées fertiles de la région. Départ matinal vers la vallée de la rivière Lucala. Découverte des paysages agricoles verdoyants : champs de maïs, haricots, manioc, patates douces. Rencontre avec des paysans travaillant leurs terres selon des méthodes traditionnelles. Initiation aux techniques agricoles locales. Visite d'un village Kimbundu traditionnel. Déjeuner pique-nique préparé avec des produits locaux. Après-midi : rencontre avec des artisans Kimbundu spécialisés dans la poterie traditionnelle. Démonstration des techniques de façonnage de l'argile et décoration selon les motifs traditionnels. Possibilité d'essayer sous guidance. Rencontre avec des vanniers travaillant les fibres végétales. En fin de journée, retour à Ndalatando. Dîner libre. Nuit à l'hôtel à Ndalatando.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Vallée Lucala - Agriculture traditionnelle - Village Kimbundu - Artisanat poterie - Retour Ndalatando
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Vallées fertiles" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Café et traditions Kimbundu */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CAFÉ ET TRADITIONS KIMBUNDU</span>
                          <span className="text-sm text-gray-600">Découverte de la culture caféière et immersion dans les traditions ancestrales</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée café et culture</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de la culture du café, historique dans la région. Visite d'une plantation caféière familiale. Explications sur l'histoire de la culture du café en Angola, qui fut un des premiers producteurs mondiaux. Découverte du processus de production : de la récolte des cerises de café au séchage des grains. Initiation à la torréfaction artisanale. Déjeuner dans la plantation, avec dégustation du café local. Après-midi : immersion dans les traditions Kimbundu avec visite d'un autre village traditionnel. Rencontre avec les anciens du village qui partageront leurs connaissances sur la médecine traditionnelle à base de plantes. Démonstration de danses traditionnelles Kimbundu accompagnées de musique de marimba et de tambours. Participation possible aux danses. En fin de journée, retour à Ndalatando. Dîner d'adieu avec spécialités régionales. Nuit à l'hôtel à Ndalatando.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Plantation café - Histoire café angolais - Traditions Kimbundu - Danses traditionnelles - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Café angolais" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Retour à Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR À LUANDA</span>
                          <span className="text-sm text-gray-600">Dernières découvertes et retour vers la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Dernière matinée à Ndalatando selon les préférences du groupe : retour au marché pour les derniers achats d'artisanat, visite complémentaire d'un atelier d'artisanat, ou temps libre. Départ vers Luanda en milieu de matinée. Arrêts en route pour des découvertes complémentaires selon les intérêts du groupe. Déjeuner en route dans un restaurant local. Arrivée à Luanda en fin d'après-midi. Selon l'horaire de votre vol international : temps libre pour les derniers achats de souvenirs ou transfert direct à l'aéroport. En fonction de l'horaire de votre vol, transfert à l'aéroport international Quatro de Fevereiro de Luanda. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette immersion dans les vallées fertiles angolaises : les paysages agricoles préservés, les rencontres chaleureuses avec le peuple Kimbundu, la découverte de l'artisanat traditionnel et de la culture du café, et l'authenticité de l'Angola rural.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Matinée libre Ndalatando - Route retour Luanda - Déjeuner en route - Transfert aéroport - Départ
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Retour Luanda" 
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
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Vallées" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Café" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Marchés" 
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
                      <span className="text-white text-2xl">🌾</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-600">Les Expériences Culturelles des Vallées</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce voyage de 5 jours vous offre une immersion complète dans la culture et l'agriculture traditionnelles des vallées fertiles d'Angola. Chaque expérience est conçue pour vous faire découvrir un aspect différent de la vie rurale et des traditions préservées du peuple Kimbundu.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Vallées fertiles" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat Kimbundu" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture du café" 
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
                                  exp.id === 'vallées' 
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'culture'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'cafe'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'vallées' ? -9.3 : 
                                   exp.id === 'culture' ? -9.2975 :
                                   exp.id === 'cafe' ? -9.2 :
                                   -9.25} 
                              lng={exp.id === 'vallées' ? 14.8 : 
                                   exp.id === 'culture' ? 14.9114 :
                                   exp.id === 'cafe' ? 14.85 :
                                   14.88} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Culturelle et Agricole</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                          alt="Vallées fertiles" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Agriculture Traditionnelle</h5>
                          <p className="text-sm text-gray-700">Paysages agricoles préservés des vallées</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Artisanat Kimbundu" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Artisanat Kimbundu</h5>
                          <p className="text-sm text-gray-700">Techniques ancestrales de poterie et vannerie</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?w=600" 
                          alt="Culture du café" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Route du Café</h5>
                          <p className="text-sm text-gray-700">Histoire et culture de la production caféière</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Agriculture" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Artisanat" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Traditions" 
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
                          <h4 className="font-semibold mb-2">Atelier de poterie Kimbundu approfondi</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Session de 3 heures avec une potière traditionnelle. Supplément : 60€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Initiation à la musique traditionnelle</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Cours de marimba ou de tambour avec musicien local. Supplément : 50€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Visite d'une exploitation agricole familiale</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Journée complète avec une famille de paysans. Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Extension vers les chutes de Kalandula</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Excursion d'une journée aux magnifiques chutes d'eau. Supplément : 120€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels Confortables en Milieu Rural</h3>
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
                          alt="Hôtel à Ndalatando" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Ambiance rurale" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements confortables et authentiques, adaptés à la découverte du milieu rural angolais. À Luanda, vous séjournerez dans un hôtel 4* offrant tout le confort moderne. À Ndalatando, l'hébergement est dans un hôtel 3* simple mais propre et bien situé, offrant une immersion dans l'ambiance de la ville provinciale. Ces établissements sont choisis pour leur authenticité, leur rapport qualité-prix et leur emplacement pratique pour les explorations. Tous offrent des chambres avec salle de bain privée, climatisation (ou ventilation selon), et un service de base. L'accent est mis sur l'expérience culturelle plutôt que sur le luxe, pour une immersion plus authentique dans la vie locale.
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
                      LUANDA (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('ndalatando')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ndalatando' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      NDALATANDO (3 NUITS)
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

                  {/* Contenu des hébergements - Ndalatando */}
                  {activeHotelTab === 'ndalatando' && (
                    <div className="space-y-16">
                      {/* Hotel Ndalatando Plaza */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?w=600" 
                                alt="Hotel Ndalatando Plaza" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Ndalatando Plaza</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Ndalatando, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Ndalatando</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌀</span>
                                <span className="text-sm font-semibold">Climatisation</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📶</span>
                                <span className="text-sm font-semibold">Wifi dans les parties communes</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Ndalatando Plaza est l'hôtel principal de la ville, situé en plein centre-ville à proximité du marché et des principales attractions. Les chambres sont simples mais propres et confortables, avec climatisation, salle de bain privée, et TV. L'hôtel dispose d'un restaurant proposant une cuisine angolaise traditionnelle, d'un bar, et d'une terrasse. Le service est attentif et l'ambiance est typique des villes provinciales angolaises. L'emplacement est idéal pour explorer Ndalatando à pied et sert de base parfaite pour les excursions dans les vallées environnantes. Un hébergement authentique qui permet une immersion dans la vie locale.
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
                  <span className="text-2xl">🌾</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Voyage Culturel</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Vallées fertiles" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Paysages agricoles préservés des vallées fertiles d'Angola</p>
                  </div>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-600">$1,699</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Voyage complet</div>
                  <div className="mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Transport privé, guide francophone spécialiste culture, hébergements, petits-déjeuners, visites, rencontres
                  </div>
                  <div className="mt-2 text-xs bg-green-50 text-green-700 p-2 rounded">
                    🌱 VOYAGE RESPONSABLE : Contribution directe aux communautés rurales
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
                    <option value="2026-03-12">12 Mars 2026</option>
                    <option value="2026-04-09">9 Avril 2026</option>
                    <option value="2026-05-07">7 Mai 2026</option>
                    <option value="2026-06-04">4 Juin 2026</option>
                    <option value="2026-07-02">2 Juillet 2026</option>
                    <option value="2026-07-30">30 Juillet 2026</option>
                    <option value="2026-08-27">27 Août 2026</option>
                    <option value="2026-09-24">24 Septembre 2026</option>
                    <option value="2026-10-22">22 Octobre 2026</option>
                    <option value="2026-11-19">19 Novembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mars à novembre (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>VOYAGE CULTUREL AUTHENTIQUE</strong> limité à 10 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste de la culture Kimbundu</p>
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
                    Nos experts de la culture angolaise vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,-10.0,15.5,-7.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte vallées fertiles miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Vallées Fertiles Angola - 5 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Luanda → Ndalatando → Vallées → Retour
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
                    <span>Transport privé tout au long du circuit</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste culture Kimbundu</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4 nuits en hôtels 3*/4*</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4 petits-déjeuners</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites guidées et rencontres artisanales</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Démonstrations de danses traditionnelles</span>
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
                    alt="Vallées fertiles" 
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
                    <span className="font-bold text-blue-600">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-blue-600">10 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saison idéale</span>
                    <span className="font-bold text-blue-600">Mars à novembre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Type de voyage</span>
                    <span className="font-bold text-blue-600">Culture et rencontres</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-blue-600">10 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins recommandés : Fièvre jaune (obligatoire), Hépatites A et B, Typhoïde, Antipaludéens
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
                    <p className="text-xs text-gray-600">Thomas R., anthropologue 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un voyage exceptionnel pour qui s'intéresse à l'Afrique authentique. Les vallées fertiles sont d'une beauté paisible, et les rencontres avec le peuple Kimbundu ont été profondément humaines. J'ai été particulièrement touché par l'accueil des artisans qui nous ont ouvert leurs ateliers et partagé leurs techniques ancestrales. La découverte de la culture du café et de son histoire en Angola était fascinante. Le guide était incroyablement connaisseur et nous a permis d'avoir des échanges vraiment significatifs avec les communautés. Un voyage qui restera gravé dans ma mémoire."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Galerie Photographique des Vallées Fertiles</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Vallées 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Artisanat 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Café 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Marchés 1" 
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