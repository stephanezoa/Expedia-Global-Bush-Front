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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire des Îles Paradisiaques</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=-5.0,-2.0,10.0,4.0&layer=mapnik&marker=3.75,8.78&marker=0.39,6.68&marker=-1.43,5.63"
          style={{ border: 0 }}
          allowFullScreen
          title="Îles Paradisiaques : Annobón et Corisco"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=6/1.0/4.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-cyan-600 border-2 border-gray-300"></span>
          <span className="text-sm">Malabo (Bioko)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-300"></span>
          <span className="text-sm">Corisco (Baie de Corisco)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-500 border-2 border-gray-300"></span>
          <span className="text-sm">Annobón (Île isolée)</span>
        </div>
      </div>
    </div>
  );
};

export default function IlesParadisiaques() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('malabo');
  const [activeExperienceTab, setActiveExperienceTab] = useState('plage');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏝️', title: 'Plages d\'Annobón', desc: 'Découverte des plages immaculées de l\'île la plus isolée' },
    { icon: '🤿', title: 'Snorkeling à Corisco', desc: 'Exploration des fonds marins cristallins et coraux' },
    { icon: '🌴', title: 'Cocotiers et lagons', desc: 'Paysages de cartes postales avec eaux turquoise' },
    { icon: '🐢', title: 'Tortues marines', desc: 'Observation des tortues vertes et autres espèces marines' },
    { icon: '🚤', title: 'Navigation inter-îles', desc: 'Croisière entre les îles paradisiaques' },
    { icon: '🌅', title: 'Couchers de soleil', desc: 'Spectacles uniques sur l\'océan Atlantique' },
  ];

  const regions = [
    { name: 'Malabo', color: 'bg-cyan-100', textColor: 'text-cyan-800', desc: 'Point de départ et retour, capitale sur l\'île de Bioko' },
    { name: 'Corisco', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Île aux plages de sable blanc et eaux cristallines' },
    { name: 'Baie de Corisco', color: 'bg-indigo-100', textColor: 'text-indigo-800', desc: 'Eaux calmes protégées, paradis du snorkeling' },
    { name: 'Annobón', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Île volcanique isolée, paysages spectaculaires' },
    { name: 'Lagon d\'Annobón', color: 'bg-emerald-100', textColor: 'text-emerald-800', desc: 'Lagon turquoise aux eaux calmes et poissons tropicaux' },
    { name: 'Îlots environnants', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Petites îles désertes accessibles en bateau' },
  ];

  const experiences = [
    { 
      id: 'plage',
      name: 'Plages Paradisiaques', 
      icon: '🏝️',
      desc: 'Détente sur les plus belles plages de Guinée Équatoriale, eaux turquoise et sable blanc immaculé',
      highlights: ['Plages d\'Annobón', 'Baie de Corisco', 'Baignades', 'Farniente']
    },
    { 
      id: 'marine',
      name: 'Monde Marin', 
      icon: '🤿',
      desc: 'Exploration des fonds marins exceptionnels : snorkeling, observation de la faune, écosystèmes coralliens',
      highlights: ['Snorkeling', 'Coraux', 'Poissons tropicaux', 'Tortues marines']
    },
    { 
      id: 'navigation',
      name: 'Navigation', 
      icon: '🚤',
      desc: 'Croisière entre les îles paradisiaques, découverte des côtes sauvages et îlots déserts',
      highlights: ['Croisière', 'Îlots déserts', 'Côtes sauvages', 'Navigation côtière']
    },
    { 
      id: 'culture',
      name: 'Culture Insulaire', 
      icon: '🏛️',
      desc: 'Rencontre avec les populations insulaires et découverte de leurs traditions uniques',
      highlights: ['Communauté Annobón', 'Traditions insulaires', 'Cuisine locale', 'Artisanat']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🏝️</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Îles Paradisiaques : Annobón et Corisco</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              9 jours de rêve entre plages immaculées, eaux turquoise et îles préservées
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
            <span className="text-2xl">🇬🇶</span>
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | ÎLES PARADISIAQUES</span>
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
                <span className="bg-cyan-600 text-white px-3 py-1 font-bold">PLAGE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE4</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours - Malabo à Annobón</span>
                <button className="ml-auto border-2 border-cyan-600 text-cyan-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-cyan-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage de rêve sur les plus belles îles de Guinée Équatoriale</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-cyan-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-cyan-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-cyan-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-cyan-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 9 jours vous emmène à la découverte des îles paradisiaques de la Guinée Équatoriale : Corisco et Annobón. Vous explorerez ces joyaux préservés aux plages immaculées, aux eaux turquoise et aux fonds marins exceptionnels. De Malabo à l'île isolée d'Annobón, en passant par les plages de sable blanc de Corisco, ce voyage vous offrira une escapade de rêve entre détente balnéaire, snorkeling dans des eaux cristallines, navigation entre îles désertes et découverte de cultures insulaires uniques. Une expérience exclusive dans des destinations rarement visitées.
                </p>

                {/* Section Points forts */}
                <div className="bg-cyan-50 border-l-4 border-cyan-500 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-cyan-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-cyan-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Vol intérieur</strong> vers les îles Corisco et Annobón</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Snorkeling dans la baie de Corisco</strong>, eaux cristallines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Navigation vers les îlots déserts</strong> autour de Corisco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Détente sur les plages d'Annobón</strong>, parmi les plus belles d'Afrique</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Observation des tortues marines</strong> dans leur habitat naturel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Rencontre avec la communauté d'Annobón</strong>, culture unique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Croisière autour d'Annobón</strong>, île volcanique spectaculaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span><strong>Pique-nique sur des plages désertes</strong>, expérience exclusive</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur les îles paradisiaques */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Les Îles Paradisiaques de Guinée Équatoriale</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La Guinée Équatoriale possède des îles d'une beauté exceptionnelle encore préservées du tourisme de masse. Corisco, avec ses plages de sable blanc et ses eaux turquoise, est un paradis pour le snorkeling. Annobón, île volcanique isolée à 670 km de la côte, offre des paysages spectaculaires et une culture unique. Ces destinations confidentielles vous garantissent une expérience authentique dans des cadres idylliques, loin des foules.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Plages immaculées</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Eaux turquoise</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Fonds marins</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Destinations confidentielles</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LES ÎLES PARADISIAQUES EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance Annobón</div>
                      <div className="text-3xl font-bold text-cyan-600">670</div>
                      <div className="text-xs">km de la côte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie Annobón</div>
                      <div className="text-3xl font-bold text-cyan-600">17</div>
                      <div className="text-xs">km² (petite île)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plages de Corisco</div>
                      <div className="text-3xl font-bold text-cyan-600">20+</div>
                      <div className="text-xs">plages immaculées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Température eau</div>
                      <div className="text-3xl font-bold text-cyan-600">28°</div>
                      <div className="text-xs">Celsius moyenne</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Insulaire</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène en vol depuis Malabo vers les deux plus belles îles de Guinée Équatoriale. Vous découvrirez d'abord Corisco et ses eaux cristallines, paradis du snorkeling, puis vous volerez vers Annobón, île volcanique isolée aux paysages spectaculaires. Le voyage inclut des navigations entre îles et îlots, des journées de détente sur des plages désertes, et l'exploration des fonds marins exceptionnels de ces destinations préservées.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Vols intérieurs</div>
                            <div className="text-cyan-600 font-bold">2 vols</div>
                          </div>
                          <div>
                            <div className="font-semibold">Navigation</div>
                            <div className="text-cyan-600 font-bold">4 excursions</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits îles</div>
                            <div className="text-cyan-600 font-bold">Corisco 3 / Annobón 4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Plages visitées</div>
                            <div className="text-cyan-600 font-bold">10+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Îles de Guinée Équatoriale</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-10.0,-5.0,15.0,5.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte îles Guinée Équatoriale"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=6/0.0/5.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-600">Les Joyaux Insulaires</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Malabo' && 'Départ • Retour • Confort'}
                          {region.name === 'Corisco' && 'Plages • Snorkeling • Sable blanc'}
                          {region.name === 'Baie de Corisco' && 'Eaux calmes • Coraux • Poissons'}
                          {region.name === 'Annobón' && 'Isolément • Volcan • Plages'}
                          {region.name === 'Lagon d\'Annobón' && 'Turquoise • Calme • Baignade'}
                          {region.name === 'Îlots environnants' && 'Déserts • Exploration • Exclusivité'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à Malabo</div>
                      <div className="text-xs opacity-80">Accueil, préparation voyage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Vol vers Corisco</div>
                      <div className="text-xs opacity-80">Premières plages, installation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Corisco paradisiaque</div>
                      <div className="text-xs opacity-80">Snorkeling, plages, îlots</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Vol vers Annobón</div>
                      <div className="text-xs opacity-80">Transfert vers l'île isolée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-8</div>
                      <div className="text-sm">Annobón magique</div>
                      <div className="text-xs opacity-80">Plages, navigation, culture</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9</div>
                      <div className="text-sm">Retour et départ</div>
                      <div className="text-xs opacity-80">Vol Annobón-Malabo, départ</div>
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
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À MALABO</span>
                          <span className="text-sm text-gray-600">Accueil et préparation du voyage insulaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Malabo sur l'île de Bioko. Accueil par votre guide spécialiste des îles équatoguinéennes. Transfert à l'hôtel en bord de mer. Après-midi de détente pour récupérer du voyage. Visite rapide de Malabo : promenade le long de la corniche avec vue sur l'océan. Briefing détaillé sur le circuit des îles, présentation des étapes et des spécificités des destinations insulaires. Dîner de bienvenue avec spécialités de fruits de mer. Nuit à l'hôtel à Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Vol vers Corisco */}
                  <div className="border-2 border-gray-300 overflow-hidden border-cyan-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MALABO → CORISCO</span>
                          <span className="text-sm text-gray-600">Premières plages de sable blanc</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-cyan-200">
                        <h4 className="text-xl font-semibold mb-3 text-cyan-600">Arrivée au paradis</h4>
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport de Malabo pour le vol intérieur vers Corisco (environ 1h30 de vol). Vue spectaculaire sur les îles depuis l'avion. Arrivée à Corisco, île aux plages de sable blanc et aux eaux turquoise. Accueil et transfert à l'hébergement en bord de plage. Installation dans votre bungalow les pieds dans l'eau. Première baignade dans les eaux cristallines de la baie de Corisco. Déjeuner avec produits de la mer frais. Après-midi : découverte à pied des plages environnantes. Dîner sur la plage au coucher du soleil. Nuit à Corisco.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Exploration de Corisco */}
                  <div className="border-2 border-gray-300 overflow-hidden border-cyan-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION DE CORISCO</span>
                          <span className="text-sm text-gray-600">Snorkeling et plages désertes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-cyan-200">
                        <h4 className="text-xl font-semibold mb-3 text-cyan-600">Journée marine</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte des fonds marins exceptionnels de Corisco. Matin : session de snorkeling avec équipement fourni dans la baie de Corisco, observation des coraux et poissons tropicaux. Navigation en bateau vers des spots de snorkeling préservés. Déjeuner pique-nique sur une plage déserte. Après-midi : exploration d'autres plages de l'île, détente, baignade. Possibilité d'activités optionnelles : kayak de mer, paddle. Retour à l'hébergement en fin d'après-midi. Dîner avec spécialités locales. Nuit à Corisco.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Îlots autour de Corisco */}
                  <div className="border-2 border-gray-300 overflow-hidden border-cyan-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ÎLOTS AUTOUR DE CORISCO</span>
                          <span className="text-sm text-gray-600">Navigation vers les îles désertes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-cyan-200">
                        <h4 className="text-xl font-semibold mb-3 text-cyan-600">Excursion insulaire</h4>
                        <p className="text-justify mb-4">
                          Journée de navigation vers les îlots déserts autour de Corisco. Départ en bateau pour explorer ces petits paradis préservés. Arrêt sur plusieurs îles pour la baignade, le snorkeling et la détente. Observation des oiseaux marins et, avec un peu de chance, des tortues marines. Pique-nique sur une plage de sable blanc avec vue sur l'océan infini. Après-midi : continuation de l'exploration, arrêt pour la pêche traditionnelle (si souhaité). Retour à Corisco en fin de journée. Dîner d'adieu à Corisco avec fruits de mer grillés. Nuit à Corisco.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Vol vers Annobón */}
                  <div className="border-2 border-gray-300 overflow-hidden border-cyan-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CORISCO → ANNOBÓN</span>
                          <span className="text-sm text-gray-600">Vers l'île la plus isolée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-cyan-200">
                        <h4 className="text-xl font-semibold mb-3 text-cyan-600">Changement de paradis</h4>
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner à Corisco. Transfert à l'aéroport de Corisco pour le vol vers Annobón (environ 2 heures de vol, avec escale possible à Bata). Vue spectaculaire depuis l'avion sur l'océan Atlantique et l'île volcanique d'Annobón. Arrivée à Annobón, île la plus isolée de Guinée Équatoriale. Accueil et transfert à l'hébergement en bord de lagon. Installation. Première découverte des plages de sable noir et blanc d'Annobón. Dîner avec produits locaux. Nuit à Annobón.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Découverte d'Annobón */}
                  <div className="border-2 border-gray-300 overflow-hidden border-cyan-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ANNOBÓN : PLAGES ET LAGON</span>
                          <span className="text-sm text-gray-600">Plages immaculées et eaux turquoise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-cyan-200">
                        <h4 className="text-xl font-semibold mb-3 text-cyan-600">Journée balnéaire</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte des magnifiques plages d'Annobón. Exploration des différentes plages de l'île : sable blanc, sable noir volcanique, criques isolées. Baignade dans les eaux turquoise du lagon d'Annobón, aux eaux calmes et chaudes. Snorkeling pour observer la vie marine. Déjeuner pique-nique sur une plage déserte. Après-midi : détente, lecture, baignade, ou option randonnée vers un point de vue panoramique. Rencontre avec les pêcheurs locaux. Dîner avec poisson frais du jour. Nuit à Annobón.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Navigation autour d'Annobón */}
                  <div className="border-2 border-gray-300 overflow-hidden border-cyan-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">NAVIGATION AUTOUR D'ANNOBÓN</span>
                          <span className="text-sm text-gray-600">Tour de l'île volcanique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-cyan-200">
                        <h4 className="text-xl font-semibold mb-3 text-cyan-600">Croisière côtière</h4>
                        <p className="text-justify mb-4">
                          Journée de navigation autour de l'île d'Annobón pour découvrir ses paysages côtiers spectaculaires. Départ en bateau pour faire le tour de l'île volcanique : falaises, grottes marines, formations rocheuses. Arrêts pour la baignade dans des criques isolées accessibles uniquement par la mer. Observation des oiseaux marins et, avec de la chance, des dauphins. Pique-nique sur une plage inaccessible par voie terrestre. Après-midi : continuation de la navigation, arrêt pour la pêche. Retour au port en fin de journée. Dîner avec la prise du jour. Nuit à Annobón.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Culture et détente à Annobón */}
                  <div className="border-2 border-gray-300 overflow-hidden border-cyan-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-cyan-50 hover:bg-cyan-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CULTURE ET DÉTENTE À ANNOBÓN</span>
                          <span className="text-sm text-gray-600">Rencontres et dernières découvertes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-cyan-200">
                        <h4 className="text-xl font-semibold mb-3 text-cyan-600">Journée libre et culturelle</h4>
                        <p className="text-justify mb-4">
                          Matinée libre pour profiter une dernière fois des plages d'Annobón à votre rythme. Option : visite du village principal pour rencontrer la communauté annobonaise, culture unique mélangeant influences africaines et portugaises. Découverte de l'artisanat local. Déjeuner avec spécialités insulaires. Après-midi : dernière baignade, détente, ou activité optionnelle (randonnée vers le point culminant de l'île pour vue panoramique). Préparation des bagages. Dîner d'adieu sur la plage au coucher du soleil, moment magique. Nuit à Annobón.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour à Malabo et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">RETOUR À MALABO ET DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner à Annobón avec vue sur l'océan. Transfert à l'aéroport d'Annobón pour le vol retour vers Malabo (environ 2 heures de vol). Arrivée à Malabo, capitale sur l'île de Bioko. Selon l'horaire de votre vol international, temps libre pour derniers achats de souvenirs ou détente à l'hôtel (chambre day-use si nécessaire). Déjeuner libre. Transfert à l'aéroport international de Malabo pour votre vol de retour. Emportez avec vous des souvenirs inoubliables de ces îles paradisiaques, leurs plages immaculées, leurs eaux turquoise et leur authenticité préservée.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-cyan-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-cyan-600">Les Expériences des Îles Paradisiaques</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une évasion complète dans les îles les plus préservées de Guinée Équatoriale. Des plages de sable blanc aux fonds marins exceptionnels, chaque expérience est conçue pour vous faire vivre un rêve éveillé dans des cadres idylliques.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-cyan-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-cyan-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-cyan-600">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-cyan-600 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'plage' ? 0.39 : 
                                   exp.id === 'marine' ? 0.39 :
                                   exp.id === 'navigation' ? -1.43 :
                                   3.75} 
                              lng={exp.id === 'plage' ? 6.68 : 
                                   exp.id === 'marine' ? 6.68 :
                                   exp.id === 'navigation' ? 5.63 :
                                   8.78} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'plage' && (
                          <div className="bg-cyan-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Plages Paradisiaques</h5>
                            <p className="text-gray-700 mb-4">
                              Corisco et Annobón possèdent certaines des plus belles plages d'Afrique. Corisco offre des kilomètres de plages de sable blanc immaculé bordées de cocotiers, avec des eaux turquoise et calmes. Annobón, île volcanique, présente des plages de sable noir et blanc, des criques isolées et un lagon aux eaux transparentes. Ces plages préservées, souvent désertes, vous offrent l'intimité et la tranquillité d'un véritable paradis tropical.
                            </p>
                          </div>
                        )}

                        {exp.id === 'marine' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Le Monde Marin Exceptionnel</h5>
                            <p className="text-gray-700 mb-4">
                              Les eaux cristallines de Corisco et Annobón abritent des écosystèmes marins riches et préservés. Les récifs coralliens de la baie de Corisco sont peuplés de poissons tropicaux multicolores, tandis que les eaux d'Annobón accueillent tortues marines, raies et dauphins. Le snorkeling dans ces eaux chaudes (28°C en moyenne) est une expérience magique, accessible à tous. La visibilité exceptionnelle permet d'admirer la vie sous-marine sans même avoir besoin de plonger profondément.
                            </p>
                          </div>
                        )}

                        {exp.id === 'navigation' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Navigation Insulaire</h5>
                            <p className="text-gray-700 mb-4">
                              Explorer ces îles paradisiaques par la mer est une expérience unique. Les navigations en bateau vous permettent de découvrir des côtes sauvages, des grottes marines, des formations volcaniques spectaculaires et des îlots totalement déserts. Ces excursions offrent des perspectives uniques sur les paysages et permettent d'accéder à des plages isolées, accessibles uniquement par la mer. C'est l'occasion de vivre une véritable aventure insulaire dans des cadres préservés.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Insulaire Unique</h5>
                            <p className="text-gray-700 mb-4">
                              Les îles de Guinée Équatoriale possèdent des cultures distinctes du continent. Les Annobonais, en particulier, ont développé une identité unique, mélange d'influences africaines et portugaises (l'île fut découverte par les Portugais le 1er janvier 1473, d'où son nom "Ano Bom", "Bonne Année"). Leur isolement a préservé des traditions spécifiques, une musique particulière et un mode de vie adapté à l'insularité. Cette immersion culturelle complète l'expérience balnéaire par une dimension humaine authentique.
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
                          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" 
                          alt="Plages de Corisco" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages immaculées</h5>
                          <p className="text-sm text-gray-700">Sable blanc et eaux turquoise à Corisco</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Snorkeling" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Monde sous-marin</h5>
                          <p className="text-sm text-gray-700">Fonds marins préservés et poissons tropicaux</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1536152471326-642d01369e3f?w=600" 
                          alt="Navigation" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Îles désertes</h5>
                          <p className="text-sm text-gray-700">Exploration d'îlots préservés et exclusifs</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements de Rêve sur les Îles Paradisiaques</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-cyan-600 w-16 md:w-32"></span>
                      <span className="text-cyan-600 text-2xl">🏨</span>
                      <span className="h-px bg-cyan-600 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements exclusifs adaptés à chaque île : hôtel de charme à Malabo, écolodge les pieds dans l'eau à Corisco, et bungalows de rêve face au lagon à Annobón. Chaque hébergement a été sélectionné pour son cadre exceptionnel et son immersion dans l'environnement insulaire.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('malabo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'malabo' 
                          ? 'bg-cyan-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MALABO (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('corisco')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'corisco' 
                          ? 'bg-cyan-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CORISCO (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('annobon')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'annobon' 
                          ? 'bg-cyan-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ANNOBÓN (4 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Malabo */}
                  {activeHotelTab === 'malabo' && (
                    <div className="space-y-16">
                      {/* Hôtel Sofitel Malabo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Sofitel Malabo" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 text-sm font-bold">
                                5* LUXE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Sofitel Malabo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Sipopo, Malabo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">3 Restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💆</span>
                                <span className="text-sm font-semibold">Spa luxueux</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 5* de luxe situé dans le complexe de Sipopo, en bord de mer. Chambres et suites spacieuses avec vue sur l'océan, décoration élégante, salle de bain marbre, climatisation, wifi haute vitesse. Plusieurs restaurants dont un gastronomique, bar avec terrasse, piscine à débordement face à la mer, spa complet, centre de fitness. Service de concierge et transferts privés. Cadre idyllique pour débuter et terminer le voyage.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Corisco */}
                  {activeHotelTab === 'corisco' && (
                    <div className="space-y-16">
                      {/* Corisco Island Ecolodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" 
                              alt="Corisco Island Ecolodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Corisco Island Ecolodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baie de Corisco, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏝️</span>
                                <span>Bungalows sur plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Accès direct mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🤿</span>
                                <span className="text-sm font-semibold">Centre snorkeling</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Écolodge exclusif situé directement sur la plage de sable blanc de Corisco. Bungalows traditionnels construits avec des matériaux locaux, chacun avec terrasse privée donnant sur la mer. Décoration naturelle et élégante, lit king-size, salle de bain ouverte avec douche extérieure. Restaurant de plage servant une cuisine créole à base de produits frais. Bar, salon de détente, équipement snorkeling gratuit. Électricité solaire, eau de source. Immersion totale dans le paradis corisquois.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Annobón */}
                  {activeHotelTab === 'annobon' && (
                    <div className="space-y-16">
                      {/* Annobón Paradise Resort */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Annobón Paradise Resort" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Annobón Paradise Resort</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Lagon d'Annobón, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏝️</span>
                                <span>Villas sur pilotis</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Vue lagon 360°</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚤</span>
                                <span className="text-sm font-semibold">Quai privé</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Resort exclusif composé de villas sur pilotis au-dessus des eaux turquoise du lagon d'Annobón. Chaque villa dispose d'une terrasse privée avec accès direct à l'eau, chambre spacieuse avec lit king-size, salle de bain ouverte avec baignoire face au lagon. Décoration élégante inspirée de l'architecture locale. Restaurant gastronomique spécialisé en fruits de mer, bar panoramique. Service de bateau privé pour excursions. Électricité 24h/24, wifi limité (pour déconnexion). Cadre de rêve pour une expérience ultime d'évasion.
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
                  <span className="text-2xl">🏝️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Rêve</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-cyan-600">$3,999</span>
                    <span className="text-xl line-through text-gray-500">$3,699</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-cyan-600 bg-cyan-50 p-2 rounded">
                    ✅ Inclus : Vols intérieurs, hébergements exclusifs, tous les repas, excursions, équipement snorkeling
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-cyan-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-cyan-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-12-15">15 Décembre 2026</option>
                    <option value="2027-01-10">10 Janvier 2027</option>
                    <option value="2027-02-05">5 Février 2027</option>
                    <option value="2027-02-25">25 Février 2027</option>
                    <option value="2027-03-15">15 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de décembre à mars (meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT EXCLUSIF :</strong> Îles paradisiaques confidentielles
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-cyan-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-cyan-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-cyan-600 text-white py-4 font-semibold text-base mb-4 hover:bg-cyan-500 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce rêve ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts des îles paradisiaques vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-10.0,-5.0,15.0,5.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte îles paradisiaques miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Îles Paradisiaques - 9 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit exclusif Corisco et Annobón
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
                    <span>Vols intérieurs Malabo-Corisco-Annobón-Malabo</span>
                    <span className="font-bold text-cyan-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts aéroport/hôtel</span>
                    <span className="font-bold text-cyan-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste des îles</span>
                    <span className="font-bold text-cyan-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements exclusifs (8 nuits)</span>
                    <span className="font-bold text-cyan-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les petits-déjeuners</span>
                    <span className="font-bold text-cyan-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>8 déjeuners et 8 dîners</span>
                    <span className="font-bold text-cyan-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Excursions en bateau incluses</span>
                    <span className="font-bold text-cyan-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement snorkeling</span>
                    <span className="font-bold text-cyan-600">✓</span>
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
                    <span className="font-bold text-cyan-600">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-cyan-600">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-cyan-600">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-cyan-600">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-cyan-600">Recommandée</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + certificat vaccinal fièvre jaune
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-cyan-200 p-4 mt-6 shadow-lg bg-cyan-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-cyan-600">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un rêve éveillé ! Les plages de Corisco sont d'une beauté à couper le souffle et Annobón est un paradis préservé. Une expérience exclusive inoubliable."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Sophie L., voyageuse 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-cyan-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-cyan-400 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}