import React from 'react';
import { X, Plane, Clock, Calendar, Briefcase, Check, AlertCircle } from 'lucide-react';

/**
 * Modal de détails complets d'un vol
 * Format API: FareItinerary structure
 */
const FlightDetailsModal = ({ flight, isOpen, onClose }) => {
    if (!isOpen || !flight) return null;

    const fareItinerary = flight.FareItinerary || flight;
    const fareInfo = fareItinerary.AirItineraryFareInfo || {};
    const totalFares = fareInfo.ItinTotalFares || {};
    const fareBreakdown = fareInfo.FareBreakdown?.[0] || {};

    const originDestinations = fareItinerary.OriginDestinationOptions || [];

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-5 flex items-center justify-between rounded-t-2xl z-10 shadow-lg">
                        <div>
                            <h2 className="text-2xl font-bold">Détails du vol</h2>
                            <p className="text-sm text-blue-100 mt-1">
                                {fareItinerary.ValidatingAirlineCode} • {fareItinerary.TicketType}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        {/* Flight Type & Refund Info */}
                        <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                    {fareItinerary.DirectionInd || 'Return'}
                                </span>
                                {fareInfo.IsRefundable === 'Yes' ? (
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                                        <Check className="w-4 h-4" />
                                        Remboursable
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        Non remboursable
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Itinerary segments */}
                        {originDestinations.map((destination, destIndex) => {
                            const segments = destination.OriginDestinationOption || [];
                            const directionLabel = destIndex === 0 ? 'Vol aller' : 'Vol retour';

                            return (
                                <div key={destIndex} className="space-y-4">
                                    {/* Direction header */}
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold text-gray-900">{directionLabel}</h3>
                                        <span className="text-sm text-gray-500">
                                            {destination.TotalStops === 0 ? 'Direct' : `${destination.TotalStops} escale(s)`}
                                        </span>
                                    </div>

                                    {segments.map((segment, segmentIndex) => {
                                        const flightSeg = segment.FlightSegment;
                                        const operating = flightSeg.OperatingAirline || {};
                                        const seatsInfo = segment.SeatsRemaining || {};

                                        return (
                                            <div key={segmentIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                                {/* Airline Header */}
                                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                                                    <div>
                                                        <div className="font-bold text-lg text-gray-900">
                                                            {flightSeg.MarketingAirlineName || 'Compagnie aérienne'}
                                                        </div>
                                                        <div className="text-sm text-gray-600 mt-1">
                                                            Vol {flightSeg.MarketingAirlineCode} {flightSeg.FlightNumber}
                                                            {operating.Code !== flightSeg.MarketingAirlineCode && (
                                                                <span className="ml-2 text-xs text-gray-500">
                                                                    (Opéré par {operating.Name})
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-sm text-gray-600">Appareil</div>
                                                        <div className="font-semibold text-gray-900">{operating.Equipment || 'N/A'}</div>
                                                    </div>
                                                </div>

                                                {/* Timeline */}
                                                <div className="relative">
                                                    {/* Departure */}
                                                    <div className="flex items-start gap-4 mb-8">
                                                        <div className="flex flex-col items-center pt-1">
                                                            <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-200" />
                                                            <div className="w-0.5 h-28 bg-gradient-to-b from-blue-400 to-blue-200 my-2" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-2xl font-bold text-gray-900">
                                                                {flightSeg.DepartureAirportLocationCode}
                                                            </div>
                                                            <div className="text-sm text-gray-600 mt-1">
                                                                Départ
                                                            </div>
                                                            <div className="flex items-baseline gap-4 mt-3">
                                                                <div className="text-4xl font-bold text-blue-600">
                                                                    {formatTime(flightSeg.DepartureDateTime)}
                                                                </div>
                                                                <div className="text-sm text-gray-600">
                                                                    {formatFullDate(flightSeg.DepartureDateTime)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Duration */}
                                                    <div className="flex items-center gap-2 ml-6 mb-8 text-sm bg-blue-50 px-4 py-2 rounded-lg w-fit">
                                                        <Clock className="w-4 h-4 text-blue-600" />
                                                        <span className="font-medium text-blue-900">
                                                            Durée : {formatDuration(flightSeg.JourneyDuration)}
                                                        </span>
                                                    </div>

                                                    {/* Arrival */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-200 mt-1" />
                                                        <div className="flex-1">
                                                            <div className="text-2xl font-bold text-gray-900">
                                                                {flightSeg.ArrivalAirportLocationCode}
                                                            </div>
                                                            <div className="text-sm text-gray-600 mt-1">
                                                                Arrivée
                                                            </div>
                                                            <div className="flex items-baseline gap-4 mt-3">
                                                                <div className="text-4xl font-bold text-blue-600">
                                                                    {formatTime(flightSeg.ArrivalDateTime)}
                                                                </div>
                                                                <div className="text-sm text-gray-600">
                                                                    {formatFullDate(flightSeg.ArrivalDateTime)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Flight Details Grid */}
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">Classe</div>
                                                        <div className="font-semibold text-gray-900">
                                                            {getCabinClassName(flightSeg.CabinClassCode)}
                                                        </div>
                                                        {segment.ResBookDesigCode && (
                                                            <div className="text-xs text-gray-500 mt-1">RBD: {segment.ResBookDesigCode}</div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">Sièges restants</div>
                                                        <div className="font-semibold text-gray-900">
                                                            {seatsInfo.Number || 'N/A'}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">E-Ticket</div>
                                                        <div className="font-semibold text-gray-900">
                                                            {flightSeg.Eticket ? 'Oui' : 'Non'}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">Escales</div>
                                                        <div className="font-semibold text-gray-900">
                                                            {segment.StopQuantity || 0}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Layover info */}
                                                {segmentIndex < segments.length - 1 && (
                                                    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                                                        <div className="flex items-start gap-3">
                                                            <Clock className="w-5 h-5 text-yellow-700 mt-0.5 flex-shrink-0" />
                                                            <div>
                                                                <div className="font-medium text-yellow-900">
                                                                    Escale à {flightSeg.ArrivalAirportLocationCode}
                                                                </div>
                                                                <div className="text-sm text-yellow-700 mt-1">
                                                                    Changement d'avion - Vérifiez les informations de terminal
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}

                        {/* Baggage Information */}
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-blue-600" />
                                Informations bagages
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <div className="text-sm text-gray-600 mb-2">Bagage en soute</div>
                                    <div className="flex flex-wrap gap-2">
                                        {fareBreakdown.Baggage?.map((bag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white border border-blue-200 rounded-lg text-sm font-medium text-gray-900">
                                                {bag}
                                            </span>
                                        )) || <span className="text-gray-500">Non inclus</span>}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-2">Bagage cabine</div>
                                    <div className="flex flex-wrap gap-2">
                                        {fareBreakdown.CabinBaggage?.map((bag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white border border-blue-200 rounded-lg text-sm font-medium text-gray-900">
                                                {bag}
                                            </span>
                                        )) || <span className="text-gray-500">Non inclus</span>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price Summary */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                            <h3 className="font-bold text-xl text-gray-900 mb-4">Récapitulatif tarifaire</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-gray-700">
                                    <span>Tarif de base</span>
                                    <span className="font-semibold">{formatPrice(totalFares.BaseFare)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Taxes et frais</span>
                                    <span className="font-semibold">{formatPrice(totalFares.TotalTax)}</span>
                                </div>
                                <div className="h-px bg-gray-300 my-2"></div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-lg font-bold text-gray-900">Prix total</span>
                                    <span className="text-3xl font-bold text-green-600">
                                        {formatPrice(totalFares.TotalFare)}
                                    </span>
                                </div>
                                {fareBreakdown.PassengerTypeQuantity && (
                                    <div className="text-sm text-gray-600 text-right">
                                        Pour {fareBreakdown.PassengerTypeQuantity.Quantity} {getPassengerTypeLabel(fareBreakdown.PassengerTypeQuantity.Code)}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Penalty Details */}
                        {fareBreakdown.PenaltyDetails && (
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h3 className="font-bold text-lg text-gray-900 mb-4">Conditions de modification</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Modification</div>
                                        <div className="font-semibold text-gray-900">
                                            {fareBreakdown.PenaltyDetails.ChangeAllowed ? (
                                                <span className="text-green-600">Autorisée ({formatPrice({ Amount: fareBreakdown.PenaltyDetails.ChangePenaltyAmount, CurrencyCode: fareBreakdown.PenaltyDetails.Currency })})</span>
                                            ) : (
                                                <span className="text-red-600">Non autorisée</span>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Remboursement</div>
                                        <div className="font-semibold text-gray-900">
                                            {fareBreakdown.PenaltyDetails.RefundAllowed ? (
                                                <span className="text-green-600">Autorisé ({formatPrice({ Amount: fareBreakdown.PenaltyDetails.RefundPenaltyAmount, CurrencyCode: fareBreakdown.PenaltyDetails.Currency })})</span>
                                            ) : (
                                                <span className="text-red-600">Non autorisé</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 bg-white border-t-2 border-gray-200 px-6 py-5 rounded-b-2xl shadow-lg">
                        <div className="flex gap-4">
                            <button
                                onClick={onClose}
                                className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-lg rounded-xl transition"
                            >
                                Fermer
                            </button>
                            <button
                                onClick={() => {
                                    // TODO: Implement booking logic
                                    console.log('Booking flight:', flight);
                                }}
                                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-xl transition shadow-lg hover:shadow-xl"
                            >
                                Réserver ce vol
                            </button>
                        </div>
                    </div>
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

const formatFullDate = (dateTime) => {
    if (!dateTime) return '';
    const date = new Date(dateTime);
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const formatDuration = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours === 0) return `${mins} min`;
    if (mins === 0) return `${hours} h`;
    return `${hours} h ${mins} min`;
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

const formatPrice = (fareObject) => {
    if (!fareObject || !fareObject.Amount) return 'N/A';

    const amount = parseFloat(fareObject.Amount);
    const currency = fareObject.CurrencyCode || 'EUR';

    if (isNaN(amount)) return 'N/A';

    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
};

export default FlightDetailsModal;
