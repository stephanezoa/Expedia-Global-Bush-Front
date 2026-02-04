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
        <h4 className="font-semibold text-center text-lg">Itinéraire Aventure Pico Cão Grande</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik&marker=0.34,6.73&marker=0.28,6.61&marker=0.24,6.58&marker=0.20,6.55"
          style={{ border: 0 }}
          allowFullScreen
          title="Aventure Pico Cão Grande"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=11/0.34/6.73" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Camp de base Pico</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Forêt de Monte Carmo</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Cascades de Ribeira Peixe</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Zone Pico Cão Grande</span>
        </div>
      </div>
    </div>
  );
};

export default function AventureGrande() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('aventure');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '⛰️', title: 'Expédition Pico Cão Grande', desc: 'Approche du pic emblématique et randonnées en terrain difficile' },
    { icon: '🧗', title: 'Via Ferrata et Escalade', desc: 'Passages techniques avec équipement de sécurité et guides spécialisés' },
    { icon: '🌋', title: 'Géologie Volcanique', desc: 'Découverte des formations volcaniques uniques de l\'île' },
    { icon: '🌄', title: 'Vues Spectaculaires', desc: 'Panoramas à couper le souffle depuis les hauteurs' },
    { icon: '🏕️', title: 'Bivouac en Nature', desc: 'Nuits en campement au cœur de la forêt tropicale' },
    { icon: '🐒', title: 'Faune Sauvage', desc: 'Observation des espèces endémiques dans leur habitat naturel' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Point de départ, préparation technique et briefing sécurité',
      features: ['Briefing technique', 'Vérification équipement', 'Préparation physique', 'Rencontre guides']
    },
    { 
      name: 'Camp de Base Pico', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Campement avancé pour l\'approche du Pico Cão Grande',
      features: ['Bivouac en forêt', 'Cuisine de camp', 'Point de ravitaillement', 'Base des expéditions']
    },
    { 
      name: 'Forêt de Monte Carmo', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Forêt primaire dense avec sentiers techniques et passages aériens',
      features: ['Forêt primaire', 'Passages techniques', 'Tyroliennes', 'Observation faune']
    },
    { 
      name: 'Cascades de Ribeira Peixe', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Zone de cascades avec descentes en rappel et baignades sauvages',
      features: ['Descente en rappel', 'Canyoning', 'Baignade naturelle', 'Formations rocheuses']
    },
    { 
      name: 'Zone Pico Cão Grande', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Approche du pic volcanique emblématique, terrain technique et vues panoramiques',
      features: ['Terrain volcanique', 'Vues panoramiques', 'Passages exposés', 'Photos spectaculaires']
    },
    { 
      name: 'Plateau des Lontras', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Plateau d\'altitude avec vue sur l\'océan et le Pico Cão Grande',
      features: ['Plateau d\'altitude', 'Vue 360°', 'Observation oiseaux', 'Couchers de soleil']
    },
  ];

  const experiences = [
    { 
      id: 'aventure',
      name: 'Aventure Extrême', 
      icon: '🧗',
      desc: 'Randonnées techniques, via ferrata et approche du Pico Cão Grande',
      highlights: ['Via ferrata', 'Passages exposés', 'Terrain technique', 'Équipement spécialisé'],
      details: 'Ce circuit est conçu pour les amateurs d\'aventure et de défis physiques. Vous affronterez des terrains techniques, des passages aériens sécurisés et des dénivelés importants. L\'approche du Pico Cão Grande est le point culminant de l\'aventure, nécessitant une bonne condition physique et une tête pour les hauteurs.'
    },
    { 
      id: 'nature',
      name: 'Nature Sauvage', 
      icon: '🌿',
      desc: 'Immersion totale dans la forêt tropicale préservée de São Tomé',
      highlights: ['Forêt primaire', 'Faune endémique', 'Flore unique', 'Écosystèmes préservés'],
      details: 'São Tomé possède l\'un des taux d\'endémisme les plus élevés au monde. Vous explorerez des forêts primaires intactes, observerez des espèces uniques et découvrirez des écosystèmes préservés depuis des millénaires. Une expérience de connexion profonde avec la nature.'
    },
    { 
      id: 'camping',
      name: 'Vie en Campement', 
      icon: '🏕️',
      desc: 'Bivouac en pleine nature, nuits sous les étoiles et vie en communauté',
      highlights: ['Bivouac en forêt', 'Cuisine de camp', 'Nuits en tente', 'Vie en communauté'],
      details: 'Plusieurs nuits seront passées en campement au cœur de la forêt. Vous apprendrez à monter votre tente, participerez à la préparation des repas et partagerez des moments authentiques autour du feu. Une expérience de retour aux sources et de vie simple.'
    },
    { 
      id: 'technique',
      name: 'Techniques d\'Aventure', 
      icon: '⛓️',
      desc: 'Apprentissage et pratique des techniques de progression en terrain difficile',
      highlights: ['Via ferrata', 'Descente en rappel', 'Navigation terrain', 'Sécurité en montagne'],
      details: 'Vous serez initié aux techniques de progression en terrain difficile : utilisation du matériel de via ferrata, descente en rappel, navigation hors sentier, et mesures de sécurité en environnement sauvage. Encadré par des guides qualifiés.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🧗</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Aventure au Pico Cão Grande</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              9 jours d'expédition vers le pic volcanique emblématique de São Tomé
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
            <span className="text-2xl">🇸🇹</span>
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | AVENTURE EXTREME</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP4</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours - São Tomé à Pico Cão Grande</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour aventuriers confirmés, excellente condition physique requise</span>
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
                  Ce circuit de 9 jours est l'expédition ultime pour les aventuriers cherchant à défier les éléments et découvrir les paysages les plus spectaculaires de São Tomé. Centré autour du mythique Pico Cão Grande - une aiguille volcanique de 663 mètres qui semble jaillir de la forêt tropicale - ce voyage combine randonnée technique, via ferrata, bivouac en pleine nature et exploration de zones reculées.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure débutera par une préparation technique intensive à São Tomé, suivie d'une approche progressive vers le camp de base du Pico Cão Grande. Vous traverserez des forêts primaires intactes, descendrez en rappel des cascades spectaculaires et affronterez des passages techniques nécessitant l'utilisation d'équipement de sécurité. Chaque journée sera un nouveau défi, chaque nuit une immersion totale dans la nature sauvage de l'île.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Le point d'orgue de cette expédition est l'approche du Pico Cão Grande lui-même. Bien que l'ascension complète soit réservée aux grimpeurs d'élite, vous vous approcherez au plus près de ce géant de pierre, explorerez ses contreforts et découvrirez les vues les plus spectaculaires sur cette formation géologique unique au monde. Une aventure qui marquera votre vie de voyageur.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Défis Inoubliables du Voyage</h3>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Exclusives de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Approche du Pico Cão Grande</strong>, aiguille volcanique emblématique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Via ferrata dans la forêt tropicale</strong>, passages aériens sécurisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Descente en rappel de cascades</strong>, initiation au canyoning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Bivouac en pleine forêt primaire</strong>, nuits sous les étoiles</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Exploration de grottes volcaniques</strong>, découverte géologique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Navigation hors sentier</strong>, avec guides spécialisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation de la faune endémique</strong>, dans son habitat naturel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Vues panoramiques depuis le Plateau des Lontras</strong>, à 1.200m d'altitude</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'aventure */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">L'Aventure du Pico Cão Grande</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Pico Cão Grande (Pic du Grand Chien) est l'une des formations volcaniques les plus spectaculaires au monde. Cette aiguille de phonolite s'élève à 663 mètres au-dessus de la forêt tropicale environnante. Formé il y a environ 4 millions d'années, ce piton volcanique est un défi technique pour les grimpeurs et un symbole de l'île de São Tomé. Notre circuit vous permet de l'approcher au plus près sans nécessiter l'escalade technique de la paroi. La meilleure période pour cette expédition est la saison sèche (juillet à septembre), quand les sentiers sont moins glissants.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau difficile</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Condition physique</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Terrain technique</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Équipement spécialisé</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Via ferrata</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">L'AVENTURE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance totale</div>
                      <div className="text-3xl font-bold text-green-700">85</div>
                      <div className="text-xs">km de marche</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Dénivelé positif total</div>
                      <div className="text-3xl font-bold text-green-700">4,200</div>
                      <div className="text-xs">mètres cumulés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits en bivouac</div>
                      <div className="text-3xl font-bold text-green-700">4</div>
                      <div className="text-xs">nuits sous tente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude max atteinte</div>
                      <div className="text-3xl font-bold text-green-700">1,250</div>
                      <div className="text-xs">mètres (Plateau des Lontras)</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours de l'Expédition</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Cette expédition vous mènera à travers les paysages les plus sauvages et techniques de São Tomé. Vous commencerez par des randonnées d'acclimatation dans les forêts primaires, puis progresserez vers le camp de base du Pico Cão Grande. Les journées combineront marche d'approche, passages techniques et activités d'aventure. Les dernières journées seront consacrées à l'exploration des environs du Pico et à la remontée vers la civilisation. Un parcours progressif pour maximiser les chances de réussite et la sécurité.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Dénivelé max/jour</div>
                            <div className="text-green-700 font-bold">1,000m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Distance max/jour</div>
                            <div className="text-green-700 font-bold">18 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Passages techniques</div>
                            <div className="text-green-700 font-bold">6</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes traversés</div>
                            <div className="text-green-700 font-bold">5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de l'Expédition</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Expédition Pico Cão Grande"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=11/0.34/6.73" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Zones d'Aventure</h3>
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
                      <div className="text-sm">Préparation à São Tomé</div>
                      <div className="text-xs opacity-80">Arrivée, briefings, randonnées d'acclimatation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-7</div>
                      <div className="text-sm">Expédition Pico Cão Grande</div>
                      <div className="text-xs opacity-80">Bivouac, via ferrata, approche du Pico</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8-9</div>
                      <div className="text-sm">Retour et départ</div>
                      <div className="text-xs opacity-80">Retour à São Tomé, dernière nuit, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Équipement Requis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau difficile (4/5)</strong> : Ce circuit est réservé aux personnes en excellente condition physique, ayant une expérience de la randonnée en terrain difficile. Les journées sont longues (6-10h de marche), les dénivelés importants (jusqu'à 1.000m/jour) et certains passages techniques nécessitent l'utilisation d'équipement de sécurité. Une tête pour les hauteurs est indispensable.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Excellente condition physique indispensable</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Expérience de randonnée en montagne requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum : 18 ans (25 ans recommandé)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Certificat médical d'aptitude obligatoire</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Personnel Requis</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de randonnée montante</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos 40-50L (bivouac)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste imperméable Gore-Tex</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Gourdes ou camelbak 3L</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🛌</span>
                          <span>Sac de couchage confort 0°C</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧦</span>
                          <span>Chaussettes techniques (x5)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧤</span>
                          <span>Gants techniques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🦯</span>
                          <span>Bâtons de randonnée télescopiques</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Expédition ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Approche exclusive du Pico Cão Grande</h4>
                        <p className="text-sm text-gray-700">
                          Peu de circuits permettent de s'approcher aussi près de cette formation géologique unique. Une expérience rare et privilégiée.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Encadrement par des guides spécialistes</h4>
                        <p className="text-sm text-gray-700">
                          Vos guides sont des experts du terrain santoméen, formés aux techniques de progression en milieu difficile et aux secours en montagne.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Équipement technique fourni</h4>
                        <p className="text-sm text-gray-700">
                          Tout l'équipement technique nécessaire (via ferrata, rappel, sécurité) est fourni et régulièrement contrôlé.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Groupe limité à 4 participants</h4>
                        <p className="text-sm text-gray-700">
                          Pour des raisons de sécurité et de qualité d'encadrement, les groupes sont limités à 4 aventuriers maximum.
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
                  {/* Jour 1 - Arrivée et préparation */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE ET PRÉPARATION</span>
                          <span className="text-sm text-gray-600">Accueil, briefing technique et vérification de l'équipement</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide chef d'expédition, spécialiste du Pico Cão Grande. Transfert à l'hôtel à São Tomé. Après-midi consacré aux briefings techniques détaillés : présentation du circuit, des défis techniques, des mesures de sécurité. Vérification minutieuse de l'équipement personnel de chaque participant. Distribution de l'équipement technique fourni (harnais, casque, longes, etc.). Première séance d'entraînement aux techniques de base (nœuds, utilisation du matériel). Dîner de bienvenue avec l'équipe d'encadrement. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Acclimatation et test technique */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ACCLIMATATION ET VIA FERRATA</span>
                          <span className="text-sm text-gray-600">Randonnée d'acclimatation et initiation à la via ferrata</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée test technique</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal vers la forêt de Monte Carmo. Randonnée d'acclimatation de 4 heures (8 km, dénivelé +500m) à travers la forêt primaire. Arrivée sur un site de via ferrata aménagé. Initiation aux techniques de progression sur via ferrata : utilisation du harnais, des longes de sécurité, des mousquetons. Pratique sur un parcours d'entraînement de difficulté modérée. Déjeuner pique-nique sur place. Après-midi : continuation de la via ferrata avec des passages plus techniques. Retour à São Tomé en fin d'après-midi. Dernier briefing avant le départ en expédition. Dîner et nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 8 km - 4h - Dénivelé +500m - Via ferrata d'initiation
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Départ vers le camp de base */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LE CAMP DE BASE</span>
                          <span className="text-sm text-gray-600">Première journée de marche avec sac lourd vers le camp de base</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Début de l'expédition</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de São Tomé en véhicule 4x4 jusqu'au point de départ de la marche (environ 1h30). Début de la marche avec sac lourd (40-50L) contenant l'équipement de bivouac. Randonnée de 6 heures (12 km, dénivelé +800m) à travers la forêt tropicale humide. Sentier technique avec passages boueux et franchissement de rivières. Arrivée au camp de base en fin d'après-midi. Installation des tentes, préparation du campement. Première nuit en bivouac. Préparation du dîner sur feu de bois. Briefing sur le programme des jours suivants. Nuit sous tente.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 12 km - 6h - Dénivelé +800m - Sac lourd
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Exploration des contreforts du Pico */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CONTR EFORTS DU PICO</span>
                          <span className="text-sm text-gray-600">Première approche des contreforts du Pico Cão Grande</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'exploration technique</h4>
                        <p className="text-justify mb-4">
                          Journée d'exploration sans sac lourd (sacs à dos légers). Départ du camp de base pour une marche d'approche de 2 heures vers les contreforts du Pico Cão Grande. Premier contact visuel avec l'aiguille volcanique. Randonnée technique à travers les formations rocheuses volcaniques. Passage d'une première via ferrata courte mais exposée. Arrivée à un point de vue spectaculaire sur le Pico. Déjeuner pique-nique avec vue sur le géant de pierre. Après-midi : exploration des grottes volcaniques aux alentours. Retour au camp de base en fin d'après-midi. Dîner et nuit sous tente.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 8 km - 5h - Dénivelé +400m - Via ferrata courte
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Cascades et rappel */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CASCADES ET RAPPEL</span>
                          <span className="text-sm text-gray-600">Journée canyoning avec descente en rappel de cascades</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée canyoning</h4>
                        <p className="text-justify mb-4">
                          Transfert à pied vers les cascades de Ribeira Peixe (1h30 de marche). Arrivée au sommet des cascades. Briefing sécurité et initiation aux techniques de descente en rappel. Descente en rappel de plusieurs cascades (hauteurs de 15 à 25 mètres). Passage derrière les chutes d'eau. Baignade dans les bassins naturels. Déjeuner pique-nique au pied des cascades. Après-midi : continuation du canyoning avec des sauts optionnels (3-5 mètres) dans les bassins. Retour au camp de base par un chemin différent. Dîner et nuit sous tente.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 6 km - 6h - Descente de 4 cascades en rappel
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Ascension vers le Plateau des Lontras */}
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
                          <span className="text-sm text-gray-600">Ascension technique vers le plateau d'altitude avec vue 360°</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée la plus technique</h4>
                        <p className="text-justify mb-4">
                          Levée très tôt pour l'ascension vers le Plateau des Lontras. Randonnée technique de 7 heures (10 km, dénivelé +1.000m) avec passages de via ferrata prolongés. Progression le long d'une arête offrant des vues spectaculaires sur la forêt tropicale et l'océan. Arrivée au Plateau des Lontras (1.250m) en milieu de journée. Vue panoramique à 360° : Pico Cão Grande au nord, océan Atlantique à l'ouest, forêt tropicale à perte de vue. Déjeuner pique-nique sur le plateau. Temps pour les photos et l'observation des oiseaux endémiques. Descente vers un campement intermédiaire en fin d'après-midi. Bivouac à mi-hauteur. Dîner et nuit sous tente.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 10 km - 7h - Dénivelé +1.000m - Via ferrata prolongée
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Dernière approche du Pico et retour */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">APPROCHE FINALE ET RETOUR</span>
                          <span className="text-sm text-gray-600">Dernière approche du Pico et début du retour vers la civilisation</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Point culminant de l'expédition</h4>
                        <p className="text-justify mb-4">
                          Dernière approche vers le Pico Cão Grande depuis le campement intermédiaire. Marche de 3 heures jusqu'au point le plus proche accessible sans équipement d'escalade technique. Vue imprenable sur la paroi verticale de l'aiguille volcanique. Temps pour les photos et la contemplation. Cérémonie symbolique de fin d'expédition. Début du retour vers la civilisation. Descente de 5 heures (8 km, dénivelé -800m) vers un point de rendez-vous avec le véhicule 4x4. Transfert vers un lodge confortable en bordure de forêt. Première douche chaude depuis 4 jours ! Dîner de célébration avec l'équipe. Nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> 11 km - 8h - Dénivelé -800m - Approche finale du Pico
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Retour à São Tomé */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR À SÃO TOMÉ</span>
                          <span className="text-sm text-gray-600">Transfert vers la capitale et soirée de clôture</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Retour à la civilisation</h4>
                        <p className="text-justify mb-4">
                          Petit-déjeuner tardif au lodge. Temps libre pour se reposer, échanger sur l'expédition, trier les photos. Départ en milieu de matinée pour le retour à São Tomé (environ 2h de route). Arrivée à l'hôtel en milieu de journée. Installation dans les chambres. Après-midi libre pour se détendre, faire quelques achats de souvenirs, ou visiter la ville. En fin d'après-midi, remise des diplômes d'expédition et partage des photos. Soirée de clôture dans un restaurant typique. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Transfert et détente
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE SÃO TOMÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers moments libres. Selon l'horaire de votre vol, transfert à l'aéroport international de São Tomé. Assistance aux formalités d'embarquement. Emportez avec vous les souvenirs inoubliables d'une expédition unique au cœur des paysages les plus spectaculaires de São Tomé, la fierté d'avoir approché le mythique Pico Cão Grande, et l'expérience d'une aventure extrême qui restera gravée dans votre mémoire.
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
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences d'Aventure</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition au Pico Cão Grande est bien plus qu'une simple randonnée. C'est un voyage au cœur de l'aventure pure, où chaque journée apporte son lot de défis techniques, de découvertes naturelles et de moments d'émotion intense. Des forêts primaires aux parois volcaniques, préparez-vous à vivre une expérience qui repoussera vos limites.
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
                              lat={exp.id === 'aventure' ? 0.28 : 
                                   exp.id === 'nature' ? 0.24 :
                                   exp.id === 'camping' ? 0.26 :
                                   0.30} 
                              lng={exp.id === 'aventure' ? 6.61 : 
                                   exp.id === 'nature' ? 6.58 :
                                   exp.id === 'camping' ? 6.60 :
                                   6.63} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie de l'Aventure</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600" 
                          alt="Pico Cão Grande" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Pico Cão Grande</h5>
                          <p className="text-sm text-gray-700">Aiguille volcanique emblématique</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1536152471326-642d13bb4a46?w=600" 
                          alt="Via ferrata" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Via ferrata</h5>
                          <p className="text-sm text-gray-700">Passages aériens sécurisés</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600" 
                          alt="Bivouac" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Bivouac en forêt</h5>
                          <p className="text-sm text-gray-700">Nuits sous les étoiles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles pour Aventuriers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Hélicoptère autour du Pico</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Vol panoramique de 45 minutes autour du Pico Cão Grande pour une perspective aérienne unique. Supplément : 350€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Initiation à l'escalade</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Séance d'escalade sur des voies faciles près du camp de base avec moniteur. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Massage de récupération intensive</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Séance de massage sportif de 90 minutes pour la récupération musculaire. Supplément : 90€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Randonnée nocturne avec vision nocturne</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Exploration nocturne de la forêt avec équipement de vision nocturne. Supplément : 150€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements pour Aventuriers</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏕️</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette expédition combine hébergements confortables en début et fin de circuit avec plusieurs nuits de bivouac en pleine nature. Chaque hébergement est choisi pour sa localisation stratégique et son adéquation avec l'esprit d'aventure du circuit.
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
                      onClick={() => setActiveHotelTab('montecafe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'montecafe' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUAC (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('cote')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'cote' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LODGE FORÊT (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - São Tomé ville */}
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
                                <span className="text-sm font-semibold">Service blanchisserie rapide</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar est un établissement simple mais confortable, parfaitement adapté aux besoins des aventuriers. Situé au centre-ville, il permet un accès facile aux magasins d'équipement et restaurants. Les chambres sont climatisées avec salle de bain privée. Le service de blanchisserie express est particulièrement apprécié pour laver les vêtements techniques avant le départ en expédition. Le restaurant de l'hôtel sert une cuisine locale copieuse, idéale pour faire le plein d'énergie.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bivouac */}
                  {activeHotelTab === 'montecafe' && (
                    <div className="space-y-16">
                      {/* Campement expédition */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600" 
                              alt="Campement expédition" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campements Expédition</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Zone Pico Cão Grande, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Bivouac en pleine nature</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Cuisine sur feu de bois</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💧</span>
                                <span className="text-sm font-semibold">Eau filtrée sur place</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌌</span>
                                <span className="text-sm font-semibold">Nuits sous les étoiles</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Pendant l'expédition, vous dormirez sous tente dans des campements établis en pleine nature. Les tentes sont fournies (tentes 2 places pour 1 personne, ou tentes individuelles selon préférence). Des matelas auto-gonflants assurent un certain confort. Les repas sont préparés par l'équipe d'encadrement sur feu de bois ou réchaud. L'eau est filtrée sur place à partir de sources naturelles. Toilettes sèches en campement fixe, ou utilisation de la nature en campement mobile. Une expérience authentique de vie en pleine nature.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lodge forêt */}
                  {activeHotelTab === 'cote' && (
                    <div className="space-y-16">
                      {/* Jungle Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Jungle Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Jungle Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Lisière forêt tropicale, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>Lodge écologique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Douche chaude solaire</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍃</span>
                                <span className="text-sm font-semibold">Énergie renouvelable</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛌</span>
                                <span className="text-sm font-semibold">Lits confortables</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Après plusieurs nuits de bivouac, le Jungle Lodge offre un confort bien mérité. Ce lodge écologique est situé en lisière de forêt, permettant une transition douce vers la civilisation. Les bungalows sont simples mais confortables, avec lit, moustiquaire et salle de bain privée avec douche chaude solaire. L'électricité est fournie par panneaux solaires (disponible quelques heures par jour). Le restaurant sert des plats chauds et copieux. Parfait pour se reposer et célébrer la fin de l'expédition avant le retour définitif à São Tomé.
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
                  <span className="text-2xl">🧗</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$2,399</span>
                    <span className="text-xl line-through text-gray-500">$2,199</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Expédition complète</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guides spécialisés, hébergements, équipement technique, nourriture expédition
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
                    <option value="2026-07-05">5 Juillet 2026</option>
                    <option value="2026-07-25">25 Juillet 2026</option>
                    <option value="2026-08-15">15 Août 2026</option>
                    <option value="2026-09-05">5 Septembre 2026</option>
                    <option value="2026-09-25">25 Septembre 2026</option>
                    <option value="2027-07-10">10 Juillet 2027</option>
                    <option value="2027-08-01">1 Août 2027</option>
                    <option value="2027-08-20">20 Août 2027</option>
                    <option value="2027-09-10">10 Septembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juillet à septembre (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ÉQUIPEMENT TECHNIQUE COMPLET FOURNI</strong> : via ferrata, rappel, sécurité
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 4 aventuriers maximum</p>
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
                    Nos experts aventure de São Tomé vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Expédition Pico Cão Grande miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Aventure Pico Cão Grande - 9 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Expédition aventure et via ferrata
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Équipement Technique Fourni</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Harnais d'escalade</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Casque de sécurité</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Longes de via ferrata</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Matériel de rappel complet</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tente de bivouac</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Matelas auto-gonflant</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kit de premiers secours complet</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Conditions Physiques Requises</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau expédition</span>
                    <span className="font-bold text-green-700">Difficile (4/5)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-green-700">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Expérience randonnée montagne</span>
                    <span className="font-bold text-green-700">Obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Certificat médical</span>
                    <span className="font-bold text-green-700">Obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance rapatriement</span>
                    <span className="font-bold text-green-700">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Test physique préalable recommandé (15km avec 800m de dénivelé avec sac)
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Aventurier</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "L'approche du Pico Cão Grande est une expérience qui restera gravée dans ma mémoire à jamais. Les via ferrata dans la forêt tropicale, les nuits sous les étoiles, le sentiment d'accomplissement... Une aventure extrême mais parfaitement encadrée. Pour ceux qui cherchent à repousser leurs limites !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc D., aventurier 2025
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