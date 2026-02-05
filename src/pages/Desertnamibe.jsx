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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Désert du Namibe</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-17.0,14.0,-14.0&layer=mapnik&marker=-15.1967,12.1522&marker=-16.7569,11.8558"
          style={{ border: 0 }}
          allowFullScreen
          title="Désert du Namibe - Angola"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=8/-15.5/12.5" target="_blank" rel="noopener noreferrer">
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
          <span className="text-sm">Namibe</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-orange-600 border-2 border-gray-300"></span>
          <span className="text-sm">Désert du Namibe</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-gray-300"></span>
          <span className="text-sm">Welwitschia mirabilis</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Côte Sauvage</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Communautés Mucubal</span>
        </div>
      </div>
    </div>
  );
};

export default function Desertnamibe() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('namibe');
  const [activeExperienceTab, setActiveExperienceTab] = useState('desert');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🏜️', title: 'Désert du Namibe', desc: 'Exploration du plus vieux désert du monde' },
    { icon: '🌊', title: 'Côte Sauvage', desc: 'Découverte des plages désertes et falaises spectaculaires' },
    { icon: '🌿', title: 'Welwitschia mirabilis', desc: 'Rencontre avec la plante millénaire unique' },
    { icon: '👨‍👩‍👧‍👦', title: 'Peuple Mucubal', desc: 'Immersion avec les éleveurs nomades du désert' },
    { icon: '🦊', title: 'Faune Adaptée', desc: 'Observation d\'espèces uniques adaptées au désert' },
    { icon: '🌅', title: 'Dunes et Océan', desc: 'Contraste unique entre dunes rouges et Atlantique' },
  ];

  const regions = [
    { 
      name: 'Namibe', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Port de départ vers le désert et la côte sauvage',
      features: ['Préparation expédition', 'Briefing', 'Véhicules 4x4', 'Base logistique']
    },
    { 
      name: 'Désert du Namibe', 
      color: 'bg-orange-100', 
      textColor: 'text-orange-800', 
      desc: 'Le plus vieux désert du monde, paysage lunaire unique',
      features: ['Dunes rouges', 'Welwitschias', 'Faune adaptée', 'Paysages lunaires']
    },
    { 
      name: 'Côte Sauvage', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Littoral préservé où le désert rencontre l\'océan Atlantique',
      features: ['Plages désertes', 'Falaises spectaculaires', 'Epaves', 'Oiseaux marins']
    },
    { 
      name: 'Tômbwa', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Village de pêcheurs traditionnel au bout de la côte sauvage',
      features: ['Pêche artisanale', 'Communauté locale', 'Cuisine du poisson', 'Traditions']
    },
    { 
      name: 'Communautés Mucubal', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Rencontre avec les éleveurs nomades du désert',
      features: ['Mode de vie nomade', 'Élevage traditionnel', 'Artisanat', 'Savoir-faire désertique']
    },
    { 
      name: 'Parc National d\'Iona', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Réserve naturelle protégeant l\'écosystème désertique unique',
      features: ['Protection biodiversité', 'Paysages protégés', 'Recherche scientifique', 'Écotourisme']
    },
  ];

  const experiences = [
    { 
      id: 'desert',
      name: 'Exploration Désertique', 
      icon: '🏜️',
      desc: 'Découverte du désert du Namibe, le plus vieux désert du monde',
      highlights: ['Dunes de sable rouge', 'Welwitschia mirabilis', 'Paysages lunaires', 'Adaptation faune'],
      details: 'Le désert du Namibe, vieux de plus de 55 millions d\'années, est le plus ancien désert du monde. Cette expédition vous emmène au cœur de paysages spectaculaires où les dunes de sable rouge côtoient les montagnes rocheuses. Vous découvrirez la célèbre Welwitschia mirabilis, plante endémique qui peut vivre plus de 2000 ans. Accompagné de guides spécialistes du désert, vous apprendrez les techniques de survie en milieu aride et observerez la faune unique adaptée à ces conditions extrêmes : oryx, springboks, renards du désert et nombreux reptiles.'
    },
    { 
      id: 'cote',
      name: 'Côte Sauvage', 
      icon: '🌊',
      desc: 'Découverte du littoral préservé où le désert rencontre l\'océan',
      highlights: ['Plages désertes', 'Falaises spectaculaires', 'Epaves historiques', 'Oiseaux marins'],
      details: 'La côte sauvage de l\'Angola est l\'un des littoraux les plus préservés d\'Afrique. Ici, les dunes du désert tombent directement dans l\'océan Atlantique, créant des paysages d\'une beauté sauvage. Vous explorerez des plages immenses et désertes, découvrirez des falaises spectaculaires sculptées par les vents, et observerez les épaves de navires échoués témoignant du passé maritime mouvementé. Cette zone est un paradis pour les oiseaux marins (cormorans, pélicans, sternes) et abrite des colonies de phoques. Les couchers de soleil sur l\'océan sont particulièrement spectaculaires.'
    },
    { 
      id: 'mucubal',
      name: 'Culture Mucubal', 
      icon: '👨‍👩‍👧‍👦',
      desc: 'Rencontre avec les éleveurs nomades du peuple Mucubal',
      highlights: ['Peuple Mucubal', 'Élevage nomade', 'Coiffures traditionnelles', 'Artisanat'],
      details: 'Le peuple Mucubal est l\'un des groupes ethniques les plus fascinants d\'Angola. Éleveurs nomades du désert, ils ont développé une culture unique adaptée aux conditions extrêmes du Namibe. Vous rencontrerez une communauté Mucubal qui partagera avec vous son mode de vie traditionnel : techniques d\'élevage des chèvres et des vaches dans le désert, préparation des repas, fabrication d\'objets artisanaux. Les femmes Mucubal sont célèbres pour leurs coiffures élaborées et leurs parures en perles. Cette immersion authentique vous permettra de comprendre comment ce peuple survit et prospère dans l\'un des environnements les plus hostiles de la planète.'
    },
    { 
      id: 'faune',
      name: 'Faune Désertique', 
      icon: '🦊',
      desc: 'Observation des espèces uniques adaptées au milieu désertique',
      highlights: ['Oryx gazelle', 'Springbok', 'Renard du désert', 'Reptiles endémiques'],
      details: 'Malgré les conditions arides, le désert du Namibe abrite une faune étonnamment diversifiée et parfaitement adaptée. Vous observerez l\'oryx gazelle, antilope majestueuse capable de survivre sans boire pendant des semaines, le springbok agile, le renard du désert aux grandes oreilles, et de nombreux reptiles endémiques. Les zones côtières abritent des colonies de phoques et une riche avifaune marine. Accompagné d\'un guide naturaliste, vous apprendrez les stratégies d\'adaptation de ces animaux à la chaleur extrême et au manque d\'eau. Des moments privilégiés d\'observation au lever et au coucher du soleil.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero avec image du désert */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Désert du Namibe et Côte Sauvage</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">🏜️</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              8 jours d'expédition dans le plus vieux désert du monde et sur la côte sauvage de l'Atlantique
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
            <span className="text-2xl">🌵</span>
            <span className="text-sm font-semibold">ANGOLA | DÉSERT ANCIEN</span>
          </div>
        </div>
      </div>

      {/* Section galerie d'images en haut */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Dunes du Namibe" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Dunes rouges du désert du Namibe</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Côte sauvage" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Côte sauvage où le désert rencontre l'océan</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Welwitschia mirabilis" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">Welwitschia mirabilis, plante millénaire</p>
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
                <span className="bg-orange-600 text-white px-3 py-1 font-bold">AVENTURE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">AGO4</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">8 jours - Namibe à Tômbwa</span>
                <button className="ml-auto border-2 border-orange-600 text-orange-600 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-700">Pour une aventure unique dans le plus vieux désert du monde</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-orange-600 text-black' : 'text-gray500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-orange-600 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                      src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Dunes du Namibe" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">Dunes de sable rouge du désert du Namibe</p>
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Côte sauvage" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm">La côte sauvage où le désert rencontre l'océan</p>
                    </div>
                  </div>
                </div>

                {/* Description principale */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Cette expédition de 8 jours vous emmène à la découverte du désert du Namibe, le plus ancien désert du monde, et de la côte sauvage de l'Atlantique sud en Angola. Un voyage d'aventure unique entre paysages lunaires, dunes rouges spectaculaires, plages désertes et rencontres authentiques avec les peuples du désert.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Votre aventure débutera à Namibe, port historique du sud de l'Angola. En 4x4 équipés, vous pénétrerez dans le désert du Namibe pour découvrir ses paysages uniques : les célèbres dunes de sable rouge de Sossusvlei angolais, les plaines de gravier, les montagnes lunaires, et la fascinante Welwitschia mirabilis, plante endémique vieille de plus de 2000 ans. Vous longerez ensuite la côte sauvage jusqu'à Tômbwa, découvrant des plages immenses, des falaises spectaculaires et rencontrant les communautés de pêcheurs et le peuple Mucubal, éleveurs nomades du désert.
                </p>

                {/* Image plein écran */}
                <div className="relative h-96 overflow-hidden rounded-lg my-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Désert du Namibe" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-semibold">Le désert du Namibe : plus vieux désert du monde, paysages d'une beauté minérale</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit est conçu pour les amateurs d'aventure, de paysages extrêmes et de cultures authentiques. Accompagné de guides spécialistes du désert, vous découvrirez un écosystème unique, observerez la faune adaptée aux conditions arides, et vivrez des moments privilégiés avec les peuples qui habitent ces terres hostiles. Une expérience d'expédition responsable qui contribue à l'économie locale et à la préservation de cet environnement fragile.
                </p>

                {/* Section Points forts avec images */}
                <div className="bg-orange-50 border-l-4 border-orange-600 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-600">Les Atouts de l'Expédition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-orange-600 text-2xl">{item.icon}</span>
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
                        src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Côte sauvage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Welwitschia" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-orange-600 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Clés de cette Expédition</h3>
                  
                  {/* Galerie d'expériences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert du Namibe" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Exploration du désert du Namibe</p>
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Côte sauvage" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                        <p className="text-white text-sm font-semibold">Découverte de la côte sauvage</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Conduite en 4x4</strong> dans les dunes et pistes désertiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Observation de la Welwitschia mirabilis</strong>, plante millénaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Découverte de la faune désertique</strong> adaptée (oryx, springboks)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Rencontre avec le peuple Mucubal</strong>, éleveurs nomades</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Exploration de plages désertes</strong> et falaises spectaculaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Visite de villages de pêcheurs</strong> traditionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Nuits en bivouac</strong> sous les étoiles du désert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span><strong>Photographie de paysages</strong> uniques et contrastés</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le Désert du Namibe avec image */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3">
                        <img 
                          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Désert du Namibe" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-2">Le Désert du Namibe : Un Trésor Géologique</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Le désert du Namibe, vieux de 55 à 80 millions d'années, est le plus ancien désert du monde. S'étendant sur 2 000 km le long de la côte atlantique de l'Afrique australe, il présente une biodiversité unique avec un taux d'endémisme exceptionnel. Sa caractéristique la plus célèbre est la Welwitschia mirabilis, une plante relique qui peut vivre plus de 2000 ans. Le désert abrite également des espèces animales rares adaptées à l'aridité : oryx gazelle, springbok, renard du désert, et de nombreux reptiles. Le contraste entre les dunes rouges, les plaines de gravier et l'océan Atlantique crée des paysages d'une beauté spectaculaire.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Désert le plus vieux du monde</span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Biodiversité unique</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Welwitschia mirabilis</span>
                          <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Dunes rouges</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Côte sauvage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques avec image de fond */}
                <div className="mb-10 bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Désert du Namibe" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">📊</span>
                      <span className="font-semibold text-lg">LE DÉSERT DU NAMIBE EN CHIFFRES</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Âge du désert</div>
                        <div className="text-3xl font-bold">55M+</div>
                        <div className="text-xs text-white/80">années (le plus vieux)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Superficie</div>
                        <div className="text-3xl font-bold">81,000</div>
                        <div className="text-xs text-white/80">km² en Angola</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Pluie annuelle</div>
                        <div className="text-3xl font-bold">2-200</div>
                        <div className="text-xs text-white/80">mm (très aride)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/90 mb-1">Température max</div>
                        <div className="text-3xl font-bold">45°C</div>
                        <div className="text-xs text-white/80">en été</div>
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
                          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Côte sauvage Angola" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours Désert et Côte Sauvage</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Cette expédition vous emmène de Namibe, port historique du sud de l'Angola, à travers le désert du Namibe jusqu'à la côte sauvage atlantique. Le parcours combine exploration désertique en 4x4 et découverte du littoral préservé. Vous traverserez les paysages lunaires du désert, observerez la faune adaptée, rencontrerez les peuples du désert (Mucubal), et découvrirez les villages de pêcheurs traditionnels. L'itinéraire alterne entre nuits en lodge confortable et bivouacs sous les étoiles, pour une immersion totale dans cet environnement extrême et magnifique.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Jours en 4x4</div>
                            <div className="text-orange-600 font-bold">6</div>
                          </div>
                          <div>
                            <div className="font-semibold">Distance parcourue</div>
                            <div className="text-orange-600 font-bold">800+ km</div>
                          </div>
                          <div>
                            <div className="font-semibold">Nuits bivouac</div>
                            <div className="text-orange-600 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Guides spécialisés</div>
                            <div className="text-orange-600 font-bold">2+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées avec images */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-orange-600">Les Zones Explorées</h3>
                  <div className="space-y-6">
                    {regions.map((region, index) => (
                      <div key={index} className={`${region.color} ${region.textColor} p-4 rounded-lg shadow-sm border-l-4 border-current`}>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src={
                                  region.name === 'Namibe' 
                                    ? 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Désert du Namibe'
                                    ? 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Côte Sauvage'
                                    ? 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Tômbwa'
                                    ? 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : region.name === 'Communautés Mucubal'
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
                  <h3 className="text-xl font-semibold mb-4">Galerie Paysages Désertiques</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Dunes 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Côte 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Welwitschia" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Village pêcheurs" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Section Itinéraire synthétique */}
                <div className="mb-10 bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1</div>
                      <div className="text-sm">Arrivée Namibe</div>
                      <div className="text-xs opacity-80">Préparation expédition, nuit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">2-4</div>
                      <div className="text-sm">Désert du Namibe</div>
                      <div className="text-xs opacity-80">Dunes, Welwitschia, faune, bivouacs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">5-7</div>
                      <div className="text-sm">Côte Sauvage</div>
                      <div className="text-xs opacity-80">Plages, falaises, pêcheurs, Mucubal</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">8</div>
                      <div className="text-sm">Retour Namibe</div>
                      <div className="text-xs opacity-80">Transfert, fin de l'expédition</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement avec image */}
                <div className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-amber-700">Niveau et Préparation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <strong>Niveau moyen-élevé (4/5)</strong> : Cette expédition comporte des trajets en 4x4 sur pistes désertiques parfois difficiles, des marches dans le sable sous des températures pouvant être élevées, et des nuits en bivouac en autonomie. Une bonne condition physique est nécessaire. L'âge minimum recommandé est de 18 ans. Les conditions climatiques peuvent être extrêmes (forte chaleur la journée, fraîcheur la nuit).
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Bonne condition physique nécessaire</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Trajets 4x4 sur pistes difficiles</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Âge minimum recommandé : 18 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600">●</span>
                              <span className="text-sm">Adaptabilité aux conditions désertiques</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <span>🥾</span>
                              <span>Chaussures de randonnée montantes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧴</span>
                              <span>Crème solaire indice 50+</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧥</span>
                              <span>Veste chaude pour les nuits</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧢</span>
                              <span>Chapeau à large bord</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💧</span>
                              <span>Gourde ou poche à eau (3L)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🕶️</span>
                              <span>Lunettes de soleil polarisantes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>📷</span>
                              <span>Appareil photo avec protection sable</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>💊</span>
                              <span>Trousse médicale personnelle</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Équipement désert" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit avec image */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Côte sauvage" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Cette Expédition ?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-orange-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Découverte du plus vieux désert du monde</h4>
                            <p className="text-sm text-gray-700">
                              Le désert du Namibe est une merveille géologique unique.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Contraste unique désert-océan</h4>
                            <p className="text-sm text-gray-700">
                              La côte sauvage offre des paysages d'une beauté spectaculaire.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Rencontres authentiques avec les peuples du désert</h4>
                            <p className="text-sm text-gray-700">
                              Les Mucubal et les pêcheurs préservent des traditions ancestrales.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-orange-600 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold">Aventure responsable qui soutient les communautés</h4>
                            <p className="text-sm text-gray-700">
                              Votre voyage contribue directement à l'économie locale.
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
                  {/* Jour 1 - Arrivée à Namibe */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE À NAMIBE</span>
                          <span className="text-sm text-gray-600">Accueil et préparation de l'expédition</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <p className="text-justify mb-4">
                              Arrivée à l'aéroport de Namibe (MSZ). Accueil par votre guide francophone spécialiste du désert. Transfert à votre hôtel en centre-ville. Installation et repos après le voyage. En fin d'après-midi, briefing détaillé sur l'expédition à venir : présentation du désert du Namibe, des règles de sécurité en milieu désertique, du programme détaillé. Vérification de l'équipement personnel. Dîner de bienvenue avec spécialités angolaises (poissons et fruits de mer). Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Arrivée - Transfert - Briefing expédition - Dîner de bienvenue
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Namibe" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Première immersion dans le désert */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PREMIÈRE IMMERSION DANS LE DÉSERT</span>
                          <span className="text-sm text-gray-600">Dunes de sable rouge et premières Welwitschias</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Découverte des dunes</h4>
                            <p className="text-justify mb-4">
                              Départ matinal en 4x4 vers le cœur du désert du Namibe. Premiers arrêts pour observer les paysages lunaires : plaines de gravier, montagnes rocheuses érodées. Arrivée dans la zone des dunes de sable rouge. Ascension d'une dune pour admirer le panorama à 360°. Première rencontre avec la Welwitschia mirabilis, plante endémique millénaire. Déjeuner pique-nique à l'ombre d'un acacia. Après-midi : poursuite de l'exploration avec observation de la faune désertique (oryx, springboks, reptiles). Installation du premier bivouac en fin de journée. Dîner préparé sur le feu de camp. Nuit sous tente ou à la belle étoile.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Départ en 4x4 - Dunes de sable rouge - Welwitschias - Observation faune - Premier bivouac
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Dunes du Namibe" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Cœur du désert du Namibe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">CŒUR DU DÉSERT DU NAMIBE</span>
                          <span className="text-sm text-gray-600">Exploration des paysages les plus spectaculaires</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée d'exploration</h4>
                            <p className="text-justify mb-4">
                              Lever de soleil magique sur les dunes. Petit-déjeuner au camp. Départ pour une journée complète d'exploration du désert. Traversée de zones variées : champs de dunes, plaines caillouteuses, oasis temporaires. Arrêt prolongé pour étudier des spécimens exceptionnels de Welwitschia mirabilis (certains âgés de plus de 1500 ans). Déjeuner à l'ombre d'un kopje (colline rocheuse). Après-midi consacré à la recherche d'animaux du désert : observation d'oryx gazelle, de springboks, et avec un peu de chance, de renards du désert. En fin de journée, installation du deuxième bivouac dans une zone particulièrement isolée. Dîner et nuit sous les étoiles exceptionnellement claires du désert.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration désertique - Welwitschias millénaires - Observation faune désertique - Bivouac isolé
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Welwitschia" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Rencontre avec les Mucubal */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RENCONTRE AVEC LES MUCUBAL</span>
                          <span className="text-sm text-gray-600">Immersion avec les éleveurs nomades du désert</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée culturelle</h4>
                            <p className="text-justify mb-4">
                              Départ matinal vers une zone habitée par le peuple Mucubal. Rencontre avec une famille ou un petit groupe d'éleveurs nomades. Découverte de leur mode de vie adapté aux conditions extrêmes du désert : techniques d'élevage des chèvres et des vaches, recherche de points d'eau, construction d'abris temporaires. Les femmes Mucubal partageront leurs savoir-faire : coiffures traditionnelles élaborées, fabrication de parures en perles, préparation des repas. Déjeuner partagé avec la communauté. Après-midi : participation à des activités quotidiennes (si la saison le permet). Démonstration de techniques de survie en milieu désertique. En fin de journée, installation du bivouac près de la communauté (avec leur accord). Dîner et échanges autour du feu.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Rencontre peuple Mucubal - Partage culturel - Techniques survie désert - Bivouac communautaire
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Peuple Mucubal" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Vers la côte sauvage */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">VERS LA CÔTE SAUVAGE</span>
                          <span className="text-sm text-gray-600">Traversée vers l'océan Atlantique</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Désert rencontre océan</h4>
                            <p className="text-justify mb-4">
                              Dernière matinée dans le désert profond. Traversée en 4x4 vers la côte atlantique. Paysage qui change progressivement : apparition de végétation côtière, brouillard matinal caractéristique de la côte du Namibe. Arrivée sur la côte sauvage. Premier contact avec l'océan Atlantique. Déjeuner pique-nique sur une plage déserte. Après-midi : exploration des premières plages et falaises. Observation des oiseaux marins (cormorans, pélicans, sternes). Visite d'une épave de navire échoué, témoin du passé maritime. Installation en lodge ou camp de plage pour deux nuits. Dîner de fruits de mer frais. Nuit au son des vagues.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Traversée désert-côte - Arrivée océan - Exploration plages - Épaves - Installation lodge côtier
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Côte sauvage" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Exploration de la côte sauvage */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">EXPLORATION DE LA CÔTE SAUVAGE</span>
                          <span className="text-sm text-gray-600">Plages désertes, falaises et villages de pêcheurs</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée côtière</h4>
                            <p className="text-justify mb-4">
                              Journée consacrée à l'exploration de la côte sauvage. Départ le long du littoral en 4x4 sur les plages (selon les marées). Découverte de baies isolées, de falaises spectaculaires sculptées par l'érosion, d'arches naturelles. Arrêt dans un village de pêcheurs traditionnel. Rencontre avec les pêcheurs, découverte de leurs techniques de pêche (filets, lignes), observation du traitement du poisson. Déjeuner de poisson frais grillé. Après-midi : continuation vers le sud, arrêts photographiques aux points de vue les plus impressionnants. Recherche de colonies de phoques (selon la saison). Retour au lodge en fin d'après-midi. Temps libre pour se baigner (sous surveillance, courants forts). Dîner et nuit au lodge.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Exploration côtière - Villages pêcheurs - Photographie paysages - Baignade (si conditions) - Retour lodge
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Village pêcheurs" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Tômbwa et retour vers Namibe */}
                  <div className="border-2 border-gray-300 overflow-hidden border-orange-200">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-orange-50 hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">TÔMBWA ET RETOUR VERS NAMIBE</span>
                          <span className="text-sm text-gray-600">Dernière journée sur la côte, route retour</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-orange-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée de retour</h4>
                            <p className="text-justify mb-4">
                              Dernière matinée sur la côte. Visite de Tômbwa, village de pêcheurs à l'extrémité sud de la côte sauvage. Découverte du port de pêche artisanale, du marché aux poissons. Rencontre avec les pêcheurs revenant de la pêche nocturne. Déjeuner à Tômbwa. Début d'après-midi : route de retour vers Namibe par l'intérieur des terres. Paysages de transition entre la côte et le désert. Arrêts photographiques. Arrivée à Namibe en fin d'après-midi. Installation à l'hôtel. Temps libre pour se reposer et se rafraîchir. Dîner d'adieu dans un restaurant local avec spécialités angolaises. Nuit à l'hôtel à Namibe.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Visite Tômbwa - Marché poisson - Route retour Namibe - Installation hôtel - Dîner d'adieu
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Tômbwa" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 8 - Départ de Namibe */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(8)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-orange-600 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          8
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">DÉPART DE NAMIBE</span>
                          <span className="text-sm text-gray-600">Fin de l'expédition, transfert à l'aéroport</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 8 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 8 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <h4 className="text-xl font-semibold mb-3 text-orange-600">Journée de départ</h4>
                            <p className="text-justify mb-4">
                              Petit-déjeuner à l'hôtel. Selon l'horaire de votre vol, matinée libre pour les derniers achats de souvenirs (artisanat local, épices, café angolais) ou visite optionnelle du musée provincial de Namibe (histoire et géologie de la région). Déjeuner libre. En fonction de l'horaire de votre vol, transfert à l'aéroport de Namibe (MSZ). Assistance aux formalités d'embarquement. Fin de nos services. Vous emportez avec vous des souvenirs inoubliables de cette expédition unique : les paysages lunaires du plus vieux désert du monde, la beauté sauvage de la côte atlantique, les rencontres authentiques avec les peuples du désert, et l'expérience d'aventure en milieu extrême.
                            </p>
                            <div className="bg-orange-50 p-3 rounded text-sm">
                              <strong>Activités du jour :</strong> Petit-déjeuner - Temps libre / visite optionnelle - Transfert aéroport - Départ
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="relative h-48 overflow-hidden rounded-lg">
                              <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Aéroport de Namibe" 
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
                  <h4 className="text-xl font-semibold mb-6 text-center">Moments Forts de l'Expédition</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Dunes du Namibe" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Côte sauvage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Welwitschia" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Peuple Mucubal" 
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
                    <div className="flex items-center justify-center w-14 h-14 bg-orange-600 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🏜️</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-orange-600">Les Expériences Désertiques et Côtières</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Cette expédition est une immersion totale dans les paysages extrêmes du désert du Namibe et de la côte sauvage de l'Atlantique. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cet environnement unique, de l'exploration géologique à la rencontre avec les peuples qui y vivent.
                  </p>

                  {/* Galerie introductive */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Désert du Namibe" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Côte sauvage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Peuple Mucubal" 
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
                            ? 'bg-orange-600 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-orange-600">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-orange-600">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-orange-600 mt-1">•</span>
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
                                  exp.id === 'desert' 
                                    ? 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'cote'
                                    ? 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : exp.id === 'mucubal'
                                    ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                    : 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                                } 
                                alt={exp.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <InteractiveMap 
                              lat={exp.id === 'desert' ? -15.1967 : 
                                   exp.id === 'cote' ? -15.5 :
                                   exp.id === 'mucubal' ? -15.3 :
                                   -15.4} 
                              lng={exp.id === 'desert' ? 12.1522 : 
                                   exp.id === 'cote' ? 12.0 :
                                   exp.id === 'mucubal' ? 12.3 :
                                   12.2} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Paysages et Cultures</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600" 
                          alt="Désert du Namibe" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Exploration Désertique</h5>
                          <p className="text-sm text-gray-700">Dunes rouges et paysages lunaires</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600" 
                          alt="Côte sauvage" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Côte Sauvage</h5>
                          <p className="text-sm text-gray-700">Plages désertes et falaises spectaculaires</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                          alt="Peuple Mucubal" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Rencontre Mucubal</h5>
                          <p className="text-sm text-gray-700">Éleveurs nomades du désert</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deuxième ligne de galerie */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Côte sauvage" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Welwitschia" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Dunes du Namibe" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4 text-amber-700">Activités Optionnelles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Vol en ULM au-dessus du désert</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Survolez les dunes et la côte pour une perspective unique. Supplément : 250€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Session photo avec photographe professionnel</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Accompagnement par un photographe spécialiste des paysages. Supplément : 200€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Extension vers les peintures rupestres de Tchitundo-Hulo</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Journée supplémentaire pour découvrir l'art rupestre ancien. Supplément : 180€/personne.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Nuit en lodge de luxe sur la côte</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Amélioration de l'hébergement pour une nuit. Supplément : 150€/personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-xs md:text-sm text-gray-600 tracking-widest mb-2">HÉBERGEMENT DE L'EXPÉDITION</h2>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Éco-Lodges et Bivouacs en Pleine Nature</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-orange-600 w-16 md:w-32"></span>
                      <span className="text-orange-600 text-2xl">🏕️</span>
                      <span className="h-px bg-orange-600 w-16 md:w-32"></span>
                    </div>
                    
                    {/* Galerie d'hébergements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Hôtel à Namibe" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Bivouac dans le désert" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Lodge côtier" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Cette expédition alterne entre hébergements confortables en ville et bivouacs en pleine nature pour une immersion totale. À Namibe, vous séjournerez dans un hôtel confortable. Pendant l'expédition dans le désert et sur la côte, vous découvrirez l'expérience du bivouac sous les étoiles (tentes fournies) et passerez une nuit dans un éco-lodge côtier. Tous les bivouacs sont installés par notre équipe qui assure confort et sécurité, avec sanitaires mobiles et douches solaires.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('namibe')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'namibe' 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      NAMIBE (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bivouac')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bivouac' 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BIVOUACS (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('lodge')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lodge' 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LODGE CÔTIER (2 NUITS)
                    </button>
                  </div>

                  {/* Contenu des hébergements - Namibe */}
                  {activeHotelTab === 'namibe' && (
                    <div className="space-y-16">
                      {/* Hotel Miramar */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600" 
                                alt="Hotel Miramar" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Miramar</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, Namibe, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Vue sur l'océan</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant fruits de mer</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar est un établissement confortable situé face à l'océan Atlantique. Les chambres sont climatisées et équipées de lits confortables, de salle de bain privée, et de wifi. Le restaurant de l'hôtel est réputé pour sa cuisine de fruits de mer frais. La terrasse offre une belle vue sur la baie de Namibe. L'hôtel dispose également d'un service de sécurité 24h/24. Idéal pour les nuits avant et après l'expédition dans le désert.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Bivouac */}
                  {activeHotelTab === 'bivouac' && (
                    <div className="space-y-16">
                      {/* Bivouac Désertique */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600" 
                              alt="Bivouac dans le désert" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Bivouac en Plein Désert</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Désert du Namibe, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏜️</span>
                                <span>Emplacements isolés et préservés</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">⛺</span>
                                <span className="text-sm font-semibold">Tentes de qualité (2 personnes)</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🚿</span>
                                <span className="text-sm font-semibold">Douche solaire mobile</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-semibold">Feu de camp et cuisine bivouac</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Les bivouacs sont installés par notre équipe dans des endroits préservés du désert, loin de toute trace humaine. Nous fournissons des tentes spacieuses pour 2 personnes, avec matelas et duvets. Les sanitaires mobiles et douches solaires assurent un confort minimum. Les repas sont préparés par notre cuisinier sur feu de bois. Les soirées autour du feu sous un ciel étoilé exceptionnellement clair sont des moments magiques. Ces bivouacs respectent strictement l'environnement désertique fragile (aucun déchet laissé sur place).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lodge */}
                  {activeHotelTab === 'lodge' && (
                    <div className="space-y-16">
                      {/* Éco-Lodge Côtier */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600" 
                              alt="Éco-Lodge Côtier" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Éco-Lodge Baía dos Tigres</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Côte sauvage, sud de Namibe, Angola
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌊</span>
                                <span>Directement sur la plage</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏡</span>
                                <span className="text-sm font-semibold">Bungalows en matériaux naturels</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">☀️</span>
                                <span className="text-sm font-semibold">Énergie solaire</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🐟</span>
                                <span className="text-sm font-semibold">Cuisine de poisson frais</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Éco-Lodge Baía dos Tigres est un hébergement unique situé directement sur la plage de la côte sauvage. Construit avec des matériaux locaux (bois, roseaux), il offre des bungalows simples mais confortables avec lit, moustiquaire et salle de bain privée. L'éco-lodge fonctionne à l'énergie solaire et recycle ses déchets. L'eau est fournie par un puits ou est dessalée. La cuisine utilise le poisson pêché le jour même par les pêcheurs locaux. Le lodge est un endroit idéal pour se reposer après les journées d'exploration et profiter du bruit des vagues.
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
                  <span className="text-2xl">🏜️</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Expédition</h3>
                </div>
                
                {/* Image de promotion */}
                <div className="relative h-40 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Désert du Namibe" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold">Dunes rouges du désert du Namibe</p>
                  </div>
                </div>
                
                {/* Prix avec promotion */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-orange-600">$2,399</span>
                    <span className="text-xl line-through text-gray-500">$2,199</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Expédition complète</div>
                  <div className="mt-2 text-xs text-orange-600 bg-orange-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, 4x4 équipé, guide spécialiste, hébergements, tous repas, équipement bivouac
                  </div>
                  <div className="mt-2 text-xs bg-red-50 text-red-700 p-2 rounded">
                    ⚡ PROMOTION : Réservez avant le 30 avril 2026 et économisez 200$ par personne
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-600"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-600"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-04-15">15 Avril 2026</option>
                    <option value="2026-05-13">13 Mai 2026</option>
                    <option value="2026-06-10">10 Juin 2026</option>
                    <option value="2026-07-08">8 Juillet 2026</option>
                    <option value="2026-08-05">5 Août 2026</option>
                    <option value="2026-09-02">2 Septembre 2026</option>
                    <option value="2026-09-30">30 Septembre 2026</option>
                    <option value="2026-10-28">28 Octobre 2026</option>
                    <option value="2026-11-25">25 Novembre 2026</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs d'avril à novembre (meilleure période sèche)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>EXPÉDITION EXCLUSIVE</strong> limitée à 6 participants maximum
                  </p>
                  <p className="text-xs text-gray-300">* Accompagnement par un guide spécialiste du désert</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-orange-600 text-white py-4 font-bold text-2xl mb-4 hover:bg-orange-500 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-orange-600 text-white py-4 font-semibold text-base mb-4 hover:bg-orange-500 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur l'expédition ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts aventuriers vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.0,-17.0,14.0,-14.0&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Désert du Namibe miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Désert du Namibe - 8 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Namibe → Désert → Côte Sauvage → Tômbwa
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
                    <span>Transferts aéroport et tous trajets</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste francophone</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>7 nuits (hôtel, lodge, bivouac)</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tous les repas pendant le séjour</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4x4 équipé et carburant</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Équipement de bivouac complet</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Assistance 24h/24</span>
                    <span className="font-bold text-orange-600">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions avec image */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Désert du Namibe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau de l'expédition</span>
                    <span className="font-bold text-orange-600">Moyen-élevé</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-orange-600">18 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs avril à novembre</span>
                    <span className="font-bold text-orange-600">Saison sèche</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste</span>
                    <span className="font-bold text-orange-600">Désert et 4x4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-orange-600">6 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Vaccins obligatoires : Fièvre jaune, recommandés : Hépatites, typhoïde, antipaludéens
                </div>
              </div>

              {/* Widget témoignage avec photo */}
              <div className="border-2 border-orange-200 p-4 mt-6 shadow-lg bg-orange-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Voyageur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Témoignage Aventurier</h4>
                    <p className="text-xs text-gray-600">Thomas L., photographe paysages 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-3">
                  "Une expédition hors du commun dans le plus vieux désert du monde. Les paysages sont à couper le souffle : dunes rouges à perte de vue, côte sauvage où le désert plonge dans l'océan, ciels étoilés d'une pureté incroyable. Les rencontres avec les Mucubal et les pêcheurs sont authentiques. L'équipe de guides est excellente, très professionnelle. Une aventure que je recommande aux amateurs de paysages extrêmes et d'immersion culturelle."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section galerie finale */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-orange-600">Galerie Photographique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Dunes 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Côte 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Welwitschia 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Village pêcheurs 1" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-orange-500 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}