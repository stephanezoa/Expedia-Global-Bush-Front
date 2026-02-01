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
          title="Carte interactive Cameroun"
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.5,2.0,12.0,4.5&layer=mapnik&marker=3.848,11.5021&marker=2.934,9.910"
          style={{ border: 0 }}
          allowFullScreen
          title="Itinéraire Cameroun Yaoundé-Kribi"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=9/2.934/9.910" target="_blank" rel="noopener noreferrer">
            Agrandir la carte Kribi
          </a>
        </div>
      </div>
      
      <div className="inline-flex flex-col gap-3 bg-gray-50 p-6 rounded mt-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></span>
          <span className="text-sm">Nuitée</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-900 border-2 border-gray-300"></span>
          <span className="text-sm">Yaoundé (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-gray-300"></span>
          <span className="text-sm">Kribi (destination finale)</span>
        </div>
      </div>
    </div>
  );
};

export default function Tresorscamerounyaoundekribi() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('kribi'); // Par défaut Kribi

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero - Image Kribi */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌊</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Trésors du Cameroun : Les Plages Paradisiaques de Kribi</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              Découvrez le joyau côtier du Cameroun : Kribi et ses plages de sable blanc, ses chutes spectaculaires et sa culture unique
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">8</div>
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
        
        {/* Indicateur de destination principale */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🏖️</span>
            <span className="text-sm font-semibold">KRIBI - JOYAU CÔTIER</span>
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
                <span className="bg-red-900 text-white px-3 py-1 font-bold">KRIBI</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours avec 4 nuits à Kribi</span>
                <button className="ml-auto border-2 border-red-900 text-red-900 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-red-900 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Circuit concentré sur l'expérience balnéaire à Kribi</span>
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
                  onClick={() => setActiveTab('kribi')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'kribi' ? 'border-b-4 border-red-900 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  DÉCOUVERTE DE KRIBI
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
                {/* Description principale focalisée sur Kribi */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 8 jours vous offre une immersion complète dans le paradis côtier du Cameroun. Kribi, joyau du littoral atlantique, vous accueille avec ses plages de sable blanc immaculé, ses eaux turquoise et son atmosphère tropicale unique. Après une brève introduction à Yaoundé, la capitale, vous plongez dans l'univers enchanteur de Kribi où vous passerez 4 nuits pour explorer ses merveilles naturelles : les légendaires chutes de la Lobé qui se jettent directement dans l'océan, les villages de pêcheurs traditionnels, les plages secrètes de Grand Batanga et la riche culture des populations côtières.
                </p>

                {/* Section Points forts de Kribi */}
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Incontournables de Kribi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">🏖️</span>
                        <div>
                          <h4 className="font-semibold">Plages de Sable Blanc</h4>
                          <p className="text-sm text-gray-700">20 km de plages vierges bordées de cocotiers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">🌊</span>
                        <div>
                          <h4 className="font-semibold">Chutes de la Lobé</h4>
                          <p className="text-sm text-gray-700">Uniques au monde : chutes qui se jettent dans l'océan</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">🐟</span>
                        <div>
                          <h4 className="font-semibold">Fruits de Mer Frais</h4>
                          <p className="text-sm text-gray-700">Dégustation de poissons, crevettes et huîtres locales</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">🛶</span>
                        <div>
                          <h4 className="font-semibold">Navigation Traditionnelle</h4>
                          <p className="text-sm text-gray-700">Balades en pirogue sur les rivières côtières</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Accès mondial */}
                <div className="border-l-4 border-red-900 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Exclusives à Kribi</h3>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">Activités et visites incluses dans votre séjour à Kribi :</p>
                  <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span><strong>Visite complète des chutes de la Lobé</strong> avec guide local spécialisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span><strong>Excursion à Grand Batanga</strong> : découverte des plages sauvages préservées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span><strong>Rencontre avec la communauté Bagyeli</strong> (pygmées) et découverte de leurs traditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span><strong>Dégustation de fruits de mer frais</strong> dans un restaurant typique en bord de plage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span><strong>Balade en pirogue traditionnelle</strong> sur la rivière Kienké avec pêcheur local</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span><strong>Visite d'une ferme aquacole</strong> : élevage de crevettes et huîtres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-900 mt-1">•</span>
                      <span><strong>Temps libre extensif</strong> pour profiter des plages et activités nautiques</span>
                    </li>
                  </ul>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur Kribi */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi Kribi est unique ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Kribi est la seule destination balnéaire d'Afrique Centrale où vous pouvez admirer des chutes d'eau se jetant directement dans l'océan Atlantique. Son microclimat tropical, ses plages infinies et sa culture côtière authentique en font une destination exceptionnelle.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Plages de sable blanc</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Forêt tropicale</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Culture côtière</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Gastronomie maritime</span>
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
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" 
                        alt="Circuit Kribi" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Séjour Balnéaire à Kribi</h4>
                        <p className="text-sm text-gray-700 mb-2">6 jours entièrement consacrés aux plages de Kribi</p>
                        <p className="text-xs text-gray-500 mb-4">Circuit court et intense à Kribi</p>
                        <div className="flex justify-between items-center">
                          <span className="text-red-900 font-bold text-xl">1 899 $</span>
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
                        alt="Circuit Littoral" 
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="font-bold text-lg mb-2">Littoral Camerounais</h4>
                        <p className="text-sm text-gray-700 mb-2">Kribi, Douala et Limbe en 10 jours</p>
                        <p className="text-xs text-gray-500 mb-4">Découverte complète du littoral</p>
                        <div className="flex justify-between items-center">
                          <span className="text-red-900 font-bold text-xl">3 299 $</span>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Kribi : Perle du Littoral Camerounais</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Située à 150 km au sud de Douala, Kribi bénéficie d'un microclimat exceptionnel avec des températures moyennes de 25°C toute l'année. La ville s'étend sur 20 km de plages de sable blanc, bordée par la forêt équatoriale d'un côté et l'océan Atlantique de l'autre.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Température moyenne</div>
                            <div className="text-red-900 font-bold">25°C</div>
                          </div>
                          <div>
                            <div className="font-semibold">Longueur des plages</div>
                            <div className="text-red-900 font-bold">20 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Distance de Yaoundé</div>
                            <div className="text-red-900 font-bold">280 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Meilleure période</div>
                            <div className="text-red-900 font-bold">Nov-Avril</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Repas */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🐟</span>
                    <span className="font-semibold text-lg">GASTRONOMIE DE KRIBI</span>
                  </div>
                  <div className="flex flex-wrap gap-8">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Repas de poisson frais</div>
                      <div className="text-3xl font-bold text-red-900">5</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Dégustation fruits de mer</div>
                      <div className="text-3xl font-bold text-red-900">3</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Dîners face à la mer</div>
                      <div className="text-3xl font-bold text-red-900">4</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    À Kribi, savourez des plats à base de poisson frais pêché le matin même, des crevettes géantes, des huîtres de la lagune et des spécialités locales comme le "mbongo tchobi" (sauce noire aux crustacés).
                  </p>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Détaillée de la Région de Kribi</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=9.5,2.5,10.5,3.5&layer=mapnik&marker=2.934,9.910"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte détaillée Kribi"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=11/2.934/9.910" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte de Kribi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Rapide mention de Yaoundé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE AU CAMEROUN</span>
                          <span className="text-sm text-gray-600">Bref passage à Yaoundé avant Kribi</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à Yaoundé, installation rapide à l'hôtel et dîner de bienvenue. Cette étape vous permet de vous acclimater avant de vous diriger vers la destination principale : Kribi.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Kribi */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-500 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS KRIBI</span>
                          <span className="text-sm text-gray-600">Découverte du littoral atlantique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Départ matinal pour Kribi. Trajet à travers des paysages de forêt tropicale qui laissent peu à peu place aux premières vues sur l'océan Atlantique. Arrivée à Kribi en début d'après-midi et installation dans votre hôtel face à la mer.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Première découverte de Kribi */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">KRIBI - PREMIÈRES ÉMERGIES</span>
                          <span className="text-sm text-gray-600">Plages, cocotiers et fruits de mer</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-900">Journée d'immersion à Kribi</h4>
                        <p className="text-justify mb-4">
                          Première journée complète à Kribi ! Déjeuner de fruits de mer frais dans un restaurant typique. L'après-midi, découverte libre des plages de sable blanc bordées de cocotiers. Temps pour la baignade dans les eaux chaudes de l'Atlantique.
                        </p>
                        <p className="text-justify mb-4">
                          En soirée, dîner au son des vagues avec spécialités de poisson grillé et accompagnement de plantain.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Chutes de la Lobé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">LES CHUTES DE LA LOBÉ</span>
                          <span className="text-sm text-gray-600">Spectacle naturel unique au monde</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-900">Journée exceptionnelle aux chutes de la Lobé</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour les fameuses chutes de la Lobé, uniques au monde car elles se jettent directement dans l'océan Atlantique. Visite guidée complète avec explications géologiques et historiques.
                        </p>
                        <p className="text-justify mb-4">
                          Rencontre avec la communauté Bagyeli (pygmées) qui vit aux alentours des chutes. Découverte de leur mode de vie traditionnel et de leur connaissance exceptionnelle de la forêt.
                        </p>
                        <p className="text-justify">
                          Retour à Kribi en fin d'après-midi. Soirée libre pour profiter de l'ambiance balnéaire.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Grand Batanga */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">GRAND BATANGA</span>
                          <span className="text-sm text-gray-600">Plages sauvages et villages de pêcheurs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-900">Exploration des plages préservées</h4>
                        <p className="text-justify mb-4">
                          Excursion vers le sud de Kribi en direction de Grand Batanga. Découverte des plages sauvages quasi désertes, des villages de pêcheurs traditionnels et des paysages côtiers spectaculaires.
                        </p>
                        <p className="text-justify mb-4">
                          Visite d'une ferme aquacole où sont élevées des crevettes et des huîtres selon des méthodes traditionnelles. Dégustation de produits frais de la mer.
                        </p>
                        <p className="text-justify">
                          Après-midi libre sur les plages de Grand Batanga. Possibilité de baignade dans des eaux cristallines ou de simple farniente sous les cocotiers.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Pirogue et culture locale */}
                  <div className="border-2 border-gray-300 overflow-hidden border-red-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-red-900 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PIROGUE TRADITIONNELLE</span>
                          <span className="text-sm text-gray-600">Navigation sur la rivière Kienké</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-red-200">
                        <h4 className="text-xl font-semibold mb-3 text-red-900">Journée culturelle et nautique</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à une balade en pirogue traditionnelle sur la rivière Kienké. Guidé par un pêcheur local, découvrez la mangrove, la faune aquatique et les techniques de pêche traditionnelles.
                        </p>
                        <p className="text-justify mb-4">
                          Après-midi libre pour profiter une dernière fois des plages de Kribi. Possibilité d'activités nautiques optionnelles : kayak, paddle, ou simple baignade.
                        </p>
                        <p className="text-justify">
                          En soirée, dîner d'adieu spécial sur la plage avec feu de camp, musique traditionnelle et spectacle de danse. Célébration des moments forts passés à Kribi.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Retour rapide à Yaoundé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR VERS YAOUNDÉ</span>
                          <span className="text-sm text-gray-600">Derniers moments à Kribi</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit déjeuner face à l'océan. Temps libre matinal pour une dernière baignade ou des achats de souvenirs. Départ pour Yaoundé en milieu de journée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport de Yaoundé pour votre vol de retour, avec dans le cœur les souvenirs inoubliables de Kribi et ses plages paradisiaques.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'kribi' && (
              <div>
                {/* Section dédiée à Kribi */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏖️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Kribi : La Perle du Littoral Camerounais</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" 
                        alt="Plage de Kribi" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Pourquoi choisir Kribi ?</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Kribi est bien plus qu'une simple station balnéaire. C'est une expérience complète qui combine plages paradisiaques, nature spectaculaire et culture authentique. Avec ses 20 km de plages de sable blanc immaculé, ses eaux turquoise et son atmosphère tropicale, Kribi offre un dépaysement total.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Unique au monde, les chutes de la Lobé qui se jettent directement dans l'océan Atlantique symbolisent parfaitement cette destination exceptionnelle où la forêt équatoriale rencontre l'océan.
                      </p>
                    </div>
                  </div>

                  {/* Les 5 raisons de choisir Kribi */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6 text-center">Les 5 Raisons de Choisir Kribi</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🌊</div>
                        <h5 className="font-semibold mb-2">Chutes de la Lobé</h5>
                        <p className="text-sm text-gray-700">Uniques au monde, ces chutes se jettent directement dans l'océan</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🏝️</div>
                        <h5 className="font-semibold mb-2">Plages Infinies</h5>
                        <p className="text-sm text-gray-700">20 km de plages de sable blanc bordées de cocotiers</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🐟</div>
                        <h5 className="font-semibold mb-2">Gastronomie Maritime</h5>
                        <p className="text-sm text-gray-700">Poissons, crevettes et huîtres fraîches pêchées quotidiennement</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🛶</div>
                        <h5 className="font-semibold mb-2">Culture Côtière</h5>
                        <p className="text-sm text-gray-700">Rencontre avec pêcheurs et communauté Bagyeli</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🌴</div>
                        <h5 className="font-semibold mb-2">Climat Tropical</h5>
                        <p className="text-sm text-gray-700">Température moyenne de 25°C toute l'année</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow border">
                        <div className="text-3xl mb-3">🤿</div>
                        <h5 className="font-semibold mb-2">Activités Nautiques</h5>
                        <p className="text-sm text-gray-700">Pirogue, kayak, pêche et baignade toute l'année</p>
                      </div>
                    </div>
                  </div>

                  {/* Les plages de Kribi */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-6">Les Plages de Kribi</h4>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" 
                            alt="Plage centrale" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Plage Centrale de Kribi</h5>
                          <p className="text-gray-700 mb-2">La plage principale, facile d'accès avec ses nombreux restaurants et bars. Parfaite pour les premières découvertes et la baignade.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Accès facile</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Restaurants</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Baignade</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400" 
                            alt="Plage de Londji" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Plage de Londji</h5>
                          <p className="text-gray-700 mb-2">À 15 km au sud de Kribi, une plage préservée entourée de végétation tropicale. Plus sauvage et intime.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Préservée</span>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Calme</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Nature</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/3">
                          <img 
                            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400" 
                            alt="Grand Batanga" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h5 className="font-semibold text-lg mb-2">Grand Batanga</h5>
                          <p className="text-gray-700 mb-2">À 30 km au sud, des plages quasi désertes et des villages de pêcheurs traditionnels. Authenticité garantie.</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Désert</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Authentique</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Pêcheurs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gastronomie */}
                  <div className="mb-10 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-6 text-red-800">Gastronomie à Kribi</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-4xl mb-3">🐟</div>
                        <h5 className="font-semibold mb-2">Poisson Frais</h5>
                        <p className="text-sm text-gray-700">Capitaine, bar, dorade pêchés le matin même</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-3">🦐</div>
                        <h5 className="font-semibold mb-2">Crevettes Géantes</h5>
                        <p className="text-sm text-gray-700">Crevettes de la lagune, grillées ou en sauce</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-3">🦪</div>
                        <h5 className="font-semibold mb-2">Huîtres de Kribi</h5>
                        <p className="text-sm text-gray-700">Huîtres élevées dans la lagune, dégustées fraîches</p>
                      </div>
                    </div>
                    <p className="text-center mt-6 text-gray-700">
                      À Kribi, chaque repas est une fête des sens avec des produits de la mer frais accompagnés de plantain, manioc et légumes locaux.
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">FOCUS KRIBI</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels à Kribi</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-red-900 w-16 md:w-32"></span>
                      <span className="text-red-900 text-2xl">🏖️</span>
                      <span className="h-px bg-red-900 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Kribi propose des hébergements exceptionnels en bord de mer. Nous avons sélectionné pour vous les meilleurs hôtels offrant une vue imprenable sur l'océan Atlantique, un accès direct aux plages et tout le confort nécessaire pour un séjour paradisiaque.
                    </p>
                  </div>

                  {/* Navigation des villes - Kribi par défaut */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('kribi')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'kribi' 
                          ? 'bg-red-900 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      KRIBI (4 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('yaounde')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'yaounde' 
                          ? 'bg-red-900 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      YAOUNDÉ (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hôtels - Kribi (étendu) */}
                  {activeHotelTab === 'kribi' && (
                    <div className="space-y-16">
                      {/* Hôtel Ilomba - Premier choix */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                                alt="Hôtel Ilomba Kribi" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-red-900 text-white px-3 py-1 text-sm font-bold">
                                NOTRE RECOMMANDATION
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Ilomba</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Plage de Kribi, BP 144, Kribi, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📶</span>
                                <span>WiFi Haut Débit</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine Face à la Mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant Gastronomique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Situé directement sur la plage de sable blanc de Kribi, l'Hôtel Ilomba offre l'expérience balnéaire ultime. Les bungalows et chambres sont décorés dans un style africain contemporain avec terrasse privée donnant sur l'océan. Réveillez-vous au son des vagues et profitez d'un petit déjeuner face à la mer. L'hôtel dispose d'un restaurant de fruits de mer réputé, d'un bar de plage, d'une piscine à débordement et d'un spa proposant des massages traditionnels. Activités nautiques incluses : kayak, paddle et planche à voile. Parfait pour les couples et les familles.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Vue Mer</span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Plage Privée</span>
                              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Spa</span>
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Activités Nautiques</span>
                            </div>
                          </div>
                        </div>

                        {/* Carte et commodités Ilomba */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={2.934} 
                              lng={9.910} 
                              height="300px" 
                              showControls={true}
                            />
                            <p className="text-xs text-gray-600 mt-2">
                              Situé au cœur de la plage principale de Kribi, à 5 minutes à pied du centre-ville.
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
                                  <span>Restaurant Fruits de Mer</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🛏️</span>
                                  <span>Chambres Vue Mer</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🚣</span>
                                  <span>Kayak & Paddle</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>💆</span>
                                  <span>Spa & Massages</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🏖️</span>
                                  <span>Plage Privée</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>📶</span>
                                  <span>WiFi Gratuit</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🚗</span>
                                  <span>Parking Sécurisé</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>👶</span>
                                  <span>Accueil Enfants</span>
                                </div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Votre Séjour à l'Ilomba</h5>
                            <p className="text-sm text-gray-700 mb-4">
                              Pendant vos 4 nuits à l'Hôtel Ilomba, vous profiterez chaque matin d'un petit déjeuner buffet face à l'océan. Les soirées sont rythmées par des dîners aux chandelles sur la plage et des spectacles de danse traditionnelle les weekends.
                            </p>
                            <div className="bg-yellow-50 p-4 rounded">
                              <p className="text-sm font-semibold mb-2">Inclus dans votre séjour :</p>
                              <ul className="list-disc list-inside text-sm text-gray-700">
                                <li>Petits déjeuners buffet face à la mer</li>
                                <li>Accès illimité à la plage privée</li>
                                <li>Matériel de plage (serviettes, transats, parasols)</li>
                                <li>Activités nautiques non motorisées</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hotel Framotel la Pirogue */}
                      <div className="pt-12 border-t-2 border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" 
                              alt="Hotel Framotel la Pirogue" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Framotel la Pirogue</h4>
                            <p className="text-sm text-gray-600 mb-5">Plage de Londji, Kribi, Cameroun</p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌴</span>
                                <span>Jardin Tropical</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛶</span>
                                <span className="text-sm font-semibold">Ambiance Authentique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🐟</span>
                                <span className="text-sm font-semibold">Grillades de Poissons</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Complexe hôtelier de charme situé sur la plage préservée de Londji, à 15 minutes de Kribi. Les bungalows en bois sont répartis dans un jardin tropical luxuriant de 5 hectares. Chaque bungalow dispose d'une terrasse privée avec hamac, d'une salle de bain moderne et d'un décor africain authentique. L'ambiance est conviviale et décontractée. Restaurant spécialisé dans les grillades de poisson et fruits de mer, bar de plage, piscine naturelle et organisation d'excursions vers les chutes de la Lobé. Idéal pour les voyageurs en quête d'authenticité.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Bungalows</span>
                              <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">Bois</span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Plage Londji</span>
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Grillades</span>
                            </div>
                          </div>
                        </div>

                        {/* Carte et commodités Framotel */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <InteractiveMap 
                              lat={2.900} 
                              lng={9.880} 
                              height="300px" 
                              showControls={true}
                            />
                            <p className="text-xs text-gray-600 mt-2">
                              Situé sur la plage préservée de Londji, à 15 minutes en voiture du centre de Kribi.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-5 text-lg">Expérience Authentique</h5>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 text-sm text-gray-700 mb-8">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🏠</span>
                                  <span>Bungalows Bois</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🔥</span>
                                  <span>Grillades sur Plage</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🌿</span>
                                  <span>Jardin Tropical</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🛶</span>
                                  <span>Excursions Pirogue</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🏄</span>
                                  <span>Location Vélos</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🐚</span>
                                  <span>Collecte Coquillages</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>🌅</span>
                                  <span>Vue Couchers de Soleil</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🎣</span>
                                  <span>Initiation Pêche</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🛌</span>
                                  <span>Hamacs Privés</span>
                                </div>
                              </div>
                            </div>

                            <h5 className="font-semibold mb-5 text-lg">Votre Séjour à la Pirogue</h5>
                            <p className="text-sm text-gray-700 mb-4">
                              Au Framotel la Pirogue, vivez au rythme de la nature. Réveils au chant des oiseaux, petit déjeuner sous les cocotiers, journée entre plage et forêt. Les soirées sont animées par des grillades de poisson frais sur la plage et des échanges avec les autres voyageurs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hôtels - Yaoundé (réduit) */}
                  {activeHotelTab === 'yaounde' && (
                    <div className="space-y-16">
                      {/* Hôtel Mont Fébé */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                              alt="Hôtel Mont Fébé" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Mont Fébé</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Mont Fébé, BP 121, Yaoundé, Cameroun
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📶</span>
                                <span>WiFi</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel confortable pour vos 2 nuits à Yaoundé avant et après votre séjour à Kribi. Bien situé avec vue sur la ville.
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
                  <span className="text-2xl">🏖️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Séjour à Kribi</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">À partir de : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-gray-400 line-through">$2,899</span>
                    <span className="text-4xl font-bold text-red-900">$2,699</span>
                    <button className="text-sm text-gray-500 hover:text-gray-700">ⓘ</button>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - 4 nuits à Kribi incluses</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous les transferts, hébergement, visites à Kribi, et la plupart des repas
                  </div>
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
                  <label className="block text-sm font-semibold mb-2">Date de Départ pour Kribi</label>
                  <select 
                    value={selectedDeparture} 
                    onChange={(e) => setSelectedDeparture(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-900"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-15">15 Janvier 2026 (Meilleure saison)</option>
                    <option value="2026-02-12">12 Février 2026 (Plages optimales)</option>
                    <option value="2026-03-08">8 Mars 2026 (Saison sèche)</option>
                    <option value="2026-06-05">5 Juin 2026 (Saison intermédiaire)</option>
                    <option value="2026-07-17">17 Juillet 2026 (Été à Kribi)</option>
                    <option value="2026-11-10">10 Novembre 2026 (Début saison idéale)</option>
                  </select>
                </div>

                {/* Encart promotionnel Kribi */}
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>OFFRE SPÉCIALE KRIBI :</strong> Nuit supplémentaire gratuite à l'Hôtel Ilomba pour toute réservation avant le 31 décembre 2025.
                  </p>
                  <p className="text-xs text-gray-300">* Valable pour les départs de janvier à mars 2026</p>
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
                  <p className="text-sm font-semibold mb-2">Questions sur Kribi ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos spécialistes du Cameroun vous conseillent sur le meilleur moment pour visiter Kribi.
                  </p>
                  <button className="w-full border-2 border-gray-800 py-3 font-semibold hover:bg-gray-100 transition-colors">
                    CONSEILS KRIBI
                  </button>
                </div>
              </div>

              {/* Carte miniature Kribi */}
              <div className="border-2 border-gray-300 p-4 shadow-lg">
                <div className="relative w-full h-64 overflow-hidden rounded">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=9.5,2.5,10.5,3.5&layer=mapnik&marker=2.934,9.910"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Kribi miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Kribi - Plages
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Localisation exacte de votre hébergement à Kribi
                </p>
              </div>

              {/* Widget météo Kribi */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🌤️</span>
                  <span>Météo à Kribi</span>
                </h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">25°C</div>
                  <div className="text-sm text-gray-700 mb-1">Température moyenne annuelle</div>
                  <div className="text-xs text-gray-600">Ensoleillement : 8h/jour</div>
                  <div className="mt-3 text-sm">
                    <span className="font-semibold">Meilleure période :</span> Novembre à Avril
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Saison sèche - Plages optimales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-red-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Conseils Kribi</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}