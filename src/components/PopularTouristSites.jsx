// src/components/PopularTouristSites.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Heart, ChevronRight, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PopularTouristSites = () => {
  const { language } = useLanguage();

  // Données des sites touristiques d'Afrique Centrale
  const touristSites = [
    {
      id: 1,
      name: {
        FR: "Parc National de la Lobéké",
        EN: "Lobéké National Park"
      },
      location: {
        FR: "Cameroun",
        EN: "Cameroon"
      },
      description: {
        FR: "Forêt tropicale primaire, site UNESCO, observation des éléphants de forêt",
        EN: "Primary tropical rainforest, UNESCO site, forest elephant observation"
      },
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 234,
      price: {
        FR: "À partir de 120€",
        EN: "From €120"
      },
      duration: {
        FR: "3-5 jours",
        EN: "3-5 days"
      },
      category: {
        FR: "Parc National",
        EN: "National Park"
      },
      featured: true
    },
    {
      id: 2,
      name: {
        FR: "Chutes de Mbi",
        EN: "Mbi Falls"
      },
      location: {
        FR: "Cameroun",
        EN: "Cameroon"
      },
      description: {
        FR: "Magnifiques cascades dans la région de l'Ouest, randonnée et paysages spectaculaires",
        EN: "Beautiful waterfalls in the West region, hiking and spectacular landscapes"
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w-800&auto=format&fit=crop",
      rating: 4.5,
      reviewCount: 156,
      price: {
        FR: "À partir de 75€",
        EN: "From €75"
      },
      duration: {
        FR: "1-2 jours",
        EN: "1-2 days"
      },
      category: {
        FR: "Chute d'eau",
        EN: "Waterfall"
      },
      featured: false
    },
    {
      id: 3,
      name: {
        FR: "Plage de Kribi",
        EN: "Kribi Beach"
      },
      location: {
        FR: "Cameroun",
        EN: "Cameroon"
      },
      description: {
        FR: "Plage de sable noir, dégustation de poissons frais, chutes de la Lobé",
        EN: "Black sand beach, fresh fish tasting, Lobé waterfalls"
      },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 189,
      price: {
        FR: "À partir de 90€",
        EN: "From €90"
      },
      duration: {
        FR: "2-3 jours",
        EN: "2-3 days"
      },
      category: {
        FR: "Plage",
        EN: "Beach"
      },
      featured: true
    },
    {
      id: 4,
      name: {
        FR: "Marché Artisanal de Yaoundé",
        EN: "Yaoundé Artisanal Market"
      },
      location: {
        FR: "Cameroun",
        EN: "Cameroon"
      },
      description: {
        FR: "Artisanat local, sculptures, textiles traditionnels, expérience culturelle",
        EN: "Local craftsmanship, sculptures, traditional textiles, cultural experience"
      },
      image: "https://images.unsplash.com/photo-1551818255-e6e1095bc9c2?w=800&auto=format&fit=crop",
      rating: 4.3,
      reviewCount: 98,
      price: {
        FR: "À partir de 45€",
        EN: "From €45"
      },
      duration: {
        FR: "1 jour",
        EN: "1 day"
      },
      category: {
        FR: "Culture",
        EN: "Culture"
      },
      featured: false
    },
    {
      id: 5,
      name: {
        FR: "Mont Cameroun",
        EN: "Mount Cameroon"
      },
      location: {
        FR: "Cameroun",
        EN: "Cameroon"
      },
      description: {
        FR: "Plus haut sommet d'Afrique de l'Ouest, trekking, vue panoramique",
        EN: "Highest peak in West Africa, trekking, panoramic view"
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 312,
      price: {
        FR: "À partir de 150€",
        EN: "From €150"
      },
      duration: {
        FR: "4-6 jours",
        EN: "4-6 days"
      },
      category: {
        FR: "Montagne",
        EN: "Mountain"
      },
      featured: true
    },
    {
      id: 6,
      name: {
        FR: "Parc National de Dzanga-Sangha",
        EN: "Dzanga-Sangha National Park"
      },
      location: {
        FR: "République Centrafricaine",
        EN: "Central African Republic"
      },
      description: {
        FR: "Forêt tropicale humide, gorilles de plaine, éléphants de forêt",
        EN: "Tropical rainforest, lowland gorillas, forest elephants"
      },
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 201,
      price: {
        FR: "À partir de 200€",
        EN: "From €200"
      },
      duration: {
        FR: "5-7 jours",
        EN: "5-7 days"
      },
      category: {
        FR: "Parc National",
        EN: "National Park"
      },
      featured: true
    },
    {
      id: 7,
      name: {
        FR: "Lac Tchad",
        EN: "Lake Chad"
      },
      location: {
        FR: "Tchad",
        EN: "Chad"
      },
      description: {
        FR: "Lac sahélien, oiseaux migrateurs, culture nomade",
        EN: "Sahelian lake, migratory birds, nomadic culture"
      },
      image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=800&auto=format&fit=crop",
      rating: 4.4,
      reviewCount: 145,
      price: {
        FR: "À partir de 110€",
        EN: "From €110"
      },
      duration: {
        FR: "2-3 jours",
        EN: "2-3 days"
      },
      category: {
        FR: "Lac",
        EN: "Lake"
      },
      featured: false
    },
    {
      id: 8,
      name: {
        FR: "Réserve de Faune du Dja",
        EN: "Dja Faunal Reserve"
      },
      location: {
        FR: "Cameroun",
        EN: "Cameroon"
      },
      description: {
        FR: "Réserve de biosphère UNESCO, biodiversité exceptionnelle",
        EN: "UNESCO biosphere reserve, exceptional biodiversity"
      },
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 267,
      price: {
        FR: "À partir de 180€",
        EN: "From €180"
      },
      duration: {
        FR: "4-5 jours",
        EN: "4-5 days"
      },
      category: {
        FR: "Réserve",
        EN: "Reserve"
      },
      featured: true
    }
  ];

  // Filtrer les sites mis en avant (featured)
  const featuredSites = touristSites.filter(site => site.featured).slice(0, 4);

  const translations = {
    FR: {
      title: "Sites Touristiques d'Afrique Centrale",
      subtitle: "Découvrez les merveilles naturelles et culturelles",
      viewAll: "Voir tous les sites",
      rating: "note",
      reviews: "avis",
      duration: "Durée",
      category: "Catégorie",
      bookNow: "Réserver maintenant",
      explore: "Explorer"
    },
    EN: {
      title: "Central African Tourist Sites",
      subtitle: "Discover natural and cultural wonders",
      viewAll: "View all sites",
      rating: "rating",
      reviews: "reviews",
      duration: "Duration",
      category: "Category",
      bookNow: "Book now",
      explore: "Explore"
    }
  };

  const t = translations[language];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Cartes des sites touristiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredSites.map((site) => (
            <Link 
              to={`/journeys/${site.id}`} 
              key={site.id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Image avec badge */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={site.name[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {site.category[language]}
                    </span>
                  </div>
                  {/* Bouton favori */}
                  <button 
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Gérer l'ajout aux favoris
                    }}
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-5 flex-grow">
                  {/* Localisation */}
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{site.location[language]}</span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {site.name[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {site.description[language]}
                  </p>

                  {/* Évaluation */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(site.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {site.rating} ({site.reviewCount} {t.reviews})
                    </span>
                  </div>

                  {/* Infos supplémentaires */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{site.duration[language]}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-blue-600">
                        {site.price[language]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bouton d'action */}
                <div className="p-5 pt-0">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center group/btn">
                    <span>{t.explore}</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bouton "Voir tous" */}
        <div className="text-center">
          <Link 
            to="/journeys"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg group"
          >
            <span>{t.viewAll}</span>
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTouristSites;