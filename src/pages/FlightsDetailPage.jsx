// src/pages/FlightDetailPage.jsx
import React, { useState } from 'react';
import { 
  Search, Calendar, Users, Plane, ChevronDown, ChevronRight, Shield, 
  MapPin, Filter, Check, Star, Info, AlertCircle, DollarSign, Clock, 
  Hotel, Car, ArrowLeftRight, Heart, Zap, ShieldCheck, Award,
  Users as UsersIcon, Globe, Package, ChevronLeft, ArrowRight,
  MessageSquare, Phone, Mail, Navigation, Home, Briefcase
} from 'lucide-react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pays1 from "../assets/regois.jpg";


// Données des vols (à importer depuis une source commune)
const flightsData = [
  // ... (mêmes données que dans FlightsPage)
];

const FlightDetailPage = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Récupérer le vol depuis la navigation ou depuis les données
  const flightFromState = location.state?.flight;
  const flight = flightFromState || flightsData.find(f => f.id === parseInt(id)) || flightsData[0];

  const [selectedClass, setSelectedClass] = useState('economy');
  const [passengerCount, setPassengerCount] = useState(1);
  const [showExtras, setShowExtras] = useState(false);

  // Traductions
  const content = {
    FR: {
      heroTitle: `Vol ${flight.from.city} → ${flight.to.city}`,
      heroSubtitle: "Détails complets et réservation",
      navigation: {
        home: "Accueil",
        flights: "Vols",
        details: "Détails du vol"
      },
      flightInfo: "Informations du vol",
      departure: "Départ",
      arrival: "Arrivée",
      duration: "Durée",
      airline: "Compagnie",
      type: "Type de vol",
      rating: "Note",
      reviews: "avis",
      baggage: "Bagages",
      cancellation: "Annulation",
      services: "Services inclus",
      bookNow: "Réserver maintenant",
      payNow: "Payer maintenant",
      bookWithoutPayment: "Réserver sans payer",
      selectClass: "Sélectionnez la classe",
      economy: "Économique",
      premium: "Premium",
      business: "Affaires",
      first: "Première",
      passengers: "Passagers",
      extras: "Options supplémentaires",
      selectSeats: "Sélectionner des sièges",
      fastTrack: "Fast Track",
      priorityBoarding: "Embarcation prioritaire",
      loungeAccess: "Accès salon",
      extraBaggage: "Bagage supplémentaire",
      travelInsurance: "Assurance voyage",
      included: "Inclus",
      add: "Ajouter",
      flightDetails: "Détails du vol",
      itinerary: "Itinéraire",
      totalPrice: "Prix total",
      perPerson: "par personne",
      save: "Économisez",
      bestPrice: "Meilleur prix garanti",
      securePayment: "Paiement sécurisé",
      support247: "Support 24/7",
      guaranteed: "Garanti",
      freeCancellation: "Annulation gratuite",
      priceDrop: "Protection baisse de prix",
      similarFlights: "Vols similaires",
      whyBookWithUs: "Pourquoi réserver avec nous ?",
      contactSupport: "Contacter le support",
      needHelp: "Besoin d'aide ?",
      chatNow: "Chat en direct",
      callUs: "Nous appeler",
      emailUs: "Nous écrire",
      terms: "Conditions générales",
      privacy: "Politique de confidentialité"
    },
    EN: {
      heroTitle: `Flight ${flight.from.city} → ${flight.to.city}`,
      heroSubtitle: "Complete details and booking",
      navigation: {
        home: "Home",
        flights: "Flights",
        details: "Flight Details"
      },
      flightInfo: "Flight Information",
      departure: "Departure",
      arrival: "Arrival",
      duration: "Duration",
      airline: "Airline",
      type: "Flight type",
      rating: "Rating",
      reviews: "reviews",
      baggage: "Baggage",
      cancellation: "Cancellation",
      services: "Included services",
      bookNow: "Book now",
      payNow: "Pay now",
      bookWithoutPayment: "Book without payment",
      selectClass: "Select class",
      economy: "Economy",
      premium: "Premium",
      business: "Business",
      first: "First",
      passengers: "Passengers",
      extras: "Extra options",
      selectSeats: "Select seats",
      fastTrack: "Fast Track",
      priorityBoarding: "Priority boarding",
      loungeAccess: "Lounge access",
      extraBaggage: "Extra baggage",
      travelInsurance: "Travel insurance",
      included: "Included",
      add: "Add",
      flightDetails: "Flight details",
      itinerary: "Itinerary",
      totalPrice: "Total price",
      perPerson: "per person",
      save: "Save",
      bestPrice: "Best price guaranteed",
      securePayment: "Secure payment",
      support247: "24/7 support",
      guaranteed: "Guaranteed",
      freeCancellation: "Free cancellation",
      priceDrop: "Price drop protection",
      similarFlights: "Similar flights",
      whyBookWithUs: "Why book with us?",
      contactSupport: "Contact support",
      needHelp: "Need help?",
      chatNow: "Live chat",
      callUs: "Call us",
      emailUs: "Email us",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy"
    }
  };

  const t = content[language] || content.FR;

  // Données pour les vols similaires
  const similarFlights = flightsData.filter(f => 
    f.id !== flight.id && 
    (f.to.code === flight.to.code || f.from.code === flight.from.code)
  ).slice(0, 3);

  // Calculer le prix total
  const basePrice = flight.price;
  const classMultipliers = {
    economy: 1,
    premium: 1.5,
    business: 2.5,
    first: 4
  };
  const totalPrice = basePrice * classMultipliers[selectedClass] * passengerCount;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition flex items-center">
              <Home className="w-4 h-4 mr-1" />
              {t.navigation.home}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/vols" className="hover:text-blue-600 transition">
              {t.navigation.flights}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-semibold text-gray-900">{t.navigation.details}</span>
          </nav>
        </div>
      </div>

      {/* En-tête du vol */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 opacity-90 " style={{
                          backgroundImage: `url(${Pays1})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundBlendMode: 'overlay'
                      }}>
                      
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.heroTitle}</h1>
              <p className="text-blue-100">{t.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center">
                  <Plane className="w-5 h-5 mr-2" />
                  <span>{flight.airline}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{flight.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                  <span>{flight.rating} ({flight.reviews} {t.reviews})</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-right">
                <div className="text-3xl font-bold">{flight.price}€</div>
                <div className="text-lg text-blue-200 line-through">{flight.originalPrice}€</div>
                <div className="text-sm text-green-300 font-medium">Économisez {flight.discount}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche - Détails */}
          <div className="lg:col-span-2 space-y-8">
            {/* Carte d'itinéraire */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t.itinerary}</h2>
              
              <div className="flex items-center justify-between mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">{flight.from.flag}</div>
                  <div className="text-2xl font-bold">{flight.from.city}</div>
                  <div className="text-lg text-gray-600">{flight.from.code}</div>
                  <div className="text-sm text-gray-500 mt-2">{flight.departure}</div>
                  <div className="text-sm text-gray-500">{flight.departureDate}</div>
                </div>
                
                <div className="flex flex-col items-center mx-4">
                  <div className="p-4 bg-blue-100 rounded-full mb-3">
                    <ArrowLeftRight className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{flight.duration}</div>
                  <div className="text-sm text-gray-500">{flight.type}</div>
                  <div className="text-xs text-gray-400 mt-2">Vol {flight.airline}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">{flight.to.flag}</div>
                  <div className="text-2xl font-bold">{flight.to.city}</div>
                  <div className="text-lg text-gray-600">{flight.to.code}</div>
                  <div className="text-sm text-gray-500 mt-2">{flight.arrival}</div>
                  <div className="text-sm text-gray-500">{flight.arrivalDate}</div>
                </div>
              </div>

              {/* Infos détaillées */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-gray-900 text-lg">{flight.airline}</div>
                  <div className="text-sm text-gray-600">{t.airline}</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-gray-900 text-lg">{flight.stops === 0 ? "Direct" : `${flight.stops} escale`}</div>
                  <div className="text-sm text-gray-600">{t.type}</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-gray-900 text-lg">{flight.baggage}</div>
                  <div className="text-sm text-gray-600">{t.baggage}</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-gray-900 text-lg">{flight.cancellation}</div>
                  <div className="text-sm text-gray-600">{t.cancellation}</div>
                </div>
              </div>
            </div>

            {/* Services inclus */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t.services}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flight.amenities.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pourquoi réserver avec nous */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t.whyBookWithUs}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">{t.bestPrice}</h3>
                    <p className="text-sm text-gray-600">{t.guaranteed}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">{t.securePayment}</h3>
                    <p className="text-sm text-gray-600">256-bit SSL encryption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">{t.support247}</h3>
                    <p className="text-sm text-gray-600">{t.guaranteed}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Réservation */}
          <div className="space-y-6">
            {/* Carte de réservation */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.bookNow}</h3>
              
              <div className="space-y-6">
                {/* Prix total */}
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{totalPrice.toFixed(2)}€</div>
                    <div className="text-sm text-gray-600">{t.totalPrice}</div>
                    <div className="text-xs text-gray-500 mt-2">
                      {passengerCount} passager{passengerCount > 1 ? 's' : ''} • {t.selectedClass}
                    </div>
                  </div>
                </div>

                {/* Classe */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t.selectClass}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['economy', 'premium', 'business', 'first'].map((cls) => (
                      <button
                        key={cls}
                        onClick={() => setSelectedClass(cls)}
                        className={`p-3 rounded-lg border transition ${selectedClass === cls ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-gray-400'}`}
                      >
                        <div className="font-medium capitalize">{t[cls]}</div>
                        <div className="text-sm text-gray-500">
                          {Math.round(basePrice * classMultipliers[cls])}€ {t.perPerson}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nombre de passagers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t.passengers}
                  </label>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium text-lg">{passengerCount}</span>
                      <button
                        onClick={() => setPassengerCount(Math.min(9, passengerCount + 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-gray-600">
                      {passengerCount} passager{passengerCount > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* Options supplémentaires */}
                <div>
                  <button
                    onClick={() => setShowExtras(!showExtras)}
                    className="w-full flex justify-between items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <span className="font-medium">{t.extras}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${showExtras ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showExtras && (
                    <div className="mt-3 space-y-3 p-3 bg-gray-50 rounded-lg">
                      {[
                        { icon: Briefcase, label: t.selectSeats, price: "15€" },
                        { icon: Zap, label: t.fastTrack, price: "25€" },
                        { icon: Award, label: t.priorityBoarding, price: "20€" },
                        { icon: Package, label: t.extraBaggage, price: "35€" },
                        { icon: Shield, label: t.travelInsurance, price: "45€" }
                      ].map((extra, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <extra.icon className="w-5 h-5 text-gray-500" />
                            <span className="text-sm">{extra.label}</span>
                          </div>
                          <button className="text-sm text-blue-600 hover:text-blue-800">
                            {t.add} {extra.price}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Boutons d'action */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    {t.payNow}
                  </button>
                  
                  <button className="w-full py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition">
                    {t.bookWithoutPayment}
                  </button>
                </div>

                {/* Garanties */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{t.freeCancellation}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{t.priceDrop}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">{t.contactSupport}</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <MessageSquare className="w-5 h-5" />
                  {t.chatNow}
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                  <Phone className="w-5 h-5" />
                  {t.callUs}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vols similaires */}
        {similarFlights.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.similarFlights}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarFlights.map((similarFlight) => (
                <div 
                  key={similarFlight.id}
                  onClick={() => navigate(`/vols/${similarFlight.id}`, { state: { flight: similarFlight } })}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-bold text-gray-900">{similarFlight.airline}</div>
                      <div className="text-sm text-gray-600">{similarFlight.from.code} → {similarFlight.to.code}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">{similarFlight.price}€</div>
                      <div className="text-sm text-gray-400 line-through">{similarFlight.originalPrice}€</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{similarFlight.departure}</span>
                    <span className="mx-2">→</span>
                    <span>{similarFlight.arrival}</span>
                  </div>
                  <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                    {t.viewDetails}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FlightDetailPage;