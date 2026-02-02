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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Safari Zakouma</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,9.0,21.0,12.0&layer=mapnik&marker=12.134,15.055&marker=10.783,19.433&marker=10.900,19.750&marker=10.750,19.950"
          style={{ border: 0 }}
          allowFullScreen
          title="Safari Parc National de Zakouma"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/11.0/19.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-blue-800 border-2 border-gray-300"></span>
          <span className="text-sm">N'Djaména (départ)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-teal-600 border-2 border-gray-300"></span>
          <span className="text-sm">Parc de Zakouma (safari)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-amber-600 border-2 border-gray-300"></span>
          <span className="text-sm">Rivière Salamat</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Tinga (observation)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Zone d'éléphants</span>
        </div>
      </div>
    </div>
  );
};

export default function Safarizakouma() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('ndjamena');
  const [activeRegionTab, setActiveRegionTab] = useState('savane');
  const [activeEcosystemTab, setActiveEcosystemTab] = useState('zones');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🐘', title: 'Éléphants de Zakouma', desc: 'Plus grande population d\'éléphants d\'Afrique centrale' },
    { icon: '🦁', title: 'Lions du Tchad', desc: 'Observation des lions adaptés à la savane' },
    { icon: '🦒', title: 'Girafes de Kordofan', desc: 'Sous-espèce rare et menacée' },
    { icon: '🦏', title: 'Rhinocéros Noir', desc: 'Programme de réintroduction en cours' },
    { icon: '🦓', title: 'Zèbres de Grant', desc: 'Troupeaux spectaculaires en migration' },
    { icon: '🐃', title: 'Buffle d\'Afrique', desc: 'Troupeaux imposants dans les plaines' },
  ];

  const regions = [
    { name: 'Plaines de Zakouma', color: 'bg-yellow-100', textColor: 'text-yellow-800', cities: ['Zone Rigueik', 'Plaine de Tinga'] },
    { name: 'Forêts-galeries', color: 'bg-green-100', textColor: 'text-green-800', cities: ['Rivière Salamat', 'Marais Aouk'] },
    { name: 'Zones Humides', color: 'bg-blue-100', textColor: 'text-blue-800', cities: ['Lac Iro', 'Mare de Korokoro'] },
    { name: 'Savane Arborée', color: 'bg-amber-100', textColor: 'text-amber-800', cities: ['Forêt de Siniaka', 'Bush de KachKacha'] },
    { name: 'Zones de Pâturage', color: 'bg-teal-100', textColor: 'text-teal-800', cities: ['Plaine d\'Am Timan', 'Herbages de Goz'] },
    { name: 'Collines', color: 'bg-purple-100', textColor: 'text-purple-800', cities: ['Collines de Bahr', 'Monts de l\'Ouaddaï'] },
  ];

  const ecosystems = [
    { 
      id: 'zones',
      name: 'Zones Clés du Parc', 
      altitude: '350-450m',
      temperature: '22-42°C',
      desc: 'Le parc couvre 3 000 km² de savanes, forêts-galeries et zones humides abritant une biodiversité exceptionnelle',
      highlights: ['Plaines inondables', 'Forêts-galeries', 'Marais permanents']
    },
    { 
      id: 'faune',
      name: 'Faune Emblématique', 
      altitude: '350-450m',
      temperature: '22-42°C',
      desc: 'Zakouma abrite la plus grande population d\'éléphants d\'Afrique centrale et de nombreuses espèces menacées',
      highlights: ['Éléphants (550+)', 'Lions (120+)', 'Girafes de Kordofan']
    },
    { 
      id: 'conservation',
      name: 'Programmes de Conservation', 
      altitude: '350-450m',
      temperature: '22-42°C',
      desc: 'Succès remarquable de conservation avec augmentation de 400% de la population d\'éléphants depuis 2010',
      highlights: ['Anti-braconnage', 'Suivi satellite', 'Communautés locales']
    },
    { 
      id: 'oiseaux',
      name: 'Avifaune Exceptionnelle', 
      altitude: '350-450m',
      temperature: '22-42°C',
      desc: 'Plus de 370 espèces d\'oiseaux dont de nombreux migrateurs paléarctiques et espèces endémiques',
      highlights: ['Marabouts', 'Cigognes', 'Rapaces majestueux']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[450px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🦓</span>
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Safari au Parc National de Zakouma</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg mt-4 max-w-3xl">
              9 jours d'aventure au cœur du plus grand sanctuaire de faune d'Afrique centrale
            </p>
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
        
        {/* Indicateur de destination */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🦁</span>
            <span className="text-sm font-semibold">PARC NATIONAL ZAKOUMA</span>
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
                <span className="bg-blue-800 text-white px-3 py-1 font-bold">SAFARI</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">9 jours - N'Djaména à Zakouma</span>
                <button className="ml-auto border-2 border-blue-800 text-blue-800 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-800 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Safari exclusif dans le plus important sanctuaire de faune d'Afrique centrale</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU SAFARI
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('ecosystemes')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'ecosystemes' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ÉCOSYSTÈMES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-800 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce safari exclusif de 9 jours vous emmène au cœur du Parc National de Zakouma, considéré comme l'un des plus grands succès de conservation en Afrique. Abritant la plus importante population d'éléphants d'Afrique centrale, Zakouma offre une expérience safari authentique et préservée, loin des foules touristiques. Vous découvrirez une biodiversité exceptionnelle : lions, girafes de Kordofan, buffles, antilopes et plus de 370 espèces d'oiseaux. Accompagné de guides spécialisés et de rangers expérimentés, vous vivrez des moments uniques : safaris en 4x4, observations à l'affût, randonnées pédestres guidées et participation aux programmes de conservation.
                </p>

                {/* Section Points forts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Les Moments Forts du Safari</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences de safari */}
                <div className="border-l-4 border-blue-800 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences de Safari Incluses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Safaris en 4x4 ouverts</strong> avec guides spécialisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Observations à l'affût</strong> en fin de journée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Randonnées pédestres guidées</strong> avec rangers armés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite des points d'eau</strong> pour observer la faune</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Observation des éléphants</strong> en groupe (550+)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Rencontre avec les lions</strong> (population de 120+)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Découverte de l'avifaune</strong> (370+ espèces)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-800 mt-1">•</span>
                        <span><strong>Visite des projets de conservation</strong> et rencontre avec les rangers</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur Zakouma */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Pourquoi le Parc National de Zakouma ?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Zakouma est considéré comme l'un des plus grands succès de conservation en Afrique. Après des décennies de braconnage intensif, le parc a été revitalisé grâce à un partenariat entre le gouvernement tchadien et African Parks. La population d'éléphants est passée de 450 en 2010 à plus de 550 aujourd'hui, et les lions sont en pleine expansion. Le parc offre une expérience safari authentique, préservée et exclusivement axée sur la conservation, avec une fréquentation limitée à quelques visiteurs par jour.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Succès de conservation</span>
                      <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Faune exceptionnelle</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Expérience exclusive</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Safari authentique</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">ZAKOUMA EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Superficie du parc</div>
                      <div className="text-3xl font-bold text-blue-800">3,000</div>
                      <div className="text-xs">km²</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Éléphants</div>
                      <div className="text-3xl font-bold text-blue-800">550+</div>
                      <div className="text-xs">individus</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Espèces d'oiseaux</div>
                      <div className="text-3xl font-bold text-blue-800">370+</div>
                      <div className="text-xs">espèces</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Lions</div>
                      <div className="text-3xl font-bold text-blue-800">120+</div>
                      <div className="text-xs">individus</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours dans Zakouma</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce safari vous emmène à travers les différents écosystèmes du Parc National de Zakouma. Des vastes plaines inondables aux forêts-galeries le long de la rivière Salamat, chaque secteur révèle une faune spécifique. Vous explorerez les zones de concentration d'éléphants, les points d'eau fréquentés par les buffles, les zones de pâturage des antilopes et les territoires des lions.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Création du parc</div>
                            <div className="text-blue-800 font-bold">1963</div>
                          </div>
                          <div>
                            <div className="font-semibold">Gestion par African Parks</div>
                            <div className="text-blue-800 font-bold">2010</div>
                          </div>
                          <div>
                            <div className="font-semibold">Pluviométrie annuelle</div>
                            <div className="text-blue-800 font-bold">900mm</div>
                          </div>
                          <div>
                            <div className="font-semibold">Visiteurs annuels</div>
                            <div className="text-blue-800 font-bold">~500</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Parc National de Zakouma</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,9.0,21.0,12.0&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Parc National Zakouma"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=8/11.0/19.5" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Conservation */}
                <div className="mb-10 bg-green-50 border-l-4 border-green-600 p-6 rounded-r">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Le Miracle de la Conservation</h3>
                  <p className="text-gray-700 mb-4">
                    Le Parc National de Zakouma est l'une des plus grandes réussites de conservation en Afrique. Après des décennies de braconnage intensif qui avait réduit la population d'éléphants de 22 000 à seulement 450 individus, le partenariat avec African Parks en 2010 a permis une transformation radicale. Aujourd'hui, la population d'éléphants dépasse les 550 individus et continue de croître. Les lions, quasiment disparus, sont maintenant plus de 120. Ce succès est dû à une approche holistique incluant la sécurité renforcée, l'implication des communautés locales et le développement durable.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-800 mb-2">0</div>
                      <div className="text-sm">Éléphants braconnés depuis 2016</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-800 mb-2">150+</div>
                      <div className="text-sm">Rangers formés et équipés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-800 mb-2">10,000+</div>
                      <div className="text-sm">Enfants sensibilisés à la conservation</div>
                    </div>
                  </div>
                </div>

                {/* Section Faune détaillée */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-800">La Faune Emblématique de Zakouma</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🐘</span>
                        <h4 className="font-semibold">Éléphants de Savane</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Population: 550+ individus<br/>
                        Comportement: Groupes familiaux de 20-100 éléphants<br/>
                        Meilleur moment: Toute l'année, concentrés en saison sèche
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🦁</span>
                        <h4 className="font-semibold">Lions d'Afrique</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Population: 120+ individus<br/>
                        Comportement: 3-4 meutes principales<br/>
                        Meilleur moment: Saison sèche (décembre à mai)
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🦒</span>
                        <h4 className="font-semibold">Girafes de Kordofan</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Population: 1,200+ individus<br/>
                        Statut: En danger critique<br/>
                        Particularité: Sous-espèce la plus rare d'Afrique
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🐃</span>
                        <h4 className="font-semibold">Buffle d'Afrique</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Population: 10,000+ individus<br/>
                        Comportement: Troupeaux de 100-500<br/>
                        Particularité: Très dangereux à pied
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🦓</span>
                        <h4 className="font-semibold">Zèbres de Grant</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Population: 2,000+ individus<br/>
                        Comportement: Migration saisonnière<br/>
                        Meilleur moment: Saison des pluies (juin à octobre)
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🦅</span>
                        <h4 className="font-semibold">Avifaune Exceptionnelle</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Espèces: 370+ recensées<br/>
                        Migrateurs: 100+ espèces paléarctiques<br/>
                        Particularité: Marabouts, cigognes, rapaces
                      </p>
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
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Préparation du safari</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de N'Djaména. Accueil par votre guide de safari spécialiste de Zakouma. Transfert à l'hôtel. Briefing détaillé sur le safari : sécurité, itinéraire, comportement en présence des animaux. Présentation du Parc National de Zakouma et de son extraordinaire histoire de conservation. Dîner de bienvenue avec dégustation de spécialités tchadiennes. Nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Vol vers Zakouma */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VOL VERS ZAKOUMA</span>
                          <span className="text-sm text-gray-600">Arrivée au camp de Tinga</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Premier contact avec le parc</h4>
                        <p className="text-justify mb-4">
                          Transfert matinal à l'aéroport pour le vol charter vers Zakouma (environ 1h30). Pendant le vol, vue spectaculaire sur les paysages changeants du Tchad. Arrivée à la piste d'atterrissage de Tinga. Accueil par les rangers et l'équipe du camp. Transfert au campement en 4x4 ouvert, premier contact avec la faune. Installation dans votre tente de safari. Déjeuner au camp. Premier safari en fin d'après-midi vers les points d'eau. Observation des premiers éléphants, buffles et antilopes. Dîner au camp et nuit sous les sons du bush.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Safari dans les plaines de Tinga */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PLAINES DE TINGA</span>
                          <span className="text-sm text-gray-600">Safari à la recherche des éléphants</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée avec les géants</h4>
                        <p className="text-justify mb-4">
                          Réveil aux premières lueurs du jour. Petit-déjeuner rapide avant le safari matinal. Exploration des vastes plaines de Tinga, secteur privilégié des éléphants. Observation des groupes familiaux se déplaçant vers les points d'eau. Arrêt pour un pique-nique bush en pleine nature. Sieste à l'ombre des acacias. Safari de l'après-midi vers la zone de Rigueik, connue pour ses concentrations d'éléphants en saison sèche. Observation détaillée du comportement des pachydermes : interactions sociales, soins aux petits, recherche de nourriture. Retour au camp au coucher du soleil. Dîner et partage des observations de la journée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Rivière Salamat et forêts-galeries */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RIVIÈRE SALAMAT</span>
                          <span className="text-sm text-gray-600">Écosystème fluvial et observation des oiseaux</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée aquatique et forestière</h4>
                        <p className="text-justify mb-4">
                          Départ matinal vers la rivière Salamat, artère vitale du parc. Safari le long des berges à la recherche d'espèces liées à l'eau : hippopotames, crocodiles, buffles se baignant. Arrêt à un observatoire spécialement aménagé pour l'observation des oiseaux. Découverte de l'exceptionnelle avifaune de Zakouma : marabouts, cigognes, hérons, rapaces. Pique-nique au bord de l'eau. Promenade guidée dans les forêts-galeries pour découvrir la flore spécifique et les petites espèces. Safari de fin de journée vers les marais d'Aouk, zone de pâturage pour les antilopes. Retour au camp pour le dîner et nuit.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Randonnée pédestre et observation des lions */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RANDONNÉE ET LIONS</span>
                          <span className="text-sm text-gray-600">À pied dans le territoire des lions</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Expérience immersive à pied</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à une randonnée pédestre guidée avec des rangers armés expérimentés. Approche prudente et silencieuse à travers la savane. Découverte des traces et indices de présence animale : empreintes, excréments, restes de repas. Apprentissage de la lecture de la brousse. Observation des petites espèces souvent ignorées en 4x4. Retour au camp pour le déjeuner et la sieste. Safari de l'après-midi spécialement dédié à la recherche des lions. Guidés par les rangers connaissant les territoires des différentes meutes, vous partez à la rencontre des rois de Zakouma. Observation des comportements de chasse, de repos et d'interaction sociale. Dîner spécial "sous les étoiles" avec récit des expériences de la journée.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Zone de Siniaka et girafes de Kordofan */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">FORÊT DE SINIAKA</span>
                          <span className="text-sm text-gray-600">À la rencontre des girafes menacées</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Journée avec les sentinelles du bush</h4>
                        <p className="text-justify mb-4">
                          Safari matinal vers la forêt de Siniaka, habitat privilégié des girafes de Kordofan, sous-espèce la plus rare d'Afrique. Observation de ces animaux majestueux dans leur environnement naturel. Apprentissage des techniques d'identification individuelle (patterns uniques de chaque girafe). Rencontre avec les chercheurs du programme de suivi des girafes. Pique-nique en pleine nature. Après-midi consacrée à l'observation des autres herbivores de la zone : zèbres de Grant, élands de Derby, bubales, cobs de Buffon. Retour au camp en fin de journée. Soirée de présentation des programmes de recherche et de conservation par les scientifiques du parc.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Programme de conservation et communauté locale */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CONSERVATION</span>
                          <span className="text-sm text-gray-600">Rencontre avec les rangers et la communauté</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Les coulisses de la conservation</h4>
                        <p className="text-justify mb-4">
                          Matinée consacrée à la découverte des programmes de conservation. Visite du quartier général des rangers. Présentation des équipements et techniques de lutte anti-braconnage. Rencontre avec les rangers et écoute de leurs témoignages. Démonstration des techniques de suivi des animaux (colliers GPS, pièges photographiques). Déjeuner avec l'équipe de conservation. Après-midi : visite d'un village voisin impliqué dans les programmes de développement communautaire. Rencontre avec les habitants, découverte de leurs activités génératrices de revenus liées à la conservation (artisanat, agriculture durable). Discussion sur les défis de la cohabitation homme-faune. Retour au camp pour un dernier safari d'adieu au coucher du soleil. Dîner de célébration avec l'équipe du parc.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Dernier safari et vol retour N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR N'DJAMÉNA</span>
                          <span className="text-sm text-gray-600">Dernier safari et vol de retour</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <h4 className="text-xl font-semibold mb-3 text-blue-800">Derniers moments à Zakouma</h4>
                        <p className="text-justify mb-4">
                          Dernier safari matinal pour dire au revoir à la faune de Zakouma. Observation des éléphants se regroupant au point d'eau. Dernières photos des lions se reposant à l'ombre. Retour au camp pour le petit-déjeuner et préparation des bagages. Transfert à la piste d'atterrissage de Tinga pour le vol charter retour vers N'Djaména. Déjeuner libre en ville. Après-midi libre pour se reposer à l'hôtel ou faire des achats de souvenirs. En soirée, dîner d'adieu au restaurant avec remise des certificats de participation au programme de conservation. Partage des meilleurs moments du safari.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 9 - Départ de N'Djaména */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(9)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          9
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE N'DJAMÉNA</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 9 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 9 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à l'hôtel. Derniers préparatifs et emballage des souvenirs. Option de visite du Musée National de N'Djaména pour contextualiser l'expérience safari. Déjeuner libre. Transfert à l'aéroport international de N'Djaména pour votre vol de retour. Accompagnement jusqu'à l'enregistrement. Emportez avec vous des souvenirs inoubliables de cette expérience unique au cœur d'un des plus grands succès de conservation en Afrique, et la satisfaction d'avoir contribué, par votre visite, à la protection de ce trésor naturel exceptionnel.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ecosystemes' && (
              <div>
                {/* Section dédiée aux écosystèmes */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-800 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🌿</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-800">Les Écosystèmes du Parc National de Zakouma</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Le Parc National de Zakouma couvre 3 000 km² de paysages variés, des vastes plaines inondables aux forêts-galeries riveraines. Chaque écosystème abrite une faune et une flore spécifiques, créant une biodiversité exceptionnelle qui fait de Zakouma l'un des parcs les plus riches d'Afrique centrale.
                  </p>

                  {/* Navigation des écosystèmes */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {ecosystems.map((eco) => (
                      <button 
                        key={eco.id}
                        onClick={() => setActiveEcosystemTab(eco.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeEcosystemTab === eco.id 
                            ? 'bg-blue-800 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {eco.name.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Détail des écosystèmes */}
                  {ecosystems.map((eco) => (
                    activeEcosystemTab === eco.id && (
                      <div key={eco.id} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-4 text-blue-800">{eco.name}</h4>
                            <div className="mb-6">
                              <div className="text-sm text-gray-600 mb-1">Altitude :</div>
                              <div className="font-bold text-lg">{eco.altitude}</div>
                            </div>
                            <div className="mb-6">
                              <div className="text-sm text-gray-600 mb-1">Température :</div>
                              <div className="font-bold text-lg">{eco.temperature}</div>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {eco.desc}
                            </p>
                            <div className="mb-6">
                              <div className="text-sm font-semibold mb-3 text-blue-800">Caractéristiques :</div>
                              <ul className="list-none space-y-2">
                                {eco.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-800 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={10.783} 
                              lng={19.433} 
                              height="300px" 
                              showControls={true}
                              region={eco.name}
                            />
                          </div>
                        </div>

                        {/* Informations complémentaires selon l'écosystème */}
                        {eco.id === 'zones' && (
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Un Mosaïque d'Habitats Exceptionnels</h5>
                            <p className="text-gray-700 mb-4">
                              Zakouma présente une diversité d'habitats unique en Afrique centrale. Les plaines inondables, recouvertes d'eau en saison des pluies, deviennent en saison sèche d'immenses prairies où se concentre la faune. Les forêts-galeries le long de la rivière Salamat abritent une faune spécifique et servent de couloirs de migration. Les marais permanents constituent des points d'eau vitaux pendant la saison sèche. Cette diversité explique la richesse exceptionnelle de la faune du parc.
                            </p>
                          </div>
                        )}

                        {eco.id === 'faune' && (
                          <div className="bg-teal-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Une Faune Spectaculaire et Diversifiée</h5>
                            <p className="text-gray-700 mb-4">
                              Le Parc National de Zakouma abrite 44 espèces de grands mammifères et plus de 370 espèces d'oiseaux. La population d'éléphants, qui dépasse les 550 individus, constitue la plus importante d'Afrique centrale. Les lions, quasiment disparus il y a une décennie, sont maintenant plus de 120. Les girafes de Kordofan, sous-espèce la plus rare d'Afrique, comptent plus de 1 200 individus à Zakouma, soit la moitié de la population mondiale. Cette concentration exceptionnelle de mégafaune fait de Zakouma un sanctuaire unique.
                            </p>
                          </div>
                        )}

                        {eco.id === 'conservation' && (
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Un Modèle de Conservation Réussi</h5>
                            <p className="text-gray-700 mb-4">
                              La transformation de Zakouma est l'une des plus grandes réussites de conservation en Afrique. Depuis la prise en charge du parc par African Parks en 2010, le braconnage a été quasiment éradiqué (zéro éléphant braconné depuis 2016). Une équipe de 150 rangers bien formés et équipés protège le parc 24h/24. Les communautés locales sont impliquées dans la conservation et bénéficient des retombées économiques du tourisme. Ce modèle intégré explique l'augmentation spectaculaire des populations animales et fait de Zakouma une référence mondiale en matière de conservation.
                            </p>
                          </div>
                        )}

                        {eco.id === 'oiseaux' && (
                          <div className="bg-yellow-50 p-6 rounded-lg">
                            <h5 className="font-semibold text-lg mb-3">Un Paradis pour les Ornithologues</h5>
                            <p className="text-gray-700 mb-4">
                              Zakouma est reconnu comme une Zone Importante pour la Conservation des Oiseaux (ZICO). Le parc accueille plus de 370 espèces d'oiseaux, dont plus de 100 espèces de migrateurs paléarctiques qui viennent y passer l'hiver. Les marais et points d'eau abritent des concentrations impressionnantes de cigognes, hérons, ibis et spatules. Les plaines sont le domaine des outardes, des gangas et des rapaces. La forêt-galerie abrite des espèces forestières spécifiques. Pour les ornithologues, Zakouma offre des opportunités d'observation exceptionnelles.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  ))}

                  {/* Carte synthétique des écosystèmes */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Carte des Écosystèmes de Zakouma</h4>
                    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,9.0,21.0,12.0&layer=mapnik"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Carte écosystèmes Zakouma"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Section Saisons */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-800">Les Saisons à Zakouma</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <span>☀️</span>
                        <span>Saison Sèche (Décembre à Mai)</span>
                      </h4>
                      <ul className="list-none space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Meilleure période pour l'observation</strong> : les animaux se concentrent autour des points d'eau permanents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Températures</strong> : 22-38°C le jour, 15-25°C la nuit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Végétation</strong> : herbes basses, meilleure visibilité</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Particularité</strong> : migration des éléphants vers les points d'eau centraux</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <span>🌧️</span>
                        <span>Saison des Pluies (Juin à Novembre)</span>
                      </h4>
                      <ul className="list-none space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Période de reproduction</strong> : naissances des herbivores, paysages verdoyants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Températures</strong> : 25-32°C le jour, 20-25°C la nuit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Végétation</strong> : herbes hautes, visibilité réduite</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-800 mt-1">•</span>
                          <span><strong>Particularité</strong> : arrivée des oiseaux migrateurs, parcs fermés en août-septembre</span>
                        </li>
                      </ul>
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DE SAFARI</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Campements Exclusifs au Cœur de Zakouma</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                      <span className="text-blue-800 text-2xl">🏕️</span>
                      <span className="h-px bg-blue-800 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour ce safari exclusif, nous vous proposons des hébergements soigneusement sélectionnés pour leur confort, leur immersion dans la nature et leur engagement en faveur de la conservation. Chaque campement est conçu pour minimiser son impact environnemental tout en offrant une expérience safari authentique et mémorable.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('ndjamena')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ndjamena' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      N'DJAMÉNA (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('campements')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'campements' 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      CAMPEMENTS ZAKOUMA (6 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - N'Djaména */}
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
                              <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 text-sm font-bold">
                                5* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hôtel Hilton N'Djaména</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Avenue du Président Mobutu, N'Djaména, Tchad
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
                                <span className="text-sm font-semibold">Spa et fitness</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Hôtel 5* de luxe situé au bord du fleuve Chari. Chambres spacieuses avec vue sur la ville ou le fleuve. Toutes les commodités pour un confort optimal avant et après le safari. Restaurant gastronomique, bar panoramique, centre de remise en forme, spa. Service de conciergerie pour préparer le safari. Base parfaite pour le briefing initial et la récupération finale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Campements Zakouma */}
                  {activeHotelTab === 'campements' && (
                    <div className="space-y-16">
                      {/* Campement de Tinga */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600" 
                              alt="Campement de Tinga" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement de Tinga</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Zone de Tinga, Parc National de Zakouma, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏕️</span>
                                <span>Campement exclusif</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Écologique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement exclusif situé au cœur de la zone de Tinga, point de départ idéal pour les safaris. Tentes de safari spacieuses et confortables avec lit king-size, salle de bain privée avec douche chaude solaire et toilette. Électricité solaire 24h/24. Restaurant en plein air servant une cuisine internationale et locale préparée avec des produits frais. Bar avec vue sur un point d'eau fréquenté par les animaux. Piscine naturelle rafraîchissante. Campement entièrement écologique avec gestion responsable des déchets et de l'eau.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Campement de Salamat */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" 
                              alt="Campement de Salamat" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Campement de Salamat</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Rive de la rivière Salamat, Parc National de Zakouma, Tchad
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Vue sur la rivière</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🦅</span>
                                <span className="text-sm font-semibold">Observation oiseaux</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌙</span>
                                <span className="text-sm font-semibold">Nuits étoilées</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Campement intime situé sur les rives de la rivière Salamat. Tentes sur pilotis offrant une vue imprenable sur l'eau et la forêt-galerie. Chaque tente dispose d'une terrasse privée pour l'observation des animaux venant s'abreuver. Salle de bain avec douche à ciel ouvert. Restaurant sur plateforme élevée avec vue panoramique. Feu de camp chaque soir pour partager les expériences de la journée. Observatoire spécial pour l'observation des oiseaux. Campement alimenté à l'énergie solaire avec système de traitement des eaux écologique.
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
                  <span className="text-2xl">🦓</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Safari</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-blue-800">$3,499</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-blue-700 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Vol charter N'Djaména-Zakouma, safaris en 4x4, guide spécialisé, hébergement complet, tous les repas, droits d'entrée parc, contribution conservation
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-800"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-12-05">5 Décembre 2026</option>
                    <option value="2027-01-09">9 Janvier 2027</option>
                    <option value="2027-02-13">13 Février 2027</option>
                    <option value="2027-03-13">13 Mars 2027</option>
                    <option value="2027-04-10">10 Avril 2027</option>
                    <option value="2027-05-08">8 Mai 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Meilleure période : Décembre à Mai (saison sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-800 to-teal-800 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>SAFARI EXCLUSIF :</strong> 30% de votre voyage contribue directement à la conservation
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 6 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-800 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-700 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-800 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-700 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce safari ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts de la faune sauvage vous accompagnent dans la préparation.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=18.0,9.0,21.0,12.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Zakouma miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Parc National Zakouma - Sanctuaire de Faune
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Safari de 9 jours au cœur du plus grand succès de conservation d'Afrique
                </p>
              </div>

              {/* Widget équipement safari */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🎒</span>
                  <span>Équipement Recommandé</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Jumelles (10x42)</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Appareil photo + zoom 200-400mm</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vêtements neutres</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Chapeau et crème solaire</span>
                    <span className="font-bold text-blue-800">✓</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Liste d'équipement complète fournie à la réservation
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
                    <span className="font-bold text-blue-800">Modérée</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-blue-800">12 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-blue-800">Fièvre jaune + Paludisme</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-blue-800">Obligatoire</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Certificat médical recommandé
                </div>
              </div>

              {/* Widget conservation */}
              <div className="border-2 border-green-300 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800">
                  <span>🌍</span>
                  <span>Votre Impact sur la Conservation</span>
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  En participant à ce safari, vous contribuez directement à la protection de Zakouma :
                </p>
                <ul className="list-none space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-800 mt-1">✓</span>
                    <span>30% du prix du voyage est reversé à African Parks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-800 mt-1">✓</span>
                    <span>Salaire et équipement pour 2 rangers pendant 1 an</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-800 mt-1">✓</span>
                    <span>Support aux communautés locales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Expert Faune</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}