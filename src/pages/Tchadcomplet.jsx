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
        <h4 className="font-semibold text-center text-lg">Itinéraire Tchad Complet</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,8.0,24.0,24.0&layer=mapnik&marker=12.134,15.055&marker=12.184,18.342&marker=10.783,19.433&marker=17.917,19.117&marker=18.700,21.417&marker=21.000,17.000"
          style={{ border: 0 }}
          allowFullScreen
          title="Grand Tour du Tchad Complet"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=6/13.0/16.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">N'Djaména (capitale)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mongo (Sahel)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Zakouma (savane)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Faya-Largeau (Sahara)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ennedi (plateaux)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Moun (lacs)</span>
        </div>
      </div>
    </div>
  );
};

export default function Tchadcomplet() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('ndjamena');
  const [activeRegionTab, setActiveRegionTab] = useState('sahel');
  const [activeExperienceTab, setActiveExperienceTab] = useState('culture');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏜️', title: 'Dunes du Sahara', desc: 'Traversée du Grand Erg et découverte des oasis' },
    { icon: '🦓', title: 'Safari à Zakouma', desc: 'Rencontre avec les éléphants et lions du Tchad' },
    { icon: '🗻', title: 'Massif de l\'Ennedi', desc: 'Formations rocheuses spectaculaires classées UNESCO' },
    { icon: '🏛️', title: 'Culture Sarh', desc: 'Découverte des traditions du sud et visite de Moun' },
    { icon: '🏞️', title: 'Lacs du Tchad', desc: 'Exploration du système lacustre et de sa biodiversité' },
    { icon: '👑', title: 'Royaumes du Tchad', desc: 'Histoire des sultanats du Ouaddaï et du Kanem' },
  ];

  const regions = [
    { name: 'N\'Djaména', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Capitale cosmopolite au confluent du Chari et du Logone' },
    { name: 'Sahel', color: 'bg-yellow-100', textColor: 'text-yellow-800', desc: 'Zone de transition entre savane et désert' },
    { name: 'Sahara', color: 'bg-orange-100', textColor: 'text-orange-800', desc: 'Grand Erg, dunes monumentales et oasis' },
    { name: 'Ennedi', color: 'bg-red-100', textColor: 'text-red-800', desc: 'Plateau gréseux classé au patrimoine UNESCO' },
    { name: 'Savane', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Parcs nationaux et réserves de faune' },
    { name: 'Sud', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Régions agricoles, lacs et culture Sara' },
  ];

  const experiences = [
    { 
      id: 'culture',
      name: 'Expériences Culturelles', 
      icon: '🏛️',
      desc: 'Immersion dans la richesse culturelle du Tchad, des sultanats du nord aux royaumes du sud',
      highlights: ['Sultanat du Ouaddaï', 'Culture Sara', 'Artisanat traditionnel', 'Marchés colorés']
    },
    { 
      id: 'nature',
      name: 'Aventures Nature', 
      icon: '🌿',
      desc: 'Découverte des écosystèmes extrêmes du Tchad, du désert absolu aux savanes luxuriantes',
      highlights: ['Safari à Zakouma', 'Dunes du Sahara', 'Plateaux de l\'Ennedi', 'Lacs du Sud']
    },
    { 
      id: 'histoire',
      name: 'Patrimoine Historique', 
      icon: '🏺',
      desc: 'Voyage à travers l\'histoire millénaire du Tchad, carrefour des civilisations africaines',
      highlights: ['Royaume du Kanem', 'Empire du Bornou', 'Art rupestre', 'Architecture soudanaise']
    },
    { 
      id: 'rencontres',
      name: 'Rencontres Humaines', 
      icon: '👥',
      desc: 'Échanges authentiques avec les peuples du Tchad, nomades du désert et agriculteurs du sud',
      highlights: ['Nomades Toubous', 'Peuls éleveurs', 'Agriculteurs Sara', 'Artisans spécialisés']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌍</span>
          <span>G | GRAND TOUR</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Tchad Complet : Désert, Savane et Culture</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              14 jours d'expédition à travers la diversité extraordinaire du Tchad, des sables du Sahara aux savanes du Sud
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">14</div>
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
            <span className="text-sm font-semibold">TOUR COMPLET DU TCHAD</span>
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
                <span className="bg-blue-800 text-white px-3 py-1 font-bold">GRAND TOUR</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">14 jours - N'Djaména à Moun</span>
                <button className="ml-auto border-2 border-blue-800 text-blue-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Voyage ultime à travers toute la diversité géographique et culturelle du Tchad</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU GRAND TOUR
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
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce Grand Tour de 14 jours est l'expérience ultime pour découvrir l'incroyable diversité du Tchad, pays aux multiples visages. Ce voyage complet vous emmène à travers tous les écosystèmes et toutes les cultures de cette nation fascinante : de la capitale animée de N'Djaména aux sables infinis du Sahara, des savanes peuplées d'éléphants de Zakouma aux formations rocheuses spectaculaires de l'Ennedi, et enfin aux régions fertiles du sud avec leurs traditions vivaces. Vous découvrirez l'histoire millénaire des royaumes sahéliens, rencontrerez les nomades toubous du désert et les agriculteurs sara du sud, et vivrez des aventures inoubliables dans certains des paysages les plus spectaculaires d'Afrique.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Moments Forts du Grand Tour</h3>
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

                {/* Section Expériences du Grand Tour */}
                <div className="border-l-4 border-blue-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Grand Tour</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Safari exclusif à Zakouma</strong> avec observation des éléphants et lions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Traversée du Sahara</strong> en 4x4 et nuit sous les étoiles du désert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Exploration de l'Ennedi</strong>, site UNESCO aux arches naturelles spectaculaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Rencontre avec les Toubous</strong>, nomades légendaires du Sahara</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite des sultanats historiques</strong> du Ouaddaï et du Kanem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Découverte de la culture Sara</strong> dans le sud avec ses traditions uniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Navigation sur le lac Tchad</strong> et exploration de ses îles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Dégustation de la cuisine tchadienne</strong> dans ses variétés régionales</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la diversité du Tchad */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Tchad Complet ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Tchad est souvent réduit à son image désertique, mais ce pays grand comme deux fois la France offre une diversité extraordinaire. Ce Grand Tour unique vous permet de découvrir l'ensemble des facettes du Tchad : géographique (désert, savane, zones humides), culturelle (plus de 200 ethnies), historique (royaumes millénaires) et naturelle (parcs nationaux exceptionnels). C'est l'opportunité unique de comprendre la complexité et la richesse de ce pays-carrefour de l'Afrique.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Diversité extrême</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Cultures multiples</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Histoire millénaire</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Nature préservée</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE TCHAD EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie</div>
                      <div className="text-3xl font-bold text-blue-800">1.28M</div>
                      <div className="text-xs">km² (5e d'Afrique)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Écarts d'altitude</div>
                      <div className="text-3xl font-bold text-blue-800">160 - 3,415</div>
                      <div className="text-xs">mètres</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Groupes ethniques</div>
                      <div className="text-3xl font-bold text-blue-800">200+</div>
                      <div className="text-xs">ethnies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Pluviométrie contrastée</div>
                      <div className="text-3xl font-bold text-blue-800">0 - 1,200</div>
                      <div className="text-xs">mm/an</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours à Travers les Régions</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce Grand Tour vous emmène à travers les six régions climatiques et culturelles du Tchad. Vous traverserez successivement le désert saharien, le Sahel semi-aride, la savane soudanienne, la zone soudano-guinéenne, et atteindrez enfin les régions tropicales du sud. Chaque région révèle des paysages, une faune, une flore et des cultures radicalement différentes, offrant une compréhension complète de la géographie complexe de ce vaste pays.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-blue-800 font-bold">3,500 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Régions traversées</div>
                            <div className="text-blue-800 font-bold">6</div>
                          </div>
                          <div>
                            <div className="font-semibold">Climats différents</div>
                            <div className="text-blue-800 font-bold">5</div>
                          </div>
                          <div>
                            <div className="font-semibold">Écosystèmes majeurs</div>
                            <div className="text-blue-800 font-bold">7</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Complète du Tchad</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,8.0,24.0,24.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte complète du Tchad"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=6/13.0/16.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-800">Les Régions du Tchad</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'N\'Djaména' && 'Capitale • Marchés • Fleuve Chari'}
                          {region.name === 'Sahel' && 'Nomades • Acacias • Zone de transition'}
                          {region.name === 'Sahara' && 'Dunes • Oasis • Nomades Toubous'}
                          {region.name === 'Ennedi' && 'UNESCO • Arches • Art rupestre'}
                          {region.name === 'Savane' && 'Éléphants • Lions • Parcs nationaux'}
                          {region.name === 'Sud' && 'Agriculture • Lacs • Culture Sara'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-800 to-teal-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-3</div>
                      <div className="text-sm">N'Djaména et Sahel</div>
                      <div className="text-xs opacity-80">Capitale, fleuve, marchés, départ vers le nord</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4-6</div>
                      <div className="text-sm">Sahara Central</div>
                      <div className="text-xs opacity-80">Dunes, oasis, nomades, nuit sous les étoiles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-9</div>
                      <div className="text-sm">Massif de l'Ennedi</div>
                      <div className="text-xs opacity-80">Arches, canyons, gueltas, art rupestre</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">10-11</div>
                      <div className="text-sm">Savane de Zakouma</div>
                      <div className="text-xs opacity-80">Safari, éléphants, lions, conservation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">12-13</div>
                      <div className="text-sm">Sud et Régions Lacustres</div>
                      <div className="text-xs opacity-80">Lacs, agriculture, culture Sara, Moun</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">14</div>
                      <div className="text-sm">Retour à N'Djaména</div>
                      <div className="text-xs opacity-80">Synthèse, souvenirs, départ</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Découverte de la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de N'Djaména, capitale située au confluent des fleuves Chari et Logone. Accueil par votre guide expert du Tchad et transfert à l'hôtel. Après-midi de découverte de la ville : visite de la Grande Mosquée, du marché central (l'un des plus animés d'Afrique), et promenade le long du fleuve Chari. Briefing détaillé sur le Grand Tour avec présentation des différentes étapes. Dîner de bienvenue dans un restaurant traditionnel avec dégustation de spécialités tchadiennes (couscous de mil, viande grillée, sauce gombo). Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - N'Djaména et préparation */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA APPROFONDIE</span>
                          <span className="text-sm text-gray-600">Culture et préparation du voyage</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Immersion dans la capitale</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte approfondie de N'Djaména. Visite du Musée National du Tchad pour comprendre l'histoire et la diversité culturelle du pays. Exploration du quartier artisanal et rencontre avec les artisans spécialisés dans le cuir, l'argent et les textiles. Déjeuner dans un restaurant typique. Après-midi : préparation détaillée du voyage avec vérification de l'équipement et dernier briefing. Visite optionnelle du marché aux chameaux en périphérie de la ville. Soirée libre pour les derniers achats. Dîner et nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers Mongo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA → MONGO</span>
                          <span className="text-sm text-gray-600">Première étape vers le Sahel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Entrée dans le Sahel</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en convoi 4x4 en direction de Mongo (environ 500 km). Traversée progressive de la savane sahélienne vers des paysages plus arides. Arrêt à Massaguet pour observer les techniques traditionnelles d'élevage. Pique-nique en route sous les acacias. Continuation vers Mongo, ancien carrefour des caravanes transsahariennes. Arrivée en fin d'après-midi et installation au campement. Première rencontre avec les communautés peules. Dîner autour du feu avec présentation des cultures sahéliennes. Nuit sous les étoiles du Sahel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Mongo vers Abéché */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONGO → ABÉCHÉ</span>
                          <span className="text-sm text-gray-600">Ancienne capitale du sultanat du Ouaddaï</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Plongée dans l'histoire</h4>
                        <p className="text-justify mb-4">
                          Route vers Abéché à travers des paysages de savane sèche (environ 400 km). Arrêt au marché nomade de Bitkine pour observer les échanges traditionnels. Arrivée à Abéché, ancienne capitale du puissant sultanat du Ouaddaï. Visite du palais du sultan (extérieur) et de la vieille ville aux maisons en banco. Découverte des anciens quartiers marchands qui témoignent du passé caravanier de la ville. Rencontre avec des historiens locaux pour une introduction à l'histoire des sultanats tchadiens. Installation à l'hôtel. Dîner avec spécialités de l'Est du Tchad.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Vol vers Faya-Largeau */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VOL VERS FAYA-LARGEAU</span>
                          <span className="text-sm text-gray-600">Entrée dans le Sahara tchadien</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Le Grand Erg</h4>
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport pour le vol charter vers Faya-Largeau (environ 1h30 de vol). Vue spectaculaire depuis les airs sur la transition entre Sahel et Sahara. Arrivée à Faya-Largeau, plus grande oasis du Sahara tchadien. Accueil par l'équipe toubous. Installation au campement désertique. Première découverte de l'oasis : palmeraies, système d'irrigation traditionnel. Rencontre avec les habitants toubous et initiation à leur culture nomade. Safari en 4x4 dans les dunes environnantes au coucher du soleil. Dîner traditionnel toubous et nuit sous les étoiles du désert.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Exploration du Sahara */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION SAHARIENNE</span>
                          <span className="text-sm text-gray-600">Dunes, ergs et vie nomade</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée complète dans le désert</h4>
                        <p className="text-justify mb-4">
                          Journée entière consacrée à l'exploration du Sahara tchadien. Ascension des plus hautes dunes pour un panorama à 360°. Visite d'un campement nomade toubous et participation aux activités quotidiennes : soins aux dromadaires, préparation du thé saharien, confection de tentes. Démonstration de conduite de dromadaires. Pique-nique à l'ombre d'un acacia isolé. Après-midi : traversée d'un erg (mer de dunes) en 4x4 avec initiation aux techniques de conduite en sable. Arrêt à un puits traditionnel pour observer les techniques ancestrales d'extraction d'eau. Retour au campement pour une soirée spéciale avec musique et contes toubous.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Faya-Largeau vers Ennedi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FAYA-LARGEAU → ENNEDI</span>
                          <span className="text-sm text-gray-600">Vers le massif classé UNESCO</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Traversée vers l'Ennedi</h4>
                        <p className="text-justify mb-4">
                          Longue journée de route à travers le désert vers le massif de l'Ennedi (environ 350 km). Paysages changeants : dunes, regs (désert de pierres), plateaux rocheux. Arrêt à des sites d'art rupestre préhistorique en chemin. Pique-nique dans un canyon isolé. Arrivée en fin de journée aux premières formations de l'Ennedi. Installation au campement au pied des falaises de grès. Première randonnée d'approche pour observer les formations rocheuses au coucher du soleil. Dîner et nuit au campement.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Exploration de l'Ennedi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MASSIF DE L'ENNEDI</span>
                          <span className="text-sm text-gray-600">Arches, canyons et gueltas</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée dans le site UNESCO</h4>
                        <p className="text-justify mb-4">
                          Journée complète d'exploration du massif de l'Ennedi. Randonnée jusqu'à l'Arche d'Aloba, monument naturel spectaculaire de 120 mètres de haut. Visite de la Guelta d'Archei, oasis permanente abritant des crocodiles du désert. Exploration des canyons et découverte de l'art rupestre millénaire (peintures et gravures). Rencontre avec les nomades Goranes qui fréquentent la région. Pique-nique au bord d'une guelta. Après-midi : continuation de l'exploration des formations géologiques exceptionnelles (tours de grès, cheminées de fée). Retour au campement pour le dîner et nuit.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Vol vers Zakouma */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VOL VERS ZAKOUMA</span>
                          <span className="text-sm text-gray-600">De retour vers la savane</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Changement radical de décor</h4>
                        <p className="text-justify mb-4">
                          Transfert à la piste d'atterrissage pour le vol charter vers Zakouma (environ 2h de vol). Vue aérienne spectaculaire sur la transition entre désert et savane. Arrivée au Parc National de Zakouma, l'un des plus grands succès de conservation en Afrique. Accueil par les rangers et transfert au camp de safari. Installation dans votre tente de safari. Premier safari en fin d'après-midi : observation des premiers éléphants, buffles et antilopes. Dîner au camp avec présentation des programmes de conservation. Nuit aux sons de la savane africaine.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Safari à Zakouma */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SAFARI À ZAKOUMA</span>
                          <span className="text-sm text-gray-600">Éléphants, lions et faune exceptionnelle</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée avec les géants de la savane</h4>
                        <p className="text-justify mb-4">
                          Journée complète de safari dans le Parc National de Zakouma. Safari matinal à la recherche des éléphants (plus de 550 individus). Observation des comportements sociaux des pachydermes. Pique-nique bush en pleine nature. Safari de l'après-midi consacré à la recherche des lions (population de 120+ individus). Observation d'autres espèces : girafes de Kordofan (sous-espèce rare), zèbres, buffles, antilopes. Rencontre avec les équipes de recherche et de conservation. Dîner spécial au camp avec partage des observations de la journée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Route vers le Sud */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ZAKOUMA → SARH</span>
                          <span className="text-sm text-gray-600">Vers les régions fertiles du sud</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Transition vers le Sud</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 vers Sarh, capitale du Moyen-Chari (environ 400 km). Traversée de paysages qui deviennent progressivement plus verts et plus fertiles. Arrêts dans des villages pour observer l'agriculture traditionnelle (coton, sorgho, arachides). Passage de la savane soudanienne à la zone soudano-guinéenne. Arrivée à Sarh, troisième ville du Tchad. Visite du Musée régional du Moyen-Chari pour découvrir la culture Sara, principale ethnie du sud. Rencontre avec des responsables associatifs pour comprendre les enjeux du développement rural. Installation à l'hôtel. Dîner avec spécialités du sud.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Exploration de Moun et région lacustre */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SARH → MOUN</span>
                          <span className="text-sm text-gray-600">Culture Sara et région lacustre</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Immersion dans la culture Sara</h4>
                        <p className="text-justify mb-4">
                          Route vers Moun à travers les paysages agricoles du sud (environ 150 km). Visite de villages traditionnels Sara avec leurs cases caractéristiques. Rencontre avec les agriculteurs et découverte des techniques culturales. Arrivée à Moun, village au bord du lac de retenue. Visite des projets de développement communautaire. Promenade en pirogue sur le lac pour observer la vie aquatique et les oiseaux. Rencontre avec les pêcheurs locaux. Démonstration de danses et musiques traditionnelles Sara. Participation à un atelier de cuisine traditionnelle. Installation chez l'habitant ou au campement. Dîner communautaire avec les villageois.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 13 - Retour vers N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(13)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          13
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MOUN → N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Retour à la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 13 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 13 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Dernière journée de voyage</h4>
                        <p className="text-justify mb-4">
                          Derniers moments à Moun avec les communautés locales. Départ pour N'Djaména (environ 500 km). Traversée des différentes régions climatiques dans le sens inverse. Arrêts techniques et pique-nique en route. Réflexion sur le voyage et partage des impressions. Arrivée à N'Djaména en fin d'après-midi. Transfert à l'hôtel. Temps libre pour se reposer et se rafraîchir. Dîner d'adieu dans un restaurant spécial avec remise des certificats de voyage et synthèse du Grand Tour. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 14 - Départ de N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(14)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          14
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE N'DJAMÉNA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 14 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 14 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers préparatifs et emballage des souvenirs. Option de dernière visite du marché artisanal pour les achats de souvenirs. Déjeuner libre. Transfert à l'aéroport international de N'Djaména pour votre vol de retour. Accompagnement jusqu'à l'enregistrement. Emportez avec vous des souvenirs inoubliables de ce voyage exceptionnel à travers toute la diversité du Tchad, une expérience unique qui vous aura fait découvrir l'extraordinaire richesse géographique, culturelle et humaine de ce pays fascinant, véritable microcosme de l'Afrique.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Les Expériences du Grand Tour</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce Grand Tour du Tchad vous offre une palette complète d'expériences uniques, couvrant tous les aspects de ce pays fascinant. De l'aventure extrême dans le désert aux moments d'échange culturel authentique, chaque jour apporte son lot de découvertes mémorables.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-blue-800 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-blue-800">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-blue-800">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-800 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'culture' ? 12.134 : 
                                   exp.id === 'nature' ? 10.783 :
                                   exp.id === 'histoire' ? 13.828 :
                                   11.000} 
                              lng={exp.id === 'culture' ? 15.055 : 
                                   exp.id === 'nature' ? 19.433 :
                                   exp.id === 'histoire' ? 20.832 :
                                   18.000} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'culture' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Richesse Culturelle du Tchad</h5>
                            <p className="text-gray-700 mb-4">
                              Le Tchad compte plus de 200 groupes ethniques, chacun avec ses traditions, sa langue et son mode de vie. Ce Grand Tour vous permet de rencontrer les principales ethnies : les Toubous nomades du désert, les Arabes et Peuls du Sahel, les Saras agriculteurs du sud. Vous découvrirez l'artisanat traditionnel (cuir, argent, vannerie), la musique et la danse, la cuisine régionale, et les rituels quotidiens. C'est une immersion complète dans la diversité culturelle tchadienne, des sultanats islamisés du nord aux sociétés traditionnelles du sud.
                            </p>
                          </div>
                        )}

                        {exp.id === 'nature' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Écosystèmes Extrêmes</h5>
                            <p className="text-gray-700 mb-4">
                              Le Tchad présente une diversité écologique exceptionnelle. Vous passerez du désert absolu du Sahara (0 mm de pluie par an) aux savanes arborées de Zakouma (900 mm), et enfin aux zones tropicales du sud (1 200 mm). Vous découvrirez la faune adaptée à ces conditions extrêmes : dromadaires du désert, éléphants et lions de la savane, crocodiles des gueltas, et une avifaune riche de plus de 500 espèces. Chaque écosystème révèle des stratégies de survie uniques et des paysages d'une beauté spectaculaire.
                            </p>
                          </div>
                        )}

                        {exp.id === 'histoire' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Une Histoire Millénaire</h5>
                            <p className="text-gray-700 mb-4">
                              Le Tchad est au carrefour des grandes civilisations africaines. Vous découvrirez l'histoire des royaumes sahéliens : le Kanem-Bornou (VIIIe-XIXe siècles), l'un des plus anciens et durables empires d'Afrique ; le sultanat du Ouaddaï, puissance régionale majeure ; et les nombreux royaumes plus petits. Vous verrez l'art rupestre de l'Ennedi, témoignage des premières civilisations sahariennes. Vous comprendrez l'histoire contemporaine, de la colonisation française à l'indépendance en 1960, jusqu'aux défis actuels.
                            </p>
                          </div>
                        )}

                        {exp.id === 'rencontres' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Rencontres Authentiques</h5>
                            <p className="text-gray-700 mb-4">
                              Au-delà des paysages, ce sont les rencontres humaines qui marquent ce voyage. Vous partagerez le thé avec des nomades toubous dans le désert, discuterez avec des éleveurs peuls dans le Sahel, travaillerez avec des agriculteurs sara dans le sud, et échangerez avec des artisans dans les villes. Ces rencontres, préparées avec soin et respect, vous permettront de comprendre les réalités de la vie au Tchad, les défis quotidiens, les espoirs et les traditions. C'est une expérience humaine profondément enrichissante.
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
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Rencontre avec les Toubous" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Thé avec les Toubous</h5>
                          <p className="text-sm text-gray-700">Cérémonie du thé dans le désert avec les nomades légendaires du Sahara</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600" 
                          alt="Safari à Zakouma" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Rencontre avec les éléphants</h5>
                          <p className="text-sm text-gray-700">Observation des plus grands troupeaux d'éléphants d'Afrique centrale</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Art rupestre Ennedi" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Art rupestre millénaire</h5>
                          <p className="text-sm text-gray-700">Découverte des peintures et gravures préhistoriques de l'Ennedi</p>
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU GRAND TOUR</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Une Diversité d'Hébergements à l'Image du Tchad</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                      <span className="text-blue-800 text-2xl">🏨</span>
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce Grand Tour vous propose une variété d'hébergements reflétant la diversité du Tchad : hôtels confortables en ville, campements de safari exclusifs, bivouacs dans le désert, et nuit chez l'habitant dans le sud. Chaque hébergement est soigneusement sélectionné pour son confort, son authenticité et son immersion dans l'environnement local.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('ndjamena')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ndjamena' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      N'DJAMÉNA (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('desert')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'desert' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      DÉSERT (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('savane')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'savane' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SAVANE (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('sud')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'sud' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SUD (4 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - N'Djaména */}
                  {activeHotelTab === 'ndjamena' && (
                    <div className="space-y-16">
                      {/* Hôtel Hilton N'Djaména */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Hilton N'Djaména" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 text-sm font-bold">
                                5* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Hilton N'Djaména</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenue du Président Mobutu, N'Djaména, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine olympique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">3 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Spa et fitness</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 5* de luxe situé au bord du fleuve Chari. Chambres spacieuses avec vue sur la ville ou le fleuve. Toutes les commodités pour un confort optimal. Restaurant gastronomique, bar panoramique, centre de remise en forme, spa. Service de conciergerie. Base parfaite pour le début et la fin du Grand Tour.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Désert */}
                  {activeHotelTab === 'desert' && (
                    <div className="space-y-16">
                      {/* Campement de Faya-Largeau */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                              alt="Campement de Faya-Largeau" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement de Faya-Largeau</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Oasis de Faya-Largeau, Sahara tchadien
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏜️</span>
                                <span>Au cœur de l'oasis</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Palmeraie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌟</span>
                                <span className="text-sm font-semibold">Ciel étoilé</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement traditionnel installé dans une palmeraie de l'oasis de Faya-Largeau. Tentes confortables avec lits et matelas épais. Sanitaires communs avec douches solaires. Restaurant sous tente servant une cuisine saharienne. Feu de camp chaque soir. Immersion totale dans l'environnement désertique. Expérience authentique de la vie dans le Sahara.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bivouac de l'Ennedi */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Bivouac de l'Ennedi" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac de l'Ennedi</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Massif de l'Ennedi, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🗻</span>
                                <span>Au pied des falaises</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏞️</span>
                                <span className="text-sm font-semibold">Site UNESCO</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌌</span>
                                <span className="text-sm font-semibold">Nuits étoilées</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Bivouac installé au cœur du massif de l'Ennedi, classé au patrimoine mondial de l'UNESCO. Tentes individuelles avec vue sur les formations rocheuses spectaculaires. Cuisine préparée sur feu de bois. Toilettes sèches écologiques. Expérience d'immersion totale dans un site naturel exceptionnel. Réveil avec les premières lueurs du soleil sur les falaises de grès.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Savane */}
                  {activeHotelTab === 'savane' && (
                    <div className="space-y-16">
                      {/* Campement de Tinga - Zakouma */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600" 
                              alt="Campement de Tinga" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement de Tinga - Zakouma</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Parc National de Zakouma, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🦓</span>
                                <span>Campement de safari</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Tentes luxueuses</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Écologique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement exclusif situé au cœur du Parc National de Zakouma. Tentes de safari spacieuses et confortables avec lit king-size, salle de bain privée avec douche chaude solaire. Restaurant en plein air servant une cuisine internationale et locale. Bar avec vue sur un point d'eau fréquenté par les animaux. Piscine naturelle. Campement entièrement écologique. Expérience safari authentique dans l'un des plus grands succès de conservation d'Afrique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Sud */}
                  {activeHotelTab === 'sud' && (
                    <div className="space-y-16">
                      {/* Hôtel de Sarh */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=600" 
                              alt="Hôtel de Sarh" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Le Chari - Sarh</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Sarh, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏨</span>
                                <span>Hôtel confortable</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Cuisine régionale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel confortable situé au cœur de Sarh, capitale du Moyen-Chari. Chambres simples mais propres avec salle de bain privée, climatisation et wifi. Restaurant servant une cuisine traditionnelle du sud du Tchad. Jardin tropical ombragé pour se détendre. Service attentionné. Emplacement idéal pour découvrir la ville et la région. Point de départ pour l'exploration de la culture Sara.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Chez l'habitant à Moun */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Chez l'habitant à Moun" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Chez l'Habitant - Moun</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Village de Moun, région du Lac Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span>Immersion familiale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏠</span>
                                <span className="text-sm font-semibold">Case traditionnelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍲</span>
                                <span className="text-sm font-semibold">Cuisine familiale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Nuit exceptionnelle chez l'habitant dans le village de Moun. Accueil chaleureux par une famille Sara. Hébergement dans une case traditionnelle ou dans une chambre spécialement aménagée. Partage des repas avec la famille. Participation aux activités quotidiennes. Échanges authentiques sur la vie au village. Expérience humaine unique permettant une immersion profonde dans la culture du sud du Tchad. Contribution directe au développement local.
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
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Grand Tour</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-blue-800">$4,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Tous les vols intérieurs, 4x4 avec chauffeur, guides spécialisés, hébergement complet, tous les repas, droits d'entrée parcs, activités culturelles
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-11-01">1 Novembre 2026</option>
                    <option value="2026-12-01">1 Décembre 2026</option>
                    <option value="2027-01-05">5 Janvier 2027</option>
                    <option value="2027-02-02">2 Février 2027</option>
                    <option value="2027-03-02">2 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs mensuels d'octobre à avril (meilleure période)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>GRAND TOUR EXCLUSIF :</strong> Voyage le plus complet jamais organisé au Tchad
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 4 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-800 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce Grand Tour ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts du Tchad vous accompagnent dans la préparation.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.0,8.0,24.0,24.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Tchad miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Grand Tour du Tchad - 14 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Voyage complet à travers les 6 régions du Tchad
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
                    <span>Tous les vols intérieurs</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4x4 avec chauffeur-guide</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les hébergements</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas et boissons</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Activités culturelles</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée parcs</span>
                    <span className="font-bold text-blue-800">✓</span>
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
                    <span className="font-bold text-blue-800">Bonne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-800">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-blue-800">Fièvre jaune + Paludisme</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-blue-800">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Certificat médical obligatoire + visa tchadien requis
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-800">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Ce Grand Tour du Tchad est l'un des voyages les plus complets et enrichissants que j'ai jamais faits. La diversité des paysages, des cultures et des expériences est tout simplement incroyable."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc D., voyageur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Tchad</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}