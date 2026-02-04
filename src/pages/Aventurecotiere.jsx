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
        <h4 className="font-semibold text-center text-lg">Itinéraire Aventure Côtière</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=10.0,-5.0,14.0,-2.0&layer=mapnik&marker=-4.7945,11.8490&marker=-2.1569,11.3870&marker=-2.0833,11.2167"
          style={{ border: 0 }}
          allowFullScreen
          title="Aventure Côtière Congo"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/-3.5/12.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Pointe-Noire</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Loango National Park</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Chutes de la Louéssé</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lagune Nanga</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Côte Sauvage</span>
        </div>
      </div>
    </div>
  );
};

export default function Aventurecotiere() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('pointenoire');
  const [activeExperienceTab, setActiveExperienceTab] = useState('loango');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏝️', title: 'Plages Sauvages', desc: 'Côte préservée avec plages désertes à perte de vue' },
    { icon: '🐘', title: 'Éléphants de Plage', desc: 'Observation unique des éléphants sur la plage' },
    { icon: '🦜', title: 'Biodiversité Unique', desc: 'Forêt, savane, lagunes et océan en un seul site' },
    { icon: '🌊', title: 'Cascade Spectaculaire', desc: 'Chutes de la Louéssé en pleine forêt tropicale' },
    { icon: '🦩', title: 'Oiseaux Marins', desc: 'Observation de colonies d\'oiseaux et flamants roses' },
    { icon: '🚁', title: 'Vol Scénique Inclus', desc: 'Vol intérieur pour une vue aérienne spectaculaire' },
  ];

  const regions = [
    { 
      name: 'Pointe-Noire', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Point de départ et capitale économique sur la côte atlantique',
      features: ['Port maritime', 'Plages urbaines', 'Culture moderne', 'Départ aventure']
    },
    { 
      name: 'Loango National Park', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Unique parc africain où éléphants, buffles et hippos vont à la plage',
      features: ['Éléphants de plage', 'Hippopotames marins', 'Savane côtière', 'Forêt galerie']
    },
    { 
      name: 'Chutes de la Louéssé', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Cascades spectaculaires au cœur de la forêt tropicale',
      features: ['Cascade principale', 'Piscines naturelles', 'Randonnée jungle', 'Rafraîchissement']
    },
    { 
      name: 'Lagune Nanga', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Lagune préservée et sanctuaire pour oiseaux migrateurs',
      features: ['Observation oiseaux', 'Navigation traditionnelle', 'Mangroves', 'Pêche locale']
    },
    { 
      name: 'Côte Sauvage', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Littoral préservé avec formations rocheuses et plages désertes',
      features: ['Plages isolées', 'Formations géologiques', 'Couchers de soleil', 'Relaxation']
    },
    { 
      name: 'Réserve de Tchimpounga', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Centre de réhabilitation des chimpanzés et sanctuaire de vie sauvage',
      features: ['Chimpanzés orphelins', 'Conservation', 'Éducation', 'Volontariat']
    },
  ];

  const experiences = [
    { 
      id: 'loango',
      name: 'Safari Loango', 
      icon: '🐘',
      desc: 'Exploration du parc unique où la savane rencontre l\'océan',
      highlights: ['Éléphants sur plage', 'Hippopotames marins', 'Buffles côtiers', 'Observation 4x4'],
      details: 'Le parc national de Loango est l\'un des sites les plus spectaculaires d\'Afrique. Ici, la savane descend jusqu\'à l\'océan Atlantique, créant un écosystème unique au monde. Vous observerez des éléphants se baignant dans l\'océan, des hippopotames nageant en mer, et des buffles se promenant sur les plages de sable blanc. Les safaris se font en 4x4 le long de la côte et dans la savane, offrant des opportunités photographiques uniques.'
    },
    { 
      id: 'cote',
      name: 'Exploration Côtière', 
      icon: '🏝️',
      desc: 'Découverte des plages sauvages et formations géologiques uniques',
      highlights: ['Plages désertes', 'Formations rocheuses', 'Randonnée littorale', 'Pique-nique sauvage'],
      details: 'La côte atlantique du Congo est l\'une des plus préservées d\'Afrique. Vous explorerez des plages de sable fin parfaitement désertes, accessibles uniquement par des pistes en 4x4. Vous découvrirez des formations rocheuses spectaculaires sculptées par l\'érosion, des lagunes isolées, et des paysages côtiers à couper le souffle. Des randonnées le long du littoral vous permettront de découvrir la faune et la flore spécifiques à cet environnement unique.'
    },
    { 
      id: 'lagune',
      name: 'Aventure Lagunaire', 
      icon: '🦩',
      desc: 'Navigation dans les lagunes et observation des oiseaux migrateurs',
      highlights: ['Navigation pirogue', 'Observation flamants', 'Mangroves', 'Pêche traditionnelle'],
      details: 'Les lagunes du parc de Loango sont des sanctuaires pour une faune abondante, en particulier les oiseaux. Vous naviguerez en pirogue traditionnelle à travers les mangroves et les canaux, à la recherche des colonies de flamants roses, des pélicans, des hérons et de nombreuses autres espèces. Cette expérience silencieuse vous permettra d\'approcher au plus près la faune sans la déranger. Vous pourrez également observer la pêche traditionnelle pratiquée par les communautés locales.'
    },
    { 
      id: 'cascade',
      name: 'Cascade Tropicale', 
      icon: '🌊',
      desc: 'Randonnée vers les chutes de la Louéssé et baignade rafraîchissante',
      highlights: ['Randonnée jungle', 'Cascade spectaculaire', 'Piscines naturelles', 'Baignade rafraîchissante'],
      details: 'Au cœur de la forêt tropicale, les chutes de la Louéssé offrent un spectacle naturel impressionnant. Une randonnée guidée à travers la jungle vous mènera jusqu\'à cette cascade majestueuse où l\'eau se précipite de plusieurs mètres de haut dans des bassins naturels. Vous pourrez vous baigner dans les piscines fraîches au pied des chutes, entouré par la forêt primaire et ses sons. Un moment de pure connexion avec la nature tropicale du Congo.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇨🇬</span>
          <span>ESCAPES | RÉPUBLIQUE DU CONGO</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Aventure Côtière : Loango et Côte Sauvage</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              9 jours d'exploration entre océan Atlantique et forêt tropicale
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
            <span className="text-2xl">✈️</span>
            <span className="text-sm font-semibold">CONGO | AVENTURE CÔTIÈRE + VOL INCLUS</span>
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
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">CONGO3</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours - Pointe-Noire à Loango Park</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour les amateurs de nature côtière préservée et d'aventure unique</span>
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
                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 9 jours vous emmène à la découverte de l'une des côtes les plus préservées d'Afrique, où la forêt tropicale rencontre l'océan Atlantique. Du dynamisme de Pointe-Noire aux paysages spectaculaires du parc national de Loango, en passant par la mythique Côte Sauvage, vous découvrirez des écosystèmes uniques au monde.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure commence à Pointe-Noire, capitale économique du Congo, avant de s'envoler vers le nord pour découvrir le parc de Loango, célèbre pour ses "éléphants de plage" et ses hippopotames marins. Vous explorerez ensuite les chutes de la Louéssé au cœur de la forêt, naviguerez sur la lagune Nanga peuplée d'oiseaux migrateurs, et terminerez par la Côte Sauvage et ses plages désertes. Un vol intérieur inclus vous offre une perspective aérienne unique sur cette côte préservée.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit combine aventure, nature préservée et découverte culturelle. Idéal pour les amateurs de paysages spectaculaires, de faune unique et de plages sauvages, il vous plonge dans un Congo méconnu où la nature règne en maître sur une côte encore épargnée par le tourisme de masse.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Merveilles Côtières</h3>
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
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Côtières de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des éléphants sur la plage</strong>, phénomène unique au parc de Loango</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Vol intérieur scénique</strong>, vue aérienne sur la côte atlantique congolaise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Randonnée aux chutes de la Louéssé</strong>, cascade spectaculaire en forêt tropicale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Navigation en pirogue sur la lagune Nanga</strong>, observation des oiseaux migrateurs</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Exploration de la Côte Sauvage</strong>, plages désertes et formations rocheuses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Visite de la réserve de Tchimpounga</strong>, sanctuaire pour chimpanzés orphelins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Safari 4x4 dans la savane côtière</strong>, à la recherche de buffles et antilopes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Découverte de Pointe-Noire</strong>, capitale économique dynamique</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la côte */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Côte Atlantique du Congo : Un Trésor Préservé</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La côte atlantique du Congo est l'une des dernières grandes côtes préservées d'Afrique. Le parc national de Loango, souvent surnommé "l'Afrique comme elle était", offre un spectacle unique : des éléphants, des buffles et des hippopotames se promenant sur des plages de sable blanc bordées de palmiers. Cette région combine cinq écosystèmes différents : forêt tropicale, savane, mangrove, lagune et océan. La Côte Sauvage, au nord de Pointe-Noire, offre des paysages côtiers spectaculaires avec ses formations rocheuses sculptées par l'érosion. La meilleure période pour ce circuit est de novembre à avril, pendant la saison sèche.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau modéré</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Côte préservée</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Faune unique</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Aventure</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Vol inclus</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">L'AVENTURE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Km de côte explorés</div>
                      <div className="text-3xl font-bold text-green-700">200+</div>
                      <div className="text-xs">kilomètres de littoral</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces animales</div>
                      <div className="text-3xl font-bold text-green-700">100+</div>
                      <div className="text-xs">mammifères et oiseaux</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plages désertes</div>
                      <div className="text-3xl font-bold text-green-700">10+</div>
                      <div className="text-xs">plages préservées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Vol intérieur inclus</div>
                      <div className="text-3xl font-bold text-green-700">1</div>
                      <div className="text-xs">vol scénique Pointe-Noire/Loango</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Côtier</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous fait découvrir la diversité de la côte atlantique congolaise. Vous débuterez à Pointe-Noire, ville portuaire dynamique, avant de prendre un vol intérieur pour rejoindre le parc national de Loango au nord. Vous explorerez ensuite les différents écosystèmes du parc : savane côtière, forêt galerie, lagunes et plages. Le retour vers le sud se fera par la route, avec arrêt aux chutes de la Louéssé et exploration de la Côte Sauvage. Un parcours qui alterne aventure, observation animalière et détente sur des plages paradisiaques.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours à Loango Park</div>
                            <div className="text-green-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours sur la Côte Sauvage</div>
                            <div className="text-green-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Safaris/randonnées</div>
                            <div className="text-green-700 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Navigation lagunaire</div>
                            <div className="text-green-700 font-bold">2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Côte Atlantique</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=10.0,-5.0,14.0,-2.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Aventure Côtière"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=9/-3.5/12.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Écosystèmes Côtiers</h3>
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
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Pointe-Noire</div>
                      <div className="text-xs opacity-80">Arrivée, découverte, préparation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-6</div>
                      <div className="text-sm">Loango Park</div>
                      <div className="text-xs opacity-80">Vol intérieur, safari, lagunes, chutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-9</div>
                      <div className="text-sm">Côte Sauvage</div>
                      <div className="text-xs opacity-80">Plages, formations rocheuses, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau modéré (2/5)</strong> : Ce circuit combine des activités variées avec un niveau d'effort modéré. Il comprend des randonnées de 2-3 heures (notamment vers les chutes), des trajets en 4x4 sur pistes parfois difficiles, et des navigations en pirogue. Une condition physique générale est nécessaire, mais aucune compétence technique n'est requise. L'acclimatation à la chaleur et à l'humidité tropicale est importante.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Condition physique moyenne requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Randonnées de 2-3 heures possibles</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Aptitude à naviguer en petite embarcation</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de randonnée légères</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩴</span>
                          <span>Sandales pour plage et bateau</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste imperméable légère</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🏊</span>
                          <span>Maillot de bain et serviette</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🔭</span>
                          <span>Jumelles (observation animaux)</span>
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
                          <span>🦟</span>
                          <span>Anti-moustiques tropical</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Aventure Côtière ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Observation d'un phénomène unique au monde</h4>
                        <p className="text-sm text-gray-700">
                          Le parc de Loango est l'un des seuls endroits où l'on peut observer des éléphants et des hippopotames sur la plage.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Vol intérieur inclus pour gagner du temps</h4>
                        <p className="text-sm text-gray-700">
                          Le vol Pointe-Noire/Loango vous évite 2 jours de route difficile et offre une vue aérienne spectaculaire.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à des plages parfaitement préservées</h4>
                        <p className="text-sm text-gray-700">
                          Vous découvrirez des plages désertes accessibles uniquement en 4x4, loin de tout tourisme de masse.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Combinaison parfaite aventure/détente</h4>
                        <p className="text-sm text-gray-700">
                          Le circuit alterne safaris actifs et moments de détente sur des plages paradisiaques.
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
                  {/* Jour 1 - Arrivée à Pointe-Noire */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À POINTE-NOIRE</span>
                          <span className="text-sm text-gray-600">Accueil et première découverte de la côte atlantique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport Agostinho Neto de Pointe-Noire. Accueil par votre guide d'aventure côtière. Transfert à votre hôtel en bord de mer. Installation et repos. En fin d'après-midi, première découverte de Pointe-Noire avec une promenade le long de la plage de la Cité du Port et visite du marché artisanal. Briefing sur le programme d'aventure côtière. Dîner de bienvenue avec fruits de mer frais dans un restaurant du front de mer. Nuit à l'hôtel à Pointe-Noire.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Pointe-Noire et préparation */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">POINTE-NOIRE ET PRÉPARATION</span>
                          <span className="text-sm text-gray-600">Découverte de la ville et préparation de l'aventure</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'acclimatation</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la visite de Pointe-Noire : découverte du port maritime (vue extérieure), visite du Musée Mâ Loango pour comprendre l'histoire de la région côtière, et exploration du quartier moderne de la ville. Déjeuner de fruits de mer dans un restaurant local. Après-midi : préparation de l'aventure (vérification de l'équipement, conseils pratiques, distribution du matériel spécifique). Temps libre pour derniers achats éventuels. Dîner libre avec suggestions de votre guide. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite Pointe-Noire - Musée Mâ Loango - Préparation aventure
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Vol vers Loango Park */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VOL VERS LOANGO PARK</span>
                          <span className="text-sm text-gray-600">Vol scénique et première immersion dans le parc</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée aérienne et découverte</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal à l'aéroport de Pointe-Noire. Vol intérieur d'environ 1 heure vers le nord, offrant des vues spectaculaires sur la côte atlantique, les mangroves et la forêt tropicale. Arrivée à l'aérodrome de Loango. Accueil par l'équipe du parc et transfert en 4x4 vers votre lodge. Installation dans votre bungalow avec vue sur l'océan ou la lagune. Premier safari d'approche en fin d'après-midi le long de la côte, à la recherche des premiers animaux. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Vol intérieur scénique - Arrivée Loango - Premier safari côtier
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Safari Loango intensif */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">SAFARI LOANGO INTENSIF</span>
                          <span className="text-sm text-gray-600">À la recherche des éléphants de plage</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'observation exceptionnelle</h4>
                        <p className="text-justify mb-4">
                          Réveil avant l'aube pour un safari matinal sur la plage, moment privilégié pour observer les éléphants venant s'abreuver dans l'océan. Observation également des buffles, des antilopes et avec un peu de chance, des hippopotames marins. Retour au lodge pour le petit-déjeuner. Temps de repos en milieu de journée. Après-midi : safari dans la savane côtière à la recherche d'autres espèces (singes, oiseaux, reptiles). Retour au lodge en fin d'après-midi. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Safari matinal plage - Observation éléphants - Safari savane
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Lagune Nanga et chutes */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">LAGUNE ET CHUTES</span>
                          <span className="text-sm text-gray-600">Navigation lagunaire et randonnée vers les cascades</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée aquatique et forestière</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à l'exploration de la lagune Nanga en pirogue traditionnelle. Observation des colonies d'oiseaux (flamants roses, pélicans, hérons) et découverte des écosystèmes de mangrove. Déjeuner pique-nique au bord de la lagune. Après-midi : randonnée guidée à travers la forêt tropicale vers les chutes de la Louéssé. Découverte de cette cascade spectaculaire et baignade rafraîchissante dans les bassins naturels. Retour au lodge en fin d'après-midi. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Navigation lagune Nanga - Observation oiseaux - Randonnée chutes Louéssé
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Dernier jour à Loango */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DERNIER JOUR LOANGO</span>
                          <span className="text-sm text-gray-600">Safari libre et retour vers le sud</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de transition</h4>
                        <p className="text-justify mb-4">
                          Dernier safari matinal libre dans le parc de Loango selon vos envies (observation animalière supplémentaire, photographie, ou simple détente). Déjeuner au lodge. Après-midi : départ en 4x4 vers le sud en direction de la Côte Sauvage. Trajet à travers des paysages variés, avec arrêts photographiques. Arrivée en fin d'après-midi dans un lodge en bord de mer sur la Côte Sauvage. Installation et première découverte des environs. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Dernier safari Loango - Transfert Côte Sauvage - Installation nouveau lodge
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Exploration Côte Sauvage */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION CÔTE SAUVAGE</span>
                          <span className="text-sm text-gray-600">Plages désertes et formations géologiques</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée côtière</h4>
                        <p className="text-justify mb-4">
                          Journée complète d'exploration de la Côte Sauvage. Excursion en 4x4 le long du littoral pour découvrir des plages de sable blanc parfaitement désertes. Arrêts pour admirer les formations rocheuses spectaculaires sculptées par l'érosion marine. Randonnée le long de certaines plages avec possibilité de baignade dans l'océan Atlantique. Déjeuner pique-nique sur une plage isolée avec fruits de mer frais. Après-midi : continuation de l'exploration ou temps libre pour détente et photographie. Retour au lodge en fin d'après-midi. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Exploration Côte Sauvage - Plages désertes - Formations rocheuses
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Réserve Tchimpounga et détente */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TCHIMPOUNDA ET DÉTENTE</span>
                          <span className="text-sm text-gray-600">Sanctuaire des chimpanzés et dernier jour côtière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de conservation et détente</h4>
                        <p className="text-justify mb-4">
                          Matinée : visite de la réserve de Tchimpounga, centre de réhabilitation pour chimpanzés orphelins. Découverte du travail de conservation, rencontre avec les soigneurs, et observation des chimpanzés dans leur environnement semi-naturel. Déjeuner de retour au lodge. Après-midi libre pour profiter des installations du lodge (plage privée, piscine, hamac) ou pour une dernière exploration libre des environs. Dîner d'adieu avec spécialités côtières. Nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite réserve Tchimpounga - Détente plage - Dîner d'adieu
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">RETOUR ET DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner face à l'océan Atlantique. Transfert à l'aéroport de Pointe-Noire en fonction de votre horaire de vol. Selon le timing, possibilité de dernières visites ou achats de souvenirs. Assistance aux formalités d'embarquement. Vous repartez avec des images inoubliables : les éléphants se baignant dans l'océan de Loango, les plages désertes de la Côte Sauvage, les chutes spectaculaires de la Louéssé, et les regards curieux des chimpanzés de Tchimpounga. Une aventure côtière unique au cœur d'un Congo préservé et authentique.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏝️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Côtières</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette aventure côtière vous offre des expériences uniques où terre et mer se rencontrent. Des éléphants se baignant dans l'océan aux plages parfaitement désertes, chaque moment est une découverte exceptionnelle de la côte atlantique congolaise.
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
                            <InteractiveMap 
                              lat={exp.id === 'loango' ? -2.1569 : 
                                   exp.id === 'cote' ? -4.0 :
                                   exp.id === 'lagune' ? -2.3 :
                                   -2.5} 
                              lng={exp.id === 'loango' ? 11.3870 : 
                                   exp.id === 'cote' ? 11.5 :
                                   exp.id === 'lagune' ? 11.2 :
                                   11.3} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Côtière</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                          alt="Éléphants de plage" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Éléphants de plage</h5>
                          <p className="text-sm text-gray-700">Phénomène unique au parc de Loango</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Côte Sauvage" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Côte Sauvage</h5>
                          <p className="text-sm text-gray-700">Plages désertes et formations rocheuses</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1578837268581-d5b8e5d17c01?w=600" 
                          alt="Chutes de la Louéssé" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Chutes de la Louéssé</h5>
                          <p className="text-sm text-gray-700">Cascade spectaculaire en forêt tropicale</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles Côtières</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Séance de pêche traditionnelle</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage des techniques de pêche locales avec des pêcheurs expérimentés. Supplément : 70€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Massage en bord de mer</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Soin relaxant avec produits naturels locaux, face à l'océan. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Excursion en kayak de mer</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Exploration des criques et baies isolées en kayak. Supplément : 60€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de cuisine aux fruits de mer</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage de recettes traditionnelles avec un chef local. Supplément : 50€/personne.
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DE L'AVENTURE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Lodges Côtiers Authentiques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏨</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour cette aventure côtière, nous sélectionnons des lodges authentiques offrant un confort optimal tout en étant parfaitement intégrés à leur environnement. Chaque hébergement est choisi pour sa situation exceptionnelle et son engagement en faveur de l'écotourisme.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('pointenoire')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'pointenoire' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      POINTE-NOIRE (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('loango')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'loango' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LOANGO PARK (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('cotesauvage')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'cotesauvage' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CÔTE SAUVAGE (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Pointe-Noire */}
                  {activeHotelTab === 'pointenoire' && (
                    <div className="space-y-16">
                      {/* Hotel Ocean View */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Ocean View" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Ocean View</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bord de mer, Pointe-Noire, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Vue directe sur mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦞</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Spa et bien-être</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Ocean View offre un confort moderne avec une situation exceptionnelle en bord de mer à Pointe-Noire. Les chambres disposent de balcons avec vue sur l'océan Atlantique, de salle de bain privée avec équipements haut de gamme, et de toutes les commodités nécessaires. L'hôtel dispose d'une piscine panoramique, d'un restaurant spécialisé en fruits de mer, d'un spa, et d'un centre de bien-être. Idéal pour débuter l'aventure dans le confort.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Loango Park */}
                  {activeHotelTab === 'loango' && (
                    <div className="space-y-16">
                      {/* Loango Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Loango Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Loango Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Parc National de Loango, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏝️</span>
                                <span>Plage privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦁</span>
                                <span className="text-sm font-semibold">Observation animaux depuis lodge</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Architecture écologique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale et internationale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Loango Lodge est un établissement écotouristique exceptionnel situé au cœur du parc national. Les bungalows sont construits avec des matériaux locaux dans le respect de l'environnement, avec terrasses privatives offrant des vues sur l'océan ou la lagune. Le lodge dispose d'une plage privée où l'on peut parfois observer des éléphants depuis sa terrasse. Les repas sont préparés avec des produits frais locaux. Le lodge s'engage activement dans la conservation du parc et le développement communautaire.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Côte Sauvage */}
                  {activeHotelTab === 'cotesauvage' && (
                    <div className="space-y-16">
                      {/* Côte Sauvage Ecolodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                              alt="Côte Sauvage Ecolodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Côte Sauvage Ecolodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Côte Sauvage, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏞️</span>
                                <span>Vue panoramique océan</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Terrasse coucher de soleil</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine naturelle rocheuse</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain extérieure privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Côte Sauvage Ecolodge est perché sur les falaises surplombant l'océan Atlantique. Cet établissement unique offre des chambres avec vue à 180° sur l'océan, certaines avec salle de bain extérieure privative. La piscine naturelle creusée dans la roche est alimentée par l'eau de mer à marée haute. Le restaurant propose une cuisine créative à base de produits locaux et de fruits de mer pêchés quotidiennement. L'endroit idéal pour conclure l'aventure dans un cadre spectaculaire et paisible.
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
                  <span className="text-2xl">🏝️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Aventure</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$2,199</span>
                    <span className="text-sm text-gray-500">Prix par personne</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Circuit aventure complet - 9 jours</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur Pointe-Noire/Loango, transferts, guide, hébergements, repas, activités
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
                    <option value="2027-03-04">4 Mars 2027</option>
                    <option value="2027-04-01">1 Avril 2027</option>
                    <option value="2027-11-04">4 Novembre 2027</option>
                    <option value="2027-12-02">2 Décembre 2027</option>
                    <option value="2028-01-06">6 Janvier 2028</option>
                    <option value="2028-02-03">3 Février 2028</option>
                    <option value="2028-03-02">2 Mars 2028</option>
                    <option value="2028-03-30">30 Mars 2028</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de novembre à avril (saison sèche côtière)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>VOL INTÉRIEUR INCLUS</strong> Pointe-Noire → Loango
                  </p>
                  <p className="text-xs text-gray-300">* Gain de temps considérable et vue aérienne spectaculaire</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-green-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-green-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-green-700 text-white py-4 font-semibold text-base mb-4 hover:bg-green-600 transition-colors shadow-md">
                  RÉSERVER CETTE AVENTURE
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur l'aventure ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts côte atlantique vous conseillent.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONTACTER UN EXPERT CÔTIER
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=10.0,-5.0,14.0,-2.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Aventure Côtière miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Aventure Côtière - 9 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Pointe-Noire → Loango Park → Côte Sauvage
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Aventure Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Vol intérieur Pointe-Noire/Loango</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 safaris 4x4 dans Loango Park</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Navigation lagune Nanga en pirogue</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Randonnée chutes de la Louéssé</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Exploration Côte Sauvage en 4x4</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visite réserve Tchimpounga</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous transferts et guide spécialisé</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques Aventure</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de l'aventure</span>
                    <span className="font-bold text-green-700">Modéré</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs novembre à avril</span>
                    <span className="font-bold text-green-700">Saison sèche côtière</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialisé côte</span>
                    <span className="font-bold text-green-700">Expert faune côtière</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">10 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Équipement recommandé : maillot de bain, crème solaire, chaussures de randonnée légères
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Aventure</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Voir des éléphants se baigner dans l'océan était un rêve devenu réalité. La Côte Sauvage est d'une beauté à couper le souffle, et le vol intérieur nous a offert des vues incroyables. Une aventure parfaite pour ceux qui aiment la nature préservée et les expériences uniques !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Sophie M., voyageuse 2025
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