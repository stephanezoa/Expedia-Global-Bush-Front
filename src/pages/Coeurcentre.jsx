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
        <h4 className="font-semibold text-center text-lg">Itinéraire Forêt de Lobaye</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=17.0,3.5,19.0,5.5&layer=mapnik&marker=4.3947,18.5582&marker=3.8833,17.95"
          style={{ border: 0 }}
          allowFullScreen
          title="Forêt de Lobaye - Centrafrique"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/4.0/18.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Bangui</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Forêt de Lobaye</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mbaïki</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Rencontres Pygmées</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Rivière Lobaye</span>
        </div>
      </div>
    </div>
  );
};

export default function Coeurcentre() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bangui');
  const [activeExperienceTab, setActiveExperienceTab] = useState('foret');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌳', title: 'Forêt de Lobaye', desc: 'Immersion dans l\'une des plus belles forêts d\'Afrique centrale' },
    { icon: '👥', title: 'Pygmées Aka', desc: 'Rencontre authentique avec le peuple autochtone de la forêt' },
    { icon: '🏛️', title: 'Bangui Capitale', desc: 'Découverte de la capitale centrafricaine et son histoire' },
    { icon: '🌿', title: 'Biodiversité', desc: 'Observation d\'une faune et flore tropicale exceptionnelle' },
    { icon: '🎵', title: 'Traditions', desc: 'Initiation aux chants, danses et artisanat traditionnels' },
    { icon: '🚙', title: 'Aventure', desc: 'Exploration en 4x4 des pistes forestières' },
  ];

  const regions = [
    { 
      name: 'Bangui', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale de la République Centrafricaine sur les rives de l\'Oubangui',
      features: ['Marchés colorés', 'Artisanat local', 'Histoire coloniale', 'Cuisine traditionnelle']
    },
    { 
      name: 'Forêt de Lobaye', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Vaste forêt tropicale au sud-ouest de Bangui, territoire des Pygmées Aka',
      features: ['Forêt dense', 'Pygmées Aka', 'Faune forestière', 'Plantes médicinales']
    },
    { 
      name: 'Mbaïki', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville principale de la région Lobaye, centre de l\'exploitation forestière',
      features: ['Exploitation bois', 'Plantations', 'Centre administratif', 'Marché local']
    },
    { 
      name: 'Villages Pygmées', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Communautés traditionnelles au cœur de la forêt',
      features: ['Habitations traditionnelles', 'Chasse collective', 'Cueillette', 'Rites ancestraux']
    },
    { 
      name: 'Rivière Lobaye', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Importante rivière traversant la région, source de vie et de transport',
      features: ['Navigation traditionnelle', 'Pêche', 'Baignade naturelle', 'Écosystème fluvial']
    },
    { 
      name: 'Plantations', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Cultures traditionnelles et plantations de la région',
      features: ['Café', 'Cacao', 'Bananes plantains', 'Manioc']
    },
  ];

  const experiences = [
    { 
      id: 'foret',
      name: 'Forêt de Lobaye', 
      icon: '🌳',
      desc: 'Immersion dans l\'une des plus belles forêts tropicales d\'Afrique centrale',
      highlights: ['Forêt tropicale humide', 'Biodiversité exceptionnelle', 'Écosystème préservé', 'Plantes médicinales'],
      details: 'La forêt de Lobaye est un joyau de la biodiversité centrafricaine. Cette vaste forêt tropicale humide abrite une flore et une faune exceptionnelles. Vous découvrirez des arbres centenaires, des lianes géantes, une canopée dense et une multitude d\'espèces végétales utilisées par les populations locales pour leurs vertus médicinales. Les randonnées en forêt vous permettront d\'apprécier la fraîcheur et la richesse de cet écosystème unique.'
    },
    { 
      id: 'pygmees',
      name: 'Pygmées Aka', 
      icon: '👥',
      desc: 'Rencontre authentique avec le peuple autochtone de la forêt de Lobaye',
      highlights: ['Peuple de la forêt', 'Traditions ancestrales', 'Chants et danses', 'Artisanat traditionnel'],
      details: 'Les Pygmées Aka sont les habitants historiques de la forêt de Lobaye. Ce peuple de chasseurs-cueilleurs vit en harmonie avec la forêt depuis des millénaires. Vous aurez l\'occasion de rencontrer des familles Aka, de découvrir leur mode de vie, leurs techniques de chasse et de cueillette, et d\'assister à des démonstrations de leurs célèbres chants polyphoniques classés au patrimoine culturel immatériel de l\'UNESCO. Une rencontre humaine rare et authentique.'
    },
    { 
      id: 'bangui',
      name: 'Bangui Capitale', 
      icon: '🏛️',
      desc: 'Découverte de la capitale centrafricaine et de son riche patrimoine',
      highlights: ['Marché central', 'Artisanat local', 'Histoire coloniale', 'Rives de l\'Oubangui'],
      details: 'Bangui, la capitale centrafricaine, s\'étend sur les rives du majestueux fleuve Oubangui. Vous découvrirez l\'histoire mouvementée de cette ville à travers ses différents quartiers, du centre colonial aux marchés animés. Vous visiterez le célèbre marché central, découvrirez l\'artisanat local (sculptures sur bois, vannerie, tissus) et comprendrez les défis et les espoirs de cette capitale africaine en pleine mutation.'
    },
    { 
      id: 'artisanat',
      name: 'Artisanat Local', 
      icon: '🎨',
      desc: 'Initiation aux techniques artisanales traditionnelles de la région',
      highlights: ['Sculpture sur bois', 'Vannerie', 'Tissage', 'Musique traditionnelle'],
      details: 'La région de Lobaye est réputée pour la qualité de son artisanat. Vous découvrirez les techniques traditionnelles de sculpture sur bois (masques, statues), de vannerie (paniers, nattes) et de tissage. Vous pourrez également vous initier à la musique traditionnelle avec des instruments locaux comme le sanza (piano à pouces) ou le tam-tam. Ces rencontres avec les artisans permettent de mieux comprendre la richesse culturelle de la région.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de forêt impressionnante */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇨🇫</span>
          <span>ESCAPES | RÉPUBLIQUE CENTRAFRICAINE</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Cœur de la Centrafrique : Bangui et la Forêt de Lobaye</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🌳</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              7 jours d'immersion au cœur de la forêt équatoriale à la rencontre des Pygmées Aka
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
            <span className="text-2xl">🌍</span>
            <span className="text-sm font-semibold">RCA | FORÊT ÉQUATORIALE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêt tropicale dense" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Forêt équatoriale de Lobaye</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rivière Lobaye" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Rivière Lobaye</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pygmées Aka" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Communauté Pygmée Aka</p>
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
                <span className="bg-red-700 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA1</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - Bangui à la Forêt de Lobaye</span>
                <button className="ml-auto border-2 border-red-700 text-red-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-red-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion authentique dans la forêt centrafricaine et ses traditions</span>
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
                {/* Galerie d'images descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Forêt de Lobaye" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Forêt tropicale de Lobaye</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Pygmées dans la forêt" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Communauté Pygmée Aka</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 7 jours vous emmène au cœur de la République Centrafricaine, de sa capitale Bangui aux profondeurs mystérieuses de la forêt de Lobaye. Une aventure authentique à la découverte d'un pays méconnu, de ses paysages forestiers préservés et de ses traditions ancestrales, notamment celles du peuple Pygmée Aka, gardien séculaire de la forêt équatoriale.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Bangui, capitale animée sur les rives du fleuve Oubangui, où vous découvrirez l'histoire et la culture centrafricaine. Vous partirez ensuite vers le sud-ouest, en direction de la forêt de Lobaye, l'une des plus belles forêts équatoriales d'Afrique centrale. Pendant 4 jours, vous serez immergé dans cet environnement préservé, rencontrant les communautés Pygmées Aka, découvrant leurs traditions de chasse et de cueillette, et apprenant leurs célèbres chants polyphoniques classés au patrimoine immatériel de l'UNESCO.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Paysage de forêt tropicale" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">La forêt de Lobaye : sanctuaire des traditions Pygmées</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs en quête d'authenticité, souhaitant découvrir une Afrique préservée et des rencontres humaines profondes. Accompagné de guides locaux et de membres des communautés Aka, vous vivrez des moments privilégiés de partage et de compréhension d'un mode de vie en harmonie avec la nature. Une expérience qui transforme le regard sur notre relation à l'environnement et aux cultures traditionnelles.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-red-50 border-l-4 border-red-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">Les Atouts du Voyage</h3>
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
                  
                  {/* Images supplémentaires */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Guide avec communauté" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Village traditionnel" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-red-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Circuit</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontre Pygmées" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Rencontre avec les Pygmées Aka</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Randonnée en forêt" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Randonnées dans la forêt tropicale</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Immersion dans la forêt</strong> de Lobaye, joyau de la biodiversité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Rencontre authentique</strong> avec le peuple Pygmée Aka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Découverte de Bangui</strong>, capitale sur le fleuve Oubangui</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Initiation aux chants</strong> polyphoniques classés UNESCO</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Apprentissage des techniques</strong> traditionnelles de chasse et cueillette</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Navigation sur la rivière</strong> Lobaye en pirogue traditionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Découverte de l'artisanat</strong> local (sculpture, vannerie, tissage)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 mt-1">•</span>
                        <span><strong>Randonnées accompagnées</strong> avec guides locaux expérimentés</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la Forêt de Lobaye avec image */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forêt de Lobaye" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">La Forêt de Lobaye : Sanctuaire des Pygmées Aka</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          La forêt de Lobaye s'étend sur plus de 20 000 km² au sud-ouest de la République Centrafricaine. Cette vaste forêt équatoriale abrite une biodiversité exceptionnelle et constitue le territoire traditionnel du peuple Pygmée Aka. Ces derniers, réputés pour leurs connaissances approfondies de la forêt et leurs célèbres chants polyphoniques, vivent en harmonie avec cet environnement depuis des millénaires. La forêt fournit tout ce dont ils ont besoin : nourriture, médicaments, matériaux de construction et cadre spirituel. Cette région est l'une des dernières où les traditions Pygmées restent vivaces.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Niveau facile à moyen</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Rencontres culturelles</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Forêt tropicale</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Traditions ancestrales</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Écotourisme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-red-700 to-orange-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Forêt tropicale" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">LA FORÊT DE LOBAYE EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie de la forêt</div>
                        <div className="text-3xl font-bold">20,000</div>
                        <div className="text-xs text-white/80">km² de forêt équatoriale</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Population Pygmée Aka</div>
                        <div className="text-3xl font-bold">30,000</div>
                        <div className="text-xs text-white/80">habitants environ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Espèces de mammifères</div>
                        <div className="text-3xl font-bold">60+</div>
                        <div className="text-xs text-white/80">dont éléphants de forêt</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Nuits en forêt</div>
                        <div className="text-3xl font-bold">4</div>
                        <div className="text-xs text-white/80">nuits d'immersion</div>
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
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Sentier dans la forêt" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours au Cœur de la Forêt Équatoriale</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de la capitale Bangui aux profondeurs de la forêt de Lobaye. Vous découvrirez d'abord l'animation de Bangui et son riche patrimoine culturel, avant de vous enfoncer dans la forêt équatoriale pour rencontrer les communautés Pygmées Aka. Les journées seront consacrées à la découverte des traditions forestières, aux randonnées dans la forêt primaire, et à l'apprentissage des techniques de survie en milieu tropical. Les déplacements se font en véhicule 4x4 sur les pistes forestières et en pirogue sur la rivière Lobaye.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours en forêt</div>
                            <div className="text-red-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Communautés visitées</div>
                            <div className="text-red-700 font-bold">3+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Randonnées guidées</div>
                            <div className="text-red-700 font-bold">5+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides locaux</div>
                            <div className="text-red-700 font-bold">2+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-red-700">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Bangui' 
                                    ? 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Forêt de Lobaye'
                                    ? 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Mbaïki'
                                    ? 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Villages Pygmées'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Rivière Lobaye'
                                    ? 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Culture et Nature</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Pygmées Aka" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat local" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt tropicale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rivière Lobaye" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-red-700 to-orange-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Bangui</div>
                      <div className="text-xs opacity-80">Arrivée, découverte capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-6</div>
                      <div className="text-sm">Forêt de Lobaye</div>
                      <div className="text-xs opacity-80">Immersion forêt, Pygmées Aka</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7</div>
                      <div className="text-sm">Retour Bangui</div>
                      <div className="text-xs opacity-80">Vol retour, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-orange-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau facile à moyen (2/5)</strong> : Ce circuit est accessible à tous en bonne santé générale. Les randonnées en forêt sont de niveau facile à moyen (2 à 4 heures maximum par jour). Certains déplacements se font sur des pistes forestières en 4x4. Une bonne adaptabilité aux conditions tropicales (chaleur, humidité) est nécessaire. L'âge minimum recommandé est de 12 ans.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Accessible à tous en bonne santé</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Randonnées légères en forêt</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600">●</span>
                              <span className="text-sm">Adaptabilité aux conditions tropicales</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de marche légères</span>
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
                              <span>📷</span>
                              <span>Appareil photo</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Anti-moustiques puissant</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale de base</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🩳</span>
                              <span>Vêtements légers et respirants</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎁</span>
                              <span>Petits cadeaux pour les communautés</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement de voyage" 
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
                          alt="Rencontre humaine" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Centrafricain ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-red-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Rencontre authentique avec les Pygmées Aka</h4>
                            <p className="text-sm text-gray-700">
                              Une des dernières occasions de rencontrer ce peuple dans son environnement traditionnel.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Forêt équatoriale préservée</h4>
                            <p className="text-sm text-gray-700">
                              Découverte d'un écosystème tropical encore peu visité par le tourisme.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Circuit court et accessible</h4>
                            <p className="text-sm text-gray-700">
                              7 jours seulement, parfait pour un premier contact avec l'Afrique centrale.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Tourisme responsable</h4>
                            <p className="text-sm text-gray-700">
                              Votre voyage contribue directement au développement des communautés locales.
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
                  {/* Jour 1 - Arrivée à Bangui */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
                          <span className="text-sm text-gray-600">Accueil et découverte de la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international M'Poko de Bangui. Accueil par votre guide francophone. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En début d'après-midi, première découverte de Bangui avec une visite du marché central, véritable kaléidoscope de couleurs, d'odeurs et de sons. Découverte de l'artisanat local et des produits de la forêt. Briefing sur le circuit. Dîner de bienvenue dans un restaurant traditionnel avec spécialités centrafricaines. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Visite marché central - Briefing - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Marché de Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Bangui et préparation */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BANGUI ET PRÉPARATION</span>
                          <span className="text-sm text-gray-600">Visite complète de la capitale et préparation au voyage en forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-red-700">Journée de découverte</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de Bangui : visite du Musée National Barthélémy Boganda retraçant l'histoire et les cultures de la RCA, promenade le long du fleuve Oubangui, découverte des quartiers historiques. Déjeuner dans un restaurant local. Après-midi : préparation du voyage en forêt, achat des derniers souvenirs à Bangui, vérification de l'équipement. Rencontre avec un membre d'une association de développement communautaire qui vous présentera les enjeux de la région de Lobaye. Dîner et nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite Musée National - Promenade fleuve Oubangui - Préparation voyage - Rencontre association
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Fleuve Oubangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers Mbaïki et première immersion */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS MBAÏKI</span>
                          <span className="text-sm text-gray-600">Transfert vers la forêt de Lobaye et première rencontre</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-red-700">Premier contact avec la forêt</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Bangui en direction de Mbaïki, principale ville de la région Lobaye (environ 2 heures de route). Arrêt en chemin pour découvrir les plantations de café et de cacao, piliers de l'économie locale. Arrivée à Mbaïki, installation à votre hébergement. Déjeuner avec produits locaux. Après-midi : première immersion en forêt avec une courte randonnée d'acclimatation accompagnée d'un guide local. Découverte des premiers arbres remarquables et initiation aux plantes médicinales. Dîner et nuit à Mbaïki.
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Bangui-Mbaïki - Découverte plantations - Randonnée d'acclimatation - Initiation plantes médicinales
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Route vers Mbaïki" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Rencontre avec les Pygmées Aka */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RENCONTRE PYGMÉES AKA</span>
                          <span className="text-sm text-gray-600">Immersion dans une communauté et découverte des traditions</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-red-700">Journée d'immersion culturelle</h4>
                            <p className="text-justify mb-4">
                              Journée exceptionnelle consacrée à la rencontre avec une communauté Pygmée Aka. Transfert en 4x4 puis à pied vers un village Aka en pleine forêt. Accueil traditionnel par les anciens du village. Découverte du mode de vie : habitat traditionnel, techniques de chasse à l'arc et à la sarbacane, cueillette des produits de la forêt. Initiation aux plantes médicinales utilisées depuis des générations. Déjeuner partagé avec la communauté. Après-midi : démonstration et participation aux célèbres chants polyphoniques Aka, classés au patrimoine culturel immatériel de l'UNESCO. Retour à Mbaïki en fin de journée. Dîner et nuit à Mbaïki.
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Rencontre communauté Aka - Techniques chasse et cueillette - Initiation plantes médicinales - Chants polyphoniques
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Communauté Pygmée Aka" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Randonnée en forêt et rivière Lobaye */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RANDONNÉE FORÊT ET RIVIÈRE</span>
                          <span className="text-sm text-gray-600">Exploration de la forêt primaire et navigation sur la rivière Lobaye</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-red-700">Journée nature</h4>
                            <p className="text-justify mb-4">
                              Départ matinal pour une randonnée guidée dans la forêt primaire de Lobaye. Découverte de la biodiversité exceptionnelle : arbres géants, lianes, orchidées, observation des oiseaux tropicaux. Votre guide local partagera ses connaissances sur l'écosystème forestier. Pique-nique en forêt au bord d'une clairière. Après-midi : descente de la rivière Lobaye en pirogue traditionnelle guidée par des bateliers locaux. Découverte de la vie riveraine, observation de la faune aquatique et des oiseaux d'eau. Possibilité de baignade dans les eaux claires de la rivière. Retour à Mbaïki en fin d'après-midi. Dîner et nuit à Mbaïki.
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Randonnée forêt primaire - Observation biodiversité - Navigation pirogue rivière Lobaye - Baignade naturelle
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Rivière Lobaye" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Artisanat et retour vers Bangui */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARTISANAT ET RETOUR BANGUI</span>
                          <span className="text-sm text-gray-600">Découverte des savoir-faire locaux et retour vers la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-red-700">Journée artisanale</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de l'artisanat local de la région Lobaye. Visite d'ateliers de sculpture sur bois (masques, statues), de vannerie (paniers, nattes) et de tissage. Rencontre avec les artisans et possibilité d'acheter des souvenirs directement aux producteurs. Déjeuner à Mbaïki. Après-midi : route de retour vers Bangui. Arrivée en fin d'après-midi, installation à l'hôtel. Temps libre pour se reposer. Soirée de clôture du circuit avec dîner dans un restaurant traditionnel et partage des expériences. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Découverte artisanat local - Route retour Bangui - Temps libre - Dîner de clôture
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Artisanat local" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ de Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE BANGUI</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et fin du circuit</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-red-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international, matinée libre pour les derniers achats de souvenirs ou visite optionnelle de Bangui (quartier de la mission, cathédrale, etc.). Déjeuner libre. Transfert à l'aéroport international M'Poko de Bangui en fonction de votre horaire de vol. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de la forêt de Lobaye, des rencontres authentiques avec les Pygmées Aka, et la satisfaction d'avoir découvert un pays méconnu mais riche en humanité et en traditions.
                            </p>
                            <div className="bg-red-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Temps libre - Derniers achats - Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport de Bangui" 
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts du Circuit</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontre Pygmées" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rivière Lobaye" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt tropicale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat local" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-red-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌳</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-red-700">Les Expériences Centrafricaines</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une immersion totale dans le monde de la forêt équatoriale centrafricaine et de ses habitants. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cet environnement exceptionnel, des rencontres humaines aux secrets de la forêt.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Pygmées Aka" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt dense" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rivière Lobaye" 
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
                            <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                              <img 
                                src={
                                  exp.id === 'foret' 
                                    ? 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'pygmees'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'bangui'
                                    ? 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'foret' ? 3.8833 : 
                                   exp.id === 'pygmees' ? 3.8 :
                                   exp.id === 'bangui' ? 4.3947 :
                                   3.9} 
                              lng={exp.id === 'foret' ? 17.95 : 
                                   exp.id === 'pygmees' ? 17.8 :
                                   exp.id === 'bangui' ? 18.5582 :
                                   18.0} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Forêt et Culture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Pygmées Aka" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Pygmées Aka</h5>
                          <p className="text-sm text-gray-700">Rencontre avec le peuple de la forêt</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600" 
                          alt="Forêt de Lobaye" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt de Lobaye</h5>
                          <p className="text-sm text-gray-700">Écosystème tropical préservé</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600" 
                          alt="Rivière Lobaye" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Rivière Lobaye</h5>
                          <p className="text-sm text-gray-700">Navigation traditionnelle en pirogue</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Artisanat local" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Randonnée en forêt" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bangui capitale" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-blue-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en campement forestier</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience unique de nuit en forêt avec les Pygmées Aka. Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Initiation à la chasse traditionnelle</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Apprentissage des techniques de chasse à l'arc et à la sarbacane. Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Visite d'un projet de reforestation</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Rencontre avec les acteurs de la conservation de la forêt. Supplément : 60€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier de cuisine traditionnelle</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Préparation et dégustation de plats centrafricains. Supplément : 50€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU CIRCUIT</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels et Auberges Locales</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-red-700 w-16 md:w-32"></span>
                      <span className="text-red-700 text-2xl">🏨</span>
                      <span className="h-px bg-red-700 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Bangui" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Auberge à Mbaïki" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Lodge en forêt" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements confortables et authentiques qui vous permettent de découvrir l'hospitalité centrafricaine. À Bangui, vous séjournerez dans un hôtel moderne en centre-ville. Dans la région de Lobaye, vous découvrirez des auberges locales au charme simple mais authentique, gérées par des familles locales. Tous les hébergements sont sélectionnés pour leur propreté, leur sécurité et leur situation géographique.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-red-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('mbaki')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'mbaki' 
                          ? 'bg-red-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MBAÏKI (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bangui */}
                  {activeHotelTab === 'bangui' && (
                    <div className="space-y-16">
                      {/* Hotel Oubangui Palace */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Oubangui Palace" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Oubangui Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Bangui, République Centrafricaine
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
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Oubangui Palace est l'un des établissements les plus réputés de Bangui. Situé en plein centre-ville, il offre un confort moderne avec des chambres climatisées, une connexion Wi-Fi, et un service de qualité. Le restaurant de l'hôtel propose une cuisine internationale et des spécialités centrafricaines. Sa terrasse offre une belle vue sur la ville. L'hôtel dispose également d'un service de sécurité 24h/24 et d'un personnel francophone attentif. Idéal pour découvrir Bangui dans les meilleures conditions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Mbaïki */}
                  {activeHotelTab === 'mbaki' && (
                    <div className="space-y-16">
                      {/* Auberge de la Forêt */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600" 
                              alt="Auberge de la Forêt" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Auberge de la Forêt</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Mbaïki, région Lobaye, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>En bordure de la forêt</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span className="text-sm font-semibold">Gérée par une famille locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine maison locale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Auberge de la Forêt est un établissement familial situé en bordure de la forêt de Lobaye, à quelques minutes du centre de Mbaïki. Les chambres sont simples mais propres et confortables, avec ventilateur et moustiquaire. L'auberge dispose d'un jardin tropical où il fait bon se reposer après les excursions. Les repas sont préparés avec des produits locaux frais par la famille qui gère l'établissement. L'atmosphère y est chaleureuse et authentique, permettant une véritable immersion dans la vie locale. L'électricité est disponible certaines heures de la journée.
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
                  <span className="text-2xl">🌳</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Forêt de Lobaye promotion" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Expérience authentique garantie</p>
                  </div>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-red-700">$2,499</span>
                    <span className="text-xl line-through text-gray-500">$2,699</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO -200$</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-red-700 bg-red-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide francophone, hébergements, tous repas, droits d'entrée communautés
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
                    <option value="2026-12-10">10 Décembre 2026</option>
                    <option value="2027-01-07">7 Janvier 2027</option>
                    <option value="2027-02-04">4 Février 2027</option>
                    <option value="2027-03-04">4 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de décembre à mars (meilleure période climatique)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-red-700 to-orange-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ECONOMISEZ 200$ PAR PERSONNE</strong> sur les départs 2026-2027
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
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
                    Nos experts Centrafrique vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=17.0,3.5,19.0,5.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Forêt de Lobaye miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Forêt de Lobaye - 7 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Bangui → Forêt de Lobaye → Mbaïki
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
                    <span>Tous transferts terrestres</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 nuits en hôtels/auberges</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée communautés</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-red-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Rencontre Pygmées" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du circuit</span>
                    <span className="font-bold text-red-700">Facile à moyen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-red-700">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs décembre à mars</span>
                    <span className="font-bold text-red-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-red-700">Francophone local</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-red-700">6 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-red-200 p-4 mt-6 shadow-lg bg-red-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b786d4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700">Témoignage Voyageur</h4>
                    <p className="text-xs text-gray-600">Pierre L., voyageur 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expérience humaine incroyable. Rencontrer les Pygmées Aka dans leur environnement naturel, partager leur quotidien, écouter leurs chants magiques... Ces moments resteront gravés à jamais. La forêt de Lobaye est d'une beauté à couper le souffle. Un voyage authentique, loin des sentiers battus, qui m'a profondément touché."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-red-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pygmées 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêt 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rivière 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Artisanat 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
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