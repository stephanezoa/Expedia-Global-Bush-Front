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
        <h4 className="font-semibold text-center text-lg">Itinéraire Kivu - RDC</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.0,-2.5,29.5,-1.0&layer=mapnik&marker=-1.6791,29.2250&marker=-2.5083,28.8600"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit Kivu - RDC"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/-1.5/28.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Volcan Nyiragongo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Parc des Virunga</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lac Kivu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bukavu</span>
        </div>
      </div>
    </div>
  );
};

export default function Gorillevolcan() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('goma');
  const [activeExperienceTab, setActiveExperienceTab] = useState('gorilles');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🦍', title: 'Gorilles des Montagnes', desc: 'Rencontre avec les gorilles dans le parc des Virunga' },
    { icon: '🌋', title: 'Volcan Nyiragongo', desc: 'Ascension du volcan au lac de lave permanent' },
    { icon: '🏞️', title: 'Parc National des Virunga', desc: 'Plus ancien parc d\'Afrique, site UNESCO' },
    { icon: '🚤', title: 'Navigation sur le Lac Kivu', desc: 'Découverte du lac et de ses îles' },
    { icon: '🌿', title: 'Forêts de Montagne', desc: 'Randonnées dans les écosystèmes uniques' },
    { icon: '🏔️', title: 'Paysages Spectaculaires', desc: 'Vues sur les volcans et le lac' },
  ];

  const regions = [
    { 
      name: 'Goma', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Porte d\'entrée du Kivu, au pied du volcan Nyiragongo',
      features: ['Arrivée circuit', 'Base départ', 'Préparation', 'Volcan']
    },
    { 
      name: 'Volcan Nyiragongo', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Volcan actif avec l\'un des plus grands lacs de lave au monde',
      features: ['Ascension', 'Nuit au sommet', 'Lac de lave', 'Paysages lunaires']
    },
    { 
      name: 'Parc des Virunga', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Plus ancien parc national d\'Afrique, sanctuaire des gorilles',
      features: ['Gorilles montagnes', 'Biodiversité', 'Randonnées', 'Conservation']
    },
    { 
      name: 'Lac Kivu', 
      color: 'bg-lime-100', 
      textColor: 'text-lime-800', 
      desc: 'Lac aux eaux limpides, l\'un des Grands Lacs africains',
      features: ['Navigation', 'Îles', 'Plages', 'Paysages']
    },
    { 
      name: 'Bukavu', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Ville au bord du lac Kivu, point final du circuit',
      features: ['Arrivée sud Kivu', 'Découverte ville', 'Fin circuit', 'Départ']
    },
    { 
      name: 'Forêts du Kivu', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Écosystèmes de montagne abritant une biodiversité exceptionnelle',
      features: ['Randonnées', 'Observation faune', 'Flore unique', 'Écotourisme']
    },
  ];

  const experiences = [
    { 
      id: 'gorilles',
      name: 'Gorilles des Montagnes', 
      icon: '🦍',
      desc: 'Tracking et observation des gorilles des montagnes dans le parc des Virunga',
      highlights: ['Gorilles des montagnes', 'Tracking en forêt', 'Observation rapprochée', 'Conservation'],
      details: 'Le parc national des Virunga abrite environ un tiers de la population mondiale de gorilles des montagnes, espèce en danger critique d\'extinction. Accompagné de guides expérimentés et de pisteurs, vous partirez à la recherche de l\'une des familles de gorilles habituées à la présence humaine. Le tracking peut durer de 2 à 6 heures selon l\'emplacement des animaux. Une fois localisés, vous passerez une heure en leur compagnie, observant leurs interactions sociales, leur alimentation, et les soins aux petits. Cette expérience, strictement régulée pour la protection des animaux, est l\'un des moments les plus magiques que l\'on puisse vivre en Afrique.'
    },
    { 
      id: 'nyiragongo',
      name: 'Volcan Nyiragongo', 
      icon: '🌋',
      desc: 'Ascension du volcan Nyiragongo et nuit au sommet face au lac de lave',
      highlights: ['Ascension volcan', 'Lac de lave permanent', 'Nuit au sommet', 'Paysages spectaculaires'],
      details: 'Le Nyiragongo est l\'un des volcans les plus actifs et impressionnants d\'Afrique. Son cratère abrite le plus grand lac de lave permanent au monde. L\'ascension (environ 5-6 heures de marche) vous mènera à 3470 m d\'altitude. Au sommet, vous installerez votre campement pour la nuit dans des huttes rudimentaires. Au crépuscule et à l\'aube, vous pourrez admirer le spectacle hypnotique du lac de lave bouillonnant. La nuit passée au bord du cratère, avec les étoiles au-dessus et la lave incandescente en contrebas, est une expérience inoubliable. Descente le lendemain matin.'
    },
    { 
      name: 'Lac Kivu', 
      icon: '🚤',
      desc: 'Navigation sur le lac Kivu et découverte de ses îles et paysages',
      highlights: ['Croisière lacustre', 'Îles idylliques', 'Baignade', 'Paysages volcaniques'],
      details: 'Le lac Kivu, l\'un des Grands Lacs africains, est réputé pour la limpidité de ses eaux et la beauté de ses paysages entourés de volcans. Une navigation en bateau vous permettra de découvrir différentes facettes du lac : les îles idylliques comme l\'île d\'Idjwi (la plus grande île lacustre d\'Afrique), les villages de pêcheurs, les plages de sable volcanique. Vous pourrez vous baigner dans les eaux du lac (non chargées en bilharziose), déjeuner sur une île, et admirer les couchers de soleil spectaculaires. Le lac Kivu offre également des opportunités d\'observation d\'oiseaux aquatiques.'
    },
    { 
      id: 'virunga',
      name: 'Parc des Virunga', 
      icon: '🏞️',
      desc: 'Exploration du plus ancien parc national d\'Afrique, site UNESCO',
      highlights: ['Biodiversité exceptionnelle', 'Paysages variés', 'Activités multiples', 'Histoire de la conservation'],
      details: 'Créé en 1925, le parc national des Virunga est le plus ancien d\'Afrique. Classé au patrimoine mondial de l\'UNESCO, il s\'étend sur 7800 km² et abrite une biodiversité exceptionnelle : gorilles des montagnes, chimpanzés, éléphants, hippopotames, okapis, et plus de 700 espèces d\'oiseaux. Le parc offre des paysages variés : forêts tropicales, savanes, marécages, volcans, et lacs. En plus du tracking des gorilles, vous pourrez faire des randonnées vers les chutes, observer les hippopotames sur la rivière Rwindi, visiter le centre de recherche et de conservation, et en apprendre plus sur les efforts de protection de cet écosystème unique.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image des gorilles et volcans */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Gorilles et Volcans du Kivu</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🦍</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              12 jours d'aventure entre gorilles des montagnes, volcans actifs et paysages du lac Kivu
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
            <span className="text-2xl">🌋</span>
            <span className="text-sm font-semibold">RDC | SAFARI & AVENTURE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Gorilles des montagnes" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Gorilles des montagnes dans le parc des Virunga</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Volcan Nyiragongo" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Lac de lave du volcan Nyiragongo</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lac Kivu" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Lac Kivu et ses paysages volcaniques</p>
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
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC3</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">12 jours - Goma à Bukavu</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une aventure exceptionnelle entre gorilles, volcans et paysages du Kivu</span>
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
                      src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Gorilles des montagnes" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Tracking des gorilles dans le parc des Virunga</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Volcan Nyiragongo" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Ascension du volcan Nyiragongo et son lac de lave</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce safari-aventure de 12 jours vous emmène dans la région du Kivu, à l'est de la République Démocratique du Congo, l'une des régions les plus spectaculaires d'Afrique. Entre rencontres avec les gorilles des montagnes, ascension du volcan Nyiragongo au lac de lave permanent, et découverte des paysages du lac Kivu, vous vivrez une expérience unique mêlant safari animalier, aventure volcanique et détente lacustre.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Goma, au pied du volcan Nyiragongo. Vous commencerez par l'ascension de ce volcan actif pour une nuit inoubliable face au lac de lave. Vous poursuivrez par le tracking des gorilles des montagnes dans le parc national des Virunga, le plus ancien d'Afrique. Vous découvrirez ensuite les paysages du lac Kivu, naviguerez vers ses îles, et terminerez votre circuit à Bukavu, au sud du lac. Un itinéraire complet qui combine aventure, nature et paysages à couper le souffle.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Lac de lave du Nyiragongo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Le lac de lave du Nyiragongo : spectacle naturel unique au monde</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les amateurs d'aventure et de nature sauvage. Entre les émotions fortes de la rencontre avec les gorilles, l'effort physique de l'ascension volcanique, et la détente sur les rives du lac Kivu, vous vivrez une expérience équilibrée et intense. Accompagné de guides spécialisés et dans le respect des règles de conservation, vous découvrirez une région exceptionnelle qui mérite d'être explorée.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts du Safari-Aventure</h3>
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
                        src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages volcaniques" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Lac Kivu" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Safari-Aventure</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Gorilles des montagnes" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Rencontre avec les gorilles des montagnes</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Volcan Nyiragongo" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Ascension du volcan Nyiragongo</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Gorilles des montagnes</strong> : tracking et observation dans leur habitat naturel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Volcan Nyiragongo</strong> : ascension et nuit face au lac de lave</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Parc des Virunga</strong> : exploration du plus ancien parc d'Afrique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Lac Kivu</strong> : navigation et découverte des paysages lacustres</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Randonnées en forêt</strong> : découverte de la biodiversité exceptionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation d'hippopotames</strong> : sur les rivières du parc</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Détente au lac</strong> : baignade et repos dans un cadre idyllique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Conservation</strong> : soutien aux efforts de protection de la région</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Kivu avec image */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Kivu" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Kivu : Joyau Naturel de l'Est Congolais</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          La région du Kivu, à l'est de la République Démocratique du Congo, est l'une des plus belles et des plus riches en biodiversité d'Afrique. Elle doit son nom au lac Kivu, l'un des Grands Lacs africains. La région est dominée par la chaîne des Virunga, qui comprend huit volcans majeurs dont le Nyiragongo et le Nyamuragira. Le parc national des Virunga, créé en 1925, est le plus ancien d'Afrique et classé au patrimoine mondial de l'UNESCO. Il abrite une biodiversité exceptionnelle, dont les célèbres gorilles des montagnes. Le Kivu combine ainsi paysages spectaculaires (lacs, volcans, forêts), faune unique, et une géologie fascinante.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Gorilles des montagnes</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Volcans actifs</span>
                          <span className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full">Lac Kivu</span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Patrimoine UNESCO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Gorilles" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">KIVU EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie parc Virunga</div>
                        <div className="text-3xl font-bold">7,800</div>
                        <div className="text-xs text-white/80">km² (site UNESCO)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Gorilles montagnes</div>
                        <div className="text-3xl font-bold">1/3</div>
                        <div className="text-xs text-white/80">population mondiale dans le parc</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Hauteur Nyiragongo</div>
                        <div className="text-3xl font-bold">3,470</div>
                        <div className="text-xs text-white/80">mètres d'altitude</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Longueur lac Kivu</div>
                        <div className="text-3xl font-bold">89</div>
                        <div className="text-xs text-white/80">km (un des Grands Lacs)</div>
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
                          alt="Lac Kivu" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours en Région Kivu</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers la région du Kivu, de Goma au nord à Bukavu au sud. Vous commencerez par l'ascension du volcan Nyiragongo depuis Goma. Vous explorerez ensuite le parc national des Virunga, avec le tracking des gorilles des montagnes comme point d'orgue. Vous poursuivrez vers le sud le long du lac Kivu, avec des navigations vers les îles et des moments de détente au bord de l'eau. Le circuit se termine à Bukavu, au sud du lac. L'itinéraire combine randonnées en montagne, navigation sur le lac, et trajets en 4x4 à travers des paysages spectaculaires.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-green-700 font-bold">~300 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Dénivelé positif</div>
                            <div className="text-green-700 font-bold">~1,500m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en altitude</div>
                            <div className="text-green-700 font-bold">1</div>
                          </div>
                          <div>
                            <div className="font-semibold">Navigations lac</div>
                            <div className="text-green-700 font-bold">2+</div>
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
                                  region.name === 'Goma' 
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Volcan Nyiragongo'
                                    ? 'https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Parc des Virunga'
                                    ? 'https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Lac Kivu'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Bukavu'
                                    ? 'https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Faune et Paysages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Gorilles 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Volcan 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Lac Kivu 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages 1" 
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
                      <div className="text-4xl font-bold mb-2">1-3</div>
                      <div className="text-sm">Goma & Nyiragongo</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, ascension volcan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4-7</div>
                      <div className="text-sm">Parc des Virunga</div>
                      <div className="text-xs opacity-80">Gorilles, randonnées, faune</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8-10</div>
                      <div className="text-sm">Lac Kivu</div>
                      <div className="text-xs opacity-80">Navigation, îles, détente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">11-12</div>
                      <div className="text-sm">Bukavu & Retour</div>
                      <div className="text-xs opacity-80">Arrivée sud, synthèse, départ</div>
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
                            <strong>Niveau élevé (4/5)</strong> : Ce circuit comporte des efforts physiques importants : ascension du volcan Nyiragongo (5-6 heures de marche avec 1500m de dénivelé positif), tracking des gorilles (2-6 heures de marche en forêt), et autres randonnées. Une excellente condition physique est requise. Les participants doivent être habitués à la marche en montagne. L'âge minimum recommandé est de 18 ans. Une nuit est passée à 3470m d'altitude (risque de mal aigu des montagnes). Adaptation nécessaire aux conditions changeantes.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Excellente condition physique requise</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Habitude de la randonnée en montagne</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 18 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Adaptation à l'altitude (jusqu'à 3470m)</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de randonnée montagne</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac à dos 40-50L et sac jour</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧥</span>
                              <span>Vêtements chauds (altitude)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💡</span>
                              <span>Lampe frontale puissante</span>
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
                              <span>🌧️</span>
                              <span>Veste imperméable</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🛌</span>
                              <span>Sac de couchage confort -5°C</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement montagne" 
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
                          src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Gorilles" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Safari-Aventure ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Deux expériences uniques au monde</h4>
                            <p className="text-sm text-gray-700">
                              Gorilles des montagnes ET volcan au lac de lave permanent.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Parc national historique et exceptionnel</h4>
                            <p className="text-sm text-gray-700">
                              Virunga, plus ancien parc d'Afrique et site UNESCO.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accompagnement par des spécialistes</h4>
                            <p className="text-sm text-gray-700">
                              Guides expérimentés en volcanologie et primatologie.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Contribution à la conservation</h4>
                            <p className="text-sm text-gray-700">
                              Votre visite soutient directement la protection du parc.
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
                          <span className="text-sm text-gray-600">Accueil et préparation de l'aventure</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international de Goma. Accueil par votre guide francophone spécialiste du Kivu. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur le safari-aventure à venir : présentation du programme, des règles de sécurité pour l'ascension du volcan et le tracking des gorilles, distribution de l'équipement spécifique si nécessaire. Première vue sur le volcan Nyiragongo depuis Goma. Dîner de bienvenue avec spécialités locales. Nuit à l'hôtel à Goma.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing aventure - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Goma" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Préparation ascension Nyiragongo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PRÉPARATION ASCENSION</span>
                          <span className="text-sm text-gray-600">Derniers préparatifs et visite de Goma</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée préparation</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée aux derniers préparatifs pour l'ascension du Nyiragongo. Vérification de l'équipement personnel, recommandations du guide, achat de derniers snacks si nécessaire. Visite de Goma : découverte de la ville construite sur les coulées de lave de 2002, visite du marché central, du port sur le lac Kivu. Déjeuner dans un restaurant local. Après-midi : repos à l'hôtel pour être en forme pour l'ascension du lendemain. Dernier briefing technique sur l'ascension. Dîner léger et nuit à l'hôtel à Goma.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Préparation équipement - Visite Goma - Repos - Briefing technique - Dîner léger
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Préparation volcan" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Ascension Nyiragongo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ASCENSION NYIRAGONGO</span>
                          <span className="text-sm text-gray-600">Marche vers le sommet et nuit face au lac de lave</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée et nuit volcan</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Goma en 4x4 vers le point de départ de l'ascension (poste de Kibati, à environ 30 minutes). Début de l'ascension vers 9h-10h. Marche d'environ 5-6 heures à travers différents écosystèmes : forêt tropicale d'altitude, puis végétation plus clairsemée, enfin paysages lunaires près du sommet. Arrivée au sommet (3470m) en fin d'après-midi. Installation dans les huttes rudimentaires au bord du cratère. Dîner froid (pas de feu possible). Au crépuscule, spectacle magique du lac de lave bouillonnant. Nuit dans les huttes (froid, altitude). Observation possible de la lave pendant la nuit.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert point départ - Ascension volcan - Arrivée sommet - Installation - Observation lac de lave
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Ascension Nyiragongo" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Descente Nyiragongo et retour Goma */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DESCENTE ET RETOUR GOMA</span>
                          <span className="text-sm text-gray-600">Descente du volcan et repos bien mérité</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée descente et repos</h4>
                            <p className="text-justify mb-4">
                              Lever tôt pour une dernière observation du lac de lave à l'aube (si les conditions le permettent). Petit-déjeuner rapide. Début de la descente vers 7h-8h. Descente plus rapide que la montée (environ 3-4 heures). Arrivée au poste de Kibati en fin de matinée. Transfert retour à Goma. Arrivée à l'hôtel en début d'après-midi. Installation, douche bien méritée. Déjeuner tardif. Après-midi libre pour se reposer, soigner les ampoules, partager les impressions sur l'expérience volcanique. Dîner et nuit à l'hôtel à Goma.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Observation aube - Descente volcan - Transfert Goma - Repos - Soins récupération
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Descente volcan" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Transfert vers parc des Virunga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TRANSFERT VERS VIRUNGA</span>
                          <span className="text-sm text-gray-600">Route vers le parc et première immersion</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée transfert</h4>
                            <p className="text-justify mb-4">
                              Départ de Goma en direction du parc national des Virunga. Route à travers les paysages de l'est du Kivu. Arrivée au quartier général du parc ou à l'un des camps de base. Installation dans votre hébergement (lodge ou campement selon option). Déjeuner sur place. Après-midi : première immersion dans le parc avec une activité douce : visite du centre des visiteurs, présentation des projets de conservation, ou courte randonnée d'observation autour du camp. Dîner et nuit dans le parc.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert vers parc Virunga - Installation - Première immersion - Randonnée douce
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Parc Virunga" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Tracking gorilles */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TRACKING GORILLES</span>
                          <span className="text-sm text-gray-600">Journée avec les gorilles des montagnes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée gorilles</h4>
                            <p className="text-justify mb-4">
                              Départ très tôt pour le tracking des gorilles. Briefing par les rangers sur les règles de conduite (distance, silence, pas de flash, etc.). Début du tracking en forêt avec les pisteurs expérimentés. Marche à travers la forêt de bambous et la forêt tropicale d'altitude, suivant les traces des gorilles. Une fois la famille localisée (temps variable), approche prudente et observation pendant une heure maximum. Observation des interactions sociales, de l'alimentation, des soins aux petits. Déjeuner pique-nique en forêt. Après-midi : retour au camp, partage des impressions. Dîner et nuit dans le parc.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Briefing rangers - Tracking gorilles - Observation 1 heure - Retour camp
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Gorilles" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Exploration parc Virunga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION VIRUNGA</span>
                          <span className="text-sm text-gray-600">Découverte d'autres aspects du parc</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée découverte</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à une autre activité dans le parc selon les options et conditions : randonnée vers les chutes de la rivière, observation des hippopotames sur la rivière Rwindi, visite du centre de recherche Senkwekwe (centre de soins pour gorilles orphelins), ou randonnée dans une autre zone du parc. Déjeuner au camp. Après-midi : continuation des activités ou temps libre pour se reposer, photographier, ou approfondir les connaissances sur la conservation avec les rangers. Dernière nuit dans le parc, dîner d'adieu de la partie safari.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Activité au choix dans parc - Découverte biodiversité - Temps libre - Dîner d'adieu safari
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Exploration Virunga" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Transfert vers lac Kivu */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TRANSFERT LAC KIVU</span>
                          <span className="text-sm text-gray-600">Route vers le lac et premières activités lacustres</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée transfert lac</h4>
                            <p className="text-justify mb-4">
                              Départ du parc des Virunga en direction du lac Kivu. Route le long du lac, avec des points de vue spectaculaires sur les eaux bleues entourées de collines verdoyantes. Arrivée à votre hébergement au bord du lac (type lodge ou guesthouse). Installation dans des chambres avec vue sur le lac. Déjeuner avec produits frais du lac (poisson possible). Après-midi : première activité lacustre au choix : baignade dans le lac (eaux non chargées en bilharziose), petite navigation côtière, ou repos sur la plage. Dîner et nuit au bord du lac.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert vers lac Kivu - Installation hébergement lacustre - Première activité lac - Repos
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lac Kivu" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Navigation lac Kivu */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">NAVIGATION LAC KIVU</span>
                          <span className="text-sm text-gray-600">Journée en bateau à la découverte des îles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée navigation</h4>
                            <p className="text-justify mb-4">
                              Départ matinal en bateau pour une journée de navigation sur le lac Kivu. Direction vers l'une des îles du lac (Idjwi, la plus grande île lacustre d'Afrique, ou d'autres îles plus petites selon les conditions). Arrivée sur l'île, exploration à pied : visite d'un village de pêcheurs, découverte de la vie insulaire, rencontre avec les habitants. Déjeuner pique-nique sur une plage de l'île. Après-midi : baignade dans les eaux limpides du lac, snorkeling (si équipement disponible), ou simple détente. Retour à votre hébergement en fin d'après-midi. Dîner et nuit au bord du lac.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation lac - Visite île - Rencontre habitants - Baignade - Retour hébergement
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Navigation lac" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Route vers Bukavu */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS BUKAVU</span>
                          <span className="text-sm text-gray-600">Transfert vers la capitale du Sud-Kivu</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de route</h4>
                            <p className="text-justify mb-4">
                              Départ de votre hébergement lacustre en direction de Bukavu, au sud du lac Kivu. Route panoramique longeant le lac, avec de nombreux points de vue. Arrêts photos aux endroits les plus spectaculaires. Arrivée à Bukavu en début d'après-midi. Installation à votre hôtel. Déjeuner tardif. Après-midi : première découverte de Bukavu, ville construite sur plusieurs collines au bord du lac. Visite du centre-ville, du port, promenade le long des rives. Dîner et nuit à l'hôtel à Bukavu.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route lacustre - Arrivée Bukavu - Installation - Découverte ville - Dîner
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Route lac Kivu" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Bukavu et synthèse */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BUKAVU ET SYNTHÈSE</span>
                          <span className="text-sm text-gray-600">Découverte de la ville et bilan de l'aventure</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée synthèse</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la visite de Bukavu : marché central, cathédrale, points de vue sur le lac. Option : visite du parc national de Kahuzi-Biega (pour voir les gorilles de plaine) si le temps et l'énergie le permettent (en supplément). Déjeuner à Bukavu. Après-midi : session de synthèse de l'aventure avec votre guide. Retour sur les expériences vécues, partage des impressions, discussion sur la conservation dans la région. Temps libre pour les derniers achats de souvenirs. Dîner d'adieu de fin de circuit. Nuit à l'hôtel à Bukavu.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite Bukavu - Synthèse aventure - Temps libre souvenirs - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Bukavu" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Retour international */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR INTERNATIONAL</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international (généralement depuis l'aéroport de Kavumu, près de Bukavu, ou depuis Goma si vol via là), transfert à l'aéroport en fonction des horaires. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette aventure au Kivu : l'émotion de la rencontre avec les gorilles, le spectacle hypnotique du lac de lave, la beauté des paysages du lac Kivu, et la satisfaction d'avoir accompli un circuit exceptionnel dans l'une des régions les plus fascinantes d'Afrique.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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

                {/* Galerie supplémentaire de l'itinéraire */}
                <div className="mt-12 pt-8 border-t-2 border-gray-300">
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts de l'Aventure</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Gorilles" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Volcan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Lac Kivu" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages" 
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
                      <span className="text-white text-2xl">🦍</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Aventure et Nature</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce safari-aventure au Kivu combine deux expériences uniques au monde : la rencontre avec les gorilles des montagnes et l'ascension d'un volcan actif au lac de lave permanent. Chaque expérience est intense, émouvante, et vous plonge au cœur d'une nature sauvage et spectaculaire.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Gorilles" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Volcan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Lac Kivu" 
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
                                  exp.id === 'gorilles' 
                                    ? 'https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'nyiragongo'
                                    ? 'https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'virunga'
                                    ? 'https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'gorilles' ? -1.4430 : 
                                   exp.id === 'nyiragongo' ? -1.5200 :
                                   exp.id === 'virunga' ? -1.4430 :
                                   -2.0000} 
                              lng={exp.id === 'gorilles' ? 29.4920 : 
                                   exp.id === 'nyiragongo' ? 29.2500 :
                                   exp.id === 'virunga' ? 29.4920 :
                                   28.8600} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Aventure et Paysages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?w=600" 
                          alt="Gorilles des montagnes" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Gorilles des Montagnes</h5>
                          <p className="text-sm text-gray-700">Dans le parc national des Virunga</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1507812984078-917a274065be?w=600" 
                          alt="Volcan Nyiragongo" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Volcan Nyiragongo</h5>
                          <p className="text-sm text-gray-700">Ascension et lac de lave permanent</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Lac Kivu" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Lac Kivu</h5>
                          <p className="text-sm text-gray-700">Navigation et paysages lacustres</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forêt de montagne" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages volcaniques" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Îles du lac Kivu" 
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
                          <h4 className="font-semibold mb-2">Tracking chimpanzés</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Randonnée à la recherche des chimpanzés dans le parc. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Visite centre de réhabilitation</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Centre Senkwekwe pour gorilles orphelins. Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Randonnée volcan Nyamuragira</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Ascension du volcan jumeau du Nyiragongo. Supplément : 200€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Spa et soins post-randonnée</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Massages et soins après l'effort. Supplément : 100€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU SAFARI-AVENTURE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Confort et Immersion en Pleine Nature</h3>
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
                          alt="Hôtel à Goma" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Lodge dans le parc" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hébergement lacustre" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce safari-aventure vous propose différents types d'hébergement adaptés à chaque étape. À Goma et Bukavu, vous séjournerez dans des hôtels confortables de catégorie 3 étoiles. Dans le parc des Virunga, vous logerez dans des lodges ou campements intégrés à l'environnement. Au bord du lac Kivu, vous découvrirez des hébergements lacustres avec vue sur l'eau. Et pour la nuit au sommet du volcan Nyiragongo, l'hébergement est rudimentaire (huttes) mais l'expérience est unique. Tous les hébergements sont choisis pour leur propreté, leur sécurité et leur immersion dans la nature.
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
                      GOMA (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('virunga')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'virunga' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      VIRUNGA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('lac')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lac' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LAC KIVU (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bukavu')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bukavu' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BUKAVU (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Goma */}
                  {activeHotelTab === 'goma' && (
                    <div className="space-y-16">
                      {/* Hotel Ihusi */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Ihusi" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Ihusi</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Goma, Nord-Kivu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Bord du lac Kivu</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant avec vue lac</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Ihusi est situé au bord du lac Kivu, offrant une vue magnifique sur l'eau et les volcans environnants. Il propose des chambres confortables avec salle de bain privée, climatisation, et connexion Wi-Fi. L'hôtel dispose d'un restaurant servant une cuisine internationale et des spécialités locales, d'un bar, et d'un jardin agréable. Le service est attentif et l'emplacement est idéal pour préparer l'ascension du Nyiragongo. Un hébergement de qualité pour le début et la fin du séjour à Goma.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Virunga */}
                  {activeHotelTab === 'virunga' && (
                    <div className="space-y-16">
                      {/* Mikeno Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600" 
                              alt="Mikeno Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Mikeno Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Parc national des Virunga, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Au cœur du parc des Virunga</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏡</span>
                                <span className="text-sm font-semibold">Bungalows en matériaux naturels</span>
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
                              Le Mikeno Lodge est un lodge de charme situé au cœur du parc national des Virunga. Il offre des bungalows spacieux construits en matériaux locaux (pierre, bois), avec salle de bain privée, eau chaude, et électricité (générateur). Le lodge dispose d'un restaurant servant une cuisine de qualité, d'un bar, et d'une terrasse avec vue sur la forêt. L'ambiance est intimiste et l'immersion dans la nature est totale. Les bénéfices du lodge contribuent directement à la conservation du parc. Un hébergement exceptionnel pour vivre l'expérience gorilles.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lac Kivu */}
                  {activeHotelTab === 'lac' && (
                    <div className="space-y-16">
                      {/* Lac Kivu Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" 
                              alt="Lac Kivu Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Lac Kivu Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bord du lac Kivu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🚤</span>
                                <span>Directement sur les rives du lac</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Accès direct à la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine avec produits du lac</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Lac Kivu Lodge est un hébergement idyllique situé directement sur les rives du lac. Il propose des bungalows simples mais confortables avec vue sur l'eau, salle de bain privée, et terrasse. Le lodge dispose d'un restaurant servant des plats préparés avec des produits frais, dont du poisson du lac. L'accès direct à la plage permet de se baigner à tout moment. L'atmosphère est détendue et parfaite pour se reposer après les efforts des jours précédents. Un cadre idéal pour profiter de la beauté du lac Kivu.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bukavu */}
                  {activeHotelTab === 'bukavu' && (
                    <div className="space-y-16">
                      {/* Hotel Orchids */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hotel Orchids" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Orchids</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bukavu, Sud-Kivu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Bukavu</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏨</span>
                                <span className="text-sm font-semibold">Chambres climatisées</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant de qualité</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Orchids est un établissement confortable situé en centre-ville de Bukavu. Il propose des chambres modernes avec salle de bain privée, climatisation, télévision satellite, et connexion Wi-Fi. L'hôtel dispose d'un restaurant servant une cuisine variée, d'un bar, et d'un personnel attentif. L'emplacement est pratique pour visiter la ville et préparer le départ. Un hébergement de bon confort pour clôturer le safari-aventure.
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
                  <span className="text-2xl">🦍</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Aventure</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Gorilles et Volcans" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Gorilles des montagnes dans le parc des Virunga</p>
                  </div>
                </div>
                
                {/* Prix avec vol inclus */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$4,499</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Safari-aventure complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur mentionné, tous transferts, permis gorilles et volcan, guide spécialiste, hébergements, repas selon programme
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ✈️ VOL INTÉRIEUR INCLUS : Transfert aérien facilité pour votre itinéraire
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
                    <option value="2026-06-05">5 Juin 2026</option>
                    <option value="2026-07-03">3 Juillet 2026</option>
                    <option value="2026-07-31">31 Juillet 2026</option>
                    <option value="2026-08-28">28 Août 2026</option>
                    <option value="2027-06-04">4 Juin 2027</option>
                    <option value="2027-07-02">2 Juillet 2027</option>
                    <option value="2027-07-30">30 Juillet 2027</option>
                    <option value="2027-08-27">27 Août 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juin à août (saison sèche, meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>AVENTURE EXCEPTIONNELLE</strong> limitée à 6 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste volcanologie et primatologie</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur l'aventure ?</p>
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=28.0,-2.5,29.5,-1.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Kivu miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Safari-aventure Kivu - 12 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Goma → Nyiragongo → Virunga → Lac Kivu → Bukavu
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
                    <span>Vol intérieur mentionné dans l'itinéraire</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste francophone</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Permis gorilles (1 tracking)</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Permis ascension Nyiragongo</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>11 nuits en hébergement selon programme</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Repas selon programme détaillé</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres et lacustres</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Volcan Nyiragongo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de l'aventure</span>
                    <span className="font-bold text-green-700">Élevé</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs juin à août</span>
                    <span className="font-bold text-green-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-green-700">Spécialiste Kivu</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">6 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens, rage
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
                    <h4 className="font-semibold text-green-700">Témoignage Aventurier</h4>
                    <p className="text-xs text-gray-600">Thomas L., alpiniste 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "L'aventure ultime ! L'ascension du Nyiragongo et la nuit face au lac de lave est une expérience hors du commun. Et la rencontre avec les gorilles des montagnes est tout aussi intense. Le parc des Virunga est magnifique, le lac Kivu apaisant. Un circuit parfaitement équilibré entre effort physique, émotions fortes et moments de détente. Le guide était exceptionnel. Sans doute le plus beau voyage de ma vie."
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
              src="https://images.unsplash.com/photo-1548781527-3c74f1a88c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Gorilles 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Volcan 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lac Kivu 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Paysages 1" 
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