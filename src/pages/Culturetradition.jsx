import { useState } from 'react';
import Footer from "../components/Footer";

// Composant Carte Interactive
const InteractiveMap = ({ lat, lng, height = "300px", showControls = true, region = "" }) => {
  const [mapType, setMapType] = useState('roadmap');
  
  const getMapUrl = () => {
    if (mapType === 'satellite') {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.5},${lat-0.5},${lng+0.5},${lat+0.5}&layer=mapnik&marker=${lat},${lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.5},${lat-0.5},${lng+0.5},${lat+0.5}&layer=mapnik&marker=${lat},${lng}`;
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="flex gap-2 mb-3">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Culturel São Tomé</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik&marker=0.33,6.73&marker=0.05,6.72"
          style={{ border: 0 }}
          allowFullScreen
          title="São Tomé Culture"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=11/0.33/6.73" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-emerald-700 border-2 border-gray-300"></span>
          <span className="text-sm">São Tomé (ville)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Sites historiques</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Communautés locales</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Ribeira Peixe</span>
        </div>
      </div>
    </div>
  );
};

export default function Culturetradition() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('patrimoine');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🎭', title: 'Spectacle de Tchiloli', desc: 'Théâtre traditionnel classé au patrimoine immatériel de l\'UNESCO' },
    { icon: '🏛️', title: 'Architecture Coloniale', desc: 'Découverte des "roças" et bâtiments portugais des XVe-XIXe siècles' },
    { icon: '👨‍👩‍👧‍👦', title: 'Rencontres Communautaires', desc: 'Immersion dans les villages et échanges avec les artisans locaux' },
    { icon: '🍽️', title: 'Gastronomie Traditionnelle', desc: 'Initiation à la cuisine santoméenne et dégustations authentiques' },
    { icon: '🎶', title: 'Musique et Danse', desc: 'Découverte des rythmes africains et portugais fusionnés' },
    { icon: '🧶', title: 'Artisanat Local', desc: 'Ateliers de vannerie, poterie et sculpture sur bois' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Cœur historique et culturel de l\'archipel, fusion d\'influences africaines et portugaises',
      features: ['Cathédrale', 'Musée National', 'Marché Central', 'Fort São Sebastião']
    },
    { 
      name: 'Roca Agostinho Neto', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Plus grande plantation coloniale préservée, témoin de l\'âge d\'or du cacao',
      features: ['Architecture coloniale', 'Musée vivant', 'Théâtre Tchiloli', 'Ateliers artisanaux']
    },
    { 
      name: 'Monte Café', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Région des plantations de café et berceau des traditions rurales santoméennes',
      features: ['Communautés locales', 'Traditions agricoles', 'Fêtes villageoises', 'Artisanat rural']
    },
    { 
      name: 'Santo António', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Deuxième ville de l\'île et centre culturel des traditions côtières',
      features: ['Port de pêche', 'Église historique', 'Marché artisanal', 'Musique locale']
    },
    { 
      name: 'Ribeira Peixe', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Village traditionnel de pêcheurs et conservatoire des pratiques maritimes ancestrales',
      features: ['Pêche traditionnelle', 'Construction de pirogues', 'Danses côtières', 'Cuisine maritime']
    },
    { 
      name: 'Neves', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Port historique et creuset des échanges culturels entre Afrique et Europe',
      features: ['Port colonial', 'Traditions portuaires', 'Fusion culturelle', 'Festivals locaux']
    },
  ];

  const experiences = [
    { 
      id: 'patrimoine',
      name: 'Patrimoine Architectural', 
      icon: '🏛️',
      desc: 'Exploration des bâtiments coloniaux portugais et des plantations historiques',
      highlights: ['Roças coloniales', 'Églises historiques', 'Fortifications', 'Maisons créoles'],
      details: 'São Tomé possède un patrimoine architectural unique en Afrique, résultat de 500 ans d\'influence portugaise. Les "roças" (plantations) sont des villages autonomes avec architecture néo-classique. Les bâtiments religieux comme la cathédrale de São Tomé (XVIe siècle) témoignent de cette fusion stylistique.'
    },
    { 
      id: 'spectacles',
      name: 'Arts du Spectacle', 
      icon: '🎭',
      desc: 'Immersion dans les traditions théâtrales, musicales et chorégraphiques santoméennes',
      highlights: ['Théâtre Tchiloli', 'Danse Puita', 'Musique Semba', 'Contes traditionnels'],
      details: 'Le Tchiloli est une forme théâtrale unique au monde, classée par l\'UNESCO. Mélange de traditions médiévales portugaises et d\'influences africaines, elle raconte l\'histoire de Charlemagne. La musique santoméenne fusionne les rythmes africains avec les instruments portugais.'
    },
    { 
      id: 'artisanat',
      name: 'Artisanat Traditionnel', 
      icon: '🧶',
      desc: 'Découverte des techniques artisanales transmises de génération en génération',
      highlights: ['Vannerie', 'Poterie', 'Sculpture sur bois', 'Tissage'],
      details: 'L\'artisanat santoméen utilise des matériaux naturels locaux : feuilles de palmier pour la vannerie, argile volcanique pour la poterie, bois précieux pour la sculpture. Chaque région a ses spécialités et motifs traditionnels, souvent inspirés de la nature et de la vie quotidienne.'
    },
    { 
      id: 'gastronomie',
      name: 'Culture Culinaire', 
      icon: '🍲',
      desc: 'Initiation aux traditions culinaires et aux rituels alimentaires santoméens',
      highlights: ['Cuisine fusion', 'Rituels du repas', 'Produits locaux', 'Boissons traditionnelles'],
      details: 'La gastronomie santoméenne est un mélange unique de cuisine portugaise et africaine. Le calulu (poisson aux feuilles de manioc), le blabla (ragoût de banane plantain) et les plats à base de cacao reflètent cette fusion. Les repas sont des moments sociaux importants, souvent accompagnés de musique et de danse.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🎭</span>
          <span>ESCAPES | SÃO TOMÉ-ET-PRÍNCIPE</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Culture et Traditions Santoméennes</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'immersion profonde dans le patrimoine culturel unique de São Tomé
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
        
        {/* Indicateur de destination */}
        <div className="absolute bottom-6 right-72 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-2xl">🇸🇹</span>
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | SÃO TOMÉ À RIBEIRA PEIXE</span>
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
                <span className="bg-purple-700 text-white px-3 py-1 font-bold">CULTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP9</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - São Tomé à Ribeira Peixe</span>
                <button className="ml-auto border-2 border-purple-700 text-purple-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-purple-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Immersion culturelle authentique au cœur des traditions santoméennes</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Bienvenue dans le circuit ultime de découverte culturelle de São Tomé-et-Principe. Pendant 8 jours, plongez au cœur des traditions vivantes de l'archipel, à la rencontre des gardiens d'un patrimoine culturel unique en Afrique. Ce voyage vous invite à comprendre l'âme santoméenne, née du métissage fascinant entre l'héritage portugais et les traditions africaines.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  São Tomé n'est pas seulement une île de beautés naturelles ; c'est avant tout une terre de culture riche et complexe. Fondée en 1493, elle a développé au fil des siècles une identité culturelle hybride exceptionnelle. Du théâtre Tchiloli classé par l'UNESCO aux rythmes envoûtants de la musique locale, de l'architecture coloniale préservée aux techniques artisanales ancestrales, chaque jour de ce circuit sera une immersion dans une facette différente de cette culture vivante.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit a été conçu pour les voyageurs curieux qui souhaitent aller au-delà des paysages et comprendre la véritable essence de São Tomé. À travers des rencontres authentiques avec des artistes, des artisans, des musiciens et des villageois, vous découvrirez comment les Santoméens ont créé, préservé et fait évoluer leurs traditions malgré les vicissitudes de l'histoire.
                </p>

                {/* Section Points forts */}
                <div className="bg-purple-50 border-l-4 border-purple-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-700">Les Trésors Culturels du Voyage</h3>
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
                <div className="border-l-4 border-purple-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Culturelles Exclusives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Spectacle privé de Tchiloli</strong> dans une plantation historique avec les acteurs locaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Atelier de cuisine traditionnelle</strong> avec une famille santoméenne</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Rencontre avec un maître artisan</strong> spécialiste de la sculpture sur bois sacré</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Session de musique traditionnelle</strong> avec initiation aux instruments locaux</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Visite exclusive du Musée National</strong> avec le conservateur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Participation à une fête villageoise</strong> avec danses et chants traditionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Découverte des techniques de pêche</strong> ancestrales à Ribeira Peixe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-700 mt-1">•</span>
                        <span><strong>Cérémonie du café</strong> selon les traditions santoméennes</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur la culture santoméenne */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">La Culture Santoméenne : Un Métissage Unique</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      La culture de São Tomé est le résultat d'un syncrétisme exceptionnel entre les traditions portugaises apportées par les colons à partir du XVe siècle et les cultures africaines des peuples amenés de l'Angola, du Mozambique et du golfe de Guinée. Cette fusion a créé une identité culturelle unique, visible dans la langue (le forro, créole portugais), la religion (catholicisme mêlé de croyances africaines), la musique, la danse, la cuisine et l'artisanat. Le Tchiloli, théâtre traditionnel classé par l'UNESCO, en est le meilleur exemple : il raconte l'histoire médiévale de Charlemagne avec des costumes européens mais dans un style et avec une musicalité purement africains.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Tchiloli (UNESCO)</span>
                      <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">Architecture coloniale</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Artisanat traditionnel</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Musique fusion</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Cuisine métisse</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE PATRIMOINE CULTUREL EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Année de fondation</div>
                      <div className="text-3xl font-bold text-purple-700">1493</div>
                      <div className="text-xs">(découverte portugaise)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Langues parlées</div>
                      <div className="text-3xl font-bold text-purple-700">4</div>
                      <div className="text-xs">(portugais, forro, angolar, lunguié)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Patrimoine UNESCO</div>
                      <div className="text-3xl font-bold text-purple-700">1</div>
                      <div className="text-xs">(Tchiloli, patrimoine immatériel)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Roças classées</div>
                      <div className="text-3xl font-bold text-purple-700">12</div>
                      <div className="text-xs">(sites historiques protégés)</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Culturel à travers l'île</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit culturel vous emmène à la découverte des hauts lieux du patrimoine santoméen. Vous commencerez par la capitale São Tomé pour comprendre l'histoire coloniale et ses influences architecturales. Vous poursuivrez vers les plantations historiques (roças) qui sont de véritables conservatoires des traditions. Vous explorerez les villages ruraux de l'intérieur où se préservent les coutumes ancestrales, avant de rejoindre la côte et les communautés de pêcheurs de Ribeira Peixe, gardiennes des traditions maritimes.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Distance totale</div>
                            <div className="text-purple-700 font-bold">220 km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Communautés visitées</div>
                            <div className="text-purple-700 font-bold">8+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Spectacles traditionnels</div>
                            <div className="text-purple-700 font-bold">4</div>
                          </div>
                          <div>
                            <div className="font-semibold">Ateliers artisanaux</div>
                            <div className="text-purple-700 font-bold">6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte du Circuit Culturel</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik&marker=0.33,6.73&marker=0.05,6.72"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Culture São Tomé"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=11/0.33/6.73" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-700">Les Hauts Lieux Culturels de São Tomé</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
                        <p className="text-sm mb-3">{region.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {region.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-white/50 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-purple-700 to-pink-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours Culturel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">São Tomé ville</div>
                      <div className="text-xs opacity-80">Arrivée, patrimoine colonial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Roças historiques</div>
                      <div className="text-xs opacity-80">Architecture, Tchiloli</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Villages traditionnels</div>
                      <div className="text-xs opacity-80">Artisanat, musique</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">7-8</div>
                      <div className="text-sm">Côte et traditions maritimes</div>
                      <div className="text-xs opacity-80">Pêche, danses, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Informations Pratiques */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-xl font-semibold mb-4 text-amber-700">Informations Pratiques Essentielles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Climat et Meilleure Période</h4>
                      <p className="text-sm text-gray-700">
                        Avril à juin est la période idéale pour ce circuit culturel. Le climat est agréable, les pluies sont moins fréquentes, et c'est la saison des festivals et célébrations traditionnelles dans de nombreux villages.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Respect des Traditions</h4>
                      <p className="text-sm text-gray-700">
                        Ce circuit implique des rencontres avec des communautés locales. Nous vous recommandons de respecter les coutumes, de demander l'autorisation avant de photographier les personnes, et de participer avec respect aux cérémonies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Langue et Communication</h4>
                      <p className="text-sm text-gray-700">
                        La langue officielle est le portugais, mais la population parle le forro (créole). Votre guide francophone facilitera toutes les interactions. Quelques mots de portugais de base sont appréciés.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Artisanat et Achats</h4>
                      <p className="text-sm text-gray-700">
                        L'achat d'artisanat local soutient directement les communautés. Prévoyez de l'argent liquide (euros ou dobras) pour les marchés artisanaux. Les cartes de crédit ne sont acceptées que dans les grands hôtels.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">Pourquoi Choisir Ce Circuit Culturel ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Authenticité des Rencontres</h4>
                        <p className="text-sm text-gray-700">
                          Ce circuit a été développé en collaboration avec les communautés locales. Les rencontres sont authentiques, non touristiques, et permettent un échange culturel véritable.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès à des Traditions Rares</h4>
                        <p className="text-sm text-gray-700">
                          Vous aurez accès à des traditions peu connues, comme le Tchiloli, et à des ateliers d'artisans qui ne reçoivent habituellement pas de visiteurs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide Spécialiste en Culture</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un expert de la culture santoméenne, souvent lui-même artiste ou historien, capable de vous expliquer les subtilités des traditions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Contribution au Patrimoine</h4>
                        <p className="text-sm text-gray-700">
                          Une partie du prix du circuit est reversée à des projets de préservation du patrimoine culturel santoméen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à São Tomé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À SÃO TOMÉ</span>
                          <span className="text-sm text-gray-600">Premiers contacts avec la culture santoméenne</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide spécialiste de la culture santoméenne. Transfert à votre hôtel situé dans le centre historique. Première immersion avec une visite à pied des rues pavées du centre-ville pour observer l'architecture coloniale portugaise. Visite du marché central pour une introduction aux produits locaux et aux interactions sociales typiques. Rencontre avec un historien local pour une conférence d'introduction sur l'histoire et la culture de São Tomé. Dîner de bienvenue dans un restaurant traditionnel avec dégustation des premiers plats typiques. Nuit à l'hôtel à São Tomé.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Patrimoine colonial */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PATRIMOINE COLONIAL</span>
                          <span className="text-sm text-gray-600">Architecture et histoire portugaise</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée patrimoniale</h4>
                        <p className="text-justify mb-4">
                          Visite complète du Musée National installé dans le Fort São Sebastião (1575). Découverte des collections d'art sacré, d'ethnographie et d'histoire naturelle. Rencontre avec le conservateur pour une visite exclusive. Exploration du quartier colonial avec ses maisons aux azulejos bleus et blancs. Visite de la cathédrale de São Tomé (XVIe siècle) et découverte de son architecture néo-gothique unique en Afrique centrale. Déjeuner dans une pension familiale typique. Après-midi, visite de l'ancien palais du gouverneur et de la maison des archives historiques. En soirée, première initiation à la musique santoméenne avec un groupe local. Dîner et nuit à l'hôtel.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Roca Agostinho Neto */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SÃO TOMÉ → ROCA AGOSTINHO NETO</span>
                          <span className="text-sm text-gray-600">Immersion dans une plantation historique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée au cœur de l'histoire</h4>
                        <p className="text-justify mb-4">
                          Départ vers la Roca Agostinho Neto, la plus grande plantation coloniale préservée de l'île. Visite guidée des bâtiments coloniaux : la maison principale, l'hôpital, l'école, les séchoirs à cacao. Rencontre avec les descendants des ouvriers qui vivent toujours sur place. Atelier de découverte des techniques traditionnelles de transformation du cacao. Déjeuner dans l'ancien réfectoire de la plantation. Après-midi, préparation et participation à un spectacle de Tchiloli avec les acteurs locaux. Explication détaillée de cette tradition théâtrale unique classée par l'UNESCO. Installation dans une guesthouse aménagée dans l'ancienne maison d'ingénieur. Dîner aux saveurs locales et nuit à la plantation.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Monte Café et traditions rurales */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE CAFÉ</span>
                          <span className="text-sm text-gray-600">Traditions rurales et artisanat</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée artisanale</h4>
                        <p className="text-justify mb-4">
                          Route vers la région montagneuse de Monte Café, berceau des traditions rurales santoméennes. Visite d'une communauté agricole spécialisée dans la culture du café. Participation aux activités quotidiennes selon la saison (récolte, séchage). Atelier de vannerie avec une artisane locale utilisant des feuilles de palmier. Déjeuner dans une famille de planteurs. Après-midi, atelier de poterie traditionnelle avec de l'argile volcanique locale. Initiation aux techniques de modelage et de cuisson traditionnelles. Rencontre avec un sculpteur sur bois spécialisé dans les masques traditionnels. Dîner communautaire avec musique et danse traditionnelles. Nuit en guesthouse rurale.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Santo António */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">MONTE CAFÉ → SANTO ANTÓNIO</span>
                          <span className="text-sm text-gray-600">Culture urbaine et traditions côtières</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Vers la côte nord</h4>
                        <p className="text-justify mb-4">
                          Départ pour Santo António, deuxième ville de l'île et important port historique. Visite de l'église de Santo António, plus ancien bâtiment religieux de l'île après la cathédrale. Exploration du marché artisanal et rencontre avec les commerçants. Atelier de tissage traditionnel avec des fibres naturelles. Déjeuner de poisson frais dans un restaurant du port. Après-midi, visite d'une association de femmes qui perpétuent les traditions culinaires. Atelier de cuisine : préparation du calulu (plat national) et d'autres spécialités. En soirée, participation à une session de musique traditionnelle avec initiation aux instruments (dikanza, marimba). Dîner et nuit à Santo António.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Neves et fusion culturelle */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SANTO ANTÓNIO → NEVES</span>
                          <span className="text-sm text-gray-600">Port historique et échanges culturels</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Journée portuaire</h4>
                        <p className="text-justify mb-4">
                          Court transfert vers Neves, port historique important pour le commerce du cacao et du café. Visite du port et observation des activités maritimes traditionnelles. Rencontre avec les dockers et les marins pour comprendre les échanges historiques. Visite d'un atelier de construction de pirogues traditionnelles. Déjeuner avec une famille de pêcheurs. Après-midi, participation à un atelier de fabrication de filets de pêche selon les techniques ancestrales. Rencontre avec un conteur traditionnel qui raconte les légendes maritimes de l'île. En soirée, spectacle de danse Puita, danse traditionnelle côtière. Dîner de fruits de mer et nuit à Neves.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Ribeira Peixe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-purple-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">NEVES → RIBEIRA PEIXE</span>
                          <span className="text-sm text-gray-600">Traditions maritimes et communauté de pêcheurs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-purple-200">
                        <h4 className="text-xl font-semibold mb-3 text-purple-700">Immersion maritime</h4>
                        <p className="text-justify mb-4">
                          Transfert vers Ribeira Peixe, village traditionnel de pêcheurs réputé pour la préservation des traditions maritimes. Accueil par le chef du village et présentation des coutumes locales. Participation à la préparation des pirogues pour la pêche (selon la marée et la saison). Observation ou participation aux techniques de pêche traditionnelle. Déjeuner de poisson frais préparé selon les recettes ancestrales. Après-midi, atelier de fabrication d'instruments de musique à partir de matériaux marins (coquillages, bois flotté). Initiation aux chants de pêcheurs traditionnels. En soirée, cérémonie d'adieu avec les anciens du village, échange de souvenirs et transmission des savoirs. Dîner de clôture et nuit à Ribeira Peixe.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ de São Tomé */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE SÃO TOMÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Dernier petit-déjeuner à Ribeira Peixe avec les sons de l'océan. Temps de synthèse avec votre guide : partage des impressions et des connaissances acquises sur la culture santoméenne. Transfert à l'aéroport avec arrêt possible pour des derniers achats d'artisanat. Assistance aux formalités d'embarquement. Vous emportez avec vous non seulement des souvenirs, mais une compréhension profonde de la culture unique de São Tomé, de ses traditions vivantes et de l'accueil chaleureux de ses habitants. Un voyage qui vous aura transformé en ambassadeur de cette culture méconnue mais fascinante.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-purple-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🎭</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-purple-700">Les Expériences Culturelles Authentiques</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit culturel vous propose une immersion totale dans les traditions vivantes de São Tomé. Chaque expérience a été conçue pour vous permettre non seulement d'observer, mais de participer, d'apprendre et d'échanger avec les gardiens de ce patrimoine culturel unique. Des plantations historiques aux villages de pêcheurs, des ateliers d'artisans aux spectacles traditionnels, préparez-vous à vivre la culture santoméenne de l'intérieur.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-purple-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-purple-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-purple-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-purple-700 mt-1">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-semibold mb-2 text-sm">En savoir plus</h5>
                              <p className="text-sm text-gray-700">{exp.details}</p>
                            </div>
                          </div>
                          <div>
                            <InteractiveMap 
                              lat={exp.id === 'patrimoine' ? 0.28 : 
                                   exp.id === 'spectacles' ? 0.34 :
                                   exp.id === 'artisanat' ? 0.31 :
                                   0.30} 
                              lng={exp.id === 'patrimoine' ? 6.61 : 
                                   exp.id === 'spectacles' ? 6.73 :
                                   exp.id === 'artisanat' ? 6.68 :
                                   6.75} 
                              height="300px" 
                              showControls={true}
                              region={exp.name}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  ))}

                  {/* Galerie d'expériences */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-300">
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie des Traditions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600" 
                          alt="Théâtre Tchiloli" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Théâtre Tchiloli</h5>
                          <p className="text-sm text-gray-700">Spectacle traditionnel classé UNESCO</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600" 
                          alt="Artisanat local" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Artisanat traditionnel</h5>
                          <p className="text-sm text-gray-700">Vannerie, poterie et sculpture sur bois</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=600" 
                          alt="Musique santoméenne" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Musique et danse</h5>
                          <p className="text-sm text-gray-700">Rythmes africano-portugais fusionnés</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-xl font-semibold mb-4 text-amber-700">Activités Culturelles Optionnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Atelier de photographie culturelle</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Session de 3 heures avec un photographe local pour apprendre à capturer l'essence de la culture santoméenne. Supplément : 90€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cours intensif de forro (créole)</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Initiation de 4 heures à la langue créole locale avec un professeur spécialisé. Supplément : 70€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Visite d'une collection privée d'art</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Découverte exclusive d'une collection d'art contemporain santoméen chez un collectionneur. Supplément : 60€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Session avec un guérisseur traditionnel</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Rencontre et échange avec un guérisseur pour comprendre les pratiques de médecine traditionnelle. Supplément : 50€/personne.
                      </p>
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements au Cœur de la Culture</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-purple-700 w-16 md:w-32"></span>
                      <span className="text-purple-700 text-2xl">🏨</span>
                      <span className="h-px bg-purple-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Pour cette immersion culturelle, nous avons sélectionné des hébergements qui reflètent l'authenticité santoméenne. De l'hôtel colonial en centre-ville aux guesthouses rurales en passant par l'accueil chez l'habitant, chaque nuit sera l'occasion de vivre une facette différente de la culture locale dans des lieux chargés d'histoire et de tradition.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('saotome')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'saotome' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SÃO TOMÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('roca')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'roca' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ROCA AGOSTINHO NETO (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('montecafe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'montecafe' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      MONTE CAFÉ (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('santoantonio')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'santoantonio' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SANTO ANTÓNIO (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('neves')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'neves' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      NEVES (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('ribeira')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'ribeira' 
                          ? 'bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      RIBEIRA PEIXE (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - São Tomé ville */}
                  {activeHotelTab === 'saotome' && (
                    <div className="space-y-16">
                      {/* Omali Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Omali Lodge" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-purple-700 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Omali Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Style colonial</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant gastronomique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📚</span>
                                <span className="text-sm font-semibold">Bibliothèque culturelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎨</span>
                                <span className="text-sm font-semibold">Galerie d'art local</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Omali Lodge est un établissement 4* situé dans un bâtiment colonial restauré au cœur de la capitale. Chaque chambre est décorée avec des œuvres d'artistes santoméens et des matériaux locaux. L'hôtel dispose d'une bibliothèque spécialisée sur la culture de l'archipel, d'une galerie d'art présentant des artistes locaux, et d'un restaurant qui revisite la cuisine traditionnelle. L'emplacement est idéal pour explorer le patrimoine architectural de la ville à pied.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Roca */}
                  {activeHotelTab === 'roca' && (
                    <div className="space-y-16">
                      {/* Guesthouse de la Roca */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600" 
                              alt="Guesthouse Roca Agostinho Neto" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Guesthouse da Roca</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Roca Agostinho Neto, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏭</span>
                                <span>Ancienne maison d'ingénieur</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🕰️</span>
                                <span className="text-sm font-semibold">Décor historique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Jardins coloniaux</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎭</span>
                                <span className="text-sm font-semibold">Proche théâtre Tchiloli</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Aménagée dans l'ancienne maison de l'ingénieur de la plantation, cette guesthouse historique vous plonge dans l'atmosphère du XIXe siècle. Les chambres conservent leur charme d'antan avec des meubles d'époque et des photographies historiques. La maison est entourée des jardins coloniaux de la plantation. Le soir, vous pourrez entendre les répétitions du théâtre Tchiloli depuis votre chambre. Une expérience unique de vie dans un monument historique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Monte Café */}
                  {activeHotelTab === 'montecafe' && (
                    <div className="space-y-16">
                      {/* Écolodge de Monte Café */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600" 
                              alt="Écolodge Monte Café" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Casa Rural do Café</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Monte Café, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏡</span>
                                <span>Maison familiale rurale</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">☕</span>
                                <span className="text-sm font-semibold">Production café</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span className="text-sm font-semibold">Accueil familial</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛠️</span>
                                <span className="text-sm font-semibold">Ateliers artisanaux</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Cette maison d'hôtes familiale vous accueille au cœur d'une plantation de café. Les chambres sont simples mais confortables, décorées avec l'artisanat local. Vous partagerez les repas avec la famille et pourrez participer aux activités quotidiennes. La propriété dispose d'un atelier de poterie et de vannerie où vous pourrez pratiquer sous la guidance des artisans de la famille. Une immersion authentique dans la vie rurale santoméenne.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Santo António */}
                  {activeHotelTab === 'santoantonio' && (
                    <div className="space-y-16">
                      {/* Pousada de Santo António */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=600" 
                              alt="Pousada de Santo António" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Pousada do Porto</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Santo António, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">⚓</span>
                                <span>Vue sur le port</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎣</span>
                                <span className="text-sm font-semibold">Cuisine poisson</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧵</span>
                                <span className="text-sm font-semibold">Atelier tissage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎶</span>
                                <span className="text-sm font-semibold">Musique live</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Cette pousada traditionnelle surplombe le port historique de Santo António. Les chambres offrent une vue magnifique sur les activités maritimes. Le restaurant est réputé pour sa cuisine à base de poissons et fruits de mer frais. L'établissement dispose d'un atelier de tissage où les femmes du village viennent travailler. En soirée, des musiciens locaux viennent jouer dans le patio. L'endroit parfait pour comprendre la culture portuaire santoméenne.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Neves */}
                  {activeHotelTab === 'neves' && (
                    <div className="space-y-16">
                      {/* Casa das Canoas */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Casa das Canoas" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Casa das Canoas</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Neves, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🛶</span>
                                <span>Atelier pirogues</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Plage privée</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🎣</span>
                                <span className="text-sm font-semibold">Pêche traditionnelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📖</span>
                                <span className="text-sm font-semibold">Contes maritimes</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Située face à la mer, cette maison d'hôtes traditionnelle est aussi un atelier de construction de pirogues. Vous dormirez au son des vagues et pourrez observer les pêcheurs partir à l'aube. La propriété dispose d'une petite plage privée et d'un quai d'où partent les pirogues. Le propriétaire, ancien pêcheur, raconte chaque soir les légendes maritimes de l'île. Une immersion totale dans la culture maritime de Neves.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Ribeira Peixe */}
                  {activeHotelTab === 'ribeira' && (
                    <div className="space-y-16">
                      {/* Casa do Pescador */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1573843989-c9d4a65d6c8c?w=600" 
                              alt="Casa do Pescador" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Casa do Pescador</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Ribeira Peixe, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🎣</span>
                                <span>Maison de pêcheur</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">👴</span>
                                <span className="text-sm font-semibold">Anciens du village</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🐚</span>
                                <span className="text-sm font-semibold">Instruments marins</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Cette modeste mais confortable maison d'hôtes appartient à un ancien pêcheur du village. Les chambres sont décorées avec des filets de pêche, des coquillages et des photographies historiques du village. Le soir, les anciens du village se réunissent autour du feu de camp pour partager leurs histoires et leurs chants traditionnels. Vous pourrez participer à la fabrication d'instruments de musique à partir de matériaux marins. L'expérience ultime d'immersion dans la communauté de Ribeira Peixe.
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
                  <span className="text-2xl">🎭</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-purple-700">$1,799</span>
                    <span className="text-xl line-through text-gray-500">$1,999</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Tout compris</div>
                  <div className="mt-2 text-xs text-purple-700 bg-purple-50 p-2 rounded">
                    ✅ Inclus : Transferts, guide expert culturel, tous les hébergements, tous les repas, activités culturelles
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-purple-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-purple-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-04-15">15 Avril 2026</option>
                    <option value="2026-05-10">10 Mai 2026</option>
                    <option value="2026-06-05">5 Juin 2026</option>
                    <option value="2027-04-20">20 Avril 2027</option>
                    <option value="2027-05-15">15 Mai 2027</option>
                    <option value="2027-06-10">10 Juin 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs d'avril à juin (saison culturelle)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ÉCONOMISEZ 200$ PAR PERSONNE</strong> en réservant avant le 31 janvier 2026
                  </p>
                  <p className="text-xs text-gray-300">* Offre limitée aux 8 premières réservations par départ</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-purple-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-purple-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-purple-700 text-white py-4 font-semibold text-base mb-4 hover:bg-purple-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur ce circuit culturel ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts culturels de São Tomé vous accompagnent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.4&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Culture São Tomé miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Culture São Tomé - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit patrimoine, traditions et rencontres
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
                    <span>Transferts aéroport</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transport en minibus climatisé</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide culturel francophone expert</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hébergements (7 nuits)</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>7 petits-déjeuners</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>7 déjeuners et 7 dîners</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entrées tous sites culturels</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ateliers artisanaux inclus</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spectacles traditionnels</span>
                    <span className="font-bold text-purple-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Contributions aux communautés</span>
                    <span className="font-bold text-purple-700">✓</span>
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
                    <span className="font-bold text-purple-700">Modérée</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum</span>
                    <span className="font-bold text-purple-700">16 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vaccins requis</span>
                    <span className="font-bold text-purple-700">Fièvre jaune obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visa</span>
                    <span className="font-bold text-purple-700">Non requis pour Français</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assurance voyage</span>
                    <span className="font-bold text-purple-700">Obligatoire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Respect traditions</span>
                    <span className="font-bold text-purple-700">Essentiel</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Passeport valide 6 mois après retour + traitement antipaludéen recommandé
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-purple-200 p-4 mt-6 shadow-lg bg-purple-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-purple-700">
                  <span>💬</span>
                  <span>Témoignage</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Ce circuit culturel m'a permis de comprendre l'âme de São Tomé comme jamais je n'aurais pu le faire seul. Les rencontres avec les artisans, le spectacle de Tchiloli, les échanges avec les villageois... Une expérience transformatrice !"
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
      <button className="fixed bottom-8 right-8 bg-purple-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-purple-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}