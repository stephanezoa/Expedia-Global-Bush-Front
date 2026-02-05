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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Katanga - RDC</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=25.0,-12.0,27.0,-10.0&layer=mapnik&marker=-11.6647,27.4790&marker=-10.7167,25.4667"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit Katanga - RDC"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-11.5/26.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lubumbashi</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mines de cuivre</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Savanes du Katanga</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lac Tshangalele</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Kolwezi</span>
        </div>
      </div>
    </div>
  );
};

export default function Minesavane() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('lubumbashi');
  const [activeExperienceTab, setActiveExperienceTab] = useState('mines');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '⛏️', title: 'Mines de Cuivre et Cobalt', desc: 'Visite des mines parmi les plus productives au monde' },
    { icon: '🌾', title: 'Savanes du Katanga', desc: 'Découverte des paysages de savane et de la faune' },
    { icon: '🏭', title: 'Industrie Minière', desc: 'Compréhension de l\'industrie minière congolaise' },
    { icon: '🏞️', title: 'Lac Tshangalele', desc: 'Excursion au lac artificiel et ses environs' },
    { icon: '🏛️', title: 'Patrimoine Colonial', desc: 'Architecture et histoire coloniale de Lubumbashi' },
    { icon: '🤝', title: 'Rencontres Locales', desc: 'Échanges avec les communautés minières et rurales' },
  ];

  const regions = [
    { 
      name: 'Lubumbashi', 
      color: 'bg-orange-100', 
      textColor: 'text-orange-800', 
      desc: 'Capitale du cuivre, cœur économique du Katanga',
      features: ['Arrivée circuit', 'Ville minière', 'Patrimoine colonial', 'Musée']
    },
    { 
      name: 'Ceinture du Cuivre', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Région minière parmi les plus riches en cuivre et cobalt',
      features: ['Mines à ciel ouvert', 'Usines de traitement', 'Communautés minières', 'Économie']
    },
    { 
      name: 'Savanes du Katanga', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Paysages de savane et écosystèmes uniques',
      features: ['Flore savane', 'Faune locale', 'Paysages', 'Randonnées']
    },
    { 
      name: 'Lac Tshangalele', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Lac artificiel créé pour l\'industrie minière',
      features: ['Navigation', 'Paysages', 'Détente', 'Pêche']
    },
    { 
      name: 'Villages Miniers', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Communautés vivant de et autour des mines',
      features: ['Rencontres', 'Vie quotidienne', 'Économie locale', 'Traditions']
    },
    { 
      name: 'Kolwezi', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Ville minière stratégique, centre du cobalt',
      features: ['Arrivée', 'Mines cobalt', 'Industrie', 'Fin circuit']
    },
  ];

  const experiences = [
    { 
      id: 'mines',
      name: 'Mines de Cuivre', 
      icon: '⛏️',
      desc: 'Visite des mines de cuivre à ciel ouvert et découverte de l\'industrie minière',
      highlights: ['Mines à ciel ouvert', 'Processus extraction', 'Communautés', 'Impact économique'],
      details: 'Le Katanga, dans le sud-est de la République Démocratique du Congo, abrite l\'une des plus grandes réserves de cuivre et de cobalt au monde. Votre visite des mines vous permettra de comprendre l\'ampleur de l\'industrie minière : les immenses mines à ciel ouvert, les usines de traitement du minerai, les infrastructures logistiques (trains, camions). Vous découvrirez le processus complet, de l\'extraction à la transformation, et rencontrerez des ingénieurs et des travailleurs. Cette expérience vous donnera un aperçu des enjeux économiques, sociaux et environnementaux de l\'exploitation minière dans une région au cœur de la transition énergétique mondiale (le cobalt est essentiel pour les batteries).'
    },
    { 
      id: 'savanes',
      name: 'Savanes du Katanga', 
      icon: '🌾',
      desc: 'Exploration des paysages de savane et de leurs écosystèmes',
      highlights: ['Paysages savane', 'Flore adaptée', 'Faune locale', 'Randonnées'],
      details: 'Les savanes du Katanga sont des écosystèmes uniques caractérisés par des paysages ouverts, une végétation adaptée à la sécheresse (baobabs, acacias), et une faune spécifique (antilopes, oiseaux, petits mammifères). Votre exploration de ces savanes vous permettra de découvrir une facette moins connue de la RDC, loin des forêts équatoriales. Vous ferez des randonnées à travers ces paysages, observerez la flore adaptée aux conditions semi-arides, et découvrirez comment les communautés locales utilisent ces ressources naturelles. Les savanes du Katanga offrent également des points de vue spectaculaires et des couchers de soleil remarquables.'
    },
    { 
      id: 'lac',
      name: 'Lac Tshangalele', 
      icon: '🏞️',
      desc: 'Excursion au lac artificiel créé pour l\'industrie minière',
      highlights: ['Navigation lac', 'Paysages', 'Histoire', 'Détente'],
      details: 'Le lac Tshangalele (ou lac de la Lufira) est un lac artificiel créé dans les années 1920 pour fournir de l\'électricité aux mines de la région. Il s\'est depuis intégré dans le paysage et est devenu un lieu de détente et de pêche. Votre excursion au lac vous permettra de naviguer sur ses eaux, d\'observer les oiseaux aquatiques, et de découvrir comment ce lac a transformé la région. Vous visiterez également le barrage hydroélectrique et comprendrez le lien entre l\'industrie minière et les infrastructures énergétiques. Le lac offre un contraste frappant avec les paysages miniers environnants.'
    },
    { 
      id: 'culture',
      name: 'Culture Minière', 
      icon: '🏭',
      desc: 'Découverte de la culture et des communautés liées aux mines',
      highlights: ['Villages miniers', 'Traditions', 'Économie', 'Histoire sociale'],
      details: 'L\'industrie minière a façonné la société du Katanga depuis plus d\'un siècle. Votre circuit vous permettra de découvrir la culture minière à travers les villes et villages nés de l\'exploitation minière. Vous rencontrerez des communautés dont la vie est rythmée par les mines, découvrirez leur histoire (migration des travailleurs), leurs traditions, et les défis auxquels elles font face. Vous visiterez des quartiers d\'habitation des mineurs, des marchés locaux, et participerez peut-être à des événements culturels. Cette immersion vous donnera une compréhension humaine de l\'industrie minière au-delà des aspects économiques.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image des mines et savanes */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Mines et Savanes du Katanga</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">⛏️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours de découverte entre industrie minière et paysages de savane dans le sud de la RDC
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
            <span className="text-2xl">🏭</span>
            <span className="text-sm font-semibold">RDC | DÉCOUVERTE & INDUSTRIE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mines de cuivre" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Mine de cuivre à ciel ouvert au Katanga</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Savanes du Katanga" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Paysages de savane du Katanga</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lac Tshangalele" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Lac Tshangalele et son environnement</p>
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
                <span className="bg-orange-700 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC5</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Lubumbashi à Kolwezi</span>
                <button className="ml-auto border-2 border-orange-700 text-orange-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-orange-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une découverte unique de l\'industrie minière et des paysages du Katanga</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Mines de cuivre" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Mine de cuivre à ciel ouvert</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Savanes du Katanga" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Paysages de savane du Katanga</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de découverte de 8 jours vous emmène dans la région du Katanga, au sud de la République Démocratique du Congo, l'une des régions les plus riches en ressources minières au monde. Vous découvrirez l'industrie minière du cuivre et du cobalt, explorerez les paysages de savane, et rencontrerez les communautés qui vivent au rythme des mines. Ce voyage unique combine découverte industrielle, paysages naturels, et immersion culturelle dans une région au cœur de l'économie congolaise.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Lubumbashi, la capitale du cuivre. Vous découvrirez la ville, son patrimoine colonial, et son musée national. Vous visiterez ensuite des mines de cuivre à ciel ouvert, découvrirez le processus d'extraction et de transformation du minerai. Vous explorerez également les savanes du Katanga, avec leurs paysages ouverts et leur flore caractéristique. Vous ferez une excursion au lac Tshangalele, lac artificiel créé pour l'industrie minière. Le circuit se terminera à Kolwezi, ville stratégique pour la production de cobalt. Un itinéraire équilibré entre industrie, nature et culture.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Industrie minière" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">L'industrie minière : moteur économique du Katanga</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux de découvrir une région essentielle à l'économie mondiale. Entre la compréhension de l'industrie minière, la découverte des paysages de savane, et les rencontres avec les communautés locales, vous vivrez une expérience complète et instructive. Accompagné de guides spécialistes de la région, vous découvrirez les multiples facettes du Katanga, une région souvent méconnue mais d'une importance stratégique.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-orange-50 border-l-4 border-orange-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-700">Les Atouts de la Découverte</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-orange-700 text-2xl">{item.icon}</span>
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
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Industrie minière" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Savanes" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-orange-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de cette Découverte</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mines de cuivre" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Visite des mines de cuivre</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Savanes" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Exploration des savanes</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Mines de cuivre et cobalt</strong> : visite des sites d'extraction et de transformation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Savanes du Katanga</strong> : découverte des paysages et écosystèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Lac Tshangalele</strong> : excursion au lac artificiel et son environnement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Culture minière</strong> : immersion dans les communautés liées aux mines</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Patrimoine colonial</strong> : architecture et histoire de Lubumbashi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Économie minière</strong> : compréhension des enjeux économiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Rencontres locales</strong> : échanges avec les habitants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Paysages contrastés</strong> : entre industrie et nature préservée</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Katanga avec image */}
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Katanga" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Katanga : Cœur Minier de la RDC</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Le Katanga (rebaptisé Tanganyika, Haut-Lomami, Haut-Katanga et Lualaba) est une région historique du sud-est de la République Démocratique du Congo, réputée pour ses immenses richesses minières. On y trouve les plus grandes réserves de cuivre (environ 10% des réserves mondiales) et de cobalt (environ 50% des réserves mondiales) de la planète. L'exploitation minière y a commencé à l'époque coloniale et constitue toujours le pilier de l'économie régionale et nationale. Le Katanga possède également des paysages variés : savanes, collines, rivières, et le lac Tshangalele. La région a une identité culturelle forte, marquée par l'histoire minière et les migrations de travail. Comprendre le Katanga, c'est comprendre une partie essentielle de l'économie congolaise et mondiale.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Cuivre</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Cobalt</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Savanes</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Lac Tshangalele</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture minière</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-orange-700 to-yellow-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Mines" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">KATANGA EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Production cuivre RDC</div>
                        <div className="text-3xl font-bold">~80%</div>
                        <div className="text-xs text-white/80">vient du Katanga</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Réserves cobalt mondiales</div>
                        <div className="text-3xl font-bold">~50%</div>
                        <div className="text-xs text-white/80">situées au Katanga</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie Katanga</div>
                        <div className="text-3xl font-bold">497,000</div>
                        <div className="text-xs text-white/80">km² (région historique)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Population Lubumbashi</div>
                        <div className="text-3xl font-bold">2.5M</div>
                        <div className="text-xs text-white/80">habitants (2ème ville RDC)</div>
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
                          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Savanes" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours en Région Katanga</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers la région minière du Katanga, de Lubumbashi à Kolwezi. Vous débuterez à Lubumbashi, capitale économique du sud, pour découvrir la ville et son patrimoine. Vous visiterez ensuite des mines de cuivre dans la ceinture minière, découvrirez les processus industriels, et rencontrerez des acteurs du secteur. Vous explorerez également les savanes du Katanga, avec leurs paysages caractéristiques et leur flore. Une excursion au lac Tshangalele vous offrira un contraste avec les paysages miniers. Le circuit se terminera à Kolwezi, ville stratégique pour le cobalt. L'itinéraire combine visites industrielles, découverte naturelle, et immersion culturelle.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-orange-700 font-bold">~350 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Visites de mines</div>
                            <div className="text-orange-700 font-bold">3+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Randonnées savane</div>
                            <div className="text-orange-700 font-bold">2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Excursions lac</div>
                            <div className="text-orange-700 font-bold">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-orange-700">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Lubumbashi' 
                                    ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Ceinture du Cuivre'
                                    ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Savanes du Katanga'
                                    ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Lac Tshangalele'
                                    ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Villages Miniers'
                                    ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Industrie et Paysages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mines 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Savanes 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Industrie 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-orange-700 to-yellow-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Lubumbashi</div>
                      <div className="text-xs opacity-80">Arrivée, ville, patrimoine, musée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Ceinture du Cuivre</div>
                      <div className="text-xs opacity-80">Mines, usines, communautés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Savanes & Lac</div>
                      <div className="text-xs opacity-80">Randonnées, lac, paysages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-8</div>
                      <div className="text-sm">Kolwezi & Retour</div>
                      <div className="text-xs opacity-80">Cobalt, synthèse, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-yellow-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau modéré (2/5)</strong> : Ce circuit de découverte ne comporte pas d'efforts physiques importants. Les visites des mines se font généralement en véhicule, avec quelques marches sur des chemins aménagés. Les randonnées en savane sont de niveau facile à modéré. Les déplacements se font en véhicule confortable sur routes et pistes. L'hébergement est de bon confort. Ce circuit est accessible à toute personne en bonne santé générale, sans condition physique particulière. L'âge minimum recommandé est de 12 ans (accompagné). Adaptation aux conditions climatiques (saison sèche, chaleur le jour, frais la nuit).
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-600">●</span>
                              <span className="text-sm">Condition physique normale requise</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-600">●</span>
                              <span className="text-sm">Accessible aux familles (enfants 12+)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-600">●</span>
                              <span className="text-sm">Adaptation à la chaleur diurne</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>👟</span>
                              <span>Chaussures confortables pour visites</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac à dos jour pour visites</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧥</span>
                              <span>Veste légère pour soirées fraîches</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire haute protection</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💧</span>
                              <span>Gourde ou bouteille d'eau</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo (autorisations mines)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>👖</span>
                              <span>Vêtements longs pour visites mines</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🕶️</span>
                              <span>Lunettes de soleil et chapeau</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement savane" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Mines" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Découverte ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accès à l'industrie minière congolaise</h4>
                            <p className="text-sm text-gray-700">
                              Visite de mines et usines habituellement fermées au public.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Comprendre les enjeux mondiaux</h4>
                            <p className="text-sm text-gray-700">
                              Cuivre et cobalt essentiels à la transition énergétique.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte d'une région méconnue</h4>
                            <p className="text-sm text-gray-700">
                              Le Katanga, au-delà des clichés médiatiques.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Équilibre entre industrie et nature</h4>
                            <p className="text-sm text-gray-700">
                              Mines et savanes, deux facettes complémentaires.
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
                  {/* Jour 1 - Arrivée à Lubumbashi */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À LUBUMBASHI</span>
                          <span className="text-sm text-gray-600">Accueil et découverte de la capitale du cuivre</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international de Lubumbashi. Accueil par votre guide francophone spécialiste du Katanga. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, premier contact avec la ville : visite du centre-ville, découverte de l'architecture coloniale (gare, bâtiments administratifs). Briefing sur le circuit à venir. Dîner de bienvenue avec spécialités locales. Nuit à l'hôtel à Lubumbashi.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Découverte ville - Briefing - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lubumbashi" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Découverte de Lubumbashi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LUBUMBASHI</span>
                          <span className="text-sm text-gray-600">Visite complète de la ville et de son musée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée découverte</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la visite du Musée national de Lubumbashi : découverte de l'histoire minière de la région, de la géologie, des minéraux, et de la culture locale. Déjeuner dans un restaurant de la ville. Après-midi : continuation de la visite de Lubumbashi : marché central, quartiers résidentiels, université. Rencontre avec un expert minier ou un économiste pour une introduction à l'industrie minière du Katanga (selon disponibilité). Temps libre pour des achats personnels. Dîner et nuit à l'hôtel à Lubumbashi.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite musée - Découverte ville - Rencontre expert - Temps libre
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Musée Lubumbashi" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Première mine de cuivre */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PREMIÈRE MINE</span>
                          <span className="text-sm text-gray-600">Visite d'une mine de cuivre à ciel ouvert</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée mine</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Lubumbashi en direction d'une mine de cuivre à ciel ouvert dans la ceinture minière. Arrivée sur site et briefing sécurité. Visite de la mine : observation des opérations d'extraction (pelles, camions géants), explication du processus, point de vue sur l'immense excavation. Déjeuner sur place ou pique-nique. Après-midi : visite d'une usine de traitement du minerai (concentration, flottation) si autorisée. Rencontre avec des ingénieurs et des travailleurs. Retour à Lubumbashi en fin d'après-midi. Dîner et nuit à l'hôtel à Lubumbashi.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert mine - Visite mine à ciel ouvert - Usine traitement - Retour Lubumbashi
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Mine de cuivre" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Route vers les savanes */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LES SAVANES</span>
                          <span className="text-sm text-gray-600">Route vers la région des savanes et première exploration</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée transition</h4>
                            <p className="text-justify mb-4">
                              Départ de Lubumbashi en direction des savanes du Katanga. Route à travers des paysages qui évoluent progressivement. Arrivée dans une zone de savane préservée. Installation dans votre hébergement (lodge ou campement selon option). Déjeuner sur place. Après-midi : première randonnée d'exploration dans la savane, accompagnée d'un guide naturaliste. Découverte de la flore caractéristique (baobabs, acacias), observation de la faune (oiseaux, petits mammifères, antilopes si chance). Coucher de soleil sur la savane. Dîner et nuit en savane.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers savanes - Installation - Randonnée savane - Nuit en savane
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Savanes" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Exploration savanes et lac Tshangalele */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SAVANES ET LAC</span>
                          <span className="text-sm text-gray-600">Randonnée en savane et excursion au lac Tshangalele</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée nature</h4>
                            <p className="text-justify mb-4">
                              Matinée : randonnée plus longue dans la savane, avec focus sur l'écologie de cet écosystème. Observation des adaptations des plantes à la sécheresse, recherche de traces d'animaux. Déjeuner pique-nique dans la savane. Après-midi : transfert vers le lac Tshangalele. Excursion en bateau sur le lac (selon conditions), observation des oiseaux aquatiques, visite du barrage hydroélectrique et explication de son lien avec l'industrie minière. Temps de détente au bord du lac. Retour à votre hébergement en savane en fin d'après-midi. Dîner et nuit en savane.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Randonnée savane - Transfert lac - Navigation lac - Retour savane
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lac Tshangalele" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Route vers Kolwezi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS KOLWEZI</span>
                          <span className="text-sm text-gray-600">Route vers Kolwezi et découverte de la ville du cobalt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée route</h4>
                            <p className="text-justify mb-4">
                              Départ de la région des savanes en direction de Kolwezi. Route à travers des paysages miniers et ruraux. Arrêts éventuels pour visiter un village minier ou un marché local. Arrivée à Kolwezi en début d'après-midi. Installation à l'hôtel. Déjeuner tardif. Après-midi : première découverte de Kolwezi, ville stratégique pour la production de cobalt. Visite du centre-ville, rencontre avec des acteurs locaux (si organisé). Dîner et nuit à l'hôtel à Kolwezi.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers Kolwezi - Installation - Découverte ville - Nuit Kolwezi
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Kolwezi" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Kolwezi et mines de cobalt */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">KOLWEZI ET COBALT</span>
                          <span className="text-sm text-gray-600">Visite de sites liés à l'extraction du cobalt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée cobalt</h4>
                            <p className="text-justify mb-4">
                              Matinée : visite d'un site d'extraction ou de traitement du cobalt (selon autorisations et conditions). Découverte des spécificités de cette ressource stratégique pour les batteries et la transition énergétique. Déjeuner à Kolwezi. Après-midi : session de synthèse sur l'industrie minière du Katanga. Retour sur les visites effectuées, discussion sur les enjeux économiques, sociaux et environnementaux. Temps libre pour les derniers achats de souvenirs. Dîner d'adieu de fin de circuit. Nuit à l'hôtel à Kolwezi.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite site cobalt - Synthèse industrie - Temps libre - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Cobalt" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Retour international */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR INTERNATIONAL</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international (généralement depuis l'aéroport de Kolwezi, ou via Lubumbashi), transfert à l'aéroport en fonction des horaires. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette découverte du Katanga : l'immensité des mines de cuivre, la beauté des savanes, l'importance stratégique du cobalt, et la compréhension d'une région essentielle à l'économie congolaise et mondiale.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts de la Découverte</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mines 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Savanes 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Lac 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Villages 1" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-orange-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">⛏️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-orange-700">Les Expériences Découverte et Industrie</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette découverte du Katanga combine exploration de l'industrie minière, découverte des paysages de savane, et immersion dans la culture locale. Chaque expérience est instructive, surprenante, et vous permet de comprendre une région au cœur de l'économie mondiale.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mines de cuivre" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Savanes" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Industrie" 
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
                            ? 'bg-orange-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-orange-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-orange-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-orange-700 mt-1">•</span>
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
                                  exp.id === 'mines' 
                                    ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'savanes'
                                    ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'lac'
                                    ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'mines' ? -11.6647 : 
                                   exp.id === 'savanes' ? -10.7167 :
                                   exp.id === 'lac' ? -10.5000 :
                                   -11.6647} 
                              lng={exp.id === 'mines' ? 27.4790 : 
                                   exp.id === 'savanes' ? 25.4667 :
                                   exp.id === 'lac' ? 26.0000 :
                                   27.4790} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Découverte et Paysages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600" 
                          alt="Mines de Cuivre" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Mines de Cuivre</h5>
                          <p className="text-sm text-gray-700">Visite des mines parmi les plus productives au monde</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600" 
                          alt="Savanes du Katanga" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Savanes du Katanga</h5>
                          <p className="text-sm text-gray-700">Découverte des paysages de savane et de leur biodiversité</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600" 
                          alt="Lac Tshangalele" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Lac Tshangalele</h5>
                          <p className="text-sm text-gray-700">Excursion au lac artificiel créé pour l'industrie minière</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Industrie minière" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages de savane" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Communautés locales" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-yellow-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Visite de mine artisanale</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Découverte des sites d'extraction artisanale (avec précaution). Supplément : 100€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Rencontre avec des géologues</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Session avec des experts en géologie minière. Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Safari photo en savane</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Excursion spéciale pour photographier la faune et les paysages. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier cuisine locale</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Participation à la préparation de plats traditionnels katangais. Supplément : 80€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DE LA DÉCOUVERTE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Confort et Immersion en Milieu Minier et Naturel</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-orange-700 w-16 md:w-32"></span>
                      <span className="text-orange-700 text-2xl">🏨</span>
                      <span className="h-px bg-orange-700 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Lubumbashi" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Lodge en savane" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Kolwezi" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette découverte vous propose différents types d'hébergement adaptés à chaque étape. À Lubumbashi et Kolwezi, vous séjournerez dans des hôtels confortables de catégorie 3 étoiles. Dans les savanes du Katanga, vous logerez dans un lodge ou campement intégré à l'environnement. Tous les hébergements sont choisis pour leur propreté, leur sécurité, et leur emplacement pratique pour les visites.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('lubumbashi')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lubumbashi' 
                          ? 'bg-orange-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUBUMBASHI (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('savane')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'savane' 
                          ? 'bg-orange-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SAVANE (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('kolwezi')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kolwezi' 
                          ? 'bg-orange-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KOLWEZI (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Lubumbashi */}
                  {activeHotelTab === 'lubumbashi' && (
                    <div className="space-y-16">
                      {/* Hotel Karavia */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Karavia" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-orange-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Karavia</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Lubumbashi, Haut-Katanga, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Lubumbashi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏨</span>
                                <span className="text-sm font-semibold">Chambres climatisées</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant et bar</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Karavia est un établissement confortable situé en centre-ville de Lubumbashi. Il propose des chambres spacieuses avec salle de bain privée, climatisation, télévision, et connexion Wi-Fi. L'hôtel dispose d'un restaurant servant une cuisine internationale et des spécialités locales, d'un bar, et d'un jardin. Le service est professionnel et l'emplacement est idéal pour découvrir la ville. Un hébergement de qualité pour le début du séjour.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Savane */}
                  {activeHotelTab === 'savane' && (
                    <div className="space-y-16">
                      {/* Savane Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600" 
                              alt="Savane Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Savane Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Savanes du Katanga, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌾</span>
                                <span>Au cœur des savanes du Katanga</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏡</span>
                                <span className="text-sm font-semibold">Bungalows en matériaux naturels</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée basique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Savane Lodge est un hébergement rustique mais confortable situé au cœur des savanes du Katanga. Il propose des bungalows simples construits en matériaux locaux, avec salle de bain privée (eau chaude limitée). Le lodge dispose d'un restaurant servant une cuisine simple préparée avec des produits locaux. L'immersion dans la nature est totale, avec une vue directe sur les paysages de savane. Les soirées autour du feu et les nuits sous les étoiles sont des moments magiques. Un hébergement idéal pour découvrir les savanes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Kolwezi */}
                  {activeHotelTab === 'kolwezi' && (
                    <div className="space-y-16">
                      {/* Hotel Kolwezi */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hotel Kolwezi" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Kolwezi</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Kolwezi, Lualaba, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Kolwezi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏨</span>
                                <span className="text-sm font-semibold">Chambres avec ventilateur/clim</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant simple</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Kolwezi est un établissement fonctionnel situé en centre-ville. Il propose des chambres avec salle de bain privée, ventilateur ou climatisation selon disponibilité, et lit confortable. L'hôtel dispose d'un restaurant servant une cuisine locale simple. Le service est basique mais correct. Après les jours de découverte, cet hébergement offre un confort suffisant pour la fin du séjour. L'emplacement est pratique pour visiter la ville.
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
                  <span className="text-2xl">⛏️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Découverte</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Mines de cuivre" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Mine de cuivre à ciel ouvert au Katanga</p>
                  </div>
                </div>
                
                {/* Prix avec vol inclus */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-orange-700">$2,899</span>
                    <span className="text-xl line-through text-gray-500">$2,699</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Découverte complète</div>
                  <div className="mt-2 text-xs text-orange-700 bg-orange-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur mentionné, tous transferts, visites mines, guide spécialiste, hébergements, repas selon programme
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ✈️ VOL INTÉRIEUR INCLUS : Transfert aérien facilité pour votre itinéraire
                  </div>
                  <div className="mt-2 text-xs bg-green-50 text-green-700 p-2 rounded font-bold">
                    🏷️ PROMOTION : Économisez $200 jusqu'au 30 juin 2026
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-05-07">7 Mai 2026</option>
                    <option value="2026-06-04">4 Juin 2026</option>
                    <option value="2026-07-02">2 Juillet 2026</option>
                    <option value="2026-08-06">6 Août 2026</option>
                    <option value="2026-09-03">3 Septembre 2026</option>
                    <option value="2027-05-06">6 Mai 2027</option>
                    <option value="2027-06-03">3 Juin 2027</option>
                    <option value="2027-07-01">1 Juillet 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à septembre (saison sèche, meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-orange-700 to-yellow-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>DÉCOUVERTE EXCLUSIVE</strong> limitée à 10 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accès à des sites miniers habituellement fermés au public</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-orange-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-orange-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-orange-700 text-white py-4 font-semibold text-base mb-4 hover:bg-orange-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur la découverte ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts industrie et nature vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=25.0,-12.0,27.0,-10.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Katanga miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Découverte Mines et Savanes - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Lubumbashi → Mines → Savanes → Kolwezi
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
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste francophone</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites de mines autorisées</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Excursion lac Tshangalele</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>7 nuits en hébergement selon programme</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Repas selon programme détaillé</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres en véhicule confortable</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Savanes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de la découverte</span>
                    <span className="font-bold text-orange-700">Modéré</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-orange-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs mai à septembre</span>
                    <span className="font-bold text-orange-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-orange-700">Spécialiste mines et nature</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-orange-700">10 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-orange-200 p-4 mt-6 shadow-lg bg-orange-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700">Témoignage Visiteur</h4>
                    <p className="text-xs text-gray-600">Sophie M., économiste 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une découverte fascinante ! Les mines de cuivre sont impressionnantes par leur échelle, et comprendre l'industrie du cobalt est essentiel pour qui s'intéresse à la transition énergétique. Les savanes du Katanga offrent un contraste saisissant avec les paysages miniers. Les guides étaient très compétents, avec de bonnes explications techniques et économiques. Cette découverte m'a permis de comprendre les enjeux réels de l'industrie minière congolaise, loin des clichés. Un voyage instructif et enrichissant."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-orange-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mines 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Savanes 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Industrie 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Paysages 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-orange-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-orange-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}