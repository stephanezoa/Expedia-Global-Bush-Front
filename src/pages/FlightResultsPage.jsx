import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Loader2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlightResultCard from '../components/FlightResultCard';
import FlightDetailsModal from '../components/FlightDetailsModal';
import FlightFilters from '../components/FlightFilters';
import { flightCacheService } from '../services/flightCacheService';
import { airportService } from '../services/airportService';
import { extractAirlines, filterFlights, sortFlights, getMinPrice, getMaxPrice } from '../utils/flightUtils';

/**
 * Page des résultats de recherche de vols
 * Avec cache, filtres et modal de détails
 */
const FlightResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // États
    const [loading, setLoading] = useState(true);
    const [allFlights, setAllFlights] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [searchParams, setSearchParams] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [sortBy, setSortBy] = useState('recommended');
    const [filters, setFilters] = useState({
        stops: [],
        airlines: []
    });

    // Charger les résultats au montage
    useEffect(() => {
        loadFlightResults();
    }, [location]);

    // Appliquer les filtres et le tri
    useEffect(() => {
        if (allFlights.length > 0) {
            let results = filterFlights(allFlights, filters);
            results = sortFlights(results, sortBy);
            setFilteredFlights(results);
        }
    }, [allFlights, filters, sortBy]);

    /**
     * Charger les résultats de recherche
     */
    const loadFlightResults = async () => {
        setLoading(true);

        try {
            // Récupérer les paramètres de recherche depuis location.state
            const params = location.state?.searchParams;

            if (!params) {
                console.error('Aucun paramètre de recherche trouvé');
                navigate('/flights');
                return;
            }

            setSearchParams(params);

            // Essayer de récupérer du cache d'abord
            const cachedResults = flightCacheService.getSearchResults(params);

            if (cachedResults) {
                console.log('✅ Résultats chargés depuis le cache');
                setAllFlights(cachedResults.results || []);
                setLoading(false);
                return;
            }

            // Sinon, appeler l'API
            console.log('🔄 Appel de l\'API de recherche...');
            const response = await airportService.searchFlights(params);

            if (response && response.results) {
                setAllFlights(response.results);

                // Sauvegarder dans le cache (30 minutes)
                flightCacheService.saveSearchResults(params, response);
            } else {
                setAllFlights([]);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des résultats:', error);
            setAllFlights([]);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Ouvrir le modal de détails
     */
    const handleViewDetails = (flight) => {
        setSelectedFlight(flight);
        setShowModal(true);
    };

    // Extraire les compagnies aériennes pour les filtres
    const airlines = extractAirlines(allFlights);
    const minPrice = getMinPrice(filteredFlights);
    const maxPrice = getMaxPrice(filteredFlights);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Link to="/" className="hover:text-blue-600">Choisir un vol aller</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link to="/" className="hover:text-blue-600">Choisir un vol retour</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-gray-900 font-medium">Vérifier votre voyage</span>
                </nav>

                {loading ? (
                    // Loading State
                    <div className="flex items-center justify-center py-20">
                        <div className="text-center">
                            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                            <p className="text-gray-600">Recherche des meilleurs vols...</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Sidebar: Filters */}
                        <aside className="lg:col-span-1">
                            <FlightFilters
                                flights={allFlights}
                                filters={filters}
                                onFiltersChange={setFilters}
                                airlines={airlines}
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                            />
                        </aside>

                        {/* Main Content: Results */}
                        <div className="lg:col-span-3 space-y-6">
                            {/* Date Selector (optional - can be enhanced) */}
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                                    {generateDateOptions().map((date, index) => (
                                        <button
                                            key={index}
                                            className={`flex-shrink-0 px-4 py-3 rounded-lg border transition ${index === 3
                                                    ? 'border-green-500 bg-green-50'
                                                    : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            <div className="text-xs text-gray-600">{date.day}</div>
                                            <div className="text-lg font-bold text-gray-900">{date.price}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort Dropdown */}
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-900">
                                    Vols aller-retour recommandés
                                </h2>

                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="recommended">Recommandé</option>
                                        <option value="price_asc">Prix croissant</option>
                                        <option value="price_desc">Prix décroissant</option>
                                        <option value="duration_asc">Durée croissante</option>
                                        <option value="stops_asc">Moins d'escales</option>
                                        <option value="departure_asc">Départ le plus tôt</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* Results List */}
                            {filteredFlights.length === 0 ? (
                                <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                                    <p className="text-gray-600 text-lg">
                                        Aucun vol ne correspond à vos critères.
                                    </p>
                                    <button
                                        onClick={() => setFilters({ stops: [], airlines: [] })}
                                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Réinitialiser les filtres
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {filteredFlights.map((flight, index) => (
                                        <FlightResultCard
                                            key={flight.id || index}
                                            flight={flight}
                                            onViewDetails={handleViewDetails}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Results Count */}
                            {filteredFlights.length > 0 && (
                                <div className="text-center text-sm text-gray-600 py-4">
                                    Affichage de {filteredFlights.length} résultat{filteredFlights.length > 1 ? 's' : ''} sur {allFlights.length}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>

            <Footer />

            {/* Flight Details Modal */}
            <FlightDetailsModal
                flight={selectedFlight}
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
};

// Helper: Generate date options for the selector
const generateDateOptions = () => {
    const days = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
    const options = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        options.push({
            day: `${days[date.getDay()]} ${date.getDate()} ${date.toLocaleDateString('fr-FR', { month: 'short' })}.`,
            price: `${Math.floor(Math.random() * 500) + 500} €`
        });
    }

    return options;
};

export default FlightResultsPage;
