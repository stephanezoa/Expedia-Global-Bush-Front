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
        <h4 className="font-semibold text-center text-lg">Itinéraire Plages et Îlots Paradisiaques</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik&marker=0.34,6.73&marker=0.25,6.65&marker=0.20,6.70&marker=0.15,6.60"
          style={{ border: 0 }}
          allowFullScreen
          title="Plages et Îlots Paradisiaques São Tomé"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=11/0.34/6.73" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia Lagarto</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia Piscina</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia Macaco</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ilhéu das Rolas</span>
        </div>
      </div>
    </div>
  );
};

export default function PlageParadis() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('detente');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏝️', title: 'Plages Immaculées', desc: 'Sable blanc et eaux turquoise sur des plages préservées' },
    { icon: '🤿', title: 'Snorkeling et Plongée', desc: 'Découverte des fonds marins et récifs coralliens' },
    { icon: '⛵', title: 'Excursions en Bateau', desc: 'Navigation vers les îlots paradisiaques de l\'archipel' },
    { icon: '🌅', title: 'Couchers de Soleil', desc: 'Spectacles naturels chaque soir sur l\'océan Atlantique' },
    { icon: '🍹', title: 'Détente Totale', desc: 'Relaxation absolue dans des hôtels de charme en bord de mer' },
    { icon: '🐠', title: 'Faune Marine', desc: 'Observation des tortues, dauphins et poissons tropicaux' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Arrivée et départ, découverte de la capitale avant de profiter des plages',
      features: ['Visite culturelle', 'Acclimatation', 'Première soirée', 'Restauration']
    },
    { 
      name: 'Praia Lagarto', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Longue plage de sable blanc avec cocotiers et eaux cristallines',
      features: ['Sable blanc', 'Cocotiers', 'Eau cristalline', 'Ambiance calme']
    },
    { 
      name: 'Praia Piscina', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Piscine naturelle protégée par la barrière de corail, idéale pour le snorkeling',
      features: ['Piscine naturelle', 'Snorkeling', 'Familles', 'Plage abritée']
    },
    { 
      name: 'Praia Macaco', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Plage isolée accessible uniquement par bateau, paradis préservé',
      features: ['Accessible par bateau', 'Préservée', 'Sauvage', 'Tortues marines']
    },
    { 
      name: 'Ilhéu das Rolas', 
      color: 'bg-teal-100', 
      textColor: 'text-teal-800', 
      desc: 'Îlot paradisiaque à la pointe sud, traversé par la ligne de l\'équateur',
      features: ['Ligne équateur', 'Résort exclusif', 'Plongée', 'Faune marine']
    },
    { 
      name: 'Praia dos Tamarindos', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Baie tranquille entourée de forêt tropicale, ambiance paisible',
      features: ['Baie tranquille', 'Forêt tropicale', 'Pêche locale', 'Authenticité']
    },
  ];

  const experiences = [
    { 
      id: 'detente',
      name: 'Détente Absolue', 
      icon: '🏖️',
      desc: 'Repos total sur des plages de sable fin, cocotiers et eaux turquoise',
      highlights: ['Chaises longues', 'Cocotiers', 'Baignade tranquille', 'Lectures'],
      details: 'Ce circuit est conçu pour une relaxation totale. Les journées sont rythmées par le bruit des vagues, les bains de soleil et les siestes à l\'ombre des cocotiers. Pas d\'horaire strict, juste le plaisir de profiter de paysages paradisiaques.'
    },
    { 
      id: 'snorkeling',
      name: 'Snorkeling et Plongée', 
      icon: '🤿',
      desc: 'Exploration des fonds marins riches en coraux et poissons tropicaux',
      highlights: ['Récifs coralliens', 'Poissons tropicaux', 'Tortues', 'Équipement fourni'],
      details: 'São Tomé offre des sites de snorkeling exceptionnels. Les eaux chaudes et cristallines permettent d\'observer une riche biodiversité marine : poissons-clowns, tortues vertes, raies, et parfois même des dauphins. L\'équipement est fourni et des guides expérimentés vous accompagnent.'
    },
    { 
      id: 'excursions',
      name: 'Excursions en Bateau', 
      icon: '⛵',
      desc: 'Navigation vers des plages isolées et îlots accessibles uniquement par la mer',
      highlights: ['Bateaux locaux', 'Plages privées', 'Pique-niques', 'Couchers de soleil'],
      details: 'Des excursions en bateau vous mènent vers des endroits inaccessibles par la route. Vous découvrirez des plages sauvages, des grottes marines et des îlots déserts. Des pique-niques sont organisés sur des plages privées pour une expérience exclusive.'
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie Océane', 
      icon: '🍤',
      desc: 'Dégustation de fruits de mer et poissons frais pêchés du jour',
      highlights: ['Poisson grillé', 'Langoustes', 'Fruits exotiques', 'Cuisine locale'],
      details: 'La cuisine santoméenne est un délice pour les amateurs de fruits de mer. Vous goûterez des poissons grillés, des langoustes, des crabes et des plats traditionnels préparés avec des produits locaux. Les fruits tropicaux (ananas, mangues, papayes) complètent ce festin culinaire.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🏝️</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Plages et Îlots Paradisiaques</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              6 jours de détente sur les plus belles plages et îlots de São Tomé
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
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | DÉTENTE PLAGES</span>
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
                <span className="bg-blue-600 text-white px-3 py-1 font-bold">DÉTENTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP3</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">6 jours - São Tomé à Ilhéu das Rolas</span>
                <button className="ml-auto border-2 border-blue-600 text-blue-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour amateurs de plages, détente et paysages paradisiaques, niveau facile</span>
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
                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 6 jours vous invite à découvrir les plus belles plages et îlots de São Tomé, un véritable paradis tropical encore préservé du tourisme de masse. Entre sable blanc, eaux turquoise et cocotiers, vous profiterez d'une détente absolue dans des paysages de carte postale.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera par la capitale São Tomé, avant de vous emmener vers les plages les plus spectaculaires de l'île. Vous alternerez entre détente sur des plages immaculées, snorkeling dans des eaux cristallines, excursions en bateau vers des îlots déserts et dégustation de fruits de mer frais.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Le point d'orgue de ce circuit est la découverte de l'Ilhéu das Rolas, un îlot paradisiaque traversé par la ligne de l'équateur. Vous y séjournerez dans un resort exclusif, profiterez de plages privées et découvrirez une faune marine exceptionnelle. Un véritable rêve tropical accessible.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Les Moments Inoubliables du Voyage</h3>
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
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Exclusives de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Séjour sur l'Ilhéu das Rolas</strong>, îlot paradisiaque à la ligne de l'équateur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Snorkeling dans la Piscina Naturelle</strong>, site protégé aux eaux cristallines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Excursion en bateau vers Praia Macaco</strong>, plage accessible uniquement par la mer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Couchers de soleil sur l'océan</strong>, spectacles quotidiens sur la plage</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Dégustation de fruits de mer frais</strong>, pêchés du jour et grillés sur la plage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Observation des tortues marines</strong>, selon la saison de ponte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Massages en bord de mer</strong>, relaxation totale au son des vagues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Navigation vers des îlots déserts</strong>, pour une journée Robinson Crusoé</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les plages */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Les Plages de São Tomé</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      São Tomé possède certaines des plus belles plages d'Afrique, encore préservées du tourisme de masse. Le sable est d'origine volcanique (noir au nord, doré au sud) ou corallienne (blanc sur les îlots). Les eaux sont chaudes toute l'année (26-29°C) et d'une clarté exceptionnelle grâce à l'absence de pollution. La meilleure période pour profiter des plages est la saison sèche (juin à octobre), mais le climat est agréable toute l'année.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Eau turquoise</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Sable blanc</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Cocotiers</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Faune marine</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Plages isolées</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE PARADIS EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Température eau</div>
                      <div className="text-3xl font-bold text-blue-600">28</div>
                      <div className="text-xs">°C moyenne annuelle</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plages visitées</div>
                      <div className="text-3xl font-bold text-blue-600">8</div>
                      <div className="text-xs">plages paradisiaques</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Heures de soleil/jour</div>
                      <div className="text-3xl font-bold text-blue-600">7</div>
                      <div className="text-xs">en moyenne</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Îlots explorés</div>
                      <div className="text-3xl font-bold text-blue-600">3</div>
                      <div className="text-xs">îlots déserts</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours des Plages</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers les plus belles plages de São Tomé. Vous commencerez par les plages proches de la capitale, puis vous vous dirigerez vers le sud de l'île pour découvrir des plages plus isolées. Le voyage culminera avec un séjour sur l'Ilhéu das Rolas, îlot paradisiaque à la pointe sud. Chaque journée offre une nouvelle découverte de plage, avec des ambiances variées : plages familiales, plages romantiques, plages sauvages.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Plages/jour</div>
                            <div className="text-blue-600 font-bold">1-2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température eau</div>
                            <div className="text-blue-600 font-bold">26-30°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Excursions bateau</div>
                            <div className="text-blue-600 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Sites snorkeling</div>
                            <div className="text-blue-600 font-bold">5</div>
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
                      src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Plages São Tomé"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=11/0.34/6.73" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">Les Plages et Îlots</h3>
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
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée São Tomé</div>
                      <div className="text-xs opacity-80">Installation, première soirée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2-4</div>
                      <div className="text-sm">Plages du Sud</div>
                      <div className="text-xs opacity-80">Détente, snorkeling, excursions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Ilhéu das Rolas</div>
                      <div className="text-xs opacity-80">Îlot paradisiaque, ligne équateur</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-xl font-semibold mb-4 text-teal-700">Niveau et Équipement Recommandé</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau très facile (1/5)</strong> : Ce circuit est accessible à tous, sans condition physique particulière. Les déplacements se font en véhicule et bateau, avec peu de marche. Parfait pour les familles, les couples et les personnes souhaitant se reposer.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-teal-600">●</span>
                          <span className="text-sm">Aucune condition physique requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-teal-600">●</span>
                          <span className="text-sm">Accessible aux enfants (à partir de 3 ans)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-teal-600">●</span>
                          <span className="text-sm">Adapté aux personnes âgées</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🩴</span>
                          <span>Tongues/sandales</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩱</span>
                          <span>Maillot de bain (x2)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire haute protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🕶️</span>
                          <span>Lunettes de soleil</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧢</span>
                          <span>Chapeau ou casquette</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🤿</span>
                          <span>Masque et tuba (fourni si pas)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📷</span>
                          <span>Appareil photo étanche</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📚</span>
                          <span>Livres/lectures</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">Pourquoi Choisir Ce Circuit ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Plages préservées du tourisme de masse</h4>
                        <p className="text-sm text-gray-700">
                          São Tomé reste une destination confidentielle avec des plages quasi désertes, loin des foules des destinations balnéaires traditionnelles.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Séjour sur un îlot paradisiaque</h4>
                        <p className="text-sm text-gray-700">
                          L'Ilhéu das Rolas est un véritable joyau, avec des plages de sable blanc, des eaux turquoise et la ligne de l'équateur à traverser.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Flexibilité totale</h4>
                        <p className="text-sm text-gray-700">
                          Pas d'horaire strict : vous décidez du rythme de votre journée entre détente sur la plage, snorkeling ou excursions optionnelles.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Groupe limité à 8 participants</h4>
                        <p className="text-sm text-gray-700">
                          Pour une expérience plus personnalisée et intime, les groupes sont limités à 8 voyageurs maximum.
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
                  {/* Jour 1 - Arrivée à São Tomé */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À SÃO TOMÉ</span>
                          <span className="text-sm text-gray-600">Accueil et transfert vers votre hôtel en bord de mer</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide francophone et transfert vers votre hôtel situé en bord de mer, à 20 minutes de l'aéroport. Installation dans votre chambre avec vue sur l'océan. Briefing sur le déroulement du séjour. Temps libre pour vous détendre après le voyage. En fin d'après-midi, première baignade dans les eaux chaudes de l'Atlantique. Admirez le coucher de soleil depuis la plage de l'hôtel. Dîner de bienvenue avec fruits de mer frais et spécialités locales. Nuit à l'hôtel en bord de mer.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Découverte des plages du sud */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PRAIA LAGARTO ET PRAIA PISCINA</span>
                          <span className="text-sm text-gray-600">Journée détente sur deux des plus belles plages de l'île</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée plage (niveau très facile)</h4>
                        <p className="text-justify mb-4">
                          Départ matinal vers Praia Lagarto, longue plage de sable doré bordée de cocotiers. Installation sur la plage avec chaises longues et parasols. Baignade dans les eaux turquoise, temps libre pour se détendre, lire ou simplement profiter du paysage. Déjeuner pique-nique sur la plage avec poisson grillé et salades fraîches. Après-midi : transfert vers Praia Piscina, une piscine naturelle protégée par la barrière de corail. Snorkeling dans les eaux cristallines pour observer les poissons tropicaux. Retour à l'hôtel en fin d'après-midi. Dîner libre (recommandations fournies par le guide). Nuit à l'hôtel.
                        </p>
                        <div className="bg-blue-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Baignade, détente plage, snorkeling, pique-nique sur la plage
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Excursion en bateau vers Praia Macaco */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXCURSION EN BATEAU : PRAIA MACACO</span>
                          <span className="text-sm text-gray-600">Navigation vers une plage isolée accessible uniquement par la mer</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée Robinson Crusoé</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en bateau depuis le village de pêcheurs. Navigation d'environ 45 minutes le long de la côte, avec possibilité d'observer des dauphins. Arrivée à Praia Macaco, plage isolée entourée de forêt tropicale. Cette plage doit son nom aux singes qui viennent parfois s'y promener. Installation sur la plage vierge. Baignade dans les eaux cristallines, snorkeling autour des rochers où la vie marine est abondante. Déjeuner pique-nique sur la plage avec poisson frais grillé au barbecue. Temps libre pour se promettre le long de la plage, lire ou faire une sieste à l'ombre des arbres. Retour en bateau en milieu d'après-midi. Dîner de fruits de mer à l'hôtel. Nuit à l'hôtel.
                        </p>
                        <div className="bg-blue-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Excursion bateau, plage isolée, snorkeling, barbecue sur la plage
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Transfert vers le sud et Praia dos Tamarindos */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LE SUD : PRAIA DOS TAMARINDOS</span>
                          <span className="text-sm text-gray-600">Transfert vers les plages du sud et découverte d'une baie tranquille</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-600">Changement de décor</h4>
                        <p className="text-justify mb-4">
                          Après le petit-déjeuner, départ vers le sud de l'île (environ 1h30 de route pittoresque). Arrêt en route à Praia dos Tamarindos, une magnifique baie entourée de forêt tropicale. Installation dans votre nouvel hébergement en bord de mer. Déjeuner avec vue sur l'océan. Après-midi libre pour profiter de la plage privée de l'hôtel. Baignade dans les eaux calmes de la baie. Possibilité de faire du kayak ou du paddle (en option). En fin d'après-midi, promenade le long de la plage jusqu'au village de pêcheurs voisin. Dîner à l'hôtel avec produits locaux. Nuit dans votre hébergement en bord de mer.
                        </p>
                        <div className="bg-blue-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Transfert, baignade, kayak/paddle, promenade plage
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Transfert vers Ilhéu das Rolas */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ILHÉU DAS ROLAS</span>
                          <span className="text-sm text-gray-600">Transfert en bateau vers l'îlot paradisiaque à la ligne de l'équateur</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée sur un îlot paradisiaque</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal en bateau vers l'Ilhéu das Rolas (environ 20 minutes de navigation). Arrivée sur l'îlot et installation dans le resort. L'Ilhéu das Rolas est un petit îlot de 3 km² traversé par la ligne de l'équateur. Journée libre pour profiter des plages de sable blanc et des eaux turquoise. Snorkeling exceptionnel autour des récifs coralliens (masque et tuba fournis). Visite du monument de la ligne de l'équateur, où vous pourrez prendre une photo avec un pied dans chaque hémisphère. Déjeuner au restaurant du resort avec buffet de fruits de mer. Après-midi : détente sur la plage privée, baignade, ou balade autour de l'îlot. Spectaculaire coucher de soleil sur l'océan. Dîner romantique en bord de mer. Nuit au resort de l'Ilhéu das Rolas.
                        </p>
                        <div className="bg-blue-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Transfert bateau, snorkeling, visite ligne équateur, détente plage
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Départ de São Tomé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE SÃO TOMÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner face à l'océan sur l'Ilhéu das Rolas. Dernière baignade matinale dans les eaux turquoise. Transfert en bateau vers l'île principale, puis route vers l'aéroport. Selon l'horaire de votre vol, possibilité de déjeuner léger en route. Transfert à l'aéroport international de São Tomé. Assistance aux formalités d'embarquement. Emportez avec vous les souvenirs inoubliables de vos journées sur les plages paradisiaques de São Tomé, le bronzage et la détente absolue.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-600">Les Expériences Balnéaires</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit de détente vous offre une expérience complète des plaisirs balnéaires de São Tomé. Entre farniente sur des plages immaculées, découverte des fonds marins et navigation vers des îlots paradisiaques, chaque journée est une invitation à la relaxation et à l'émerveillement.
                  </p>

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
                            <InteractiveMap 
                              lat={exp.id === 'detente' ? 0.25 : 
                                   exp.id === 'snorkeling' ? 0.20 :
                                   exp.id === 'excursions' ? 0.15 :
                                   0.30} 
                              lng={exp.id === 'detente' ? 6.65 : 
                                   exp.id === 'snorkeling' ? 6.70 :
                                   exp.id === 'excursions' ? 6.60 :
                                   6.73} 
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
                          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600" 
                          alt="Plage de sable blanc" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages immaculées</h5>
                          <p className="text-sm text-gray-700">Sable blanc et eaux turquoise</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600" 
                          alt="Snorkeling" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Snorkeling</h5>
                          <p className="text-sm text-gray-700">Découverte des fonds marins</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Excursion bateau" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Excursions en bateau</h5>
                          <p className="text-sm text-gray-700">Navigation vers des îlots paradisiaques</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">Activités Optionnelles pour Détente</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Massage en bord de mer</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Séance de massage relaxant avec les bruits des vagues en fond sonore. Massages aux huiles essentielles locales. Supplément : 70€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de plongée bouteille</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Initiation à la plongée sous-marine avec moniteur professionnel. Équipement fourni. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tour de l'île en hélicoptère</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Vol panoramique pour admirer les plages et l'île depuis les airs. Durée : 30 minutes. Supplément : 250€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Pêche au gros</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Demi-journée de pêche sportive avec équipement et guide. Possibilité de pêcher marlin, thon, etc. Supplément : 180€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements en Bord de Mer à travers São Tomé</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                      <span className="text-blue-600 text-2xl">🏨</span>
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit de détente propose une sélection d'hébergements soigneusement choisis pour leur situation en bord de mer, leur confort et leur charme. Des hôtels avec piscine face à l'océan aux resorts exclusifs sur îlot, chaque hébergement contribue à l'expérience paradisiaque de ce voyage.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('saotome')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'saotome' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SÃO TOMÉ (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('montecafe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'montecafe' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PRAIA DOS TAMARINDOS (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('cote')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'cote' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ILHÉU DAS ROLAS (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - São Tomé ville */}
                  {activeHotelTab === 'saotome' && (
                    <div className="space-y-16">
                      {/* Omali Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Omali Lodge" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Omali Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Praia Lagarto, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine avec vue mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Plage privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧖</span>
                                <span className="text-sm font-semibold">Spa et massages</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Omali Lodge est un hôtel 4* situé directement sur la plage de Praia Lagarto. Les chambres sont spacieuses, climatisées, avec salle de bain privée, minibar et balcon ou terrasse donnant sur l'océan. L'hôtel dispose d'une piscine extérieure avec vue panoramique, d'un restaurant servant une délicieuse cuisine locale et internationale (fruits de mer excellents), d'un bar face à la mer et d'un spa proposant des massages relaxants. Accès direct à la plage via un petit sentier. Parfait pour commencer votre séjour dans une ambiance détendue.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Praia dos Tamarindos */}
                  {activeHotelTab === 'montecafe' && (
                    <div className="space-y-16">
                      {/* Praia dos Tamarindos Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600" 
                              alt="Praia dos Tamarindos Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Praia dos Tamarindos Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Praia dos Tamarindos, sud de São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌴</span>
                                <span>Lodge écologique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏖️</span>
                                <span className="text-sm font-semibold">Baie tranquille</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛶</span>
                                <span className="text-sm font-semibold">Kayaks et paddle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍃</span>
                                <span className="text-sm font-semibold">Énergie solaire</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé dans une baie préservée du sud de l'île, le Praia dos Tamarindos Lodge est un écolodge composé de 8 bungalows en bois dispersés dans un jardin tropical. Chaque bungalow dispose d'une terrasse privée avec hamac et vue sur la mer. Salle de bain privée avec eau chaude solaire. Pas de climatisation mais ventilateurs et ventilation naturelle. Le restaurant sert une cuisine locale à base de produits frais. Activités incluses : kayaks, paddle, masques et tubas. Accès direct à la plage. Ambiance authentique et paisible.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Ilhéu das Rolas */}
                  {activeHotelTab === 'cote' && (
                    <div className="space-y-16">
                      {/* Pestana Equador Ilhéu das Rolas */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1573843989-c9d4a65d6c8c?w=600" 
                              alt="Pestana Equador Ilhéu das Rolas" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Pestana Equador Ilhéu das Rolas</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Ilhéu das Rolas, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏝️</span>
                                <span>Resort exclusif</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌐</span>
                                <span className="text-sm font-semibold">Ligne équateur</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🤿</span>
                                <span className="text-sm font-semibold">Centre de plongée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine infinie</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Pestana Equador est le seul resort de l'Ilhéu das Rolas, offrant une expérience exclusive sur cet îlot paradisiaque. Les 40 bungalows sont répartis dans un jardin tropical, chacun avec terrasse privée et vue sur l'océan. Chambre climatisée, salle de bain privée. Le resort dispose de deux restaurants (buffet et à la carte), de deux bars, d'une piscine à débordement avec vue sur l'océan, d'un centre de plongée, d'un spa et de plusieurs plages privées. L'emplacement est exceptionnel : vous êtes sur un îlot traversé par la ligne de l'équateur, entouré d'eaux turquoise et de récifs coralliens. Une expérience unique.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-600">$1,599</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit détente complet</div>
                  <div className="mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Transferts, hébergements, tous les repas, excursions en bateau, équipement snorkeling
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
                    <option value="2026-06-15">15 Juin 2026</option>
                    <option value="2026-07-10">10 Juillet 2026</option>
                    <option value="2026-08-20">20 Août 2026</option>
                    <option value="2026-09-05">5 Septembre 2026</option>
                    <option value="2026-10-15">15 Octobre 2026</option>
                    <option value="2026-11-20">20 Novembre 2026</option>
                    <option value="2026-12-10">10 Décembre 2026</option>
                    <option value="2027-01-15">15 Janvier 2027</option>
                    <option value="2027-02-10">10 Février 2027</option>
                    <option value="2027-03-20">20 Mars 2027</option>
                    <option value="2027-04-05">5 Avril 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de novembre à avril (saison idéale pour les plages)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>INCLUS : VOL DOMESTIQUE</strong> São Tomé ↔ Ilhéu das Rolas
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 voyageurs maximum</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur le séjour ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts plages de São Tomé vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Plages São Tomé miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Plages Paradisiaques - 6 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit détente plages et îlots
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Équipement Fourni</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Masque et tuba (snorkeling)</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Serviettes de plage</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Chaises longues et parasols</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Eau minérale quotidienne</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide de plages et snorkeling</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance guide local</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts bateaux inclus</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Informations Importantes</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du circuit</span>
                    <span className="font-bold text-blue-600">Très facile (1/5)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-600">3 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Prix enfant (3-11 ans)</span>
                    <span className="font-bold text-blue-600">-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vol domestique inclus</span>
                    <span className="font-bold text-blue-600">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance annulation</span>
                    <span className="font-bold text-blue-600">Recommandée</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Adapté aux familles, couples et voyageurs solo
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                  <span>💬</span>
                  <span>Témoignage Voyageur</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Des plages de rêve, des eaux turquoise, un service impeccable. L'Ilhéu das Rolas est un véritable paradis sur terre. Ce circuit est parfait pour ceux qui veulent se déconnecter et profiter de paysages à couper le souffle. Un séjour magique !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Sophie L., voyageuse 2025
                </div>
              </div>
            </div>
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