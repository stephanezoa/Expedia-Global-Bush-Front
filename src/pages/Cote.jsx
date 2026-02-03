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
        <h4 className="font-semibold text-center text-lg">Itinéraire Côte Atlantique</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.5,-2.0,10.5,2.0&layer=mapnik&marker=1.85,9.75&marker=1.0,9.78&marker=0.95,9.93&marker=1.12,9.98"
          style={{ border: 0 }}
          allowFullScreen
          title="Côte Atlantique : Pêche et Traditions"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/1.5/9.8" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Bata (Capitale continentale)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-500 border-2 border-gray-300"></span>
          <span className="text-sm">Kogo (Village de pêcheurs)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-cyan-500 border-2 border-gray-300"></span>
          <span className="text-sm">Plages et estuaires</span>
        </div>
      </div>
    </div>
  );
};

export default function Cote() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bata');
  const [activeExperienceTab, setActiveExperienceTab] = useState('peche');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🎣', title: 'Pêche traditionnelle', desc: 'Apprentissage des techniques de pêche locales avec les pêcheurs' },
    { icon: '🛶', title: 'Navigation en pirogue', desc: 'Exploration des estuaires et mangroves en pirogue traditionnelle' },
    { icon: '🐟', title: 'Découverte marine', desc: 'Rencontre avec la faune marine et découverte des écosystèmes côtiers' },
    { icon: '🏖️', title: 'Plages sauvages', desc: 'Détente sur les plages préservées de la côte atlantique' },
    { icon: '🍽️', title: 'Cuisine maritime', desc: 'Dégustation de poissons et fruits de mer fraîchement pêchés' },
    { icon: '👨‍👩‍👧', title: 'Rencontres locales', desc: 'Immersion dans la vie des communautés côtières Ndowe' },
  ];

  const regions = [
    { name: 'Bata', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Capitale continentale, point de départ sur l\'océan Atlantique' },
    { name: 'Plage d\'Utonde', color: 'bg-cyan-100', textColor: 'text-cyan-800', desc: 'Longue plage de sable fin à proximité de Bata' },
    { name: 'Kogo', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Village de pêcheurs traditionnel, cœur du circuit' },
    { name: 'Estuaire du Río Muni', color: 'bg-emerald-100', textColor: 'text-emerald-800', desc: 'Zone de mangroves et d\'écosystèmes riches' },
    { name: 'Villages côtiers', color: 'bg-sky-100', textColor: 'text-sky-800', desc: 'Communautés Ndowe vivant de la pêche et de la mer' },
    { name: 'Crique de Kogo', color: 'bg-indigo-100', textColor: 'text-indigo-800', desc: 'Abri naturel pour les bateaux de pêche, eaux calmes' },
  ];

  const experiences = [
    { 
      id: 'peche',
      name: 'Pêche Traditionnelle', 
      icon: '🎣',
      desc: 'Immersion dans l\'art de la pêche avec les communautés locales, techniques ancestrales et modernes',
      highlights: ['Pêche au filet', 'Pêche à la ligne', 'Pêche au casier', 'Techniques traditionnelles']
    },
    { 
      id: 'navigation',
      name: 'Navigation Côtière', 
      icon: '🛶',
      desc: 'Exploration de la côte atlantique en pirogue et bateau, découverte des estuaires et plages isolées',
      highlights: ['Pirogues traditionnelles', 'Estuaires', 'Mangroves', 'Plages secrètes']
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie Maritime', 
      icon: '🍽️',
      desc: 'Découverte de la cuisine côtière équatoguinéenne à base de produits frais de la mer',
      highlights: ['Poissons grillés', 'Fruits de mer', 'Recettes locales', 'Préparation traditionnelle']
    },
    { 
      id: 'culture',
      name: 'Culture Côtière', 
      icon: '🏘️',
      desc: 'Rencontre avec le peuple Ndowe, traditions maritimes, musique et vie quotidienne',
      highlights: ['Communauté Ndowe', 'Traditions maritimes', 'Musique et danse', 'Artisanat local']
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
          <span className="text-xl">🌊</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Côte Atlantique : Pêche et Traditions</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              5 jours d'immersion dans la vie des pêcheurs et des communautés côtières de Guinée Équatoriale
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
            <span className="text-2xl">🇬🇶</span>
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | CÔTE ATLANTIQUE</span>
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
                <span className="bg-blue-700 text-white px-3 py-1 font-bold">CÔTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE7</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">5 jours - Bata à Kogo</span>
                <button className="ml-auto border-2 border-blue-700 text-blue-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage authentique au cœur des traditions maritimes équatoguinéennes</span>
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
                  Ce circuit de 5 jours vous emmène à la découverte de la côte atlantique de la Guinée Équatoriale continentale (Río Muni). Vous plongerez dans l'univers des pêcheurs et des communautés côtières Ndowe, découvrirez leurs traditions maritimes ancestrales, et partagerez leur quotidien entre mer et terre. De Bata, capitale continentale, au village de pêcheurs de Kogo, en passant par les plages sauvages et les estuaires poissonneux, ce voyage vous offre une immersion authentique dans une culture tournée vers l'océan. Pêche traditionnelle, navigation en pirogue, découverte de la gastronomie maritime et rencontres chaleureuses rythmeront ces 5 jours inoubliables.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-700 text-2xl">{item.icon}</span>
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
                        <span><strong>Sortie de pêche</strong> avec des pêcheurs locaux, techniques traditionnelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Navigation en pirogue</strong> dans les estuaires et mangroves</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Visite du village de pêcheurs</strong> de Kogo, immersion dans la vie locale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Dégustation de poissons et fruits de mer</strong> fraîchement pêchés</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Détente sur les plages sauvages</strong> de la côte atlantique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Rencontre avec la communauté Ndowe</strong>, découverte de leurs traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Découverte de la préparation du poisson</strong>, techniques de conservation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-700 mt-1">•</span>
                        <span><strong>Visite du marché aux poissons</strong> de Bata, ambiance typique</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la côte atlantique */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Côte Atlantique de Guinée Équatoriale</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La côte continentale de la Guinée Équatoriale, baignée par l'océan Atlantique, est le territoire du peuple Ndowe, traditionnellement pêcheurs. Les villages de pêcheurs comme Kogo perpétuent des techniques ancestrales tout en s'adaptant aux méthodes modernes. Cette côte, moins fréquentée que les îles, offre une authenticité préservée, des plages souvent désertes, et une vie rythmée par les marées et les saisons de pêche. C'est un monde à part, où la relation à la mer est au cœur de l'identité culturelle.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Pêche traditionnelle</span>
                      <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Communautés côtières</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Gastronomie maritime</span>
                      <span className="bg-sky-100 text-sky-800 text-xs px-3 py-1 rounded-full">Authenticité préservée</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LA CÔTE ATLANTIQUE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Longueur côtière</div>
                      <div className="text-3xl font-bold text-blue-700">296</div>
                      <div className="text-xs">km de côte continentale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Pêcheurs à Kogo</div>
                      <div className="text-3xl font-bold text-blue-700">200+</div>
                      <div className="text-xs">pêcheurs traditionnels</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces de poissons</div>
                      <div className="text-3xl font-bold text-blue-700">150+</div>
                      <div className="text-xs">dans les eaux côtières</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Température mer</div>
                      <div className="text-3xl font-bold text-blue-700">26°</div>
                      <div className="text-xs">Celsius moyenne annuelle</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Côtier</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit court mais intense vous fait découvrir les trésors de la côte atlantique équatoguinéenne. Vous commencez par Bata, capitale continentale animée, puis vous vous dirigez vers le nord le long de la côte pour explorer les plages sauvages et les villages de pêcheurs. Le cœur du voyage se situe à Kogo, village de pêcheurs traditionnel où vous vivrez une immersion complète dans la vie maritime locale. Le voyage inclut des sorties en mer, des découvertes culinaires, des rencontres humaines authentiques et des moments de détente sur des plages préservées.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Sorties en mer</div>
                            <div className="text-blue-700 font-bold">3 excursions</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits côte</div>
                            <div className="text-blue-700 font-bold">Bata 2 / Kogo 2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Repas poisson</div>
                            <div className="text-blue-700 font-bold">Tous les repas</div>
                          </div>
                          <div>
                            <div className="font-semibold">Rencontres</div>
                            <div className="text-blue-700 font-bold">Pêcheurs + communauté</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Côte Atlantique de Guinée Équatoriale</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,-2.0,11.0,2.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte côte atlantique Guinée Équatoriale"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/1.0/9.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-700">Les Joyaux de la Côte</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Bata' && 'Capitale • Marché • Départ'}
                          {region.name === 'Plage d\'Utonde' && 'Sable fin • Détente • Baignade'}
                          {region.name === 'Kogo' && 'Pêche • Traditions • Immersion'}
                          {region.name === 'Estuaire du Río Muni' && 'Mangroves • Biodiversité • Navigation'}
                          {region.name === 'Villages côtiers' && 'Authenticité • Rencontres • Culture'}
                          {region.name === 'Crique de Kogo' && 'Abri naturel • Pirogues • Calme'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à Bata</div>
                      <div className="text-xs opacity-80">Accueil, découverte capitale côtière</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Bata et plages</div>
                      <div className="text-xs opacity-80">Marché poisson, plage d'Utonde</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3</div>
                      <div className="text-sm">Transfert vers Kogo</div>
                      <div className="text-xs opacity-80">Route côtière, arrivée village pêcheurs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4</div>
                      <div className="text-sm">Immersion à Kogo</div>
                      <div className="text-xs opacity-80">Pêche, traditions, gastronomie</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Retour à Bata, vol international</div>
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
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À BATA</span>
                          <span className="text-sm text-gray-600">Accueil et première immersion côtière</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Bata, capitale continentale de la Guinée Équatoriale. Accueil par votre guide francophone spécialiste de la côte atlantique. Transfert à l'hôtel en bord de mer. Selon l'heure d'arrivée, première découverte de Bata : promenade le long de la corniche avec vue sur l'océan Atlantique, ambiance animée de la ville côtière. Visite du marché central de Bata, avec un focus sur les étals de poissons et fruits de mer, première immersion dans l'univers maritime local. Briefing détaillé sur le circuit, présentation des étapes et des activités de pêche. Dîner de bienvenue avec spécialités de poissons locaux. Nuit à l'hôtel à Bata.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Bata et plages */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BATA ET PLAGES SAUVAGES</span>
                          <span className="text-sm text-gray-600">Marché aux poissons et détente balnéaire</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée maritime urbaine</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la découverte de la vie maritime de Bata. Visite matinale du marché aux poissons de Bata, au moment le plus animé, lorsque les pêcheurs débarquent leurs prises nocturnes. Observation des différentes espèces de poissons, crustacés et céphalopodes. Rencontre avec des pêcheurs et mareyeurs, découverte des techniques de vente et de conservation. Déjeuner dans un restaurant local spécialisé en fruits de mer. Après-midi : transfert vers la plage d'Utonde, longue étendue de sable fin à quelques kilomètres de Bata. Détente, baignade dans l'océan Atlantique, promenade le long de la plage. Possibilité d'observer les pêcheurs locaux utilisant leurs filets depuis la plage. Retour à Bata en fin d'après-midi. Dîner libre pour explorer les restaurants de poisson de Bata. Nuit à Bata.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Transfert vers Kogo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">BATA → KOGO</span>
                          <span className="text-sm text-gray-600">Route côtière vers le village de pêcheurs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-700">Immersion dans le monde des pêcheurs</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Bata en 4x4 ou minibus pour le village de pêcheurs de Kogo (environ 2-3 heures de route le long de la côte). Trajet pittoresque avec arrêts pour admirer les paysages côtiers, les petites criques, et observer la vie dans les villages traversés. Arrivée à Kogo, installation dans l'hébergement simple mais propre, chez l'habitant ou en petit lodge familial. Première découverte du village : promenade le long du port de pêche, observation des pirogues colorées, rencontre avec les pêcheurs en train de préparer leurs filets. Déjeuner avec du poisson frais pêché le matin même. Après-midi : première sortie en mer (selon conditions météo) pour une initiation à la pêche côtière. Retour au village, participation (facultative) à la préparation du poisson pour le dîner. Dîner communautaire avec les pêcheurs et leurs familles. Nuit à Kogo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Immersion à Kogo */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">IMMERSION À KOGO</span>
                          <span className="text-sm text-gray-600">Journée complète avec les pêcheurs locaux</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-700">Journée de pêche et de traditions</h4>
                        <p className="text-justify mb-4">
                          Levé tôt pour accompagner les pêcheurs dans leur sortie matinale (optionnel, selon envie). Sinon, petit-déjeuner puis départ en mer pour une journée de pêche complète. Vous embarquez sur une pirogue ou un petit bateau de pêche avec des pêcheurs expérimentés. Apprentissage des techniques locales : pose de filets, pêche à la ligne, utilisation de casiers. Découverte des zones de pêche, des habitudes des différentes espèces. Déjeuner pique-nique sur une plage déserte ou à bord du bateau, avec du poisson grillé fraîchement pêché. Après-midi : continuation de la pêche ou exploration des alentours de Kogo en pirogue, visite des mangroves de l'estuaire du Río Muni, observation des oiseaux marins. Retour au village en fin d'après-midi. Participation à la vente ou à la préparation de la pêche du jour. Dîner d'adieu à Kogo, festif avec les familles de pêcheurs. Nuit à Kogo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE BATA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner à Kogo, émouvant au moment de quitter les familles qui vous ont accueilli. Transfert de retour vers Bata (environ 2-3 heures de route). Selon l'horaire de votre vol international, temps libre à Bata pour derniers achats de souvenirs (artisanat local, épices, café) ou détente à l'hôtel (chambre day-use si nécessaire). Déjeuner libre à Bata. Transfert à l'aéroport international de Bata pour votre vol de retour. Emportez avec vous des souvenirs vivants de cette immersion dans la vie des pêcheurs de la côte atlantique équatoguinéenne : les techniques apprises, les rires partagés, le goût du poisson frais grillé, et l'authenticité des rencontres humaines. Fin de nos services.
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
                      <span className="text-white text-2xl">🌊</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-700">Les Expériences de la Côte Atlantique</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit vous offre une immersion authentique dans la vie maritime de la Guinée Équatoriale. Des techniques de pêche ancestrales aux saveurs de l'océan, chaque expérience vous connecte profondément à la culture côtière et à ses habitants.
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
                              lat={exp.id === 'peche' ? 1.0 : 
                                   exp.id === 'navigation' ? 0.95 :
                                   exp.id === 'gastronomie' ? 1.12 :
                                   1.85} 
                              lng={exp.id === 'peche' ? 9.78 : 
                                   exp.id === 'navigation' ? 9.93 :
                                   exp.id === 'gastronomie' ? 9.98 :
                                   9.75} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'peche' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Art de la Pêche à Kogo</h5>
                            <p className="text-gray-700 mb-4">
                              À Kogo, la pêche n'est pas qu'une activité économique, c'est un art de vivre transmis de génération en génération. Les pêcheurs utilisent des techniques variées : filets maillants dérivants, filets fixes, lignes de traîne, casiers pour les crustacés. Chaque technique est adaptée aux espèces ciblées, aux saisons, aux marées. Les pêcheurs possèdent une connaissance approfondie de la mer, des courants, des habitudes des poissons. Participer à une sortie de pêche avec eux, c'est bien plus qu'apprendre à pêcher : c'est comprendre une relation intime avec l'océan, un savoir-faire qui allie tradition et adaptation aux conditions modernes.
                            </p>
                          </div>
                        )}

                        {exp.id === 'navigation' && (
                          <div className="bg-cyan-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Navigation Côtière Traditionnelle</h5>
                            <p className="text-gray-700 mb-4">
                              Explorer la côte atlantique en pirogue traditionnelle est une expérience unique. Ces embarcations, parfois équipées de petits moteurs, sont parfaitement adaptées à la navigation côtière et estuarienne. Elles permettent d'accéder à des criques isolées, de pénétrer dans les mangroves, de longer les plages sauvages. La navigation en pirogue offre une perspective privilégiée sur la vie côtière : observation des oiseaux marins, découverte des écosystèmes littoraux, approche discrète des activités de pêche. C'est aussi l'occasion de ressentir le lien ancestral entre les hommes et leurs embarcations, élément central de la culture maritime Ndowe.
                            </p>
                          </div>
                        )}

                        {exp.id === 'gastronomie' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Gastronomie Maritime de la Côte</h5>
                            <p className="text-gray-700 mb-4">
                              La cuisine côtière équatoguinéenne est une célébration des produits de la mer. Le poisson, fraîchement pêché, est préparé de multiples façons : grillé au charbon de bois, cuit en sauce (souvent à base de tomate, d'oignon, d'ail et de piment), fumé pour la conservation. Les fruits de mer (crevettes, crabes, huîtres) sont également très appréciés. Les accompagnements typiques sont le plantain (frit ou bouilli), le manioc, le riz. Partager un repas avec les pêcheurs, c'est découvrir une cuisine simple mais savoureuse, où la fraîcheur des produits fait toute la différence. C'est aussi un moment de convivialité et d'échange autour de la table.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-sky-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Côtière Ndowe</h5>
                            <p className="text-gray-700 mb-4">
                              Le peuple Ndowe, traditionnellement établi sur la côte continentale, a développé une culture profondément liée à la mer. Leur organisation sociale, leurs croyances, leurs arts et leur musique sont imprégnés de cette relation. Les Ndowe sont réputés pour leur musique polyphonique et leurs danses rythmées. Leur artisanat utilise des matériaux marins (coquillages, coraux, bois flotté). Leur calendrier et leurs activités sont rythmés par les marées et les saisons de pêche. Rencontrer la communauté Ndowe, c'est découvrir un mode de vie où la mer n'est pas seulement une ressource, mais une partie intégrante de l'identité culturelle.
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
                          src="https://images.unsplash.com/photo-1561144257-e32fa6d034c6?w=600" 
                          alt="Pêche traditionnelle" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Pêche en mer</h5>
                          <p className="text-sm text-gray-700">Sortie avec les pêcheurs de Kogo</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" 
                          alt="Plage sauvage" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages préservées</h5>
                          <p className="text-sm text-gray-700">Détente sur la côte atlantique</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" 
                          alt="Cuisine maritime" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Gastronomie locale</h5>
                          <p className="text-sm text-gray-700">Poissons et fruits de mer frais</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Authentiques sur la Côte</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                      <span className="text-blue-700 text-2xl">🏨</span>
                      <span className="h-px bg-blue-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose deux types d'hébergement : un hôtel confortable à Bata pour le début et la fin du séjour, et une immersion totale dans un hébergement simple mais authentique à Kogo, chez l'habitant ou en petit lodge familial, pour vivre au plus près de la communauté des pêcheurs.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bata')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bata' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BATA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('kogo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kogo' 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KOGO (2 NUITS)
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
                              <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 text-sm font-bold">
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
                              Hôtel 4* confortable situé en bord de mer à Bata. Chambres spacieuses avec climatisation, salle de bain privée, wifi. Restaurant servant une cuisine internationale et locale. Bar, piscine extérieure, salon. Service de blanchisserie. Cadre agréable pour débuter et terminer le voyage, avec tous les services nécessaires. Bien situé pour explorer Bata et ses environs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Kogo */}
                  {activeHotelTab === 'kogo' && (
                    <div className="space-y-16">
                      {/* Chez l'habitant ou lodge familial à Kogo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1550853024-10a4d8c5e43d?w=600" 
                              alt="Hébergement à Kogo" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Chez l'habitant à Kogo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Kogo, village de pêcheurs, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏠</span>
                                <span>Immersion locale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎣</span>
                                <span className="text-sm font-semibold">Au cœur du village</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">👨‍👩‍👧</span>
                                <span className="text-sm font-semibold">Accueil familial</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hébergement simple mais propre et authentique chez l'habitant ou dans un petit lodge familial à Kogo. Chambres basiques avec lit, moustiquaire, ventilateur. Salle de bain partagée (parfois avec eau froide seulement). Pas de wifi, connexion limitée avec le monde extérieur (fait partie de l'expérience d'immersion). Repas pris en commun avec la famille d'accueil, cuisine locale à base de produits de la mer. Accueil chaleureux, opportunité unique de partager le quotidien des pêcheurs et de leur famille. Confort rudimentaire mais expérience humaine inoubliable.
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
                  <span className="text-2xl">🌊</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Immersion</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-700">$2,199</span>
                    <span className="text-xl line-through text-gray-500">$1,999</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">PROMO</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Transferts, hébergements, tous les repas, excursions pêche, guide local
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
                    <option value="2026-01-15">15 Janvier 2026</option>
                    <option value="2026-02-10">10 Février 2026</option>
                    <option value="2026-03-05">5 Mars 2026</option>
                    <option value="2026-04-20">20 Avril 2026</option>
                    <option value="2026-05-15">15 Mai 2026</option>
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2026-07-05">5 Juillet 2026</option>
                    <option value="2026-08-20">20 Août 2026</option>
                    <option value="2026-09-15">15 Septembre 2026</option>
                    <option value="2026-10-10">10 Octobre 2026</option>
                    <option value="2026-11-05">5 Novembre 2026</option>
                    <option value="2026-12-20">20 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année (circuit toujours disponible)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>CIRCUIT AUTENTHIQUE :</strong> Immersion chez les pêcheurs
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum pour préserver l'authenticité</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur cette immersion ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts de la côte atlantique vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,-2.0,11.0,2.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte côte atlantique miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Côte Atlantique - 5 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit pêche et traditions à Kogo
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
                    <span>Transferts aéroport/hôtel</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts Bata-Kogo aller-retour</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide local francophone</span>
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
                    <span>Sorties de pêche avec équipement</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Navigation en pirogue</span>
                    <span className="font-bold text-blue-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rencontres avec les pêcheurs</span>
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
                    <span className="font-bold text-blue-700">12 ans</span>
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
                  <div className="flex justify-between items-center">
                    <span>Adaptabilité</span>
                    <span className="font-bold text-blue-700">Nécessaire (confort rudimentaire à Kogo)</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + certificat vaccinal fièvre jaune
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-700">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expérience incroyablement authentique. Vivre avec les pêcheurs de Kogo, partir en mer avec eux à l'aube, partager leurs repas... C'était bien plus qu'un voyage, c'était une véritable immersion humaine."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Jean-Luc M., voyageur 2025
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