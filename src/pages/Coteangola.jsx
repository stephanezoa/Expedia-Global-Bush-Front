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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Côte Centrale Angola</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=12.0,-10.0,14.5,-8.0&layer=mapnik&marker=-8.8383,13.2344&marker=-11.2050,13.8436"
          style={{ border: 0 }}
          allowFullScreen
          title="Côte Centrale Angola - Luanda à Sumbe"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-9.5/13.5" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Luanda</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Barra do Kwanza</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Sumbe</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plages de la Rocha</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Histoire Coloniale</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-pink-600 border-2 border-gray-300"></span>
          <span className="text-sm">Cascades de Kalandula</span>
        </div>
      </div>
    </div>
  );
};

export default function Coteangola() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('luanda');
  const [activeExperienceTab, setActiveExperienceTab] = useState('plages');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏖️', title: 'Plages de Sable Fin', desc: 'Découverte des plus belles plages de la côte centrale angolaise' },
    { icon: '🏰', title: 'Architecture Coloniale', desc: 'Exploration du patrimoine historique portugais préservé' },
    { icon: '🌊', title: 'Embouchure du Kwanza', desc: 'Observation de la rencontre fleuve-océan la plus importante d\'Angola' },
    { icon: '🌴', title: 'Cocoteraies', desc: 'Balades dans les plantations de cocotiers typiques de la région' },
    { icon: '🦀', title: 'Fruits de Mer Frais', desc: 'Dégustation de poissons et crustacés pêchés du jour' },
    { icon: '🏞️', title: 'Paysages Côtiers', desc: 'Vues panoramiques sur les falaises et baies préservées' },
  ];

  const regions = [
    { 
      name: 'Luanda', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Capitale dynamique, point de départ pour la côte centrale',
      features: ['Arrivée internationale', 'Culture urbaine', 'Préparation voyage', 'Départ vers la côte']
    },
    { 
      name: 'Barra do Kwanza', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Station balnéaire à l\'embouchure du plus grand fleuve d\'Angola',
      features: ['Plage de sable fin', 'Embouchure Kwanza', 'Sports nautiques', 'Détente balnéaire']
    },
    { 
      name: 'Sumbe', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Ville coloniale préservée avec son centre historique et ses plages',
      features: ['Architecture coloniale', 'Plages urbaines', 'Histoire riche', 'Cocoteraies']
    },
    { 
      name: 'Plages de la Rocha', 
      color: 'bg-yellow-100', 
      textColor: 'text-yellow-800', 
      desc: 'Baies préservées avec formations rocheuses spectaculaires',
      features: ['Formations rocheuses', 'Baignade sécurisée', 'Photographie', 'Couchers de soleil']
    },
    { 
      name: 'Cascades de Kalandula', 
      color: 'bg-cyan-100', 
      textColor: 'text-cyan-800', 
      desc: 'Majestueuses chutes d\'eau dans l\'arrière-pays (excursion optionnelle)',
      features: ['Chutes spectaculaires', 'Randonnée légère', 'Pique-nique', 'Paysages verdoyants']
    },
    { 
      name: 'Villages de Pêcheurs', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Rencontres authentiques avec les communautés côtières',
      features: ['Pêche traditionnelle', 'Artisanat local', 'Rencontres humaines', 'Culture côtière']
    },
  ];

  const experiences = [
    { 
      id: 'plages',
      name: 'Plages Paradisiaques', 
      icon: '🏖️',
      desc: 'Découverte des plus belles plages de la côte centrale angolaise, entre sable fin et cocotiers',
      highlights: ['Sable blanc et fin', 'Cocoteraies naturelles', 'Eaux turquoise', 'Baies préservées'],
      details: 'La côte centrale angolaise abrite certaines des plus belles plages du pays. De Barra do Kwanza à Sumbe, vous découvrirez des étendues de sable fin bordées de cocotiers, des baies protégées aux eaux calmes et turquoise, et des formations rocheuses spectaculaires. Les plages de cette région sont encore préservées du tourisme de masse, offrant des moments de détente authentiques. Vous pourrez vous baigner dans les eaux de l\'Atlantique, vous promener le long du rivage, ou simplement vous détendre à l\'ombre des cocotiers. La qualité du sable, la clarté de l\'eau et la beauté naturelle des paysages font de cette côte une destination balnéaire exceptionnelle.'
    },
    { 
      id: 'histoire',
      name: 'Histoire Coloniale', 
      icon: '🏰',
      desc: 'Exploration du patrimoine architectural portugais parfaitement préservé',
      highlights: ['Architecture coloniale', 'Fortifications', 'Églises historiques', 'Centre ville préservé'],
      details: 'La région de Sumbe est réputée pour son patrimoine colonial portugais exceptionnellement bien préservé. Fondée au XVIe siècle, la ville conserve de nombreux bâtiments historiques datant des XVIIe et XVIIIe siècles. Vous découvrirez le fort de Sumbe, construit pour protéger la ville des attaques, l\'église Nossa Senhora da Conceição avec son architecture baroque, et les ruelles pavées du centre historique. L\'architecture coloniale témoigne de l\'histoire riche de cette région, marquée par le commerce maritime, la culture du café et les échanges culturels. Cette immersion historique vous permettra de comprendre l\'héritage portugais en Angola et son influence sur la culture contemporaine.'
    },
    { 
      id: 'nature',
      name: 'Nature et Paysages', 
      icon: '🌴',
      desc: 'Découverte des paysages côtiers uniques entre embouchures, falaises et cocoteraies',
      highlights: ['Embouchure du Kwanza', 'Falaises côtières', 'Cocoteraies', 'Formations rocheuses'],
      details: 'La côte centrale angolaise offre une diversité de paysages naturels remarquables. L\'embouchure du fleuve Kwanza, le plus important d\'Angola, est un spectacle naturel où les eaux douces du fleuve rencontrent l\'océan Atlantique. Les falaises côtières offrent des points de vue panoramiques sur l\'océan, tandis que les cocoteraies naturelles créent des paysages tropicaux de carte postale. Les formations rocheuses sculptées par l\'érosion marine, comme à Plages de la Rocha, ajoutent une dimension géologique fascinante. Cette diversité naturelle fait de la côte centrale un paradis pour les amateurs de paysages maritimes et les photographes.'
    },
    { 
      id: 'gastronomie',
      name: 'Gastronomie Côtière', 
      icon: '🦀',
      desc: 'Dégustation de la riche cuisine angolaise à base de fruits de mer frais et produits locaux',
      highlights: ['Poissons grillés', 'Crustacés frais', 'Cuisine angolaise', 'Produits locaux'],
      details: 'La cuisine de la côte centrale angolaise est un délice pour les amateurs de fruits de mer. Grâce à la pêche artisanale, vous dégusterez des poissons frais grillés (comme le capitaine, le bar ou la sole), des crustacés (crevettes, crabes, langoustes) et des coquillages préparés selon les recettes traditionnelles. La cuisine angolaise, influencée par les traditions portugaises et africaines, utilise des épices locales comme le piri-piri, le gingembre et la coriandre. Vous découvrirez également des plats typiques comme le calulu (ragoût de poisson), le funge (purée de farine de manioc), et les beignets de morue. Les fruits tropicaux (mangue, papaye, ananas) complètent cette expérience gastronomique unique.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image de la côte angolaise */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🇦🇴</span>
          <span>ESCAPES | ANGOLA</span>
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Côte Centrale : Plages et Histoire Coloniale</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🏖️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              6 jours de détente entre les plus belles plages de l'Atlantique et le patrimoine historique préservé de la côte centrale
            </p>
          </div>
        </div>
        
        {/* Compteurs de durée et pays */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-10">
          <div className="bg-black/90 text-white px-6 py-4 text-center backdrop-blur-sm">
            <div className="text-5xl font-bold">6</div>
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
            <span className="text-2xl">🌊</span>
            <span className="text-sm font-semibold">ANGOLA | CÔTE CENTRALE</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plages de la côte centrale" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Plages de sable fin bordées de cocotiers</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Architecture coloniale de Sumbe" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Patrimoine colonial portugais préservé</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Embouchure du fleuve Kwanza" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Embouchure du fleuve Kwanza dans l'océan</p>
            </div>
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
                <span className="bg-blue-600 text-white px-3 py-1 font-bold">DÉTENTE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO7</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">6 jours - Luanda à Sumbe</span>
                <button className="ml-auto border-2 border-blue-600 text-blue-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une escapade balnéaire alliant détente, culture et gastronomie</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-blue-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  HÉBERGEMENT
                </button>
              </div>
            </div>

            {/* Contenu des onglets */}
            {activeTab === 'apercu' && (
              <div>
                {/* Galerie d'images descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Plages de la côte" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Plages paradisiaques de la côte centrale angolaise</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Architecture coloniale" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Patrimoine historique portugais parfaitement préservé</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit de 6 jours vous emmène à la découverte de la côte centrale angolaise, une région qui combine parfaitement plages paradisiaques, patrimoine historique préservé et gastronomie excellente. Une escapade idéale pour ceux qui cherchent à allier détente balnéaire, découverte culturelle et plaisirs culinaires.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre voyage débutera à Luanda, d'où vous prendrez la route vers le sud pour découvrir les joyaux de la côte atlantique. En seulement 6 jours, vous explorerez Barra do Kwanza avec sa plage magnifique à l'embouchure du plus grand fleuve d'Angola, puis Sumbe, ville coloniale au charme préservé, célèbre pour son architecture historique et ses plages urbaines bordées de cocotiers. Vous découvrirez également les superbes plages de la Rocha avec leurs formations rocheuses spectaculaires, et aurez l'option de visiter les majestueuses cascades de Kalandula. Un voyage court mais intense en émotions et en découvertes.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Côte angolaise" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">La côte centrale angolaise : un paradis balnéaire aux multiples facettes</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les voyageurs souhaitant une escapade courte mais complète, combinant détente, culture et découverte. Parfait pour un long week-end prolongé ou comme complément à un autre voyage en Angola. Accompagné d'un guide francophone, vous découvrirez en toute tranquillité les trésors de cette région encore peu connue des touristes internationaux. Un voyage au rythme relaxant, avec du temps pour profiter des plages, déguster la cuisine locale, et s'imprégner de l'atmosphère unique des villes coloniales.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">Les Atouts du Voyage</h3>
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
                  
                  {/* Images supplémentaires */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Cocoteraies" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fruits de mer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-blue-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de ce Voyage</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plages" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Détente sur les plus belles plages d'Angola</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Histoire coloniale" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Voyage dans le temps à travers l'architecture coloniale</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Baignade et farniente</strong> sur des plages de sable fin préservées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Exploration de Sumbe</strong>, joyau colonial angolais parfaitement conservé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Observation de l'embouchure du Kwanza</strong>, plus grand fleuve d'Angola</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Promenades dans les cocoteraies</strong>, paysages tropicaux typiques</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Dégustation de fruits de mer frais</strong> préparés à la mode angolaise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Photographie des formations rocheuses</strong> des Plages de la Rocha</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Excursion optionnelle aux cascades de Kalandula</strong> (105m de hauteur)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Rencontres avec les pêcheurs locaux</strong> et découverte de leurs traditions</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur Sumbe avec image */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Sumbe" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Sumbe : Le Joyau Colonial de la Côte Angolaise</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Sumbe, capitale de la province de Kwanza-Sul, est considérée comme l'une des villes coloniales les mieux préservées d'Angola. Fondée en 1767 sous le nom de Novo Redondo, la ville s'est développée comme important centre commercial et portuaire pendant la période portugaise. Son centre historique conserve de magnifiques exemples d'architecture coloniale des XVIIIe et XIXe siècles : le fort de Sumbe (construit en 1767), l'église Nossa Senhora da Conceição (1785), l'hôtel de ville, et de nombreuses demeures aux façades colorées et aux balcons en fer forgé. La ville est également célèbre pour ses plages urbaines bordées de cocotiers, créant un cadre tropical unique où histoire et nature se rencontrent harmonieusement. Sumbe offre un voyage dans le temps et une immersion dans l'Angola colonial, tout en profitant d'une ambiance balnéaire détendue.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Fondée en 1767</span>
                          <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Architecture coloniale préservée</span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Plages bordées de cocotiers</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Patrimoine historique classé</span>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Ambiance détendue</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Côte angolaise" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">LA CÔTE CENTRALE EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Distance Luanda-Sumbe</div>
                        <div className="text-3xl font-bold">350</div>
                        <div className="text-xs text-white/80">km (route côtière)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Longueur du Kwanza</div>
                        <div className="text-3xl font-bold">965</div>
                        <div className="text-xs text-white/80">km (plus long fleuve)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Fondation de Sumbe</div>
                        <div className="text-3xl font-bold">1767</div>
                        <div className="text-xs text-white/80">année de création</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Température moyenne</div>
                        <div className="text-3xl font-bold">26°</div>
                        <div className="text-xs text-white/80">C (climat tropical)</div>
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
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Embouchure du Kwanza" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Complet Luanda-Barra do Kwanza-Sumbe</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce voyage court mais intense vous emmène de Luanda vers le sud en suivant la magnifique route côtière. Première étape à Barra do Kwanza, station balnéaire située à l'embouchure du plus grand fleuve d'Angola, où vous pourrez profiter de la plage et observer le phénomène unique de rencontre entre les eaux douces du fleuve et l'océan salé. Continuation vers Sumbe, joyau colonial avec son centre historique parfaitement préservé et ses plages urbaines bordées de cocotiers. Exploration des alentours avec les superbes Plages de la Rocha et leurs formations rocheuses spectaculaires. Option pour une excursion aux cascades de Kalandula, parmi les plus belles d'Afrique. Retour à Luanda par la même route côtière, avec des arrêts photos supplémentaires.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours sur la côte</div>
                            <div className="text-blue-600 font-bold">5</div>
                          </div>
                          <div>
                            <div className="font-semibold">Transport privé</div>
                            <div className="text-blue-600 font-bold">Inclus</div>
                          </div>
                          <div>
                            <div className="font-semibold">Plages différentes</div>
                            <div className="text-blue-600 font-bold">4+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guide francophone</div>
                            <div className="text-blue-600 font-bold">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Luanda' 
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Barra do Kwanza'
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Sumbe'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Plages de la Rocha'
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Cascades de Kalandula'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={region.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3">
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section galerie supplémentaire */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Galerie de la Côte Centrale</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plage 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Colonial 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Kwanza" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rocha" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Luanda</div>
                      <div className="text-xs opacity-80">Arrivée, préparation, début voyage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2</div>
                      <div className="text-sm">Barra do Kwanza</div>
                      <div className="text-xs opacity-80">Embouchure, plage, détente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-4</div>
                      <div className="text-sm">Sumbe</div>
                      <div className="text-xs opacity-80">Colonial, plages, cocoteraies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-6</div>
                      <div className="text-sm">Exploration & Retour</div>
                      <div className="text-xs opacity-80">Rocha, option cascades, retour Luanda</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-cyan-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau très facile (1/5)</strong> : Ce voyage de détente est accessible à tous, sans condition physique particulière. Les déplacements se font en véhicule confortable sur route goudronnée. Les activités principales sont la détente sur les plages, les visites culturelles à pied dans les villes (marche légère), et les repas gastronomiques. L'âge minimum recommandé est de 8 ans (accompagné). Le climat est tropical avec des températures agréables (moyenne 26°C). Parfait pour les couples, les familles, les seniors, ou toute personne cherchant une escapade relaxante.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Accessible à tous, pas de condition physique requise</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Déplacements en véhicule confortable sur route</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 8 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-600">●</span>
                              <span className="text-sm">Climat tropical agréable toute l'année</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🩴</span>
                              <span>Sandales et chaussures confortables</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire indice élevé</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🩳</span>
                              <span>Maillots de bain et vêtements légers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🕶️</span>
                              <span>Lunettes de soleil</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo pour paysages</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧢</span>
                              <span>Chapeau ou casquette</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🌊</span>
                              <span>Serviette de plage légère</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale personnelle basique</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement plage" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Sumbe coloniale" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Escapade Côtière ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Parfait pour un court séjour combinant détente et culture</h4>
                            <p className="text-sm text-gray-700">
                              Idéal pour un long week-end prolongé ou comme complément à un autre voyage.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte des plus belles plages de la côte angolaise</h4>
                            <p className="text-sm text-gray-700">
                              Plages de sable fin, eaux turquoise, cocoteraies : un paradis balnéaire préservé.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Immersion dans l'histoire coloniale portugaise</h4>
                            <p className="text-sm text-gray-700">
                              Sumbe est l'une des villes coloniales les mieux préservées d'Afrique.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Gastronomie excellente à base de fruits de mer frais</h4>
                            <p className="text-sm text-gray-700">
                              Dégustation de poissons et crustacés pêchés du jour, préparés à l'angolaise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itineraire' && (
              <div>
                <div className="space-y-4">
                  {/* Jour 1 - Arrivée à Luanda */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À LUANDA</span>
                          <span className="text-sm text-gray-600">Accueil et préparation pour le départ vers la côte</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport international Quatro de Fevereiro de Luanda. Accueil par votre guide francophone. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, briefing sur le circuit de 6 jours le long de la côte centrale. Préparation des bagages pour le départ du lendemain. Option selon l'heure d'arrivée : petite promenade le long de la baie de Luanda (Marginal) pour une première sensation de l'océan Atlantique. Dîner de bienvenue dans un restaurant de fruits de mer. Nuit à l'hôtel à Luanda.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing circuit - Préparation - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Luanda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Route vers Barra do Kwanza */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROUTE VERS BARRA DO KWANZA</span>
                          <span className="text-sm text-gray-600">Découverte de l'embouchure du plus grand fleuve d'Angola et première baignade</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée route côtière et plage</h4>
                            <p className="text-justify mb-4">
                              Départ matinal de Luanda en direction du sud, par la route côtière. Arrêts photos réguliers pour admirer les paysages de l'Atlantique. Arrivée à Barra do Kwanza, station balnéaire située à l'embouchure du fleuve Kwanza (le plus long d'Angola avec 965km). Observation du phénomène unique où les eaux douces du fleuve rencontrent l'océan salé. Installation à votre hôtel en front de mer. Déjeuner de poissons frais dans un restaurant local. Après-midi : première baignade dans l'océan Atlantique sur la magnifique plage de sable fin. Promenade le long du rivage. Possibilité d'activités nautiques optionnelles (surf, paddle, kayak). En fin de journée, observation du coucher de soleil sur l'embouchure. Dîner de fruits de mer. Nuit à l'hôtel à Barra do Kwanza.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Route côtière - Embouchure Kwanza - Installation hôtel - Baignade - Coucher de soleil
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Barra do Kwanza" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Barra do Kwanza à Sumbe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">BARRA DO KWANZA À SUMBE</span>
                          <span className="text-sm text-gray-600">Continuation vers Sumbe et découverte de la ville coloniale</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée découverte Sumbe</h4>
                            <p className="text-justify mb-4">
                              Matinée libre à Barra do Kwanza pour profiter une dernière fois de la plage. Baignade matinale ou promenade le long du fleuve. Départ vers Sumbe (environ 1h30 de route). Arrivée à Sumbe en milieu de journée. Installation à votre hôtel en centre-ville, à proximité des plages et du centre historique. Déjeuner dans un restaurant typique avec spécialités de la région. Après-midi : première découverte de Sumbe avec une visite guidée du centre historique colonial. Découverte du fort de Sumbe (construit en 1767), de l'église Nossa Senhora da Conceição, et des ruelles pavées aux maisons colorées. Explications sur l'histoire coloniale de la ville. En fin d'après-midi, promenade sur la plage urbaine bordée de cocotiers. Dîner libre pour explorer les options culinaires de Sumbe. Nuit à l'hôtel à Sumbe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Matinée plage - Route vers Sumbe - Visite centre historique - Plage cocotiers - Dîner libre
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Sumbe coloniale" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Sumbe et environs */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">SUMBE ET ENVIRONS</span>
                          <span className="text-sm text-gray-600">Exploration complète de Sumbe et découverte des plages de la Rocha</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée complète Sumbe</h4>
                            <p className="text-justify mb-4">
                              Journée complète consacrée à la découverte de Sumbe et ses environs. Matinée : continuation de la visite de Sumbe avec le marché local, rencontre avec les artisans, et découverte de l'architecture civile coloniale (hôtel de ville, maisons de maître). Promenade dans les cocoteraies qui entourent la ville. Déjeuner dans un restaurant de fruits de mer avec vue sur l'océan. Après-midi : excursion aux Plages de la Rocha, situées à quelques kilomètres de Sumbe. Découverte de ces baies préservées avec leurs formations rocheuses spectaculaires sculptées par l'érosion marine. Baignade dans les eaux calmes et turquoise. Session photographique pour capturer les paysages uniques. Retour à Sumbe en fin d'après-midi. Dîner dans un restaurant spécialisé dans la cuisine angolaise traditionnelle. Nuit à l'hôtel à Sumbe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite marché - Cocoteraies - Plages de la Rocha - Baignade - Cuisine traditionnelle
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Plages de la Rocha" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Option cascades ou détente */}
                  <div className="border-2 border-gray-300 overflow-hidden border-blue-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">OPTION CASCADES OU DÉTENTE</span>
                          <span className="text-sm text-gray-600">Choix entre excursion aux cascades de Kalandula ou journée détente à Sumbe</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-blue-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée au choix</h4>
                            <p className="text-justify mb-4">
                              Journée avec deux options au choix (à décider en groupe) :
                              <br/><br/>
                              <strong>Option 1 : Excursion aux cascades de Kalandula</strong> (supplément) - Départ matinal pour les cascades de Kalandula, situées à environ 2h de route de Sumbe. Ces chutes d'eau spectaculaires, parmi les plus belles d'Afrique, ont une hauteur de 105 mètres et une largeur de 400 mètres. Randonnée légère jusqu'à différents points de vue. Pique-nique au bord des chutes. Retour à Sumbe en fin d'après-midi.
                              <br/><br/>
                              <strong>Option 2 : Journée détente à Sumbe</strong> - Journée libre pour profiter des plages de Sumbe, se baigner, se promener dans la ville, faire des achats d'artisanat local, ou simplement se reposer à l'hôtel. Possibilité de visites complémentaires selon les intérêts.
                              <br/><br/>
                              En fin de journée, dîner d'adieu dans un restaurant avec spécialités de fruits de mer. Nuit à l'hôtel à Sumbe.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Option cascades OU détente à Sumbe - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Cascades de Kalandula" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Retour à Luanda et départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RETOUR À LUANDA ET DÉPART</span>
                          <span className="text-sm text-gray-600">Retour vers la capitale et fin du voyage</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-blue-600">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Départ matinal de Sumbe en direction de Luanda par la route côtière. Arrêts photos supplémentaires sur des points de vue remarquables. Arrivée à Luanda en milieu de journée. Selon l'horaire de votre vol international : déjeuner libre à Luanda et/ou temps libre pour les derniers achats de souvenirs (artisanat, café, épices). En fonction de l'horaire de votre vol, transfert à l'aéroport international Quatro de Fevereiro de Luanda. Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette escapade côtière angolaise : les plages paradisiaques de Barra do Kwanza, le charme colonial préservé de Sumbe, les formations rocheuses spectaculaires des Plages de la Rocha, et les délicieux fruits de mer de l'Atlantique.
                            </p>
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Petit-déjeuner - Route retour Luanda - Temps libre / achats - Transfert aéroport - Départ
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport Luanda" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Galerie supplémentaire de l'itinéraire */}
                <div className="mt-12 pt-8 border-t-2 border-gray-300">
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts du Voyage</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plages" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Architecture coloniale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Embouchure Kwanza" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plages de la Rocha" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experiences' && (
              <div>
                {/* Section dédiée aux expériences */}
                <div className="mb-12 pb-12 border-b-2 border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏖️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-blue-600">Les Expériences de la Côte Centrale</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette escapade de 6 jours vous offre une expérience complète alliant détente balnéaire, découverte culturelle et plaisirs gastronomiques. Chaque moment est conçu pour vous faire profiter au maximum des trésors de la côte centrale angolaise, dans une ambiance relaxante et authentique.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Plages" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Architecture coloniale" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fruits de mer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-blue-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-blue-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-blue-600">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
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
                            <div className="relative h-64 md:h-full overflow-hidden rounded-lg mb-4">
                              <img 
                                src={
                                  exp.id === 'plages' 
                                    ? 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'histoire'
                                    ? 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'nature'
                                    ? 'https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'plages' ? -9.3 : 
                                   exp.id === 'histoire' ? -11.205 :
                                   exp.id === 'nature' ? -10.0 :
                                   -11.0} 
                              lng={exp.id === 'plages' ? 13.15 : 
                                   exp.id === 'histoire' ? 13.8436 :
                                   exp.id === 'nature' ? 13.5 :
                                   13.7} 
                              height="200px" 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Balnéaire et Culturelle</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                          alt="Plages" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plages Paradisiaques</h5>
                          <p className="text-sm text-gray-700">Sable fin, cocotiers et eaux turquoise</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                          alt="Architecture coloniale" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Sumbe Coloniale</h5>
                          <p className="text-sm text-gray-700">Patrimoine portugais parfaitement préservé</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?w=600" 
                          alt="Fruits de mer" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Gastronomie Côtière</h5>
                          <p className="text-sm text-gray-700">Poissons et crustacés frais préparés à l'angolaise</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Plages" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Colonial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Nature" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-cyan-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Excursion aux cascades de Kalandula</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Journée complète aux plus belles chutes d'eau d'Angola (105m de haut). Supplément : 120€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Cours de surf à Barra do Kwanza</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Initiation au surf avec moniteur local (2 heures). Supplément : 80€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Tour en bateau sur le fleuve Kwanza</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Navigation sur le plus grand fleuve d'Angola jusqu'à son embouchure. Supplément : 90€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Atelier cuisine angolaise</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Préparation de plats traditionnels avec un chef local. Supplément : 70€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Activités optionnelles" 
                          className="w-full h-full object-cover"
                        />
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DU VOYAGE</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hôtels Confortables en Front de Mer</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                      <span className="text-blue-600 text-2xl">🏨</span>
                      <span className="h-px bg-blue-600 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Luanda" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Barra do Kwanza" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Sumbe" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements confortables et bien situés, la plupart en front de mer, pour profiter au maximum de votre escapade balnéaire. À Luanda, Barra do Kwanza et Sumbe, vous séjournerez dans des hôtels 3* offrant tout le confort moderne avec une ambiance détendue. Ces établissements sont choisis pour leur emplacement privilégié (face à la plage ou au centre-ville), leur qualité de service et leur rapport qualité-prix. Tous offrent des chambres climatisées avec salle de bain privée, wifi, et souvent un restaurant proposant une cuisine locale et internationale. Parfait pour des vacances relaxantes au bord de l'océan.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('luanda')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'luanda' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LUANDA (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('barra')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'barra' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BARRA DO KWANZA (1 NUIT)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('sumbe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'sumbe' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SUMBE (3 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Luanda */}
                  {activeHotelTab === 'luanda' && (
                    <div className="space-y-16">
                      {/* Hotel Presidente Luanda */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600" 
                                alt="Hotel Presidente Luanda" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                4* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Presidente Luanda</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Baie de Luanda, Luanda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Vue sur la baie de Luanda</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">2 restaurants</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Spa et fitness</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Presidente Luanda est un établissement moderne situé en front de mer avec une vue magnifique sur la baie de Luanda. Les chambres spacieuses sont climatisées et équipées de lits confortables, salle de bain privée, wifi haute vitesse, et minibar. L'hôtel dispose de deux restaurants (cuisine internationale et spécialités angolaises), d'un bar avec terrasse sur la baie, d'une piscine, d'un spa et d'une salle de fitness. Son emplacement est idéal pour découvrir Luanda à pied. Service de qualité et personnel francophone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Barra do Kwanza */}
                  {activeHotelTab === 'barra' && (
                    <div className="space-y-16">
                      {/* Hotel Kwanza Playa */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?w=600" 
                              alt="Hotel Kwanza Playa" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Kwanza Playa</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Barra do Kwanza, Province de Luanda, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Directement sur la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌊</span>
                                <span className="text-sm font-semibold">Vue sur l'embouchure</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌀</span>
                                <span className="text-sm font-semibold">Climatisation</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Kwanza Playa est idéalement situé directement sur la plage de Barra do Kwanza, avec une vue magnifique sur l'embouchure du fleuve Kwanza. Les chambres sont simples mais confortables, avec climatisation, salle de bain privée, et balcon ou terrasse offrant une vue partielle ou totale sur l'océan. L'hôtel dispose d'un restaurant spécialisé dans les fruits de mer frais, d'un bar en plein air face à la plage, et d'un accès direct au sable. L'ambiance est détendue et balnéaire, parfaite pour une nuit de transition entre Luanda et Sumbe. Le personnel est accueillant et l'emplacement est idéal pour profiter du coucher de soleil sur l'embouchure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Sumbe */}
                  {activeHotelTab === 'sumbe' && (
                    <div className="space-y-16">
                      {/* Hotel Sumbe Plaza */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?w=600" 
                                alt="Hotel Sumbe Plaza" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Sumbe Plaza</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Sumbe, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre historique de Sumbe</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏖️</span>
                                <span className="text-sm font-semibold">À 5 min de la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant et bar</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌀</span>
                                <span className="text-sm font-semibold">Climatisation</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Sumbe Plaza est l'hôtel principal de Sumbe, situé en plein centre-ville à seulement 5 minutes à pied de la plage principale bordée de cocotiers. Les chambres sont confortables avec climatisation, salle de bain privée, TV satellite, et wifi. L'hôtel dispose d'un restaurant proposant une cuisine angolaise et internationale, d'un bar, et d'un petit jardin intérieur. L'emplacement est idéal pour explorer Sumbe à pied : le centre historique colonial, le marché local, et les plages sont facilement accessibles. Le service est attentionné et l'ambiance est détendue, reflétant le caractère paisible de Sumbe.
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
                  <h3 className="text-xl font-semibold">Réservez Votre Escapade</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Plages angolaises" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Plages paradisiaques de la côte centrale angolaise</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-blue-600">$1,699</span>
                    <span className="text-xl line-through text-gray-500">$1,899</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Voyage complet</div>
                  <div className="mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    ✅ Inclus : Transport privé, guide francophone, hébergements, petits-déjeuners, visites
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Économisez 200$ par personne pour toute réservation
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-05-07">7 Mai 2026</option>
                    <option value="2026-05-21">21 Mai 2026</option>
                    <option value="2026-06-04">4 Juin 2026</option>
                    <option value="2026-06-18">18 Juin 2026</option>
                    <option value="2026-07-02">2 Juillet 2026</option>
                    <option value="2026-07-16">16 Juillet 2026</option>
                    <option value="2026-07-30">30 Juillet 2026</option>
                    <option value="2026-08-13">13 Août 2026</option>
                    <option value="2026-08-27">27 Août 2026</option>
                    <option value="2026-09-10">10 Septembre 2026</option>
                    <option value="2026-09-24">24 Septembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs de mai à septembre (saison sèche idéale)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>ESCAPADE DÉTENTE</strong> limitée à 12 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste de la côte</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-blue-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-blue-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-blue-600 text-white py-4 font-semibold text-base mb-4 hover:bg-blue-500 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur le voyage ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts de la côte angolaise vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=12.0,-10.0,14.5,-8.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte côte centrale miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Côte Centrale Angola - 6 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Luanda → Barra do Kwanza → Sumbe → Retour
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Services Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Transport privé tout au long du circuit</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide francophone accompagnateur</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>5 nuits en hôtels 3*/4*</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>5 petits-déjeuners</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visites guidées de Sumbe</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Frais d'entrée aux sites visités</span>
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Plage angolaise" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du voyage</span>
                    <span className="font-bold text-blue-600">Très facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-blue-600">8 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saison idéale</span>
                    <span className="font-bold text-blue-600">Mai à septembre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Type de voyage</span>
                    <span className="font-bold text-blue-600">Détente et culture</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-blue-600">12 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins recommandés : Fièvre jaune (obligatoire), Hépatites A et B, Typhoïde
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-blue-200 p-4 mt-6 shadow-lg bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616c113a1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageuse" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Témoignage Voyageuse</h4>
                    <p className="text-xs text-gray-600">Sophie L., graphiste 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une escapade parfaite pour déconnecter et découvrir une autre facette de l'Angola. Les plages de Barra do Kwanza sont magnifiques, et Sumbe est un véritable voyage dans le temps avec son architecture coloniale parfaitement préservée. J'ai adoré me balader dans les rues pavées, déguster des fruits de mer frais, et me détendre sur les plages bordées de cocotiers. Le circuit est bien équilibré entre moments de détente et visites culturelles. Les hôtels étaient confortables et bien situés. Une semaine idéale pour se ressourcer !"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Galerie Photographique de la Côte Centrale</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plage 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Colonial 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-5e2d9b5d5b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Kwanza 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77a4577ac6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rocha 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-blue-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}