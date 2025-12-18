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
import { useNavigate } from "react-router-dom";
import imageVol from '../../assets/pays1.jpg';

export default function VolsPopulaire() {
  const navigate = useNavigate(); 
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

  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation(); // Empêche la navigation
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

  // Fonction pour naviguer vers les détails d'un vol
  const handleFlightClick = (flightId) => {
    const flight = popularFlights.find(f => f.id === flightId);
    if (flight) {
      // Naviguer vers la page de détails avec les données du vol
      navigate(`/details`, { 
        state: { 
          flightData: flight,
          // Formatage des données pour correspondre à votre FlightDetailPage
          formattedData: {
            fromCity: flight.from.city,
            toCity: flight.to.city,
            price: flight.price,
            airline: flight.airline,
            duration: flight.duration,
            departure: flight.departure,
            arrival: flight.arrival,
            departureDate: "2024-02-15", // Vous pouvez ajouter une date dynamique
            returnDate: "2024-02-22",
            stops: flight.stops,
            type: flight.type,
            rating: flight.rating,
            reviews: flight.reviews,
            tags: flight.tags,
            discount: flight.discount,
            originalPrice: flight.originalPrice
          }
        }
      });
    }
  };

  const handleBookClick = (flightId, e) => {
    e.stopPropagation(); // Empêche la navigation vers les détails
    const flight = popularFlights.find(f => f.id === flightId);
    if (flight) {
      // Navigation vers une page de réservation
      navigate(`/reservation`, { state: { flightData: flight } });
    }
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
    // ... autres villes
  ];

  // ... (le reste de vos données restent les mêmes)

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grille des vols - MODIFIÉE POUR ÊTRE CLIQUABLE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {popularFlights.map((flight) => (
            <div
              key={flight.id}
              onClick={() => handleFlightClick(flight.id)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 cursor-pointer"
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
                  onClick={(e) => toggleFavorite(flight.id, e)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition z-10"
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
                <div 
                  className="flex items-center justify-between pt-6 border-t border-gray-100"
                  onClick={(e) => e.stopPropagation()} // Empêche la double navigation
                >
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
                    <button 
                      className="px-2 py-2 text-gray-500 hover:text-blue-600 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Action supplémentaire si nécessaire
                      }}
                    >
                      <Zap className="w-5 h-5" />
                    </button>
                    <button 
                       onClick={() => navigate(`/vols/${car.id}`)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition shadow-lg shadow-blue-600/30 hover:shadow-xl flex items-center gap-2"
                    >
                      Réserver
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ... (le reste de votre code reste inchangé) */}
      </div>
    </section>
  );
}