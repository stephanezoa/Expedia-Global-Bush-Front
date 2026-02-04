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
        <h4 className="font-semibold text-center text-lg">Itinéraire Randonnée Plantations</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik&marker=0.33,6.73&marker=0.28,6.61&marker=0.24,6.58&marker=0.20,6.55"
          style={{ border: 0 }}
          allowFullScreen
          title="Randonnée Plantations São Tomé"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=11/0.33/6.73" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Roca Agostinho Neto</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Monte Café</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Trilha da Ponta Figo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia das Conchas</span>
        </div>
      </div>
    </div>
  );
};

export default function RandonnePlantation() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('randonnee');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🥾', title: 'Randonnées en Forêt Tropicale', desc: 'Sentiers variés à travers les plantations et forêts préservées' },
    { icon: '🌱', title: 'Plantations Historiques', desc: 'Visite des anciennes "roças" coloniales de cacao et café' },
    { icon: '🌄', title: 'Vues Panoramiques', desc: 'Points de vue spectaculaires sur l\'île depuis les hauteurs' },
    { icon: '🏞️', title: 'Cascades Cachées', desc: 'Découverte de chutes d\'eau isolées au cœur de la forêt' },
    { icon: '🏛️', title: 'Architecture Coloniale', desc: 'Exploration des bâtiments historiques des plantations' },
    { icon: '🍃', title: 'Biodiversité Unique', desc: 'Observation de la flore et faune endémiques de São Tomé' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Point de départ et d\'arrivée, découverte du patrimoine urbain avant les randonnées',
      features: ['Visite culturelle', 'Acclimatation', 'Préparation équipement', 'Briefing randonnée']
    },
    { 
      name: 'Roca Agostinho Neto', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Ancienne plantation coloniale monumentale, randonnée dans les jardins historiques',
      features: ['Plantation de cacao', 'Architecture coloniale', 'Sentiers historiques', 'Musée du cacao']
    },
    { 
      name: 'Monte Café', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Région montagneuse des plantations de café, randonnées dans les collines',
      features: ['Plantations de café', 'Randonnées modérées', 'Vues panoramiques', 'Écolodges']
    },
    { 
      name: 'Trilha da Ponta Figo', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Sentier côtier spectaculaire avec vues sur l\'océan et falaises',
      features: ['Randonnée côtière', 'Falaises', 'Points de vue', 'Observation oiseaux marins']
    },
    { 
      name: 'Praia das Conchas', 
      color: 'bg-teal-100', 
      textColor: 'text-teal-800', 
      desc: 'Plage isolée accessible uniquement par sentier, récompense après la randonnée',
      features: ['Plage préservée', 'Conches uniques', 'Baignade naturelle', 'Pique-nique']
    },
    { 
      name: 'Forêt de Monte Carmo', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Forêt primaire préservée, randonnée au cœur de la biodiversité santoméenne',
      features: ['Forêt primaire', 'Biodiversité', 'Sentiers sauvages', 'Flore endémique']
    },
  ];

  const experiences = [
    { 
      id: 'randonnee',
      name: 'Randonnée Active', 
      icon: '🥾',
      desc: 'Sentiers variés à travers plantations, forêts et côtes, adaptés à différents niveaux',
      highlights: ['Sentiers balisés', 'Dénivelés modérés', 'Durées variables', 'Paysages divers'],
      details: 'Ce circuit propose des randonnées de 2 à 5 heures par jour, avec des dénivelés allant de 200 à 800 mètres. Les sentiers sont généralement bien tracés mais peuvent être glissants en saison des pluies. Un bon équipement de randonnée est recommandé.'
    },
    { 
      id: 'plantations',
      name: 'Histoire des Plantations', 
      icon: '🏛️',
      desc: 'Découverte du patrimoine colonial et des techniques agricoles traditionnelles',
      highlights: ['Visites guidées', 'Architecture coloniale', 'Processus de production', 'Rencontres producteurs'],
      details: 'São Tomé fut le premier producteur mondial de cacao au début du XXe siècle. Vous visiterez des plantations historiques (roças) pour comprendre leur fonctionnement, leur architecture et leur impact sur l\'histoire de l\'île.'
    },
    { 
      id: 'nature',
      name: 'Nature Sauvage', 
      icon: '🌿',
      desc: 'Immersion dans les écosystèmes uniques de l\'île et observation de la biodiversité',
      highlights: ['Forêts tropicales', 'Cascades cachées', 'Faune endémique', 'Flore unique'],
      details: 'São Tomé possède un taux d\'endémisme exceptionnel. Lors de vos randonnées, vous pourrez observer des oiseaux uniques comme le pigeon de São Tomé, des orchidées rares et une végétation luxuriante.'
    },
    { 
      id: 'authenticite',
      name: 'Rencontres Authentiques', 
      icon: '👨‍🌾',
      desc: 'Échanges avec les communautés rurales et les travailleurs des plantations',
      highlights: ['Rencontres locales', 'Partage culturel', 'Découverte mode de vie', 'Échanges humains'],
      details: 'Les randonnées vous mèneront à la rencontre des Santoméens qui vivent et travaillent dans les plantations. Vous partagerez des moments authentiques et découvrirez leur mode de vie traditionnel.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586899028174-e09c6c5d7c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🥾</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Randonnées au Cœur des Plantations</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours de randonnée à travers les plantations historiques et forêts tropicales de São Tomé
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
            <span className="text-2xl">🇸🇹</span>
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | RANDONNÉE ACTIVE</span>
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
                <span className="bg-amber-700 text-white px-3 py-1 font-bold">RANDONNÉE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP2</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - São Tomé à Monte Café</span>
                <button className="ml-auto border-2 border-amber-700 text-amber-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-amber-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour amateurs de randonnée et d'histoire coloniale, niveau moyen requis</span>
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
                  Ce circuit de randonnée de 8 jours vous invite à explorer à pied les trésors cachés de São Tomé. Entre plantations historiques, forêts tropicales préservées et sentiers côtiers spectaculaires, vous découvrirez une île aux paysages variés et au patrimoine culturel riche. Ce voyage est conçu pour les amateurs de marche qui souhaitent découvrir São Tomé de manière active et authentique.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure débutera par la visite de la capitale, São Tomé, avant de vous emmener à travers les anciennes plantations coloniales (roças) qui firent la richesse de l'île. Vous marcherez sur les sentiers qu'empruntaient autrefois les travailleurs du cacao et du café, découvrirez une architecture coloniale préservée et rencontrerez les Santoméens qui perpétuent les traditions agricoles.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Les randonnées varient en difficulté et en longueur, offrant à chaque journée une nouvelle découverte : jardins tropicaux de la Roca Agostinho Neto, collines verdoyantes de Monte Café, falaises spectaculaires de la Trilha da Ponta Figo, et plages isolées accessibles uniquement à pied. Ce circuit est l'occasion unique de combiner activité physique, découverte culturelle et immersion dans la nature exceptionnelle de São Tomé.
                </p>

                {/* Section Points forts */}
                <div className="bg-amber-50 border-l-4 border-amber-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-700">Les Moments Inoubliables du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 text-2xl">{item.icon}</span>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Exclusives de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Randonnée guidée dans la Roca Agostinho Neto</strong>, plus grande plantation coloniale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Découverte des sentiers historiques</strong> utilisés par les travailleurs du cacao</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Randonnée jusqu'à la cascade cachée</strong> de Monte Café et baignade naturelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Traversée de la forêt primaire</strong> de Monte Carmo et observation de la biodiversité</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Randonnée côtière sur la Trilha da Ponta Figo</strong> avec vues spectaculaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Visite de plantations familiales</strong> et rencontre avec les producteurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Dégustation de cacao et café</strong> directement à la source</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-700 mt-1">•</span>
                        <span><strong>Randonnée jusqu'à la Praia das Conchas</strong>, plage isolée accessible uniquement à pied</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les randonnées */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Les Randonnées de São Tomé</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      São Tomé offre des possibilités de randonnées exceptionnelles grâce à son relief volcanique varié et ses sentiers historiques. Les plantations coloniales ont créé un réseau de chemins à travers l'île, aujourd'hui redécouverts par les randonneurs. Les dénivelés sont généralement modérés (200-800 m), et les sentiers traversent des paysages variés : forêts tropicales humides, plantations de cacao et café, côtes rocheuses et plages isolées. La meilleure période pour randonner est la saison sèche (juin à octobre), mais le circuit est opérationnel toute l'année avec un équipement adapté.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Niveau moyen</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Sentiers variés</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Dénivelé modéré</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Paysages divers</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Histoire coloniale</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LES RANDONNÉES EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance totale</div>
                      <div className="text-3xl font-bold text-amber-700">65</div>
                      <div className="text-xs">km de randonnée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Dénivelé max</div>
                      <div className="text-3xl font-bold text-amber-700">800</div>
                      <div className="text-xs">mètres (Monte Café)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Temps moyen/jour</div>
                      <div className="text-3xl font-bold text-amber-700">4h</div>
                      <div className="text-xs">de marche effective</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plantations visitées</div>
                      <div className="text-3xl font-bold text-amber-700">6</div>
                      <div className="text-xs">roças historiques</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours des Randonnées</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers les paysages les plus variés de São Tomé. Vous commencerez par des randonnées dans les plantations historiques autour de la capitale, puis vous dirigerez vers les régions montagneuses de l'intérieur. Les sentiers vous mèneront à travers des forêts tropicales, le long de côtes spectaculaires et jusqu'à des plages isolées. Chaque journée offre une expérience de randonnée différente, avec des niveaux de difficulté adaptés pour permettre à chacun de profiter pleinement des paysages.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Randonnées/jour</div>
                            <div className="text-amber-700 font-bold">1-2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude max</div>
                            <div className="text-amber-700 font-bold">1,200m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Sentiers côtiers</div>
                            <div className="text-amber-700 font-bold">15 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes traversés</div>
                            <div className="text-amber-700 font-bold">6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Randonnées</h3>
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
                      title="Carte Randonnées São Tomé"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=11/0.33/6.73" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-amber-700">Les Zones de Randonnée</h3>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">São Tomé et environs</div>
                      <div className="text-xs opacity-80">Arrivée, randonnées plantations proches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Région de Monte Café</div>
                      <div className="text-xs opacity-80">Randonnées montagne, plantations café</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-7</div>
                      <div className="text-sm">Côte et forêts</div>
                      <div className="text-xs opacity-80">Randonnées côtières, forêts primaires</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Dernière randonnée, transfert aéroport</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Niveau et Équipement Requis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau moyen (2/5)</strong> : Ce circuit est accessible à toute personne en bonne forme physique, pratiquant une activité physique régulière. Les randonnées durent de 2 à 5 heures par jour avec des dénivelés modérés (200-800 m). Certains sentiers peuvent être glissants en saison des pluies. Pas de difficulté technique particulière.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">●</span>
                          <span className="text-sm">Bonne condition physique générale</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">●</span>
                          <span className="text-sm">Expérience de randonnée appréciée mais non obligatoire</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">●</span>
                          <span className="text-sm">Âge minimum recommandé : 16 ans</span>
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
                          <span>🎒</span>
                          <span>Sac à dos 20-30L</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste imperméable</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourde 1-2L</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire haute protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🦟</span>
                          <span>Anti-moustiques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧢</span>
                          <span>Chapeau ou casquette</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩳</span>
                          <span>Vêtements techniques</span>
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
                        <h4 className="font-semibold">Accès à des sites uniquement accessibles à pied</h4>
                        <p className="text-sm text-gray-700">
                          Ce circuit vous mène dans des endroits que les circuits classiques n'atteignent pas : cascades cachées, plages isolées, sentiers historiques des plantations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide spécialiste des randonnées santoméennes</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un expert des sentiers de l'île, connaissant parfaitement l'histoire des plantations et les écosystèmes traversés.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Immersion totale dans la nature</h4>
                        <p className="text-sm text-gray-700">
                          En marchant à travers l'île, vous vous connectez profondément à la nature santoméenne et découvrez sa biodiversité de manière intime.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Groupe limité à 6 participants</h4>
                        <p className="text-sm text-gray-700">
                          Pour une expérience plus personnalisée et respectueuse de l'environnement, les groupes sont limités à 6 randonneurs maximum.
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
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À SÃO TOMÉ</span>
                          <span className="text-sm text-gray-600">Accueil et préparation des randonnées</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide randonneur francophone, spécialiste des sentiers santoméens. Transfert à votre hôtel situé au centre-ville. Après-midi consacré à la préparation : vérification de l'équipement de randonnée, briefing détaillé sur le circuit et les conditions des sentiers. Première approche de l'histoire des plantations avec une visite du Musée National installé dans le Fort São Sebastião. Dîner de bienvenue dans un restaurant typique pour découvrir les saveurs santoméennes. Distribution des cartes et informations sur les premières randonnées. Nuit à l'hôtel à São Tomé.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Randonnée dans les plantations proches */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RANDONNÉE : ROCA AGRÍCOLA</span>
                          <span className="text-sm text-gray-600">Première immersion dans les plantations historiques</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Première randonnée (niveau facile)</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal vers la Roca Agrícola, plantation historique située à 30 minutes de São Tomé. Randonnée de 3 heures (6 km, dénivelé +200m) à travers les jardins de la plantation, sur les sentiers qu'empruntaient autrefois les travailleurs du cacao. Visite des bâtiments coloniaux préservés : la maison du gérant, les séchoirs à cacao, l'hôpital. Déjeuner pique-nique dans les jardins de la plantation. Après-midi : continuation de la randonnée vers une cascade secondaire où vous pourrez vous baigner. Retour à São Tomé en fin d'après-midi. Temps libre pour se reposer. Dîner et nuit à l'hôtel à São Tomé.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Randonnée du jour :</strong> 6 km - 3h - Dénivelé +200m/-200m - Niveau facile
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Vers Monte Café */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">SÃO TOMÉ → MONTE CAFÉ</span>
                          <span className="text-sm text-gray-600">Transfert vers les hauteurs et première randonnée montagnarde</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Montée vers les plantations de café</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de São Tomé en direction de la région de Monte Café (environ 1h30 de route). Arrivée à l'écolodge et installation. Première randonnée de l'après-midi : sentier circulaire de 2 heures (4 km, dénivelé +150m) pour découvrir les environs et s'acclimater à l'altitude (600m). Cette balade facile vous mènera à travers des plantations de café et des jardins tropicaux, avec de belles vues sur la vallée. Rencontre avec un producteur de café local qui vous expliquera les techniques de culture et de torréfaction traditionnelles. Dégustation de café fraîchement torréfié. Dîner à l'écolodge avec produits locaux. Nuit à l'écolodge de Monte Café.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Randonnée du jour :</strong> 4 km - 2h - Dénivelé +150m/-150m - Niveau facile
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Randonnée à la cascade de Monte Café */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CASCADE DE MONTE CAFÉ</span>
                          <span className="text-sm text-gray-600">Randonnée plus sportive vers une cascade cachée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Journée randonnée (niveau moyen)</h4>
                        <p className="text-justify mb-4">
                          Journée complète de randonnée vers la cascade cachée de Monte Café. Départ matinal pour une marche de 4-5 heures (8 km, dénivelé +400m) à travers la forêt tropicale humide. Le sentier serpente entre les arbres immenses, les fougères géantes et les plantations de café. Arrivée au pied de la cascade de 25 mètres qui se jette dans un bassin naturel idéal pour une baignade rafraîchissante. Déjeuner pique-nique au bord de l'eau. Après-midi : retour par un autre sentier offrant des vues panoramiques sur la région. En chemin, observation de la flore endémique et peut-être de quelques oiseaux tropicaux. Retour à l'écolodge en fin d'après-midi. Dîner et nuit à l'écolodge.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Randonnée du jour :</strong> 8 km - 4-5h - Dénivelé +400m/-400m - Niveau moyen
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Randonnée vers Ponta Figo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE CAFÉ → TRILHA DA PONTA FIGO</span>
                          <span className="text-sm text-gray-600">Des montagnes à la côte, randonnée spectaculaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Randonnée côtière (niveau moyen)</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Monte Café en direction de la côte nord-ouest. Début de la randonnée sur la Trilha da Ponta Figo, sentier côtier spectaculaire offrant des vues à couper le souffle sur l'océan Atlantique. Randonnée de 5 heures (10 km, dénivelé +300m) le long des falaises, avec plusieurs points de vue remarquables. Observation des oiseaux marins (fous bruns, frégates) et peut-être de dauphins au large. Déjeuner pique-nique sur une falaise dominant l'océan. Après-midi : continuation du sentier jusqu'à une petite crique isolée pour une baignade rafraîchissante. Transfert en fin de journée vers votre hébergement sur la côte. Installation, dîner de fruits de mer et nuit au bord de l'océan.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Randonnée du jour :</strong> 10 km - 5h - Dénivelé +300m/-300m - Niveau moyen
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Randonnée vers Praia das Conchas */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PRAIA DAS CONCHAS</span>
                          <span className="text-sm text-gray-600">Randonnée vers une plage isolée et récompense balnéaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Randonnée et détente (niveau facile)</h4>
                        <p className="text-justify mb-4">
                          Randonnée matinale de 2 heures (4 km, dénivelé +100m) à travers la forêt côtière pour rejoindre la magnifique Praia das Conchas. Cette plage isolée, accessible uniquement à pied ou par bateau, doit son nom aux milliers de coquillages qui recouvrent son sable. Arrivée sur la plage, temps libre pour se détendre, nager dans les eaux cristallines, faire du snorkeling ou simplement profiter du paysage. Déjeuner pique-nique sur la plage avec poisson frais grillé. Après-midi : option entre une courte randonnée vers les falaises environnantes pour admirer le panorama, ou simplement du temps libre pour profiter de la plage. Retour à l'hébergement en fin d'après-midi. Dîner d'adieu avec les produits de la pêche du jour. Nuit au bord de l'océan.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Randonnée du jour :</strong> 4 km - 2h - Dénivelé +100m/-100m - Niveau facile
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Retour à São Tomé et dernière randonnée */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CÔTE → SÃO TOMÉ</span>
                          <span className="text-sm text-gray-600">Dernière randonnée et retour à la civilisation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-700">Dernière randonnée et synthèse</h4>
                        <p className="text-justify mb-4">
                          Dernière matinée de randonnée : sentier facile de 2 heures (3 km) le long de la côte, avec arrêt pour observer les pêcheurs traditionnels et leurs techniques. Retour à São Tomé en milieu de journée. Installation à l'hôtel et temps libre pour se reposer ou faire quelques achats de souvenirs. En fin d'après-midi, visite d'une dernière plantation familiale pour une dégustation finale de cacao et café. Soirée de clôture du circuit avec synthèse des randonnées et partage des expériences. Dîner libre dans un restaurant de votre choix (recommandations fournies par le guide). Nuit à l'hôtel à São Tomé.
                        </p>
                        <div className="bg-amber-50 p-3 rounded text-sm">
                          <strong>Randonnée du jour :</strong> 3 km - 2h - Dénivelé +50m/-50m - Niveau très facile
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ de São Tomé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE SÃO TOMÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments libres pour des achats de souvenirs ou une dernière promenade dans le centre historique de São Tomé. Selon l'horaire de votre vol, transfert à l'aéroport international de São Tomé. Assistance aux formalités d'embarquement. Emportez avec vous les souvenirs inoubliables de vos randonnées à travers les plantations historiques, les forêts tropicales et les côtes spectaculaires de São Tomé, ainsi que la satisfaction d'avoir découvert l'île de manière active et authentique.
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
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amber-700">Les Expériences de Randonnée</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit de randonnée vous offre une expérience multidimensionnelle de São Tomé. Au-delà de la simple marche, chaque randonnée est une immersion dans l'histoire, la culture et la nature exceptionnelle de l'île. Des sentiers historiques des plantations aux chemins côtiers spectaculaires, préparez-vous à découvrir São Tomé comme peu de visiteurs ont la chance de le faire.
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
                              lat={exp.id === 'randonnee' ? 0.28 : 
                                   exp.id === 'plantations' ? 0.33 :
                                   exp.id === 'nature' ? 0.25 :
                                   0.30} 
                              lng={exp.id === 'randonnee' ? 6.61 : 
                                   exp.id === 'plantations' ? 6.73 :
                                   exp.id === 'nature' ? 6.58 :
                                   6.65} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Randonnées</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1586899028174-e09c6c5d7c9b?w=600" 
                          alt="Plantations de cacao" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Sentiers des plantations</h5>
                          <p className="text-sm text-gray-700">Chemins historiques à travers les roças coloniales</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600" 
                          alt="Forêt tropicale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêts tropicales</h5>
                          <p className="text-sm text-gray-700">Randonnées sous la canopée luxuriante</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1573843989-c9d4a65d6c8c?w=600" 
                          alt="Côtes de São Tomé" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Sentiers côtiers</h5>
                          <p className="text-sm text-gray-700">Chemins spectaculaires le long des falaises</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">Activités Optionnelles pour Randonneurs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Ascension du Pico de São Tomé</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Journée complète pour les plus sportifs : ascension du point culminant de l'île (2.024m). Guide spécialisé, équipement fourni. Supplément : 180€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Randonnée nocturne en forêt</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Découverte de la vie nocturne de la forêt tropicale avec un guide naturaliste. Observation des animaux nocturnes. Supplément : 90€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de photographie nature</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Atelier avec un photographe professionnel pour immortaliser les paysages et la biodiversité. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Massage de récupération</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Séance de massage spécial randonneur pour détendre les muscles après les efforts. Supplément : 70€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements pour Randonneurs à travers São Tomé</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-amber-700 w-16 md:w-32"></span>
                      <span className="text-amber-700 text-2xl">🏨</span>
                      <span className="h-px bg-amber-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit de randonnée propose une sélection d'hébergements adaptés aux besoins spécifiques des marcheurs. Confort après l'effort, localisation stratégique près des sentiers, et ambiance chaleureuse sont les critères qui ont guidé notre choix. De l'hôtel confortable en ville à l'écolodge en pleine nature en passant par la guesthouse en bord de mer, chaque hébergement contribue à l'expérience unique de ce voyage.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('saotome')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'saotome' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SÃO TOMÉ (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('montecafe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'montecafe' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MONTE CAFÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('cote')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'cote' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CÔTE NORD (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('pantufo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'pantufo' 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PANTAFUL (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - São Tomé ville */}
                  {activeHotelTab === 'saotome' && (
                    <div className="space-y-16">
                      {/* Pestana São Tomé */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Pestana São Tomé" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Pestana São Tomé</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine rafraîchissante</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💆</span>
                                <span className="text-sm font-semibold">Spa et massages</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant varié</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Pestana São Tomé est un hôtel 4* situé à 10 minutes à pied du centre historique. Parfait pour les randonneurs, il offre toutes les commodités nécessaires après une journée de marche. Les chambres sont spacieuses, climatisées, avec salle de bain privée, minibar et balcon. L'hôtel dispose d'une piscine extérieure idéale pour se détendre, d'un spa proposant des massages de récupération, d'un restaurant servant une cuisine internationale et locale, et d'un bar. Service de blanchisserie rapide (idéal pour laver vos vêtements de randonnée). Emplacement central pour explorer la ville à pied.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Monte Café */}
                  {activeHotelTab === 'montecafe' && (
                    <div className="space-y-16">
                      {/* Bom Bom Resort Monte Café */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Bom Bom Resort Monte Café" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bom Bom Resort Monte Café</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Monte Café, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Écolodge montagnard</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Bungalows en bois</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌡️</span>
                                <span className="text-sm font-semibold">Climat frais (600m)</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍃</span>
                                <span className="text-sm font-semibold">Énergie solaire</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé à 600 mètres d'altitude, le Bom Bom Resort Monte Café est un écolodge conçu pour les amateurs de nature. Les 10 bungalows en bois et pierre volcanique sont dispersés dans un jardin tropical, chacun avec terrasse privée et hamac. Pas de climatisation (température fraîche la nuit), mais ventilateurs et moustiquaires. Salle de bain privée avec eau chaude solaire. Le restaurant sert une délicieuse cuisine locale à base de produits du jardin. L'écolodge est alimenté à l'énergie solaire, recycle ses déchets et participe à la conservation de la forêt environnante. Parfait pour une immersion dans la nature santoméenne après une journée de randonnée.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Côte Nord */}
                  {activeHotelTab === 'cote' && (
                    <div className="space-y-16">
                      {/* Neves Fisherman's Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1578837268581-d5b8e5d17c01?w=600" 
                              alt="Neves Fisherman's Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Neves Fisherman's Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Neves, côte nord, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🎣</span>
                                <span>Ambiance pêcheurs</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏖️</span>
                                <span className="text-sm font-semibold">En bord de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍤</span>
                                <span className="text-sm font-semibold">Poisson frais quotidien</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛶</span>
                                <span className="text-sm font-semibold">Pirogues traditionnelles</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Neves Fisherman's Lodge est un établissement familial situé dans le village de pêcheurs de Neves, sur la côte nord. Les 8 chambres simples mais confortables sont décorées avec des éléments marins et disposent d'une salle de bain privée avec eau chaude. Le restaurant, les pieds dans le sable, sert du poisson et fruits de mer fraîchement pêchés. L'ambiance est authentique et chaleureuse, avec la possibilité d'observer les pêcheurs partir et revenir avec leur pêche. Pas de piscine, mais la mer est à quelques pas. Idéal pour se reposer après les randonnées côtières.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Pantaful */}
                  {activeHotelTab === 'pantufo' && (
                    <div className="space-y-16">
                      {/* Roça São João Guesthouse */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1599601859392-2f7a4c61f901?w=600" 
                              alt="Roça São João Guesthouse" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Roça São João Guesthouse</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Pantaful, région sud, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Plantation historique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌳</span>
                                <span className="text-sm font-semibold">Jardin botanique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍫</span>
                                <span className="text-sm font-semibold">Production cacao bio</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏠</span>
                                <span className="text-sm font-semibold">Maison coloniale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              La Roça São João Guesthouse est installée dans une ancienne plantation coloniale soigneusement restaurée. Les 6 chambres sont aménagées dans la maison principale, chacune décorée avec des meubles d'époque et des tissus africains. Salle de bain privée avec eau chaude. Le domaine de 50 hectares comprend un jardin botanique avec des espèces tropicales rares, des plantations de cacao biologique et des sentiers de randonnée. Les repas sont préparés avec les produits du jardin. Une expérience unique de séjour dans une plantation historique, parfaite pour la dernière nuit avant le départ.
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
                  <span className="text-2xl">🥾</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-amber-700">$2,099</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit randonnée complet</div>
                  <div className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded">
                    ✅ Inclus : Transferts, guide randonneur spécialisé, hébergements, tous les repas, équipement de randonnée
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
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2026-07-15">15 Juillet 2026</option>
                    <option value="2026-08-05">5 Août 2026</option>
                    <option value="2026-09-20">20 Septembre 2026</option>
                    <option value="2026-10-25">25 Octobre 2026</option>
                    <option value="2027-06-10">10 Juin 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juin à octobre (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-amber-700 to-orange-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ÉQUIPEMENT DE RANDONNÉE PRÊTÉ</strong> : bâtons, gourdes, sacs étanches
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 randonneurs maximum</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur la randonnée ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts randonnée de São Tomé vous conseillent.
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
                    title="Carte Randonnée São Tomé miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Randonnée Plantations - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit randonnée active et découverte
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
                    <span>Bâtons de randonnée télescopiques</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gourdes isothermes 1L</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sacs étanches pour appareils</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ponchos de pluie légers</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kit de premiers secours</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide de terrain plantes/birds</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Collations énergétiques</span>
                    <span className="font-bold text-amber-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Conditions Physiques Requises</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau randonnée</span>
                    <span className="font-bold text-amber-700">Moyen (2/5)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-amber-700">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Marche régulière nécessaire</span>
                    <span className="font-bold text-amber-700">3h/semaine</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Poids du sac à dos</span>
                    <span className="font-bold text-amber-700">5-8 kg max</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance rapatriement</span>
                    <span className="font-bold text-amber-700">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Certificat médical de non contre-indication à la randonnée recommandé
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-amber-200 p-4 mt-6 shadow-lg bg-amber-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-700">
                  <span>💬</span>
                  <span>Témoignage Randonneur</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Les randonnées étaient parfaitement équilibrées, avec des paysages à couper le souffle à chaque détour. Dormir dans les plantations historiques et rencontrer les producteurs était une expérience unique. Un circuit pour les vrais amoureux de la marche et de l'authenticité !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas R., randonneur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-amber-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-amber-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}