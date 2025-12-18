import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  ChevronDown, 
  Bell, 
  Heart, 
  Menu,
  X,
  Plane, // Icône pour Vols
  Hotel, // Icône pour Hôtels
  Car,   // Icône pour Voitures (utilisé 'Car' au lieu de Briefcase)
  Briefcase, // Icône pour Séjours
  UserRound
} from "lucide-react";
import ShopDropdown from "./ShopDropdown"; 
import logoApp from '../assets/logoApp.jpg';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("XAF");
  const [language, setLanguage] = useState("FR");
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Non utilisé, gardé pour référence

  // AJOUT DES ICÔNES POUR LA NAVIGATION MOBILE
  const navigation = [
    { name: "Vols", href: "/vols", icon: Plane },
    { name: "Hôtels", href: "/hotels", icon: Hotel },
    { name: "Voitures", href: "/cars", icon: Car },
    { name: "Séjours", href: "/packages", icon: Briefcase },
  ];

  const currencies = [
    { code: "XAF", name: "Franc CFA", symbol: "FCFA" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "USD", name: "Dollar US", symbol: "$" },
    { code: "GBP", name: "Livre Sterling", symbol: "£" },
  ];

  const languages = [
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "EN", name: "English", flag: "🇬🇧" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
  ];

  return (
    <>
      {/* Topbar (Afficheur d'informations de contact/promo) */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs sm:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-12">
            
            {/* Contact Info (Gauche) */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-sm">📞</span>
                <span className="font-medium whitespace-nowrap">+237 677 24 66 24</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <span>📍</span>
                <span>Douala, Carrefour Eto'o Bonamoussadi</span>
              </div>
            </div>
            
            {/* Certifications & Email (Droite) */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Agence de voyage certifiée</span>
              </div>
              <a 
                href="mailto:info@globalbushtratour.com" 
                className="hover:text-blue-100 transition whitespace-nowrap"
              >
                ✉️ contact@globalbush.cm
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo et Menu Mobile */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition md:hidden"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
              
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-32 sm:w-40 h-auto rounded-xl flex items-center justify-center">
                  <img src={logoApp} alt="Logo " className="w-full h-auto" />
                </div>
              </Link>

              {/* ShopDropdown (Gardé pour le contexte, s'assurer qu'il est réactif) */}
              <div className="hidden sm:block">
                  <ShopDropdown />
              </div>
            </div>

            {/* Navigation Principale (Desktop/Tablet) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group font-medium text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Actions de l'Utilisateur et Sélecteurs */}
            <div className="flex items-center space-x-2 md:space-x-4">

              {/* Sélecteur de Devise */}
              <div className="hidden md:block relative group">
                <button 
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm"
                  aria-label={`Current currency: ${currency}`}
                >
                  <span className="font-medium">{currency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                >
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => setCurrency(curr.code)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition text-left text-sm ${
                        currency === curr.code 
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
              </div>

              {/* Sélecteur de Langue */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  aria-label={`Current language: ${language}`}
                >
                  <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
                  <span className="font-medium hidden sm:inline">{language}</span>
                  <ChevronDown className="w-4 h-4 hidden sm:inline" />
                </button>

                <div
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition text-left text-sm ${
                        language === lang.code 
                          ? "bg-blue-50 text-blue-600 font-semibold" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Icônes de notification (Favoris, Notifications) */}
              <button 
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition relative"
                aria-label="View Favorites"
              >
                <Heart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              <button 
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition relative"
                aria-label="View Notifications"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  5
                </span>
              </button>
              
              {/* Icône de Profil Utilisateur */}
              <button 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition relative"
                aria-label="User Profile"
              >
                <UserRound className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          // Fixed pour couvrir l'écran, z-index élevé (z-50)
          <div className="md:hidden fixed inset-0 z-50"> 
            {/* Contenu du Menu (glisse de la gauche) */}
            <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-2xl p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close Mobile Menu">
                  <X className="w-6 h-6 text-gray-700 hover:text-red-500 transition" />
                </button>
              </div>

              <div className="space-y-2 border-t pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-4 px-3 py-3 rounded-xl text-lg font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                  >
                    {/* Utilisation de l'icône de l'item */}
                    <item.icon className="w-5 h-5" /> 
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Sélecteurs Langue/Devise sur Mobile */}
              <div className="mt-8 pt-4 border-t space-y-3">
                <div className="text-sm font-semibold text-gray-500 mb-2">Préférences</div>
                {/* Sélecteur de Devise Mobile */}
                <div className="border rounded-xl p-3">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Devise</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full bg-white text-gray-700 font-semibold focus:outline-none"
                  >
                    {currencies.map((curr) => (
                      <option key={curr.code} value={curr.code}>
                        {curr.code} - {curr.name} ({curr.symbol})
                      </option>
                    ))}
                  </select>
                </div>
                {/* Sélecteur de Langue Mobile */}
                <div className="border rounded-xl p-3">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Langue</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full bg-white text-gray-700 font-semibold focus:outline-none"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div 
                // className="absolute inset-0 bg-black opacity-20" 
                onClick={() => setMobileMenuOpen(false)}
            ></div>
          </div>
        )}
      </header>

      <div className="hidden md:block bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 sm:space-x-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-green-500 font-bold">✓</span>
              <span>Réservation 100% sécurisée</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-green-500 font-bold">✓</span>
              <span>Meilleur prix garanti</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-green-500 font-bold">✓</span>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}