// src/pages/FlightsPage.jsx
import React, { useState } from 'react';
import { 
  Search, Calendar, Users, Plane, ChevronDown, ChevronRight, Shield, 
  Clock, Award, MapPin, Filter, Star, Heart, ArrowRight, ChevronLeft,
  X, Download, Check
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pays1 from "../assets/regois.jpg";
import AlaskaAirlines from "../assets/airlines-logo/AlaskaAirlines.png";
import AmericanAirlines from "../assets/airlines-logo/AmericanAirlines.png";
import CamairCo from "../assets/airlines-logo/CamairCo.png";
import Delta from "../assets/airlines-logo/Delta.png";
import Jetblue from "../assets/airlines-logo/Jetblue.png";
import SouthAirlines from "../assets/airlines-logo/SouthAirlines.png";
import UnutedAirlines from "../assets/airlines-logo/UnutedAirlines.png";






// Données des vols
const flightsData = [
  {
    id: 1,
    airline: "Air France",
    airlineLogo: "AF",
    from: { city: "Paris", code: "CDG", country: "France", flag: "🇫🇷" },
    to: { city: "New York", code: "JFK", country: "USA", flag: "🇺🇸" },
    price: 650,
    currency: "€",
    originalPrice: 850,
    duration: "8h 15min",
    type: "Direct",
    rating: 4.7,
    reviews: 1289,
    departure: "09:30",
    arrival: "12:45",
    departureDate: "2024-03-15",
    arrivalDate: "2024-03-15",
    stops: 0,
    discount: 24,
    baggage: "1 bagage cabine + 1 bagage en soute",
    cancellation: "Annulation gratuite jusqu'à 24h avant",
    amenities: ["Wi-Fi", "Repas", "Écran personnel", "Confort plus"]
  },
  {
    id: 2,
    airline: "Delta Airlines",
    airlineLogo: "DL",
    from: { city: "London", code: "LHR", country: "UK", flag: "🇬🇧" },
    to: { city: "Tokyo", code: "HND", country: "Japan", flag: "🇯🇵" },
    price: 920,
    currency: "€",
    originalPrice: 1200,
    duration: "12h 30min",
    type: "Direct",
    rating: 4.8,
    reviews: 2456,
    departure: "14:20",
    arrival: "09:50",
    departureDate: "2024-03-16",
    arrivalDate: "2024-03-17",
    stops: 0,
    discount: 23,
    baggage: "2 bagages en soute",
    cancellation: "Annulation flexible",
    amenities: ["Wi-Fi", "Repas premium", "Bar à bord", "Siège convertible"]
  },
  {
    id: 3,
    airline: "Emirates",
    airlineLogo: "EK",
    from: { city: "Dubai", code: "DXB", country: "UAE", flag: "🇦🇪" },
    to: { city: "Sydney", code: "SYD", country: "Australia", flag: "🇦🇺" },
    price: 1100,
    currency: "€",
    originalPrice: 1450,
    duration: "14h 20min",
    type: "Direct",
    rating: 4.9,
    reviews: 1890,
    departure: "22:15",
    arrival: "18:35",
    departureDate: "2024-03-14",
    arrivalDate: "2024-03-15",
    stops: 0,
    discount: 24,
    baggage: "2 bagages en soute + bagage cabine",
    cancellation: "Annulation gratuite jusqu'à 48h avant",
    amenities: ["Wi-Fi haute vitesse", "Repas gastronomique", "Bar", "Douche"]
  },
  {
    id: 4,
    airline: "Singapore Airlines",
    airlineLogo: "SQ",
    from: { city: "Singapore", code: "SIN", country: "Singapore", flag: "🇸🇬" },
    to: { city: "Los Angeles", code: "LAX", country: "USA", flag: "🇺🇸" },
    price: 850,
    currency: "€",
    originalPrice: 1100,
    duration: "15h 30min",
    type: "Direct",
    rating: 4.8,
    reviews: 1678,
    departure: "23:45",
    arrival: "20:15",
    departureDate: "2024-03-18",
    arrivalDate: "2024-03-18",
    stops: 0,
    discount: 23,
    baggage: "1 bagage cabine + 2 bagages en soute",
    cancellation: "Modification gratuite",
    amenities: ["Wi-Fi", "Repas", "Écran 4K", "Siège-lit"]
  },
  {
    id: 5,
    airline: "Turkish Airlines",
    airlineLogo: "TK",
    from: { city: "Istanbul", code: "IST", country: "Turkey", flag: "🇹🇷" },
    to: { city: "Bangkok", code: "BKK", country: "Thailand", flag: "🇹🇭" },
    price: 450,
    currency: "€",
    originalPrice: 580,
    duration: "9h 45min",
    type: "Direct",
    rating: 4.6,
    reviews: 1345,
    departure: "02:30",
    arrival: "15:15",
    departureDate: "2024-03-17",
    arrivalDate: "2024-03-17",
    stops: 0,
    discount: 22,
    baggage: "1 bagage en soute",
    cancellation: "Annulation avec frais",
    amenities: ["Wi-Fi", "Repas", "Divertissement"]
  },
  {
    id: 6,
    airline: "Qatar Airways",
    airlineLogo: "QR",
    from: { city: "Doha", code: "DOH", country: "Qatar", flag: "🇶🇦" },
    to: { city: "Cape Town", code: "CPT", country: "South Africa", flag: "🇿🇦" },
    price: 680,
    currency: "€",
    originalPrice: 850,
    duration: "9h 10min",
    type: "Direct",
    rating: 4.7,
    reviews: 1987,
    departure: "08:45",
    arrival: "16:55",
    departureDate: "2024-03-19",
    arrivalDate: "2024-03-19",
    stops: 0,
    discount: 20,
    baggage: "2 bagages en soute",
    cancellation: "Annulation gratuite jusqu'à 72h avant",
    amenities: ["Wi-Fi", "Repas Qsuite", "Bar", "Siège spacieux"]
  },
  {
    id: 7,
    airline: "Lufthansa",
    airlineLogo: "LH",
    from: { city: "Frankfurt", code: "FRA", country: "Germany", flag: "🇩🇪" },
    to: { city: "Beijing", code: "PEK", country: "China", flag: "🇨🇳" },
    price: 720,
    currency: "€",
    originalPrice: 950,
    duration: "10h 40min",
    type: "Direct",
    rating: 4.5,
    reviews: 1123,
    departure: "13:20",
    arrival: "05:00",
    departureDate: "2024-03-20",
    arrivalDate: "2024-03-21",
    stops: 0,
    discount: 24,
    baggage: "1 bagage en soute",
    cancellation: "Annulation flexible",
    amenities: ["Wi-Fi", "Repas", "Écran", "Power USB"]
  },
  {
    id: 8,
    airline: "British Airways",
    airlineLogo: "BA",
    from: { city: "London", code: "LHR", country: "UK", flag: "🇬🇧" },
    to: { city: "Dubai", code: "DXB", country: "UAE", flag: "🇦🇪" },
    price: 550,
    currency: "€",
    originalPrice: 720,
    duration: "7h 15min",
    type: "Direct",
    rating: 4.4,
    reviews: 987,
    departure: "10:30",
    arrival: "20:45",
    departureDate: "2024-03-21",
    arrivalDate: "2024-03-21",
    stops: 0,
    discount: 24,
    baggage: "1 bagage cabine + 1 bagage en soute",
    cancellation: "Annulation avec frais",
    amenities: ["Wi-Fi", "Repas", "Divertissement"]
  }
];

const FlightsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('roundtrip');
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('1 Traveler, Economy');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('price');
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [stopsFilter, setStopsFilter] = useState('all');
  const [showFlightDetails, setShowFlightDetails] = useState(null);

  // Traductions
  const content = {
    FR: {
      heroTitle: "Recherchez des vols",
      heroSubtitle: "Trouvez et réservez des vols pas chers dans le monde entier",
      roundtrip: "Aller-retour",
      oneway: "Aller simple",
      multiday: "Multi-destinations",
      leavingFrom: "Départ de",
      goingTo: "Destination",
      dates: "Dates",
      travelers: "Voyageurs",
      addHotel: "Ajouter un hébergement",
      search: "Rechercher",
      popularAirlines: "Compagnies populaires",
      features: {
        priceDrop: "Protection baisse de prix",
        priceDropDesc: "Nous vous remboursons si votre vol devient moins cher",
        earnRewards: "Gagnez des récompenses",
        earnRewardsDesc: "Gagnez des récompenses en plus des miles",
        saveUpTo: "Économisez jusqu'à 50%",
        saveUpToDesc: "En ajoutant un hôtel à votre vol"
      },
      popularDestinations: "Destinations populaires",
      flightDeals: "Offres de vols au départ de chez vous",
      bookingTips: "Conseils pour réserver des vols pas chers",
      appDownload: "Allez plus loin avec notre application",
      appDesc: "Obtenez jusqu'à 20% de réduction avec nos prix membres sur les hôtels",
      scanQR: "Scannez le code QR avec votre appareil",
      allFlights: "Tous les vols",
      filters: "Filtres",
      sortBy: "Trier par",
      price: "Prix",
      duration: "Durée",
      departureTime: "Heure de départ",
      rating: "Note",
      applyFilters: "Appliquer les filtres",
      clearFilters: "Effacer les filtres",
      stops: "Escales",
      direct: "Direct",
      oneStop: "1 escale",
      twoStops: "2 escales",
      airlines: "Compagnies aériennes",
      priceRange: "Fourchette de prix",
      viewDetails: "Voir les détails",
      bookNow: "Réserver maintenant",
      perPerson: "par personne",
      save: "Économisez",
      departure: "Départ",
      arrival: "Arrivée",
      durationTitle: "Durée",
      baggage: "Bagages",
      cancellation: "Annulation",
      amenities: "Services",
      selectSeats: "Sélectionner des sièges",
      fastTrack: "Fast Track",
      priorityBoarding: "Embarcation prioritaire",
      loungeAccess: "Accès salon",
      extraBaggage: "Bagage supplémentaire",
      travelInsurance: "Assurance voyage",
      bestPrice: "Meilleur prix garanti",
      securePayment: "Paiement sécurisé",
      support247: "Support 24/7",
      loadingFlights: "Chargement des vols..."
    },
    EN: {
      heroTitle: "Search flights",
      heroSubtitle: "Find and book cheap flights worldwide",
      roundtrip: "Roundtrip",
      oneway: "One-way",
      multiday: "Multi-city",
      leavingFrom: "Leaving from",
      goingTo: "Going to",
      dates: "Dates",
      travelers: "Travelers",
      addHotel: "Add a hotel",
      search: "Search",
      popularAirlines: "Popular airlines",
      features: {
        priceDrop: "Price Drop Protection",
        priceDropDesc: "We'll refund you if your flight gets cheaper",
        earnRewards: "Earn Rewards",
        earnRewardsDesc: "Earn rewards on top of airline miles",
        saveUpTo: "Save up to 50%",
        saveUpToDesc: "When you add a hotel to your flight"
      },
      popularDestinations: "Popular destinations",
      flightDeals: "Flight deals departing near you",
      bookingTips: "Tips on booking cheap flights",
      appDownload: "Go further with our app",
      appDesc: "Get up to 20% off with Member Prices on hotels",
      scanQR: "Scan the QR code with your device",
      allFlights: "All flights",
      filters: "Filters",
      sortBy: "Sort by",
      price: "Price",
      duration: "Duration",
      departureTime: "Departure time",
      rating: "Rating",
      applyFilters: "Apply filters",
      clearFilters: "Clear filters",
      stops: "Stops",
      direct: "Direct",
      oneStop: "1 stop",
      twoStops: "2 stops",
      airlines: "Airlines",
      priceRange: "Price range",
      viewDetails: "View details",
      bookNow: "Book now",
      perPerson: "per person",
      save: "Save",
      departure: "Departure",
      arrival: "Arrival",
      durationTitle: "Duration",
      baggage: "Baggage",
      cancellation: "Cancellation",
      amenities: "Amenities",
      selectSeats: "Select seats",
      fastTrack: "Fast Track",
      priorityBoarding: "Priority boarding",
      loungeAccess: "Lounge access",
      extraBaggage: "Extra baggage",
      travelInsurance: "Travel insurance",
      bestPrice: "Best price guaranteed",
      securePayment: "Secure payment",
      support247: "24/7 support",
      loadingFlights: "Loading flights..."
    }
  };

  const t = content[language] || content.FR;

  // Données pour les destinations populaires
  const popularDestinations = [
    { name: "Los Angeles", code: "LAX", price: "€499", image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=400" },
    { name: "Las Vegas", code: "LAS", price: "€389", image: "https://images.unsplash.com/photo-1502920313556-c2b5c76cce67?w=400" },
    { name: "Miami", code: "MIA", price: "€599", image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=400" },
    { name: "Chicago", code: "ORD", price: "€459", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400" },
    { name: "Tokyo", code: "HND", price: "€799", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400" },
    { name: "Dubai", code: "DXB", price: "€649", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400" }
  ];

  // Données pour les compagnies aériennes
  const airlines = [
    { name: "Alaska Airlines", code: "AA", rating: 4.7, img: AlaskaAirlines},
    { name: "American Airlines", code: "AA", rating: 4.8, img: AmericanAirlines},
    { name: "Camair Co", code: "CC", rating: 4.9, img: CamairCo},
    { name: "Delta Airlines", code: "DA", rating: 4.8, img: Delta },
    { name: "Jetblue Airlines", code: "JA", rating: 4.6, img: Jetblue },
    { name: "South Airways", code: "SA", rating: 4.7, img: SouthAirlines },
    { name: "United Airlines", code: "UA", rating: 4.5, img: UnutedAirlines }
  ];

  // Gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching flights...");
  };

  // Gérer le clic sur un vol
  const handleFlightClick = (flight) => {
    navigate(`/vols/${flight.id}`, { state: { flight } });
  };

  // Gérer la sélection/désélection d'une compagnie
  const handleAirlineToggle = (airlineName) => {
    setSelectedAirlines(prev => 
      prev.includes(airlineName) 
        ? prev.filter(a => a !== airlineName)
        : [...prev, airlineName]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
                
      {/* Hero Section avec formulaire de recherche */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 md:py-12" style={{
                    backgroundImage: `url(${Pays1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.heroTitle}</h1>
          <p className="text-blue-100 mb-8">{t.heroSubtitle}</p>
          
          {/* Formulaire de recherche */}
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
            {/* Type de voyage */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition ${tripType === 'roundtrip' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setTripType('roundtrip')}
              >
                {t.roundtrip}
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition ${tripType === 'oneway' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setTripType('oneway')}
              >
                {t.oneway}
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium transition ${tripType === 'multiday' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setTripType('multiday')}
              >
                {t.multiday}
              </button>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Départ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.leavingFrom}</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ville ou aéroport"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.goingTo}</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ville ou aéroport"
                  />
                </div>
              </div>

              {/* Dates */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.dates}</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={departDate || "Sélectionner dates"}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Sélectionner dates"
                  />
                </div>
              </div>

              {/* Voyageurs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.travelers}</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1 Voyageur, Économique"
                  />
                </div>
              </div>

              {/* Bouton recherche */}
              <div className="flex items-end">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  {t.search}
                </button>
              </div>
            </form>

            {/* Ajouter hôtel */}
            <div className="mt-6 flex items-center">
              <input type="checkbox" id="addHotel" className="w-4 h-4 text-blue-600 rounded" />
              <label htmlFor="addHotel" className="ml-2 text-sm text-gray-700">
                {t.addHotel}
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Compagnies populaires */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t.popularAirlines}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {airlines.map((airline, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src={airline.img} alt={airline.name} className='' />
                </div>
                <p className="text-sm font-medium text-gray-700">{airline.name}</p>
                <div className="flex items-center justify-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">{airline.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-3">
              <Shield className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="font-bold text-gray-900">{t.features.priceDrop}</h3>
            </div>
            <p className="text-gray-600 text-sm">{t.features.priceDropDesc}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-3">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="font-bold text-gray-900">{t.features.earnRewards}</h3>
            </div>
            <p className="text-gray-600 text-sm">{t.features.earnRewardsDesc}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-3">
              <Clock className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="font-bold text-gray-900">{t.features.saveUpTo}</h3>
            </div>
            <p className="text-gray-600 text-sm">{t.features.saveUpToDesc}</p>
          </div>
        </div>

        {/* Section Vols avec filtres */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar filtres */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900">{t.filters}</h3>
                <button 
                  onClick={() => {
                    setSelectedAirlines([]);
                    setPriceRange([0, 1500]);
                    setStopsFilter('all');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {t.clearFilters}
                </button>
              </div>

              {/* Tri */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">{t.sortBy}</h4>
                <div className="space-y-2">
                  {[
                    { value: 'price', label: t.price },
                    { value: 'duration', label: t.duration },
                    { value: 'departure', label: t.departureTime },
                    { value: 'rating', label: t.rating }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${sortBy === option.value ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Escales */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">{t.stops}</h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: t.allFlights },
                    { value: 'direct', label: t.direct },
                    { value: 'one', label: t.oneStop },
                    { value: 'two', label: t.twoStops }
                  ].map((stop) => (
                    <button
                      key={stop.value}
                      onClick={() => setStopsFilter(stop.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${stopsFilter === stop.value ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      {stop.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compagnies aériennes */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">{t.airlines}</h4>
                <div className="space-y-2">
                  {airlines.map((airline) => (
                    <div key={airline.name} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`airline-${airline.code}`}
                        checked={selectedAirlines.includes(airline.name)}
                        onChange={() => handleAirlineToggle(airline.name)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <label htmlFor={`airline-${airline.code}`} className="ml-2 text-sm text-gray-700">
                        {airline.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fourchette de prix */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">
                  {t.priceRange}: {priceRange[0]}€ - {priceRange[1]}€
                </h4>
                <input
                  type="range"
                  min="0"
                  max="1500"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0€</span>
                  <span>1500€</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                {t.applyFilters}
              </button>
            </div>
          </div>

          {/* Liste des vols */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t.allFlights}</h2>
              <p className="text-gray-600">{flightsData.length} vols trouvés</p>
            </div>

            <div className="space-y-6">
              {flightsData.map((flight) => (
                <div 
                  key={flight.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all overflow-hidden group cursor-pointer"
                  onClick={() => handleFlightClick(flight)}
                >
                  <div className="p-6">
                    {/* En-tête du vol */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{flight.airlineLogo}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{flight.airline}</h3>
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">{flight.rating} ({flight.reviews} avis)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prix et réduction */}
                      <div className="text-right">
                        {flight.originalPrice && (
                          <div className="text-sm text-gray-400 line-through mb-1">
                            {flight.originalPrice}€
                          </div>
                        )}
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {flight.price}€
                        </div>
                        <div className="text-sm text-gray-600">{t.perPerson}</div>
                        {flight.discount > 0 && (
                          <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full inline-block">
                            {t.save} {flight.discount}%
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Itinéraire */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{t.departure}</div>
                        <div className="text-xl font-bold">{flight.departure}</div>
                        <div className="text-sm text-gray-600">{flight.from.city} ({flight.from.code})</div>
                        <div className="text-sm text-gray-500">{flight.departureDate}</div>
                      </div>

                      <div className="text-center">
                        <div className="relative">
                          <div className="h-px bg-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"></div>
                          <Plane className="w-6 h-6 text-blue-500 mx-auto relative bg-white p-1" />
                        </div>
                        <div className="mt-4 text-sm font-medium text-gray-900">{flight.duration}</div>
                        <div className="text-xs text-gray-500">{flight.type}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">{t.arrival}</div>
                        <div className="text-xl font-bold">{flight.arrival}</div>
                        <div className="text-sm text-gray-600">{flight.to.city} ({flight.to.code})</div>
                        <div className="text-sm text-gray-500">{flight.arrivalDate}</div>
                      </div>
                    </div>

                    {/* Infos supplémentaires */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-green-600 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{t.baggage}</div>
                          <div className="text-xs text-gray-500">{flight.baggage}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{t.cancellation}</div>
                          <div className="text-xs text-gray-500">{flight.cancellation}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-blue-600 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{t.amenities}</div>
                          <div className="text-xs text-gray-500">{flight.amenities.slice(0, 2).join(', ')}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer avec bouton */}
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center group-hover:bg-blue-700">
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conseils de réservation */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.bookingTips}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Quel est le meilleur jour pour acheter des billets d'avion ?</h3>
              <p className="text-gray-600">Les mardis et mercredis sont généralement les jours les moins chers pour voler. Évitez les weekends pour économiser jusqu'à 20%.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Quand acheter les billets ?</h3>
              <p className="text-gray-600">Pour les vols internationaux, achetez 2-3 mois à l'avance. Pour les vols domestiques, 3-4 semaines à l'avance sont optimales.</p>
            </div>
          </div>
        </div>

        {/* Téléchargement app */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">{t.appDownload}</h2>
              <p className="text-blue-100 mb-4">{t.appDesc}</p>
              <div className="flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                <span>{t.scanQR}</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-32 h-32 bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="grid grid-cols-3 gap-1 mb-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-white"></div>
                    ))}
                  </div>
                  <span className="text-xs">QR CODE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FlightsPage;