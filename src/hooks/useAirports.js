// src/hooks/useAirports.js
import { useState, useEffect } from 'react';
import { airportService } from '../services/airportService';

/**
 * Hook personnalisé pour gérer la recherche d'aéroports
 * - Précharge la liste complète au montage
 * - Fournit une fonction de recherche locale (instantanée)
 * - Gère l'état de chargement
 */
export const useAirports = () => {
    const [isReady, setIsReady] = useState(airportService.isLoaded);
    const [loading, setLoading] = useState(!airportService.isLoaded);

    // Charger la liste complète si ce n'est pas déjà fait
    useEffect(() => {
        let isActive = true;

        const load = async () => {
            if (!airportService.isLoaded) {
                await airportService.loadAllAirports();
                if (isActive) {
                    setIsReady(true);
                    setLoading(false);
                }
            } else {
                if (isActive) {
                    setIsReady(true);
                    setLoading(false);
                }
            }
        };

        load();

        return () => {
            isActive = false;
        };
    }, []);

    /**
     * Recherche locale dans le cache complet (instantanée)
     * @param {string} query - Terme de recherche (ville, nom, code IATA, pays)
     * @returns {Array} Liste filtrée d'aéroports (max 10)
     */
    const search = (query) => {
        if (!query || !query.trim() || !airportService.isLoaded) {
            return [];
        }

        const normalized = query.trim().toLowerCase();
        return airportService.allAirports
            .filter(airport => {
                const { name, city, iataCode, country } = airport;
                console.log(airport)
                return (
                    (name && name.toLowerCase().includes(normalized)) ||
                    (city && city.toLowerCase().includes(normalized)) ||
                    (iataCode && iataCode.toLowerCase().includes(normalized)) ||
                    (country && country.toLowerCase().includes(normalized))
                );
            })
            .slice(0, 10);
    };

    return {
        isReady,
        loading,
        search
    };
};