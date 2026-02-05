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
        <h4 className="font-semibold text-center text-lg">Itinéraire Lac Kivu et Montagnes</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.0,-3.0,29.5,-1.5&layer=mapnik&marker=-2.5083,28.8600&marker=-3.4167,28.6000"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit Rives du Lac Kivu et Montagnes"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/-2.5/28.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Bukavu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Rives du Lac Kivu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Montagnes du Sud-Kivu</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Villages traditionnels</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Uvira</span>
        </div>
      </div>
    </div>
  );
};

export default function Rivemontagne() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bukavu');
  const [activeExperienceTab, setActiveExperienceTab] = useState('randonnee');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏞️', title: 'Lac Kivu', desc: 'Découverte des rives spectaculaires du lac' },
    { icon: '⛰️', title: 'Randonnées Montagne', desc: 'Trekking dans les montagnes du Sud-Kivu' },
    { icon: '🏕️', title: 'Nuits en Camping', desc: 'Bivouac en pleine nature' },
    { icon: '🚶', title: 'Villages Authentiques', desc: 'Rencontre avec les communautés locales' },
    { icon: '🌅', title: 'Paysages Exceptionnels', desc: 'Vues panoramiques sur le lac et les montagnes' },
    { icon: '🌿', title: 'Nature Préservée', desc: 'Découverte d\'écosystèmes uniques' },
  ];

  const regions = [
    { 
      name: 'Bukavu', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Ville de départ, sur les rives du lac Kivu',
      features: ['Arrivée circuit', 'Préparation randonnée', 'Départ']
    },
    { 
      name: 'Rives Sud du Lac Kivu', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Côtes méridionales du lac aux eaux limpides',
      features: ['Randonnées côtières', 'Baignade', 'Paysages lacustres', 'Villages de pêcheurs']
    },
    { 
      name: 'Montagnes du Sud-Kivu', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Massifs montagneux aux forêts préservées',
      features: ['Trekking', 'Vues panoramiques', 'Flore alpine', 'Points de vue']
    },
    { 
      name: 'Vallées Cachées', 
      color: 'bg-lime-100', 
      textColor: 'text-lime-800', 
      desc: 'Vallées isolées entre montagnes et lac',
      features: ['Randonnées isolées', 'Nature intacte', 'Biodiversité', 'Sérénité']
    },
    { 
      name: 'Villages Traditionnels', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Communautés vivant au rythme de la nature',
      features: ['Rencontres locales', 'Culture traditionnelle', 'Artisanat', 'Hospitalité']
    },
    { 
      name: 'Uvira', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Ville d\'arrivée au sud du lac Kivu',
      features: ['Arrivée finale', 'Synthèse voyage', 'Départ']
    },
  ];

  const experiences = [
    { 
      id: 'randonnee',
      name: 'Randonnées Montagne', 
      icon: '⛰️',
      desc: 'Trekking dans les montagnes du Sud-Kivu avec vues panoramiques sur le lac',
      highlights: ['Sentiers de montagne', 'Points de vue exceptionnels', 'Dénivelés variés', 'Nature préservée'],
      details: 'Ce circuit vous propose plusieurs jours de randonnée dans les montagnes du Sud-Kivu. Vous marcherez sur des sentiers traditionnels utilisés par les populations locales, découvrant des paysages spectaculaires alternant forêts, pâturages d\'altitude et crêtes rocheuses. Les dénivelés sont modérés à soutenus, avec des montées permettant d\'atteindre des points de vue exceptionnels sur le lac Kivu. Chaque journée de marche est adaptée au niveau du groupe et offre des moments de découverte de la flore alpine unique de la région.'
    },
    { 
      id: 'lac',
      name: 'Découverte du Lac Kivu', 
      icon: '🏞️',
      desc: 'Exploration des rives méridionales du lac Kivu et de ses villages',
      highlights: ['Rives du lac', 'Villages de pêcheurs', 'Baignade', 'Paysages lacustres'],
      details: 'Le lac Kivu, l\'un des Grands Lacs africains, offre des paysages d\'une beauté exceptionnelle. Vous découvrirez les rives méridionales moins touristiques, où la nature est préservée et les villages authentiques. Vous marcherez le long des berges, traverserez des criques isolées, et découvrirez la vie des communautés de pêcheurs. Des moments de baignade dans les eaux limpides du lac (non chargées en bilharziose) seront possibles. Vous apprécierez également les couchers de soleil spectaculaires sur le lac, avec les montagnes en toile de fond.'
    },
    { 
      id: 'camping',
      name: 'Nuits en Pleine Nature', 
      icon: '🏕️',
      desc: 'Bivouac et camping dans des sites exceptionnels au bord du lac ou en montagne',
      highlights: ['Camping sauvage', 'Nuits sous les étoiles', 'Feu de camp', 'Immersion totale'],
      details: 'Pour une immersion complète dans la nature, plusieurs nuits seront passées en camping. Vous dormirez sous tente dans des sites soigneusement sélectionnés pour leur beauté et leur sécurité : clairières en forêt, plages isolées du lac, ou cols de montagne avec vue panoramique. L\'équipe préparera les repas sur feu de bois, vous permettant de vivre une expérience authentique. Ces nuits en pleine nature sont l\'occasion de moments magiques : observation des étoiles, bruits de la forêt, et lever de soleil sur le lac.'
    },
    { 
      id: 'culture',
      name: 'Rencontres Culturelles', 
      icon: '👨‍👩‍👧‍👦',
      desc: 'Échanges avec les communautés locales des villages traversés',
      highlights: ['Rencontres villageoises', 'Échanges culturels', 'Artisanat local', 'Traditions'],
      details: 'Ce circuit traverse plusieurs villages et hameaux où vivent des communautés traditionnelles. Vous aurez l\'occasion de rencontrer les habitants, d\'échanger avec eux sur leur mode de vie, et de découvrir leurs traditions. Selon les villages, vous pourrez assister à des démonstrations d\'artisanat local, participer à des activités quotidiennes (pêche, agriculture), et partager des moments de convivialité. Ces rencontres, toujours respectueuses et préparées avec nos guides locaux, permettent une compréhension approfondie de la culture des populations du Sud-Kivu.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Rives du Lac Kivu et Montagnes</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">⛰️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              9 jours de randonnée entre les rives du lac Kivu et les montagnes du Sud-Kivu
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">9</div>
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
            <span className="text-2xl">🥾</span>
            <span className="text-sm font-semibold">RDC | RANDONNÉE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lac Kivu" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Rives spectaculaires du lac Kivu</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Montagnes" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Montagnes du Sud-Kivu</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Randonnée" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Randonnées en pleine nature</p>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">RANDONNÉE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC7</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours - Bukavu à Uvira</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600 font-semibold">SAISON: JANV-MARS</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion totale dans les paysages exceptionnels du Sud-Kivu</span>
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
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Lac Kivu" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Randonnée le long des rives du lac Kivu</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Montagnes" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Trekking dans les montagnes du Sud-Kivu</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette randonnée de 9 jours vous emmène à la découverte des paysages exceptionnels du Sud-Kivu, entre les rives du lac Kivu et les montagnes environnantes. Vous combinerez marche le long du lac, trekking en montagne, nuits en camping et rencontres avec les communautés locales. Un circuit parfait pour les amoureux de nature sauvage et de randonnée authentique.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Bukavu, ville au bord du lac Kivu. Vous commencerez par des randonnées le long des rives méridionales du lac, découvrant criques isolées et villages de pêcheurs. Vous vous enfoncerez ensuite dans les montagnes du Sud-Kivu pour plusieurs jours de trekking avec vues panoramiques sur le lac. Le circuit se terminera à Uvira, au sud du lac Kivu. Un itinéraire équilibré entre moments de marche, détente au bord du lac, et immersion culturelle.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Vue lac et montagnes" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Panorama exceptionnel sur le lac Kivu depuis les montagnes</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les randonneurs de niveau intermédiaire souhaitant découvrir la région du Sud-Kivu hors des sentiers battus. Entre les paysages lacustres, les forêts de montagne, et les rencontres authentiques, vous vivrez une expérience immersive dans une nature préservée. Accompagné de guides locaux spécialistes de la région, vous découvrirez des endroits secrets et apprendrez à connaître les traditions des populations locales.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts de la Randonnée</h3>
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
                        src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Camping" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Villages" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Montagnes" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">RANDONNÉE EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Distance totale</div>
                        <div className="text-3xl font-bold">~75</div>
                        <div className="text-xs text-white/80">km de marche</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Dénivelé positif</div>
                        <div className="text-3xl font-bold">+2,500</div>
                        <div className="text-xs text-white/80">mètres cumulés</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Nuits camping</div>
                        <div className="text-3xl font-bold">4</div>
                        <div className="text-xs text-white/80">nuits en pleine nature</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Altitude max</div>
                        <div className="text-3xl font-bold">2,100</div>
                        <div className="text-xs text-white/80">mètres</div>
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
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Vue montagne" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Randonnée Sud-Kivu</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit de randonnée vous emmène le long des rives méridionales du lac Kivu et dans les montagnes du Sud-Kivu. Vous débuterez à Bukavu, puis suivrez le lac vers le sud, avec des étapes de marche alternant entre sentiers côtiers et routes de terre. Vous vous éloignerez ensuite du lac pour plusieurs jours de trekking en montagne, avec des nuits en camping. Vous redescendrez finalement vers Uvira, votre point d'arrivée. L'itinéraire est conçu pour profiter des plus beaux paysages tout en respectant un rythme de marche adapté.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Marche journalière</div>
                            <div className="text-green-700 font-bold">4-6h</div>
                          </div>
                          <div>
                            <div className="font-semibold">Portage</div>
                            <div className="text-green-700 font-bold">Porteurs disponibles</div>
                          </div>
                          <div>
                            <div className="font-semibold">Saison idéale</div>
                            <div className="text-green-700 font-bold">Janvier-Mars</div>
                          </div>
                          <div>
                            <div className="font-semibold">Températures</div>
                            <div className="text-green-700 font-bold">15-25°C</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau intermédiaire (3/5)</strong> : Ce circuit comporte des journées de marche de 4 à 6 heures, avec des dénivelés modérés à soutenus (jusqu'à +700m certains jours). Une bonne condition physique est requise. Les participants doivent être habitués à la marche en terrain varié (sentiers, pentes). L'âge minimum recommandé est de 16 ans. Adaptation nécessaire aux conditions de camping en pleine nature.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Bonne condition physique requise</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Habitude de la randonnée</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 16 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Adaptation au camping</span>
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
                              <span>Sac à dos 30-40L</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🏕️</span>
                              <span>Sac de couchage confort 0°C</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💡</span>
                              <span>Lampe frontale</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire haute protection</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale personnelle</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🌧️</span>
                              <span>Veste imperméable</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🦟</span>
                              <span>Anti-moustiques</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement randonnée" 
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
                  {/* Jour 1 - Arrivée à Bukavu */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BUKAVU</span>
                          <span className="text-sm text-gray-600">Accueil et préparation de la randonnée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport de Kavumu ou arrivée terrestre à Bukavu. Accueil par votre guide de randonnée francophone spécialiste du Sud-Kivu. Transfert à votre hébergement. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur la randonnée à venir : présentation du programme, vérification de l'équipement, recommandations pratiques. Première vue sur le lac Kivu depuis Bukavu. Dîner de bienvenue avec spécialités locales. Nuit à l'hébergement à Bukavu.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing randonnée - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Bukavu" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Première randonnée lac */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RANDONNÉE RIVES DU LAC</span>
                          <span className="text-sm text-gray-600">Première journée de marche le long du lac Kivu</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée marche lac</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Bukavu. Début de la randonnée le long des rives du lac Kivu vers le sud. Marche d'environ 5 heures sur des sentiers côtiers et des routes de terre, avec de magnifiques vues sur le lac. Déjeuner pique-nique sur une plage isolée. Après-midi : continuation de la marche, découverte de petits villages de pêcheurs, possibilité de baignade dans le lac (eaux non chargées en bilharziose). Arrivée au lieu de campement en fin d'après-midi. Installation des tentes, préparation du dîner sur feu de bois. Première nuit en camping au bord du lac.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Randonnée lacustre - Pique-nique - Baignade - Installation camping - Nuit sous tente
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Randonnée lac" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Randonnée côtière */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CÔTES ET CRIQUES</span>
                          <span className="text-sm text-gray-600">Exploration des criques isolées du lac</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée côtes</h4>
                            <p className="text-justify mb-4">
                              Lever avec le soleil sur le lac. Petit-déjeuner au campement. Départ pour une journée de randonnée le long des côtes méridionales du lac Kivu. Vous découvrirez des criques isolées, des plages de sable volcanique, et des formations rocheuses spectaculaires. Rencontre avec des pêcheurs locaux et observation de leurs techniques traditionnelles. Déjeuner pique-nique dans une crique abritée. Après-midi : continuation de la marche, avec possibilité de baignade et de repos. Arrivée au nouveau campement en fin de journée. Installation, dîner et nuit en camping.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Randonnée côtière - Rencontre pêcheurs - Baignade - Pique-nique - Camping
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Criques lac" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Début trekking montagne */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ASCENSION MONTAGNES</span>
                          <span className="text-sm text-gray-600">Départ vers les hauteurs du Sud-Kivu</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée montagne</h4>
                            <p className="text-justify mb-4">
                              Dernière matinée au bord du lac. Petit-déjeuner, démontage du campement. Début de l'ascension vers les montagnes du Sud-Kivu. La marche quitte progressivement les rives du lac pour s'enfoncer dans les terres. Montée à travers des paysages variés : champs cultivés, forêts, pâturages. Déjeuner pique-nique en cours de route avec vue sur le lac qui s'éloigne. Après-midi : continuation de l'ascension. Arrivée en fin de journée à un site de camping en altitude avec vue panoramique sur le lac Kivu. Installation, dîner et nuit en camping en montagne.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Ascension montagne - Changement paysage - Vue panoramique - Camping altitude
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Ascension montagne" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Trekking crêtes */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CRÊTES ET VALLÉES</span>
                          <span className="text-sm text-gray-600">Trekking sur les crêtes avec vues à 360°</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée crêtes</h4>
                            <p className="text-justify mb-4">
                              Journée de trekking sur les crêtes des montagnes du Sud-Kivu. Marche avec des dénivelés modérés, alternant montées et descentes. Panoramas exceptionnels à 360° : vue sur le lac Kivu d'un côté, sur les chaînes de montagnes de l'autre. Découverte de la flore alpine unique de la région. Déjeuner pique-nique sur un col avec vue spectaculaire. Après-midi : descente vers une vallée isolée. Rencontre avec une communauté de bergers en altitude. Arrivée au campement dans la vallée en fin d'après-midi. Installation, dîner et nuit en camping.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Trekking crêtes - Panoramas 360° - Rencontre bergers - Camping vallée
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Crêtes montagne" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Vallée isolée */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VALLÉE ISOLÉE</span>
                          <span className="text-sm text-gray-600">Exploration d'une vallée préservée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée vallée</h4>
                            <p className="text-justify mb-4">
                              Journée de randonnée dans une vallée isolée entre les montagnes. Marche plus tranquille pour récupérer des efforts des jours précédents. Exploration de la vallée : rivière, forêt, petits hameaux. Rencontre avec les habitants de la vallée, découverte de leur mode de vie traditionnel. Déjeuner pique-nique au bord de la rivière. Après-midi : temps libre pour se reposer, photographier, ou participer à des activités avec les locaux (selon saison). Retour au campement en fin d'après-midi. Dernière nuit en camping dans les montagnes.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Randonnée vallée - Rencontres locales - Détente - Dernière nuit camping montagne
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Vallée" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Descente vers Uvira */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DESCENTE VERS UVIRA</span>
                          <span className="text-sm text-gray-600">Retour vers le lac et approche d'Uvira</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée descente</h4>
                            <p className="text-justify mb-4">
                              Dernier petit-déjeuner en camping. Démontage du campement. Début de la descente vers les basses terres et le lac Kivu. Marche à travers différents écosystèmes : forêts de montagne, zones agricoles, villages. Déjeuner pique-nique en cours de route. Après-midi : arrivée progressive dans la région d'Uvira. Retour à la civilisation après plusieurs jours en pleine nature. Installation dans un hébergement simple à Uvira ou dans ses environs. Douche bien méritée. Dîner et nuit à l'hébergement.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Descente montagne - Retour civilisation - Installation hébergement - Dîner
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Descente" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Uvira et détente */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">UVIRA ET DÉTENTE</span>
                          <span className="text-sm text-gray-600">Découverte d'Uvira et repos après la randonnée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée détente</h4>
                            <p className="text-justify mb-4">
                              Matinée de détente après les efforts de la randonnée. Petit-déjeuner tardif. Option : visite d'Uvira, ville au sud du lac Kivu. Promenade le long des rives du lac, découverte du marché local, rencontre avec la population. Déjeuner avec produits frais du lac (poisson). Après-midi : temps libre pour se reposer, soigner les ampoules, ou faire des achats de souvenirs. En fin d'après-midi, session de synthèse de la randonnée avec votre guide. Partage des impressions, retours sur l'expérience. Dîner d'adieu de fin de circuit. Nuit à l'hébergement à Uvira.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Détente - Visite Uvira - Synthèse randonnée - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Uvira" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour international */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR INTERNATIONAL</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hébergement. Selon l'horaire de votre vol international (généralement depuis l'aéroport de Kavumu près de Bukavu, ou autre), transfert à l'aéroport en fonction des horaires. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette randonnée au Sud-Kivu : les paysages spectaculaires du lac Kivu, les moments de marche en montagne, les nuits en camping sous les étoiles, et les rencontres authentiques avec les populations locales. Une expérience de randonnée unique dans une région préservée.
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
                      <span className="text-white text-2xl">🥾</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Randonnée et Nature</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette randonnée de 9 jours vous offre une immersion complète dans les paysages exceptionnels du Sud-Kivu. Entre marche le long du lac Kivu, trekking en montagne, nuits en camping et rencontres authentiques, chaque jour est une nouvelle découverte dans cette région préservée.
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
                                  exp.id === 'randonnee' 
                                    ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'lac'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'camping'
                                    ? 'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'randonnee' ? -2.8000 : 
                                   exp.id === 'lac' ? -2.5000 :
                                   exp.id === 'camping' ? -2.7000 :
                                   -2.6000} 
                              lng={exp.id === 'randonnee' ? 28.7000 : 
                                   exp.id === 'lac' ? 28.8500 :
                                   exp.id === 'camping' ? 28.7500 :
                                   28.8000} 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DE LA RANDONNÉE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Camping et Hébergements Simples</h3>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette randonnée combine nuits en camping en pleine nature et hébergements simples dans les villages traversés. À Bukavu et Uvira, vous séjournerez dans des hébergements de base mais confortables. Pendant la randonnée, vous dormirez sous tente dans des sites exceptionnels au bord du lac ou en montagne. L'accent est mis sur l'immersion dans la nature plutôt que sur le confort luxueux.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bukavu')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bukavu' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BUKAVU (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('camping')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'camping' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPING (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('uvira')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'uvira' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      UVIRA (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bukavu */}
                  {activeHotelTab === 'bukavu' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hébergement Bukavu" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                SIMPLE ET FONCTIONNEL
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Guesthouse à Bukavu</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bukavu, Sud-Kivu, République Démocratique du Congo
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
                                <span className="text-sm font-semibold">Salle de bain partagée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Petit-déjeuner inclus</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              À Bukavu, vous séjournerez dans une guesthouse simple mais propre et fonctionnelle. Les chambres sont basiques mais confortables, avec l'essentiel pour une bonne nuit de repos avant le début de la randonnée. L'hébergement dispose de salles de bain partagées propres. Le petit-déjeuner est inclus. L'emplacement permet un accès facile au centre-ville pour les derniers préparatifs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Camping */}
                  {activeHotelTab === 'camping' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1536152470836-b943b246224c?w=600" 
                                alt="Camping" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                IMMERSION NATURE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Camping en Pleine Nature</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Sites sélectionnés le long du lac Kivu et en montagne, Sud-Kivu
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Tentes fournies (2 personnes/tente)</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛌</span>
                                <span className="text-sm font-semibold">Matelas de sol fourni</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Repas préparés sur feu de bois</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚽</span>
                                <span className="text-sm font-semibold">Toilettes sèches improvisées</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Pendant 4 nuits, vous dormirez en camping dans des sites exceptionnels soigneusement sélectionnés par notre équipe. Les tentes (pour 2 personnes) et les matelas de sol sont fournis. L'équipe de porteurs/cuisiniers prépare les repas sur feu de bois. Les conditions sont basiques mais permettent une immersion totale dans la nature. Les sites de camping sont choisis pour leur beauté (bord de lac, vue panoramique en montagne) et leur sécurité. Une expérience authentique de bivouac en pleine nature.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Uvira */}
                  {activeHotelTab === 'uvira' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hébergement Uvira" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                SIMPLE ET ACCUEILLANT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Guesthouse à Uvira</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Uvira, Sud-Kivu, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Proche du lac Kivu</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Chambre basique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Douche chaude possible</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Repas inclus</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              À Uvira, vous séjournerez dans une guesthouse simple mais accueillante. Après plusieurs nuits en camping, vous apprécierez le confort d'un lit et la possibilité d'une douche. Les chambres sont basiques mais propres. Les repas sont inclus et préparés avec des produits locaux. L'hébergement est idéalement situé pour découvrir Uvira et se reposer après les efforts de la randonnée.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Randonnée</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Randonnée Kivu" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Randonnée entre lac et montagnes</p>
                  </div>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$3,399</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Randonnée complète</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide de randonnée, porteurs, équipement camping, hébergements, repas selon programme
                  </div>
                  <div className="mt-2 text-xs bg-blue-50 text-blue-700 p-2 rounded">
                    📅 SAISON IDÉALE : Janvier à Mars (saison sèche)
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
                    <option value="2026-01-15">15 Janvier 2026</option>
                    <option value="2026-02-05">5 Février 2026</option>
                    <option value="2026-02-26">26 Février 2026</option>
                    <option value="2026-03-19">19 Mars 2026</option>
                    <option value="2027-01-14">14 Janvier 2027</option>
                    <option value="2027-02-04">4 Février 2027</option>
                    <option value="2027-02-25">25 Février 2027</option>
                    <option value="2027-03-18">18 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de janvier à mars (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>RANDONNÉE AUTHENTIQUE</strong> limitée à 8 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide de randonnée spécialiste du Sud-Kivu</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur la randonnée ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts randonnée vous conseillent.
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
                    <span>Guide de randonnée francophone</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Porteurs pour matériel collectif</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tentes et équipement camping</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>8 nuits en hébergement selon programme</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant la randonnée</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Montagnes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de la randonnée</span>
                    <span className="font-bold text-green-700">Intermédiaire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Durée totale</span>
                    <span className="font-bold text-green-700">9 jours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs saison</span>
                    <span className="font-bold text-green-700">Janvier-Mars</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-green-700">Spécialiste randonnée</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">8 personnes</span>
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