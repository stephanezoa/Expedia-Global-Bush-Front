import React from 'react';

const CardPopulaire = ({ item }) => {
    return (
        <div className="w-72 flex-shrink-0">
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
    );
};

export default CardPopulaire;