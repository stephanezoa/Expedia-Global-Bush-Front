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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire São Tomé</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik&marker=0.33,6.73&marker=0.05,6.72"
          style={{ border: 0 }}
          allowFullScreen
          title="São Tomé Discovery"
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
          <span className="w-4 h-4 rounded-full bg-emerald-700 border-2 border-gray-300"></span>
          <span className="text-sm">São Tomé (ville)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plantations de cacao</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Praia Jale</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Cascades et forêts</span>
        </div>
      </div>
    </div>
  );
};

export default function DecouverteSaotome() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('nature');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏝️', title: 'Plages Paradisiaques de Praia Jale', desc: 'Sable doré et eaux cristallines dans l\'une des plus belles baies de l\'archipel' },
    { icon: '🌴', title: 'Plantations Historiques de Cacao', desc: 'Visite des anciennes "roças" coloniales, berceau du chocolat santoméen' },
    { icon: '🌊', title: 'Cascades Spectaculaires', desc: 'Découverte des chutes d\'eau cachées au cœur de la forêt tropicale' },
    { icon: '🏛️', title: 'Patrimoine Colonial Portugais', desc: 'Exploration de l\'architecture unique des XVe-XIXe siècles' },
    { icon: '🎣', title: 'Pêche Traditionnelle', desc: 'Rencontre avec les pêcheurs locaux et dégustation de poissons frais' },
    { icon: '🍫', title: 'Route du Chocolat', desc: 'Dégustation de cacao et chocolat produits localement' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Capitale historique fondée en 1493, mélange d\'architecture coloniale portugaise et d\'animation africaine',
      features: ['Cathédrale', 'Palais Présidentiel', 'Marché Central', 'Fort São Sebastião']
    },
    { 
      name: 'Praia Jale', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Plage de sable blanc immaculée bordée de cocotiers, l\'une des plus belles de l\'île',
      features: ['Baie préservée', 'Snorkeling', 'Restaurants de poisson', 'Couchers de soleil']
    },
    { 
      name: 'Roca Agostinho Neto', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Ancienne plantation coloniale transformée en musée vivant du cacao et du café',
      features: ['Architecture coloniale', 'Musée du cacao', 'Jardins tropicaux', 'Production artisanale']
    },
    { 
      name: 'Monte Café', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Région montagneuse des plantations de café, paysages de forêts et cascades',
      features: ['Plantations de café', 'Randonnées', 'Cascades cachées', 'Vues panoramiques']
    },
    { 
      name: 'Cascata de São Nicolau', 
      color: 'bg-teal-100', 
      textColor: 'text-teal-800', 
      desc: 'Spectaculaire chute d\'eau de 30 mètres au cœur de la forêt tropicale humide',
      features: ['Chute d\'eau', 'Baignade naturelle', 'Forêt primaire', 'Pique-nique']
    },
    { 
      name: 'Golfe de Guinée', 
      color: 'bg-indigo-100', 
      textColor: 'text-indigo-800', 
      desc: 'Eaux poissonneuses de l\'océan Atlantique, richesses marines et traditions de pêche',
      features: ['Observation baleines', 'Tortues marines', 'Pêche sportive', 'Écosystème marin']
    },
  ];

  const experiences = [
    { 
      id: 'nature',
      name: 'Nature Sauvage', 
      icon: '🌿',
      desc: 'Exploration des forêts tropicales, cascades et paysages volcaniques de São Tomé',
      highlights: ['Forêts primaires', 'Cascades spectaculaires', 'Flore endémique', 'Randonnées écologiques'],
      details: 'São Tomé possède l\'un des taux d\'endémisme les plus élevés au monde, avec 28% de sa flore et 21% de sa faune uniques au globe. Les forêts tropicales humides abritent des orchidées rares, des fougères géantes et une biodiversité exceptionnelle.'
    },
    { 
      id: 'culture',
      name: 'Culture Santoméenne', 
      icon: '🎭',
      desc: 'Immersion dans le métissage unique des cultures africaines et portugaises',
      highlights: ['Musique et danse', 'Artisanat local', 'Gastronomie fusion', 'Histoire coloniale'],
      details: 'La culture santoméenne est un fascinant mélange d\'héritages portugais et africains. Le portugais créole (Forro), la musique Tchiloli, l\'architecture coloniale et la cuisine fusion créent une identité culturelle unique au monde.'
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie', 
      icon: '🍽️',
      desc: 'Découverte des saveurs uniques du cacao, café et fruits de mer de l\'archipel',
      highlights: ['Cacao artisanal', 'Café de terroir', 'Poissons grillés', 'Fruits tropicaux'],
      details: 'São Tomé est le berceau historique du cacao de qualité. La route du chocolat vous fera découvrir des plantations biologiques, des techniques de fermentation traditionnelles et des dégustations de cacao pur. Les fruits de mer frais et les fruits exotiques complètent cette expérience gustative.'
    },
    { 
      id: 'plages',
      name: 'Plages et Océan', 
      icon: '🏖️',
      desc: 'Détente sur les plages de sable doré et exploration des fonds marins préservés',
      highlights: ['Plages isolées', 'Snorkeling', 'Observation marine', 'Sports nautiques'],
      details: 'Les plages de São Tomé, comme Praia Jale, sont parmi les plus belles et préservées d\'Afrique. Les eaux cristallines abritent une vie marine riche : tortues, raies, poissons tropicaux. La barrière de corail offre des sites de snorkeling exceptionnels.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1595524288413-a8c7c8a34f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌴</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Découverte des Trésors de São Tomé</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              7 jours d'exploration entre forêts tropicales, plages paradisiaques et plantations historiques
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
            <span className="text-2xl">🇸🇹</span>
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | ÎLE DE SÃO TOMÉ</span>
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
                <span className="bg-emerald-700 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP1</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - São Tomé à Praia Jale</span>
                <button className="ml-auto border-2 border-emerald-700 text-emerald-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-emerald-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Voyage d'exception à la découverte de l'Afrique en miniature</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-emerald-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Bienvenue dans l'archipel de São Tomé-et-Principe, surnommé à juste titre "l'Afrique en miniature". Ce circuit de 7 jours vous invite à découvrir les trésors cachés de l'île de São Tomé, la plus grande des deux îles qui composent cet État insulaire. Entre nature exubérante, histoire coloniale fascinante et plages de rêve, vous explorerez un paradis préservé au cœur du golfe de Guinée.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Fondée par les Portugais en 1493, São Tomé fut le premier producteur mondial de cacao au début du XXe siècle. Aujourd'hui, son héritage colonial se mêle harmonieusement aux traditions africaines, créant une culture métisse unique. Vous découvrirez les anciennes plantations (roças), explorerez des forêts tropicales abritant une biodiversité exceptionnelle, et vous détendrez sur des plages de sable fin bordées d'eaux cristallines.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit a été spécialement conçu pour ceux qui cherchent une expérience authentique, hors des sentiers battus, dans l'une des destinations les plus préservées d'Afrique. Avec seulement 200 000 habitants sur un territoire plus petit que la Corse, São Tomé vous offre l'opportunité de découvrir une Afrique différente, où le temps semble s'être arrêté et où l'hospitalité légendaire des Santoméens vous marquera à jamais.
                </p>

                {/* Section Points forts */}
                <div className="bg-emerald-50 border-l-4 border-emerald-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Les Moments Inoubliables du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-emerald-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-emerald-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Exclusives de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Visite privée de la Roca Agostinho Neto</strong>, plus grande plantation coloniale préservée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Dégustation de cacao pur à la source</strong> avec un producteur local</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Randonnée vers la cascade de São Nicolau</strong> et baignade dans ses bassins naturels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Rencontre avec les pêcheurs traditionnels</strong> de Praia Jale et dégustation de leur pêche du jour</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Visite du marché central de São Tomé</strong> et initiation aux saveurs locales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Session de snorkeling</strong> dans les eaux cristallines de la baie de Praia Jale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Dîner gastronomique</strong> avec produits locaux et vue sur l'océan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-1">•</span>
                        <span><strong>Observation des oiseaux endémiques</strong> dans les forêts de Monte Café</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur São Tomé */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">São Tomé : L'Afrique en Miniature</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Située à 300 km des côtes gabonaises, São Tomé est une île volcanique de 854 km². Découverte le 21 décembre 1471 (jour de la Saint Thomas, d'où son nom), elle fut d'abord inhabitée avant de devenir une importante colonie portugaise spécialisée dans la production de sucre, puis de cacao. Son isolement géographique a permis le développement d'une biodiversité unique : 28% de sa flore et 21% de sa faune sont endémiques. Le point culminant est le Pico de São Tomé (2.024 m). Le climat est tropical avec deux saisons principales : la gravana (saison sèche de juin à septembre) et la saison des pluies (octobre à mai).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Biodiversité unique</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Patrimoine colonial</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Cacao de qualité</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Plages paradisiaques</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture métisse</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">SÃO TOMÉ EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie</div>
                      <div className="text-3xl font-bold text-emerald-700">854</div>
                      <div className="text-xs">km² (île principale)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Population</div>
                      <div className="text-3xl font-bold text-emerald-700">200K</div>
                      <div className="text-xs">habitants (densité faible)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Endémisme</div>
                      <div className="text-3xl font-bold text-emerald-700">28%</div>
                      <div className="text-xs">de flore unique au monde</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude max</div>
                      <div className="text-3xl font-bold text-emerald-700">2,024</div>
                      <div className="text-xs">m (Pico de São Tomé)</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours à travers l'île</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à la découverte des facettes multiples de São Tomé. Vous commencerez par la capitale, São Tomé, pour vous imprégner de l'ambiance locale et découvrir le patrimoine colonial. Vous poursuivrez vers l'intérieur de l'île pour explorer les plantations historiques de cacao et de café, ainsi que les forêts tropicales abritant cascades et biodiversité unique. Enfin, vous terminerez par la magnifique Praia Jale, plage de sable blanc où vous pourrez vous détendre et profiter des eaux cristallines de l'océan Atlantique.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-emerald-700 font-bold">180 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Sites visités</div>
                            <div className="text-emerald-700 font-bold">12+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en bord de mer</div>
                            <div className="text-emerald-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes</div>
                            <div className="text-emerald-700 font-bold">5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de l'île de São Tomé</h3>
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
                      title="Carte São Tomé"
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
                  <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Les Régions Clés de São Tomé</h3>
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
                <div className="mb-10 bg-gradient-to-r from-emerald-700 to-green-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">São Tomé ville</div>
                      <div className="text-xs opacity-80">Arrivée, découverte capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Plantations et forêts</div>
                      <div className="text-xs opacity-80">Cacao, café, cascades</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Côte et Praia Jale</div>
                      <div className="text-xs opacity-80">Plages, pêche, détente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Dernières découvertes</div>
                    </div>
                  </div>
                </div>

                {/* Section Informations Pratiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-xl font-semibold mb-4 text-amber-700">Informations Pratiques Essentielles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Climat et Meilleure Période</h4>
                      <p className="text-sm text-gray-700">
                        São Tomé bénéficie d'un climat tropical humide avec des températures stables toute l'année (25-30°C). La meilleure période pour visiter est pendant la saison sèche (juin à septembre), mais le circuit est opérationnel toute l'année. Les averses tropicales sont courtes et intenses, souvent suivies de soleil.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Santé et Vaccins</h4>
                      <p className="text-sm text-gray-700">
                        Vaccin contre la fièvre jaune obligatoire. Traitement antipaludéen fortement recommandé. Eau potable disponible partout. Assurance voyage internationale obligatoire. Infrastructure médicale basique sur l'île.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Décalage Horaire</h4>
                      <p className="text-sm text-gray-700">
                        UTC+0 (même heure qu'à Londres). Pas de changement d'heure saisonnier. Décalage de -1h par rapport à la France en hiver, même heure en été.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Devise et Paiements</h4>
                      <p className="text-sm text-gray-700">
                        La monnaie locale est le Dobra (STN). 1€ ≈ 24 STN. Les euros et dollars sont acceptés dans la plupart des établissements touristiques. Cartes de crédit limitées aux grands hôtels. Retraits possibles aux distributeurs de São Tomé ville.
                      </p>
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
                        <h4 className="font-semibold">Authenticité Préservée</h4>
                        <p className="text-sm text-gray-700">
                          São Tomé reste une destination préservée du tourisme de masse. Vous découvrirez une authenticité rare, des rencontres chaleureuses et des paysages intacts.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Biodiversité Exceptionnelle</h4>
                        <p className="text-sm text-gray-700">
                          L'île possède l'un des taux d'endémisme les plus élevés au monde. Vous explorerez des écosystèmes uniques abritant des espèces qu'on ne trouve nulle part ailleurs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Patrimoine Culturel Unique</h4>
                        <p className="text-sm text-gray-700">
                          Le métissage culturel africano-portugais a créé une identité unique. Architecture coloniale, musique, danse et gastronomie fusion vous attendent.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Groupe Limité</h4>
                        <p className="text-sm text-gray-700">
                          Maximum 8 participants pour une expérience personnalisée et respectueuse de l'environnement et des communautés locales.
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
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À SÃO TOMÉ</span>
                          <span className="text-sm text-gray-600">Découverte de la capitale historique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil chaleureux par votre guide francophone spécialiste de l'archipel. Transfert à votre hôtel situé au cœur de la capitale. Après un temps de repos, première immersion dans l'ambiance santoméenne avec une visite à pied du centre historique. Vous découvrirez la cathédrale néo-gothique du XVIe siècle, le palais présidentiel et les ruelles pavées aux maisons coloniales colorées. Visite du marché central, véritable kaléidoscope de couleurs et d'odeurs où les produits locaux côtoient les épices et les tissus africains. Briefing détaillé sur le circuit suivi d'un dîner de bienvenue dans un restaurant typique servant une fusion de cuisine africaine et portugaise. Nuit à l'hôtel à São Tomé.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Exploration de São Tomé ville */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SÃO TOMÉ ET SON PATRIMOINE</span>
                          <span className="text-sm text-gray-600">Architecture coloniale et culture créole</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée culturelle</h4>
                        <p className="text-justify mb-4">
                          Journée complète dédiée à la découverte du patrimoine historique et culturel de São Tomé. Visite du Fort São Sebastião, construit en 1575 et transformé en Musée National, qui retrace l'histoire mouvementée de l'île. Exploration du quartier colonial avec ses bâtiments aux azulejos bleus et blancs. Rencontre avec des artisans locaux spécialisés dans la sculpture sur bois et la vannerie. Déjeuner dans une "pensão" familiale pour goûter aux spécialités santoméennes comme le calulu (poisson aux feuilles de manioc) ou le blabla (ragoût de banane plantain). Après-midi libre pour flâner dans les rues ou profiter de la piscine de l'hôtel. En soirée, spectacle traditionnel de danse et musique Tchiloli, classée au patrimoine immatériel de l'UNESCO. Dîner et nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers les plantations */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SÃO TOMÉ → ROCA AGOSTINHO NETO</span>
                          <span className="text-sm text-gray-600">Voyage dans le temps aux sources du cacao</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Immersion dans l'histoire du cacao</h4>
                        <p className="text-justify mb-4">
                          Départ matinal vers le nord de l'île pour rejoindre la Roca Agostinho Neto, la plus grande et la mieux préservée des anciennes plantations coloniales. Cette "roça", fondée en 1865, témoigne de l'âge d'or du cacao santoméen. Visite guidée des bâtiments coloniaux majestueux : la maison principale, l'hôpital, l'école, les séchoirs à cacao et les entrepôts. Dégustation de cacao pur et découverte du processus de transformation de la fève au chocolat. Rencontre avec les ouvriers qui perpétuent les traditions agricoles. Déjeuner pique-nique dans les jardins de la plantation. Après-midi, continuation vers la région de Monte Café, célèbre pour ses plantations de café d'altitude. Installation dans un écolodge au cœur de la forêt. Dîner aux saveurs locales et nuit à l'écolodge, bercé par les sons de la forêt tropicale.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Cascades et forêts */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CASCATA DE SÃO NICOLAU</span>
                          <span className="text-sm text-gray-600">Randonnée dans la forêt tropicale humide</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Journée nature</h4>
                        <p className="text-justify mb-4">
                          Randonnée matinale à travers la forêt tropicale humide pour rejoindre la spectaculaire Cascata de São Nicolau. Ce sentier de 2 heures vous mènera à travers une végétation exubérante où l'on peut observer des orchidées sauvages, des fougères arborescentes et entendre les chants des oiseaux endémiques comme le pigeon de São Tomé. Arrivée au pied de la cascade de 30 mètres qui se jette dans un bassin naturel idéal pour une baignade rafraîchissante. Déjeuner pique-nique au bord de l'eau. L'après-midi, visite d'une petite plantation familiale de café pour découvrir les techniques de culture et de torréfaction traditionnelles. Retour à l'écolodge en fin de journée. Dîner avec produits du terroir et nuit à l'écolodge.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route vers Praia Jale */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE CAFÉ → PRAIA JALE</span>
                          <span className="text-sm text-gray-600">Des montagnes à la mer, découverte de la côte est</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Vers le paradis balnéaire</h4>
                        <p className="text-justify mb-4">
                          Départ de la région montagneuse en direction de la côte est de l'île. Arrêt en chemin à la Roca São João, une plantation plus petite mais tout aussi charmante, spécialisée dans la production biologique de cacao. Dégustation de chocolat artisanal et rencontre avec le propriétaire qui vous expliquera les défis de l'agriculture durable. Continuation vers Praia Jale, considérée comme l'une des plus belles plages de São Tomé. Installation dans votre hébergement face à la mer. Première baignade dans les eaux turquoise de l'océan Atlantique. Déjeuner de poisson frais grillé sur la plage. Après-midi libre pour profiter du soleil, du sable fin et des cocotiers. En soirée, rencontre avec les pêcheurs locaux qui rentrent avec leur pêche du jour. Dîner de fruits de mer et nuit au bord de l'océan.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Journée à Praia Jale */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">JOURNÉE À PRAIA JALE</span>
                          <span className="text-sm text-gray-600">Détente, snorkeling et traditions maritimes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-700">Immersion balnéaire</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte des trésors de Praia Jale et ses environs. Matinée de snorkeling dans la baie protégée pour observer la vie marine colorée : poissons-perroquets, raies, et parfois des tortues. Visite du village de pêcheurs pour comprendre les techniques traditionnelles de pêche et la construction des pirogues. Déjeuner de poisson frais préparé selon les recettes locales. L'après-midi, option entre une randonnée vers les falaises environnantes pour admirer le panorama sur la côte, ou simplement du temps libre pour se détendre sur la plage. En fin d'après-midi, initiation à la pêche à la ligne avec les pêcheurs locaux (saisonnière). Dîner d'adieu sous les étoiles, sur la plage, avec musique traditionnelle. Nuit au bord de l'océan.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ de São Tomé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE SÃO TOMÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner face à l'océan, avec le souvenir encore frais des moments magiques passés sur l'île. Temps libre le matin pour une dernière baignade, des achats de souvenirs artisanaux ou une promenade sur la plage. Déjeuner léger à Praia Jale. Transfert à l'aéroport international de São Tomé en début d'après-midi, avec arrêt possible pour des derniers achats. Assistance aux formalités d'embarquement. Emportez avec vous les images inoubliables des forêts tropicales, des cascades spectaculaires, des plages de rêve et surtout la chaleur de l'accueil santoméen. Un voyage qui vous aura fait découvrir une Afrique différente, authentique et préservée, loin des circuits touristiques traditionnels.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-emerald-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-emerald-700">Les Expériences Authentiques de São Tomé</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    São Tomé est une destination qui se vit plus qu'elle ne se visite. Chaque expérience de ce circuit a été conçue pour vous immerger dans l'âme de l'île, vous connecter avec ses habitants et découvrir ses secrets les mieux gardés. Des forêts tropicales aux récifs coralliens, des plantations historiques aux villages de pêcheurs, préparez-vous à une aventure sensorielle complète.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-emerald-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-emerald-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-emerald-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-emerald-700 mt-1">•</span>
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
                              lat={exp.id === 'nature' ? 0.28 : 
                                   exp.id === 'culture' ? 0.34 :
                                   exp.id === 'gastronomie' ? 0.31 :
                                   0.05} 
                              lng={exp.id === 'nature' ? 6.61 : 
                                   exp.id === 'culture' ? 6.73 :
                                   exp.id === 'gastronomie' ? 6.75 :
                                   6.72} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Expériences</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1595524288413-a8c7c8a34f9f?w=600" 
                          alt="Forêt tropicale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêts tropicales</h5>
                          <p className="text-sm text-gray-700">Écosystèmes préservés et biodiversité unique</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1586899028174-e09c6c5d7c9b?w=600" 
                          alt="Plantations de cacao" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Route du cacao</h5>
                          <p className="text-sm text-gray-700">Plantations historiques et dégustations</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=600" 
                          alt="Plages de São Tomé" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages paradisiaques</h5>
                          <p className="text-sm text-gray-700">Sable blanc et eaux cristallines</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">Activités Optionnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Excursion à l'Ilhéu das Rolas</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Journée sur l'îlot traversé par la ligne de l'équateur. Navigation, snorkeling, visite du phare et repas de fruits de mer. Supplément : 150€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Observation des baleines</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        De juillet à octobre, excursion en bateau pour observer les baleines à bosse lors de leur migration. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de cuisine santoméenne</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Atelier culinaire avec une chef locale pour apprendre à préparer les plats traditionnels. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Massage traditionnel</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Détente avec des massages aux huiles essentielles locales dans un cadre naturel. Supplément : 60€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Authentiques à travers São Tomé</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-emerald-700 w-16 md:w-32"></span>
                      <span className="text-emerald-700 text-2xl">🏨</span>
                      <span className="h-px bg-emerald-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose une sélection d'hébergements soigneusement choisis pour leur authenticité, leur confort et leur intégration dans l'environnement local. De l'hôtel colonial en centre-ville à l'écolodge en forêt en passant par la charmante guesthouse en bord de mer, chaque étape offre une expérience d'hébergement unique qui enrichit votre découverte de l'île.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('saotome')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'saotome' 
                          ? 'bg-emerald-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SÃO TOMÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('foret')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'foret' 
                          ? 'bg-emerald-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MONTE CAFÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('plage')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'plage' 
                          ? 'bg-emerald-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PRAIA JALE (2 NUITS)
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
                              <div className="absolute top-4 left-4 bg-emerald-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Omali Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Style colonial</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant gastronomique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📶</span>
                                <span className="text-sm font-semibold">Wifi haut débit</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Omali Lodge est un établissement 4* situé à 5 minutes à pied du centre historique de São Tomé. Installé dans un bâtiment colonial restauré avec goût, il allie charme d'antan et confort moderne. Les 20 chambres sont spacieuses et décorées avec des matériaux locaux (bois tropical, tissus africains). Chaque chambre dispose de la climatisation, d'une salle de bain privée avec eau chaude, d'un minibar, d'un coffre-fort et d'une terrasse ou balcon. L'hôtel possède un restaurant réputé servant une cuisine fusion africano-portugaise, un bar avec terrasse, une piscine entourée de jardins tropicaux, un spa et une salle de sport. L'emplacement est idéal pour explorer la capitale à pied.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Forêt */}
                  {activeHotelTab === 'foret' && (
                    <div className="space-y-16">
                      {/* Écolodge de Monte Café */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Écolodge Monte Café" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bombom Resort</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Région de Monte Café, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Écotourisme</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Bungalows écologiques</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌌</span>
                                <span className="text-sm font-semibold">Vue panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍃</span>
                                <span className="text-sm font-semibold">Énergie solaire</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Bombom Resort est un écolodge situé sur les hauteurs de la région de Monte Café, à 600 mètres d'altitude, offrant une vue imprenable sur l'océan Atlantique. Les 12 bungalows en bois et pierre volcanique sont construits dans le respect de l'environnement, avec des toits de chaume et une décoration naturelle. Chaque bungalow dispose d'une salle de bain privée (eau chaude solaire), d'une terrasse privée avec hamac et d'une moustiquaire. Pas de télévision ni de climatisation (ventilateurs), mais une connexion wifi limitée à la réception. Le restaurant sert une délicieuse cuisine locale à base de produits frais du jardin. L'écolodge est alimenté à l'énergie solaire, recycle ses déchets et participe à des programmes de conservation de la forêt. Parfait pour une immersion dans la nature santoméenne.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Plage */}
                  {activeHotelTab === 'plage' && (
                    <div className="space-y-16">
                      {/* Praia Jale Eco Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1573843989-c9d4a65d6c8c?w=600" 
                              alt="Praia Jale Eco Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Praia Jale Eco Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Praia Jale, côte est, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏖️</span>
                                <span>En bord de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🐠</span>
                                <span className="text-sm font-semibold">Snorkeling direct</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍤</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Couchers de soleil</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Praia Jale Eco Lodge est situé directement sur l'une des plus belles plages de São Tomé. Cet établissement familial de charme dispose de 8 bungalows simples mais confortables, construits avec des matériaux locaux et décorés dans un style tropical épuré. Chaque bungalow dispose d'un lit double ou deux lits simples, d'une salle de bain privée avec douche à eau chaude (solaire), d'une terrasse privée avec vue sur la mer et d'une moustiquaire. Pas de télévision ni d'air conditionné, mais des ventilateurs et l'alizé marin pour vous rafraîchir. Le restaurant, les pieds dans le sable, sert des plats à base de poisson et fruits de mer fraîchement pêchés, ainsi que des spécialités santoméennes. Activités proposées : snorkeling, kayak de mer, pêche traditionnelle, randonnées côtières. L'endroit parfait pour se détendre après les explorations.
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
                  <span className="text-2xl">🌴</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-emerald-700">$1,699</span>
                    <span className="text-xl line-through text-gray-500">$1,899</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
                    ✅ Inclus : Transferts, guides francophones, hébergements 3-4*, tous les repas, activités culturelles
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-05-10">10 Mai 2026</option>
                    <option value="2026-06-15">15 Juin 2026</option>
                    <option value="2026-07-05">5 Juillet 2026</option>
                    <option value="2026-08-20">20 Août 2026</option>
                    <option value="2026-09-25">25 Septembre 2026</option>
                    <option value="2027-05-10">10 Mai 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à septembre (saison sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-emerald-700 to-green-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ÉCONOMISEZ 200$ PAR PERSONNE</strong> en réservant avant le 31 décembre 2025
                  </p>
                  <p className="text-xs text-gray-300">* Offre limitée aux 10 premières réservations par départ</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-emerald-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-emerald-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-emerald-700 text-white py-4 font-semibold text-base mb-4 hover:bg-emerald-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts de São Tomé vous accompagnent dans votre projet.
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
                    title="Carte São Tomé miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Découverte São Tomé - 7 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit nature, culture et plages
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
                    <span>Transferts aéroport</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transport sur l'île en minibus</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone expert</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements (6 nuits)</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 petits-déjeuners</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 déjeuners et 6 dîners</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entrées sites et musées</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Activités mentionnées</span>
                    <span className="font-bold text-emerald-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-emerald-700">✓</span>
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
                    <span className="font-bold text-emerald-700">Moyenne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-emerald-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-emerald-700">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-emerald-700">Non requis pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-emerald-700">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + traitement antipaludéen recommandé
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-emerald-200 p-4 mt-6 shadow-lg bg-emerald-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un voyage magique entre nature préservée et accueil chaleureux. La randonnée à la cascade et les journées à Praia Jale resteront des souvenirs gravés à jamais. São Tomé est un vrai coup de cœur !"
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
      <button className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-emerald-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}