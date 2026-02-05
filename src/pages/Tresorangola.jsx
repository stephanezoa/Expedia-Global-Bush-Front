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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Trésors de l'Angola</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=12.5,-9.0,13.5,-8.0&layer=mapnik&marker=-8.84,13.23&marker=-12.58,13.41&marker=-12.35,13.55"
          style={{ border: 0 }}
          allowFullScreen
          title="Trésors de l'Angola - De Luanda à Benguela"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/-10.5/13.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Luanda (ville)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Côte des Squelettes</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Benguela</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lobito</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Baie de Benguela</span>
        </div>
      </div>
    </div>
  );
};

export default function Tresorangola() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('luanda');
  const [activeExperienceTab, setActiveExperienceTab] = useState('culture');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏛️', title: 'Luanda Historique', desc: 'Découverte de la capitale et son riche patrimoine' },
    { icon: '🌊', title: 'Côte Atlantique', desc: 'Plages immaculées et baies magnifiques' },
    { icon: '🏖️', title: 'Benguela Charmante', desc: 'Ville coloniale aux plages de sable fin' },
    { icon: '🎨', title: 'Culture Angolaise', desc: 'Musique, danse et traditions locales' },
    { icon: '🍽️', title: 'Gastronomie', desc: 'Découverte des saveurs de la cuisine angolaise' },
    { icon: '🌅', title: 'Couchers de Soleil', desc: 'Spectacles naturels sur l\'océan Atlantique' },
  ];

  const regions = [
    { 
      name: 'Luanda', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale dynamique et vibrante au bord de l\'océan Atlantique',
      features: ['Musée National', 'Forteresse de São Miguel', 'Marginale', 'Marché de Benfica']
    },
    { 
      name: 'Côte des Squelettes', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Côte sauvage et préservée aux paysages spectaculaires',
      features: ['Plages désertes', 'Dunes impressionnantes', 'Faune marine', 'Paysages uniques']
    },
    { 
      name: 'Benguela', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville historique aux influences portugaises marquées',
      features: ['Architecture coloniale', 'Plage de Baía Azul', 'Mercado Municipal', 'Culture locale']
    },
    { 
      name: 'Lobito', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Port important et station balnéaire réputée',
      features: ['Pointe de Lobito', 'Plages protégées', 'Restaurants de fruits de mer', 'Pont ferroviaire']
    },
    { 
      name: 'Baie de Benguela', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Baie naturelle exceptionnelle aux eaux turquoises',
      features: ['Sports nautiques', 'Excursions en bateau', 'Observation dauphins', 'Plongée']
    },
    { 
      name: 'Parque da Kissama', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Parc national abritant une faune africaine variée',
      features: ['Safari photo', 'Éléphants', 'Antilopes', 'Oiseaux migrateurs']
    },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Culture et Histoire', 
      icon: '🏛️',
      desc: 'Découverte du riche patrimoine culturel et historique angolais',
      highlights: ['Musées nationaux', 'Architecture coloniale', 'Traditions locales', 'Art contemporain'],
      details: 'L\'Angola possède une histoire fascinante mêlant influences africaines, portugaises et brésiliennes. Vous découvrirez Luanda, capitale vibrante au bord de l\'océan, avec son centre historique préservé, ses musées et ses marchés animés. Vous explorerez également les villes coloniales de Benguela et Lobito, témoins de l\'âge d\'or du commerce maritime. Chaque site raconte une partie de l\'histoire complexe et riche de ce pays en pleine renaissance.'
    },
    { 
      id: 'plages',
      name: 'Plages et Côte', 
      icon: '🏖️',
      desc: 'Exploration des magnifiques plages de la côte atlantique angolaise',
      highlights: ['Plages de sable fin', 'Baies protégées', 'Sports nautiques', 'Couchers de soleil'],
      details: 'La côte angolaise s\'étend sur plus de 1.600 km le long de l\'océan Atlantique. De Luanda à Benguela, vous découvrirez des plages magnifiques, certaines urbaines et animées, d\'autres sauvages et désertes. La baie de Benguela est particulièrement remarquable avec ses eaux calmes et turquoises. Vous pourrez pratiquer diverses activités nautiques, vous détendre sur le sable blanc, et admirer des couchers de soleil spectaculaires sur l\'océan.'
    },
    { 
      id: 'nature',
      name: 'Nature et Faune', 
      icon: '🦁',
      desc: 'Immersion dans les paysages naturels et découverte de la faune angolaise',
      highlights: ['Parc national de Kissama', 'Côte des Squelettes', 'Observation faune', 'Écosystèmes variés'],
      details: 'L\'Angola offre une nature préservée et diversifiée. Le Parc National de Kissama, à seulement 70 km de Luanda, abrite une faune africaine variée : éléphants, buffles, antilopes et de nombreux oiseaux. La Côte des Squelettes, avec ses paysages désertiques spectaculaires, offre un contraste saisissant avec les plages tropicales du sud. Vous découvrirez des écosystèmes uniques et apprendrez les efforts de conservation pour préserver ce patrimoine naturel exceptionnel.'
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie', 
      icon: '🍽️',
      desc: 'Découverte des saveurs uniques de la cuisine angolaise',
      highlights: ['Plats traditionnels', 'Fruits de mer frais', 'Influences portugaises', 'Vins angolais'],
      details: 'La cuisine angolaise est un savant mélange d\'influences africaines, portugaises et brésiliennes. Vous goûterez aux spécialités locales comme le muamba de galinha (poulet sauce d\'huile de palme), le calulu (ragoût de poisson ou viande), et le pirão (purée de farine de manioc). La côte atlantique offre des fruits de mer exceptionnellement frais : crevettes, langoustes, poissons grillés. Vous découvrirez également les vins produits dans la région de Huambo et les bières locales.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1589552950456-75eeaf3c7b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇦🇴</span>
          <span>ESCAPES | ANGOLA</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Trésors de l'Angola : De Luanda aux Plages de Benguela</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              7 jours d'immersion dans la culture et les paysages spectaculaires de l'Angola
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
            <span className="text-2xl">🇦🇴</span>
            <span className="text-sm font-semibold">ANGOLA | DÉCOUVERTE</span>
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
                <span className="bg-red-700 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO1</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - Luanda à Benguela</span>
                <button className="ml-auto border-2 border-red-700 text-red-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-red-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour amateurs de culture, histoire et plages tropicales</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-red-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-red-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-red-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-red-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 7 jours vous emmène à la découverte des trésors de la côte atlantique angolaise, de la vibrante capitale Luanda aux plages paradisiaques de Benguela. Un voyage qui combine culture, histoire et détente au bord de l'océan, vous permettant de découvrir les multiples facettes de ce pays fascinant en pleine renaissance.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Vous débuterez votre voyage par l'exploration de Luanda, capitale dynamique au riche patrimoine historique, avant de partir vers le sud le long de la côte atlantique. Vous découvrirez des paysages variés, des villes coloniales préservées, et des plages parmi les plus belles d'Afrique. Chaque étape vous permettra de rencontrer la population locale, de goûter à la cuisine angolaise, et d'apprécier l'hospitalité légendaire des Angolais.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit allie découverte culturelle, moments de détente et expériences authentiques. Vous séjournerez dans des hôtels confortables avec vue sur l'océan, et aurez l'opportunité de pratiquer diverses activités nautiques. Un voyage parfait pour ceux qui souhaitent découvrir l'Angola sous un angle varié et complet.
                </p>

                {/* Section Points forts */}
                <div className="bg-red-50 border-l-4 border-red-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">Les Trésors du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-red-700 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-red-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Angolaises de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Visite de Luanda</strong>, capitale vibrante au bord de l'océan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Découverte de Benguela</strong>, ville coloniale aux plages magnifiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Excursion à Lobito</strong>, station balnéaire réputée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Safari au Parc de Kissama</strong>, observation de la faune africaine</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Dégustation de cuisine locale</strong>, saveurs africaines et portugaises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Activités nautiques</strong>, dans les eaux turquoises de l'Atlantique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Rencontres culturelles</strong>, avec les communautés locales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Détente sur les plages</strong>, parmi les plus belles d'Afrique</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'Angola */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">L'Angola : Un Pays en Pleine Renaissance</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Après des années de conflit, l'Angola s'est engagé dans une phase de reconstruction et de développement remarquable. Ce circuit vous permet de découvrir un pays qui préserve son riche patrimoine tout en se tournant résolument vers l'avenir. Le climat tropical de la côte angolaise offre des conditions idéales pour le tourisme, avec des températures agréables toute l'année. La période de mai à septembre, pendant la saison sèche, est particulièrement recommandée pour profiter pleinement des plages et des activités en extérieur.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Niveau facile</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Plages tropicales</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Culture</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Histoire coloniale</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Rencontres authentiques</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">L'ANGOLA EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Longueur côtière</div>
                      <div className="text-3xl font-bold text-red-700">1,600</div>
                      <div className="text-xs">km de côte atlantique</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plages visitées</div>
                      <div className="text-3xl font-bold text-red-700">6+</div>
                      <div className="text-xs">plages différentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Villes explorées</div>
                      <div className="text-3xl font-bold text-red-700">4</div>
                      <div className="text-xs">villes principales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Excursions incluses</div>
                      <div className="text-3xl font-bold text-red-700">8</div>
                      <div className="text-xs">activités guidées</div>
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
                          Ce circuit vous emmène le long de la spectaculaire côte atlantique angolaise. Vous commencerez par l'exploration de Luanda, capitale vibrante située dans une baie magnifique. En descendant vers le sud, vous découvrirez la Côte des Squelettes avec ses paysages désertiques uniques, avant d'arriver dans la région de Benguela. Cette zone offre certaines des plus belles plages d'Afrique, des villes coloniales préservées, et une mer turquoise idéale pour les activités nautiques.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance parcourue</div>
                            <div className="text-red-700 font-bold">500 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits à la mer</div>
                            <div className="text-red-700 font-bold">6</div>
                          </div>
                          <div>
                            <div className="font-semibold">Excursions nautiques</div>
                            <div className="text-red-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Plages visitées</div>
                            <div className="text-red-700 font-bold">6+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Côte Angolaise</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=12.5,-9.0,13.5,-8.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Trésors de l'Angola"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=9/-10.5/13.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-red-700">Les Trésors de la Côte</h3>
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
                <div className="mb-10 bg-gradient-to-r from-red-700 to-orange-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Découverte de Luanda</div>
                      <div className="text-xs opacity-80">Arrivée, visite capitale, musées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Route vers le sud</div>
                      <div className="text-xs opacity-80">Côte des Squelettes, Benguela, Lobito</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-7</div>
                      <div className="text-sm">Détente et départ</div>
                      <div className="text-xs opacity-80">Plages, activités nautiques, retour</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Niveau et Préparation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau facile (1/5)</strong> : Ce circuit est accessible à tous, sans condition physique particulière. Les déplacements se font en véhicule confortable climatisé, avec des arrêts réguliers. Les visites impliquent de la marche modérée dans les villes et sur les plages. Les activités sont adaptées à tous les âges (à partir de 10 ans) et ne nécessitent pas de préparation particulière. Convient parfaitement aux familles, couples et voyageurs solo.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Aucune condition physique requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Visites et excursions accessibles à tous</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Âge minimum : 10 ans (accompagné)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">●</span>
                          <span className="text-sm">Curiosité et sens de l'aventure recommandés</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures confortables pour visites</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩴</span>
                          <span>Tongs ou sandales pour plages</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste légère pour le soir</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📸</span>
                          <span>Appareil photo pour paysages</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩱</span>
                          <span>Maillot de bain et serviette</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire haute protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🕶️</span>
                          <span>Lunettes de soleil et chapeau</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💊</span>
                          <span>Trousse de premiers soins</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Découverte ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à des sites naturels préservés</h4>
                        <p className="text-sm text-gray-700">
                          Nous visitons des plages et sites naturels peu fréquentés par le tourisme international, offrant une expérience authentique.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide spécialiste de l'Angola</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un expert de l'histoire et de la culture angolaise, francophone et passionné par son pays.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Hébergements avec vue sur l'océan</h4>
                        <p className="text-sm text-gray-700">
                          Tous vos hébergements sont soigneusement sélectionnés pour leur situation exceptionnelle face à l'Atlantique.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Combinaison parfaite culture/détente</h4>
                        <p className="text-sm text-gray-700">
                          Ce circuit équilibre parfaitement visites culturelles et moments de détente sur les plages les plus belles d'Angola.
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
                  {/* Jour 1 - Arrivée à Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À LUANDA</span>
                          <span className="text-sm text-gray-600">Accueil et première découverte de la capitale angolaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Luanda. Accueil par votre guide francophone spécialiste de l'Angola. Transfert à votre hôtel situé sur la célèbre "Marginale" avec vue sur la baie de Luanda. Installation et repos. En milieu d'après-midi, première immersion dans la capitale avec une visite panoramique : découverte de l'architecture coloniale du centre-ville, de la forteresse de São Miguel, et de l'emblématique Mausolée d'Agostinho Neto. Première initiation à l'histoire complexe et fascinante de l'Angola. Dîner de bienvenue dans un restaurant typique avec spécialités locales. Nuit à l'hôtel à Luanda.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Luanda approfondie */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LUANDA APPROFONDIE</span>
                          <span className="text-sm text-gray-600">Visite des musées et découverte culturelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-700">Journée culturelle</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la visite du Musée National d'Histoire Naturelle et du Musée National d'Anthropologie. Découverte approfondie de la biodiversité angolaise et des différentes ethnies qui composent le pays. Déjeuner dans un restaurant local avec vue sur l'océan. Après-midi : visite du marché de Benfica, immersion dans la vie quotidienne des Luandais. Découverte des produits locaux, des épices, et des artisanats traditionnels. Temps libre pour flâner le long de la plage de l'île de Luanda. En soirée, possibilité d'assister à un spectacle de danse traditionnelle (optionnel). Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-red-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite musées - Marché local - Culture angolaise
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers le sud et Côte des Squelettes */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CÔTE DES SQUELETTES</span>
                          <span className="text-sm text-gray-600">Route côtière et paysages désertiques spectaculaires</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-700">Journée paysages</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en véhicule privé vers le sud. Arrêt à mi-parcours pour découvrir la Côte des Squelettes, nom donné à cette portion de côte désertique aux paysages lunaires. Observation des dunes impressionnantes qui plongent dans l'océan Atlantique. Déjeuner pique-nique sur une plage déserte. Continuation vers Benguela en longeant la côte. Arrivée en fin d'après-midi à Benguela, installation à l'hôtel face à la mer. Première découverte de cette charmante ville coloniale avec une promenade le long de la plage de Baía Azul au coucher du soleil. Dîner de fruits de mer frais dans un restaurant local. Nuit à l'hôtel à Benguela.
                        </p>
                        <div className="bg-red-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Route côtière - Côte des Squelettes - Arrivée Benguela
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Benguela et Lobito */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BENGUELA ET LOBITO</span>
                          <span className="text-sm text-gray-600">Exploration des villes coloniales et plages paradisiaques</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-700">Journée balnéaire et culturelle</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la visite de Benguela : découverte du centre historique avec son architecture coloniale préservée, visite du marché municipal coloré, et promenade dans les jardins publics. Déjeuner dans un restaurant typique avec spécialités de poissons et fruits de mer. Après-midi : courte excursion à Lobito (30 minutes de route). Visite de cette station balnéaire réputée, découverte du pont ferroviaire historique et de la Pointe de Lobito offrant un panorama exceptionnel sur la baie. Temps libre pour se baigner dans les eaux calmes et turquoises de la baie. Retour à Benguela en fin d'après-midi. Dîner et nuit à l'hôtel.
                        </p>
                        <div className="bg-red-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite Benguela - Excursion Lobito - Détente plage
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Baie de Benguela et activités nautiques */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BAIE DE BENGUELA</span>
                          <span className="text-sm text-gray-600">Excursions nautiques et détente sur les plages</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-700">Journée nautique</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée aux activités dans la magnifique baie de Benguela. Matinée : excursion en bateau pour explorer la baie, observation des dauphins (selon saison et conditions), et découverte des petites îles protégées. Possibilité de snorkeling dans les eaux cristallines (équipement fourni). Déjeuner barbecue sur une plage déserte avec fruits de mer fraîchement pêchés. Après-midi : choix d'activités (incluses) : kayak de mer, paddle, ou simplement détente sur la plage de sable blanc. En fin d'après-midi, retour à l'hôtel. Dîner d'adieu spécial dans un restaurant gastronomique avec musique traditionnelle live. Nuit à l'hôtel.
                        </p>
                        <div className="bg-red-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Excursion bateau - Activités nautiques - Détente plage
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Safari au Parc de Kissama */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PARC NATIONAL DE KISSAMA</span>
                          <span className="text-sm text-gray-600">Safari et découverte de la faune angolaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-700">Journée safari</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en véhicule 4x4 pour le Parc National de Kissama, situé à environ 70 km au sud de Luanda. Journée complète de safari dans ce parc qui abrite une faune africaine variée : éléphants, buffles, antilopes (sables, guibs), zèbres, et de nombreuses espèces d'oiseaux. Le parc est traversé par la rivière Kwanza, offrant des paysages magnifiques. Déjeuner pique-nique dans le parc avec vue sur la rivière. Après-midi : continuation du safari avec un guide spécialiste de la faune locale. Retour à Luanda en fin d'après-midi. Installation à l'hôtel. Dîner libre. Nuit à l'hôtel à Luanda.
                        </p>
                        <div className="bg-red-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Safari 4x4 - Observation faune - Parc National Kissama
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE LUANDA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments pour profiter de la vue sur la baie de Luanda. Selon l'horaire de votre vol, temps libre pour les derniers achats de souvenirs : artisanat local, café angolais, ou épices du marché. Transfert à l'aéroport international de Luanda. Assistance aux formalités d'embarquement. Emportez avec vous non seulement des souvenirs magnifiques des plages paradisiaques de l'Angola, mais aussi la connaissance approfondie d'un pays fascinant en pleine renaissance, des rencontres humaines chaleureuses, et l'envie de revenir découvrir davantage cette destination encore méconnue mais tellement riche.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-red-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🇦🇴</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-red-700">Les Expériences Angolaises</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une célébration complète des trésors de l'Angola, de sa capitale vibrante à ses plages paradisiaques. Chaque expérience est conçue pour vous faire découvrir un aspect différent de ce pays fascinant, des villes historiques aux paysages naturels spectaculaires.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-red-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-red-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-red-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-red-700 mt-1">•</span>
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
                              lat={exp.id === 'culture' ? -8.84 : 
                                   exp.id === 'plages' ? -12.35 :
                                   exp.id === 'nature' ? -9.2 :
                                   -12.58} 
                              lng={exp.id === 'culture' ? 13.23 : 
                                   exp.id === 'plages' ? 13.55 :
                                   exp.id === 'nature' ? 13.15 :
                                   13.41} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Angolaise</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1589552950456-75eeaf3c7b1e?w=600" 
                          alt="Luanda capitale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Luanda capitale</h5>
                          <p className="text-sm text-gray-700">Vue sur la baie et la ville moderne</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                          alt="Plages de Benguela" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages de Benguela</h5>
                          <p className="text-sm text-gray-700">Sable blanc et eaux turquoises</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Safari au Parc Kissama" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Safari au Parc Kissama</h5>
                          <p className="text-sm text-gray-700">Observation de la faune africaine</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">Activités Optionnelles en Angola</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Plongée sous-marine avec bouteille</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Découverte des fonds marins de la baie de Benguela. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Excursion en hélicoptère au-dessus de la côte</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Vol panoramique offrant des vues spectaculaires. Supplément : 250€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de cuisine angolaise</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage des recettes traditionnelles avec un chef. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Séance photo professionnelle sur la plage</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Photos souvenirs avec photographe professionnel. Supplément : 100€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Face à la Mer</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-red-700 w-16 md:w-32"></span>
                      <span className="text-red-700 text-2xl">🏨</span>
                      <span className="h-px bg-red-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements offrant une vue exceptionnelle sur l'océan Atlantique. De l'hôtel moderne de Luanda aux établissements de charme de Benguela, chaque hébergement est sélectionné pour son confort, son emplacement et son authenticité.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('luanda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'luanda' 
                          ? 'bg-red-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUANDA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('benguela')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'benguela' 
                          ? 'bg-red-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BENGUELA (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Luanda */}
                  {activeHotelTab === 'luanda' && (
                    <div className="space-y-16">
                      {/* Hotel Tropico */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Tropico" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Tropico</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenida 4 de Fevereiro, Luanda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Face à la baie de Luanda</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 restaurants gastronomiques</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Spa et centre de bien-être</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Tropico offre un confort moderne avec une vue imprenable sur la baie de Luanda. Les chambres sont spacieuses, climatisées et équipées de toutes les commodités. La piscine panoramique sur le toit est un lieu privilégié pour admirer les couchers de soleil. L'hôtel dispose de deux restaurants servant une cuisine internationale et des spécialités angolaises. Sa situation sur l'avenue principale permet un accès facile aux sites d'intérêt de la capitale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Benguela */}
                  {activeHotelTab === 'benguela' && (
                    <div className="space-y-16">
                      {/* Benguela Beach Hotel */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Benguela Beach Hotel" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Benguela Beach Hotel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Plage de Baía Azul, Benguela, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏖️</span>
                                <span>Accès direct à la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">2 piscines (dont une à débordement)</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍹</span>
                                <span className="text-sm font-semibold">Bar sur la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚣</span>
                                <span className="text-sm font-semibold">Activités nautiques sur place</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Benguela Beach Hotel est un établissement de charme situé directement sur la magnifique plage de Baía Azul. Les bungalows et chambres sont décorés dans un style africain contemporain, avec terrasse ou balcon donnant sur l'océan. L'hôtel dispose de deux piscines, d'un spa, et d'un centre d'activités nautiques proposant kayak, paddle et snorkeling. Les restaurants servent une délicieuse cuisine à base de fruits de mer frais pêchés quotidiennement. L'ambiance détendue et le service attentionné en font un lieu de séjour idéal.
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
                  <span className="text-2xl">🇦🇴</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-red-700">$2,299</span>
                    <span className="text-xl line-through text-gray-500">$2,499</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-red-700 bg-red-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide francophone, hébergements, petit-déjeuners, visites guidées, safari
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-05-15">15 Mai 2026</option>
                    <option value="2026-06-12">12 Juin 2026</option>
                    <option value="2026-07-10">10 Juillet 2026</option>
                    <option value="2026-08-07">7 Août 2026</option>
                    <option value="2026-09-04">4 Septembre 2026</option>
                    <option value="2027-05-14">14 Mai 2027</option>
                    <option value="2027-06-11">11 Juin 2027</option>
                    <option value="2027-07-09">9 Juillet 2027</option>
                    <option value="2027-08-06">6 Août 2027</option>
                    <option value="2027-09-03">3 Septembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à septembre (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-red-700 to-orange-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXCURSION EN BATEAU ET SAFARI INCLUS</strong> : découverte complète
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 12 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-red-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-red-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-red-700 text-white py-4 font-semibold text-base mb-4 hover:bg-red-600 transition-colors shadow-md">
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
                    Nos experts Angola vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=12.5,-9.0,13.5,-8.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Trésors de l'Angola miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Trésors de l'Angola - 7 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit découverte et balnéaire
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Visites et Activités Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Visite guidée de Luanda</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Excursion à Benguela et Lobito</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Safari au Parc de Kissama</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Excursion en bateau avec snorkeling</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les transferts en véhicule privé</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 petits-déjeuners</span>
                    <span className="font-bold text-red-700">✓</span>
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
                    <span className="font-bold text-red-700">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-red-700">10 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs mai à septembre</span>
                    <span className="font-bold text-red-700">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone</span>
                    <span className="font-bold text-red-700">Spécialiste Angola</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-red-700">12 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Recommandé : visa touristique obligatoire pour l'Angola
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-red-200 p-4 mt-6 shadow-lg bg-red-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-700">
                  <span>💬</span>
                  <span>Témoignage Voyageur</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Ce circuit m'a permis de découvrir un Angola très différent de l'image que je m'en faisais. Luanda est une capitale fascinante, et les plages de Benguela sont parmi les plus belles que j'ai vues en Afrique. Le safari au Parc de Kissama était un moment fort. Un voyage parfaitement équilibré entre culture et détente."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc L., voyageur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-red-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}