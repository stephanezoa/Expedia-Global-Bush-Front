import React, { useState, useEffect } from 'react';
import { 
  Search, Calendar, Users, Plane, ChevronDown, ChevronRight, Shield, 
  MapPin, Filter, Check, Star, Info, AlertCircle, DollarSign, Clock, 
  Hotel, Car, ArrowLeftRight, Heart, Zap
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from "../components/Header"

const FlightDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('roundtrip');
  const [showFlights, setShowFlights] = useState(false);
  
  // Récupérer les données du vol depuis la navigation
  const flightData = location.state?.flightData;
  const formattedData = location.state?.formattedData;

  // Si pas de données, rediriger ou afficher un message
  useEffect(() => {
    if (!flightData) {
      console.log("Aucune donnée de vol reçue");
      // Vous pouvez rediriger vers la page d'accueil ou afficher un message
      // navigate('/');
    }
  }, [flightData, navigate]);

  // Données par défaut si aucune donnée n'est reçue
  const flight = flightData || {
    id: 1,
    from: { city: "Paris", code: "CDG", country: "France", flag: "🇫🇷" },
    to: { city: "Las Vegas", code: "LAS", country: "USA", flag: "🇺🇸" },
    price: "$350",
    originalPrice: "$420",
    duration: "11h 30min",
    airline: "Delta Airlines",
    type: "Direct",
    rating: 4.6,
    reviews: 234,
    departure: "18:00",
    arrival: "20:20",
    departureDate: "2024-02-15",
    arrivalDate: "2024-02-15",
    stops: 0,
    discount: "17%",
    tags: ["Transatlantique", "Premium"],
    baggage: "1 bagage cabine + 1 bagage en soute",
    services: ["Wi-Fi", "Repas inclus", "Divertissement à bord"],
    cancellation: "Annulation gratuite jusqu'à 24h avant"
  };

  const airlines = [
    { name: flight.airline, code: flight.airline.substring(0, 2).toUpperCase(), rating: flight.rating },
    { name: "American Airlines", code: "AA", rating: 4.2 },
    { name: "United", code: "UA", rating: 4.1 },
    { name: "Southwest Airlines", code: "WN", rating: 4.0 },
  ];

  const trendingFlights = [
    { from: "CDG", to: "LAS", price: flight.price, airline: flight.airline, duration: flight.duration },
    { from: "LAX", to: "LAS", price: "$35", airline: "Southwest", duration: "1h 15m" },
    { from: "DEN", to: "LAS", price: "$42", airline: "United", duration: "1h 45m" },
    { from: "ORD", to: "LAS", price: "$49", airline: "American", duration: "3h 30m" },
  ];

  // ... (le reste de vos données et fonctions restent les mêmes)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header personnalisé avec les infos du vol */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="text-sm text-gray-600 mb-2">
            <Link to="/" className="text-blue-600 hover:underline">Accueil</Link>
            <span className="mx-1">›</span>
            <Link to="/vols" className="text-blue-600 hover:underline">Vols</Link>
            <span className="mx-1">›</span>
            <span>{flight.from.city} vers {flight.to.city}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Vol {flight.from.city} ({flight.from.code}) → {flight.to.city} ({flight.to.code})
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">{flight.airline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">{flight.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-700">{flight.rating} ({flight.reviews} avis)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-700">{flight.price}</div>
                {flight.originalPrice && (
                  <div className="text-lg text-gray-400 line-through">{flight.originalPrice}</div>
                )}
                {flight.discount && (
                  <div className="text-sm text-green-600 font-medium">Économisez {flight.discount}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section détails du vol */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Détails principaux */}
          <div className="lg:col-span-2">
            {/* Carte d'itinéraire */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Détails de votre vol</h2>
              
              <div className="flex items-center justify-between mb-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">{flight.from.flag}</div>
                  <div className="text-lg font-bold">{flight.from.city}</div>
                  <div className="text-sm text-gray-600">{flight.from.code}</div>
                  <div className="text-sm text-gray-500">{flight.departure}</div>
                </div>
                
                <div className="flex flex-col items-center mx-4">
                  <div className="p-3 bg-blue-100 rounded-full mb-2">
                    <ArrowLeftRight className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{flight.duration}</div>
                  <div className="text-xs text-gray-500">{flight.type}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">{flight.to.flag}</div>
                  <div className="text-lg font-bold">{flight.to.city}</div>
                  <div className="text-sm text-gray-600">{flight.to.code}</div>
                  <div className="text-sm text-gray-500">{flight.arrival}</div>
                </div>
              </div>

              {/* Informations supplémentaires */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">{flight.airline}</div>
                  <div className="text-sm text-gray-600">Compagnie</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">{flight.stops === 0 ? "Direct" : `${flight.stops} escale(s)`}</div>
                  <div className="text-sm text-gray-600">Escales</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">{flight.baggage || "Bagage inclus"}</div>
                  <div className="text-sm text-gray-600">Bagages</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900">{flight.cancellation || "Annulation flexible"}</div>
                  <div className="text-sm text-gray-600">Conditions</div>
                </div>
              </div>
            </div>

            {/* Services inclus */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Services inclus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(flight.services || ["Wi-Fi", "Repas inclus", "Divertissement", "Confort"]).map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Votre code existant pour les features, FAQ, etc. */}
            {/* ... (conservez votre code existant ici) */}
          </div>

          {/* Sidebar pour la réservation */}
          <div className="space-y-6">
            {/* Carte de réservation */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Réserver ce vol</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{flight.price}</div>
                    <div className="text-sm text-gray-600">par personne</div>
                    {flight.originalPrice && (
                      <div className="text-sm text-gray-500 line-through mt-1">{flight.originalPrice}</div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Nombre de passagers</span>
                    <select className="border rounded-lg px-3 py-2">
                      <option>1 passager</option>
                      <option>2 passagers</option>
                      <option>3 passagers</option>
                      <option>4 passagers</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Classe</span>
                    <select className="border rounded-lg px-3 py-2">
                      <option>Économique</option>
                      <option>Premium Économique</option>
                      <option>Affaires</option>
                      <option>Première</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Payer maintenant
                  </button>
                  
                  <button className="w-full mt-4 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition">
                    Réserver sans payer
                  </button>
                </div>

                {/* Garanties */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{flight.cancellation || "Annulation gratuite 24h avant"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Assurance voyage incluse</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ... (conservez le reste de votre sidebar existante) */}
          </div>
        </div>

        {/* ... (conservez votre footer existant) */}
      </div>
    </div>
  );
};

export default FlightDetailPage;