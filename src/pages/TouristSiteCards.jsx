// src/components/TouristSiteCards.jsx (Version compacte)
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TouristSiteCards = () => {
  const { language } = useLanguage();

  const sites = [
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
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&auto=format&fit=crop",
      rating: 4.8,
      price: {
        FR: "120€",
        EN: "€120"
      }
    },
    {
      id: 2,
      name: {
        FR: "Mont Cameroun",
        EN: "Mount Cameroon"
      },
      location: {
        FR: "Cameroun",
        EN: "Cameroon"
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop",
      rating: 4.9,
      price: {
        FR: "150€",
        EN: "€150"
      }
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
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop",
      rating: 4.7,
      price: {
        FR: "90€",
        EN: "€90"
      }
    },
    {
      id: 4,
      name: {
        FR: "Parc National de Dzanga-Sangha",
        EN: "Dzanga-Sangha National Park"
      },
      location: {
        FR: "RCA",
        EN: "CAR"
      },
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop",
      rating: 4.6,
      price: {
        FR: "200€",
        EN: "€200"
      }
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {language === "FR" ? "Sites Populaires" : "Popular Sites"}
            </h2>
            <p className="text-gray-600">
              {language === "FR" ? "Découvrez l'Afrique Centrale" : "Discover Central Africa"}
            </p>
          </div>
          <Link 
            to="/journeys" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            {language === "FR" ? "Tout voir" : "View all"}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sites.map((site) => (
            <Link 
              to={`/journeys/${site.id}`} 
              key={site.id}
              className="group"
            >
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 relative overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={site.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {site.price[language]}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {site.location[language]}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {site.name[language]}
                  </h3>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(site.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{site.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristSiteCards;