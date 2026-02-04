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
        <h4 className="font-semibold text-center text-lg">Itinéraire Congo Nature</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.5,-5.0,16.0,-3.0&layer=mapnik&marker=-4.2634,15.2429&marker=-4.7945,11.8490&marker=-4.3500,12.2000"
          style={{ border: 0 }}
          allowFullScreen
          title="Congo Nature"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/-4.5/13.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Parc Conkouati</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Parc d'Odzala</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Réserve de Dimonika</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Forêt du Mayombe</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Monts de Cristal</span>
        </div>
      </div>
    </div>
  );
};

export default function Congonature() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('conkouati');
  const [activeExperienceTab, setActiveExperienceTab] = useState('parcs');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🦍', title: 'Gorilles des Montagnes', desc: 'Observation des gorilles dans leur habitat naturel' },
    { icon: '🌳', title: 'Forêts Primaires', desc: 'Exploration des forêts tropicales intactes' },
    { icon: '🐘', title: 'Mégafaune Africaine', desc: 'Éléphants de forêt et buffles' },
    { icon: '🦜', title: 'Biodiversité Exceptionnelle', desc: 'Plus de 400 espèces d\'oiseaux recensées' },
    { icon: '🏞️', title: 'Paysages Variés', desc: 'De la forêt dense aux savanes montagneuses' },
    { icon: '👨‍👩‍👧‍👦', title: 'Communautés Locales', desc: 'Rencontre avec les peuples de la forêt' },
  ];

  const regions = [
    { 
      name: 'Parc Conkouati-Douli', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Réserve de biosphère UNESCO entre forêt et littoral',
      features: ['Gorilles', 'Chimpanzés', 'Éléphants de forêt', 'Plages isolées']
    },
    { 
      name: 'Parc National d\'Odzala-Kokoua', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Un des plus anciens parcs d\'Afrique, sanctuaire des gorilles',
      features: ['Gorilles des plaines', 'Baïs naturels', 'Forêt primaire', 'Observation faune']
    },
    { 
      name: 'Réserve de Biosphère de Dimonika', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Première réserve de biosphère d\'Afrique centrale',
      features: ['Forêt du Mayombe', 'Monts de Cristal', 'Mines historiques', 'Rivières cristallines']
    },
    { 
      name: 'Forêt du Mayombe', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Massif forestier ancestral aux écosystèmes uniques',
      features: ['Canopée dense', 'Espèces endémiques', 'Sentiers ancestraux', 'Cascades cachées']
    },
    { 
      name: 'Monts de Cristal', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Chaîne montagneuse aux paysages spectaculaires',
      features: ['Sommet à 1000m', 'Vue panoramique', 'Flore unique', 'Randonnée alpine']
    },
    { 
      name: 'Cuvette Centrale', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Région de forêts marécageuses et rivières sinueuses',
      features: ['Marais', 'Forêts inondées', 'Observation oiseaux', 'Navigation fluviale']
    },
  ];

  const experiences = [
    { 
      id: 'parcs',
      name: 'Parcs Nationaux', 
      icon: '🦍',
      desc: 'Immersion dans les parcs nationaux les plus préservés du Congo',
      highlights: ['Parc Odzala', 'Parc Conkouati', 'Observation gorilles', 'Safaris pédestres'],
      details: 'Ce circuit vous fait découvrir les joyaux de la conservation au Congo. Le Parc National d\'Odzala-Kokoua, créé en 1935, est l\'un des plus anciens d\'Afrique et abrite la plus importante population de gorilles des plaines de l\'ouest. Le Parc Conkouati-Douli, réserve de biosphère UNESCO, protège un écosystème unique où forêt tropicale et littoral se rencontrent. Vous découvrirez également la Réserve de Dimonika, première réserve de biosphère d\'Afrique centrale.'
    },
    { 
      id: 'faune',
      name: 'Faune Sauvage', 
      icon: '🐘',
      desc: 'Observation de la mégafaune africaine dans son habitat naturel',
      highlights: ['Gorilles des montagnes', 'Éléphants de forêt', 'Chimpanzés', 'Buffles'],
      details: 'Le Congo abrite une faune exceptionnelle et souvent méconnue. Vous observerez les gorilles des montagnes lors de trekkings guidés, apprendrez à distinguer les éléphants de forêt de leurs cousins de savane, recherchez les chimpanzés dans la canopée, et découvrirez la riche avifaune avec plus de 400 espèces d\'oiseaux. Chaque observation sera encadrée par des guides spécialisés et dans le plus grand respect des animaux.'
    },
    { 
      id: 'ecosystemes',
      name: 'Écosystèmes', 
      icon: '🌿',
      desc: 'Découverte des écosystèmes variés du bassin du Congo',
      highlights: ['Forêt tropicale humide', 'Savane montagneuse', 'Littoral préservé', 'Marais'],
      details: 'Le deuxième massif forestier tropical du monde offre une diversité d\'écosystèmes remarquable. Vous traverserez la forêt dense du Mayombe, explorerez les savanes des monts de Cristal, découvrirez les mangroves du littoral atlantique, et naviguerez dans les marais de la Cuvette. Chaque écosystème abrite une flore et une faune spécifiques, adaptées à des conditions particulières.'
    },
    { 
      id: 'conservation',
      name: 'Conservation', 
      icon: '🛡️',
      desc: 'Rencontre avec les acteurs de la conservation de la biodiversité',
      highlights: ['Rencontre gardes forestiers', 'Centres de recherche', 'Projets communautaires', 'Écotourisme'],
      details: 'Ce circuit vous permet de rencontrer les hommes et femmes qui protègent la biodiversité congolaise. Vous visiterez des stations de recherche scientifique, rencontrerez les gardes forestiers qui luttent contre le braconnage, découvrirez les projets de conservation communautaire, et comprendrez les enjeux de la protection de l\'environnement en Afrique centrale. Une immersion dans les coulisses de la conservation.'
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Congo Nature : Parcs et Réserves</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              10 jours d'immersion dans les sanctuaires naturels du bassin du Congo
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
            <span className="text-2xl">🇨🇬</span>
            <span className="text-sm font-semibold">CONGO | PARCS NATURELS</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">PARCS</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">CONGO9</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - Brazzaville à Réserve Dimonika</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour les amoureux de nature et d'aventure en milieu sauvage</span>
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
                  Ce circuit de 10 jours est une immersion totale dans les sanctuaires naturels du Congo, à la découverte des parcs nationaux et réserves qui préservent la biodiversité exceptionnelle du bassin du Congo. Un voyage pour les passionnés de nature, d'aventure et de conservation.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Vous débuterez votre aventure par le Parc Conkouati-Douli, réserve de biosphère UNESCO où forêt tropicale et littoral atlantique se rencontrent. Vous poursuivrez vers le nord pour explorer le mythique Parc National d'Odzala-Kokoua, l'un des plus anciens d'Afrique et sanctuaire des gorilles des plaines. Le voyage se terminera dans la Réserve de Biosphère de Dimonika, au cœur de la forêt du Mayombe et des monts de Cristal.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour ceux qui souhaitent s'immerger dans la nature sauvage du Congo, observer la mégafaune africaine dans son habitat naturel, et comprendre les enjeux de la conservation dans l'un des derniers grands espaces naturels de la planète. Un voyage authentique au cœur de la deuxième forêt tropicale du monde.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts du Voyage</h3>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des gorilles</strong> dans le Parc d'Odzala</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Exploration de la forêt tropicale</strong> du Mayombe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Safaris pédestres</strong> avec guides spécialisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Navigation en pirogue</strong> sur les rivières forestières</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des éléphants de forêt</strong> à Conkouati</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Randonnée dans les monts de Cristal</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontre avec les communautés</strong> locales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Initiation à l'écologie</strong> tropicale</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les parcs congolais */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Congo : Sanctuaire de la Biodiversité</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Congo abrite la deuxième plus grande forêt tropicale du monde après l'Amazonie. Ses parcs nationaux et réserves protègent une biodiversité exceptionnelle : gorilles, chimpanzés, éléphants de forêt, buffles, et plus de 400 espèces d'oiseaux. Ce circuit vous fait découvrir les écosystèmes variés du bassin du Congo, des forêts denses aux savanes montagneuses. La meilleure période pour ce circuit est d'avril à juin, pendant la saison sèche.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau modéré</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Observation faune</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Aventure</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Randonnée</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Nature préservée</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE CONGO NATURE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Parcs visités</div>
                      <div className="text-3xl font-bold text-green-700">3+</div>
                      <div className="text-xs">parcs et réserves</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces d'oiseaux</div>
                      <div className="text-3xl font-bold text-green-700">400+</div>
                      <div className="text-xs">espèces recensées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Gorilles observés</div>
                      <div className="text-3xl font-bold text-green-700">50+</div>
                      <div className="text-xs">individus habitués</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits en lodges</div>
                      <div className="text-3xl font-bold text-green-700">9</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours à Travers les Aires Protégées</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous fait traverser les principales aires protégées du Congo. Vous découvrirez d'abord le Parc Conkouati-Douli sur la côte atlantique, puis remonterez vers le nord pour explorer le Parc National d'Odzala-Kokoua, avant de redescendre vers le sud-ouest pour la Réserve de Dimonika. Le trajet combine vols internes, navigation fluviale et 4x4, vous permettant d'accéder aux zones les plus reculées des parcs.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours à Conkouati</div>
                            <div className="text-green-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours à Odzala</div>
                            <div className="text-green-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours à Dimonika</div>
                            <div className="text-green-700 font-bold">2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Jours de trajet</div>
                            <div className="text-green-700 font-bold">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Aires Protégées</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-4.0,17.0,2.0&layer=mapnik&marker=0.5,14.5&marker=-4.0,11.8&marker=-3.5,14.0"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Congo Nature"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/0.5/14.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Aires Protégées du Parcours</h3>
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
                      <div className="text-sm">Parc Conkouati</div>
                      <div className="text-xs opacity-80">Arrivée, littoral et forêt</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4-7</div>
                      <div className="text-sm">Parc Odzala</div>
                      <div className="text-xs opacity-80">Gorilles et forêt primaire</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8-10</div>
                      <div className="text-sm">Réserve Dimonika</div>
                      <div className="text-xs opacity-80">Mayombe et monts de Cristal</div>
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
                        <strong>Niveau modéré à difficile (3-4/5)</strong> : Ce circuit comprend des randonnées de 3-6 heures en forêt tropicale, des trekkings pour l'observation des gorilles, des navigations en pirogue, et des conditions d'hébergement rustiques en pleine nature. Une bonne condition physique est nécessaire. Les activités requièrent une certaine endurance et adaptabilité.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Bonne condition physique requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Randonnées de 3-6 heures en forêt</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum recommandé : 16 ans</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Adaptabilité aux conditions rustiques</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de randonnée imperméables</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos 30L pour trekkings</span>
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
                          <span>🧴</span>
                          <span>Anti-moustiques puissant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💊</span>
                          <span>Trousse médicale complète</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩳</span>
                          <span>Vêtements techniques séchant vite</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourde filtrante ou pastilles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Nature ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Immersion dans les parcs les plus préservés</h4>
                        <p className="text-sm text-gray-700">
                          Accès à des zones protégées rarement visitées, loin du tourisme de masse.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guides spécialisés en écologie tropicale</h4>
                        <p className="text-sm text-gray-700">
                          Des guides experts en faune, flore et conservation vous accompagnent.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Observation privilégiée de la mégafaune</h4>
                        <p className="text-sm text-gray-700">
                          Groupes limités pour des observations respectueuses et de qualité.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Contribution à la conservation</h4>
                        <p className="text-sm text-gray-700">
                          Votre voyage finance directement la protection des parcs.
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
                  {/* Jour 1 - Arrivée à Brazzaville et vol vers Conkouati */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BRAZZAVILLE - VOL VERS CONKOUATI</span>
                          <span className="text-sm text-gray-600">Accueil et transfert vers le premier parc</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international Maya-Maya de Brazzaville. Accueil par votre guide spécialisé en écologie tropicale. Briefing sur le circuit. Vol interne vers la région du Parc Conkouati-Douli (environ 1 heure). Transfert en 4x4 vers le lodge situé en bordure du parc. Installation dans votre bungalow écologique. Première découverte des environs avec une courte marche d'observation en fin d'après-midi. Présentation du parc et de ses enjeux de conservation. Dîner et nuit au lodge.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Exploration du Parc Conkouati */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION DU PARC CONKOUATI</span>
                          <span className="text-sm text-gray-600">Safari pédestre et observation faune</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'immersion forestière</h4>
                        <p className="text-justify mb-4">
                          Matinée : safari pédestre guidé dans la forêt du parc avec observation de la faune (singes, oiseaux, traces d'éléphants). Visite d'un bai (clairière naturelle) fréquenté par les éléphants de forêt. Déjeuner pique-nique en pleine nature. Après-midi : navigation en pirogue traditionnelle sur les rivières du parc pour observer la faune aquatique et aviaire. Rencontre avec les gardes forestiers pour comprendre leur travail de protection. Retour au lodge en fin d'après-midi. Dîner et discussion sur la conservation. Nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Safari pédestre - Navigation pirogue - Rencontre gardes forestiers
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Littoral et forêt de Conkouati */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">LITTORAL ET FORÊT DE CONKOUATI</span>
                          <span className="text-sm text-gray-600">Découverte de l'écosystème côtier</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée écosystème côtier</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte de la zone littorale du parc. Matinée : marche le long des plages isolées, observation des tortues marines (selon saison) et des oiseaux marins. Visite des mangroves et explication de leur rôle écologique. Déjeuner pique-nique sur la plage. Après-midi : randonnée dans la forêt côtière avec observation des plantes médicinales utilisées par les communautés locales. Retour au lodge. Soirée spéciale autour d'un feu de camp avec contes et légendes de la forêt. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Plages isolées - Mangroves - Forêt côtière - Soirée conte
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Vol vers le Parc d'Odzala */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LE PARC D'ODZALA</span>
                          <span className="text-sm text-gray-600">Transfert vers le sanctuaire des gorilles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de transfert</h4>
                        <p className="text-justify mb-4">
                          Départ matinal du lodge Conkouati. Transfert vers l'aérodrome. Vol interne vers la région du Parc National d'Odzala-Kokoua (environ 1h30). Accueil à l'arrivée par les équipes du parc. Transfert en 4x4 vers le campement situé au cœur du parc. Installation dans votre chalet en pleine forêt. Briefing sur les règles d'observation des gorilles et sur le programme des prochains jours. Première promenade d'acclimatation autour du campement. Dîner et nuit au campement.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Vol interne - Transfert 4x4 - Arrivée Parc Odzala - Briefing gorilles
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Rencontre avec les gorilles */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RENCONTRE AVEC LES GORILLES</span>
                          <span className="text-sm text-gray-600">Premier trekking d'observation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée gorilles</h4>
                        <p className="text-justify mb-4">
                          Matinée : départ très tôt pour le premier trekking d'observation des gorilles. Accompagné de pisteurs expérimentés et de votre guide, vous marcherez 2-4 heures dans la forêt à la recherche d'un groupe de gorilles habitués. Observation d'une heure maximum (règles strictes de protection). Retour au campement pour le déjeuner. Après-midi : repos et discussion sur l'expérience vécue. En fin d'après-midi, visite d'un bai (clairière) pour observer d'autres animaux depuis une plateforme d'observation. Dîner et nuit au campement.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Trekking gorilles - Observation - Platforme d'observation
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Exploration approfondie d'Odzala */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION APPROFONDIE D'ODZALA</span>
                          <span className="text-sm text-gray-600">Safari pédestre et découverte de la biodiversité</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée biodiversité</h4>
                        <p className="text-justify mb-4">
                          Journée complète d'exploration du parc. Safari pédestre à la recherche des éléphants de forêt, buffles, antilopes et primates. Déjeuner pique-nique en pleine forêt. Navigation en pirogue sur les rivières du parc pour observer la faune depuis l'eau. Visite du centre de recherche du parc et rencontre avec les scientifiques qui étudient la biodiversité. Retour au campement en fin d'après-midi. Dîner spécial autour des produits locaux. Nuit au campement.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Safari pédestre - Navigation pirogue - Centre de recherche
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Deuxième observation gorilles et départ */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DEUXIÈME OBSERVATION GORILLES</span>
                          <span className="text-sm text-gray-600">Dernière rencontre et vol vers Dimonika</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée transition</h4>
                        <p className="text-justify mb-4">
                          Matinée : deuxième trekking d'observation des gorilles (groupe différent du premier jour). Retour au campement pour le déjeuner. Après-midi : transfert vers l'aérodrome. Vol interne vers la région de la Réserve de Dimonika. Accueil et transfert vers le lodge situé en bordure de la réserve. Installation. Présentation de la réserve, première réserve de biosphère d'Afrique centrale. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Observation gorilles - Vol interne - Arrivée Réserve Dimonika
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Exploration de la Réserve de Dimonika */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RÉSERVE DE DIMONIKA</span>
                          <span className="text-sm text-gray-600">Forêt du Mayombe et biodiversité unique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée forêt du Mayombe</h4>
                        <p className="text-justify mb-4">
                          Journée d'exploration de la forêt du Mayombe, massif forestier ancestral. Randonnée guidée sur les sentiers traditionnels avec observation de la flore unique (arbres géants, plantes médicinales, lianes). Visite des mines historiques de cuivre et découverte de l'histoire minière de la région. Déjeuner pique-nique près d'une rivière cristalline. Après-midi : rencontre avec une communauté locale pour comprendre leur relation avec la forêt. Retour au lodge en fin de journée. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée Mayombe - Mines historiques - Rencontre communauté
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Monts de Cristal */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">MONTS DE CRISTAL</span>
                          <span className="text-sm text-gray-600">Randonnée dans la chaîne montagneuse</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée montagne</h4>
                        <p className="text-justify mb-4">
                          Randonnée dans les monts de Cristal, chaîne montagneuse aux paysages spectaculaires. Ascension jusqu'à un point de vue panoramique (environ 800m d'altitude) avec vue sur la forêt du Mayombe. Observation de la flore unique des sommets (espèces endémiques). Déjeuner pique-nique avec vue. Descente et retour au lodge en milieu d'après-midi. Temps libre pour se reposer. Dîner d'adieu avec les équipes du lodge. Nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée monts de Cristal - Point de vue panoramique - Dîner d'adieu
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE DIMONIKA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Matinée libre pour une dernière promenade ou repos. Transfert vers l'aérodrome. Vol interne vers Brazzaville. Selon l'horaire de votre vol international, transfert à l'aéroport Maya-Maya ou nuit à Brazzaville (selon option choisie). Fin de nos services. Vous emportez avec vous les images inoubliables des gorilles d'Odzala, des éléphants de forêt de Conkouati, des paysages spectaculaires des monts de Cristal, et la certitude d'avoir contribué à la protection de ces trésors naturels.
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
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Nature</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion totale dans la nature sauvage du Congo, des forêts tropicales aux montagnes, en passant par le littoral atlantique. Chaque expérience est conçue pour vous faire découvrir la biodiversité exceptionnelle du bassin du Congo et les efforts de conservation qui la protègent.
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
                              lat={exp.id === 'parcs' ? 0.5 : 
                                   exp.id === 'faune' ? 0.0 :
                                   exp.id === 'ecosystemes' ? -4.0 :
                                   -3.5} 
                              lng={exp.id === 'parcs' ? 14.5 : 
                                   exp.id === 'faune' ? 15.0 :
                                   exp.id === 'ecosystemes' ? 12.0 :
                                   13.0} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Nature</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Forêt tropicale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt Tropicale</h5>
                          <p className="text-sm text-gray-700">Canopée dense du bassin du Congo</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600" 
                          alt="Gorilles" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Gorilles</h5>
                          <p className="text-sm text-gray-700">Observations dans leur habitat naturel</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1534188753412-9f0337dbaff5?w=600" 
                          alt="Monts de Cristal" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Monts de Cristal</h5>
                          <p className="text-sm text-gray-700">Chaîne montagneuse spectaculaire</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Observation nocturne</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Safari nocturne avec lampes frontales pour observer la faune nocturne. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Photographie animalière</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Session avec un photographe professionnel spécialisé en faune. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Randonnée prolongée</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Trekking de 2 jours avec bivouac en forêt. Supplément : 200€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Visite de projets communautaires</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Rencontre avec les projets de développement durable. Supplément : 60€/personne.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Lodges */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU CIRCUIT</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Lodges Écologiques en Pleine Nature</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏕️</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des lodges écologiques situés au cœur des parcs et réserves, offrant une immersion totale dans la nature. Chaque hébergement est conçu pour minimiser l'impact environnemental tout en offrant un confort essentiel. L'authenticité et la proximité avec la nature sont les maîtres-mots.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('conkouati')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'conkouati' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PARC CONKOUATI (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('odzala')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'odzala' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PARC ODZALA (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('dimonika')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'dimonika' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      RÉSERVE DIMONIKA (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Conkouati */}
                  {activeHotelTab === 'conkouati' && (
                    <div className="space-y-16">
                      {/* Conkouati Ecolodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                                alt="Conkouati Ecolodge" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                LODGE ÉCOLOGIQUE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Conkouati Ecolodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              En bordure du Parc Conkouati-Douli, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>En pleine forêt tropicale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Architecture écologique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦜</span>
                                <span className="text-sm font-semibold">Observation faune</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale bio</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Conkouati Ecolodge est construit avec des matériaux locaux dans le respect total de l'environnement. Les bungalows sont simples mais confortables, avec salle de bain privée et eau chaude solaire. L'électricité est fournie par des panneaux solaires. Le restaurant propose une cuisine à base de produits locaux et de saison. Le lodge s'engage dans la conservation de la biodiversité et le développement communautaire. Une immersion totale dans la nature congolaise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Odzala */}
                  {activeHotelTab === 'odzala' && (
                    <div className="space-y-16">
                      {/* Odzala Discovery Camp */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600" 
                              alt="Odzala Discovery Camp" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Odzala Discovery Camp</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Au cœur du Parc National d'Odzala-Kokoua, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🦍</span>
                                <span>Proche des groupes de gorilles</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Campement rustique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔭</span>
                                <span className="text-sm font-semibold">Plateforme d'observation</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp le soir</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Odzala Discovery Camp est un campement rustique situé au cœur du parc, à proximité des zones d'observation des gorilles. Les chalets en bois sont simples mais confortables, avec lit moustiquaire et salle de bain commune. L'électricité est limitée (groupe électrique quelques heures par jour). Le camp dispose d'une plateforme d'observation surplombant un bai fréquenté par les animaux. Les repas sont pris en commun autour d'une grande table. L'atmosphère est celle d'un véritable camp d'exploration.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Dimonika */}
                  {activeHotelTab === 'dimonika' && (
                    <div className="space-y-16">
                      {/* Dimonika Mountain Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1534188753412-9f0337dbaff5?w=600" 
                              alt="Dimonika Mountain Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Dimonika Mountain Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              En bordure de la Réserve de Biosphère de Dimonika, République du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏔️</span>
                                <span>Vue sur les monts de Cristal</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">♻️</span>
                                <span className="text-sm font-semibold">Éco-construction</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌄</span>
                                <span className="text-sm font-semibold">Terrasse panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💧</span>
                                <span className="text-sm font-semibold">Eau de source naturelle</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Dimonika Mountain Lodge est construit en pierre et bois locaux, parfaitement intégré dans le paysage montagneux. Les chambres sont spacieuses avec vue sur la forêt ou les montagnes. Le lodge dispose d'une grande terrasse panoramique idéale pour l'observation des oiseaux et des couchers de soleil. L'eau provient d'une source naturelle. Le restaurant propose une cuisine fusion mêlant saveurs locales et internationales. Un hébergement confortable après les jours d'aventure dans les parcs.
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
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD) Vol inclus</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$2,699</span>
                    <span className="text-xl line-through text-gray-500">$2,999</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO -300$</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet avec vols</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vols internes, tous transferts, guide naturaliste, hébergements, visites, droits d'entrée parcs
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
                    <option value="2026-04-15">15 Avril 2026</option>
                    <option value="2026-05-13">13 Mai 2026</option>
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2027-04-14">14 Avril 2027</option>
                    <option value="2027-05-12">12 Mai 2027</option>
                    <option value="2027-06-09">9 Juin 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs d'avril à juin (saison sèche optimale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ECONOMISEZ 300$ PAR PERSONNE</strong> sur les départs 2026
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
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
                    Nos experts nature vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-4.0,17.0,2.0&layer=mapnik&marker=0.5,14.5&marker=-4.0,11.8"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Congo Nature miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Congo Nature - 10 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Conkouati → Odzala → Dimonika
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
                    <span>Vols internes Brazzaville-Conkouati-Odzala</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts 4x4 dans les parcs</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide naturaliste francophone</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>9 nuits en lodges écologiques</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le circuit</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Permis d'observation gorilles</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
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
                    <span className="font-bold text-green-700">Modéré à difficile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs avril à juin</span>
                    <span className="font-bold text-green-700">Saison sèche optimale</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide naturaliste</span>
                    <span className="font-bold text-green-700">Spécialiste biodiversité</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, autres recommandés selon avis médical
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Voyageur</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un voyage exceptionnel pour les amoureux de nature. Observer les gorilles d'Odzala à quelques mètres restera un souvenir gravé à jamais. Les lodges écologiques sont parfaitement intégrés à l'environnement. Les guides sont d'une compétence rare. Une expérience authentique et responsable."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marie D., voyageuse 2025
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