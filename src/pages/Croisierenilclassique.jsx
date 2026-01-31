import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.02},${lat-0.02},${lng+0.02},${lat+0.02}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.02},${lat-0.02},${lng+0.02},${lat+0.02}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-red-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-red-900 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          title="Carte interactive"
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
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-red-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-red-900 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=30.8,29.5,31.5,30.5&layer=mapnik&marker=30.0444,31.2357"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Egypte"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=10/30.0444/31.2357" target="_blank" rel="noopener noreferrer">
            Agrandir la carte
          </a>
        </div>
      </div>
      
      <div className="inline-flex flex-col gap-3 bg-gray-50 p-6 rounded mt-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></span>
          <span className="text-sm">Overnight</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-900 border-2 border-gray-300"></span>
          <span className="text-sm">Start City</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-gray-300"></span>
          <span className="text-sm">End City</span>
        </div>
      </div>
    </div>
  );
};

export default function Croisierenilclassique() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('lecaire');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero - Image améliorée */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🧳</span>
          <span>G | CLASSIC</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Egypte avec Nile Cruise</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">9</div>
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
        
        {/* Indicateur de pays */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🇪🇬</span>
            <span className="text-sm font-semibold">Égypte</span>
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
                <span className="font-semibold">NOTES VOYAGEURS:</span>
                <span className="bg-red-900 text-white px-3 py-1 font-bold">QG</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours du Caire au Caire</span>
                <button className="ml-auto border-2 border-red-900 text-red-900 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-red-900 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-red-900 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-red-900 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('inclusions')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'inclusions' ? 'border-b-4 border-red-900 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  INCLUSIONS
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-red-900 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce calendrier que vous vivez près de celui avec 365 jours divisés en 12 mois—vous pouvez remercier les anciens Égyptiens pour l'invention pratique qui vous aide à gérer votre temps. En ces vacances de 9 jours, vous vous émerveillerez devant de nombreuses autres réalisations étonnantes de cette civilisation remarquable. Les intimidantes grandes pyramides, l'énigmatique Sphinx et les extraordinaires temples de Louxor et de Karnak valent bien le voyage tout comme les trésors étincelants à l'intérieur du grand musée égyptien du Caire, y compris les fascinants objets funéraires de l'opulente tombe du "roi Tut." Alors que vous naviguez sur le légendaire Nil de Louxor à Assouan lors de cette visite passionnante de l'Égypte, vous serez également impressionné par le temple Kom Ombo, troquerez des marchandises dans les bazars animés et vous balancerez vers les tambours rythmés lors d'une balade relaxante en felouque. Le long du Nil.
                </p>

                {/* Section Accès mondial */}
                <div className="border-l-4 border-red-900 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Accès mondial</h3>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">Caractéristiques spéciales incluses dans cette tournée :</p>
                  <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Visite guidée du Caire avec visite du Grand Musée égyptien</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Visite guidée du Sphinx et des grandes pyramides de Gizeh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Croisière sur le Nil de quatre nuits entre Louxor et Assouan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Visite guidée touristique de Louxor avec visite des temples de Karnak et de Louxor et de l'avenue des Sphinx</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Visite guidée du Temple d'Horus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Visite guidée à pied à Kom Ombo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Croisière sur un <strong>felucca</strong> (voilier traditionnel en bois) autour de l'île de Kitchener et du mausolée d'Aga Khan à Assouan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span>Vols entre Le Caire et Louxor et Assouan et Le Caire</span>
                    </li>
                  </ul>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Informations de contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold mb-2">Inscription par e-mail</p>
                      <p className="text-sm font-semibold mb-2">Brochures</p>
                      <p className="text-sm font-semibold">866.755.8581</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Chat en direct</p>
                      <p className="text-sm font-semibold">Y compris l'air intra-vacances et les taxes</p>
                    </div>
                  </div>
                </div>

                {/* Section Circuits similaires */}
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">Circuits similaires</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Circuit 1 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400" 
                        alt="Circuit 1" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Le Caire et Alexandrie</h4>
                        <p className="text-sm text-gray-700 mb-2">Évadez-vous avec une croisière sur le Nil de 3 nuits</p>
                        <p className="text-xs text-gray-500 mb-4">excursion de 11 jours du Caire au Caire</p>
                        <div className="flex justify-between items-center">
                          <span className="text-red-900 font-bold text-xl">3 429 $</span>
                          <button className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                            EN SAVOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Circuit 2 */}
                    <div className="border-2 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400" 
                        alt="Circuit 2" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Le Caire et Alexandrie</h4>
                        <p className="text-sm text-gray-700 mb-2">Évadez-vous avec une croisière sur le Nil de 3 nuits</p>
                        <p className="text-xs text-gray-500 mb-4">excursion de 11 jours du Caire au Caire</p>
                        <div className="flex justify-between items-center">
                          <span className="text-red-900 font-bold text-xl">3 259 $</span>
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
                    <div className="md:col-span-2 flex flex-col items-center">
                      <h4 className="font-semibold mb-4 text-center text-lg">Carte de l'itinéraire</h4>
                      <div className="inline-flex flex-col gap-3 bg-gray-50 p-6 rounded">
                        <div className="flex items-center gap-3">
                          <span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></span>
                          <span className="text-sm">Overnight</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-4 h-4 rounded-full bg-red-900 border-2 border-gray-300"></span>
                          <span className="text-sm">Start City</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-gray-300"></span>
                          <span className="text-sm">End City</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Repas */}
                <div className="mb-10 bg-gray-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🍽️</span>
                    <span className="font-semibold text-lg">REPAS</span>
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Petit Déjeuner</div>
                      <div className="text-3xl font-bold text-red-900">8</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Déjeuner</div>
                      <div className="text-3xl font-bold text-red-900">4</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Dîner</div>
                      <div className="text-3xl font-bold text-red-900">6</div>
                    </div>
                  </div>
                </div>

                {/* Section Navires */}
                <div className="mb-10 bg-gray-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🚢</span>
                    <span className="font-semibold text-lg">NAVIRES</span>
                  </div>
                  <div className="text-lg font-semibold">MS Royal Lily</div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=24.5,21.5,37.0,32.5&layer=mapnik&marker=30.0444,31.2357"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée Egypte"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/27.000/31.000" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte de l'Égypte
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">ARRIVER AU CAIRE, EN ÉGYPTE</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <section className="mb-10">
                        <h3 className="text-2xl font-semibold mb-4">
                          Bienvenue au Caire
                        </h3>

                        <p className="text-justify mb-4">
                          Bienvenue au Caire, capitale vibrante de l'Égypte et berceau de l'une
                          des plus grandes civilisations de l'histoire. Dès votre arrivée,
                          installez-vous confortablement à votre hôtel et commencez à ressentir
                          l'atmosphère unique de cette ville mythique.
                        </p>

                        <p className="text-justify mb-6">
                          À <strong>18h00</strong>, retrouvez votre <strong>Tour Director</strong>
                          ainsi que vos compagnons de voyage pour un <strong>dîner de bienvenue</strong>
                          organisé à votre hôtel. Ce moment convivial est l'occasion idéale de
                          faire connaissance, de découvrir le programme du séjour et de démarrer
                          l'aventure dans une ambiance chaleureuse.
                        </p>
                      </section>

                      <section className="mb-10">
                        <h3 className="text-2xl font-semibold mb-4">
                          Profitez au maximum de votre temps libre
                        </h3>

                        <p className="text-justify mb-4">
                          Bien que ce voyage inclue des excursions essentielles et des sites
                          incontournables, vous aurez également du temps libre pour explorer
                          davantage selon vos envies personnelles.
                        </p>

                        <p className="text-justify mb-4">
                          Afin d'enrichir votre expérience, une sélection d'excursions optionnelles
                          est proposée. Ces activités peuvent être réservées sur place et vous
                          permettront de découvrir des aspects plus authentiques et immersifs du
                          Caire et de ses environs.
                        </p>
                      </section>

                      <section className="mb-10">
                        <h3 className="text-2xl font-semibold mb-4">
                          Excursion optionnelle : Découvrez la magie du Vieux Caire
                        </h3>

                        <p className="text-justify mb-4">
                          Rejoignez-nous pour une visite guidée inoubliable à travers le
                          <strong> Vieux Caire</strong>, un quartier chargé d'histoire où se mêlent
                          traditions, spiritualité et architecture millénaire.
                        </p>

                        <p className="text-justify mb-4">
                          Cette excursion vous plonge au cœur de ruelles secrètes, de mosquées
                          majestueuses, d'églises anciennes et de marchés animés, témoins vivants
                          des différentes époques qui ont façonné cette ville intemporelle.
                        </p>

                        <ul className="list-disc list-inside space-y-2 mb-4">
                          <li><strong>Durée :</strong> 4 heures</li>
                          <li><strong>Niveau :</strong> Facile, accessible à tous</li>
                          <li><strong>Gamme de prix :</strong> $$</li>
                        </ul>

                        <p className="text-justify">
                          Cette excursion est idéale pour les voyageurs souhaitant approfondir
                          leur connaissance culturelle et historique du Caire tout en profitant
                          d'une expérience guidée riche et captivante.
                        </p>

                        <a
                          href="#"
                          className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                        >
                          Voir les détails de l'excursion
                        </a>
                      </section>

                      </div>
                    )}
                  </div>

                  {/* Jour 2 */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">LE CAIRE. EXCURSION À GIZEH</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Secrets du Sphinx
                          </h3>

                          <p className="text-justify mb-4">
                            Votre découverte égyptienne commence dans la ville animée du
                            <strong> Caire</strong>, située sur les rives du Nil. Cette première
                            journée inclut une visite touristique guidée de la capitale, avec une
                            immersion culturelle et historique exceptionnelle.
                          </p>

                          <p className="text-justify mb-4">
                            La visite comprend l'exploration du <strong>Grand Musée égyptien</strong>,
                            où sont exposés des trésors inestimables retraçant plusieurs millénaires
                            de civilisation. Par la suite, un court trajet en voiture vous conduit à
                            <strong> Gizeh</strong>, point de départ d'une visite emblématique.
                          </p>

                          <p className="text-justify mb-6">
                            Sur place, découvrez certains des monuments les plus reconnaissables au
                            monde : le <strong>Sphinx</strong> et les <strong>Grandes Pyramides</strong>,
                            symboles éternels de l'Égypte antique.
                          </p>
                        </section>

                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Histoire et mystère
                          </h3>

                          <p className="text-justify mb-4">
                            Approchez-vous de près des <strong>Pyramides de Gizeh</strong>, l'une des
                            <strong> sept merveilles du monde</strong>, et laissez-vous impressionner
                            par leur grandeur et leur perfection architecturale.
                          </p>

                          <p className="text-justify mb-4">
                            Réfléchissez aux secrets énigmatiques du <strong>Sphinx</strong> et de la
                            <strong> Grande Pyramide de Gizeh</strong>, témoins silencieux d'une époque
                            fascinante. Admirez le monument colossal de <strong>Khéops</strong>,
                            considéré comme la plus grande pyramide jamais construite.
                          </p>

                          <p className="text-justify mb-6">
                            Avec une hauteur originale d'environ <strong>496 pieds</strong>, cette
                            prouesse architecturale demeure l'un des plus grands mystères de
                            l'histoire humaine.
                          </p>
                        </section>

                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Profitez au maximum de votre temps libre
                          </h3>

                          <p className="text-justify mb-4">
                            Bien que ce voyage inclue des excursions essentielles et des sites
                            incontournables, vous disposerez également de temps libre pour explorer
                            selon vos envies.
                          </p>

                          <p className="text-justify mb-6">
                            Une sélection d'excursions optionnelles est proposée afin d'enrichir
                            votre expérience. Ces activités peuvent être réservées sur place, selon
                            les disponibilités.
                          </p>
                        </section>

                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Excursion optionnelle : Croisière sur le Nil avec dîner et danse du ventre
                          </h3>

                          <p className="text-justify mb-4">
                            La splendeur et les merveilles anciennes du <strong>Nil</strong> vous
                            attendent lors de cette croisière nocturne inoubliable.
                          </p>

                          <p className="text-justify mb-4">
                            Profitez d'un <strong>dîner-croisière</strong> incluant un buffet
                            somptueux, de la musique live et une <strong>danse du ventre fascinante</strong>,
                            dans une ambiance élégante et festive.
                          </p>

                          <ul className="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Durée :</strong> 3h45</li>
                            <li><strong>Expérience :</strong> Culturelle & divertissante</li>
                            <li><strong>Gamme de prix :</strong> $$</li>
                          </ul>

                          <a
                            href="#"
                            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                          >
                            Voir les détails de l'excursion
                          </a>
                        </section>

                      </div>
                    )}
                  </div>

                  {/* Jour 3 */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">CAIRO–WADI EL NATRUN–ALEXANDRIA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                       <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            La Perle Méditerranéenne
                          </h3>

                          <p className="text-justify mb-4">
                            Aujourd'hui, quittez <strong>Le Caire</strong> et prenez la route en
                            direction du désert égyptien. En chemin, arrêt à un
                            <strong> Globus Local Favorite</strong> : l'oasis de
                            <strong> Wadi El Natrun</strong>, célèbre pour son importance spirituelle
                            et historique.
                          </p>

                          <p className="text-justify mb-4">
                            Vous visiterez l'un des <strong>monastères coptes</strong> de la région,
                            témoins vivants de plusieurs siècles de traditions religieuses et
                            culturelles. Cette étape offre une immersion unique dans le patrimoine
                            spirituel de l'Égypte.
                          </p>

                          <p className="text-justify mb-4">
                            Le voyage se poursuit vers la ville charismatique
                            <strong> d'Alexandrie</strong>, située sur la côte méditerranéenne. Fondée
                            par Alexandre le Grand, la ville est réputée pour son atmosphère
                            cosmopolite et son <strong>ancien système de tramway</strong>, le plus
                            ancien d'Afrique encore en service.
                          </p>

                          <p className="text-justify mb-6">
                            À votre arrivée, profitez de <strong>temps libre</strong> pour explorer
                            Alexandrie à votre rythme : promenades sur la corniche, découverte de
                            cafés historiques ou immersion dans la vie locale.
                          </p>

                          <p className="text-gray-600 italic mb-6">
                            Distance parcourue : 137 miles / 220 km
                          </p>
                        </section>

                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Culture & Traditions
                          </h3>

                          <p className="text-justify mb-4">
                            En arabe, <strong>Wadi El Natrun</strong> signifie
                            <em> « Vallée des Nitrates »</em>, en référence à la présence de huit lacs
                            naturels riches en nitrates dans la région. Ces ressources naturelles ont
                            joué un rôle important dans l'histoire économique et religieuse du pays.
                          </p>

                          <p className="text-justify mb-4">
                            En langue copte, la région est également connue sous le nom de
                            <strong> Shi-Hyt</strong>, que l'on peut traduire par
                            <em> « équilibre du cœur »</em> ou
                            <em> « mesure des cœurs »</em>, soulignant la dimension spirituelle
                            profonde du lieu.
                          </p>

                          <p className="text-justify">
                            Les <strong>monastères de Wadi El Natrun</strong> constituent une source
                            essentielle pour l'étude du patrimoine copte. Ils ont largement contribué
                            au développement de la <strong>littérature</strong>, de
                            <strong> l'art</strong> et de l'
                            <strong>architecture coptes</strong>, faisant de cette région un pilier
                            fondamental de la culture chrétienne d'Égypte.
                          </p>
                        </section>

                      </div>
                    )}
                  </div>

                  {/* Jour 4 */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">ALEXANDRIE</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Majesté Royale des Jardins de Montazah
                          </h3>

                          <p className="text-justify mb-4">
                            Ce matin, partez à la découverte de la fascinante ville
                            <strong> d'Alexandrie</strong> lors d'une visite guidée complète mettant
                            en lumière ses sites historiques les plus emblématiques.
                          </p>

                          <p className="text-justify mb-4">
                            L'excursion débute par la visite des
                            <strong> catacombes de Kom El Shoqafa</strong>, l'un des plus grands sites
                            funéraires romains d'Égypte, suivie du célèbre
                            <strong> pilier de Pompée</strong>, monument imposant témoignant de
                            l'héritage gréco-romain de la ville.
                          </p>

                          <p className="text-justify mb-4">
                            Vous poursuivrez avec la découverte de la
                            <strong> Bibliotheca Alexandrina</strong>, institution culturelle moderne
                            érigée en hommage à l'ancienne bibliothèque d'Alexandrie, symbole
                            universel du savoir et de la connaissance.
                          </p>

                          <p className="text-justify mb-4">
                            La visite se conclut par la majestueuse
                            <strong> citadelle de Qaitbay</strong>, forteresse du XVe siècle construite
                            sur l'emplacement de l'ancien phare d'Alexandrie, l'une des sept merveilles
                            du monde antique.
                          </p>

                          <p className="text-justify mb-6">
                            L'après-midi est consacré à la visite des
                            <strong> jardins de Montazah</strong>, autrefois lieu de villégiature de la
                            famille royale égyptienne. Vous profiterez ensuite d'un
                            <strong> après-midi et d'une soirée tranquilles</strong>, idéals pour la
                            détente et les promenades en bord de mer.
                          </p>
                        </section>

                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Histoire & Culture
                          </h3>

                          <p className="text-justify mb-4">
                            Fondée par <strong>Alexandre le Grand</strong>, Alexandrie fut autrefois
                            l'une des villes les plus riches et les plus influentes du monde antique,
                            rayonnant par son commerce, sa culture et son rôle intellectuel majeur.
                          </p>

                          <p className="text-justify">
                            Les <strong>jardins du palais de Montazah</strong> témoignent de cette
                            grandeur passée. Conçus comme un lieu de détente et de loisirs pour le
                            <strong> Khédive</strong> et ses invités, ils s'étendent sur de vastes
                            espaces verdoyants ornés de fleurs, d'arbres majestueux et d'arbustes
                            soigneusement aménagés. Ce cadre paisible reflète le raffinement et
                            l'élégance de l'époque royale égyptienne.
                          </p>
                        </section>

                      </div>
                    )}
                  </div>

                  {/* Jour 5 */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">ALEXANDRIE–CAIRO</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Une Promenade à Travers la Terre Rouge
                          </h3>

                          <p className="text-justify mb-4">
                            Profitez d'une <strong>route panoramique</strong> pour retourner
                            au <strong>Caire</strong> en traversant les paysages spectaculaires
                            du <strong>désert d'El Beheira</strong>. Cette traversée offre une
                            immersion visuelle unique au cœur des vastes étendues désertiques
                            d'Égypte, où l'horizon semble infini.
                          </p>

                          <p className="text-justify mb-4">
                            À votre arrivée au Caire, bénéficiez d'un
                            <strong> temps libre</strong> pour effectuer vos dernières découvertes,
                            flâner dans la ville ou vous détendre à l'hôtel avant de retrouver
                            vos compagnons de voyage.
                          </p>

                          <p className="text-justify mb-6">
                            En soirée, partagez un
                            <strong> dîner d'adieu</strong> convivial à l'hôtel, un moment privilégié
                            pour revivre les temps forts du voyage et célébrer la fin de cette
                            expérience mémorable.
                          </p>

                          <p className="text-sm text-gray-500 mb-6">
                            Distance parcourue : 155 mi / 250 km
                          </p>
                        </section>

                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Merveille Naturelle
                          </h3>

                          <p className="text-justify mb-4">
                            Dans l'Antiquité, les Égyptiens désignaient le désert sous le nom de
                            <strong> « terre rouge »</strong>, afin de le distinguer de la plaine
                            fertile du Nil appelée la <strong> « terre noire »</strong>.
                          </p>

                          <p className="text-justify mb-4">
                            Cette distinction chromatique reflète la réalité géographique :
                            les sables du désert possèdent une
                            <strong> teinte rougeâtre</strong>, tandis que les terres entourant
                            le Nil devenaient noires après le retrait des crues annuelles,
                            enrichissant le sol en limon fertile.
                          </p>

                          <p className="text-justify">
                            Au fil des millénaires, le
                            <strong> Nil</strong> a façonné son cours actuel, créant un ruban de vie
                            entouré par les <strong> déserts de l'Est et de l'Ouest</strong>.
                            Cette opposition entre désert aride et vallée fertile est l'un des
                            fondements de la civilisation égyptienne.
                          </p>
                        </section>

                        <section className="mb-10">
                          <h3 className="text-2xl font-semibold mb-4">
                            Profitez au Maximum de Votre Temps Libre
                          </h3>

                          <p className="text-justify mb-4">
                            Bien que ce voyage inclue de nombreuses visites incontournables,
                            vous pouvez enrichir votre expérience en explorant
                            <strong> des excursions optionnelles</strong> durant votre temps libre.
                          </p>

                          <p className="text-justify">
                            Une sélection d'activités supplémentaires pourra être proposée
                            sur place afin de personnaliser votre séjour selon vos envies,
                            qu'il s'agisse de découvertes culturelles, de moments de détente
                            ou d'expériences uniques au Caire.
                          </p>
                        </section>

                      </div>
                    )}
                  </div>

                  {/* Jour 6 */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">CAIRE</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p>
                          Voyages en toute sécurité jusqu'à ce que nous nous retrouvions !
                        </p>

                        <p>
                          Vos vacances se terminent par le petit déjeuner ce matin.
                        </p>

                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'inclusions' && (
              <div>
                {/* Section Favoris locaux */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-red-900 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">⭐</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif">Favoris locaux</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Chaque visite Globus comprend nos favoris locaux exclusifs, spécialement inclus pour partager les expériences 
                    authentiques qui rendent chaque destination unique. Apprenez à connaître les locaux et les saveurs locales que vous 
                    pourriez manquer par vous-même ! Ces moments privilégiés vous permettent de découvrir l'âme véritable de l'Égypte, 
                    au-delà des sites touristiques classiques.
                  </p>
                </div>

                {/* Section Points forts */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl md:text-3xl font-serif">Points forts de la tournée</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                    Découvrez quelque chose d'inattendu et d'inoubliable de manière spéciale, seul Globus peut partager les points forts 
                    des visites touristiques avec des surprises hors des sentiers battus pour des moments de ce monde dont vous vous 
                    souviendrez toute votre vie !
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Nos guides locaux experts vous révèleront des secrets et des anecdotes que vous ne trouverez dans aucun guide 
                    touristique. Des rencontres authentiques, des points de vue uniques et des expériences mémorables vous attendent 
                    à chaque étape de votre voyage.
                  </p>
                </div>

                {/* Section Liberté */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl md:text-3xl font-serif">Liberté. Votre Voie.</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                    Avec Globus, la liberté est intégrée à vos vacances. Des itinéraires parfaitement planifiés maximisent votre temps. 
                    Lorsqu'elles sont disponibles, les excursions Choice Excursions incluses vous invitent à façonner votre expérience. 
                    Et les conseils privilégiés de votre directeur de tournée transforment le temps libre en découvertes.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Avec Globus, la flexibilité fait partie du plan. Profitez d'un équilibre parfait entre visites guidées et temps libre, 
                    vous permettant d'explorer à votre rythme tout en bénéficiant de l'expertise de professionnels du voyage.
                  </p>
                </div>

                {/* Section Video TOURING BEYOND */}
                <div className="mb-12 bg-gray-900 text-white p-8 md:p-12 rounded-lg">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 flex items-center gap-3">
                      <span>TOURING</span>
                      <span className="text-yellow-600">▼</span>
                      <span>BEYOND</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <p className="mb-6 leading-relaxed text-sm md:text-base">
                          Globus livre 'wow' dans le monde une scène, un spectacle et une histoire à la fois. Des circuits classiques qui 
                          nous ont rendus célèbres aux nouvelles vacances passionnées de "choice", aux circuits indépendants et en petits 
                          groupes aux voyages hors saison et hors des sentiers battus, votre autocar vous attend !
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                          Ouvrez votre cœur à l'incroyable lors d'une visite qui vous emmène au-delà des guides. Au-delà de l'ordinaire. 
                          Au-delà des mots. Ne voyez pas que le monde. Tournez-le.
                        </p>
                      </div>
                      <div className="relative">
                        <img 
                          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600" 
                          alt="Video Touring Beyond" 
                          className="w-full rounded-lg shadow-2xl"
                        />
                        <button className="absolute inset-0 flex items-center justify-center group">
                          <span className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-2xl md:text-3xl text-red-900 shadow-lg group-hover:scale-110 transition-transform">
                            ▶
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hebergement' && (
              <div>
                {/* Section UNESCO */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-4">FAITS SAILLANTS</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-8">Villes Et Lieux</h3>
                    <div className="flex items-center gap-4">
                      <span className="h-px bg-red-900 w-16 md:w-32"></span>
                      <span className="text-red-900 text-2xl">▼</span>
                      <span className="h-px bg-red-900 w-16 md:w-32"></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex justify-center md:justify-start">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/UNESCO_World_Heritage_Site_logo.svg/200px-UNESCO_World_Heritage_Site_logo.svg.png" 
                        alt="UNESCO" 
                        className="w-48 md:w-64"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                        <strong>Sites du patrimoine mondial</strong> sont désignés par l'Organisation des Nations Unies pour l'éducation, 
                        la science et la culture (UNESCO) pour leur importance culturelle, historique, scientifique ou autre. Les sites sont 
                        jugés comme contenant du patrimoine culturel et naturel dans le monde considéré comme d'une valeur exceptionnelle 
                        pour l'humanité.
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                        Les sites suivants du patrimoine mondial de l'UNESCO peuvent être vus ou visités pendant ces vacances :
                      </p>
                      <ul className="list-none space-y-3 text-gray-700 text-sm md:text-base">
                        <li className="flex items-start gap-3">
                          <span className="text-red-900 mt-1">•</span>
                          <span>Caire historique</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-900 mt-1">•</span>
                          <span>Les champs pyramidaux de Gizeh</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section Hôtels */}
                <div className="mb-12">
                  <div className="mb-8">
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">TRIÉ SUR LE VOLET</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-red-900 w-16 md:w-32"></span>
                      <span className="text-red-900 text-2xl">▼</span>
                      <span className="h-px bg-red-900 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Nous avons examiné et sélectionné à la main les meilleurs hôtels du monde en tenant compte de l'emplacement, du confort 
                      et du style. Profitez d'hôtels de première classe dans chaque destination et enregistrez-vous avec la certitude que nous 
                      avons déjà tout vérifié pour votre confort et votre commodité.
                    </p>
                  </div>

                  {/* Navigation des villes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('lecaire')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lecaire' 
                          ? 'bg-red-900 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LE CAIRE
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('alexandrie')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'alexandrie' 
                          ? 'bg-red-900 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ALEXANDRIE
                    </button>
                  </div>

                  {/* Contenu des hôtels - Le Caire */}
                  {activeHotelTab === 'lecaire' && (
                    <div className="space-y-16">
                      {/* Hyatt Regency Le Caire Ouest */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hyatt Regency Le Caire" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hyatt Regency Le Caire Ouest</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              km 22 Cairo-Alexandria Desert Road, Pyramids Heights Business Park Le Caire Égypte
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📶</span>
                                <span>WiFi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💎</span>
                                <span className="text-sm font-semibold">Deluxe</span>
                              </span>
                              <span className="text-xs text-gray-500">Hôtel tel qu'illustré ou similaire</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Superbement situé au cœur du parc d'affaires exclusif Pyramids Heights et à proximité des pyramides de Gizeh, 
                              de la ville et des centres commerciaux. Les chambres climatisées contemporaines disposent de baies vitrées 
                              offrant une vue panoramique sur les pyramides, les piscines ou les jardins luxuriants. Chaque chambre est 
                              équipée des dernières technologies telles que des miroirs intelligents et un éclairage LED à capteur, ainsi 
                              que d'un minibar, d'un coffre-fort, d'une cafétière et d'articles de toilette gratuits.
                            </p>
                          </div>
                        </div>

                        {/* Carte et commodités Hyatt */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={30.0131} 
                              lng={31.2089} 
                              height="300px" 
                              showControls={true}
                            />
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Commodités</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div>Services Spa</div>
                                <div>ATM</div>
                                <div>Bureau De Conciergerie</div>
                                <div>Change De Devises</div>
                                <div>Piscine</div>
                                <div>Bain Chaud</div>
                              </div>
                              <div className="space-y-2">
                                <div>Centre D'affaires</div>
                                <div>Blanchisserie Disponible</div>
                                <div>Wifi Gratuit</div>
                                <div>Bar/Salon</div>
                                <div>Salle De Fitness</div>
                              </div>
                              <div className="space-y-2">
                                <div>Ascenseur</div>
                                <div>Restaurant Sur Place</div>
                                <div>Salon De Beauté</div>
                                <div>Machine À Glace</div>
                                <div>Parking/Valet</div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Caractéristiques De La Chambre</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700">
                              <div className="space-y-2">
                                <div>Cafetière</div>
                                <div>Téléphone</div>
                                <div>Mini-Bar</div>
                                <div>Coffre-Fort Dans La Chambre</div>
                                <div>Fenêtre S'ouvre</div>
                              </div>
                              <div className="space-y-2">
                                <div>Chambres Non-Fumeurs</div>
                                <div>Télévision</div>
                                <div>Chambres Fumeurs</div>
                                <div>Service En Chambre</div>
                                <div>Accès Internet</div>
                              </div>
                              <div className="space-y-2">
                                <div>Bureau</div>
                                <div>Sèche-Cheveux</div>
                                <div>Fer/Planche À Repasser</div>
                                <div>Réveil Appels</div>
                                <div>Câble/Satellite</div>
                                <div>Toilettes Gratuites</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tour Et Casino Sonesta */}
                      <div className="pt-12 border-t-2 border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" 
                              alt="Tour Et Casino Sonesta" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Tour Et Casino Sonesta</h4>
                            <p className="text-sm text-gray-600 mb-5">3 rue El Tayaran. Le Caire Égypte</p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📶</span>
                                <span>WiFi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💎</span>
                                <span className="text-sm font-semibold">Supérieure Première Classe</span>
                              </span>
                              <span className="text-xs text-gray-500">Hôtel tel qu'illustré ou similaire</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé dans le quartier résidentiel de Nasr City, l'hôtel Sonesta Tower & Casino comprend cinq restaurants, 
                              deux bars, un centre de remise en forme moderne, une piscine extérieure avec terrasse bien exposée et un casino. 
                              Les 409 chambres climatisées sont spacieuses et élégamment décorées, équipées d'une télévision à écran plat 
                              avec chaînes internationales, d'un minibar, d'un coffre-fort dans la chambre et d'un accès Internet haut débit 
                              sans fil gratuit. Le grand et le spa avec hammam, bain à remous et hydrothérapie sont parfaits pour une 
                              relaxation profonde.
                            </p>
                          </div>
                        </div>

                        {/* Carte et commodités Sonesta */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={30.0444} 
                              lng={31.2357} 
                              height="300px" 
                              showControls={true}
                            />
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Commodités</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div>Services Spa</div>
                                <div>Ascenseur</div>
                                <div>Restaurant Sur Place</div>
                                <div>Bagagerie</div>
                              </div>
                              <div className="space-y-2">
                                <div>Centre D'affaires</div>
                                <div>Blanchisserie Disponible</div>
                                <div>Wifi Gratuit</div>
                                <div>Bar/Salon</div>
                              </div>
                              <div className="space-y-2">
                                <div>Salle De Fitness</div>
                                <div>Bureau De Conciergerie</div>
                                <div>Change De Devises</div>
                                <div>Bain Chaud</div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Caractéristiques De La Chambre</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700">
                              <div className="space-y-2">
                                <div>Bureau</div>
                                <div>Sèche-Cheveux</div>
                                <div>Mini-Bar</div>
                                <div>Cafetière</div>
                              </div>
                              <div className="space-y-2">
                                <div>Téléphone</div>
                                <div>Télévision</div>
                                <div>Fer/Planche À Repasser</div>
                                <div>Service En Chambre</div>
                              </div>
                              <div className="space-y-2">
                                <div>Accès Internet</div>
                                <div>Climatisation</div>
                                <div>Toilettes Gratuites</div>
                                <div>Câble/Satellite</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Alexandrie */}
                  {activeHotelTab === 'alexandrie' && (
                    <div className="space-y-16">
                      {/* Corniche Du Hilton Alexandria */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Corniche Du Hilton Alexandria" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Corniche Du Hilton Alexandria</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              544, route El Geish, Sidi Bishr Alexandrie Égypte
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📶</span>
                                <span>WiFi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💎</span>
                                <span className="text-sm font-semibold">Supérieure Première Classe</span>
                              </span>
                              <span className="text-xs text-gray-500">Hôtel tel qu'illustré ou similaire</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Bénéficiant d'un emplacement idéal au cœur d'Alexandrie, surplombant la mer Méditerranée et à quelques pas 
                              de sa propre plage privée. Les chambres élégantes disposent d'une connexion Wi-Fi gratuite, d'un coffre-fort, 
                              d'un minibar et d'une bouilloire électrique. Les autres équipements comprennent une piscine à débordement 
                              sur le toit, un spa et une salle de sport entièrement équipée. Savourez des plats innovants dans l'un des 
                              restaurants sur place, ou détendez-vous simplement dans le salon de l'hôtel avec une tasse de café.
                            </p>
                          </div>
                        </div>

                        {/* Carte et commodités Hilton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={31.2412} 
                              lng={29.9631} 
                              height="300px" 
                              showControls={true}
                            />
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Commodités</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div>Services Spa</div>
                                <div>Ascenseur</div>
                                <div>Restaurant Sur Place</div>
                                <div>Bagagerie</div>
                                <div>Bar/Salon</div>
                              </div>
                              <div className="space-y-2">
                                <div>Centre D'affaires</div>
                                <div>Blanchisserie Disponible</div>
                                <div>Wifi Gratuit</div>
                                <div>Machine À Glace</div>
                                <div>Parking/Valet</div>
                              </div>
                              <div className="space-y-2">
                                <div>Salle De Fitness</div>
                                <div>Bureau De Conciergerie</div>
                                <div>Change De Devises</div>
                                <div>Piscine</div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Caractéristiques De La Chambre</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700">
                              <div className="space-y-2">
                                <div>Journal Gratuit</div>
                                <div>Messagerie Vocale</div>
                                <div>Chambres Non-Fumeurs</div>
                                <div>Téléphone</div>
                                <div>Bureau</div>
                                <div>Télévision</div>
                              </div>
                              <div className="space-y-2">
                                <div>Séche-Cheveux</div>
                                <div>Fer/Planche À Repasser</div>
                                <div>Réveil Appels</div>
                                <div>Accès Internet</div>
                                <div>Toilettes Gratuites</div>
                              </div>
                              <div className="space-y-2">
                                <div>Mini-Bar</div>
                                <div>Coffre-Fort Dans La Chambre</div>
                                <div>Fenêtre S'ouvre</div>
                                <div>Câble/Satellite</div>
                                <div>Accès Handicapés/Chambres</div>
                                <div>Chambres Fumeurs</div>
                                <div>Service En Chambre</div>
                                <div>Réveil</div>
                                <div>Climatisation (Saisonnière)</div>
                                <div>Climatisation</div>
                              </div>
                            </div>
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
                <h3 className="text-xl font-semibold mb-6">Réservez Votre Circuit</h3>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">À partir de : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-gray-400 line-through">$1,699</span>
                    <span className="text-4xl font-bold text-red-900">$1,569</span>
                    <button className="text-sm text-gray-500 hover:text-gray-700">ⓘ</button>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne</div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-900"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-900"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-02-15">15 Février 2026</option>
                    <option value="2026-03-08">8 Mars 2026</option>
                    <option value="2026-04-12">12 Avril 2026</option>
                    <option value="2026-09-05">5 Septembre 2026</option>
                    <option value="2026-10-17">17 Octobre 2026</option>
                  </select>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-black text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    Supplément unique supprimé pour certaines vacances Globus Escapes Europe 2026/2027.**
                  </p>
                  <p className="text-xs text-gray-300">* Départ le 27 septembre 2026</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-red-900 text-white py-4 font-bold text-2xl mb-4 hover:bg-red-800 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-red-900 text-white py-4 font-semibold text-base mb-4 hover:bg-red-800 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Besoin d'aide ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Notre équipe de spécialistes est disponible pour répondre à vos questions.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    NOUS CONTACTER
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=24.5,21.5,37.0,32.5&layer=mapnik&marker=30.0444,31.2357"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Égypte miniature"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-red-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}