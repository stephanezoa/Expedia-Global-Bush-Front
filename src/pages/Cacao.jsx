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
            className={`px-4 py-2 text-sm ${mapType === 'roadmap' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 text-sm ${mapType === 'satellite' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <h4 className="font-semibold text-center text-lg">Itinéraire Cacao et Chocolat de Luxe</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => setMapType('roadmap')}
            className={`px-3 py-1 text-xs ${mapType === 'roadmap' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Plan
          </button>
          <button 
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1 text-xs ${mapType === 'satellite' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.5&layer=mapnik&marker=0.34,6.73&marker=0.30,6.65&marker=0.26,6.60&marker=0.22,6.57&marker=0.18,6.54"
          style={{ border: 0 }}
          allowFullScreen
          title="Cacao et Chocolat de Luxe"
        ></iframe>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs rounded shadow">
          <a href="https://www.openstreetmap.org/#map=10/0.28/6.65" target="_blank" rel="noopener noreferrer">
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
          <span className="w-4 h-4 rounded-full bg-amber-700 border-2 border-gray-300"></span>
          <span className="text-sm">São Tomé (ville)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-green-700 border-2 border-gray-300"></span>
          <span className="text-sm">Roca Agostinho Neto</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-gray-300"></span>
          <span className="text-sm">Plantation Monte Café</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-gray-300"></span>
          <span className="text-sm">Usine de transformation</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-gray-300"></span>
          <span className="text-sm">Roca Bombaim</span>
        </div>
      </div>
    </div>
  );
};

export default function Cacao() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [activeTab, setActiveTab] = useState('apercu');
  const [activeDay, setActiveDay] = useState(null);
  const [activeHotelTab, setActiveHotelTab] = useState('saotome');
  const [activeExperienceTab, setActiveExperienceTab] = useState('plantations');

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const highlights = [
    { icon: '🍫', title: 'Plantations Historiques', desc: 'Visite des plus anciennes plantations de cacao' },
    { icon: '🌱', title: 'De la Fève à la Tablette', desc: 'Processus complet de fabrication du chocolat' },
    { icon: '👨‍🌾', title: 'Rencontres avec Producteurs', desc: 'Échanges avec les cultivateurs locaux' },
    { icon: '👩‍🍳', title: 'Ateliers Chocolat', desc: 'Création de vos propres tablettes de chocolat' },
    { icon: '🏛️', title: 'Architecture Coloniale', desc: 'Découverte du patrimoine des plantations' },
    { icon: '🍷', title: 'Dégustations Privilégiées', desc: 'Dégustation de chocolats fins et rares' },
  ];

  const regions = [
    { 
      name: 'São Tomé (ville)', 
      color: 'bg-amber-100', 
      textColor: 'text-amber-800', 
      desc: 'Point de départ et introduction à l\'histoire du cacao santoméen',
      features: ['Introduction historique', 'Musée du cacao', 'Premières dégustations', 'Rencontre experts']
    },
    { 
      name: 'Roca Agostinho Neto', 
      color: 'bg-green-100', 
      textColor: 'text-green-800', 
      desc: 'Ancienne plus grande plantation de cacao, aujourd\'hui monument historique',
      features: ['Architecture coloniale', 'Histoire sociale', 'Cacaoyers anciens', 'Photographie']
    },
    { 
      name: 'Plantation Monte Café', 
      color: 'bg-blue-100', 
      textColor: 'text-blue-800', 
      desc: 'Plantation familiale biologique avec méthodes traditionnelles',
      features: ['Cacao biologique', 'Méthodes traditionnelles', 'Rencontre famille', 'Dégustation fèves']
    },
    { 
      name: 'Usine de Transformation', 
      color: 'bg-purple-100', 
      textColor: 'text-purple-800', 
      desc: 'Processus moderne de transformation du cacao en chocolat',
      features: ['Transformation moderne', 'Contrôle qualité', 'Emballage', 'Dégustation produits']
    },
    { 
      name: 'Roca Bombaim', 
      color: 'bg-emerald-100', 
      textColor: 'text-emerald-800', 
      desc: 'Plantation de luxe produisant du cacao d\'exception',
      features: ['Cacao d\'exception', 'Méthodes exclusives', 'Dégustation premium', 'Séjour plantation']
    },
    { 
      name: 'Centre de Recherche Cacao', 
      color: 'bg-red-100', 
      textColor: 'text-red-800', 
      desc: 'Centre scientifique dédié à l\'amélioration des variétés de cacao',
      features: ['Recherche scientifique', 'Variétés rares', 'Conservation génétique', 'Innovation']
    },
  ];

  const experiences = [
    { 
      id: 'plantations',
      name: 'Visite de Plantations', 
      icon: '🌳',
      desc: 'Exploration des plantations historiques et découverte de la culture du cacao',
      highlights: ['Plantations historiques', 'Cacaoyers anciens', 'Méthodes traditionnelles', 'Histoire sociale'],
      details: 'São Tomé fut autrefois le plus grand producteur mondial de cacao. Vous découvrirez les plantations qui ont fait la richesse de l\'île, leurs architectures coloniales préservées, et rencontrerez les familles qui perpétuent cette tradition. De la récolte manuelle des cabosses au séchage des fèves, chaque étape vous sera expliquée par des experts passionnés.'
    },
    { 
      id: 'transformation',
      name: 'Transformation du Cacao', 
      icon: '🏭',
      desc: 'Découverte du processus de transformation de la fève en chocolat',
      highlights: ['Fermentation', 'Séchage', 'Torréfaction', 'Conchage'],
      details: 'Suivez le parcours complet de la fève de cacao jusqu\'à la tablette de chocolat. Vous visiterez des unités de fermentation et de séchage traditionnelles, puis des usines modernes de transformation. Chaque étape - fermentation, séchage, torréfaction, broyage, conchage, tempérage - vous sera expliquée et démontrée. Une immersion totale dans l\'alchimie du chocolat.'
    },
    { 
      id: 'degustation',
      name: 'Dégustation Exclusive', 
      icon: '🍫',
      desc: 'Dégustation de chocolats fins et découverte des arômes subtils',
      highlights: ['Chocolats fins', 'Tablettes rares', 'Accords mets-vins', 'Arômes subtils'],
      details: 'São Tomé produit certains des cacaos les plus aromatiques au monde. Guidés par un chocolatier expert, vous apprendrez à déguster le chocolat comme un professionnel : analyse visuelle, olfactive, rupture, dégustation. Vous découvrirez les différentes variétés de cacao, leurs arômes spécifiques (fruits rouges, épices, noisette...), et expérimenterez des accords innovants avec vins, thés et spiritueux.'
    },
    { 
      id: 'ateliers',
      name: 'Ateliers Créatifs', 
      icon: '👨‍🍳',
      desc: 'Participation à des ateliers pour créer vos propres tablettes de chocolat',
      highlights: ['Création personnelle', 'Moulage artistique', 'Garnitures premium', 'Emballage personnalisé'],
      details: 'Passez de l\'autre côté du comptoir et devenez chocolatier le temps d\'un atelier. Vous créerez vos propres tablettes de chocolat, choisirez vos garnitures (fruits locaux, épices, noix...), apprendrez les techniques de moulage et de tempérage. Chaque participant repartira avec ses créations personnalisées, fabriquées avec du cacao 100% santoméen.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        {/* Logo ESCAPES */}
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 flex items-center gap-2 text-sm font-bold z-10">
          <span className="text-xl">🍫</span>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">Cacao et Chocolat de Luxe</h1>
            <div className="flex items-center gap-4">
              <span className="h-px bg-white w-32 md:w-64"></span>
              <span className="text-white text-3xl">▼</span>
              <span className="h-px bg-white flex-1"></span>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-4xl">
              7 jours d'immersion dans le monde du cacao santoméen d'exception
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
            <span className="text-2xl">🇸🇹</span>
            <span className="text-sm font-semibold">SÃO TOMÉ-ET-PRÍNCIPE | GASTRONOMIE</span>
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
                <span className="bg-green-700 text-white px-3 py-1 font-bold">GASTRONOMIE</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="font-semibold">CODE:</span>
                <span className="bg-gray-800 text-white px-3 py-1 font-bold">STP7</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="text-gray-600">7 jours - São Tomé à Roca Bombaim</span>
                <button className="ml-auto border-2 border-green-700 text-green-700 px-4 py-2 text-xs font-semibold flex items-center gap-2 hover:bg-green-700 hover:text-white transition-colors">
                  <span>📄</span> IMPRIMER ITINÉRAIRE
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-sm text-gray-700">Pour amateurs de chocolat et de découvertes gustatives</span>
              </div>
            </div>

            {/* Navigation d'onglets */}
            <div className="border-b-2 border-gray-200 mb-8 overflow-x-auto">
              <div className="flex gap-4 md:gap-8 min-w-max">
                <button 
                  onClick={() => setActiveTab('apercu')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'apercu' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  APERÇU DU CIRCUIT
                </button>
                <button 
                  onClick={() => setActiveTab('itineraire')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'itineraire' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  ITINÉRAIRE
                </button>
                <button 
                  onClick={() => setActiveTab('experiences')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'experiences' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  EXPÉRIENCES
                </button>
                <button 
                  onClick={() => setActiveTab('hebergement')}
                  className={`pb-4 font-semibold text-sm md:text-base whitespace-nowrap ${activeTab === 'hebergement' ? 'border-b-4 border-green-700 text-black' : 'text-gray-500 hover:text-gray-700'}`}
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
                  Ce circuit de 7 jours est une immersion totale dans le monde fascinant du cacao santoméen, reconnu comme l'un des meilleurs au monde. De la plantation à la tablette, vous découvrirez tous les secrets de ce "or brun" qui a fait la richesse de São Tomé. Un voyage gourmand à travers l'histoire, la culture et les saveurs uniques de l'archipel.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Vous débuterez votre voyage par une introduction à l'histoire mouvementée du cacao à São Tomé, avant de partir explorer les plantations historiques qui témoignent de l'âge d'or du cacao. Vous rencontrerez des producteurs passionnés, visiterez des usines de transformation modernes, et participerez à des ateliers de création de chocolat. Chaque journée sera ponctuée de dégustations exclusives de chocolats fins, vous permettant d'apprécier la palette aromatique exceptionnelle du cacao santoméen.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                  Ce circuit allie découverte historique, rencontres humaines et expériences gustatives. Vous séjournerez dans des hébergements de charme, dont certains au cœur même des plantations. Un voyage pour les amateurs de chocolat, d'histoire et d'authenticité, qui vous fera découvrir São Tomé sous un angle unique et gourmand.
                </p>

                {/* Section Points forts */}
                <div className="bg-green-50 border-l-4 border-green-700 pl-6 mb-10 p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Les Saveurs du Voyage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-green-700 text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Expériences du Circuit */}
                <div className="border-l-4 border-green-700 pl-6 mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Expériences Gourmandes de ce Circuit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Visite de plantations historiques</strong>, témoins de l'âge d'or du cacao</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Processus complet de transformation</strong>, de la fève à la tablette</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Rencontres avec les producteurs</strong>, échanges authentiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Ateliers de création chocolat</strong>, fabrication de vos propres tablettes</span>
                      </li>
                    </ul>
                    <ul className="list-none space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Dégustation de chocolats fins</strong>, analyse sensorielle approfondie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Accords chocolat-vins</strong>, expériences gustatives innovantes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Visite du centre de recherche</strong>, découverte des variétés rares</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-700 mt-1">•</span>
                        <span><strong>Séjour en plantation</strong>, immersion totale dans l'univers du cacao</span>
                      </li>
                    </ul>
                  </div>

                  {/* Ligne de séparation */}
                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Focus sur le cacao */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Le Cacao de São Tomé : Un Trésor Gourmand</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      São Tomé fut au début du XXe siècle le premier producteur mondial de cacao. Aujourd'hui, l'archipel produit un cacao d'exception reconnu par les plus grands chocolatiers. Le terroir volcanique, le climat équatorial et les méthodes de culture traditionnelles donnent des fèves aux arômes complexes : notes de fruits rouges, d'épices, de noisette. Ce circuit vous plonge au cœur de cette filière d'excellence, de la plantation à la dégustation. La meilleure période pour ce circuit est d'août à décembre, pendant et après la récolte principale.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Niveau facile</span>
                      <span className="bg-brown-100 text-brown-800 text-xs px-3 py-1 rounded-full">Cacao d'exception</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Dégustation</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Histoire coloniale</span>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Rencontres authentiques</span>
                    </div>
                  </div>
                </div>

                {/* Section Statistiques */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📊</span>
                    <span className="font-semibold text-lg">LE CACAO EN CHIFFRES</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Production annuelle</div>
                      <div className="text-3xl font-bold text-green-700">3,000</div>
                      <div className="text-xs">tonnes de cacao</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Plantations visitées</div>
                      <div className="text-3xl font-bold text-green-700">5+</div>
                      <div className="text-xs">plantations différentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Dégustations incluses</div>
                      <div className="text-3xl font-bold text-green-700">12+</div>
                      <div className="text-xs">séances de dégustation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Tablettes créées</div>
                      <div className="text-3xl font-bold text-green-700">4</div>
                      <div className="text-xs">par participant</div>
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
                      <h4 className="font-semibold mb-4 text-center text-lg">Parcours du Cacao</h4>
                      <div className="bg-gray-50 p-6 rounded">
                        <p className="text-sm text-gray-700 mb-4">
                          Ce circuit vous emmène à travers les régions clés de la production de cacao à São Tomé. Vous commencerez par les plantations historiques du nord, avant de descendre vers les plantations familiales du centre. Les visites d'usines de transformation vous montreront le processus moderne, tandis que les ateliers pratiques vous permettront de créer vos propres chocolats. Le séjour en plantation à Roca Bombaim offre une immersion totale. Un parcours progressif qui combine histoire, technique et dégustation.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">Plantations visitées</div>
                            <div className="text-green-700 font-bold">5+</div>
                          </div>
                          <div>
                            <div className="font-semibold">Ateliers pratiques</div>
                            <div className="text-green-700 font-bold">3</div>
                          </div>
                          <div>
                            <div className="font-semibold">Dégustations guidées</div>
                            <div className="text-green-700 font-bold">6</div>
                          </div>
                          <div>
                            <div className="font-semibold">Rencontres producteurs</div>
                            <div className="text-green-700 font-bold">8+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte détaillée */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Carte des Plantations</h3>
                  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.5&layer=mapnik"
                      style={{ border: 0 }}
                      allowFullScreen
                      title="Carte Cacao et Chocolat"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm rounded shadow">
                      <a href="https://www.openstreetmap.org/#map=10/0.28/6.65" target="_blank" rel="noopener noreferrer">
                        Agrandir la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* Section Régions détaillées */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">Les Établissements du Cacao</h3>
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
                <div className="mb-10 bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Synthèse du Parcours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1-2</div>
                      <div className="text-sm">Introduction historique</div>
                      <div className="text-xs opacity-80">Arrivée, musée, premières plantations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3-5</div>
                      <div className="text-sm">Immersion technique</div>
                      <div className="text-xs opacity-80">Transformation, ateliers, dégustations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">6-7</div>
                      <div className="text-sm">Expérience premium</div>
                      <div className="text-xs opacity-80">Roca Bombaim, création, départ</div>
                    </div>
                  </div>
                </div>

                {/* Section Niveau et Équipement */}
                <div className="mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Niveau et Préparation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Niveau de Difficulté</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Niveau facile (1/5)</strong> : Ce circuit est accessible à tous, sans condition physique particulière. Les déplacements se font en véhicule confortable, avec de courtes marches dans les plantations. Les activités sont essentiellement des visites, dégustations et ateliers en intérieur ou en extérieur facile. Convient à tous les âges (à partir de 10 ans) et à tous les niveaux de connaissances sur le chocolat.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Aucune condition physique requise</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Visites et ateliers accessibles à tous</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Âge minimum : 10 ans (accompagné)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-600">●</span>
                          <span className="text-sm">Curiosité et appétit recommandés !</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Équipement Recommandé</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span>🥾</span>
                          <span>Chaussures confortables pour visites</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🎒</span>
                          <span>Sac à dos jour pour échantillons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧥</span>
                          <span>Veste légère pour le soir</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📓</span>
                          <span>Carnet de notes gustatives</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📸</span>
                          <span>Appareil photo pour les plantations</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💼</span>
                          <span>Valise supplémentaire pour achats</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🧴</span>
                          <span>Crème solaire et anti-moustiques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span>Bouteille d'eau réutilisable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Pourquoi Ce Circuit */}
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Pourquoi Choisir Ce Circuit Gourmand ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Accès exclusif à des plantations normalement fermées</h4>
                        <p className="text-sm text-gray-700">
                          Grâce à nos partenariats privilégiés, nous visitons des plantations et usines normalement inaccessibles aux touristes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Guide spécialiste du cacao santoméen</h4>
                        <p className="text-sm text-gray-700">
                          Votre guide est un expert du cacao, formé en chocolaterie et passionné par l'histoire et les saveurs de São Tomé.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Dégustations de chocolats rares et exclusifs</h4>
                        <p className="text-sm text-gray-700">
                          Vous goûterez des chocolats produits en petites séries, non disponibles dans le commerce, y compris des prototypes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold">Séjour dans une plantation historique</h4>
                        <p className="text-sm text-gray-700">
                          Une nuit dans la magnifique Roca Bombaim, plantation historique transformée en lodge de charme.
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
                  {/* Jour 1 - Arrivée et introduction */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ARRIVÉE ET INTRODUCTION</span>
                          <span className="text-sm text-gray-600">Accueil et première immersion dans l'univers du cacao</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 1 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 1 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Arrivée à l'aéroport international de São Tomé. Accueil par votre guide spécialiste du cacao. Transfert à l'hôtel en centre-ville. Installation et repos. En milieu d'après-midi, visite du Musée National avec focus sur l'histoire du cacao à São Tomé. Introduction à l'importance économique et sociale du "or brun". Première dégustation guidée de chocolats santoméens pour initier votre palais aux arômes spécifiques. Dîner de bienvenue dans un restaurant gastronomique avec menu à base de cacao. Nuit à l'hôtel à São Tomé.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Jour 2 - Plantations historiques */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(2)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PLANTATIONS HISTORIQUES</span>
                          <span className="text-sm text-gray-600">Visite de la Roca Agostinho Neto et Monte Café</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 2 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 2 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée historique</h4>
                        <p className="text-justify mb-4">
                          Départ matinal pour la Roca Agostinho Neto, ancienne plus grande plantation de cacao au monde. Visite des bâtiments coloniaux préservés, découverte de l'histoire sociale complexe des plantations. Démonstration de la récolte traditionnelle des cabosses. Déjeuner dans la plantation avec spécialités locales. Après-midi : visite de la plantation Monte Café, plus petite mais tout aussi historique. Rencontre avec une famille de producteurs qui cultive le cacao depuis trois générations. Dégustation de fèves fraîchement récoltées et séchées. Retour à São Tomé en fin d'après-midi. Dîner libre. Nuit à l'hôtel.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Visite plantations historiques - Histoire sociale - Dégustation fèves
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 3 - Transformation moderne */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(3)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">TRANSFORMATION MODERNE</span>
                          <span className="text-sm text-gray-600">Usines de transformation et atelier de création</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 3 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 3 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée technique</h4>
                        <p className="text-justify mb-4">
                          Visite d'une unité de fermentation et de séchage traditionnelle. Explication du processus crucial de fermentation qui développe les arômes. Continuation vers une usine de transformation moderne. Découverte des étapes : torréfaction, concassage, broyage, conchage, tempérage. Déjeuner avec l'équipe de l'usine. Après-midi : premier atelier de création chocolat. Apprentissage des bases du tempérage et du moulage. Création de vos premières tablettes avec garnitures locales. Dégustation comparative des chocolats produits. Installation dans un lodge en bordure de plantation. Dîner et nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Usine transformation - Atelier création - Dégustation comparative
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 4 - Centre de recherche et dégustation */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(4)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">RECHERCHE ET DÉGUSTATION</span>
                          <span className="text-sm text-gray-600">Centre de recherche et session de dégustation experte</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 4 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 4 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée scientifique et sensorielle</h4>
                        <p className="text-justify mb-4">
                          Visite du Centre de Recherche sur le Cacao. Découverte des travaux sur l'amélioration des variétés, la lutte contre les maladies, la conservation génétique. Rencontre avec les chercheurs. Déjeuner avec produits locaux. Après-midi : session de dégustation experte guidée par un chocolatier professionnel. Apprentissage du vocabulaire de dégustation, analyse des différents crus de São Tomé. Dégustation à l'aveugle pour aiguiser vos sens. Expérience d'accords chocolat-vins locaux. Retour au lodge. Dîner avec menu chocolaté. Nuit au lodge.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Centre recherche - Dégustation experte - Accords chocolat-vins
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 5 - Plantation familiale et atelier avancé */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(5)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">PLANTATION FAMILIALE</span>
                          <span className="text-sm text-gray-600">Immersion dans une exploitation familiale et atelier créatif</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 5 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 5 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée d'immersion familiale</h4>
                        <p className="text-justify mb-4">
                          Visite d'une petite plantation familiale biologique. Participation aux travaux de la plantation (selon saison) : récolte, ouverture des cabosses, tri des fèves. Échanges authentiques avec la famille sur leur vie et leurs défis. Déjeuner préparé par la famille avec produits du jardin. Après-midi : atelier chocolat avancé. Création de bonbons de chocolat fourrés, de pralinés, et de tablettes artistiques avec transferts. Dégustation des créations. Transfert vers la Roca Bombaim, plantation de luxe. Installation dans ce lodge exceptionnel. Dîner gastronomique à la plantation. Nuit à Roca Bombaim.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Plantation familiale - Atelier avancé - Installation Roca Bombaim
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 6 - Roca Bombaim et création finale */}
                  <div className="border-2 border-gray-300 overflow-hidden border-green-200">
                    <button 
                      onClick={() => toggleDay(6)}
                      className="w-full flex items-center justify-between p-5 bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          6
                        </span>
                        <div>
                          <span className="font-semibold text-base md:text-lg text-left block">ROCA BOMBAIM</span>
                          <span className="text-sm text-gray-600">Découverte de la plantation premium et atelier final</span>
                        </div>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 6 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 6 && (
                      <div className="p-6 bg-white border-t-2 border-green-200">
                        <h4 className="text-xl font-semibold mb-3 text-green-700">Journée premium</h4>
                        <p className="text-justify mb-4">
                          Découverte exclusive de la Roca Bombaim, plantation produisant du cacao d'exception. Visite des parcelles spéciales, des méthodes de culture exclusives. Dégustation des crus les plus rares de la plantation. Déjeuner raffiné avec produits de la plantation. Après-midi : atelier final de création. Conception de votre collection personnelle de chocolats, avec emballages personnalisés. Session photo professionnelle avec vos créations. Temps libre pour profiter des installations de la plantation (spa, piscine, etc.). Dîner d'adieu somptueux avec menu dégustation chocolat. Nuit à Roca Bombaim.
                        </p>
                        <div className="bg-green-50 p-3 rounded text-sm">
                          <strong>Activités du jour :</strong> Plantation premium - Atelier final - Dîner dégustation
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Jour 7 - Départ */}
                  <div className="border-2 border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => toggleDay(7)}
                      className="w-full flex items-center justify-between p-5 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-green-700 text-white w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                          7
                        </span>
                        <span className="font-semibold text-base md:text-lg text-left">DÉPART DE SÃO TOMÉ</span>
                      </div>
                      <span className="text-2xl text-gray-600 flex-shrink-0">{activeDay === 7 ? '∧' : '∨'}</span>
                    </button>
                    {activeDay === 7 && (
                      <div className="p-6 bg-white border-t-2 border-gray-200">
                        <p className="text-justify mb-4">
                          Petit-déjeuner à la plantation avec vue sur les cacaoyers. Derniers moments pour profiter de l'atmosphère paisible de Roca Bombaim. Emballage soigneux de vos créations chocolatées. Transfert à l'aéroport international de São Tomé. Selon l'horaire de votre vol, possibilité de dernier achat de chocolats à la boutique de l'aéroport. Assistance aux formalités d'embarquement. Emportez avec vous non seulement des kilos de chocolats exceptionnels, mais surtout la connaissance approfondie de l'un des produits les plus fascinants du monde, des rencontres humaines inoubliables, et le souvenir d'un voyage gourmand unique au cœur du pays du cacao.
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
                    <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-full flex-shrink-0">
                      <span className="text-white text-2xl">🍫</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-green-700">Les Expériences Chocolatées</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-sm md:text-base">
                    Ce circuit est une célébration complète du cacao santoméen, de son histoire riche à ses saveurs exceptionnelles. Chaque expérience est conçue pour vous faire découvrir un aspect différent de cet univers fascinant, des plantations historiques aux ateliers de création les plus modernes.
                  </p>

                  {/* Navigation des expériences */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    {experiences.map((exp) => (
                      <button 
                        key={exp.id}
                        onClick={() => setActiveExperienceTab(exp.id)}
                        className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeExperienceTab === exp.id 
                            ? 'bg-green-700 text-white' 
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
                              <h4 className="text-2xl md:text-3xl font-serif text-green-700">{exp.name}</h4>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {exp.desc}
                            </p>
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold mb-3 text-green-700">Points forts :</h5>
                              <ul className="list-none space-y-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-green-700 mt-1">•</span>
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
                              lat={exp.id === 'plantations' ? 0.30 : 
                                   exp.id === 'transformation' ? 0.26 :
                                   exp.id === 'degustation' ? 0.34 :
                                   0.22} 
                              lng={exp.id === 'plantations' ? 6.65 : 
                                   exp.id === 'transformation' ? 6.60 :
                                   exp.id === 'degustation' ? 6.73 :
                                   6.57} 
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
                    <h4 className="text-xl font-semibold mb-6 text-center">Galerie Chocolatée</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=600" 
                          alt="Plantation de cacao" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Plantation de cacao</h5>
                          <p className="text-sm text-gray-700">Cacaoyers chargés de cabosses</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1511381939415-e44015466834?w=600" 
                          alt="Tablettes de chocolat" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Tablettes de chocolat</h5>
                          <p className="text-sm text-gray-700">Chocolats fins santoméens</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1570913199992-91d07c140e7a?w=600" 
                          alt="Atelier chocolat" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h5 className="font-semibold mb-2">Atelier chocolat</h5>
                          <p className="text-sm text-gray-700">Création de tablettes artisanales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Activités Optionnelles */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Activités Optionnelles Gourmandes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Cours de pâtisserie au chocolat</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Apprentissage de recettes sophistiquées avec un chef pâtissier. Supplément : 90€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Dégustation de rhums vieux avec chocolat</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Découverte des accords entre rhums santoméens et différents chocolats. Supplément : 70€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Massage au beurre de cacao</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Soin relaxant utilisant du beurre de cacao produit localement. Supplément : 80€/personne.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Photographie professionnelle en plantation</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Séance photo avec photographe professionnel dans les plantations. Supplément : 120€/personne.
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
                    <h3 className="text-3xl md:text-4xl font-serif mb-6">Hébergements de Charme</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                      <span className="text-green-700 text-2xl">🏨</span>
                      <span className="h-px bg-green-700 w-16 md:w-32"></span>
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                      Ce circuit privilégie des hébergements qui reflètent l'esprit du voyage : authenticité, charme et connexion avec l'univers du cacao. De l'hôtel confortable en ville au lodge exceptionnel en plein cœur d'une plantation historique, chaque hébergement est une expérience à part entière.
                    </p>
                  </div>

                  {/* Navigation des types d'hébergement */}
                  <div className="flex gap-2 md:gap-4 mb-8 border-b-2 border-gray-300 overflow-x-auto">
                    <button 
                      onClick={() => setActiveHotelTab('saotome')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'saotome' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SÃO TOMÉ (2 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('lodge')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'lodge' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      LODGE PLANTATION (3 NUITS)
                    </button>
                    <button 
                      onClick={() => setActiveHotelTab('bombaim')}
                      className={`pb-4 px-4 md:px-8 font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                        activeHotelTab === 'bombaim' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ROÇA BOMBAIM (1 NUIT)
                    </button>
                  </div>

                  {/* Contenu des hébergements - São Tomé */}
                  {activeHotelTab === 'saotome' && (
                    <div className="space-y-16">
                      {/* Hotel Miramar */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <div className="relative">
                              <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" 
                                alt="Hotel Miramar" 
                                className="w-full h-72 object-cover rounded shadow-lg"
                              />
                              <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold">
                                3* CONFORT
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Hotel Miramar</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Centre-ville, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">📍</span>
                                <span>Centre-ville pratique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🧺</span>
                                <span className="text-sm font-semibold">Service blanchisserie</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <span className="text-sm font-semibold">Restaurant gastronomique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🛁</span>
                                <span className="text-sm font-semibold">Salle de bain privée</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              L'Hotel Miramar offre un confort moderne au cœur de São Tomé. Les chambres sont climatisées et disposent de toutes les commodités nécessaires. Le restaurant de l'hôtel est réputé pour sa cuisine créative incorporant des produits locaux, dont le cacao. Sa situation centrale permet un accès facile aux sites d'intérêt de la capitale. Idéal pour les premiers jours de découverte et les briefings en soirée.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Lodge plantation */}
                  {activeHotelTab === 'lodge' && (
                    <div className="space-y-16">
                      {/* Cacao Lodge */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                              alt="Cacao Lodge" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Cacao Lodge</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              En bordure de plantation, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🌳</span>
                                <span>Vue sur plantation</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🏊</span>
                                <span className="text-sm font-semibold">Piscine naturelle</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🍫</span>
                                <span className="text-sm font-semibold">Atelier chocolat sur place</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌿</span>
                                <span className="text-sm font-semibold">Jardin tropical</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Le Cacao Lodge est un hébergement de charme situé en lisière d'une plantation de cacao. Les bungalows sont construits dans un style traditionnel avec des matériaux locaux, offrant confort et authenticité. Le lodge dispose de son propre atelier de chocolaterie où se déroulent certains de nos ateliers. La piscine naturelle et les espaces communs invitent à la détente entre les visites. Les repas sont préparés avec des produits du jardin et de la plantation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contenu des hébergements - Roça Bombaim */}
                  {activeHotelTab === 'bombaim' && (
                    <div className="space-y-16">
                      {/* Roça Bombaim */}
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <img 
                              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600" 
                              alt="Roça Bombaim" 
                              className="w-full h-72 object-cover rounded shadow-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl md:text-3xl font-serif mb-3">Roça Bombaim</h4>
                            <p className="text-sm text-gray-600 mb-5">
                              Plantation historique, São Tomé, São Tomé-et-Principe
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                              <span className="flex items-center gap-2 text-sm">
                                <span className="text-lg">🏛️</span>
                                <span>Monument historique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🥂</span>
                                <span className="text-sm font-semibold">Restaurant gastronomique</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">💆</span>
                                <span className="text-sm font-semibold">Spa au beurre de cacao</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-lg">🌅</span>
                                <span className="text-sm font-semibold">Vue panoramique</span>
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              La Roça Bombaim est l'expérience ultime de ce circuit. Cette plantation historique entièrement restaurée offre un hébergement exceptionnel dans un cadre somptueux. Les chambres sont installées dans les anciens bâtiments coloniaux préservés, avec un design alliant élégance d'époque et confort moderne. Le restaurant gastronomique propose une cuisine créative mettant en valeur les produits de la plantation. Le spa utilise exclusivement des produits à base de cacao. Une nuit inoubliable au cœur de l'histoire du cacao santoméen.
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
                  <span className="text-2xl">🍫</span>
                  <h3 className="text-xl font-semibold">Réservez Votre Circuit</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Prix : (USD)</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-700">$1,899</span>
                    <span className="text-xl line-through text-gray-500">$2,199</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 font-bold">PROMO</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Prix par personne - Circuit complet</div>
                  <div className="mt-2 text-xs text-green-700 bg-green-50 p-2 rounded">
                    ✅ Inclus : Tous transferts, guide spécialiste, hébergements, ateliers, dégustations
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold mb-2">Année</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-700"
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
                    className="w-full border-2 border-gray-800 px-4 py-3 text-sm font-semibold focus:outline-none focus:border-green-700"
                  >
                    <option value="">Sélectionner une date</option>
                    <option value="2026-08-12">12 Août 2026</option>
                    <option value="2026-09-09">9 Septembre 2026</option>
                    <option value="2026-10-07">7 Octobre 2026</option>
                    <option value="2026-11-04">4 Novembre 2026</option>
                    <option value="2026-12-02">2 Décembre 2026</option>
                    <option value="2027-08-11">11 Août 2027</option>
                    <option value="2027-09-08">8 Septembre 2027</option>
                    <option value="2027-10-06">6 Octobre 2027</option>
                    <option value="2027-11-03">3 Novembre 2027</option>
                    <option value="2027-12-01">1 Décembre 2027</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">* Départs d'août à décembre (période récolte)</p>
                </div>

                {/* Encart promotionnel */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-5 mb-6 text-center">
                  <p className="text-sm mb-3 leading-relaxed">
                    <strong>4 TABLETTES DE CHOCOLAT CRÉÉES PAR VOUS</strong> : emballées et ramenées
                  </p>
                  <p className="text-xs text-gray-300">* Groupe limité à 8 participants maximum</p>
                </div>

                {/* Bouton flèche */}
                <button className="w-full bg-green-700 text-white py-4 font-bold text-2xl mb-4 hover:bg-green-600 transition-colors">
                  »
                </button>

                {/* Bouton Réserver */}
                <button className="w-full bg-green-700 text-white py-4 font-semibold text-base mb-4 hover:bg-green-600 transition-colors shadow-md">
                  RÉSERVER MAINTENANT
                </button>

                {/* Bouton Devis */}
                <button className="w-full border-2 border-gray-800 py-4 font-semibold text-base mb-8 hover:bg-gray-100 transition-colors">
                  DEMANDER UN DEVIS
                </button>

                {/* Section aide */}
                <div className="text-center border-t-2 border-gray-200 pt-6">
                  <p className="text-sm font-semibold mb-2">Questions sur le circuit ?</p>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Nos experts chocolat de São Tomé vous conseillent.
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
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.4,0.1,6.9,0.5&layer=mapnik"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Carte Cacao et Chocolat miniature"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs rounded shadow">
                    Cacao et Chocolat de Luxe - 7 jours
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Circuit gourmand et découverte
                </p>
              </div>

              {/* Widget ce qui est inclus */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Ateliers et Dégustations Inclus</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>3 ateliers de création chocolat</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6 séances de dégustation guidée</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visite 5 plantations différentes</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Visite usine de transformation</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>4 tablettes créées par participant</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide spécialiste du cacao</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Coffret cadeau de chocolats</span>
                    <span className="font-bold text-green-700">✓</span>
                  </div>
                </div>
              </div>

              {/* Widget conditions */}
              <div className="border-2 border-gray-300 p-4 mt-6 shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  <span>Informations Pratiques</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Niveau du circuit</span>
                    <span className="font-bold text-green-700">Facile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Âge minimum recommandé</span>
                    <span className="font-bold text-green-700">10 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Départs août à décembre</span>
                    <span className="font-bold text-green-700">Oui</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guide chocolatier francophone</span>
                    <span className="font-bold text-green-700">Spécialiste</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Groupe maximum</span>
                    <span className="font-bold text-green-700">8 personnes</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Recommandé : apporter une valise supplémentaire pour chocolats
                </div>
              </div>

              {/* Widget témoignage */}
              <div className="border-2 border-green-200 p-4 mt-6 shadow-lg bg-green-50">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                  <span>💬</span>
                  <span>Témoignage Gourmand</span>
                </h4>
                <p className="text-sm text-gray-700 italic mb-3">
                  "En tant que chocolatier amateur, ce circuit a dépassé toutes mes attentes. La qualité des cacaos santoméens est exceptionnelle, les ateliers étaient professionnels, et dormir dans une plantation historique était magique. Je suis reparti avec des connaissances et des chocolats uniques !"
                </p>
                <div className="text-xs text-gray-600 text-right">
                  - Émilie R., chocolatière amateur 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Chat en Direct - Position fixe */}
      <button className="fixed bottom-8 right-8 bg-green-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-600 transition-all hover:scale-105 z-50">
        <span className="text-2xl">💬</span>
        <span className="font-semibold text-base">Chat en direct</span>
      </button>

      {/* Pied de Page */}
      <Footer />
    </div>
  );
}