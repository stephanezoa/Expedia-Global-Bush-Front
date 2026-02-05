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
        <h4 className="font-semibold text-center text-lg">Itinéraire Bangui - Boali</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=17.0,4.0,19.0,5.5&layer=mapnik&marker=4.36,18.55&marker=4.8,17.93"
          style={{ border: 0 }}
          allowFullScreen
          title="Chutes de Boali"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=10/4.5/18.2" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-700 border-2 border-gray-300"></span>
          <span className="text-sm">Bangui (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Chutes de Boali</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Village de Boali</span>
        </div>
      </div>
    </div>
  );
};

export default function Chutes() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bangui');
  const [activeExperienceTab, setActiveExperienceTab] = useState('nature');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌊', title: 'Chutes de Boali', desc: 'Spectacle naturel impressionnant des chutes d\'eau de la Mambéré' },
    { icon: '🏛️', title: 'Village de Boali', desc: 'Immersion dans la vie traditionnelle centrafricaine' },
    { icon: '🌿', title: 'Nature préservée', desc: 'Découverte d\'un environnement naturel préservé' },
    { icon: '🎣', title: 'Pêche traditionnelle', desc: 'Initiation aux techniques de pêche locales' },
    { icon: '🍲', title: 'Cuisine locale', desc: 'Dégustation de spécialités culinaires centrafricaines' },
    { icon: '🎵', title: 'Musique et danse', desc: 'Spectacles de traditions musicales ancestrales' },
  ];

  const regions = [
    { name: 'Bangui', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Capitale de la République Centrafricaine' },
    { name: 'Chutes de Boali', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Spectaculaires chutes d\'eau sur la rivière Mambéré' },
    { name: 'Village Boali', color: 'bg-yellow-100', textColor: 'text-yellow-800', desc: 'Communauté locale vivant près des chutes' },
    { name: 'Rivière Mambéré', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Cours d\'eau majeur alimentant les chutes' },
    { name: 'Forêt environnante', color: 'bg-emerald-100', textColor: 'text-emerald-800', desc: 'Écosystème forestier riche et préservé' },
    { name: 'Plantations locales', color: 'bg-orange-100', textColor: 'text-orange-800', desc: 'Agriculture traditionnelle de la région' },
  ];

  const experiences = [
    { 
      id: 'nature',
      name: 'Nature Exceptionnelle', 
      icon: '🌊',
      desc: 'Découverte des spectaculaires Chutes de Boali et de leur environnement naturel préservé',
      highlights: ['Vue panoramique des chutes', 'Randonnée le long de la rivière', 'Observation de la faune', 'Photographie nature']
    },
    { 
      id: 'culture',
      name: 'Culture Locale', 
      icon: '🏛️',
      desc: 'Immersion dans la vie du village de Boali et rencontre avec ses habitants',
      highlights: ['Rencontre villageois', 'Artisanat traditionnel', 'Cérémonies locales', 'Échanges culturels']
    },
    { 
      id: 'detente',
      name: 'Détente et Bien-être', 
      icon: '🌿',
      desc: 'Séjour ressourçant au cœur d\'un environnement naturel apaisant',
      highlights: ['Bruits apaisants des chutes', 'Air pur forestier', 'Temps de relaxation', 'Retour à la nature']
    },
    { 
      id: 'aventure',
      name: 'Aventure Douce', 
      icon: '🚶',
      desc: 'Exploration des alentours des chutes et découverte des richesses naturelles',
      highlights: ['Randonnées accessibles', 'Découverte flore locale', 'Points de vue', 'Balades guidées']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌿</span>
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Découverte des Chutes de Boali</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              5 jours de détente et de découverte naturelle aux spectaculaires Chutes de Boali
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">5</div>
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
            <span className="text-2xl">🇨🇫</span>
            <span className="text-sm font-semibold">RÉPUBLIQUE CENTRAFRICAINE | BOALI</span>
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
                <span className="bg-blue-700 text-white px-3 py-1 font-bold">DÉTENTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA7</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">5 jours - Bangui à Boali</span>
                <button className="ml-auto border-2 border-blue-700 text-blue-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Voyage détente au cœur des spectaculaires Chutes de Boali</span>
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
                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 5 jours vous emmène à la découverte des magnifiques Chutes de Boali, l'une des merveilles naturelles de la République Centrafricaine. Depuis Bangui, la capitale, vous rejoindrez ces impressionnantes chutes d'eau situées sur la rivière Mambéré. Ce voyage vous offre une parenthèse de détente au cœur d'un environnement naturel préservé, combinant la puissance spectaculaire des chutes avec la tranquillité de la nature environnante. Un séjour parfait pour se ressourcer et découvrir une facette méconnue de l'Afrique centrale.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Les Moments Forts du Voyage</h3>
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
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Visite des Chutes de Boali</strong>, spectaculaire chute d'eau de 50 mètres</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Randonnée le long de la rivière Mambéré</strong> et découverte de la flore locale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Rencontre avec les habitants</strong> du village de Boali</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Détente au bord de l'eau</strong> dans un cadre naturel apaisant</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Photographie des paysages</strong> et de la faune locale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Découverte de la culture locale</strong> et de l'artisanat traditionnel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Observation des oiseaux</strong> et de la petite faune</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Temps libre pour la méditation</strong> et le ressourcement</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les Chutes de Boali */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Les Chutes de Boali : Perle Naturelle</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Les Chutes de Boali sont formées par la rivière Mambéré et constituent l'une des attractions naturelles les plus impressionnantes de la République Centrafricaine. Avec une hauteur d'environ 50 mètres et une largeur de 250 mètres en période de crue, elles offrent un spectacle naturel saisissant. Situées à environ 100 km au nord-ouest de Bangui, ces chutes sont accessibles par une route en bon état, faisant de cette destination un lieu idéal pour une escapade détente depuis la capitale. Le site est également entouré d'une végétation luxuriante qui abrite une variété d'oiseaux et de petits animaux.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Chutes d'eau</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Nature préservée</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Détente</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Photographie</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LES CHUTES DE BOALI EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Hauteur</div>
                      <div className="text-3xl font-bold text-blue-700">50</div>
                      <div className="text-xs">mètres de hauteur</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Largeur</div>
                      <div className="text-3xl font-bold text-blue-700">250</div>
                      <div className="text-xs">mètres en crue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance Bangui</div>
                      <div className="text-3xl font-bold text-blue-700">100</div>
                      <div className="text-xs">kilomètres</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Rivière</div>
                      <div className="text-3xl font-bold text-blue-700">Mambéré</div>
                      <div className="text-xs">affluent de l'Oubangui</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Bangui - Boali</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène depuis Bangui, la capitale animée de la République Centrafricaine, jusqu'aux paisibles Chutes de Boali. Le trajet d'environ 100 km vous fait traverser des paysages de savane arborée et de petites forêts galeries le long des rivières. Vous découvrirez d'abord Bangui avec ses marchés animés et sa vie urbaine, puis vous plongerez dans la tranquillité de la nature environnante avant d'arriver au spectacle impressionnant des chutes. Chaque étape révèle un aspect différent de cette région : l'effervescence urbaine, la sérénité naturelle et la puissance des éléments.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-blue-700 font-bold">200 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Durée trajet</div>
                            <div className="text-blue-700 font-bold">2h aller</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude chutes</div>
                            <div className="text-blue-700 font-bold">550m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Meilleure période</div>
                            <div className="text-blue-700 font-bold">Déc-Fév</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Région de Boali</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=17.5,4.0,19.0,5.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Boali"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=10/4.7/18.2" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-700">Les Zones du Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Bangui' && 'Capitale • Marchés • Vie urbaine'}
                          {region.name === 'Chutes de Boali' && 'Spectacle naturel • Chutes d\'eau • Puissance'}
                          {region.name === 'Village Boali' && 'Communauté • Tradition • Hospitalité'}
                          {region.name === 'Rivière Mambéré' && 'Cours d\'eau • Navigation • Pêche'}
                          {region.name === 'Forêt environnante' && 'Écosystème • Faune • Flore'}
                          {region.name === 'Plantations locales' && 'Agriculture • Subsistance • Tradition'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-cyan-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée Bangui</div>
                      <div className="text-xs opacity-80">Installation et découverte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Route vers Boali</div>
                      <div className="text-xs opacity-80">Trajet et installation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Découverte chutes</div>
                      <div className="text-xs opacity-80">Randonnées et détente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Retour Bangui</div>
                      <div className="text-xs opacity-80">Départ</div>
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
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
                          <span className="text-sm text-gray-600">Découverte de la capitale centrafricaine</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Bangui-M'Poko, principale porte d'entrée de la République Centrafricaine. Accueil par votre guide francophone. Transfert à votre hôtel en centre-ville. Après-midi dédié à la découverte de Bangui : visite du Marché Central, cœur économique animé de la capitale où se mêlent produits locaux et artisanat. Promenade le long de l'avenue Boganda, artère principale de la ville. Visite du Monument Barthélémy Boganda, premier président de la République. Dîner de bienvenue dans un restaurant typique avec spécialités locales (feuilles de manioc, sauces d'arachide). Briefing sur le circuit et les Chutes de Boali. Nuit à l'hôtel à Bangui.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Bangui - Boali */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BANGUI → BOALI</span>
                          <span className="text-sm text-gray-600">Route vers les chutes et première découverte</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-700">Vers la nature</h4>
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Départ matinal en direction des Chutes de Boali (environ 100 km, 2 heures de route). Trajet à travers des paysages de savane arborée et de forêts galeries le long des cours d'eau. Arrêts photographiques en cours de route. Arrivée au site des chutes en fin de matinée. Installation dans votre hébergement avec vue sur les chutes. Déjeuner avec produits locaux. Première approche des Chutes de Boali : découverte du point de vue principal offrant une vue panoramique sur la chute de 50 mètres de hauteur. Temps libre pour profiter du spectacle et des bruits apaisants de l'eau. Dîner au lodge avec spécialités de poisson de la rivière Mambéré. Nuit au lodge avec bruit de fond des chutes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Exploration des chutes */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION DES CHUTES</span>
                          <span className="text-sm text-gray-600">Randonnée, photographie et détente</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée nature</h4>
                        <p className="text-justify mb-4">
                          Journée complète dédiée à l'exploration des Chutes de Boali et de leurs environs. Matin : randonnée guidée le long de la rivière Mambéré en amont des chutes. Découverte de la flore locale : arbres majestueux, lianes, plantes aquatiques. Observation des oiseaux (martins-pêcheurs, hérons, aigrettes) et, avec un peu de chance, de singes dans les arbres environnants. Déjeuner pique-nique au bord de l'eau. Après-midi : visite du village de Boali pour rencontrer les habitants et découvrir leur mode de vie. Initiation à la pêche traditionnelle avec les pêcheurs locaux. Retour au lodge en fin d'après-midi pour un temps de détente. Dîner et soirée au lodge avec possibilité d'observer le ciel étoilé, exceptionnellement clair loin des lumières urbaines.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Détente et découvertes */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DÉTENTE ET DÉCOUVERTES</span>
                          <span className="text-sm text-gray-600">Temps libre, photographie et culture locale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée libre</h4>
                        <p className="text-justify mb-4">
                          Journée libre pour profiter du site à votre rythme. Plusieurs options s'offrent à vous : matinée de photographie des chutes sous différentes lumières, méditation au bord de l'eau, lecture dans un hamac avec vue sur les chutes, ou randonnée supplémentaire dans les environs. Déjeuner au lodge. Après-midi : visite optionnelle d'une plantation locale (café, manioc, bananes) avec explication des techniques agricoles traditionnelles. Rencontre avec un artisan du village pour découvrir la vannerie ou la sculpture sur bois. Dîner d'adieu avec les produits locaux. Soirée de partage avec les autres voyageurs et l'équipe locale. Nuit au lodge.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Retour à Bangui et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">RETOUR BANGUI ET DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner au lodge avec une dernière vue sur les chutes. Dernière promenade matinale pour profiter du spectacle des Chutes de Boali sous la lumière du matin. Départ en direction de Bangui vers 9h. Arrivée à Bangui en milieu de matinée. Selon l'horaire de votre vol, temps libre pour des derniers achats de souvenirs au marché artisanal ou visite du Musée Boganda (sous réserve d'ouverture). Déjeuner libre à Bangui. Transfert à l'aéroport de Bangui-M'Poko pour votre vol de départ. Emportez avec vous des souvenirs inoubliables de la puissance spectaculaire des Chutes de Boali et de la sérénité retrouvée au cœur de la nature centrafricaine.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-700">Les Expériences Détente de Boali</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une parenthèse de détente au cœur de l'une des plus belles merveilles naturelles de la République Centrafricaine. Des Chutes de Boali au village traditionnel, chaque expérience est conçue pour vous ressourcer et vous faire découvrir la sérénité de cette région préservée.
                  </p>

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
                              <div className="text-sm font-semibold mb-3 text-blue-700">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-700 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'nature' ? 4.8 : 
                                   exp.id === 'culture' ? 4.79 :
                                   exp.id === 'detente' ? 4.8 :
                                   4.81} 
                              lng={exp.id === 'nature' ? 17.93 : 
                                   exp.id === 'culture' ? 17.94 :
                                   exp.id === 'detente' ? 17.93 :
                                   17.92} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'nature' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Nature à Boali</h5>
                            <p className="text-gray-700 mb-4">
                              Les Chutes de Boali constituent un écosystème unique où l'eau, la roche et la végétation créent un environnement exceptionnel. La puissance des chutes contraste avec la tranquillité des berges de la rivière Mambéré. La forêt galerie environnante abrite une variété d'oiseaux aquatiques et d'animaux forestiers. Cette expérience vous permet de découvrir la biodiversité locale tout en profitant du spectacle constant des eaux qui se précipitent dans le vide, créant une brume rafraîchissante et des arcs-en-ciel par temps ensoleillé.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-yellow-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Locale</h5>
                            <p className="text-gray-700 mb-4">
                              Le village de Boali, situé à proximité des chutes, abrite une communauté accueillante qui vit en harmonie avec ce lieu exceptionnel. Les habitants ont développé des traditions liées à la rivière et aux chutes. Cette expérience vous permet de rencontrer les pêcheurs, les agriculteurs et les artisans qui partageront avec vous leurs savoir-faire et leurs histoires. Vous découvrirez comment cette communauté a intégré les chutes dans sa culture et ses croyances, créant un lien unique entre l'homme et cette force naturelle impressionnante.
                            </p>
                          </div>
                        )}

                        {exp.id === 'detente' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Détente Ressourçante</h5>
                            <p className="text-gray-700 mb-4">
                              Le site des Chutes de Boali offre un cadre idéal pour une véritable pause ressourçante. Le bruit constant et apaisant des chutes, l'air pur chargé d'ions négatifs, la beauté du paysage créent un environnement propice à la détente et à la méditation. Cette expérience vous invite à ralentir, à vous reconnecter avec la nature et à profiter de moments de calme et de sérénité. Que ce soit pour lire, méditer, pratiquer le yoga ou simplement observer le spectacle de l'eau, vous trouverez ici l'espace parfait pour vous ressourcer loin du stress quotidien.
                            </p>
                          </div>
                        )}

                        {exp.id === 'aventure' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Aventure Douce</h5>
                            <p className="text-gray-700 mb-4">
                              Explorer les environs des Chutes de Boali est une aventure accessible à tous. Les sentiers bien tracés le long de la rivière permettent des randonnées sans difficulté technique. Les différents points de vue offrent des perspectives variées sur les chutes et le paysage environnant. Cette expérience vous permet de découvrir la région à pied, à votre rythme, en profitant des découvertes naturelles et culturelles. C'est l'occasion de prendre le temps d'observer les détails, de photographier la faune et la flore, et de s'imprégner de l'atmosphère unique de ce lieu.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Galerie d'expériences */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Expériences</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600" 
                          alt="Chutes de Boali" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Chutes majestueuses</h5>
                          <p className="text-sm text-gray-700">Spectacle naturel impressionnant des chutes d'eau</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1536152471326-642d74f4a467?w=600" 
                          alt="Rivière Mambéré" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Rivière Mambéré</h5>
                          <p className="text-sm text-gray-700">Cours d'eau paisible en amont des chutes</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600" 
                          alt="Nature préservée" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt environnante</h5>
                          <p className="text-sm text-gray-700">Écosystème forestier riche et préservé</p>
                        </div>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Détente à Boali</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                      <span className="text-blue-700 text-2xl">🏨</span>
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements soigneusement sélectionnés pour leur confort et leur situation privilégiée. À Bangui, un hôtel confortable en centre-ville ; à Boali, un lodge avec vue directe sur les chutes pour une immersion totale dans la nature.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('boali')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'boali' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BOALI (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bangui */}
                  {activeHotelTab === 'bangui' && (
                    <div className="space-y-16">
                      {/* Hôtel Ledger Plaza Bangui */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Ledger Plaza Bangui" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Ledger Plaza Bangui</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Bangui, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏢</span>
                                <span>Centre-ville</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant international</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* moderne situé au cœur de Bangui. Chambres spacieuses et confortables avec salle de bain privée, climatisation, wifi, télévision par satellite. Restaurant servant une cuisine internationale et des spécialités centrafricaines. Bar, piscine extérieure, centre d'affaires, service de blanchisserie. Emplacement idéal pour visiter Bangui et ses environs. Personnel francophone et service de qualité.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Boali */}
                  {activeHotelTab === 'boali' && (
                    <div className="space-y-16">
                      {/* Lodge des Chutes de Boali */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Lodge des Chutes de Boali" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Lodge des Chutes de Boali</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Site des Chutes de Boali, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Vue sur les chutes</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Bungalows confortables</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌌</span>
                                <span className="text-sm font-semibold">Nature préservée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Lodge situé à quelques mètres seulement des Chutes de Boali, offrant une vue imprenable sur le spectacle naturel. Bungalows individuels construits avec des matériaux locaux, intégrés harmonieusement dans l'environnement. Chambres confortables avec salle de bain privée (eau chaude), terrasses privées orientées vers les chutes. Restaurant servant une cuisine locale à base de produits frais de la région. Électricité solaire, connexion internet limitée (pour profiter pleinement de la déconnexion). Immersion totale dans la nature avec le bruit apaisant des chutes en fond sonore permanent. Engagement écologique et soutien à la communauté locale.
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
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-700">$1,699</span>
                    <span className="text-xl line-through text-gray-500">$1,499</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Transferts, guides, hébergements, tous les repas, entrées sites
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
                    <option value="2026-12-10">10 Décembre 2026</option>
                    <option value="2027-01-15">15 Janvier 2027</option>
                    <option value="2027-02-05">5 Février 2027</option>
                    <option value="2026-12-20">20 Décembre 2026</option>
                    <option value="2027-01-25">25 Janvier 2027</option>
                    <option value="2027-02-10">10 Février 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs décembre à février (meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT DÉTENTE :</strong> Chutes spectaculaires et nature préservée
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur ce circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts de la RCA vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=17.5,4.0,19.0,5.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Boali miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Chutes de Boali - 5 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit détente et découverte naturelle
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Ce Qui est Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Transferts aller-retour Bangui-Boali</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialisé</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements (4 nuits)</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les petits-déjeuners</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4 déjeuners et 4 dîners</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entrée site des Chutes de Boali</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Randonnées guidées</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visite village de Boali</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Informations Importantes</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Condition physique</span>
                    <span className="font-bold text-blue-700">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-700">8 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-blue-700">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-blue-700">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-blue-700">Recommandée</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + traitement antipaludéen
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-700">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un séjour ressourçant au cœur d'une nature spectaculaire. Les Chutes de Boali sont impressionnantes et le lodge offre une vue magnifique. Une véritable parenthèse de détente."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas L., voyageur 2025
                </div>
              </div>
            </div>
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