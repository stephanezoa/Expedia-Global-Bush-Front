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
        <h4 className="font-semibold text-center text-lg">Itinéraire Nature et Biodiversité</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.5&layer=mapnik&marker=0.34,6.73&marker=0.28,6.61&marker=0.24,6.58&marker=0.20,6.55&marker=0.17,6.51"
          style={{ border: 0 }}
          allowFullScreen
          title="Nature et Biodiversité"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=10/0.28/6.65" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Forêt de Monte Carmo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Cascades de São Nicolau</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Réserve Obô</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Pico Cão Grande (vue)</span>
        </div>
      </div>
    </div>
  );
};

export default function Naturebiodiversite() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('foret');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌿', title: 'Forêts Primaires', desc: 'Exploration des forêts tropicales préservées' },
    { icon: '🐒', title: 'Faune Endémique', desc: 'Observation des espèces uniques de São Tomé' },
    { icon: '🌺', title: 'Flore Exceptionnelle', desc: 'Découverte de plantes rares et médicinales' },
    { icon: '🌄', title: 'Cascades Spectaculaires', desc: 'Visite des plus belles chutes d\'eau' },
    { icon: '🏞️', title: 'Réserve Naturelle Obô', desc: 'Immersion dans la réserve protégée' },
    { icon: '👣', title: 'Randonnées Guidées', desc: 'Circuits avec guides naturalistes' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Point de départ et briefing sur la biodiversité santoméenne',
      features: ['Briefing naturaliste', 'Musée de la biodiversité', 'Préparation matériel', 'Rencontre guide']
    },
    { 
      name: 'Forêt de Monte Carmo', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Forêt primaire avec sentiers d\'observation de la faune',
      features: ['Forêt primaire intacte', 'Observation oiseaux', 'Plantes endémiques', 'Sentiers botaniques']
    },
    { 
      name: 'Cascades de São Nicolau', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Zone de cascades au cœur de la forêt tropicale humide',
      features: ['Randonnée facile', 'Baignade naturelle', 'Formations géologiques', 'Écosystème aquatique']
    },
    { 
      name: 'Réserve Naturelle Obô', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Réserve protégée abritant la plus grande biodiversité de l\'île',
      features: ['Zone protégée', 'Biodiversité maximale', 'Sentiers experts', 'Conservation']
    },
    { 
      name: 'Plateau des Lontras', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Plateau d\'altitude avec vue panoramique et écosystème unique',
      features: ['Vue 360°', 'Écosystème d\'altitude', 'Observation faune', 'Couchers de soleil']
    },
    { 
      name: 'Zone Pico Cão Grande', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Approche du géant volcanique et de son écosystème spécifique',
      features: ['Géologie volcanique', 'Vues spectaculaires', 'Faune spécialisée', 'Photos uniques']
    },
  ];

  const experiences = [
    { 
      id: 'foret',
      name: 'Forêts Primaires', 
      icon: '🌳',
      desc: 'Exploration des forêts tropicales les mieux préservées de l\'île',
      highlights: ['Forêt de Monte Carmo', 'Canopée dense', 'Écosystème intact', 'Sentiers secrets'],
      details: 'São Tomé possède l\'une des dernières forêts primaires intactes d\'Afrique. Vous découvrirez des arbres centenaires, une canopée dense abritant une vie foisonnante, et des sentiers secrets connus seulement des guides locaux. Une immersion totale dans un écosystème préservé depuis des millénaires.'
    },
    { 
      id: 'faune',
      name: 'Faune Endémique', 
      icon: '🐦',
      desc: 'Observation des espèces animales uniques à São Tomé',
      highlights: ['Oiseaux endémiques', 'Mammifères rares', 'Reptiles uniques', 'Amphibiens'],
      details: 'Avec un taux d\'endémisme parmi les plus élevés au monde, São Tomé est un paradis pour les naturalistes. Vous observerez des oiseaux qu\'on ne trouve nulle part ailleurs, comme le Souimanga de São Tomé, ainsi que des mammifères, reptiles et amphibiens uniques. Votre guide naturaliste vous aidera à les repérer et à comprendre leur écologie.'
    },
    { 
      id: 'flore',
      name: 'Flore Exceptionnelle', 
      icon: '🌺',
      desc: 'Découverte des plantes rares, médicinales et endémiques',
      highlights: ['Orchidées rares', 'Plantes médicinales', 'Arbres géants', 'Fougères arborescentes'],
      details: 'La flore de São Tomé est d\'une richesse exceptionnelle. Vous découvrirez des orchidées rares, des plantes médicinales utilisées par les guérisseurs traditionnels, des arbres géants de la forêt primaire, et des fougères arborescentes préhistoriques. Un véritable laboratoire vivant de la biodiversité végétale.'
    },
    { 
      id: 'eau',
      name: 'Écosystèmes Aquatiques', 
      icon: '💧',
      desc: 'Exploration des cascades, rivières et zones humides',
      highlights: ['Cascades spectaculaires', 'Rivières cristallines', 'Sources thermales', 'Zones humides'],
      details: 'L\'eau est omniprésente dans les paysages de São Tomé. Vous découvrirez des cascades spectaculaires tombant de hautes falaises, des rivières cristallines serpentant à travers la forêt, des sources thermales naturelles et des zones humides abritant une faune spécifique. Chaque écosystème aquatique a sa propre biodiversité.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌿</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Nature et Biodiversité</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'immersion dans les écosystèmes uniques de São Tomé
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
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | NATURE</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">NATURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP6</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - São Tomé à Réserve Obô</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour amoureux de la nature, condition physique modérée requise</span>
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
                  Ce circuit de 8 jours est conçu pour les amoureux de la nature et les passionnés de biodiversité. São Tomé-et-Príncipe, avec son taux d'endémisme exceptionnellement élevé, est un véritable laboratoire vivant de l'évolution. Ce voyage vous emmène au cœur des écosystèmes les mieux préservés de l'île, des forêts primaires aux cascades spectaculaires, en passant par la mythique Réserve Naturelle Obô.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Accompagné par un guide naturaliste francophone, vous découvrirez des espèces animales et végétales qu'on ne trouve nulle part ailleurs dans le monde. Chaque journée est une nouvelle exploration : observation d'oiseaux endémiques au lever du soleil, randonnées dans la forêt tropicale humide à la recherche de plantes rares, baignade dans des bassins naturels au pied de cascades, et immersion dans la Réserve Obô, sanctuaire de la biodiversité santoméenne.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit privilégie l'observation et la compréhension des écosystèmes plutôt que la performance sportive. Les randonnées sont accessibles à toute personne en bonne condition physique, avec un rythme adapté à l'observation naturaliste. Un voyage qui vous connectera profondément à la nature exceptionnelle de São Tomé.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Trésors Naturels du Voyage</h3>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Naturalistes de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation d'oiseaux endémiques</strong>, avec guide ornithologue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Randonnées botaniques</strong>, découverte de plantes rares</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Immersion en forêt primaire</strong>, écosystème préservé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Visite de la Réserve Obô</strong>, sanctuaire de biodiversité</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Baignade dans les cascades</strong>, au cœur de la forêt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des chauves-souris</strong>, dans des grottes volcaniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Découverte des papillons</strong>, nombreuses espèces endémiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontre avec des naturalistes locaux</strong>, partage de connaissances</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la biodiversité */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Biodiversité Unique de São Tomé</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      São Tomé-et-Príncipe est reconnue comme l'un des points chauds de biodiversité les plus importants au monde. L'isolement géographique de l'archipel a permis le développement d'espèces uniques : 28 espèces d'oiseaux endémiques, 60 espèces de plantes qu'on ne trouve nulle part ailleurs, et de nombreux reptiles et amphibiens uniques. La Réserve Naturelle Obô, qui couvre 30% de l'île, est le cœur de cette biodiversité. La meilleure période pour l'observation naturaliste est de mars à novembre, hors saison des pluies intense.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau modéré</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Observation naturaliste</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Guide naturaliste</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Espèces endémiques</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Forêt primaire</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LA NATURE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces d'oiseaux endémiques</div>
                      <div className="text-3xl font-bold text-green-700">28</div>
                      <div className="text-xs">espèces uniques au monde</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plantes endémiques</div>
                      <div className="text-3xl font-bold text-green-700">60+</div>
                      <div className="text-xs">espèces végétales uniques</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Surface de forêt primaire</div>
                      <div className="text-3xl font-bold text-green-700">30%</div>
                      <div className="text-xs">de l'île préservée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Randonnées naturalistes</div>
                      <div className="text-3xl font-bold text-green-700">6</div>
                      <div className="text-xs">circuits d'observation</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Naturaliste</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers les écosystèmes les plus riches de São Tomé. Vous commencerez par des randonnées d'initiation dans la forêt de Monte Carmo, avant de progresser vers les zones plus préservées. Le cœur du voyage est l'exploration de la Réserve Naturelle Obô et de ses alentours. Les déplacements sont conçus pour maximiser les opportunités d'observation, avec des départs matinaux pour l'observation des oiseaux et des pauses longues pour l'étude de la flore. Un parcours progressif qui respecte le rythme de la nature.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Randonnées par jour</div>
                            <div className="text-green-700 font-bold">1-2 (2-4h)</div>
                          </div>
                          <div>
                            <div className="font-semibold">Observation matinale</div>
                            <div className="text-green-700 font-bold">5 jours</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes visités</div>
                            <div className="text-green-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides naturalistes</div>
                            <div className="text-green-700 font-bold">2 spécialistes</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Écosystèmes</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Nature et Biodiversité"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=10/0.28/6.65" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Écosystèmes détaillés */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Écosystèmes Explorés</h3>
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
                      <div className="text-sm">Initiation naturaliste</div>
                      <div className="text-xs opacity-80">Arrivée, forêt Monte Carmo, observation oiseaux</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-6</div>
                      <div className="text-sm">Immersion biodiversité</div>
                      <div className="text-xs opacity-80">Réserve Obô, cascades, flore endémique</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-8</div>
                      <div className="text-sm">Consolidation et départ</div>
                      <div className="text-xs opacity-80">Pico Cão Grande, synthèse, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Équipement Naturaliste</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau modéré (3/5)</strong> : Ce circuit est accessible à toute personne en bonne condition physique. Les randonnées durent de 2 à 4 heures, avec des dénivelés modérés (maximum 500m). Le rythme est lent, adapté à l'observation naturaliste. Certains sentiers peuvent être boueux en saison des pluies. Aucune compétence technique n'est requise, seulement de la curiosité et de la patience.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Condition physique normale requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Randonnées de 2-4h maximum</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum : 12 ans (accompagné)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Patience et curiosité indispensables</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Naturaliste Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de randonnée imperméables</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos jour (20-30L)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste imperméable légère</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🔭</span>
                          <span>Jumelles (fournies si besoin)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📸</span>
                          <span>Appareil photo avec zoom</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📓</span>
                          <span>Carnet de notes naturaliste</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Anti-moustiques et crème solaire</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourde ou camelbak 2L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Naturaliste ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à des zones normalement inaccessibles</h4>
                        <p className="text-sm text-gray-700">
                          Grâce à nos autorisations spéciales et à nos guides locaux, nous accédons à des sentiers et zones de la Réserve Obô normalement fermés au public.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide naturaliste francophone spécialiste</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un naturaliste formé, passionné par la biodiversité santoméenne et capable de vous faire découvrir les secrets les mieux cachés.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Matériel d'observation fourni</h4>
                        <p className="text-sm text-gray-700">
                          Jumelles de qualité, guides d'identification, loupes botaniques et autres outils sont fournis pour optimiser vos observations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Groupe limité à 6 participants</h4>
                        <p className="text-sm text-gray-700">
                          Pour des raisons écologiques et pour maximiser la qualité des observations, les groupes sont limités à 6 naturalistes maximum.
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
                  {/* Jour 1 - Arrivée et initiation */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE ET INITIATION</span>
                          <span className="text-sm text-gray-600">Accueil, briefing naturaliste et préparation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide naturaliste francophone. Transfert à l'hôtel en centre-ville. Installation et repos. En fin d'après-midi, briefing complet sur la biodiversité de São Tomé : présentation des écosystèmes, des espèces endémiques à observer, et des techniques d'observation. Distribution du matériel naturaliste (jumelles, guides d'identification). Première séance d'initiation à l'observation des oiseaux dans les jardins de l'hôtel. Dîner de bienvenue avec spécialités locales. Nuit à l'hôtel à São Tomé.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Forêt de Monte Carmo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT DE MONTE CARMO</span>
                          <span className="text-sm text-gray-600">Première immersion en forêt primaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'initiation forestière</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour la forêt de Monte Carmo, l'une des forêts primaires les plus accessibles de l'île. Randonnée facile (3h, dénivelé +200m) sur des sentiers bien entretenus. Initiation à l'observation des oiseaux forestiers : Souimanga de São Tomé, Pigeon de São Tomé, etc. Découverte des premiers arbres endémiques et des plantes médicinales. Déjeuner pique-nique en forêt. Après-midi : continuation de l'exploration avec focus sur les insectes et les petites espèces. Retour à São Tomé en fin d'après-midi. Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 3h de randonnée - Observation oiseaux - Découverte flore
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Cascades de São Nicolau */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CASCADES DE SÃO NICOLAU</span>
                          <span className="text-sm text-gray-600">Écosystèmes aquatiques et forestiers</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée aquatique et forestière</h4>
                        <p className="text-justify mb-4">
                          Direction le centre de l'île pour une journée combinant forêt et eau. Randonnée (2h30, dénivelé +150m) vers les cascades de São Nicolau à travers la forêt tropicale humide. Observation des espèces liées aux cours d'eau : libellules, poissons d'eau douce, amphibiens. Arrivée aux cascades : baignade possible dans les bassins naturels. Déjeuner pique-nique au bord de l'eau. Après-midi : exploration des alentours avec focus sur les fougères et les mousses, typiques des zones humides. Retour à l'hébergement en fin d'après-midi. Dîner et nuit.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 2h30 de randonnée - Écosystème aquatique - Baignade cascade
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Entrée en Réserve Obô */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ENTRÉE EN RÉSERVE OBÔ</span>
                          <span className="text-sm text-gray-600">Première immersion dans le sanctuaire de biodiversité</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée en réserve protégée</h4>
                        <p className="text-justify mb-4">
                          Transfert vers l'entrée de la Réserve Naturelle Obô. Briefing sur les règles de la réserve et rencontre avec un garde-forestier. Randonnée (4h, dénivelé +300m) sur un sentier peu fréquenté. Observation des espèces les plus rares : recherche du Tisserin de São Tomé, découverte des arbres géants de la forêt primaire. Déjeuner pique-nique en pleine réserve. Après-midi : continuation avec un focus sur les signes de présence animale (traces, nids, terriers). Installation dans un lodge écologique en bordure de réserve. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 4h de randonnée - Réserve protégée - Espèces rares
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Cœur de la Réserve Obô */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CŒUR DE LA RÉSERVE OBÔ</span>
                          <span className="text-sm text-gray-600">Exploration profonde de la biodiversité</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'immersion totale</h4>
                        <p className="text-justify mb-4">
                          Levée très tôt pour une séance d'observation des oiseaux au lever du jour (activité la plus favorable). Randonnée (5h, dénivelé +400m) vers le cœur de la réserve. Exploration d'une zone rarement visitée, avec possibilité d'observer des espèces très discrètes. Focus sur la flore : orchidées rares, plantes carnivores, arbres à caoutchouc. Déjeuner pique-nique au sommet d'une colline avec vue sur la canopée. Après-midi : descente en prenant un chemin différent, observation des chauves-souris frugivores. Retour au lodge en fin d'après-midi. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 5h de randonnée - Cœur de réserve - Observations rares
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Plateau des Lontras */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PLATEAU DES LONTRAS</span>
                          <span className="text-sm text-gray-600">Écosystème d'altitude et vue panoramique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'altitude</h4>
                        <p className="text-justify mb-4">
                          Randonnée (4h, dénivelé +500m) vers le Plateau des Lontras (1.200m). Changement progressif de végétation : passage de la forêt tropicale humide à la forêt de nuage. Observation des espèces d'altitude : oiseaux spécifiques, plantes adaptées au froid et à l'humidité constante. Arrivée sur le plateau : vue panoramique à 360° sur l'île. Déjeuner pique-nique avec cette vue spectaculaire. Après-midi : exploration du plateau, étude des formations géologiques et des phénomènes météorologiques particuliers. Descente et retour au lodge. Dîner d'adieu à la réserve. Nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 4h de randonnée - Écosystème d'altitude - Vue 360°
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Pico Cão Grande et retour */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PICO CÃO GRANDE ET SYNTHÈSE</span>
                          <span className="text-sm text-gray-600">Approche du géant volcanique et bilan naturaliste</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de synthèse</h4>
                        <p className="text-justify mb-4">
                          Départ du lodge et transfert vers la zone du Pico Cão Grande. Randonnée facile (2h, dénivelé +100m) vers un point de vue sur l'emblématique aiguille volcanique. Étude de l'écosystème spécifique aux roches volcaniques. Déjeuner pique-nique avec vue sur le Pico. Après-midi : retour vers São Tomé. En route, arrêt pour une séance de synthèse : récapitulatif des espèces observées, échanges sur les découvertes, partage des photos. Arrivée à l'hôtel à São Tomé en fin d'après-midi. Temps libre. Dîner de clôture avec l'équipe. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 2h de randonnée - Pico Cão Grande - Synthèse naturaliste
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE SÃO TOMÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments libres pour finaliser les notes naturalistes ou faire quelques achats de souvenirs. Selon l'horaire de votre vol, transfert à l'aéroport international de São Tomé. Assistance aux formalités d'embarquement. Emportez avec vous les souvenirs d'une immersion profonde dans l'un des écosystèmes les plus riches et uniques au monde, la connaissance de la biodiversité exceptionnelle de São Tomé, et la satisfaction d'avoir contribué, par votre présence, à la conservation de ces trésors naturels.
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
                      <span className="text-white text-2xl">🌿</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Naturalistes</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion totale dans le monde fascinant de la biodiversité tropicale. Chaque expérience est conçue pour vous connecter profondément à la nature exceptionnelle de São Tomé, avec un accent particulier sur l'observation, la compréhension et la conservation des écosystèmes uniques de l'île.
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
                              lat={exp.id === 'foret' ? 0.24 : 
                                   exp.id === 'faune' ? 0.20 :
                                   exp.id === 'flore' ? 0.26 :
                                   0.22} 
                              lng={exp.id === 'foret' ? 6.58 : 
                                   exp.id === 'faune' ? 6.55 :
                                   exp.id === 'flore' ? 6.60 :
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Naturaliste</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600" 
                          alt="Forêt primaire" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt primaire</h5>
                          <p className="text-sm text-gray-700">Écosystème préservé depuis des millénaires</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600" 
                          alt="Oiseaux endémiques" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Oiseaux endémiques</h5>
                          <p className="text-sm text-gray-700">Espèces qu'on ne trouve nulle part ailleurs</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1518834103328-922d6fcc01a1?w=600" 
                          alt="Cascades" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Cascades</h5>
                          <p className="text-sm text-gray-700">Écosystèmes aquatiques préservés</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles pour Naturalistes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Sortie nocturne en forêt</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Exploration nocturne avec lampes frontales pour observer la vie nocturne. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Atelier photo naturaliste</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Cours de photographie naturaliste avec un photographe professionnel. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Participation à un projet de recherche</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Contribution à un projet scientifique de suivi de la biodiversité. Supplément : 100€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Visite d'une pépinière de plantes endémiques</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Découverte d'un projet de conservation et de reforestation. Supplément : 60€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Écologiques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏕️</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements en harmonie avec l'environnement, situés au plus près des écosystèmes que vous venez étudier. De l'hôtel confortable en ville au lodge écologique en pleine nature, chaque hébergement est choisi pour son adéquation avec l'esprit naturaliste du voyage.
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
                      SÃO TOMÉ (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('reserve')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'reserve' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LODGE RÉSERVE (4 NUITS)
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
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant sur place</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Jardin avec oiseaux</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar offre un confort simple mais parfaitement adapté aux besoins des naturalistes. Situé au centre-ville, il permet un accès facile aux services et restaurants. Les chambres sont climatisées avec salle de bain privée. Le jardin de l'hôtel est un petit écosystème en soi, où vous pourrez déjà observer vos premiers oiseaux santoméens. Le restaurant sert une cuisine locale copieuse. Idéal pour les briefings naturalistes du début de circuit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lodge réserve */}
                  {activeHotelTab === 'reserve' && (
                    <div className="space-y-16">
                      {/* Eco-Lodge Obô */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Eco-Lodge Obô" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Eco-Lodge Obô</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bordure Réserve Obô, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>En lisière de forêt</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Douche solaire</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍃</span>
                                <span className="text-sm font-semibold">Énergie renouvelable</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦉</span>
                                <span className="text-sm font-semibold">Observation directe</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Eco-Lodge Obô est un hébergement unique situé en lisière de la Réserve Naturelle Obô. Conçu selon des principes écologiques stricts, il utilise l'énergie solaire, récupère l'eau de pluie et recycle ses déchets. Les bungalows sont simples mais confortables, avec moustiquaires et terrasses privées donnant sur la forêt. Le restaurant utilise des produits locaux et biologiques. La particularité de ce lodge : la faune vient à vous ! Observation directe d'oiseaux et de petits mammifères depuis votre terrasse.
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
                  <span className="text-2xl">🌿</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$1,999</span>
                    <span className="text-xl line-through text-gray-500">$2,299</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide naturaliste, hébergements, matériel d'observation, visites
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
                    <option value="2026-03-10">10 Mars 2026</option>
                    <option value="2026-04-07">7 Avril 2026</option>
                    <option value="2026-05-12">12 Mai 2026</option>
                    <option value="2026-06-09">9 Juin 2026</option>
                    <option value="2026-07-07">7 Juillet 2026</option>
                    <option value="2026-08-04">4 Août 2026</option>
                    <option value="2026-09-01">1 Septembre 2026</option>
                    <option value="2026-09-29">29 Septembre 2026</option>
                    <option value="2026-10-27">27 Octobre 2026</option>
                    <option value="2026-11-24">24 Novembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mars à novembre (saison favorable)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>MATÉRIEL NATURALISTE FOURNI</strong> : jumelles, guides, loupes
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 naturalistes maximum</p>
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
                    Nos experts naturalistes de São Tomé vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Nature et Biodiversité miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Nature et Biodiversité - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit naturaliste et observation
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Matériel Naturaliste Fourni</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Jumelles de qualité (10x42)</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide d'identification oiseaux</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide de flore locale</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Loupe botanique</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Lampe frontale pour sorties</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Carnet de notes naturaliste</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Contribution à la conservation</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Conditions Naturalistes</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau naturaliste</span>
                    <span className="font-bold text-green-700">Tous niveaux</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs mars à novembre</span>
                    <span className="font-bold text-green-700">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide naturaliste francophone</span>
                    <span className="font-bold text-green-700">Spécialiste</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">6 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Recommandé : connaissances de base en biologie ou écologie
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Naturaliste</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "En tant que biologiste, j'ai été époustouflé par la richesse de la biodiversité santoméenne. Le guide naturaliste était exceptionnel, connaissant chaque oiseau, chaque plante. La Réserve Obô est un sanctuaire préservé. Un circuit parfait pour les amoureux de la nature !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas B., biologiste 2025
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