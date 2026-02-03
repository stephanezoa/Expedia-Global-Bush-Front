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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Île de Bioko</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.4,3.2,8.9,3.8&layer=mapnik&marker=3.75,8.78&marker=3.4,8.6&marker=3.25,8.52"
          style={{ border: 0 }}
          allowFullScreen
          title="Aventure sur l'Île de Bioko"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=10/3.5/8.65" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Malabo (capitale)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Pico Basile (volcan)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ureca (plages)</span>
        </div>
      </div>
    </div>
  );
};

export default function AventureBioko() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('malabo');
  const [activeExperienceTab, setActiveExperienceTab] = useState('aventure');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🌋', title: 'Ascension du Pico Basile', desc: 'Randonnée jusqu\'au point culminant de l\'île (3,011m)' },
    { icon: '🏖️', title: 'Plages sauvages d\'Ureca', desc: 'Découverte des plages immaculées au sud de Bioko' },
    { icon: '🌴', title: 'Forêts tropicales', desc: 'Exploration des forêts humides et biodiversité unique' },
    { icon: '🐒', title: 'Primates endémiques', desc: 'Observation des singes drills et autres espèces rares' },
    { icon: '🚤', title: 'Navigation côtière', desc: 'Exploration des côtes de Bioko en bateau' },
    { icon: '🌅', title: 'Couchers de soleil', desc: 'Spectacles naturels sur l\'océan Atlantique' },
  ];

  const regions = [
    { name: 'Malabo', color: 'bg-orange-100', textColor: 'text-orange-800', desc: 'Capitale et point de départ de l\'aventure' },
    { name: 'Pico Basile', color: 'bg-red-100', textColor: 'text-red-800', desc: 'Volcan actif, point culminant (3,011m)' },
    { name: 'Réserve scientifique', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Forêts protégées et biodiversité exceptionnelle' },
    { name: 'Ureca', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Village isolé et plages sauvages' },
    { name: 'Côte sud', color: 'bg-cyan-100', textColor: 'text-cyan-800', desc: 'Falaises, grottes et paysages spectaculaires' },
    { name: 'Luba', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Port historique et ancienne capitale' },
  ];

  const experiences = [
    { 
      id: 'aventure',
      name: 'Aventure Volcanique', 
      icon: '🌋',
      desc: 'Ascension du Pico Basile et exploration des paysages volcaniques uniques de Bioko',
      highlights: ['Randonnée volcanique', 'Paysages lunaires', 'Vues panoramiques', 'Géologie unique']
    },
    { 
      id: 'nature',
      name: 'Nature Sauvage', 
      icon: '🌿',
      desc: 'Immersion dans les écosystèmes uniques de Bioko : forêts, plages et biodiversité endémique',
      highlights: ['Forêts tropicales', 'Plages vierges', 'Faune endémique', 'Oiseaux rares']
    },
    { 
      id: 'exploration',
      name: 'Exploration Côtière', 
      icon: '🚤',
      desc: 'Navigation le long des côtes sauvages de Bioko et découverte de sites isolés',
      highlights: ['Navigation côtière', 'Plages isolées', 'Grottes marines', 'Pêche traditionnelle']
    },
    { 
      id: 'culture',
      name: 'Culture Bubi', 
      icon: '🏛️',
      desc: 'Rencontre avec l\'ethnie Bubi, peuple autochtone de l\'île de Bioko',
      highlights: ['Rencontres locales', 'Traditions Bubi', 'Artisanat', 'Cuisine traditionnelle']
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
          <span className="text-xl">🌋</span>
          <span>ESCAPES | GUINÉE ÉQUATORIALE</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Aventure sur l'Île de Bioko : Volcans et Plages</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              6 jours d'exploration des volcans, forêts tropicales et plages sauvages de l'île de Bioko
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
            <span className="text-2xl">🇬🇶</span>
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | ÎLE DE BIOKO</span>
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
                <span className="bg-orange-600 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE2</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">6 jours - Malabo à Ureca</span>
                <button className="ml-auto border-2 border-orange-600 text-orange-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage d'aventure au cœur des paysages volcaniques et tropicaux de Bioko</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 6 jours vous emmène à l'aventure sur l'île de Bioko, joyau volcanique de la Guinée Équatoriale. Vous découvrirez les paysages spectaculaires de cette île unique : l'ascension du Pico Basile (3,011m), volcan toujours actif ; l'exploration des forêts tropicales humides abritant une biodiversité exceptionnelle ; la découverte des plages sauvages d'Ureca, parmi les plus belles d'Afrique ; et la rencontre avec l'ethnie Bubi, peuple autochtone de l'île. Une aventure complète alliant randonnée, nature et découverte culturelle.
                </p>

                {/* Section Points forts */}
                <div className="bg-orange-50 border-l-4 border-orange-500 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-orange-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-orange-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Ascension du Pico Basile</strong> (3,011m) avec guide spécialisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Randonnée dans la réserve scientifique</strong> de Bioko</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Exploration des plages d'Ureca</strong>, parmi les plus belles d'Afrique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Observation des primates endémiques</strong> (drills, colobes)</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Navigation le long des côtes sauvages</strong> de Bioko</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Rencontre avec la communauté Bubi</strong> d'Ureca</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Découverte des cascades</strong> et cours d'eau de l'île</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Observation des tortues marines</strong> (en saison)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'île de Bioko */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">L'Île de Bioko : Un Joyau Naturel</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Bioko est une île volcanique d'origine récente (environ 1 million d'années) séparée du continent par le golfe de Guinée. Son isolement a favorisé le développement d'une biodiversité unique avec de nombreuses espèces endémiques. Le Pico Basile, volcan actif, domine l'île tandis que les côtes alternent entre plages de sable noir volcanique et falaises spectaculaires. Les forêts tropicales humides de l'intérieur sont parmi les plus riches d'Afrique en biodiversité.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Volcan actif</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Biodiversité unique</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Plages sauvages</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture Bubi</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">L'ÎLE DE BIOKO EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie</div>
                      <div className="text-3xl font-bold text-orange-600">2,017</div>
                      <div className="text-xs">km²</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Point culminant</div>
                      <div className="text-3xl font-bold text-orange-600">3,011</div>
                      <div className="text-xs">mètres (Pico Basile)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces endémiques</div>
                      <div className="text-3xl font-bold text-orange-600">30+</div>
                      <div className="text-xs">plantes et animaux</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Pluviométrie</div>
                      <div className="text-3xl font-bold text-orange-600">10,000</div>
                      <div className="text-xs">mm/an (sud de l'île)</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours sur l'Île de Bioko</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène des rives de Malabo, la capitale, jusqu'aux confins les plus sauvages de l'île. Vous monterez vers le Pico Basile, explorerez les forêts tropicales de la réserve scientifique, descendrez vers les plages isolées d'Ureca au sud, et naviguerez le long des côtes spectaculaires. Chaque étape révèle un aspect différent de cette île volcanique : paysages lunaires, forêts denses, plages immaculées et communautés traditionnelles.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-orange-600 font-bold">280 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Dénivelé positif</div>
                            <div className="text-orange-600 font-bold">+3,011m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits en bivouac</div>
                            <div className="text-orange-600 font-bold">2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes</div>
                            <div className="text-orange-600 font-bold">4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée de l'Île de Bioko</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.3,3.1,9.0,3.9&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte île de Bioko"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=10/3.5/8.65" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-orange-600">Les Zones de l'Île de Bioko</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Malabo' && 'Capitale • Départ • Urbanité'}
                          {region.name === 'Pico Basile' && 'Volcan • Randonnée • Panoramas'}
                          {region.name === 'Réserve scientifique' && 'Biodiversité • Forêt • Recherche'}
                          {region.name === 'Ureca' && 'Plages • Isolément • Tortues'}
                          {region.name === 'Côte sud' && 'Falaises • Grottes • Navigation'}
                          {region.name === 'Luba' && 'Histoire • Port • Culture'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à Malabo</div>
                      <div className="text-xs opacity-80">Accueil, préparation équipement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Ascension Pico Basile</div>
                      <div className="text-xs opacity-80">Randonnée volcan, bivouac sommet</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3</div>
                      <div className="text-sm">Forêts tropicales</div>
                      <div className="text-xs opacity-80">Réserve scientifique, faune</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4</div>
                      <div className="text-sm">Route vers Ureca</div>
                      <div className="text-xs opacity-80">Traversée île, villages Bubi</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Plages d'Ureca</div>
                      <div className="text-xs opacity-80">Navigation, bivouac plage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6</div>
                      <div className="text-sm">Retour et départ</div>
                      <div className="text-xs opacity-80">Retour Malabo, transfert aéroport</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Malabo */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À MALABO ET PRÉPARATION</span>
                          <span className="text-sm text-gray-600">Accueil et briefing de l'aventure</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Malabo sur l'île de Bioko. Accueil par votre guide spécialiste de l'aventure et de la montagne. Transfert à l'hôtel. Après-midi consacré à la préparation de l'expédition : vérification de l'équipement de randonnée et de camping, briefing détaillé sur le circuit, les conditions et les précautions à prendre. Visite rapide de Malabo pour s'acclimater. Dîner de bienvenue avec l'équipe. Nuit à l'hôtel à Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Ascension du Pico Basile */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ASCENSION DU PICO BASILE (3,011M)</span>
                          <span className="text-sm text-gray-600">Randonnée volcanique et bivouac au sommet</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée d'ascension</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 jusqu'au point de départ de la randonnée (vers 1,800m). Début de l'ascension du Pico Basile, volcan actif et point culminant de la Guinée Équatoriale. Randonnée à travers différents écosystèmes : forêts de fougères arborescentes, landes d'altitude, zones volcaniques dénudées. Arrivée au sommet (3,011m) en fin d'après-midi avec vue panoramique exceptionnelle sur toute l'île et l'océan Atlantique. Installation du bivouac près du sommet. Dîner autour du feu. Nuit sous tente avec possibilité d'observer les étoiles dans un ciel particulièrement pur.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Descente et exploration des forêts */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊTS TROPICALES ET RÉSERVE SCIENTIFIQUE</span>
                          <span className="text-sm text-gray-600">Biodiversité et descente vers le sud</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <h4 className="text-xl font-semibold mb-3 text-orange-600">Exploration forestière</h4>
                        <p className="text-justify mb-4">
                          Lever de soleil spectaculaire depuis le sommet du Pico Basile. Petit-déjeuner au bivouac. Descente vers les forêts tropicales humides de la réserve scientifique de Bioko. Randonnée à travers cette forêt primaire exceptionnellement riche en biodiversité. Observation de la faune : primates endémiques (drills, colobes roux de Bioko), oiseaux rares (touraco de Bioko), papillons. Visite d'une station de recherche scientifique. Déjeuner pique-nique en forêt. Continuation de la descente vers le sud de l'île. Arrivée en fin de journée dans un campement en lisière de forêt. Dîner et nuit sous tente.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Route vers Ureca */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">TRAVERSÉE VERS URECA</span>
                          <span className="text-sm text-gray-600">Rencontre avec la communauté Bubi</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée de traversée</h4>
                        <p className="text-justify mb-4">
                          Route à travers les paysages variés du sud de Bioko. Passage par des plantations de cacao et de café. Arrêt dans des villages Bubi pour rencontrer cette communauté autochtone de l'île. Découverte de leurs traditions, de leur artisanat (vannerie, poterie) et de leur mode de vie. Déjeuner chez l'habitant avec spécialités locales (banane plantain, poisson, igname). Après-midi : continuation vers Ureca, village isolé au sud de l'île. Arrivée en fin de journée à Ureca, installation dans un hébergement simple mais authentique. Dîner avec produits de la mer frais. Nuit à Ureca.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Plages d'Ureca et navigation */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PLAGES D'URECA ET NAVIGATION CÔTIÈRE</span>
                          <span className="text-sm text-gray-600">Exploration des côtes sauvages</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée côtière</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte des plages sauvages d'Ureca, considérées parmi les plus belles d'Afrique. Matin : exploration à pied des plages de sable noir et blanc, observation des tortues marines (en saison de ponte, de novembre à février). Navigation en bateau le long des côtes spectaculaires du sud de Bioko : falaises, grottes marines, formations rocheuses. Arrêt pour la baignade dans des criques isolées. Pique-nique sur une plage déserte. Après-midi : continuation de l'exploration côtière, possibilité de pêche traditionnelle avec les habitants. Retour à Ureca en fin d'après-midi. Dîner d'adieu avec fruits de mer grillés. Nuit à Ureca.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Retour à Malabo et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">RETOUR À MALABO ET DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à Ureca avec vue sur l'océan. Route de retour vers Malabo à travers les paysages de l'île. Arrêts pour dernières photos et découvertes. Déjeuner en route. Arrivée à Malabo en début d'après-midi. Temps libre pour se rafraîchir et faire des derniers achats de souvenirs. Transfert à l'aéroport international de Malabo pour votre vol de retour. Emportez avec vous des souvenirs inoubliables de cette aventure unique sur l'île volcanique de Bioko, entre sommets escarpés, forêts denses et plages paradisiaques.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-orange-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-orange-600">Les Expériences d'Aventure sur Bioko</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit d'aventure vous offre une immersion complète dans les paysages spectaculaires de l'île de Bioko. Du sommet du volcan aux plages isolées, chaque expérience est conçue pour les amateurs de nature sauvage et d'aventure authentique.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-orange-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-orange-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-orange-600">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'aventure' ? 3.6 : 
                                   exp.id === 'nature' ? 3.4 :
                                   exp.id === 'exploration' ? 3.25 :
                                   3.5} 
                              lng={exp.id === 'aventure' ? 8.78 : 
                                   exp.id === 'nature' ? 8.6 :
                                   exp.id === 'exploration' ? 8.52 :
                                   8.65} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'aventure' && (
                          <div className="bg-orange-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Aventure Volcanique</h5>
                            <p className="text-gray-700 mb-4">
                              L'ascension du Pico Basile est l'expérience phare de ce circuit. Ce volcan actif de 3,011m offre un défi accessible aux randonneurs en bonne condition physique. Le parcours traverse différents étages de végétation, des forêts d'altitude aux zones volcaniques dénudées. Au sommet, la vue panoramique sur toute l'île et l'océan est spectaculaire. Le bivouac près du sommet permet d'assister à des levers et couchers de soleil inoubliables.
                            </p>
                          </div>
                        )}

                        {exp.id === 'nature' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Nature Sauvage de Bioko</h5>
                            <p className="text-gray-700 mb-4">
                              L'île de Bioko est un hotspot de biodiversité avec de nombreuses espèces endémiques. Ses forêts tropicales humides abritent des primates rares comme le drill et le colobe roux de Bioko. La réserve scientifique protège cet écosystème unique où l'on peut observer une faune et une flore exceptionnelles. Les plages d'Ureca sont des sites de ponte importants pour les tortues marines. Cette immersion dans la nature préservée est une expérience rare en Afrique.
                            </p>
                          </div>
                        )}

                        {exp.id === 'exploration' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Exploration Côtière</h5>
                            <p className="text-gray-700 mb-4">
                              Les côtes sud de Bioko sont parmi les plus sauvages et spectaculaires d'Afrique. La navigation le long de ces côtes permet de découvrir des plages totalement isolées, accessibles uniquement par la mer. Les falaises, grottes marines et formations rocheuses créent des paysages époustouflants. Cette exploration côtière offre également l'opportunité d'observer la vie marine et de pratiquer la pêche traditionnelle avec les habitants locaux.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Bubi</h5>
                            <p className="text-gray-700 mb-4">
                              Les Bubi sont le peuple autochtone de l'île de Bioko. Leur culture, distincte de celle du continent, a été préservée grâce à l'isolement de l'île. Cette expérience vous permet de rencontrer cette communauté, de découvrir leurs traditions, leur artisanat, leur cuisine et leur mode de vie. À Ureca, village isolé du sud, vous vivrez une immersion authentique dans la vie quotidienne des Bubi, loin des influences modernes.
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
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                          alt="Pico Basile" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Sommet du Pico Basile</h5>
                          <p className="text-sm text-gray-700">Vue panoramique depuis le volcan de 3,011m</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Plages d'Ureca" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages sauvages</h5>
                          <p className="text-sm text-gray-700">Côtes immaculées et paysages préservés</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600" 
                          alt="Forêts tropicales" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêts primaires</h5>
                          <p className="text-sm text-gray-700">Écosystèmes uniques et biodiversité</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements d'Aventure sur l'Île de Bioko</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-orange-600 w-16 md:w-32"></span>
                      <span className="text-orange-600 text-2xl">🏕️</span>
                      <span className="h-px bg-orange-600 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit d'aventure propose des hébergements variés adaptés à l'expédition : hôtel confortable à Malabo, bivouac en montagne et au bord de la mer, hébergement simple mais authentique à Ureca. Chaque nuit est une expérience en soi, permettant une immersion totale dans les différents environnements de l'île.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('malabo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'malabo' 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MALABO (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bivouac')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bivouac' 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUAC (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('ureca')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ureca' 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      URECA (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Malabo */}
                  {activeHotelTab === 'malabo' && (
                    <div className="space-y-16">
                      {/* Hôtel Ibis Malabo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Ibis Malabo" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Ibis Malabo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Malabo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🍽️</span>
                                <span>Restaurant</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Wifi gratuit</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 3* fonctionnel situé en centre-ville. Chambres propres et confortables avec salle de bain privée, climatisation, wifi. Restaurant servant une cuisine internationale. Service de blanchisserie disponible. Emplacement pratique pour les préparatifs avant le départ en expédition. Dernière nuit confortable avant l'aventure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bivouac */}
                  {activeHotelTab === 'bivouac' && (
                    <div className="space-y-16">
                      {/* Bivouac au Pico Basile */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Bivouac Pico Basile" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac au Pico Basile</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Sommet du Pico Basile, Île de Bioko
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">⛺</span>
                                <span>Tentes haute montagne</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌌</span>
                                <span className="text-sm font-semibold">Ciel étoilé</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Vue panoramique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Expérience unique de bivouac près du sommet du Pico Basile à 3,000m d'altitude. Tentes de montagne fournies (2 personnes par tente). Matelas isolants et sacs de couchage adaptés aux températures fraîches en altitude. Repas préparés par l'équipe d'accompagnement. Sanitaires sommaires. Nuit inoubliable avec vue sur les étoiles dans un ciel exceptionnellement pur et lever de soleil spectaculaire sur toute l'île. Expérience d'aventure authentique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Ureca */}
                  {activeHotelTab === 'ureca' && (
                    <div className="space-y-16">
                      {/* Hébergement communautaire à Ureca */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Hébergement Ureca" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hébergement Communautaire - Ureca</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Ureca, sud de l'Île de Bioko
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏠</span>
                                <span>Chez l'habitant</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Vue sur l'océan</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span className="text-sm font-semibold">Immersion locale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hébergement simple mais authentique chez l'habitant dans le village isolé d'Ureca. Chambres basiques avec literie propre. Sanitaires partagés (douche à eau froide). Pas d'électricité permanente (générateur en soirée). Repas préparés avec produits locaux (poisson, fruits, légumes). Immersion totale dans la vie du village et partage avec la communauté Bubi. Expérience humaine unique permettant une compréhension profonde du mode de vie traditionnel. Nuits bercées par le bruit des vagues.
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
                  <span className="text-2xl">🌋</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Aventure</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-orange-600">$2,899</span>
                    <span className="text-xl line-through text-gray-500">$2,599</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-orange-600 bg-orange-50 p-2 rounded">
                    ✅ Inclus : Guide spécialisé montagne, équipement camping, tous les repas, transferts 4x4, navigation, hébergements
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-11-05">5 Novembre 2026</option>
                    <option value="2026-12-10">10 Décembre 2026</option>
                    <option value="2027-01-15">15 Janvier 2027</option>
                    <option value="2027-02-20">20 Février 2027</option>
                    <option value="2027-03-25">25 Mars 2027</option>
                    <option value="2027-04-15">15 Avril 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de novembre à avril (période sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT AVENTURE :</strong> Volcan, forêts et plages sauvages
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-orange-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-orange-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-orange-600 text-white py-4 font-semibold text-base mb-4 hover:bg-orange-500 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur cette aventure ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts montagne et aventure vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.3,3.1,9.0,3.9&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte île de Bioko miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Aventure sur l'Île de Bioko - 6 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit aventure volcans et plages
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
                    <span>Guide spécialiste montagne</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement camping complet</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts 4x4 tout terrain</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Navigation côtière Ureca</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les hébergements</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant l'aventure</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Matériel de randonnée</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entrées sites et réserves</span>
                    <span className="font-bold text-orange-600">✓</span>
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
                    <span className="font-bold text-orange-600">Bonne requise</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-orange-600">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-orange-600">Fièvre jaune + Paludisme</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement personnel</span>
                    <span className="font-bold text-orange-600">Chaussures rando, sac à dos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance aventure</span>
                    <span className="font-bold text-orange-600">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Certificat médical obligatoire + assurance rapatriement
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-orange-200 p-4 mt-6 shadow-lg bg-orange-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-orange-600">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une aventure incroyable ! L'ascension du Pico Basile et les nuits en bivouac étaient magiques. Les plages d'Ureca sont un véritable paradis sur terre."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas L., aventurier 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-orange-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-orange-400 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}