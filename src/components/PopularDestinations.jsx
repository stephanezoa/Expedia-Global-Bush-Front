// src/components/PopularDestinations.jsx
import { MapPin, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PopularDestinations() {
  const { language } = useLanguage();

  const content = {
    FR: {
      title: 'Destinations populaires depuis Yaoundé',
      description: 'Ces destinations attrayantes au départ de Yaoundé ont été sélectionnées juste pour vous.',
      ctaTitle: 'Envie de prendre l\'avion pour encore moins cher ?',
      ctaDescription: 'Parcourez nos meilleures offres, réductions et astuces de voyage.',
      ctaButton: 'Explore les offres',
      destinations: [
        { name: 'Dubai', price: '$605', rating: 4.8, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop' },
        { name: 'Casablanca', price: '$926', rating: 4.6, image: 'https://images.unsplash.com/photo-1543418219-44e30b057fea?w=300&h=200&fit=crop' },
        { name: 'Paris', price: '$773', rating: 4.9, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=200&fit=crop' },
        { name: 'N Djaména', price: '$537', rating: 4.3, image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop' },
        { name: 'Douala', price: '$114', rating: 4.5, image: 'https://images.unsplash.com/photo-1591075256597-c9b1c0e63c7a?w=300&h=200&fit=crop' },
        { name: 'Montréal', price: '$1 386', rating: 4.7, image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop' },
      ]
    },
    EN: {
      title: 'Popular destinations from Yaoundé',
      description: 'These attractive destinations from Yaoundé have been selected just for you.',
      ctaTitle: 'Want to fly for even less?',
      ctaDescription: 'Browse our best deals, discounts and travel tips.',
      ctaButton: 'Explore deals',
      destinations: [
        { name: 'Dubai', price: '$605', rating: 4.8, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop' },
        { name: 'Casablanca', price: '$926', rating: 4.6, image: 'https://images.unsplash.com/photo-1543418219-44e30b057fea?w=300&h=200&fit=crop' },
        { name: 'Paris', price: '$773', rating: 4.9, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=200&fit=crop' },
        { name: 'N Djamena', price: '$537', rating: 4.3, image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop' },
        { name: 'Douala', price: '$114', rating: 4.5, image: 'https://images.unsplash.com/photo-1591075256597-c9b1c0e63c7a?w=300&h=200&fit=crop' },
        { name: 'Montreal', price: '$1,386', rating: 4.7, image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop' },
      ]
    }
  };

  const t = content[language] || content.FR;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
            <p className="text-gray-600">{t.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {t.destinations.map((destination, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg overflow-hidden group"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Billet à partir de</div>
                    <div className="text-xl font-bold text-blue-700">{destination.price}</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-red-50 border border-blue-200 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{t.ctaTitle}</h3>
                <p className="text-gray-600">{t.ctaDescription}</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/20 whitespace-nowrap">
              {t.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}