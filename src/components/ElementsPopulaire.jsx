// ElementsPopulaires.jsx
import React from 'react';
import CardTemplate from './CardPopulaire';
import { ChevronRight } from 'lucide-react';

const ElementsPopulaire = ({ title = "Éléments Populaires", seeAllLink = "/tous" }) => {
    
    const popularItems = [
        {
            id: 1,
            title: "Vol Paris - New York",
            description: "Vol direct avec Air France, bagage en soute inclus.",
            price: "€499",
            originalPrice: "€699",
            location: "Paris (CDG) → New York (JFK)",
            rating: 4.5,
            reviewCount: 1287,
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800",
            type: "vol",
            duration: "8h 15min",
            travelers: 1,
            discount: 29,
            features: ["Bagage inclus", "Repas à bord", "WiFi gratuit"]
        },
        {
            id: 2,
            title: "Hôtel 5★ Bali",
            price: "€249",
            image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101c?auto=format&fit=crop&w=800",
            type: "hotel",
            location: "Bali, Indonésie",
            rating: 4.9
        },
        {
            id: 3,
            title: "Location de voiture – SUV",
            price: "€59/jour",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800",
            type: "voiture"
        },
        {
            id: 4,
            title: "Séjour 7 jours Maldives",
            price: "€1299",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800",
            type: "sejour"
        },

        {
            id: 5,
            title: "Hôtel 5★ Bali",
            price: "€249",
            image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101c?auto=format&fit=crop&w=800",
            type: "hotel",
            location: "Bali, Indonésie",
            rating: 4.9
        },
        {
            id: 6,
            title: "Location de voiture – SUV",
            price: "€59/jour",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800",
            type: "voiture"
        },
        {
            id: 7,
            title: "Séjour 7 jours Maldives",
            price: "€1299",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800",
            type: "sejour"
        },

        {
            id: 8,
            title: "Hôtel 5★ Bali",
            price: "€249",
            image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101c?auto=format&fit=crop&w=800",
            type: "hotel",
            location: "Bali, Indonésie",
            rating: 4.9
        },
        {
            id: 9,
            title: "Location de voiture – SUV",
            price: "€59/jour",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800",
            type: "voiture"
        },
        {
            id: 10,
            title: "Séjour 7 jours Maldives",
            price: "€1299",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800",
            type: "sejour"
        }
    ];

    return (
        <div className="w-4/5 mx-auto px-4 py-12">

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Destinations populaires depuis votre emplacement
                    </h2>
                    <p className="text-gray-700">
                        Ces destinations attrayantes depuis Yaoundé ont été sélectionnées pour vous.
                    </p>
                </div>

                <a 
                    href={seeAllLink}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 mt-4 md:mt-0"
                >
                    Voir tout
                    <ChevronRight className="w-5 h-5" />
                </a>
            </div>

            <div className='space-y-2'>
                <div className="grid grid-cols-5 gap-2">

                {popularItems.slice(0, 3).map((item) => (
                    <div key={item.id} className="col-span-1">
                        <CardTemplate item={item} />
                    </div>
                ))}

                {/* 4e carte → 2 colonnes */}
                {popularItems[3] && (
                    <div className="col-span-2">
                        <CardTemplate item={popularItems[3]} />
                    </div>
                )}
            </div>
            <div className='grid grid-cols-5 gap-2'>
                {popularItems.slice(0, 1).map((item) =>(
                    <div key={item.id} className='col-span-2'>
                        <CardTemplate item={popularItems[4]} />
                    </div>
                ))}

                {popularItems.slice(0, 1).map((item) =>(
                    <div key={item.id} className='col-span-1'>
                        <CardTemplate item={popularItems[5]} />
                    </div>
                ))}
                 {popularItems.slice(0, 1).map((item) =>(
                    <div key={item.id} className='col-span-2'>
                        <CardTemplate item={popularItems[6]} />
                    </div>
                ))}

            </div>

            </div>
        </div>
    );
};

export default ElementsPopulaire;
