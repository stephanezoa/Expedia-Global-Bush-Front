// src/utils/flightUtils.js

/**
 * Utilitaires pour le traitement et le filtrage des données de vols
 */

/**
 * Calculer la durée entre deux dates
 * @param {string} departure - Date/heure de départ (ISO)
 * @param {string} arrival - Date/heure d'arrivée (ISO)
 * @returns {string} Durée formatée (ex: "6h 40min")
 */
export const calculateDuration = (departure, arrival) => {
    const start = new Date(departure);
    const end = new Date(arrival);
    const diffMs = end - start;

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (hours === 0) return `${minutes}min`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}min`;
};

/**
 * Formater l'heure d'un vol
 * @param {string} dateTime - Date/heure ISO
 * @returns {string} Heure formatée (ex: "22h25")
 */
export const formatFlightTime = (dateTime) => {
    const date = new Date(dateTime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}h${minutes}`;
};

/**
 * Formater la date complète
 * @param {string} dateTime - Date/heure ISO
 * @returns {string} Date formatée (ex: "mer. 7 janv.")
 */
export const formatFlightDate = (dateTime) => {
    const date = new Date(dateTime);
    const days = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
    const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayName} ${day} ${month}`;
};

/**
 * Compter le nombre d'escales
 * @param {Array} segments - Segments du vol
 * @returns {number} Nombre d'escales
 */
export const getStopsCount = (segments) => {
    if (!segments || segments.length === 0) return 0;
    return segments.length - 1;
};

/**
 * Obtenir le label des escales
 * @param {number} stops - Nombre d'escales
 * @returns {string} Label formaté
 */
export const getStopsLabel = (stops) => {
    if (stops === 0) return 'Vol direct';
    if (stops === 1) return '1 escale';
    return `${stops} escales`;
};

/**
 * Extraire les compagnies aériennes uniques d'une liste de vols
 * @param {Array} flights - Liste des vols
 * @returns {Array} Liste des compagnies avec compteur
 */
export const extractAirlines = (flights) => {
    const airlineMap = new Map();

    flights.forEach(flight => {
        flight.segments?.forEach(segment => {
            const airline = segment.airline;
            if (airline) {
                const key = airline.code;
                if (airlineMap.has(key)) {
                    airlineMap.get(key).count++;
                } else {
                    airlineMap.set(key, {
                        code: airline.code,
                        name: airline.name,
                        logo: airline.logo,
                        count: 1
                    });
                }
            }
        });
    });

    return Array.from(airlineMap.values()).sort((a, b) => b.count - a.count);
};

/**
 * Filtrer les vols selon les critères
 * @param {Array} flights - Liste des vols
 * @param {Object} filters - Filtres à appliquer
 * @returns {Array} Vols filtrés
 */
export const filterFlights = (flights, filters) => {
    if (!flights || flights.length === 0) return [];

    let filtered = [...flights];

    // Filtre par nombre d'escales
    if (filters.stops && filters.stops.length > 0) {
        filtered = filtered.filter(flight => {
            const stops = getStopsCount(flight.segments);
            return filters.stops.includes(stops);
        });
    }

    // Filtre par compagnies aériennes
    if (filters.airlines && filters.airlines.length > 0) {
        filtered = filtered.filter(flight => {
            return flight.segments?.some(segment =>
                filters.airlines.includes(segment.airline?.code)
            );
        });
    }

    // Filtre par prix maximum
    if (filters.maxPrice) {
        filtered = filtered.filter(flight =>
            flight.price?.amount <= filters.maxPrice
        );
    }

    // Filtre par prix minimum
    if (filters.minPrice) {
        filtered = filtered.filter(flight =>
            flight.price?.amount >= filters.minPrice
        );
    }

    return filtered;
};

/**
 * Trier les vols
 * @param {Array} flights - Liste des vols
 * @param {string} sortBy - Critère de tri
 * @returns {Array} Vols triés
 */
export const sortFlights = (flights, sortBy) => {
    if (!flights || flights.length === 0) return [];

    const sorted = [...flights];

    switch (sortBy) {
        case 'price_asc':
            return sorted.sort((a, b) => a.price.amount - b.price.amount);

        case 'price_desc':
            return sorted.sort((a, b) => b.price.amount - a.price.amount);

        case 'duration_asc':
            return sorted.sort((a, b) => {
                const durationA = parseDuration(a.totalDuration);
                const durationB = parseDuration(b.totalDuration);
                return durationA - durationB;
            });

        case 'duration_desc':
            return sorted.sort((a, b) => {
                const durationA = parseDuration(a.totalDuration);
                const durationB = parseDuration(b.totalDuration);
                return durationB - durationA;
            });

        case 'stops_asc':
            return sorted.sort((a, b) => a.stops - b.stops);

        case 'departure_asc':
            return sorted.sort((a, b) => {
                const timeA = new Date(a.segments[0]?.departure?.time);
                const timeB = new Date(b.segments[0]?.departure?.time);
                return timeA - timeB;
            });

        case 'recommended':
        default:
            // Tri recommandé : balance entre prix, durée et escales
            return sorted.sort((a, b) => {
                const scoreA = calculateRecommendationScore(a);
                const scoreB = calculateRecommendationScore(b);
                return scoreB - scoreA;
            });
    }
};

/**
 * Parser une durée au format "Xh Ymin" en minutes
 */
const parseDuration = (duration) => {
    if (!duration) return 0;
    const match = duration.match(/(\d+)h\s*(\d+)?min?/);
    if (!match) return 0;
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    return hours * 60 + minutes;
};

/**
 * Calculer un score de recommandation
 */
const calculateRecommendationScore = (flight) => {
    // Score basé sur : prix bas, durée courte, peu d'escales
    const priceScore = 1000 - flight.price.amount; // Moins cher = mieux
    const durationScore = 1000 - parseDuration(flight.totalDuration); // Plus court = mieux
    const stopsScore = (3 - flight.stops) * 200; // Moins d'escales = mieux

    return priceScore + durationScore + stopsScore;
};

/**
 * Obtenir le prix minimum d'une liste de vols
 */
export const getMinPrice = (flights) => {
    if (!flights || flights.length === 0) return 0;
    return Math.min(...flights.map(f => f.price?.amount || Infinity));
};

/**
 * Obtenir le prix maximum d'une liste de vols
 */
export const getMaxPrice = (flights) => {
    if (!flights || flights.length === 0) return 0;
    return Math.max(...flights.map(f => f.price?.amount || 0));
};

/**
 * Formater un prix
 */
export const formatPrice = (amount, currency = 'EUR') => {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};
