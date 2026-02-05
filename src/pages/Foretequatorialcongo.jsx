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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Fleuve Congo - RDC</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,-4.5,26.0,1.0&layer=mapnik&marker=0.5153,25.1911&marker=-0.0477,18.2560"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit Forêt Équatoriale - RDC"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/0.5/22.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Kisangani</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Forêt Équatoriale</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Fleuve Congo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mbandaka</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Réserves Naturelles</span>
        </div>
      </div>
    </div>
  );
};

export default function Foretequatorialcongo() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('kisangani');
  const [activeExperienceTab, setActiveExperienceTab] = useState('foret');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌳', title: 'Forêt Équatoriale', desc: 'Immersion dans la deuxième plus grande forêt tropicale du monde' },
    { icon: '🚤', title: 'Navigation sur le Fleuve', desc: 'Descente du fleuve Congo en bateau traditionnel' },
    { icon: '🦍', title: 'Primates et Faune', desc: 'Observation des bonobos, chimpanzés et autres primates' },
    { icon: '🏹', title: 'Rencontre avec les Pygmées', desc: 'Expérience culturelle avec les peuples de la forêt' },
    { icon: '🐘', title: 'Éléphants des Forêts', desc: 'Recherche des éléphants de forêt dans leur habitat naturel' },
    { icon: '🌿', title: 'Biodiversité Unique', desc: 'Découverte de la flore et faune exceptionnelle du bassin du Congo' },
  ];

  const regions = [
    { 
      name: 'Kisangani', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Porte d\'entrée de la forêt équatoriale, au confluent du fleuve Congo',
      features: ['Arrivée circuit', 'Base départ', 'Préparation', 'Navigation']
    },
    { 
      name: 'Forêt Équatoriale', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Deuxième plus grande forêt tropicale du monde après l\'Amazonie',
      features: ['Randonnées', 'Observation faune', 'Campement', 'Biodiversité']
    },
    { 
      name: 'Fleuve Congo', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Deuxième fleuve le plus puissant du monde, artère vitale de l\'Afrique',
      features: ['Navigation fluviale', 'Villages riverains', 'Pêche traditionnelle', 'Paysages']
    },
    { 
      name: 'Réserves Naturelles', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Zones protégées abritant une biodiversité exceptionnelle',
      features: ['Bonobos', 'Éléphants forêt', 'Primates rares', 'Conservation']
    },
    { 
      name: 'Communautés Locales', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Rencontres authentiques avec les peuples de la forêt et du fleuve',
      features: ['Pygmées', 'Villages', 'Traditions', 'Artisanat']
    },
    { 
      name: 'Mbandaka', 
      color: 'bg-indigo-100', 
      textColor: 'text-indigo-800', 
      desc: 'Ville portuaire au cœur de la forêt équatoriale, point final du circuit',
      features: ['Arrivée', 'Découverte ville', 'Fin circuit', 'Départ']
    },
  ];

  const experiences = [
    { 
      id: 'foret',
      name: 'Forêt Équatoriale', 
      icon: '🌳',
      desc: 'Immersion dans la forêt tropicale et découverte de sa biodiversité unique',
      highlights: ['Randonnées en forêt', 'Observation faune', 'Campement', 'Biodiversité'],
      details: 'La forêt équatoriale du bassin du Congo est la deuxième plus grande forêt tropicale du monde après l\'Amazonie, couvrant environ 200 millions d\'hectares. Elle abrite une biodiversité extraordinaire : plus de 10 000 espèces de plantes tropicales, 400 espèces de mammifères, 1 000 espèces d\'oiseaux et 700 espèces de poissons. Votre immersion dans cette forêt vous permettra de découvrir des écosystèmes uniques, d\'observer des primates rares (bonobos, chimpanzés, cercopithèques), de marcher sous la canopée dense, et de comprendre l\'importance cruciale de cette forêt pour le climat mondial. Les randonnées seront accompagnées de guides locaux et de pisteurs pygmées connaissant parfaitement la forêt.'
    },
    { 
      id: 'fleuve',
      name: 'Fleuve Congo', 
      icon: '🚤',
      desc: 'Navigation sur le deuxième fleuve le plus puissant du monde',
      highlights: ['Navigation traditionnelle', 'Villages riverains', 'Paysages fluviaux', 'Culture locale'],
      details: 'Le fleuve Congo est le deuxième fleuve le plus puissant du monde après l\'Amazone, avec un débit moyen de 41 000 m³/s. Sa descente de Kisangani à Mbandaka est une aventure fluviale exceptionnelle. Vous naviguerez sur des bateaux traditionnels adaptés au fleuve, découvrirez les villages riverains vivant au rythme du fleuve, observerez la vie quotidienne des pêcheurs et des commerçants, et admirerez les paysages changeants de la forêt-galerie. La navigation sur le fleuve Congo est également l\'occasion d\'observer une faune aquatique riche : hippopotames, crocodiles du Nil, poissons-tigres, et de nombreuses espèces d\'oiseaux d\'eau. Cette expérience fluviale est un voyage dans le temps et dans l\'histoire de l\'Afrique centrale.'
    },
    { 
      id: 'bonobos',
      name: 'Bonobos', 
      icon: '🦍',
      desc: 'Observation des bonobos, primates endémiques de la RDC',
      highlights: ['Bonobos en liberté', 'Observation', 'Comportement social', 'Conservation'],
      details: 'Le bonobo (Pan paniscus) est une espèce de grand singe endémique de la République Démocratique du Congo, vivant exclusivement au sud du fleuve Congo. Ces primates, proches cousins des chimpanzés, sont connus pour leur société matriarcale et leur comportement pacifique. Votre circuit vous mènera dans des zones où les bonobos peuvent être observés dans leur habitat naturel. Accompagné de chercheurs et de guides spécialisés, vous apprendrez à connaître leur organisation sociale unique, leur communication, leur alimentation (principalement frugivore), et les menaces qui pèsent sur leur survie. L\'observation des bonobos est une expérience rare et privilégiée, car cette espèce est classée en danger d\'extinction.'
    },
    { 
      id: 'pygmees',
      name: 'Peuples de la Forêt', 
      icon: '🏹',
      desc: 'Rencontre avec les peuples pygmées et découverte de leur culture',
      highlights: ['Rencontre pygmées', 'Traditions', 'Connaissance forêt', 'Échange culturel'],
      details: 'Les peuples pygmées (principalement les Mbuti, les Twa et les Baka) sont les premiers habitants de la forêt équatoriale du bassin du Congo. Leur connaissance intime de la forêt, de ses plantes, de ses animaux et de ses ressources est exceptionnelle. Votre circuit inclut des rencontres authentiques avec des communautés pygmées, dans le respect de leurs traditions et de leur mode de vie. Vous découvrirez leurs techniques de chasse et de cueillette, leur médecine traditionnelle à base de plantes, leur musique et leurs danses, ainsi que leur relation unique avec la forêt qu\'ils considèrent comme leur mère. Ces échanges culturels sont l\'occasion d\'une compréhension profonde des liens entre l\'homme et la forêt tropicale.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de la forêt équatoriale */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Forêt Équatoriale et Fleuve Congo</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🌳</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              14 jours d'expédition au cœur de la forêt tropicale et navigation sur le fleuve Congo
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">14</div>
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
            <span className="text-2xl">🌿</span>
            <span className="text-sm font-semibold">RDC | AVENTURE & EXPÉDITION</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêt Équatoriale" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Forêt équatoriale du bassin du Congo</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fleuve Congo" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Navigation sur le fleuve Congo</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Faune de la forêt" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Faune et biodiversité exceptionnelle</p>
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
                <span className="bg-blue-700 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC4</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">14 jours - Kisangani à Mbandaka</span>
                <button className="ml-auto border-2 border-blue-700 text-blue-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une expédition unique au cœur de la forêt équatoriale et du fleuve Congo</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Forêt Équatoriale" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Immersion dans la forêt tropicale</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Fleuve Congo" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Navigation sur le fleuve Congo</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette expédition de 14 jours vous emmène au cœur de la forêt équatoriale du bassin du Congo et sur le fleuve Congo, dans le nord de la République Démocratique du Congo. Vous débuterez à Kisangani, porte d'entrée de la forêt, pour une immersion totale dans l'un des écosystèmes les plus riches et les plus méconnus de la planète. Vous naviguerez ensuite sur le fleuve Congo, artère vitale de l'Afrique centrale, jusqu'à Mbandaka. Cette aventure unique combine exploration de la forêt tropicale, observation de la faune sauvage, rencontres culturelles avec les peuples de la forêt, et navigation fluviale.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Kisangani, au confluent du fleuve Congo et de la rivière Tshopo. Vous commencerez par une immersion dans la forêt équatoriale : randonnées sous la canopée, observation des primates (bonobos, chimpanzés), découverte de la biodiversité végétale. Vous poursuivrez par la navigation sur le fleuve Congo, en descendant vers l'ouest, avec des escales dans des villages riverains et des réserves naturelles. Vous rencontrerez les peuples pygmées, premiers habitants de la forêt. L'expédition se terminera à Mbandaka, au cœur de la forêt équatoriale. Un itinéraire exceptionnel pour les amateurs de nature sauvage et d'aventure authentique.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Fleuve Congo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Le fleuve Congo : artère vitale de l'Afrique centrale</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les aventuriers en quête d'immersion profonde dans la nature sauvage. Entre les randonnées en forêt équatoriale, la navigation sur le fleuve Congo, les rencontres avec les peuples de la forêt, et l'observation d'une faune unique, vous vivrez une expérience hors des sentiers battus. Accompagné de guides spécialistes de la forêt et du fleuve, vous découvrirez une région exceptionnelle qui reste l'un des derniers grands espaces sauvages de notre planète.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-blue-50 border-l-4 border-blue-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Les Atouts de l'Expédition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-700 text-2xl">{item.icon}</span>
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
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt tropicale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Faune sauvage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de cette Expédition</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt Équatoriale" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Immersion en forêt équatoriale</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fleuve Congo" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Navigation sur le fleuve Congo</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Forêt équatoriale</strong> : immersion dans la deuxième plus grande forêt tropicale du monde</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Fleuve Congo</strong> : navigation sur le deuxième fleuve le plus puissant du monde</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Bonobos</strong> : observation des primates endémiques de la RDC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Peuples pygmées</strong> : rencontres culturelles avec les premiers habitants de la forêt</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Biodiversité</strong> : découverte de la flore et faune exceptionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Randonnées en forêt</strong> : exploration sous la canopée dense</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Villages riverains</strong> : découverte de la vie au bord du fleuve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Conservation</strong> : soutien aux efforts de protection de la forêt</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le bassin du Congo avec image */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bassin du Congo" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Bassin du Congo : Poumon Vert de l'Afrique</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Le bassin du Congo est la deuxième plus grande forêt tropicale du monde après l'Amazonie, couvrant environ 3,7 millions de km² sur six pays, dont la majorité se trouve en République Démocratique du Congo. Cette forêt est d'une importance cruciale pour la planète : elle stocke environ 60 milliards de tonnes de carbone, abrite plus de 10 000 espèces de plantes tropicales, 400 espèces de mammifères, 1 000 espèces d'oiseaux et 700 espèces de poissons. Le fleuve Congo, qui traverse cette forêt, est le deuxième fleuve le plus puissant du monde après l'Amazone. Le bassin du Congo représente également le foyer de plus de 75 millions de personnes, dont les peuples pygmées qui en sont les premiers habitants. Cette région est un trésor de biodiversité et un régulateur essentiel du climat mondial.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Forêt tropicale</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Fleuve Congo</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Peuples pygmées</span>
                          <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Conservation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-green-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Forêt Équatoriale" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">BASSIN DU CONGO EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie forêt</div>
                        <div className="text-3xl font-bold">3,7M</div>
                        <div className="text-xs text-white/80">km² (2ème forêt tropicale)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Espèces végétales</div>
                        <div className="text-3xl font-bold">10K+</div>
                        <div className="text-xs text-white/80">dont 30% endémiques</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Longueur fleuve</div>
                        <div className="text-3xl font-bold">4,700</div>
                        <div className="text-xs text-white/80">km (2ème fleuve Afrique)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Stock carbone</div>
                        <div className="text-3xl font-bold">60Gt</div>
                        <div className="text-xs text-white/80">tonnes (poumon de l'Afrique)</div>
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
                          src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Fleuve Congo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours en Forêt Équatoriale et Fleuve Congo</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Cette expédition vous emmène à travers la forêt équatoriale et sur le fleuve Congo, de Kisangani à Mbandaka. Vous débuterez à Kisangani, au nord de la forêt, pour une immersion en forêt équatoriale. Vous explorerez ensuite différentes zones de la forêt, avec des randonnées, l'observation des primates, et des rencontres avec les peuples pygmées. Vous poursuivrez par la navigation sur le fleuve Congo, descendant vers l'ouest avec des escales dans des villages riverains et des réserves naturelles. L'expédition se terminera à Mbandaka, au cœur de la forêt équatoriale. L'itinéraire combine randonnées en forêt, navigation fluviale, et découverte culturelle.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance navigation</div>
                            <div className="text-blue-700 font-bold">~1,200 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Randonnées forêt</div>
                            <div className="text-blue-700 font-bold">5+ jours</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en forêt</div>
                            <div className="text-blue-700 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Navigation fluviale</div>
                            <div className="text-blue-700 font-bold">6 jours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-700">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Kisangani' 
                                    ? 'https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Forêt Équatoriale'
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Fleuve Congo'
                                    ? 'https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Réserves Naturelles'
                                    ? 'https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Communautés Locales'
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Faune et Paysages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fleuve 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Faune 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-green-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-4</div>
                      <div className="text-sm">Kisangani & Forêt</div>
                      <div className="text-xs opacity-80">Arrivée, immersion forêt, randonnées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-8</div>
                      <div className="text-sm">Forêt Profonde</div>
                      <div className="text-xs opacity-80">Primates, pygmées, biodiversité</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-12</div>
                      <div className="text-sm">Navigation Fleuve</div>
                      <div className="text-xs opacity-80">Descente fleuve, villages, réserves</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">13-14</div>
                      <div className="text-sm">Mbandaka & Retour</div>
                      <div className="text-xs opacity-80">Arrivée, synthèse, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-green-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau élevé (4/5)</strong> : Cette expédition comporte des conditions difficiles : randonnées en forêt équatoriale (chaleur, humidité, insectes), navigation sur le fleuve dans des conditions basiques, hébergements rustiques en forêt. Une bonne condition physique est requise, ainsi qu'une capacité d'adaptation aux conditions tropicales. Les participants doivent être prêts à marcher plusieurs heures par jour en forêt, à supporter la chaleur et l'humidité, et à vivre avec un confort minimal. L'âge minimum recommandé est de 21 ans. Adaptation nécessaire aux conditions tropicales et à l'isolement.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">●</span>
                              <span className="text-sm">Bonne condition physique requise</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">●</span>
                              <span className="text-sm">Adaptation à la forêt tropicale</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 21 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">●</span>
                              <span className="text-sm">Esprit d'aventure et d'adaptation</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de randonnée étanches</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac à dos 60-70L et sac étanche</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🦟</span>
                              <span>Moustiquaire et anti-moustique</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale tropicale</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire et anti-moustique</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🌧️</span>
                              <span>Veste imperméable légère</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🔦</span>
                              <span>Lampe frontale avec piles de rechange</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🛌</span>
                              <span>Sac de couchage léger</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement forêt" 
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
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forêt Équatoriale" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Expédition ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Immersion dans la deuxième forêt tropicale du monde</h4>
                            <p className="text-sm text-gray-700">
                              Expérience rare dans l'un des derniers grands espaces sauvages.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Navigation sur le fleuve Congo</h4>
                            <p className="text-sm text-gray-700">
                              Aventure fluviale authentique sur le deuxième fleuve le plus puissant du monde.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Observation des bonobos et autres primates</h4>
                            <p className="text-sm text-gray-700">
                              Rencontre avec des espèces endémiques et menacées.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Rencontres culturelles authentiques</h4>
                            <p className="text-sm text-gray-700">
                              Échanges avec les peuples pygmées, premiers habitants de la forêt.
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
                  {/* Jour 1 - Arrivée à Kisangani */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À KISANGANI</span>
                          <span className="text-sm text-gray-600">Accueil et préparation de l'expédition</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport de Kisangani. Accueil par votre guide francophone spécialiste de la forêt équatoriale et du fleuve Congo. Transfert à votre hôtel en ville. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur l'expédition à venir : présentation du programme, des règles de sécurité pour la forêt et la navigation, distribution de l'équipement spécifique si nécessaire. Première vue sur le fleuve Congo depuis Kisangani. Dîner de bienvenue avec spécialités locales. Nuit à l'hôtel à Kisangani.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing expédition - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Kisangani" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Découverte de Kisangani et préparation */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉCOUVERTE KISANGANI</span>
                          <span className="text-sm text-gray-600">Visite de la ville et derniers préparatifs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée découverte</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de Kisangani : visite du marché central très animé, du port sur le fleuve Congo, des chutes de la Tshopo. Déjeuner dans un restaurant local. Après-midi : derniers préparatifs pour l'expédition en forêt. Vérification de l'équipement personnel, achat de derniers snacks si nécessaire, conseils du guide sur ce qu'il faut emporter en forêt. Dernier briefing technique sur les conditions en forêt équatoriale. Dîner et nuit à l'hôtel à Kisangani.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite Kisangani - Préparation équipement - Briefing technique - Dîner
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Kisangani ville" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Départ vers la forêt équatoriale */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART VERS LA FORÊT</span>
                          <span className="text-sm text-gray-600">Transfert et première immersion en forêt équatoriale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée immersion forêt</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Kisangani en 4x4 vers la lisière de la forêt équatoriale. Route à travers les paysages de transition entre savane et forêt. Arrivée au camp de base en fin de matinée. Installation dans le campement (tentes ou huttes selon l'option). Déjeuner sur place. Après-midi : première randonnée d'initiation en forêt équatoriale, accompagnée d'un guide local et d'un pisteur pygmée. Découverte des premiers écosystèmes forestiers, observation de la flore, initiation à la lecture des traces d'animaux. Retour au camp avant la nuit. Dîner autour du feu et nuit en forêt.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert vers forêt - Installation camp - Première randonnée - Nuit en forêt
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forêt équatoriale" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Randonnée en forêt profonde */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT PROFONDE</span>
                          <span className="text-sm text-gray-600">Randonnée d'une journée complète en forêt équatoriale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée forêt profonde</h4>
                            <p className="text-justify mb-4">
                              Départ matinal pour une randonnée d'une journée complète en forêt équatoriale. Marche sous la canopée dense, traversée de cours d'eau, observation de la biodiversité végétale (arbres géants, lianes, épiphytes). Avec un peu de chance, observation de primates (cercopithèques, colobes) et d'oiseaux forestiers. Déjeuner pique-nique en forêt. Après-midi : continuation de la randonnée, avec focus sur l'ethnobotanique (plantes médicinales, plantes comestibles) avec le guide pygmée. Retour au camp en fin d'après-midi. Temps libre pour se reposer. Dîner et nuit au campement en forêt.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Randonnée forêt profonde - Observation biodiversité - Ethnobotanique - Retour camp
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forêt profonde" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Recherche des primates */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RECHERCHE DES PRIMATES</span>
                          <span className="text-sm text-gray-600">Tracking des bonobos et chimpanzés</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée primates</h4>
                            <p className="text-justify mb-4">
                              Départ très tôt pour le tracking des primates. Accompagné de pisteurs pygmées expérimentés, vous partirez à la recherche des bonobos ou chimpanzés selon la zone. Marche silencieuse en forêt, écoute des cris, lecture des traces. Une fois les primates localisés, observation à distance respectueuse. Étude de leur comportement social, alimentation, déplacements. Déjeuner pique-nique sur place. Après-midi : continuation de l'observation ou retour au camp selon les conditions. En fin d'après-midi, discussion avec les pisteurs sur la conservation des primates. Dîner et nuit au campement en forêt.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Tracking primates - Observation - Discussion conservation - Nuit forêt
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Primates" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Rencontre avec les pygmées */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RENCONTRE PYGMÉES</span>
                          <span className="text-sm text-gray-600">Journée culturelle avec les premiers habitants de la forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée culturelle</h4>
                            <p className="text-justify mb-4">
                              Randonnée vers un campement pygmée. Rencontre avec une communauté pygmée (Mbuti ou autre selon la zone). Échanges culturels : démonstration des techniques de chasse traditionnelle (arc, flèches, filets), de cueillette, de préparation des aliments. Participation à des activités quotidiennes (selon les souhaits de la communauté). Déjeuner partagé avec la communauté. Après-midi : découverte de la musique et des danses traditionnelles pygmées. Initiation à certains chants et rythmes. Discussion sur le mode de vie, les traditions, et les défis actuels des peuples de la forêt. Retour au camp en fin de journée. Dîner et nuit en forêt.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Rencontre pygmées - Échanges culturels - Musique traditionnelle - Retour camp
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Pygmées" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Retour vers Kisangani et préparation navigation */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR KISANGANI</span>
                          <span className="text-sm text-gray-600">Retour en ville et préparation de la navigation fluviale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée transition</h4>
                            <p className="text-justify mb-4">
                              Dernière matinée en forêt : petite randonnée d'adieu ou temps libre au camp. Déjeuner au campement. Après-midi : démontage du camp et retour vers Kisangani en 4x4. Arrivée à l'hôtel en fin d'après-midi. Installation, douche bien méritée après les jours en forêt. Préparation des affaires pour la partie navigation fluviale. Briefing sur la descente du fleuve Congo : présentation du bateau, des conditions de navigation, des escales prévues. Dîner en ville et nuit à l'hôtel à Kisangani.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Retour Kisangani - Préparation navigation - Briefing fluvial - Nuit hôtel
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Retour Kisangani" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Début de la navigation sur le fleuve Congo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART NAVIGATION</span>
                          <span className="text-sm text-gray-600">Embarquement et début de la descente du fleuve Congo</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée navigation départ</h4>
                            <p className="text-justify mb-4">
                              Transfert au port de Kisangani. Embarquement sur le bateau traditionnel aménagé pour l'expédition. Départ pour la descente du fleuve Congo. Premières heures de navigation : adaptation au rythme du fleuve, observation des paysages riverains (forêt-galerie, villages, activités fluviales). Déjeuner à bord. Après-midi : continuation de la navigation. Arrêt dans un premier village riverain pour une courte visite. Rencontre avec les pêcheurs et les habitants. Reprise de la navigation jusqu'au lieu de mouillage pour la nuit. Installation pour la nuit à bord ou à terre selon les conditions. Dîner et nuit sur le fleuve.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Embarquement - Navigation fleuve - Visite village - Nuit sur fleuve
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Navigation fleuve" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Navigation et villages riverains */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VILLAGES RIVERLAINS</span>
                          <span className="text-sm text-gray-600">Navigation et découverte de la vie au bord du fleuve</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée villages</h4>
                            <p className="text-justify mb-4">
                              Navigation matinale sur le fleuve. Arrêt dans un village plus important pour une visite approfondie. Découverte des activités économiques (pêche, agriculture, commerce), de l'organisation sociale, de l'architecture traditionnelle. Rencontre avec le chef du village ou des notables. Déjeuner à bord ou partagé avec la communauté selon les possibilités. Après-midi : reprise de la navigation avec observation de la faune aquatique (hippopotames, crocodiles, oiseaux d'eau). Arrêt pour une séance de pêche traditionnelle (démonstration ou participation). Navigation jusqu'au lieu de mouillage pour la nuit. Dîner et nuit sur le fleuve.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation - Visite village - Observation faune - Pêche traditionnelle
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Villages riverains" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Réserve naturelle et biodiversité */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RÉSERVE NATURELLE</span>
                          <span className="text-sm text-gray-600">Exploration d'une zone protégée et observation de la faune</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée réserve</h4>
                            <p className="text-justify mb-4">
                              Arrivée à proximité d'une réserve naturelle ou d'une zone protégée. Débarquement et randonnée dans la forêt de la réserve, accompagné de gardes-forestiers. Recherche d'éléphants de forêt, de primates, d'oiseaux forestiers. Découverte des projets de conservation en cours. Déjeuner pique-nique dans la réserve. Après-midi : continuation de l'exploration ou navigation dans les méandres de la réserve en petite pirogue pour observer la faune aquatique et les oiseaux. Retour au bateau principal en fin d'après-midi. Navigation vers le lieu de mouillage pour la nuit. Dîner et nuit sur le fleuve.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite réserve - Randonnée - Observation faune - Navigation
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Réserve naturelle" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Navigation vers Mbandaka */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS MBANDAKA</span>
                          <span className="text-sm text-gray-600">Longue journée de navigation sur le fleuve Congo</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée navigation longue</h4>
                            <p className="text-justify mb-4">
                              Longue journée de navigation sur le fleuve Congo. Observation des paysages qui évoluent au fil des kilomètres. Passage par des zones de rapides (selon le niveau d'eau), observation des activités fluviales (bateaux de transport, pêcheurs, pirogues). Déjeuner à bord. Après-midi : continuation de la navigation. Arrêts techniques pour le carburant ou les provisions si nécessaire. Observation de la vie du fleuve, lecture, repos. En fin d'après-midi, approche de Mbandaka. Mouillage pour la nuit à proximité de la ville. Dîner d'adieu de la partie navigation. Nuit sur le fleuve.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Navigation longue - Observation paysages - Vie fluviale - Nuit sur fleuve
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Navigation longue" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Arrivée à Mbandaka */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE MBANDAKA</span>
                          <span className="text-sm text-gray-600">Débarquement et découverte de la ville</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée arrivée</h4>
                            <p className="text-justify mb-4">
                              Dernière courte navigation jusqu'au port de Mbandaka. Débarquement et transfert à l'hôtel. Installation dans les chambres. Déjeuner à l'hôtel ou en ville. Après-midi : découverte de Mbandaka, ville au cœur de la forêt équatoriale. Visite du centre-ville, du port fluvial, du marché, et si possible de l'Institut de Recherche sur la Forêt. Rencontre avec des acteurs de la conservation ou de la recherche si organisé à l'avance. Retour à l'hôtel en fin d'après-midi. Dîner et nuit à l'hôtel à Mbandaka.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Débarquement - Transfert hôtel - Visite Mbandaka - Nuit hôtel
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Mbandaka" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 13 - Mbandaka et synthèse */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(13)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          13
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MBANDAKA ET SYNTHÈSE</span>
                          <span className="text-sm text-gray-600">Découverte de la ville et bilan de l'expédition</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 13 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 13 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée synthèse</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la visite complémentaire de Mbandaka : marché central, quartiers résidentiels, points de vue sur le fleuve. Option : excursion en pirogue sur la rivière Ruki, affluent du fleuve Congo, pour une dernière immersion dans la forêt-galerie. Déjeuner à Mbandaka. Après-midi : session de synthèse de l'expédition avec votre guide. Retour sur les expériences vécues, partage des impressions, discussion sur l'avenir de la forêt équatoriale et du fleuve Congo. Temps libre pour les derniers achats de souvenirs. Dîner d'adieu de fin de circuit. Nuit à l'hôtel à Mbandaka.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite Mbandaka - Synthèse expédition - Temps libre souvenirs - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Mbandaka ville" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 14 - Retour international */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(14)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          14
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR INTERNATIONAL</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 14 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 14 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international (généralement depuis l'aéroport de Mbandaka, ou via Kinshasa), transfert à l'aéroport en fonction des horaires. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette expédition au cœur de la forêt équatoriale et sur le fleuve Congo : l'immersion dans la forêt tropicale, la rencontre avec les bonobos, les échanges avec les peuples pygmées, la navigation sur le fleuve Congo, et la satisfaction d'avoir accompli une aventure exceptionnelle dans l'un des derniers grands espaces sauvages de notre planète.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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

                {/* Galerie supplémentaire de l'itinéraire */}
                <div className="mt-12 pt-8 border-t-2 border-gray-300">
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts de l'Expédition</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fleuve 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Faune 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture 1" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌳</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-700">Les Expériences Aventure et Nature</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition au cœur de la forêt équatoriale et sur le fleuve Congo combine immersion dans l'un des écosystèmes les plus riches de la planète, observation d'une faune unique, rencontres culturelles authentiques, et aventure fluviale. Chaque expérience est intense, formatrice, et vous plonge au cœur d'une nature sauvage préservée.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forêt Équatoriale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fleuve Congo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Faune" 
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
                            ? 'bg-blue-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-blue-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-blue-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-700 mt-1">•</span>
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
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'fleuve'
                                    ? 'https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'bonobos'
                                    ? 'https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'foret' ? 0.5153 : 
                                   exp.id === 'fleuve' ? -0.0477 :
                                   exp.id === 'bonobos' ? -2.0000 :
                                   1.0000} 
                              lng={exp.id === 'foret' ? 25.1911 : 
                                   exp.id === 'fleuve' ? 18.2560 :
                                   exp.id === 'bonobos' ? 21.0000 :
                                   23.0000} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Aventure et Paysages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Forêt Équatoriale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt Équatoriale</h5>
                          <p className="text-sm text-gray-700">Immersion dans la deuxième forêt tropicale du monde</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?w=600" 
                          alt="Fleuve Congo" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Fleuve Congo</h5>
                          <p className="text-sm text-gray-700">Navigation sur le deuxième fleuve le plus puissant du monde</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?w=600" 
                          alt="Bonobos" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Bonobos</h5>
                          <p className="text-sm text-gray-700">Observation des primates endémiques de la RDC</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forêt de montagne" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages fluviaux" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Faune sauvage" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-green-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Observation éléphants forêt</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Recherche spécialisée des éléphants de forêt avec pisteur expérimenté. Supplément : 200€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit chez l'habitant</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience d'une nuit dans un village pygmée. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Pêche au gros sur le fleuve</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Session de pêche au poisson-tigre ou capitaine. Supplément : 180€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Visite centre de recherche</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Visite d'un centre de recherche sur la forêt équatoriale. Supplément : 100€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DE L'EXPÉDITION</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Confort et Immersion en Milieu Sauvage</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                      <span className="text-blue-700 text-2xl">🏕️</span>
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Camp en forêt" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bateau sur le fleuve" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Mbandaka" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette expédition vous propose différents types d'hébergement adaptés à chaque étape. À Kisangani et Mbandaka, vous séjournerez dans des hôtels simples mais confortables. En forêt équatoriale, vous logerez dans des campements rustiques (tentes ou huttes) pour une immersion totale. Sur le fleuve Congo, vous dormirez à bord du bateau d'expédition aménagé ou dans des campements sur les rives. Tous les hébergements sont choisis pour leur immersion dans la nature, leur propreté, et leur sécurité. Le confort est simple mais adapté à l'aventure.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('kisangani')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kisangani' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KISANGANI (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('foret')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'foret' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      FORÊT (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('fleuve')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'fleuve' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      FLEUVE (5 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('mbandaka')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'mbandaka' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MBANDAKA (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Kisangani */}
                  {activeHotelTab === 'kisangani' && (
                    <div className="space-y-16">
                      {/* Hotel Kisangani */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Kisangani" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 text-sm font-bold">
                                CONFORT BASIQUE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Kisangani</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Kisangani, Province de la Tshopo, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Kisangani</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛌</span>
                                <span className="text-sm font-semibold">Chambres avec salle de bain</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Eau chaude limitée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Kisangani est un établissement simple mais fonctionnel situé en centre-ville. Il propose des chambres avec salle de bain privée, ventilateur (parfois climatisation selon disponibilité), et lit confortable. L'hôtel dispose d'un restaurant servant une cuisine locale simple. Le service est basique mais correct. L'emplacement est pratique pour les préparatifs de l'expédition et pour visiter la ville. Un hébergement adapté pour le début et la transition de l'expédition.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Forêt */}
                  {activeHotelTab === 'foret' && (
                    <div className="space-y-16">
                      {/* Campement Forêt Équatoriale */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Campement Forêt" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement Forêt Équatoriale</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Forêt équatoriale, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Au cœur de la forêt tropicale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Tentes ou huttes traditionnelles</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine sur feu de bois</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Toilettes et douche sommaires</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le campement en forêt équatoriale est un hébergement rustique mais adapté à l'immersion en milieu sauvage. Il est généralement composé de tentes de camping équipées de matelas ou de huttes traditionnelles construites avec des matériaux locaux. Les sanitaires sont sommaires (toilettes sèches, douche avec eau de rivière). La cuisine est préparée sur feu de bois par l'équipe d'accompagnement. L'éclairage est assuré par des lampes solaires ou des lampes à pétrole. L'immersion dans la forêt est totale, avec les bruits nocturnes de la faune. Un hébergement aventure pour vivre l'expérience de la forêt équatoriale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Fleuve */}
                  {activeHotelTab === 'fleuve' && (
                    <div className="space-y-16">
                      {/* Bateau d'expédition */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?w=600" 
                              alt="Bateau d'expédition" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bateau d'Expédition</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Fleuve Congo, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🚤</span>
                                <span>Sur le fleuve Congo</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛌</span>
                                <span className="text-sm font-semibold">Cabines simples ou tentes sur le pont</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine à bord</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Toilettes et douche basiques</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le bateau d'expédition est un bateau traditionnel adapté pour la navigation sur le fleuve Congo. Il est équipé pour le transport des participants et du matériel. L'hébergement à bord se fait soit dans des cabines simples (lits superposés), soit dans des tentes installées sur le pont. Les sanitaires sont basiques (toilettes et douche avec eau du fleuve filtrée). La cuisine est préparée à bord par un cuisinier. L'électricité est fournie par un générateur limité. L'expérience de dormir sur le fleuve, avec le bruit de l'eau et la brise tropicale, est unique. Un hébergement aventure pour la descente du fleuve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Mbandaka */}
                  {activeHotelTab === 'mbandaka' && (
                    <div className="space-y-16">
                      {/* Hotel Mbandaka */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hotel Mbandaka" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Mbandaka</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Mbandaka, Province de l'Équateur, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Mbandaka</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏨</span>
                                <span className="text-sm font-semibold">Chambres avec ventilateur</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant simple</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Mbandaka est un établissement simple situé en centre-ville. Il propose des chambres avec salle de bain privée, ventilateur, et lit basique. L'hôtel dispose d'un restaurant servant une cuisine locale simple. Le service est basique mais correct. Après les jours d'aventure en forêt et sur le fleuve, cet hébergement offre un confort relatif pour la fin du séjour. L'emplacement est pratique pour visiter la ville et préparer le départ.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Forêt Équatoriale" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Forêt équatoriale du bassin du Congo</p>
                  </div>
                </div>
                
                {/* Prix avec vol inclus */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-700">$4,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Expédition complète</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur mentionné, tous transferts, permis forêt et navigation, guide spécialiste, hébergements, repas selon programme
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ✈️ VOL INTÉRIEUR INCLUS : Transfert aérien facilité pour votre itinéraire
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-12-03">3 Décembre 2026</option>
                    <option value="2027-01-07">7 Janvier 2027</option>
                    <option value="2027-02-04">4 Février 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de décembre à février (saison sèche, meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-700 to-green-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION EXCEPTIONNELLE</strong> limitée à 8 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste forêt équatoriale et fluvial</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-700 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur l'expédition ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts aventure vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,-4.5,26.0,1.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Forêt Équatoriale miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Expédition Forêt et Fleuve - 14 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Kisangani → Forêt → Fleuve Congo → Mbandaka
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
                    <span>Vol intérieur mentionné dans l'itinéraire</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste francophone</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Permis forêt et réserves</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Navigation sur le fleuve Congo</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>13 nuits en hébergement selon programme</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Repas selon programme détaillé</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres et fluviaux</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Forêt Équatoriale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de l'expédition</span>
                    <span className="font-bold text-blue-700">Élevé</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-blue-700">21 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs décembre à février</span>
                    <span className="font-bold text-blue-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-blue-700">Spécialiste forêt et fleuve</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-blue-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens, rage, méningite
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Témoignage Aventurier</h4>
                    <p className="text-xs text-gray-600">Marie D., biologiste 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expédition hors du commun ! La forêt équatoriale est d'une richesse incroyable, et la navigation sur le fleuve Congo est une aventure fluviale unique. Les rencontres avec les pygmées étaient authentiques et émouvantes. Observer les bonobos dans leur habitat naturel est un privilège rare. Le guide était exceptionnellement compétent sur l'écologie de la forêt. Cette expédition m'a permis de comprendre l'importance cruciale de la conservation du bassin du Congo. Un voyage qui change une vie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-blue-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forêt 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1597833697781-3b85c4b0f9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fleuve 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548167796-e22c4f6eb6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Faune 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Culture 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}