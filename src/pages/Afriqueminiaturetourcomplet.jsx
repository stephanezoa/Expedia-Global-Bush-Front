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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire du Grand Tour</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,2.0,16.0,13.0&layer=mapnik&marker=4.051,9.767&marker=5.478,10.417&marker=3.848,11.502&marker=2.934,9.910&marker=9.305,13.395"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire complet Cameroun"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/6.0/12.0" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-emerald-800 border-2 border-gray-300"></span>
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
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Littoral (Kribi)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Yaoundé (départ)</span>
        </div>
      </div>
    </div>
  );
};

export default function Afriqueminiaturetourcomplet() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('douala');
  const [activeRegionTab, setActiveRegionTab] = useState('ouest');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏔️', title: 'Montagnes de l\'Ouest', desc: 'Chefferies Bamiléké et paysages en terrasses' },
    { icon: '🦁', title: 'Safari au Nord', desc: 'Parcs nationaux et grande faune africaine' },
    { icon: '🏖️', title: 'Plages de Kribi', desc: 'Littoral atlantique et chutes de la Lobé' },
    { icon: '🌳', title: 'Forêt Équatoriale', desc: 'Biodiversité exceptionnelle et pygmées Baka' },
    { icon: '🏛️', title: 'Capitales', desc: 'Douala économique et Yaoundé politique' },
    { icon: '👑', title: 'Cultures', desc: '250 ethnies et traditions vivantes' },
  ];

  const regions = [
    { name: 'Littoral', color: 'bg-blue-100', textColor: 'text-blue-800', cities: ['Douala', 'Kribi', 'Limbé'] },
    { name: 'Ouest', color: 'bg-green-100', textColor: 'text-green-800', cities: ['Bafoussam', 'Dschang', 'Bangangté'] },
    { name: 'Nord', color: 'bg-yellow-100', textColor: 'text-yellow-800', cities: ['Garoua', 'Maroua', 'Ngaoundéré'] },
    { name: 'Sud', color: 'bg-emerald-100', textColor: 'text-emerald-800', cities: ['Ebolowa', 'Sangmélima'] },
    { name: 'Centre', color: 'bg-purple-100', textColor: 'text-purple-800', cities: ['Yaoundé', 'Mbalmayo'] },
    { name: 'Est', color: 'bg-red-100', textColor: 'text-red-800', cities: ['Bertoua', 'Batouri'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">L'Afrique en Miniature : Tour Complet</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              15 jours à travers tout le Cameroun : montagnes, savanes, forêts, plages et cultures
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">15</div>
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
            <span className="text-2xl">🇨🇲</span>
            <span className="text-sm font-semibold">TOUT LE CAMEROUN</span>
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
                <span className="bg-emerald-800 text-white px-3 py-1 font-bold">GRAND TOUR</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">15 jours - Douala à Yaoundé</span>
                <button className="ml-auto border-2 border-emerald-800 text-emerald-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-emerald-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Le tour le plus complet pour découvrir la diversité camerounaise</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-emerald-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU TOUR
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-emerald-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('regions')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'regions' ? 'border-b-4 border-emerald-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  RÉGIONS VISITÉES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-emerald-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce Grand Tour de 15 jours est l'expérience ultime pour découvrir le Cameroun dans toute sa diversité. Véritable "Afrique en miniature", vous parcourrez les régions les plus emblématiques du pays : des plages atlantiques de Kribi aux montagnes verdoyantes de l'Ouest, des savanes du Nord aux forêts denses du Sud, sans oublier les capitales dynamiques de Douala et Yaoundé. Un voyage complet qui combine nature, culture, aventure et découverte.
                </p>

                {/* Section Points forts */}
                <div className="bg-emerald-50 border-l-4 border-emerald-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-800">Les Points Forts du Tour Complet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-emerald-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences incluses */}
                <div className="border-l-4 border-emerald-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Safari</strong> dans le parc de la Bénoué</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Visite des chefferies</strong> Bamiléké classées UNESCO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Randonnée</strong> dans les monts Bamboutos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Découverte des chutes</strong> de la Lobé à Kribi</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Immersion en forêt</strong> avec les pygmées Baka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Vol intérieur</strong> Douala-Garoua inclus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Guide accompagnateur</strong> francophone expert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Transport</strong> en véhicule privé climatisé</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la diversité */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi "Afrique en Miniature" ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le Cameroun concentre sur un seul territoire toutes les facettes du continent africain : forêt équatoriale, savanes, montagnes, désert, littoral, volcans, lacs, et une mosaïque de plus de 250 ethnies avec des cultures, langues et traditions différentes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">4 climats</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">5 zones géographiques</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">250 ethnies</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">2 langues officielles</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Kilomètres parcourus</div>
                      <div className="text-3xl font-bold text-emerald-800">2,800</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Régions visitées</div>
                      <div className="text-3xl font-bold text-emerald-800">6</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits d'hébergement</div>
                      <div className="text-3xl font-bold text-emerald-800">14</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Repas inclus</div>
                      <div className="text-3xl font-bold text-emerald-800">42</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Complet du Cameroun</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce tour vous emmène dans un périple à travers les paysages les plus variés d'Afrique : du niveau de la mer à 4,070m d'altitude, de la forêt équatoriale humide au désert sahélien, en passant par les savanes et les plateaux montagneux.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude minimale</div>
                            <div className="text-emerald-800 font-bold">0m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Altitude maximale</div>
                            <div className="text-emerald-800 font-bold">2,740m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température min</div>
                            <div className="text-emerald-800 font-bold">15°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température max</div>
                            <div className="text-emerald-800 font-bold">35°C</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée du Parcours</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,2.0,16.0,13.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée parcours"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/6.0/12.0" target="_blank" rel="noopener noreferrer">
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
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À DOUALA</span>
                          <span className="text-sm text-gray-600">Capitale économique du Cameroun</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Douala. Accueil par votre guide et transfert à l'hôtel. Première immersion dans l'ambiance africaine avec une visite du marché artisanal et du quartier historique. Briefing sur le déroulement du voyage. Dîner de bienvenue avec spécialités de fruits de mer.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2-3 - Région du Littoral */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2-3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LITTORAL ATLANTIQUE</span>
                          <span className="text-sm text-gray-600">Kribi et ses plages paradisiaques</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Découverte de la côte atlantique</h4>
                        <p className="text-justify mb-4">
                          Route vers Kribi, joyau du littoral camerounais. Deux jours pour découvrir les plages de sable blanc bordées de cocotiers et les célèbres chutes de la Lobé qui se jettent directement dans l'océan. Rencontre avec les pêcheurs locaux, dégustation de fruits de mer frais, et détente sur les plages. Excursion à Grand Batanga pour découvrir des plages encore sauvages et préservées.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4-6 - Région de l'Ouest */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4-6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTAGNES DE L'OUEST</span>
                          <span className="text-sm text-gray-600">Bafoussam et culture Bamiléké</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Immersion culturelle et paysages</h4>
                        <p className="text-justify mb-4">
                          Route vers Bafoussam à travers des paysages spectaculaires de collines cultivées en terrasses. Visite de la chefferie de Bandjoun, classée au patrimoine UNESCO. Randonnée dans les monts Bamboutos (2,740m) avec vue panoramique sur toute la région. Découverte de l'artisanat local (tissage, poterie, forge) et spectacle de danses traditionnelles masquées. Dégustation du café Arabica local.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7-9 - Région du Nord (vol inclus) */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7-9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SAVANES DU NORD</span>
                          <span className="text-sm text-gray-600">Garoua et safari dans la Bénoué</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Aventure safari</h4>
                        <p className="text-justify mb-4">
                          Vol intérieur Douala-Garoua. Arrivée dans la région des savanes et découverte d'un tout autre visage du Cameroun. Safari de deux jours dans le parc national de la Bénoué à la recherche des éléphants, hippopotames, antilopes et nombreux oiseaux. Rencontre avec les éleveurs Peuls et découverte de leur mode de vie pastoral. Nuit en campement au bord de la rivière Bénoué.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10-12 - Région du Centre */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10-12
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">YAOUNDÉ ET CENTRE</span>
                          <span className="text-sm text-gray-600">Capitale politique et forêt tropicale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Culture urbaine et nature</h4>
                        <p className="text-justify mb-4">
                          Retour vers le centre du pays et arrivée à Yaoundé, capitale politique. Visite du musée national, du monument de la réunification et du marché central. Excursion au parc de la Mefou pour observer les primates. Route vers la forêt tropicale pour une immersion chez les pygmées Baka : découverte de leurs techniques de chasse, médecine par les plantes, et vie traditionnelle.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 13-14 - Région du Sud */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(13)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          13-14
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT ÉQUATORIALE</span>
                          <span className="text-sm text-gray-600">Ebolowa et cacao</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 13 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 13 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Au cœur de la forêt tropicale</h4>
                        <p className="text-justify mb-4">
                          Direction Ebolowa, au cœur de la région productrice de cacao. Visite d'une plantation et découverte du processus de fabrication du chocolat. Randonnée dans la forêt dense avec guide spécialisé pour observer la flore et la faune unique. Navigation sur le lac Ossa, sanctuaire des lamantins. Dernier dîner d'adieu avec spectacle de danses traditionnelles.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 15 - Départ de Yaoundé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(15)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          15
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE YAOUNDÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 15 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 15 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Matinée libre pour les derniers achats de souvenirs. Transfert à l'aéroport de Yaoundé pour votre vol de retour, emportant avec vous les souvenirs inoubliables de cette traversée complète du Cameroun, véritable "Afrique en miniature".
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
                    <div className="flex items-center justify-center w-14 h-14 bg-emerald-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🗺️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-emerald-800">Les Régions Visitées</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce Grand Tour vous fait découvrir les 6 régions les plus représentatives du Cameroun, chacune avec son identité unique, ses paysages caractéristiques et ses cultures vivantes.
                  </p>

                  {/* Grille des régions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-6 rounded-lg shadow`}>
                        <h4 className="text-xl font-semibold mb-3">{region.name}</h4>
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Villes visitées :</div>
                          <div className="text-sm">{region.cities.join(', ')}</div>
                        </div>
                        <button 
                          onClick={() => setActiveRegionTab(region.name.toLowerCase())}
                          className="text-sm font-semibold hover:underline"
                        >
                          En savoir plus →
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Détail des régions */}
                  {activeRegionTab === 'ouest' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-green-800">Région de l'Ouest</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Caractéristiques :</strong> Montagnes, collines cultivées en terrasses, climat frais<br/>
                            <strong>Ethnies principales :</strong> Bamiléké<br/>
                            <strong>Spécialités :</strong> Café Arabica, artisanat (tissage, perles), danses masquées
                          </p>
                          <p className="text-gray-700">
                            Berceau de la culture Bamiléké, réputée pour ses chefferies traditionnelles classées au patrimoine UNESCO. Paysages spectaculaires de collines verdoyantes cultivées intensivement.
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
                    </div>
                  )}

                  {activeRegionTab === 'littoral' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-blue-800">Région du Littoral</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Caractéristiques :</strong> Côte atlantique, plages, mangroves, climat tropical humide<br/>
                            <strong>Ethnies principales :</strong> Sawa, Douala<br/>
                            <strong>Spécialités :</strong> Fruits de mer, pêche, commerce
                          </p>
                          <p className="text-gray-700">
                            Zone économique la plus importante avec le port de Douala. Plages paradisiaques de Kribi et Limbé. Culture côtière vivante avec traditions maritimes.
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
                    </div>
                  )}

                  {/* Autres régions suivent le même modèle... */}

                  {/* Carte synthétique */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte du Parcours</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,2.0,16.0,13.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte parcours régions"
                      ></iframe>
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT PRESTIGE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Sélection d'Hôtels 4*</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-emerald-800 w-16 md:w-32"></span>
                      <span className="text-emerald-800 text-2xl">🏨</span>
                      <span className="h-px bg-emerald-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour ce Grand Tour, nous avons sélectionné des hôtels 4* offrant confort, charme et emplacement idéal dans chaque région. Du palace urbain au lodge nature, chaque hébergement reflète le caractère unique de sa destination.
                    </p>
                  </div>

                  {/* Navigation des villes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('douala')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'douala' 
                          ? 'bg-emerald-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      DOUALA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('kribi')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kribi' 
                          ? 'bg-emerald-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KRIBI (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bafoussam')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bafoussam' 
                          ? 'bg-emerald-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BAFOUSSAM (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('garoua')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'garoua' 
                          ? 'bg-emerald-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      GAROUA (2 NUITS)
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
                              <div className="absolute top-4 left-4 bg-emerald-800 text-white px-3 py-1 text-sm font-bold">
                                4* LUXE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Akwa Palace</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Boulevard de la Liberté, Douala, Cameroun
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
                                <span className="text-sm font-semibold">Centre d'affaires</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Palace 4* situé au cœur du quartier des affaires de Douala. Chambres spacieuses avec vue sur la ville, équipées de tous les équipements modernes. Complexe hôtelier complet avec piscine, spa, centre de remise en forme, et plusieurs restaurants proposant une cuisine internationale. Service haut de gamme pour un séjour d'exception.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Kribi */}
                  {activeHotelTab === 'kribi' && (
                    <div className="space-y-16">
                      {/* Hôtel Ilomba */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Hôtel Ilomba Kribi" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Ilomba</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Plage de Kribi, Kribi, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏖️</span>
                                <span>Plage privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Vue océan</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Établissement 4* directement sur la plage de sable blanc de Kribi. Bungalows et chambres avec terrasse donnant sur l'océan. Restaurant de fruits de mer réputé, bar de plage, piscine à débordement. Ambiance balnéaire de luxe.
                            </p>
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
                              Carrefour Ndiengdam, Bafoussam, Cameroun
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
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* sur les hauteurs de Bafoussam avec vue panoramique sur les montagnes. Chambres spacieuses avec terrasse, restaurant gastronomique, centre de bien-être. Base idéale pour explorer la région.
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
                              Avenue des Peuls, Garoua, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🦁</span>
                                <span>Ambiance safari</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* avec architecture inspirée des cases traditionnelles. Chambres climatisées, piscine rafraîchissante, restaurant spécialisé en grillades. Base parfaite pour les safaris dans le parc de la Bénoué.
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
                    <span className="text-4xl font-bold text-emerald-800">$4,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Vol intérieur Douala-Garoua, tous transferts, hébergement 4*, visites, guides, repas
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-emerald-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-15">15 Janvier 2026</option>
                    <option value="2026-03-10">10 Mars 2026</option>
                    <option value="2026-06-05">5 Juin 2026</option>
                    <option value="2026-09-20">20 Septembre 2026</option>
                    <option value="2026-11-15">15 Novembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année - Meilleure période : Nov à Mars</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>GRAND TOUR EXCLUSIF :</strong> Accompagnement par un guide expert francophone
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 12 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-emerald-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-emerald-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-emerald-800 text-white py-4 font-semibold text-base mb-4 hover:bg-emerald-700 transition-colors shadow-md">
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
                    Nos conseillers spécialisés vous accompagnent dans la préparation de votre voyage.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,2.0,16.0,13.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Cameroun miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Cameroun - Tour Complet
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Parcours de 15 jours à travers tout le pays
                </p>
              </div>

              {/* Widget climat */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Climats Rencontrés</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Littoral (humide)</span>
                    <span className="font-bold text-blue-600">25-30°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ouest (fraîcheur)</span>
                    <span className="font-bold text-green-600">18-22°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nord (savane)</span>
                    <span className="font-bold text-yellow-600">25-35°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sud (forêt)</span>
                    <span className="font-bold text-emerald-600">23-28°C</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Prévoir des vêtements adaptés à chaque climat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-emerald-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Grand Tour</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}