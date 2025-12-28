// src/components/AirportAutocomplete.js
import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useAirports } from '../hooks/useAirports';

const AirportAutocomplete = ({
    label,
    value,
    onChange,
    placeholder = "Ville ou aéroport",
    error = false,
    className = ""
}) => {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);
    const wrapperRef = useRef(null);

    const { loading, search, isReady } = useAirports();

    // Synchroniser l’affichage avec la valeur sélectionnée
    useEffect(() => {
        if (value && value.city && value.iataCode) {
            setInputValue(`${value.city} (${value.iataCode})`);
        } else {
            setInputValue('');
        }
    }, [value]);

    // Gestion du clic extérieur
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        setIsOpen(true);

        if (val.trim() === '') {
            setResults([]);
            return;
        }

        if (isReady) {
            setResults(search(val));
        }
    };

    const handleSelect = (airport) => {
        onChange(airport);
        setIsOpen(false);
    };

    const handleClear = () => {
        onChange(null);
        setInputValue('');
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={wrapperRef}>
            {label && (
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {label}
                </label>
            )}

            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Search className="w-4 h-4" />
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    // 🔑 CLÉ : styles garantis lisibles
                    className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition
            ${error
                            ? 'border-red-300 bg-red-50 text-gray-900 placeholder-red-300'
                            : 'border-gray-300 bg-white text-gray-900 placeholder-gray-400'
                        }`}
                    autoComplete="off"
                    aria-invalid={error}
                />
                {value && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        aria-label="Effacer la sélection"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Résultats */}
            {isOpen && !loading && results.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {results.map((airport) => (
                        <li
                            key={airport.iataCode}
                            onClick={() => handleSelect(airport)}
                            className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-900 text-sm"
                        >
                            <div className="font-medium">{airport.city} ({airport.iataCode})</div>
                            <div className="text-gray-500 text-xs">{airport.name}{airport.country ? ` • ${airport.country}` : ''}</div>
                        </li>
                    ))}
                </ul>
            )}

            {isOpen && !loading && results.length === 0 && inputValue.trim() && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-2.5 text-gray-500 text-sm">
                    Aucun aéroport trouvé
                </div>
            )}
        </div>
    );
};

export default AirportAutocomplete;