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
        <h4 className="font-semibold text-center text-lg">Itinéraire Kinshasa-Kasaï</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=20.0,-7.0,25.0,-4.0&layer=mapnik&marker=-4.4419,15.2663&marker=-6.1360,23.5899"
          style={{ border: 0 }}
          allowFullScreen
          title="Expédition Kasaï - RDC"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/-5.5/22.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Kananga</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mbuji-Mayi</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Lubumbashi</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Communautés Luba</span>
        </div>
      </div>
    </div>
  );
};

export default function Expeditioncoeur() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('kinshasa');
  const [activeExperienceTab, setActiveExperienceTab] = useState('luba');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '👑', title: 'Royaume Luba', desc: 'Immersion dans l\'histoire et la culture du peuple Luba' },
    { icon: '💎', title: 'Mines de Diamants', desc: 'Découverte de l\'industrie diamantifère à Mbuji-Mayi' },
    { icon: '🎭', title: 'Danses Traditionnelles', desc: 'Spectacles de danses et rituels ancestraux' },
    { icon: '🏺', title: 'Artisanat Local', desc: 'Rencontre avec les artisans et leur savoir-faire' },
    { icon: '🌾', title: 'Savanes du Kasaï', desc: 'Paysages de savanes et de forêts claires' },
    { icon: '🏛️', title: 'Patrimoine Historique', desc: 'Sites historiques et culturels du Kasaï' },
  ];

  const regions = [
    { 
      name: 'Kinshasa', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Point de départ vers le cœur du Kasaï',
      features: ['Départ expédition', 'Briefing culturel', 'Vol intérieur', 'Préparation']
    },
    { 
      name: 'Kananga', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Capitale du Kasaï Central, porte d\'entrée vers le royaume Luba',
      features: ['Histoire Luba', 'Marchés locaux', 'Artisanat', 'Point de départ excursions']
    },
    { 
      name: 'Mbuji-Mayi', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Capitale du diamant, centre économique du Kasaï Oriental',
      features: ['Mines de diamants', 'Économie locale', 'Culture urbaine', 'Traditions modernes']
    },
    { 
      name: 'Territoires Luba', 
      color: 'bg-lime-100', 
      textColor: 'text-lime-800', 
      desc: 'Régions rurales préservant les traditions ancestrales',
      features: ['Villages traditionnels', 'Chefferies', 'Rites culturels', 'Transmission savoir']
    },
    { 
      name: 'Savanes du Kasaï', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Paysages caractéristiques de savanes et forêts claires',
      features: ['Paysages uniques', 'Faune locale', 'Agriculture', 'Écosystèmes']
    },
    { 
      name: 'Lubumbashi', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Point de retour, capitale du Katanga',
      features: ['Retour expédition', 'Synthèse culturelle', 'Dernière nuit', 'Départ international']
    },
  ];

  const experiences = [
    { 
      id: 'luba',
      name: 'Culture Luba', 
      icon: '👑',
      desc: 'Immersion dans l\'histoire et les traditions du royaume Luba',
      highlights: ['Histoire royale', 'Traditions ancestrales', 'Organisation sociale', 'Patrimoine culturel'],
      details: 'Le peuple Luba, l\'un des plus importants groupes ethniques de la RDC, possède une histoire riche et complexe. L\'ancien royaume Luba, fondé au XVIe siècle, était réputé pour son système politique sophistiqué, son art royal (notamment les statues et les sièges à caryatides) et ses traditions. Vous rencontrerez des détenteurs de la tradition, visiterez des sites historiques, découvrirez l\'organisation sociale traditionnelle et les rituels encore pratiqués aujourd\'hui. Une immersion profonde dans une culture qui a marqué l\'histoire de l\'Afrique centrale.'
    },
    { 
      id: 'diamants',
      name: 'Mines de Diamants', 
      icon: '💎',
      desc: 'Découverte de l\'industrie diamantifère à Mbuji-Mayi, capitale mondiale du diamant industriel',
      highlights: ['Visite mines artisanales', 'Économie du diamant', 'Impact local', 'Processus extraction'],
      details: 'Mbuji-Mayi est la capitale mondiale du diamant industriel. Cette ville doit sa croissance rapide à l\'exploitation des diamants depuis les années 1910. Vous découvrirez le processus d\'extraction, depuis les mines artisanales jusqu\'aux centres de tri. Vous rencontrerez des creuseurs, des négociants, et comprendrez l\'impact économique et social de cette industrie sur la région. Une visite encadrée et sécurisée qui vous permettra de saisir les réalités complexes de l\'économie minière en RDC.'
    },
    { 
      name: 'Danses et Musiques', 
      icon: '🎭',
      desc: 'Spectacles de danses traditionnelles et initiation aux instruments de musique',
      highlights: ['Danses rituelles', 'Musiques traditionnelles', 'Instruments locaux', 'Performances'],
      details: 'La culture Luba est riche en expressions artistiques, particulièrement en danses et musiques rituelles. Vous assisterez à des spectacles de danses traditionnelles exécutées par des groupes locaux : danses de masques, danses de guerre, danses de réjouissance. Vous serez initié aux instruments de musique traditionnels comme le tambour, la sanza (piano à pouces), et divers instruments à cordes. Des musiciens et danseurs partageront avec vous la signification culturelle de chaque performance. Une expérience sensorielle et culturelle intense.'
    },
    { 
      id: 'artisanat',
      name: 'Artisanat Traditionnel', 
      icon: '🏺',
      desc: 'Rencontre avec les artisans et découverte des techniques traditionnelles',
      highlights: ['Sculpture sur bois', 'Vannerie', 'Poterie', 'Tissage'],
      details: 'Le Kasaï est réputé pour son artisanat de qualité. Vous rencontrerez des artisans spécialisés dans différentes disciplines : sculpteurs sur bois (célèbres pour leurs statues et masques), vanniers (fabrication de paniers et objets utilitaires), potiers (céramique traditionnelle), et tisserands. Vous découvrirez les techniques transmises de génération en génération, les matériaux utilisés, et la signification culturelle des motifs. Vous pourrez également acquérir des pièces authentiques directement auprès des artisans.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image du Kasaï */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Expédition au Cœur du Kasaï</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">👑</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              10 jours d'immersion culturelle au cœur du royaume Luba et des mines de diamants
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
            <span className="text-2xl">💎</span>
            <span className="text-sm font-semibold">RDC | CULTURE & TRADITIONS</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Culture Luba" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Traditions et danses du peuple Luba</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mines de diamants" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Mines de diamants à Mbuji-Mayi</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Paysages du Kasaï" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Savanes et paysages du Kasaï</p>
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
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RDC2</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - Kinshasa à Mbuji-Mayi</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une immersion authentique dans la culture Luba et la réalité du Kasaï</span>
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
                      src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Culture Luba" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Danses traditionnelles du peuple Luba</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Mines de diamants" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Industrie diamantifère à Mbuji-Mayi</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette expédition de 10 jours vous emmène au cœur du Kasaï, région historique et culturelle de la République Démocratique du Congo. Terre du peuple Luba et capitale mondiale du diamant industriel, le Kasaï offre une immersion unique dans les traditions ancestrales et les réalités économiques contemporaines.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Kinshasa d'où vous prendrez un vol vers Kananga, porte d'entrée du Kasaï Central. Vous découvrirez l'histoire du royaume Luba, ses traditions, son art et son organisation sociale. Vous poursuivrez vers Mbuji-Mayi, capitale du diamant, pour comprendre l'industrie qui façonne la région. Vous rencontrerez artisans, danseurs, détenteurs de traditions, et découvrirez les paysages caractéristiques de savanes du Kasaï. Un voyage culturel profond et authentique.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Paysages du Kasaï" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Savanes du Kasaï : paysages caractéristiques de la région</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs curieux souhaitant découvrir une culture africaine riche et complexe, loin des sentiers touristiques traditionnels. Accompagné de guides spécialistes de la culture Luba, vous vivrez des rencontres authentiques, participerez à des cérémonies traditionnelles, et comprendrez les défis et opportunités de cette région fascinante. Une expédition culturelle qui vous transformera.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Atouts de l'Expédition</h3>
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
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat local" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Villages traditionnels" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de cette Expédition</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Luba" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Immersion dans la culture Luba</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mines de diamants" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Découverte des mines de diamants</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Culture Luba</strong> : immersion dans l'histoire et les traditions du royaume</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Mines de diamants</strong> : compréhension de l'industrie à Mbuji-Mayi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Danses traditionnelles</strong> : spectacles et initiation aux rythmes Luba</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Artisanat local</strong> : rencontre avec les artisans et découverte des techniques</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontres authentiques</strong> : avec les communautés locales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Paysages du Kasaï</strong> : découverte des savanes caractéristiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Cuisine traditionnelle</strong> : dégustation des spécialités locales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Marchés locaux</strong> : immersion dans la vie économique du Kasaï</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Kasaï avec image */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Kasaï" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Kasaï : Cœur Culturel de la RDC</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Le Kasaï est une vaste région du centre de la République Démocratique du Congo, divisée en plusieurs provinces (Kasaï, Kasaï Central, Kasaï Oriental). C'est le berceau du peuple Luba, dont l'ancien royaume, fondé au XVIe siècle, fut l'un des plus puissants et sophistiqués d'Afrique centrale. La région est également célèbre pour ses diamants : Mbuji-Mayi est la capitale mondiale du diamant industriel. Le Kasaï combine ainsi riche patrimoine culturel et importance économique. Ses paysages de savanes et forêts claires, ses traditions vivantes, et son artisanat réputé en font une destination fascinante pour qui veut comprendre la diversité de la RDC.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Culture Luba</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Diamants</span>
                          <span className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full">Artisanat</span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Traditions</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Immersion Culturelle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Culture Luba" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">KASAÏ EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie totale</div>
                        <div className="text-3xl font-bold">300,000</div>
                        <div className="text-xs text-white/80">km² (région Kasaï)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Population Luba</div>
                        <div className="text-3xl font-bold">13M</div>
                        <div className="text-xs text-white/80">personnes environ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Production diamants</div>
                        <div className="text-3xl font-bold">70%</div>
                        <div className="text-xs text-white/80">de la production RDC</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Fondation royaume</div>
                        <div className="text-3xl font-bold">1585</div>
                        <div className="text-xs text-white/80">royaume Luba fondé</div>
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
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Mbuji-Mayi" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours en Terre Luba</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Cette expédition vous emmène de Kinshasa, la capitale, au cœur du Kasaï, à plus de 1000 km à l'est. Vous prendrez un vol vers Kananga, capitale du Kasaï Central et porte d'entrée vers le royaume Luba. De là, vous explorerez les territoires Luba, visiterez des villages traditionnels, rencontrerez des détenteurs de traditions. Vous poursuivrez vers Mbuji-Mayi, capitale du diamant, pour comprendre cette industrie clé. Le circuit se termine par un vol vers Lubumbashi pour votre retour international. Un parcours qui traverse les paysages de savanes et forêts claires caractéristiques du Kasaï.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-green-700 font-bold">~1,200 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vols intérieurs</div>
                            <div className="text-green-700 font-bold">2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Villes principales</div>
                            <div className="text-green-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Villages visités</div>
                            <div className="text-green-700 font-bold">5+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Kinshasa' 
                                    ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Kananga'
                                    ? 'https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Mbuji-Mayi'
                                    ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Territoires Luba'
                                    ? 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Savanes du Kasaï'
                                    ? 'https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Culture et Paysages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Luba 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Diamants 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages Kasaï" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Kinshasa</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, vol vers Kananga</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Kananga & Région</div>
                      <div className="text-xs opacity-80">Culture Luba, villages, traditions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Mbuji-Mayi</div>
                      <div className="text-xs opacity-80">Diamants, économie, culture urbaine</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-10</div>
                      <div className="text-sm">Retour</div>
                      <div className="text-xs opacity-80">Vol vers Lubumbashi, départ international</div>
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
                            <strong>Niveau moyen (3/5)</strong> : Cette expédition comporte des trajets en voiture sur routes parfois difficiles, des marches dans les villages, et des conditions d'hébergement simples en zone rurale. Le climat est tropical avec des températures élevées. Une bonne condition physique générale et une adaptabilité sont nécessaires. L'âge minimum recommandé est de 18 ans. Les participants doivent être ouverts d'esprit et prêts à s'adapter aux conditions locales.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Condition physique et adaptabilité requises</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Trajets sur routes parfois difficiles</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 18 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600">●</span>
                              <span className="text-sm">Ouverture d'esprit et flexibilité</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🎒</span>
                              <span>Sac à dos jour (20-30L) et sac principal</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>👕</span>
                              <span>Vêtements légers, respirants et modestes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🦟</span>
                              <span>Anti-moustiques et moustiquaire</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo (demander autorisation avant)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire et chapeau</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale complète</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de marche confortables</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💡</span>
                              <span>Lampe frontale et batteries</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement expédition" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Culture Luba" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Expédition Culturelle ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Immersion authentique dans la culture Luba</h4>
                            <p className="text-sm text-gray-700">
                              Accès à des communautés rarement visitées par les touristes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Compréhension des réalités économiques</h4>
                            <p className="text-sm text-gray-700">
                              Découverte de l'industrie diamantifère et son impact.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Accompagnement par des spécialistes</h4>
                            <p className="text-sm text-gray-700">
                              Guides connaissant parfaitement la culture et la région.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-700 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Voyage responsable et respectueux</h4>
                            <p className="text-sm text-gray-700">
                              Rencontres préparées avec soin et respect des communautés.
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
                              Arrivée à l'aéroport international de N'djili de Kinshasa. Accueil par votre guide spécialiste de la culture Luba. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur l'expédition à venir : présentation de la région du Kasaï, du peuple Luba, des règles de conduite culturelle, du programme détaillé. Distribution des équipements si nécessaire. Dîner de bienvenue avec spécialités congolaises. Nuit à l'hôtel à Kinshasa.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing expédition - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Kinshasa" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Vol Kinshasa-Kananga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VOL KINSHASA-KANANGA</span>
                          <span className="text-sm text-gray-600">Arrivée au cœur du Kasaï, première immersion</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Arrivée en terre Luba</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner tôt à l'hôtel. Transfert à l'aéroport pour le vol vers Kananga (environ 1h30 de vol). Vue aérienne sur les paysages du Kasaï. Arrivée à l'aéroport de Kananga, capitale du Kasaï Central. Accueil par l'équipe locale. Transfert à votre hôtel. Installation. Déjeuner à l'hôtel. Après-midi : première immersion dans Kananga. Visite du marché central, animation typique de la ville. Rencontre avec un historien local pour une introduction à l'histoire du peuple Luba et du royaume. Dîner et nuit à l'hôtel à Kananga.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Vol Kinshasa-Kananga - Transfert hôtel - Visite marché - Introduction histoire Luba
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Kananga" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Culture Luba à Kananga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CULTURE LUBA À KANANGA</span>
                          <span className="text-sm text-gray-600">Découverte approfondie des traditions Luba</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée culturelle</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de la culture Luba. Visite du musée national du Kasaï (collections d'art Luba, histoire du royaume). Rencontre avec des détenteurs de la tradition Luba : anciens, gardiens de la mémoire. Explications sur l'organisation sociale traditionnelle, le système politique du royaume, les rites et croyances. Déjeuner avec spécialités locales. Après-midi : atelier d'initiation à la langue Luba (quelques phrases de base). Rencontre avec des artisans locaux (sculpteurs, vanniers). Retour à l'hôtel en fin d'après-midi. Dîner et nuit à Kananga.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite musée - Rencontre détenteurs traditions - Atelier langue Luba - Rencontre artisans
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Art Luba" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Excursion village Luba */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXCURSION VILLAGE LUBA</span>
                          <span className="text-sm text-gray-600">Immersion dans un village traditionnel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée villageoise</h4>
                            <p className="text-justify mb-4">
                              Départ matinal en 4x4 vers un village Luba traditionnel en périphérie de Kananga (environ 1h de route). Arrivée au village. Accueil cérémoniel par le chef du village et les anciens. Présentation des traditions villageoises : organisation sociale, agriculture, vie quotidienne. Visite du village : habitations traditionnelles, espace communautaire, lieux de rituels. Participation à des activités quotidiennes (selon la saison). Déjeuner traditionnel préparé par les femmes du village. Après-midi : spectacle de danses traditionnelles Luba exécuté par les villageois. Échanges approfondis avec les habitants. Retour à Kananga en fin d'après-midi. Dîner et nuit à l'hôtel.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route vers village - Accueil cérémoniel - Vie villageoise - Danses traditionnelles - Retour Kananga
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Village Luba" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route Kananga-Mbuji-Mayi */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE KANANGA-MBUJI-MAYI</span>
                          <span className="text-sm text-gray-600">Traversée des paysages du Kasaï, arrivée à la capitale du diamant</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de route</h4>
                            <p className="text-justify mb-4">
                              Départ de Kananga en direction de Mbuji-Mayi (environ 250 km, 5-6 heures de route). Traversée des paysages caractéristiques du Kasaï : savanes, forêts claires, villages. Arrêts en route pour observer la vie rurale, photographier les paysages. Déjeuner pique-nique en route. Arrivée à Mbuji-Mayi en fin d'après-midi. Premières impressions de la ville : animation, activité économique visible. Installation à l'hôtel. Briefing sur le programme des jours suivants consacrés aux diamants. Dîner et nuit à l'hôtel à Mbuji-Mayi.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route Kananga-Mbuji-Mayi - Observation paysages - Arrivée Mbuji-Mayi - Installation
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Route Kasaï" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Diamants à Mbuji-Mayi */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DIAMANTS À MBUJI-MAYI</span>
                          <span className="text-sm text-gray-600">Découverte de l\'industrie diamantifère</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée diamants</h4>
                            <p className="text-justify mb-4">
                              Matinée consacrée à la découverte de l'industrie du diamant. Visite d'une mine artisanale (sous stricte supervision et avec toutes les autorisations). Observation du processus d'extraction, rencontre avec des creuseurs. Explications sur l'économie du diamant, les conditions de travail, les enjeux. Déjeuner à Mbuji-Mayi. Après-midi : visite d'un centre de tri (si autorisé) ou rencontre avec un négociant de diamants (explications sur les différentes qualités, le commerce). Discussion sur l'impact économique et social des diamants sur la région. Retour à l'hôtel en fin d'après-midi. Dîner et nuit à Mbuji-Mayi.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite mine artisanale - Rencontre creuseurs - Économie du diamant - Centre de tri/négociant
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Diamants" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Mbuji-Mayi et culture urbaine */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">MBUJI-MAYI ET CULTURE URBAINE</span>
                          <span className="text-sm text-gray-600">Découverte de la ville et de sa vie culturelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée urbaine</h4>
                            <p className="text-justify mb-4">
                              Matinée de visite de Mbuji-Mayi. Découverte des différents quartiers, du marché central (animation, produits). Visite de sites culturels : centre culturel, églises intéressantes. Rencontre avec des acteurs de la société civile, des artistes locaux. Discussion sur la vie à Mbuji-Mayi, les défis et opportunités d'une ville minière. Déjeuner dans un restaurant local. Après-midi : temps libre pour les achats d'artisanat ou repos. Option : visite complémentaire selon intérêts du groupe (école, projet communautaire, etc.). En fin d'après-midi, synthèse sur l'expérience Kasaï avec votre guide. Dîner d'adieu à Mbuji-Mayi. Nuit à l'hôtel.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite Mbuji-Mayi - Marché central - Rencontre acteurs locaux - Synthèse expérience - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Mbuji-Mayi" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Vol Mbuji-Mayi-Lubumbashi */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VOL MBUJI-MAYI-LUBUMBASHI</span>
                          <span className="text-sm text-gray-600">Transfert vers la capitale du Katanga</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de transfert</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Transfert à l'aéroport de Mbuji-Mayi. Vol vers Lubumbashi (environ 1h30 de vol). Arrivée à Lubumbashi, capitale de la province du Haut-Katanga. Transfert à votre hôtel. Installation. Déjeuner à l'hôtel. Après-midi libre pour se reposer après l'expédition. Option : courte visite de Lubumbashi (avenue Lumumba, centre-ville) selon l'énergie du groupe. En fin d'après-midi, session de synthèse finale de l'expédition avec votre guide. Partage des impressions, questions-réponses. Dîner et nuit à l'hôtel à Lubumbashi.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Vol Mbuji-Mayi-Lubumbashi - Transfert hôtel - Repos - Synthèse finale - Dîner
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lubumbashi" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Lubumbashi libre */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">LUBUMBASHI LIBRE</span>
                          <span className="text-sm text-gray-600">Journée libre ou visites optionnelles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée au choix</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Journée libre selon les préférences du groupe. Options possibles (non incluses dans le prix de base) : visite complète de Lubumbashi (musée national, cathédrale, marché), excursion aux chutes de Lofoi (les plus hautes d'Afrique centrale, à environ 200 km), visite d'une entreprise minière (cuivre/cobalt), ou simple repos à l'hôtel. Déjeuner libre. Après-midi : continuation des activités au choix. En fin d'après-midi, préparation des bagages pour le départ. Dîner de fin d'expédition. Nuit à l'hôtel à Lubumbashi.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Journée libre au choix - Options visites - Repos - Préparation départ - Dîner de fin
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lubumbashi libre" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Retour international */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR INTERNATIONAL</span>
                          <span className="text-sm text-gray-600">Transfert à l'aéroport et départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-green-700">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol international, temps libre pour les derniers achats ou repos. Transfert à l'aéroport international de Lubumbashi en fonction de l'horaire de vol. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette expédition au cœur du Kasaï : la richesse de la culture Luba, la réalité complexe de l'industrie diamantifère, les paysages de savanes, et les rencontres authentiques avec les habitants. Une expérience transformatrice qui vous aura fait découvrir une région fascinante et méconnue de la RDC.
                            </p>
                            <div className="bg-green-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Temps libre - Transfert aéroport - Départ international
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport Lubumbashi" 
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
                        src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Luba" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mines de diamants" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Villages traditionnels" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Paysages Kasaï" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">👑</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Culturelles et Humaines</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition est une immersion profonde dans la culture Luba et les réalités du Kasaï. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cette région fascinante, des traditions ancestrales aux réalités économiques contemporaines.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Culture Luba" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Mines de diamants" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Artisanat local" 
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
                                  exp.id === 'luba' 
                                    ? 'https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'diamants'
                                    ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'artisanat'
                                    ? 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'luba' ? -5.8960 : 
                                   exp.id === 'diamants' ? -6.1360 :
                                   exp.id === 'artisanat' ? -5.8960 :
                                   -5.85} 
                              lng={exp.id === 'luba' ? 22.4175 : 
                                   exp.id === 'diamants' ? 23.5899 :
                                   exp.id === 'artisanat' ? 22.4175 :
                                   23.5} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Culture et Rencontres</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?w=600" 
                          alt="Culture Luba" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Royaume Luba</h5>
                          <p className="text-sm text-gray-700">Histoire et traditions ancestrales</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600" 
                          alt="Mines de diamants" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Industrie Diamantifère</h5>
                          <p className="text-sm text-gray-700">Mbuji-Mayi, capitale du diamant industriel</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600" 
                          alt="Artisanat local" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Artisanat Traditionnel</h5>
                          <p className="text-sm text-gray-700">Sculpture, vannerie, poterie</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Danses traditionnelles" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Villages Luba" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Paysages Kasaï" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Initiation à la sculpture sur bois</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Atelier avec un maître sculpteur Luba. Supplément : 100€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Visite d'une exploitation agricole</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Découverte de l'agriculture locale et dégustation. Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en famille d'accueil</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Expérience d'une nuit dans une famille Luba. Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Session photo professionnelle</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Accompagnement par un photographe local. Supplément : 150€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels Confortables et Authenticité</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏨</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Kinshasa" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Kananga" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Mbuji-Mayi" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette expédition vous propose des hébergements adaptés aux réalités du Kasaï. À Kinshasa, Kananga, Mbuji-Mayi et Lubumbashi, vous séjournerez dans des hôtels de catégorie 3 étoiles offrant un bon confort. Ces établissements sont choisis pour leur propreté, leur sécurité et leur service. En zone rurale, les conditions peuvent être plus simples mais toujours propres et sécurisées. L'accent est mis sur l'authenticité et l'immersion plutôt que sur le luxe.
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
                      onClick={() => setActiveHotelTab('kananga')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kananga' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KANANGA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('mbuji')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'mbuji' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MBUJI-MAYI (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('lubumbashi')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lubumbashi' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUBUMBASHI (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Kinshasa */}
                  {activeHotelTab === 'kinshasa' && (
                    <div className="space-y-16">
                      {/* Hotel Memling */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Memling" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Memling</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Kinshasa, République Démocratique du Congo
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
                              L'Hotel Memling est un établissement réputé de Kinshasa, situé en plein centre-ville. Il offre des chambres climatisées avec salle de bain privée, télévision satellite, et connexion Wi-Fi. L'hôtel dispose d'un restaurant servant une cuisine internationale et des spécialités congolaises, d'un bar, et d'une piscine extérieure. Le service est professionnel et l'établissement est sécurisé. Idéal pour le début et la fin de l'expédition.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Kananga */}
                  {activeHotelTab === 'kananga' && (
                    <div className="space-y-16">
                      {/* Hotel La Concorde */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600" 
                              alt="Hotel La Concorde" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel La Concorde</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Kananga, Kasaï Central, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville de Kananga</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏨</span>
                                <span className="text-sm font-semibold">Chambres climatisées</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel La Concorde est l'un des meilleurs établissements de Kananga. Il propose des chambres confortables avec salle de bain privée, climatisation, et connexion Wi-Fi (parfois intermittente). L'hôtel dispose d'un restaurant servant une cuisine locale et internationale, et d'un personnel accueillant. Un hébergement de bon confort pour explorer la région du Kasaï Central.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Mbuji-Mayi */}
                  {activeHotelTab === 'mbuji' && (
                    <div className="space-y-16">
                      {/* Hotel Diamond Palace */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" 
                              alt="Hotel Diamond Palace" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Diamond Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Mbuji-Mayi, Kasaï Oriental, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">💎</span>
                                <span>Au cœur de la ville diamantifère</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏨</span>
                                <span className="text-sm font-semibold">Confort de base</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍛</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Diamond Palace offre un hébergement correct à Mbuji-Mayi, ville animée par l'industrie du diamant. Les chambres sont propres et équipées de lits confortables, de salle de bain privée, et de climatisation. L'hôtel dispose d'un restaurant servant des plats locaux. Le service est simple mais efficace. Un bon point de base pour découvrir la capitale du diamant.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lubumbashi */}
                  {activeHotelTab === 'lubumbashi' && (
                    <div className="space-y-16">
                      {/* Hotel Karavia */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hotel Karavia" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Karavia</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Lubumbashi, Haut-Katanga, République Démocratique du Congo
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Bien situé à Lubumbashi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine extérieure</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant de qualité</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Karavia est un établissement de bonne catégorie à Lubumbashi. Il offre des chambres spacieuses et confortables avec salle de bain privée, climatisation, télévision satellite, et connexion Wi-Fi. L'hôtel dispose d'un restaurant réputé, d'un bar, et d'une piscine extérieure agréable. Le service est professionnel. Un excellent choix pour clôturer l'expédition dans le confort.
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
                  <span className="text-2xl">👑</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Expédition Kasaï" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Culture Luba et traditions ancestrales</p>
                  </div>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$3,299</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Expédition complète</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, vols intérieurs Kinshasa-Kananga et Mbuji-Mayi-Lubumbashi, guide spécialiste, hébergements, repas selon programme
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ EXPÉDITION EXCLUSIVE : Groupe limité à 8 participants maximum
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
                    <option value="2026-05-15">15 Mai 2026</option>
                    <option value="2026-06-12">12 Juin 2026</option>
                    <option value="2026-07-10">10 Juillet 2026</option>
                    <option value="2026-08-07">7 Août 2026</option>
                    <option value="2026-09-04">4 Septembre 2026</option>
                    <option value="2026-10-02">2 Octobre 2026</option>
                    <option value="2027-05-14">14 Mai 2027</option>
                    <option value="2027-06-11">11 Juin 2027</option>
                    <option value="2027-07-09">9 Juillet 2027</option>
                    <option value="2027-08-06">6 Août 2027</option>
                    <option value="2027-09-03">3 Septembre 2027</option>
                    <option value="2027-10-01">1 Octobre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à octobre (saison sèche, meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION CULTURELLE</strong> accompagnée par un spécialiste Luba
                  </p>
                  <p className="text-xs text-gray-300">* Immersion authentique dans les communautés</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur l'expédition ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts culturels vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=20.0,-7.0,25.0,-4.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Kasaï miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Expédition Kasaï - 10 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Kinshasa → Vol → Kananga → Mbuji-Mayi → Vol → Lubumbashi
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
                    <span>Vols intérieurs Kinshasa-Kananga et Mbuji-Mayi-Lubumbashi</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste culture Luba francophone</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>9 nuits en hôtel (catégorie adaptée)</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Petits-déjeuners et déjeuners</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et activités programmées</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Culture Luba" 
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
                    <span className="font-bold text-green-700">Moyen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs mai à octobre</span>
                    <span className="font-bold text-green-700">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide</span>
                    <span className="font-bold text-green-700">Spécialiste culture Luba</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens, choléra
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Témoignage Anthropologue</h4>
                    <p className="text-xs text-gray-600">Marie D., ethnologue 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expédition exceptionnelle pour qui s'intéresse à la culture africaine. L'immersion dans le monde Luba est profonde et respectueuse. Les rencontres avec les détenteurs de traditions, les visites de villages, la découverte de l'industrie du diamant... Tout est bien équilibré. Le guide est d'une compétence rare. Un voyage qui m'a transformée et enrichie professionnellement."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-green-700">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1518834103328-6d3c3d34343b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Culture Luba 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Diamants 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Paysages Kasaï 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Artisanat 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
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