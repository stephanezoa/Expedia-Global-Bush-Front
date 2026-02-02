import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-2},${lat-2},${lng+2},${lat+2}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-2},${lat-2},${lng+2},${lat+2}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Patrimoine Culturel</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,8.0,19.0,12.0&layer=mapnik&marker=12.134,15.055&marker=9.15,18.39&marker=8.566,16.083&marker=9.267,14.233&marker=10.283,15.033"
          style={{ border: 0 }}
          allowFullScreen
          title="Patrimoine Culturel du Sud"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/10.0/13.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-800 border-2 border-gray-300"></span>
          <span className="text-sm">N'Djaména (capitale)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Sarh (culture Sara)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Moundou (artisanat)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Koumra (traditions)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Koura (patrimoine vivant)</span>
        </div>
      </div>
    </div>
  );
};

export default function Patrimoinesud() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('ndjamena');
  const [activeRegionTab, setActiveRegionTab] = useState('sud');
  const [activeExperienceTab, setActiveExperienceTab] = useState('culture');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏛️', title: 'Culture Sara', desc: 'Immersion dans la culture de l\'ethnie majoritaire du sud' },
    { icon: '🎨', title: 'Artisanat Traditionnel', desc: 'Découverte des techniques ancestrales de tissage, poterie et sculpture' },
    { icon: '🥁', title: 'Musique et Danse', desc: 'Spectacles et initiations aux rythmes et danses traditionnelles' },
    { icon: '🏺', title: 'Architecture Traditionnelle', desc: 'Visite de cases et villages aux constructions caractéristiques' },
    { icon: '🌾', title: 'Savoirs Agricoles', desc: 'Rencontre avec les gardiens des techniques culturales ancestrales' },
    { icon: '👑', title: 'Chefferies Traditionnelles', desc: 'Échanges avec les autorités coutumières du sud' },
  ];

  const regions = [
    { name: 'N\'Djaména', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Capitale et porte d\'entrée vers le sud' },
    { name: 'Région du Mandoul', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Cœur de la culture Sara et traditions vivantes' },
    { name: 'Sarh et Environs', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Ville historique et musée régional' },
    { name: 'Moundou', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Centre artisanal et brasseries traditionnelles' },
    { name: 'Koumra', color: 'bg-orange-100', textColor: 'text-orange-800', desc: 'Marchés traditionnels et vie rurale' },
    { name: 'Koura', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Village emblématique du patrimoine culturel' },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Culture Vivante', 
      icon: '🏛️',
      desc: 'Immersion totale dans la culture Sara et les traditions des peuples du sud du Tchad',
      highlights: ['Rites initiatiques', 'Danses traditionnelles', 'Contes et légendes', 'Costumes traditionnels']
    },
    { 
      id: 'artisanat',
      name: 'Artisanat d\'Art', 
      icon: '🎨',
      desc: 'Découverte des savoir-faire ancestraux : tissage, poterie, sculpture, vannerie',
      highlights: ['Tissage de coton', 'Poterie traditionnelle', 'Sculpture sur bois', 'Vannerie']
    },
    { 
      id: 'architecture',
      name: 'Architecture', 
      icon: '🏺',
      desc: 'Exploration des habitats traditionnels et des techniques de construction vernaculaires',
      highlights: ['Cases à toit de chaume', 'Greniers à mil', 'Cases de réunion', 'Architecture soudanaise']
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie', 
      icon: '🍲',
      desc: 'Initiation à la cuisine du sud et découverte des spécialités régionales',
      highlights: ['Couscous de mil', 'Sauces traditionnelles', 'Bières de mil', 'Plats de fête']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌍</span>
          <span>ESCAPES | TCHAD</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Patrimoine Culturel du Sud</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'immersion dans les traditions vivantes, l'artisanat et les coutumes des peuples du sud du Tchad
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
            <span className="text-2xl">🇹🇩</span>
            <span className="text-sm font-semibold">TCHAD | PATRIMOINE CULTUREL</span>
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
                <span className="bg-blue-800 text-white px-3 py-1 font-bold">CULTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - N'Djaména à Koura</span>
                <button className="ml-auto border-2 border-blue-800 text-blue-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage d'immersion culturelle au cœur des traditions du sud tchadien</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 8 jours vous plonge au cœur du patrimoine culturel du sud du Tchad, région riche en traditions vivantes, en artisanat ancestral et en coutumes préservées. Vous découvrirez la culture Sara, ethnie majoritaire du sud, à travers ses rites, sa musique, sa danse et son artisanat. De N'Djaména à Koura, en passant par Sarh, Moundou et Koumra, ce voyage vous permettra de rencontrer les gardiens des traditions, de participer à des ateliers artisanaux, d'assister à des spectacles traditionnels et de comprendre l'organisation sociale des communautés du sud. Une immersion authentique dans un patrimoine culturel exceptionnellement préservé.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Moments Forts du Voyage</h3>
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
                <div className="border-l-4 border-blue-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Culturelles Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Ateliers d'artisanat</strong> : tissage, poterie, sculpture sur bois</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Spectacles traditionnels</strong> : danses, musique, contes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Rencontres avec les chefs coutumiers</strong> et autorités traditionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite de villages traditionnels</strong> avec architecture caractéristique</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Initiation à la cuisine traditionnelle</strong> du sud du Tchad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Découverte des rites et cérémonies</strong> (selon calendrier)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite du Musée régional de Sarh</strong> et ses collections ethnographiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Participation aux activités agricoles</strong> selon la saison</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la culture Sara */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Culture Sara : Un Patrimoine Vivant</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Les Sara, ethnie majoritaire du sud du Tchad, ont préservé un riche patrimoine culturel malgré les influences modernes. Ce circuit vous permet de découvrir leurs traditions sociales, leur organisation en chefferies, leurs rites initiatiques (comme le "yondo"), leur artisanat raffiné, leur musique et leurs danses. C'est une opportunité unique de comprendre comment ces traditions continuent de structurer la vie sociale et spirituelle des communautés.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Traditions vivantes</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Artisanat préservé</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Musique et danse</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Architecture vernaculaire</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE PATRIMOINE CULTUREL DU SUD</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Groupes ethniques</div>
                      <div className="text-3xl font-bold text-blue-800">30+</div>
                      <div className="text-xs">dans le sud du Tchad</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Langues parlées</div>
                      <div className="text-3xl font-bold text-blue-800">50+</div>
                      <div className="text-xs">langues et dialectes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Artisans rencontrés</div>
                      <div className="text-3xl font-bold text-blue-800">15+</div>
                      <div className="text-xs">spécialités différentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Danses traditionnelles</div>
                      <div className="text-3xl font-bold text-blue-800">10+</div>
                      <div className="text-xs">styles différents</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Culturel à Travers le Sud</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers les principales régions culturelles du sud du Tchad. Vous découvrirez successivement la capitale N'Djaména, puis les villes de Sarh et Moundou, centres culturels majeurs, avant de plonger dans le monde rural avec Koumra et Koura. Chaque étape révèle un aspect différent du patrimoine culturel : musées, artisanat, architecture, musique, danse et traditions sociales.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-blue-800 font-bold">1,200 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Communautés visitées</div>
                            <div className="text-blue-800 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Ateliers artisanaux</div>
                            <div className="text-blue-800 font-bold">6</div>
                          </div>
                          <div>
                            <div className="font-semibold">Spectacles traditionnels</div>
                            <div className="text-blue-800 font-bold">4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Sud Culturel du Tchad</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,8.0,19.0,12.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte sud culturel Tchad"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/10.0/13.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-800">Les Pôles Culturels du Sud</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'N\'Djaména' && 'Capitale • Musée • Artisans'}
                          {region.name === 'Région du Mandoul' && 'Culture Sara • Traditions • Chefferies'}
                          {region.name === 'Sarh et Environs' && 'Musée • Histoire • Architecture'}
                          {region.name === 'Moundou' && 'Artisanat • Bière • Marché'}
                          {region.name === 'Koumra' && 'Vie rurale • Agriculture • Marchés'}
                          {region.name === 'Koura' && 'Patrimoine • Traditions • Immersion'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-800 to-teal-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours Culturel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">N'Djaména</div>
                      <div className="text-xs opacity-80">Introduction, musée, artisans capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Sarh</div>
                      <div className="text-xs opacity-80">Musée régional, culture Sara, architecture</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Moundou & Koumra</div>
                      <div className="text-xs opacity-80">Artisanat, marchés, vie rurale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-8</div>
                      <div className="text-sm">Koura & Retour</div>
                      <div className="text-xs opacity-80">Immersion villageoise, synthèse, départ</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Découverte culturelle de la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de N'Djaména. Accueil par votre guide spécialiste des cultures du sud du Tchad. Transfert à l'hôtel. Après-midi de découverte culturelle de la capitale : visite du Musée National du Tchad pour une introduction aux différentes ethnies et cultures du pays, avec un focus particulier sur les peuples du sud. Visite du quartier artisanal et rencontre avec des artisans venus de toutes les régions. Briefing détaillé sur le circuit avec présentation des étapes et des spécificités culturelles. Dîner de bienvenue avec dégustation de spécialités tchadiennes. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - N'Djaména culturelle */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA CULTURELLE</span>
                          <span className="text-sm text-gray-600">Artisans, marchés et traditions urbaines</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée d'immersion urbaine</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte des expressions culturelles à N'Djaména. Visite approfondie du marché central avec focus sur les produits artisanaux du sud : tissus, poteries, sculptures. Rencontre avec des artisans spécialisés dans le travail du cuir, de l'argent et des perles. Atelier d'initiation à une technique artisanale (au choix). Après-midi : visite d'un centre culturel pour assister à une répétition de danse traditionnelle. Rencontre avec un historien spécialiste des cultures du sud du Tchad. Dîner dans un restaurant traditionnel avec spectacle de musique live. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers Sarh */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA → SARH</span>
                          <span className="text-sm text-gray-600">Entrée dans le sud et capitale culturelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Vers le cœur culturel du sud</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 en direction de Sarh (environ 550 km). Traversée progressive des paysages : de la savane sahélienne aux zones plus verdoyantes du sud. Arrêts dans des villages pour observer les changements architecturaux et les différentes activités agricoles. Arrivée à Sarh, troisième ville du Tchad et capitale culturelle du sud. Installation à l'hôtel. Visite du Musée régional du Moyen-Chari pour une immersion dans l'histoire et les cultures des peuples du sud, avec une collection exceptionnelle d'objets traditionnels. Rencontre avec le conservateur du musée. Dîner avec spécialités du sud. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Exploration de Sarh et environs */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SARH ET ENVIRONS</span>
                          <span className="text-sm text-gray-600">Culture Sara, architecture et traditions</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée d'immersion culturelle</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte approfondie de la culture Sara. Visite de villages traditionnels autour de Sarh pour observer l'architecture caractéristique : cases rondes avec toits de chaume, greniers à mil. Rencontre avec un chef de village et discussion sur l'organisation sociale traditionnelle. Atelier de poterie traditionnelle avec une potière expérimentée. Après-midi : initiation aux danses traditionnelles Sara avec un groupe local. Découverte des instruments de musique traditionnels (tambours, balafons, harpes). Participation à une session de contes et légendes avec un griot. Retour à Sarh en fin de journée. Dîner et nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Sarh vers Moundou */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SARH → MOUNDOU</span>
                          <span className="text-sm text-gray-600">Capitale économique et artisanale du sud</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Vers le centre artisanal</h4>
                        <p className="text-justify mb-4">
                          Route vers Moundou, deuxième ville du Tchad et centre économique du sud (environ 150 km). Arrêts dans des villages spécialisés dans différents artisanats : tissage de coton, vannerie, forge traditionnelle. Visite d'ateliers et rencontres avec les artisans. Arrivée à Moundou et installation à l'hôtel. Visite de la brasserie traditionnelle de Gala (fabrication de bière de mil). Exploration du marché artisanal de Moundou, l'un des plus importants du sud. Rencontre avec des tisserands spécialisés dans le tissage de pagnes traditionnels. Dîner avec dégustation de bière de mil locale. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Moundou et Koumra */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MOUNDOU → KOURA</span>
                          <span className="text-sm text-gray-600">Via Koumra, immersion rurale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée d'immersion rurale</h4>
                        <p className="text-justify mb-4">
                          Départ pour Koumra, ville importante de la région du Mandoul (environ 100 km). Visite du marché traditionnel de Koumra, centre d'échange des produits agricoles et artisanaux. Rencontre avec des agriculteurs et découverte des techniques culturales traditionnelles (culture du coton, du mil, de l'arachide). Déjeuner traditionnel chez l'habitant. Après-midi : route vers Koura, village emblématique du patrimoine culturel (environ 50 km). Arrivée à Koura et accueil chaleureux par la communauté. Installation chez l'habitant ou au campement communautaire. Participation aux activités villageoises en fin de journée. Dîner communautaire avec les villageois. Soirée de contes et musique traditionnelle. Nuit à Koura.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Immersion à Koura */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">IMMERSION À KOURA</span>
                          <span className="text-sm text-gray-600">Patrimoine vivant et traditions</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée complète d'immersion</h4>
                        <p className="text-justify mb-4">
                          Journée entière d'immersion dans la vie et les traditions de Koura. Participation aux activités quotidiennes du village selon la saison : travaux agricoles, transformation des produits, préparation des repas. Ateliers pratiques : fabrication de poteries, tissage, préparation de bière de mil. Rencontre avec les anciens du village pour écouter les histoires et légendes. Initiation aux jeux traditionnels. Spectacle de danses et musique organisé spécialement pour les visiteurs. Déjeuner et dîner communautaires avec partage des repas traditionnels. Cérémonie d'adieu avec remise de souvenirs artisanaux. Nuit à Koura.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Retour à N'Djaména et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">KOURA → N'DJAMÉNA → DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Derniers moments à Koura avec la communauté. Cérémonie de départ et remerciements. Route de retour vers N'Djaména (environ 600 km) avec arrêts techniques. Déjeuner en route. Réflexion sur le voyage et partage des impressions. Arrivée à N'Djaména en fin d'après-midi. Transfert à l'aéroport international de N'Djaména pour votre vol de retour. Emportez avec vous des souvenirs inoubliables de cette immersion culturelle au sud du Tchad, une expérience unique qui vous aura fait découvrir la richesse et la vitalité des traditions des peuples du sud, leurs savoir-faire ancestraux et leur hospitalité légendaire.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Les Expériences Culturelles du Sud</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une immersion complète dans le patrimoine culturel vivant du sud du Tchad. De l'artisanat traditionnel aux spectacles de danse, chaque expérience est conçue pour vous faire découvrir l'authenticité et la richesse des traditions préservées.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-blue-800 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-blue-800">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-blue-800">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-800 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'culture' ? 9.15 : 
                                   exp.id === 'artisanat' ? 8.566 :
                                   exp.id === 'architecture' ? 9.267 :
                                   10.283} 
                              lng={exp.id === 'culture' ? 18.39 : 
                                   exp.id === 'artisanat' ? 16.083 :
                                   exp.id === 'architecture' ? 14.233 :
                                   15.033} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'culture' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Sara : Un Monde à Découvrir</h5>
                            <p className="text-gray-700 mb-4">
                              Les Sara représentent environ 30% de la population tchadienne et sont majoritaires dans le sud. Leur culture, préservée malgré les influences modernes, se caractérise par une riche tradition orale (contes, légendes, proverbes), des rites initiatiques complexes (comme le "yondo"), une organisation sociale structurée autour des chefferies, et un art de vivre communautaire. Vous découvrirez également leur musique (tambours, balafons, harpes) et leurs danses spectaculaires, expression de leur identité culturelle.
                            </p>
                          </div>
                        )}

                        {exp.id === 'artisanat' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Artisanat : Des Savoir-Faire Ancestraux</h5>
                            <p className="text-gray-700 mb-4">
                              L'artisanat du sud du Tchad est d'une richesse exceptionnelle. Vous découvrirez le tissage du coton (pagnes traditionnels), la poterie utilitaire et décorative, la sculpture sur bois (masques, statuettes, objets usuels), la vannerie (paniers, nattes, nasses), le travail du cuir et la forge traditionnelle. Chaque technique est transmise de génération en génération et chaque objet raconte une histoire, exprime une croyance ou répond à un besoin spécifique de la vie quotidienne.
                            </p>
                          </div>
                        )}

                        {exp.id === 'architecture' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Architecture Vernaculaire : Un Patrimoine Bâti</h5>
                            <p className="text-gray-700 mb-4">
                              L'architecture traditionnelle du sud du Tchad est parfaitement adaptée au climat et aux modes de vie. Vous découvrirez les cases rondes avec toits de chaume coniques, les greniers à mil sur pilotis, les cases de réunion communautaire, et l'organisation spatiale des villages. Ces constructions utilisent des matériaux locaux (terre, bois, paille) et des techniques ancestrales qui assurent fraîcheur en saison chaude et protection en saison des pluies. C'est une architecture intelligente, durable et esthétique.
                            </p>
                          </div>
                        )}

                        {exp.id === 'gastronomie' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Gastronomie : Saveurs et Traditions</h5>
                            <p className="text-gray-700 mb-4">
                              La cuisine du sud du Tchad est riche et variée, basée sur les produits locaux. Vous découvrirez le couscous de mil (base de l'alimentation), les sauces à base de feuilles (oseille, gombo, baobab), les plats de viande et poisson, et les bières de mil traditionnelles (gala, bili-bili). La préparation et le partage des repas sont des moments importants de la vie sociale. Vous participerez à la préparation de plats traditionnels et découvrirez les règles du partage et de l'hospitalité.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Galerie d'expériences */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Expériences Culturelles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=600" 
                          alt="Artisanat traditionnel" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Artisanat du sud</h5>
                          <p className="text-sm text-gray-700">Découverte des techniques ancestrales de tissage et poterie</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600" 
                          alt="Danses traditionnelles" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Spectacles de danse</h5>
                          <p className="text-sm text-gray-700">Initiation aux rythmes et danses traditionnelles du sud</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Architecture traditionnelle" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Villages traditionnels</h5>
                          <p className="text-sm text-gray-700">Visite de cases et villages aux constructions caractéristiques</p>
                        </div>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Des Hébergements Authentiques au Cœur du Patrimoine</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                      <span className="text-blue-800 text-2xl">🏨</span>
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements variés qui reflètent la diversité du sud du Tchad : hôtel confortable à N'Djaména, auberges simples mais propres dans les villes du sud, et expérience unique de nuit chez l'habitant à Koura. Chaque hébergement a été sélectionné pour son authenticité et son immersion dans l'environnement culturel local.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('ndjamena')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ndjamena' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      N'DJAMÉNA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('sud')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'sud' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SUD (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('koura')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'koura' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KOURA (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - N'Djaména */}
                  {activeHotelTab === 'ndjamena' && (
                    <div className="space-y-16">
                      {/* Hôtel Novotel N'Djaména */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Novotel N'Djaména" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Novotel N'Djaména</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, N'Djaména, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Wifi</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* confortable situé en centre-ville. Chambres spacieuses avec salle de bain privée, climatisation, wifi, TV. Restaurant servant une cuisine internationale et locale. Bar, piscine, centre d'affaires. Service de blanchisserie. Emplacement idéal pour les débuts et fins de circuit. Accueil chaleureux et service professionnel.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Sud */}
                  {activeHotelTab === 'sud' && (
                    <div className="space-y-16">
                      {/* Hôtel Le Chari - Sarh */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=600" 
                              alt="Hôtel Le Chari Sarh" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Le Chari - Sarh</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Sarh, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏨</span>
                                <span>Hôtel confortable</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Cuisine régionale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel confortable situé au cœur de Sarh. Chambres simples mais propres avec salle de bain privée, ventilateur ou climatisation. Restaurant servant une cuisine traditionnelle du sud du Tchad. Jardin tropical ombragé pour se détendre. Service attentionné. Wifi disponible dans les parties communes. Emplacement idéal pour découvrir la ville et la région.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Auberge de Moundou */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                              alt="Auberge de Moundou" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Auberge de Moundou</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Moundou, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏠</span>
                                <span>Auberge simple</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Cour ombragée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Auberge simple mais propre située à Moundou. Chambres basiques avec lit, ventilateur, salle de bain privée (eau froide). Restaurant servant une cuisine locale authentique. Cour ombragée agréable. Accueil chaleureux. Immersion dans l'atmosphère de la ville. Connexion limitée au monde moderne, pour une expérience plus authentique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Koura */}
                  {activeHotelTab === 'koura' && (
                    <div className="space-y-16">
                      {/* Chez l'habitant à Koura */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Chez l'habitant Koura" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Chez l'Habitant - Koura</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Village de Koura, région du Mandoul
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span>Immersion familiale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏠</span>
                                <span className="text-sm font-semibold">Case traditionnelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍲</span>
                                <span className="text-sm font-semibold">Cuisine familiale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Nuit exceptionnelle chez l'habitant dans le village de Koura. Hébergement dans une case traditionnelle aménagée pour les visiteurs ou dans une chambre familiale. Conditions basiques mais authentiques : lit avec moustiquaire, point d'eau à proximité. Partage des repas avec la famille. Participation aux activités quotidiennes. Échanges authentiques sur la vie au village. Expérience humaine unique permettant une immersion profonde dans la culture locale. Contribution directe au développement communautaire.
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
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit Culturel</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-blue-800">$2,799</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : 4x4 avec chauffeur, guides culturels spécialisés, hébergement complet, tous les repas, ateliers artisanaux, spectacles traditionnels
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-10-15">15 Octobre 2026</option>
                    <option value="2026-11-10">10 Novembre 2026</option>
                    <option value="2026-12-05">5 Décembre 2026</option>
                    <option value="2027-01-10">10 Janvier 2027</option>
                    <option value="2027-02-15">15 Février 2027</option>
                    <option value="2027-03-10">10 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs d'octobre à mars (meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT CULTUREL EXCLUSIF :</strong> Immersion authentique dans les traditions du sud
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-800 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce circuit culturel ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts des cultures tchadiennes vous accompagnent dans la préparation.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,8.0,19.0,12.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte sud Tchad miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Patrimoine Culturel du Sud - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit culturel à travers le sud du Tchad
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Ce Qui est Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Transport 4x4 avec chauffeur</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide culturel spécialisé</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les hébergements</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas et boissons</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ateliers artisanaux</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spectacles traditionnels</span>
                    <span className="font-bold text-blue-800">✓</span>
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
                    <span>Condition physique</span>
                    <span className="font-bold text-blue-800">Moyenne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-800">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-blue-800">Fièvre jaune + Paludisme</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-blue-800">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Respect des traditions et coutumes locales obligatoire
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-800">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une immersion culturelle exceptionnelle dans le sud du Tchad. Les rencontres avec les artisans et les soirées de contes resteront gravées dans ma mémoire."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas B., voyageur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Culturel</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}