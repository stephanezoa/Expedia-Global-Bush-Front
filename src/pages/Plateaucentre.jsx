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
        <h4 className="font-semibold text-center text-lg">Itinéraire du Plateau Central</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,-13.5,16.0,-11.5&layer=mapnik&marker=-8.84,13.23&marker=-12.77,15.73&marker=-12.33,15.46&marker=-12.50,15.10"
          style={{ border: 0 }}
          allowFullScreen
          title="Plateau Central - De Luanda à Huambo"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-12.5/14.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Luanda (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Chutes de Kalandula</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Malanje</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Huambo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Kuito</span>
        </div>
      </div>
    </div>
  );
};

export default function Plateaucentre() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('luanda');
  const [activeExperienceTab, setActiveExperienceTab] = useState('culture');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏔️', title: 'Hautes Terres', desc: 'Paysages montagneux et vallées fertiles' },
    { icon: '🌊', title: 'Chutes Spectaculaires', desc: 'Kalandula, l\'une des plus belles chutes d\'Afrique' },
    { icon: '🏛️', title: 'Patrimoine Culturel', desc: 'Histoire riche et traditions préservées' },
    { icon: '👨‍🌾', title: 'Agriculture Traditionnelle', desc: 'Cultures de café, maïs et manioc' },
    { icon: '🎭', title: 'Traditions Locales', desc: 'Danses, musiques et artisanat' },
    { icon: '🏞️', title: 'Paysages Uniques', desc: 'Formations rocheuses et points de vue' },
  ];

  const regions = [
    { 
      name: 'Luanda', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Point de départ et introduction à la diversité angolaise',
      features: ['Musée National', 'Forteresse', 'Introduction culturelle', 'Préparation']
    },
    { 
      name: 'Chutes de Kalandula', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Chutes majestueuses de 105 mètres de large, site naturel exceptionnel',
      features: ['Vue spectaculaire', 'Photos', 'Légendes locales', 'Nature préservée']
    },
    { 
      name: 'Malanje', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Porte d\'entrée du plateau central, ville historique',
      features: ['Marchés locaux', 'Rochers noirs', 'Culture locale', 'Artisanat']
    },
    { 
      name: 'Huambo', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Cœur du plateau central, ancienne capitale et centre culturel',
      features: ['Architecture coloniale', 'Université', 'Jardin botanique', 'Traditions']
    },
    { 
      name: 'Kuito', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Ville symbole de résilience et renaissance',
      features: ['Histoire récente', 'Reconstruction', 'Communautés', 'Art']
    },
    { 
      name: 'Région Bie', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Terres agricoles fertiles et paysages verdoyants',
      features: ['Agriculture traditionnelle', 'Vallées fertiles', 'Villages authentiques', 'Traditions']
    },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Culture et Histoire', 
      icon: '🏛️',
      desc: 'Découverte du riche patrimoine culturel et historique du plateau central',
      highlights: ['Histoire coloniale', 'Guerre civile', 'Reconstruction', 'Traditions locales'],
      details: 'Le plateau central angolais a joué un rôle crucial dans l\'histoire du pays. Ancien bastion colonial puis théâtre d\'importants combats pendant la guerre civile, cette région témoigne de la résilience du peuple angolais. Vous découvrirez l\'architecture coloniale préservée de Huambo, ancienne capitale, et apprendrez l\'histoire complexe de la région à travers ses monuments, musées et témoignages. Les traditions culturelles sont particulièrement vivaces dans cette région agricole, où se mêlent influences portugaises et coutumes africaines.'
    },
    { 
      id: 'nature',
      name: 'Nature et Paysages', 
      icon: '🏞️',
      desc: 'Exploration des paysages spectaculaires et sites naturels du plateau',
      highlights: ['Chutes de Kalandula', 'Rochers noirs de Pungo Andongo', 'Vallées fertiles', 'Points de vue'],
      details: 'Le plateau central offre des paysages variés et souvent spectaculaires. Les chutes de Kalandula, avec leurs 105 mètres de large, sont considérées comme l\'une des plus belles chutes d\'Afrique. Les rochers noirs de Pungo Andongo, formations géologiques uniques, dominent la plaine environnante. Les hautes terres présentent des vallées fertiles cultivées, des collines verdoyantes et des points de vue panoramiques. Cette région bénéficie d\'un climat plus frais et agréable que la côte, idéal pour l\'exploration.'
    },
    { 
      id: 'communautes',
      name: 'Rencontres Communautaires', 
      icon: '👥',
      desc: 'Immersion dans les communautés locales et découverte de leur vie quotidienne',
      highlights: ['Visite de villages', 'Échanges avec agriculteurs', 'Artisanat local', 'Cuisine traditionnelle'],
      details: 'Le plateau central est le cœur agricole de l\'Angola, peuplé de communautés rurales aux traditions bien préservées. Vous aurez l\'opportunité de visiter des villages typiques, de rencontrer des agriculteurs cultivant le café, le maïs et le manioc, et de découvrir l\'artisanat local (vannerie, poterie, tissage). Ces rencontres authentiques vous permettront de comprendre le mode de vie traditionnel et les défis actuels des populations rurales. Vous participerez également à des démonstrations culinaires et goûterez aux spécialités régionales.'
    },
    { 
      id: 'patrimoine',
      name: 'Patrimoine Architectural', 
      icon: '🏛️',
      desc: 'Découverte de l\'architecture coloniale et des monuments historiques',
      highlights: ['Huambo historique', 'Églises coloniales', 'Gares ferroviaires', 'Bâtiments administratifs'],
      details: 'Huambo, anciennement Nova Lisboa, fut conçue comme la future capitale de l\'Angola portugais. La ville conserve ainsi un patrimoine architectural colonial impressionnant : bâtiments administratifs, gare monumentale, églises et villas. Malgré les destructions de la guerre civile, de nombreux édifices ont été restaurés ou sont en cours de restauration, témoignant de l\'âge d\'or de la région. Vous découvrirez également l\'architecture traditionnelle des villages et les techniques de construction locales, offrant un contraste fascinant avec l\'héritage colonial.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1589552950453-2a2d3f4f5b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🏔️</span>
          <span>ESCAPES | ANGOLA - PLATEAU CENTRAL</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Plateau Central : Huambo et les Hautes Terres</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              9 jours d'immersion dans le cœur culturel et historique de l'Angola
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
            <span className="text-2xl">🇦🇴</span>
            <span className="text-sm font-semibold">ANGOLA | CULTURE</span>
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
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO2</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours - Luanda à Huambo</span>
                <button className="ml-auto border-2 border-amber-700 text-amber-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-amber-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour amateurs d'histoire, de culture et de paysages naturels</span>
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
                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 9 jours vous emmène à la découverte du plateau central angolais, région fascinante aux paysages spectaculaires et au riche patrimoine culturel. De Luanda aux hautes terres de Huambo, en passant par les majestueuses chutes de Kalandula, vous découvrirez le cœur historique et agricole de l'Angola.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage commence par une brève introduction à Luanda, avant de vous diriger vers l'intérieur des terres. Vous explorerez les chutes de Kalandula, l'une des plus belles chutes d'eau d'Afrique, puis continuerez vers Malanje et ses impressionnants rochers noirs. Le cœur du circuit se déroule dans la région de Huambo, ancienne capitale et centre culturel du pays, où vous découvrirez l'histoire complexe de l'Angola et rencontrerez les communautés locales.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit allie découverte naturelle, immersion culturelle et rencontres authentiques. Vous séjournerez dans des hébergements confortables adaptés à chaque région, et aurez l'opportunité de découvrir la vie quotidienne des habitants du plateau central. Un voyage profond qui vous permettra de comprendre l'âme de l'Angola.
                </p>

                {/* Section Points forts */}
                <div className="bg-amber-50 border-l-4 border-amber-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-700">Les Trésors du Plateau</h3>
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
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-amber-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Culturelles de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Visite des chutes de Kalandula</strong>, spectacle naturel impressionnant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Exploration de Huambo</strong>, cœur historique du pays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Rencontres avec communautés</strong>, échanges authentiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Découverte de l\'architecture coloniale</strong>, héritage préservé</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Visite des rochers noirs de Pungo Andongo</strong>, site géologique unique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Immersion dans la vie rurale</strong>, agriculture traditionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Découverte de l\'artisanat local</strong>, techniques ancestrales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Compréhension de l\'histoire récente</strong>, guerre et reconstruction</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le plateau central */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Plateau Central : Cœur de l'Angola</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le plateau central angolais, situé entre 1.000 et 1.500 mètres d'altitude, est le grenier du pays et son centre historique. Cette région au climat tempéré a attiré les colons portugais qui y ont développé l'agriculture et bâti des villes ambitieuses comme Huambo (anciennement Nova Lisboa). La région a été profondément marquée par la guerre civile, mais montre aujourd'hui une remarquable résilience. La période de juin à octobre, pendant la saison sèche, est idéale pour visiter la région, avec des journées ensoleillées et des nuits fraîches.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Niveau modéré</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Nature préservée</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Histoire</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Rencontres authentiques</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE PLATEAU CENTRAL EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude moyenne</div>
                      <div className="text-3xl font-bold text-amber-700">1,200</div>
                      <div className="text-xs">mètres au-dessus de la mer</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Température moyenne</div>
                      <div className="text-3xl font-bold text-amber-700">20°</div>
                      <div className="text-xs">degrés Celsius</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Communautés visitées</div>
                      <div className="text-3xl font-bold text-amber-700">5+</div>
                      <div className="text-xs">villages différents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Sites historiques</div>
                      <div className="text-3xl font-bold text-amber-700">8</div>
                      <div className="text-xs">monuments et musées</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours des Hautes Terres</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de la côte atlantique vers l'intérieur des terres, en montant progressivement vers le plateau central. Vous quitterez l'humidité tropicale de Luanda pour découvrir les paysages plus tempérés des hautes terres. L'itinéraire suit d'abord la route vers l'est en direction de Malanje et des chutes de Kalandula, avant de redescendre vers le sud pour explorer la région de Huambo, cœur historique du plateau. Le retour vers Luanda se fait par une route différente, permettant de découvrir la diversité des paysages.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance parcourue</div>
                            <div className="text-amber-700 font-bold">1,200 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude maximum</div>
                            <div className="text-amber-700 font-bold">1,800 m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Villes principales</div>
                            <div className="text-amber-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Sites naturels</div>
                            <div className="text-amber-700 font-bold">3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Plateau Central</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,-13.5,16.0,-11.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Plateau Central Angola"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/-12.5/14.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-amber-700">Les Joyaux du Plateau</h3>
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
                <div className="mb-10 bg-gradient-to-r from-amber-700 to-orange-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Préparation et départ</div>
                      <div className="text-xs opacity-80">Luanda, route vers l'intérieur</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-6</div>
                      <div className="text-sm">Cœur du plateau</div>
                      <div className="text-xs opacity-80">Kalandula, Malanje, Huambo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-9</div>
                      <div className="text-sm">Exploration et retour</div>
                      <div className="text-xs opacity-80">Kuito, régions rurales, retour Luanda</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Niveau et Préparation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau modéré (2/5)</strong> : Ce circuit implique des déplacements en véhicule sur des routes parfois en mauvais état, et des marches modérées sur terrain parfois accidenté. Les visites des chutes de Kalandula et des rochers noirs nécessitent une bonne condition physique de base. Les altitudes entre 1.000 et 1.800 mètres peuvent affecter les personnes sensibles. Convient aux personnes en bonne santé générale, à partir de 12 ans.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Condition physique moyenne requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Marches modérées sur terrain varié</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Âge minimum : 12 ans (accompagné)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Adaptabilité aux conditions locales</span>
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
                          <span>🧥</span>
                          <span>Veste chaude pour les soirées fraîches</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🌧️</span>
                          <span>Vêtements imperméables</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📸</span>
                          <span>Appareil photo avec objectif grand angle</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💊</span>
                          <span>Trousse de premiers soins complète</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire et anti-moustiques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourde ou bouteille d'eau</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🔦</span>
                          <span>Lampe frontale ou torche</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Culturel ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à des sites normalement difficiles d'accès</h4>
                        <p className="text-sm text-gray-700">
                          Grâce à notre logistique et notre connaissance du terrain, nous visitons des sites peu fréquentés par les touristes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide spécialiste du plateau central</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un expert de l'histoire et de la culture du plateau central, souvent originaire de la région.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Rencontres authentiques avec les communautés</h4>
                        <p className="text-sm text-gray-700">
                          Nous avons établi des relations de confiance avec des communautés locales qui vous accueillent chaleureusement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Compréhension approfondie de l'Angola</h4>
                        <p className="text-sm text-gray-700">
                          Ce circuit offre une vision complète de l'histoire, de la culture et des réalités actuelles de l'Angola.
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
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À LUANDA</span>
                          <span className="text-sm text-gray-600">Accueil et préparation au voyage vers l'intérieur</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Luanda. Accueil par votre guide spécialiste du plateau central. Transfert à votre hôtel. Briefing détaillé sur le circuit et les spécificités du voyage dans l'intérieur des terres. Après-midi libre pour repos ou exploration personnelle de Luanda. En soirée, dîner de bienvenue dans un restaurant typique avec présentation des spécialités culinaires de différentes régions d'Angola. Nuit à l'hôtel à Luanda.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Malanje */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS MALANJE</span>
                          <span className="text-sm text-gray-600">Première immersion dans l'intérieur des terres</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée de transition</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en véhicule 4x4 vers l'est. Première découverte des paysages de l'intérieur : savanes arborées, plantations de sisal, villages traditionnels. Arrêts réguliers pour photos et rencontres avec les populations locales. Déjeuner pique-nique en route. Arrivée à Malanje en fin d'après-midi, installation à l'hôtel. Première découverte de cette ville historique, porte d'entrée du plateau central. Dîner et nuit à l'hôtel à Malanje.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Route vers l'intérieur - Premiers paysages - Arrivée Malanje
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Chutes de Kalandula */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CHUTES DE KALANDULA</span>
                          <span className="text-sm text-gray-600">Spectacle naturel majestueux</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée nature</h4>
                        <p className="text-justify mb-4">
                          Excursion matinale vers les chutes de Kalandula, situées à environ 80 km de Malanje. Arrivée au site et première vue impressionnante sur ces chutes de 105 mètres de large. Descente vers le pied des chutes (marche modérée) pour admirer le spectacle de près et ressentir la puissance de l'eau. Déjeuner pique-nique avec vue sur les chutes. Après-midi : visite d'un village local situé près des chutes, rencontre avec les habitants et découverte de leur mode de vie. Retour à Malanje en fin d'après-midi. Dîner et nuit à l'hôtel.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite chutes Kalandula - Rencontre villageois - Photos
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Rochers noirs et route vers Huambo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROCHERS NOIRS ET ROUTE VERS HUAMBO</span>
                          <span className="text-sm text-gray-600">Site géologique unique et montée vers le plateau</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée géologique et transition</h4>
                        <p className="text-justify mb-4">
                          Visite matinale des rochers noirs de Pungo Andongo, formations géologiques uniques qui dominent la plaine. Ascension (modérée) pour profiter du panorama exceptionnel et découvrir les pétroglyphes anciens. Déjeuner dans un restaurant local à Malanje. Départ pour Huambo en début d'après-midi. Route montant progressivement vers le plateau central, changement notable de végétation et de climat. Arrivée à Huambo en fin de journée, installation à l'hôtel. Dîner et nuit à Huambo.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Rochers noirs - Route vers plateau - Arrivée Huambo
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Huambo historique */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">HUAMBO HISTORIQUE</span>
                          <span className="text-sm text-gray-600">Découverte de l'ancienne capitale et centre culturel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée culturelle</h4>
                        <p className="text-justify mb-4">
                          Journée complète consacrée à la découverte de Huambo. Matinée : visite du centre historique avec son architecture coloniale préservée (gare monumentale, anciens bâtiments administratifs, églises). Visite du musée régional pour comprendre l'histoire complexe de la région. Déjeuner dans un restaurant typique. Après-midi : visite du jardin botanique, l'un des plus anciens d'Angola, et découverte de la vie universitaire locale. Rencontre avec des représentants de la société civile pour discuter des défis et opportunités de la région. Dîner avec spécialités locales. Nuit à l'hôtel.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Architecture coloniale - Musée - Jardin botanique - Rencontres
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Région rurale de Huambo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RÉGION RURALE DE HUAMBO</span>
                          <span className="text-sm text-gray-600">Immersion dans la vie agricole traditionnelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée rurale</h4>
                        <p className="text-justify mb-4">
                          Excursion dans la campagne environnante de Huambo. Visite d'une coopérative agricole familiale cultivant le café, le maïs et les légumes. Participation aux travaux agricoles selon la saison (optionnel). Déjeuner avec la famille, préparé avec les produits de la ferme. Après-midi : visite d'un atelier d'artisanat local (poterie ou vannerie), démonstration et possibilité d'essayer. Retour à Huambo en fin d'après-midi. En soirée, spectacle de danse et musique traditionnelle (selon disponibilité). Dîner et nuit à l'hôtel.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Coopérative agricole - Artisanat local - Culture traditionnelle
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Route vers Kuito */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS KUITO</span>
                          <span className="text-sm text-gray-600">Découverte d'une ville symbole de résilience</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée historique et émotionnelle</h4>
                        <p className="text-justify mb-4">
                          Départ matinal vers Kuito, ville profondément marquée par la guerre civile. En route, arrêts dans des villages pour observer les techniques agricoles traditionnelles. Arrivée à Kuito en milieu de journée. Visite de la ville : découverte des efforts de reconstruction, rencontre avec des associations locales œuvrant pour la réconciliation. Déjeuner dans un restaurant local. Après-midi : visite du marché central et découverte de l'art de rue témoignant de l'histoire récente. Installation à l'hôtel. Dîner et nuit à Kuito.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Histoire récente - Reconstruction - Rencontres associatives
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Retour vers Luanda */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR VERS LUANDA</span>
                          <span className="text-sm text-gray-600">Longue route à travers des paysages variés</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée de retour</h4>
                        <p className="text-justify mb-4">
                          Longue journée de route de Kuito à Luanda. Départ très tôt le matin. Arrêts réguliers pour se dégourdir les jambes, prendre des photos des paysages changeants, et déjeuner pique-nique. Observation de la transition progressive des paysages du plateau central vers la côte atlantique. Arrivée à Luanda en fin d'après-midi, installation à l'hôtel. Dîner d'adieu dans un restaurant gastronomique avec partage des impressions du voyage. Nuit à l'hôtel à Luanda.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Route retour - Derniers paysages - Dîner d'adieu
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE LUANDA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments pour les achats de souvenirs : artisanat du plateau central, café angolais, épices. Selon l'horaire de votre vol, transfert à l'aéroport international de Luanda. Assistance aux formalités d'embarquement. Emportez avec vous non seulement des souvenirs du cœur historique de l'Angola, mais aussi une compréhension profonde de l'histoire complexe de ce pays, des rencontres humaines empreintes de résilience, et le désir de poursuivre la découverte de cette région fascinante.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-amber-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏔️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amber-700">Les Expériences du Plateau</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion complète dans la culture et les paysages du plateau central angolais. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région fascinante, des sites naturels spectaculaires aux rencontres humaines authentiques.
                  </p>

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
                            <InteractiveMap 
                              lat={exp.id === 'culture' ? -12.77 : 
                                   exp.id === 'nature' ? -9.7 :
                                   exp.id === 'communautes' ? -12.33 :
                                   -12.50} 
                              lng={exp.id === 'culture' ? 15.73 : 
                                   exp.id === 'nature' ? 16.0 :
                                   exp.id === 'communautes' ? 15.46 :
                                   15.10} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie du Plateau Central</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1589552950453-2a2d3f4f5b5b?w=600" 
                          alt="Chutes de Kalandula" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Chutes de Kalandula</h5>
                          <p className="text-sm text-gray-700">Spectacle naturel majestueux</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1589552950455-75eeaf3c7b1e?w=600" 
                          alt="Huambo historique" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Huambo historique</h5>
                          <p className="text-sm text-gray-700">Architecture coloniale préservée</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1589552950456-75eeaf3c7b1f?w=600" 
                          alt="Communautés rurales" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Communautés rurales</h5>
                          <p className="text-sm text-gray-700">Rencontres authentiques</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Activités Optionnelles sur le Plateau</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Randonnée guidée dans les rochers noirs</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Exploration approfondie des formations géologiques avec guide spécialisé. Supplément : 60€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de cuisine traditionnelle angolaise</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage des recettes du plateau central avec une cuisinière locale. Supplément : 70€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Atelier d'artisanat (poterie ou vannerie)</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Création de votre propre objet avec un artisan expérimenté. Supplément : 50€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Visite d'une plantation de café avec dégustation</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Découverte complète de la filière café et dégustation de crus locaux. Supplément : 80€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Authentiques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-amber-700 w-16 md:w-32"></span>
                      <span className="text-amber-700 text-2xl">🏨</span>
                      <span className="h-px bg-amber-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements offrant confort et authenticité. De l'hôtel urbain de Luanda aux établissements plus modestes mais charmants de l'intérieur, chaque hébergement est sélectionné pour son caractère et son adaptation au contexte local.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('luanda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'luanda' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUANDA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('malanje')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'malanje' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MALANJE (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('huambo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'huambo' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      HUAMBO (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('kuito')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kuito' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KUITO (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Luanda */}
                  {activeHotelTab === 'luanda' && (
                    <div className="space-y-16">
                      {/* Hotel Luanda Plaza */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Luanda Plaza" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Luanda Plaza</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Luanda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Situation centrale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine sur le toit</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain moderne</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Luanda Plaza offre un confort moderne en plein cœur de la capitale. Les chambres sont spacieuses, climatisées et équipées de toutes les commodités. La piscine sur le toit offre une vue imprenable sur la baie de Luanda. L'hôtel dispose d'un restaurant servant une cuisine internationale et des spécialités angolaises. Sa situation centrale permet un accès facile aux sites d'intérêt de Luanda pour les premières et dernières nuits du circuit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Malanje */}
                  {activeHotelTab === 'malanje' && (
                    <div className="space-y-16">
                      {/* Hotel Tropico do Milênio */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Hotel Tropico do Milênio" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Tropico do Milênio</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Malanje, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Proximité des sites naturels</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine extérieure</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Tropico do Milênio est un établissement de charme situé au cœur de Malanje. Bien que plus modeste que les hôtels de Luanda, il offre tout le confort nécessaire après des journées d'excursion. Les chambres sont propres et fonctionnelles, avec salle de bain privée. Le restaurant sert une délicieuse cuisine locale, notamment des plats à base de produits frais de la région. La piscine et le jardin offrent un espace de détente bienvenu.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Huambo */}
                  {activeHotelTab === 'huambo' && (
                    <div className="space-y-16">
                      {/* Hotel Huambo Palace */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1589552950457-75eeaf3c7b1e?w=600" 
                              alt="Hotel Huambo Palace" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Huambo Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Huambo, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Bâtiment historique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine intérieure</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Centre d'affaires</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Huambo Palace est installé dans un bâtiment historique soigneusement restauré, témoin de l'âge d'or de Huambo. C'est l'hôtel le plus confortable du plateau central, offrant des chambres spacieuses et élégantes. L'établissement dispose de deux restaurants (cuisine internationale et spécialités régionales), d'une piscine intérieure, et d'un centre d'affaires. Sa situation au cœur de la ville facilite les visites du centre historique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Kuito */}
                  {activeHotelTab === 'kuito' && (
                    <div className="space-y-16">
                      {/* Residencial Kuito */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1589552950458-75eeaf3c7b1e?w=600" 
                              alt="Residencial Kuito" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Residencial Kuito</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Kuito, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Situation pratique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant simple</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔌</span>
                                <span className="text-sm font-semibold">Wi-Fi disponible</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Residencial Kuito est un établissement simple mais propre et fonctionnel, représentatif des hébergements disponibles dans les villes secondaires du plateau central. Les chambres sont basiques mais confortables, avec salle de bain privée et climatisation. Le restaurant sert une cuisine locale simple mais savoureuse. Cet hébergement modeste offre une expérience authentique et permet de mieux comprendre les réalités du voyage dans l'intérieur de l'Angola.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-amber-700">$2,799</span>
                    <span className="text-sm text-gray-600">Prix régulier</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded">
                    ✅ Inclus : Tous transferts en 4x4, guide spécialiste, hébergements, petits-déjeuners, visites guidées, droits d'entrée
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
                    <option value="2026-06-05">5 Juin 2026</option>
                    <option value="2026-07-03">3 Juillet 2026</option>
                    <option value="2026-07-31">31 Juillet 2026</option>
                    <option value="2026-08-28">28 Août 2026</option>
                    <option value="2026-09-25">25 Septembre 2026</option>
                    <option value="2026-10-23">23 Octobre 2026</option>
                    <option value="2027-06-04">4 Juin 2027</option>
                    <option value="2027-07-02">2 Juillet 2027</option>
                    <option value="2027-07-30">30 Juillet 2027</option>
                    <option value="2027-08-27">27 Août 2027</option>
                    <option value="2027-09-24">24 Septembre 2027</option>
                    <option value="2027-10-22">22 Octobre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juin à octobre (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-amber-700 to-orange-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>GUIDE SPÉCIALISTE DU PLATEAU CENTRAL</strong> : connaissance approfondie
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 10 participants maximum</p>
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
                    Nos experts du plateau central vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,-13.5,16.0,-11.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Plateau Central miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Plateau Central - 9 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit culturel et historique
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Visites et Activités Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Visite des chutes de Kalandula</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Exploration des rochers noirs</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visite guidée de Huambo historique</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rencontre avec communautés rurales</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les transferts en 4x4 privé</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>8 petits-déjeuners</span>
                    <span className="font-bold text-amber-700">✓</span>
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
                    <span className="font-bold text-amber-700">Modéré</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-amber-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs juin à octobre</span>
                    <span className="font-bold text-amber-700">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transport</span>
                    <span className="font-bold text-amber-700">4x4 avec chauffeur</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-amber-700">10 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Recommandé : condition physique moyenne et adaptabilité
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-amber-200 p-4 mt-6 shadow-lg bg-amber-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-700">
                  <span>💬</span>
                  <span>Témoignage Voyageur</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Ce circuit m'a permis de découvrir un Angola que peu de touristes voient. Les chutes de Kalandula sont spectaculaires, et Huambo est une ville fascinante avec son histoire complexe. Les rencontres avec les communautés rurales ont été des moments forts et authentiques. Un voyage qui demande une certaine adaptabilité mais qui en vaut vraiment la peine."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Sophie T., voyageuse 2025
                </div>
              </div>
            </div>
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