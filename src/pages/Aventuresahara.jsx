import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-2},${lat-2},${lng+2},${lat+2}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-2},${lat-2},${lng+2},${lat+2}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Sahara Profond</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,15.0,25.0,25.0&layer=mapnik&marker=13.828,20.832&marker=18.65,19.15&marker=21.0,17.0&marker=20.0,21.0"
          style={{ border: 0 }}
          allowFullScreen
          title="Aventure dans le Sahara Profond"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=6/18.0/20.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-800 border-2 border-gray-300"></span>
          <span className="text-sm">Abéché (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Faya-Largeau (oasis)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bardai (Tibesti)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Emi Koussi (volcan)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Pic Toussidé</span>
        </div>
      </div>
    </div>
  );
};

export default function Aventuresahara() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('faya');
  const [activeRegionTab, setActiveRegionTab] = useState('tibesti');
  const [activeExperienceTab, setActiveExperienceTab] = useState('desert');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏔️', title: 'Massif du Tibesti', desc: 'Exploration du plus haut massif montagneux du Sahara' },
    { icon: '🌋', title: 'Emi Koussi', desc: 'Ascension du plus haut volcan du Sahara (3.415 m)' },
    { icon: '🏜️', title: 'Grand Erg Oriental', desc: 'Traversée des plus grandes dunes du Sahara tchadien' },
    { icon: '👳', title: 'Nomades Toubous', desc: 'Rencontre avec les légendaires nomades du désert' },
    { icon: '🌵', title: 'Oasis de Faya', desc: 'Découverte de la plus grande oasis du Sahara central' },
    { icon: '🌟', title: 'Nuits sous les étoiles', desc: 'Bivouacs au cœur du désert absolu' },
  ];

  const regions = [
    { name: 'Abéché', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Ancienne capitale du sultanat du Ouaddaï, porte du Sahara' },
    { name: 'Grand Erg Oriental', color: 'bg-yellow-100', textColor: 'text-yellow-800', desc: 'Mer de dunes et ergs infinis' },
    { name: 'Faya-Largeau', color: 'bg-orange-100', textColor: 'text-orange-800', desc: 'Plus grande oasis du Sahara tchadien' },
    { name: 'Massif du Tibesti', color: 'bg-red-100', textColor: 'text-red-800', desc: 'Chaîne volcanique, plus haut massif saharien' },
    { name: 'Emi Koussi', color: 'bg-gray-100', textColor: 'text-gray-800', desc: 'Plus haut volcan du Sahara, 3.415 mètres' },
    { name: 'Vallées du Tibesti', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Canyons, gueltas et art rupestre' },
  ];

  const experiences = [
    { 
      id: 'desert',
      name: 'Aventure Désertique', 
      icon: '🏜️',
      desc: 'Expédition extrême à travers les paysages les plus arides et spectaculaires du Sahara',
      highlights: ['Traversée du Grand Erg', 'Ascension de dunes', 'Navigation au GPS', 'Survie en milieu désertique']
    },
    { 
      id: 'montagne',
      name: 'Exploration Montagnarde', 
      icon: '🏔️',
      desc: 'Découverte du massif du Tibesti, ses volcans, ses canyons et ses paysages lunaires',
      highlights: ['Ascension de l\'Emi Koussi', 'Exploration des volcans', 'Randonnées en altitude', 'Découverte des gueltas']
    },
    { 
      id: 'culture',
      name: 'Culture Toubou', 
      icon: '👳',
      desc: 'Immersion dans la vie et les traditions des nomades toubous, maîtres du désert',
      highlights: ['Rencontres avec les nomades', 'Cérémonie du thé', 'Vie en campement', 'Traditions pastorales']
    },
    { 
      id: 'geologie',
      name: 'Géologie Extrême', 
      icon: '🌋',
      desc: 'Observation des phénomènes géologiques uniques du Sahara profond',
      highlights: ['Volcanisme actif', 'Formations rocheuses', 'Sources chaudes', 'Paysages extraterrestres']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌍</span>
          <span>ESCAPES | TCHAD</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Aventure dans le Sahara Profond</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              11 jours d'expédition extrême au cœur du Sahara tchadien, des oasis de Faya au massif volcanique du Tibesti
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
            <span className="text-2xl">🇹🇩</span>
            <span className="text-sm font-semibold">SAHARA PROFOND | TIBESTI</span>
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
                <span className="bg-red-800 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">11 jours - Abéché à Tibesti</span>
                <button className="ml-auto border-2 border-blue-800 text-blue-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Expédition extrême pour aventuriers confirmés dans le Sahara le plus profond</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DE L'EXPÉDITION
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  HÉBERGEMENT
                </button>
              </div>
            </div>

            {/* Contenu des onglets */}
            {activeTab === 'apercu' && (
              <div>
                {/* Description principale */}
                <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">⚠️</span>
                    <span className="font-bold text-red-800">CIRCUIT POUR AVENTURIERS CONFIRMÉS</span>
                  </div>
                  <p className="text-red-700 text-sm">
                    Cette expédition exige une excellente condition physique, une capacité d'adaptation aux conditions extrêmes et une expérience préalable du désert. Les distances sont longues, les conditions climatiques difficiles et les infrastructures minimales.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette expédition de 11 jours vous emmène au cœur du Sahara le plus profond et le plus inaccessible : le massif du Tibesti, au nord du Tchad. Partant d'Abéché, ancienne capitale du sultanat du Ouaddaï, vous traverserez le Grand Erg Oriental, découvrirez l'oasis géante de Faya-Largeau, et pénétrerez dans le massif volcanique du Tibesti, terre des légendaires nomades toubous. Vous escaladerez l'Emi Koussi, plus haut volcan du Sahara (3.415 m), explorerez les canyons et gueltas du Tibesti, et vivrez une aventure extrême dans l'un des derniers espaces vierges de la planète. Cette expédition est réservée aux aventuriers confirmés prêts à affronter des conditions difficiles pour découvrir des paysages d'une beauté hallucinante.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Défis et Récompenses de l'Expédition</h3>
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

                {/* Section Expériences de l'Expédition */}
                <div className="border-l-4 border-blue-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Extrêmes Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Ascension de l'Emi Koussi</strong>, plus haut volcan du Sahara (3.415 m)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Traversée du Grand Erg Oriental</strong> en 4x4 spécialement équipé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Exploration des canyons du Tibesti</strong> et de ses gueltas (oasis permanentes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Rencontre avec les Toubous</strong>, légendaires nomades du désert</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Navigation au GPS</strong> dans des zones sans repères</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Bivouacs en autonomie</strong> au cœur du désert absolu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Découverte de l'art rupestre</strong> du Tibesti (milliers d'années)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Observation des étoiles</strong> dans l'un des ciels les plus purs du monde</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Tibesti */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Tibesti : Ultime Frontière Saharienne</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le massif du Tibesti est l'une des régions les plus isolées et les moins explorées de la planète. Ce bastion volcanique, qui culmine à 3.415 mètres, abrite des paysages lunaires, des canyons spectaculaires, des sources chaudes et une biodiversité unique adaptée à l'extrême aridité. C'est aussi le territoire ancestral des Toubous, nomades réputés pour leur connaissance parfaite du désert et leur indépendance farouche. Accéder au Tibesti est une aventure en soi, récompensée par des paysages d'une beauté à couper le souffle.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Région isolée</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Volcanisme actif</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Nomades toubous</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Paysages extrêmes</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE SAHARA PROFOND EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Altitude maximale</div>
                      <div className="text-3xl font-bold text-red-800">3,415</div>
                      <div className="text-xs">mètres (Emi Koussi)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Température extrême</div>
                      <div className="text-3xl font-bold text-red-800">50°C</div>
                      <div className="text-xs">jour / -5°C nuit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance parcourue</div>
                      <div className="text-3xl font-bold text-red-800">1,800</div>
                      <div className="text-xs">km en 4x4</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Pluviométrie annuelle</div>
                      <div className="text-3xl font-bold text-red-800">0-20</div>
                      <div className="text-xs">mm (désert absolu)</div>
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
                          Cette expédition vous emmène des portes du Sahara à Abéché jusqu'au cœur du massif du Tibesti. Vous traverserez successivement le Sahel, le Grand Erg Oriental (mer de dunes), l'oasis de Faya-Largeau, et pénétrerez enfin dans le massif volcanique du Tibesti. Chaque étape représente un défi logistique et physique, avec des paysages qui évoluent des plaines arides aux montagnes volcaniques.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude max atteinte</div>
                            <div className="text-red-800 font-bold">3,415 m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en bivouac</div>
                            <div className="text-red-800 font-bold">8</div>
                          </div>
                          <div>
                            <div className="font-semibold">Décalage thermique</div>
                            <div className="text-red-800 font-bold">55°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Autonomie eau/nourriture</div>
                            <div className="text-red-800 font-bold">5 jours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Sahara Profond</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,15.0,25.0,25.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Sahara profond Tchad"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=6/18.0/20.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-red-800">Les Zones de l'Expédition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Abéché' && 'Porte du Sahara • Histoire • Préparation'}
                          {region.name === 'Grand Erg Oriental' && 'Dunes • Navigation • Chaleur extrême'}
                          {region.name === 'Faya-Largeau' && 'Oasis • Ravitaillement • Dernier avant-poste'}
                          {region.name === 'Massif du Tibesti' && 'Volcans • Canyons • Isolation'}
                          {region.name === 'Emi Koussi' && 'Sommet • Défi • Vue panoramique'}
                          {region.name === 'Vallées du Tibesti' && 'Gueltas • Art rupestre • Biodiversité'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-red-800 to-orange-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours Aventure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Abéché</div>
                      <div className="text-xs opacity-80">Préparation, acclimatation, départ</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Vers Faya</div>
                      <div className="text-xs opacity-80">Traversée du Grand Erg, première nuit désert</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Faya-Largeau</div>
                      <div className="text-xs opacity-80">Oasis, ravitaillement, rencontre Toubous</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Tibesti</div>
                      <div className="text-xs opacity-80">Massif volcanique, exploration, ascension</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-10</div>
                      <div className="text-sm">Retour vers Faya</div>
                      <div className="text-xs opacity-80">Traversée retour, derniers bivouacs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">11</div>
                      <div className="text-sm">Retour Abéché</div>
                      <div className="text-xs opacity-80">Synthèse, célébration, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Équipement requis */}
                <div className="mb-10 bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Équipement Requis pour l'Expédition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Matériel Obligatoire</h4>
                      <ul className="list-none space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Chaussures de randonnée montante (déjà rodées)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Sac de couchage confort -10°C minimum</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Vêtements techniques (couches multiples)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Lampe frontale avec batteries de rechange</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Matériel Fourni</h4>
                      <ul className="list-none space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Tentes spéciales désert (individuelles ou doubles)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Matelas auto-gonflant épais</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Réserve d'eau potable (6L/jour/personne)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Pharmacie complète et oxygène d'urgence</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Abéché */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À ABÉCHÉ</span>
                          <span className="text-sm text-gray-600">Porte du Sahara et préparation de l'expédition</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à Abéché, ancienne capitale du sultanat du Ouaddaï et dernière ville avant le Sahara profond. Accueil par votre guide chef d'expédition, spécialiste du désert tchadien, et l'équipe toubous qui vous accompagnera. Transfert à l'hôtel. Après-midi de préparation intensive : vérification complète de l'équipement individuel et collectif, briefing détaillé sur les conditions extrêmes, les règles de sécurité et le déroulé de l'expédition. Visite d'Abéché pour une introduction historique à la région. Dîner de bienvenue avec l'équipe. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Préparation finale et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PRÉPARATION FINALE</span>
                          <span className="text-sm text-gray-600">Derniers préparatifs et départ vers le désert</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Début de l'aventure</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée aux derniers préparatifs : chargement définitif des 4x4 spécialement équipés (réserves d'eau, nourriture, carburant, équipement), distribution du matériel collectif, dernier briefing sécurité. Départ en début d'après-midi pour les premières pistes du Sahara. Première adaptation progressive aux conditions désertiques. Installation du premier bivouac en bordure du Grand Erg Oriental. Initiation aux techniques de montage de tente en conditions venteuses. Premier coucher de soleil saharien. Dîner préparé sur feu de bois. Nuit sous les étoiles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Traversée du Grand Erg Oriental */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">GRAND ERG ORIENTAL</span>
                          <span className="text-sm text-gray-600">Première journée dans la mer de dunes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Immersion dans les dunes</h4>
                        <p className="text-justify mb-4">
                          Réveil au lever du soleil. Petit-déjeuner rapide et pliage du camp. Départ pour une longue journée de traversée du Grand Erg Oriental. Navigation au GPS à travers des paysages de dunes à perte de vue. Initiation aux techniques de conduite en sable et de désensablement. Arrêt au sommet d'une dune pour un panorama à 360°. Pique-nique à l'ombre des 4x4. Après-midi : continuation de la traversée avec passages techniques. Arrivée en fin de journée à un site de bivouac exceptionnel au cœur de l'erg. Ascension d'une dune pour le coucher de soleil. Dîner et nuit sous les étoiles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Vers Faya-Largeau */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS FAYA-LARGEAU</span>
                          <span className="text-sm text-gray-600">Sortie de l'erg et approche de l'oasis</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Dernière ligne droite vers l'oasis</h4>
                        <p className="text-justify mb-4">
                          Dernière journée de traversée du Grand Erg. Paysages qui évoluent progressivement vers des zones de reg (désert de pierres). Arrêt à un ancien puits caravanier. Rencontre avec un premier groupe de nomades toubous et partage du thé traditionnel. Pique-nique en route. Après-midi : premières visions des palmeraies de Faya-Largeau à l'horizon. Arrivée à Faya-Largeau, plus grande oasis du Sahara tchadien, en fin de journée. Installation au campement dans la palmeraie. Première douche depuis le début de l'expédition. Dîner avec produits frais de l'oasis. Nuit au campement.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Faya-Largeau et préparation Tibesti */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FAYA-LARGEAU</span>
                          <span className="text-sm text-gray-600">Ravitaillement et préparation pour le Tibesti</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Journée stratégique</h4>
                        <p className="text-justify mb-4">
                          Journée à Faya-Largeau pour le ravitaillement et la préparation de l'étape Tibesti. Ravitaillement complet en eau, nourriture et carburant. Visite de l'oasis : système d'irrigation traditionnel, palmeraies, jardins. Rencontre avec les autorités locales et obtention des dernières autorisations pour le Tibesti. Briefing spécial sur les conditions particulières du massif (altitude, froid nocturne, terrain volcanique). Vérification technique approfondie des véhicules. Après-midi libre pour se reposer. Dîner avec spécialités locales. Nuit au campement.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Entrée dans le Tibesti */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ENTRÉE DANS LE TIBESTI</span>
                          <span className="text-sm text-gray-600">Premiers contreforts du massif volcanique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Changement radical de décor</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Faya-Largeau en direction du Tibesti. Paysages qui évoluent progressivement des plaines sableuses aux premières collines volcaniques. Arrivée aux premiers contreforts du massif en fin de matinée. Piste de plus en plus technique. Arrêt à Bardai, principal village du Tibesti, pour les formalités. Rencontre avec les guides toubous locaux qui rejoignent l'expédition. Continuation vers le cœur du massif. Installation du bivouac dans une vallée protégée. Première acclimatation à l'altitude (environ 2.000 m). Dîner et nuit en altitude.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Exploration des canyons et gueltas */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CANYONS DU TIBESTI</span>
                          <span className="text-sm text-gray-600">Gueltas, art rupestre et sources chaudes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Journée d'exploration</h4>
                        <p className="text-justify mb-4">
                          Journée d'exploration à pied des merveilles du Tibesti. Randonnée jusqu'à une guelta (oasis permanente) abritant une faune adaptée (poissons, crocodiles du désert). Découverte de sites d'art rupestre millénaires (peintures et gravures). Visite de sources chaudes naturelles. Déjeuner pique-nique au bord d'une guelta. Après-midi : exploration d'un canyon spectaculaire. Rencontre avec un campement toubou et partage du thé. Retour au bivouac en fin de journée. Dîner et nuit en altitude.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Ascension de l'Emi Koussi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ASCENSION EMI KOUSSI</span>
                          <span className="text-sm text-gray-600">Sommet du plus haut volcan du Sahara</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Journée phare de l'expédition</h4>
                        <p className="text-justify mb-4">
                          Départ avant l'aube pour l'ascension de l'Emi Koussi (3.415 m). Montée progressive à travers des paysages volcaniques lunaires. Plusieurs arrêts pour l'acclimatation. Passage par le cratère principal. Dernière ascension jusqu'au sommet. Arrivée au point culminant du Sahara pour un panorama à 360° exceptionnel. Cérémonie au sommet et photos. Descente vers le camp de base. Retour au bivouac en fin d'après-midi. Célébration de l'ascension réussie. Dîner spécial et nuit sous les étoiles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour vers Faya-Largeau */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">TIBESTI → FAYA</span>
                          <span className="text-sm text-gray-600">Descente du massif et retour vers l'oasis</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Retour vers la civilisation</h4>
                        <p className="text-justify mb-4">
                          Descente progressive du massif du Tibesti. Derniers regards sur les paysages volcaniques. Arrêt à Bardai pour les formalités de sortie. Route vers Faya-Largeau à travers les plaines désertiques. Installation du bivouac en chemin. Dernière nuit dans le désert profond. Bilan de l'expédition au Tibesti autour du feu. Dîner et nuit sous les étoiles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Retour vers Abéché */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FAYA → ABÉCHÉ</span>
                          <span className="text-sm text-gray-600">Traversée retour et dernier bivouac</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-800">Dernière étape désertique</h4>
                        <p className="text-justify mb-4">
                          Longue journée de route à travers le désert en direction d'Abéché. Traversée du Grand Erg dans le sens inverse. Derniers arrêts techniques. Installation du dernier bivouac en bordure du désert. Cérémonie d'adieu avec l'équipe toubous. Dernier dîner en plein désert. Partage des impressions et émotions de l'expédition. Nuit sous les étoiles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Retour à Abéché et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">ABÉCHÉ → DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier lever de soleil dans le désert. Petit-déjeuner et démontage définitif du camp. Route vers Abéché. Arrivée à Abéché en milieu de journée. Temps pour se rafraîchir et rangement de l'équipement. Déjeuner de célébration avec toute l'équipe. Remise des certificats d'expédition et des souvenirs. Transfert à l'aéroport pour votre vol de retour. Emportez avec vous des souvenirs inoubliables de cette aventure extrême au cœur du Sahara profond, une expérience unique qui vous aura confronté aux éléments les plus rudes et récompensé par des paysages d'une beauté à couper le souffle et des rencontres humaines exceptionnelles.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-red-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-red-800">Les Expériences Extrêmes du Sahara Profond</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition vous offre des expériences uniques réservées aux aventuriers les plus aguerris. De l'ascension de volcans à la vie avec les nomades, chaque jour est un défi et une récompense.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-red-800 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-red-800">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-red-800">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-red-800 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'desert' ? 18.65 : 
                                   exp.id === 'montagne' ? 21.0 :
                                   exp.id === 'culture' ? 19.15 :
                                   20.0} 
                              lng={exp.id === 'desert' ? 19.15 : 
                                   exp.id === 'montagne' ? 17.0 :
                                   exp.id === 'culture' ? 18.65 :
                                   21.0} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'desert' && (
                          <div className="bg-red-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Art de Survivre dans le Désert</h5>
                            <p className="text-gray-700 mb-4">
                              Le Sahara profond est l'un des environnements les plus hostiles de la planète. Vous apprendrez les techniques essentielles de survie : navigation sans repères, gestion de l'eau, protection contre le soleil et le vent, montage de camp en conditions extrêmes. Vous découvrirez également comment lire les signes du désert : traces d'animaux, orientation par les étoiles, prévision des conditions météo. Ces savoirs, transmis par les guides toubous, sont le fruit de millénaires d'adaptation à cet environnement extrême.
                            </p>
                          </div>
                        )}

                        {exp.id === 'montagne' && (
                          <div className="bg-orange-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Le Massif du Tibesti : Un Monde à Part</h5>
                            <p className="text-gray-700 mb-4">
                              Le Tibesti est une anomalie géologique au cœur du Sahara. Ce massif volcanique, culminant à 3.415 mètres, abrite des paysages uniques : volcans actifs, caldeiras immenses, canyons spectaculaires, sources chaudes et gueltas permanentes. L'ascension de l'Emi Koussi est un défi technique et physique, récompensé par une vue panoramique sur l'ensemble du Sahara. L'exploration de ce massif, pratiquement inaccessible pendant des décennies, est une chance unique de découvrir un écosystème montagnard en plein désert.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Toubous : Maîtres du Désert</h5>
                            <p className="text-gray-700 mb-4">
                              Les Toubous sont les légendaires nomades du Sahara central. Réputés pour leur endurance, leur connaissance parfaite du désert et leur indépendance, ils ont su préserver leur mode de vie traditionnel malgré les bouleversements modernes. Vous vivrez avec eux, partagerez leurs repas, apprendrez leurs techniques de survie et écouterez leurs histoires autour du feu. Cette immersion est une occasion unique de comprendre une culture profondément adaptée à l'environnement le plus extrême, basée sur la mobilité, l'entraide et le respect absolu du désert.
                            </p>
                          </div>
                        )}

                        {exp.id === 'geologie' && (
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Géologie Extrême du Sahara</h5>
                            <p className="text-gray-700 mb-4">
                              Le Sahara profond est un livre ouvert sur l'histoire géologique de la Terre. Vous observerez des phénomènes uniques : volcanisme récent (le Tibesti est l'une des zones volcaniques les plus actives d'Afrique), formations sédimentaires vieilles de millions d'années, traces d'anciens lacs et rivières, impacts météoritiques. Les paysages, d'une beauté souvent lunaire, témoignent des forces titanesques qui ont façonné cette région. Cette expédition est aussi un voyage dans le temps géologique, à la découverte des secrets les mieux gardés de la planète.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Galerie d'expériences */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Expériences Extrêmes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                          alt="Dunes du Sahara" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Traversée des dunes</h5>
                          <p className="text-sm text-gray-700">Navigation dans le Grand Erg Oriental, mer de sable infinie</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Massif du Tibesti" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Volcans du Tibesti</h5>
                          <p className="text-sm text-gray-700">Exploration du massif volcanique le plus haut du Sahara</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                          alt="Nomades toubous" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Vie avec les Toubous</h5>
                          <p className="text-sm text-gray-700">Immersion dans la culture des légendaires nomades du désert</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hébergements */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DE L'EXPÉDITION</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Bivouacs et Campements en Autonomie Complète</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-red-800 w-16 md:w-32"></span>
                      <span className="text-red-800 text-2xl">🏕️</span>
                      <span className="h-px bg-red-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette expédition se déroule en autonomie complète. L'hébergement consiste en bivouacs montés chaque soir en plein désert, avec des tentes spéciales pour conditions extrêmes. Seules les nuits à Abéché et Faya-Largeau offrent un confort basique. Cette approche est essentielle pour pénétrer au cœur du Sahara profond et vivre une véritable aventure d'exploration.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('abeche')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'abeche' 
                          ? 'bg-red-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ABÉCHÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('faya')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'faya' 
                          ? 'bg-red-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      FAYA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bivouac')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bivouac' 
                          ? 'bg-red-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUACS (7 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Abéché */}
                  {activeHotelTab === 'abeche' && (
                    <div className="space-y-16">
                      {/* Hôtel à Abéché */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=600" 
                                alt="Hôtel Abéché" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-red-800 text-white px-3 py-1 text-sm font-bold">
                                CONFORT BASIQUE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Le Ouaddaï - Abéché</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Abéché, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏨</span>
                                <span>Hôtel simple</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💧</span>
                                <span className="text-sm font-semibold">Eau courante</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">⚡</span>
                                <span className="text-sm font-semibold">Électricité limitée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel simple mais propre à Abéché. Chambres basiques avec lit, ventilateur, salle de bain privée (eau froide). Restaurant local. Pas de climatisation ni de wifi fiable. Dernière opportunité de confort avant le départ pour le désert. Service de blanchisserie disponible. Accueil chaleureux.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Faya */}
                  {activeHotelTab === 'faya' && (
                    <div className="space-y-16">
                      {/* Campement à Faya */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                              alt="Campement Faya" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement de la Palmeraie - Faya</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Faya-Largeau, Sahara tchadien
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Campement désert</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Dans la palmeraie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💦</span>
                                <span className="text-sm font-semibold">Douche solaire</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement installé dans une palmeraie de l'oasis de Faya-Largeau. Tentes simples avec lits et matelas. Sanitaires communs avec douches à eau froide (chauffe-eau solaire selon ensoleillement). Restaurant sous tente servant une cuisine saharienne. Point d'eau potable. Dernier avant-poste avant le Tibesti. Immersion dans l'atmosphère de l'oasis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bivouac */}
                  {activeHotelTab === 'bivouac' && (
                    <div className="space-y-16">
                      {/* Bivouac désertique */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Bivouac désert" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouacs en Autonomie Complète</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Grand Erg Oriental et Massif du Tibesti
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏜️</span>
                                <span>En plein désert</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">⛺</span>
                                <span className="text-sm font-semibold">Tentes spéciales</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Cuisine sur feu</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Bivouacs montés chaque soir en pleine nature. Tentes individuelles ou doubles spéciales pour conditions désertiques (résistance au vent, sable, variations thermiques). Matelas auto-gonflants épais. Pas de sanitaires : toilettes sèches écologiques installées à chaque camp. Pas de douche pendant les bivouacs (lingettes désertiques). Cuisine préparée sur feu de bois ou réchaud. Eau potable fournie (6L/jour/personne). Expérience d'autonomie totale au cœur du désert. Réveils avec les premières lueurs du soleil sur des paysages spectaculaires.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Équipement fourni */}
                      <div className="bg-gray-100 p-6 rounded-lg">
                        <h4 className="font-semibold text-lg mb-4">Équipement de Bivouac Fourni</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2 text-red-800">Tentes</h5>
                            <ul className="list-none space-y-1 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Tentes individuelles ou doubles (au choix)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Résistance vent jusqu'à 80 km/h</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Double toit anti-condensation</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Moustiquaire intégrée</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2 text-red-800">Matériel collectif</h5>
                            <ul className="list-none space-y-1 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Matelas auto-gonflant 8 cm d'épaisseur</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Réserve d'eau 6L/jour/personne</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Toilettes sèches portables</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-800 mt-1">•</span>
                                <span>Tente mess et cuisine</span>
                              </li>
                            </ul>
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
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-red-800">$4,199</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Expédition tout compris</div>
                  <div className="mt-2 text-xs text-red-700 bg-red-50 p-2 rounded">
                    ✅ Inclus : Vols intérieurs*, 4x4 spécialement équipés, équipe complète, nourriture et eau, équipement de bivouac, guides toubous, autorisations spéciales
                  </div>
                  <div className="text-xs text-gray-600 mt-1">* Vols Abéché-Faya et retour inclus</div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-11-10">10 Novembre 2026</option>
                    <option value="2026-12-01">1 Décembre 2026</option>
                    <option value="2027-01-05">5 Janvier 2027</option>
                    <option value="2027-02-01">1 Février 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de novembre à février uniquement</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-red-800 to-orange-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION EXTRÊME :</strong> Pour aventuriers confirmés uniquement
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-red-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-red-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-red-800 text-white py-4 font-semibold text-base mb-4 hover:bg-red-700 transition-colors shadow-md">
                  RÉSERVER L'EXPÉDITION
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur cette expédition ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts du Sahara vous accompagnent dans la préparation.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=15.0,15.0,25.0,25.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Sahara miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Sahara Profond - 11 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Expédition au cœur du Sahara tchadien
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
                    <span>Vols intérieurs Abéché-Faya</span>
                    <span className="font-bold text-red-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4x4 spécialement équipés</span>
                    <span className="font-bold text-red-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipe complète (guides, cuisinier, mécaniciens)</span>
                    <span className="font-bold text-red-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nourriture et eau (6L/jour)</span>
                    <span className="font-bold text-red-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement de bivouac complet</span>
                    <span className="font-bold text-red-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guides toubous locaux</span>
                    <span className="font-bold text-red-800">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Conditions Requises</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Condition physique</span>
                    <span className="font-bold text-red-800">Excellente</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-red-800">25 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Expérience désert/montagne</span>
                    <span className="font-bold text-red-800">Requis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Certificat médical</span>
                    <span className="font-bold text-red-800">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Entretien préalable avec le chef d'expédition obligatoire
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-red-200 p-4 mt-6 shadow-lg bg-red-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-800">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "L'expédition la plus intense de ma vie. Le Tibesti est d'une beauté à couper le souffle. Une aventure réservée aux vrais aventuriers."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc D., expédition 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-red-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Sahara</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}