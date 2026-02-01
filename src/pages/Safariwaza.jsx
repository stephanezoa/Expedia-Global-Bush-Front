import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-1.5},${lat-1.5},${lng+1.5},${lat+1.5}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-1.5},${lat-1.5},${lng+1.5},${lat+1.5}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-yellow-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-yellow-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          title="Carte interactive Parc Waza"
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Safari</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-yellow-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-yellow-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Satellite
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.5,10.0,15.5,12.0&layer=mapnik&marker=11.0,14.0&marker=9.305,13.395"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Garoua-Waza"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/11.0/14.0" target="_blank" rel="noopener noreferrer">
            Agrandir la carte Waza
          </a>
        </div>
      </div>
      
      <div className="inline-flex flex-col gap-3 bg-gray-50 p-6 rounded mt-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></span>
          <span className="text-sm">Nuitée</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-700 border-2 border-gray-300"></span>
          <span className="text-sm">Garoua (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Parc National de Waza</span>
        </div>
      </div>
    </div>
  );
};

export default function Safariwaza() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('waza'); // Par défaut Waza

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  // Données des animaux du parc Waza
  const animals = [
    { name: 'Lions', icon: '🦁', count: '50+', description: 'Prises de vue garanties au point d\'eau' },
    { name: 'Éléphants', icon: '🐘', count: '500+', description: 'Troupeaux majestueux en migration' },
    { name: 'Girafes', icon: '🦒', count: '300+', description: 'Girafes peralta, espèce unique' },
    { name: 'Guépards', icon: '🐆', count: '20+', description: 'Observations rares mais possibles' },
    { name: 'Hippopotames', icon: '🦛', count: '100+', description: 'Dans les mares permanentes' },
    { name: 'Oiseaux', icon: '🦜', count: '379 espèces', description: 'Paradis pour l\'ornithologie' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero - Image Safari */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🦁</span>
          <span>G | SAFARI</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Safari au Parc National de Waza</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              L'un des plus beaux parcs d'Afrique de l'Ouest : lions, éléphants, girafes et 379 espèces d'oiseaux dans leur habitat naturel
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
            <span className="text-2xl">🦁</span>
            <span className="text-sm font-semibold">PARC NATIONAL DE WAZA</span>
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
                <span className="bg-yellow-700 text-white px-3 py-1 font-bold">SAFARI</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours de safari intensif</span>
                <button className="ml-auto border-2 border-yellow-700 text-yellow-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-yellow-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Safari exclusif dans le parc le plus réputé d'Afrique de l'Ouest</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-yellow-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU SAFARI
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-yellow-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('faune')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'faune' ? 'border-b-4 border-yellow-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  FAUNE DE WAZA
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-yellow-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce safari exclusif de 7 jours vous emmène au cœur du Parc National de Waza, classé Réserve de Biosphère par l'UNESCO et considéré comme l'un des plus beaux parcs d'Afrique de l'Ouest. Avec ses 170 000 hectares de savane sahélienne, Waza abrite une concentration exceptionnelle de faune sauvage : lions, éléphants, girafes, guépards, antilopes et plus de 379 espèces d'oiseaux. Ce circuit intensif vous offre 4 jours complets de safaris dans le parc, avec des sorties matinales et nocturnes pour maximiser vos observations.
                </p>

                {/* Section Points forts */}
                <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-800">Les Incontournables du Safari Waza</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-600 text-xl">🦁</span>
                        <div>
                          <h4 className="font-semibold">Safari Lions</h4>
                          <p className="text-sm text-gray-700">Observation garantie des lions au point d'eau</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-600 text-xl">🌅</span>
                        <div>
                          <h4 className="font-semibold">Safari Nocturne</h4>
                          <p className="text-sm text-gray-700">Expérience unique avec projecteurs</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-600 text-xl">🦒</span>
                        <div>
                          <h4 className="font-semibold">Girafes Peralta</h4>
                          <p className="text-sm text-gray-700">Espèce unique d'Afrique de l'Ouest</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-600 text-xl">📸</span>
                        <div>
                          <h4 className="font-semibold">Photographie</h4>
                          <p className="text-sm text-gray-700">Conseils de guides-photographes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Expériences incluses */}
                <div className="border-l-4 border-yellow-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Safari Incluses</h3>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">Toutes les activités incluses dans votre safari :</p>
                  <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-700 mt-1">•</span>
                      <span><strong>4 jours complets de safari</strong> dans le parc national de Waza</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-700 mt-1">•</span>
                      <span><strong>2 safaris nocturnes</strong> avec projecteurs pour observer la vie nocturne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-700 mt-1">•</span>
                      <span><strong>Safaris matinaux</strong> au lever du soleil (meilleur moment d'observation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-700 mt-1">•</span>
                      <span><strong>Guides spécialisés</strong> francophones experts de la faune de Waza</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-700 mt-1">•</span>
                      <span><strong>Véhicules 4x4 safari</strong> spécialement équipés avec toit ouvrant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-700 mt-1">•</span>
                      <span><strong>Session photo professionnelle</strong> avec conseils techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-700 mt-1">•</span>
                      <span><strong>Rencontre avec les gardes-parcs</strong> et découverte de leur travail</span>
                    </li>
                  </ul>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur Waza */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi Waza est unique ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Parc National de Waza est le seul parc d'Afrique de l'Ouest où l'on peut observer facilement les "Big Five" de la région : lions, éléphants, girafes, guépards et buffles. Avec une densité exceptionnelle d'animaux autour de ses points d'eau permanents, Waza offre des observations garanties même lors d'un court séjour.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">170 000 hectares</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">UNESCO</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">379 espèces oiseaux</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Safari nocturne</span>
                    </div>
                  </div>
                </div>

                {/* Section Circuits similaires */}
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Autres safaris au Cameroun</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Circuit 1 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400" 
                        alt="Safari Waza" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Safari Intensif Waza</h4>
                        <p className="text-sm text-gray-700 mb-2">5 jours concentrés sur la faune</p>
                        <p className="text-xs text-gray-500 mb-4">Circuit court pour observateurs</p>
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-700 font-bold text-xl">1 899 $</span>
                          <button className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                            EN SAVOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Circuit 2 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1550358864-518f202c02ba?w=400" 
                        alt="Safari Bénoué" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Parc de la Bénoué</h4>
                        <p className="text-sm text-gray-700 mb-2">6 jours de safari fluvial et terrestre</p>
                        <p className="text-xs text-gray-500 mb-4">Hippopotames et éléphants</p>
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-700 font-bold text-xl">2 199 $</span>
                          <button className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                            EN SAVOIR PLUS
                          </button>
                        </div>
                      </div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parc National de Waza : Joyau Sahélien</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Situé dans la région de l'Extrême-Nord du Cameroun, le Parc National de Waza s'étend sur 170 000 hectares de savane sahélienne. Créé en 1934 et classé Réserve de Biosphère par l'UNESCO en 1979, c'est l'un des écosystèmes les mieux préservés d'Afrique de l'Ouest.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Superficie</div>
                            <div className="text-yellow-700 font-bold">170 000 ha</div>
                          </div>
                          <div>
                            <div className="font-semibold">Création</div>
                            <div className="text-yellow-700 font-bold">1934</div>
                          </div>
                          <div>
                            <div className="font-semibold">Classement UNESCO</div>
                            <div className="text-yellow-700 font-bold">1979</div>
                          </div>
                          <div>
                            <div className="font-semibold">Meilleure période</div>
                            <div className="text-yellow-700 font-bold">Nov-Fév</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Animaux */}
                <div className="mb-10 bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🦁</span>
                    <span className="font-semibold text-lg">FAUNE DE WAZA</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🦁</div>
                      <div className="text-sm text-gray-600 mb-1">Lions</div>
                      <div className="text-3xl font-bold text-yellow-700">50+</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🐘</div>
                      <div className="text-sm text-gray-600 mb-1">Éléphants</div>
                      <div className="text-3xl font-bold text-yellow-700">500+</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🦒</div>
                      <div className="text-sm text-gray-600 mb-1">Girafes</div>
                      <div className="text-3xl font-bold text-yellow-700">300+</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    Le parc abrite également des guépards, hyènes, buffles, phacochères, babouins, et 379 espèces d'oiseaux dont des autruches, marabouts et vautours.
                  </p>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée du Parc de Waza</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=14.2,10.8,15.2,11.8&layer=mapnik&marker=11.0,14.0"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée Parc Waza"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=10/11.0/14.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte du parc
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Garoua */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-yellow-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À GAROUA</span>
                          <span className="text-sm text-gray-600">Porte d'entrée du safari</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Garoua, capitale de la région du Nord. Accueil par votre guide safari et transfert à l'hôtel. Briefing détaillé sur le déroulement du safari, présentation des consignes de sécurité et remise du matériel (jumelles, guide des animaux). Dîner d'accueil avec spécialités locales.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Waza */}
                  <div className="border-2 border-gray-300 overflow-hidden border-yellow-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-yellow-50 hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-yellow-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LE PARC DE WAZA</span>
                          <span className="text-sm text-gray-600">Premières observations en route</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-yellow-200">
                        <h4 className="text-xl font-semibold mb-3 text-yellow-700">Route à travers la savane</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en 4x4 spécialement équipé pour le safari. Route vers le Parc National de Waza à travers les paysages de savane sahélienne. Arrêts en cours de route pour observer les premiers animaux sauvages et les villages traditionnels. Arrivée au campement en bordure du parc en début d'après-midi.
                        </p>
                        <p className="text-justify mb-4">
                          Installation dans votre bungalow safari. Premier safari d'approche en fin d'après-midi : découverte des environs du camp et premières observations d'antilopes et d'oiseaux. Dîner au camp et préparation pour les jours de safari intensif.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Premier safari complet */}
                  <div className="border-2 border-gray-300 overflow-hidden border-yellow-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-yellow-50 hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-yellow-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SAFARI MATINAL AUX LIONS</span>
                          <span className="text-sm text-gray-600">Observation garantie au point d'eau</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-yellow-200">
                        <h4 className="text-xl font-semibold mb-3 text-yellow-700">Journée d'immersion complète</h4>
                        <p className="text-justify mb-4">
                          Réveil avant l'aube pour un safari matinal. Direction le point d'eau principal où les lions viennent régulièrement s'abreuver. Observation privilégiée des félins dans leur environnement naturel. Petit déjeuner safari en brousse.
                        </p>
                        <p className="text-justify mb-4">
                          Safari de la mi-journée à la recherche des éléphants et girafes. Pause déjeuner à l'ombre des acacias. Safari de l'après-midi consacré à l'observation des antilopes (cobes, damalisques, bubales) et des oiseaux. Retour au camp au coucher du soleil.
                        </p>
                        <p className="text-justify">
                          Soirée : dîner autour du feu de camp et partage des observations de la journée avec votre guide.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Safari éléphants et girafes */}
                  <div className="border-2 border-gray-300 overflow-hidden border-yellow-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-yellow-50 hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-yellow-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ÉLÉPHANTS & GIRAFES</span>
                          <span className="text-sm text-gray-600">Troupeaux majestueux en migration</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-yellow-200">
                        <h4 className="text-xl font-semibold mb-3 text-yellow-700">Journée des géants</h4>
                        <p className="text-justify mb-4">
                          Safari spécial éléphants : recherche des troupeaux en migration à travers la savane. Observation des comportements sociaux, des bébés éléphants protégés par les femelles. Approche prudente pour des photos exceptionnelles.
                        </p>
                        <p className="text-justify mb-4">
                          Après-midi consacré aux girafes Peralta, espèce unique d'Afrique de l'Ouest. Observation de ces animaux gracieux se nourrissant dans les acacias. Technique photographique : comment capturer la beauté des girafes dans leur environnement.
                        </p>
                        <p className="text-justify">
                          En soirée : premier safari nocturne avec projecteurs pour découvrir la vie sauvage après la tombée de la nuit. Observation des prédateurs nocturnes et des animaux timides.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Safari guépards et faune diversifiée */}
                  <div className="border-2 border-gray-300 overflow-hidden border-yellow-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-yellow-50 hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-yellow-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">GUÉPARDS & PRÉDATEURS</span>
                          <span className="text-sm text-gray-600">À la recherche des félins rares</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-yellow-200">
                        <h4 className="text-xl font-semibold mb-3 text-yellow-700">Journée des prédateurs</h4>
                        <p className="text-justify mb-4">
                          Safari matinal dédié à la recherche des guépards, les félins les plus rapides du monde. Patience et discrétion sont de mise pour ces observations rares. Possibilité de voir des hyènes et des chacals.
                        </p>
                        <p className="text-justify mb-4">
                          Safari ornithologique l'après-midi : avec 379 espèces d'oiseaux recensées, Waza est un paradis pour les amateurs. Observation d'autruches, marabouts, vautours, et nombreux rapaces. Conseils de photographie animalière avec votre guide expert.
                        </p>
                        <p className="text-justify">
                          Deuxième safari nocturne pour parfaire vos observations nocturnes. Dîner spécial "safari" avec partage des plus belles photos de la journée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Dernier safari et retour à Garoua */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-yellow-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DERNIER SAFARI ET RETOUR</span>
                          <span className="text-sm text-gray-600">Dernières observations avant le départ</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier safari matinal pour dire au revoir aux animaux de Waza. Observation finale au point d'eau avec probablement une dernière vue des lions. Retour au camp pour le petit déjeuner puis départ vers Garoua.
                        </p>
                        <p className="text-justify mb-4">
                          Arrivée à Garoua en fin d'après-midi. Temps libre pour se reposer ou visiter le marché artisanal de Garoua. Dîner d'adieu avec projection des meilleures photos du safari.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-yellow-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport de Garoua pour votre vol de retour, emportant avec vous des souvenirs inoubliables des lions, éléphants, girafes et de toute la faune spectaculaire du Parc National de Waza.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faune' && (
              <div>
                {/* Section dédiée à la faune */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-yellow-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🦁</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-yellow-800">La Faune du Parc National de Waza</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600" 
                        alt="Faune de Waza" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Un écosystème exceptionnel</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Le Parc National de Waza abrite l'une des plus grandes concentrations de faune sauvage d'Afrique de l'Ouest. Classé Réserve de Biosphère par l'UNESCO, ce parc de 170 000 hectares de savane sahélienne est le sanctuaire de nombreuses espèces menacées.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Grâce à ses points d'eau permanents, Waza permet des observations garanties même pendant la saison sèche, lorsque les animaux se concentrent autour des mares.
                      </p>
                    </div>
                  </div>

                  {/* Les animaux stars de Waza */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6 text-center">Les Stars du Parc de Waza</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {animals.map((animal, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
                          <div className="text-3xl mb-3">{animal.icon}</div>
                          <h5 className="font-semibold mb-2">{animal.name}</h5>
                          <div className="text-xl font-bold text-yellow-700 mb-2">{animal.count}</div>
                          <p className="text-sm text-gray-700">{animal.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Les points d'eau */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6">Les Points d'Eau : Cœurs du Safari</h4>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400" 
                            alt="Point d'eau principal" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Point d'Eau Principal</h5>
                          <p className="text-gray-700 mb-2">Le meilleur endroit pour observer les lions qui viennent s'y abreuver régulièrement. Plateforme d'observation aménagée pour des vues imprenables sans déranger les animaux.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Lions garantis</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Plateforme</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Photos</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1550358864-518f202c02ba?w=400" 
                            alt="Mare aux éléphants" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Mare aux Éléphants</h5>
                          <p className="text-gray-700 mb-2">Les éléphants viennent s'y baigner et boire en troupeaux familiaux. Observations spectaculaires des comportements sociaux et des bains de boue.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Troupeaux</span>
                            <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">Bains</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Familles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conseils d'observation */}
                  <div className="mb-10 bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-6 text-yellow-800">Conseils pour un Safari Réussi</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3">📸 Photographie</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                          <li>Utilisez un objectif 200-400mm minimum</li>
                          <li>Matins et soirs : meilleure lumière</li>
                          <li>Patience : attendez le bon moment</li>
                          <li>Respectez les distances de sécurité</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">🦁 Observation</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                          <li>Silence absolu pendant les approches</li>
                          <li>Vêtements neutres (beige, kaki, vert)</li>
                          <li>Jumelles 10x42 recommandées</li>
                          <li>Suivez toujours les consignes du guide</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-center mt-6 text-gray-700 text-sm">
                      Notre équipe de guides experts vous accompagnera pour maximiser vos observations et garantir votre sécurité.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hébergements */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">CAMPEMENTS SAFARI</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergement en Pleine Nature</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-yellow-700 w-16 md:w-32"></span>
                      <span className="text-yellow-700 text-2xl">⛺</span>
                      <span className="h-px bg-yellow-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour une immersion totale dans la nature, vous séjournerez dans des campements safari spécialement conçus pour les observateurs de faune. Ces hébergements offrent tout le confort nécessaire tout en vous plaçant au cœur de l'action, à quelques minutes seulement des meilleurs points d'observation.
                    </p>
                  </div>

                  {/* Navigation des hébergements */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('waza')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'waza' 
                          ? 'bg-yellow-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPEMENT WAZA (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('garoua')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'garoua' 
                          ? 'bg-yellow-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      GAROUA (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Waza */}
                  {activeHotelTab === 'waza' && (
                    <div className="space-y-16">
                      {/* Campement Waza Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                                alt="Campement Waza Lodge" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-yellow-700 text-white px-3 py-1 text-sm font-bold">
                                IMMERSION TOTALE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Waza Safari Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              En bordure du Parc National de Waza, Extrême-Nord, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">⛺</span>
                                <span>Bungalows Safari</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦁</span>
                                <span className="text-sm font-semibold">Vue sur la savane</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé à seulement 2 km de l'entrée du parc, le Waza Safari Lodge offre l'immersion parfaite dans l'environnement sauvage. Les bungalows en matériaux naturels sont équipés de lits confortables, de moustiquaires et de salle de bain privative avec eau chaude solaire. Chaque bungalow dispose d'une terrasse privée avec vue directe sur la savane. Le restaurant propose une cuisine locale et internationale avec produits frais. Le bar est le lieu de rendez-vous des soirées safari où l'on partage les observations de la journée autour du feu de camp. Organisation des safaris directement depuis le lodge.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Bord de parc</span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Écologique</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Vue savane</span>
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Feu de camp</span>
                            </div>
                          </div>
                        </div>

                        {/* Carte et commodités */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={11.0} 
                              lng={14.0} 
                              height="300px" 
                              showControls={true}
                            />
                            <p className="text-xs text-gray-600 mt-2">
                              Situé à 2 km de l'entrée principale du parc, au cœur de la zone d'observation.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Commodités du Campement</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>⛺</span>
                                  <span>Bungalows confortables</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🛀</span>
                                  <span>Salle de bain privée</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🌡️</span>
                                  <span>Eau chaude solaire</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🍽️</span>
                                  <span>Restaurant panoramique</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>📶</span>
                                  <span>WiFi limité</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🔋</span>
                                  <span>Électricité solaire</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🦁</span>
                                  <span>Point d'observation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🚗</span>
                                  <span>Parking sécurisé</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>👨‍🍳</span>
                                  <span>Cuisine locale</span>
                                </div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Votre Séjour au Lodge</h5>
                            <p className="text-sm text-gray-700 mb-4">
                              Au Waza Safari Lodge, vous vivrez au rythme des animaux. Réveils aux chants des oiseaux, petit déjeuner avec vue sur la savane, départs pour les safaris directement depuis le camp. Les soirées se passent autour du feu de camp avec partage des observations et projection des photos.
                            </p>
                            <div className="bg-yellow-50 p-4 rounded">
                              <p className="text-sm font-semibold mb-2">Inclus dans votre séjour :</p>
                              <ul className="list-disc list-inside text-sm text-gray-700">
                                <li>Petits déjeuners complets avant les safaris</li>
                                <li>Pique-niques safari préparés par le lodge</li>
                                <li>Dîners trois services avec produits locaux</li>
                                <li>Eau minérale à volonté durant le séjour</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Garoua */}
                  {activeHotelTab === 'garoua' && (
                    <div className="space-y-16">
                      {/* Hôtel Saagal */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel Saagal Garoua" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Saagal</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenue des Peuls, BP 235, Garoua, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏨</span>
                                <span>Confort urbain</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel confortable pour vos nuits à Garoua avant et après le safari. Chambres climatisées, piscine pour se rafraîchir, restaurant de cuisine locale et internationale. Emplacement idéal pour vos transferts à l'aéroport.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Safari Waza</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">À partir de : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-gray-400 line-through">$2,599</span>
                    <span className="text-4xl font-bold text-yellow-700">$2,399</span>
                    <button className="text-sm text-gray-500 hover:text-gray-700">ⓘ</button>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - 4 nuits de safari incluses</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vols intérieurs, tous transferts, hébergement, safaris, guides, repas complets
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-yellow-700"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                {/* Sélecteur de date - NOV-FÉV comme indiqué */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Date de Départ (NOV-FÉV)</label>
                  <select 
                    value={selectedDeparture} 
                    onChange={(e) => setSelectedDeparture(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-yellow-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-11-15">15 Novembre 2026 (Début saison)</option>
                    <option value="2026-12-10">10 Décembre 2026 (Meilleure période)</option>
                    <option value="2027-01-12">12 Janvier 2027 (Climat optimal)</option>
                    <option value="2027-02-08">8 Février 2027 (Fin de saison idéale)</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période d'observation : Novembre à Février</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-yellow-700 to-amber-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>OFFRE SAFARI :</strong> Jumelles professionnelles offertes pour toute réservation avant le 30 septembre 2026.
                  </p>
                  <p className="text-xs text-gray-300">* Valable pour les départs de novembre 2026 à février 2027</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-yellow-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-yellow-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-yellow-700 text-white py-4 font-semibold text-base mb-4 hover:bg-yellow-600 transition-colors shadow-md">
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
                    Nos experts safari vous conseillent sur l'équipement et les meilleurs moments d'observation.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONSEILS SAFARI
                  </button>
                </div>
              </div>

              {/* Carte miniature Waza */}
              <div className="border-2 border-gray-300 p-4 shadow-lg">
                <div className="relative w-full h-64 overflow-hidden rounded">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.2,10.8,15.2,11.8&layer=mapnik&marker=11.0,14.0"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Waza miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Parc National de Waza
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Localisation du campement safari dans le parc
                </p>
              </div>

              {/* Widget météo Waza */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Météo à Waza (NOV-FÉV)</span>
                </h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">28°C</div>
                  <div className="text-sm text-gray-700 mb-1">Température moyenne diurne</div>
                  <div className="text-xs text-gray-600">Nuits fraîches : 15°C</div>
                  <div className="mt-3 text-sm">
                    <span className="font-semibold">Saison sèche :</span> Pas de pluie
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Meilleure période pour les observations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-yellow-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-yellow-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Conseils Safari</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}