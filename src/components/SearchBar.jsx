///Le problème vient des clés de traduction qui contiennent à la fois le FR et l'EN dans la même valeur. Voici la version corrigée avec des clés propres pour chaque langue :

//jsx
// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ElementsPopulaire from "../components/ElementsPopulaire";
import InfoGlobush from "../components/InfoGlobush";
import { Link } from "react-router-dom";
import PopularFlights from '../components/PopularFlights';
import PopularDestinations from '../components/PopularDestinations';
import Marketplace from '../components/MarketPlace';
import PopularTouristSites from '../components/PopularTouristSites';
// ou
import TouristSiteCards from '../pages/TouristSiteCards';

import {
  Search, Plane, Hotel, Car, MapPin, Calendar, Users,
  ChevronDown, Star, Shield, Globe, Clock, Award, Heart,
  Filter, ArrowRight, ChevronRight, Package, Home,
  Percent, Building, TrendingUp, CheckCircle
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // États pour la barre de recherche
  const [searchType, setSearchType] = useState("stays");
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [travelers, setTravelers] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showTravelerModal, setShowTravelerModal] = useState(false);

  // Contenu bilingue propre - chaque clé contient soit FR soit EN, pas les deux
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
      
      searchPlaceholders: {
        destination: "Où allez-vous ?",
        checkIn: "Arrivée",
        checkOut: "Départ",
        travelers: "Voyageurs",
        search: "Rechercher"
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
      
      recommendations: {
        title: "Recommandations pour vous",
        seeAll: "Voir toutes les propriétés"
      },
      
      bundleSave: {
        title: "Bundle & Save",
        description: "Obtenez plus, dépensez moins avec les offres <strong>Bundle & Save</strong>",
        button: "Voir les offres combinées"
      },
      
      moreFlights: {
        title: "Plus de vols, une recherche",
        description: "Nous avons plus de vols que n'importe quel site de réservation de voyage.",
        button: "Explorer les vols"
      },
      
      disneyAdventure: {
        title: "Votre aventure Disney commence maintenant",
        description: "Réservez des billets de parc, des séjours enchantés et embarquez pour des voyages magiques.",
        button: "Nouveautés"
      },
      
      travelStyles: {
        title: "Séjours pour chaque style de voyage",
        description: "Prix moyens basés sur le mois en cours",
        categories: ["Recherche", "Culture", "Ski", "Famille", "Bien-être"]
      },
      
      oneKeyCash: {
        title: "OneKeyCash™",
        earnings: "Gagnez jusqu'à 15 000 $",
        amount: "$415.00",
        terms: "Après des achats éligibles. Conditions applicables.",
        button: "Découvrir OneKeyCash"
      },
      
      popularDestinations: {
        title: "Destinations Populaires",
        subtitle: "Découvrez nos destinations les plus prisées",
        seeAll: "Toutes les destinations",
        viewDeals: "Voir les offres"
      },
      
      deals: {
        title: "Offres Spéciales",
        subtitle: "Économisez sur vos prochains voyages",
        viewAll: "Toutes les offres"
      },
      
      cta: {
        title: "Prêt à créer des souvenirs inoubliables ?",
        subtitle: "Inscrivez-vous et recevez 15% de réduction sur votre première réservation",
        button: "Commencer mon voyage"
      },
      
      stats: {
        title: "Notre impact",
        items: [
          { value: "14+", label: "Années d'expérience" },
          { value: "50K+", label: "Clients satisfaits" },
          { value: "150+", label: "Destinations" },
          { value: "98%", label: "Taux de satisfaction" }
        ]
      },
      
      travelerOptions: {
        adults: "Adultes",
        adultsDesc: "13 ans et plus",
        children: "Enfants",
        childrenDesc: "0-12 ans",
        rooms: "Chambres",
        roomsDesc: "Pour votre séjour",
        apply: "Appliquer"
      },
      
      // Textes additionnels
      addFlight: "Ajouter un vol",
      addCar: "Ajouter une voiture",
      book: "Réserver",
      reviews: "avis",
      total: "total avec taxes et frais"
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
      
      searchPlaceholders: {
        destination: "Where are you going?",
        checkIn: "Check-in",
        checkOut: "Check-out",
        travelers: "Travelers",
        search: "Search"
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
      
      recommendations: {
        title: "Recommended stays for you",
        seeAll: "See all properties"
      },
      
      bundleSave: {
        title: "Bundle & Save",
        description: "Get more, spend less whenever you see <strong>Bundle & Save deals</strong>",
        button: "View bundle deals"
      },
      
      moreFlights: {
        title: "More flights, one search",
        description: "We have more flights than any travel booking site.",
        button: "Explore flights"
      },
      
      disneyAdventure: {
        title: "Your Disney adventure starts now",
        description: "Book park tickets, enchanted stays, and embark on magical voyages.",
        button: "New adventures"
      },
      
      travelStyles: {
        title: "Stays for every travel style",
        description: "Average prices based on current calendar month",
        categories: ["Search", "Culture", "Ski", "Family", "Wellness and Relaxation"]
      },
      
      oneKeyCash: {
        title: "OneKeyCash™",
        earnings: "Earn up to $15,000",
        amount: "$415.00",
        terms: "After qualifying purchases. Terms apply.",
        button: "Discover OneKeyCash"
      },
      
      popularDestinations: {
        title: "Popular Destinations",
        subtitle: "Discover our most sought-after destinations",
        seeAll: "All destinations",
        viewDeals: "View deals"
      },
      
      deals: {
        title: "Special Deals",
        subtitle: "Save on your next trips",
        viewAll: "All deals"
      },
      
      cta: {
        title: "Ready to create unforgettable memories?",
        subtitle: "Sign up and get 15% off your first booking",
        button: "Start My Journey"
      },
      
      stats: {
        title: "Our Impact",
        items: [
          { value: "14+", label: "Years of experience" },
          { value: "50K+", label: "Satisfied clients" },
          { value: "150+", label: "Destinations" },
          { value: "98%", label: "Satisfaction rate" }
        ]
      },
      
      travelerOptions: {
        adults: "Adults",
        adultsDesc: "Age 13+",
        children: "Children",
        childrenDesc: "Age 0-12",
        rooms: "Rooms",
        roomsDesc: "For your stay",
        apply: "Apply"
      },
      
      // Textes additionnels
      addFlight: "Add a flight",
      addCar: "Add a car",
      book: "Book",
      reviews: "reviews",
      total: "total with taxes and fees"
    }
  };

  const t = content[language];

  // Données pour les hébergements récents
  const recentProperties = [
    {
      name: language === 'FR' ? 'Nordic Hotel Forum Tallinn' : 'Nordic Hotel Forum Tallinn',
      rating: 4.5,
      reviewCount: 299,
      price: language === 'FR' ? '94€' : '$94',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    },
    {
      name: language === 'FR' ? 'Swissôtel Tallinn' : 'Swissôtel Tallinn',
      rating: 4.7,
      reviewCount: 500,
      price: language === 'FR' ? '152€' : '$152',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop'
    }
  ];

  // Données pour les recommandations
  const recommendedStays = [
    {
      name: language === 'FR' ? 'Swissôtel Tallinn' : 'Swissôtel Tallinn',
      location: language === 'FR' ? 'Centre-ville' : 'City Center',
      rating: language === 'FR' ? 'Superbe' : 'Wonderful',
      ratingCount: 1007,
      price: language === 'FR' ? '153€' : '$153',
      perNight: language === 'FR' ? '152€/nuit' : '$152/night',
      total: language === 'FR' ? '304€ total avec taxes et frais' : '$304 total with taxes and fees',
      dates: language === 'FR' ? '25 déc – 27 déc' : 'Dec 25 – Dec 27',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop'
    },
    {
      name: language === 'FR' ? 'Radisson Blu Hotel Olümpia' : 'Radisson Blu Hotel Olümpia',
      location: language === 'FR' ? 'Centre-ville' : 'City Center',
      rating: language === 'FR' ? 'Excellent' : 'Excellent',
      ratingCount: 1004,
      price: language === 'FR' ? '71€' : '$71',
      originalPrice: language === 'FR' ? '94€' : '$94',
      perNight: language === 'FR' ? '67€/nuit' : '$67/night',
      total: language === 'FR' ? '142€ total avec taxes et frais' : '$142 total with taxes and fees',
      dates: language === 'FR' ? '25 déc – 27 déc' : 'Dec 25 – Dec 27',
      image: 'https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=400&h=300&fit=crop'
    }
  ];

  // Données pour les destinations
  const destinations = [
    {
      name: 'Tallinn',
      location: language === 'FR' ? 'Comté de Harju, Estonie' : 'Harju County, Estonia',
      price: language === 'FR' ? '130€' : '$130',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop'
    },
    {
      name: language === 'FR' ? 'Ville de Mykonos' : 'Mykonos Town',
      location: language === 'FR' ? 'Mykonos, Égée-Méridionale, Grèce' : 'Mykonos, South Aegean, Greece',
      price: language === 'FR' ? '140€' : '$140',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop'
    },
    {
      name: language === 'FR' ? 'Plage de Diani' : 'Diani Beach',
      location: language === 'FR' ? 'Comté de Kwale, Kenya' : 'Kwale County, Kenya',
      price: language === 'FR' ? '220€' : '$220',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    }
  ];

  // Données pour les offres spéciales
  const deals = [
    {
      title: language === 'FR' ? 'Hôtels Early Bird' : 'Early Bird Hotels',
      discount: language === 'FR' ? 'Jusqu\'à -40%' : 'Up to -40%',
      description: language === 'FR' ? 'Réservez tôt et économisez' : 'Book early and save',
      tag: language === 'FR' ? 'Populaire' : 'Popular'
    },
    {
      title: language === 'FR' ? 'Vols Last Minute' : 'Last Minute Flights',
      discount: language === 'FR' ? 'Jusqu\'à -60%' : 'Up to -60%',
      description: language === 'FR' ? 'Départs dans les 48h' : 'Departures within 48h',
      tag: language === 'FR' ? 'Économique' : 'Budget'
    },
    {
      title: language === 'FR' ? 'Packages Tout Compris' : 'All-Inclusive Packages',
      discount: language === 'FR' ? 'Jusqu\'à -35%' : 'Up to -35%',
      description: language === 'FR' ? 'Vol + Hôtel + Activités' : 'Flight + Hotel + Activities',
      tag: language === 'FR' ? 'Complet' : 'Complete'
    },
    {
      title: language === 'FR' ? 'Croisières Luxury' : 'Luxury Cruises',
      discount: language === 'FR' ? 'Jusqu\'à -25%' : 'Up to -25%',
      description: language === 'FR' ? 'Expériences premium' : 'Premium experiences',
      tag: language === 'FR' ? 'Luxe' : 'Luxury'
    }
  ];

  // Composant SearchBar
  const SearchBar = () => {
    const handleSearch = () => {
      if (destination.trim()) {
        navigate(`/search?destination=${encodeURIComponent(destination)}&type=${searchType}`);
      }
    };

    const incrementTraveler = (type) => {
      setTravelers(prev => ({
        ...prev,
        [type]: Math.min(prev[type] + 1, type === 'adults' ? 10 : type === 'children' ? 8 : 5)
      }));
    };

    const decrementTraveler = (type) => {
      setTravelers(prev => ({
        ...prev,
        [type]: Math.max(prev[type] - 1, type === 'adults' ? 1 : 0)
      }));
    };

    const travelerText = () => {
      const { adults, children, rooms } = travelers;
      if (language === "FR") {
        return `${adults} adulte${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} enfant${children > 1 ? 's' : ''}` : ''}${rooms > 1 ? `, ${rooms} chambres` : ''}`;
      }
      return `${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}${rooms > 1 ? `, ${rooms} rooms` : ''}`;
    };

    // Types de voyage avec icônes
    const travelTypes = [
      { key: 'stays', label: t.searchTabs.stays, icon: <Hotel className="w-4 h-4 mr-2" /> },
      { key: 'flights', label: t.searchTabs.flights, icon: <Plane className="w-4 h-4 mr-2" /> },
      { key: 'cars', label: t.searchTabs.cars, icon: <Car className="w-4 h-4 mr-2" /> },
      { key: 'packages', label: t.searchTabs.packages, icon: <Package className="w-4 h-4 mr-2" /> },
      { key: 'thingsToDo', label: t.searchTabs.thingsToDo, icon: <MapPin className="w-4 h-4 mr-2" /> },
      { key: 'destinations', label: t.searchTabs.destinations, icon: <Hotel className="w-4 h-4 mr-2" /> },

    ];

    return (
      <div className="w-full max-w-6xl mx-auto">
        {/* Onglets */}
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

        {/* Barre de recherche principale */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Destination */}
            <div className="lg:col-span-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.searchPlaceholders.destination}
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
                    {t.searchPlaceholders.checkIn}
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
                    {t.searchPlaceholders.checkOut}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.searchPlaceholders.travelers}
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

                {/* Modal voyageurs */}
                {showTravelerModal && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            {t.travelerOptions.adults}
                          </div>
                          <div className="text-sm text-gray-500">
                            {t.travelerOptions.adultsDesc}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => decrementTraveler('adults')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{travelers.adults}</span>
                          <button
                            onClick={() => incrementTraveler('adults')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            {t.travelerOptions.children}
                          </div>
                          <div className="text-sm text-gray-500">
                            {t.travelerOptions.childrenDesc}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => decrementTraveler('children')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{travelers.children}</span>
                          <button
                            onClick={() => incrementTraveler('children')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            {t.travelerOptions.rooms}
                          </div>
                          <div className="text-sm text-gray-500">
                            {t.travelerOptions.roomsDesc}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => decrementTraveler('rooms')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{travelers.rooms}</span>
                          <button
                            onClick={() => incrementTraveler('rooms')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

      
      
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

            {/* Bouton recherche */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2 invisible">
                {t.searchPlaceholders.search}
              </label>
              <button
                onClick={handleSearch}
                className="w-full  py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center group"
              >
                <Search className="w-5 h-5 mr-2" />
                {t.searchPlaceholders.search}
              </button>
            </div>
          </div>

          {/* Options supplémentaires */}
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
      </div>
    );
  };
  
  // Composant Destination Card
  const DestinationCard = ({ destination }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
      <div className="h-64 relative overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
          <Heart className="w-5 h-5 text-white" />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(destination.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-white text-sm">{destination.rating}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
          <p className="text-white/90">{destination.price}</p>
        </div>
      </div>
      <div className="p-6">
        <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors group-hover:bg-blue-100">
          {t.popularDestinations.viewDeals} →
        </button>
      </div>
    </div>
  );

  // Composant Deal Card
  const DealCard = ({ deal }) => (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{deal.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{deal.description}</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {deal.tag}
        </span>
      </div>
      <div className="text-3xl font-bold text-blue-600 mb-6">{deal.discount}</div>
      <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-medium border border-blue-200 hover:bg-blue-50 transition-colors">
        {language === 'FR' ? 'Découvrir' : 'Discover'} →
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec overlay */}
      <div className="relative min-h-screen">
        {/* Background avec overlay */}
        <div className="absolute inset-0 bg-gradient-to-r ">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920')] bg-cover bg-center "></div>

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
            
            {/* Barre de recherche */}
            <SearchBar />
            
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
        <PopularTouristSites />


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne gauche : Hébergements récents et recommandations */}
            <div className="lg:col-span-2">
              {/* Hébergements récemment consultés */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.recentlyViewed.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentProperties.map((property, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                      <div className="h-48 bg-gray-300">
                        <img 
                          src={property.image} 
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-lg mb-2">{property.name}</h4>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center text-yellow-500">
                            <Star size={16} fill="currentColor" />
                            <span className="ml-1 font-bold">{property.rating}</span>
                          </div>
                          <span className="text-gray-600">({property.reviewCount} {t.reviews})</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-2xl font-bold text-gray-800">{property.price}</span>
                            <span className="text-gray-600 ml-1">{t.recentlyViewed.perNight}</span>
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            {t.recentlyViewed.viewDetails}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommandations */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{t.recommendations.title}</h3>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    {t.recommendations.seeAll}
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {recommendedStays.map((stay, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img 
                            src={stay.image} 
                            alt={stay.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-xl mb-1">{stay.name}</h4>
                              <div className="flex items-center space-x-2 mb-2">
                                <MapPin size={16} className="text-gray-400" />
                                <span className="text-gray-600">{stay.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className={`px-3 py-1 rounded-full ${
                                      stay.rating === 'Superbe' || stay.rating === 'Wonderful' 
                                        ? 'bg-green-100 text-green-800'
                                        : stay.rating === 'Excellent' 
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-purple-100 text-purple-800'
                                    }`}>
                                  <span className="font-medium">{stay.rating} ({stay.ratingCount})</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              {stay.originalPrice && (
                                <span className="text-gray-500 line-through text-sm">{stay.originalPrice}</span>
                              )}
                              <div className="text-2xl font-bold text-gray-800">{stay.price}</div>
                              <div className="text-gray-600 text-sm">{stay.perNight}</div>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-gray-600">{stay.total}</p>
                                <p className="text-gray-500 text-sm">{stay.dates}</p>
                              </div>
                              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                {t.book}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne droite : Offres et destinations */}
            <div className="space-y-8">
              {/* Bundle & Save */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Package size={32} className="mr-3" />
                  <h3 className="text-xl font-bold">{t.bundleSave.title}</h3>
                </div>
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.bundleSave.description }} />
                <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                  {t.bundleSave.button}
                </button>
              </div>

              {/* Plus de vols */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Plane size={32} className="text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{t.moreFlights.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{t.moreFlights.description}</p>
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  {t.moreFlights.button}
                </button>
              </div>

              {/* Aventure Disney */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">{t.disneyAdventure.title}</h3>
                <p className="mb-4">{t.disneyAdventure.description}</p>
                <button className="w-full bg-white text-pink-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                  {t.disneyAdventure.button}
                </button>
              </div>

            
            </div>
          </div>
 <section>
            <PopularFlights />
          </section>

        <TouristSiteCards />


         

          {/* Section Marketplace */}
          <section>
            <Marketplace />
          </section>
          {/* Features Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.items.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow">
                  <div className="inline-flex p-4 bg-blue-100 rounded-xl text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section ElementsPopulaire */}
          <ElementsPopulaire 
            title={t.popularDestinations.title}
            seeAllLink="/destinations"
          />
          {/* Section InfoGlobush */}
          <InfoGlobush />

          {/* Section OneKeyCash */}
          {/* <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="flex items-center mb-2">
                  <Shield size={32} className="mr-3" />
                  <h3 className="text-2xl font-bold">{t.oneKeyCash.title}</h3>
                </div>
                <p className="text-lg mb-1">{t.oneKeyCash.earnings}</p>
                <p className="text-3xl font-bold">{t.oneKeyCash.amount}</p>
                <p className="text-sm opacity-90 mt-2">{t.oneKeyCash.terms}</p>
              </div>
              <button className="mt-6 md:mt-0 bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                {t.oneKeyCash.button}
              </button>
            </div>
          </div> */}

          {/* CTA Section */}
          <section className="py-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-xl opacity-90 mb-8">{t.cta.subtitle}</p>
              <Link to={"/journeys"} className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
                {t.cta.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
);}