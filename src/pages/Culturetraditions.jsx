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
        <h4 className="font-semibold text-center text-lg">Itinéraire Culturel Bandundu</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,-5.5,19.0,-3.0&layer=mapnik&marker=-4.4419,15.2663&marker=-5.0400,18.8160"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit Culture et Traditions du Bandundu"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-4.5/17.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Kinshasa</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Mbanza-Ngungu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Villages Yombe</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Artisanat Kongo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Kikwit</span>
        </div>
      </div>
    </div>
  );
};

export default function Culturetraditions() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('kinshasa');
  const [activeExperienceTab, setActiveExperienceTab] = useState('artisanat');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🎭', title: 'Artisanat Traditionnel', desc: 'Découverte des métiers artisanaux du Bandundu' },
    { icon: '🥁', title: 'Musique et Danse', desc: 'Initiation aux rythmes et danses traditionnelles' },
    { icon: '🏺', title: 'Poterie Ancestrale', desc: 'Apprentissage des techniques de poterie Yombe' },
    { icon: '🎨', title: 'Art Rituel', desc: 'Découverte des masques et statues rituelles' },
    { icon: '👑', title: 'Chefferies Traditionnelles', desc: 'Rencontre avec les autorités coutumières' },
    { icon: '🌾', title: 'Savoirs Ancestraux', desc: 'Transmission des connaissances traditionnelles' },
  ];

  const regions = [
    { 
      name: 'Kinshasa', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale de départ et introduction à la culture congolaise',
      features: ['Arrivée circuit', 'Préparation culturelle', 'Introduction traditions']
    },
    { 
      name: 'Mbanza-Ngungu', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Première immersion dans la culture Kongo',
      features: ['Artisanat local', 'Marchés traditionnels', 'Premières rencontres']
    },
    { 
      name: 'Villages Yombe', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Communautés préservant les traditions ancestrales',
      features: ['Vie villageoise', 'Rituels quotidiens', 'Transmission orale']
    },
    { 
      name: 'Ateliers d\'Artisans', 
      color: 'bg-lime-100', 
      textColor: 'text-lime-800', 
      desc: 'Centres de production artisanale traditionnelle',
      features: ['Poterie', 'Sculpture', 'Vannerie', 'Tissage']
    },
    { 
      name: 'Sanctuaires Culturels', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Lieux de préservation du patrimoine immatériel',
      features: ['Masques rituels', 'Statues ancestrales', 'Danses sacrées']
    },
    { 
      name: 'Kikwit', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville d\'arrivée et synthèse des traditions découvertes',
      features: ['Arrivée finale', 'Marché artisanal', 'Synthèse culturelle']
    },
  ];

  const experiences = [
    { 
      id: 'artisanat',
      name: 'Artisanat Traditionnel', 
      icon: '🎨',
      desc: 'Découverte et initiation aux métiers artisanaux du Bandundu',
      highlights: ['Poterie Yombe', 'Sculpture sur bois', 'Vannerie', 'Tissage'],
      details: 'Le Bandundu est réputé pour son artisanat traditionnel préservé depuis des générations. Vous découvrirez les différentes techniques artisanales : la poterie Yombe avec ses motifs géométriques uniques, la sculpture sur bois pour la création de masques et de statues rituelles, la vannerie avec la fabrication de paniers et de nattes, et le tissage traditionnel. Vous visiterez des ateliers d\'artisans, observerez leur travail, et pourrez même vous initier à certaines techniques sous leur guidance. Chaque objet raconte une histoire et fait partie intégrante de la culture locale.'
    },
    { 
      id: 'musique',
      name: 'Musique et Danse', 
      icon: '🥁',
      desc: 'Immersion dans les rythmes et danses traditionnelles du Bandundu',
      highlights: ['Rythmes Kongo', 'Danses rituelles', 'Instruments traditionnels', 'Chants polyphoniques'],
      details: 'La musique et la danse sont au cœur de la vie sociale et spirituelle du Bandundu. Vous découvrirez les rythmes traditionnels Kongo joués sur des instruments comme le tam-tam, le likembe (sanza), et les maracas. Vous assisterez à des démonstrations de danses rituelles, chacune ayant une signification spécifique (cérémonies, initiation, célébrations). Vous pourrez également participer à des séances d\'initiation aux chants polyphoniques traditionnels. Cette immersion musicale vous permettra de comprendre l\'importance de la transmission orale et rythmique dans la culture locale.'
    },
    { 
      id: 'chefferies',
      name: 'Chefferies Traditionnelles', 
      icon: '👑',
      desc: 'Rencontres avec les autorités coutumières et découverte de l\'organisation sociale',
      highlights: ['Rencontre chefs', 'Organisation sociale', 'Justice coutumière', 'Transmission pouvoir'],
      details: 'Les chefferies traditionnelles jouent un rôle fondamental dans l\'organisation sociale du Bandundu. Vous aurez l\'honneur de rencontrer des chefs coutumiers qui vous expliqueront leur rôle, leurs responsabilités, et le système de transmission du pouvoir. Vous découvrirez le fonctionnement de la justice coutumière, l\'organisation des villages, et les relations entre les différentes communautés. Ces rencontres, préparées avec respect et suivant les protocoles traditionnels, vous donneront un aperçu unique du système de gouvernance traditionnel toujours vivant dans la région.'
    },
    { 
      id: 'rituels',
      name: 'Rituels et Cérémonies', 
      icon: '🔮',
      desc: 'Découverte des rituels traditionnels et de leur signification',
      highlights: ['Rituels d\'initiation', 'Cérémonies agraires', 'Pratiques spirituelles', 'Médecine traditionnelle'],
      details: 'Les rituels et cérémonies font partie intégrante de la vie dans le Bandundu. Selon la période de votre visite et les autorisations obtenues, vous pourrez découvrir différents types de rituels : rites d\'initiation, cérémonies agraires liées aux cycles agricoles, pratiques spirituelles, et éléments de médecine traditionnelle. Chaque rituel a une signification profonde et suit des codes précis transmis de génération en génération. Ces expériences, toujours respectueuses des traditions locales, vous permettront de comprendre la vision du monde et la spiritualité des populations du Bandundu.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇨🇩</span>
          <span>ESCAPES | RÉPUBLIQUE DÉMOCRATIQUE DU CONGO</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Culture et Traditions du Bandundu</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🎭</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              6 jours d'immersion dans les traditions ancestrales de l'ouest congolais
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
            <span className="text-2xl">🎨</span>
            <span className="text-sm font-semibold">RDC | CULTURE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Artisanat" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Artisanat traditionnel du Bandundu</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Danse traditionnelle" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Danses et musiques traditionnelles</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Village traditionnel" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Villages préservant les traditions ancestrales</p>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">CULTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC8</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">6 jours - Kinshasa à Kikwit</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600 font-semibold">SAISON: OCT-DÉC</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion authentique dans les traditions ancestrales du Bandundu</span>
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
                {/* Galerie d'images descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Artisanat" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Poterie traditionnelle Yombe</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Danse" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Danses rituelles du Bandundu</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit culturel de 6 jours vous emmène à la découverte des traditions ancestrales du Bandundu, dans l'ouest de la République Démocratique du Congo. Vous plongerez au cœur de la culture Kongo et Yombe, découvrant l'artisanat traditionnel, la musique, les danses, et les rituels préservés depuis des générations. Une immersion authentique dans un patrimoine culturel vivant.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Kinshasa avec une introduction à la diversité culturelle congolaise. Vous vous rendrez ensuite à Mbanza-Ngungu pour une première immersion dans l'artisanat local. Vous visiterez ensuite des villages Yombe où les traditions sont préservées, découvrant poterie, sculpture, et rituels quotidiens. Le circuit se terminera à Kikwit, synthèse des traditions découvertes. Un itinéraire conçu pour une rencontre authentique avec les gardiens de la culture traditionnelle.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Cérémonie traditionnelle" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Cérémonie traditionnelle préservant les savoirs ancestraux</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux souhaitant découvrir la richesse culturelle du Bandundu hors des sentiers touristiques. Entre rencontres avec les artisans, initiation aux techniques traditionnelles, participation à des moments de vie villageoise, et échanges avec les autorités coutumières, vous vivrez une immersion authentique dans une culture vivante. Accompagné de guides culturels spécialistes des traditions locales, vous découvrirez un patrimoine immatériel d'une richesse exceptionnelle.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts du Circuit Culturel</h3>
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
                  
                  {/* Images supplémentaires */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Sculpture" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Village" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Culture" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">CULTURE EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Groupes ethniques</div>
                        <div className="text-3xl font-bold">4+</div>
                        <div className="text-xs text-white/80">principaux dans le Bandundu</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Techniques artisanales</div>
                        <div className="text-3xl font-bold">8+</div>
                        <div className="text-xs text-white/80">préservées traditionnellement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Danses traditionnelles</div>
                        <div className="text-3xl font-bold">12+</div>
                        <div className="text-xs text-white/80">recensées dans la région</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Villages visités</div>
                        <div className="text-3xl font-bold">6+</div>
                        <div className="text-xs text-white/80">au cours du circuit</div>
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
                          alt="Village traditionnel" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Culturel Bandundu</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit culturel vous emmène à travers la région du Bandundu, de Kinshasa à Kikwit. Vous découvrirez la diversité culturelle de cette région à travers des rencontres authentiques avec les artisans, musiciens, danseurs et autorités traditionnelles. Le parcours combine visites d'ateliers, participation à des activités traditionnelles, échanges avec les communautés, et découverte des lieux de préservation du patrimoine. Chaque étape est l'occasion d'apprendre et de partager, dans le respect des traditions locales.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-green-700 font-bold">~400 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Transports</div>
                            <div className="text-green-700 font-bold">Véhicule privé</div>
                          </div>
                          <div>
                            <div className="font-semibold">Saison idéale</div>
                            <div className="text-green-700 font-bold">Octobre-Décembre</div>
                          </div>
                          <div>
                            <div className="font-semibold">Rencontres</div>
                            <div className="text-green-700 font-bold">+15 activités</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Préparation */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau facile (1/5)</strong> : Ce circuit culturel ne comporte pas d'efforts physiques importants. Les déplacements se font en véhicule privé et les visites sont adaptées à tous. Une bonne condition générale est suffisante. L'âge minimum recommandé est de 12 ans. Adaptation nécessaire aux conditions de vie simples dans les villages. Respect des coutumes locales essentiel.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Condition générale normale</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 12 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Respect des traditions locales</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Ouverture d'esprit et curiosité</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Recommandations</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🎁</span>
                              <span>Petits cadeaux pour les hôtes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📸</span>
                              <span>Demander avant photographier</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>👔</span>
                              <span>Tenue respectueuse</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💬</span>
                              <span>Apprendre quelques mots locaux</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎵</span>
                              <span>Participation aux activités</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🤝</span>
                              <span>Respect des protocoles</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Rencontre culturelle" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Kinshasa */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À KINSHASA</span>
                          <span className="text-sm text-gray-600">Introduction à la culture congolaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international de N'djili à Kinshasa. Accueil par votre guide culturel francophone spécialiste des traditions du Bandundu. Transfert à votre hôtel. Installation et repos. Après-midi : visite du musée national de la RDC pour une introduction à la diversité culturelle congolaise, avec focus sur les ethnies du Bandundu. Briefing sur le circuit culturel à venir : présentation des traditions, recommandations de comportement, protocoles à respecter. Dîner de bienvenue avec spécialités culinaires congolaises. Nuit à l'hôtel à Kinshasa.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Visite musée national - Briefing culturel - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Musée Kinshasa" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Mbanza-Ngungu */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS MBANZA-NGUNGU</span>
                          <span className="text-sm text-gray-600">Première immersion dans l'artisanat local</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée route et découverte</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Kinshasa en direction de Mbanza-Ngungu (environ 3-4 heures de route). Arrivée à Mbanza-Ngungu, installation à l'hébergement. Déjeuner avec spécialités locales. Après-midi : première immersion dans l'artisanat du Bandundu. Visite d'ateliers de poterie traditionnelle, observation des artisans au travail, initiation aux techniques de base. Rencontre avec des artisans qui expliqueront la signification des motifs et l'importance de leur transmission. Dîner et nuit à Mbanza-Ngungu.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Kinshasa-Mbanza-Ngungu - Installation - Visite ateliers poterie - Rencontre artisans - Initiation techniques
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Poterie" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Villages Yombe */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VILLAGES YOMBE</span>
                          <span className="text-sm text-gray-600">Immersion dans la vie traditionnelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée immersion villageoise</h4>
                            <p className="text-justify mb-4">
                              Journée complète d'immersion dans un village Yombe. Accueil par le chef du village suivant les traditions (cadeaux, présentations). Découverte de la vie quotidienne : techniques agricoles traditionnelles, préparation des repas, organisation sociale. Participation à des activités selon la saison (récolte, transformation des produits). Initiation à la vannerie et au tissage traditionnel. Déjeuner partagé avec la communauté. Après-midi : découverte des rituels quotidiens et des pratiques spirituelles. Retour à Mbanza-Ngungu en fin de journée. Dîner et nuit.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Immersion village Yombe - Rencontre chef village - Vie quotidienne - Initiation artisanat - Partage repas
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Village Yombe" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Musique et danse */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">MUSIQUE ET DANSE</span>
                          <span className="text-sm text-gray-600">Initiation aux arts traditionnels</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée arts traditionnels</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la musique traditionnelle. Rencontre avec des musiciens, découverte des instruments (tam-tam, likembe, maracas). Initiation aux rythmes de base et aux chants polyphoniques. Déjeuner. Après-midi : découverte des danses traditionnelles. Présentation des différentes danses rituelles, leur signification, leur contexte d'exécution. Initiation à quelques pas de danse sous la guidance des danseurs locaux. En fin d'après-midi, petite représentation combinant musique et danse. Dîner et nuit à Mbanza-Ngungu.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Initiation musique - Découverte instruments - Initiation danse - Représentation - Échanges artistiques
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Musique traditionnelle" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route vers Kikwit */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS KIKWIT</span>
                          <span className="text-sm text-gray-600">Synthèse culturelle et marché artisanal</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée route et synthèse</h4>
                            <p className="text-justify mb-4">
                              Départ de Mbanza-Ngungu en direction de Kikwit (environ 4-5 heures de route). Arrêts en cours de route pour visiter des ateliers d'artisans spécialisés dans la sculpture sur bois (masques, statues). Arrivée à Kikwit en début d'après-midi, installation à l'hébergement. Déjeuner tardif. Après-midi : visite du marché artisanal de Kikwit, synthèse des techniques apprises, opportunité d'achat d'artisanat local (avec conseils du guide). En fin d'après-midi, session de synthèse culturelle avec votre guide. Dîner et nuit à Kikwit.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Mbanza-Ngungu-Kikwit - Visite ateliers sculpture - Installation - Marché artisanal - Synthèse culturelle
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Sculpture sur bois" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Retour international */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR INTERNATIONAL</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hébergement. Selon l'horaire de votre vol international (généralement depuis l'aéroport de Kikwit ou retour à Kinshasa), transfert à l'aéroport en fonction des horaires. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette immersion culturelle dans le Bandundu : les techniques artisanales découvertes, les rythmes et danses appris, les rencontres authentiques avec les gardiens des traditions, et une compréhension approfondie de la richesse culturelle de cette région.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
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
                      <span className="text-white text-2xl">🎭</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Culturelles</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit culturel vous offre une immersion complète dans les traditions du Bandundu. Chaque expérience est conçue pour vous permettre de découvrir, apprendre et partager avec les gardiens de ce patrimoine culturel vivant.
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
                            <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                              <img 
                                src={
                                  exp.id === 'artisanat' 
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'musique'
                                    ? 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'chefferies'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'artisanat' ? -5.2500 : 
                                   exp.id === 'musique' ? -5.3000 :
                                   exp.id === 'chefferies' ? -5.2000 :
                                   -5.3500} 
                              lng={exp.id === 'artisanat' ? 14.8667 : 
                                   exp.id === 'musique' ? 14.8500 :
                                   exp.id === 'chefferies' ? 14.9000 :
                                   14.8000} 
                              height="200px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hébergements */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU CIRCUIT CULTUREL</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Confort Simple et Immersion Authentique</h3>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit culturel privilégie l'immersion authentique dans les communautés locales. Les hébergements sont simples mais propres et fonctionnels, reflétant le mode de vie local. À Kinshasa, vous séjournerez dans un hôtel confortable. À Mbanza-Ngungu et Kikwit, vous découvrirez des guesthouses ou petits hôtels locaux. L'accent est mis sur les rencontres et les expériences culturelles plutôt que sur le luxe.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('kinshasa')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kinshasa' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KINSHASA (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('mbanga')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'mbanga' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MBANZA-NGUNGU (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('kikwit')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kikwit' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KIKWIT (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Kinshasa */}
                  {activeHotelTab === 'kinshasa' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Kinshasa" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                CONFORT 3*
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel à Kinshasa</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Kinshasa, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Kinshasa</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambre confortable</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Petit-déjeuner inclus</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              À Kinshasa, vous séjournerez dans un hôtel de catégorie 3 étoiles offrant un confort satisfaisant pour bien commencer votre voyage culturel. Les chambres sont propres et équipées de l'essentiel (salle de bain privée, climatisation, wifi). L'hôtel dispose d'un restaurant et d'un personnel attentif. Idéal pour se reposer après le voyage et se préparer à l'immersion culturelle à venir.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Mbanza-Ngungu */}
                  {activeHotelTab === 'mbanga' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Guesthouse Mbanza-Ngungu" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                SIMPLE ET AUTHENTIQUE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Guesthouse à Mbanza-Ngungu</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Mbanza-Ngungu, Bandundu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Proche du centre-ville</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambre simple mais propre</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée ou partagée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Repas locaux inclus</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              À Mbanza-Ngungu, vous séjournerez dans une guesthouse locale simple mais propre. Les chambres sont basiques mais fonctionnelles, avec l'essentiel pour un séjour confortable. Selon l'établissement, les salles de bain peuvent être privées ou partagées. Les repas sont préparés avec des produits locaux et constituent une partie de l'expérience culturelle. L'hébergement est idéalement situé pour les visites culturelles et permet une immersion dans la vie locale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Kikwit */}
                  {activeHotelTab === 'kikwit' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hébergement Kikwit" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                SIMPLE ET FONCTIONNEL
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Guesthouse à Kikwit</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Kikwit, Bandundu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Proche du centre-ville</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambre basique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Repas inclus</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              À Kikwit, vous séjournerez dans une guesthouse simple mais fonctionnelle. Les chambres sont propres et offrent le confort de base nécessaire après une journée de découvertes culturelles. La salle de bain est privée. Les repas sont inclus et préparés avec des ingrédients locaux. L'hébergement est bien situé pour visiter le marché artisanal et clôturer votre immersion culturelle dans de bonnes conditions.
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
                  <span className="text-2xl">🎭</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Immersion Culturelle</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Culture Bandundu" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Immersion dans les traditions ancestrales</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$1,799</span>
                    <span className="text-xl text-gray-500 line-through">$1,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit culturel complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide culturel, hébergements, repas selon programme, activités culturelles
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⏰ PROMOTION : Économisez 200$ jusqu'au 30 septembre 2026
                  </div>
                  <div className="mt-2 text-xs bg-blue-50 text-blue-700 p-2 rounded">
                    📅 SAISON IDÉALE : Octobre à Décembre
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
                    <option value="2026-10-07">7 Octobre 2026</option>
                    <option value="2026-10-21">21 Octobre 2026</option>
                    <option value="2026-11-04">4 Novembre 2026</option>
                    <option value="2026-11-18">18 Novembre 2026</option>
                    <option value="2026-12-02">2 Décembre 2026</option>
                    <option value="2027-10-06">6 Octobre 2027</option>
                    <option value="2027-10-20">20 Octobre 2027</option>
                    <option value="2027-11-03">3 Novembre 2027</option>
                    <option value="2027-11-17">17 Novembre 2027</option>
                    <option value="2027-12-01">1 Décembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs d'octobre à décembre (saison culturelle idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>IMMERSION CULTURELLE</strong> limitée à 10 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide culturel spécialiste des traditions du Bandundu</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur l'immersion culturelle ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts culture vous conseillent.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONTACTER UN EXPERT
                  </button>
                </div>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Services Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Guide culturel francophone</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>5 nuits en hébergement selon programme</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le circuit</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres privés</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Activités culturelles et initiations</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rencontres avec les communautés</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Culture" 
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
                    <span className="font-bold text-green-700">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Durée totale</span>
                    <span className="font-bold text-green-700">6 jours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs saison</span>
                    <span className="font-bold text-green-700">Octobre-Décembre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-green-700">Spécialiste culturel</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">10 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
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