// src/components/FlightSearchForm.js
import React, { useState, useRef, useEffect } from 'react';
import { Search, Users, ChevronDown, Plus, Minus, AlertCircle } from 'lucide-react';
import AirportAutocomplete from './AirportAutocomplete';
import { formatSearchRequest } from '../utils/searchUtils';
import { airportService } from '../services/airportService';

const FlightSearchForm = ({
    onSearch,
    initialValues = {},
    className = ""
}) => {
    // États principaux
    const [tripType, setTripType] = useState(initialValues.tripType || 'roundtrip');
    const [departure, setDeparture] = useState(initialValues.departure || null);
    const [destination, setDestination] = useState(initialValues.destination || null);
    const [departDate, setDepartDate] = useState(initialValues.departDate || '');
    const [returnDate, setReturnDate] = useState(initialValues.returnDate || '');

    // Passagers
    const [adults, setAdults] = useState(initialValues.adults || 1);
    const [children, setChildren] = useState(initialValues.children || 0);
    const [infants, setInfants] = useState(initialValues.infants || 0);

    // Classe
    const [cabinClass, setCabinClass] = useState(initialValues.cabinClass || 'economy');

    // UI States
    const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
    const [showClassDropdown, setShowClassDropdown] = useState(false);
    const [errors, setErrors] = useState({});

    // Refs pour dropdowns
    const travelersRef = useRef(null);
    const classRef = useRef(null);

    // Charger les aéroports
    useEffect(() => {
        airportService.loadAllAirports().catch(console.error);
    }, []);

    // Fermeture dropdowns au clic extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (travelersRef.current && !travelersRef.current.contains(event.target)) {
                setShowTravelersDropdown(false);
            }
            if (classRef.current && !classRef.current.contains(event.target)) {
                setShowClassDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Total passagers
    const totalTravelers = adults + children + infants;
    const travelersLabel = `${totalTravelers} passager${totalTravelers > 1 ? 's' : ''}`;

    const classLabels = {
        economy: 'Économie',
        premium: 'Premium',
        business: 'Affaires',
        first: 'Première'
    };

    // Validation
    const validateForm = () => {
        const newErrors = {};
        if (!departure) newErrors.departure = 'Veuillez choisir un départ';
        if (!destination) newErrors.destination = 'Veuillez choisir une destination';
        if (departure && destination && departure.iataCode === destination.iataCode) {
            newErrors.destination = 'Doit être différent du départ';
        }
        if (!departDate) newErrors.departDate = 'Date requise';
        if (tripType === 'roundtrip') {
            if (!returnDate) newErrors.returnDate = 'Date requise';
            if (departDate && returnDate && new Date(returnDate) < new Date(departDate)) {
                newErrors.returnDate = 'Doit être après le départ';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Soumission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = {
            tripType,
            departure,
            destination,
            departDate,
            returnDate: tripType === 'roundtrip' ? returnDate : null,
            adults,
            children,
            infants,
            cabinClass,
            directFlight: false
        };

        const formattedRequest = formatSearchRequest(formData, null);
        if (onSearch) onSearch(formattedRequest);
    };

    // Date minimale pour le retour
    const minReturnDate = departDate || new Date().toISOString().split('T')[0];

    return (
        <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 ${className}`}>
            <form onSubmit={handleSubmit}>
                {/* Barre de contrôle supérieure */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    {/* Type de trajet */}
                    <div className="inline-flex rounded-lg bg-gray-100 p-1" role="group" aria-label="Type de trajet">
                        {(['roundtrip', 'oneway']).map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => {
                                    setTripType(type);
                                    if (type === 'oneway') setReturnDate('');
                                }}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition ${tripType === type
                                    ? 'bg-white text-purple-700 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                                aria-pressed={tripType === type}
                            >
                                {type === 'roundtrip' ? 'Aller-retour' : 'Aller simple'}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 min-w-[120px]"></div>

                    {/* Passagers */}
                    <div className="relative" ref={travelersRef}>
                        <button
                            type="button"
                            onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition shadow-sm"
                            aria-expanded={showTravelersDropdown}
                        >
                            <Users className="w-4 h-4 text-purple-600" aria-hidden="true" />
                            <span>{travelersLabel}</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" aria-hidden="true" />
                        </button>

                        {showTravelersDropdown && (
                            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-20">
                                <h3 className="font-semibold text-gray-900 mb-3">Passagers</h3>

                                {[
                                    { label: 'Adultes', value: adults, setter: setAdults, min: 1, max: 9, hint: '12+ ans' },
                                    { label: 'Enfants', value: children, setter: setChildren, min: 0, max: 9, hint: '2-11 ans' },
                                    { label: 'Nourrissons', value: infants, setter: setInfants, min: 0, max: adults, hint: '0-2 ans' }
                                ].map(({ label, value, setter, min, max, hint }) => (
                                    <div key={label} className="flex items-center justify-between py-2">
                                        <div>
                                            <div className="font-medium text-gray-900">{label}</div>
                                            <div className="text-xs text-gray-500">{hint}</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setter(Math.max(min, value - 1))}
                                                disabled={value <= min}
                                                className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                                                aria-label={`Diminuer le nombre de ${label.toLowerCase()}`}
                                            >
                                                <Minus className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <span className="w-6 text-center font-medium tabular-nums">{value}</span>
                                            <button
                                                type="button"
                                                onClick={() => setter(Math.min(max, value + 1))}
                                                disabled={value >= max}
                                                className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                                                aria-label={`Augmenter le nombre de ${label.toLowerCase()}`}
                                            >
                                                <Plus className="w-4 h-4 text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => setShowTravelersDropdown(false)}
                                    className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition"
                                >
                                    Appliquer
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Classe cabine */}
                    <div className="relative" ref={classRef}>
                        <button
                            type="button"
                            onClick={() => setShowClassDropdown(!showClassDropdown)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition shadow-sm"
                            aria-expanded={showClassDropdown}
                        >
                            {classLabels[cabinClass]}
                            <ChevronDown className="w-4 h-4 text-gray-400" aria-hidden="true" />
                        </button>

                        {showClassDropdown && (
                            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-20">
                                <div className="p-2">
                                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Classe</div>
                                    {Object.entries(classLabels).map(([key, label]) => (
                                        <button
                                            key={key}
                                            type="button"
                                            onClick={() => {
                                                setCabinClass(key);
                                                setShowClassDropdown(false);
                                            }}
                                            className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition ${cabinClass === key
                                                ? 'bg-purple-50 text-purple-700 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                            aria-pressed={cabinClass === key}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Grille principale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/* Départ */}
                    <div>
                        <AirportAutocomplete
                            label="Départ"
                            value={departure}
                            onChange={(airport) => {
                                setDeparture(airport);
                                setErrors(prev => ({ ...prev, departure: undefined }));
                            }}
                            placeholder="Ville ou aéroport"
                            error={!!errors.departure}
                        />
                        {errors.departure && (
                            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.departure}
                            </p>
                        )}
                    </div>

                    {/* Arrivée */}
                    <div>
                        <AirportAutocomplete
                            label="Arrivée"
                            value={destination}
                            onChange={(airport) => {
                                setDestination(airport);
                                setErrors(prev => ({ ...prev, destination: undefined }));
                            }}
                            placeholder="Ville ou aéroport"
                            error={!!errors.destination}
                        />
                        {errors.destination && (
                            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.destination}
                            </p>
                        )}
                    </div>

                    {/* Date de départ */}
                    <div>
                        <label htmlFor="departDate" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                            Date de départ
                        </label>
                        <div className={`relative rounded-lg border ${errors.departDate ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-purple-400'} transition`}>
                            <input
                                id="departDate"
                                type="date"
                                value={departDate}
                                onChange={(e) => setDepartDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full py-3 px-4 bg-transparent text-gray-900 font-medium focus:outline-none cursor-pointer"
                                aria-invalid={!!errors.departDate}
                                aria-describedby={errors.departDate ? "error-depart" : undefined}
                            />
                        </div>
                        {errors.departDate && (
                            <p id="error-depart" className="mt-1 text-xs text-red-600">{errors.departDate}</p>
                        )}
                    </div>

                    {/* Date de retour ou placeholder */}
                    <div>
                        {tripType === 'roundtrip' ? (
                            <>
                                <label htmlFor="returnDate" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                    Date de retour
                                </label>
                                <div className={`relative rounded-lg border ${errors.returnDate ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-purple-400'} transition`}>
                                    <input
                                        id="returnDate"
                                        type="date"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        min={minReturnDate}
                                        className="w-full py-3 px-4 bg-transparent text-gray-900 font-medium focus:outline-none cursor-pointer"
                                        aria-invalid={!!errors.returnDate}
                                        aria-describedby={errors.returnDate ? "error-return" : undefined}
                                    />
                                </div>
                                {errors.returnDate && (
                                    <p id="error-return" className="mt-1 text-xs text-red-600">{errors.returnDate}</p>
                                )}
                            </>
                        ) : (
                            <div className="h-full flex items-end">
                                <div className="w-full h-12 flex items-center justify-center bg-gray-50 rounded-lg text-gray-400 text-sm border border-dashed border-gray-300">
                                    Aller simple
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bouton recherche */}
                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg transition duration-300 transform hover:shadow-xl active:scale-[0.98]"
                >
                    <div className="flex items-center justify-center gap-2">
                        <Search className="w-5 h-5" />
                        Rechercher des vols
                    </div>
                </button>
            </form>
        </div>
    );
};

export default FlightSearchForm;