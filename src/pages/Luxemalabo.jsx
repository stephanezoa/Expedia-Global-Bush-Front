import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1},${lat-0.1},${lng+0.1},${lat+0.1}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1},${lat-0.1},${lng+0.1},${lat+0.1}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Luxe à Malabo</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.5,3.5,9.0,4.0&layer=mapnik&marker=3.75,8.78&marker=3.38,8.57"
          style={{ border: 0 }}
          allowFullScreen
          title="Luxe à Malabo : Hôtels 5 Étoiles et Gastronomie"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=11/3.56/8.67" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Malabo (Sofitel 5*)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-gray-300"></span>
          <span className="text-sm">Riaba (Lodge de luxe)</span>
        </div>
      </div>
    </div>
  );
};

export default function Luxemalabo() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('sofitel');
  const [activeExperienceTab, setActiveExperienceTab] = useState('gastronomie');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏨', title: 'Hôtels 5 étoiles', desc: 'Séjour dans les établissements les plus luxueux de Guinée Équatoriale' },
    { icon: '🍷', title: 'Gastronomie raffinée', desc: 'Dîners gastronomiques et dégustation de vins d\'exception' },
    { icon: '💆', title: 'Spa et bien-être', desc: 'Soins relaxants et massages dans des spas haut de gamme' },
    { icon: '🏌️', title: 'Golf exclusif', desc: 'Accès au golf 18 trous de Sipopo avec vue sur l\'océan' },
    { icon: '🚁', title: 'Excursions VIP', desc: 'Visites privées et transferts en véhicules de luxe' },
    { icon: '🌋', title: 'Nature préservée', desc: 'Découverte des paysages volcaniques de Bioko dans le confort absolu' },
  ];

  const regions = [
    { name: 'Malabo', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Capitale historique, cœur du luxe équatoguinéen avec hôtels 5*' },
    { name: 'Sipopo', color: 'bg-yellow-100', textColor: 'text-yellow-800', desc: 'Complexe de luxe en bord de mer avec golf, marina et palais' },
    { name: 'Pico Basile', color: 'bg-orange-100', textColor: 'text-orange-800', desc: 'Volcan culminant à 3 011 m, excursions VIP avec vue panoramique' },
    { name: 'Riaba', color: 'bg-amber-50', textColor: 'text-amber-900', desc: 'Ville côtière tranquille au sud de Bioko, lodge exclusif' },
    { name: 'Plages privées', color: 'bg-amber-50', textColor: 'text-amber-900', desc: 'Accès à des plages réservées aux clients des hôtels de luxe' },
    { name: 'Marchés d\'artisans', color: 'bg-amber-50', textColor: 'text-amber-900', desc: 'Boutiques d\'artisanat haut de gamme et galeries d\'art' },
  ];

  const experiences = [
    { 
      id: 'gastronomie',
      name: 'Gastronomie Exclusive', 
      icon: '🍽️',
      desc: 'Découverte de la cuisine raffinée équatoguinéenne dans les restaurants gastronomiques les plus exclusifs',
      highlights: ['Dîners 5*', 'Cuisine fusion', 'Vins d\'exception', 'Chefs étoilés']
    },
    { 
      id: 'bienetre',
      name: 'Bien-être Luxueux', 
      icon: '💆',
      desc: 'Expériences de détente ultime dans des spas haut de gamme avec soins traditionnels et modernes',
      highlights: ['Spa 5*', 'Massages signature', 'Soins du corps', 'Yoga privé']
    },
    { 
      id: 'excursions',
      name: 'Excursions VIP', 
      icon: '🚁',
      desc: 'Visites privées des sites emblématiques de Bioko avec guides experts et transport de luxe',
      highlights: ['Visites privées', 'Guide personnel', 'Véhicules VIP', 'Accès exclusif']
    },
    { 
      id: 'loisirs',
      name: 'Loisirs d\'Exception', 
      icon: '🏌️',
      desc: 'Accès aux installations de loisirs les plus exclusives : golf, marina, plages privées',
      highlights: ['Golf 18 trous', 'Marina de luxe', 'Plages privées', 'Activités nautiques']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌟</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Luxe à Malabo : Hôtels 5 Étoiles et Gastronomie</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              4 jours d'expérience exclusive dans les établissements les plus luxueux de Guinée Équatoriale
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">4</div>
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
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | EXPÉRIENCE LUXE</span>
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
                <span className="bg-amber-600 text-white px-3 py-1 font-bold">LUXE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE8</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">4 jours - Malabo à Riaba</span>
                <button className="ml-auto border-2 border-amber-600 text-amber-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-amber-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Voyage d'exception dans les établissements les plus prestigieux de Guinée Équatoriale</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-amber-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-amber-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-amber-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-amber-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 4 jours vous offre une expérience luxueuse exclusive sur l'île de Bioko en Guinée Équatoriale. Vous séjournerez dans les établissements les plus prestigieux du pays, découvrirez une gastronomie raffinée fusionnant influences locales et internationales, et profiterez d'activités VIP dans un cadre exceptionnel. Du Sofitel Malabo Resort & Spa 5* au lodge exclusif de Riaba, en passant par le golf de Sipopo et les visites privées du Pico Basile, ce voyage vous plonge dans l'univers du luxe équatoguinéen. Spa, dîners gastronomiques, excursions privées et service personnalisé rythmeront ces 4 jours d'exception.
                </p>

                {/* Section Points forts */}
                <div className="bg-amber-50 border-l-4 border-amber-500 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-amber-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Séjour au Sofitel Malabo</strong> 5* avec suite vue mer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Dîners gastronomiques</strong> dans les meilleurs restaurants de Malabo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Spa de luxe</strong> avec massage signature et soins du corps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Accès au golf 18 trous</strong> de Sipopo avec équipement fourni</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Excursion VIP au Pico Basile</strong> avec guide privé et pique-nique gourmand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Transferts en véhicule de luxe</strong> avec chauffeur privé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Nuit au lodge exclusif</strong> de Riaba avec dîner aux chandelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span><strong>Service de concierge</strong> personnalisé 24h/24</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le luxe équatoguinéen */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Luxe en Guinée Équatoriale</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La Guinée Équatoriale, grâce à ses ressources pétrolières, a développé une offre luxueuse qui rivalise avec les meilleures destinations du monde. Malabo, la capitale sur l'île de Bioko, concentre des établissements 5* d'exception, des restaurants gastronomiques, un golf de classe internationale et des services haut de gamme. Ce circuit vous donne accès à cet univers confidentiel, réservé à une clientèle exigeante. C'est l'occasion de découvrir un luxe authentique, alliant standards internationaux et touches locales, dans un cadre préservé et exclusif.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Hôtels 5 étoiles</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Gastronomie raffinée</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Service personnalisé</span>
                      <span className="bg-amber-50 text-amber-900 text-xs px-3 py-1 rounded-full">Expérience exclusive</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE LUXE EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Hôtels 5* à Malabo</div>
                      <div className="text-3xl font-bold text-amber-600">3</div>
                      <div className="text-xs">établissements de luxe</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Restaurants gastronomiques</div>
                      <div className="text-3xl font-bold text-amber-600">5+</div>
                      <div className="text-xs">tables d'exception</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Trous de golf</div>
                      <div className="text-3xl font-bold text-amber-600">18</div>
                      <div className="text-xs">parcours de classe mondiale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Ratio personnel/client</div>
                      <div className="text-3xl font-bold text-amber-600">3:1</div>
                      <div className="text-xs">service personnalisé</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours d'Exception</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit d'exception se déroule entièrement sur l'île volcanique de Bioko. Vous commencerez par Malabo, la capitale, où vous séjournerez dans le prestigieux Sofitel 5* et découvrirez les délices de la gastronomie locale raffinée. Vous explorerez ensuite les trésors de l'île : le complexe de luxe de Sipopo avec son golf et sa marina, les paysages spectaculaires du Pico Basile, et la côte sud tranquille de Riaba où vous passerez une nuit dans un lodge exclusif. Tous les transferts se font en véhicules de luxe avec chauffeur privé.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Nuits de luxe</div>
                            <div className="text-amber-600 font-bold">Malabo 3 / Riaba 1</div>
                          </div>
                          <div>
                            <div className="font-semibold">Repas gastronomiques</div>
                            <div className="text-amber-600 font-bold">4 petits-déj, 4 déj, 4 dîners</div>
                          </div>
                          <div>
                            <div className="font-semibold">Activités VIP</div>
                            <div className="text-amber-600 font-bold">Golf, spa, excursions</div>
                          </div>
                          <div>
                            <div className="font-semibold">Service</div>
                            <div className="text-amber-600 font-bold">Concierge 24h/24</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de l\'Île de Bioko - Circuit Luxe</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.4,3.3,9.1,4.2&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte île de Bioko circuit luxe"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=10/3.75/8.75" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-amber-600">Les Joyaux du Luxe Équatoguinéen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Malabo' && 'Capitale • Luxe • Gastronomie'}
                          {region.name === 'Sipopo' && 'Complexe 5* • Golf • Marina'}
                          {region.name === 'Pico Basile' && 'Volcan • Excursions VIP • Panoramas'}
                          {region.name === 'Riaba' && 'Tranquillité • Lodge exclusif • Nature'}
                          {region.name === 'Plages privées' && 'Exclusivité • Détente • Service'}
                          {region.name === 'Marchés d\'artisans' && 'Artisanat • Shopping • Galeries'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-amber-600 to-yellow-500 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à Malabo</div>
                      <div className="text-xs opacity-80">Accueil VIP, installation Sofitel 5*</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Malabo luxueux</div>
                      <div className="text-xs opacity-80">Golf, spa, dîner gastronomique</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3</div>
                      <div className="text-sm">Excursion à Riaba</div>
                      <div className="text-xs opacity-80">Pico Basile, lodge exclusif</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Petit-déjeuner luxe, transfert aéroport</div>
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
                        <span className="bg-amber-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE VIP À MALABO</span>
                          <span className="text-sm text-gray-600">Accueil personnalisé et installation au Sofitel 5*</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Malabo. Accueil VIP dès la sortie de l'avion par notre représentant qui vous assistera pour les formalités de douane et d'immigration. Transfert en véhicule de luxe (Mercedes Classe S ou équivalent) vers le Sofitel Malabo Resort & Spa 5*. Installation dans votre suite avec vue mer. Présentation des services de concierge disponibles 24h/24. Temps libre pour vous détendre et profiter des installations de l'hôtel : piscine à débordement face à l'océan, jardins tropicaux. En fin d'après-midi, cocktail de bienvenue au bar de l'hôtel avec vue sur le coucher de soleil. Dîner gastronomique au restaurant principal de l'hôtel, "Le Patio", spécialisé en cuisine fusion équatoguinéenne-française. Nuit au Sofitel Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Malabo luxueux */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MALABO LUXUEUX</span>
                          <span className="text-sm text-gray-600">Golf, spa et gastronomie d'exception</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-600">Journée d'exception</h4>
                        <p className="text-justify mb-4">
                          Petit-déjeuner gourmand en chambre ou sur la terrasse du restaurant avec vue sur l'océan. Matinée consacrée au golf : transfert vers le golf 18 trous de Sipopo (inclus dans le circuit). Mise à disposition de l'équipement (clubs, chariot, balles) et d'un caddie personnel. Parcours le long de l'océan avec vues spectaculaires. Déjeuner léger au club-house du golf. Retour à l'hôtel en début d'après-midi. Temps libre pour profiter du spa de luxe du Sofitel : accès au hammam, sauna, et choix d'un massage signature (60 minutes) ou d'un soin du corps. En fin d'après-midi, visite privée de Malabo avec guide francophone : découverte de l'architecture coloniale espagnole, de la cathédrale, et des galeries d'art contemporain. Dîner gastronomique dans un restaurant exclusif de Malabo, "La Luna", réputé pour sa cuisine créative et sa cave à vins d'exception. Retour à l'hôtel en véhicule de luxe. Nuit au Sofitel Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Excursion à Riaba */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXCURSION VIP À RIABA</span>
                          <span className="text-sm text-gray-600">Pico Basile et nuit en lodge exclusif</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-600">Journée nature et élégance</h4>
                        <p className="text-justify mb-4">
                          Petit-déjeuner au Sofitel. Départ matinal en véhicule 4x4 de luxe (Range Rover ou équivalent) pour une excursion vers le sud de l'île de Bioko. Première étape : ascension du Pico Basile, volcan culminant à 3 011 mètres. Arrêts aux points de vue panoramiques avec vue sur Malabo, l'océan et par temps clair, le Mont Cameroun. Randonnée facile jusqu'au sommet avec guide privé. Pique-nique gourmand préparé par les chefs du Sofitel, servi dans un cadre naturel exceptionnel. Descente vers la côte sud et arrivée à Riaba, ville côtière tranquille. Installation au lodge exclusif "Riaba Nature Retreat", bungalow de luxe avec vue sur l'océan. Temps libre pour se détendre, profiter de la plage privée ou de la piscine infinie du lodge. En fin d'après-midi, séance de yoga privée face au coucher de soleil (optionnel). Dîner aux chandelles sur la terrasse du lodge, menu dégustation de produits locaux raffinés. Nuit au lodge de Riaba.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE MALABO</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner luxueux au lodge de Riaba, avec produits frais locaux et spécialités maison. Temps libre pour une dernière détente face à l'océan. Départ en véhicule de luxe pour le retour vers Malabo (environ 1h30 de route pittoresque). Selon l'horaire de votre vol international, possibilité de déjeuner gastronomique dans un restaurant sélectionné à Malabo ou directement à l'aéroport dans le salon VIP. Transfert à l'aéroport international de Malabo en véhicule de luxe. Assistance aux formalités d'embarquement. Accès au salon VIP de l'aéroport (si disponible). Emportez avec vous des souvenirs d'une expérience luxueuse exclusive en Guinée Équatoriale : le raffinement des hôtels 5*, l'excellence de la gastronomie, le service personnalisé, et la beauté préservée de l'île de Bioko. Fin de nos services.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-amber-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌟</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amber-600">Les Expériences Luxueuses</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit d'exception vous offre une immersion dans l'univers du luxe équatoguinéen. Des établissements 5* à la gastronomie raffinée, en passant par les activités VIP et les services personnalisés, chaque expérience est conçue pour satisfaire les voyageurs les plus exigeants.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-amber-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-amber-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-amber-600">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'gastronomie' ? 3.75 : 
                                   exp.id === 'bienetre' ? 3.75 :
                                   exp.id === 'excursions' ? 3.38 :
                                   3.75} 
                              lng={exp.id === 'gastronomie' ? 8.78 : 
                                   exp.id === 'bienetre' ? 8.78 :
                                   exp.id === 'excursions' ? 8.57 :
                                   8.78} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'gastronomie' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Gastronomie d'Exception à Malabo</h5>
                            <p className="text-gray-700 mb-4">
                              Malabo offre une scène gastronomique surprenante pour une capitale africaine. Grâce à la présence de chefs internationaux et à l'influence de la cuisine espagnole (l'ancienne puissance coloniale), on trouve des restaurants d'exception. La cuisine fusion équatoguinéenne-française, les fruits de mer ultra-frais, les viandes de qualité et les produits locaux (plantain, manioc, igname) sont élevés au rang d'art culinaire. Les caves à vins proposent des sélections internationales rares. Les dîners aux chandelles sur les terrasses face à l'océan, le service impeccable et les présentations artistiques font de chaque repas un événement.
                            </p>
                          </div>
                        )}

                        {exp.id === 'bienetre' && (
                          <div className="bg-yellow-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Le Bien-être Luxueux</h5>
                            <p className="text-gray-700 mb-4">
                              Les établissements de luxe de Malabo proposent des spas de classe mondiale combinant techniques internationales et traditions locales. Massages aux huiles essentielles locales, soins du corps utilisant le cacao et le café équatoguinéens, bains de vapeur aux plantes médicinales... Chaque soin est une expérience sensorielle. Les installations comprennent généralement hammams, saunas, bains à remous, salles de fitness high-tech et parfois même piscines à contre-courant. Le personnel est formé aux meilleures techniques mondiales et offre un service discret et personnalisé. C'est l'occasion de se ressourcer complètement dans un cadre idyllique.
                            </p>
                          </div>
                        )}

                        {exp.id === 'excursions' && (
                          <div className="bg-orange-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Excursions VIP</h5>
                            <p className="text-gray-700 mb-4">
                              Découvrir l'île de Bioko en mode VIP est une expérience unique. Avec un guide privé francophone et un véhicule de luxe, vous explorez les sites emblématiques sans la foule, à votre rythme. L'ascension du Pico Basile offre des vues panoramiques spectaculaires. La visite des plantations de cacao permet de comprendre l'histoire économique de l'île. Les plages isolées du sud sont accessibles en 4x4 confortable. Chaque excursion est personnalisable selon vos centres d'intérêt. Les pique-niques sont préparés par les chefs des hôtels 5* et servis dans des cadres naturels exceptionnels. C'est la manière idéale de découvrir la nature préservée de Bioko sans renoncer au confort.
                            </p>
                          </div>
                        )}

                        {exp.id === 'loisirs' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Loisirs d'Exception</h5>
                            <p className="text-gray-700 mb-4">
                              Le complexe de Sipopo, à quelques minutes de Malabo, concentre des installations de loisirs uniques en Afrique centrale. Le golf 18 trous, conçu par un architecte de renom, offre un parcours technique avec des vues constantes sur l'océan. La marina peut accueillir des yachts de luxe. Les plages privées sont réservées aux clients des hôtels partenaires. Des activités nautiques (jet-ski, paddle, kayak) sont disponibles. Pour les amateurs de shopping, les boutiques d'artisanat haut de gamme et les galeries d'art proposent des pièces uniques. Chaque activité est encadrée par un personnel attentionné et peut être organisée à la demande.
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
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                          alt="Hôtel 5 étoiles" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Suites de luxe</h5>
                          <p className="text-sm text-gray-700">Sofitel Malabo Resort & Spa 5*</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" 
                          alt="Gastronomie" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Cuisine raffinée</h5>
                          <p className="text-sm text-gray-700">Restaurants gastronomiques de Malabo</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600" 
                          alt="Golf" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Golf d'exception</h5>
                          <p className="text-sm text-gray-700">Parcours 18 trous de Sipopo</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements d'Exception</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-amber-600 w-16 md:w-32"></span>
                      <span className="text-amber-600 text-2xl">🏨</span>
                      <span className="h-px bg-amber-600 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose deux types d'hébergements de luxe : le Sofitel Malabo Resort & Spa 5*, établissement de renommée internationale, et le Riaba Nature Retreat, lodge exclusif offrant intimité et connexion avec la nature dans un cadre raffiné.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('sofitel')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'sofitel' 
                          ? 'bg-amber-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SOFITEL MALABO 5* (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('riaba')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'riaba' 
                          ? 'bg-amber-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      RIABA NATURE RETREAT (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Sofitel */}
                  {activeHotelTab === 'sofitel' && (
                    <div className="space-y-16">
                      {/* Sofitel Malabo Resort & Spa */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Sofitel Malabo Resort & Spa" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-sm font-bold">
                                5* LUXE - ACCOR HOTELS
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Sofitel Malabo Resort & Spa</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Sipopo, Malabo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine à débordement</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">3 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💆</span>
                                <span className="text-sm font-semibold">Spa So</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏌️</span>
                                <span className="text-sm font-semibold">Accès golf</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 5* de luxe situé dans le complexe exclusif de Sipopo, en bord de mer. Suites spacieuses (à partir de 60 m²) avec terrasse privée, décoration élégante mêlant style français et africain, salle de bain en marbre avec baignoire et douche séparée, climatisation, wifi haute vitesse, minibar, TV écran plat. Plusieurs restaurants dont "Le Patio" (gastronomique), "La Veranda" (buffet international), et "Le Bar" avec terrasse face à l'océan. Piscine à débordement de 50 m, spa So avec 6 salles de soins, hammam, sauna, salle de fitness. Service de concierge 24h/24, blanchisserie, room-service. Accès direct à la plage privée et au golf 18 trous de Sipopo. Établissement de référence en Guinée Équatoriale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Riaba */}
                  {activeHotelTab === 'riaba' && (
                    <div className="space-y-16">
                      {/* Riaba Nature Retreat */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600" 
                              alt="Riaba Nature Retreat" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Riaba Nature Retreat</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Riaba, côte sud de Bioko, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Lodge exclusif</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Vue océan panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏖️</span>
                                <span className="text-sm font-semibold">Plage privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧘</span>
                                <span className="text-sm font-semibold">Yoga privé</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Lodge exclusif de luxe situé sur la côte sud tranquille de l'île de Bioko. Seulement 8 bungalows de style contemporain africain, chacun avec terrasse privée face à l'océan, chambre spacieuse avec lit king-size, salle de bain ouverte avec baignoire et douche à l'extérieur (avec intimité). Décoration naturelle et élégante utilisant des matériaux locaux (bois, pierre). Restaurant gastronomique proposant une cuisine fusion à base de produits locaux et de poissons frais pêchés quotidiennement. Bar avec sélection de vins et spiritueux premium. Piscine infinie avec vue sur l'océan, plage privée, salle de yoga. Service personnalisé avec majordome attribué à chaque bungalow. Électricité 24h/24 (groupe électrogène de secours), wifi limité pour favoriser la déconnexion. Cadre idyllique pour une nuit d'exception en harmonie avec la nature.
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
                  <span className="text-2xl">🌟</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Expérience Luxe</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-amber-600">$1,899</span>
                    <span className="text-xl line-through text-gray-500">$1,699</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded">
                    ✅ Inclus : Suites 5*, tous repas gastronomiques, transferts VIP, activités exclusives
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-05">5 Janvier 2026</option>
                    <option value="2026-02-10">10 Février 2026</option>
                    <option value="2026-03-15">15 Mars 2026</option>
                    <option value="2026-04-20">20 Avril 2026</option>
                    <option value="2026-05-25">25 Mai 2026</option>
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2026-07-15">15 Juillet 2026</option>
                    <option value="2026-08-20">20 Août 2026</option>
                    <option value="2026-09-25">25 Septembre 2026</option>
                    <option value="2026-10-30">30 Octobre 2026</option>
                    <option value="2026-11-15">15 Novembre 2026</option>
                    <option value="2026-12-20">20 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année (circuit toujours disponible)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉRIENCE EXCLUSIVE :</strong> Suites 5* et service personnalisé
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 4 participants maximum pour préserver l'exclusivité</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-amber-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-amber-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-amber-600 text-white py-4 font-semibold text-base mb-4 hover:bg-amber-500 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur cette expérience luxe ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts du voyage de luxe vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.4,3.3,9.1,4.2&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte luxe Malabo miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Luxe à Malabo - 4 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit exclusif Sofitel 5* et Riaba
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
                    <span>Transferts aéroport VIP avec assistance</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts en véhicule de luxe (Mercedes Classe S)</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone privé</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements de luxe (3 nuits)</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les petits-déjeuners gourmands</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 déjeuners gastronomiques</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 dîners d\'exception avec vins</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Accès golf 18 trous avec équipement</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Massage signature au spa (60 min)</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Excursion VIP au Pico Basile</span>
                    <span className="font-bold text-amber-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Service de concierge 24h/24</span>
                    <span className="font-bold text-amber-600">✓</span>
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
                    <span className="font-bold text-amber-600">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-amber-600">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-amber-600">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-amber-600">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-amber-600">Recommandée</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Code vestimentaire</span>
                    <span className="font-bold text-amber-600">Élégant le soir</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + certificat vaccinal fièvre jaune
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-amber-200 p-4 mt-6 shadow-lg bg-amber-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-600">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un niveau de service exceptionnel. Le Sofitel Malabo rivalise avec les meilleurs hôtels du monde, et le lodge de Riaba est un havre de paix absolu. La gastronomie était à la hauteur de nos attentes les plus élevées."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Sophie et Pierre D., voyageurs 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-amber-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-amber-400 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}