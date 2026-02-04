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
        <h4 className="font-semibold text-center text-lg">Itinéraire Plages Secrètes de l'Archipel</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,7.5,1.7&layer=mapnik&marker=0.34,6.73&marker=0.28,6.61&marker=0.22,6.57&marker=1.64,7.42&marker=1.60,7.38"
          style={{ border: 0 }}
          allowFullScreen
          title="Plages Secrètes de l'Archipel"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/1.0/7.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-amber-700 border-2 border-gray-300"></span>
          <span className="text-sm">São Tomé (ville)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Praia das Conchas</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia Jalé</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia Banana (Príncipe)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia Tamarindos</span>
        </div>
      </div>
    </div>
  );
};

export default function Plagesecrete() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('sable');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏖️', title: 'Plages Secrètes', desc: 'Accès à des plages normalement inaccessibles' },
    { icon: '🤿', title: 'Snorkeling Privé', desc: 'Exploration de récifs coralliens préservés' },
    { icon: '⛵', title: 'Excursions en Bateau', desc: 'Navigation vers des plages isolées' },
    { icon: '🌅', title: 'Couchers de Soleil', desc: 'Vues spectaculaires depuis des spots secrets' },
    { icon: '🐢', title: 'Tortues Marines', desc: 'Observation des tortues dans leur habitat naturel' },
    { icon: '🍹', title: 'Pique-niques Privés', desc: 'Repas préparés sur des plages désertes' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Point de départ et préparation pour l\'exploration des plages',
      features: ['Briefing plages', 'Location équipement', 'Rencontre guide', 'Préparation logistique']
    },
    { 
      name: 'Praia das Conchas', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Plage de sable noir entourée de cocotiers au nord de São Tomé',
      features: ['Sable noir volcanique', 'Cocoteraie dense', 'Piscines naturelles', 'Restaurant local']
    },
    { 
      name: 'Praia Jalé', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Plage protégée et sanctuaire de tortues marines, accessible seulement en 4x4',
      features: ['Sanctuaire tortues', 'Accès 4x4 seulement', 'Plage préservée', 'Observation animaux']
    },
    { 
      name: 'Praia Banana (Príncipe)', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Plage emblématique de Príncipe avec formations rocheuses uniques',
      features: ['Formations rocheuses', 'Eau turquoise', 'Photos célèbres', 'Snorkeling exceptionnel']
    },
    { 
      name: 'Praia Tamarindos', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Plage secrète de sable blanc accessible seulement par sentier ou bateau',
      features: ['Sable blanc fin', 'Accès exclusif', 'Isolement total', 'Pique-nique privé']
    },
    { 
      name: 'Îlots du Sud', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Petits îlots déserts entourés de récifs coralliens et d\'eaux cristallines',
      features: ['Excursion bateau', 'Snorkeling récifs', 'Plages désertes', 'Déjeuner sur îlot']
    },
  ];

  const experiences = [
    { 
      id: 'sable',
      name: 'Plages de Sable', 
      icon: '🏝️',
      desc: 'Découverte des plages de sable noir, doré et blanc de l\'archipel',
      highlights: ['Sable noir volcanique', 'Sable doré de Príncipe', 'Sable blanc secret', 'Textures uniques'],
      details: 'São Tomé-et-Príncipe offre une incroyable variété de plages. Vous découvrirez les plages de sable noir volcanique de São Tomé, les plages de sable doré de Príncipe, et des plages secrètes de sable blanc quasi immaculé. Chaque type de sable a sa propre histoire géologique et son propre caractère, offrant des expériences sensorielles uniques.'
    },
    { 
      id: 'snorkeling',
      name: 'Snorkeling et Récifs', 
      icon: '🤿',
      desc: 'Exploration des récifs coralliens préservés et de la vie marine',
      highlights: ['Récifs coralliens', 'Poissons tropicaux', 'Tortues marines', 'Eaux cristallines'],
      details: 'Les eaux de São Tomé-et-Príncipe abritent des récifs coralliens encore préservés du tourisme de masse. Avec masque et tuba, vous explorerez des jardins de coraux colorés, nagerez parmi des bancs de poissons tropicaux, et aurez peut-être la chance de rencontrer des tortues marines. Des spots secrets, accessibles seulement par bateau, vous offriront une expérience de snorkeling exceptionnelle.'
    },
    { 
      id: 'bateau',
      name: 'Excursions en Bateau', 
      icon: '⛵',
      desc: 'Navigation vers des plages et îlots accessibles seulement par la mer',
      highlights: ['Plages isolées', 'Îlots déserts', 'Navigation côtière', 'Pêche locale'],
      details: 'Certaines des plus belles plages de l\'archipel ne sont accessibles que par la mer. À bord de bateaux locaux, vous naviguerez le long des côtes spectaculaires, découvrirez des criques cachées, et accéderez à des îlots déserts entourés d\'eaux turquoise. Ces excursions sont l\'occasion de voir les côtes sous un angle unique et de profiter d\'une intimité totale avec la nature.'
    },
    { 
      id: 'coucher',
      name: 'Couchers de Soleil', 
      icon: '🌅',
      desc: 'Admiration des couchers de soleil spectaculaires depuis des spots privilégiés',
      highlights: ['Points de vue secrets', 'Ciels orangés', 'Reflets sur l\'océan', 'Moments magiques'],
      details: 'Les couchers de soleil à São Tomé-et-Príncipe sont des spectacles naturels d\'une beauté à couper le souffle. Guidés par des locaux, vous découvrirez des points de vue secrets pour admirer le soleil plonger dans l\'océan Atlantique, peignant le ciel de nuances orangées, roses et pourpres. Ces moments magiques, souvent accompagnés d\'un verre de vin local, resteront gravés dans votre mémoire.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🏖️</span>
          <span>ESCAPES | SÃO TOMÉ-ET-PRÍNCIPE</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Plages Secrètes de l'Archipel</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              6 jours de découverte des plages les plus préservées de São Tomé-et-Príncipe
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">6</div>
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
            <span className="text-2xl">🇸🇹</span>
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | PLAGE</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">PLAGE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP8</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">6 jours - São Tomé à Praia Tamarindos</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour amateurs de plages préservées et de tranquillité</span>
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
                  Ce circuit de 6 jours est conçu pour les amoureux des plages préservées et de la tranquillité. São Tomé-et-Príncipe possède certaines des plus belles plages du monde, souvent cachées et accessibles seulement à ceux qui connaissent les bons chemins. Ce voyage vous emmène à la découverte de ces joyaux secrets, des plages de sable noir de São Tomé aux plages de rêve de Príncipe, en passant par des criques accessibles seulement par bateau.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Vous débuterez par les plages plus accessibles du nord de São Tomé, avant de partir à l'aventure vers des plages plus secrètes, accessibles en 4x4 ou par sentiers. Un vol vers Príncipe vous permettra de découvrir les plages mythiques de cette île préservée, dont la célèbre Praia Banana. Chaque journée sera dédiée à l'exploration de nouvelles plages, avec du temps pour la baignade, le snorkeling, le farniente, et la découverte de la vie marine.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit privilégie l'authenticité et l'intimité. Vous séjournerez dans des hébergements proches des plages, profiterez de pique-niques privés sur des plages désertes, et découvrirez des spots que peu de touristes connaissent. Un voyage pour ceux qui cherchent à échapper aux foules et à se connecter avec la nature sauvage des côtes santoméennes.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Perles Côtières du Voyage</h3>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Balnéaires de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Accès à des plages normalement inaccessibles</strong>, via 4x4, sentiers ou bateau</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Snorkeling dans des récifs préservés</strong>, avec équipement fourni</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des tortues marines</strong>, dans leur habitat naturel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Pique-niques privés sur plages désertes</strong>, repas préparés sur place</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Excursions en bateau vers des îlots</strong>, navigation côtière</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Couchers de soleil depuis des spots secrets</strong>, moments magiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontres avec pêcheurs locaux</strong>, découverte des traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Photographie de plages vierges</strong>, paysages à couper le souffle</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les plages */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Les Plages Secrètes de São Tomé-et-Príncipe</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      L'archipel de São Tomé-et-Príncipe possède un littoral d'une beauté exceptionnelle, avec des plages qui rivalisent avec les plus célèbres du monde. Ce qui les rend uniques, c'est leur préservation et leur accessibilité limitée. Grâce à nos guides locaux qui connaissent chaque recoin de la côte, vous accéderez à des plages que même les habitants ne visitent pas souvent. De décembre à mars, la saison est idéale : peu de pluie, mer calme, et températures agréables. La période coïncide également avec la saison des tortues sur certaines plages.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau facile</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Plages préservées</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Snorkeling</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Excursions bateau</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Tortues marines</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LES PLAGES EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plages visitées</div>
                      <div className="text-3xl font-bold text-green-700">10+</div>
                      <div className="text-xs">plages différentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Excursions en bateau</div>
                      <div className="text-3xl font-bold text-green-700">3</div>
                      <div className="text-xs">journées complètes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Sessions snorkeling</div>
                      <div className="text-3xl font-bold text-green-700">5</div>
                      <div className="text-xs">spots différents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Pique-niques privés</div>
                      <div className="text-3xl font-bold text-green-700">4</div>
                      <div className="text-xs">sur plages désertes</div>
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
                          Ce circuit vous emmène le long des côtes les plus spectaculaires des deux îles. Vous commencerez par les plages accessibles du nord de São Tomé, avant de vous aventurer vers le sud plus sauvage. Un vol vous transportera vers Príncipe, où vous découvrirez les plages les plus célèbres mais aussi les plus secrètes de l'île. Les déplacements combinent routes côtières, sentiers pédestres et navigation en bateau. Chaque journée est consacrée à l'exploration de nouvelles plages, avec un rythme adapté pour profiter pleinement de chaque lieu.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Transfert inter-îles</div>
                            <div className="text-green-700 font-bold">Avion inclus</div>
                          </div>
                          <div>
                            <div className="font-semibold">Accès 4x4</div>
                            <div className="text-green-700 font-bold">2 journées</div>
                          </div>
                          <div>
                            <div className="font-semibold">Navigation bateau</div>
                            <div className="text-green-700 font-bold">3 excursions</div>
                          </div>
                          <div>
                            <div className="font-semibold">Plages par jour</div>
                            <div className="text-green-700 font-bold">2-3 en moyenne</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Plages</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,7.5,1.7&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Plages Secrètes"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=9/1.0/7.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Plages détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Plages du Circuit</h3>
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
                      <div className="text-sm">Plages du Nord</div>
                      <div className="text-xs opacity-80">São Tomé, Praia das Conchas, premières découvertes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Aventure Sud et Príncipe</div>
                      <div className="text-xs opacity-80">Praia Jalé, vol vers Príncipe, Praia Banana</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Secrets de Príncipe</div>
                      <div className="text-xs opacity-80">Praia Tamarindos, îlots, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Équipement Balnéaire</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau facile (2/5)</strong> : Ce circuit est accessible à tous, sans condition physique particulière. Certains accès à des plages secrètes nécessitent de marcher sur des sentiers faciles (maximum 30 minutes) ou de monter/descendre de bateaux. Les transferts en 4x4 peuvent être un peu cahoteux sur les pistes. Aucune compétence particulière en natation n'est requise pour les activités de plage, mais être à l'aise dans l'eau est recommandé pour le snorkeling.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Condition physique normale suffisante</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Marches courtes sur sentiers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum : 8 ans (accompagné)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Aisance dans l'eau recommandée</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Balnéaire Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🩴</span>
                          <span>Sandales de plage ou aquashoes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac étanche pour plage</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire haute protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🕶️</span>
                          <span>Lunettes de soleil polarisées</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🤿</span>
                          <span>Masque et tuba (fourni si besoin)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste légère pour le soir</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📸</span>
                          <span>Appareil photo étanche</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourde réutilisable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Balnéaire ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès exclusif à des plages normalement inaccessibles</h4>
                        <p className="text-sm text-gray-700">
                          Grâce à nos guides locaux et à nos autorisations spéciales, nous accédons à des plages que même les habitants ne fréquentent pas souvent.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide spécialiste des côtes santoméennes</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un passionné des plages de l'archipel, connaissant chaque crique secrète et chaque meilleur moment pour les visiter.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Équipement de snorkeling de qualité fourni</h4>
                        <p className="text-sm text-gray-700">
                          Masques, tubas, palmes et combinaisons légères sont fournis pour des sessions de snorkeling confortables et sûres.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Groupe limité à 8 participants maximum</h4>
                        <p className="text-sm text-gray-700">
                          Pour préserver l'intimité des plages et la qualité de l'expérience, les groupes sont limités à 8 voyageurs maximum.
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
                  {/* Jour 1 - Arrivée et première plage */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE ET PREMIÈRE PLAGE</span>
                          <span className="text-sm text-gray-600">Accueil et découverte de Praia das Conchas</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide spécialiste des plages. Transfert à l'hôtel en centre-ville pour une installation rapide. Départ immédiat pour la première découverte : Praia das Conchas, l'une des plus belles plages de sable noir de l'île. Temps libre pour une première baignade dans l'océan Atlantique. Déjeuner pique-nique sur la plage. Après-midi : continuation de la détente, initiation au snorkeling dans les piscines naturelles protégées. Retour à São Tomé en fin d'après-midi. Briefing sur le programme des jours suivants. Dîner de bienvenue avec fruits de mer. Nuit à l'hôtel à São Tomé.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Plages du Nord en 4x4 */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PLAGES DU NORD EN 4X4</span>
                          <span className="text-sm text-gray-600">Exploration des plages accessibles seulement par pistes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée aventure 4x4</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 pour explorer les plages les plus secrètes du nord de l'île. Premier arrêt à une plage accessible seulement par une piste forestière. Baignade dans des eaux cristallines. Continuation vers d'autres criques isolées, chacune avec son caractère unique. Déjeuner pique-nique préparé par notre équipe sur une plage déserte. Après-midi : snorkeling dans des spots préservés, observation des poissons tropicaux. Rencontre avec des pêcheurs locaux qui partageront leurs connaissances sur la mer. Retour à São Tomé en fin d'après-midi. Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Exploration 4x4 - Plages isolées - Snorkeling - Rencontre pêcheurs
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Praia Jalé et vol vers Príncipe */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PRAIA JALÉ ET PRÍNCIPE</span>
                          <span className="text-sm text-gray-600">Sanctuaire de tortues et envol vers l'île préservée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée tortues et changement d'île</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour Praia Jalé, sanctuaire de tortues marines accessible seulement en 4x4. Découverte de cette plage protégée et explication du projet de conservation. Si la saison le permet, possibilité de voir des traces de tortues. Baignade dans les eaux calmes de la baie. Déjeuner pique-nique sur la plage. Transfert à l'aéroport de São Tomé pour le vol vers Príncipe (environ 30 minutes). Arrivée à Príncipe, accueil et transfert à l'hébergement en bord de mer. Installation et premier contact avec l'île. Dîner avec produits locaux. Nuit à Príncipe.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Sanctuaire tortues - Vol vers Príncipe - Première nuit sur l'île préservée
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Praia Banana et plages sud de Príncipe */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PRAIA BANANA ET SUD</span>
                          <span className="text-sm text-gray-600">Découverte de la plage emblématique et des criques secrètes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée emblématique à Príncipe</h4>
                        <p className="text-justify mb-4">
                          Visite de Praia Banana, la plage la plus célèbre de Príncipe, mondialement connue pour ses formations rocheuses spectaculaires. Temps libre pour la baignade, les photos, et le farniente. Déjeuner pique-nique sur la plage. Après-midi : exploration des plages moins connues du sud de Príncipe, accessibles par des sentiers côtiers. Découverte de criques secrètes aux eaux turquoise. Snorkeling dans des récifs peu fréquentés. Retour à l'hébergement en fin d'après-midi. Temps libre pour profiter de la plage de l'hébergement. Dîner et nuit à Príncipe.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Praia Banana - Plages secrètes sud - Snorkeling récifs
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Excursion en bateau vers Praia Tamarindos */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXCURSION BATEAU TAMARINDOS</span>
                          <span className="text-sm text-gray-600">Navigation vers la plage secrète et les îlots</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée navigation et plage secrète</h4>
                        <p className="text-justify mb-4">
                          Journée complète en bateau vers Praia Tamarindos, plage secrète accessible seulement par la mer. Navigation le long des côtes spectaculaires de Príncipe. Arrêt pour snorkeling sur des récifs coralliens préservés. Arrivée à Praia Tamarindos : plage de sable blanc quasi déserte. Déjeuner pique-nique privé préparé par l'équipe. Temps libre pour la baignade, la détente, et l'exploration des alentours. Après-midi : continuation vers de petits îlots pour une dernière session de snorkeling. Retour à Príncipe en fin d'après-midi. Dîner d'adieu avec fruits de mer frais. Nuit à Príncipe.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Excursion bateau - Praia Tamarindos - Snorkeling îlots - Pique-nique privé
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Dernières plages et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DERNIÈRES PLAGES ET DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Matinée libre pour profiter une dernière fois des plages de Príncipe. Option : dernière baignade, dernière session de snorkeling, ou simplement détente sur la plage de l'hébergement. Déjeuner léger. Transfert à l'aéroport de Príncipe pour le vol retour vers São Tomé. À l'arrivée à São Tomé, connexion avec votre vol international ou prolongation de séjour selon votre programme. Emportez avec vous le souvenir de plages parmi les plus belles et préservées du monde, le bronzage des tropiques, et la sérénité que seul un séjour au rythme des vagues peut apporter.
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
                      <span className="text-white text-2xl">🌊</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Balnéaires</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une célébration des plaisirs simples et purs de la vie balnéaire. Chaque expérience est conçue pour vous connecter profondément avec la mer, le sable et le soleil, dans des cadres d'une beauté à couper le souffle. Des baignades revitalisantes aux explorations sous-marines, préparez-vous à vivre des moments d'exception.
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
                              lat={exp.id === 'sable' ? 0.28 : 
                                   exp.id === 'snorkeling' ? 1.64 :
                                   exp.id === 'bateau' ? 1.60 :
                                   0.22} 
                              lng={exp.id === 'sable' ? 6.61 : 
                                   exp.id === 'snorkeling' ? 7.42 :
                                   exp.id === 'bateau' ? 7.38 :
                                   6.57} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Plages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" 
                          alt="Plage de sable blanc" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plage de sable blanc</h5>
                          <p className="text-sm text-gray-700">Sable fin et eaux turquoise</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600" 
                          alt="Snorkeling" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Snorkeling</h5>
                          <p className="text-sm text-gray-700">Exploration des récifs coralliens</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600" 
                          alt="Coucher de soleil" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Coucher de soleil</h5>
                          <p className="text-sm text-gray-700">Ciels orangés sur l'océan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles Balnéaires</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Plongée sous-marine (bouteille)</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Exploration des fonds marins avec un moniteur certifié. Supplément : 120€/plongée.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de surf avec moniteur</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Initiation au surf sur les spots appropriés de l'île. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Massage sur la plage</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Séance de massage relaxant avec le bruit des vagues. Supplément : 70€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Séance photo professionnelle</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Shooting photo sur les plus belles plages avec photographe. Supplément : 150€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements en Bord de Mer</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🌊</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements situés au plus près des plages, offrant un accès direct à la mer et des vues imprenables sur l'océan. De l'hôtel pratique en ville aux lodges de charme en bord de mer, chaque hébergement est choisi pour sa proximité avec les vagues et le sable.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('saotome')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'saotome' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SÃO TOMÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('principe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'principe' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PRÍNCIPE (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - São Tomé */}
                  {activeHotelTab === 'saotome' && (
                    <div className="space-y-16">
                      {/* Hotel Miramar */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Miramar" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Miramar</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville pratique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie rapide</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Proximité plages nord</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar offre un confort pratique pour les premiers jours d'exploration. Bien que situé en centre-ville, il est parfaitement positionné pour accéder rapidement aux plages du nord de l'île. Les chambres sont climatisées avec salle de bain privée. Le service de blanchisserie express est particulièrement utile pour les vêtements de plage. Le restaurant propose une cuisine locale avec des produits frais de la mer. Un point de départ idéal pour vos premières découvertes balnéaires.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Príncipe */}
                  {activeHotelTab === 'principe' && (
                    <div className="space-y-16">
                      {/* Príncipe Beach Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Príncipe Beach Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Príncipe Beach Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baie de Santo António, Príncipe, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏖️</span>
                                <span>Accès direct plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine avec vue mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍹</span>
                                <span className="text-sm font-semibold">Bar sur la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Couchers de soleil</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Príncipe Beach Lodge est situé directement sur l'une des plus belles plages de Santo António. Les bungalows sont construits dans un style traditionnel avec des matériaux locaux, offrant un confort simple mais authentique. Chaque bungalow dispose d'une terrasse privée avec vue sur l'océan. Le lodge a son propre restaurant de plage servant des fruits de mer frais et des spécialités locales. L'accès direct à la plage permet des baignades matinales ou nocturnes, et la piscine offre une alternative rafraîchissante. L'endroit idéal pour vivre au rythme des marées.
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
                  <span className="text-2xl">🏖️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$1,399</span>
                    <span className="text-xl line-through text-gray-500">$1,499</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol inter-îles, tous transferts, guide spécialiste, hébergements, excursions bateau
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
                    <option value="2026-12-10">10 Décembre 2026</option>
                    <option value="2027-01-07">7 Janvier 2027</option>
                    <option value="2027-02-04">4 Février 2027</option>
                    <option value="2027-03-04">4 Mars 2027</option>
                    <option value="2027-12-09">9 Décembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de décembre à mars (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>VOL INTER-ÎLES INCLUS</strong> : São Tomé - Príncipe aller-retour
                  </p>
                  <p className="text-xs text-gray-300">* Équipement snorkeling fourni</p>
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
                    Nos spécialistes des plages de São Tomé vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,7.5,1.7&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Plages Secrètes miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Plages Secrètes de l'Archipel - 6 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit balnéaire et découverte
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Activités Balnéaires Incluses</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Vol São Tomé-Príncipe aller-retour</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 excursions en bateau</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement snorkeling complet</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4 pique-niques sur plages désertes</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts 4x4 pour plages isolées</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste des plages</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>5 nuits en hébergement bord de mer</span>
                    <span className="font-bold text-green-700">✓</span>
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
                    <span className="font-bold text-green-700">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">8 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs décembre à mars</span>
                    <span className="font-bold text-green-700">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste</span>
                    <span className="font-bold text-green-700">Plages</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Recommandé : maillots de bain multiples et serviette rapide-séchage
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Balnéaire</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Ce circuit m'a permis de découvrir des plages de rêve que je n'aurais jamais trouvées seule. Les excursions en bateau étaient magiques, et dormir les pieds dans le sable à Príncipe était une expérience inoubliable. Pour les amoureux des plages préservées !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Claire M., voyageuse 2025
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