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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-forest-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-forest-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          title="Carte interactive forêt tropicale"
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
        <h4 className="font-semibold text-center text-lg">Itinéraire en Forêt Tropicale</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-forest-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-forest-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.5,2.0,12.5,4.5&layer=mapnik&marker=4.051,9.767&marker=2.900,10.150"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Douala-Ebolowa"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/3.5/10.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-forest-800 border-2 border-gray-300"></span>
          <span className="text-sm">Douala (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-forest-600 border-2 border-gray-300"></span>
          <span className="text-sm">Réserve du Dja</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-forest-400 border-2 border-gray-300"></span>
          <span className="text-sm">Ebolowa (arrivée)</span>
        </div>
      </div>
    </div>
  );
};

export default function Aventureforettropicale() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('dja');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  // Données sur la faune de la forêt
  const forestAnimals = [
    { name: 'Gorilles', icon: '🦍', count: 'Population importante', description: 'Observation dans leur habitat naturel' },
    { name: 'Chimpanzés', icon: '🐒', count: 'Communautés suivies', description: 'Rencontres avec les chercheurs' },
    { name: 'Éléphants de forêt', icon: '🐘', count: 'Troupeaux familiaux', description: 'Plus petits que les éléphants de savane' },
    { name: 'Mandrils', icon: '🐵', count: 'Troupes colorées', description: 'Singes les plus colorés d\'Afrique' },
    { name: 'Pangolins', icon: '🦔', count: 'Espèce protégée', description: 'Mammifère le plus braconné au monde' },
    { name: 'Oiseaux', icon: '🦜', count: '400+ espèces', description: 'Dont le perroquet gris et le calao' },
  ];

  // Activités d'aventure
  const adventureActivities = [
    { icon: '🥾', title: 'Randonnées', desc: 'Sentiers forestiers et pistes animales' },
    { icon: '🛶', title: 'Navigation', desc: 'Pirogues sur les rivières forestières' },
    { icon: '🎣', title: 'Pêche traditionnelle', desc: 'Avec les pygmées Baka' },
    { icon: '🏹', title: 'Chasse au filet', desc: 'Initiation aux techniques ancestrales' },
    { icon: '🌿', title: 'Plantes médicinales', desc: 'Découverte de la pharmacopée' },
    { icon: '🎵', title: 'Musique traditionnelle', desc: 'Instruments et chants pygmées' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero - Image Forêt Tropicale */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌿</span>
          <span>G | AVENTURE</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Aventure dans la Forêt Tropicale</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              11 jours d'immersion dans la forêt équatoriale camerounaise : biodiversité, pygmées Baka et aventure authentique
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">11</div>
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
            <span className="text-2xl">🌳</span>
            <span className="text-sm font-semibold">FORÊT ÉQUATORIALE</span>
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
                <span className="bg-forest-800 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">11 jours d'immersion en forêt équatoriale</span>
                <button className="ml-auto border-2 border-forest-800 text-forest-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-forest-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Expérience unique d'immersion en forêt tropicale humide</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-forest-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DE L'AVENTURE
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-forest-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('foret')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'foret' ? 'border-b-4 border-forest-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  FORÊT TROPICALE
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-forest-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Cette aventure de 11 jours vous plonge au cœur de la forêt équatoriale camerounaise, l'une des plus riches en biodiversité au monde. Du littoral atlantique jusqu'aux profondeurs de la forêt tropicale humide près d'Ebolowa, vous découvrirez un écosystème unique, rencontrerez les pygmées Baka et expérimenterez la vie en forêt selon leurs traditions ancestrales. Une expérience authentique pour les amoureux de la nature et les aventuriers en quête d'immersion culturelle profonde.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-800">Les Incontournables de l'Aventure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">🌿</span>
                        <div>
                          <h4 className="font-semibold">Immersion Baka</h4>
                          <p className="text-sm text-gray-700">Vie avec les pygmées, chasse, cueillette</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">🦍</span>
                        <div>
                          <h4 className="font-semibold">Observation Gorilles</h4>
                          <p className="text-sm text-gray-700">Dans la réserve du Dja (UNESCO)</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">🛶</span>
                        <div>
                          <h4 className="font-semibold">Navigation Forestière</h4>
                          <p className="text-sm text-gray-700">Pirogues sur les rivières équatoriales</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">🌳</span>
                        <div>
                          <h4 className="font-semibold">Biodiversité</h4>
                          <p className="text-sm text-gray-700">400+ espèces d'oiseaux, primates rares</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Expériences incluses */}
                <div className="border-l-4 border-forest-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Aventure Incluses</h3>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">Toutes les activités incluses dans votre aventure :</p>
                  <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-forest-800 mt-1">•</span>
                      <span><strong>6 jours d'immersion en forêt</strong> avec les pygmées Baka</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-800 mt-1">•</span>
                      <span><strong>Observation des gorilles</strong> dans la réserve du Dja (classée UNESCO)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-800 mt-1">•</span>
                      <span><strong>Initiation à la chasse traditionnelle</strong> avec filets et sarbacanes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-800 mt-1">•</span>
                      <span><strong>Navigation en pirogue</strong> sur les rivières Nyong et Dja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-800 mt-1">•</span>
                      <span><strong>Découverte des plantes médicinales</strong> avec guérisseur traditionnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-800 mt-1">•</span>
                      <span><strong>Randonnées nocturnes</strong> pour observer la faune crépusculaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest-800 mt-1">•</span>
                      <span><strong>Session de pêche traditionnelle</strong> aux techniques Baka</span>
                    </li>
                  </ul>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la forêt */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi cette forêt est unique ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La forêt tropicale camerounaise fait partie du bassin du Congo, deuxième plus grande forêt tropicale du monde après l'Amazonie. Elle abrite une biodiversité exceptionnelle, avec des espèces endémiques qu'on ne trouve nulle part ailleurs, et les pygmées Baka, l'un des derniers peuples de chasseurs-cueilleurs d'Afrique centrale.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Bassin du Congo</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Classée UNESCO</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Pygmées Baka</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Biodiversité</span>
                    </div>
                  </div>
                </div>

                {/* Section Circuits similaires */}
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Autres aventures au Cameroun</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Circuit 1 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=400" 
                        alt="Circuit Forêt" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Immersion Forêt Court</h4>
                        <p className="text-sm text-gray-700 mb-2">6 jours avec les pygmées Baka</p>
                        <p className="text-xs text-gray-500 mb-4">Circuit court et intense</p>
                        <div className="flex justify-between items-center">
                          <span className="text-forest-800 font-bold text-xl">2 199 $</span>
                          <button className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                            EN SAVOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Circuit 2 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1511497584788-876760111969?w=400" 
                        alt="Circuit Gorilles" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Spécial Gorilles</h4>
                        <p className="text-sm text-gray-700 mb-2">8 jours d'observation primates</p>
                        <p className="text-xs text-gray-500 mb-4">Focus conservation</p>
                        <div className="flex justify-between items-center">
                          <span className="text-forest-800 font-bold text-xl">2 899 $</span>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">La Forêt Équatoriale Camerounaise</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          La forêt tropicale du Cameroun couvre environ 46% du territoire national. Elle abrite la réserve du Dja, classée au patrimoine mondial de l'UNESCO depuis 1987. Cette région possède l'une des plus fortes concentrations de biodiversité d'Afrique, avec des milliers d'espèces de plantes, 400 espèces d'oiseaux, et de nombreux mammifères menacés.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Superficie forêt</div>
                            <div className="text-forest-800 font-bold">46% du pays</div>
                          </div>
                          <div>
                            <div className="font-semibold">Classement UNESCO</div>
                            <div className="text-forest-800 font-bold">1987</div>
                          </div>
                          <div>
                            <div className="font-semibold">Espèces d'oiseaux</div>
                            <div className="text-forest-800 font-bold">400+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Meilleure période</div>
                            <div className="text-forest-800 font-bold">Mars-Mai</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🥾</span>
                    <span className="font-semibold text-lg">ACTIVITÉS D'AVENTURE</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🥾</div>
                      <div className="text-sm text-gray-600 mb-1">Randonnées</div>
                      <div className="text-3xl font-bold text-forest-800">8+</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🛶</div>
                      <div className="text-sm text-gray-600 mb-1">Navigation</div>
                      <div className="text-3xl font-bold text-forest-800">5</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🌙</div>
                      <div className="text-sm text-gray-600 mb-1">Nuits en forêt</div>
                      <div className="text-3xl font-bold text-forest-800">4</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    Des activités authentiques vous attendent : randonnées sur les sentiers des animaux, navigation en pirogue traditionnelle, nuits en campement forestier, et initiation aux savoir-faire des pygmées Baka.
                  </p>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte de la Forêt Tropicale</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=10.0,2.0,13.5,4.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte forêt tropicale"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/3.0/11.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
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
                        <span className="bg-forest-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À DOUALA</span>
                          <span className="text-sm text-gray-600">Porte d'entrée de la forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport de Douala. Accueil par votre guide aventure et transfert à l'hôtel. Briefing sur le déroulement de l'expédition en forêt tropicale. Vérification de l'équipement et dernières préparations. Dîner d'accueil avec spécialités locales.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers la forêt */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-forest-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ENTRÉE EN FORÊT</span>
                          <span className="text-sm text-gray-600">Route vers la réserve du Dja</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-forest-800">Premier contact avec la forêt</h4>
                        <p className="text-justify mb-4">
                          Départ matinal vers la région de la forêt tropicale. La route traverse des paysages changeants : plantations, villages, puis premiers signes de la forêt dense. Arrivée en bordure de la réserve du Dja en fin d'après-midi. Rencontre avec votre guide local Baka qui vous présentera les règles de vie en forêt. Installation dans le camp de base. Première randonnée d'approche à la tombée de la nuit pour écouter les premiers sons de la forêt.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3-5 - Immersion avec les Baka */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-forest-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3-5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">IMMERSION BAKA</span>
                          <span className="text-sm text-gray-600">Vie avec les pygmées de la forêt</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-forest-800">Apprentissage des savoirs ancestraux</h4>
                        <p className="text-justify mb-4">
                          Trois jours complets d'immersion avec la communauté Baka. Apprentissage des techniques de chasse traditionnelle (filets, sarbacanes). Cueillette des fruits et champignons comestibles. Fabrication d'abris temporaires en feuilles. Initiation à la pêche avec les techniques Baka. Découverte des plantes médicinales avec le guérisseur du village. Soirées autour du feu avec contes, chants et danses traditionnelles.
                        </p>
                        <p className="text-justify mb-4">
                          Nuits en campement forestier sous tente ou en hamac, au rythme des sons de la forêt. Apprentissage de l'orientation en forêt sans instruments modernes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6-7 - Observation gorilles */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-forest-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6-7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">GORILLES DU DJA</span>
                          <span className="text-sm text-gray-600">Observation dans la réserve UNESCO</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-forest-800">À la recherche des gorilles</h4>
                        <p className="text-justify mb-4">
                          Déplacement vers la zone de la réserve du Dja où évoluent les gorilles. Accompagnés de pisteurs expérimentés, vous partez à la recherche des familles de gorilles habituées à la présence humaine. Observation discrète et respectueuse de ces magnifiques primates dans leur habitat naturel. Écoute des communications entre les membres du groupe, observation des comportements sociaux et des soins aux petits.
                        </p>
                        <p className="text-justify mb-4">
                          Rencontre avec les chercheurs qui étudient et protègent les gorilles. Compréhension des enjeux de conservation et des menaces qui pèsent sur ces espèces.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8-9 - Navigation forestière */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-forest-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8-9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">NAVIGATION FORESTIÈRE</span>
                          <span className="text-sm text-gray-600">Pirogues sur les rivières équatoriales</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-forest-800">Expédition fluviale</h4>
                        <p className="text-justify mb-4">
                          Départ en pirogue traditionnelle sur la rivière Dja. Navigation à travers la forêt inondée, observation de la faune aquatique et des oiseaux riverains. Arrêts pour des randonnées sur les berges et visites de villages isolés. Nuit en campement au bord de la rivière.
                        </p>
                        <p className="text-justify mb-4">
                          Deuxième journée de navigation vers des zones plus reculées. Pêche avec les techniques locales, observation des hippopotames et des crocodiles. Découverte des arbres géants de la forêt primaire.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Route vers Ebolowa */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-forest-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS EBOLOWA</span>
                          <span className="text-sm text-gray-600">Sortie de la forêt profonde</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit déjeuner en forêt. Cérémonie d'adieu avec la communauté Baka. Route vers Ebolowa, capitale de la région du Sud. Arrivée à l'hôtel et première douche chaude depuis plusieurs jours ! Soirée de partage des expériences vécues et dîner d'adieu.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-forest-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport d'Ebolowa pour votre vol de retour, emportant avec vous les souvenirs inoubliables de cette immersion unique dans la forêt tropicale camerounaise et la rencontre authentique avec les pygmées Baka.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'foret' && (
              <div>
                {/* Section dédiée à la forêt */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-forest-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌳</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-forest-800">La Forêt Tropicale Camerounaise</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600" 
                        alt="Forêt tropicale" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Un écosystème exceptionnel</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        La forêt tropicale camerounaise fait partie du bassin du Congo, deuxième plus grand massif forestier tropical au monde après l'Amazonie. Avec plus de 20 millions d'hectares, elle abrite une biodiversité parmi les plus riches d'Afrique et joue un rôle crucial dans la régulation du climat mondial.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Classée au patrimoine mondial de l'UNESCO, la réserve du Dja est considérée comme l'un des derniers sanctuaires de la forêt primaire en Afrique centrale, préservée grâce à son isolement et aux traditions des peuples qui y vivent.
                      </p>
                    </div>
                  </div>

                  {/* La faune de la forêt */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6 text-center">La Faune de la Forêt Tropicale</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {forestAnimals.map((animal, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
                          <div className="text-3xl mb-3">{animal.icon}</div>
                          <h5 className="font-semibold mb-2">{animal.name}</h5>
                          <div className="text-lg font-bold text-forest-800 mb-2">{animal.count}</div>
                          <p className="text-sm text-gray-700">{animal.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Les pygmées Baka */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6">Les Pygmées Baka : Gardiens de la Forêt</h4>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1559699117-9d26c78bf388?w=400" 
                            alt="Pygmées Baka" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Un peuple de la forêt</h5>
                          <p className="text-gray-700 mb-2">Les Baka sont l'un des derniers peuples de chasseurs-cueilleurs d'Afrique centrale. Leur connaissance intime de la forêt, de ses plantes et de ses animaux est exceptionnelle. Ils vivent en harmonie avec leur environnement depuis des millénaires.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Chasseurs-cueilleurs</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Connaissance ancestrale</span>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Harmonie avec la nature</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                        <h5 className="font-semibold mb-3">Ce que vous apprendrez des Baka</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                            <li>Techniques de chasse avec filets et sarbacanes</li>
                            <li>Identification des plantes comestibles et médicinales</li>
                            <li>Construction d'abris temporaires en feuilles</li>
                          </ul>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                            <li>Orientation en forêt sans instruments</li>
                            <li>Fabrication d'outils et d'armes traditionnelles</li>
                            <li>Chants, danses et contes traditionnels</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activités d'aventure */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6">Activités d'Aventure en Forêt</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {adventureActivities.map((activity, index) => (
                        <div key={index} className="text-center">
                          <div className="text-4xl mb-3">{activity.icon}</div>
                          <h5 className="font-semibold mb-2">{activity.title}</h5>
                          <p className="text-sm text-gray-700">{activity.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conseils pratiques */}
                  <div className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-6 text-amber-800">Conseils pour l'Aventure</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3">🎒 Équipement recommandé</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                          <li>Vêtements respirants à manches longues</li>
                          <li>Chaussures de randonnée imperméables</li>
                          <li>Anti-moustiques et répulsif puissant</li>
                          <li>Lampe frontale avec lumière rouge</li>
                          <li>Sac étanche pour appareils électroniques</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">⚠️ Précautions</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                          <li>Traitement antipaludéen obligatoire</li>
                          <li>Vaccination fièvre jaune exigée</li>
                          <li>Respect strict des consignes des guides</li>
                          <li>Ne jamais s'éloigner seul du groupe</li>
                          <li>Respect des animaux et de leur habitat</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-center mt-6 text-gray-700 text-sm">
                      Notre équipe fournit le matériel de camping et assure votre sécurité tout au long de l'aventure.
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">CAMPEMENTS FORESTIERS</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergement en Forêt Tropicale</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-forest-800 w-16 md:w-32"></span>
                      <span className="text-forest-800 text-2xl">⛺</span>
                      <span className="h-px bg-forest-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Durant cette aventure, vous alternerez entre hébergements confortables en bordure de forêt et campements d'immersion au cœur de la jungle. Chaque nuitée est une expérience unique, du lodge éco-touristique au bivouac sous les arbres géants.
                    </p>
                  </div>

                  {/* Navigation des hébergements */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('dja')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'dja' 
                          ? 'bg-forest-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      RÉSERVE DU DJA (7 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('douala')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'douala' 
                          ? 'bg-forest-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      DOUALA (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('ebolowa')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ebolowa' 
                          ? 'bg-forest-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      EBOLOWA (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Réserve du Dja */}
                  {activeHotelTab === 'dja' && (
                    <div className="space-y-16">
                      {/* Campement Dja Ecolodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                                alt="Campement Dja Ecolodge" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-forest-800 text-white px-3 py-1 text-sm font-bold">
                                IMMERSION TOTALE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Dja Ecolodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              En bordure de la réserve du Dja, région du Sud, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌿</span>
                                <span>Éco-construction</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌳</span>
                                <span className="text-sm font-semibold">Vue sur la forêt</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé à la lisière de la réserve du Dja, ce lodge écologique est construit en matériaux naturels selon les techniques traditionnelles. Les bungalows sur pilotis offrent confort et immersion dans l'environnement forestier. Chaque unité dispose d'un lit confortable avec moustiquaire, d'une salle de bain privative avec eau chaude solaire et d'une terrasse avec hamac. Le restaurant propose une cuisine locale à base de produits frais de la forêt et des villages alentour. Le campement dispose d'un espace commun avec bibliothèque sur la faune et la flore, et organise des soirées autour du feu de camp avec les guides et chercheurs.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Écologique</span>
                              <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">Sur pilotis</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Bord de réserve</span>
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Feu de camp</span>
                            </div>
                          </div>
                        </div>

                        {/* Carte et commodités */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={3.000} 
                              lng={12.800} 
                              height="300px" 
                              showControls={true}
                            />
                            <p className="text-xs text-gray-600 mt-2">
                              Situé à la lisière de la réserve du Dja, point de départ idéal pour les expéditions.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Commodités du Campement</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>⛺</span>
                                  <span>Bungalows sur pilotis</span>
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
                                  <span>Restaurant produits locaux</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>📚</span>
                                  <span>Bibliothèque nature</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🔋</span>
                                  <span>Électricité solaire</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>👨‍🍳</span>
                                  <span>Cuisine traditionnelle</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🌿</span>
                                  <span>Jardin médicinal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🎵</span>
                                  <span>Soirées traditionnelles</span>
                                </div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Votre Séjour au Dja Ecolodge</h5>
                            <p className="text-sm text-gray-700 mb-4">
                              Au Dja Ecolodge, vous vivrez au rythme de la forêt. Réveils aux chants des oiseaux, petit déjeuner avec fruits frais, départs matinaux pour les expéditions. Les soirées sont consacrées au partage des observations, à l'identification des espèces et aux échanges culturels avec les guides Baka.
                            </p>
                            <div className="bg-green-50 p-4 rounded">
                              <p className="text-sm font-semibold mb-2">Inclus dans votre séjour :</p>
                              <ul className="list-disc list-inside text-sm text-gray-700">
                                <li>Petits déjeuners complets avant les expéditions</li>
                                <li>Pique-niques forestiers préparés par le lodge</li>
                                <li>Dîners trois services avec produits de la forêt</li>
                                <li>Eau filtrée à volonté durant le séjour</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bivouac en forêt */}
                      <div className="pt-12 border-t-2 border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Bivouac en forêt" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac Forestier</h4>
                            <p className="text-sm text-gray-600 mb-5">Au cœur de la forêt primaire, réserve du Dja</p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌌</span>
                                <span>Nuit sous les étoiles</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏕️</span>
                                <span className="text-sm font-semibold">Campement temporaire</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦉</span>
                                <span className="text-sm font-semibold">Nuits sauvages</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Pour une immersion totale, deux nuits seront passées en bivouac au cœur de la forêt primaire. Installation d'un campement temporaire avec tentes légères ou hamacs avec moustiquaires intégrées. Préparation des repas sur feu de bois avec les guides Baka. Veillées autour du feu avec contes traditionnels et observation des étoiles à travers la canopée. Réveils avec les premiers rayons du soleil filtrant à travers les arbres géants.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Bivouac</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Forêt primaire</span>
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Feu de bois</span>
                              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Immersion totale</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Douala */}
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
                              Boulevard de la Liberté, Douala, Cameroun
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
                              Hôtel confortable pour votre première nuit au Cameroun. Chambres climatisées, piscine, restaurant. Emplacement idéal pour vos préparatifs avant l'entrée en forêt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Ebolowa */}
                  {activeHotelTab === 'ebolowa' && (
                    <div className="space-y-16">
                      {/* Hôtel des Chutes */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel des Chutes Ebolowa" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel des Chutes</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Ebolowa, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>Ambiance forestière</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏞️</span>
                                <span className="text-sm font-semibold">Vue sur la nature</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel paisible au cœur d'Ebolowa, entouré de végétation tropicale. Chambres spacieuses, restaurant de cuisine camerounaise. Parfait pour se reposer après l'aventure en forêt.
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
                    <span className="text-4xl font-bold text-forest-800">$3,499</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - 11 jours d'aventure</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, hébergement, guides Baka, activités, repas complets en forêt
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-forest-800"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                {/* Sélecteur de date - MARS-MAI comme indiqué */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Date de Départ (MARS-MAI)</label>
                  <select 
                    value={selectedDeparture} 
                    onChange={(e) => setSelectedDeparture(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-forest-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-03-15">15 Mars 2026 (Début saison)</option>
                    <option value="2026-04-10">10 Avril 2026 (Période optimale)</option>
                    <option value="2026-05-05">5 Mai 2026 (Fin de saison idéale)</option>
                    <option value="2027-03-20">20 Mars 2027 (Meilleure période)</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période : Mars à Mai (saison sèche relative)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-forest-800 to-green-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>AVENTURE EXCLUSIVE :</strong> Contribution directe à la communauté Baka incluse
                  </p>
                  <p className="text-xs text-gray-300">* 10% du prix reversé aux projets communautaires</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-forest-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-forest-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-forest-800 text-white py-4 font-semibold text-base mb-4 hover:bg-forest-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur l'aventure ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts aventure vous conseillent sur la préparation et l'équipement.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONSEILS AVENTURE
                  </button>
                </div>
              </div>

              {/* Carte miniature forêt */}
              <div className="border-2 border-gray-300 p-4 shadow-lg">
                <div className="relative w-full h-64 overflow-hidden rounded">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=10.0,2.0,13.5,4.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte forêt miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Forêt Tropicale Cameroun
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Zone d'immersion dans la réserve du Dja
                </p>
              </div>

              {/* Widget météo forêt */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Météo en Forêt (MARS-MAI)</span>
                </h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-forest-600 mb-2">26°C</div>
                  <div className="text-sm text-gray-700 mb-1">Température moyenne diurne</div>
                  <div className="text-xs text-gray-600">Humidité : 80-90%</div>
                  <div className="mt-3 text-sm">
                    <span className="font-semibold">Saison :</span> Saison des pluies légères
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Forêt luxuriante, rivières navigables</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-forest-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-forest-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Conseils Aventure</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}