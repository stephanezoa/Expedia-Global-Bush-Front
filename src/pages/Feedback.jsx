// src/pages/Feedback.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Star, MessageSquare, ThumbsUp, User,
  Calendar, Globe, Heart, Share2,
  Send, Filter, ChevronDown, Award,
  CheckCircle, TrendingUp, Users, Quote
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Feedback() {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [likedReviews, setLikedReviews] = useState(new Set());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    title: "",
    message: "",
    travelType: "leisure",
    destination: ""
  });

  // Contenu bilingue
  const content = {
    FR: {
      title: "Avis & Témoignages",
      subtitle: "Découvrez ce que nos clients disent de leur expérience avec Global Bush Travel",
      
      // Filtres
      filters: [
        { id: "all", name: "Tous les avis" },
        { id: "5-stars", name: "★★★★★" },
        { id: "4-stars", name: "★★★★☆ & plus" },
        { id: "recent", name: "Plus récents" },
        { id: "destinations", name: "Par destination" },
        { id: "verified", name: "Avis vérifiés" }
      ],
      
      // Statistiques
      stats: {
        averageRating: "4.8",
        totalReviews: "1,247",
        satisfactionRate: "96%",
        responseRate: "98%"
      },
      
      // Types de voyage
      travelTypes: [
        { id: "leisure", name: "Loisirs", icon: "🏖️" },
        { id: "business", name: "Affaires", icon: "💼" },
        { id: "family", name: "Famille", icon: "👨‍👩‍👧‍👦" },
        { id: "adventure", name: "Aventure", icon: "🧗" },
        { id: "honeymoon", name: "Lune de miel", icon: "💝" }
      ],
      
      // Avis clients
      reviews: [
        {
          id: 1,
          name: "Sophie Martin",
          location: "Paris, France",
          rating: 5,
          date: "15 janvier 2024",
          title: "Voyage de rêve à Bali",
          content: "Notre voyage à Bali organisé par Global Bush Travel était tout simplement parfait. De la réservation au retour, tout a été impeccable. L'hôtel était magnifique, les excursions bien organisées, et le service client exceptionnel. Je recommande vivement !",
          travelType: "honeymoon",
          destination: "Bali, Indonésie",
          verified: true,
          likes: 42,
          helpful: true,
          response: {
            author: "Équipe Global Bush Travel",
            content: "Merci Sophie pour votre retour ! Nous sommes ravis que votre lune de miel à Bali ait été à la hauteur de vos attentes. Nous espérons vous revoir bientôt pour de nouvelles aventures !",
            date: "16 janvier 2024"
          }
        },
        {
          id: 2,
          name: "Thomas Dubois",
          location: "Lyon, France",
          rating: 4,
          date: "12 janvier 2024",
          title: "Excellent séjour à Dubaï",
          content: "Service professionnel et réactif. Le seul petit bémol : le transfert depuis l'aéroport qui avait un peu de retard. Mais tout le reste était parfait. L'hôtel était incroyable avec une vue imprenable sur Burj Khalifa.",
          travelType: "leisure",
          destination: "Dubaï, Émirats",
          verified: true,
          likes: 28,
          helpful: true,
          response: {
            author: "Équipe Global Bush Travel",
            content: "Merci Thomas pour votre retour constructif. Nous avons pris note de votre remarque concernant le transfert et travaillons avec notre partenaire pour améliorer ce point. Au plaisir de vous revoir !",
            date: "13 janvier 2024"
          }
        },
        {
          id: 3,
          name: "Fatou Diop",
          location: "Dakar, Sénégal",
          rating: 5,
          date: "8 janvier 2024",
          title: "Organisation sans faille",
          content: "Première fois que je fais appel à une agence de voyages et je ne le regrette pas. Tout était parfaitement organisé, du vol à l'hôtel en passant par les activités. Le prix était très compétitif comparé à ce que j'aurais pu organiser seule.",
          travelType: "family",
          destination: "Marrakech, Maroc",
          verified: true,
          likes: 56,
          helpful: true
        },
        {
          id: 4,
          name: "Jean-Luc Bernard",
          location: "Genève, Suisse",
          rating: 5,
          date: "5 janvier 2024",
          title: "Service client exceptionnel",
          content: "Nous avons dû annuler notre voyage à la dernière minute pour raisons personnelles. L'équipe a été très compréhensive et nous a aidés à réorganiser notre voyage pour plus tard sans frais supplémentaires. Service au-delà de nos attentes.",
          travelType: "business",
          destination: "Tokyo, Japon",
          verified: true,
          likes: 34,
          helpful: true,
          response: {
            author: "Équipe Global Bush Travel",
            content: "Merci Jean-Luc. Nous comprenons que des imprévus peuvent survenir et nous sommes là pour vous accompagner. Nous attendons avec impatience votre voyage reporté au Japon !",
            date: "6 janvier 2024"
          }
                },
        {
          id: 5,
          name: "Maria Gonzalez",
          location: "Madrid, Espagne",
          rating: 5,
          date: "3 janvier 2024",
          title: "Meilleure expérience de voyage",
          content: "Voyager avec Global Bush Travel a été une révélation. Le guide local en Thaïlande était incroyablement compétent et passionné. Nous avons découvert des endroits secrets que nous n'aurions jamais trouvés seuls.",
          travelType: "adventure",
          destination: "Phuket, Thaïlande",
          verified: true,
          likes: 47,
          helpful: true
        },
        {
          id: 6,
          name: "Ahmed Al-Farsi",
          location: "Doha, Qatar",
          rating: 5,
          date: "28 décembre 2023",
          title: "Sur mesure et personnalisé",
          content: "J'ai demandé un voyage entièrement personnalisé pour ma famille et l'équipe a créé un itinéraire parfait. Chaque détail était pris en compte, des restaurants aux activités adaptées aux enfants.",
          travelType: "family",
          destination: "Londres, Royaume-Uni",
          verified: true,
          likes: 39,
          helpful: true,
          response: {
            author: "Équipe Global Bush Travel",
            content: "Merci Ahmed ! Créer des expériences sur mesure pour nos clients est notre priorité. Nous sommes ravis que votre famille ait apprécié son séjour à Londres.",
            date: "29 décembre 2023"
          }
        }
      ],
      
      // Sections
      sections: {
        stats: "Statistiques",
        filterReviews: "Filtrer les avis",
        recentReviews: "Avis récents",
        writeReview: "Donnez votre avis",
        whyTrust: "Pourquoi nous faire confiance"
      },
      
      // Labels formulaire
      formLabels: {
        yourExperience: "Partagez votre expérience",
        name: "Votre nom",
        email: "Votre email",
        rating: "Note",
        title: "Titre de votre avis",
        message: "Votre avis détaillé",
        travelType: "Type de voyage",
        destination: "Destination visitée",
        submit: "Publier votre avis",
        optional: "(optionnel)",
        terms: "En publiant votre avis, vous acceptez nos conditions d'utilisation"
      },
      
      // Placeholders
      placeholders: {
        name: "Ex: Marie Dupont",
        email: "votre@email.com",
        title: "Ex: Excellent séjour à Paris",
        message: "Décrivez votre expérience en détail...",
        destination: "Ex: New York, États-Unis"
      },
      
      // Avantages
      trustPoints: [
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "Avis vérifiés",
          description: "Tous les avis proviennent de clients réels ayant voyagé avec nous"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Destinations mondiales",
          description: "Retours d'expérience de voyageurs du monde entier"
        },
        {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "Réponses garanties",
          description: "Notre équipe répond à tous les avis sous 48h"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Amélioration continue",
          description: "Vos retours nous aident à améliorer nos services"
        }
      ]
    },
    EN: {
      title: "Reviews & Testimonials",
      subtitle: "Discover what our clients say about their experience with Global Bush Travel",
      
      filters: [
        { id: "all", name: "All reviews" },
        { id: "5-stars", name: "★★★★★" },
        { id: "4-stars", name: "★★★★☆ & above" },
        { id: "recent", name: "Most recent" },
        { id: "destinations", name: "By destination" },
        { id: "verified", name: "Verified reviews" }
      ],
      
      stats: {
        averageRating: "4.8",
        totalReviews: "1,247",
        satisfactionRate: "96%",
        responseRate: "98%"
      },
      
      travelTypes: [
        { id: "leisure", name: "Leisure", icon: "🏖️" },
        { id: "business", name: "Business", icon: "💼" },
        { id: "family", name: "Family", icon: "👨‍👩‍👧‍👦" },
        { id: "adventure", name: "Adventure", icon: "🧗" },
        { id: "honeymoon", name: "Honeymoon", icon: "💝" }
      ],
      
      sections: {
        stats: "Statistics",
        filterReviews: "Filter reviews",
        recentReviews: "Recent reviews",
        writeReview: "Share your experience",
        whyTrust: "Why trust us"
      },
      
      formLabels: {
        yourExperience: "Share your experience",
        name: "Your name",
        email: "Your email",
        rating: "Rating",
        title: "Review title",
        message: "Your detailed review",
        travelType: "Travel type",
        destination: "Destination visited",
        submit: "Publish your review",
        optional: "(optional)",
        terms: "By publishing your review, you accept our terms of use"
      },
      
      placeholders: {
        name: "Ex: John Smith",
        email: "your@email.com",
        title: "Ex: Amazing stay in Paris",
        message: "Describe your experience in detail...",
        destination: "Ex: New York, USA"
      },
      
      trustPoints: [
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "Verified Reviews",
          description: "All reviews come from real clients who traveled with us"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Destinations",
          description: "Feedback from travelers worldwide"
        },
        {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "Guaranteed Responses",
          description: "Our team responds to all reviews within 48h"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Continuous Improvement",
          description: "Your feedback helps us improve our services"
        }
      ]
    }
  };

  const t = content[language];
  const reviews = t.reviews || content.FR.reviews;

  // Fonctions
  const handleLikeReview = (reviewId) => {
    const newLikedReviews = new Set(likedReviews);
    if (newLikedReviews.has(reviewId)) {
      newLikedReviews.delete(reviewId);
    } else {
      newLikedReviews.add(reviewId);
    }
    setLikedReviews(newLikedReviews);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert(language === "FR" 
      ? "Merci pour votre avis ! Il sera publié après modération." 
      : "Thank you for your review! It will be published after moderation."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      rating: 5,
      title: "",
      message: "",
      travelType: "leisure",
      destination: ""
    });
  };

  // Filtrer les avis
  const filteredReviews = reviews.filter(review => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "5-stars") return review.rating === 5;
    if (selectedFilter === "4-stars") return review.rating >= 4;
    if (selectedFilter === "verified") return review.verified;
    return true;
  });

  // Rendu des étoiles
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.sections.stats}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                {renderStars(5)}
                <span className="ml-2 text-2xl font-bold text-gray-900">{t.stats.averageRating}</span>
              </div>
              <p className="text-gray-600">{language === "FR" ? "Note moyenne" : "Average Rating"}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">{t.stats.totalReviews}</span>
              </div>
              <p className="text-gray-600">{language === "FR" ? "Avis clients" : "Customer Reviews"}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <ThumbsUp className="w-8 h-8 text-green-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">{t.stats.satisfactionRate}</span>
              </div>
              <p className="text-gray-600">{language === "FR" ? "Taux de satisfaction" : "Satisfaction Rate"}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <MessageSquare className="w-8 h-8 text-purple-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">{t.stats.responseRate}</span>
              </div>
              <p className="text-gray-600">{language === "FR" ? "Taux de réponse" : "Response Rate"}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche: Filtres et formulaire */}
          <div className="lg:col-span-1 space-y-8">
            {/* Filtres */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                {t.sections.filterReviews}
              </h3>
              <div className="space-y-2">
                {t.filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedFilter === filter.id
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Types de voyage */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "FR" ? "Types de voyage" : "Travel Types"}
              </h3>
              <div className="space-y-3">
                {t.travelTypes.map(type => (
                  <div
                    key={type.id}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                      formData.travelType === type.id
                        ? 'bg-blue-50 border-2 border-blue-200'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, travelType: type.id }))}
                  >
                    <span className="text-2xl mr-3">{type.icon}</span>
                    <span className="font-medium">{type.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pourquoi nous faire confiance */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                {t.sections.whyTrust}
              </h3>
              <div className="space-y-4">
                {t.trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {point.icon}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900">{point.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite: Avis et formulaire */}
          <div className="lg:col-span-2 space-y-8">
            {/* Avis récents */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.sections.recentReviews}</h2>
              <div className="space-y-6">
                {filteredReviews.map(review => (
                  <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    {/* En-tête avis */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                            {review.verified && (
                              <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Globe className="w-3 h-3 mr-1" />
                            {review.location}
                            <Calendar className="w-3 h-3 ml-3 mr-1" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>

                    {/* Contenu avis */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-lg text-gray-900 mb-2">{review.title}</h5>
                      <p className="text-gray-700 leading-relaxed">{review.content}</p>
                    </div>

                    {/* Métadonnées */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {review.destination && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                          <Globe className="w-3 h-3 mr-1" />
                          {review.destination}
                        </span>
                      )}
                      {review.travelType && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                          {review.travelType === "leisure" && "🏖️"}
                          {review.travelType === "business" && "💼"}
                          {review.travelType === "family" && "👨‍👩‍👧‍👦"}
                          {review.travelType === "adventure" && "🧗"}
                          {review.travelType === "honeymoon" && "💝"}
                          <span className="ml-1">
                            {t.travelTypes.find(t => t.id === review.travelType)?.name}
                          </span>
                        </span>
                      )}
                      {review.helpful && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {language === "FR" ? "Utile" : "Helpful"}
                        </span>
                      )}
                    </div>

                    {/* Actions et réponse */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleLikeReview(review.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                            likedReviews.has(review.id)
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${likedReviews.has(review.id) ? 'fill-red-600' : ''}`} />
                          <span>{review.likes + (likedReviews.has(review.id) ? 1 : 0)}</span>
                        </button>

                        <div className="flex space-x-3">
                          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                            <Share2 className="w-4 h-4" />
                            <span className="text-sm">{language === "FR" ? "Partager" : "Share"}</span>
                          </button>
                        </div>
                      </div>

                      {/* Réponse de l'équipe */}
                      {review.response && (
                        <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">GB</span>
                            </div>
                            <div className="ml-3">
                              <div className="flex items-center">
                                <span className="font-semibold text-blue-800">{review.response.author}</span>
                                <Calendar className="w-3 h-3 ml-2 text-blue-600" />
                                <span className="text-sm text-blue-600 ml-1">{review.response.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-blue-900 pl-11">{review.response.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulaire d'avis */}
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
                {t.sections.writeReview}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t.formLabels.rating}
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 hover:text-yellow-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-3 text-lg font-semibold text-gray-900">
                      {formData.rating}.0
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formLabels.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t.placeholders.name}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formLabels.email} {t.formLabels.optional}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.placeholders.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Titre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.title} *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder={t.placeholders.title}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.destination} {t.formLabels.optional}
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder={t.placeholders.destination}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.formLabels.message} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder={t.placeholders.message}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Bouton soumission */}
                <div className="pt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    {t.formLabels.terms}
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {t.formLabels.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}