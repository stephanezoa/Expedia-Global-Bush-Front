import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { formatPrice } from '../utils/flightUtils';

/**
 * Sidebar de filtres pour les résultats de vols
 * Design basé sur l'image fournie
 */
const FlightFilters = ({
    flights = [],
    filters,
    onFiltersChange,
    airlines = [],
    minPrice = 0,
    maxPrice = 10000
}) => {
    const [priceTracking, setPriceTracking] = useState(false);

    // Compter les vols par nombre d'escales
    const stopsCounts = {
        0: flights.filter(f => f.stops === 0).length,
        1: flights.filter(f => f.stops === 1).length,
        2: flights.filter(f => f.stops >= 2).length
    };

    const handleStopsChange = (stops) => {
        const currentStops = filters.stops || [];
        const newStops = currentStops.includes(stops)
            ? currentStops.filter(s => s !== stops)
            : [...currentStops, stops];

        onFiltersChange({ ...filters, stops: newStops });
    };

    const handleAirlineChange = (airlineCode) => {
        const currentAirlines = filters.airlines || [];
        const newAirlines = currentAirlines.includes(airlineCode)
            ? currentAirlines.filter(a => a !== airlineCode)
            : [...currentAirlines, airlineCode];

        onFiltersChange({ ...filters, airlines: newAirlines });
    };

    return (
        <div className="bg-gray-50 rounded-xl p-6 space-y-6">
            {/* Price Tracking */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Suivi des prix</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={priceTracking}
                            onChange={(e) => setPriceTracking(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <p className="text-xs text-gray-600">
                    Recevez des notifications par e-mail si les prix fluctuent.
                </p>

                {minPrice > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="text-sm text-gray-600">Prix actuel le plus bas :</div>
                        <div className="text-2xl font-bold text-green-600 mt-1">
                            {formatPrice(minPrice)}
                        </div>
                    </div>
                )}
            </div>

            {/* Suivre les prix toggle (mobile version) */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 lg:hidden">
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="font-medium text-gray-900">Suivre les prix</span>
                    <input
                        type="checkbox"
                        checked={priceTracking}
                        onChange={(e) => setPriceTracking(e.target.checked)}
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"
                    />
                </label>
            </div>

            {/* Filter by Stops */}
            <div>
                <h3 className="font-semibold text-gray-900 mb-3">Filtrer par</h3>

                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700">Escales</h4>

                    {/* Direct Flight */}
                    <label className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={filters.stops?.includes(0) || false}
                                onChange={() => handleStopsChange(0)}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700 group-hover:text-gray-900">
                                Vol direct ({stopsCounts[0]})
                            </span>
                        </div>
                        {stopsCounts[0] > 0 && (
                            <span className="text-sm text-gray-600">
                                À partir de {formatPrice(getMinPriceForStops(flights, 0))}
                            </span>
                        )}
                    </label>

                    {/* 1 Stop */}
                    <label className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={filters.stops?.includes(1) || false}
                                onChange={() => handleStopsChange(1)}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700 group-hover:text-gray-900">
                                1 escale ({stopsCounts[1]})
                            </span>
                        </div>
                        {stopsCounts[1] > 0 && (
                            <span className="text-sm text-gray-600">
                                {formatPrice(getMinPriceForStops(flights, 1))}
                            </span>
                        )}
                    </label>

                    {/* 2+ Stops */}
                    <label className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={filters.stops?.includes(2) || false}
                                onChange={() => handleStopsChange(2)}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700 group-hover:text-gray-900">
                                2 escales ou + ({stopsCounts[2]})
                            </span>
                        </div>
                        {stopsCounts[2] > 0 && (
                            <span className="text-sm text-gray-600">
                                {formatPrice(getMinPriceForStops(flights, 2))}
                            </span>
                        )}
                    </label>
                </div>
            </div>

            {/* Filter by Airlines */}
            {airlines.length > 0 && (
                <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Compagnies aériennes</h4>

                    <div className="space-y-3 max-h-64 overflow-y-auto">
                        {airlines.map((airline) => (
                            <label
                                key={airline.code}
                                className="flex items-center justify-between cursor-pointer group"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={filters.airlines?.includes(airline.code) || false}
                                        onChange={() => handleAirlineChange(airline.code)}
                                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-gray-700 group-hover:text-gray-900">
                                        {airline.name} ({airline.count})
                                    </span>
                                </div>
                                <span className="text-sm text-gray-600">
                                    {formatPrice(getMinPriceForAirline(flights, airline.code))}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {/* Reset Filters */}
            {(filters.stops?.length > 0 || filters.airlines?.length > 0) && (
                <button
                    onClick={() => onFiltersChange({ stops: [], airlines: [] })}
                    className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                    Réinitialiser les filtres
                </button>
            )}
        </div>
    );
};

// Helper functions
const getMinPriceForStops = (flights, stops) => {
    const filtered = stops === 2
        ? flights.filter(f => f.stops >= 2)
        : flights.filter(f => f.stops === stops);

    if (filtered.length === 0) return 0;
    return Math.min(...filtered.map(f => f.price?.amount || Infinity));
};

const getMinPriceForAirline = (flights, airlineCode) => {
    const filtered = flights.filter(f =>
        f.segments?.some(s => s.airline?.code === airlineCode)
    );

    if (filtered.length === 0) return 0;
    return Math.min(...filtered.map(f => f.price?.amount || Infinity));
};

export default FlightFilters;
