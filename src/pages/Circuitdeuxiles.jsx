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
        <h4 className="font-semibold text-center text-lg">Itinéraire Circuit des Deux Îles</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,7.5,1.7&layer=mapnik&marker=0.34,6.73&marker=0.28,6.61&marker=1.64,7.42"
          style={{ border: 0 }}
          allowFullScreen
          title="Circuit des Deux Îles"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/1.0/7.0" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Praia das Conchas</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Cascades de São Nicolau</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Roca Agostinho Neto</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Príncipe (Santo António)</span>
        </div>
      </div>
    </div>
  );
};

export default function Circuitdeuxiles() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('decouverte');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏝️', title: 'Deux Îles Mythiques', desc: 'Exploration complète de São Tomé et Príncipe' },
    { icon: '🏖️', title: 'Plages Paradisiaques', desc: 'Découverte des plus belles plages des deux îles' },
    { icon: '🌋', title: 'Roca Agostinho Neto', desc: 'Visite de l\'ancienne plus grande plantation de cacao' },
    { icon: '🌄', title: 'Cascades Spectaculaires', desc: 'Découverte des plus belles chutes d\'eau' },
    { icon: '⛵', title: 'Navigation en Mer', desc: 'Transfert en bateau entre les îles' },
    { icon: '🌿', title: 'Forêt Tropicale', desc: 'Exploration de la biodiversité unique' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Capitale historique et point de départ du circuit',
      features: ['Centre historique', 'Marché central', 'Cathédrale', 'Musée national']
    },
    { 
      name: 'Praia das Conchas', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Plage de sable noir et cocotiers au nord de l\'île',
      features: ['Plage de sable noir', 'Cocoteraie', 'Piscine naturelle', 'Restaurant local']
    },
    { 
      name: 'Cascades de São Nicolau', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Magnifiques chutes d\'eau au cœur de la forêt tropicale',
      features: ['Randonnée facile', 'Baignade possible', 'Forêt primaire', 'Vues panoramiques']
    },
    { 
      name: 'Roca Agostinho Neto', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Ancienne plantation coloniale et architecture historique',
      features: ['Plantation historique', 'Architecture coloniale', 'Culture du cacao', 'Histoire locale']
    },
    { 
      name: 'Príncipe (Santo António)', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Île préservée classée Réserve de Biosphère UNESCO',
      features: ['Ville coloniale', 'Réserve UNESCO', 'Plages désertes', 'Biodiversité unique']
    },
    { 
      name: 'Praia Banana', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Plage emblématique de Príncipe, l\'une des plus belles du monde',
      features: ['Plage iconique', 'Formations rocheuses', 'Eau turquoise', 'Isolement préservé']
    },
  ];

  const experiences = [
    { 
      id: 'decouverte',
      name: 'Découverte Culturelle', 
      icon: '🏛️',
      desc: 'Immersion dans l\'histoire et la culture des deux îles',
      highlights: ['Architecture coloniale', 'Histoire du cacao', 'Traditions locales', 'Artisanat'],
      details: 'Ce circuit vous plonge au cœur de l\'histoire fascinante de São Tomé-et-Príncipe. Découvrez l\'architecture coloniale préservée, visitez les anciennes plantations de cacao, rencontrez les artisans locaux et apprenez les traditions uniques de ces îles au passé riche.'
    },
    { 
      id: 'nature',
      name: 'Nature Préservée', 
      icon: '🌿',
      desc: 'Exploration des écosystèmes uniques classés par l\'UNESCO',
      highlights: ['Forêt primaire', 'Plages désertes', 'Faune endémique', 'Réserve UNESCO'],
      details: 'São Tomé-et-Príncipe possède une biodiversité exceptionnelle avec un taux d\'endémisme parmi les plus élevés au monde. Explorez la forêt tropicale préservée, découvrez des espèces uniques et profitez des plages paradisiaques de l\'île de Príncipe, classée Réserve de Biosphère par l\'UNESCO.'
    },
    { 
      id: 'plages',
      name: 'Plages Paradisiaques', 
      icon: '🏖️',
      desc: 'Découverte des plus belles plages des deux îles',
      highlights: ['Sable noir et doré', 'Eaux turquoise', 'Cocoteraies', 'Isolation préservée'],
      details: 'Des plages de sable noir de São Tomé aux plages de sable doré de Príncipe, découvrez les plus beaux joyaux côtiers de l\'archipel. Chaque plage offre une atmosphère unique, des eaux cristallines parfaites pour la baignade et des paysages à couper le souffle.'
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie Locale', 
      icon: '🍽️',
      desc: 'Dégustation des spécialités culinaires santoméennes',
      highlights: ['Cacao local', 'Fruits tropicaux', 'Poissons frais', 'Plats traditionnels'],
      details: 'Découvrez une cuisine riche en saveurs, mariant influences africaines, portugaises et créoles. Dégustez le chocolat produit localement, les fruits tropicaux frais, les poissons grillés et les plats traditionnels préparés avec des recettes transmises de génération en génération.'
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
          <span className="text-xl">🏝️</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Circuit des Deux Îles</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              10 jours de découverte complète des deux îles de l'archipel
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
            <span className="text-2xl">🇸🇹</span>
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | GRAND TOUR</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">GRAND TOUR</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP5</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours - São Tomé à Santo António</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour voyageurs curieux, condition physique normale requise</span>
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
                  Ce circuit de 10 jours est le voyage ultime pour découvrir l'ensemble de l'archipel de São Tomé-et-Príncipe. Conçu pour les voyageurs curieux souhaitant explorer les deux îles, ce Grand Tour vous emmène des plages de sable noir de São Tomé aux plages paradisiaques de Príncipe, en passant par les plantations historiques, les cascades spectaculaires et les villages authentiques.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Vous débuterez votre voyage par la découverte de São Tomé, la capitale historique, avant de partir explorer les côtes nord avec ses plages sauvages. La visite de la Roca Agostinho Neto, ancienne plantation coloniale, vous plongera dans l'histoire fascinante de ces îles. Puis, vous embarquerez pour Príncipe, île préservée classée Réserve de Biosphère par l'UNESCO, où vous découvrirez des paysages encore intacts et une biodiversité exceptionnelle.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit allie culture, nature et détente, avec un rythme adapté pour profiter pleinement de chaque lieu. Les transferts entre les îles se font en avion ou en bateau (selon option choisie), offrant des perspectives uniques sur l'archipel. Un voyage complet pour découvrir toute la richesse de São Tomé-et-Príncipe.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Incontournables du Voyage</h3>
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
                        <span><strong>Exploration des deux îles</strong>, São Tomé et Príncipe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Visite de la Roca Agostinho Neto</strong>, plantation historique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Découverte des cascades de São Nicolau</strong>, au cœur de la forêt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Plages de sable noir et doré</strong>, les plus belles de l'archipel</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Navigation entre les îles</strong>, vue aérienne ou maritime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Dégustation de cacao local</strong>, de la fève à la tablette</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontres avec les artisans</strong>, découverte des traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Observation de la biodiversité</strong>, dans une Réserve UNESCO</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le circuit */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Circuit des Deux Îles</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Ce circuit complet vous permet de découvrir l'essence même de São Tomé-et-Príncipe. Des paysages volcaniques de São Tomé aux plages paradisiaques de Príncipe, en passant par l'histoire coloniale et les traditions locales. L'île de Príncipe, classée Réserve de Biosphère par l'UNESCO, offre une nature préservée et des écosystèmes uniques. La meilleure période pour ce circuit est toute l'année, avec une préférence pour la saison sèche (juin à septembre).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau facile</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Culture et histoire</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Plages et détente</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Gastronomie locale</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Nature préservée</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE CIRCUIT EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Durée totale</div>
                      <div className="text-3xl font-bold text-green-700">10</div>
                      <div className="text-xs">jours de voyage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Îles visitées</div>
                      <div className="text-3xl font-bold text-green-700">2</div>
                      <div className="text-xs">São Tomé et Príncipe</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits en hôtel</div>
                      <div className="text-3xl font-bold text-green-700">9</div>
                      <div className="text-xs">hébergements confortables</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plages découvertes</div>
                      <div className="text-3xl font-bold text-green-700">8+</div>
                      <div className="text-xs">plages paradisiaques</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours du Grand Tour</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à la découverte complète des deux îles. Vous commencerez par São Tomé, la capitale historique, avant d'explorer les côtes nord avec ses plages de sable noir. La visite des plantations et cascades vous plongera dans l'histoire et la nature de l'île. Puis vous rejoindrez Príncipe par avion ou bateau pour découvrir cette île préservée, ses villages authentiques et ses plages de rêve. Un parcours équilibré entre culture, nature et détente.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Transfert inter-îles</div>
                            <div className="text-green-700 font-bold">Avion ou bateau</div>
                          </div>
                          <div>
                            <div className="font-semibold">Randonnées incluses</div>
                            <div className="text-green-700 font-bold">3 (faciles)</div>
                          </div>
                          <div>
                            <div className="font-semibold">Visites culturelles</div>
                            <div className="text-green-700 font-bold">5+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Plages accessibles</div>
                            <div className="text-green-700 font-bold">8+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Circuit</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,7.5,1.7&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Circuit des Deux Îles"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=9/1.0/7.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Étapes du Circuit</h3>
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
                      <div className="text-4xl font-bold mb-2">1-3</div>
                      <div className="text-sm">Découverte de São Tomé</div>
                      <div className="text-xs opacity-80">Capitale, plages nord, cascades</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4-6</div>
                      <div className="text-sm">Intérieur et plantations</div>
                      <div className="text-xs opacity-80">Roca Agostinho Neto, forêt, cacao</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-10</div>
                      <div className="text-sm">Île de Príncipe</div>
                      <div className="text-xs opacity-80">Santo António, plages, nature préservée</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau facile à modéré (2/5)</strong> : Ce circuit est accessible à toute personne en bonne condition physique générale. Les randonnées sont courtes (maximum 3h) et peu difficiles. Les transferts se font en véhicule confortable. Aucune compétence technique particulière n'est requise. Convient aux voyageurs de tout âge (à partir de 10 ans).
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Condition physique normale suffisante</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Randonnées faciles (max 3h)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum : 10 ans (accompagné)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Aucun certificat médical requis</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures de marche confortables</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos jour (20-30L)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩴</span>
                          <span>Sandales pour la plage</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🌊</span>
                          <span>Maillot de bain et serviette</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire et anti-moustiques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste légère pour le soir</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📸</span>
                          <span>Appareil photo et chargeur</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💊</span>
                          <span>Petite pharmacie personnelle</span>
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
                        <h4 className="font-semibold">Découverte complète de l'archipel</h4>
                        <p className="text-sm text-gray-700">
                          Seul circuit qui explore en profondeur les deux îles, de São Tomé à Príncipe.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Équilibre parfait culture/nature/détente</h4>
                        <p className="text-sm text-gray-700">
                          Un programme équilibré qui allie visites culturelles, découverte naturelle et temps libre sur les plages.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à Príncipe, île préservée</h4>
                        <p className="text-sm text-gray-700">
                          Découverte de l'île de Príncipe, classée Réserve de Biosphère par l'UNESCO, encore peu touristique.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide francophone spécialiste des îles</h4>
                        <p className="text-sm text-gray-700">
                          Accompagnement par un guide local francophone qui partagera avec vous tous les secrets des îles.
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
                  {/* Jour 1 - Arrivée à São Tomé */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À SÃO TOMÉ</span>
                          <span className="text-sm text-gray-600">Accueil et découverte de la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide francophone et transfert à votre hôtel en centre-ville. Installation et temps libre pour vous reposer. En fin d'après-midi, première découverte de la capitale : visite du centre historique avec ses bâtiments coloniaux, la cathédrale Notre-Dame-de-la-Grâce et le palais présidentiel. Présentation du circuit et des activités à venir. Dîner de bienvenue dans un restaurant typique avec spécialités locales. Nuit à l'hôtel à São Tomé.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Plages du Nord */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PLAGES DU NORD</span>
                          <span className="text-sm text-gray-600">Praia das Conchas et plages de sable noir</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée balnéaire</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en direction du nord de l'île. Arrêt à la plantation de cacao de Monte Café pour une première immersion dans l'histoire du cacao santoméen. Continuation vers Praia das Conchas, l'une des plus belles plages de sable noir de l'île, entourée de cocotiers. Temps libre pour la baignade, le farniente ou une promenade le long de la plage. Déjeuner pique-nique ou dans un restaurant local selon option. Dans l'après-midi, visite d'autres plages moins fréquentées de la côte nord. Retour à São Tomé en fin de journée. Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite plantation de cacao, plage de sable noir, baignade
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Cascades de São Nicolau */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">CASCADES DE SÃO NICOLAU</span>
                          <span className="text-sm text-gray-600">Randonnée dans la forêt tropicale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée nature</h4>
                        <p className="text-justify mb-4">
                          Direction le centre de l'île pour une journée de découverte de la forêt tropicale. Randonnée facile (environ 2h aller-retour) vers les cascades de São Nicolau, au cœur de la forêt primaire. Découverte de la biodiversité unique de São Tomé avec votre guide. Baignade possible au pied des cascades dans des bassins naturels. Déjeuner pique-nique au bord de l'eau. Dans l'après-midi, visite d'un village traditionnel et rencontre avec les habitants. Retour à São Tomé en fin d'après-midi. Dîner dans un restaurant local. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée facile (2h), cascades, baignade naturelle, village traditionnel
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Roca Agostinho Neto */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ROCA AGOSTINHO NETO</span>
                          <span className="text-sm text-gray-600">Histoire coloniale et culture du cacao</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée historique</h4>
                        <p className="text-justify mb-4">
                          Visite de la Roca Agostinho Neto, ancienne plus grande plantation de cacao de l'île, aujourd'hui classée monument historique. Découverte de l'architecture coloniale préservée et immersion dans l'histoire complexe des plantations. Visite des installations de production et dégustation de cacao local. Déjeuner dans la plantation. Dans l'après-midi, continuation vers d'autres plantations plus petites pour comprendre l'évolution de la culture du cacao. Retour à São Tomé en fin de journée. Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite historique, architecture coloniale, dégustation cacao
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Sud de l'île */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">SUD DE L'ÎLE</span>
                          <span className="text-sm text-gray-600">Plages isolées et villages de pêcheurs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée côtière</h4>
                        <p className="text-justify mb-4">
                          Exploration du sud de São Tomé, région plus sauvage et moins touristique. Visite de villages de pêcheurs traditionnels et observation des techniques de pêche locales. Découverte de plages isolées accessibles seulement par des pistes. Déjeuner de poisson frais dans un restaurant de bord de mer. Dans l'après-midi, possibilité de snorkeling dans des spots préservés (matériel fourni). Retour à São Tomé en fin d'après-midi. Dîner d'adieu à São Tomé avec spectacle de danse traditionnelle. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Villages de pêcheurs, plages isolées, snorkeling, spectacle traditionnel
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Transfert vers Príncipe */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">TRANSFERT VERS PRÍNCIPE</span>
                          <span className="text-sm text-gray-600">Vol ou bateau vers l'île préservée</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Changement d'île</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal à l'aéroport de São Tomé pour le vol vers Príncipe (environ 30 minutes) ou départ en bateau selon option choisie. Arrivée à l'aéroport de Príncipe ou au port de Santo António. Accueil et transfert à votre hébergement. Installation et premier contact avec l'île préservée. Déjeuner dans un restaurant local. Après-midi de détente sur la plage la plus proche ou exploration libre de Santo António, charmante petite ville coloniale. Dîner et nuit à l'hébergement à Príncipe.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Transfert inter-îles, première découverte de Príncipe
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Découverte de Príncipe */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">DÉCOUVERTE DE PRÍNCIPE</span>
                          <span className="text-sm text-gray-600">Santo António et environs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'exploration</h4>
                        <p className="text-justify mb-4">
                          Visite guidée de Santo António, capitale de l'île de Príncipe. Découverte de l'architecture coloniale, du marché local et des petits artisans. Visite du musée local pour comprendre l'histoire spécifique de cette île. Déjeuner typique. Dans l'après-midi, excursion vers les premières plages de l'île, dont Praia Salgada. Rencontre avec les habitants pour échanger sur leur mode de vie préservé. Retour à l'hébergement en fin d'après-midi. Dîner avec produits locaux. Nuit à Príncipe.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite culturelle, marché local, premières plages de Príncipe
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Praia Banana et plages sud */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">PRAIA BANANA ET PLAGES SUD</span>
                          <span className="text-sm text-gray-600">Les plus belles plages de l'archipel</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée balnéaire à Príncipe</h4>
                        <p className="text-justify mb-4">
                          Journée dédiée à la découverte des plus belles plages de Príncipe. Visite de Praia Banana, plage emblématique mondialement connue pour ses formations rocheuses et son sable doré. Temps libre pour la baignade, le snorkeling ou simplement se détendre. Déjeuner pique-nique sur la plage. Dans l'après-midi, exploration d'autres plages plus secrètes du sud de l'île, accessibles par des sentiers ou en bateau selon les conditions. Retour à l'hébergement en fin de journée. Dîner et nuit à Príncipe.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Plages paradisiaques, snorkeling, détente
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Forêt et biodiversité */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT ET BIODIVERSITÉ</span>
                          <span className="text-sm text-gray-600">Randonnée dans la Réserve de Biosphère UNESCO</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée nature à Príncipe</h4>
                        <p className="text-justify mb-4">
                          Randonnée guidée dans la forêt tropicale de Príncipe, classée Réserve de Biosphère par l'UNESCO. Découverte de la biodiversité unique de l'île avec un guide naturaliste : observation des oiseaux endémiques, des plantes médicinales et des paysages préservés. Visite d'une plantation de café ou de cacao biologique. Déjeuner en forêt. Dans l'après-midi, continuation de la randonnée ou option baignade dans une cascade isolée. Retour à l'hébergement en fin d'après-midi. Dîner de clôture du séjour à Príncipe. Nuit à Príncipe.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Randonnée nature, observation biodiversité, visite plantation biologique
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE PRÍNCIPE</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hébergement. Derniers moments libres pour profiter de l'atmosphère paisible de Príncipe. Selon l'horaire de votre vol ou bateau, transfert à l'aéroport ou au port de Príncipe pour le retour vers São Tomé. À l'arrivée à São Tomé, connexion avec votre vol international ou prolongation de séjour selon votre programme. Emportez avec vous les souvenirs inoubliables de deux îles aux caractères bien distincts, mais complémentaires, et la certitude d'avoir découvert l'un des archipels les plus préservés et authentiques d'Afrique.
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
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences du Circuit</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce Circuit des Deux Îles est conçu pour vous offrir une immersion complète dans la culture, l'histoire et la nature de São Tomé-et-Príncipe. Chaque journée est une nouvelle découverte, des plantations historiques aux plages paradisiaques, en passant par les rencontres authentiques avec les habitants.
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
                              lat={exp.id === 'decouverte' ? 0.34 : 
                                   exp.id === 'nature' ? 1.64 :
                                   exp.id === 'plages' ? 0.28 :
                                   0.30} 
                              lng={exp.id === 'decouverte' ? 6.73 : 
                                   exp.id === 'nature' ? 7.42 :
                                   exp.id === 'plages' ? 6.61 :
                                   6.65} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie du Circuit</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600" 
                          alt="Praia Banana" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Praia Banana</h5>
                          <p className="text-sm text-gray-700">Plage iconique de Príncipe</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                          alt="Architecture coloniale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Architecture coloniale</h5>
                          <p className="text-sm text-gray-700">Histoire préservée des plantations</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600" 
                          alt="Forêt tropicale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Forêt tropicale</h5>
                          <p className="text-sm text-gray-700">Biodiversité unique au monde</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Vol en hélicoptère sur Príncipe</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Vue aérienne spectaculaire de l'île et de ses plages. Supplément : 250€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Excursion en bateau vers îlots</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Journée en bateau vers les îlots autour de Príncipe avec snorkeling. Supplément : 120€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours de cuisine santoméenne</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage des recettes traditionnelles avec une chef locale. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Séance de massage relaxant</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Massage aux huiles locales sur une plage privée. Supplément : 70€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Confortables</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏨</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements confortables et bien situés, reflétant le caractère authentique des îles. À São Tomé, vous séjournerez dans un hôtel central pratique pour les visites. À Príncipe, l'hébergement est choisi pour son charme et sa proximité avec la nature préservée.
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
                      SÃO TOMÉ (5 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('principe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'principe' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      PRÍNCIPE (4 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - São Tomé */}
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
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant sur place</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar est un établissement confortable situé au cœur de São Tomé. Les chambres sont climatisées et disposent d'une salle de bain privée, d'un minibar et de la Wi-Fi. L'hôtel dispose d'un restaurant servant une cuisine locale et internationale, d'un bar et d'un service de blanchisserie. Sa situation centrale permet un accès facile aux principaux sites d'intérêt de la capitale, aux restaurants et aux boutiques. Un point de départ idéal pour explorer São Tomé.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Príncipe */}
                  {activeHotelTab === 'principe' && (
                    <div className="space-y-16">
                      {/* Príncipe Resort */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Príncipe Resort" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Príncipe Resort</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baie de Santo António, Príncipe, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>En bord de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine avec vue mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍹</span>
                                <span className="text-sm font-semibold">Bar et restaurant</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚶</span>
                                <span className="text-sm font-semibold">Proche centre ville</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Príncipe Resort est un hébergement de charme situé en bord de mer, à quelques minutes à pied du centre de Santo António. Les bungalows sont confortables et dotés d'une terrasse privée avec vue sur la mer ou le jardin tropical. L'établissement dispose d'une piscine, d'un restaurant servant une cuisine fusion locale et internationale, et d'un bar. L'atmosphère est paisible et propice à la détente après les journées d'exploration. La plage privée est idéale pour les baignades matinales ou les couchers de soleil.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$2,799</span>
                    <span className="text-xl line-through text-gray-500">$3,199</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol inter-îles, tous transferts, guide francophone, hébergements, petits-déjeuners, visites
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
                    <option value="2026-01-15">15 Janvier 2026</option>
                    <option value="2026-02-10">10 Février 2026</option>
                    <option value="2026-03-08">8 Mars 2026</option>
                    <option value="2026-04-12">12 Avril 2026</option>
                    <option value="2026-05-20">20 Mai 2026</option>
                    <option value="2026-06-18">18 Juin 2026</option>
                    <option value="2026-07-16">16 Juillet 2026</option>
                    <option value="2026-08-13">13 Août 2026</option>
                    <option value="2026-09-10">10 Septembre 2026</option>
                    <option value="2026-10-08">8 Octobre 2026</option>
                    <option value="2026-11-05">5 Novembre 2026</option>
                    <option value="2026-12-03">3 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année, tous les 15 jours</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>VOL INTER-ÎLES INCLUS</strong> : São Tomé - Príncipe aller-retour
                  </p>
                  <p className="text-xs text-gray-300">* Option bateau disponible avec supplément</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur le circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos spécialistes des îles vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,7.5,1.7&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Circuit des Deux Îles miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Circuit des Deux Îles - 10 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Grand Tour culture et nature
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Ce Qui Est Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Vol inter-îles São Tomé-Príncipe</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialisé</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>9 nuits en hôtel 3*</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Petits-déjeuners inclus</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts terrestres et maritimes</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites et entrées sites</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance locale 24h/24</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du circuit</span>
                    <span className="font-bold text-green-700">Facile à modéré</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">10 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs toute l'année</span>
                    <span className="font-bold text-green-700">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">12 personnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Langue du guide</span>
                    <span className="font-bold text-green-700">Français</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins recommandés : Fièvre jaune, hépatites, typhoïde
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Voyageur</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Ce circuit m'a permis de découvrir les deux faces de l'archipel : l'énergie de São Tomé et la sérénité de Príncipe. Les plages sont à couper le souffle, les rencontres authentiques et le guide connaissait parfaitement les îles. Un voyage complet et équilibré !"
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
      <button className="fixed bottom-8 right-8 bg-green-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}