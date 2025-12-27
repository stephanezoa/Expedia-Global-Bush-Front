// src/components/Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Globe, 
  ChevronDown, 
  Bell, 
  Heart, 
  Menu,
  X,
  Plane,
  Hotel,
  Car,
  Briefcase,
  User,
  Shield,
  MapPin,
  Phone,
  Mail,
  Search,
  LogOut,
  User as UserIcon,
  Calendar,
  Settings,
  HelpCircle,
  Award,
  Clock,
  CreditCard,
  Star
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import ShopDropdown from "./ShopDropdown";

// Contenu de traduction
const content = {
  FR: {
    phone: "+237 677 24 66 24",
    location: "Douala, Carrefour Eto'o Bonamoussadi",
    certified: "Agence de voyage certifiée",
    email: "contact@globalbush.cm",
    flights: "Vols",
    hotels: "Hôtels",
    cars: "Voitures de location",
    stays: "Séjours",
    tourism: "Tourisme",
    destination: "Destinations",
    packages: "Packages",
    cruises: "Croisières",
    activities: "Activités",
    flightsTitle: "Réserver un vol",
    hotelsTitle: "Trouver un hôtel",
    carsTitle: "Louer une voiture",
    privacy: "Confidentialité",
    favorites: "Favoris",
    notifications: "Notifications",
    profile: "Mon profil",
    reservations: "Mes réservations",
    settings: "Paramètres",
    help: "Aide",
    logout: "Déconnexion",
    secureBooking: "Réservation 100% sécurisée",
    bestPrice: "Meilleur prix garanti",
    support24: "Support 24/7",
    loyalty: "Programme fidélité",
    francCfa: "Franc CFA",
    euro: "Euro",
    usd: "Dollar US",
    gbp: "Livre Sterling",
    french: "Français",
    english: "English",
    spanish: "Español",
    language: "Langue",
    currency: "Devise",
    menu: "Menu",
    preferences: "Préférences",
    welcome: "Bienvenue",
    quickLinks: "Accès rapide",
    allDestinations: "Toutes les destinations",
    deals: "Promotions",
    lastMinute: "Last Minute",
    weekend: "Week-end",
    business: "Voyage d'affaires",
    family: "Voyage en famille",
    luxury: "Luxe",
    budget: "Économique",
    searchPlaceholder: "Rechercher une destination, un hôtel...",
    agentConnect: "Espace agent",
    travelGuide: "Guide voyage"
  },
  
  EN: {
    phone: "+237 677 24 66 24",
    location: "Douala, Carrefour Eto'o Bonamoussadi",
    certified: "Certified travel agency",
    email: "contact@globalbush.cm",
    flights: "Flights",
    hotels: "Hotels",
    cars: "Car rentals",
    stays: "Stays",
    tourism: "Tourism",
    destination: "Destinations",
    packages: "Packages",
    cruises: "Cruises",
    activities: "Activities",
    flightsTitle: "Book a flight",
    hotelsTitle: "Find a hotel",
    carsTitle: "Rent a car",
    privacy: "Privacy",
    favorites: "Favorites",
    notifications: "Notifications",
    profile: "My profile",
    reservations: "My reservations",
    settings: "Settings",
    help: "Help",
    logout: "Logout",
    secureBooking: "100% secure booking",
    bestPrice: "Best price guaranteed",
    support24: "24/7 support",
    loyalty: "Loyalty program",
    francCfa: "CFA Franc",
    euro: "Euro",
    usd: "US Dollar",
    gbp: "British Pound",
    french: "Français",
    english: "English",
    spanish: "Español",
    language: "Language",
    currency: "Currency",
    menu: "Menu",
    preferences: "Preferences",
    welcome: "Welcome",
    quickLinks: "Quick links",
    allDestinations: "All destinations",
    deals: "Deals",
    lastMinute: "Last Minute",
    weekend: "Weekend",
    business: "Business travel",
    family: "Family travel",
    luxury: "Luxury",
    budget: "Budget",
    searchPlaceholder: "Search destination, hotel...",
    agentConnect: "Agent portal",
    travelGuide: "Travel guide"
  }
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  
  const { language, changeLanguage } = useLanguage();
  const currentLang = language || "FR";
  const t = content[currentLang] || content.FR;

  // Détecter le scroll pour modifier le header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer les menus au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuOpen && !event.target.closest(".user-menu")) {
        setUserMenuOpen(false);
      }
      if (languageMenuOpen && !event.target.closest(".language-menu")) {
        setLanguageMenuOpen(false);
      }
      if (currencyMenuOpen && !event.target.closest(".currency-menu")) {
        setCurrencyMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuOpen, languageMenuOpen, currencyMenuOpen]);

  // Navigation principale
  const mainNavigation = [
    { name: t.flights, href: "/vols", icon: Plane, title: t.flightsTitle, color: "text-blue-600", bgColor: "bg-blue-50" },
    { name: t.hotels, href: "/hotels", icon: Hotel, title: t.hotelsTitle, color: "text-green-600", bgColor: "bg-green-50" },
    { name: t.cars, href: "/cars", icon: Car, title: t.carsTitle, color: "text-purple-600", bgColor: "bg-purple-50" },
    { name: t.stays, href: "", icon: Briefcase, color: "text-orange-600", bgColor: "bg-orange-50" },
    { name: t.packages, href: "", icon: Briefcase, color: "text-red-600", bgColor: "bg-red-50" },
    { name: t.destination, href: "/destination", icon: MapPin, color: "text-orange-600", bgColor: "bg-orange-50" },

    { name: t.cruises, href: "/journeys", icon: Shield, color: "text-cyan-600", bgColor: "bg-cyan-50" },
  ];

  // Navigation secondaire
  const secondaryNavigation = [
    
  ];

  // Devises
  const currencies = [
    { code: "XAF", name: t.francCfa, symbol: "FCFA" },
    { code: "EUR", name: t.euro, symbol: "€" },
    { code: "USD", name: t.usd, symbol: "$" },
    { code: "GBP", name: t.gbp, symbol: "£" },
  ];

  // Langues
  const languages = [
    { code: "FR", name: t.french, flag: "🇫🇷" },
    { code: "EN", name: t.english, flag: "🇬🇧" },
    { code: "ES", name: t.spanish, flag: "🇪🇸" },
  ];

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];
  const [selectedCurrency, setSelectedCurrency] = useState("XAF");

  const handleLogout = async () => {
    await logout();
    navigate("/");
    setUserMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Top Banner - Annonces importantes */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap">
              <span className="flex items-center space-x-1">
                <Award className="w-3 h-3" />
                <span>{t.certified}</span>
              </span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{t.support24}</span>
              </span>
              <span className="hidden lg:inline">•</span>
              <span className="hidden lg:flex items-center space-x-1">
                <CreditCard className="w-3 h-3" />
                <span>{t.bestPrice}</span>
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <a href={`tel:${t.phone}`} className="flex items-center space-x-1 hover:text-blue-100">
                <Phone className="w-3 h-3" />
                <span>{t.phone}</span>
              </a>
              <span>•</span>
              <a href={`mailto:${t.email}`} className="flex items-center space-x-1 hover:text-blue-100">
                <Mail className="w-3 h-3" />
                <span>{t.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300  ${
        scrolled ? 'bg-white shadow-xl border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto justify-center">
          <div className="h-16 flex items-center justify-between">
            
            {/* Logo et Menu Mobile */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Menu Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
                    GB
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-gray-900 text-lg leading-tight">Global Bush</div>
                  <div className="text-xs text-gray-500 font-medium">Travel & Tourism</div>
                </div>
              </Link>

              {/* ShopDropdown Desktop */}
              <div className="hidden lg:block">
                <ShopDropdown />
              </div>
            </div>

            {/* Barre de recherche Centrale */}
            <div className="hidden lg:block flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Actions Utilisateur */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              
              {/* Favoris */}
              <button
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition relative group"
                aria-label={t.favorites}
              >
                <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-sm">
                  3
                </span>
              </button>

              {/* Notifications */}
              <button
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition relative group"
                aria-label={t.notifications}
              >
                <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-sm">
                  5
                </span>
              </button>

              {/* Devise */}
              <div className="hidden md:block relative currency-menu">
                <button
                  onClick={() => setCurrencyMenuOpen(!currencyMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm font-medium"
                >
                  <span>{selectedCurrency}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${currencyMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {currencyMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 z-50 animate-in slide-in-from-top-2">
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          setSelectedCurrency(curr.code);
                          setCurrencyMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition text-left text-sm ${
                          selectedCurrency === curr.code
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{curr.code}</span>
                          <span className="text-gray-600">{curr.name}</span>
                        </div>
                        <span className="text-gray-500">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Langue */}
              <div className="relative language-menu">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-lg">{currentLanguage.flag}</span>
                  <span className="hidden sm:inline font-medium text-sm">{currentLanguage.code}</span>
                  <ChevronDown className={`w-4 h-4 hidden sm:block transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {languageMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 z-50 animate-in slide-in-from-top-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setLanguageMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition text-left text-sm ${
                          currentLang === lang.code
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {currentLang === lang.code && (
                          <span className="ml-auto text-blue-600">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Menu Utilisateur */}
              <div className="relative user-menu">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold shadow-md">
                    {isAuthenticated ? (
                      user?.fullname?.charAt(0).toUpperCase() ||
                      user?.name?.charAt(0).toUpperCase() ||
                      user?.email?.charAt(0).toUpperCase() || "U"
                    ) : (
                      <UserIcon className="w-5 h-5" />
                    )}
                  </div>
                  {isAuthenticated && (
                    <div className="hidden lg:block text-left">
                      <div className="text-sm font-medium text-gray-900 leading-tight">
                        {user?.fullname || user?.name || t.welcome}
                      </div>
                      <div className="text-xs text-gray-500">{t.loyalty}</div>
                    </div>
                  )}
                  <ChevronDown className={`w-4 h-4 hidden lg:block transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 z-50 animate-in slide-in-from-top-2">
                    {isAuthenticated ? (
                      <>
                        <div className="p-3 border-b border-gray-100">
                          <div className="font-semibold text-gray-900">
                            {user?.fullname || user?.name || t.welcome}
                          </div>
                          <div className="text-sm text-gray-500">{user?.email}</div>
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                              Gold Member
                            </div>
                            <div className="text-xs text-gray-500">• 12,540 pts</div>
                          </div>
                        </div>
                        
                        <div className="py-1">
                          <Link
                            to="/profile"
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <User className="w-4 h-4 text-gray-500" />
                            <span>{t.profile}</span>
                          </Link>
                          
                          <Link
                            to="/reservations"
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span>{t.reservations}</span>
                          </Link>
                          
                          <Link
                            to="/favorites"
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <Heart className="w-4 h-4 text-gray-500" />
                            <span>{t.favorites}</span>
                          </Link>
                          
                          <Link
                            to="/settings"
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <Settings className="w-4 h-4 text-gray-500" />
                            <span>{t.settings}</span>
                          </Link>
                          
                          <div className="border-t border-gray-100 my-1"></div>
                          
                          <button
                            onClick={handleLogout}
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 w-full text-left transition"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>{t.logout}</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="p-3">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mx-auto mb-3">
                            <User className="w-8 h-8 text-blue-600" />
                          </div>
                          <div className="font-semibold text-gray-900">{t.welcome}</div>
                          <div className="text-sm text-gray-500 mt-1">Connectez-vous pour accéder à votre compte</div>
                        </div>
                        
                        <div className="space-y-2">
                          <Link
                            to="/login"
                            className="block w-full text-center bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            {t.login}
                          </Link>
                          
                          <Link
                            to="/register"
                            className="block w-full text-center border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            {t.register}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Principale Desktop */}
          <div className="hidden lg:block border-t border-gray-100 pt-4 pb-2 mx-auto ">
            <div className="flex items-center justify-center">
              {/* Navigation Services */}
              <div className="flex items-center space-x-1">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 group ${item.bgColor} hover:shadow-md`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="font-medium text-gray-800 group-hover:text-gray-900">{item.name}</span>
                   
                  </Link>
                ))}
              </div>

            
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="absolute top-0 left-0 w-80 h-full bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-left-2">
            {/* Header Mobile */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold rounded-xl flex items-center justify-center">
                    GB
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Global Bush</div>
                    <div className="text-xs text-gray-500">Travel & Tourism</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Barre de recherche Mobile */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </form>
            </div>

            {/* Contenu Mobile */}
            <div className="p-4">
              {/* Services Principaux */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {t.quickLinks}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl transition ${item.bgColor} hover:shadow-md`}
                    >
                      <item.icon className={`w-6 h-6 mb-2 ${item.color}`} />
                      <span className="text-sm font-medium text-gray-800 text-center">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Secondaire */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {t.destination}
                </h3>
                <div className="space-y-1">
                  {secondaryNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <item.icon className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-700">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Catégories */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Catégories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[t.lastMinute, t.weekend, t.business, t.family, t.luxury, t.budget].map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Préférences */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {t.preferences}
                </h3>
                
                {/* Devise */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.currency}
                  </label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {currencies.map((curr) => (
                      <option key={curr.code} value={curr.code}>
                        {curr.code} - {curr.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Langue */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.language}
                  </label>
                  <select
                    value={currentLang}
                    onChange={(e) => {
                      changeLanguage(e.target.value);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <a href={`tel:${t.phone}`} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                    <Phone className="w-4 h-4" />
                    <span>{t.phone}</span>
                  </a>
                  <a href={`mailto:${t.email}`} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                    <Mail className="w-4 h-4" />
                    <span>{t.email}</span>
                  </a>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}