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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Guinée Équatoriale Complète</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=5.0,-2.0,12.0,4.5&layer=mapnik&marker=3.75,8.78&marker=-1.43,5.63&marker=0.39,6.68&marker=1.85,9.75&marker=2.15,11.33"
          style={{ border: 0 }}
          allowFullScreen
          title="Guinée Équatoriale Complète : Îles et Continent"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=6/1.5/8.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Malabo (Bioko)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-500 border-2 border-gray-300"></span>
          <span className="text-sm">Annobón (Île isolée)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-300"></span>
          <span className="text-sm">Corisco (Baie de Corisco)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-600 border-2 border-gray-300"></span>
          <span className="text-sm">Monte Alen (Parc National)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-500 border-2 border-gray-300"></span>
          <span className="text-sm">Ebebiyín (Culture Fang)</span>
        </div>
      </div>
    </div>
  );
};

export default function Guineeequatorialecomplete() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('malabo');
  const [activeExperienceTab, setActiveExperienceTab] = useState('iles');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏝️', title: 'Plages paradisiaques', desc: 'Découverte des plus belles plages d\'Annobón et Corisco' },
    { icon: '🌋', title: 'Volcans et forêts', desc: 'Exploration des paysages volcaniques et forêts équatoriales' },
    { icon: '🦍', title: 'Faune exceptionnelle', desc: 'Observation des gorilles, éléphants de forêt et tortues marines' },
    { icon: '🏛️', title: 'Culture unique', desc: 'Rencontre avec les cultures Fang, Bubi et Annobonaise' },
    { icon: '🌴', title: 'Diversité géographique', desc: 'Découverte des îles, montagnes, forêts et rivières' },
    { icon: '✈️', title: 'Vols intérieurs', desc: 'Survol des paysages spectaculaires entre îles et continent' },
  ];

  const regions = [
    { name: 'Malabo', color: 'bg-purple-100', textColor: 'text-purple-800', desc: 'Capitale historique sur l\'île volcanique de Bioko' },
    { name: 'Annobón', color: 'bg-teal-100', textColor: 'text-teal-800', desc: 'Île volcanique isolée à 670 km de la côte' },
    { name: 'Corisco', color: 'bg-blue-100', textColor: 'text-blue-800', desc: 'Île aux plages de sable blanc et eaux cristallines' },
    { name: 'Bata', color: 'bg-cyan-100', textColor: 'text-cyan-800', desc: 'Capitale continentale sur l\'océan Atlantique' },
    { name: 'Monte Alen', color: 'bg-green-100', textColor: 'text-green-800', desc: 'Parc national majeur, forêt dense et faune exceptionnelle' },
    { name: 'Ebebiyín', color: 'bg-amber-100', textColor: 'text-amber-800', desc: 'Région culturelle du peuple Fang, frontière nord' },
  ];

  const experiences = [
    { 
      id: 'iles',
      name: 'Îles Paradisiaques', 
      icon: '🏝️',
      desc: 'Découverte des joyaux insulaires : plages immaculées, eaux turquoise et cultures insulaires uniques',
      highlights: ['Annobón isolée', 'Plages de Corisco', 'Snorkeling', 'Cultures insulaires']
    },
    { 
      id: 'nature',
      name: 'Nature Sauvage', 
      icon: '🌿',
      desc: 'Immersion dans la forêt équatoriale du continent, observation des grands mammifères et biodiversité',
      highlights: ['Parc Monte Alen', 'Éléphants de forêt', 'Gorilles', 'Flore tropicale']
    },
    { 
      id: 'culture',
      name: 'Cultures Diverses', 
      icon: '🏛️',
      desc: 'Rencontre avec les multiples ethnies : Fang, Bubi, Ndowe et Annobonais, traditions uniques',
      highlights: ['Culture Fang', 'Traditions Bubi', 'Artisanat', 'Musique et danse']
    },
    { 
      id: 'aventure',
      name: 'Grande Aventure', 
      icon: '🧭',
      desc: 'Exploration complète du pays : vols intérieurs, 4x4, pirogues, randonnées variées',
      highlights: ['Vols intérieurs', '4x4 continent', 'Navigation', 'Randonnées']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🌍</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Guinée Équatoriale Complète : Îles et Continent</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              12 jours d'exploration complète des îles paradisiaques et de la nature sauvage continentale
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">12</div>
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
            <span className="text-sm font-semibold">GUINÉE ÉQUATORIALE | GRAND TOUR COMPLET</span>
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
                <span className="bg-purple-600 text-white px-3 py-1 font-bold">GRAND TOUR</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">GQE6</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">12 jours - Malabo à Ebebiyín</span>
                <button className="ml-auto border-2 border-purple-600 text-purple-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Le voyage ultime pour découvrir toute la Guinée Équatoriale</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-purple-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-purple-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-purple-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-purple-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 12 jours est le voyage ultime pour découvrir toute la richesse de la Guinée Équatoriale. Vous explorerez les deux facettes du pays : les îles paradisiaques de Bioko, Annobón et Corisco avec leurs plages immaculées et eaux turquoise, et le continent (Río Muni) avec ses forêts équatoriales, sa faune exceptionnelle et ses cultures traditionnelles. Ce Grand Tour complet vous fera voyager des plages de rêve aux profondeurs de la forêt tropicale, des volcans aux rivières, et vous fera rencontrer les différentes ethnies qui composent ce pays unique. Une aventure complète mêlant détente balnéaire, exploration naturelle et découverte culturelle.
                </p>

                {/* Section Points forts */}
                <div className="bg-purple-50 border-l-4 border-purple-500 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-700">Les Moments Forts du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-purple-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-purple-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Incluses dans ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Vols intérieurs</strong> entre Malabo, Annobón, Corisco et Bata</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Snorkeling dans les eaux cristallines</strong> d'Annobón et Corisco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Randonnées dans le parc national de Monte Alen</strong> à la recherche des grands mammifères</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Rencontre avec les communautés Fang</strong> à Ebebiyín, découverte des traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Navigation en pirogue</strong> sur le Río Campo</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Détente sur les plages</strong> parmi les plus belles d'Afrique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Observation des tortues marines</strong> et des éléphants de forêt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Découverte de la culture Bubi</strong> sur l'île de Bioko</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Visite de Malabo</strong>, capitale historique aux architectures coloniales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Transferts en 4x4</strong> à travers les paysages variés du continent</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la diversité */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Diversité de la Guinée Équatoriale</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La Guinée Équatoriale est un pays aux multiples facettes : îles volcaniques aux plages paradisiaques, forêts équatoriales riches en biodiversité, cultures ethniques diverses (Fang, Bubi, Ndowe, Annobonais). Ce circuit vous permet de découvrir cette richesse en un seul voyage. Vous passerez des eaux turquoise des îles à la canopée dense du continent, des traditions maritimes des îliens aux chants polyphoniques des Fang, créant ainsi une expérience de voyage complète et unique.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Îles paradisiaques</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Forêt équatoriale</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Cultures diverses</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Grande aventure</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE GRAND TOUR EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Distance parcourue</div>
                      <div className="text-3xl font-bold text-purple-600">2,500</div>
                      <div className="text-xs">km (avion + 4x4)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Écosystèmes visités</div>
                      <div className="text-3xl font-bold text-purple-600">6</div>
                      <div className="text-xs">îles, forêt, montagne, rivière</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Cultures rencontrées</div>
                      <div className="text-3xl font-bold text-purple-600">4</div>
                      <div className="text-xs">ethnies principales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Vols intérieurs</div>
                      <div className="text-3xl font-bold text-purple-600">4</div>
                      <div className="text-xs">trajets aériens</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Complet</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce Grand Tour vous emmène à la découverte de toute la Guinée Équatoriale. Vous commencerez par les îles : Malabo sur Bioko, puis les paradis insulaires d'Annobón et Corisco. Ensuite, vous volerez vers le continent pour explorer la nature sauvage du parc national de Monte Alen et les traditions culturelles de la région d'Ebebiyín. Le voyage combine des moyens de transport variés (avion, 4x4, pirogue, bateau) pour vous offrir une expérience de voyage complète à travers les différents visages de ce pays méconnu.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Nuits îles</div>
                            <div className="text-purple-600 font-bold">Malabo 2 / Annobón 3 / Corisco 2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits continent</div>
                            <div className="text-purple-600 font-bold">Bata 1 / Monte Alen 2 / Ebebiyín 2</div>
                          </div>
                          <div>
                            <div className="font-semibold">Vols intérieurs</div>
                            <div className="text-purple-600 font-bold">4 trajets</div>
                          </div>
                          <div>
                            <div className="font-semibold">Excursions</div>
                            <div className="text-purple-600 font-bold">Navigation + Randonnées</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte Complète de la Guinée Équatoriale</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=5.0,-2.5,12.0,4.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte complète Guinée Équatoriale"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=6/1.0/8.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-600">Les Joyaux de la Guinée Équatoriale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="text-xs font-semibold mt-2">
                          {region.name === 'Malabo' && 'Capitale • Volcans • Culture Bubi'}
                          {region.name === 'Annobón' && 'Isolément • Plages • Culture unique'}
                          {region.name === 'Corisco' && 'Plages • Snorkeling • Eaux turquoise'}
                          {region.name === 'Bata' && 'Port • Transition • Modernité'}
                          {region.name === 'Monte Alen' && 'Parc national • Faune • Randonnées'}
                          {region.name === 'Ebebiyín' && 'Culture Fang • Traditions • Frontière'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Malabo (Bioko)</div>
                      <div className="text-xs opacity-80">Arrivée, découverte capitale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Annobón</div>
                      <div className="text-xs opacity-80">Plages, navigation, culture</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-7</div>
                      <div className="text-sm">Corisco</div>
                      <div className="text-xs opacity-80">Plages, snorkeling, détente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8</div>
                      <div className="text-sm">Bata (continent)</div>
                      <div className="text-xs opacity-80">Transition îles-continent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">9-10</div>
                      <div className="text-sm">Monte Alen</div>
                      <div className="text-xs opacity-80">Forêt, faune, randonnées</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">11</div>
                      <div className="text-sm">Ebebiyín</div>
                      <div className="text-xs opacity-80">Culture Fang, traditions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">12</div>
                      <div className="text-sm">Départ</div>
                      <div className="text-xs opacity-80">Retour à Bata, vol international</div>
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
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À MALABO</span>
                          <span className="text-sm text-gray-600">Accueil et découverte de la capitale historique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de Malabo sur l'île volcanique de Bioko. Accueil par votre guide francophone spécialiste de la Guinée Équatoriale. Transfert à l'hôtel en bord de mer. Après-midi de repos ou visite légère selon l'heure d'arrivée : promenade le long de la corniche de Malabo avec vue sur l'océan et le Pico Basile (volcan en arrière-plan). Briefing détaillé sur le circuit complet, présentation des différentes étapes îles et continent. Dîner de bienvenue avec spécialités de fruits de mer. Nuit à l'hôtel à Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Découverte de Malabo et Bioko */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MALABO ET BIOKO</span>
                          <span className="text-sm text-gray-600">Visite de la capitale et découverte de l'île volcanique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Journée culturelle et naturelle</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte de Malabo et de ses environs. Matin : visite de la capitale : cathédrale de Malabo, palais présidentiel (extérieur), place de l'Indépendance, architecture coloniale espagnole. Découverte de la culture Bubi, peuple autochtone de Bioko. Déjeuner avec spécialités locales. Après-midi : excursion vers les chutes d'eau de Iladyi ou route vers le sud de l'île pour découvrir les paysages volcaniques et les plantations de cacao. Rencontre avec une communauté Bubi (selon disponibilité). Retour à Malabo en fin d'après-midi. Dîner libre. Nuit à Malabo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Vol vers Annobón */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MALABO → ANNOBÓN</span>
                          <span className="text-sm text-gray-600">Vol vers l'île la plus isolée de Guinée Équatoriale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Arrivée au paradis isolé</h4>
                        <p className="text-justify mb-4">
                          Transfert à l'aéroport de Malabo pour le vol intérieur vers Annobón (environ 2h de vol, avec escale possible à Bata). Vue spectaculaire depuis l'avion sur l'océan Atlantique et l'île volcanique d'Annobón. Arrivée à Annobón, île la plus isolée de Guinée Équatoriale, à 670 km de la côte. Accueil et transfert à l'hébergement en bord de lagon. Installation. Première découverte des plages de sable noir et blanc d'Annobón. Baignade dans les eaux turquoise. Dîner avec produits locaux. Nuit à Annobón.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Découverte d'Annobón */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ANNOBÓN : PLAGES ET CULTURE</span>
                          <span className="text-sm text-gray-600">Plages immaculées et rencontre avec la communauté annobonaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Journée balnéaire et culturelle</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte des magnifiques plages d'Annobón et de sa culture unique. Matin : exploration des différentes plages de l'île : sable blanc, sable noir volcanique, criques isolées. Snorkeling pour observer la vie marine. Déjeuner pique-nique sur une plage déserte. Après-midi : visite du village principal de San Antonio de Palé, rencontre avec la communauté annobonaise. Découverte de leur culture unique, mélange d'influences africaines et portugaises. Rencontre avec des pêcheurs locaux, découverte de leurs techniques traditionnelles. Dîner avec poisson frais du jour. Nuit à Annobón.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Navigation autour d'Annobón */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">NAVIGATION AUTOUR D'ANNOBÓN</span>
                          <span className="text-sm text-gray-600">Tour de l'île volcanique en bateau</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Journée de navigation</h4>
                        <p className="text-justify mb-4">
                          Journée de navigation autour de l'île d'Annobón pour découvrir ses paysages côtiers spectaculaires. Départ en bateau pour faire le tour de l'île volcanique : falaises, grottes marines, formations rocheuses impressionnantes. Arrêts pour la baignade dans des criques isolées accessibles uniquement par la mer. Observation des oiseaux marins et, avec de la chance, des dauphins. Pique-nique sur une plage inaccessible par voie terrestre. Après-midi : continuation de la navigation, possibilité de pêche traditionnelle. Observation des tortues marines (saison). Retour au port en fin de journée. Dîner d'adieu à Annobón. Nuit à Annobón.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Vol vers Corisco */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ANNOBÓN → CORISCO</span>
                          <span className="text-sm text-gray-600">Vers l'île aux plages de sable blanc</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Changement de paradis</h4>
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner à Annobón avec vue sur l'océan. Transfert à l'aéroport d'Annobón pour le vol vers Corisco (environ 1h30 de vol, avec escale possible à Bata). Vue spectaculaire depuis l'avion sur l'océan Atlantique. Arrivée à Corisco, île aux plages de sable blanc légendaires. Accueil et transfert à l'hébergement en bord de plage. Installation dans votre bungalow les pieds dans l'eau. Première baignade dans les eaux cristallines de la baie de Corisco. Déjeuner avec produits de la mer frais. Après-midi : découverte à pied des plages environnantes. Dîner sur la plage au coucher du soleil. Nuit à Corisco.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Corisco : snorkeling et plages */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CORISCO : PARADIS BALNÉAIRE</span>
                          <span className="text-sm text-gray-600">Snorkeling et détente sur les plages immaculées</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Journée marine et détente</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à la découverte des fonds marins exceptionnels de Corisco. Matin : session de snorkeling avec équipement fourni dans la baie de Corisco, observation des coraux et poissons tropicaux. Navigation en bateau vers des spots de snorkeling préservés. Déjeuner pique-nique sur une plage déserte. Après-midi : détente, baignade, farniente sur les plages de sable blanc. Possibilité d'activités optionnelles : kayak de mer, paddle. Visite d'un village de pêcheurs (selon temps). Dîner avec spécialités locales. Nuit à Corisco.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Vol vers Bata, transition vers le continent */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CORISCO → BATA</span>
                          <span className="text-sm text-gray-600">Transition des îles vers le continent</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Retour sur le continent</h4>
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner insulaire à Corisco. Transfert à l'aéroport de Corisco pour le vol vers Bata (environ 1h de vol). Arrivée à Bata, capitale continentale de la Guinée Équatoriale. Accueil et transfert à l'hôtel. Déjeuner à Bata. Après-midi : visite de Bata : marché central, corniche, découverte de l'ambiance continentale différente des îles. Temps libre pour se détendre. Briefing sur la suite du circuit continental. Dîner à Bata. Nuit à l'hôtel à Bata.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Transfert vers Monte Alen */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BATA → MONTE ALEN</span>
                          <span className="text-sm text-gray-600">Entrée dans la forêt équatoriale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Immersion forestière</h4>
                        <p className="text-justify mb-4">
                          Départ matinal de Bata en 4x4 pour le parc national de Monte Alen (environ 3-4 heures de route). Traversée de paysages variés : plantations, villages, collines couvertes de forêt. Arrivée au lodge en bordure du parc national. Installation dans votre bungalow en pleine nature. Premier contact avec la forêt équatoriale : petite randonnée d'acclimatation autour du lodge avec votre guide. Découverte des premiers sons de la forêt, observation des oiseaux et de la flore. Briefing sur les règles du parc et les comportements à adopter pour l'observation de la faune. Dîner au lodge avec produits locaux. Nuit au lodge de Monte Alen, bercés par les sons de la forêt.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 10 - Randonnée dans Monte Alen */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(10)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          10
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE ALEN : FAUNE ET FLORE</span>
                          <span className="text-sm text-gray-600">Randonnée et observation des grands mammifères</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 10 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 10 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Journée naturaliste</h4>
                        <p className="text-justify mb-4">
                          Journée consacrée à l'exploration des sentiers du parc national de Monte Alen. Départ matinal pour une randonnée de plusieurs heures avec votre guide et un pisteur local. Recherche des grands mammifères emblématiques : éléphants de forêt, gorilles des plaines de l'Ouest, chimpanzés. Découverte de la flore tropicale : arbres géants, lianes, plantes médicinales. Observation des oiseaux avec votre guide ornithologue. Déjeuner pique-nique en forêt. Après-midi : continuation de la randonnée, observation des traces d'animaux, écoute des sons de la forêt. Retour au lodge en fin d'après-midi. Dîner et partage des observations. Nuit à Monte Alen.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 11 - Transfert vers Ebebiyín */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(11)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          11
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE ALEN → EBEBIYÍN</span>
                          <span className="text-sm text-gray-600">Découverte de la culture Fang</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 11 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 11 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Immersion culturelle</h4>
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner en forêt. Départ en 4x4 pour Ebebiyín (environ 4-5 heures de route). Traversée des paysages du nord de la Guinée Équatoriale. Arrivée à Ebebiyín, ville frontalière avec le Cameroun et le Gabon, cœur de la culture Fang. Installation à l'hébergement. Déjeuner avec spécialités Fang. Après-midi : rencontre avec une communauté Fang, découverte de leurs traditions, de leur art (sculptures, masques), de leur musique polyphonique. Visite d'un atelier d'artisanat. Échanges avec les anciens du village sur leur histoire et leur mode de vie. Dîner d'adieu avec spectacle de danse et musique traditionnelles. Nuit à Ebebiyín.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 12 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(12)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          12
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART D'EBEBIYÍN</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 12 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 12 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hébergement. Selon l'horaire de votre vol international (généralement depuis Bata), transfert en 4x4 vers l'aéroport de Bata (environ 5-6 heures de route) ou, si disponible, vol domestique depuis Ebebiyín vers Bata. Si transfert routier, déjeuner en cours de route. Arrivée à l'aéroport de Bata pour votre vol international de retour. Emportez avec vous des souvenirs inoubliables de cette aventure complète à travers les îles paradisiaques et la nature sauvage continentale de la Guinée Équatoriale, ainsi que les rencontres humaines chaleureuses avec ses différentes cultures. Fin de nos services.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌍</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-purple-600">Les Expériences du Grand Tour</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit complet vous offre une expérience de voyage multidimensionnelle à travers la Guinée Équatoriale. Des plages de rêve aux forêts profondes, des cultures insulaires aux traditions continentales, chaque expérience vous plonge dans une facette différente de ce pays unique.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-purple-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-purple-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-purple-600">Points forts :</div>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'iles' ? -1.43 : 
                                   exp.id === 'nature' ? 1.65 :
                                   exp.id === 'culture' ? 2.15 :
                                   3.75} 
                              lng={exp.id === 'iles' ? 5.63 : 
                                   exp.id === 'nature' ? 10.17 :
                                   exp.id === 'culture' ? 11.33 :
                                   8.78} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'expérience */}
                        {exp.id === 'iles' && (
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Les Îles Paradisiaques de Guinée Équatoriale</h5>
                            <p className="text-gray-700 mb-4">
                              La Guinée Équatoriale insulaire est un monde à part. Bioko, île volcanique où se trouve la capitale Malabo, mêle histoire coloniale et culture Bubi. Annobón, à 670 km de la côte, est un paradis préservé aux plages de sable noir et blanc, avec une culture unique influencée par son isolement. Corisco offre des plages de sable blanc parmi les plus belles d'Afrique et des eaux cristallines idéales pour le snorkeling. Ces îles vous offrent détente, beauté naturelle et rencontres avec des cultures insulaires distinctes.
                            </p>
                          </div>
                        )}

                        {exp.id === 'nature' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Nature Sauvage du Continent</h5>
                            <p className="text-gray-700 mb-4">
                              Le continent (Río Muni) abrite l'une des dernières forêts équatoriales préservées d'Afrique centrale. Le parc national de Monte Alen, avec ses 2 000 km², est un sanctuaire de biodiversité abritant éléphants de forêt, gorilles des plaines de l'Ouest, chimpanzés, buffles et plus de 400 espèces d'oiseaux. L'exploration de cette forêt dense, à pied ou en 4x4, est une immersion sensorielle dans un monde où la nature règne en maître. La région du Río Campo ajoute l'élément aquatique avec ses rivières et ses pirogues traditionnelles.
                            </p>
                          </div>
                        )}

                        {exp.id === 'culture' && (
                          <div className="bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Richesse Culturelle</h5>
                            <p className="text-gray-700 mb-4">
                              La Guinée Équatoriale est un patchwork de cultures. Les Fang, majoritaires sur le continent, ont une tradition artistique riche (sculptures, masques) et une musique polyphonique unique. Les Bubi de Bioko ont une culture distincte liée à leur isolement insulaire. Les Ndowe de la côte continentale sont traditionnellement pêcheurs. Les Annobonais, sur leur île lointaine, ont développé une identité propre. Ce circuit vous permet de rencontrer ces différentes ethnies, d'échanger avec elles, de découvrir leurs traditions, leur cuisine, leur artisanat, créant ainsi un voyage humain profondément enrichissant.
                            </p>
                          </div>
                        )}

                        {exp.id === 'aventure' && (
                          <div className="bg-indigo-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">La Grande Aventure</h5>
                            <p className="text-gray-700 mb-4">
                              Ce Grand Tour est une véritable aventure à travers des paysages et écosystèmes variés. Vous utiliserez différents moyens de transport : vols intérieurs entre les îles et le continent, 4x4 pour explorer les pistes continentales, bateaux et pirogues pour naviguer autour des îles et sur les rivières, et bien sûr la marche pour les randonnées en forêt. Chaque jour apporte son lot de découvertes, de paysages nouveaux, de rencontres inattendues. C'est l'occasion de vivre une expérience de voyage complète, alliant confort et aventure, dans un pays encore méconnu du tourisme de masse.
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
                          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                          alt="Plages d'Annobón" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Îles paradisiaques</h5>
                          <p className="text-sm text-gray-700">Plages immaculées d'Annobón et Corisco</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600" 
                          alt="Forêt de Monte Alen" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Nature sauvage</h5>
                          <p className="text-sm text-gray-700">Forêt équatoriale du parc national de Monte Alen</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1518834103328-93d45986dce1?w=600" 
                          alt="Culture Fang" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Culture traditionnelle</h5>
                          <p className="text-sm text-gray-700">Art et traditions du peuple Fang à Ebebiyín</p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements Variés pour un Voyage Complet</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-purple-600 w-16 md:w-32"></span>
                      <span className="text-purple-600 text-2xl">🏨</span>
                      <span className="h-px bg-purple-600 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce Grand Tour vous propose une variété d'hébergements adaptés à chaque étape : hôtel de charme à Malabo, écolodges les pieds dans l'eau sur les îles, lodge forestier à Monte Alen, et hébergement simple mais authentique à Ebebiyín. Chaque hébergement reflète l'environnement local et offre une immersion dans l'atmosphère particulière de chaque région.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('malabo')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'malabo' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MALABO (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('annobon')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'annobon' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ANNOBÓN (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('corisco')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'corisco' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CORISCO (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('montealen')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'montealen' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MONTE ALEN (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('ebebiyin')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ebebiyin' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      EBEBIYÍN (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Malabo */}
                  {activeHotelTab === 'malabo' && (
                    <div className="space-y-16">
                      {/* Hôtel Sofitel Malabo */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hôtel Sofitel Malabo" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 text-sm font-bold">
                                5* LUXE
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Sofitel Malabo</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Sipopo, Malabo, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏊</span>
                                <span>Piscine panoramique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">3 Restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💆</span>
                                <span className="text-sm font-semibold">Spa luxueux</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 5* de luxe situé dans le complexe de Sipopo, en bord de mer. Chambres et suites spacieuses avec vue sur l'océan, décoration élégante, salle de bain marbre, climatisation, wifi haute vitesse. Plusieurs restaurants dont un gastronomique, bar avec terrasse, piscine à débordement face à la mer, spa complet, centre de fitness. Service de concierge et transferts privés. Cadre idyllique pour débuter le voyage dans le confort.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Annobón */}
                  {activeHotelTab === 'annobon' && (
                    <div className="space-y-16">
                      {/* Annobón Paradise Resort */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Annobón Paradise Resort" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Annobón Paradise Resort</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Lagon d'Annobón, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏝️</span>
                                <span>Villas sur pilotis</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Vue lagon 360°</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚤</span>
                                <span className="text-sm font-semibold">Quai privé</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Resort exclusif composé de villas sur pilotis au-dessus des eaux turquoise du lagon d'Annobón. Chaque villa dispose d'une terrasse privée avec accès direct à l'eau, chambre spacieuse avec lit king-size, salle de bain ouverte avec baignoire face au lagon. Décoration élégante inspirée de l'architecture locale. Restaurant gastronomique spécialisé en fruits de mer, bar panoramique. Service de bateau privé pour excursions. Électricité 24h/24, wifi limité (pour déconnexion). Cadre de rêve pour une expérience insulaire exclusive.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Corisco */}
                  {activeHotelTab === 'corisco' && (
                    <div className="space-y-16">
                      {/* Corisco Island Ecolodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" 
                              alt="Corisco Island Ecolodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Corisco Island Ecolodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baie de Corisco, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏝️</span>
                                <span>Bungalows sur plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Accès direct mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🤿</span>
                                <span className="text-sm font-semibold">Centre snorkeling</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Écolodge exclusif situé directement sur la plage de sable blanc de Corisco. Bungalows traditionnels construits avec des matériaux locaux, chacun avec terrasse privée donnant sur la mer. Décoration naturelle et élégante, lit king-size, salle de bain ouverte avec douche extérieure. Restaurant de plage servant une cuisine créole à base de produits frais. Bar, salon de détente, équipement snorkeling gratuit. Électricité solaire, eau de source. Immersion totale dans le paradis corisquois.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Monte Alen */}
                  {activeHotelTab === 'montealen' && (
                    <div className="space-y-16">
                      {/* Monte Alen Forest Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" 
                              alt="Monte Alen Forest Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Monte Alen Forest Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Parc National de Monte Alen, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>En pleine forêt</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦉</span>
                                <span className="text-sm font-semibold">Sons nature</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Douche chaude</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Écolodge simple mais confortable situé en lisière du parc national de Monte Alen. Bungalows en matériaux locaux (bois, feuilles de palmier), chacun avec terrasse donnant sur la forêt. Chambres avec lits confortables, moustiquaires, salle de bain privée avec douche chaude (eau chauffée solaire). Restaurant servant une cuisine simple mais nourrissante à base de produits locaux. Électricité solaire limitée (le soir seulement). Immersion totale dans l'ambiance forestière, avec les sons des animaux la nuit. Point de départ idéal pour les randonnées.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Ebebiyín */}
                  {activeHotelTab === 'ebebiyin' && (
                    <div className="space-y-16">
                      {/* Ebebiyín Cultural Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1550853024-10a4d8c5e43d?w=600" 
                              alt="Ebebiyín Cultural Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Ebebiyín Cultural Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Ebebiyín, Guinée Équatoriale
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Style traditionnel</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎨</span>
                                <span className="text-sm font-semibold">Décoration Fang</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Jardin local</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Lodge de style traditionnel Fang, construit avec des matériaux locaux et décoré d'artisanat local (masques, sculptures). Chambres simples mais propres, avec ventilateur, moustiquaires, salle de bain privée (eau froide). Restaurant servant une cuisine traditionnelle Fang. Jardin avec plantes médicinales locales. Électricité par générateur (quelques heures par soir). Cadre authentique pour l'immersion dans la culture Fang. Accueil chaleureux par le personnel local. Lieu idéal pour les rencontres culturelles.
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
                    <span className="text-3xl font-bold text-purple-600">$4,599</span>
                    <span className="text-xl line-through text-gray-500">$4,199</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-purple-600 bg-purple-50 p-2 rounded">
                    ✅ Inclus : Vols intérieurs, hébergements variés, tous les repas, excursions, guides spécialisés
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-purple-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-purple-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-01-10">10 Janvier 2026</option>
                    <option value="2026-02-05">5 Février 2026</option>
                    <option value="2026-03-15">15 Mars 2026</option>
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2026-07-20">20 Juillet 2026</option>
                    <option value="2026-08-25">25 Août 2026</option>
                    <option value="2026-11-10">10 Novembre 2026</option>
                    <option value="2026-12-15">15 Décembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs toute l'année (meilleures périodes : jan-mars et juin-sept)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>GRAND TOUR EXCLUSIF :</strong> Découverte complète îles + continent
                  </p>
                  <p className="text-xs text-gray-300">* Circuit le plus complet disponible en Guinée Équatoriale</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-purple-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-purple-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-purple-600 text-white py-4 font-semibold text-base mb-4 hover:bg-purple-500 transition-colors shadow-md">
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
                    Nos experts de la Guinée Équatoriale complète vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=5.0,-2.5,12.0,4.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Grand Tour miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Grand Tour - 12 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit complet îles et continent
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
                    <span>Vols intérieurs Malabo-Annobón-Corisco-Bata</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts aéroport/hôtel</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transferts 4x4 sur le continent</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone spécialiste</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements variés (11 nuits)</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les petits-déjeuners</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>11 déjeuners et 11 dîners</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Excursions en bateau et pirogue</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Droits d'entrée dans les parcs nationaux</span>
                    <span className="font-bold text-purple-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rencontres culturelles organisées</span>
                    <span className="font-bold text-purple-600">✓</span>
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
                    <span className="font-bold text-purple-600">Moyenne à bonne</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-purple-600">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-purple-600">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-purple-600">Nécessaire pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-purple-600">Obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Adaptabilité</span>
                    <span className="font-bold text-purple-600">Nécessaire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + certificat vaccinal fièvre jaune + assurance rapatriement
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-purple-200 p-4 mt-6 shadow-lg bg-purple-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-purple-600">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Le voyage d'une vie ! Découvrir à la fois les îles paradisiaques et la forêt équatoriale, rencontrer les différentes cultures... C'était d'une richesse incroyable. Un circuit parfaitement organisé."
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Marc D., voyageur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-purple-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-purple-400 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}