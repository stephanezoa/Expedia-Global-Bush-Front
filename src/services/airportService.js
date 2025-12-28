// src/services/airportService.js
import api from './api';

// Configuration de l'API locale
const API_CONFIG = {
  // BASE_URL est géré par l'instance api importée (axios)
  ENDPOINTS: {
    AIRPORTS: '/api/v1/airports',
    AIRLINES: '/api/v1/airlines',
    SEARCH_FLIGHTS: '/api/v1/flights/search'
  }
};

/**
 * Utilitaire : normaliser une chaîne pour la recherche ou le cache
 */
const normalizeKey = (str) => {
  if (typeof str !== 'string') return '';
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
};

/**
 * Service pour gérer les opérations liées aux aéroports et compagnies
 * Utilise un cache complet en mémoire pour les aéroports (optimisation majeure)
 */
class AirportService {
  constructor() {
    // Cache de requêtes (ex: compagnies, aéroports populaires)
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
    this.maxCacheSize = 50; // Limite raisonnable pour éviter les fuites

    // Cache complet des aéroports (chargé une fois)
    this.allAirports = [];
    this.isLoaded = false;
    this.loadingPromise = null;
  }

  /**
   * Charger la liste complète des aéroports pour le cache local
   * Normalise les données pour correspondre au format attendu par le frontend
   */
  async loadAllAirports() {
    if (this.isLoaded) return this.allAirports;
    if (this.loadingPromise) return this.loadingPromise;

    this.loadingPromise = (async () => {
      try {
        const response = await api.get(API_CONFIG.ENDPOINTS.AIRPORTS);
        const rawData = Array.isArray(response.data) ? response.data : [];

        // Normaliser les données de l'API vers notre format interne
        // API: AirportCode, AirportName, City, Country
        // App: iataCode, name, city, country
        this.allAirports = rawData.map(airport => ({
          iataCode: airport.AirportCode,
          name: airport.AirportName,
          city: airport.City,
          country: airport.Country,
          // Conserver les autres props si nécessaire
          latitude: airport.Latitude,
          longitude: airport.Longitude
        }));

        this.isLoaded = true;
        return this.allAirports;
      } catch (error) {
        console.error('Erreur lors du chargement initial des aéroports:', error);
        this.allAirports = [];
        console.log(this.allAirports);
        return [];
      } finally {
        this.loadingPromise = null;
      }
    })();

    return this.loadingPromise;
  }

  /**
   * Recherche locale dans le cache complet (à utiliser après loadAllAirports)
   */
  async searchAirports(query) {
    // Assurer que les données sont chargées
    if (!this.isLoaded) {
      await this.loadAllAirports();
    }

    if (!query || this.allAirports.length === 0) {
      return [];
    }

    const normalizedQuery = normalizeKey(query);
    if (!normalizedQuery) return [];

    return this.allAirports
      .filter(airport => {
        const { name, city, iataCode, country } = airport;
        return (
          (name && normalizeKey(name).includes(normalizedQuery)) ||
          (city && normalizeKey(city).includes(normalizedQuery)) ||
          (iataCode && iataCode.toLowerCase().includes(normalizedQuery)) ||
          (country && normalizeKey(country).includes(normalizedQuery))
        );
      })
      .slice(0, 10);
  }

  /**
   * Alias pour searchAirports pour compatibilité avec le composant existant
   * Le debouncing est géré par le cache local instantané, mais on garde la signature async
   */
  async searchWithDebounce(query) {
    return this.searchAirports(query);
  }

  /**
   * Récupérer un aéroport par son code IATA
   */
  async getAirportByCode(iataCode) {
    if (!iataCode || iataCode.length !== 3) {
      throw new Error('Code IATA invalide');
    }

    // Chercher d'abord dans le cache local si chargé
    if (this.isLoaded) {
      return this.allAirports.find(a => a.iataCode === iataCode.toUpperCase());
    }

    try {
      const response = await api.get(`${API_CONFIG.ENDPOINTS.AIRPORTS}/${iataCode.toUpperCase()}`);
      // Normaliser la réponse
      const data = response.data;
      return {
        iataCode: data.AirportCode,
        name: data.AirportName,
        city: data.City,
        country: data.Country
      };
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'aéroport:', error);
      throw error;
    }
  }

  /**
   * Récupérer les aéroports populaires
   */
  async getPopularAirports() {
    // Si on a tout chargé, on peut retourner une sélection statique ou aléatoire
    // Sinon on appelle l'API
    const cacheKey = 'popular_airports';
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    try {
      // Si endpoint existe
      // const response = await api.get('/api/v1/airports/popular');

      // Fallback: retourner les premiers du cache chargé ou vide
      if (!this.isLoaded) await this.loadAllAirports();
      const airports = this.allAirports.slice(0, 5);

      this.setCache(cacheKey, airports);
      return airports;
    } catch (error) {
      console.error('Erreur lors de la récupération des aéroports populaires:', error);
      return [];
    }
  }

  /**
   * Rechercher des vols
   */
  async searchFlights(searchParams) {
    try {
      const response = await api.post(API_CONFIG.ENDPOINTS.SEARCH_FLIGHTS, searchParams);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche de vols:', error);
      throw error;
    }
  }

  /**
   * Formater l'affichage d'un aéroport
   */
  formatAirportDisplay(airport) {
    if (!airport) return '';
    const { city, iataCode, name, country } = airport;

    // Support des clés API directes si pas normalisées
    const displayCity = city || airport.City;
    const displayCode = iataCode || airport.AirportCode;
    const displayCountry = country || airport.Country;
    const displayName = name || airport.AirportName;

    if (displayCity && displayCode) {
      return `${displayCity} (${displayCode})${displayCountry ? ' - ' + displayCountry : ''}`;
    }
    if (displayName && displayCode) {
      return `${displayName} (${displayCode})${displayCountry ? ' - ' + displayCountry : ''}`;
    }
    return displayName || displayCode || '';
  }

  // --- Gestion du cache ---

  getFromCache(key) {
    const normalizedKey = normalizeKey(key);
    const cached = this.cache.get(normalizedKey);

    if (!cached) return null;

    if (Date.now() - cached.timestamp > this.cacheTimeout) {
      this.cache.delete(normalizedKey);
      return null;
    }

    return cached.data;
  }

  setCache(key, data) {
    const normalizedKey = normalizeKey(key);

    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(normalizedKey, {
      data,
      timestamp: Date.now()
    });
  }

  clearCache() {
    this.cache.clear();
  }
}

export const airportService = new AirportService();
export default airportService;
