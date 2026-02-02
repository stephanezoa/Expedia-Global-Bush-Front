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
        <h4 className="font-semibold text-center text-lg">Itinéraire du Sud Tchadien</h4>
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,8.0,19.0,12.0&layer=mapnik&marker=12.115,15.058&marker=8.566,16.083&marker=9.142,18.392"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Sud Tchad"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=7/10.0/16.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">N'Djaména (arrivée)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Moundou (Sud-Ouest)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Sarh (Sud)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Région du Logone</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">N'Djaména (départ)</span>
        </div>
      </div>
    </div>
  );
};

export default function Decouvertesudtchadien() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('ndjamena');
  const [activeRegionTab, setActiveRegionTab] = useState('sud');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏛️', title: 'N\'Djaména', desc: 'Capitale sur les rives du fleuve Chari' },
    { icon: '🌾', title: 'Moundou', desc: 'Deuxième ville et cœur économique du Sud' },
    { icon: '🌳', title: 'Sarh', desc: 'Porte du sud tchadien et de ses paysages' },
    { icon: '🚣', title: 'Région du Logone', desc: 'Fleuves et plaines fertiles' },
    { icon: '👑', title: 'Cultures du Sud', desc: 'Diversité ethnique et traditions' },
    { icon: '🌅', title: 'Savanes Vertes', desc: 'Paysages verdoyants du sud tchadien' },
  ];

  const regions = [
    { name: 'N\'Djaména', color: 'bg-blue-100', textColor: 'text-blue-800', cities: ['N\'Djaména', 'Douguia'] },
    { name: 'Logone Occidental', color: 'bg-green-100', textColor: 'text-green-800', cities: ['Moundou', 'Beïnamar'] },
    { name: 'Moyen-Chari', color: 'bg-yellow-100', textColor: 'text-yellow-800', cities: ['Sarh', 'Koumra'] },
    { name: 'Mandoul', color: 'bg-emerald-100', textColor: 'text-emerald-800', cities: ['Kélo', 'Bédjondo'] },
    { name: 'Logone Oriental', color: 'bg-purple-100', textColor: 'text-purple-800', cities: ['Doba', 'Bébédjia'] },
    { name: 'Tandjilé', color: 'bg-red-100', textColor: 'text-red-800', cities: ['Laï', 'Kélo'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌍</span>
          <span>G | DÉCOUVERTE</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Découverte du Sud Tchadien : De N'Djaména à Sarh</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              7 jours à travers le sud verdoyant du Tchad : capitales, villes historiques et savanes fertiles
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
            <span className="text-2xl">🇹🇩</span>
            <span className="text-sm font-semibold">SUD TCHADIEN</span>
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
                <span className="bg-emerald-800 text-white px-3 py-1 font-bold">DÉCOUVERTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - N'Djaména à Sarh</span>
                <button className="ml-auto border-2 border-emerald-800 text-emerald-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-emerald-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Circuit idéal pour découvrir la région la plus verte et fertile du Tchad</span>
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
                  Ce circuit de 7 jours vous invite à découvrir le sud du Tchad, région la plus verte et fertile du pays. De la capitale N'Djaména, située sur les rives du fleuve Chari, aux villes dynamiques de Moundou et Sarh, vous découvrirez un Tchad méconnu : celui des savanes verdoyantes, des cultures agricoles prospères et d'une diversité ethnique riche. Un voyage authentique au cœur de l'Afrique centrale.
                </p>

                {/* Section Points forts */}
                <div className="bg-emerald-50 border-l-4 border-emerald-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-800">Les Points Forts du Circuit</h3>
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
                        <span><strong>Visite complète</strong> de N'Djaména et ses marchés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Découverte de Moundou</strong> et sa célèbre brasserie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Exploration de Sarh</strong>, capitale du sud tchadien</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Rencontres culturelles</strong> avec les populations locales</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Navigation sur le Chari</strong> au coucher du soleil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Dégustation culinaire</strong> des spécialités du sud</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Guide accompagnateur</strong> francophone expert du Tchad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-800 mt-1">•</span>
                        <span><strong>Transport</strong> en véhicule 4x4 confortable</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la région */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Sud Tchadien ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Le sud du Tchad contraste avec l'image désertique souvent associée au pays. C'est une région fertile, arrosée par le fleuve Chari et ses affluents, où l'agriculture prospère et où les paysages de savanes vertes rappellent l'Afrique centrale. Une diversité ethnique importante avec les Sara, les Ngambaye, les Mbaye et bien d'autres.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Région la plus fertile</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Fleuve Chari et Logone</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Diversité ethnique</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Climat tropical</span>
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
                      <div className="text-3xl font-bold text-emerald-800">850</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Villes visitées</div>
                      <div className="text-3xl font-bold text-emerald-800">3</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Nuits d'hébergement</div>
                      <div className="text-3xl font-bold text-emerald-800">6</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Repas inclus</div>
                      <div className="text-3xl font-bold text-emerald-800">18</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours du Sud Tchadien</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers les régions les plus fertiles du Tchad, le long des fleuves Chari et Logone, des paysages de savanes aux zones agricoles prospères, découvrant les villes principales du sud et leur riche patrimoine culturel.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Altitude moyenne</div>
                            <div className="text-emerald-800 font-bold">350m</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température min</div>
                            <div className="text-emerald-800 font-bold">18°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Précipitations</div>
                            <div className="text-emerald-800 font-bold">900mm/an</div>
                          </div>
                          <div>
                            <div className="font-semibold">Température max</div>
                            <div className="text-emerald-800 font-bold">32°C</div>
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
                      src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,8.0,19.0,12.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée sud Tchad"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=7/10.0/16.5" target="_blank" rel="noopener noreferrer">
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
                  {/* Jour 1 - Arrivée à N'Djaména */}
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
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Capitale du Tchad sur le fleuve Chari</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de N'Djaména-Hassan Djamous. Accueil par votre guide et transfert à l'hôtel. Première découverte de la capitale tchadienne avec une visite du quartier administratif et du marché central. Installation à l'hôtel et briefing sur le déroulement du voyage. Dîner de bienvenue avec spécialités tchadiennes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉCOUVERTE DE N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Capitale et ses richesses culturelles</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Journée complète dans la capitale</h4>
                        <p className="text-justify mb-4">
                          Visite du Musée National du Tchad pour comprendre l'histoire et la diversité culturelle du pays. Découverte de la Grande Mosquée, du Palais présidentiel et du quartier du Port de pêche sur le fleuve Chari. Promenade sur l'Avenue Charles de Gaulle et découverte de l'architecture coloniale. En fin d'après-midi, navigation sur le fleuve Chari pour admirer le coucher de soleil. Dîner dans un restaurant typique.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Route vers Moundou */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">N'DJAMÉNA → MOUNDOU</span>
                          <span className="text-sm text-gray-600">À travers les savanes du sud</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Route vers la deuxième ville du Tchad</h4>
                        <p className="text-justify mb-4">
                          Départ matinal en direction de Moundou (environ 450 km). Traversée des paysages de savanes arborées et des villages traditionnels. Arrêt à Bongor pour découvrir le marché local et la vie quotidienne des populations du Logone. Continuation vers Moundou, arrivée en fin d'après-midi. Installation à l'hôtel et première découverte de la ville réputée pour sa brasserie. Dîner et nuit à Moundou.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Moundou et ses environs */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MOUNDOU ET RÉGION</span>
                          <span className="text-sm text-gray-600">Deuxième ville et culture locale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Immersion dans le Logone Occidental</h4>
                        <p className="text-justify mb-4">
                          Visite de la brasserie de Moundou, célèbre dans tout le Tchad. Découverte du marché central et de l'artisanat local. Excursion vers les villages environnants pour rencontrer les populations Ngambaye et découvrir leurs traditions. Visite d'une coopérative agricole (coton, arachides). En fin de journée, découverte de la vie culturelle de Moundou. Dîner avec spécialités locales.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Route vers Sarh */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MOUNDOU → SARH</span>
                          <span className="text-sm text-gray-600">Porte du sud tchadien</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Vers la troisième ville du Tchad</h4>
                        <p className="text-justify mb-4">
                          Route vers Sarh (environ 200 km) à travers les paysages agricoles de la région du Moyen-Chari. Arrêts dans les villages pour observer les techniques agricoles traditionnelles. Visite des plantations de canne à sucre et des rizières. Arrivée à Sarh, installation à l'hôtel. Découverte de la ville située sur les rives du fleuve Chari. Dîner et nuit à Sarh.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Sarh et retour vers N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden border-emerald-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SARH → N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Retour vers la capitale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-emerald-200">
                        <h4 className="text-xl font-semibold mb-3 text-emerald-800">Découverte de Sarh et retour</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la visite de Sarh : découverte du marché, du port fluvial sur le Chari, et du quartier administratif. Visite du Centre d'Élevage pour comprendre l'importance de l'élevage dans la région. Départ en début d'après-midi pour le retour vers N'Djaména (environ 550 km). Arrêts photos dans les paysages caractéristiques du sud tchadien. Arrivée à N'Djaména en soirée, installation à l'hôtel. Dîner d'adieu.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ de N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-emerald-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE N'DJAMÉNA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Matinée libre pour les derniers achats de souvenirs au marché artisanal. Transfert à l'aéroport de N'Djaména pour votre vol de retour, emportant avec vous les souvenirs d'un voyage authentique à travers le sud verdoyant du Tchad.
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
                    Ce circuit vous fait découvrir les régions les plus fertiles et peuplées du Tchad, chacune avec ses particularités géographiques, ethniques et économiques.
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
                  {activeRegionTab === 'n\'djaména' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-blue-800">N'Djaména et sa région</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Caractéristiques :</strong> Capitale, fleuve Chari, climat sahélien<br/>
                            <strong>Ethnies principales :</strong> Arabe tchadien, Kanembou, Sara<br/>
                            <strong>Spécialités :</strong> Administration, commerce, pêche
                          </p>
                          <p className="text-gray-700">
                            N'Djaména est la capitale et plus grande ville du Tchad, située sur la rive droite du fleuve Chari. Centre politique, administratif et économique du pays, la ville mélange architecture moderne et quartiers traditionnels. Le port de pêche et les marchés animés témoignent de la vitalité économique de la région.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={12.115} 
                            lng={15.058} 
                            height="300px" 
                            showControls={true}
                            region="N'Djaména Tchad"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRegionTab === 'logone occidental' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-green-800">Logone Occidental</h4>
                          <p className="text-gray-700 mb-4">
                            <strong>Caractéristiques :</strong> Région agricole, fleuve Logone, savanes<br/>
                            <strong>Ethnies principales :</strong> Ngambaye, Sara<br/>
                            <strong>Spécialités :</strong> Agriculture (coton, arachides), brasserie
                          </p>
                          <p className="text-gray-700">
                            Région fertile arrosée par le fleuve Logone, c'est le grenier agricole du Tchad. Moundou, deuxième ville du pays, est le cœur économique de cette région avec sa célèbre brasserie. Les paysages de savanes et les terres agricoles fertiles caractérisent cette zone prospère.
                          </p>
                        </div>
                        <div>
                          <InteractiveMap 
                            lat={8.566} 
                            lng={16.083} 
                            height="300px" 
                            showControls={true}
                            region="Logone Occidental Tchad"
                          />
                        </div>
                      </div>
                    </div>
                  )}

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
                        src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,8.0,19.0,12.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte parcours sud Tchad"
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT CONFORT</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Sélection d'Hôtels 3-4*</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-emerald-800 w-16 md:w-32"></span>
                      <span className="text-emerald-800 text-2xl">🏨</span>
                      <span className="h-px bg-emerald-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour ce circuit de découverte, nous avons sélectionné des hôtels confortables offrant un bon rapport qualité-prix dans chaque ville étape. Des établissements propres, sécurisés et bien situés pour profiter pleinement de votre séjour.
                    </p>
                  </div>

                  {/* Navigation des villes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('ndjamena')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ndjamena' 
                          ? 'bg-emerald-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      N'DJAMÉNA (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('moundou')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'moundou' 
                          ? 'bg-emerald-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MOUNDOU (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('sarh')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'sarh' 
                          ? 'bg-emerald-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SARH (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hôtels - N'Djaména */}
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
                              <div className="absolute top-4 left-4 bg-emerald-800 text-white px-3 py-1 text-sm font-bold">
                                4* LUXE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Hilton N'Djaména</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenue du Président Tombalbaye, N'Djaména, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine extérieure</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💼</span>
                                <span className="text-sm font-semibold">Centre d'affaires</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 4* situé au cœur de N'Djaména, à proximité des sites touristiques et du quartier des affaires. Chambres spacieuses et modernes avec climatisation, Wi-Fi gratuit et salle de bain privée. L'hôtel dispose d'une piscine extérieure, d'un centre de remise en forme, de plusieurs restaurants et bars. Service de qualité internationale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Moundou */}
                  {activeHotelTab === 'moundou' && (
                    <div className="space-y-16">
                      {/* Hôtel Résidence La Concorde */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Hôtel Résidence La Concorde" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Résidence La Concorde</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Quartier administrative, Moundou, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>Jardin tropical</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant local</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 3* confortable situé dans un quartier calme de Moundou. Chambres propres et fonctionnelles avec salle de bain privée, climatisation et télévision. Le restaurant sert une cuisine tchadienne et internationale. Jardin agréable pour se détendre après une journée de visites.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Sarh */}
                  {activeHotelTab === 'sarh' && (
                    <div className="space-y-16">
                      {/* Hôtel Le Relais du Chari */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel Le Relais du Chari" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Le Relais du Chari</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenue de l'Indépendance, Sarh, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Près du fleuve Chari</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Cuisine régionale</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 3* bien situé à proximité du centre-ville et du fleuve Chari. Chambres simples mais propres avec toutes les commodités essentielles. Restaurant proposant des spécialités de la région du Moyen-Chari. Personnel accueillant et service personnalisé.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-gray-500 line-through">$2,299</span>
                    <span className="text-4xl font-bold text-emerald-800">$2,099</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Promotion spéciale</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, hébergement, visites, guides francophones, repas
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
                    <option value="2026-11-10">10 Novembre 2026</option>
                    <option value="2026-12-05">5 Décembre 2026</option>
                    <option value="2027-01-15">15 Janvier 2027</option>
                    <option value="2027-02-20">20 Février 2027</option>
                    <option value="2027-03-10">10 Mars 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période : Novembre à Mars (saison sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>DÉCOUVERTE AUTENTHIQUE :</strong> Guide expert francophone spécialiste du Tchad
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 10 participants maximum</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur ce circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos conseillers spécialisés sur le Tchad vous accompagnent dans la préparation de votre voyage.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.0,8.0,19.0,12.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte sud Tchad miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Sud Tchad - Circuit Découverte
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Parcours de 7 jours à travers le sud verdoyant
                </p>
              </div>

              {/* Widget climat */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌡️</span>
                  <span>Climat du Sud Tchad</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>N'Djaména (sahélien)</span>
                    <span className="font-bold text-yellow-600">20-35°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Moundou (tropical)</span>
                    <span className="font-bold text-green-600">18-32°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sarh (tropical)</span>
                    <span className="font-bold text-green-600">19-33°C</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Saison sèche : Novembre à Mars - Saison des pluies : Juin à Septembre
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-emerald-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Tchad</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}