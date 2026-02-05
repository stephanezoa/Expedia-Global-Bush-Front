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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Aventure Sahélienne</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,5.0,25.0,10.0&layer=mapnik&marker=6.6111,20.9394&marker=10.2942,22.7858"
          style={{ border: 0 }}
          allowFullScreen
          title="Aventure Sahélienne - Nord RCA"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/8.0/20.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-orange-700 border-2 border-gray-300"></span>
          <span className="text-sm">Kaga-Bandoro</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-500 border-2 border-gray-300"></span>
          <span className="text-sm">N'Délé</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Birao</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-700 border-2 border-gray-300"></span>
          <span className="text-sm">Sahara Central</span>
        </div>
      </div>
    </div>
  );
};

export default function Aventuresahel() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bangui');
  const [activeExperienceTab, setActiveExperienceTab] = useState('sahara');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏜️', title: 'Désert du Sahara', desc: 'Expédition dans les confins du désert central' },
    { icon: '🐪', title: 'Cultures Nomades', desc: 'Rencontre avec les peuples nomades du Sahel' },
    { icon: '🏰', title: 'Forteresses Sultans', desc: 'Découverte des anciens sultanats du Dar Runga' },
    { icon: '🌵', title: 'Écosystème Sahélien', desc: 'Adaptation à la vie dans la zone semi-aride' },
    { icon: '🌅', title: 'Ciels Inoubliables', desc: 'Ciels étoilés et couchers de soleil spectaculaires' },
    { icon: '🦒', title: 'Faune Adaptée', desc: 'Observation de la faune adaptée au milieu aride' },
  ];

  const regions = [
    { 
      name: 'Bangui', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Point de départ vers le nord sauvage et préparation de l\'expédition',
      features: ['Préparation expédition', 'Briefing sécurité', 'Convoi départ', 'Équipement désert']
    },
    { 
      name: 'Kaga-Bandoro', 
      color: 'bg-orange-100', 
      textColor: 'text-orange-800', 
      desc: 'Porte d\'entrée vers le nord, transition entre savane et Sahel',
      features: ['Premier bivouac', 'Rencontre communautés', 'Transition écologique', 'Base avancée']
    },
    { 
      name: 'N\'Délé', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Ancienne capitale du sultanat de Dar al-Kuti, riche histoire',
      features: ['Forteresse sultan', 'Histoire esclavagiste', 'Architecture soudanaise', 'Carrefour nomade']
    },
    { 
      name: 'Birao', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Ville la plus septentrionale de RCA, avant-poste du Sahara',
      features: ['Base expédition', 'Marché nomade', 'Frontière désert', 'Logistique avancée']
    },
    { 
      name: 'Désert du Nord', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Vastes étendues désertiques et zones semi-arides du Sahara central',
      features: ['Bivouac désert', 'Navigation GPS', 'Observation faune', 'Nuits étoilées']
    },
    { 
      name: 'Zones Nomades', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Territoires de transhumance des peuples nomades sahéliens',
      features: ['Rencontre nomades', 'Traditions pastorales', 'Survie désert', 'Échanges culturels']
    },
  ];

  const experiences = [
    { 
      id: 'sahara',
      name: 'Expédition Désert', 
      icon: '🏜️',
      desc: 'Traversée des zones semi-arides du Sahara central en convoi tout-terrain',
      highlights: ['Navigation désert', 'Bivouac sous les étoiles', 'Sécurité expédition', 'Adaptation climat'],
      details: 'Cette expédition vous emmène dans les confins du Sahara central, à travers des paysages de dunes, de regs (plateaux caillouteux) et d\'oasis éphémères. Voyage en convoi de 4x4 équipés pour le désert, avec navigation au GPS et à la boussole. Nuits en bivouac sous des ciels étoilés d\'une pureté exceptionnelle. Apprentissage des techniques de survie en milieu aride : recherche d\'eau, protection contre le soleil, lecture des cartes. Une aventure authentique pour les amateurs de grands espaces et de défis.'
    },
    { 
      id: 'nomades',
      name: 'Peuples Nomades', 
      icon: '🐪',
      desc: 'Rencontre avec les communautés nomades sahélo-sahariennes',
      highlights: ['Communautés nomades', 'Traditions pastorales', 'Transhumance', 'Hospitalité sahel'],
      details: 'Immersion dans la vie des derniers grands nomades du Sahel. Rencontre avec des familles peules, arabes shuwa et autres groupes nomades. Participation aux activités quotidiennes : soins aux troupeaux de dromadaires, préparation du thé à la menthe, montage des campements. Compréhension des cycles de transhumance et des relations complexes entre les différents groupes ethniques. Échanges authentiques autour du feu, partage de repas traditionnels. Une rencontre humaine rare avec des peuples dont le mode de vie ancestral est menacé.'
    },
    { 
      name: 'Histoire Sultanats', 
      icon: '🏰',
      desc: 'Découverte des anciens sultanats et forteresses du Dar Runga',
      highlights: ['Sultanat Dar al-Kuti', 'Forteresses historiques', 'Histoire esclavagiste', 'Architecture soudanaise'],
      details: 'Le nord de la RCA est marqué par une histoire riche et complexe, notamment celle des sultanats qui ont contrôlé la région aux XVIIIe et XIXe siècles. Visite des ruines impressionnantes du sultanat de Dar al-Kuti à N\'Délé : forteresses en terre, palais en ruine, anciens marchés aux esclaves. Exploration des sites historiques avec des guides locaux connaisseurs de l\'histoire régionale. Compréhension des relations entre les sultanats musulmans du nord et les royaumes animistes du sud, et de l\'impact de la traite transsaharienne.'
    },
    { 
      id: 'faune',
      name: 'Faune Sahélienne', 
      icon: '🦒',
      desc: 'Observation de la faune adaptée aux conditions arides du Sahel',
      highlights: ['Gazelles dorcas', 'Autruches d\'Afrique', 'Renards faméliques', 'Oiseaux désert'],
      details: 'Malgré les conditions difficiles, le Sahel abrite une faune spécialisée et fascinante. Accompagné de guides locaux, vous partirez à la recherche des espèces adaptées à l\'aridité : gazelles dorcas, autruches d\'Afrique, renards faméliques, varans du désert, et une variété d\'oiseaux spécialisés (outardes, gangas, etc.). Observation des stratégies d\'adaptation à la sécheresse : économie d\'eau, activité nocturne, régulation thermique. Cette expérience naturaliste met en lumière la résilience de la vie dans l\'un des environnements les plus difficiles de la planète.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image du Sahel */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Aventure Sahélienne au Nord</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🏜️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              10 jours d'expédition dans le nord sauvage, des sultanats historiques aux confins du Sahara
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
            <span className="text-2xl">🌵</span>
            <span className="text-sm font-semibold">SAHEL | AVENTURE EXTRÊME</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Désert du Sahel" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Paysages sahéliens à perte de vue</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Nomades du désert" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Rencontre avec les peuples nomades</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forteresse historique" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Anciens sultanats du Dar Runga</p>
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
                <span className="bg-orange-700 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA5</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - Bangui à Birao</span>
                <button className="ml-auto border-2 border-orange-700 text-orange-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-orange-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une aventure extrême dans les confins sahéliens</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-orange-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Désert sahélen" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Vastes étendues désertiques du nord</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Nomades du Sahel" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Rencontre avec les communautés nomades</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette expédition de 10 jours vous emmène dans le nord sauvage de la République Centrafricaine, à la découverte d'une région méconnue et fascinante où se rencontrent savane et désert. Une aventure extrême à travers les paysages sahéliens, les anciens sultanats et les territoires nomades.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Bangui d'où vous partirez en convoi tout-terrain vers le nord. Vous traverserez Kaga-Bandoro, N'Délé avec ses forteresses historiques, pour atteindre Birao, avant-poste du Sahara. L'expédition se poursuivra dans les zones désertiques du nord, avec bivouac sous les étoiles et rencontres authentiques avec les peuples nomades. Un voyage pour les amateurs d'aventure pure, de grands espaces et de cultures préservées.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Paysages sahéliens" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Les immensités désertiques du nord centrafricain</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les aventuriers confirmés, prêts à affronter des conditions difficiles pour découvrir une région rarement visitée. Accompagné de guides expérimentés et d'experts en survie désertique, vous découvrirez un monde à part, où les traditions nomades perdurent et où la nature impose ses lois. Une expérience authentique qui nécessite préparation physique et mentale.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-orange-50 border-l-4 border-orange-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-700">Les Atouts de l'Aventure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-orange-700 text-2xl">{item.icon}</span>
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
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture nomade" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Architecture historique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-orange-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de cette Aventure</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Expédition désert" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Navigation dans le désert sahélen</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontres nomades" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Immersion dans la culture nomade</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Expédition désertique</strong> en convoi tout-terrain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Rencontres authentiques</strong> avec les peuples nomades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Découverte historique</strong> des anciens sultanats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Observation de la faune</strong> adaptée au milieu aride</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Bivouac sous les étoiles</strong> dans le désert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Navigation hors-piste</strong> avec GPS et boussole</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Apprentissage survie</strong> en milieu désertique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-700 mt-1">•</span>
                        <span><strong>Photographie</strong> de paysages époustouflants</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Sahel avec image */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Région sahélienne" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Sahel Centrafricain : Frontière du Désert</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Le nord de la République Centrafricaine marque la transition entre la savane soudanienne et le désert du Sahara. Cette région, historiquement connue sous le nom de Dar Runga, a été le théâtre de sultanats puissants aux XVIIIe et XIXe siècles. Aujourd'hui, c'est une zone semi-aride peuplée principalement de nomades éleveurs et de quelques communautés sédentaires. Le climat est caractérisé par une longue saison sèche (octobre à mai) et de faibles précipitations. La faune s'est spécialisée pour survivre dans ces conditions difficiles, et les paysages alternent entre steppes arbustives, plaines caillouteuses et zones dunaires.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Zone Semi-Aride</span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Cultures Nomades</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Histoire Sultanats</span>
                          <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Aventure Extrême</span>
                          <span className="bg-stone-100 text-stone-800 text-xs px-3 py-1 rounded-full">Paysages Désertiques</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-orange-700 to-amber-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Culture nomade" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">LE SAHEL EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Distance parcourue</div>
                        <div className="text-3xl font-bold">1,500+</div>
                        <div className="text-xs text-white/80">km en convoi tout-terrain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Altitude moyenne</div>
                        <div className="text-3xl font-bold">600</div>
                        <div className="text-xs text-white/80">mètres au-dessus de la mer</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Température max</div>
                        <div className="text-3xl font-bold">45°C</div>
                        <div className="text-xs text-white/80">en saison sèche</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Précipitations annuelles</div>
                        <div className="text-3xl font-bold">400</div>
                        <div className="text-xs text-white/80">mm (très faible)</div>
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
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Caravane nomade" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours en Convoi Tout-Terrain</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Cette aventure vous emmène de la capitale Bangui aux confins du Sahara, en traversant les régions les plus isolées du nord de la RCA. Le voyage se fait en convoi de 4x4 spécialement équipés pour le désert, avec des guides expérimentés et une équipe de soutien. Vous traverserez des paysages changeants : de la savane arborée autour de Bangui aux steppes semi-arides du nord, jusqu'aux zones désertiques près de Birao. Les étapes incluent des nuits en bivouac, des rencontres avec les communautés locales, et l'exploration de sites historiques. Une expédition complète qui nécessite préparation et adaptation.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours en convoi</div>
                            <div className="text-orange-700 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en bivouac</div>
                            <div className="text-orange-700 font-bold">5</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides experts</div>
                            <div className="text-orange-700 font-bold">3+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Véhicules 4x4</div>
                            <div className="text-orange-700 font-bold">3-4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-orange-700">Les Zones Explorées</h3>
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
                                    : region.name === 'Kaga-Bandoro'
                                    ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'N\'Délé'
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Birao'
                                    ? 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Désert du Nord'
                                    ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Paysages et Cultures</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Nomades 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Architecture historique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages arides" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-orange-700 to-amber-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Bangui</div>
                      <div className="text-xs opacity-80">Préparation, briefing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2-3</div>
                      <div className="text-sm">Kaga-Bandoro</div>
                      <div className="text-xs opacity-80">Transition savane-Sahel</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4-5</div>
                      <div className="text-sm">N'Délé</div>
                      <div className="text-xs opacity-80">Histoire, sultanats</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Birao et désert</div>
                      <div className="text-xs opacity-80">Expédition, nomades</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-10</div>
                      <div className="text-sm">Retour Bangui</div>
                      <div className="text-xs opacity-80">Trajet retour, fin</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-amber-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau élevé (4/5)</strong> : Cette expédition est physiquement et mentalement exigeante. Conditions climatiques difficiles (chaleur extrême, variations thermiques importantes). Longues journées en véhicule sur pistes difficiles. Bivouac en autonomie. Adaptation nécessaire à un confort minimal. Excellente condition physique et mentale requise. Expérience préalable en voyage aventure recommandée. Âge minimum : 25 ans, maximum : 60 ans (avec certificat médical).
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Excellente condition physique requise</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Résistance à la chaleur extrême</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Âge 25-60 ans avec certificat médical</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Esprit d'équipe et adaptation</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de marche désert</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire très haute protection</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧥</span>
                              <span>Vêtements techniques chaud/froid</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💧</span>
                              <span>Gourde ou poche à eau 3L minimum</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🛌</span>
                              <span>Sac de couchage chaud (-5°C)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🕶️</span>
                              <span>Lunettes de soleil qualité désert</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧢</span>
                              <span>Chapeau à large bord et foulard</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🔦</span>
                              <span>Lampe frontale et batteries</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement désert" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Forteresse historique" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Aventure Extrême ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accès à une région rarement visitée</h4>
                            <p className="text-sm text-gray-700">
                              Le nord de la RCA est l'une des zones les plus isolées d'Afrique.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Expérience de voyage authentique</h4>
                            <p className="text-sm text-gray-700">
                              Pas de tourisme de masse, une aventure véritable.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Rencontres humaines exceptionnelles</h4>
                            <p className="text-sm text-gray-700">
                              Avec les derniers grands nomades du Sahel.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Défi personnel et accomplissement</h4>
                            <p className="text-sm text-gray-700">
                              Sortir de sa zone de confort dans un environnement extrême.
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
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
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
                              Arrivée à l'aéroport international M'Poko de Bangui. Accueil par votre guide d'expédition francophone. Transfert à votre hôtel. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur l'expédition : présentation de l'itinéraire, des règles de sécurité, du fonctionnement du convoi, des conditions de vie en bivouac. Vérification de l'équipement personnel. Distribution du matériel commun (tentes, matériel de cuisine, etc.). Dîner de bienvenue avec l'équipe d'encadrement. Nuit à l'hôtel à Bangui.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing expédition - Vérification équipement - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Hôtel à Bangui" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Départ en convoi vers Kaga-Bandoro */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CONVOI VERS KAGA-BANDORO</span>
                          <span className="text-sm text-gray-600">Première étape vers le nord sauvage</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Première journée de convoi</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Bangui après le petit-déjeuner. Constitution du convoi de 4x4 et chargement du matériel. Première journée de route vers le nord sur la route nationale RN1. Paysages de savane arborée qui s'ouvrent progressivement. Arrêt déjeuner pique-nique en bord de route. Continuation vers Kaga-Bandoro, capitale de la préfecture de Nana-Grébizi. Arrivée en fin d'après-midi. Installation au campement. Première nuit sous tente. Dîner préparé par l'équipe de cuisine. Briefing sur les règles de vie en campement. Nuit en bivouac.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Départ convoi - Route vers le nord - Arrivée Kaga-Bandoro - Installation bivouac - Première nuit sous tente
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Route du nord" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Exploration Kaga-Bandoro */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">KAGA-BANDORO ET ENVIRONS</span>
                          <span className="text-sm text-gray-600">Transition entre savane et Sahel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée d'acclimatation</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à l'exploration de la région de Kaga-Bandoro. Visite du marché local, point d'échange entre les communautés du nord et du sud. Rencontre avec les autorités locales et les représentants des différentes ethnies. Excursion dans les environs pour observer la transition écologique entre la savane soudanienne et la zone sahélienne. Déjeuner pique-nique en brousse. Après-midi : préparation technique des véhicules pour la suite du parcours. Session sur les techniques de navigation en milieu désertique. Dîner au campement et nuit sous tente.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite marché - Rencontres locales - Observation transition écologique - Préparation technique - Nuit bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Marché local" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Route vers N'Délé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS N'DÉLÉ</span>
                          <span className="text-sm text-gray-600">Entrée dans l'histoire des sultanats</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée historique</h4>
                            <p className="text-justify mb-4">
                              Départ matinal vers N'Délé, ancienne capitale du sultanat de Dar al-Kuti. Route à travers des paysages de plus en plus arides. Arrivée à N'Délé en milieu de journée. Installation au campement. Visite des ruines impressionnantes du sultanat : forteresses en terre, ancien palais, sites historiques. Explications détaillées sur l'histoire complexe de la région : sultanats musulmans, traite transsaharienne, relations avec les royaumes du sud. Déjeuner pique-nique sur site. Rencontre avec des descendants des familles dirigeantes historiques. Dîner et nuit en bivouac à N'Délé.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers N'Délé - Visite forteresses sultanat - Histoire région - Rencontres locales - Nuit bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Forteresse N'Délé" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Exploration N'Délé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION N'DÉLÉ</span>
                          <span className="text-sm text-gray-600">Culture et traditions du Dar Runga</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée culturelle</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de la culture locale. Visite du village traditionnel, rencontre avec les artisans, découverte des techniques de construction en terre. Participation à une cérémonie d'accueil traditionnelle. Déjeuner avec des plats typiques de la région. Après-midi : excursion dans les environs de N'Délé pour observer les premiers paysages sahéliens et la faune adaptée. Session de photographie des paysages et de l'architecture historique. En fin de journée, préparation pour la suite de l'expédition vers le nord. Dîner et nuit en bivouac.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Culture locale - Rencontres artisans - Cérémonie traditionnelle - Photographie - Nuit bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Culture locale" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Expédition vers Birao */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPÉDITION VERS BIRAO</span>
                          <span className="text-sm text-gray-600">Entrée dans le Sahara central</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée d'expédition</h4>
                            <p className="text-justify mb-4">
                              Départ très tôt pour Birao, ville la plus septentrionale de RCA. Route difficile à travers des paysages de plus en plus arides. Navigation hors-piste avec utilisation du GPS et de la boussole. Arrêts pour observer la faune sahélo-saharienne : gazelles, autruches, renards faméliques. Déjeuner pique-nique en pleine brousse. Arrivée à Birao en fin d'après-midi. Installation au campement en périphérie de la ville. Première expérience des conditions désertiques : chaleur intense le jour, fraîcheur la nuit. Dîner et nuit en bivouac.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route difficile vers Birao - Navigation hors-piste - Observation faune sahlienne - Installation bivouac désert
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Paysages désertiques" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Birao et désert */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BIRAO ET DÉSERT</span>
                          <span className="text-sm text-gray-600">Immersion dans le monde nomade</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée nomade</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de Birao : visite du marché nomade (si jour de marché), point de rencontre des différents groupes ethniques du nord. Rencontre avec les autorités locales et les représentants des communautés nomades. Après-midi : excursion dans le désert environnant à la rencontre d'une famille nomade. Participation aux activités quotidiennes : soins aux dromadaires, préparation du thé à la menthe, découverte des techniques de survie en milieu désertique. Apprentissage des bases de la navigation traditionnelle (observation des étoiles, lecture des dunes). Retour au campement pour le coucher de soleil spectaculaire. Dîner et nuit en bivouac sous les étoiles.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Marché nomade - Rencontre communautés - Excursion désert - Vie nomade - Nuit étoilée
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Nomades du désert" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Expédition désertique */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPÉDITION DÉSERTIQUE</span>
                          <span className="text-sm text-gray-600">Journée complète dans le Sahara central</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée extrême</h4>
                            <p className="text-justify mb-4">
                              Journée entière consacrée à l'exploration du désert sahélo-saharien. Départ à l'aube pour profiter de la fraîcheur matinale. Navigation à travers des paysages variés : regs (plateaux caillouteux), zones dunaires, oueds asséchés. Recherche de points d'eau traditionnels et d'anciennes pistes de caravanes. Observation approfondie de la faune et de la flore adaptées à l'aridité. Déjeuner pique-nique à l'ombre d'un acacia. Après-midi : continuation de l'exploration avec focus sur la photographie des paysages époustouflants. Retour au campement pour le coucher de soleil. Dîner d'adieu du désert et dernière nuit sous les étoiles.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration désert complète - Navigation extrême - Observation faune/flore - Photographie paysages - Dernière nuit désert
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Désert sahlien" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour vers le sud */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR VERS LE SUD</span>
                          <span className="text-sm text-gray-600">Trajet retour avec étapes intermédiaires</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Départ de Birao après le petit-déjeuner. Trajet retour vers le sud avec une longue journée de route. Arrêts réguliers pour se reposer et observer les paysages qui redeviennent progressivement plus verts. Déjeuner pique-nique en route. Arrivée en fin d'après-midi à un point d'étape entre N'Délé et Kaga-Bandoro. Installation du dernier bivouac de l'expédition. Session de synthèse avec l'équipe d'encadrement : retour sur les expériences vécues, échanges sur les impressions. Dernier dîner en bivouac et nuit sous tente.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Trajet retour - Observation paysages - Dernier bivouac - Synthèse expédition
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Route du retour" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Retour à Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR À BANGUI</span>
                          <span className="text-sm text-gray-600">Fin de l'expédition sahlienne</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-700">Retour et fin</h4>
                            <p className="text-justify mb-4">
                              Dernier petit-déjeuner en bivouac. Démontage du campement et chargement des véhicules. Trajet retour vers Bangui. Arrivée à Bangui en milieu d'après-midi. Transfert à votre hôtel. Temps libre pour se rafraîchir et se reposer. En fin d'après-midi, session de clôture avec l'équipe d'encadrement : remise de certificats de participation, échanges finaux, partage des photos. Dîner d'adieu dans un restaurant local. Nuit à l'hôtel à Bangui. (Selon l'horaire de votre vol international, possibilité de transfert à l'aéroport le soir même ou le lendemain matin).
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Retour vers Bangui - Démontage campement - Session clôture - Dîner d'adieu - Nuit hôtel
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Retour Bangui" 
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts de l'Aventure</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert sahlien" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Nomades" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Forteresses" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Ciels étoilés" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-orange-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏜️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-orange-700">Les Expériences Sahéliennes</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette aventure est une immersion totale dans le monde sahélo-saharien. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région extrême, de l'expédition désertique aux rencontres humaines authentiques avec les derniers grands nomades.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Expédition désert" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rencontre nomades" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Histoire sultanats" 
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
                            ? 'bg-orange-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-orange-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-orange-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-orange-700 mt-1">•</span>
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
                                  exp.id === 'sahara' 
                                    ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'nomades'
                                    ? 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'faune'
                                    ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'sahara' ? 10.0 : 
                                   exp.id === 'nomades' ? 9.5 :
                                   exp.id === 'faune' ? 9.0 :
                                   8.5} 
                              lng={exp.id === 'sahara' ? 22.0 : 
                                   exp.id === 'nomades' ? 21.5 :
                                   exp.id === 'faune' ? 21.0 :
                                   20.5} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Désert et Culture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                          alt="Expédition désertique" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Expédition Désertique</h5>
                          <p className="text-sm text-gray-700">Navigation en convoi tout-terrain</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600" 
                          alt="Rencontre nomades" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Peuples Nomades</h5>
                          <p className="text-sm text-gray-700">Immersion dans la culture pastorale</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Histoire Sultanats" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Histoire Sultanats</h5>
                          <p className="text-sm text-gray-700">Forteresses du Dar Runga</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages désertiques" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Vie nomade" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Architecture historique" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-amber-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Vol en ULM au-dessus du désert</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Survolez les paysages sahéliens pour une perspective aérienne. Supplément : 350€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en campement nomade</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience d'une nuit dans un campement nomade traditionnel. Supplément : 200€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier de navigation désertique</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Apprentissage approfondi des techniques de navigation en désert. Supplément : 150€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Session photo professionnelle</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Accompagnement par un photographe professionnel spécialisé. Supplément : 250€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Bivouac et Confort en Milieu Extrême</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-orange-700 w-16 md:w-32"></span>
                      <span className="text-orange-700 text-2xl">🏕️</span>
                      <span className="h-px bg-orange-700 w-16 md:w-32"></span>
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
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bivouac en désert" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Campement nomade" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette aventure combine confort urbain et expérience de bivouac en milieu extrême. À Bangui, vous séjournerez dans un hôtel confortable avec toutes les commodités. Pendant l'expédition, vous découvrirez le bivouac en autonomie sous tentes de qualité professionnelle, avec cuisine de camp et équipement adapté aux conditions désertiques. Ces hébergements mobiles permettent de s'immerger totalement dans l'environnement sahlien tout en bénéficiant d'un confort minimal nécessaire.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-orange-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bivouac')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bivouac' 
                          ? 'bg-orange-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUAC (8 NUITS)
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
                              <div className="absolute top-4 left-4 bg-orange-700 text-white px-3 py-1 text-sm font-bold">
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
                              L'Hotel Oubangui Palace est l'un des établissements les plus réputés de Bangui. Situé en plein centre-ville, il offre un confort moderne avec des chambres climatisées, une connexion Wi-Fi, et un service de qualité. Le restaurant de l'hôtel propose une cuisine internationale et des spécialités centrafricaines. Sa terrasse offre une belle vue sur la ville. L'hôtel dispose également d'un service de sécurité 24h/24 et d'un personnel francophone attentif. Idéal pour les nuits avant et après l'expédition.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bivouac */}
                  {activeHotelTab === 'bivouac' && (
                    <div className="space-y-16">
                      {/* Bivouac désertique professionnel */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                              alt="Bivouac désertique" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac Désertique Professionnel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Divers sites en brousse et désert, Nord RCA
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Tentes professionnelles 2-3 places</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛏️</span>
                                <span className="text-sm font-semibold">Matelas auto-gonflants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍳</span>
                                <span className="text-sm font-semibold">Cuisine de camp équipée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💡</span>
                                <span className="text-sm font-semibold">Éclairage solaire</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Pendant l'expédition, vous dormirez sous tente dans des bivouacs mobiles installés chaque soir dans des sites choisis pour leur beauté et leur sécurité. Les tentes sont des modèles professionnels adaptés aux conditions désertiques (résistance au vent, isolation thermique). Chaque participant dispose d'un matelas auto-gonflant et d'un sac de couchage adapté aux températures fraîches du désert. La cuisine est assurée par un cuisinier professionnel qui prépare des repas équilibrés avec les moyens du bord. Des toilettes sèches et une douche solaire portable sont installées à chaque bivouac.
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
                  <span className="text-2xl">🏜️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Aventure</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Aventure Sahélienne" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Expédition dans le désert sahlien</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-orange-700">$3,799</span>
                    <span className="text-xl line-through text-gray-500">$3,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Expédition complète</div>
                  <div className="mt-2 text-xs text-orange-700 bg-orange-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, convoi 4x4, guide expert, hébergements, tous repas, matériel camping
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Réservez avant le 30 avril 2026 et économisez 200$ par personne
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-11-10">10 Novembre 2026</option>
                    <option value="2026-12-08">8 Décembre 2026</option>
                    <option value="2027-01-12">12 Janvier 2027</option>
                    <option value="2027-02-09">9 Février 2027</option>
                    <option value="2027-11-09">9 Novembre 2027</option>
                    <option value="2027-12-07">7 Décembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de novembre à février (saison sèche, période optimale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-orange-700 to-amber-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION EXCLUSIVE</strong> limitée à 6 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par des guides experts désert</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-orange-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-orange-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-orange-700 text-white py-4 font-semibold text-base mb-4 hover:bg-orange-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur l'aventure ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts en voyages extrêmes vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,5.0,25.0,10.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Aventure Sahélienne miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Aventure Sahélienne - 10 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Bangui → Convoi → Nord RCA → Désert
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
                    <span>Convoi 4x4 avec chauffeurs experts</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste désert francophone</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 nuits hôtel Bangui + 8 nuits bivouac</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant l'expédition</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Matériel camping professionnel</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée et autorisations locales</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24 et sécurité</span>
                    <span className="font-bold text-orange-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Expédition désert" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de l'aventure</span>
                    <span className="font-bold text-orange-700">Élevé</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum requis</span>
                    <span className="font-bold text-orange-700">25 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs novembre à février</span>
                    <span className="font-bold text-orange-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Encadrement</span>
                    <span className="font-bold text-orange-700">Experts désert</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-orange-700">6 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens, méningite
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-orange-200 p-4 mt-6 shadow-lg bg-orange-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Aventurier" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700">Témoignage Aventurier</h4>
                    <p className="text-xs text-gray-600">Marc L., explorateur 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une aventure extrême dans l'une des dernières régions sauvages d'Afrique. Les paysages désertiques à perte de vue, les rencontres authentiques avec les nomades, les nuits sous les étoiles dans le Sahara... Une expérience qui marque à vie. L'équipe était professionnelle et sécurisante malgré les conditions difficiles. Pour les amateurs de défis et d'authenticité, c'est le voyage parfait."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-orange-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Désert 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Nomades 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forteresse 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Ciels étoilés" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-orange-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-orange-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}