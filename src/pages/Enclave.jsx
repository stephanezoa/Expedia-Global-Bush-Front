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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Cabinda et Delta du Congo</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-8.0,15.0,-4.0&layer=mapnik&marker=-8.8383,13.2344&marker=-5.5500,12.1900"
          style={{ border: 0 }}
          allowFullScreen
          title="Enclave de Cabinda et Delta du Congo - Angola"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/-6.5/12.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Luanda</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Cabinda</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Delta du Congo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plages de Cabinda</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Culture Tchokwé</span>
        </div>
      </div>
    </div>
  );
};

export default function Enclave() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('luanda');
  const [activeExperienceTab, setActiveExperienceTab] = useState('cabinda');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏝️', title: 'Enclave de Cabinda', desc: 'Découverte de cette région unique séparée du reste de l\'Angola' },
    { icon: '🌊', title: 'Delta du Congo', desc: 'Exploration du majestueux delta du fleuve Congo' },
    { icon: '🏖️', title: 'Plages Sauvages', desc: 'Plages préservées de l\'océan Atlantique' },
    { icon: '🌿', title: 'Mangroves', desc: 'Découverte des écosystèmes de mangroves uniques' },
    { icon: '👨‍👩‍👧‍👦', title: 'Culture Tchokwé', desc: 'Rencontre avec le peuple Tchokwé et ses traditions' },
    { icon: '🐬', title: 'Dauphins', desc: 'Observation des dauphins à bosse de l\'Atlantique' },
  ];

  const regions = [
    { 
      name: 'Luanda', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale dynamique de l\'Angola, point de départ du voyage',
      features: ['Arrivée internationale', 'Culture urbaine', 'Préparation voyage', 'Vol vers Cabinda']
    },
    { 
      name: 'Cabinda Ville', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville principale de l\'enclave, mélange de traditions et de modernité',
      features: ['Centre culturel', 'Marchés locaux', 'Histoire coloniale', 'Base exploration']
    },
    { 
      name: 'Plages de Cabinda', 
      color: 'bg-cyan-100', 
      textColor: 'text-cyan-800', 
      desc: 'Côte atlantique préservée avec plages de sable fin et cocotiers',
      features: ['Plages désertes', 'Baignade', 'Sports nautiques', 'Couchers de soleil']
    },
    { 
      name: 'Delta du Congo', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Majestueux delta où le fleuve Congo rencontre l\'océan Atlantique',
      features: ['Navigation en pirogue', 'Mangroves', 'Observation oiseaux', 'Pêche traditionnelle']
    },
    { 
      name: 'Forêts de Maiombe', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Forêt tropicale humide riche en biodiversité',
      features: ['Randonnées forestières', 'Primates', 'Plantes médicinales', 'Écosystème unique']
    },
    { 
      name: 'Communautés Tchokwé', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Rencontre avec le peuple Tchokwé, gardien des traditions',
      features: ['Art Tchokwé', 'Danses traditionnelles', 'Artisanat', 'Médecine traditionnelle']
    },
  ];

  const experiences = [
    { 
      id: 'cabinda',
      name: 'Découverte de Cabinda', 
      icon: '🏝️',
      desc: 'Immersion dans l\'enclave unique de Cabinda, entre traditions et modernité',
      highlights: ['Enclave unique', 'Culture métissée', 'Plages préservées', 'Histoire riche'],
      details: 'Cabinda est une enclave angolaise séparée du reste du pays par la République Démocratique du Congo. Cette singularité géographique lui confère une identité culturelle unique, mélange d\'influences angolaises, congolaises et portugaises. Vous découvrirez la ville de Cabinda avec ses bâtiments coloniaux, ses marchés animés et son port de pêche. Les plages de l\'enclave, encore préservées du tourisme de masse, offrent des paysages de rêve avec leurs cocotiers et leur sable fin. L\'histoire riche de Cabinda, marquée par le commerce et les échanges culturels, se révèle à travers ses monuments et ses traditions vivantes.'
    },
    { 
      id: 'delta',
      name: 'Delta du Congo', 
      icon: '🌊',
      desc: 'Exploration du majestueux delta où le fleuve Congo se jette dans l\'océan',
      highlights: ['Delta majestueux', 'Navigation pirogue', 'Mangroves', 'Biodiversité'],
      details: 'Le delta du Congo est l\'un des plus grands deltas d\'Afrique, où le puissant fleuve Congo rencontre l\'océan Atlantique. Cette zone humide d\'une richesse exceptionnelle est composée d\'un réseau complexe de bras d\'eau, d\'îles et de mangroves. En pirogue traditionnelle, vous naviguerez à travers ce labyrinthe aquatique, découvrant un écosystème unique abritant une faune et une flore remarquables : oiseaux aquatiques, singes des mangroves, et avec un peu de chance, lamantins. Les communautés de pêcheurs qui vivent dans le delta partageront avec vous leurs techniques de pêche traditionnelle et leur connaissance intime de cet environnement.'
    },
    { 
      id: 'tchokwe',
      name: 'Culture Tchokwé', 
      icon: '👨‍👩‍👧‍👦',
      desc: 'Rencontre avec le peuple Tchokwé et découverte de son art et traditions',
      highlights: ['Art Tchokwé', 'Masques traditionnels', 'Danses rituelles', 'Sculptures'],
      details: 'Le peuple Tchokwé est célèbre pour son art riche et complexe, notamment ses masques rituels et ses sculptures. Vous rencontrerez une communauté Tchokwé qui vous initiera à ses traditions ancestrales : démonstration de danses rituelles portant les célèbres masques Mwana Pwo et Cihongo, fabrication d\'objets artisanaux, présentation des techniques de sculpture sur bois. Les Tchokwé possèdent également une médecine traditionnelle très élaborée basée sur les plantes de la forêt. Cette immersion culturelle vous permettra de comprendre l\'organisation sociale complexe de ce peuple et sa relation spirituelle avec la nature.'
    },
    { 
      id: 'nature',
      name: 'Nature et Biodiversité', 
      icon: '🌿',
      desc: 'Découverte des écosystèmes uniques de Cabinda : forêts, mangroves et côtes',
      highlights: ['Forêt de Maiombe', 'Mangroves', 'Plages sauvages', 'Observation dauphins'],
      details: 'La région de Cabinda offre une diversité écologique exceptionnelle. La forêt de Maiombe, forêt tropicale humide partagée avec le Congo et le Gabon, abrite une biodiversité riche avec de nombreuses espèces endémiques. Les mangroves du delta du Congo constituent un écosystème vital pour la reproduction des poissons et des crustacés. Les plages préservées de l\'Atlantique sont des lieux de ponte pour les tortues marines. En bateau, vous pourrez observer les dauphins à bosse de l\'Atlantique qui fréquentent ces eaux riches. Cette expérience naturaliste vous fera découvrir la richesse écologique souvent méconnue de cette région.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de Cabinda */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Enclave de Cabinda et Delta du Congo</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🏝️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              10 jours de découverte entre l'enclave unique de Cabinda et le majestueux delta du fleuve Congo
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
            <span className="text-2xl">🌴</span>
            <span className="text-sm font-semibold">ANGOLA | ENCLAVE UNIQUE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plages de Cabinda" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Plages préservées de l'enclave de Cabinda</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Delta du Congo" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Mangroves du delta du fleuve Congo</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Culture Tchokwé" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Art et culture du peuple Tchokwé</p>
            </div>
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
                <span className="bg-blue-600 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO5</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - Luanda à Cabinda</span>
                <button className="ml-auto border-2 border-blue-600 text-blue-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une découverte complète de l'enclave unique de Cabinda et du delta du Congo</span>
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
                {/* Galerie d'images descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Cabinda" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Plages de sable fin de l'enclave de Cabinda</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Delta du Congo" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Navigation dans les mangroves du delta du Congo</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce voyage de 10 jours vous emmène à la découverte de l'enclave unique de Cabinda et du majestueux delta du fleuve Congo. Une immersion complète entre plages préservées, écosystèmes de mangroves uniques, forêts tropicales et rencontres authentiques avec le peuple Tchokwé.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure débutera à Luanda, capitale dynamique de l'Angola, d'où vous prendrez un vol vers Cabinda. Pendant 8 jours, vous explorerez cette enclave singulière : découverte des plages sauvages de l'Atlantique, navigation dans le delta du Congo à la rencontre des communautés de pêcheurs, exploration de la forêt de Maiombe, et immersion dans la riche culture Tchokwé. Un voyage de découverte complet qui combine nature préservée, culture authentique et histoire fascinante.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Cabinda" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Cabinda : une enclave unique entre océan Atlantique et forêt tropicale</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux souhaitant découvrir une région méconnue d'Afrique, riche en contrastes et en authenticité. Accompagné de guides locaux francophones, vous découvrirez les multiples facettes de Cabinda : son identité culturelle unique, ses paysages préservés, sa biodiversité remarquable. Un voyage respectueux des populations locales et de l'environnement, qui contribue au développement d'un tourisme responsable dans cette région.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">Les Atouts du Voyage</h3>
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
                  
                  {/* Images supplémentaires */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Delta du Congo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Tchokwé" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Voyage</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Cabinda" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Découverte de l'enclave de Cabinda</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Delta du Congo" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Exploration du delta du Congo</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Découverte de l'enclave unique</strong> de Cabinda et de son identité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Navigation dans le delta</strong> du Congo en pirogue traditionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Rencontre avec le peuple Tchokwé</strong> et découverte de son art</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Plages préservées</strong> de l'océan Atlantique</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Exploration de la forêt de Maiombe</strong> et de sa biodiversité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Observation des dauphins</strong> à bosse de l'Atlantique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Dégustation de cuisine locale</strong> à base de poissons et fruits de mer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Découverte des mangroves</strong> et de leur écosystème unique</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur Cabinda avec image */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Cabinda" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Cabinda : Une Enclave Singulière</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Cabinda est une province angolaise séparée du reste du pays par une bande de 60 km de territoire de la République Démocratique du Congo. Cette situation géographique unique lui confère une identité culturelle distincte, mélange d'influences angolaises, congolaises et portugaises. D'une superficie de 7 270 km², Cabinda est riche en ressources naturelles (pétrole, bois, café, cacao) et possède une façade maritime de 90 km sur l'océan Atlantique. Son histoire, marquée par le royaume de N'Goyo puis par la colonisation portugaise, a créé une culture métissée unique. Aujourd'hui, Cabinda préserve ses traditions tout en développant son économie, notamment grâce au tourisme qui met en valeur ses plages préservées, sa forêt tropicale et sa culture riche.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Enclave unique</span>
                          <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Culture métissée</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Plages préservées</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Art Tchokwé</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Cabinda" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">CABINDA EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie</div>
                        <div className="text-3xl font-bold">7,270</div>
                        <div className="text-xs text-white/80">km² (enclave)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Côte maritime</div>
                        <div className="text-3xl font-bold">90</div>
                        <div className="text-xs text-white/80">km sur l'Atlantique</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Population</div>
                        <div className="text-3xl font-bold">820K</div>
                        <div className="text-xs text-white/80">habitants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Pluviométrie</div>
                        <div className="text-3xl font-bold">1,400</div>
                        <div className="text-xs text-white/80">mm/an (tropical)</div>
                      </div>
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
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Delta du Congo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Complet Luanda-Cabinda</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce voyage vous emmène de Luanda, capitale bouillonnante de l'Angola, à l'enclave unique de Cabinda via un vol intérieur. À Cabinda, vous découvrirez la ville et ses environs : les plages préservées de l'Atlantique, le delta du Congo avec ses mangroves et ses communautés de pêcheurs, la forêt tropicale de Maiombe et ses richesses naturelles, et les villages Tchokwé avec leur culture ancestrale. L'itinéraire alterne découvertes culturelles, moments de détente sur les plages, explorations naturelles et rencontres humaines pour une expérience complète et authentique.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours à Cabinda</div>
                            <div className="text-blue-600 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vol Luanda-Cabinda</div>
                            <div className="text-blue-600 font-bold">Inclus</div>
                          </div>
                          <div>
                            <div className="font-semibold">Navigations en pirogue</div>
                            <div className="text-blue-600 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides francophones</div>
                            <div className="text-blue-600 font-bold">2+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Luanda' 
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Cabinda Ville'
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Plages de Cabinda'
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Delta du Congo'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Forêts de Maiombe'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={region.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3">
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section galerie supplémentaire */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Galerie Cabinda et Delta</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plages 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Delta 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Tchokwé" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Ville de Cabinda" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Luanda</div>
                      <div className="text-xs opacity-80">Arrivée, découverte capitale, préparation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Cabinda Ville & Plages</div>
                      <div className="text-xs opacity-80">Découverte ville, plages, culture locale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Delta du Congo</div>
                      <div className="text-xs opacity-80">Navigation, mangroves, pêcheurs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-10</div>
                      <div className="text-sm">Forêt & Culture</div>
                      <div className="text-xs opacity-80">Maiombe, Tchokwé, retour Luanda</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-cyan-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau facile à moyen (2/5)</strong> : Ce voyage de découverte comporte des activités adaptées à tous : visites culturelles, balades sur les plages, navigations tranquilles en pirogue, et randonnées légères en forêt. Une condition physique normale est suffisante. L'âge minimum recommandé est de 12 ans (accompagné). Le climat est tropical avec chaleur et humidité. Les déplacements se font en véhicule confortable et en pirogue.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Condition physique normale suffisante</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Navigations tranquilles en pirogue</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Adaptabilité au climat tropical humide</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>👟</span>
                              <span>Chaussures confortables pour la marche</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire indice élevé</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🩳</span>
                              <span>Vêtements légers et respirants</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🦟</span>
                              <span>Anti-moustiques</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🌧️</span>
                              <span>Veste imperméable légère</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🕶️</span>
                              <span>Lunettes de soleil</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo étanche</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale personnelle</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement voyage" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Delta du Congo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Voyage de Découverte ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte d'une région unique et méconnue</h4>
                            <p className="text-sm text-gray-700">
                              Cabinda, enclave séparée du reste de l'Angola, offre une identité culturelle distincte.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Combinaison parfaite nature-culture</h4>
                            <p className="text-sm text-gray-700">
                              Plages, delta, forêt tropicale et rencontres authentiques avec le peuple Tchokwé.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accompagnement par des guides locaux francophones</h4>
                            <p className="text-sm text-gray-700">
                              Guides connaissant parfaitement la région et ses secrets.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Tourisme responsable qui valorise les communautés</h4>
                            <p className="text-sm text-gray-700">
                              Votre voyage contribue directement à l'économie locale.
                            </p>
                          </div>
                        </div>
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
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
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
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international Quatro de Fevereiro de Luanda. Accueil par votre guide francophone. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, première découverte de Luanda avec une promenade le long de la baie de Luanda (Marginal), célèbre pour sa promenade en front de mer. Visite de la forteresse de São Miguel, construite en 1576 et offrant un panorama sur la ville. Dîner de bienvenue dans un restaurant local avec spécialités angolaises (poissons, poulet moamba). Nuit à l'hôtel à Luanda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Promenade Marginal - Forteresse São Miguel - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Luanda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Luanda et vol vers Cabinda */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">LUANDA ET VOL VERS CABINDA</span>
                          <span className="text-sm text-gray-600">Découverte de Luanda puis envol pour l'enclave de Cabinda</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Matinée à Luanda, après-midi à Cabinda</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de Luanda. Visite du musée national d'Anthropologie qui présente les cultures traditionnelles angolaises. Promenade dans le marché de Benfica, l'un des plus animés de la ville. Déjeuner de spécialités locales (calulu, funge). Transfert à l'aéroport pour le vol vers Cabinda (environ 1h30 de vol). Arrivée à l'aéroport de Cabinda. Accueil par votre guide local. Transfert à votre hôtel en centre-ville. Installation. Premier contact avec Cabinda avec une promenade en fin de journée dans le centre historique. Dîner dans un restaurant de fruits de mer. Nuit à l'hôtel à Cabinda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Musée Anthropologie - Marché Benfica - Vol Luanda-Cabinda - Transfert hôtel - Première découverte Cabinda
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Cabinda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Découverte de Cabinda Ville */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DÉCOUVERTE DE CABINDA VILLE</span>
                          <span className="text-sm text-gray-600">Immersion dans la ville et son histoire unique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée culturelle à Cabinda</h4>
                            <p className="text-justify mb-4">
                              Journée complète consacrée à la découverte de la ville de Cabinda. Visite du palais du gouvernement, de la cathédrale Notre-Dame-de-l'Immaculée-Conception, et du musée régional de Cabinda qui retrace l'histoire de l'enclave. Promenade dans le marché municipal, lieu d'animation et de rencontres. Déjeuner dans un restaurant local avec spécialités à base de poisson et fruits de mer. Après-midi : découverte du quartier résidentiel de Chiazi et de son architecture coloniale. Rencontre avec des représentants de la communauté pour une introduction à la culture Tchokwé. En fin de journée, balade sur la plage de Cabinda pour admirer le coucher de soleil. Dîner libre. Nuit à l'hôtel à Cabinda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite monuments - Musée régional - Marché municipal - Rencontre communauté - Plage coucher soleil
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Cabinda Ville" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Plages de Cabinda */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PLAGES DE CABINDA</span>
                          <span className="text-sm text-gray-600">Découverte des plages préservées de l'Atlantique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée balnéaire</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée aux plages de Cabinda. Départ pour la plage de Malembo, l'une des plus belles de l'enclave, avec son sable fin et ses cocotiers. Baignade dans les eaux de l'Atlantique (sous surveillance, courants possibles). Promenade le long de la plage. Déjeuner pique-nique sous les cocotiers avec poisson grillé. Après-midi : continuation vers la plage de Lândana, plus sauvage. Observation des pêcheurs artisans et de leurs techniques traditionnelles. Possibilité de faire une promenade en bateau le long de la côte (option selon conditions). En fin d'après-midi, retour à Cabinda ville. Dîner dans un restaurant de poissons. Nuit à l'hôtel à Cabinda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Plage Malembo - Baignade - Plage Lândana - Pêcheurs artisans - Retour Cabinda
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Plages Cabinda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Première approche du delta du Congo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PREMIÈRE APPROCHE DU DELTA DU CONGO</span>
                          <span className="text-sm text-gray-600">Navigation dans les premiers bras du delta</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée delta</h4>
                            <p className="text-justify mb-4">
                              Départ matinal vers l'embouchure du fleuve Congo. Embarquement en pirogue traditionnelle pour une première navigation dans le delta. Découverte des paysages de mangroves, écosystème unique où l'eau douce du fleuve rencontre l'eau salée de l'océan. Observation des oiseaux aquatiques (hérons, aigles pêcheurs, martins-pêcheurs). Visite d'un village de pêcheurs installé sur pilotis. Rencontre avec les habitants et découverte de leur mode de vie adapté au milieu aquatique. Déjeuner pique-nique au bord de l'eau. Après-midi : continuation de la navigation dans les chenaux du delta. Retour à Cabinda en fin de journée. Dîner et nuit à l'hôtel à Cabinda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation pirogue - Mangroves - Observation oiseaux - Village pêcheurs - Retour Cabinda
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Delta du Congo" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Exploration approfondie du delta */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION APPROFONDIE DU DELTA</span>
                          <span className="text-sm text-gray-600">Journée complète dans le cœur du delta du Congo</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Immersion delta</h4>
                            <p className="text-justify mb-4">
                              Journée complète d'exploration du delta. Départ très tôt en pirogue vers les zones les plus reculées. Navigation à travers un labyrinthe de chenaux, de bras morts et d'îles flottantes. Arrêt dans une communauté de pêcheurs isolée. Participation à des activités de pêche traditionnelle (avec les habitants). Observation de la faune spécifique aux mangroves (crabes, poissons sauteurs, avec un peu de chance lamantins). Déjeuner préparé par les pêcheurs avec le produit de la pêche du matin. Après-midi : continuation de l'exploration avec focus sur la photographie des paysages uniques. En fin de journée, navigation de retour. Dîner et nuit à l'hôtel à Cabinda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration delta reculé - Pêche traditionnelle - Communauté isolée - Photographie - Retour Cabinda
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Delta exploration" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Forêt de Maiombe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT DE MAIOMBE</span>
                          <span className="text-sm text-gray-600">Découverte de la forêt tropicale humide et de sa biodiversité</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée forestière</h4>
                            <p className="text-justify mb-4">
                              Départ pour la forêt de Maiombe, forêt tropicale humide partagée entre l'Angola, le Congo et le Gabon. Randonnée accompagnée d'un guide forestier local. Découverte de la biodiversité exceptionnelle de cette forêt : essences d'arbres rares, lianes, plantes médicinales. Observation des primates (avec un peu de chance, chimpanzés ou colobes). Arrêt près d'une cascade naturelle. Déjeuner pique-nique en forêt. Après-midi : rencontre avec un guérisseur traditionnel qui expliquera l'usage des plantes médicinales de la forêt. Découverte des techniques de collecte de produits forestiers (miel sauvage, fruits). Retour à Cabinda en fin de journée. Dîner et nuit à l'hôtel à Cabinda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Randonnée Maiombe - Biodiversité - Primates - Guérisseur traditionnel - Retour Cabinda
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forêt Maiombe" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Culture Tchokwé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CULTURE TCHOKWÉ</span>
                          <span className="text-sm text-gray-600">Immersion dans la culture et l'art du peuple Tchokwé</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée culturelle Tchokwé</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à la culture Tchokwé. Visite d'un village Tchokwé à l'extérieur de Cabinda. Accueil par le chef du village et les anciens. Découverte de l'organisation sociale Tchokwé, de leur histoire et de leurs traditions. Démonstration de danses rituelles avec les célèbres masques Mwana Pwo (représentant la beauté féminine) et Cihongo (représentant le pouvoir). Atelier d'initiation à la sculpture sur bois avec un artisan local. Déjeuner traditionnel préparé par les femmes du village. Après-midi : présentation de l'art Tchokwé (sculptures, masques, objets rituels) et explication de leur signification symbolique. En fin de journée, retour à Cabinda. Dîner d'adieu avec spécialités locales. Nuit à l'hôtel à Cabinda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Village Tchokwé - Danses masquées - Atelier sculpture - Art traditionnel - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Culture Tchokwé" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Dernière journée à Cabinda */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DERNIÈRE JOURNÉE À CABINDA</span>
                          <span className="text-sm text-gray-600">Synthèse et dernières découvertes, préparation retour</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de synthèse</h4>
                            <p className="text-justify mb-4">
                              Matinée libre ou activité au choix selon les préférences du groupe : retour sur une plage préférée, visite complémentaire à Cabinda ville, ou temps libre pour les achats de souvenirs (artisanat Tchokwé, café de Cabinda). Déjeuner libre. Après-midi : session de synthèse avec votre guide. Retour sur les découvertes de la semaine, discussion sur les spécificités de Cabinda, échange sur les expériences vécues. Temps libre pour préparer les bagages. En fin d'après-midi, transfert à l'aéroport de Cabinda pour le vol retour vers Luanda. Arrivée à Luanda et transfert à l'hôtel. Dîner libre. Nuit à l'hôtel à Luanda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Matinée libre - Synthèse avec guide - Préparation départ - Vol Cabinda-Luanda - Transfert hôtel
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Cabinda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Départ de Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE LUANDA</span>
                          <span className="text-sm text-gray-600">Fin du voyage, transfert à l'aéroport international</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international, matinée libre pour les derniers achats de souvenirs à Luanda (artisanat, café, épices) ou visite optionnelle du musée des Forces Armées. Déjeuner libre. En fonction de l'horaire de votre vol, transfert à l'aéroport international Quatro de Fevereiro de Luanda. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette découverte complète de Cabinda et du delta du Congo : l'enclave unique aux plages préservées, le majestueux delta aux mangroves mystérieuses, la forêt tropicale riche en biodiversité, et les rencontres authentiques avec le peuple Tchokwé et ses traditions ancestrales.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Petit-déjeuner - Temps libre / visite optionnelle - Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport Luanda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Galerie supplémentaire de l'itinéraire */}
                <div className="mt-12 pt-8 border-t-2 border-gray-300">
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts du Voyage</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plages Cabinda" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Delta du Congo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Tchokwé" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt Maiombe" 
                        className="w-full h-full object-cover"
                      />
                    </div>
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
                      <span className="text-white text-2xl">🏝️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-600">Les Expériences de Découverte</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce voyage est une immersion complète dans l'enclave unique de Cabinda et le majestueux delta du Congo. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région méconnue, de la découverte culturelle à l'exploration naturelle.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Cabinda" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Delta du Congo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Tchokwé" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

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
                            <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                              <img 
                                src={
                                  exp.id === 'cabinda' 
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'delta'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'tchokwe'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'cabinda' ? -5.55 : 
                                   exp.id === 'delta' ? -5.7 :
                                   exp.id === 'tchokwe' ? -5.6 :
                                   -5.65} 
                              lng={exp.id === 'cabinda' ? 12.19 : 
                                   exp.id === 'delta' ? 12.3 :
                                   exp.id === 'tchokwe' ? 12.25 :
                                   12.2} 
                              height="200px" 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Nature et Culture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                          alt="Cabinda" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Enclave de Cabinda</h5>
                          <p className="text-sm text-gray-700">Découverte de cette région unique</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Delta du Congo" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Delta du Congo</h5>
                          <p className="text-sm text-gray-700">Navigation dans les mangroves</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?w=600" 
                          alt="Culture Tchokwé" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Art Tchokwé</h5>
                          <p className="text-sm text-gray-700">Masques et sculptures traditionnelles</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Delta" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forêt" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Plages" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-cyan-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Observation des dauphins en bateau</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Sortie en mer pour observer les dauphins à bosse de l'Atlantique. Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier de sculpture Tchokwé approfondi</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Session de 3 heures avec un maître sculpteur Tchokwé. Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en lodge écologique dans le delta</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience d'une nuit dans un lodge sur pilotis dans les mangroves. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Extension plongée avec tuba</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Découverte des fonds marins des plages de Cabinda. Supplément : 90€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Activités optionnelles" 
                          className="w-full h-full object-cover"
                        />
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU VOYAGE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels Confortables et Accueil Authentique</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                      <span className="text-blue-600 text-2xl">🏨</span>
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Luanda" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Cabinda" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Lodge écologique" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce voyage privilégie des hébergements confortables et bien situés pour profiter au maximum de votre séjour. À Luanda et Cabinda, vous séjournerez dans des hôtels 3* et 4* offrant tout le confort moderne. Ces établissements sont choisis pour leur emplacement pratique, leur qualité de service et leur ambiance agréable. Tous offrent des chambres climatisées avec salle de bain privée, wifi, et des restaurants proposant une cuisine locale et internationale.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('luanda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'luanda' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUANDA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('cabinda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'cabinda' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CABINDA (7 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Luanda */}
                  {activeHotelTab === 'luanda' && (
                    <div className="space-y-16">
                      {/* Hotel Presidente Luanda */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                                alt="Hotel Presidente Luanda" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Presidente Luanda</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baie de Luanda, Luanda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Vue sur la baie de Luanda</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Spa et fitness</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Presidente Luanda est un établissement moderne situé en front de mer avec une vue magnifique sur la baie de Luanda. Les chambres spacieuses sont climatisées et équipées de lits confortables, salle de bain privée, wifi haute vitesse, et minibar. L'hôtel dispose de deux restaurants (cuisine internationale et spécialités angolaises), d'un bar avec terrasse sur la baie, d'une piscine, d'un spa et d'une salle de fitness. Son emplacement est idéal pour découvrir Luanda à pied. Service de qualité et personnel francophone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Cabinda */}
                  {activeHotelTab === 'cabinda' && (
                    <div className="space-y-16">
                      {/* Hotel Maiombe */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                              alt="Hotel Maiombe" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Maiombe</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Cabinda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Cabinda</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📶</span>
                                <span className="text-sm font-semibold">Wifi gratuit</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Maiombe est l'hôtel de référence de Cabinda, situé en plein centre-ville. Les chambres sont confortables avec climatisation, salle de bain privée, TV satellite et wifi. L'hôtel dispose d'un agréable jardin tropical avec piscine, d'un restaurant réputé pour ses fruits de mer frais, et d'un bar. Le personnel est attentif et parle français. L'emplacement est pratique pour découvrir Cabinda à pied et se trouve à proximité des principaux sites d'intérêt. Un hébergement idéal pour explorer l'enclave de Cabinda.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Voyage</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Cabinda" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Plages préservées de l'enclave de Cabinda</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-600">$2,999</span>
                    <span className="text-xl line-through text-gray-500">$2,799</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Voyage complet</div>
                  <div className="mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Vol Luanda-Cabinda aller-retour, guide francophone, hébergements, tous repas, navigations, visites
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Réservez avant le 30 juin 2026 et économisez 200$ par personne
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
                    <option value="2026-03-12">12 Mars 2026</option>
                    <option value="2026-04-09">9 Avril 2026</option>
                    <option value="2026-05-07">7 Mai 2026</option>
                    <option value="2026-06-04">4 Juin 2026</option>
                    <option value="2026-07-02">2 Juillet 2026</option>
                    <option value="2026-07-30">30 Juillet 2026</option>
                    <option value="2026-08-27">27 Août 2026</option>
                    <option value="2026-09-24">24 Septembre 2026</option>
                    <option value="2026-10-22">22 Octobre 2026</option>
                    <option value="2026-11-19">19 Novembre 2026</option>
                    <option value="2026-12-17">17 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année (meilleure période : mars à novembre)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>VOYAGE DÉCOUVERTE</strong> limité à 10 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste de la région</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur le voyage ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts de l'Angola vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-8.0,15.0,-4.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Cabinda miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Enclave de Cabinda - 10 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Luanda → Vol → Cabinda → Delta du Congo
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
                    <span>Vol Luanda-Cabinda aller-retour</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>9 nuits en hôtels 3*/4*</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Navigations en pirogue delta</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Cabinda" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du voyage</span>
                    <span className="font-bold text-blue-600">Facile à moyen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-blue-600">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs toute l'année</span>
                    <span className="font-bold text-blue-600">Climat tropical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-blue-600">Culture et nature</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-blue-600">10 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616c113a1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageuse" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Témoignage Voyageuse</h4>
                    <p className="text-xs text-gray-600">Marie D., enseignante 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un voyage fascinant dans une région méconnue. Cabinda est une véritable découverte : plages de rêve, delta du Congo majestueux, culture Tchokwé riche et authentique. Les guides étaient excellents, très connaisseurs de la région. L'organisation était parfaite, avec un bon équilibre entre découvertes culturelles, moments nature et détente. Une expérience unique qui m'a fait découvrir une autre facette de l'Angola."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Cabinda 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Delta 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Culture Tchokwé 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plages 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
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