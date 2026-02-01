import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive pour les différentes régions
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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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

// Composant Carte de l'itinéraire complet
const RouteMap = () => {
  const [mapType, setMapType] = useState('roadmap');
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-center text-lg">Itinéraire Complet à Travers le Cameroun</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-amber-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,1.5,16.0,13.0&layer=mapnik&marker=4.051,9.767&marker=5.478,10.417&marker=3.848,11.502&marker=10.591,14.326&marker=9.305,13.395"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire complet Cameroun"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/5.5/12.0" target="_blank" rel="noopener noreferrer">
            Agrandir la carte du Cameroun
          </a>
        </div>
      </div>
      
      <div className="inline-flex flex-col gap-3 bg-gray-50 p-6 rounded mt-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></span>
          <span className="text-sm">Nuitée</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-800 border-2 border-gray-300"></span>
          <span className="text-sm">Douala (arrivée)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ouest (Bafoussam)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Nord (Garoua)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Extrême-Nord (Maroua)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Sud (Kribi)</span>
        </div>
      </div>
    </div>
  );
};

export default function Decouvertecompletecameroun() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('douala');
  const [activeRegionTab, setActiveRegionTab] = useState('ouest');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero - Carte du Cameroun */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Découverte Complète du Cameroun</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              L'Afrique en miniature : un voyage épique à travers les 10 régions du Cameroun, de la forêt équatoriale aux savanes sahéliennes
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et régions */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">21</div>
            <div className="text-xs mt-1">Jours</div>
          </div>
          <div className="bg-black/90 text-white px-4 py-4 flex items-center backdrop-blur-sm">
            <div className="text-5xl font-bold">/</div>
          </div>
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">10</div>
            <div className="text-xs mt-1">Régions</div>
          </div>
        </div>
        
        {/* Indicateur de destination */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🇨🇲</span>
            <span className="text-sm font-semibold">AFRIQUE EN MINIATURE</span>
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
                <span className="font-semibold">CIRCUIT COMPLET:</span>
                <span className="bg-amber-800 text-white px-3 py-1 font-bold">TOUT LE CAMEROUN</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">21 jours à travers les 10 régions</span>
                <button className="ml-auto border-2 border-amber-800 text-amber-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-amber-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Voyage exhaustif couvrant toute la diversité camerounaise</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('regions')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'regions' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  RÉGIONS DU CAMEROUN
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-amber-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit exceptionnel de 21 jours vous offre la découverte la plus complète possible du Cameroun, véritable "Afrique en miniature". Vous parcourrez les 10 régions du pays, découvrant toute sa diversité géographique, culturelle et naturelle. Des plages de Kribi aux montagnes de l'Ouest, des parcs nationaux du Nord aux paysages lunaires de l'Extrême-Nord, des forêts tropicales du Sud aux métropoles modernes, ce voyage vous donnera une vision exhaustive de ce pays fascinant.
                </p>

                {/* Section Points forts */}
                <div className="bg-amber-50 border-l-4 border-amber-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-800">Les Incontournables du Cameroun</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-amber-600 text-xl">🏔️</span>
                        <div>
                          <h4 className="font-semibold">Monts de l'Ouest</h4>
                          <p className="text-sm text-gray-700">Bamboutos (2740m) et paysages en terrasses</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-amber-600 text-xl">🦁</span>
                        <div>
                          <h4 className="font-semibold">Parcs Nationaux</h4>
                          <p className="text-sm text-gray-700">Waza, Bouba Ndjida, parc de la Bénoué</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-amber-600 text-xl">🏖️</span>
                        <div>
                          <h4 className="font-semibold">Littoral Atlantique</h4>
                          <p className="text-sm text-gray-700">Plages de Kribi et chutes de la Lobé</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-amber-600 text-xl">👑</span>
                        <div>
                          <h4 className="font-semibold">Cultures Traditionnelles</h4>
                          <p className="text-sm text-gray-700">Chefferies Bamiléké, peuples du Nord</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Expériences par région */}
                <div className="border-l-4 border-amber-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences par Région</h3>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">Un aperçu de ce que vous découvrirez dans chaque région :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Littoral :</strong> Douala, Kribi, plages paradisiaques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Ouest :</strong> Montagnes, chefferies, paysages en terrasses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Nord :</strong> Parcs nationaux, savanes, faune africaine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Extrême-Nord :</strong> Paysages sahéliens, lac Tchad, culture peule</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Adamaoua :</strong> Plateaux, ranch de Ngaoundaba</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Est :</strong> Forêt équatoriale, pygmées Baka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Sud :</strong> Réserve du Dja, forêt dense</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-800 mt-1">•</span>
                        <span><strong>Centre :</strong> Yaoundé, Mfou, culture Beti</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la diversité */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Cameroun est unique ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Cameroun concentre sur un seul territoire toute la diversité africaine : forêt équatoriale, montagnes, savanes, désert, littoral, volcans, lacs, et une mosaïque de plus de 250 ethnies. C'est le seul pays d'Afrique où l'on parle à la fois anglais et français officiellement, avec plus de 200 langues locales.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Forêt équatoriale</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Savanes</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Montagnes</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Désert</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">250 ethnies</span>
                    </div>
                  </div>
                </div>

                {/* Section Circuits régionaux */}
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Circuits Régionaux Complémentaires</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Circuit 1 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" 
                        alt="Circuit Ouest" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Montagnes de l'Ouest</h4>
                        <p className="text-sm text-gray-700 mb-2">8 jours dans les hauts plateaux</p>
                        <p className="text-xs text-gray-500 mb-4">Culture Bamiléké et randonnées</p>
                        <div className="flex justify-between items-center">
                          <span className="text-amber-800 font-bold text-xl">1 899 $</span>
                          <button className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                            EN SAVOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Circuit 2 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" 
                        alt="Circuit Littoral" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Littoral Camerounais</h4>
                        <p className="text-sm text-gray-700 mb-2">Kribi, Douala et Limbé en 7 jours</p>
                        <p className="text-xs text-gray-500 mb-4">Plages et culture côtière</p>
                        <div className="flex justify-between items-center">
                          <span className="text-amber-800 font-bold text-xl">1 699 $</span>
                          <button className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                            EN SAVOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Carte complète */}
                <div className="mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-1">
                      <RouteMap />
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-4 text-center text-lg">Le Cameroun : Afrique en Miniature</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Avec une superficie de 475 442 km², le Cameroun s'étend du golfe de Guinée au lac Tchad. Le pays présente tous les types de climat africain : équatorial au sud, tropical au centre, sahélien au nord. Altitudes variant de 0 à 4 070m (mont Cameroun).
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Superficie</div>
                            <div className="text-amber-800 font-bold">475 442 km²</div>
                          </div>
                          <div>
                            <div className="font-semibold">Point culminant</div>
                            <div className="text-amber-800 font-bold">4 070m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nombre de régions</div>
                            <div className="text-amber-800 font-bold">10</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nombre d'ethnies</div>
                            <div className="text-amber-800 font-bold">250+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">CHIFFRES CLÉS DU VOYAGE</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Régions visitées</div>
                      <div className="text-3xl font-bold text-amber-800">10/10</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Kilomètres parcourus</div>
                      <div className="text-3xl font-bold text-amber-800">3 500km</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Parks nationaux</div>
                      <div className="text-3xl font-bold text-amber-800">5</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Ethnies rencontrées</div>
                      <div className="text-3xl font-bold text-amber-800">15+</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4 text-center">
                    Un voyage exhaustif qui vous permettra de découvrir toute la richesse et la diversité du Cameroun en un seul circuit.
                  </p>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée du Cameroun</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,1.5,16.0,13.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée Cameroun"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/5.5/12.0" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte complète
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Douala */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À DOUALA</span>
                          <span className="text-sm text-gray-600">Porte d'entrée du Cameroun</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Douala, capitale économique du Cameroun. Accueil par votre guide et transfert à l'hôtel. Première découverte de la ville avec visite du boulevard du 20 mai et du marché artisanal. Dîner d'accueil avec spécialités de fruits de mer.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2-3 - Route vers l'Ouest */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2-3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS L'OUEST CAMEROUNAIS</span>
                          <span className="text-sm text-gray-600">Bafoussam et les hauts plateaux</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Route vers Bafoussam, capitale de la région de l'Ouest. Découverte des paysages de collines cultivées en terrasses. Visite de la chefferie de Bandjoun, classée UNESCO. Deux jours consacrés à la culture Bamiléké avec spectacles de danses masquées et découverte de l'artisanat local.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4-5 - Région du Nord */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4-5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RÉGION DU NORD</span>
                          <span className="text-sm text-gray-600">Garoua et parc de la Bénoué</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Découverte de la savane</h4>
                        <p className="text-justify mb-4">
                          Vol vers Garoua, porte d'entrée du Nord Cameroun. Safari dans le parc national de la Bénoué à la recherche des éléphants, hippopotames et antilopes. Rencontre avec les éleveurs Peuls et découverte de leur mode de vie pastoral. Nuit en campement au bord de la rivière Bénoué.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6-7 - Extrême-Nord */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6-7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXTRÊME-NORD</span>
                          <span className="text-sm text-gray-600">Maroua et parc national de Waza</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Aux portes du désert</h4>
                        <p className="text-justify mb-4">
                          Route vers Maroua, capitale de l'Extrême-Nord. Excursion au parc national de Waza, l'un des plus beaux parcs d'Afrique de l'Ouest. Observation des girafes, lions, éléphants et nombreuses espèces d'oiseaux. Visite des marchés colorés de Maroua et découverte de l'architecture en banco (terre).
                        </p>
                        <p className="text-justify mb-4">
                          Excursion aux Kapsikis, paysages lunaires et villages fortifiés. Rencontre avec les populations Mafa et leurs habitations troglodytes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8-10 - Région de l'Adamaoua */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8-10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ADAMAOUA</span>
                          <span className="text-sm text-gray-600">Ngaoundéré et ranch de Ngaoundaba</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Les hauts plateaux centraux</h4>
                        <p className="text-justify mb-4">
                          Route vers Ngaoundéré, ville stratégique au cœur du Cameroun. Séjour au ranch de Ngaoundaba, domaine de 17 000 hectares au bord d'un lac de cratère. Randonnées à cheval, observation d'oiseaux, pêche. Visite des chutes de Tello et rencontre avec les éleveurs Bororo.
                        </p>
                        <p className="text-justify mb-4">
                          Trajet en train mythique (l'Transcamerounais) de Ngaoundéré à Yaoundé, traversant des paysages spectaculaires.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 11-13 - Région de l'Est */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11-13
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RÉGION DE L'EST</span>
                          <span className="text-sm text-gray-600">Forêt équatoriale et pygmées Baka</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Au cœur de la forêt</h4>
                        <p className="text-justify mb-4">
                          Route vers Bertoua, porte d'entrée de la forêt équatoriale. Immersion dans le monde des pygmées Baka dans la réserve du Dja. Initiation à la vie en forêt : chasse traditionnelle, cueillette, médecine par les plantes. Safari nocturne à la recherche des éléphants de forêt et des gorilles.
                        </p>
                        <p className="text-justify mb-4">
                          Navigation sur la rivière Dja et découverte de la biodiversité exceptionnelle de cette région classée au patrimoine mondial de l'UNESCO.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 14-16 - Région du Sud */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(14)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          14-16
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RÉGION DU SUD</span>
                          <span className="text-sm text-gray-600">Ebolowa et forêt tropicale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 14 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 14 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Forêt tropicale humide</h4>
                        <p className="text-justify mb-4">
                          Arrivée à Ebolowa, capitale de la région du Sud. Visite des plantations de cacao et dégustation de chocolat local. Randonnée dans la forêt tropicale humide avec guide spécialisé. Observation des primates et de la flore exceptionnelle.
                        </p>
                        <p className="text-justify mb-4">
                          Visite du lac Ossa, sanctuaire des lamantins. Rencontre avec les communautés locales et découverte de leurs traditions.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 17-18 - Yaoundé et région du Centre */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(17)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          17-18
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">YAOUNDÉ ET CENTRE</span>
                          <span className="text-sm text-gray-600">Capitale politique et culture Beti</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 17 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 17 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à Yaoundé, capitale politique du Cameroun. Visite du musée national, du monument de la réunification, du marché central de Mfoundi. Excursion au parc de la Mefou pour observer les primates sauvés du trafic. Découverte de la culture Beti avec spectacle de Bikutsi (danse traditionnelle).
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 19-20 - Littoral et Kribi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-amber-200">
                    <button 
                      onClick={() => toggleDay(19)}
                      className="w-full flex items-center justify-between p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          19-20
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LITTORAL ATLANTIQUE</span>
                          <span className="text-sm text-gray-600">Kribi et plages paradisiaques</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 19 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 19 && (
                      <div className="p-6 bg-white border-t-2 border-amber-200">
                        <h4 className="text-xl font-semibold mb-3 text-amber-800">Détente balnéaire finale</h4>
                        <p className="text-justify mb-4">
                          Route vers Kribi, joyau du littoral camerounais. Découverte des chutes de la Lobé qui se jettent directement dans l'océan Atlantique. Temps libre sur les plages de sable blanc bordées de cocotiers. Dégustation de fruits de mer frais dans les restaurants en bord de plage.
                        </p>
                        <p className="text-justify mb-4">
                          Excursion à Grand Batanga pour découvrir les plages sauvages et les villages de pêcheurs. Dîner d'adieu sur la plage avec feu de camp.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 21 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(21)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-amber-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          21
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 21 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 21 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport de Douala pour votre vol de retour, emportant avec vous les souvenirs inoubliables de ce voyage complet à travers les 10 régions du Cameroun, pays d'une richesse et d'une diversité exceptionnelles.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'regions' && (
              <div>
                {/* Section dédiée aux régions */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-amber-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🗺️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-amber-800">Les 10 Régions du Cameroun</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Le Cameroun est divisé en 10 régions, chacune avec ses spécificités géographiques, climatiques, culturelles et ethniques. Cette diversité fait du Cameroun un pays unique, souvent appelé "Afrique en miniature".
                  </p>

                  {/* Navigation des régions */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <button 
                      onClick={() => setActiveRegionTab('ouest')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'ouest' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      OUEST
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('littoral')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'littoral' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      LITTORAL
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('nord')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'nord' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      NORD
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('extremenord')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'extremenord' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      EXTRÊME-NORD
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('adamaoua')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'adamaoua' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      ADAMAOUA
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('est')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'est' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      EST
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('sud')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'sud' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      SUD
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('centre')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'centre' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      CENTRE
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('sudouest')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'sudouest' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      SUD-OUEST
                    </button>
                    <button 
                      onClick={() => setActiveRegionTab('nordouest')}
                      className={`px-4 py-2 text-sm font-semibold ${activeRegionTab === 'nordouest' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      NORD-OUEST
                    </button>
                  </div>

                  {/* Contenu des régions */}
                  {activeRegionTab === 'ouest' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-green-600">Région de l'Ouest</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Capitale :</strong> Bafoussam<br/>
                            <strong>Superficie :</strong> 13 892 km²<br/>
                            <strong>Population :</strong> 2,5 millions<br/>
                            <strong>Climat :</strong> Tropical d'altitude (fraîcheur permanente)
                          </p>
                          <p className="text-gray-700">
                            Région montagneuse avec des altitudes allant de 1000 à 2740m. Paysages de collines cultivées en terrasses. Berceau de la culture Bamiléké, réputée pour ses chefferies traditionnelles, son artisanat (tissage, perles, forge) et ses danses masquées.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={5.478} 
                            lng={10.417} 
                            height="300px" 
                            showControls={true}
                            region="Ouest Cameroun"
                          />
                        </div>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h5 className="font-semibold mb-3">Points d'intérêt :</h5>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          <li>Chefferie de Bandjoun (UNESCO)</li>
                          <li>Monts Bamboutos (2740m)</li>
                          <li>Lac de cratère du Mont Manengouba</li>
                          <li>Marchés colorés de Bafoussam et Dschang</li>
                          <li>Chutes de la Métché</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeRegionTab === 'littoral' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-blue-600">Région du Littoral</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Capitale :</strong> Douala<br/>
                            <strong>Superficie :</strong> 20 248 km²<br/>
                            <strong>Population :</strong> 3,5 millions<br/>
                            <strong>Climat :</strong> Équatorial (chaud et humide)
                          </p>
                          <p className="text-gray-700">
                            Région côtière avec 400 km de littoral sur l'océan Atlantique. Zone économique la plus importante du pays avec le port de Douala. Plages de sable fin, mangroves, et stations balnéaires comme Kribi et Limbé.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={4.051} 
                            lng={9.767} 
                            height="300px" 
                            showControls={true}
                            region="Littoral Cameroun"
                          />
                        </div>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h5 className="font-semibold mb-3">Points d'intérêt :</h5>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          <li>Plages de Kribi et chutes de la Lobé</li>
                          <li>Mont Cameroun (4070m) à Limbé</li>
                          <li>Port de Douala et son pont</li>
                          <li>Jardins botaniques de Limbé</li>
                          <li>Ile de Manoka</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeRegionTab === 'nord' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-yellow-600">Région du Nord</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Capitale :</strong> Garoua<br/>
                            <strong>Superficie :</strong> 66 090 km²<br/>
                            <strong>Population :</strong> 2,5 millions<br/>
                            <strong>Climat :</strong> Tropical sec (savane)
                          </p>
                          <p className="text-gray-700">
                            Vaste région de savanes traversée par la Bénoué. Zone d'élevage et d'agriculture. Habitat de la grande faune africaine dans les parcs nationaux. Culture peule dominante avec traditions pastorales.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={9.305} 
                            lng={13.395} 
                            height="300px" 
                            showControls={true}
                            region="Nord Cameroun"
                          />
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-6 rounded-lg">
                        <h5 className="font-semibold mb-3">Points d'intérêt :</h5>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          <li>Parc national de la Bénoué</li>
                          <li>Réserve de biosphère du Djérem</li>
                          <li>Marchés aux bestiaux de Garoua</li>
                          <li>Vallée de la Bénoué</li>
                          <li>Artisanat en cuir et bronze</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeRegionTab === 'extremenord' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-red-600">Région de l'Extrême-Nord</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Capitale :</strong> Maroua<br/>
                            <strong>Superficie :</strong> 34 263 km²<br/>
                            <strong>Population :</strong> 3,5 millions<br/>
                            <strong>Climat :</strong> Sahélien (sec et chaud)
                          </p>
                          <p className="text-gray-700">
                            Région frontalière avec le Tchad et le Nigeria. Paysages désertiques, massifs montagneux (Mandara) et lac Tchad. Mosaïque ethnique exceptionnelle : Peuls, Mafa, Kapsiki, Massa, etc. Architecture en terre (banco) caractéristique.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={10.591} 
                            lng={14.326} 
                            height="300px" 
                            showControls={true}
                            region="Extrême-Nord Cameroun"
                          />
                        </div>
                      </div>
                      <div className="bg-red-50 p-6 rounded-lg">
                        <h5 className="font-semibold mb-3">Points d'intérêt :</h5>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          <li>Parc national de Waza (UNESCO)</li>
                          <li>Massif des Kapsikis (paysages lunaires)</li>
                          <li>Lac Tchad et ses îles flottantes</li>
                          <li>Marchés colorés de Maroua</li>
                          <li>Chefferies traditionnelles en terre</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Les autres régions suivraient le même pattern... */}

                  {/* Carte synthétique des régions */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte des 10 Régions du Cameroun</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,1.5,16.0,13.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte régions Cameroun"
                      ></iframe>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-green-600 mx-auto mb-2"></div>
                        <div className="text-xs">Ouest</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mx-auto mb-2"></div>
                        <div className="text-xs">Littoral</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-600 mx-auto mb-2"></div>
                        <div className="text-xs">Nord</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-red-600 mx-auto mb-2"></div>
                        <div className="text-xs">Extrême-Nord</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-purple-600 mx-auto mb-2"></div>
                        <div className="text-xs">Adamaoua</div>
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT À TRAVERS LE PAYS</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels dans les 10 Régions</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-amber-800 w-16 md:w-32"></span>
                      <span className="text-amber-800 text-2xl">🏨</span>
                      <span className="h-px bg-amber-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Durant ce voyage complet, vous séjournerez dans des hébergements soigneusement sélectionnés pour chaque région, alliant confort, authenticité et immersion locale. De l'hôtel de ville au campement en brousse, chaque hébergement reflète le caractère unique de sa région.
                    </p>
                  </div>

                  {/* Navigation des villes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('douala')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'douala' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      DOUALA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bafoussam')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bafoussam' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BAFOUSSAM (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('garoua')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'garoua' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      GAROUA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('maroua')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'maroua' 
                          ? 'bg-amber-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MAROUA (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hôtels - Douala */}
                  {activeHotelTab === 'douala' && (
                    <div className="space-y-16">
                      {/* Hôtel Akwa Palace */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Akwa Palace Douala" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-amber-800 text-white px-3 py-1 text-sm font-bold">
                                ARRIVÉE AU CAMEROUN
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Akwa Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Boulevard de la Liberté, BP 100, Douala, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">✈️</span>
                                <span>Proche aéroport</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant international</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé au cœur du quartier des affaires de Douala, l'Hôtel Akwa Palace offre un confort moderne après votre vol international. Les chambres climatisées sont équipées de tous les équipements nécessaires. L'hôtel dispose d'une piscine extérieure, d'un spa, de plusieurs restaurants et d'un centre d'affaires. Emplacement idéal pour vos premiers jours d'acclimatation au Cameroun.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Centre-ville</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Piscine</span>
                              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Spa</span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Confort</span>
                            </div>
                          </div>
                        </div>

                        {/* Carte et commodités */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={4.051} 
                              lng={9.767} 
                              height="300px" 
                              showControls={true}
                            />
                            <p className="text-xs text-gray-600 mt-2">
                              Situé dans le quartier des affaires de Douala, à 20 minutes de l'aéroport.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Commodités</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🏊</span>
                                  <span>Piscine Extérieure</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🍽️</span>
                                  <span>3 Restaurants</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>💼</span>
                                  <span>Centre d'affaires</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>💆</span>
                                  <span>Spa & Massages</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🚗</span>
                                  <span>Navette Aéroport</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>📶</span>
                                  <span>WiFi Haut Débit</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🧳</span>
                                  <span>Service de Bagagerie</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🚗</span>
                                  <span>Parking Sécurisé</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>👔</span>
                                  <span>Service de Guide</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Bafoussam */}
                  {activeHotelTab === 'bafoussam' && (
                    <div className="space-y-16">
                      {/* Hôtel Altitel */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel Altitel Bafoussam" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Altitel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Carrefour Ndiengdam, BP 145, Bafoussam, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏔️</span>
                                <span>Vue montagne</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍲</span>
                                <span className="text-sm font-semibold">Cuisine locale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé sur les hauteurs de Bafoussam avec vue panoramique sur les montagnes environnantes. Hôtel confortable avec ambiance chaleureuse. Restaurant proposant des spécialités bamiléké. Organisation facile des excursions vers les chefferies et sites naturels de la région.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Garoua */}
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
                                <span className="text-lg">🦁</span>
                                <span>Base safari</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏜️</span>
                                <span className="text-sm font-semibold">Ambiance sahélienne</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel de charme avec architecture inspirée des cases peules. Base idéale pour les safaris dans le parc de la Bénoué. Chambres climatisées, piscine pour se rafraîchir après les excursions. Restaurant spécialisé en viandes grillées.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Maroua */}
                  {activeHotelTab === 'maroua' && (
                    <div className="space-y-16">
                      {/* Hôtel Le Rayon Vert */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel Le Rayon Vert Maroua" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Le Rayon Vert</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Quartier Domayo, BP 340, Maroua, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏜️</span>
                                <span>Oasis verte</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌴</span>
                                <span className="text-sm font-semibold">Jardin luxuriant</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Véritable oasis dans l'environnement aride de l'Extrême-Nord. Hôtel entouré d'un jardin tropical luxuriant avec piscine. Architecture inspirée des cases traditionnelles en banco avec modernité. Base pour les excursions vers le parc de Waza et les monts Mandara.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Voyage Complet</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">À partir de : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-gray-400 line-through">$8,999</span>
                    <span className="text-4xl font-bold text-amber-800">$7,999</span>
                    <button className="text-sm text-gray-500 hover:text-gray-700">ⓘ</button>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - 21 jours tous frais compris</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vols intérieurs, tous transferts, hébergement, guides, visites, repas, assurances
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-amber-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-10">10 Janvier 2026 (Meilleure période)</option>
                    <option value="2026-02-14">14 Février 2026 (Climat optimal partout)</option>
                    <option value="2026-03-15">15 Mars 2026 (Saison sèche)</option>
                    <option value="2026-11-05">5 Novembre 2026 (Début saison idéale)</option>
                    <option value="2026-12-10">10 Décembre 2026 (Fin d'année)</option>
                  </select>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>OFFRE EXCEPTIONNELLE :</strong> Réduction de 1 000$ pour toute réservation avant le 31 décembre 2025.
                  </p>
                  <p className="text-xs text-gray-300">* Valable pour les 10 premiers voyageurs par date de départ</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-amber-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-amber-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-amber-800 text-white py-4 font-semibold text-base mb-4 hover:bg-amber-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce long voyage ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos spécialistes du Cameroun vous conseillent sur la préparation de ce voyage complet.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONSEILS VOYAGE
                  </button>
                </div>
              </div>

              {/* Carte miniature Cameroun */}
              <div className="border-2 border-gray-300 p-4 shadow-lg">
                <div className="relative w-full h-64 overflow-hidden rounded">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,1.5,16.0,13.0&layer=mapnik&marker=5.5,12.0"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Cameroun miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Cameroun - 10 Régions
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Parcours complet à travers toutes les régions
                </p>
              </div>

              {/* Widget climat */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Climats du Cameroun</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Sud (forêt)</span>
                    <span className="font-bold text-green-600">24-28°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ouest (montagnes)</span>
                    <span className="font-bold text-blue-600">18-22°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nord (savane)</span>
                    <span className="font-bold text-yellow-600">25-35°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Extrême-Nord</span>
                    <span className="font-bold text-red-600">30-40°C</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Meilleure période : Novembre à Mars (saison sèche)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-amber-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-amber-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Conseils Voyage</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}