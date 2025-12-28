import React from 'react';
import { Plane, Clock } from 'lucide-react';

/**
 * Card individuelle pour afficher un résultat de vol
 * Format API: FareItinerary structure
 */
const FlightResultCard = ({ flight, onViewDetails }) => {
    // Extraire les données du format API correct
    const fareItinerary = flight.FareItinerary || flight;
    const fareInfo = fareItinerary.AirItineraryFareInfo || {};
    const totalFare = fareInfo.ItinTotalFares?.TotalFare;
    const fareBreakdown = fareInfo.FareBreakdown?.[0];

    const originDestinations = fareItinerary.OriginDestinationOptions || [];

    if (originDestinations.length === 0) return null;

    // Premier trajet (aller)
    const outbound = originDestinations[0];
    const outboundSegments = outbound.OriginDestinationOption || [];
    const firstSegment = outboundSegments[0]?.FlightSegment;
    const lastOutboundSegment = outboundSegments[outboundSegments.length - 1]?.FlightSegment;

    // Trajet retour (si existe)
    const hasReturn = originDestinations.length > 1;
    const returnTrip = hasReturn ? originDestinations[1] : null;
    const returnSegments = returnTrip?.OriginDestinationOption || [];
    const lastSegment = hasReturn
        ? returnSegments[returnSegments.length - 1]?.FlightSegment
        : lastOutboundSegment;

    if (!firstSegment || !lastSegment) return null;

    // Calculer le nombre total d'escales
    const totalStops = originDestinations.reduce((sum, dest) => sum + (dest.TotalStops || 0), 0);

    // Informations bagages
    const baggage = fareBreakdown?.Baggage?.[0] || 'N/A';
    const cabinBaggage = fareBreakdown?.CabinBaggage?.[0] || 'N/A';

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left: Flight Info */}
                <div className="flex-1">
                    {/* Airline Header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <div className="text-sm font-semibold text-gray-900">
                                    {firstSegment.MarketingAirlineName || 'Compagnie aérienne'}
                                </div>
                                <span className="text-xs text-gray-500">
                                    {firstSegment.MarketingAirlineCode} {firstSegment.FlightNumber}
                                </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                                {firstSegment.OperatingAirline?.Equipment && `${firstSegment.OperatingAirline.Equipment}`}
                                {fareItinerary.TicketType && ` • ${fareItinerary.TicketType}`}
                            </div>
                        </div>
                        {fareInfo.IsRefundable === 'Yes' && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                Remboursable
                            </span>
                        )}
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-4">
                        {/* Departure */}
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">
                                {formatTime(firstSegment.DepartureDateTime)}
                            </div>
                            <div className="text-sm font-medium text-gray-700 mt-1">
                                {firstSegment.DepartureAirportLocationCode}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                                {formatDate(firstSegment.DepartureDateTime)}
                            </div>
                        </div>

                        {/* Duration & Stops */}
                        <div className="flex-1 px-4">
                            <div className="relative">
                                {/* Line */}
                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2" />

                                {/* Stops indicators */}
                                {totalStops > 0 && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                                    </div>
                                )}

                                {/* Plane icon */}
                                <div className="relative flex justify-center">
                                    <div className="bg-white px-2">
                                        <Plane className="w-5 h-5 text-blue-600 transform rotate-90" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-2">
                                <div className="text-sm font-medium text-gray-700">
                                    {calculateTotalDuration(firstSegment.DepartureDateTime, lastSegment.ArrivalDateTime)}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                    {getStopsLabel(totalStops)}
                                </div>
                            </div>
                        </div>

                        {/* Arrival */}
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">
                                {formatTime(lastSegment.ArrivalDateTime)}
                            </div>
                            <div className="text-sm font-medium text-gray-700 mt-1">
                                {lastSegment.ArrivalAirportLocationCode}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                                {formatDate(lastSegment.ArrivalDateTime)}
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                            <span className="font-medium">Classe:</span>
                            <span>{getCabinClassName(firstSegment.CabinClassCode)}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1">
                            <span className="font-medium">Bagage:</span>
                            <span>{baggage}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1">
                            <span className="font-medium">Cabine:</span>
                            <span>{cabinBaggage}</span>
                        </div>
                        {fareItinerary.DirectionInd && (
                            <>
                                <span className="text-gray-300">•</span>
                                <span className="capitalize">{fareItinerary.DirectionInd}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Right: Price & Action */}
                <div className="lg:border-l lg:pl-6 flex flex-col items-end justify-between gap-4 min-w-[200px]">
                    <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">
                            {formatPrice(totalFare?.Amount, totalFare?.CurrencyCode)}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                            Prix total
                        </div>
                        {fareBreakdown?.PassengerTypeQuantity && (
                            <div className="text-xs text-gray-500 mt-1">
                                {fareBreakdown.PassengerTypeQuantity.Quantity} {getPassengerTypeLabel(fareBreakdown.PassengerTypeQuantity.Code)}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => onViewDetails(flight)}
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                        Voir les détails
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper functions
const formatTime = (dateTime) => {
    if (!dateTime) return '';
    const date = new Date(dateTime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

const formatDate = (dateTime) => {
    if (!dateTime) return '';
    const date = new Date(dateTime);
    const days = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
    const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc'];

    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
};

const calculateTotalDuration = (start, end) => {
    if (!start || !end) return '';
    const diff = new Date(end) - new Date(start);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours === 0) return `${minutes}min`;
    return `${hours}h ${minutes}min`;
};

const getStopsLabel = (stops) => {
    if (stops === 0) return 'Direct';
    if (stops === 1) return '1 escale';
    return `${stops} escales`;
};

const getCabinClassName = (code) => {
    const cabinClasses = {
        'Y': 'Économique',
        'S': 'Économique Premium',
        'C': 'Affaires',
        'F': 'Première'
    };
    return cabinClasses[code] || 'Économique';
};

const getPassengerTypeLabel = (code) => {
    const types = {
        'ADT': 'adulte(s)',
        'CHD': 'enfant(s)',
        'INF': 'bébé(s)'
    };
    return types[code] || 'passager(s)';
};

const formatPrice = (amount, currency) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return 'N/A';

    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency || 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(numAmount);
};

export default FlightResultCard;
