import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true }) => {
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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          title="Carte interactive Ouest Cameroun"
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
        <h4 className="font-semibold text-center text-lg">Carte de l'itinéraire</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.5,4.5,11.5,6.5&layer=mapnik&marker=5.478,10.417&marker=5.447,10.068"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Ouest Cameroun"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/5.478/10.417" target="_blank" rel="noopener noreferrer">
            Agrandir la carte Bafoussam
          </a>
        </div>
      </div>
      
      <div className="inline-flex flex-col gap-3 bg-gray-50 p-6 rounded mt-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></span>
          <span className="text-sm">Nuitée</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-800 border-2 border-gray-300"></span>
          <span className="text-sm">Bafoussam (base)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Dschang</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-400 border-2 border-gray-300"></span>
          <span className="text-sm">Monts Bamboutos</span>
        </div>
      </div>
    </div>
  );
};

export default function Culturebamileke() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('bafoussam'); // Par défaut Bafoussam

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero - Image Montagnes Ouest */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">⛰️</span>
          <span>G | ADVENTURE</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Trésors du Cameroun : Randonnée & Montagnes de l'Ouest</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              Découvrez le toit du Cameroun : les Hauts Plateaux de l'Ouest, ses montagnes majestueuses, ses chefferies traditionnelles et ses paysages à couper le souffle
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
            <div className="text-xs mt-1">Région</div>
          </div>
        </div>
        
        {/* Indicateur de destination principale */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🏔️</span>
            <span className="text-sm font-semibold">HAUTS PLATEAUX - TOIT DU CAMEROUN</span>
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
                <span className="font-semibold">DESTINATION PHARE:</span>
                <span className="bg-green-800 text-white px-3 py-1 font-bold">RÉGION DE L'OUEST</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">10 jours avec 7 nuits dans l'Ouest</span>
                <button className="ml-auto border-2 border-green-800 text-green-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Circuit randonnée et culture dans les montagnes</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-green-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-green-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('ouest')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'ouest' ? 'border-b-4 border-green-800 text-black' : 'text-gray500 hover:text-gray-700'}`}
                >
                  DÉCOUVERTE DE L'OUEST
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-green-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  HÉBERGEMENT
                </button>
              </div>
            </div>

            {/* Contenu des onglets */}
            {activeTab === 'apercu' && (
              <div>
                {/* Description principale focalisée sur l'Ouest */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 10 jours vous offre une immersion complète dans la région montagneuse de l'Ouest Cameroun. Les Hauts Plateaux, véritable toit du pays, vous accueillent avec leurs paysages spectaculaires de collines verdoyantes, de montagnes majestueuses et de terres agricoles en terrasses. Vous découvrirez les richesses culturelles des peuples Bamiléké, visitez des chefferies traditionnelles classées au patrimoine de l'UNESCO, et effectuerez des randonnées inoubliables dans les monts Bamboutos et au mont Manengouba.
                </p>

                {/* Section Points forts de l'Ouest */}
                <div className="bg-green-50 border-l-4 border-green-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-800">Les Incontournables de l'Ouest</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">🏔️</span>
                        <div>
                          <h4 className="font-semibold">Monts Bamboutos</h4>
                          <p className="text-sm text-gray-700">3ème plus haut sommet du Cameroun (2740m)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">👑</span>
                        <div>
                          <h4 className="font-semibold">Chefferies Bamiléké</h4>
                          <p className="text-sm text-gray-700">Architecture traditionnelle et rites ancestraux</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">🌋</span>
                        <div>
                          <h4 className="font-semibold">Lac de cratère</h4>
                          <p className="text-sm text-gray-700">Lac magique du Mont Manengouba</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">🏞️</span>
                        <div>
                          <h4 className="font-semibold">Paysages en terrasses</h4>
                          <p className="text-sm text-gray-700">Collines cultivées à perte de vue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Expériences exclusives */}
                <div className="border-l-4 border-green-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Exclusives dans l'Ouest</h3>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">Activités et visites incluses dans votre séjour :</p>
                  <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-green-800 mt-1">•</span>
                      <span><strong>Randonnée aux monts Bamboutos</strong> avec guide spécialiste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-800 mt-1">•</span>
                      <span><strong>Visite de la chefferie de Bandjoun</strong>, classée UNESCO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-800 mt-1">•</span>
                      <span><strong>Ascension du Mont Manengouba</strong> et découverte de ses lacs de cratère</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-800 mt-1">•</span>
                      <span><strong>Rencontre avec les agriculteurs</strong> et découverte des cultures en terrasses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-800 mt-1">•</span>
                      <span><strong>Dégustation de café Arabica</strong> des plantations de l'Ouest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-800 mt-1">•</span>
                      <span><strong>Spectacle de danses traditionnelles</strong> masquées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-800 mt-1">•</span>
                      <span><strong>Visite des chutes de la Métché</strong> près de Dschang</span>
                    </li>
                  </ul>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur l'Ouest */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi l'Ouest est unique ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      L'Ouest Cameroun est la région la plus densément peuplée du pays, réputée pour ses paysages montagneux spectaculaires, son agriculture intensive en terrasses et la richesse de sa culture Bamiléké. C'est le cœur historique et culturel du Cameroun.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Montagnes</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Culture Bamiléké</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Agriculture</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Traditions</span>
                    </div>
                  </div>
                </div>

                {/* Section Circuits similaires */}
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Autres circuits au Cameroun</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Circuit 1 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" 
                        alt="Circuit Ouest" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Randonnée Intense Ouest</h4>
                        <p className="text-sm text-gray-700 mb-2">8 jours de randonnée dans les montagnes</p>
                        <p className="text-xs text-gray-500 mb-4">Circuit sportif montagneux</p>
                        <div className="flex justify-between items-center">
                          <span className="text-green-800 font-bold text-xl">2 199 $</span>
                          <button className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                            EN SAVOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Circuit 2 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400" 
                        alt="Circuit Culturel" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Culture Bamiléké</h4>
                        <p className="text-sm text-gray-700 mb-2">Chefferies et traditions en 7 jours</p>
                        <p className="text-xs text-gray-500 mb-4">Immersion culturelle profonde</p>
                        <div className="flex justify-between items-center">
                          <span className="text-green-800 font-bold text-xl">1 899 $</span>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Ouest Cameroun : Toit du Pays</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Située entre 1000 et 2740 mètres d'altitude, la région de l'Ouest bénéficie d'un climat frais et agréable toute l'année. C'est la région la plus densément peuplée du Cameroun, réputée pour son agriculture en terrasses et ses paysages de collines à perte de vue.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude moyenne</div>
                            <div className="text-green-800 font-bold">1500m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température moyenne</div>
                            <div className="text-green-800 font-bold">18°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Sommet le plus haut</div>
                            <div className="text-green-800 font-bold">2740m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Meilleure période</div>
                            <div className="text-green-800 font-bold">Nov-Mai</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Randonnées */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🥾</span>
                    <span className="font-semibold text-lg">RANDONNÉES INCLUSES</span>
                  </div>
                  <div className="flex flex-wrap gap-8">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Randonnées guidées</div>
                      <div className="text-3xl font-bold text-green-800">5</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Altitude max atteinte</div>
                      <div className="text-3xl font-bold text-green-800">2740m</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Distance totale</div>
                      <div className="text-3xl font-bold text-green-800">42km</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    Des randonnées adaptées à tous les niveaux, des balades culturelles aux ascensions des plus hauts sommets de l'Ouest Cameroun. Équipement fourni et guides de montagne certifiés.
                  </p>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée de la Région de l'Ouest</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=9.8,5.0,11.0,5.8&layer=mapnik&marker=5.478,10.417"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée Ouest"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=10/5.478/10.417" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte de l'Ouest
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
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À DOUALA</span>
                          <span className="text-sm text-gray-600">Transfert vers Bafoussam</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Douala, accueil par votre guide. Route vers Bafoussam, capitale de la région de l'Ouest. Installation à l'hôtel et dîner d'accueil avec spécialités locales.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Découverte de Bafoussam */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BAFOUSSAM ET CULTURE</span>
                          <span className="text-sm text-gray-600">Marché et premières découvertes</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Matinée consacrée à la découverte de Bafoussam : visite du marché central coloré, rencontre avec les agriculteurs locaux. Après-midi : première randonnée d'acclimatation sur les collines environnantes avec vue panoramique sur la ville.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Chefferie de Bandjoun */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CHEFFERIE DE BANDJOUN</span>
                          <span className="text-sm text-gray-600">Patrimoine UNESCO</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Journée culturelle exceptionnelle</h4>
                        <p className="text-justify mb-4">
                          Visite de la célèbre chefferie de Bandjoun, classée au patrimoine mondial de l'UNESCO. Découverte de l'architecture traditionnelle bamiléké, des cases décorées, du musée royal. Rencontre avec les notables et explication des traditions.
                        </p>
                        <p className="text-justify mb-4">
                          Spectacle de danses masquées traditionnelles. Dégustation de vin de raphia, boisson traditionnelle de la région.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Randonnée Monts Bamboutos */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONT BAMBOUTOS</span>
                          <span className="text-sm text-gray-600">Ascension du 3ème plus haut sommet</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Journée de randonnée alpine</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour l'ascension des monts Bamboutos (2740m). Randonnée à travers les paysages volcaniques, les forêts de bambous et les prairies d'altitude. Vue panoramique exceptionnelle sur toute la région de l'Ouest.
                        </p>
                        <p className="text-justify mb-4">
                          Pique-nique au sommet. Descente et retour à Bafoussam en fin d'après-midi. Soirée de repos bien méritée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route vers Dschang */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS DSCHANG</span>
                          <span className="text-sm text-gray-600">Paysages de collines en terrasses</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Route spectaculaire</h4>
                        <p className="text-justify mb-4">
                          Route vers Dschang à travers les paysages les plus spectaculaires de l'Ouest : collines cultivées en terrasses à perte de vue, petits villages agricoles, rivières et ponts de lianes.
                        </p>
                        <p className="text-justify mb-4">
                          Arrêt dans une plantation de café pour une dégustation du célèbre arabica de l'Ouest. Arrivée à Dschang, installation et découverte de cette ville universitaire au climat frais.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Chutes de la Métché */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CHUTES DE LA MÉTCHÉ</span>
                          <span className="text-sm text-gray-600">Spectacle naturel impressionnant</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Journée nature et randonnée</h4>
                        <p className="text-justify mb-4">
                          Randonnée vers les magnifiques chutes de la Métché. Trajet à travers la forêt et les plantations jusqu'à cette cascade impressionnante. Baignade possible dans les bassins naturels.
                        </p>
                        <p className="text-justify mb-4">
                          Après-midi visite du jardin botanique de Dschang et du musée des civilisations. Soirée libre dans la ville universitaire.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Mont Manengouba */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONT MANENGOUBA</span>
                          <span className="text-sm text-gray-600">Lacs de cratère magiques</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Excursion au volcan</h4>
                        <p className="text-justify mb-4">
                          Journée d'excursion au Mont Manengouba, volcan éteint avec ses lacs de cratère légendaires. Randonnée jusqu'au lac Femme (bleu) et lac Homme (vert), entourés de mystères et de traditions locales.
                        </p>
                        <p className="text-justify mb-4">
                          Visite d'un village au pied du volcan et rencontre avec la communauté. Retour à Dschang en fin de journée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Culture et artisanat */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARTISANAT LOCAL</span>
                          <span className="text-sm text-gray-600">Tissage, poterie et forgerons</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-800">Journée artisanale</h4>
                        <p className="text-justify mb-4">
                          Découverte des savoir-faire traditionnels de l'Ouest : visite d'un atelier de tissage de tissus traditionnels (ndop), d'une poterie artisanale, et d'une forge traditionnelle où sont fabriqués les célèbres couteaux de l'Ouest.
                        </p>
                        <p className="text-justify mb-4">
                          Après-midi libre pour les derniers achats de souvenirs. Soirée d'adieu avec spectacle de danses traditionnelles et banquet local.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Retour vers Douala */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR VERS DOUALA</span>
                          <span className="text-sm text-gray-600">Derniers paysages de l'Ouest</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit déjeuner dans les montagnes. Route retour vers Douala avec arrêts photographiques sur les plus beaux points de vue. Installation à l'hôtel à Douala et dîner de clôture.
                        </p>
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
                        <span className="bg-green-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport de Douala pour votre vol de retour, avec dans le cœur les souvenirs inoubliables des montagnes et de la culture de l'Ouest Cameroun.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ouest' && (
              <div>
                {/* Section dédiée à l'Ouest */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-green-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏔️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-800">L'Ouest Cameroun : Le Toit du Pays</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600" 
                        alt="Montagnes de l'Ouest" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Pourquoi choisir l'Ouest ?</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        L'Ouest Cameroun est une région unique en Afrique Centrale, caractérisée par ses paysages montagneux spectaculaires, son climat frais et sa culture Bamiléké exceptionnellement préservée. Avec ses sommets culminant à 2740m, ses collines cultivées en terrasses à perte de vue et ses chefferies traditionnelles classées à l'UNESCO, l'Ouest offre une expérience complète alliant nature, culture et authenticité.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        C'est le cœur historique du Cameroun, où les traditions restent vivantes et où l'accueil chaleureux des populations vous marquera à jamais.
                      </p>
                    </div>
                  </div>

                  {/* Les 5 raisons de choisir l'Ouest */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6 text-center">Les 5 Raisons de Choisir l'Ouest</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">⛰️</div>
                        <h5 className="font-semibold mb-2">Paysages Montagneux</h5>
                        <p className="text-sm text-gray-700">Sommets à 2740m, collines verdoyantes, lacs de cratère</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">👑</div>
                        <h5 className="font-semibold mb-2">Culture Bamiléké</h5>
                        <p className="text-sm text-gray-700">Chefferies UNESCO, danses masquées, artisanat ancestral</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🌾</div>
                        <h5 className="font-semibold mb-2">Agriculture en Terrasses</h5>
                        <p className="text-sm text-gray-700">Paysages uniques de collines cultivées à perte de vue</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🥾</div>
                        <h5 className="font-semibold mb-2">Randonnées Exceptionnelles</h5>
                        <p className="text-sm text-gray-700">Sentiers bien entretenus, vues panoramiques, diversité</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🌡️</div>
                        <h5 className="font-semibold mb-2">Climat Frais</h5>
                        <p className="text-sm text-gray-700">Température moyenne de 18°C, agréable toute l'année</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">☕</div>
                        <h5 className="font-semibold mb-2">Café de Qualité</h5>
                        <p className="text-sm text-gray-700">Dégustation du célèbre arabica de l'Ouest Cameroun</p>
                      </div>
                    </div>
                  </div>

                  {/* Les sites majeurs */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6">Les Sites Majeurs de l'Ouest</h4>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" 
                            alt="Monts Bamboutos" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Monts Bamboutos</h5>
                          <p className="text-gray-700 mb-2">Troisième plus haut sommet du Cameroun (2740m). Paysages volcaniques, forêts de bambous et vue panoramique sur toute la région. Randonnée accessible aux bons marcheurs.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Altitude 2740m</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Randonnée</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Panorama</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400" 
                            alt="Chefferie Bandjoun" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Chefferie de Bandjoun</h5>
                          <p className="text-gray-700 mb-2">Classée au patrimoine mondial de l'UNESCO. Architecture traditionnelle bamiléké exceptionnelle, musée royal, cases décorées de symboles ancestraux.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">UNESCO</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Culture</span>
                            <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">Architecture</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400" 
                            alt="Mont Manengouba" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Mont Manengouba</h5>
                          <p className="text-gray-700 mb-2">Volcan éteint abritant deux lacs de cratère légendaires : le lac Femme (bleu) et le lac Homme (vert). Site sacré entouré de mystères et traditions.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Lacs</span>
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Volcan</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Sacré</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gastronomie */}
                  <div className="mb-10 bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-6 text-green-800">Gastronomie de l'Ouest</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-4xl mb-3">🍖</div>
                        <h5 className="font-semibold mb-2">Viandes Braisées</h5>
                        <p className="text-sm text-gray-700">Poulet DG, viande de bœuf et porc braisés aux herbes</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-3">🥬</div>
                        <h5 className="font-semibold mb-2">Légumes Locaux</h5>
                        <p className="text-sm text-gray-700">Taro, macabo, igname, plantain sous toutes ses formes</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-3">🍯</div>
                        <h5 className="font-semibold mb-2">Vin de Raphia</h5>
                        <p className="text-sm text-gray-700">Boisson traditionnelle fermentée, goût unique</p>
                      </div>
                    </div>
                    <p className="text-center mt-6 text-gray-700">
                      La cuisine de l'Ouest est réputée pour ses plats épicés, ses sauces grasses et ses accompagnements de tubercules. Chaque repas est une célébration des produits locaux.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section Hôtels */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">FOCUS OUEST</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels dans l'Ouest Cameroun</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-800 w-16 md:w-32"></span>
                      <span className="text-green-800 text-2xl">🏔️</span>
                      <span className="h-px bg-green-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      L'Ouest Cameroun propose des hébergements authentiques au cœur des montagnes. Nous avons sélectionné pour vous les meilleurs hôtels offrant une vue imprenable sur les paysages montagneux, un accès facile aux sites culturels et tout le confort nécessaire pour un séjour inoubliable.
                    </p>
                  </div>

                  {/* Navigation des villes - Bafoussam par défaut */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('bafoussam')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bafoussam' 
                          ? 'bg-green-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BAFOUSSAM (5 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('dschang')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'dschang' 
                          ? 'bg-green-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      DSCHANG (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('douala')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'douala' 
                          ? 'bg-green-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      DOUALA (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hôtels - Bafoussam (étendu) */}
                  {activeHotelTab === 'bafoussam' && (
                    <div className="space-y-16">
                      {/* Hôtel Altitel - Premier choix */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Altitel Bafoussam" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-800 text-white px-3 py-1 text-sm font-bold">
                                NOTRE RECOMMANDATION
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Altitel</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Carrefour Ndiengdam, BP 145, Bafoussam, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📶</span>
                                <span>WiFi Haut Débit</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant Vue Montagne</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé sur les hauteurs de Bafoussam, l'Hôtel Altitel offre une vue panoramique exceptionnelle sur la ville et les montagnes environnantes. Les chambres sont spacieuses et décorées dans un style africain contemporain avec terrasse privée. Réveillez-vous au chant des oiseaux et profitez d'un petit déjeuner avec vue sur les collines. L'hôtel dispose d'un restaurant de cuisine locale et internationale, d'un bar avec terrasse, d'une piscine et d'un centre de bien-être. Organisation d'excursions vers les sites culturels et naturels de la région. Parfait pour les voyageurs en quête de confort et d'authenticité.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Vue Montagne</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Centre-ville</span>
                              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Spa</span>
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Excursions</span>
                            </div>
                          </div>
                        </div>

                        {/* Carte et commodités Altitel */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={5.478} 
                              lng={10.417} 
                              height="300px" 
                              showControls={true}
                            />
                            <p className="text-xs text-gray-600 mt-2">
                              Situé au cœur de Bafoussam, à 10 minutes à pied du marché central et des principaux sites.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Commodités Premium</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🏊</span>
                                  <span>Piscine Extérieure</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🍽️</span>
                                  <span>Restaurant Panoramique</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🛏️</span>
                                  <span>Chambres Vue Montagne</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>💆</span>
                                  <span>Centre de Bien-être</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🚗</span>
                                  <span>Navette Gratuite</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>📶</span>
                                  <span>WiFi Gratuit</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>👨‍🍳</span>
                                  <span>Cuisine Locale</span>
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

                            <h5 className="font-semibold mb-5 text-lg">Votre Séjour à l'Altitel</h5>
                            <p className="text-sm text-gray-700 mb-4">
                              Pendant vos 5 nuits à l'Hôtel Altitel, vous profiterez chaque matin d'un petit déjeuner buffet avec produits locaux. Les soirées sont agrémentées de musique traditionnelle les weekends et de dégustations de spécialités régionales.
                            </p>
                            <div className="bg-yellow-50 p-4 rounded">
                              <p className="text-sm font-semibold mb-2">Inclus dans votre séjour :</p>
                              <ul className="list-disc list-inside text-sm text-gray-700">
                                <li>Petits déjeuners buffet produits locaux</li>
                                <li>Accès à la piscine et au centre de bien-être</li>
                                <li>Navette gratuite vers le centre-ville</li>
                                <li>Conseils et organisation d'excursions</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hôtel Chez Jeanne */}
                      <div className="pt-12 border-t-2 border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Hôtel Chez Jeanne" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Chez Jeanne</h4>
                            <p className="text-sm text-gray-600 mb-5">Quartier Ndiangdam, Bafoussam, Cameroun</p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Jardin Tropical</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏠</span>
                                <span className="text-sm font-semibold">Ambiance Familiale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍲</span>
                                <span className="text-sm font-semibold">Cuisine Maison</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Établissement familial de charme situé dans un quartier résidentiel calme de Bafoussam. Les bungalows sont répartis dans un jardin tropical bien entretenu. Chaque bungalow dispose d'une terrasse privée, d'une salle de bain moderne et d'un décor simple mais confortable. L'ambiance est conviviale et familiale. Restaurant réputé pour sa cuisine maison à base de produits locaux, petit déjeuner copieux avec fruits frais du jardin. Organisation de visites culturelles avec les propriétaires. Idéal pour les voyageurs en quête d'authenticité et de contact humain.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Familial</span>
                              <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">Jardin</span>
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Cuisine Maison</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Authentique</span>
                            </div>
                          </div>
                        </div>

                        {/* Carte et commodités Chez Jeanne */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={5.480} 
                              lng={10.420} 
                              height="300px" 
                              showControls={true}
                            />
                            <p className="text-xs text-gray-600 mt-2">
                              Situé dans un quartier résidentiel calme de Bafoussam, à 15 minutes à pied du centre-ville.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Expérience Authentique</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🏠</span>
                                  <span>Bungalows Jardin</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>👨‍👩‍👧</span>
                                  <span>Accueil Familial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🌿</span>
                                  <span>Jardin Tropical</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🍲</span>
                                  <span>Cuisine Maison</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>👵</span>
                                  <span>Conseils Locaux</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🚶</span>
                                  <span>Proximité Centre</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🍓</span>
                                  <span>Fruits du Jardin</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🧺</span>
                                  <span>Lessive Possible</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>☕</span>
                                  <span>Dégustation Café</span>
                                </div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Votre Séjour Chez Jeanne</h5>
                            <p className="text-sm text-gray-700 mb-4">
                              Chez Jeanne, vivez comme chez l'habitant. Réveils au chant des oiseaux, petit déjeuner avec confitures maison, conseils personnalisés pour vos visites. Les soirées se passent souvent autour d'un feu de bois avec les autres voyageurs et la famille d'accueil.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Dschang */}
                  {activeHotelTab === 'dschang' && (
                    <div className="space-y-16">
                      {/* Hôtel Sapologie */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel Sapologie Dschang" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Sapologie</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Quartier Tougang, BP 234, Dschang, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🎓</span>
                                <span>Ambiance Universitaire</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📚</span>
                                <span className="text-sm font-semibold">Bibliothèque</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌲</span>
                                <span className="text-sm font-semibold">Parc Arboré</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel de charme situé dans la ville universitaire de Dschang, au climat frais et agréable. L'hôtel est entouré d'un parc arboré de 2 hectares. Les chambres sont spacieuses et offrent une vue sur les jardins ou la ville. Ambiance intellectuelle et détendue, avec une clientèle mixte d'universitaires et de voyageurs. Restaurant proposant une fusion de cuisine locale et internationale, bar convivial, bibliothèque bien fournie. Organisation de conférences sur la culture bamiléké. Idéal pour les voyageurs curieux et aimant l'atmosphère des villes universitaires.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Universitaire</span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Parc</span>
                              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Culture</span>
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Climat Frais</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Douala */}
                  {activeHotelTab === 'douala' && (
                    <div className="space-y-16">
                      {/* Hôtel Akwa Palace */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel Akwa Palace Douala" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Akwa Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Boulevard de la Liberté, BP 100, Douala, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">✈️</span>
                                <span>Proche Aéroport</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel confortable pour votre dernière nuit au Cameroun avant votre vol retour. Bien situé avec accès facile à l'aéroport. Toutes les commodités pour un séjour court et agréable.
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
                  <span className="text-2xl">🏔️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Séjour dans l'Ouest</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">À partir de : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-gray-400 line-through">$3,199</span>
                    <span className="text-4xl font-bold text-green-800">$2,999</span>
                    <button className="text-sm text-gray-500 hover:text-gray-700">ⓘ</button>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - 7 nuits dans l'Ouest incluses</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous les transferts, hébergement, guides de montagne, visites culturelles, et la plupart des repas
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-800"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                {/* Sélecteur de date */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Date de Départ pour l'Ouest</label>
                  <select 
                    value={selectedDeparture} 
                    onChange={(e) => setSelectedDeparture(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-15">15 Janvier 2026 (Saison sèche)</option>
                    <option value="2026-02-12">12 Février 2026 (Meilleure période randonnée)</option>
                    <option value="2026-03-08">8 Mars 2026 (Climat optimal)</option>
                    <option value="2026-06-05">5 Juin 2026"{'>'}5 Juin 2026 (Saison intermédiaire)</option>
                    <option value="2026-07-17">17 Juillet 2026 (Été frais)</option>
                    <option value="2026-11-10">10 Novembre 2026 (Début saison idéale)</option>
                  </select>
                </div>

                {/* Encart promotionnel Ouest */}
                <div className="bg-gradient-to-r from-green-800 to-blue-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>OFFRE SPÉCIALE OUEST :</strong> Guide de montagne privé offert pour toute réservation avant le 31 décembre 2025.
                  </p>
                  <p className="text-xs text-gray-300">* Valable pour les départs de janvier à juin 2026</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-green-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-green-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-green-800 text-white py-4 font-semibold text-base mb-4 hover:bg-green-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur l'Ouest ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos spécialistes de la randonnée vous conseillent sur les meilleurs itinéraires et la préparation nécessaire.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONSEILS RANDONNÉE
                  </button>
                </div>
              </div>

              {/* Carte miniature Ouest */}
              <div className="border-2 border-gray-300 p-4 shadow-lg">
                <div className="relative w-full h-64 overflow-hidden rounded">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=9.8,5.0,11.0,5.8&layer=mapnik&marker=5.478,10.417"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Ouest miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Bafoussam - Capitale Ouest
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Localisation de votre hébergement principal dans l'Ouest
                </p>
              </div>

              {/* Widget météo Ouest */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Météo dans l'Ouest</span>
                </h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">18°C</div>
                  <div className="text-sm text-gray-700 mb-1">Température moyenne annuelle</div>
                  <div className="text-xs text-gray-600">Altitude : 1500m en moyenne</div>
                  <div className="mt-3 text-sm">
                    <span className="font-semibold">Meilleure période :</span> Novembre à Mai
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Saison sèche - Randonnée optimale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Conseils Randonnée</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}