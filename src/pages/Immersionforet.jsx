import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-1.5},${lat-1.5},${lng+1.5},${lat+1.5}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-1.5},${lat-1.5},${lng+1.5},${lat+1.5}&layer=mapnik&marker=${lat},${lng}`;
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Bangui - Sangha</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,2.0,24.0,7.0&layer=mapnik&marker=4.36,18.55&marker=3.5,16.0"
          style={{ border: 0 }}
          allowFullScreen
          title="Forêt Équatoriale RCA"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/5.0/19.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Bangui (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Forêt de Dzanga-Sangha</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Campements forestiers</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Villages pygmées</span>
        </div>
      </div>
    </div>
  );
};

export default function Immersionforet() {
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
    { icon: '🌳', title: 'Forêt primaire Dzanga-Sangha', desc: 'Immersion dans l\'une des dernières forêts primaires d\'Afrique centrale' },
    { icon: '🦍', title: 'Gorilles des plaines', desc: 'Observation des gorilles de l\'Ouest dans leur habitat naturel' },
    { icon: '🐘', title: 'Éléphants de forêt', desc: 'Rencontre avec les éléphants de forêt aux clairières de Dzanga Bai' },
    { icon: '🏹', title: 'Peuples pygmées', desc: 'Immersion auprès des communautés BaAka, gardiennes de la forêt' },
    { icon: '🛶', title: 'Navigation fluviale', desc: 'Exploration des rivières Sangha et Dzanga en pirogue' },
    { icon: '🌌', title: 'Nuits en forêt', desc: 'Bivouacs et campements au cœur de la forêt équatoriale' },
  ];

  const regions = [
    { name: 'Bangui', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Capitale de la République Centrafricaine, point de départ' },
    { name: 'Dzanga-Sangha', color: 'bg-emerald-100', textColor: 'text-emerald-800', desc: 'Réserves de biosphère UNESCO, forêt primaire préservée' },
    { name: 'Clairières Dzanga Bai', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Salines naturelles où se rassemblent éléphants et gorilles' },
    { name: 'Rivière Sangha', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Cours d\'eau majeur, artère vitale de la forêt équatoriale' },
    { name: 'Villages BaAka', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Communautés pygmées, gardiennes traditionnelles de la forêt' },
    { name: 'Forêt primaire', color: 'bg-lime-100', textColor: 'text-lime-800', desc: 'Écosystème intact abritant une biodiversité exceptionnelle' },
  ];

  const experiences = [
    { 
      id: 'foret',
      name: 'Forêt Primitive', 
      icon: '🌳',
      desc: 'Immersion totale dans l\'un des derniers écosystèmes forestiers intacts d\'Afrique centrale',
      highlights: ['Forêt primaire intacte', 'Canopée dense', 'Flore endémique', 'Écosystème complexe']
    },
    { 
      id: 'faune',
      name: 'Mégafaune', 
      icon: '🦍',
      desc: 'Observation exceptionnelle des grands mammifères de la forêt équatoriale dans leur habitat naturel',
      highlights: ['Gorilles des plaines', 'Éléphants de forêt', 'Buffles de forêt', 'Primates variés']
    },
    { 
      id: 'pygmees',
      name: 'Peuples Forestiers', 
      icon: '🏹',
      desc: 'Rencontre authentique avec les peuples BaAka, leur culture et leurs savoirs ancestraux',
      highlights: ['Communautés BaAka', 'Savoirs traditionnels', 'Chasse et cueillette', 'Médecine forestière']
    },
    { 
      id: 'aventure',
      name: 'Aventure Écologique', 
      icon: '🌿',
      desc: 'Expédition responsable au cœur de la forêt avec minimal impact environnemental',
      highlights: ['Randonnées forestières', 'Navigation fluviale', 'Bivouacs écologiques', 'Photographie nature']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Immersion en Forêt Équatoriale</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              11 jours d'expédition au cœur des forêts primaires de Dzanga-Sangha
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">11</div>
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
            <span className="text-sm font-semibold">RÉPUBLIQUE CENTRAFRICAINE | SANGHA</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">ÉCOTOURISME</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">RCA8</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">11 jours - Bangui à Sangha</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Expédition écologique au cœur de la dernière forêt primaire d\'Afrique centrale</span>
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
                  Cette expédition unique de 11 jours vous plonge au cœur de la forêt équatoriale de Dzanga-Sangha, l'une des dernières forêts primaires intactes d'Afrique centrale. Classée réserve de biosphère par l'UNESCO, cette région abrite une biodiversité exceptionnelle : gorilles des plaines, éléphants de forêt, buffles et une incroyable variété de primates. Vous vivrez une immersion totale dans cet écosystème préservé, guidé par les peuples BaAka, gardiens ancestraux de la forêt. Une aventure écologique responsable au plus près de la nature sauvage.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-green-600 text-2xl">{item.icon}</span>
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des gorilles des plaines</strong> dans leur habitat naturel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontre avec les éléphants de forêt</strong> aux clairières de Dzanga Bai</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Immersion dans les villages BaAka</strong>, peuple pygmée de la forêt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Randonnées en forêt primaire</strong> avec guides BaAka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Navigation sur la rivière Sangha</strong> en pirogue traditionnelle</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Initiation aux techniques de chasse</strong> et cueillette BaAka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Nuits en campement forestier</strong> au cœur de la forêt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation des oiseaux</strong> de la forêt équatoriale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Découverte de la pharmacopée</strong> traditionnelle BaAka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Visite des clairières salines</strong>, points d'eau des grands mammifères</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur Dzanga-Sangha */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Dzanga-Sangha : Sanctuaire Forestier</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La réserve de Dzanga-Sangha, classée au patrimoine mondial de l'UNESCO, est l'un des derniers bastions de la forêt équatoriale primaire en Afrique centrale. Cet écosystème intact abrite une biodiversité exceptionnelle, avec des densités de grands mammifères parmi les plus élevées du continent. La réserve couvre plus de 4 000 km² de forêt tropicale humide, traversée par les rivières Sangha et Dzanga. Elle constitue un corridor écologique vital pour les populations de gorilles, éléphants de forêt et autres espèces menacées. Cette région est également le territoire ancestral des BaAka, peuple pygmée dont la survie est intimement liée à la forêt.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Forêt primaire</span>
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Gorilles</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Éléphants</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">BaAka</span>
                      <span className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full">UNESCO</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">DZANGA-SANGHA EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie</div>
                      <div className="text-3xl font-bold text-green-700">4,000</div>
                      <div className="text-xs">km² de forêt primaire</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Gorilles</div>
                      <div className="text-3xl font-bold text-green-700">2,000</div>
                      <div className="text-xs">gorilles des plaines</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Éléphants</div>
                      <div className="text-3xl font-bold text-green-700">3,500</div>
                      <div className="text-xs">éléphants de forêt</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces</div>
                      <div className="text-3xl font-bold text-green-700">400+</div>
                      <div className="text-xs">d'oiseaux recensés</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Expédition en Forêt Équatoriale</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Cette expédition vous emmène de Bangui, la capitale, jusqu'au cœur profond de la forêt de Dzanga-Sangha. Le voyage commence par un vol vers Bayanga, porte d'entrée de la réserve. De là, vous plongez dans l'immensité verte : randonnées forestières, navigation fluviale sur la Sangha, nuits en campement. Vous explorez les différentes facettes de cet écosystème unique : les clairières salines où se rassemblent les éléphants, les territoires des gorilles, les villages BaAka disséminés dans la forêt. Chaque jour révèle un nouvel aspect de cette forêt vivante, de ses habitants animaux et humains.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-green-700 font-bold">800 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en forêt</div>
                            <div className="text-green-700 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Randonnées</div>
                            <div className="text-green-700 font-bold">6 jours</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes</div>
                            <div className="text-green-700 font-bold">Forêt primaire</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Forêt de Dzanga-Sangha</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=15.5,2.0,17.0,3.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Dzanga-Sangha"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=9/2.8/16.2" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Zones de la Forêt Équatoriale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Bangui' && 'Capitale • Départ • Préparation'}
                          {region.name === 'Dzanga-Sangha' && 'Forêt primaire • UNESCO • Biodiversité'}
                          {region.name === 'Clairières Dzanga Bai' && 'Éléphants • Gorilles • Observation'}
                          {region.name === 'Rivière Sangha' && 'Navigation • Pirogue • Transport'}
                          {region.name === 'Villages BaAka' && 'Pygmées • Tradition • Savoir'}
                          {region.name === 'Forêt primaire' && 'Écosystème • Canopée • Faune'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Bangui et transfert</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, vol vers Bayanga</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Clairières Dzanga Bai</div>
                      <div className="text-xs opacity-80">Observation éléphants et gorilles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Villages BaAka</div>
                      <div className="text-xs opacity-80">Immersion culturelle et randonnées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-11</div>
                      <div className="text-sm">Navigation et retour</div>
                      <div className="text-xs opacity-80">Rivière Sangha, synthèse, départ</div>
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
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BANGUI</span>
                          <span className="text-sm text-gray-600">Préparation de l'expédition forestière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Bangui-M'Poko. Accueil par votre guide spécialiste de l'écotourisme et des forêts d'Afrique centrale. Transfert à l'hôtel. Briefing complet sur l'expédition : présentation du programme, des règles de sécurité en forêt, des consignes d'observation des animaux sauvages, et des principes de l'écotourisme responsable. Vérification de l'équipement personnel. Après-midi libre pour les derniers préparatifs. Dîner de bienvenue avec l'équipe d'encadrement. Rencontre avec les guides BaAka qui nous accompagneront en forêt. Nuit à l'hôtel à Bangui.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Vol vers Bayanga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BANGUI → BAYANGA</span>
                          <span className="text-sm text-gray-600">Entrée dans la forêt équatoriale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Premiers pas en forêt</h4>
                        <p className="text-justify mb-4">
                          Petit-déjeuner matinal. Transfert à l'aéroport pour le vol charter vers Bayanga (environ 1h30). Vue spectaculaire sur l'immensité verte de la forêt équatoriale pendant le survol. Arrivée à l'aérodrome de Bayanga, petit village au bord de la rivière Sangha. Accueil par l'équipe du parc national de Dzanga-Sangha. Installation dans l'écolodge de base. Briefing sur les règles spécifiques de la réserve. Première promenade d'acclimatation en lisière de forêt avec les guides BaAka. Découverte des premiers signes de vie forestière. Dîner avec produits locaux. Nuit à l'écolodge, premiers bruits de la forêt nocturne.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Première immersion en forêt */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PREMIÈRE IMMERSION FORESTIÈRE</span>
                          <span className="text-sm text-gray-600">Randonnée et campement en forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Début d'expédition</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour la première journée complète en forêt. Randonnée progressive dans la forêt primaire avec les guides BaAka qui partagent leurs connaissances des plantes, des traces animales, des sons. Initiation à la lecture des signes forestiers. Observation des premiers primates : cercopithèques, colobes, mangabeys. Pause déjeuner en forêt. Après-midi : continuation vers le premier campement forestier. Installation des tentes en clairière. Initiation aux techniques de survie en forêt : collecte d'eau, orientation, prévention des rencontres animales. Dîner préparé sur feu de bois. Veillée autour du feu avec histoires et chants BaAka. Première nuit en campement forestier.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Vers Dzanga Bai */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VERS DZANGA BAI</span>
                          <span className="text-sm text-gray-600">À la rencontre des éléphants de forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée des éléphants</h4>
                        <p className="text-justify mb-4">
                          Randonnée à travers la forêt dense vers la célèbre clairière de Dzanga Bai. Cette saline naturelle attire des dizaines d'éléphants de forêt qui viennent y consommer les minéraux essentiels. Arrivée en fin de matinée à l'observatoire camouflé. Observation exceptionnelle des éléphants : comportements sociaux, bains de boue, interactions entre les différents groupes. Déjeuner sur place. Après-midi consacrée à l'observation et à la photographie. Possibilité de voir également des buffles de forêt, des sitatungas (antilopes aquatiques) et divers oiseaux. En fin d'après-midi, retour vers un nouveau campement plus proche de la clairière. Dîner et nuit en campement.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Recherche des gorilles */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">À LA RECHERCHE DES GORILLES</span>
                          <span className="text-sm text-gray-600">Tracking des gorilles des plaines</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée des gorilles</h4>
                        <p className="text-justify mb-4">
                          Départ à l'aube pour le tracking des gorilles des plaines de l'Ouest. Accompagnés des pisteurs BaAka experts, nous partons sur les traces d'un groupe habitué à la présence humaine. Marche silencieuse à travers la forêt, lecture des signes récents (nids, restes de nourriture, empreintes). Lorsque le groupe est localisé, approche prudente pour une observation respectueuse (limite de temps et distance réglementées). Observation fascinante des interactions sociales, des soins aux jeunes, de l'alimentation. Retour au campement en fin de matinée. Après-midi de repos et d'échanges sur l'expérience. Veillée spéciale "gorilles" avec les guides. Nuit en campement.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Vie avec les BaAka */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VIE AVEC LES BAAKA</span>
                          <span className="text-sm text-gray-600">Immersion dans un village pygmée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée culturelle</h4>
                        <p className="text-justify mb-4">
                          Randonnée vers un village BaAka traditionnel. Accueil par la communauté. Journée d'immersion dans la vie quotidienne des pygmées de la forêt. Participation aux activités : cueillette de fruits sauvages, ramassage de chenilles comestibles, fabrication de huttes, préparation des repas. Initiation à la chasse traditionnelle (sans mise à mort, démonstration des techniques). Découverte de la médecine traditionnelle : plantes médicinales et leurs usages. Après-midi : cérémonie de danse et de musique traditionnelle. Échanges avec les anciens sur leur relation à la forêt, leur cosmogonie, leurs traditions. Dîner communautaire avec les BaAka. Nuit en campement près du village.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Navigation sur la Sangha */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">NAVIGATION SUR LA SANGHA</span>
                          <span className="text-sm text-gray-600">Exploration fluviale de la forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée fluviale</h4>
                        <p className="text-justify mb-4">
                          Départ en pirogue traditionnelle sur la rivière Sangha, artère vitale de la forêt. Navigation silencieuse permettant l'observation de la faune riveraine : crocodiles nains, tortues d'eau, martins-pêcheurs, aigrettes, hérons. Arrêts pour observer les singes venant boire au bord de l'eau. Visite d'une clairière marécageuse où pousse le papyrus. Déjeuner pique-nique sur une berge sablonneuse. Après-midi : continuation de la navigation jusqu'à un campement spécial en bord de rivière. Installation. Initiation à la pêche traditionnelle avec les BaAka. Observation des chauves-souris frugivores au crépuscule. Dîner de poisson frais. Nuit en campement riverain.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Canopée et observation */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CANOPÉE ET OBSERVATION</span>
                          <span className="text-sm text-gray-600">Découverte de la vie arboricole</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Dans les hauteurs</h4>
                        <p className="text-justify mb-4">
                          Randonnée vers une zone de forêt particulièrement riche en vie arboricole. Observation des singes arboricoles : colobes guéréza, cercopithèques à diadème, mangabeys à collier blanc. Initiation à l'identification des oiseaux de la canopée : touracos, calaos, perroquets. Visite d'une plateforme d'observation permettant de voir la forêt depuis les hauteurs. Déjeuner en forêt. Après-midi consacré à la recherche d'espèces plus discrètes : pangolins (très rares), potamochères, céphalophes. Retour au campement de base près de Bayanga. Dîner d'adieu avec toute l'équipe. Nuit à l'écolodge.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour à Bayanga */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR À BAYANGA</span>
                          <span className="text-sm text-gray-600">Syntèse et dernières observations</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Dernier jour en forêt</h4>
                        <p className="text-justify mb-4">
                          Matinée libre pour des dernières observations autour de Bayanga. Possibilité de visiter le centre de recherche du parc pour en apprendre davantage sur les programmes de conservation. Rencontre avec les chercheurs travaillant sur les gorilles et les éléphants. Déjeuner à l'écolodge. Après-midi : préparation des bagages pour le retour. Temps d'échange et de synthèse sur l'expérience vécue. Discussion sur les enjeux de conservation de la forêt équatoriale et sur l'écotourisme comme outil de protection. Dîner de clôture avec remise de certificats de participation au programme d'écotourisme. Nuit à l'écolodge.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Vol retour Bangui */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BAYANGA → BANGUI</span>
                          <span className="text-sm text-gray-600">Retour vers la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Retour à la civilisation</h4>
                        <p className="text-justify mb-4">
                          Petit-déjeuner d'adieu à l'écolodge. Transfert à l'aérodrome de Bayanga. Vol charter de retour vers Bangui. Arrivée à Bangui en milieu de matinée. Transfert à l'hôtel. Temps libre pour se reposer, se doucher, et traiter les premières photos. Déjeuner libre. Après-midi : visite optionnelle du Musée Barthélémy Boganda pour contextualiser l'expérience vécue dans l'histoire et la culture centrafricaine. Dîner libre. Nuit à l'hôtel à Bangui.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Départ de Bangui */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE BANGUI</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Matinée libre selon l'horaire de vol. Possibilité de derniers achats d'artisanat local. Transfert à l'aéroport de Bangui-M'Poko pour le vol international de retour. Emportez avec vous des souvenirs inoubliables de cette immersion exceptionnelle dans l'une des dernières forêts primaires d'Afrique centrale. Les images des gorilles dans leur habitat naturel, la majesté des éléphants de forêt, la sagesse des BaAka et la puissance vitale de la forêt équatoriale resteront gravées dans votre mémoire. Une expérience transformative qui change notre relation à la nature et notre compréhension de la biodiversité.
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
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Écologiques de Dzanga-Sangha</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition vous offre une immersion complète dans l'écosystème forestier le plus riche d'Afrique centrale. Des gorilles aux éléphants, des BaAka à la canopée, chaque expérience est conçue pour vous connecter profondément à la forêt équatoriale et à ses habitants.
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
                              <div className="text-sm font-semibold mb-3 text-green-700">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-green-700 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'foret' ? 3.0 : 
                                   exp.id === 'faune' ? 2.85 :
                                   exp.id === 'pygmees' ? 3.1 :
                                   3.2} 
                              lng={exp.id === 'foret' ? 16.3 : 
                                   exp.id === 'faune' ? 16.25 :
                                   exp.id === 'pygmees' ? 16.4 :
                                   16.35} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'foret' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Forêt Primitive de Dzanga-Sangha</h5>
                            <p className="text-gray-700 mb-4">
                              La forêt de Dzanga-Sangha est l'un des rares écosystèmes forestiers encore intacts en Afrique centrale. Contrairement aux forêts secondaires, cette forêt primaire n'a jamais été exploitée intensivement. Elle présente une structure complexe avec plusieurs strates de végétation, des arbres centenaires, une canopée dense et un sous-bois riche en biodiversité. Cette forêt est un réservoir de carbone essentiel dans la lutte contre le changement climatique et un laboratoire vivant pour la recherche scientifique. Son exploration est une plongée dans un monde préservé, où chaque élément joue un rôle dans l'équilibre écologique.
                            </p>
                          </div>
                        )}

                        {exp.id === 'faune' && (
                          <div className="bg-emerald-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Mégafaune Forestière</h5>
                            <p className="text-gray-700 mb-4">
                              Dzanga-Sangha abrite des densités exceptionnelles de grands mammifères. Les gorilles des plaines de l'Ouest, plus petits que leurs cousins des montagnes, vivent en groupes familiaux stables. Les éléphants de forêt, plus petits et plus sombres que les éléphants de savane, sont essentiels à la régénération de la forêt par la dispersion des graines. On y trouve également des buffles de forêt, des bongos (antilopes forestières), des sitatungas, et une extraordinaire diversité de primates. Cette concentration exceptionnelle de faune s'explique par la richesse du milieu et la protection efficace du parc national.
                            </p>
                          </div>
                        )}

                        {exp.id === 'pygmees' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Peuples BaAka</h5>
                            <p className="text-gray-700 mb-4">
                              Les BaAka sont un peuple pygmée dont la survie et la culture sont intimement liées à la forêt. Leur connaissance de l'écosystème est incomparable : ils identifient des centaines de plantes et leurs usages, interprètent les traces animales, maîtrisent les cycles naturels. Leur mode de vie traditionnel de chasseurs-cueilleurs est adapté à la forêt depuis des millénaires. Cependant, leur culture est menacée par la modernisation et la déforestation. Ce voyage permet une rencontre authentique et respectueuse avec ce peuple, dans le cadre d'un écotourisme qui valorise leurs savoirs et contribue à leur autonomie économique.
                            </p>
                          </div>
                        )}

                        {exp.id === 'aventure' && (
                          <div className="bg-lime-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Aventure Écologique Responsable</h5>
                            <p className="text-gray-700 mb-4">
                              Cette expédition est conçue selon les principes stricts de l'écotourisme : minimal impact environnemental, bénéfices directs aux communautés locales, sensibilisation des voyageurs. Les déplacements se font à pied ou en pirogue, les campements sont éphémères, les déchets sont systématiquement emportés. Les guides BaAka sont rémunérés équitablement, une partie du prix du voyage finance des projets de conservation. Cette approche garantit que le tourisme contribue à la protection de la forêt plutôt qu'à sa dégradation. C'est une aventure qui transforme les voyageurs en ambassadeurs de la conservation.
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
                          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600" 
                          alt="Forêt primaire" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt primaire</h5>
                          <p className="text-sm text-gray-700">Écosystème forestier intact et préservé</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Gorilles" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Gorilles des plaines</h5>
                          <p className="text-sm text-gray-700">Observation respectueuse dans leur habitat naturel</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600" 
                          alt="BaAka" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Peuple BaAka</h5>
                          <p className="text-sm text-gray-700">Rencontre avec les gardiens de la forêt</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Écologiques en Forêt</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏕️</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit propose des hébergements adaptés à l'expédition écologique : confort simple mais authentique à Bangui, écolodge de base à Bayanga, et surtout campements forestiers mobiles pour l'immersion en forêt. Tous les hébergements sont choisis pour leur faible impact environnemental et leur intégration dans le milieu naturel.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bangui')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bangui' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BANGUI (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bayanga')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bayanga' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BAYANGA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('foret')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'foret' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPEMENTS FORESTIERS (5 NUITS)
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
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
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
                              Hôtel 4* moderne situé au cœur de Bangui, utilisé comme base avant et après l'expédition forestière. Chambres spacieuses et confortables avec salle de bain privée, climatisation, wifi, télévision par satellite. Restaurant servant une cuisine internationale. Bar, piscine extérieure, centre d'affaires, service de blanchisserie. Dernier confort avant l'immersion en forêt et premier accueil au retour. Personnel francophone. Service de stockage des bagages non nécessaires en forêt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bayanga */}
                  {activeHotelTab === 'bayanga' && (
                    <div className="space-y-16">
                      {/* Écolodge de Bayanga */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Écolodge de Bayanga" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Écolodge de Bayanga</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bayanga, bord de la rivière Sangha, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Écotourisme</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Bungalows écologiques</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Vue sur rivière</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Écolodge situé en bordure de la rivière Sangha, à l'entrée de la réserve de Dzanga-Sangha. Bungalows simples mais confortables construits avec des matériaux locaux (bois, feuilles de palmier). Chambres avec lits confortables, moustiquaires, salle de bain privée basique (eau froide, pas d'eau chaude). Électricité solaire limitée (éclairage LED le soir). Restaurant servant une cuisine locale à base de produits frais. Terrasse avec vue sur la rivière. Point de départ et de retour des expéditions en forêt. Géré en partenariat avec la communauté locale et les autorités du parc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Forêt */}
                  {activeHotelTab === 'foret' && (
                    <div className="space-y-16">
                      {/* Campements forestiers mobiles */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=600" 
                              alt="Campement forestier" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campements Forestiers Mobiles</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Forêt de Dzanga-Sangha, République Centrafricaine
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>Immersion totale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Tentes haute qualité</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Cuisine sur feu de bois</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campements temporaires installés en pleine forêt pour une immersion totale. Tentes de qualité professionnelle (type safari) spacieuses, avec tapis de sol isolant et literie confortable. Toilettes sèches écologiques aménagées à distance respectueuse. Pas d'électricité (lampe frontale individuelle). Douche sommaire possible avec eau de rivière chauffée au feu de bois. Cuisine préparée sur feu de bois par l'équipe BaAka. Veillées autour du feu. Les campements sont démontés après notre passage pour laisser la forêt intacte. Expérience authentique de vie en forêt avec minimal impact environnemental. Encadrement permanent par les guides expérimentés.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$3,299</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vols charters Bangui-Bayanga, guides spécialisés, hébergements, tous les repas, permis gorilles
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
                    <option value="2026-03-15">15 Mars 2026</option>
                    <option value="2026-04-05">5 Avril 2026</option>
                    <option value="2026-04-25">25 Avril 2026</option>
                    <option value="2026-05-10">10 Mai 2026</option>
                    <option value="2027-03-20">20 Mars 2027</option>
                    <option value="2027-04-15">15 Avril 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs mars à mai (meilleure période sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION ÉCOLOGIQUE :</strong> Forêt primaire et gorilles avec les BaAka
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur cette expédition ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts écotourisme vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=15.5,2.0,17.0,3.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Dzanga-Sangha miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Forêt Équatoriale - 11 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Expédition écologique en forêt primaire
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
                    <span>Vol charter aller-retour Bangui-Bayanga</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste écologie forestière</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guides BaAka locaux</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements (10 nuits)</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas (10 pdj, 10 déj, 10 din)</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Permis gorilles (1 séance)</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Permis parc Dzanga-Sangha</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Matériel de campement</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transport fluvial en pirogue</span>
                    <span className="font-bold text-green-700">✓</span>
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
                    <span className="font-bold text-green-700">Excellente</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-green-700">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-green-700">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-green-700">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-green-700">Obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement personnel</span>
                    <span className="font-bold text-green-700">Liste fournie</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + traitement antipaludéen + certificat médical
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expérience transformative. Observer les gorilles à quelques mètres, dormir en forêt avec les BaAka, comprendre la complexité de cet écosystème... Cette expédition change votre vision du monde."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Sophie R., écovoyageuse 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}