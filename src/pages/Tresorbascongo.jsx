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
        <h4 className="font-semibold text-center text-lg">Itinéraire Kinshasa-Matadi</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,-5.5,16.5,-4.0&layer=mapnik&marker=-4.4419,15.2663&marker=-5.8381,13.5033"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit Bas-Congo - RDC"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/-4.5/14.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Kinshasa</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Chutes de Zongo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mbanza-Ngungu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Matadi</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Boma</span>
        </div>
      </div>
    </div>
  );
};

export default function Tresorbascongo() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('kinshasa');
  const [activeExperienceTab, setActiveExperienceTab] = useState('zongo');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌊', title: 'Chutes de Zongo', desc: 'Magnifiques cascades à 130 km de Kinshasa' },
    { icon: '🚂', title: 'Chemin de Fer', desc: 'Trajet en train historique Matadi-Kinshasa' },
    { icon: '🏛️', title: 'Patrimoine Colonial', desc: 'Architecture coloniale à Matadi et Boma' },
    { icon: '🌿', title: 'Forêt du Mayombe', desc: 'Exploration de la forêt tropicale' },
    { icon: '🛶', title: 'Navigation sur le Fleuve', desc: 'Croisière sur le fleuve Congo' },
    { icon: '🌅', title: 'Vues Panoramiques', desc: 'Points de vue spectaculaires sur le fleuve' },
  ];

  const regions = [
    { 
      name: 'Kinshasa', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Point de départ, capitale bouillonnante',
      features: ['Départ circuit', 'Visite urbaine', 'Préparation', 'Retour']
    },
    { 
      name: 'Chutes de Zongo', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Cascades impressionnantes en pleine forêt',
      features: ['Randonnée', 'Baignade', 'Photographie', 'Nature']
    },
    { 
      name: 'Mbanza-Ngungu', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Ville historique et grottes naturelles',
      features: ['Grottes', 'Histoire', 'Culture locale', 'Paysages']
    },
    { 
      name: 'Matadi', 
      color: 'bg-lime-100', 
      textColor: 'text-lime-800', 
      desc: 'Port principal sur le fleuve Congo',
      features: ['Pont Matadi', 'Architecture', 'Port historique', 'Vues fluviales']
    },
    { 
      name: 'Boma', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Ancienne capitale de l\'État Indépendant du Congo',
      features: ['Patrimoine colonial', 'Histoire', 'Monuments', 'Culture']
    },
    { 
      name: 'Fleuve Congo', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Navigation sur le majestueux fleuve Congo',
      features: ['Croisière', 'Observation', 'Transport', 'Paysages']
    },
  ];

  const experiences = [
    { 
      id: 'zongo',
      name: 'Chutes de Zongo', 
      icon: '🌊',
      desc: 'Découverte des magnifiques chutes de Zongo en pleine forêt tropicale',
      highlights: ['Cascades impressionnantes', 'Randonnée en forêt', 'Baignade naturelle', 'Photographie'],
      details: 'Les chutes de Zongo sont un joyau naturel situé à environ 130 km de Kinshasa. Ces cascades impressionnantes tombent d\'une hauteur de 65 mètres dans un cadre forestier préservé. La journée comprend une randonnée d\'approche à travers la forêt tropicale, la découverte des différentes chutes (chute principale et petites cascades), et la possibilité de se baigner dans les bassins naturels. Un pique-nique est prévu sur place. C\'est une escapade nature parfaite pour échapper à l\'agitation de Kinshasa.'
    },
    { 
      id: 'train',
      name: 'Train Matadi-Kinshasa', 
      icon: '🚂',
      desc: 'Voyage en train historique sur la ligne mythique Matadi-Kinshasa',
      highlights: ['Train historique', 'Paysages variés', 'Expérience locale', 'Voyage authentique'],
      details: 'Le voyage en train entre Matadi et Kinshasa est une expérience unique sur l\'une des lignes ferroviaires les plus historiques d\'Afrique. Construite à l\'époque coloniale, cette ligne serpente à travers des paysages variés : forêts, collines, et le long du fleuve Congo. Le trajet dure environ 8 heures et offre une immersion authentique dans la vie locale, avec des arrêts dans les villages et des interactions avec les voyageurs congolais. C\'est bien plus qu\'un simple transport : c\'est un voyage dans le temps et dans la culture.'
    },
    { 
      name: 'Patrimoine Colonial', 
      icon: '🏛️',
      desc: 'Découverte de l\'architecture et de l\'histoire coloniale à Matadi et Boma',
      highlights: ['Architecture coloniale', 'Histoire du Congo', 'Monuments classés', 'Visites guidées'],
      details: 'Matadi et Boma regorgent de bâtiments historiques datant de l\'époque de l\'État Indépendant du Congo et de la colonisation belge. À Matadi, vous découvrirez le célèbre pont suspendu (le plus long d\'Afrique centrale), l\'ancienne gare, les bâtiments administratifs. À Boma, ancienne capitale, vous visiterez la résidence du gouverneur général, la cathédrale, et d\'autres monuments classés. Ces visites sont accompagnées d\'explications historiques sur la construction du chemin de fer, le commerce colonial, et l\'évolution de ces villes portuaires.'
    },
    { 
      id: 'fleuve',
      name: 'Navigation sur le Fleuve', 
      icon: '🛶',
      desc: 'Croisière sur le majestueux fleuve Congo, artère vitale de l\'Afrique',
      highlights: ['Croisière fluviale', 'Observation de la vie riveraine', 'Paysages spectaculaires', 'Transport traditionnel'],
      details: 'Le fleuve Congo, deuxième plus long fleuve d\'Afrique, est l\'artère vitale de la région. Une navigation sur ses eaux puissantes est une expérience mémorable. Vous embarquerez à bord d\'une embarcation locale pour une croisière qui vous permettra d\'observer la vie le long du fleuve : villages de pêcheurs, activités portuaires, navires de commerce. Vous verrez également les impressionnants paysages des gorges et les points stratégiques comme l\'embouchure de la rivière M\'Pozo. C\'est l\'occasion de comprendre l\'importance économique et culturelle de ce fleuve mythique.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image du Bas-Congo */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Trésors du Bas-Congo : De Kinshasa aux Chutes</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🌊</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              7 jours d'aventure de Kinshasa à Matadi, entre chutes spectaculaires et patrimoine historique
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">7</div>
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
            <span className="text-2xl">🚂</span>
            <span className="text-sm font-semibold">RDC | AVENTURE & HISTOIRE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Chutes de Zongo" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Chutes de Zongo en pleine forêt</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Train Matadi-Kinshasa" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Train historique Matadi-Kinshasa</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pont de Matadi" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Pont de Matadi sur le fleuve Congo</p>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC1</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - Kinshasa à Matadi</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une découverte complète du Bas-Congo, entre nature et histoire</span>
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
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Chutes de Zongo" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Chutes de Zongo en pleine forêt tropicale</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Train Matadi-Kinshasa" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Train historique sur la ligne Matadi-Kinshasa</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 7 jours vous emmène à la découverte du Bas-Congo, région historique et naturelle de la République Démocratique du Congo. De la capitale Kinshasa aux ports historiques de Matadi et Boma, en passant par les magnifiques chutes de Zongo, vous découvrirez une région au riche patrimoine et aux paysages variés.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Kinshasa, d'où vous rejoindrez les chutes de Zongo pour une journée nature. Vous poursuivrez vers le sud-ouest pour découvrir Mbanza-Ngungu et ses grottes, puis Matadi avec son pont emblématique et son port historique. Vous visiterez Boma, ancienne capitale de l'État Indépendant du Congo, avant de vivre l'expérience unique du train Matadi-Kinshasa pour votre retour. Un circuit complet mêlant nature, histoire et aventure.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Pont de Matadi" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Le pont de Matadi : ouvrage emblématique sur le fleuve Congo</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux souhaitant découvrir une région méconnue mais fascinante de la RDC. Entre les paysages naturels des chutes de Zongo, l'histoire coloniale de Matadi et Boma, et l'expérience authentique du train local, vous vivrez une aventure complète et immersive. Un voyage qui vous fera découvrir la diversité du Bas-Congo et son importance historique.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts du Circuit</h3>
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
                        src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Train historique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fleuve Congo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Circuit</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Chutes de Zongo" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Chutes de Zongo en pleine forêt</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Train Matadi-Kinshasa" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Train historique Matadi-Kinshasa</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Chutes de Zongo</strong> : randonnée et baignade dans un cadre naturel préservé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Train Matadi-Kinshasa</strong> : voyage en train historique à travers paysages variés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Patrimoine colonial</strong> : découverte de l'architecture historique à Matadi et Boma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Navigation fluviale</strong> : croisière sur le fleuve Congo</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Grottes de Mbanza-Ngungu</strong> : exploration de sites naturels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Pont de Matadi</strong> : visite de l'ouvrage d'art emblématique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Histoire du Congo</strong> : immersion dans le passé colonial et précolonial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Immersion culturelle</strong> : rencontres avec les populations locales</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Bas-Congo avec image */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bas-Congo" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Bas-Congo : Région Historique et Naturelle</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Le Bas-Congo (aujourd'hui Kongo Central) est une région historique de la République Démocratique du Congo, située à l'extrême ouest du pays. C'est la seule région congolaise avec un accès à la mer (via l'enclave de Moanda). Région de collines et de plateaux, traversée par le fleuve Congo, elle possède un riche patrimoine historique : Boma fut la première capitale de l'État Indépendant du Congo (1885-1926), Matadi est le principal port du pays, et la ligne de chemin de fer Matadi-Kinshasa, construite entre 1890 et 1898, fut un exploit technique. La région abrite également des sites naturels remarquables comme les chutes de Zongo.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Patrimoine Historique</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Sites Naturels</span>
                          <span className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full">Fleuve Congo</span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Architecture Coloniale</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Aventure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Bas-Congo" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">BAS-CONGO EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie</div>
                        <div className="text-3xl font-bold">53,920</div>
                        <div className="text-xs text-white/80">km² (Kongo Central)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Hauteur chutes Zongo</div>
                        <div className="text-3xl font-bold">65</div>
                        <div className="text-xs text-white/80">mètres de dénivelé</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Longueur pont Matadi</div>
                        <div className="text-3xl font-bold">722</div>
                        <div className="text-xs text-white/80">mètres (plus long d'Afrique centrale)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Ligne ferroviaire</div>
                        <div className="text-3xl font-bold">366</div>
                        <div className="text-xs text-white/80">km Matadi-Kinshasa (1898)</div>
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
                          src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Train Bas-Congo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours en Bas-Congo</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de Kinshasa, la capitale, vers le sud-ouest du Bas-Congo. Vous commencerez par une excursion aux chutes de Zongo, à 130 km de Kinshasa. Vous poursuivrez vers Mbanza-Ngungu pour découvrir ses grottes, puis Matadi, port principal sur le fleuve Congo. Vous visiterez Boma, ancienne capitale, avant de prendre le train historique pour retourner à Kinshasa. Le circuit combine routes (environ 400 km au total) et train (366 km), vous permettant de découvrir les différents visages de cette région historique.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale route</div>
                            <div className="text-green-700 font-bold">~400 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Distance train</div>
                            <div className="text-green-700 font-bold">366 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Villes visitées</div>
                            <div className="text-green-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Sites naturels</div>
                            <div className="text-green-700 font-bold">3+</div>
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
                                  region.name === 'Kinshasa' 
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Chutes de Zongo'
                                    ? 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Mbanza-Ngungu'
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Matadi'
                                    ? 'https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Boma'
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Paysages et Patrimoine</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Chutes de Zongo 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Train 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Pont de Matadi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fleuve Congo" 
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
                      <div className="text-sm">Kinshasa</div>
                      <div className="text-xs opacity-80">Arrivée, visite, préparation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Chutes de Zongo</div>
                      <div className="text-xs opacity-80">Excursion journée, randonnée, nature</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-6</div>
                      <div className="text-sm">Bas-Congo</div>
                      <div className="text-xs opacity-80">Matadi, Boma, Mbanza-Ngungu, patrimoine</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7</div>
                      <div className="text-sm">Retour Kinshasa</div>
                      <div className="text-xs opacity-80">Train Matadi-Kinshasa, fin du circuit</div>
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
                            <strong>Niveau facile à moyen (2/5)</strong> : Ce circuit comporte des trajets en voiture et en train, et une randonnée facile aux chutes de Zongo (environ 1 heure de marche). Le climat est tropical avec des températures élevées. Aucune condition physique particulière n'est requise, mais il faut être capable de marcher sur des sentiers parfois inégaux. L'âge minimum recommandé est de 12 ans. Les personnes à mobilité réduite peuvent rencontrer des difficultés sur certains sites.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Condition physique normale suffisante</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Marche facile aux chutes de Zongo</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Adaptabilité au climat tropical</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de marche confortables</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac à dos jour (20-30L)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🦟</span>
                              <span>Anti-moustiques</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo</span>
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
                              <span>👕</span>
                              <span>Vêtements légers et respirants</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🥤</span>
                              <span>Gourde d'eau réutilisable</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement randonnée" 
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
                          src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Train historique" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Découverte ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte complète du Bas-Congo</h4>
                            <p className="text-sm text-gray-700">
                              Nature, histoire, patrimoine et culture en un seul circuit.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Expérience unique du train historique</h4>
                            <p className="text-sm text-gray-700">
                              Voyage en train sur la ligne mythique Matadi-Kinshasa.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accès à des sites naturels remarquables</h4>
                            <p className="text-sm text-gray-700">
                              Chutes de Zongo et grottes de Mbanza-Ngungu.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Immersion dans l'histoire du Congo</h4>
                            <p className="text-sm text-gray-700">
                              Des premiers comptoirs coloniaux à l'indépendance.
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
                  {/* Jour 1 - Arrivée à Kinshasa */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À KINSHASA</span>
                          <span className="text-sm text-gray-600">Accueil et visite de la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international de N'djili de Kinshasa. Accueil par votre guide francophone. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. Déjeuner à l'hôtel. Après-midi : visite de Kinshasa, capitale bouillonnante de la RDC. Découverte des principaux sites : le boulevard du 30 Juin, le monument Lumumba, le stade des Martyrs, et si le temps le permet, le marché central. Retour à l'hôtel en fin d'après-midi. Briefing sur le circuit à venir. Dîner de bienvenue avec spécialités congolaises. Nuit à l'hôtel à Kinshasa.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Visite de Kinshasa - Briefing circuit - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Kinshasa" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Chutes de Zongo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CHUTES DE ZONGO</span>
                          <span className="text-sm text-gray-600">Excursion journée aux cascades spectaculaires</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée nature</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Kinshasa en direction des chutes de Zongo (environ 130 km, 2h30 de route). Traversée de paysages de savane et de forêt. Arrivée sur le site des chutes. Randonnée d'approche d'environ 1 heure à travers la forêt tropicale pour atteindre les cascades. Découverte de la chute principale (65 m de haut) et des petites cascades environnantes. Temps libre pour la baignade dans les bassins naturels (si les conditions le permettent) et la photographie. Déjeuner pique-nique sur place. Après-midi : continuation de l'exploration du site, détente au bord de l'eau. Retour à Kinshasa en fin d'après-midi. Dîner et nuit à l'hôtel à Kinshasa.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers Zongo - Randonnée - Découverte des chutes - Baignade - Retour Kinshasa
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Chutes de Zongo" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Kinshasa - Mbanza-Ngungu - Matadi */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">KINSHASA - MBANZA-NGUNGU - MATADI</span>
                          <span className="text-sm text-gray-600">Route vers le Bas-Congo, découverte des grottes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de route et découverte</h4>
                            <p className="text-justify mb-4">
                              Départ de Kinshasa en direction du sud-ouest. Route à travers les paysages du Bas-Congo. Arrêt à Mbanza-Ngungu (ancienne Thysville). Visite des grottes naturelles de la région, sites historiques et géologiques intéressants. Déjeuner à Mbanza-Ngungu. Continuation vers Matadi, port principal sur le fleuve Congo. Arrivée à Matadi en fin d'après-midi. Installation à l'hôtel. Première vue sur le fleuve Congo et le pont suspendu. Dîner et nuit à l'hôtel à Matadi.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Kinshasa-Matadi - Visite grottes Mbanza-Ngungu - Arrivée Matadi - Installation
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Mbanza-Ngungu" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Matadi */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">MATADI</span>
                          <span className="text-sm text-gray-600">Visite du port historique et du pont emblématique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée patrimoine</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la visite de Matadi. Découverte du pont suspendu sur le fleuve Congo (pont Maréchal, 722 m de long, construit en 1983). Visite du port historique, principal point d'entrée maritime de la RDC. Exploration du centre-ville et de son architecture coloniale : ancienne gare, bâtiments administratifs, cathédrale. Déjeuner dans un restaurant local avec vue sur le fleuve. Après-midi : navigation sur le fleuve Congo en embarcation locale pour découvrir la ville depuis l'eau et observer l'activité portuaire. Retour à l'hôtel en fin d'après-midi. Dîner et nuit à Matadi.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite pont de Matadi - Découverte port historique - Architecture coloniale - Navigation sur le fleuve
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Matadi" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Matadi - Boma */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">MATADI - BOMA</span>
                          <span className="text-sm text-gray-600">Découverte de l'ancienne capitale coloniale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée historique</h4>
                            <p className="text-justify mb-4">
                              Départ de Matadi en direction de Boma (environ 100 km). Route le long du fleuve Congo. Arrivée à Boma, ancienne capitale de l'État Indépendant du Congo (1885-1926) et du Congo belge jusqu'en 1926. Visite du patrimoine historique : la résidence du gouverneur général (actuellement musée), la cathédrale, l'ancien palais de justice, et d'autres bâtiments coloniaux bien préservés. Déjeuner à Boma. Après-midi : continuation des visites, découverte du vieux quartier et du port historique. Retour à Matadi en fin d'après-midi. Dîner et nuit à l'hôtel à Matadi.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers Boma - Visite patrimoine colonial - Histoire du Congo - Retour Matadi
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Boma" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Train Matadi-Kinshasa */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TRAIN MATADI-KINSHASA</span>
                          <span className="text-sm text-gray-600">Voyage en train historique à travers les paysages du Bas-Congo</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée train</h4>
                            <p className="text-justify mb-4">
                              Transfert tôt le matin à la gare de Matadi. Embarquement dans le train pour Kinshasa. Départ du train (horaires variables, généralement tôt le matin). Voyage de toute la journée sur la ligne historique Matadi-Kinshasa (366 km, environ 8 heures). Cette ligne, construite entre 1890 et 1898, fut un exploit technique à travers des reliefs difficiles. Observation des paysages variés : forêts, collines, villages, le fleuve Congo par endroits. Déjeuner sous forme de pique-nique dans le train. Arrêts dans les gares intermédiaires pour observer l'animation. Arrivée à la gare de Kinshasa en fin d'après-midi. Transfert à l'hôtel. Dîner et nuit à Kinshasa.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Train Matadi-Kinshasa - Voyage historique - Observation paysages - Arrivée Kinshasa
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Train Matadi-Kinshasa" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Retour de Kinshasa */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR DE KINSHASA</span>
                          <span className="text-sm text-gray-600">Temps libre et départ international</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Matinée libre pour les derniers achats de souvenirs ou repos. Option : visite complémentaire de Kinshasa (musée national, académie des beaux-arts) selon les horaires de vol. Déjeuner libre. En fonction de l'horaire de votre vol international, transfert à l'aéroport de N'djili. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette découverte du Bas-Congo : les chutes de Zongo, l'histoire coloniale de Matadi et Boma, et l'expérience unique du train historique.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Temps libre - Derniers achats - Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport de Kinshasa" 
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
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Chutes de Zongo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Train historique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Pont de Matadi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Boma historique" 
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
                      <span className="text-white text-2xl">🌊</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Nature et Histoire</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion dans le Bas-Congo, région riche en histoire et en paysages. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région, des sites naturels préservés au patrimoine historique colonial.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Chutes de Zongo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Train historique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Patrimoine colonial" 
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
                                  exp.id === 'zongo' 
                                    ? 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'train'
                                    ? 'https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'fleuve'
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'zongo' ? -4.4419 : 
                                   exp.id === 'train' ? -5.8381 :
                                   exp.id === 'fleuve' ? -5.8381 :
                                   -5.85} 
                              lng={exp.id === 'zongo' ? 15.2663 : 
                                   exp.id === 'train' ? 13.5033 :
                                   exp.id === 'fleuve' ? 13.5033 :
                                   13.5} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Nature et Patrimoine</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600" 
                          alt="Chutes de Zongo" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Chutes de Zongo</h5>
                          <p className="text-sm text-gray-700">Cascades en pleine forêt tropicale</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?w=600" 
                          alt="Train Matadi-Kinshasa" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Train Historique</h5>
                          <p className="text-sm text-gray-700">Ligne mythique Matadi-Kinshasa</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Pont de Matadi" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Pont de Matadi</h5>
                          <p className="text-sm text-gray-700">Ouvrage emblématique sur le fleuve Congo</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Fleuve Congo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Gare historique" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages Bas-Congo" 
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
                          <h4 className="font-semibold mb-2">Visite du musée national de Kinshasa</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Découverte des collections d'art et d'histoire congolaise. Supplément : 50€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Excursion aux îles de Bula Bemba</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Journée en bateau vers les îles au large de Boma. Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en lodge de charme à Zongo</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Extension d'une nuit aux chutes de Zongo. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier de cuisine congolaise</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Initiation à la préparation de plats traditionnels. Supplément : 80€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels Confortables en Ville</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏨</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Kinshasa" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Matadi" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Chambre d'hôtel" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements confortables et bien situés dans les villes visitées. À Kinshasa et Matadi, vous séjournerez dans des hôtels de catégorie 3 étoiles offrant tout le confort nécessaire après des journées de découverte. Ces établissements sont choisis pour leur propreté, leur sécurité et leur service, garantissant un séjour agréable.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('kinshasa')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kinshasa' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KINSHASA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('matadi')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'matadi' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MATADI (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Kinshasa */}
                  {activeHotelTab === 'kinshasa' && (
                    <div className="space-y-16">
                      {/* Hotel Memling */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Memling" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Memling</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Kinshasa, République Démocratique du Congo
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
                              L'Hotel Memling est un établissement réputé de Kinshasa, situé en plein centre-ville près du boulevard du 30 Juin. Il offre des chambres climatisées avec salle de bain privée, télévision satellite, et connexion Wi-Fi. L'hôtel dispose d'un restaurant servant une cuisine internationale et des spécialités congolaises, d'un bar, et d'une piscine extérieure. Le service est professionnel et l'établissement est sécurisé. Idéal pour découvrir Kinshasa et comme point de départ pour les excursions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Matadi */}
                  {activeHotelTab === 'matadi' && (
                    <div className="space-y-16">
                      {/* Hotel Residence du Fleuve */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600" 
                              alt="Hotel Residence du Fleuve" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Residence du Fleuve</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Matadi, Bas-Congo, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Vue sur le fleuve Congo</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏨</span>
                                <span className="text-sm font-semibold">Chambres climatisées</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale et internationale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Residence du Fleuve est bien situé à Matadi, offrant une vue imprenable sur le fleuve Congo et le pont suspendu. Les chambres sont confortables, climatisées, équipées de salle de bain privée. L'hôtel dispose d'un restaurant avec terrasse sur le fleuve, servant une cuisine variée. Le personnel est accueillant et l'emplacement est pratique pour visiter la ville. Un hébergement agréable pour découvrir Matadi et ses environs.
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
                  <span className="text-2xl">🚂</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Circuit Bas-Congo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Chutes de Zongo en pleine forêt</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$2,599</span>
                    <span className="text-xl line-through text-gray-500">$2,799</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, train Matadi-Kinshasa, guide, hébergements, repas selon programme
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Réservez avant le 30 avril 2026 et économisez 200$ par personne
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
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT DÉCOUVERTE</strong> limité à 12 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste du Bas-Congo</p>
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
                    Nos experts vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,-5.5,16.5,-4.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Bas-Congo miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Circuit Bas-Congo - 7 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Kinshasa → Zongo → Matadi → Boma → Train → Kinshasa
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
                    <span>Train Matadi-Kinshasa (2ème classe)</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialisé</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 nuits en hôtel 3*</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Petits-déjeuners et déjeuners</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres</span>
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
                    src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Train historique" 
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
                    <span className="font-bold text-green-700">Facile à moyen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs juin à septembre</span>
                    <span className="font-bold text-green-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-green-700">Spécialiste Bas-Congo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">12 personnes</span>
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
                    <h4 className="font-semibold text-green-700">Témoignage Voyageur</h4>
                    <p className="text-xs text-gray-600">Pierre L., historien 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un circuit passionnant pour qui s'intéresse à l'histoire du Congo. Les chutes de Zongo sont magnifiques, mais c'est surtout le patrimoine colonial de Matadi et Boma qui m'a impressionné. Le train Matadi-Kinshasa est une expérience unique, à vivre absolument. Un voyage bien équilibré entre nature et culture, avec un guide très compétent."
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
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Chutes de Zongo 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1580136607996-bad5e4d4ab3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Train 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pont de Matadi 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fleuve Congo 1" 
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