// src/services/flightCacheService.js

/**
 * Service de gestion du cache des résultats de recherche de vols
 * Utilise localStorage avec expiration automatique
 */

const CACHE_PREFIX = 'flight_search_';
const DEFAULT_TTL = 30 * 60 * 1000; // 30 minutes en millisecondes

class FlightCacheService {
    /**
     * Générer une clé de cache unique basée sur les paramètres de recherche
     */
    generateCacheKey(searchParams) {
        const {
            departure,
            destination,
            departDate,
            returnDate,
            tripType,
            adults,
            children,
            infants,
            cabinClass
        } = searchParams;

        const key = `${departure?.iataCode || ''}_${destination?.iataCode || ''}_${departDate}_${returnDate || ''}_${tripType}_${adults}_${children}_${infants}_${cabinClass}`;
        return `${CACHE_PREFIX}${key}`;
    }

    /**
     * Sauvegarder les résultats de recherche dans le cache
     * @param {Object} searchParams - Paramètres de recherche
     * @param {Object} results - Résultats de l'API
     * @param {number} ttl - Durée de vie en millisecondes (optionnel)
     */
    saveSearchResults(searchParams, results, ttl = DEFAULT_TTL) {
        try {
            const cacheKey = this.generateCacheKey(searchParams);
            const cacheData = {
                searchParams,
                results,
                timestamp: Date.now(),
                expiresAt: Date.now() + ttl
            };

            localStorage.setItem(cacheKey, JSON.stringify(cacheData));

            // Sauvegarder aussi la liste des clés de cache pour le nettoyage
            this.addToCacheIndex(cacheKey);

            console.log(`✅ Résultats sauvegardés en cache (expire dans ${ttl / 1000 / 60} min)`);
            return true;
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du cache:', error);
            // Si quota dépassé, nettoyer le cache ancien
            if (error.name === 'QuotaExceededError') {
                this.clearExpiredCache();
                // Réessayer
                try {
                    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
                    return true;
                } catch (retryError) {
                    console.error('Impossible de sauvegarder même après nettoyage:', retryError);
                }
            }
            return false;
        }
    }

    /**
     * Récupérer les résultats de recherche du cache
     * @param {Object} searchParams - Paramètres de recherche
     * @returns {Object|null} Résultats ou null si expiré/inexistant
     */
    getSearchResults(searchParams) {
        try {
            const cacheKey = this.generateCacheKey(searchParams);
            const cachedData = localStorage.getItem(cacheKey);

            if (!cachedData) {
                console.log('❌ Aucun résultat en cache');
                return null;
            }

            const parsed = JSON.parse(cachedData);

            // Vérifier l'expiration
            if (Date.now() > parsed.expiresAt) {
                console.log('⏰ Cache expiré, suppression...');
                localStorage.removeItem(cacheKey);
                this.removeFromCacheIndex(cacheKey);
                return null;
            }

            const remainingMinutes = Math.floor((parsed.expiresAt - Date.now()) / 1000 / 60);
            console.log(`✅ Résultats récupérés du cache (expire dans ${remainingMinutes} min)`);

            return parsed.results;
        } catch (error) {
            console.error('Erreur lors de la lecture du cache:', error);
            return null;
        }
    }

    /**
     * Ajouter une clé à l'index du cache
     */
    addToCacheIndex(cacheKey) {
        try {
            const index = this.getCacheIndex();
            if (!index.includes(cacheKey)) {
                index.push(cacheKey);
                localStorage.setItem(`${CACHE_PREFIX}index`, JSON.stringify(index));
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'index:', error);
        }
    }

    /**
     * Retirer une clé de l'index du cache
     */
    removeFromCacheIndex(cacheKey) {
        try {
            const index = this.getCacheIndex();
            const filtered = index.filter(key => key !== cacheKey);
            localStorage.setItem(`${CACHE_PREFIX}index`, JSON.stringify(filtered));
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'index:', error);
        }
    }

    /**
     * Récupérer l'index des clés de cache
     */
    getCacheIndex() {
        try {
            const index = localStorage.getItem(`${CACHE_PREFIX}index`);
            return index ? JSON.parse(index) : [];
        } catch (error) {
            return [];
        }
    }

    /**
     * Nettoyer tous les caches expirés
     */
    clearExpiredCache() {
        try {
            const index = this.getCacheIndex();
            let cleanedCount = 0;

            index.forEach(cacheKey => {
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    try {
                        const parsed = JSON.parse(cachedData);
                        if (Date.now() > parsed.expiresAt) {
                            localStorage.removeItem(cacheKey);
                            cleanedCount++;
                        }
                    } catch (e) {
                        // Données corrompues, supprimer
                        localStorage.removeItem(cacheKey);
                        cleanedCount++;
                    }
                }
            });

            // Mettre à jour l'index
            const validKeys = index.filter(key => localStorage.getItem(key) !== null);
            localStorage.setItem(`${CACHE_PREFIX}index`, JSON.stringify(validKeys));

            console.log(`🧹 ${cleanedCount} cache(s) expiré(s) nettoyé(s)`);
            return cleanedCount;
        } catch (error) {
            console.error('Erreur lors du nettoyage du cache:', error);
            return 0;
        }
    }

    /**
     * Invalider manuellement un cache spécifique
     */
    invalidateCache(searchParams) {
        try {
            const cacheKey = this.generateCacheKey(searchParams);
            localStorage.removeItem(cacheKey);
            this.removeFromCacheIndex(cacheKey);
            console.log('🗑️ Cache invalidé manuellement');
            return true;
        } catch (error) {
            console.error('Erreur lors de l\'invalidation du cache:', error);
            return false;
        }
    }

    /**
     * Nettoyer tout le cache des vols
     */
    clearAllCache() {
        try {
            const index = this.getCacheIndex();
            index.forEach(key => localStorage.removeItem(key));
            localStorage.removeItem(`${CACHE_PREFIX}index`);
            console.log('🗑️ Tout le cache des vols a été nettoyé');
            return true;
        } catch (error) {
            console.error('Erreur lors du nettoyage complet:', error);
            return false;
        }
    }
}

// Export singleton
export const flightCacheService = new FlightCacheService();
export default flightCacheService;
