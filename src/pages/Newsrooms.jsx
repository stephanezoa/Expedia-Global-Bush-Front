// src/pages/Newsrooms.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Newspaper, Calendar, User, Tag, ChevronRight,
  ExternalLink, Share2, Heart, MessageSquare,
  Globe, TrendingUp, Award, Plane, Hotel, Car, Mail, Phone
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Newsrooms() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedArticles, setLikedArticles] = useState(new Set());

  // Contenu bilingue
  const content = {
    FR: {
      title: "Espace Presse & Actualités",
      subtitle: "Découvrez les dernières nouvelles, communiqués de presse et événements de Global Bush Travel",
      
      // Catégories
      categories: [
        { id: "all", name: "Toutes les actualités" },
        { id: "press", name: "Communiqués de presse" },
        { id: "events", name: "Événements" },
        { id: "awards", name: "Récompenses" },
        { id: "industry", name: "Actualités du secteur" },
        { id: "tips", name: "Conseils voyage" }
      ],
      
      // Articles
      articles: [
        {
          id: 1,
          title: "Global Bush Travel étend ses services à 5 nouvelles destinations africaines",
          excerpt: "Notre agence annonce l'expansion de ses services vers le Rwanda, la Tanzanie, le Ghana, le Sénégal et la Côte d'Ivoire.",
          content: "Global Bush Travel, leader du tourisme au Cameroun, annonce aujourd'hui l'expansion significative de son réseau avec l'ouverture de services vers cinq nouvelles destinations africaines. Cette expansion stratégique permettra à nos clients de découvrir les merveilles du Rwanda, de la Tanzanie, du Ghana, du Sénégal et de la Côte d'Ivoire avec la même qualité de service qui a fait notre réputation.",
          date: "15 janvier 2024",
          category: "press",
          author: "Jean Dupont",
          readTime: "3 min",
          likes: 42,
          comments: 12,
          tags: ["Expansion", "Afrique", "Nouvelles destinations"],
          featured: true
        },
        {
          id: 2,
          title: "Meilleure agence de voyage 2023 - Prix d'excellence IATA",
          excerpt: "Global Bush Travel reçoit le prestigieux prix d'excellence IATA pour la qualité de ses services.",
          content: "Pour la troisième année consécutive, Global Bush Travel a été honorée du prix d'excellence IATA, reconnaissant notre engagement envers des services de voyage exceptionnels. Ce prix récompense notre innovation, notre service client et notre contribution au développement du tourisme au Cameroun.",
          date: "10 décembre 2023",
          category: "awards",
          author: "Marie Martin",
          readTime: "2 min",
          likes: 89,
          comments: 24,
          tags: ["Récompense", "IATA", "Excellence"],
          featured: true
        },
        {
          id: 3,
          title: "Événement : Salon du Tourisme de Douala 2024",
          excerpt: "Retrouvez-nous au prochain Salon du Tourisme de Douala du 20 au 24 mars 2024.",
          content: "Global Bush Travel sera présente au Salon International du Tourisme de Douala 2024. Venez découvrir nos dernières offres exclusives, participer à nos conférences sur le voyage responsable et rencontrer nos experts voyages. Stand B12, Hall principal.",
          date: "5 février 2024",
          category: "events",
          author: "Paul Événementiel",
          readTime: "1 min",
          likes: 31,
          comments: 8,
          tags: ["Salon", "Événement", "Douala"],
          featured: false
        },
        {
          id: 4,
          title: "Les 10 destinations les plus populaires en 2024 selon nos données",
          excerpt: "Découvrez les destinations qui ont séduit nos voyageurs cette année.",
          content: "Basé sur nos données de réservation, voici le top 10 des destinations les plus prisées en 2024 : 1. Paris, France 2. Dubaï, Émirats Arabes Unis 3. Bali, Indonésie 4. Tokyo, Japon 5. New York, USA 6. Le Cap, Afrique du Sud 7. Marrakech, Maroc 8. Bangkok, Thaïlande 9. Rome, Italie 10. Zanzibar, Tanzanie.",
          date: "25 janvier 2024",
          category: "industry",
          author: "Sophie Analyse",
          readTime: "4 min",
          likes: 67,
          comments: 18,
          tags: ["Tendances", "Destinations", "Statistiques"],
          featured: false
        },
        {
          id: 5,
          title: "Conseils pour voyager léger et efficace",
          excerpt: "Notre guide complet pour optimiser votre valise et voyager sans stress.",
          content: "Voyager léger est un art. Découvrez nos conseils d'experts pour choisir les bons vêtements, organiser votre valise efficacement et éviter les frais de bagages supplémentaires. Apprenez à prioriser l'essentiel tout en gardant du style et du confort.",
          date: "18 janvier 2024",
          category: "tips",
          author: "Lucie Voyage",
          readTime: "5 min",
          likes: 53,
          comments: 15,
          tags: ["Conseils", "Voyage léger", "Organisation"],
          featured: false
        },
        {
          id: 6,
          title: "Partenariat stratégique avec Air France",
          excerpt: "Nouvel accord de partenariat pour des tarifs exclusifs sur les vols long-courriers.",
          content: "Global Bush Travel est fier d'annoncer un nouveau partenariat stratégique avec Air France. Cet accord permettra à nos clients de bénéficier de tarifs exclusifs, d'options de bagages supplémentaires et d'un service prioritaire sur tous les vols Air France au départ de Douala.",
          date: "12 janvier 2024",
          category: "press",
          author: "Pierre Partenariats",
          readTime: "2 min",
          likes: 45,
          comments: 9,
          tags: ["Partenariat", "Air France", "Vols"],
          featured: false
        }
      ],
      
      // Textes
      allArticles: "Tous les articles",
      readMore: "Lire la suite",
      share: "Partager",
      like: "J'aime",
      comment: "Commenter",
      minutesRead: "min de lecture",
      writtenBy: "Écrit par",
      featuredArticle: "Article à la une",
      latestNews: "Dernières actualités",
      pressKit: "Kit presse",
      mediaContact: "Contact presse",
      download: "Télécharger",
      
      // Contact presse
      pressContact: "Pour les demandes des médias :",
      pressEmail: "presse@globalbushtravel.com",
      pressPhone: "+237 233 477 001",
      
      // Statistiques
      stats: [
        { label: "Articles publiés", value: "156", icon: Newspaper },
        { label: "Prix remportés", value: "24", icon: Award },
        { label: "Événements annuels", value: "36", icon: Calendar },
        { label: "Pays couverts", value: "47", icon: Globe }
      ]
    },
    
    EN: {
      title: "Newsroom & Press",
      subtitle: "Discover the latest news, press releases, and events from Global Bush Travel",
      
      // Categories
      categories: [
        { id: "all", name: "All News" },
        { id: "press", name: "Press Releases" },
        { id: "events", name: "Events" },
        { id: "awards", name: "Awards" },
        { id: "industry", name: "Industry News" },
        { id: "tips", name: "Travel Tips" }
      ],
      
      // Articles
      articles: [
        {
          id: 1,
          title: "Global Bush Travel Expands Services to 5 New African Destinations",
          excerpt: "Our agency announces the expansion of its services to Rwanda, Tanzania, Ghana, Senegal, and Ivory Coast.",
          content: "Global Bush Travel, Cameroon's tourism leader, announces today the significant expansion of its network with the opening of services to five new African destinations. This strategic expansion will allow our clients to discover the wonders of Rwanda, Tanzania, Ghana, Senegal, and Ivory Coast with the same quality of service that has built our reputation.",
          date: "January 15, 2024",
          category: "press",
          author: "John Smith",
          readTime: "3 min",
          likes: 42,
          comments: 12,
          tags: ["Expansion", "Africa", "New destinations"],
          featured: true
        },
        {
          id: 2,
          title: "Best Travel Agency 2023 - IATA Excellence Award",
          excerpt: "Global Bush Travel receives the prestigious IATA Excellence Award for service quality.",
          content: "For the third consecutive year, Global Bush Travel has been honored with the IATA Excellence Award, recognizing our commitment to exceptional travel services. This award rewards our innovation, customer service, and contribution to tourism development in Cameroon.",
          date: "December 10, 2023",
          category: "awards",
          author: "Mary Martin",
          readTime: "2 min",
          likes: 89,
          comments: 24,
          tags: ["Award", "IATA", "Excellence"],
          featured: true
        },
        {
          id: 3,
          title: "Event: Douala Tourism Fair 2024",
          excerpt: "Join us at the next Douala Tourism Fair from March 20-24, 2024.",
          content: "Global Bush Travel will be present at the International Tourism Fair of Douala 2024. Come discover our latest exclusive offers, participate in our conferences on responsible travel, and meet our travel experts. Stand B12, Main Hall.",
          date: "February 5, 2024",
          category: "events",
          author: "Paul Events",
          readTime: "1 min",
          likes: 31,
          comments: 8,
          tags: ["Fair", "Event", "Douala"],
          featured: false
        },
        {
          id: 4,
          title: "Top 10 Most Popular Destinations in 2024 According to Our Data",
          excerpt: "Discover the destinations that captivated our travelers this year.",
          content: "Based on our booking data, here are the top 10 most sought-after destinations in 2024: 1. Paris, France 2. Dubai, UAE 3. Bali, Indonesia 4. Tokyo, Japan 5. New York, USA 6. Cape Town, South Africa 7. Marrakech, Morocco 8. Bangkok, Thailand 9. Rome, Italy 10. Zanzibar, Tanzania.",
          date: "January 25, 2024",
          category: "industry",
          author: "Sophia Analytics",
          readTime: "4 min",
          likes: 67,
          comments: 18,
          tags: ["Trends", "Destinations", "Statistics"],
          featured: false
        },
        {
          id: 5,
          title: "Tips for Light and Efficient Travel",
          excerpt: "Our complete guide to optimize your luggage and travel stress-free.",
          content: "Traveling light is an art. Discover our expert tips for choosing the right clothes, organizing your suitcase efficiently, and avoiding extra baggage fees. Learn to prioritize essentials while keeping style and comfort.",
          date: "January 18, 2024",
          category: "tips",
          author: "Lucy Travel",
          readTime: "5 min",
          likes: 53,
          comments: 15,
          tags: ["Tips", "Light travel", "Organization"],
          featured: false
        },
        {
          id: 6,
          title: "Strategic Partnership with Air France",
          excerpt: "New partnership agreement for exclusive rates on long-haul flights.",
          content: "Global Bush Travel is proud to announce a new strategic partnership with Air France. This agreement will allow our clients to benefit from exclusive rates, additional baggage options, and priority service on all Air France flights departing from Douala.",
          date: "January 12, 2024",
          category: "press",
          author: "Peter Partnerships",
          readTime: "2 min",
          likes: 45,
          comments: 9,
          tags: ["Partnership", "Air France", "Flights"],
          featured: false
        }
      ],
      
      // Texts
      allArticles: "All Articles",
      readMore: "Read more",
      share: "Share",
      like: "Like",
      comment: "Comment",
      minutesRead: "min read",
      writtenBy: "Written by",
      featuredArticle: "Featured Article",
      latestNews: "Latest News",
      pressKit: "Press Kit",
      mediaContact: "Media Contact",
      download: "Download",
      
      // Press contact
      pressContact: "For media inquiries:",
      pressEmail: "press@globalbushtravel.com",
      pressPhone: "+237 233 477 001",
      
      // Statistics
      stats: [
        { label: "Articles published", value: "156", icon: Newspaper },
        { label: "Awards won", value: "24", icon: Award },
        { label: "Annual events", value: "36", icon: Calendar },
        { label: "Countries covered", value: "47", icon: Globe }
      ]
    }
  };

  const t = content[language] || content.FR;
  
  const filteredArticles = selectedCategory === "all" 
    ? t.articles 
    : t.articles.filter(article => article.category === selectedCategory);

  const featuredArticle = t.articles.find(article => article.featured) || t.articles[0];
  const latestArticles = t.articles.filter(article => !article.featured).slice(0, 3);

  const handleLike = (articleId) => {
    const newLiked = new Set(likedArticles);
    if (newLiked.has(articleId)) {
      newLiked.delete(articleId);
    } else {
      newLiked.add(articleId);
    }
    setLikedArticles(newLiked);
  };

  const handleShare = (title, url) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${title} - ${window.location.href}`);
      alert(language === 'FR' ? 'Lien copié dans le presse-papier' : 'Link copied to clipboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Newspaper className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {t.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Featured Article */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              {t.featuredArticle}
            </h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-bold rounded-full">
              {language === 'FR' ? 'À la une' : 'Featured'}
            </span>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Tag className="w-4 h-4 mr-2" />
                  {t.categories.find(c => c.id === featuredArticle.category)?.name}
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredArticle.date}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-gray-700 mb-6">
                  {featuredArticle.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    {t.writtenBy} {featuredArticle.author}
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.readTime} {t.minutesRead}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handleLike(featuredArticle.id)}
                      className={`flex items-center ${likedArticles.has(featuredArticle.id) ? 'text-red-500' : 'text-gray-500'}`}
                    >
                      <Heart className={`w-5 h-5 ${likedArticles.has(featuredArticle.id) ? 'fill-current' : ''}`} />
                      <span className="ml-1">{featuredArticle.likes}</span>
                    </button>
                    
                    <button className="flex items-center text-gray-500">
                      <MessageSquare className="w-5 h-5" />
                      <span className="ml-1">{featuredArticle.comments}</span>
                    </button>
                    
                    <button 
                      onClick={() => handleShare(featuredArticle.title)}
                      className="flex items-center text-gray-500"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{language === 'FR' ? 'Mots-clés' : 'Keywords'}</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredArticle.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-white text-blue-600 text-sm rounded-full border border-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:opacity-90 transition flex items-center justify-center">
                    {t.readMore}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">{t.allArticles}</h3>
          <div className="flex flex-wrap gap-2">
            {t.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition ${selectedCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.slice(0, 6).map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">
                    {t.categories.find(c => c.id === article.category)?.name}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div>{article.readTime} {t.minutesRead}</div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleLike(article.id)}
                      className={`flex items-center ${likedArticles.has(article.id) ? 'text-red-500' : 'text-gray-500'}`}
                    >
                      <Heart className={`w-4 h-4 ${likedArticles.has(article.id) ? 'fill-current' : ''}`} />
                      <span className="ml-1 text-xs">{article.likes}</span>
                    </button>
                    
                    <button className="flex items-center text-gray-500">
                      <MessageSquare className="w-4 h-4" />
                      <span className="ml-1 text-xs">{article.comments}</span>
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => handleShare(article.title)}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                
                <button className="w-full mt-4 py-2 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
                  {t.readMore}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Press Contact Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t.mediaContact}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">{t.pressContact}</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">{t.pressEmail}</div>
                      <div className="text-sm text-gray-600">{language === 'FR' ? 'Email presse' : 'Press email'}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">{t.pressPhone}</div>
                      <div className="text-sm text-gray-600">{language === 'FR' ? 'Ligne presse' : 'Press line'}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">{t.pressKit}</h4>
                <p className="text-gray-600 mb-6">
                  {language === 'FR' 
                    ? 'Téléchargez notre kit presse complet contenant logos, photos haute résolution et informations sur l\'entreprise.'
                    : 'Download our complete press kit containing logos, high-resolution photos, and company information.'}
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:opacity-90 transition flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {t.download} PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Newspaper className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              {language === 'FR' ? 'Restez informé' : 'Stay Informed'}
            </h3>
            <p className="opacity-90 mb-6">
              {language === 'FR' 
                ? 'Inscrivez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail.'
                : 'Subscribe to our newsletter to receive the latest news directly in your inbox.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'FR' ? 'Votre adresse email' : 'Your email address'}
                className="flex-grow px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition">
                {language === 'FR' ? 'S\'inscrire' : 'Subscribe'}
              </button>
            </div>
            
            <p className="text-sm opacity-80 mt-4">
              {language === 'FR' 
                ? 'Nous respectons votre vie privée. Désinscription à tout moment.'
                : 'We respect your privacy. Unsubscribe at any time.'}
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}