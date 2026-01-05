// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ElementsPopulaire from "../components/ElementsPopulaire";
import InfoGlobush from "../components/InfoGlobush";
import { Link } from "react-router-dom";
import PopularFlights from '../components/PopularFlights';
import PopularTouristSites from '../components/PopularTouristSites';
import TouristSiteCards from '../pages/TouristSiteCards';

import {
  Search, Plane, Hotel, Car, MapPin, Calendar, Users,
  ChevronDown, Star, Shield, Globe, Clock, Award, Heart,
  ArrowRight, ChevronRight, Package, Navigation,
  Ticket, Ship, Briefcase, Music, Utensils, Coffee,
  ArrowLeftRight, User, Home as HomeIcon, Map
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // États principaux
  const [searchType, setSearchType] = useState("stays");
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [travelers, setTravelers] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showTravelerModal, setShowTravelerModal] = useState(false);
  
  // États spécifiques aux vols
  const [flightType, setFlightType] = useState("roundtrip");
  const [departure, setDeparture] = useState("");
  const [flightTravelers, setFlightTravelers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabinClass, setCabinClass] = useState("economy");
  
  // États spécifiques aux voitures
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [sameLocation, setSameLocation] = useState(true);
  const [carPickupDate, setCarPickupDate] = useState("");
  const [carDropoffDate, setCarDropoffDate] = useState("");
  const [carPickupTime, setCarPickupTime] = useState("10:00");
  const [carDropoffTime, setCarDropoffTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState("30");
  
  // États spécifiques aux activités
  const [activityDate, setActivityDate] = useState("");
  const [activityTravelers, setActivityTravelers] = useState({ adults: 2, children: 0 });
  
  // États spécifiques aux croisières
  const [cruiseDestination, setCruiseDestination] = useState("");
  const [cruiseDuration, setCruiseDuration] = useState("7");
  const [cruiseDate, setCruiseDate] = useState("");
  const [cruiseTravelers, setCruiseTravelers] = useState({ adults: 2, children: 0 });
  
  // États spécifiques aux packages
  const [packageTravelers, setPackageTravelers] = useState({ adults: 2, children: 0 });

  // Contenu bilingue étendu
  const content = {
    FR: {
      hero: {
        title: "Mode de voyage",
        subtitle: "Voyagez avec confiance, découvrez le monde",
        tagline: "Votre partenaire de voyage de confiance depuis 2010"
      },
      
      searchTabs: {
        stays: "Séjours",
        flights: "Vols",
        cars: "Voitures",
        packages: "Packages",
        thingsToDo: "Activités",
        cruises: "Croisières"
      },
      
      // Textes spécifiques aux vols
      flightTypes: {
        roundtrip: "Aller-retour",
        oneway: "Aller simple",
        multicity: "Multi-destinations"
      },
      
      cabinClasses: {
        economy: "Économique",
        premium: "Premium",
        business: "Affaires",
        first: "Première"
      },
      
      // Textes spécifiques aux voitures
      carOptions: {
        pickup: "Lieu de prise en charge",
        dropoff: "Lieu de restitution",
        sameLocation: "Même lieu",
        driverAge: "Âge du conducteur",
        driverAgeDesc: "25-75 ans"
      },
      
      // Placeholders génériques
      placeholders: {
        destination: "Où allez-vous ?",
        goingTo: "Destination",
        from: "Départ",
        departure: "Départ",
        checkIn: "Arrivée",
        checkOut: "Départ",
        travelers: "Voyageurs",
        search: "Rechercher",
        dates: "Dates",
        pickupDate: "Date de prise en charge",
        dropoffDate: "Date de restitution",
        pickupTime: "Heure de prise en charge",
        dropoffTime: "Heure de restitution",
        cabinClass: "Classe",
        cruiseDuration: "Durée de croisière",
        activityDate: "Date de l'activité"
      },
      
      travelerOptions: {
        adults: "Adultes",
        adultsDesc: "13 ans et plus",
        children: "Enfants",
        childrenDesc: "2-12 ans",
        infants: "Bébés",
        infantsDesc: "Moins de 2 ans",
        rooms: "Chambres",
        roomsDesc: "Pour votre séjour",
        apply: "Appliquer",
        travelers: "Voyageurs"
      },
      
      // Options supplémentaires
      addFlight: "Ajouter un vol",
      addCar: "Ajouter une voiture",
      addHotel: "Ajouter un hôtel",
      
      // Statistiques
      stats: {
        items: [
          { value: "14+", label: "Années d'expérience" },
          { value: "50K+", label: "Clients satisfaits" },
          { value: "150+", label: "Destinations" },
          { value: "98%", label: "Taux de satisfaction" }
        ]
      },
      
      // Autres sections
      promoSection: {
        title: "Votre été du football",
        description: "Économisez sur les voyages de matchs : vols, séjours et plus encore.",
        button: "Voir toutes les offres"
      },
      
      recentlyViewed: {
        title: "Vos propriétés récemment consultées",
        viewDetails: "Voir les détails",
        perNight: "/nuit"
      },
      
      features: {
        title: "Pourquoi choisir Global Bush Travel ?",
        items: [
          {
            icon: <Shield className="w-8 h-8" />,
            title: "Garantie de Prix",
            description: "Meilleur prix garanti ou la différence remboursée"
          },
          {
            icon: <Clock className="w-8 h-8" />,
            title: "Support 24/7",
            description: "Assistance disponible jour et nuit"
          },
          {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence Certifiée",
            description: "Certifié par l'IATA et WTTC"
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "150+ Destinations",
            description: "Expériences authentiques dans le monde entier"
          }
        ]
      },
      
      cta: {
        title: "Prêt à créer des souvenirs inoubliables ?",
        subtitle: "Inscrivez-vous et recevez 15% de réduction sur votre première réservation",
        button: "Commencer mon voyage"
      }
    },
    
    EN: {
      hero: {
        title: "Mode to Travel",
        subtitle: "Travel with confidence, discover the world",
        tagline: "Your trusted travel partner since 2010"
      },
      
      searchTabs: {
        stays: "Stays",
        flights: "Flights",
        cars: "Cars",
        packages: "Packages",
        thingsToDo: "Things to do",
        cruises: "Cruises"
      },
      
      // Flight-specific texts
      flightTypes: {
        roundtrip: "Roundtrip",
        oneway: "One-way",
        multicity: "Multi-city"
      },
      
      cabinClasses: {
        economy: "Economy",
        premium: "Premium",
        business: "Business",
        first: "First"
      },
      
      // Car-specific texts
      carOptions: {
        pickup: "Pick-up location",
        dropoff: "Drop-off location",
        sameLocation: "Same location",
        driverAge: "Driver's age",
        driverAgeDesc: "25-75 years"
      },
      
      // Generic placeholders
      placeholders: {
        destination: "Where are you going?",
        goingTo: "Going to",
        from: "From",
        departure: "Departure",
        checkIn: "Check-in",
        checkOut: "Check-out",
        travelers: "Travelers",
        search: "Search",
        dates: "Dates",
        pickupDate: "Pick-up date",
        dropoffDate: "Drop-off date",
        pickupTime: "Pick-up time",
        dropoffTime: "Drop-off time",
        cabinClass: "Cabin class",
        cruiseDuration: "Cruise duration",
        activityDate: "Activity date"
      },
      
      travelerOptions: {
        adults: "Adults",
        adultsDesc: "Age 13+",
        children: "Children",
        childrenDesc: "Age 2-12",
        infants: "Infants",
        infantsDesc: "Under 2",
        rooms: "Rooms",
        roomsDesc: "For your stay",
        apply: "Apply",
        travelers: "Travelers"
      },
      
      // Additional options
      addFlight: "Add a flight",
      addCar: "Add a car",
      addHotel: "Add a hotel",
      
      // Statistics
      stats: {
        items: [
          { value: "14+", label: "Years of experience" },
          { value: "50K+", label: "Satisfied clients" },
          { value: "150+", label: "Destinations" },
          { value: "98%", label: "Satisfaction rate" }
        ]
      },
      
      // Other sections
      promoSection: {
        title: "Your summer of soccer",
        description: "Save on match travel across flights, stays, and more.",
        button: "See all deals"
      },
      
      recentlyViewed: {
        title: "Your recently viewed properties",
        viewDetails: "View details",
        perNight: "/night"
      },
      
      features: {
        title: "Why Choose Global Bush Travel?",
        items: [
          {
            icon: <Shield className="w-8 h-8" />,
            title: "Price Guarantee",
            description: "Best price guaranteed or difference refunded"
          },
          {
            icon: <Clock className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Assistance available day and night"
          },
          {
            icon: <Award className="w-8 h-8" />,
            title: "Certified Excellence",
            description: "Certified by IATA and WTTC"
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "150+ Destinations",
            description: "Authentic experiences worldwide"
          }
        ]
      },
      
      cta: {
        title: "Ready to create unforgettable memories?",
        subtitle: "Sign up and get 15% off your first booking",
        button: "Start My Journey"
      }
    }
  };

  const t = content[language];

  // Types de voyage avec icônes
  const travelTypes = [
    { key: 'stays', label: t.searchTabs.stays, icon: <Hotel className="w-4 h-4 mr-2" /> },
    { key: 'flights', label: t.searchTabs.flights, icon: <Plane className="w-4 h-4 mr-2" /> },
    { key: 'cars', label: t.searchTabs.cars, icon: <Car className="w-4 h-4 mr-2" /> },
    { key: 'packages', label: t.searchTabs.packages, icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { key: 'thingsToDo', label: t.searchTabs.thingsToDo, icon: <Ticket className="w-4 h-4 mr-2" /> },
    { key: 'cruises', label: t.searchTabs.cruises, icon: <Ship className="w-4 h-4 mr-2" /> },
  ];

  // Gestion de la recherche
  const handleSearch = () => {
    if (!destination.trim() && searchType !== 'flights' && searchType !== 'cars') {
      return;
    }

    let searchParams = new URLSearchParams();
    
    switch(searchType) {
      case 'stays':
        searchParams.append('type', 'stays');
        searchParams.append('destination', destination);
        if (checkInDate) searchParams.append('checkIn', checkInDate);
        if (checkOutDate) searchParams.append('checkOut', checkOutDate);
        searchParams.append('adults', travelers.adults);
        searchParams.append('children', travelers.children);
        searchParams.append('rooms', travelers.rooms);
        break;
        
      case 'flights':
        searchParams.append('type', 'flights');
        searchParams.append('departure', departure);
        searchParams.append('destination', destination);
        searchParams.append('flightType', flightType);
        searchParams.append('cabinClass', cabinClass);
        searchParams.append('adults', flightTravelers.adults);
        searchParams.append('children', flightTravelers.children);
        if (checkInDate) searchParams.append('departureDate', checkInDate);
        if (checkOutDate && flightType === 'roundtrip') {
          searchParams.append('returnDate', checkOutDate);
        }
        break;
        
      case 'cars':
        searchParams.append('type', 'cars');
        searchParams.append('pickupLocation', pickupLocation);
        searchParams.append('pickupDate', carPickupDate);
        searchParams.append('pickupTime', carPickupTime);
        if (!sameLocation) {
          searchParams.append('dropoffLocation', dropoffLocation);
        }
        searchParams.append('driverAge', driverAge);
        break;
        
      case 'thingsToDo':
        searchParams.append('type', 'activities');
        searchParams.append('destination', destination);
        if (activityDate) searchParams.append('date', activityDate);
        searchParams.append('adults', activityTravelers.adults);
        searchParams.append('children', activityTravelers.children);
        break;
        
      case 'cruises':
        searchParams.append('type', 'cruises');
        searchParams.append('destination', cruiseDestination);
        searchParams.append('duration', cruiseDuration);
        if (cruiseDate) searchParams.append('date', cruiseDate);
        searchParams.append('adults', cruiseTravelers.adults);
        searchParams.append('children', cruiseTravelers.children);
        break;
        
      case 'packages':
        searchParams.append('type', 'packages');
        searchParams.append('destination', destination);
        if (checkInDate) searchParams.append('checkIn', checkInDate);
        if (checkOutDate) searchParams.append('checkOut', checkOutDate);
        searchParams.append('adults', packageTravelers.adults);
        searchParams.append('children', packageTravelers.children);
        break;
    }
    
    navigate(`/search?${searchParams.toString()}`);
  };

  // Composant de recherche pour les séjours
  const StaysSearch = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Destination */}
        <div className="lg:col-span-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.destination}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={language === "FR" ? "Paris, France" : "Paris, France"}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.checkIn}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.checkOut}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Voyageurs */}
        <div className="lg:col-span-3">
          <TravelersInput 
            travelers={travelers}
            setTravelers={setTravelers}
            showTravelerModal={showTravelerModal}
            setShowTravelerModal={setShowTravelerModal}
            t={t}
            includeRooms={true}
          />
        </div>

        {/* Bouton recherche */}
        <div className="lg:col-span-2">
          <SearchButton onClick={handleSearch} t={t} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
          <Plane size={18} />
          <span>{t.addFlight}</span>
        </button>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
          <Car size={18} />
          <span>{t.addCar}</span>
        </button>
      </div>
    </div>
  );

  // Composant de recherche pour les vols
  const FlightsSearch = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
      {/* Type de vol */}
      <div className="flex space-x-4 mb-6">
        {(['roundtrip', 'oneway', 'multicity']).map((type) => (
          <button
            key={type}
            onClick={() => setFlightType(type)}
            className={`px-4 py-2 rounded-lg font-medium ${
              flightType === type
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {t.flightTypes[type]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Départ */}
        <div className="lg:col-span-3">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.from}
            </label>
            <div className="relative">
              <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder={language === "FR" ? "De Paris" : "From Paris"}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Destination */}
        <div className="lg:col-span-3">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.goingTo}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={language === "FR" ? "À New York" : "To New York"}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="lg:col-span-2">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.departure}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {flightType === 'roundtrip' && (
          <div className="lg:col-span-2">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.checkOut}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Voyageurs et classe */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.travelers}
              </label>
              <FlightTravelersInput 
                travelers={flightTravelers}
                setTravelers={setFlightTravelers}
                t={t}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.cabinClass}
              </label>
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.entries(t.cabinClasses).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton recherche */}
      <div className="mt-6">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <SearchButton onClick={handleSearch} t={t} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
          <Hotel size={18} />
          <span>{t.addHotel}</span>
        </button>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
          <Car size={18} />
          <span>{t.addCar}</span>
        </button>
      </div>
    </div>
  );

  // Composant de recherche pour les voitures
  const CarsSearch = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Lieu de prise en charge */}
        <div className="lg:col-span-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.carOptions.pickup}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder={language === "FR" ? "Aéroport CDG, Paris" : "CDG Airport, Paris"}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Lieu de restitution */}
        <div className="lg:col-span-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.carOptions.dropoff}
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={sameLocation ? pickupLocation : dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  placeholder={language === "FR" ? "Même lieu" : "Same location"}
                  disabled={sameLocation}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                />
              </div>
              <button
                onClick={() => setSameLocation(!sameLocation)}
                className="flex items-center whitespace-nowrap px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <ArrowLeftRight size={16} className="mr-1" />
                {sameLocation ? "Différent" : "Même"}
              </button>
            </div>
          </div>
        </div>

        {/* Dates et heures */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.pickupDate}
              </label>
              <input
                type="date"
                value={carPickupDate}
                onChange={(e) => setCarPickupDate(e.target.value)}
                className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.pickupTime}
              </label>
              <input
                type="time"
                value={carPickupTime}
                onChange={(e) => setCarPickupTime(e.target.value)}
                className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.dropoffDate}
              </label>
              <input
                type="date"
                value={carDropoffDate}
                onChange={(e) => setCarDropoffDate(e.target.value)}
                className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.dropoffTime}
              </label>
              <input
                type="time"
                value={carDropoffTime}
                onChange={(e) => setCarDropoffTime(e.target.value)}
                className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Âge du conducteur et recherche */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.carOptions.driverAge}
          </label>
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-gray-400" />
            <select
              value={driverAge}
              onChange={(e) => setDriverAge(e.target.value)}
              className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {Array.from({length: 51}, (_, i) => i + 25).map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:col-span-9 flex items-end">
          <div className="w-full">
            <SearchButton onClick={handleSearch} t={t} />
          </div>
        </div>
      </div>
    </div>
  );

  // Composant de recherche pour les activités
  const ThingsToDoSearch = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Destination */}
        <div className="lg:col-span-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.destination}
            </label>
            <div className="relative">
              <Ticket className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={language === "FR" ? "Visites, activités, spectacles..." : "Tours, activities, shows..."}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="lg:col-span-3">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.activityDate}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={activityDate}
                onChange={(e) => setActivityDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Voyageurs */}
        <div className="lg:col-span-3">
          <ActivityTravelersInput 
            travelers={activityTravelers}
            setTravelers={setActivityTravelers}
            t={t}
          />
        </div>

        {/* Bouton recherche */}
        <div className="lg:col-span-2">
          <SearchButton onClick={handleSearch} t={t} />
        </div>
      </div>
    </div>
  );

  // Composant de recherche pour les croisières
  const CruisesSearch = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Destination */}
        <div className="lg:col-span-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.destination}
            </label>
            <div className="relative">
              <Ship className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={cruiseDestination}
                onChange={(e) => setCruiseDestination(e.target.value)}
                placeholder={language === "FR" ? "Caraïbes, Méditerranée..." : "Caribbean, Mediterranean..."}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Durée */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.placeholders.cruiseDuration}
          </label>
          <select
            value={cruiseDuration}
            onChange={(e) => setCruiseDuration(e.target.value)}
            className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="3">3+ {language === 'FR' ? 'nuits' : 'nights'}</option>
            <option value="7">7+ {language === 'FR' ? 'nuits' : 'nights'}</option>
            <option value="10">10+ {language === 'FR' ? 'nuits' : 'nights'}</option>
            <option value="14">14+ {language === 'FR' ? 'nuits' : 'nights'}</option>
          </select>
        </div>

        {/* Date */}
        <div className="lg:col-span-3">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.dates}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={cruiseDate}
                onChange={(e) => setCruiseDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Voyageurs */}
        <div className="lg:col-span-3">
          <CruiseTravelersInput 
            travelers={cruiseTravelers}
            setTravelers={setCruiseTravelers}
            t={t}
          />
        </div>
      </div>

      {/* Bouton recherche */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-xs">
          <SearchButton onClick={handleSearch} t={t} />
        </div>
      </div>
    </div>
  );

  // Composant de recherche pour les packages
  const PackagesSearch = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Destination */}
        <div className="lg:col-span-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.placeholders.destination}
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={language === "FR" ? "Vol + Hôtel" : "Flight + Hotel"}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.checkIn}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.placeholders.checkOut}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Voyageurs */}
        <div className="lg:col-span-3">
          <PackageTravelersInput 
            travelers={packageTravelers}
            setTravelers={setPackageTravelers}
            t={t}
          />
        </div>

        {/* Bouton recherche */}
        <div className="lg:col-span-2">
          <SearchButton onClick={handleSearch} t={t} />
        </div>
      </div>
    </div>
  );

  // Composants réutilisables
  const TravelersInput = ({ travelers, setTravelers, showTravelerModal, setShowTravelerModal, t, includeRooms = false }) => {
    const travelerText = () => {
      const { adults, children, rooms } = travelers;
      if (language === "FR") {
        return `${adults} adulte${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} enfant${children > 1 ? 's' : ''}` : ''}${includeRooms && rooms > 0 ? `, ${rooms} chambre${rooms > 1 ? 's' : ''}` : ''}`;
      }
      return `${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}${includeRooms && rooms > 0 ? `, ${rooms} room${rooms > 1 ? 's' : ''}` : ''}`;
    };

    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.travelerOptions.travelers}
        </label>
        <div className="relative">
          <button
            onClick={() => setShowTravelerModal(!showTravelerModal)}
            className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg text-left hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700">{travelerText()}</span>
            </div>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </button>

          {showTravelerModal && (
            <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4">
              <div className="space-y-4">
                <TravelerCounter 
                  label={t.travelerOptions.adults}
                  desc={t.travelerOptions.adultsDesc}
                  value={travelers.adults}
                  onIncrement={() => setTravelers({...travelers, adults: Math.min(travelers.adults + 1, 10)})}
                  onDecrement={() => setTravelers({...travelers, adults: Math.max(travelers.adults - 1, 1)})}
                />

                <TravelerCounter 
                  label={t.travelerOptions.children}
                  desc={t.travelerOptions.childrenDesc}
                  value={travelers.children}
                  onIncrement={() => setTravelers({...travelers, children: Math.min(travelers.children + 1, 8)})}
                  onDecrement={() => setTravelers({...travelers, children: Math.max(travelers.children - 1, 0)})}
                />

                {includeRooms && (
                  <TravelerCounter 
                    label={t.travelerOptions.rooms}
                    desc={t.travelerOptions.roomsDesc}
                    value={travelers.rooms}
                    onIncrement={() => setTravelers({...travelers, rooms: Math.min(travelers.rooms + 1, 5)})}
                    onDecrement={() => setTravelers({...travelers, rooms: Math.max(travelers.rooms - 1, 1)})}
                  />
                )}

                <button
                  onClick={() => setShowTravelerModal(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                >
                  {t.travelerOptions.apply}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const TravelerCounter = ({ label, desc, value, onIncrement, onDecrement }) => (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium text-gray-900">{label}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={onDecrement}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          -
        </button>
        <span className="w-8 text-center font-medium">{value}</span>
        <button
          onClick={onIncrement}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );

  const FlightTravelersInput = ({ travelers, setTravelers, t }) => (
    <div className="relative">
      <button
        onClick={() => setShowTravelerModal(!showTravelerModal)}
        className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg text-left hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <div className="flex items-center">
          <Users className="w-5 h-5 text-gray-400 mr-3" />
          <span className="text-gray-700">
            {language === "FR" 
              ? `${travelers.adults} adulte${travelers.adults > 1 ? 's' : ''}${travelers.children > 0 ? `, ${travelers.children} enfant${travelers.children > 1 ? 's' : ''}` : ''}${travelers.infants > 0 ? `, ${travelers.infants} bébé${travelers.infants > 1 ? 's' : ''}` : ''}`
              : `${travelers.adults} adult${travelers.adults > 1 ? 's' : ''}${travelers.children > 0 ? `, ${travelers.children} child${travelers.children > 1 ? 'ren' : ''}` : ''}${travelers.infants > 0 ? `, ${travelers.infants} infant${travelers.infants > 1 ? 's' : ''}` : ''}`
            }
          </span>
        </div>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </button>

      {showTravelerModal && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4">
          <div className="space-y-4">
            <TravelerCounter 
              label={t.travelerOptions.adults}
              desc={t.travelerOptions.adultsDesc}
              value={travelers.adults}
              onIncrement={() => setTravelers({...travelers, adults: Math.min(travelers.adults + 1, 10)})}
              onDecrement={() => setTravelers({...travelers, adults: Math.max(travelers.adults - 1, 1)})}
            />

            <TravelerCounter 
              label={t.travelerOptions.children}
              desc={t.travelerOptions.childrenDesc}
              value={travelers.children}
              onIncrement={() => setTravelers({...travelers, children: Math.min(travelers.children + 1, 8)})}
              onDecrement={() => setTravelers({...travelers, children: Math.max(travelers.children - 1, 0)})}
            />

            <TravelerCounter 
              label={t.travelerOptions.infants}
              desc={t.travelerOptions.infantsDesc}
              value={travelers.infants}
              onIncrement={() => setTravelers({...travelers, infants: Math.min(travelers.infants + 1, 4)})}
              onDecrement={() => setTravelers({...travelers, infants: Math.max(travelers.infants - 1, 0)})}
            />

            <button
              onClick={() => setShowTravelerModal(false)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              {t.travelerOptions.apply}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const ActivityTravelersInput = ({ travelers, setTravelers, t }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t.travelerOptions.travelers}
      </label>
      <div className="flex space-x-2">
        <div className="flex-1 text-center p-3 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">{t.travelerOptions.adults}</div>
          <div className="text-lg font-medium">{travelers.adults}</div>
        </div>
        <div className="flex-1 text-center p-3 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">{t.travelerOptions.children}</div>
          <div className="text-lg font-medium">{travelers.children}</div>
        </div>
      </div>
    </div>
  );

  const CruiseTravelersInput = ({ travelers, setTravelers, t }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t.travelerOptions.travelers}
      </label>
      <div className="flex space-x-2">
        <div className="flex-1 text-center p-3 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">{t.travelerOptions.adults}</div>
          <div className="text-lg font-medium">{travelers.adults}</div>
        </div>
        <div className="flex-1 text-center p-3 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">{t.travelerOptions.children}</div>
          <div className="text-lg font-medium">{travelers.children}</div>
        </div>
      </div>
    </div>
  );

  const PackageTravelersInput = ({ travelers, setTravelers, t }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t.travelerOptions.travelers}
      </label>
      <div className="flex space-x-2">
        <div className="flex-1 text-center p-3 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">{t.travelerOptions.adults}</div>
          <div className="text-lg font-medium">{travelers.adults}</div>
        </div>
        <div className="flex-1 text-center p-3 border border-gray-300 rounded-lg">
          <div className="text-sm text-gray-500">{t.travelerOptions.children}</div>
          <div className="text-lg font-medium">{travelers.children}</div>
        </div>
      </div>
    </div>
  );

  const SearchButton = ({ onClick, t }) => (
    <button
      onClick={onClick}
      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center group"
    >
      <Search className="w-5 h-5 mr-2" />
      {t.placeholders.search}
    </button>
  );

  // Sélection du composant de recherche en fonction du type
  const renderSearchComponent = () => {
    switch(searchType) {
      case 'stays':
        return <StaysSearch />;
      case 'flights':
        return <FlightsSearch />;
      case 'cars':
        return <CarsSearch />;
      case 'thingsToDo':
        return <ThingsToDoSearch />;
      case 'cruises':
        return <CruisesSearch />;
      case 'packages':
        return <PackagesSearch />;
      default:
        return <StaysSearch />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="relative min-h-screen">
        {/* Background avec overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920')] bg-cover bg-center opacity-30"></div>
        </div>
        
        {/* Hero Section */}
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-white mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-4">
                {t.hero.subtitle}
              </p>
              <p className="text-lg opacity-80">
                {t.hero.tagline}
              </p>
            </div>
            
            {/* Onglets de navigation */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {travelTypes.map((type) => (
                  <button
                    key={type.key}
                    onClick={() => setSearchType(type.key)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      searchType === type.key
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center">
                      {type.icon}
                      {type.label}
                    </div>
                  </button>
                ))}
              </div>

              {/* Barre de recherche dynamique */}
              {renderSearchComponent()}
            </div>
            
            {/* Statistiques */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.stats.items.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reste du contenu reste inchangé... */}
      <main className="-mt-16 relative z-10">
        {/* Section promo été du football */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-6 mb-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t.promoSection.title}</h3>
              <p className="text-lg">{t.promoSection.description}</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
              {t.promoSection.button}
            </button>
          </div>
        </div>

        {/* Ajouter ici les autres sections... */}
        
      </main>

      <Footer />
    </div>
  );
}