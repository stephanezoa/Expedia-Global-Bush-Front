import { useState } from "react";
import { 
  ArrowLeftRight, 
  ArrowRightLeft, 
  Plane, 
  MapPin, 
  ChevronRight,
  Heart,
  TrendingUp,
  Filter,
  Calendar,
  Globe, 
  Building2, 
  TrendingDown, 
  ShieldCheck,
  Clock,
  Award,
  CheckCircle,
  Star,
  Users,
  Shield,
  Zap
} from "lucide-react";
import imageVol from '../../assets/pays1.jpg';

export default function VolsPopulaire() {
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState("popular");

  const popularFlights = [
    {
      id: 1,
      from: { city: "Paris", code: "CDG", country: "France", flag: "🇫🇷" },
      to: { city: "Porto", code: "OPO", country: "Portugal", flag: "🇵🇹" },
      price: "189.500 XAF",
      originalPrice: "225.000 XAF",
      duration: "2h 15min",
      airline: "Air France",
      airlineLogo: "✈️",
      type: "Direct",
      rating: 4.8,
      reviews: 127,
      departure: "08:30",
      arrival: "10:45",
      stops: 0,
      discount: "15%",
      tags: ["Meilleur prix", "Annulation gratuite"],
      image: imageVol,
    },
    {
      id: 2,
      from: { city: "Yaoundé", code: "YAO", country: "Cameroun", flag: "🇨🇲" },
      to: { city: "Douala", code: "DLA", country: "Cameroun", flag: "🇨🇲" },
      price: "45.000 XAF",
      originalPrice: "52.000 XAF",
      duration: "45min",
      airline: "Camair-Co",
      airlineLogo: "🛩️",
      type: "Direct",
      rating: 4.5,
      reviews: 89,
      departure: "07:00",
      arrival: "07:45",
      stops: 0,
      discount: "13%",
      tags: ["Vol national", "Fréquent"],
      image: imageVol,
    },
    {
      id: 3,
      from: { city: "Douala", code: "DLA", country: "Cameroun", flag: "🇨🇲" },
      to: { city: "Paris", code: "CDG", country: "France", flag: "🇫🇷" },
      price: "350.000 XAF",
      originalPrice: "420.000 XAF",
      duration: "6h 30min",
      airline: "Air France",
      airlineLogo: "✈️",
      type: "Direct",
      rating: 4.9,
      reviews: 203,
      departure: "22:15",
      arrival: "05:45",
      stops: 0,
      discount: "17%",
      tags: ["Long-courrier", "Premium"],
      image: imageVol,
    },
    {
      id: 4,
      from: { city: "Yaoundé", code: "YAO", country: "Cameroun", flag: "🇨🇲" },
      to: { city: "Abidjan", code: "ABJ", country: "Côte d'Ivoire", flag: "🇨🇮" },
      price: "180.000 XAF",
      originalPrice: "200.000 XAF",
      duration: "3h 15min",
      airline: "Air Côte d'Ivoire",
      airlineLogo: "🌍",
      type: "Direct",
      rating: 4.7,
      reviews: 156,
      departure: "14:30",
      arrival: "17:45",
      stops: 0,
      discount: "10%",
      tags: ["Afrique", "Affaires"],
      image: imageVol,
    },
    {
      id: 5,
      from: { city: "Douala", code: "DLA", country: "Cameroun", flag: "🇨🇲" },
      to: { city: "Dubai", code: "DXB", country: "Émirats", flag: "🇦🇪" },
      price: "420.000 XAF",
      originalPrice: "500.000 XAF",
      duration: "7h 45min",
      airline: "Emirates",
      airlineLogo: "🏙️",
      type: "Escale",
      rating: 4.8,
      reviews: 189,
      departure: "01:45",
      arrival: "12:30",
      stops: 1,
      discount: "16%",
      tags: ["Luxe", "Escale"],
      image: imageVol,
    },
    {
      id: 6,
      from: { city: "Paris", code: "CDG", country: "France", flag: "🇫🇷" },
      to: { city: "New York", code: "JFK", country: "USA", flag: "🇺🇸" },
      price: "550.000 XAF",
      originalPrice: "650.000 XAF",
      duration: "8h 20min",
      airline: "Delta",
      airlineLogo: "🇺🇸",
      type: "Direct",
      rating: 4.6,
      reviews: 234,
      departure: "18:00",
      arrival: "20:20",
      stops: 0,
      discount: "15%",
      tags: ["Transatlantique", "Populaire"],
      image: imageVol,
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
       const [activeTab, setActiveTab] = useState("volsvilles");

  const tabsvols = [
    { id: "volsvilles", label: "Par ville", icon: <Building2 className="w-4 h-4" /> },
    { id: "volspays", label: "Par pays", icon: <Globe className="w-4 h-4" /> },
    { id: "volsregions", label: "Par région", icon: <MapPin className="w-4 h-4" /> },
    { id: "comparerienne", label: "Comparer", icon: <ArrowRightLeft className="w-4 h-4" /> },
    { id: "aeropports", label: "Aéroports", icon: <Plane className="w-4 h-4" /> },
    { id: "offres", label: "Offres spéciales", icon: <TrendingDown className="w-4 h-4" /> },
  ];

  const villes = [
    {
      ville: "Paris (CDG)",
      destinations: [
        { nom: "Porto", prix: "189.500 XAF", duree: "2h 15min" },
        { nom: "Barcelone", prix: "175.000 XAF", duree: "1h 45min" },
        { nom: "Rome", prix: "210.000 XAF", duree: "2h" },
        { nom: "Londres", prix: "165.000 XAF", duree: "1h 15min" },
        { nom: "Amsterdam", prix: "180.000 XAF", duree: "1h 30min" },
      ],
      pays: "France",
      info: "Départs fréquents, 5+ vols/jour",
    },
    {
      ville: "Yaoundé (YAO)",
      destinations: [
        { nom: "Douala", prix: "45.000 XAF", duree: "45min" },
        { nom: "Garoua", prix: "65.000 XAF", duree: "1h 15min" },
        { nom: "Maroua", prix: "75.000 XAF", duree: "1h 30min" },
        { nom: "Bafoussam", prix: "55.000 XAF", duree: "1h" },
        { nom: "Ngaoundéré", prix: "70.000 XAF", duree: "1h 10min" },
      ],
      pays: "Cameroun",
      info: "Compagnies nationales, prix fixes",
    },
    {
      ville: "Douala (DLA)",
      destinations: [
        { nom: "Paris", prix: "350.000 XAF", duree: "6h 30min" },
        { nom: "Istanbul", prix: "320.000 XAF", duree: "7h" },
        { nom: "Dubai", prix: "420.000 XAF", duree: "7h 45min" },
        { nom: "Johannesburg", prix: "380.000 XAF", duree: "5h 30min" },
        { nom: "Abidjan", prix: "200.000 XAF", duree: "3h 15min" },
      ],
      pays: "Cameroun",
      info: "Hub principal, connexions internationales",
    },
  ];

  const pays = [
    {
      nom: "France",
      code: "FR",
      villes: ["Paris", "Lyon", "Marseille", "Nice"],
      volMoinsCher: "165.000 XAF",
      compagnies: ["Air France", "Air Caraïbes", "Corsair"],
    },
    {
      nom: "Cameroun",
      code: "CM",
      villes: ["Yaoundé", "Douala", "Garoua", "Maroua"],
      volMoinsCher: "45.000 XAF",
      compagnies: ["Camair-Co", "Ethiopian", "Air France"],
    },
    {
      nom: "Portugal",
      code: "PT",
      villes: ["Porto", "Lisbonne", "Faro"],
      volMoinsCher: "189.500 XAF",
      compagnies: ["TAP Air Portugal", "Ryanair", "EasyJet"],
    },
  ];

  const regions = [
    {
      nom: "Afrique de l'Ouest",
      pays: ["Côte d'Ivoire", "Sénégal", "Ghana", "Nigeria", "Bénin"],
      volMoinsCher: "120.000 XAF",
      duree: "1h - 4h",
      saison: "Toute l'année",
    },
    {
      nom: "Europe",
      pays: ["France", "Espagne", "Italie", "Portugal", "Allemagne"],
      volMoinsCher: "165.000 XAF",
      duree: "1h - 8h",
      saison: "Meilleure: Printemps",
    },
    {
      nom: "Afrique Centrale",
      pays: ["Cameroun", "Gabon", "RCA", "Congo", "Tchad"],
      volMoinsCher: "85.000 XAF",
      duree: "45min - 3h",
      saison: "Toute l'année",
    },
  ];
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête avec filtres */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                    Vols les plus populaires
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Découvrez les destinations préférées de nos voyageurs avec les meilleures offres
                </p>
              </div>
            </div>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-gray-100 rounded-xl p-1">
              {["Populaires", "Prix", "Durée", "Note"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSortBy(filter.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    sortBy === filter.toLowerCase() 
                      ? "bg-white text-blue-600 shadow-md" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Plus de filtres</span>
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: <Plane className="w-5 h-5" />, label: "Destinations", value: "500+", color: "blue" },
            { icon: <Calendar className="w-5 h-5" />, label: "Départs quotidiens", value: "120+", color: "green" },
            { icon: <Users className="w-5 h-5" />, label: "Voyageurs/mois", value: "10K+", color: "purple" },
            { icon: <Star className="w-5 h-5" />, label: "Satisfaction", value: "98%", color: "orange" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                  <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grille des vols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {popularFlights.map((flight) => (
            <div
              key={flight.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {/* Image avec overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={flight.image}
                  alt={`Vol ${flight.from.city} vers ${flight.to.city}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Discount badge */}
                {flight.discount && (
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-full shadow-lg">
                      -{flight.discount}
                    </div>
                  </div>
                )}

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(flight.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <Heart 
                    className={`w-5 h-5 ${favorites.has(flight.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                  />
                </button>

                {/* Info overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-xl">{flight.airline}</div>
                      <div className="text-blue-200 text-sm flex items-center gap-2">
                        <span>{flight.type}</span>
                        {flight.stops === 0 && <span>• Direct</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold">{flight.rating}</span>
                      <span className="text-blue-200 text-sm">({flight.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Itinéraire */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{flight.from.flag}</span>
                        <div>
                          <div className="font-bold text-gray-900 text-xl">{flight.from.city}</div>
                          <div className="text-sm text-gray-500">{flight.from.code} • {flight.from.country}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-gray-600 text-sm">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Départ: {flight.departure}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center mx-2">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <ArrowLeftRight className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="mt-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                        {flight.duration}
                      </div>
                      {flight.stops > 0 && (
                        <div className="text-xs text-gray-500 mt-1">
                          {flight.stops} escale{flight.stops > 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <div>
                          <div className="font-bold text-gray-900 text-xl">{flight.to.city}</div>
                          <div className="text-sm text-gray-500">{flight.to.code} • {flight.to.country}</div>
                        </div><div>
                <p >Vols vers des villes</p>
            </div>
                        <span className="text-2xl">{flight.to.flag}</span>
                      </div>
                      <div className="mt-2 text-gray-600 text-sm">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Arrivée: {flight.arrival}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {flight.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Sécurisé
                  </span>
                </div>

                {/* Prix et action */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-gray-900">{flight.price}</span>
                      {flight.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{flight.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">par personne • Taxes incluses</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-2 py-2 text-gray-500 hover:text-blue-600 transition">
                      <Zap className="w-5 h-5" />
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition shadow-lg shadow-blue-600/30 hover:shadow-xl flex items-center gap-2">
                      Réserver
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition shadow-2xl shadow-blue-600/30 hover:shadow-3xl hover:-translate-y-1 flex items-center gap-3 mb-4">
              <ArrowLeftRight className="w-5 h-5" />
              <span>Voir tous les vols disponibles</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-gray-600 text-sm">
              Plus de 5000 vols disponibles • 
              <span className="text-green-600 font-medium ml-2">
                <Shield className="w-4 h-4 inline mr-1" />
                Paiement 100% sécurisé
              </span>
            </p>
          </div>
        </div>

       <div className="max-w-6xl mx-auto mt-5 md:mt-10 lg:mt-15">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Vols à <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">bas prix</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Comparez et trouvez les meilleures offres pour votre prochain voyage
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Prix garantis</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
              <Clock className="w-4 h-4" />
              <span>Dernière minute</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto scrollbar-hide mb-6">
          <div className="flex space-x-1 md:space-x-6 min-w-max">
            {tabsvols.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-medium whitespace-nowrap
                  ${activeTab === tab.id 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30" 
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
                  }
                `}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-semibold">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="ml-2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

        {/* Contenu Dynamique */}
        <div className="space-y-8">
          {/* Tab: Par Ville */}
          {activeTab === "volsvilles" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {villes.map((villeData, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-blue-600" />
                          {villeData.ville}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">{villeData.pays}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                        🔥 Chaud
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {villeData.info}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Plane className="w-4 h-4 text-green-600" />
                        Destinations populaires:
                      </h4>
                      <ul className="space-y-3">
                        {villeData.destinations.map((dest, idx) => (
                          <li key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <div>
                                <span className="font-medium text-gray-800">{dest.nom}</span>
                                <div className="text-xs text-gray-500">{dest.duree} de vol</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-gray-900">{dest.prix}</span>
                              <button className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition opacity-0 group-hover:opacity-100">
                                Réserver
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium rounded-xl hover:from-blue-100 hover:to-blue-200 transition">
                        <span>Voir tous les vols depuis {villeData.ville.split(' ')[0]}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Par Pays */}
          {activeTab === "volspays" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pays.map((paysData, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{paysData.code === "FR" ? "🇫🇷" : paysData.code === "CM" ? "🇨🇲" : "🇵🇹"}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{paysData.nom}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-500">Prix à partir de</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">{paysData.volMoinsCher}</div>
                      <p className="text-gray-600 text-sm">Vol le moins cher trouvé</p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Villes principales:</h4>
                      <ul className="space-y-2">
                        {paysData.villes.map((ville, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{ville}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-gray-900 mt-4">Compagnies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {paysData.compagnies.map((comp, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center gap-2">
                      Explorer {paysData.nom}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Par Région */}
          {activeTab === "volsregions" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regions.map((region, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Globe className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{region.nom}</h3>
                        <p className="text-gray-500 text-sm">{region.saison}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{region.volMoinsCher}</div>
                          <p className="text-gray-600 text-sm">Prix minimum</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{region.duree}</div>
                          <p className="text-gray-600 text-sm">Durée moyenne</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Pays inclus:</h4>
                      <ul className="space-y-3">
                        {region.pays.map((pays, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                            <div className="flex-1">
                              <span className="font-medium text-gray-800">{pays}</span>
                              <div className="text-xs text-gray-500 mt-1">
                                Vols directs disponibles
                              </div>
                            </div>
                            <button className="px-3 py-1 text-sm border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                              Voir
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition">
                        Explorer la région {region.nom}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Autres Tabs */}
          {activeTab === "comparerienne" && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <ArrowRightLeft className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comparez les prix</h3>
                <p className="text-gray-600 mb-8">
                  Notre outil de comparaison vous permet de trouver le meilleur rapport qualité-prix
                  en fonction de vos dates et préférences.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition shadow-lg">
                  Lancer la comparaison
                </button>
              </div>
            </div>
          )}

          {activeTab === "aeropports" && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Plane className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aéroports partenaires</h3>
                <p className="text-gray-600 mb-8">
                  Accédez à nos offres exclusives sur plus de 200 aéroports à travers le monde.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition shadow-lg">
                  Voir les aéroports
                </button>
              </div>
            </div>
          )}

          {activeTab === "offres" && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <TrendingDown className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Offres spéciales</h3>
                <p className="text-gray-600 mb-8">
                  Abonnez-vous à notre newsletter pour recevoir en avant-première
                  nos meilleures offres et promotions exclusives.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition shadow-lg">
                  S'abonner aux offres
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bannière bas de section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Besoin d'aide pour trouver le meilleur vol ?</h3>
              <p className="text-blue-100">
                Nos conseillers sont disponibles pour vous aider gratuitement
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition">
                Contactez-nous
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition">
                Guide d'achat
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}