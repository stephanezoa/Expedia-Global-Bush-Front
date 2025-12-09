    // CardTemplate.jsx
    import React from 'react';
    import { Star, MapPin, Calendar, Users, ArrowBigRightDash } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const CardPopulaire = ({ item }) => {
        const {
            id,
            title,
            description,
            price,
            originalPrice,
            location,
            rating,
            reviewCount,
            image,
            type, // 'vol', 'hotel', 'voiture', 'sejour'
            duration,
            travelers,
            discount,
            features = []
        } = item;

        // Couleurs selon le type
        const typeColors = {
            vol: 'bg-blue-100 text-blue-600',
            hotel: 'bg-green-100 text-green-600',
            voiture: 'bg-purple-100 text-purple-600',
            sejour: 'bg-orange-100 text-orange-600',
            activite: 'bg-pink-100 text-pink-600'
        };


        return (
            <div className="group relative bg-white  rounded-2xl overflow-hidden border border-gray-200 shadow-2xl  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                
                {/* Badge de type */}
                <div className="absolute top-2 left-2 z-10">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 'bg-gray-100 text-gray-600'}`}>
                        <span className="text-sm">⭐</span>
                        {type?.charAt(0).toUpperCase() + type?.slice(1)}
                    </span>
                </div>

                {/* Badge de promotion */}
                {discount && (
                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1.5 bg-red-100/ text-red-500 rounded-full text-xs font-bold">
                            -{discount}%
                        </span>
                    </div>
                )}

                {/* Image */}
                <div className="relative h-56 md:h-48 lg:h-56 overflow-hidden ">
                    
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 md:p-5">
                    <div className='flex items-center justify-between mb-2'>
                        <div className=" rounded-lg px-2 py-1 left-3 top-45 shadow-lg z-30 opacity-0 hover opacity-100 transition-opacity duration-300 text-sm font-semibold">
                            {price}
                        </div>
                          <div className=" rounded-lg px-2 py-1 left-76 top-45  z-30 opacity-0 hover opacity-100 transition-opacity duration-300 text-sm font-semibold">
                           <Link to={''}> <ArrowBigRightDash className='w-5 h-5'/></Link>

                        </div>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-1 mb-1">
                            {title}
                        </h3>
                        {location && (
                            <div className="flex items-center text-gray-600 text-sm">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                                <span className="truncate">{location}</span>
                            </div>
                        )}
                    </div>

                    <div className="hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {features.length > 0 && (
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {features.slice(0, 3).map((feature, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none rounded-2xl lg:hidden"></div>
            </div>
        );
    };

    export default CardPopulaire;