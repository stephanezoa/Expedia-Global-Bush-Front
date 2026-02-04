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
        <h4 className="font-semibold text-center text-lg">Itinéraire Safari au Cœur du Congo</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,-5.0,17.0,-2.5&layer=mapnik&marker=-4.2634,15.2429&marker=-2.6333,16.2333&marker=-3.0167,16.9167"
          style={{ border: 0 }}
          allowFullScreen
          title="Safari au Cœur du Congo"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-3.5/16.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Brazzaville</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Réserve de Léfini</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plateau Batéké</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Diosso Gorge</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Parc National Nouabalé-Ndoki</span>
        </div>
      </div>
    </div>
  );
};

export default function Safaricongo() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('brazzaville');
  const [activeExperienceTab, setActiveExperienceTab] = useState('safari');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🦁', title: 'Safari Authentique', desc: 'Observation de la faune sauvage dans son habitat naturel' },
    { icon: '🌳', title: 'Forêts Primaires', desc: 'Exploration des forêts tropicales intactes du Congo' },
    { icon: '🏞️', title: 'Paysages Uniques', desc: 'Plateau Batéké et canyons spectaculaires' },
    { icon: '🐘', title: 'Mégafaune Africaine', desc: 'Éléphants, buffles, primates et antilopes' },
    { icon: '🦍', title: 'Primates Rares', desc: 'Observation des chimpanzés et gorilles des plaines' },
    { icon: '🏕️', title: 'Immersion Totale', desc: 'Séjour en camp de safari au cœur de la nature' },
  ];

  const regions = [
    { 
      name: 'Brazzaville', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Point de départ et préparation pour l\'aventure safari',
      features: ['Briefing safari', 'Préparation équipement', 'Dernières formalités', 'Rencontre guides']
    },
    { 
      name: 'Réserve de Léfini', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Première immersion dans la faune congolaise avec éléphants et buffles',
      features: ['Safari 4x4', 'Observation éléphants', 'Points d\'eau', 'Premier bivouac']
    },
    { 
      name: 'Plateau Batéké', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Savanes et paysages ouverts, territoire des antilopes et oiseaux rares',
      features: ['Savane herbacée', 'Antilopes', 'Oiseaux migrateurs', 'Randonnée']
    },
    { 
      name: 'Diosso Gorge', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Canyon spectaculaire et observation des primates forestiers',
      features: ['Canyon spectaculaire', 'Observation primates', 'Formations géologiques', 'Photographie']
    },
    { 
      name: 'Parc National Nouabalé-Ndoki', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Forêt primaire intacte, sanctuaire des gorilles et chimpanzés',
      features: ['Forêt primaire', 'Gorilles des plaines', 'Chimpanzés', 'Camp de recherche']
    },
    { 
      name: 'Réserve de Dimonika', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Réserve de biosphère avec biodiversité exceptionnelle',
      features: ['Biodiversité', 'Écosystèmes variés', 'Flore endémique', 'Observation scientifique']
    },
  ];

  const experiences = [
    { 
      id: 'safari',
      name: 'Safari 4x4', 
      icon: '🦁',
      desc: 'Exploration en véhicule tout-terrain à la recherche de la mégafaune africaine',
      highlights: ['Safari matinal', 'Safari nocturne', 'Points d\'eau', 'Observation discrète'],
      details: 'Les safaris 4x4 sont le cœur de cette aventure. Vous parcourrez les réserves et parcs dans des véhicules spécialement équipés, accompagnés de guides experts en faune sauvage. Les safaris matinaux vous permettront d\'observer les animaux à leur période d\'activité maximale, tandis que les safaris nocturnes (avec projecteurs spéciaux) révèlent la vie secrète des créatures de la nuit. Chaque sortie est une nouvelle découverte dans l\'immensité des paysages congolais.'
    },
    { 
      id: 'randonnee',
      name: 'Randonnée Guidée', 
      icon: '🥾',
      desc: 'Marche d\'approche silencieuse pour observer les animaux de près',
      highlights: ['Approche silencieuse', 'Pistes animales', 'Observation traces', 'Immersion sensorielle'],
      details: 'La randonnée guidée permet une approche plus intime de la nature congolaise. Accompagnés de guides spécialisés et parfois de pisteurs locaux, vous apprendrez à lire les signes de la forêt et de la savane : empreintes, excréments, marques de griffes. Ces marches silencieuses vous amèneront parfois à quelques mètres seulement des animaux, dans le respect total de leur tranquillité. Une expérience sensorielle unique qui mobilise tous vos sens.'
    },
    { 
      id: 'observation',
      name: 'Observation Spécialisée', 
      icon: '🔭',
      desc: 'Sessions d\'observation focalisées sur des espèces spécifiques',
      highlights: ['Observation gorilles', 'Suivi chimpanzés', 'Birdwatching', 'Photographie animalière'],
      details: 'Ce circuit inclut des sessions d\'observation spécialisées, notamment pour les primates. Vous pourrez passer des heures à observer les comportements fascinants des gorilles des plaines ou des chimpanzés, sous la guidance de chercheurs spécialisés. Les amateurs d\'ornithologie seront également comblés avec plus de 400 espèces d\'oiseaux possibles à observer. Des points d\'observation stratégiques et des affûts camouflés vous permettront de capturer des moments uniques.'
    },
    { 
      id: 'immersion',
      name: 'Immersion en Camp', 
      icon: '🏕️',
      desc: 'Séjour dans des camps de safari authentiques au cœur des réserves',
      highlights: ['Nuits en bivouac', 'Veillées autour du feu', 'Sons de la nature', 'Cuisine de brousse'],
      details: 'L\'immersion est totale avec des nuits passées dans des camps de safari au cœur des réserves. Ces camps, parfois mobiles, vous plongent dans l\'atmosphère authentique du safari africain. Les nuits sous les étoiles, les veillées autour du feu, les bruits de la faune nocturne, et les repas préparés en brousse créent des souvenirs inoubliables. Chaque camp est installé dans le respect de l\'environnement, avec un impact minimal sur l\'écosystème.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Safari au Cœur du Congo</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              10 jours d'aventure au plus près de la faune sauvage congolaise
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">10</div>
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
            <span className="text-2xl">🦁</span>
            <span className="text-sm font-semibold">CONGO | SAFARI AVENTURE</span>
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
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">CONGO2</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - Brazzaville à Plateau Batéké</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour les amateurs de safari authentique et d'aventure nature</span>
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
                  Ce circuit de 10 jours vous emmène au cœur des réserves naturelles du Congo pour un safari authentique et intense. Loin des sentiers battus, vous découvrirez une faune sauvage préservée dans des écosystèmes variés : savanes du Plateau Batéké, forêts primaires du parc Nouabalé-Ndoki, et canyons spectaculaires de Diosso.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure commence à Brazzaville avec une préparation complète avant de vous immerger dans la Réserve de Léfini, territoire des éléphants et buffles. Vous progresserez ensuite vers le Plateau Batéké pour observer les antilopes et oiseaux rares, avant de plonger dans la forêt tropicale à la recherche des gorilles et chimpanzés. Le parcours s'achève par l'exploration du canyon de Diosso, un site géologique unique.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce safari est conçu pour les véritables amateurs de nature qui recherchent une expérience authentique, loin du tourisme de masse. Accompagné de guides spécialistes et de pisteurs locaux, vous découvrirez la faune congolaise dans le respect total des animaux et de leur environnement. Un voyage d'aventure qui restera gravé dans votre mémoire.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Trésors du Safari</h3>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Safari de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Safari 4x4 dans la Réserve de Léfini</strong>, observation des éléphants et buffles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Randonnée sur le Plateau Batéké</strong>, territoire des antilopes et oiseaux migrateurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des gorilles des plaines</strong>, dans le parc Nouabalé-Ndoki</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Safari nocturne</strong>, découverte de la faune crépusculaire et nocturne</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Excursion au canyon de Diosso</strong>, site géologique spectaculaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des chimpanzés</strong>, avec chercheurs spécialisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Birdwatching intensif</strong>, plus de 400 espèces d'oiseaux possibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Immersion en camp de brousse</strong>, nuits sous les étoiles</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la faune */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Faune du Congo : Un Patrimoine Unique</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Congo abrite l'une des faunes les plus riches et préservées d'Afrique. Les forêts du bassin du Congo constituent le deuxième plus grand massif forestier tropical au monde, refuge d'espèces emblématiques comme les gorilles des plaines, les chimpanzés, les éléphants de forêt, et des centaines d'espèces d'oiseaux. Les savanes du Plateau Batéké offrent un contraste saisissant avec leurs paysages ouverts peuplés d'antilopes et de prédateurs. Ce circuit vous permet de découvrir cette biodiversité exceptionnelle dans des conditions optimales d'observation et de respect animal.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau modéré</span>
                      <span className="bg-brown-100 text-brown-800 text-xs px-3 py-1 rounded-full">Faune sauvage</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Observation</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Aventure</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Immersion nature</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE SAFARI EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces animales</div>
                      <div className="text-3xl font-bold text-green-700">50+</div>
                      <div className="text-xs">mammifères différents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Parcs et réserves</div>
                      <div className="text-3xl font-bold text-green-700">4</div>
                      <div className="text-xs">aires protégées visitées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Safaris guidés</div>
                      <div className="text-3xl font-bold text-green-700">12</div>
                      <div className="text-xs">sorties d'observation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits en bivouac</div>
                      <div className="text-3xl font-bold text-green-700">6</div>
                      <div className="text-xs">nuits en pleine nature</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours du Safari</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous fait traverser les écosystèmes les plus riches du Congo. Vous débuterez par les savanes et forêts claires de la Réserve de Léfini, avant de gagner les vastes étendues du Plateau Batéké. La seconde partie du voyage vous plongera dans la forêt tropicale humide du parc Nouabalé-Ndoki, sanctuaire des grands primates. Enfin, vous découvrirez les formations géologiques uniques du canyon de Diosso. Chaque étape offre une faune et des paysages différents, pour un safari complet et varié.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours en savane</div>
                            <div className="text-green-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours en forêt</div>
                            <div className="text-green-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Safaris 4x4</div>
                            <div className="text-green-700 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Randonnées guidées</div>
                            <div className="text-green-700 font-bold">6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Réserves</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,-5.0,17.0,-2.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Safari Congo"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/-3.5/16.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Écosystèmes du Safari</h3>
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
                      <div className="text-4xl font-bold mb-2">1-3</div>
                      <div className="text-sm">Réserve de Léfini</div>
                      <div className="text-xs opacity-80">Éléphants, buffles, premiers safaris</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4-7</div>
                      <div className="text-sm">Plateau Batéké</div>
                      <div className="text-xs opacity-80">Antilopes, savanes, randonnées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8-10</div>
                      <div className="text-sm">Forêt & Canyon</div>
                      <div className="text-xs opacity-80">Gorilles, chimpanzés, canyon</div>
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
                        <strong>Niveau modéré à difficile (3/5)</strong> : Ce safari exige une bonne condition physique. Les journées sont longues avec des départs matinaux, des trajets parfois sur pistes difficiles, et des randonnées pouvant durer plusieurs heures. Les conditions en bivouac sont confortables mais rustiques. Une bonne santé générale et une capacité à s'adapter aux conditions de terrain sont nécessaires.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Bonne condition physique requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Randonnées de 2-4 heures possibles</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum : 16 ans</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Esprit d'aventure et adaptabilité</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de randonnée solides</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos jour 20-30L</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste imperméable et coupe-vent</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📷</span>
                          <span>Appareil photo avec zoom</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🔭</span>
                          <span>Jumelles (10x42 recommandé)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💊</span>
                          <span>Trousse médicale complète</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🦟</span>
                          <span>Anti-moustiques et moustiquaire</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💡</span>
                          <span>Lampe frontale et batteries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Safari Authentique ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à des zones normalement inaccessibles</h4>
                        <p className="text-sm text-gray-700">
                          Grâce à nos autorisations spéciales et à notre connaissance du terrain, nous visitons des zones préservées du tourisme de masse.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guides spécialistes de la faune congolaise</h4>
                        <p className="text-sm text-gray-700">
                          Vos guides sont des experts de la faune locale, certains travaillent avec des programmes de recherche scientifique.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Approche éthique et respectueuse des animaux</h4>
                        <p className="text-sm text-gray-700">
                          Nous privilégions toujours le bien-être animal et respectons les distances d'observation recommandées.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Groupes limités à 8 participants maximum</h4>
                        <p className="text-sm text-gray-700">
                          Pour une expérience plus personnalisée et un impact minimal sur l'environnement.
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
                  {/* Jour 1 - Arrivée et briefing */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE ET BRIEFING SAFARI</span>
                          <span className="text-sm text-gray-600">Accueil à Brazzaville et préparation de l'aventure</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international Maya-Maya de Brazzaville. Accueil par votre guide chef de safari. Transfert à votre hôtel. Installation et repos. En après-midi, briefing complet du safari : présentation du programme détaillé, consignes de sécurité, vérification de l'équipement, et rencontre avec l'équipe qui vous accompagnera (guide, chauffeur, cuisinier). Dîner de bienvenue avec spécialités congolaises. Nuit à l'hôtel à Brazzaville.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Transfert Réserve de Léfini */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LA RÉSERVE DE LÉFINI</span>
                          <span className="text-sm text-gray-600">Première immersion dans la nature congolaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Premier contact avec la faune</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Brazzaville en direction de la Réserve de Léfini. Trajet à travers les paysages changeants du Congo. Arrivée en milieu de journée à l'entrée de la réserve. Installation du premier camp de brousse. Première sortie d'observation en fin d'après-midi : safari 4x4 pour découvrir les environs et observer les premiers animaux (antilopes, phacochères, oiseaux). Dîner au camp et première nuit sous les étoiles, bercé par les sons de la brousse.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Transfert Réserve Léfini - Installation camp - Premier safari
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Safari intensif Léfini */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">SAFARI LÉFINI INTENSIF</span>
                          <span className="text-sm text-gray-600">À la recherche des éléphants et buffles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'observation</h4>
                        <p className="text-justify mb-4">
                          Réveil avant l'aube pour un safari matinal aux points d'eau où viennent s'abreuver les animaux. Observation des éléphants de forêt, buffles, et avec un peu de chance, prédateurs. Retour au camp pour le petit-déjeuner. Temps de repos en milieu de journée. Après-midi : safari vers d'autres secteurs de la réserve, avec focus sur l'observation des oiseaux (plus de 200 espèces recensées). Safari nocturne après le dîner pour découvrir la faune crépusculaire. Nuit au camp.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Safari matinal - Observation oiseaux - Safari nocturne
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Vers le Plateau Batéké */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LE PLATEAU BATÉKÉ</span>
                          <span className="text-sm text-gray-600">Traversée vers les savanes ouvertes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Changement d'écosystème</h4>
                        <p className="text-justify mb-4">
                          Dernier safari matinal dans la Réserve de Léfini. Déjeuner au camp puis départ vers le Plateau Batéké. Traversée de paysages qui évoluent progressivement de la forêt claire à la savane herbacée. Arrivée en fin d'après-midi sur le plateau. Installation du camp avec vue panoramique sur les vastes étendues. Première découverte à pied des environs immédiats. Dîner et nuit au camp, avec des conditions météorologiques souvent idéales pour l'observation des étoiles.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Dernier safari Léfini - Transfert Plateau Batéké - Installation nouveau camp
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Exploration du Plateau */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION DU PLATEAU</span>
                          <span className="text-sm text-gray-600">Randonnée et observation des antilopes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de randonnée</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à l'exploration à pied du Plateau Batéké. Randonnée matinale de 3-4 heures à la recherche des antilopes (cobes, guibs, céphalophes) et des oiseaux caractéristiques des savanes. Déjeuner pique-nique sur le plateau avec vue à 360°. Après-midi : continuation de l'exploration, avec focus sur la géologie unique du plateau et sa flore adaptée. Retour au camp en fin de journée. Dîner et partage des observations de la journée. Nuit au camp.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée plateau - Observation antilopes - Géologie
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Vers la forêt tropicale */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LA FORÊT TROPICALE</span>
                          <span className="text-sm text-gray-600">Trajet vers le parc Nouabalé-Ndoki</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Transition vers la forêt</h4>
                        <p className="text-justify mb-4">
                          Dernière matinée sur le Plateau Batéké avec une courte randonnée d'adieu. Déjeuner puis départ vers le nord en direction du parc National Nouabalé-Ndoki. Trajet à travers des paysages qui redeviennent progressivement boisés. Arrivée en bordure du parc en fin d'après-midi. Installation du camp forestier. Première acclimatation à l'atmosphère humide et ombragée de la forêt tropicale. Briefing spécial sur l'observation des primates et les règles à respecter. Dîner et nuit au camp.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Dernière randonnée plateau - Transfert forêt - Installation camp forestier
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - À la recherche des gorilles */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RECHERCHE DES GORILLES</span>
                          <span className="text-sm text-gray-600">Immersion dans la forêt primaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée avec les grands primates</h4>
                        <p className="text-justify mb-4">
                          Journée complète consacrée à la recherche des gorilles des plaines. Départ très matinal avec pisteurs locaux qui connaissent les territoires des groupes familiaux. Marche en forêt dense, parfois difficile, à la recherche des traces et indices de présence. Avec de la chance et de la patience, observation d'un groupe de gorilles (toujours à distance réglementaire). Déjeuner pique-nique en forêt. Après-midi : continuation de l'exploration ou observation d'autres primates (colobes, cercopithèques). Retour au camp épuisé mais heureux. Dîner et nuit.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Recherche gorilles - Observation primates - Immersion forêt
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Observation des chimpanzés */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">LES CHIMPANZÉS</span>
                          <span className="text-sm text-gray-600">Rencontre avec nos plus proches cousins</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée scientifique</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à l'observation des chimpanzés. Accompagné d'un chercheur spécialisé, vous apprendrez à reconnaître les différents individus, à comprendre leur organisation sociale, et à observer leurs comportements fascinants (utilisation d'outils, communication, etc.). Déjeuner avec le chercheur qui partagera ses connaissances. Après-midi : visite d'un camp de recherche scientifique pour comprendre les enjeux de conservation. Retour au camp en fin d'après-midi. Dernière nuit en forêt.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Observation chimpanzés - Visite camp recherche - Échanges scientifiques
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Canyon de Diosso */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CANYON DE DIOSSO</span>
                          <span className="text-sm text-gray-600">Site géologique spectaculaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée géologique</h4>
                        <p className="text-justify mb-4">
                          Départ du camp forestier en direction du canyon de Diosso. Trajet avec arrêts pour observer la transition entre forêt et zones plus sèches. Arrivée au canyon en milieu de matinée. Exploration à pied de ce site géologique unique : falaises de grès rouge, formations érodées, vue panoramique. Déjeuner pique-nique avec vue sur le canyon. Après-midi : visite complémentaire et temps libre pour photographier ce paysage spectaculaire. Installation dans un lodge confortable pour la dernière nuit. Dîner d'adieu et partage des souvenirs du safari.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Exploration canyon - Géologie - Photographie - Dernière nuit
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Retour et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">RETOUR ET DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner en terrasse avec vue sur les paysages congolais. Transfert vers l'aéroport en fonction de votre horaire de vol. Selon le timing, possibilité de dernières visites ou achats de souvenirs. Assistance aux formalités d'embarquement. Vous repartez avec des images inoubliables : les éléphants majestueux de Léfini, les vastes étendues du Plateau Batéké, les regards profonds des gorilles, l'agilité des chimpanzés, et les couleurs du canyon de Diosso. Un safari authentique au cœur d'une nature préservée, accompagné d'une équipe passionnée et compétente.
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
                      <span className="text-white text-2xl">🦁</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Safari</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce safari est une immersion totale dans le monde sauvage du Congo. Chaque expérience est conçue pour vous rapprocher au maximum de la faune, dans le respect absolu des animaux et de leur habitat. Des savanes ouvertes aux forêts denses, chaque écosystème révèle ses secrets.
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
                              lat={exp.id === 'safari' ? -3.0 : 
                                   exp.id === 'randonnee' ? -2.5 :
                                   exp.id === 'observation' ? -2.8 :
                                   -3.2} 
                              lng={exp.id === 'safari' ? 15.5 : 
                                   exp.id === 'randonnee' ? 16.2 :
                                   exp.id === 'observation' ? 16.8 :
                                   16.0} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Safari</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Safari 4x4" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Safari 4x4</h5>
                          <p className="text-sm text-gray-700">Exploration des réserves en véhicule tout-terrain</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                          alt="Gorilles" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Gorilles des plaines</h5>
                          <p className="text-sm text-gray-700">Observation des primates emblématiques</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1578837268581-d5b8e5d17c01?w=600" 
                          alt="Camp de brousse" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Camp de brousse</h5>
                          <p className="text-sm text-gray-700">Nuits sous les étoiles au cœur de la nature</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles Spéciales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Vol en ULM au-dessus du Plateau Batéké</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Vue aérienne spectaculaire des savanes et observation des animaux depuis le ciel. Supplément : 180€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Session photo professionnelle avec guide photographe</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Accompagnement par un photographe professionnel spécialisé en faune sauvage. Supplément : 150€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Nuit en affût d'observation</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Nuit complète dans un affût camouflé pour observer les animaux nocturnes. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Atelier de pistage avec pisteurs locaux</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage des techniques de pistage traditionnelles. Supplément : 80€/personne.
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU SAFARI</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Camps de Safari Authentiques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏕️</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour ce safari authentique, nous privilégions des camps mobiles installés au cœur des réserves, vous offrant une immersion totale dans la nature congolaise. Ces camps, bien que confortables, maintiennent l'esprit d'aventure avec des installations respectueuses de l'environnement.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('brazzaville')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'brazzaville' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BRAZZAVILLE (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('camps')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'camps' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPS DE SAFARI (7 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('lodge')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lodge' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LODGE FINAL (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Brazzaville */}
                  {activeHotelTab === 'brazzaville' && (
                    <div className="space-y-16">
                      {/* Hotel Safari Base */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Safari Base" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                BASE DE DÉPART
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Safari Base</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Brazzaville, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Proche aéroport</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧳</span>
                                <span className="text-sm font-semibold">Stockage équipement</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant safari</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Dernière douche confort</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Safari Base est spécialement sélectionné pour les départs en safari. Il dispose d'espaces de stockage sécurisés pour l'équipement que vous ne prendrez pas en brousse, d'une salle de briefing équipée, et d'un restaurant spécialisé en cuisine énergétique pour voyageurs d'aventure. C'est ici que vous rencontrerez votre équipe de safari et recevrez le briefing complet. La dernière nuit en confort avant l'immersion en pleine nature.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Camps de safari */}
                  {activeHotelTab === 'camps' && (
                    <div className="space-y-16">
                      {/* Camp Mobiles */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1578837268581-d5b8e5d17c01?w=600" 
                              alt="Camps Mobiles" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Camps Mobiles de Safari</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Réserve de Léfini, Plateau Batéké, Forêt de Nouabalé-Ndoki
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Tentes confortables</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Lits de camp avec matelas</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Douches solaires</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Nos camps mobiles sont spécialement conçus pour le safari congolais. Installés à des emplacements stratégiques dans chaque réserve, ils offrent confort et sécurité tout en maintenant l'esprit d'aventure. Les tentes sont spacieuses avec lits de camp et matelas épais. Des douches solaires et toilettes sèches écologiques sont installées sur chaque site. Le camp dispose d'une tente mess pour les repas et les veillées, et d'une cuisine de brousse professionnelle. Chaque camp est démonté après notre passage, laissant la nature intacte.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lodge final */}
                  {activeHotelTab === 'lodge' && (
                    <div className="space-y-16">
                      {/* Diosso Canyon Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                              alt="Diosso Canyon Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Diosso Canyon Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bord du canyon de Diosso, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏞️</span>
                                <span>Vue panoramique canyon</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine naturelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Terrasse coucher de soleil</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Après une semaine en camp de brousse, le Diosso Canyon Lodge offre un confort bien mérité. Perché sur les falaises du canyon, ce lodge propose des chambres avec vue spectaculaire, salle de bain privée avec eau chaude, et terrasse privative. La piscine naturelle creusée dans la roche est un vrai bonheur après les jours de safari. Le restaurant du lodge propose une cuisine raffinée avec produits locaux. L'endroit parfait pour clôturer l'aventure en beauté, partager les souvenirs du safari, et se détendre avant le retour.
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
                  <span className="text-2xl">🦁</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Safari</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$2,399</span>
                    <span className="text-sm text-gray-500">Prix par personne</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Circuit safari complet - 10 jours</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide spécialiste safari, camps mobiles, repas complets, activités
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
                    <option value="2026-09-30">30 Septembre 2026</option>
                    <option value="2026-10-28">28 Octobre 2026</option>
                    <option value="2027-06-09">9 Juin 2027</option>
                    <option value="2027-07-07">7 Juillet 2027</option>
                    <option value="2027-08-04">4 Août 2027</option>
                    <option value="2027-09-01">1 Septembre 2027</option>
                    <option value="2027-09-29">29 Septembre 2027</option>
                    <option value="2027-10-27">27 Octobre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juin à octobre (saison sèche optimale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>GROUPE LIMITÉ À 8 PARTICIPANTS</strong> pour une expérience personnalisée
                  </p>
                  <p className="text-xs text-gray-300">* Guide spécialiste safari + pisteur local</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-green-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-green-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-green-700 text-white py-4 font-semibold text-base mb-4 hover:bg-green-600 transition-colors shadow-md">
                  RÉSERVER CE SAFARI
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur le safari ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts safari Congo vous conseillent.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONTACTER UN EXPERT SAFARI
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,-5.0,17.0,-2.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Safari Congo miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Safari Congo - 10 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Brazzaville → Réserves → Plateau Batéké
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Safari Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>8 safaris 4x4 guidés</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 randonnées avec pisteur</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Observation gorilles/chimpanzés</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 safaris nocturnes</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste faune</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous repas en safari</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement camping fourni</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques Safari</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du safari</span>
                    <span className="font-bold text-green-700">Modéré à difficile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-green-700">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs juin à octobre</span>
                    <span className="font-bold text-green-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-green-700">Expert faune Congo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune. Recommandés : Hépatites, rage, typhoïde
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Safari</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un safari authentique, loin des foules. Voir les gorilles dans leur habitat naturel, passer des nuits en camp au son des animaux, traverser des paysages à couper le souffle... Cette aventure a dépassé toutes mes attentes. L'équipe était exceptionnelle, les observations incroyables. Un vrai safari d'aventure !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc D., photographe animalier 2025
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