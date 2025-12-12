import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Globe, 
  ChevronDown, 
  User, 
  Bell, 
  Heart, 
  Menu,
  X,
  Plane,
  Hotel,
  Briefcase,
  MapPin
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("XAF");
  const [language, setLanguage] = useState("FR");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigation = [
    { name: "Vols", href: "/flights", icon: <Plane className="w-4 h-4" /> },
    { name: "Hôtels", href: "/hotels", icon: <Hotel className="w-4 h-4" /> },
    { name: "Voitures", href: "/cars", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Séjours", href: "/packages", icon: <MapPin className="w-4 h-4" /> },
    { name: "Visas", href: "/visas", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Guides", href: "/guides", icon: <MapPin className="w-4 h-4" /> },
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
      {/* Topbar */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline">📞</span>
                <span className="font-medium">+237 677 24 66 24</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <span>📍</span>
                <span>Douala, Carrefour Eto'o Bonamoussadi</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Agence de voyage certifiée</span>
              </div>
              <a 
                href="mailto:info@globalbushtratour.com" 
                className="hover:text-blue-100 transition"
              >
                ✉️ contact@globalbush.cm
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* HEADER */}
      <header className="z-50 bg-white shadow-lg border-b border-gray-100">

        <div className=" max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">

            {/* Logo + mobile */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
              
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GB</span>
                </div>
                <div className="hidden md:block">
                  
                </div>
              </Link>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group relative"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center space-x-2 md:space-x-4">

              {/* Search */}
              <motion.div
                className="hidden lg:flex relative"
                whileFocus={{ scale: 1.03 }}
              >
                <input
                  type="text"
                  placeholder="Rechercher une destination..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </motion.div>

              {/* Favorites */}
              <motion.button 
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition relative"
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </motion.button>

              {/* Notifications */}
              <motion.button 
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition relative"
                whileTap={{ scale: 0.9 }}
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </motion.button>

              {/* Currency */}
              <div className="hidden md:block relative group">
                <motion.button 
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">{currency}</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50"
                  >
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => setCurrency(curr.code)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition ${
                          currency === curr.code 
                            ? "bg-blue-50 text-blue-600" 
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{curr.code}</span>
                          <span className="text-sm text-gray-600">{curr.name}</span>
                        </div>
                        <span className="text-gray-500">{curr.symbol}</span>
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Language */}
              <div className="relative group">
                <motion.button 
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
                  <span className="font-medium hidden md:inline">{language}</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                          language === lang.code 
                            ? "bg-blue-50 text-blue-600" 
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Auth */}
              {isLoggedIn ? (
                <div className="relative group">
                  <motion.button 
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg shadow-blue-600/30"
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden md:inline font-medium">Mon compte</span>
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50"
                    >
                      <div className="p-3 border-b border-gray-100">
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-gray-500">john@example.com</div>
                      </div>
                      <div className="py-1">
                        {["Mon profil", "Mes réservations", "Mes favoris", "Paramètres", "Déconnexion"].map((item) => (
                          <button
                            key={item}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-blue-600 font-medium hover:text-blue-700 transition"
                  >
                    Connexion
                  </Link>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/register"
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg shadow-blue-600/30"
                    >
                      Inscription
                    </Link>
                  </motion.div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-50 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-800">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 transition"
                  >
                    {item.icon}
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Bottom guarantees */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200 py-3">
        <div className=" max-w-7xl mx-auto ">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Réservation 100% sécurisée</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Meilleur prix garanti</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
