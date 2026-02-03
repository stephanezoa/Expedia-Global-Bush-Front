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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Affaires et Découverte</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.5,1.0,11.5,4.0&layer=mapnik&marker=3.75,8.78&marker=1.63,11.32"
          style={{ border: 0 }}
          allowFullScreen
          title="Affaires et Découverte : Voyage Court"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/2.5/10.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-300"></span>
          <span className="text-sm">Malabo (Bioko)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Mongomo (Continent)</span>
        </div>
      </div>
    </div>
  );
};

export default function Affairesdecouverte() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('malabo');
  const [activeExperienceTab, setActiveExperienceTab] = useState('affaires');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '💼', title: 'Rencontres d\'affaires', desc: 'Organisation de rendez-vous professionnels avec contacts locaux' },
    { icon: '🏛️', title: 'Culture Fang', desc: 'Découverte de la riche culture traditionnelle du peuple Fang' },
    { icon: '🌳', title: 'Nature préservée', desc: 'Visite des réserves naturelles et forêts équatoriales' },
    { icon: '🏨', title: 'Hôtels d\'affaires', desc: 'Hébergements confortables avec espaces de travail et wifi' },
    { icon: '✈️', title: 'Vols intérieurs', desc: 'Transferts aériens rapides entre Malabo et Mongomo' },
    { icon: '🤝', title: 'Réseautage', desc: 'Opportunités de rencontres avec décideurs économiques' },
  ];

  const regions = [
    { name: 'Malabo', color: 'bg-gray-100', textColor: 'text-gray-800', desc: 'Capitale économique, centre des affaires et des institutions' },
    { name: 'Mongomo', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Ville continentale importante, berceau de la culture Fang' },
    { name: 'Aéroport de Malabo', color: 'bg-gray-50', textColor: 'text-gray-700', desc: 'Principal hub aérien international et domestique' },
    { name: 'Centre-ville Malabo', color: 'bg-gray-50', textColor: 'text-gray-700', desc: 'Quartiers d\'affaires, ministères, ambassades' },
    { name: 'Forêts de Mongomo', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Écosystèmes préservés autour de la ville' },
    { name: 'Sites culturels Fang', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Lieux historiques et traditionnels du peuple Fang' },
  ];

  const experiences = [
    { 
      id: 'affaires',
      name: 'Rencontres Professionnelles', 
      icon: '💼',
      desc: 'Organisation de rendez-vous d\'affaires avec des partenaires potentiels et visites d\'entreprises locales',
      highlights: ['Rendez-vous organisés', 'Visites d\'entreprises', 'Interprétation', 'Support logistique']
    },
    { 
      id: 'culture',
      name: 'Culture Fang', 
      icon: '🏛️',
      desc: 'Découverte de la culture traditionnelle du peuple Fang, art, musique et organisation sociale',
      highlights: ['Art Fang', 'Traditions', 'Musique polyphonique', 'Histoire']
    },
    { 
      id: 'nature',
      name: 'Nature et Détente', 
      icon: '🌿',
      desc: 'Moments de détente dans la nature équatoriale pour équilibrer les journées d\'affaires',
      highlights: ['Réserves naturelles', 'Randonnées légères', 'Observation faune', 'Détente']
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie d\'Affaires', 
      icon: '🍽️',
      desc: 'Repas d\'affaires dans des restaurants sélectionnés et découverte de la cuisine équatoguinéenne',
      highlights: ['Repas d\'affaires', 'Cuisine locale', 'Restaurants sélectionnés', 'Échanges informels']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">💼</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Affaires et Découverte : Voyage Court</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              3 jours combinant rencontres professionnelles et découverte culturelle en Guinée Équatoriale
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">3</div>
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
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | VOYAGE D'AFFAIRES</span>
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
                <span className="bg-gray-700 text-white px-3 py-1 font-bold">AFFAIRES</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE9</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">3 jours - Malabo à Mongomo</span>
                <button className="ml-auto border-2 border-gray-700 text-gray-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-gray-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Voyage professionnel efficace alliant business et découverte culturelle</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-gray-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-gray-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-gray-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-gray-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit court de 3 jours est spécialement conçu pour les professionnels souhaitant combiner efficacement rencontres d'affaires et découverte culturelle en Guinée Équatoriale. Vous commencerez par Malabo, la capitale économique sur l'île de Bioko, pour des rendez-vous professionnels et des visites d'entreprises. Ensuite, vous prendrez un vol intérieur vers Mongomo, ville continentale importante et berceau de la culture Fang, où vous poursuivrez vos activités professionnelles tout en découvrant la riche tradition de ce peuple. Ce voyage optimisé vous permet de maximiser votre temps tout en découvrant les multiples facettes de ce pays dynamique.
                </p>

                {/* Section Points forts */}
                <div className="bg-gray-50 border-l-4 border-gray-500 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-gray-700 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-gray-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Services Inclus dans ce Circuit d'Affaires</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Organisation de rendez-vous professionnels</strong> selon vos objectifs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Vol intérieur Malabo-Mongomo</strong> aller-retour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Transferts professionnels</strong> avec véhicule climatisé et chauffeur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Interprétation français/espagnol</strong> pour les réunions</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Hébergements d'affaires</strong> avec bureau et wifi haute vitesse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Découverte culturelle Fang</strong> à Mongomo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Repas d'affaires</strong> dans des restaurants sélectionnés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        <span><strong>Support logistique</strong> pour les déplacements professionnels</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le voyage d'affaires */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Voyage d'Affaires en Guinée Équatoriale</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La Guinée Équatoriale offre un environnement économique dynamique avec des opportunités dans divers secteurs : pétrole et gaz, construction, agro-industrie, services. Ce circuit vous permet de découvrir deux pôles économiques importants : Malabo, capitale administrative et financière, et Mongomo, ville continentale en développement rapide. Le programme équilibre efficacement rendez-vous professionnels et moments culturels, vous offrant une compréhension approfondie du contexte local tout en maximisant votre efficacité professionnelle.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Rendez-vous organisés</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Culture Fang</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Logistique optimisée</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Découverte équilibrée</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE VOYAGE D'AFFAIRES EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Durée optimale</div>
                      <div className="text-3xl font-bold text-gray-700">3</div>
                      <div className="text-xs">jours efficaces</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Vols intérieurs</div>
                      <div className="text-3xl font-bold text-gray-700">2</div>
                      <div className="text-xs">trajets aériens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Rendez-vous organisés</div>
                      <div className="text-3xl font-bold text-gray-700">4-6</div>
                      <div className="text-xs">selon objectifs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Secteurs couverts</div>
                      <div className="text-3xl font-bold text-gray-700">5+</div>
                      <div className="text-xs">pétrole, construction, agro, etc.</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Professionnel</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit optimisé vous fait découvrir deux pôles économiques distincts de la Guinée Équatoriale. Vous commencez par Malabo, capitale administrative et centre des institutions, où vous aurez des rendez-vous dans le secteur formel. Ensuite, vous volez vers Mongomo, ville continentale en plein développement, berceau du pouvoir politique actuel et de la culture Fang. Le voyage inclut des transferts efficaces, des hébergements adaptés aux professionnels, et un équilibre entre rencontres d'affaires et découverte culturelle pour une compréhension complète du contexte local.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Nuits</div>
                            <div className="text-gray-700 font-bold">Malabo 2 / Mongomo 1</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vols intérieurs</div>
                            <div className="text-gray-700 font-bold">Malabo-Mongomo aller-retour</div>
                          </div>
                          <div>
                            <div className="font-semibold">Rendez-vous</div>
                            <div className="text-gray-700 font-bold">Organisés sur mesure</div>
                          </div>
                          <div>
                            <div className="font-semibold">Découverte</div>
                            <div className="text-gray-700 font-bold">Culture Fang + Nature</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Centres Économiques de Guinée Équatoriale</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,1.0,12.0,4.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte centres économiques Guinée Équatoriale"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/2.5/10.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-700">Les Pôles Économiques et Culturels</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Malabo' && 'Capitale • Affaires • Institutions'}
                          {region.name === 'Mongomo' && 'Continent • Culture Fang • Développement'}
                          {region.name === 'Aéroport de Malabo' && 'Hub aérien • Connectivité • International'}
                          {region.name === 'Centre-ville Malabo' && 'Quartier d\'affaires • Ministères • Ambassades'}
                          {region.name === 'Forêts de Mongomo' && 'Nature • Détente • Écotourisme'}
                          {region.name === 'Sites culturels Fang' && 'Histoire • Traditions • Art'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-gray-700 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée à Malabo</div>
                      <div className="text-xs opacity-80">Rendez-vous d\'affaires, découverte capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Vol vers Mongomo</div>
                      <div className="text-xs opacity-80">Rencontres professionnelles, culture Fang</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Derniers rendez-vous, retour Malabo, vol international</div>
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
                        <span className="bg-gray-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À MALABO</span>
                          <span className="text-sm text-gray-600">Rendez-vous d\'affaires et découverte de la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Malabo. Accueil par notre représentant qui vous assistera pour les formalités de douane. Transfert en véhicule professionnel climatisé vers votre hôtel d'affaires en centre-ville. Installation rapide. Selon l'heure d'arrivée, premier rendez-vous d'affaires organisé selon vos objectifs (rencontre avec un partenaire potentiel, visite d'entreprise, ou réunion préparatoire). Déjeuner d'affaires dans un restaurant sélectionné. Après-midi : continuation des rendez-vous professionnels ou visite du centre-ville de Malabo pour une première immersion : architecture coloniale espagnole, place de l'Indépendance, port. Briefing sur le contexte économique local. Dîner de travail avec un expert local du secteur qui vous intéresse. Nuit à l'hôtel d'affaires à Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Vol vers Mongomo */}
                  <div className="border-2 border-gray-300 overflow-hidden border-gray-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-gray-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MALABO → MONGOMO</span>
                          <span className="text-sm text-gray-600">Rencontres professionnelles et découverte de la culture Fang</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <h4 className="text-xl font-semibold mb-3 text-gray-700">Journée professionnelle et culturelle</h4>
                        <p className="text-justify mb-4">
                          Petit-déjeuner tôt à l'hôtel. Transfert à l'aéroport de Malabo pour le vol intérieur vers Mongomo (environ 1 heure de vol). À l'arrivée, accueil et transfert à l'hôtel d'affaires. Installation rapide. Premiers rendez-vous professionnels à Mongomo selon votre programme personnalisé : rencontres avec des entrepreneurs locaux, visites d'entreprises, ou réunions avec des représentants institutionnels. Déjeuner d'affaires. Après-midi : continuation des activités professionnelles ou début de la découverte culturelle. Visite des sites culturels Fang : musée local (si ouvert), ateliers d'artisans, découverte de l'art traditionnel Fang (sculptures, masques). Rencontre avec un guide local pour une introduction à la culture et l'histoire du peuple Fang. Dîner dans un restaurant traditionnel avec spécialités locales. Nuit à l'hôtel d'affaires à Mongomo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-gray-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE MONGOMO</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers rendez-vous professionnels à Mongomo si nécessaire, ou temps libre pour une activité de découverte optionnelle : visite d'une réserve naturelle proche de Mongomo, randonnée légère en forêt, ou shopping d'artisanat local. Déjeuner d'affaires ou libre selon votre programme. Transfert à l'aéroport de Mongomo pour le vol retour vers Malabo. À l'arrivée à Malabo, selon l'horaire de votre vol international, possibilité de dernières réunions ou de détente à l'hôtel (chambre day-use si nécessaire). Transfert à l'aéroport international de Malabo pour votre vol de retour. Assistance aux formalités d'embarquement. Emportez avec vous des contacts professionnels précieux, une compréhension du contexte économique équatoguinéen, et des souvenirs de la riche culture Fang. Fin de nos services.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-gray-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">💼</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-gray-700">Les Expériences du Voyage d'Affaires</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit court optimise votre temps en Guinée Équatoriale, combinant efficacement rencontres professionnelles et découverte culturelle. Chaque expérience est conçue pour vous donner une compréhension approfondie du contexte local tout en maximisant vos opportunités d'affaires.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-gray-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-gray-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-gray-700">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-gray-700 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'affaires' ? 3.75 : 
                                   exp.id === 'culture' ? 1.63 :
                                   exp.id === 'nature' ? 1.63 :
                                   3.75} 
                              lng={exp.id === 'affaires' ? 8.78 : 
                                   exp.id === 'culture' ? 11.32 :
                                   exp.id === 'nature' ? 11.32 :
                                   8.78} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'affaires' && (
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">L'Écosystème des Affaires en Guinée Équatoriale</h5>
                            <p className="text-gray-700 mb-4">
                              La Guinée Équatoriale offre un environnement économique unique en Afrique centrale. Grâce aux revenus pétroliers, le pays a connu un développement rapide des infrastructures et une diversification économique en cours. Les secteurs porteurs incluent l'énergie (pétrole et gaz), la construction, l'agro-industrie, les services financiers et le tourisme. Malabo concentre les institutions, les banques et les sièges d'entreprises. Mongomo représente le développement continental et les opportunités liées à la proximité avec les pays voisins (Cameroun, Gabon). Notre service d'organisation de rendez-vous vous met en relation avec les acteurs clés selon vos objectifs spécifiques.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Culture Fang : Clé de Compréhension</h5>
                            <p className="text-gray-700 mb-4">
                              Le peuple Fang, majoritaire en Guinée Équatoriale continentale, possède une culture riche et complexe. Leur organisation sociale, leurs traditions artistiques (notamment les sculptures et masques), leur musique polyphonique et leurs systèmes de croyance sont des éléments clés pour comprendre le contexte local. Mongomo, berceau de la culture Fang et ville natale de la famille présidentielle, est un lieu privilégié pour cette découverte. Comprendre la culture Fang, c'est mieux appréhender les codes sociaux, les modes de communication et les valeurs qui sous-tendent les relations professionnelles en Guinée Équatoriale continentale.
                            </p>
                          </div>
                        )}

                        {exp.id === 'nature' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Nature Équatoriale comme Ressource</h5>
                            <p className="text-gray-700 mb-4">
                              La Guinée Équatoriale continentale est couverte de forêts équatoriales riches en biodiversité. Ces espaces naturels offrent non seulement des opportunités pour l'écotourisme, mais aussi des moments de détente et de ressourcement essentiels lors d'un voyage d'affaires intense. Les environs de Mongomo offrent des possibilités de randonnées légères, d'observation d'oiseaux, ou simplement de contemplation dans un cadre préservé. Ces moments en nature permettent de recharger ses batteries, de prendre du recul, et d'aborder les rendez-vous professionnels avec une énergie renouvelée.
                            </p>
                          </div>
                        )}

                        {exp.id === 'gastronomie' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Gastronomie comme Outil de Réseautage</h5>
                            <p className="text-gray-700 mb-4">
                              En Guinée Équatoriale, comme dans de nombreuses cultures, les repas partagés sont des moments privilégiés pour construire des relations. Les repas d'affaires permettent des échanges plus informels, la construction de confiance, et une meilleure compréhension mutuelle. La cuisine équatoguinéenne, influencée par les traditions africaines et l'héritage espagnol, offre une variété de plats à base de poisson, viande, plantain, manioc et igname. Savoir apprécier la cuisine locale et participer à ces moments conviviaux est un atout précieux pour établir des relations professionnelles durables.
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
                          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600" 
                          alt="Rencontres d'affaires" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Rencontres professionnelles</h5>
                          <p className="text-sm text-gray-700">Rendez-vous d'affaires organisés sur mesure</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1518834103328-93d45986dce1?w=600" 
                          alt="Culture Fang" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Art Fang</h5>
                          <p className="text-sm text-gray-700">Découverte des traditions artistiques du peuple Fang</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" 
                          alt="Repas d'affaires" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Gastronomie professionnelle</h5>
                          <p className="text-sm text-gray-700">Repas d'affaires dans des restaurants sélectionnés</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Professionnels Confortables</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-gray-700 w-16 md:w-32"></span>
                      <span className="text-gray-700 text-2xl">🏨</span>
                      <span className="h-px bg-gray-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit vous propose des hébergements d'affaires confortables et fonctionnels, sélectionnés pour leur localisation pratique, leurs services adaptés aux professionnels (wifi haute vitesse, bureaux, salles de réunion) et leur confort après des journées chargées.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('malabo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'malabo' 
                          ? 'bg-gray-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MALABO (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('mongomo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'mongomo' 
                          ? 'bg-gray-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MONGOMO (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Malabo */}
                  {activeHotelTab === 'malabo' && (
                    <div className="space-y-16">
                      {/* Hilton Malabo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hilton Malabo" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-gray-700 text-white px-3 py-1 text-sm font-bold">
                                4* AFFAIRES
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hilton Malabo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Malabo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">💼</span>
                                <span>Centre d'affaires</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📡</span>
                                <span className="text-sm font-semibold">Wifi haute vitesse</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">3 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* d'affaires situé en plein centre-ville de Malabo, à proximité des institutions gouvernementales et des entreprises. Chambres spacieuses avec bureau ergonomique, chaise de bureau confortable, connexion wifi haute vitesse, climatisation, salle de bain privée. Centre d'affaires équipé (imprimante, scanner, photocopieuse), salles de réunion disponibles. Plusieurs restaurants dont un spécialisé en cuisine internationale, bar, piscine extérieure, salle de fitness. Service de blanchisserie express, room-service 24h/24. Localisation idéale pour les déplacements professionnels en centre-ville.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Mongomo */}
                  {activeHotelTab === 'mongomo' && (
                    <div className="space-y-16">
                      {/* Mongomo Business Hotel */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600" 
                              alt="Mongomo Business Hotel" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Mongomo Business Hotel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Mongomo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">💼</span>
                                <span>Hôtel d'affaires</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📡</span>
                                <span className="text-sm font-semibold">Wifi disponible</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚗</span>
                                <span className="text-sm font-semibold">Parking sécurisé</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel d'affaires fonctionnel situé au centre de Mongomo. Chambres confortables avec bureau, connexion wifi (variable selon la zone), climatisation, salle de bain privée. Restaurant servant une cuisine locale et internationale. Bar, salon. Service de blanchisserie. Parking sécurisé. Bien que moins luxueux que les hôtels de Malabo, cet établissement offre un confort satisfaisant et une localisation pratique pour les activités professionnelles à Mongomo. Le personnel est attentionné et l'hôtel est fréquenté par des voyageurs d'affaires locaux et internationaux.
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
                  <span className="text-2xl">💼</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Voyage d'Affaires</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-gray-700">$1,599</span>
                    <span className="text-xl line-through text-gray-500">$1,399</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Service professionnel complet</div>
                  <div className="mt-2 text-xs text-gray-700 bg-gray-50 p-2 rounded">
                    ✅ Inclus : Vols intérieurs, hébergements, organisation rendez-vous, interprétation, transferts
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-gray-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-gray-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-10">10 Janvier 2026</option>
                    <option value="2026-02-05">5 Février 2026</option>
                    <option value="2026-03-15">15 Mars 2026</option>
                    <option value="2026-04-20">20 Avril 2026</option>
                    <option value="2026-05-25">25 Mai 2026</option>
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2026-07-15">15 Juillet 2026</option>
                    <option value="2026-08-20">20 Août 2026</option>
                    <option value="2026-09-25">25 Septembre 2026</option>
                    <option value="2026-10-30">30 Octobre 2026</option>
                    <option value="2026-11-15">15 Novembre 2026</option>
                    <option value="2026-12-10">10 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année (circuit toujours disponible)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-gray-700 to-blue-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>SERVICE PROFESSIONNEL :</strong> Organisation sur mesure de vos rendez-vous
                  </p>
                  <p className="text-xs text-gray-300">* Programme adaptable selon vos objectifs spécifiques</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-gray-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-gray-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-gray-700 text-white py-4 font-semibold text-base mb-4 hover:bg-gray-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce voyage d'affaires ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts du voyage professionnel vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,1.0,12.0,4.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte voyage d'affaires miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Affaires et Découverte - 3 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit professionnel Malabo et Mongomo
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
                    <span>Vol intérieur Malabo-Mongomo aller-retour</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts aéroport/hôtel avec assistance</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Organisation de 4-6 rendez-vous professionnels</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Interprétation français/espagnol pour réunions</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements d'affaires (2 nuits)</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 petits-déjeuners</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 déjeuners d'affaires</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 dîners de travail</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visite culturelle Fang à Mongomo</span>
                    <span className="font-bold text-gray-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Support logistique professionnel</span>
                    <span className="font-bold text-gray-700">✓</span>
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
                    <span className="font-bold text-gray-700">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-gray-700">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-gray-700">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa affaires</span>
                    <span className="font-bold text-gray-700">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-gray-700">Recommandée</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tenue professionnelle</span>
                    <span className="font-bold text-gray-700">Recommandée pour rendez-vous</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + certificat vaccinal fièvre jaune + visa affaires
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-gray-200 p-4 mt-6 shadow-lg bg-gray-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-700">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Un voyage d'affaires parfaitement organisé. Les rendez-vous étaient pertinents, la logistique impeccable, et la découverte de la culture Fang a été un vrai plus pour comprendre le contexte local."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc L., entrepreneur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-gray-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-gray-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}