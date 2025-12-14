import React from 'react';
import { ChevronRight, TrendingUp, Shield, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardPopulaire from './CardPopulaire';

const ElementsPopulaire = ({ seeAllLink = "/tous" }) => {
    const popularItems = [
        {
            id: 1,
            title: "Vol Paris - New York",
            price: "€499",
            originalPrice: "€699",
            location: "Paris (CDG) → New York (JFK)",
            rating: 4.5,
            reviewCount: 1287,
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&h=250",
            type: "vol",
            duration: "8h 15min",
            discount: 29
        },
        {
            id: 2,
            title: "Hôtel Luxe Bali",
            price: "€249/nuit",
            location: "Bali, Indonésie",
            rating: 4.9,
            reviewCount: 950,
            image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101c?auto=format&fit=crop&w=400&h=250",
            type: "hotel",
            discount: 15
        },
        {
            id: 3,
            title: "Séjour 7 jours Maldives",
            price: "€1299",
            location: "Maldives",
            rating: 4.8,
            reviewCount: 230,
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&h=250",
            type: "sejour",
            discount: 10
        },
        {
            id: 4,
            title: "Vol Direct Londres - Rome",
            price: "€119",
            originalPrice: "€180",
            location: "Londres (LHR) → Rome (FCO)",
            rating: 4.2,
            reviewCount: 780,
            image: "https://images.unsplash.com/photo-1544837265-d419a4e25a81?auto=format&fit=crop&w=400&h=250",
            type: "vol",
            duration: "2h 30min"
        },
        {
            id: 5,
            title: "Hôtel Design Milan",
            price: "€180/nuit",
            location: "Milan, Italie",
            rating: 4.6,
            reviewCount: 410,
            image: "https://images.unsplash.com/photo-1582719508461-903d50880397?auto=format&fit=crop&w=400&h=250",
            type: "hotel"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>DESTINATIONS POPULAIRES</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Stays for every travel style
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                        Average prices based on current calendar month
                    </p>
                </div>
                <Link 
                    to={seeAllLink}
                    className="text-blue-600 font-medium hover:text-blue-800 transition whitespace-nowrap text-sm flex items-center gap-1"
                >
                    Voir tout
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-max">
                    {popularItems.map((item) => (
                        <div key={item.id} className="w-72 flex-shrink-0">
                            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="h-48 overflow-hidden rounded-t-lg">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {item.location.split('→')[0].trim()}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-bold text-blue-700">{item.price}</p>
                                            <p className="text-xs text-gray-500">avg per night</p>
                                        </div>
                                        {item.rating && (
                                            <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                                                <span className="text-blue-700 font-bold mr-1">{item.rating}</span>
                                                <span className="text-xs text-gray-600">({item.reviewCount})</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="w-72 flex-shrink-0">
                        <div className="h-full p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Boost your OneKeyCash™
                            </h3>
                            <p className="text-white/90 text-sm mb-4">
                                to $15.00 $415.00 after qualifying purchases
                            </p>
                            <div className="text-xs text-white/80 mb-4">
                                <p>Terms apply.</p>
                            </div>
                            <Link 
                                to="/search" 
                                className="inline-flex items-center gap-1 px-4 py-2 bg-white text-blue-700 font-medium rounded hover:bg-gray-100 transition text-sm"
                            >
                                Start searching
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section texte descriptif sous les cards */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        Pourquoi choisir nos offres ?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Réservation 100% sécurisée</h4>
                            <p className="text-gray-600 text-sm">
                                Toutes vos transactions sont protégées par un chiffrement de niveau bancaire et nos garanties de sécurité.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <Trophy className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Meilleur prix garanti</h4>
                            <p className="text-gray-600 text-sm">
                                Nous vous garantissons les prix les plus bas. Si vous trouvez moins cher ailleurs, nous remboursons la différence.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Support 24h/24 et 7j/7</h4>
                            <p className="text-gray-600 text-sm">
                                Notre équipe est disponible à tout moment pour vous accompagner avant, pendant et après votre voyage.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 text-sm">
                            Les prix affichés sont basés sur les tarifs moyens du mois en cours et peuvent varier en fonction de la saisonnalité, 
                            de la disponibilité et des conditions de réservation. Tous les hébergements présentés sont vérifiés pour garantir 
                            leur qualité et leur conformité avec nos standards d'excellence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElementsPopulaire;