import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, Heart, ChevronRight, Filter, Globe, Clock, Users, TrendingUp, Camera, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pays1 from '../assets/pays1.jpg';
import Footer from '../components/Footer';


      <Footer />


const JourneysPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  // Liste des pays d'Afrique Centrale
  const countries = [
    { code: 'all', name: 'Tous les pays', flag: '🌍' },
    { code: 'cm', name: 'Cameroun', flag: '🇨🇲' },
    { code: 'ga', name: 'Gabon', flag: '🇬🇦' },
    { code: 'cg', name: 'Congo', flag: '🇨🇬' },
    { code: 'cd', name: 'RDC', flag: '🇨🇩' },
    { code: 'cf', name: 'RCA', flag: '🇨🇫' },
    { code: 'gq', name: 'Guinée Équatoriale', flag: '🇬🇶' },
    { code: 'st', name: 'São Tomé-et-Príncipe', flag: '🇸🇹' },
    { code: 'td', name: 'Tchad', flag: '🇹🇩' }
  ];

  // Catégories de sites
  const categories = [
    { id: 'all', name: 'Toutes les catégories', icon: '🌍' },
    { id: 'nature', name: 'Nature & Parcs', icon: '🌳' },
    { id: 'culture', name: 'Culture & Histoire', icon: '🏛️' },
    { id: 'beach', name: 'Plages', icon: '🏖️' },
    { id: 'mountain', name: 'Montagnes', icon: '⛰️' },
    { id: 'wildlife', name: 'Faune Sauvage', icon: '🦁' },
    { id: 'adventure', name: 'Aventure', icon: '🚣' },
    { id: 'city', name: 'Villes', icon: '🏙️' }
  ];

  // Données des sites touristiques
  const touristSites = [
    {
      id: 1,
      name: 'Mont Cameroun',
      country: 'Cameroun',
      countryCode: 'cm',
      category: 'mountain',
      description: 'Le plus haut sommet d\'Afrique de l\'Ouest avec 4 040 m, offrant des randonnées épiques et des vues panoramiques.',
      rating: 4.8,
      reviews: 1245,
      bestSeason: 'Novembre à Février',
      difficulty: 'Modéré à Difficile',
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop',
      highlights: ['Randonnée', 'Volcan actif', 'Vues panoramiques', 'Biodiversité'],
      duration: '2-3 jours',
      featured: true
    },
    {
      id: 2,
      name: 'Parc National de Loango',
      country: 'Gabon',
      countryCode: 'ga',
      category: 'wildlife',
      description: 'Unique parc où vous pouvez voir éléphants, buffles et hippopotames sur la plage.',
      rating: 4.9,
      reviews: 876,
      bestSeason: 'Juin à Septembre',
      difficulty: 'Modéré',
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&auto=format&fit=crop',
      highlights: ['Safari', 'Plages', 'Hippopotames', 'Éléphants'],
      duration: '3-5 jours',
      featured: true
    },
    {
      id: 3,
      name: 'Chutes de la Lobé',
      country: 'Cameroun',
      countryCode: 'cm',
      category: 'nature',
      description: 'Rares chutes d\'eau qui se jettent directement dans l\'océan Atlantique.',
      rating: 4.7,
      reviews: 932,
      bestSeason: 'Toute l\'année',
      difficulty: 'Facile',
      priceRange: '$',
      image: 'https://images.unsplash.com/photo-1512273222628-4daea6e55abb?w=800&auto=format&fit=crop',
      highlights: ['Chutes d\'eau', 'Plage', 'Paysage unique', 'Photographie'],
      duration: '1 jour',
      featured: false
    },
    {
      id: 4,
      name: 'Parc National de la Garamba',
      country: 'RDC',
      countryCode: 'cd',
      category: 'wildlife',
      description: 'Réserve de biosphère UNESCO abritant les derniers rhinocéros blancs du nord.',
      rating: 4.6,
      reviews: 543,
      bestSeason: 'Décembre à Mars',
      difficulty: 'Modéré',
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&auto=format&fit=crop',
      highlights: ['Rhinocéros', 'Safari', 'UNESCO', 'Biodiversité'],
      duration: '4-6 jours',
      featured: false
    },
    {
      id: 5,
      name: 'Île de São Tomé',
      country: 'São Tomé-et-Príncipe',
      countryCode: 'st',
      category: 'beach',
      description: 'Île paradisiaque avec plages de sable noir, forêts tropicales et plantations de cacao.',
      rating: 4.8,
      reviews: 678,
      bestSeason: 'Juin à Septembre',
      difficulty: 'Facile',
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop',
      highlights: ['Plages', 'Cacao', 'Forêt tropicale', 'Plongée'],
      duration: '5-7 jours',
      featured: true
    },
    {
      id: 6,
      name: 'Musée National du Tchad',
      country: 'Tchad',
      countryCode: 'td',
      category: 'culture',
      description: 'Musée abritant des artefacts préhistoriques et culturels de la région du Sahel.',
      rating: 4.4,
      reviews: 321,
      bestSeason: 'Octobre à Mars',
      difficulty: 'Facile',
      priceRange: '$',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&auto=format&fit=crop',
      highlights: ['Histoire', 'Archéologie', 'Culture locale', 'Art'],
      duration: '2-3 heures',
      featured: false
    },
    {
      id: 7,
      name: 'Parc National d\'Odzala-Kokoua',
      country: 'Congo',
      countryCode: 'cg',
      category: 'wildlife',
      description: 'Forêt tropicale abritant gorilles, chimpanzés et éléphants de forêt.',
      rating: 4.9,
      reviews: 754,
      bestSeason: 'Juin à Septembre',
      difficulty: 'Difficile',
      priceRange: '$$$$',
      image: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&auto=format&fit=crop',
      highlights: ['Gorilles', 'Forêt tropicale', 'Aventure', 'Écotourisme'],
      duration: '7-10 jours',
      featured: true
    },
    {
      id: 8,
      name: 'Yaoundé - Ville aux sept collines',
      country: 'Cameroun',
      countryCode: 'cm',
      category: 'city',
      description: 'Capitale politique avec musées, marchés animés et vue panoramique depuis le Mont Fébé.',
      rating: 4.3,
      reviews: 845,
      bestSeason: 'Toute l\'année',
      difficulty: 'Facile',
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&auto=format&fit=crop',
      highlights: ['Ville', 'Culture', 'Nourriture', 'Marchés'],
      duration: '2-3 jours',
      featured: false
    }
  ];

  // Filtrer les sites
  const filteredSites = touristSites.filter(site => {
    const matchesSearch = searchTerm === '' || 
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = selectedCountry === 'all' || site.countryCode === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
    
    return matchesSearch && matchesCountry && matchesCategory;
  });

  // Toggle favori
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

  // Animation d'entrée
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-teal-700 text-white min-h-[400px]" style={{
                      backgroundImage: `url(${Pays1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay'
                  }}>
        
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-emerald-800/50 to-teal-700/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Découvrez l'Afrique Centrale
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Explorez les merveilles naturelles et culturelles des pays du cœur de l'Afrique
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un site touristique..."
                  className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-green-200" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="rgb(240 253 250)" opacity=".25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="rgb(240 253 250)" opacity=".5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="rgb(240 253 250)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredSites.length} Sites Touristiques
              <span className="text-emerald-600 ml-2">• Afrique Centrale</span>
            </h2>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Filtrer par:</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-emerald-500 transition flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filtres
                </button>
              </div>
            </div>
          </div>
          
          {/* Country Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Pays</h3>
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => setSelectedCountry(country.code)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCountry === country.code
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-400'
                  }`}
                >
                  <span className="mr-2">{country.flag}</span>
                  {country.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-medium text-gray-700 mb-3">Catégories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Sites */}
        {filteredSites.filter(s => s.featured).length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                Sites Incontournables
              </h3>
              <Link to="#" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
                Voir tous
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSites
                .filter(site => site.featured)
                .slice(0, 3)
                .map((site) => (
                  <div
                    key={site.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-emerald-300 animate-slide-up"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={site.image}
                        alt={site.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(site.id);
                        }}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
                      >
                        <Heart 
                          className={`w-5 h-5 ${favorites.has(site.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                        />
                      </button>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                          ★ Incontournable
                        </div>
                      </div>
                      
                      {/* Country Flag */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                          <span className="text-lg">{countries.find(c => c.code === site.countryCode)?.flag}</span>
                          <span className="font-medium">{site.country}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition">
                          {site.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="font-bold">{site.rating}</span>
                          <span className="text-sm text-gray-500">({site.reviews})</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{site.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {site.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{site.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{site.priceRange}</span>
                          <span>•</span>
                          <span>{site.difficulty}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => navigate(`/journeys/${site.id}`)}
                        className="w-full mt-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Découvrir</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Sites Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Tous les Sites</h3>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                </div>
              ))}
            </div>
          ) : filteredSites.length === 0 ? (
            <div className="text-center py-12">
              <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Aucun site trouvé</h4>
              <p className="text-gray-600">Essayez de modifier vos filtres ou votre recherche</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSites.map((site) => (
                <div
                  key={site.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-emerald-300 cursor-pointer"
                  onClick={() => navigate(`/journeys/${site.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(site.id);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition opacity-0 group-hover:opacity-100"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.has(site.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                      />
                    </button>
                    
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                        <span className="text-lg">{countries.find(c => c.code === site.countryCode)?.flag}</span>
                        <span>{site.country}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition">
                        {site.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-sm font-bold">{site.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{site.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {site.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{site.duration}</span>
                      </div>
                      <div className="text-emerald-600 font-medium">
                        Meilleure saison: {site.bestSeason}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 mb-2">8</div>
              <div className="text-gray-700">Pays couverts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 mb-2">50+</div>
              <div className="text-gray-700">Sites uniques</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 mb-2">4.7</div>
              <div className="text-gray-700">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 mb-2">10K+</div>
              <div className="text-gray-700">Visiteurs satisfaits</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à explorer l'Afrique Centrale ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez des expériences uniques, des paysages à couper le souffle et une culture riche.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition shadow-lg hover:shadow-xl">
            Commencer l'aventure
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JourneysPage;