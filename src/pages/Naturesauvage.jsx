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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Nature Sauvage</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.5,-2.0,11.5,2.5&layer=mapnik&marker=1.85,9.75&marker=1.65,10.17&marker=1.0,10.0"
          style={{ border: 0 }}
          allowFullScreen
          title="Nature Sauvage : Parcs Nationaux"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/1.5/9.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Bata (Río Muni)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-300"></span>
          <span className="text-sm">Monte Alen (Parc National)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Cogo (Réserve naturelle)</span>
        </div>
      </div>
    </div>
  );
};

export default function NatureSauvage() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bata');
  const [activeExperienceTab, setActiveExperienceTab] = useState('foret');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🐘', title: 'Éléphants de forêt', desc: 'Observation des éléphants de forêt dans leur habitat naturel' },
    { icon: '🦍', title: 'Gorilles des plaines', desc: 'Rencontre avec les gorilles de l\'Ouest des plaines' },
    { icon: '🐒', title: 'Primates variés', desc: 'Observation de chimpanzés, mandrills et autres primates' },
    { icon: '🦜', title: 'Oiseaux tropicaux', desc: 'Plus de 400 espèces d\'oiseaux dans les parcs nationaux' },
    { icon: '🌳', title: 'Forêt équatoriale', desc: 'Exploration de la forêt tropicale humide préservée' },
    { icon: '🚶', title: 'Randonnées guidées', desc: 'Marches avec guides experts de la faune et flore' },
  ];

  const regions = [
    { name: 'Bata', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Point de départ, capitale continentale sur l\'océan Atlantique' },
    { name: 'Monte Alen', color: 'bg-emerald-100', textColor: 'text-emerald-800', desc: 'Parc national majeur, forêt dense et faune exceptionnelle' },
    { name: 'Région de Niefang', color: 'bg-lime-100', textColor: 'text-lime-800', desc: 'Zone de collines et forêts entre Bata et Monte Alen' },
    { name: 'Cogo', color: 'bg-yellow-100', textColor: 'text-yellow-800', desc: 'Ville fluviale, base pour explorer la réserve naturelle' },
    { name: 'Río Campo', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Rivière frontalière, écosystème unique' },
    { name: 'Forêts du Río Muni', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Vastes étendues forestières préservées' },
  ];

  const experiences = [
    { 
      id: 'foret',
      name: 'Forêt Équatoriale', 
      icon: '🌳',
      desc: 'Immersion dans la forêt tropicale humide de Guinée Équatoriale, exploration des écosystèmes uniques',
      highlights: ['Randonnées guidées', 'Canopée', 'Flore tropicale', 'Observation faune']
    },
    { 
      id: 'faune',
      name: 'Grands Mammifères', 
      icon: '🦍',
      desc: 'Observation des grands mammifères emblématiques : éléphants de forêt, gorilles, chimpanzés',
      highlights: ['Éléphants de forêt', 'Gorilles', 'Chimpanzés', 'Mandrills']
    },
    { 
      id: 'oiseaux',
      name: 'Ornithologie', 
      icon: '🦜',
      desc: 'Découverte de l\'avifaune exceptionnelle avec plus de 400 espèces d\'oiseaux recensées',
      highlights: ['Oiseaux tropicaux', 'Observatoires', 'Guide ornithologue', 'Écoute des chants']
    },
    { 
      id: 'communautes',
      name: 'Communautés Locales', 
      icon: '🏘️',
      desc: 'Rencontre avec les populations locales et découverte de leurs traditions forestières',
      highlights: ['Villages traditionnels', 'Artisanat local', 'Cuisine forestière', 'Savoirs traditionnels']
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Nature Sauvage : Parcs Nationaux de Guinée Équatoriale</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              10 jours d'immersion dans la forêt équatoriale à la rencontre des grands mammifères
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
            <span className="text-2xl">🇬🇶</span>
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | NATURE SAUVAGE</span>
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
                <span className="bg-green-600 text-white px-3 py-1 font-bold">NATURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE5</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - Bata à Cogo</span>
                <button className="ml-auto border-2 border-green-600 text-green-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Voyage d'aventure au cœur des forêts équatoriales</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-green-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-green-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-green-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-green-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 10 jours vous emmène au cœur de la nature sauvage de la Guinée Équatoriale continentale (Río Muni). Vous explorerez les parcs nationaux les plus préservés du pays, à la rencontre d'une faune exceptionnelle : éléphants de forêt, gorilles des plaines de l'Ouest, chimpanzés, mandrills et une multitude d'oiseaux tropicaux. De Bata au parc national de Monte Alen, puis vers la région de Cogo et le Río Campo, ce voyage vous offrira une immersion totale dans la forêt équatoriale, avec des randonnées guidées, des observations animales et des rencontres authentiques avec les communautés locales.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-500 pl-6 mb-10 p-4">
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
                <div className="border-l-4 border-green-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Randonnées guidées</strong> dans le parc national de Monte Alen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Observation des éléphants de forêt</strong> dans leur habitat naturel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Recherche des gorilles</strong> avec pisteurs expérimentés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Balade en pirogue</strong> sur le Río Campo</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Observation des oiseaux</strong> avec guide ornithologue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Rencontre avec les communautés locales</strong>, découverte des traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Nuit en lodge forestier</strong> au cœur de la nature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Découverte de la flore tropicale</strong>, arbres géants et plantes médicinales</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la nature sauvage */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Nature Sauvage de Guinée Équatoriale</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La Guinée Équatoriale continentale (Río Muni) possède l'une des dernières forêts équatoriales préservées d'Afrique centrale. Le parc national de Monte Alen, avec ses 2 000 km², abrite une biodiversité exceptionnelle : éléphants de forêt, gorilles, chimpanzés, buffles de forêt et plus de 400 espèces d'oiseaux. Ces forêts, peu explorées et protégées, offrent une expérience d'écotourisme authentique, loin des sentiers battus, dans un environnement préservé où la nature règne en maître.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Forêt équatoriale</span>
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Grands mammifères</span>
                      <span className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Écotourisme</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LA NATURE SAUVAGE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie Monte Alen</div>
                      <div className="text-3xl font-bold text-green-600">2,000</div>
                      <div className="text-xs">km² de forêt préservée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces d'oiseaux</div>
                      <div className="text-3xl font-bold text-green-600">400+</div>
                      <div className="text-xs">recensées dans les parcs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Éléphants de forêt</div>
                      <div className="text-3xl font-bold text-green-600">200+</div>
                      <div className="text-xs">population estimée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Précipitations annuelles</div>
                      <div className="text-3xl font-bold text-green-600">2,000</div>
                      <div className="text-xs">mm de pluie</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Forestier</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène de Bata, capitale continentale, vers les joyaux naturels de la Guinée Équatoriale. Vous découvrirez d'abord le parc national de Monte Alen, sanctuaire de biodiversité, puis vous vous dirigerez vers la région de Cogo et le Río Campo, zone frontalière aux écosystèmes uniques. Le voyage inclut des randonnées en forêt, des observations animales avec guides spécialisés, des balades en pirogue et des rencontres avec les populations locales pour une immersion complète dans la nature sauvage équatoguinéenne.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Randonnées</div>
                            <div className="text-green-600 font-bold">6 jours de marche</div>
                          </div>
                          <div>
                            <div className="font-semibold">Observations</div>
                            <div className="text-green-600 font-bold">Faune & Flore</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits forêt</div>
                            <div className="text-green-600 font-bold">Monte Alen 4 / Cogo 3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Transferts</div>
                            <div className="text-green-600 font-bold">4x4 & Pirogues</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Parcs Nationaux de Guinée Équatoriale</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,-2.5,12.0,3.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte parcs nationaux Guinée Équatoriale"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/1.0/10.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-600">Les Joyaux Naturels</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Bata' && 'Départ • Retour • Confort'}
                          {region.name === 'Monte Alen' && 'Parc national • Faune • Randonnées'}
                          {region.name === 'Région de Niefang' && 'Collines • Forêts • Transition'}
                          {region.name === 'Cogo' && 'Base nature • Río Campo • Communautés'}
                          {region.name === 'Río Campo' && 'Rivière • Frontière • Écosystème'}
                          {region.name === 'Forêts du Río Muni' && 'Vastes • Préservées • Biodiversité'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à Bata</div>
                      <div className="text-xs opacity-80">Accueil, préparation aventure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2-3</div>
                      <div className="text-sm">Vers Monte Alen</div>
                      <div className="text-xs opacity-80">Transfert, premières randonnées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4-6</div>
                      <div className="text-sm">Monte Alen profond</div>
                      <div className="text-xs opacity-80">Faune, flore, observations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7</div>
                      <div className="text-sm">Vers Cogo</div>
                      <div className="text-xs opacity-80">Transfert, changement d'écosystème</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8-9</div>
                      <div className="text-sm">Cogo et Río Campo</div>
                      <div className="text-xs opacity-80">Pirogues, communautés, observations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">10</div>
                      <div className="text-sm">Retour et départ</div>
                      <div className="text-xs opacity-80">Transfert Bata, vol retour</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Bata */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BATA</span>
                          <span className="text-sm text-gray-600">Accueil et préparation de l'aventure forestière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Bata, capitale continentale de la Guinée Équatoriale. Accueil par votre guide spécialiste de la faune et flore équatoguinéennes. Transfert à l'hôtel en bord de mer. Après-midi de détente pour récupérer du voyage. Visite rapide de Bata : promenade le long de la corniche avec vue sur l'océan Atlantique. Briefing détaillé sur le circuit nature, présentation des étapes, des consignes de sécurité en forêt et des espèces que vous pourrez observer. Dîner de bienvenue avec spécialités locales. Nuit à l'hôtel à Bata.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Transfert vers Monte Alen */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BATA → MONTE ALEN</span>
                          <span className="text-sm text-gray-600">Première immersion en forêt équatoriale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Entrée dans la forêt</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Bata en 4x4 pour le parc national de Monte Alen (environ 3-4 heures de route). Traversée de paysages variés : plantations, villages, collines couvertes de forêt. Arrivée au lodge en bordure du parc national. Installation dans votre bungalow en pleine nature. Premier contact avec la forêt équatoriale : petite randonnée d'acclimatation autour du lodge avec votre guide. Découverte des premiers sons de la forêt, observation des oiseaux et de la flore. Briefing sur les règles du parc et les comportements à adopter pour l'observation de la faune. Dîner au lodge avec produits locaux. Nuit au lodge de Monte Alen, bercés par les sons de la forêt.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Randonnée dans Monte Alen */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RANDONNÉE MONTE ALEN</span>
                          <span className="text-sm text-gray-600">Exploration des sentiers forestiers</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Journée d'immersion forestière</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à l'exploration des sentiers du parc national de Monte Alen. Départ matinal pour une randonnée de plusieurs heures avec votre guide et un pisteur local. Découverte de la flore tropicale : arbres géants, lianes, plantes médicinales, orchidées. Observation des traces d'animaux : empreintes d'éléphants, nids de chimpanzés, signes de présence de gorilles. Écoute des chants d'oiseaux et identification des espèces avec votre guide ornithologue. Déjeuner pique-nique en forêt. Après-midi : continuation de la randonnée, possibilité d'observer des primates (colobes, cercopithèques). Retour au lodge en fin d'après-midi. Dîner et partage des observations de la journée. Nuit à Monte Alen.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Recherche des grands mammifères */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">GRANDS MAMMIFÈRES</span>
                          <span className="text-sm text-gray-600">Éléphants, gorilles et chimpanzés</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Journée spéciale grands mammifères</h4>
                        <p className="text-justify mb-4">
                          Journée dédiée à la recherche des grands mammifères emblématiques de Monte Alen. Départ très matinal pour maximiser les chances d'observations. Avec vos guides expérimentés, vous vous enfoncez dans des zones moins fréquentées du parc, là où la faune est la plus active. Recherche des éléphants de forêt (Loxodonta cyclotis), plus petits que leurs cousins de savane et parfaitement adaptés à la forêt. Poursuite de la quête des gorilles des plaines de l'Ouest (Gorilla gorilla gorilla) et des chimpanzés (Pan troglodytes). Déjeuner sur place. L'après-midi, vous continuez l'exploration, avec des arrêts pour observer d'autres espèces (buffles de forêt, antilopes). Retour au lodge en fin de journée, satisfaction garantie quelle que soit la quantité d'observations. Dîner et échanges passionnés sur la faune. Nuit à Monte Alen.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Randonnée vers les chutes */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CHUTES ET PAYSAGES</span>
                          <span className="text-sm text-gray-600">Randonnée vers les chutes d'eau de Monte Alen</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Journée paysages et eau</h4>
                        <p className="text-justify mb-4">
                          Aujourd'hui, changement de thème : vous partez en randonnée vers l'une des magnifiques chutes d'eau de Monte Alen. Marche à travers une forêt dense, le long de cours d'eau. Arrivée aux chutes après quelques heures de marche : spectacle magnifique d'eau cristalline tombant sur des rochers moussus. Temps libre pour se rafraîchir (baignade possible selon le débit), prendre des photos, pique-niquer au bord de l'eau. L'après-midi, option : randonnée vers un point de vue panoramique offrant une vue imprenable sur la canopée. Retour au lodge par un autre sentier. Dîner détente. Nuit à Monte Alen.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Dernière matinée à Monte Alen */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE ALEN → COGO</span>
                          <span className="text-sm text-gray-600">Transfert vers la région de Cogo</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Changement de décor</h4>
                        <p className="text-justify mb-4">
                          Dernière matinée à Monte Alen : petite randonnée libre autour du lodge ou temps de détente pour profiter une dernière fois de l'ambiance forestière. Déjeuner au lodge. Départ en 4x4 pour la région de Cogo (environ 4-5 heures de route). Traversée de paysages différents : forêts, savanes, villages. Arrivée à Cogo, petite ville située sur les rives du Río Campo, à la frontière avec le Gabon. Installation à l'hébergement, lodge simple mais confortable au bord de la rivière. Premier contact avec l'écosystème fluvial. Dîner avec spécialités de poisson d'eau douce. Nuit à Cogo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Exploration du Río Campo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BALADE EN PIROGUE</span>
                          <span className="text-sm text-gray-600">Exploration du Río Campo en pirogue</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Journée fluviale</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à l'exploration du Río Campo en pirogue traditionnelle à moteur. Départ matinal pour profiter de la fraîcheur et de l'activité animale. Navigation sur la rivière, observation de la faune aquatique et riveraine : oiseaux d'eau (martins-pêcheurs, hérons, aigrettes), crocodiles, tortues, loutres. Arrêts pour de courtes marches en forêt galerie le long des berges. Rencontre avec des pêcheurs locaux, découverte de leurs techniques traditionnelles. Déjeuner pique-nique sur une plage de sable au bord de la rivière. Après-midi : continuation de la navigation, possibilité de pêche traditionnelle (si souhaité). Retour à Cogo en fin de journée. Dîner avec les prises du jour. Nuit à Cogo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Rencontre avec les communautés */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">COMMUNAUTÉS LOCALES</span>
                          <span className="text-sm text-gray-600">Rencontres et découvertes culturelles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Journée culturelle</h4>
                        <p className="text-justify mb-4">
                          Aujourd'hui, immersion dans la vie des communautés locales. Visite d'un village traditionnel près de Cogo. Accueil chaleureux par les habitants, découverte de leur mode de vie, de leur organisation sociale. Présentation des activités quotidiennes : agriculture, pêche, artisanat. Participation à des démonstrations (fabrication de manioc, vannerie, etc.). Déjeuner partagé avec une famille, découverte de la cuisine locale. Après-midi : échanges avec les anciens du village sur les traditions, les croyances, la relation à la forêt et à la rivière. Possibilité d'assister à des chants et danses traditionnels (selon les occasions). Retour à l'hébergement en fin d'après-midi. Dîner et réflexion sur cette rencontre humaine. Nuit à Cogo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Dernières observations et retour vers Bata */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">COGO → BATA</span>
                          <span className="text-sm text-gray-600">Retour vers la côte, dernières observations</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Retour vers la civilisation</h4>
                        <p className="text-justify mb-4">
                          Dernière matinée dans la région de Cogo : petite balade d'adieu en forêt ou le long de la rivière pour une dernière session d'observation des oiseaux. Déjeuner à Cogo. Départ en 4x4 pour le retour vers Bata (environ 5-6 heures de route). Traversée des mêmes paysages, mais avec un regard désormais averti. Arrivée à Bata en fin d'après-midi. Installation à l'hôtel en bord de mer. Temps libre pour se détendre, prendre une douche, se remettre des émotions de l'aventure. Dîner d'adieu dans un restaurant de Bata, retour sur les moments forts du circuit. Nuit à l'hôtel à Bata.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Départ de Bata */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE BATA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol, temps libre pour derniers achats de souvenirs (artisanat local, café, cacao) ou détente à l'hôtel. Déjeuner libre. Transfert à l'aéroport international de Bata pour votre vol de retour. Emportez avec vous des souvenirs inoubliables de cette immersion en forêt équatoriale : les rencontres avec les grands mammifères, les chants d'oiseaux, l'atmosphère unique de la forêt, et les sourires des communautés locales. Fin de nos services.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-green-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌿</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-600">Les Expériences de la Nature Sauvage</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une immersion totale dans les écosystèmes forestiers de Guinée Équatoriale. De la rencontre avec les grands mammifères emblématiques à la découverte de la flore tropicale, chaque expérience est conçue pour vous connecter profondément à la nature sauvage.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-green-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-green-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-green-600">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'foret' ? 1.65 : 
                                   exp.id === 'faune' ? 1.65 :
                                   exp.id === 'oiseaux' ? 1.0 :
                                   1.85} 
                              lng={exp.id === 'foret' ? 10.17 : 
                                   exp.id === 'faune' ? 10.17 :
                                   exp.id === 'oiseaux' ? 10.0 :
                                   9.75} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'foret' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Forêt Équatoriale de Monte Alen</h5>
                            <p className="text-gray-700 mb-4">
                              Le parc national de Monte Alen est un joyau de biodiversité couvrant 2 000 km² de forêt tropicale humide. Cette forêt primaire, peu perturbée par l'homme, abrite une flore exceptionnelle : arbres géants (comme l'okoumé), lianes, plantes épiphytes, orchidées rares. L'exploration de cette forêt est une expérience sensorielle unique : sons des animaux, humidité, lumière tamisée, odeurs de terre et de végétation. Les randonnées guidées vous permettent de découvrir cet écosystème complexe et de comprendre son fonctionnement.
                            </p>
                          </div>
                        )}

                        {exp.id === 'faune' && (
                          <div className="bg-emerald-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Grands Mammifères Emblématiques</h5>
                            <p className="text-gray-700 mb-4">
                              Monte Alen est l'un des derniers sanctuaires pour les grands mammifères d'Afrique centrale. On y trouve notamment l'éléphant de forêt (Loxodonta cyclotis), plus petit et aux défenses plus droites que son cousin de savane. Le parc abrite également une population importante de gorilles des plaines de l'Ouest (Gorilla gorilla gorilla) et de chimpanzés (Pan troglodytes). L'observation de ces animaux dans leur habitat naturel est un privilège rare, nécessitant patience, discrétion et l'expertise de guides locaux connaissant parfaitement leurs comportements.
                            </p>
                          </div>
                        )}

                        {exp.id === 'oiseaux' && (
                          <div className="bg-lime-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Avifaune Exceptionnelle</h5>
                            <p className="text-gray-700 mb-4">
                              Avec plus de 400 espèces d'oiseaux recensées, la Guinée Équatoriale continentale est un paradis pour les ornithologues amateurs et professionnels. Des perroquets gris du Gabon aux calaos à casque jaune, en passant par les magnifiques tisserins et les martins-pêcheurs, la diversité est impressionnante. Le Río Campo ajoute une dimension supplémentaire avec ses oiseaux d'eau. L'accompagnement par un guide ornithologue permet d'identifier les espèces par leurs chants et leurs plumages, et d'en apprendre davantage sur leurs comportements.
                            </p>
                          </div>
                        )}

                        {exp.id === 'communautes' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Communautés Forestières</h5>
                            <p className="text-gray-700 mb-4">
                              Les populations locales, principalement des ethnies Fang et Ndowe, vivent en harmonie avec la forêt depuis des générations. Leur connaissance de l'environnement est immense : plantes médicinales, techniques de chasse et de pêche durables, mythes et légendes liés à la nature. Rencontrer ces communautés, partager un repas, échanger sur leurs traditions, c'est ajouter une dimension humaine essentielle à l'expérience naturaliste. C'est aussi l'occasion de comprendre les défis de la conservation et le rôle que jouent ces populations dans la protection de leur environnement.
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
                          alt="Forêt équatoriale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt dense</h5>
                          <p className="text-sm text-gray-700">Canopée et sous-bois de Monte Alen</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600" 
                          alt="Éléphants de forêt" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Grands mammifères</h5>
                          <p className="text-sm text-gray-700">Éléphants de forêt dans leur habitat</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1550853024-10a4d8c5e43d?w=600" 
                          alt="Pirogue sur rivière" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Navigation fluviale</h5>
                          <p className="text-sm text-gray-700">Exploration du Río Campo en pirogue</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements en Pleine Nature</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-600 w-16 md:w-32"></span>
                      <span className="text-green-600 text-2xl">🏕️</span>
                      <span className="h-px bg-green-600 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements adaptés à l'immersion nature : hôtel confortable à Bata, écolodge en pleine forêt à Monte Alen, et lodge simple au bord du Río Campo à Cogo. Chaque hébergement a été sélectionné pour son cadre naturel et son intégration à l'environnement.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bata')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bata' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BATA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('montealen')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'montealen' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MONTE ALEN (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('cogo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'cogo' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      COGO (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Bata */}
                  {activeHotelTab === 'bata' && (
                    <div className="space-y-16">
                      {/* Hôtel Panafrica Bata */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Panafrica Bata" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Panafrica Bata</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Bata, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Vue sur mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* confortable situé en bord de mer à Bata. Chambres spacieuses avec climatisation, salle de bain privée, wifi. Restaurant servant une cuisine internationale et locale. Bar, piscine extérieure, salon. Service de blanchisserie. Cadre agréable pour débuter et terminer le voyage, avec tous les services nécessaires après l'aventure en forêt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Monte Alen */}
                  {activeHotelTab === 'montealen' && (
                    <div className="space-y-16">
                      {/* Monte Alen Forest Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" 
                              alt="Monte Alen Forest Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Monte Alen Forest Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Parc National de Monte Alen, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>En pleine forêt</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦉</span>
                                <span className="text-sm font-semibold">Sons nature</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Douche chaude</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Écolodge simple mais confortable situé en lisière du parc national de Monte Alen. Bungalows en matériaux locaux (bois, feuilles de palmier), chacun avec terrasse donnant sur la forêt. Chambres avec lits confortables, moustiquaires, salle de bain privée avec douche chaude (eau chauffée solaire). Restaurant servant une cuisine simple mais nourrissante à base de produits locaux. Électricité solaire limitée (le soir seulement). Immersion totale dans l'ambiance forestière, avec les sons des animaux la nuit. Point de départ idéal pour les randonnées.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Cogo */}
                  {activeHotelTab === 'cogo' && (
                    <div className="space-y-16">
                      {/* Cogo River Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1550853024-10a4d8c5e43d?w=600" 
                              alt="Cogo River Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Cogo River Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Cogo, sur les rives du Río Campo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🚣</span>
                                <span>Au bord de l'eau</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Vue rivière</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛶</span>
                                <span className="text-sm font-semibold">Pirogues disponibles</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Lodge simple situé directement sur les rives du Río Campo. Chambres basiques mais propres, avec ventilateur, moustiquaires, salle de bain privée (eau froide). Terrasse commune avec vue magnifique sur la rivière. Restaurant servant des plats locaux, avec une forte composante de poisson d'eau douce. Électricité par générateur (quelques heures par soir). Cadre authentique pour l'exploration de la région de Cogo et du Río Campo. Accès direct à l'eau pour les départs en pirogue.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Aventure</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-600">$3,499</span>
                    <span className="text-xl line-through text-gray-500">$3,199</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-green-600 bg-green-50 p-2 rounded">
                    ✅ Inclus : Transferts 4x4, hébergements, tous les repas, guides spécialisés, droits d'entrée parcs
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-06-15">15 Juin 2026</option>
                    <option value="2026-07-10">10 Juillet 2026</option>
                    <option value="2026-08-05">5 Août 2026</option>
                    <option value="2026-09-20">20 Septembre 2026</option>
                    <option value="2027-06-10">10 Juin 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de juin à septembre (saison sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>AVENTURE NATURE :</strong> Groupe limité pour une expérience privilégiée
                  </p>
                  <p className="text-xs text-gray-300">* Maximum 8 participants pour limiter l'impact</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-green-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-green-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-green-600 text-white py-4 font-semibold text-base mb-4 hover:bg-green-500 transition-colors shadow-md">
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
                    Nos experts de la nature équatoguinéenne vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,-2.5,12.0,3.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte nature sauvage miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Nature Sauvage - 10 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                    Circuit exclusif Monte Alen et Río Campo
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
                    <span>Transferts 4x4 tout au long du circuit</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts aéroport/hôtel</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide naturaliste francophone</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements (9 nuits)</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les petits-déjeuners</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>9 déjeuners et 9 dîners</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée dans les parcs nationaux</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Balade en pirogue sur le Río Campo</span>
                    <span className="font-bold text-green-600">✓</span>
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
                    <span className="font-bold text-green-600">Moyenne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-green-600">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-green-600">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-green-600">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-green-600">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + certificat vaccinal fièvre jaune + assurance rapatriement
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-600">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une immersion totale en forêt équatoriale. Voir des éléphants de forêt et entendre les gorilles au petit matin restera à jamais gravé dans ma mémoire. Guides exceptionnels."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Thomas R., voyageur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-400 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}