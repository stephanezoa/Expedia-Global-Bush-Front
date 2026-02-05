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
        <h4 className="font-semibold text-center text-lg">Itinéraire Parc National d'Iona</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.5,-17.5,13.5,-15.5&layer=mapnik&marker=-16.5,12.3&marker=-16.0,12.5"
          style={{ border: 0 }}
          allowFullScreen
          title="Parc National d'Iona - Angola"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-16.2/12.4" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Lubango</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Parc National d'Iona</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Côte Sauvage</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Observation Faune</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Namibe</span>
        </div>
      </div>
    </div>
  );
};

export default function Safariiona() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('lubango');
  const [activeExperienceTab, setActiveExperienceTab] = useState('safari');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🦁', title: 'Big Five', desc: 'Observation des grands mammifères africains' },
    { icon: '🐘', title: 'Éléphants d\'Afrique', desc: 'Rencontre avec les éléphants sauvages' },
    { icon: '🦒', title: 'Girafes Angolaises', desc: 'Découverte des girafes endémiques' },
    { icon: '🦓', title: 'Zèbres de Burchell', desc: 'Observation des troupeaux de zèbres' },
    { icon: '🦜', title: 'Avifaune Exceptionnelle', desc: 'Plus de 300 espèces d\'oiseaux' },
    { icon: '🌅', title: 'Paysages Sauvages', desc: 'Savanes, montagnes et rivages préservés' },
  ];

  const regions = [
    {
      name: 'Lubango',
      color: 'bg-red-100',
      textColor: 'text-red-800',
      desc: 'Ville de départ au cœur des montagnes du Huíla',
      features: ['Accueil', 'Briefing safari', 'Véhicules 4x4', 'Préparation expédition']
    },
    {
      name: 'Parc National d\'Iona',
      color: 'bg-green-100',
      textColor: 'text-green-800',
      desc: 'Plus grande réserve naturelle d\'Angola, paradis de la faune sauvage',
      features: ['Big Five', 'Savanes immenses', 'Rivières saisonnières', 'Montagnes du Serra Leba']
    },
    {
      name: 'Savane du Namibe',
      color: 'bg-amber-100',
      textColor: 'text-amber-800',
      desc: 'Transition entre désert et savane, habitat unique pour la faune',
      features: ['Éléphants', 'Girafes', 'Antilopes', 'Oiseaux migrateurs']
    },
    {
      name: 'Côte Sauvage',
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      desc: 'Littoral préservé où la faune rencontre l\'océan Atlantique',
      features: ['Plages désertes', 'Phoques', 'Oiseaux marins', 'Paysages spectaculaires']
    },
    {
      name: 'Vallée du Cunene',
      color: 'bg-rose-100',
      textColor: 'text-rose-800',
      desc: 'Rivière frontalière avec la Namibie, source de vie pour la faune',
      features: ['Crocodiles', 'Hippopotames', 'Oiseaux d\'eau', 'Paysages fluviaux']
    },
    {
      name: 'Namibe',
      color: 'bg-purple-100',
      textColor: 'text-purple-800',
      desc: 'Port historique, point d\'arrivée du safari',
      features: ['Départ/arrivée', 'Musée provincial', 'Marché artisanal', 'Cuisine de fruits de mer']
    },
  ];

  const experiences = [
    {
      id: 'safari',
      name: 'Safari Big Five',
      icon: '🦁',
      desc: 'Traque et observation des cinq grands mammifères africains',
      highlights: ['Lions', 'Éléphants', 'Léopards', 'Rhinocéros', 'Buffle'],
      details: 'Le Parc National d\'Iona abrite les Big Five, les cinq grands mammifères africains les plus emblématiques. Accompagné de trackers et guides spécialistes, vous partirez à la recherche du roi de la savane : le lion. Vous observerez les éléphants d\'Afrique dans leur habitat naturel, apprendrez à repérer les traces du léopard discret, et avec un peu de chance, apercevrez le rhinocéros noir, espèce menacée. Les troupeaux de buffles complètent ce tableau exceptionnel. Chaque safari est une aventure unique, avec des moments privilégiés au lever et au coucher du soleil, moments d\'activité maximale pour la faune.'
    },
    {
      id: 'elephants',
      name: 'Éléphants d\'Afrique',
      icon: '🐘',
      desc: 'Rencontre avec les éléphants sauvages de la savane angolaise',
      highlights: ['Troupeaux migrateurs', 'Comportement social', 'Écologie', 'Conservation'],
      details: 'Le Parc National d\'Iona est l\'un des derniers sanctuaires des éléphants d\'Afrique en Angola. Ces géants majestueux parcourent les savanes et les vallées à la recherche d\'eau et de nourriture. Vous observerez leurs comportements sociaux complexes, la protection des petits par la matriarche, et leurs interactions avec l\'environnement. Les guides vous expliqueront les enjeux de conservation de cette espèce menacée par le braconnage et la perte d\'habitat. Les éléphants jouent un rôle crucial dans l\'écosystème en créant des clairières et en dispersant les graines.'
    },
    {
      id: 'girafes',
      name: 'Girafes Angolaises',
      icon: '🦒',
      desc: 'Découverte des girafes endémiques de la sous-espèce angolaise',
      highlights: ['Girafe d\'Angola', 'Comportement', 'Alimentation', 'Photographie'],
      details: 'La girafe d\'Angola (Giraffa giraffa angolensis) est une sous-espèce emblématique du pays. Reconnaissable à son pelage clair et ses taches irrégulières, elle peuple les savanes du Parc National d\'Iona. Vous observerez ces géants gracieux se nourrir des feuilles des acacias, boire à la rivière, ou se déplacer en troupeaux. Leur long cou leur permet d\'atteindre les feuilles les plus hautes, évitant ainsi la compétition avec les autres herbivores. Les moments de rencontre avec les girafes sont particulièrement photogéniques, surtout au coucher du soleil.'
    },
    {
      id: 'oiseaux',
      name: 'Avifaune Exceptionnelle',
      icon: '🦜',
      desc: 'Observation des plus de 300 espèces d\'oiseaux du parc',
      highlights: ['Oiseaux d\'eau', 'Rapaces', 'Oiseaux migrateurs', 'Endémiques'],
      details: 'Le Parc National d\'Iona est un paradis pour les ornithologues avec plus de 300 espèces d\'oiseaux recensées. Des flamants roses aux aigles pêcheurs, en passant par les cigognes, les hérons et les perroquets, la diversité est exceptionnelle. La vallée du Cunene attire de nombreux oiseaux d\'eau, tandis que les savanes abritent des autruches, des outardes et des francolins. Les guides naturalistes vous aideront à identifier les espèces et à comprendre leurs rôles dans l\'écosystème. Apportez vos jumelles et votre appareil photo pour immortaliser ces moments.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de safari */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇦🇴</span>
          <span>ESCAPES | ANGOLA</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Safari au Parc National d'Iona</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🦁</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              7 jours de safari dans la plus grande réserve naturelle d'Angola
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">7</div>
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
            <span className="text-2xl">🐘</span>
            <span className="text-sm font-semibold">ANGOLA | SAFARI SAUVAGE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Lions en safari"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Lions de la savane angolaise</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Éléphants d'Afrique"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Éléphants sauvages du Parc d'Iona</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544945590773-47c28e9c4c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Girafes Angola"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Girafes endémiques d'Angola</p>
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
                <span className="bg-orange-600 text-white px-3 py-1 font-bold">SAFARI</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO9</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - Lubango à Namibe</span>
                <button className="ml-auto border-2 border-orange-600 text-orange-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour un safari authentique dans la plus grande réserve d'Angola</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU SAFARI
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
                {/* Galerie d'images descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Safari lions"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Observation des lions en pleine savane</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Éléphants safari"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Rencontre avec les éléphants sauvages</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce safari de 7 jours vous emmène au cœur du Parc National d'Iona, la plus grande réserve naturelle d'Angola et l'une des plus vastes d'Afrique australe. Situé dans la province du Namibe, ce parc protégé abrite une faune exceptionnelle incluant les Big Five (lion, éléphant, léopard, rhinocéros, buffle) ainsi que de nombreuses autres espèces emblématiques.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure débutera à Lubango, ville pittoresque nichée dans les montagnes du Huíla. En 4x4 spécialement équipés pour le safari, vous traverserez des paysages spectaculaires avant d'atteindre le parc. Pendant six jours complets, vous explorerez les savanes immenses, les vallées fluviales et les montagnes du Serra Leba, à la recherche des animaux sauvages dans leur habitat naturel. Accompagné de guides trackers spécialistes de la faune angolaise, vous vivrez des moments d'observation privilégiés au lever et au coucher du soleil.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                    alt="Safari Angola"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Parc National d'Iona : paradis de la faune sauvage africaine</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce safari est conçu pour les amateurs de nature, de photographie animalière et d'aventure authentique. Le Parc National d'Iona, longtemps inaccessible pendant la guerre civile, est aujourd'hui en pleine renaissance écologique. Votre voyage contribue directement aux efforts de conservation et au développement des communautés locales. Une expérience unique de safari responsable dans un écosystème préservé.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-orange-50 border-l-4 border-orange-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-600">Les Atouts de ce Safari</h3>
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

                  {/* Images supplémentaires */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1544945590773-47c28e9c4c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Girafes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Éléphants"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-orange-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Safari</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Safari Big Five"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Safari Big Five</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Éléphants sauvages"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Observation éléphants</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Safari en 4x4 ouvert</strong> au lever et coucher du soleil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Observation des Big Five</strong> dans leur habitat naturel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Guides trackers spécialistes</strong> de la faune angolaise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Photographie animalière</strong> avec conseils professionnels</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Observation des oiseaux</strong> (300+ espèces)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Visite de la vallée du Cunene</strong> et ses hippopotames</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Nuits en lodge safari</strong> au cœur de la nature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Conservation et écotourisme</strong> responsable</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Ligne de séparation */}
                <div className="border-t border-gray-300 my-6"></div>

                {/* Focus sur le Parc National d'Iona avec image */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3">
                      <img
                        src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Parc National d'Iona"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-semibold text-lg mb-2">Le Parc National d'Iona : Un Sanctuaire de la Faune</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Le Parc National d'Iona, créé en 1937, est la plus grande réserve naturelle d'Angola avec une superficie de 15 150 km². Situé dans la province du Namibe, il s'étend de l'océan Atlantique aux montagnes du Serra Leba. Longtemps affecté par la guerre civile, le parc est aujourd'hui en pleine renaissance écologique grâce à des programmes de réintroduction et de protection. Il abrite une faune exceptionnelle : lions, éléphants, girafes d'Angola, zèbres de Burchell, antilopes, et plus de 300 espèces d'oiseaux.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Plus grande réserve d'Angola</span>
                        <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Big Five présents</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">300+ espèces d'oiseaux</span>
                        <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Éléphants sauvages</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Girafes endémiques</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Lubango */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À LUBANGO</span>
                          <span className="text-sm text-gray-600">Accueil et préparation du safari</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport de Lubango (SDD). Accueil par votre guide francophone spécialiste de la faune angolaise. Transfert à votre lodge avec vue sur les montagnes du Huíla. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur le safari à venir : présentation du Parc National d'Iona, des règles de sécurité en milieu sauvage, du programme détaillé, et des techniques d'observation animale. Dîner avec spécialités locales. Nuit au lodge à Lubango.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing safari - Dîner
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Lubango"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers le Parc National d'Iona */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS LE PARC NATIONAL D'IONA</span>
                          <span className="text-sm text-gray-600">Paysages spectaculaires et premières observations</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Départ vers la nature sauvage</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Lubango en direction du Parc National d'Iona. Traversée des montagnes spectaculaires du Serra Leba avec ses virages en épingle à cheveu offrant des vues à couper le souffle. Arrêt photo au point de vue le plus impressionnant. Continuation vers la plaine du Namibe. Déjeuner pique-nique en route. Premières observations de faune : antilopes, autruches, oiseaux. Arrivée en fin d'après-midi au lodge situé aux portes du parc. Installation et temps libre. Safari au coucher du soleil dans la zone périphérique du parc. Dîner et nuit au lodge safari.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route montagneuse - Paysages spectaculaires - Premières observations faune - Safari coucher de soleil
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img
                                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Safari lions"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Premier jour complet de safari */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PREMIER JOUR COMPLET DE SAFARI</span>
                          <span className="text-sm text-gray-600">Exploration des savanes et recherche des Big Five</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée safari complète</h4>
                            <p className="text-justify mb-4">
                              Lever tôt pour le safari au lever du soleil, moment privilégié d'activité animale. Départ en 4x4 ouvert avec votre guide tracker. Exploration des savanes immenses du parc à la recherche des Big Five. Observation des éléphants en famille, des girafes se nourrissant des acacias, des zèbres et antilopes en troupeaux. Déjeuner pique-nique dans un endroit sécurisé au cœur du parc. Après-midi : continuation du safari avec recherche des prédateurs (lions, léopards, hyènes). Retour au lodge en fin d'après-midi. Temps libre pour se reposer. Dîner sous les étoiles. Veillée autour du feu avec partage d'histoires de safari.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Safari lever du soleil - Big Five - Éléphants et girafes - Safari après-midi - Dîner sous les étoiles
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img
                                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Éléphants safari"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Vallée du Cunene et oiseaux */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">VALLÉE DU CUNENE ET OBSERVATION DES OISEAUX</span>
                          <span className="text-sm text-gray-600">Rivière frontalière et avifaune exceptionnelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée ornithologique</h4>
                            <p className="text-justify mb-4">
                              Départ matinal vers la vallée du Cunene, rivière frontalière avec la Namibie. Cette zone humide attire une faune exceptionnelle. Observation des hippopotames et crocodiles dans la rivière. Déjeuner au bord de l'eau. Après-midi consacré à l'observation des oiseaux : plus de 300 espèces recensées dans le parc. Votre guide ornithologue vous aidera à identifier flamants roses, aigles pêcheurs, cigognes, hérons, et de nombreux autres oiseaux d'eau et de savane. Retour au lodge en fin d'après-midi. Dîner et nuit au lodge safari.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Vallée du Cunene - Hippopotames et crocodiles - Observation oiseaux - 300+ espèces
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img
                                src="https://images.unsplash.com/photo-1544945590773-47c28e9c4c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Girafes"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Cœur du parc et grands prédateurs */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CŒUR DU PARC ET GRANDS PRÉDATEURS</span>
                          <span className="text-sm text-gray-600">Recherche intensive des lions et léopards</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Traque des prédateurs</h4>
                            <p className="text-justify mb-4">
                              Journée intensive consacrée à la recherche des grands prédateurs. Départ très tôt pour maximiser les chances d'observation. Votre guide tracker utilisera toutes ses compétences pour repérer les traces de lions et léopards. Safari complet de la matinée avec pauses stratégiques aux points d'eau. Déjeuner pique-nique dans la brousse. Après-midi : continuation de la traque avec patience et persévérance. Observation également des hyènes, chacals, et autres carnivores. Retour au lodge au coucher du soleil. Dîner et présentation des photos de la journée.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Traque lions et léopards - Grands prédateurs - Safari intensif - Points d'eau
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img
                                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Lions safari"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Côte sauvage et retour vers Namibe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CÔTE SAUVAGE ET RETOUR VERS NAMIBE</span>
                          <span className="text-sm text-gray-600">Dernier safari et découverte du littoral</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Dernier safari et côte</h4>
                            <p className="text-justify mb-4">
                              Dernier safari matinal dans le parc pour les ultimes observations. Départ en milieu de matinée vers la côte atlantique. Découverte de la côte sauvage du Namibe où la savane rencontre l'océan. Observation des phoques et oiseaux marins. Déjeuner dans un restaurant de fruits de mer à Tômbwa. Continuation vers Namibe. Arrivée en fin d'après-midi. Installation à l'hôtel. Dîner d'adieu avec spécialités angolaises. Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Dernier safari - Côte sauvage - Phoques et oiseaux marins - Route vers Namibe
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img
                                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Côte sauvage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ de Namibe */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE NAMIBE</span>
                          <span className="text-sm text-gray-600">Fin du safari, transfert à l'aéroport</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol, matinée libre pour les derniers achats de souvenirs ou visite optionnelle du musée provincial de Namibe (histoire naturelle et faune locale). Déjeuner libre. En fonction de l'horaire de votre vol, transfert à l'aéroport de Namibe (MSZ). Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de ce safari exceptionnel : les Big Five dans leur habitat naturel, les paysages sauvages du plus grand parc d'Angola, et l'expérience unique d'un safari authentique en Afrique australe.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Petit-déjeuner - Temps libre / visite optionnelle - Transfert aéroport - Départ
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Aéroport Namibe"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
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
                      <span className="text-white text-2xl">🦁</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-orange-600">Les Expériences de Safari</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce safari au Parc National d'Iona est une immersion totale dans la faune sauvage africaine. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cet écosystème exceptionnel, de l'observation des grands mammifères à l'exploration des habitats variés.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Lions safari"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Éléphants"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1544945590773-47c28e9c4c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Girafes"
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
                              <h5 className="text-sm font-semibold mb-3 text-orange-600">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-orange-600 mt-1">•</span>
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
                                  exp.id === 'safari'
                                    ? 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'elephants'
                                    ? 'https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'girafes'
                                    ? 'https://images.unsplash.com/photo-1544945590773-47c28e9c4c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                }
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap
                              lat={exp.id === 'safari' ? -16.5 :
                                exp.id === 'elephants' ? -16.3 :
                                exp.id === 'girafes' ? -16.2 :
                                -16.4}
                              lng={exp.id === 'safari' ? 12.3 :
                                exp.id === 'elephants' ? 12.5 :
                                exp.id === 'girafes' ? 12.4 :
                                12.6}
                              height="200px"
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hôtels */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU SAFARI</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Lodges Safari et Hôtels Confortables</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-orange-600 w-16 md:w-32"></span>
                      <span className="text-orange-600 text-2xl">🦁</span>
                      <span className="h-px bg-orange-600 w-16 md:w-32"></span>
                    </div>

                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Lubango lodge"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Lodge safari"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Namibe hôtel"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce safari alterne entre hébergements confortables en ville et lodges safari au cœur de la nature. À Lubango et Namibe, vous séjournerez dans des hôtels confortables avec toutes les commodités. Pendant les nuits dans le parc, vous découvrirez l'expérience unique des lodges safari, construits dans le respect de l'environnement et offrant une immersion totale dans la nature sauvage, avec le chant des animaux comme berceuse.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button
                      onClick={() => setActiveHotelTab('lubango')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lubango'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUBANGO (1 NUIT)
                    </button>
                    <button
                      onClick={() => setActiveHotelTab('safari')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'safari'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LODGE SAFARI (4 NUITS)
                    </button>
                    <button
                      onClick={() => setActiveHotelTab('namibe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'namibe'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      NAMIBE (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Lubango */}
                  {activeHotelTab === 'lubango' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600"
                                alt="Hotel Lubango"
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Tala Hady</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Lubango, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏔️</span>
                                <span>Vue sur les montagnes</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Tala Hady est un établissement confortable situé dans le centre de Lubango, avec une vue spectaculaire sur les montagnes environnantes. Les chambres sont spacieuses, climatisées et équipées de lits confortables, salle de bain privée, et wifi. Le restaurant panoramique offre une cuisine locale et internationale. Idéal pour la nuit avant le départ du safari.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lodge Safari */}
                  {activeHotelTab === 'safari' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img
                              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600"
                              alt="Lodge Safari Iona"
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Iona Safari Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Parc National d'Iona, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🦁</span>
                                <span>En pleine nature sauvage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏡</span>
                                <span className="text-sm font-semibold">Bungalows sur pilotis</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Terrasse avec vue safari</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Écologique et durable</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Iona Safari Lodge est un hébergement unique situé au cœur du parc, offrant une immersion totale dans la nature sauvage. Les bungalows sur pilotis sont construits avec des matériaux locaux et offrent confort et sécurité. Chaque bungalow dispose d'une terrasse avec vue sur la savane, lit king size, salle de bain privée, et moustiquaire. Le lodge fonctionne à l'énergie solaire et respecte les principes d'écotourisme. La salle à manger en plein air permet de dîner au son des animaux nocturnes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Namibe */}
                  {activeHotelTab === 'namibe' && (
                    <div className="space-y-16">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img
                              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600"
                              alt="Hotel Namibe"
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Miramar</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Namibe, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Vue sur l'océan Atlantique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar est un établissement confortable situé face à l'océan Atlantique. Les chambres sont climatisées et équipées de lits confortables, de salle de bain privée, et de wifi. Le restaurant de l'hôtel est réputé pour sa cuisine de fruits de mer frais. La terrasse offre une belle vue sur la baie de Namibe. Idéal pour la dernière nuit après le safari.
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
                  <span className="text-2xl">🦁</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Safari</h3>
                </div>

                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Safari Iona"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Big Five du Parc National d'Iona</p>
                  </div>
                </div>

                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-orange-600">$2,599</span>
                    <span className="text-xl line-through text-gray-500">$2,799</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Safari complet</div>
                  <div className="mt-2 text-xs text-orange-600 bg-orange-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, 4x4 safari, guide tracker, hébergements, tous repas, entrées parc
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
                    <option value="2026-05-10">10 Mai 2026</option>
                    <option value="2026-06-07">7 Juin 2026</option>
                    <option value="2026-07-05">5 Juillet 2026</option>
                    <option value="2026-08-02">2 Août 2026</option>
                    <option value="2026-08-30">30 Août 2026</option>
                    <option value="2026-09-27">27 Septembre 2026</option>
                    <option value="2026-10-25">25 Octobre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à octobre (saison sèche optimale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>SAFARI EXCLUSIF</strong> limité à 6 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide tracker spécialiste des Big Five</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur le safari ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts safaris vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.5,-17.5,13.5,-15.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Parc National d'Iona miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Parc National d'Iona - 7 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Lubango → Parc d'Iona → Côte Sauvage → Namibe
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
                    <span>Transferts aéroport et tous trajets</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide tracker spécialiste francophone</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 nuits (hôtel, lodge safari)</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4x4 safari équipé et carburant</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entrées parc national</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Safari lions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du safari</span>
                    <span className="font-bold text-orange-600">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-orange-600">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs mai à octobre</span>
                    <span className="font-bold text-orange-600">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide tracker spécialisé</span>
                    <span className="font-bold text-orange-600">Big Five</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-orange-600">6 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-orange-200 p-4 mt-6 shadow-lg bg-orange-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Voyageur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Témoignage Safari</h4>
                    <p className="text-xs text-gray-600">Marie D., photographe animalier 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un safari exceptionnel dans un parc encore préservé du tourisme de masse. Les paysages sont grandioses, la faune abondante et variée. Nous avons observé les Big Five en seulement 4 jours ! Les guides trackers sont d'une compétence remarquable, capables de repérer les animaux à des kilomètres. Le lodge safari offre un confort surprenant au cœur de la nature sauvage. Une expérience authentique que je recommande aux amateurs de nature et de photographie animalière."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-orange-600">Galerie Safari</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Lions"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Éléphants"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1544945590773-47c28e9c4c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Girafes"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Côte sauvage"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-orange-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}